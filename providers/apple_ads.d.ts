import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Accept one or more daily budget recommendations. Apple Ads raises each campaign's daily budget and moves the recommendation to the terminal APPLIED state. */
    "apple_ads.apply_daily_budget_recommendations": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Identifier of the promoted object this request applies to: the app Adam ID when promotedObjectType is APPSTORE_APP, or the brand identifier when it is BUSINESS_BRAND. */
        promotedObjectId: number | string;
        /** Type of the promoted object. */
        promotedObjectType: "APPSTORE_APP" | "BUSINESS_BRAND";
        /**
         * Daily budget recommendations to apply. Apple Ads requires every entry to belong to the same promoted object.
         * @minItems 1
         */
        recommendations: Array<{
          /**
           * Identifier of the recommendation to act on, taken from the query response.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * Optional reference to a prior history record.
           * @minLength 1
           * @pattern \S
           */
          historyId?: string;
          /** Daily budget to apply instead of the suggested amount. Omit it to apply suggestedDailyBudgetAmount unchanged. */
          appliedDailyBudget?: {
            /**
             * Monetary amount as a decimal string without leading zeros, for example "10.00".
             * @minLength 1
             */
            amount: string;
            /**
             * ISO 4217 currency code. It must match the currency of the ad account.
             * @minLength 1
             */
            currency?: string;
          };
        }>;
      };
      output: {
        /** History records Apple Ads created for the acted-on recommendations. */
        histories: Array<{
          /** Identifier of the original recommendation. */
          recommendationId?: string | null;
          /** Terminal state reached by the recommendation, either APPLIED or DISMISSED. */
          state?: "AVAILABLE" | "APPLIED" | "DISMISSED" | "DELETE" | null;
          /** The daily budget actually applied, or null when the recommendation was dismissed. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          appliedDailyBudgetAmount?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** The daily budget originally suggested. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          suggestedDailyBudgetAmount?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Rank of the recommendation when the action was taken. */
          rank?: number | null;
          /** Impressions the original recommendation projected. */
          expectedImpressions?: number | null;
          /** Lower bound of the projected impressions confidence interval. */
          expectedImpressionsLow?: number | null;
          /** Upper bound of the projected impressions confidence interval. */
          expectedImpressionsHigh?: number | null;
          /** Installs the original recommendation projected. */
          expectedInstalls?: number | null;
          /** Lower bound of the projected installs confidence interval. */
          expectedInstallsLow?: number | null;
          /** Upper bound of the projected installs confidence interval. */
          expectedInstallsHigh?: number | null;
          /** Spend the original recommendation projected. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          expectedSpend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Lower bound of the projected spend confidence interval. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          expectedSpendLow?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Upper bound of the projected spend confidence interval. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          expectedSpendHigh?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Taps the original recommendation projected. */
          expectedTaps?: number | null;
          /** Lower bound of the projected taps confidence interval. */
          expectedTapsLow?: number | null;
          /** Upper bound of the projected taps confidence interval. */
          expectedTapsHigh?: number | null;
          /** Cost per acquisition the original recommendation projected. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          expectedCpa?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Lower bound of the projected cost per acquisition confidence interval. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          expectedCpaLow?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Upper bound of the projected cost per acquisition confidence interval. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          expectedCpaHigh?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** When the apply or dismiss action was taken. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          appliedTime?: string | null;
          /** Optimization area of the recommendation. */
          recommendationType?: "KEYWORD" | "SKEYWORD" | "DAILYCAP" | "SDAILYCAP" | "TCPA" | "STCPA" | "BID" | "SBID" | null;
          /** Identifier of the promoted object: the app Adam ID for APPSTORE_APP, or the brand identifier for BUSINESS_BRAND. */
          promotedObjectId?: string | null;
          /** Type of the promoted object. */
          promotedObjectType?: "APPSTORE_APP" | "BUSINESS_BRAND" | null;
          /** Campaign the recommendation applies to. */
          campaignId?: number | null;
          /** Display name of that campaign. */
          campaignName?: string | null;
          /** Operational status of the recommendation record itself, independent of state. */
          status?: "ENABLED" | "DISABLED" | "DELETED" | null;
          /** Historical install count. */
          installs?: number | null;
          /** Historical spend. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          spend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Historical average cost per acquisition. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          averageCPA?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Historical average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          averageCPT?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Historical impression count. */
          impression?: number | null;
          /** Historical tap count. */
          taps?: number | null;
          /** Historical tap-through rate. */
          ttr?: number | null;
          /** When the recommendation was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the record was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** When the recommendation expires. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          expirationTime?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Accept one or more target CPA recommendations. Apple Ads changes the target the campaign's Maximize Conversions bidding optimizes toward and moves each recommendation to the terminal APPLIED state. */
    "apple_ads.apply_target_cpa_recommendations": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Identifier of the promoted object this request applies to: the app Adam ID when promotedObjectType is APPSTORE_APP, or the brand identifier when it is BUSINESS_BRAND. */
        promotedObjectId: number | string;
        /** Type of the promoted object. */
        promotedObjectType: "APPSTORE_APP" | "BUSINESS_BRAND";
        /**
         * Target CPA recommendations to apply. Apple Ads requires every entry to belong to the same promoted object.
         * @minItems 1
         */
        recommendations: Array<{
          /**
           * Identifier of the recommendation to act on, taken from the query response.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * Optional reference to a prior history record.
           * @minLength 1
           * @pattern \S
           */
          historyId?: string;
          /** Target CPA to apply instead of the recommended value. Omit it to apply recommendedTargetCPA unchanged. */
          appliedTargetCPA?: {
            /**
             * Monetary amount as a decimal string without leading zeros, for example "10.00".
             * @minLength 1
             */
            amount: string;
            /**
             * ISO 4217 currency code. It must match the currency of the ad account.
             * @minLength 1
             */
            currency?: string;
          };
        }>;
      };
      output: {
        /** History records Apple Ads created for the acted-on recommendations. */
        histories: Array<{
          /** Identifier of the original recommendation. */
          recommendationId?: string | null;
          /** Terminal state reached by the recommendation, either APPLIED or DISMISSED. */
          state?: "AVAILABLE" | "APPLIED" | "DISMISSED" | "DELETE" | null;
          /** The target CPA actually applied, or null when it was dismissed. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          appliedTargetCPA?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** The target CPA originally recommended. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          recommendedTargetCPA?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Rank of the recommendation when the action was taken. */
          rank?: number | null;
          /** Installs the original recommendation projected. */
          expectedInstalls?: number | null;
          /** Spend the original recommendation projected. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          expectedSpend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Taps the original recommendation projected. */
          expectedTaps?: number | null;
          /** Cost per acquisition the original recommendation projected. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          expectedCPA?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** When the apply or dismiss action was taken. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          appliedTime?: string | null;
          /** Optimization area of the recommendation. */
          recommendationType?: "KEYWORD" | "SKEYWORD" | "DAILYCAP" | "SDAILYCAP" | "TCPA" | "STCPA" | "BID" | "SBID" | null;
          /** Identifier of the promoted object: the app Adam ID for APPSTORE_APP, or the brand identifier for BUSINESS_BRAND. */
          promotedObjectId?: string | null;
          /** Type of the promoted object. */
          promotedObjectType?: "APPSTORE_APP" | "BUSINESS_BRAND" | null;
          /** Campaign the recommendation applies to. */
          campaignId?: number | null;
          /** Display name of that campaign. */
          campaignName?: string | null;
          /** Operational status of the recommendation record itself, independent of state. */
          status?: "ENABLED" | "DISABLED" | "DELETED" | null;
          /** Historical install count. */
          installs?: number | null;
          /** Historical spend. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          spend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Historical average cost per acquisition. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          averageCPA?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Historical average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          averageCPT?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Historical impression count. */
          impression?: number | null;
          /** Historical tap count. */
          taps?: number | null;
          /** Historical tap-through rate. */
          ttr?: number | null;
          /** When the recommendation was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the record was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** When the recommendation expires. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          expirationTime?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Create many keywords in one request, spanning as many ad groups as you like. The whole batch counts as a single call against the rate limit, which makes it the way to seed a keyword list. */
    "apple_ads.bulk_create_keywords": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /**
         * Keywords to create. Each entry is correlated with its result by its zero-based index in this array, so you never have to invent an identifier for it.
         * @minItems 1
         */
        keywords: Array<{
          /** Ad group the keyword belongs to. */
          adGroupId: number | string;
          /**
           * The search term to target. It cannot be changed after creation: to change it, delete the keyword and create a new one. For the CATEGORY match type this must be a Maps business category identifier such as dining.restaurant.
           * @minLength 1
           * @pattern \S
           */
          text: string;
          /** How the keyword matches user search queries. EXACT and BROAD apply to App Store campaigns using the Search results placement; PHRASE and CATEGORY apply to Apple Maps campaigns. */
          matchType?: "EXACT" | "BROAD" | "PHRASE" | "CATEGORY";
          /** Per-keyword bid that overrides the ad group's bid strategy bid. Maximize Conversions campaigns do not use it. */
          bid?: {
            /**
             * Monetary amount as a decimal string without leading zeros, for example "10.00".
             * @minLength 1
             */
            amount: string;
            /**
             * ISO 4217 currency code. It must match the currency of the ad account.
             * @minLength 1
             */
            currency?: string;
          };
          /** Whether the keyword is eligible to serve. A paused keyword stays in the ad group but does not enter auctions. */
          status?: "ENABLED" | "PAUSED";
        }>;
        /** Whether Apple Ads keeps the items that succeeded when other items in the same batch fail. When omitted or false, a single item failure rejects the whole batch. */
        allowPartialSuccess?: boolean;
      };
      output: {
        /** One result per keyword you passed in, in the same order. */
        results: Array<{
          /** Zero-based index of the keyword in the request array this result belongs to. */
          correlationId: number;
          /** Operation Apple Ads performed for this item. */
          operation?: "CREATE" | "UPDATE" | null;
          /** Whether this individual item succeeded. */
          success?: boolean | null;
          /** A keyword, the targeting unit that makes an ad group eligible for the auction when a user search matches it. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          keyword?: {
            /** System-assigned identifier for the keyword. */
            id: number;
            /** Ad account the keyword belongs to. */
            adAccountId?: number | null;
            /** Campaign that owns the keyword's ad group. Informational only; keywords are never attached to a campaign directly. */
            campaignId?: number | null;
            /** Ad group the keyword belongs to. */
            adGroupId?: number | null;
            /** Advertiser-given keyword text. */
            text?: string | null;
            /** How the keyword matches user search queries. EXACT and BROAD apply to App Store campaigns using the Search results placement; PHRASE and CATEGORY apply to Apple Maps campaigns. */
            matchType?: "EXACT" | "BROAD" | "PHRASE" | "CATEGORY" | null;
            /** Per-keyword bid override, or null when the keyword follows the ad group's bid strategy. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            bid?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Advertiser intent for the keyword to serve. */
            status?: "ENABLED" | "PAUSED" | null;
            /** Rolled-up delivery state combining the keyword, its ad group and its campaign. */
            displayStatus?: "RUNNING" | "PAUSED" | "DELETED" | "AD_GROUP_ON_HOLD" | "CAMPAIGN_ON_HOLD" | null;
            /** When the keyword was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            creationTime?: string | null;
            /** When the keyword was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            modificationTime?: string | null;
            /** Whether the keyword has been soft-deleted. */
            deleted?: boolean | null;
            [key: string]: unknown;
          } | null;
          /** Why this item failed, or null when it succeeded. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          error?: {
            /** Machine-readable reason the item was rejected. */
            code?: string | null;
            /** Human-readable summary of the failure. */
            message?: string | null;
            /** Field-level violations behind this failure. */
            details?: Array<{
              /** Machine-readable code for this violation. */
              code?: string | null;
              /** Human-readable description of this violation. */
              message?: string | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Create many negative keywords in one request, mixing campaign-level and ad-group-level exclusions freely. The whole batch counts as a single call against the rate limit. Each outcome carries the zero-based index of the payload it belongs to. */
    "apple_ads.bulk_create_negative_keywords": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /**
         * Negative keywords to create. Every outcome reports the zero-based index of its payload in this array.
         * @minItems 1
         */
        negativeKeywords: Array<{
          /** Campaign to exclude the term across, for a campaign-level negative keyword. */
          campaignId?: number | string;
          /** Ad group to exclude the term within, for an ad-group-level negative keyword. */
          adGroupId?: number | string;
          /**
           * The term to exclude. It cannot be changed later.
           * @minLength 1
           * @pattern \S
           */
          text: string;
          /** How the excluded term is matched against user searches. EXACT and BROAD apply to App Store negatives, PHRASE to Apple Maps negatives, and CATEGORY is not supported for negative keywords. Apple Ads defaults to BROAD. It cannot be changed later. */
          matchType?: "EXACT" | "BROAD" | "PHRASE";
          /** Whether the exclusion is active. Apple Ads defaults to ENABLED. */
          status?: "ENABLED" | "PAUSED";
        }>;
        /** Whether Apple Ads should keep the items that succeed when other items fail. It defaults to false, which rejects the whole batch as soon as one item fails. */
        allowPartialSuccess?: boolean;
      };
      output: {
        /** One outcome per item of the request, in the order the items were sent. */
        results: Array<{
          /** Zero-based index of the item in the request array this outcome belongs to. */
          correlationId: number;
          /** Operation Apple Ads performed for this item. */
          operation?: "CREATE" | "UPDATE" | null;
          /** Whether this individual item succeeded. */
          success?: boolean | null;
          /** A negative keyword: a search term exclusion scoped either to a whole campaign or to a single ad group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          negativeKeyword?: {
            /** System-assigned identifier for the negative keyword. */
            id: number;
            /** Ad account the negative keyword belongs to. */
            adAccountId?: number | null;
            /** Campaign the negative keyword belongs to. */
            campaignId?: number | null;
            /** Ad group the negative keyword is scoped to. Campaign-level exclusions have no ad group: Apple Ads returns null for them, or leaves the field out entirely. */
            adGroupId?: number | null;
            /** The advertiser-given term to exclude. */
            text?: string | null;
            /** How the excluded term is matched against user searches. */
            matchType?: "EXACT" | "BROAD" | "PHRASE" | "CATEGORY" | null;
            /** Whether the exclusion is active or paused. */
            status?: "ENABLED" | "PAUSED" | null;
            /** When the negative keyword was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            creationTime?: string | null;
            /** When the negative keyword was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            modificationTime?: string | null;
            /** Whether the negative keyword has been soft-deleted. */
            deleted?: boolean | null;
            [key: string]: unknown;
          } | null;
          /** Why this item failed, or null when it succeeded. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          error?: {
            /** Machine-readable reason Apple Ads rejected this item. */
            code?: string | null;
            /** Human-readable summary of what went wrong with this item. */
            message?: string | null;
            /** Field-level violations behind this failure. */
            details?: Array<{
              /** Machine-readable code for this violation. */
              code?: string | null;
              /** Human-readable description of this violation. */
              message?: string | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Change the bid or the status of many keywords in one request, for example to reprice a set of high performers or pause a set of weak ones. Apple Ads accepts nothing else on an update. */
    "apple_ads.bulk_update_keywords": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /**
         * Keyword changes to apply. Each entry is correlated with its result by its zero-based index in this array, so you never have to invent an identifier for it.
         * @minItems 1
         */
        keywords: Array<{
          /** Identifier of the keyword to update. */
          keywordId: number | string;
          /** Per-keyword bid that overrides the ad group's bid strategy bid. Maximize Conversions campaigns do not use it. */
          bid?: {
            /**
             * Monetary amount as a decimal string without leading zeros, for example "10.00".
             * @minLength 1
             */
            amount: string;
            /**
             * ISO 4217 currency code. It must match the currency of the ad account.
             * @minLength 1
             */
            currency?: string;
          };
          /** Whether the keyword is eligible to serve. A paused keyword stays in the ad group but does not enter auctions. */
          status?: "ENABLED" | "PAUSED";
        }>;
        /** Whether Apple Ads keeps the items that succeeded when other items in the same batch fail. When omitted or false, a single item failure rejects the whole batch. */
        allowPartialSuccess?: boolean;
      };
      output: {
        /** One result per keyword you passed in, in the same order. */
        results: Array<{
          /** Zero-based index of the keyword in the request array this result belongs to. */
          correlationId: number;
          /** Operation Apple Ads performed for this item. */
          operation?: "CREATE" | "UPDATE" | null;
          /** Whether this individual item succeeded. */
          success?: boolean | null;
          /** A keyword, the targeting unit that makes an ad group eligible for the auction when a user search matches it. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          keyword?: {
            /** System-assigned identifier for the keyword. */
            id: number;
            /** Ad account the keyword belongs to. */
            adAccountId?: number | null;
            /** Campaign that owns the keyword's ad group. Informational only; keywords are never attached to a campaign directly. */
            campaignId?: number | null;
            /** Ad group the keyword belongs to. */
            adGroupId?: number | null;
            /** Advertiser-given keyword text. */
            text?: string | null;
            /** How the keyword matches user search queries. EXACT and BROAD apply to App Store campaigns using the Search results placement; PHRASE and CATEGORY apply to Apple Maps campaigns. */
            matchType?: "EXACT" | "BROAD" | "PHRASE" | "CATEGORY" | null;
            /** Per-keyword bid override, or null when the keyword follows the ad group's bid strategy. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            bid?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Advertiser intent for the keyword to serve. */
            status?: "ENABLED" | "PAUSED" | null;
            /** Rolled-up delivery state combining the keyword, its ad group and its campaign. */
            displayStatus?: "RUNNING" | "PAUSED" | "DELETED" | "AD_GROUP_ON_HOLD" | "CAMPAIGN_ON_HOLD" | null;
            /** When the keyword was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            creationTime?: string | null;
            /** When the keyword was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            modificationTime?: string | null;
            /** Whether the keyword has been soft-deleted. */
            deleted?: boolean | null;
            [key: string]: unknown;
          } | null;
          /** Why this item failed, or null when it succeeded. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          error?: {
            /** Machine-readable reason the item was rejected. */
            code?: string | null;
            /** Human-readable summary of the failure. */
            message?: string | null;
            /** Field-level violations behind this failure. */
            details?: Array<{
              /** Machine-readable code for this violation. */
              code?: string | null;
              /** Human-readable description of this violation. */
              message?: string | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Pause or resume many negative keywords in one request. status is the only field Apple Ads allows changing, and every payload identifies its record by id. Each outcome carries the zero-based index of the payload it belongs to. */
    "apple_ads.bulk_update_negative_keywords": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /**
         * Negative keyword changes to apply. Every outcome reports the zero-based index of its payload in this array.
         * @minItems 1
         */
        negativeKeywords: Array<{
          /** Identifier of the negative keyword to update. */
          id: number | string;
          /** Pause or resume the exclusion. */
          status: "ENABLED" | "PAUSED";
        }>;
        /** Whether Apple Ads should keep the items that succeed when other items fail. It defaults to false, which rejects the whole batch as soon as one item fails. */
        allowPartialSuccess?: boolean;
      };
      output: {
        /** One outcome per item of the request, in the order the items were sent. */
        results: Array<{
          /** Zero-based index of the item in the request array this outcome belongs to. */
          correlationId: number;
          /** Operation Apple Ads performed for this item. */
          operation?: "CREATE" | "UPDATE" | null;
          /** Whether this individual item succeeded. */
          success?: boolean | null;
          /** A negative keyword: a search term exclusion scoped either to a whole campaign or to a single ad group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          negativeKeyword?: {
            /** System-assigned identifier for the negative keyword. */
            id: number;
            /** Ad account the negative keyword belongs to. */
            adAccountId?: number | null;
            /** Campaign the negative keyword belongs to. */
            campaignId?: number | null;
            /** Ad group the negative keyword is scoped to. Campaign-level exclusions have no ad group: Apple Ads returns null for them, or leaves the field out entirely. */
            adGroupId?: number | null;
            /** The advertiser-given term to exclude. */
            text?: string | null;
            /** How the excluded term is matched against user searches. */
            matchType?: "EXACT" | "BROAD" | "PHRASE" | "CATEGORY" | null;
            /** Whether the exclusion is active or paused. */
            status?: "ENABLED" | "PAUSED" | null;
            /** When the negative keyword was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            creationTime?: string | null;
            /** When the negative keyword was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            modificationTime?: string | null;
            /** Whether the negative keyword has been soft-deleted. */
            deleted?: boolean | null;
            [key: string]: unknown;
          } | null;
          /** Why this item failed, or null when it succeeded. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          error?: {
            /** Machine-readable reason Apple Ads rejected this item. */
            code?: string | null;
            /** Human-readable summary of what went wrong with this item. */
            message?: string | null;
            /** Field-level violations behind this failure. */
            details?: Array<{
              /** Machine-readable code for this violation. */
              code?: string | null;
              /** Human-readable description of this violation. */
              message?: string | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Create an ad that links an existing ad creative to an ad group. adGroupId and creativeId are fixed at creation: serve a different ad creative by creating another ad and deleting this one. The ad creative must have a systemStatus of VALID, and only one ad per ad group can be ENABLED at a time. */
    "apple_ads.create_ad": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Identifier of the ad group to place the ad in. It must belong to the same ad account, and it cannot be changed later. */
        adGroupId: number | string;
        /** Identifier of the ad creative to serve. It cannot be changed later. */
        creativeId: number | string;
        /**
         * Ad name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** Initial serving status. ENABLED lets the ad enter auctions once its ad group and campaign are also enabled; PAUSED creates it suspended. */
        status: "ENABLED" | "PAUSED";
      };
      output: {
        /** An ad, the serving unit that links an ad creative to an ad group. Only one ad per ad group can be ENABLED at a time. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        ad: {
          /** System-assigned identifier for the ad. */
          id: number;
          /** Advertiser-given name of the ad. */
          name?: string | null;
          /** Advertiser intent for the ad to serve. */
          status?: "ENABLED" | "PAUSED" | null;
          /** Ad account the ad belongs to. */
          adAccountId?: number | null;
          /** Campaign the ad belongs to. */
          campaignId?: number | null;
          /** Ad group the ad belongs to. */
          adGroupId?: number | null;
          /** Ad creative this ad serves. */
          creativeId?: number | null;
          /** System-computed delivery state. */
          systemStatus?: "RUNNING" | "NOT_RUNNING" | null;
          /** Reasons the ad is not delivering, populated when systemStatus is NOT_RUNNING. */
          systemStatusReasons?: Array<string> | null;
          /** Reasons the ad delivers at reduced capacity without stopping. */
          systemStatusLimitingReasons?: Array<string> | null;
          /** Rolled-up delivery state combining ad, ad group and campaign conditions. */
          displayStatus?: "RUNNING" | "PAUSED" | "ON_HOLD" | "AD_GROUP_ON_HOLD" | "CAMPAIGN_ON_HOLD" | "LIMITED" | "PROCESSING" | "DELETED" | null;
          /** When the ad was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the ad was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the ad has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create an ad account under the organization the access token is bound to. The currency, time zone and payment model are inherited from the organization, and productFeatures is fixed at creation: an account authorized for the App Store can never run Apple Maps campaigns, or the other way around. */
    "apple_ads.create_ad_account": {
      input: {
        /**
         * Name of the ad account. It must be unique within the organization.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /**
         * Advertising surface this ad account is authorized for. Pass APPSTORE_APP_MANUAL for App Store advertising or BUSINESS_BRAND_MANUAL for Apple Maps advertising; an account can hold one or the other, so create a second ad account when the organization needs both.
         * @minItems 1
         */
        productFeatures: Array<"APPSTORE_APP_MANUAL" | "BUSINESS_BRAND_MANUAL">;
        /** Advertiser resources to link to the new account. Pass a CONTENT_PROVIDER delegation for App Store advertising, or a BUSINESS_BRAND delegation for Apple Maps advertising; campaigns cannot go live until the delegation matching productFeatures is in place. */
        delegations?: Array<{
          /** Identifier of the resource to delegate: the Content Provider ID (CPID) for CONTENT_PROVIDER, or the Brand ID for BUSINESS_BRAND. Get Advertiser Resources lists the identifiers available to the organization. */
          resourceId: number | string;
          /** Kind of resource to delegate. Every delegation on one ad account must share the same resourceType, and it has to match the account's productFeatures. */
          resourceType: "CONTENT_PROVIDER" | "BUSINESS_BRAND";
        }>;
      };
      output: {
        /** An ad account, the container that owns campaigns and carries the advertising settings inherited from its organization. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        adAccount: {
          /** System-assigned identifier for the ad account. */
          id: number;
          /** Name of the ad account, unique within the parent organization. */
          name?: string | null;
          /** Identifier of the parent organization. It can never change. */
          orgId?: number | null;
          /** Time zone of the ad account, inherited from the parent organization, for example America/New_York. */
          timezone?: string | null;
          /** Currency of the ad account, inherited from the parent organization. */
          currency?: "USD" | "RMB" | "AUD" | "CAD" | "EUR" | "GBP" | "JPY" | "MXN" | "NZD" | "RUB" | "CNY" | "INR" | "BRL" | "IDR" | null;
          /** Payment model inherited from the parent organization. LOC is line of credit, invoiced monthly and required for budget orders; PAYG is pay as you go, charged per campaign spend. */
          paymentModel?: "PAYG" | "LOC" | null;
          /** Whether the ad account is operational. An INACTIVE account cannot run campaigns. */
          systemStatus?: "ACTIVE" | "INACTIVE" | null;
          /** Reasons the ad account is INACTIVE, empty while it is ACTIVE. */
          systemStatusReasons?: Array<string> | null;
          /** Advertiser resources delegated to this ad account. */
          delegations?: Array<{
            /** Identifier of the delegated resource: the Content Provider ID (CPID) for CONTENT_PROVIDER, or the Brand ID for BUSINESS_BRAND. */
            resourceId?: string | null;
            /** Kind of delegated resource. */
            resourceType?: "CONTENT_PROVIDER" | "BUSINESS_BRAND" | null;
            /** Display name of the delegated resource: the brand name for BUSINESS_BRAND, or the App Store Connect provider name for CONTENT_PROVIDER. */
            resourceName?: string | null;
            [key: string]: unknown;
          }> | null;
          /** Advertising surface the ad account is authorized for. */
          productFeatures?: Array<string> | null;
          /** When the ad account was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the ad account was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create an ad group inside an existing campaign. campaignId, pricingModel and automatedKeywordsRequired are fixed at creation. Keywords and negative keywords cannot be created inline: add them afterwards with the keyword actions. */
    "apple_ads.create_ad_group": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Identifier of the parent campaign. It cannot be changed later. */
        campaignId: number | string;
        /**
         * Ad group name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** Delivery unit that triggers billing. It has to match the campaign's billingEvent: CPT with TAPS and CPM with IMPRESSIONS. It cannot be changed later. */
        pricingModel: "CPA" | "CPM" | "CPT";
        /**
         * When the ad group starts. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset, for example 2026-01-31T23:59:59.000.
         * @minLength 1
         * @pattern \S
         */
        startTime?: string;
        /**
         * When the ad group ends. Omit it to inherit the campaign end date. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset, for example 2026-01-31T23:59:59.000.
         * @minLength 1
         * @pattern \S
         */
        endTime?: string;
        /** Initial serving status. Apple Ads applies no default when this is omitted. */
        status?: "ENABLED" | "PAUSED";
        /** Whether to turn on Search Match, which targets relevant search terms without an explicit keyword list. Use Search Match or your own keywords on an ad group, not both. */
        automatedKeywordsOptIn?: boolean;
        /** Whether automated keyword generation is required for this ad group. It cannot be changed later. */
        automatedKeywordsRequired?: boolean;
        /** How the ad group competes in auctions. Leave it out of a create request to inherit the campaign's bid strategy; leaving it out of an update keeps the stored one. An ad group under an auto-bidding campaign, meaning one whose bidStrategyType is MAX_CONVERSIONS or MAX_ENGAGEMENTS, inherits the campaign's strategy, so echo that strategy back when you update such an ad group. Apple Ads requires bidStrategyType and bidStrategyGoal together, paired as MANUAL_CPT with TAP, MANUAL_CPM with IMPRESSION, MAX_CONVERSIONS with INSTALL, or MAX_ENGAGEMENTS with TAP. */
        bidStrategy?: {
          /** The bid strategy type. It has to stay compatible with the parent campaign's billingEvent. */
          bidStrategyType?: "MANUAL_CPT" | "MANUAL_CPM" | "MAX_CONVERSIONS" | "MAX_ENGAGEMENTS";
          /** The optimization goal for the bid strategy. */
          bidStrategyGoal?: "TAP" | "IMPRESSION" | "INSTALL";
          /** Bid ceiling for each auction entry. It governs auction participation for MANUAL_CPT and acts as an upper bound for automated strategies. */
          bid?: {
            /**
             * Monetary amount as a decimal string without leading zeros, for example "10.00".
             * @minLength 1
             */
            amount: string;
            /**
             * ISO 4217 currency code. It must match the currency of the ad account.
             * @minLength 1
             */
            currency?: string;
          };
        };
        /** Audience and delivery targeting for the ad group. It refines the campaign's targeting and cannot widen it: a user must match every dimension you set. Not every dimension is meaningful for every campaign type, and Apple Ads does not enforce the pairings at the schema level. */
        targeting?: {
          /** Countries to deliver in, used with App Store campaigns. This dimension is include-only; an exclude array on it has no effect. */
          country?: {
            /** Country identifiers returned by the geo location endpoints. */
            include: Array<string>;
          };
          /** States or provinces to deliver in, used with App Store and Apple Maps campaigns. This dimension is include-only; an exclude array on it has no effect. */
          adminArea?: {
            /** Admin area identifiers returned by the geo location endpoints. */
            include: Array<string>;
          };
          /** Cities to deliver in, used with App Store and Apple Maps campaigns. This dimension is include-only; an exclude array on it has no effect. */
          locality?: {
            /** Locality identifiers returned by the geo location endpoints. */
            include: Array<string>;
          };
          /** Postal code areas to deliver in, used with Apple Maps campaigns. This dimension is include-only; an exclude array on it has no effect. */
          postalCode?: {
            /** Postal code identifiers returned by the geo location endpoints. */
            include: Array<string>;
          };
          /** Proximity to the advertiser's business locations, used with Apple Maps campaigns on the MAPS_SEARCH_RESULTS placement. Do not combine it with geo location targeting in the same ad group. This dimension is include-only; an exclude array on it has no effect. */
          radius?: {
            /** Radius bands to deliver in. */
            include: Array<"CLOSE" | "MEDIUM" | "FAR">;
          };
          /** Device classes to deliver on, used with App Store campaigns. This dimension is include-only; an exclude array on it has no effect. */
          deviceClass?: {
            /** Device classes to deliver on. */
            include: Array<"IPHONE" | "IPAD">;
          };
          /** Lower bound of the target age range, used with App Store campaigns. This dimension is include-only; an exclude array on it has no effect. */
          minAge?: {
            /** The lower bound of the target age range, from 18 to 64. */
            include: Array<string>;
          };
          /** Upper bound of the target age range, used with App Store campaigns. Send include as null to target users 65 and older. Leaving the dimension out of a create request has the same effect, but leaving it out of an update keeps the stored bound. This dimension is include-only; an exclude array on it has no effect. */
          maxAge?: {
            /** The upper bound of the target age range, from 18 to 64, or null to leave the range open ended. */
            include: Array<string> | null;
          };
          /** Genders to deliver to, used with App Store campaigns. This dimension is include-only; an exclude array on it has no effect. */
          gender?: {
            /** Genders to deliver to. */
            include: Array<"M" | "F">;
          };
          /** App Store categories of the apps a user engages with, used with App Store campaigns. Category 100 is the special value meaning the same category as the promoted app. This is one of the two dimensions Apple Ads honors exclude on. */
          appCategory?: {
            /** App Store category identifiers to target. */
            include?: Array<string>;
            /** App Store category identifiers to exclude. */
            exclude?: Array<string>;
          };
          /** Users selected by the apps they already downloaded, used with App Store campaigns. Exclude the promoted app's own adamId to suppress existing users and target acquisition only. Leave the dimension out of a create request to reach all users. Apple Ads only accepts adamIds of apps the API user owns. This is one of the two dimensions Apple Ads honors exclude on. */
          appDownloader?: {
            /** Adam identifiers whose downloaders to reach. */
            include?: Array<string>;
            /** Adam identifiers whose downloaders to suppress. */
            exclude?: Array<string>;
          };
          /** Hours of the week the ad group may deliver in, used with App Store campaigns on APPSTORE_SEARCH_RESULTS and Apple Maps campaigns on MAPS_SEARCH_RESULTS. Slots are evaluated in the ad account's time zone. This dimension is include-only; an exclude array on it has no effect. */
          daypart?: {
            /** One-hour slots in a 168-slot week starting at Sunday midnight: 0 is Sunday 12:00 a.m., 24 is Monday 12:00 a.m., and 167 is Saturday 11:00 p.m. */
            include: Array<string>;
          };
          /** Location groups whose business locations the ad group promotes, used with Apple Maps campaigns. This dimension is include-only; an exclude array on it has no effect. */
          locationGroup?: {
            /** Location group identifiers. */
            include: Array<string>;
          };
        };
        /** Deprecated cost-per-acquisition cap. Apple Ads still accepts it, but new integrations should use bidStrategy with MAX_CONVERSIONS instead. */
        cpaCap?: {
          /** The target cost-per-acquisition amount. */
          value: {
            /**
             * Monetary amount as a decimal string without leading zeros, for example "10.00".
             * @minLength 1
             */
            amount: string;
            /**
             * ISO 4217 currency code. It must match the currency of the ad account.
             * @minLength 1
             */
            currency?: string;
          };
        };
      };
      output: {
        /** An ad group, the unit inside a campaign that carries one targeting configuration, bid strategy and schedule for its ads. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        adGroup: {
          /** System-assigned identifier for the ad group. */
          id: number;
          /** Advertiser-given ad group name. */
          name?: string | null;
          /** Ad account the ad group belongs to. */
          adAccountId?: number | null;
          /** Campaign the ad group belongs to. */
          campaignId?: number | null;
          /** Scheduled start of the ad group. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          startTime?: string | null;
          /** Scheduled end of the ad group, or null when it inherits the campaign end date. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          endTime?: string | null;
          /** Delivery unit that triggers billing. */
          pricingModel?: "CPA" | "CPM" | "CPT" | null;
          /** Whether Search Match automatically matches relevant search terms for this ad group. */
          automatedKeywordsOptIn?: boolean | null;
          /** Whether automated keyword generation is required for this ad group. */
          automatedKeywordsRequired?: boolean | null;
          /** Advertiser intent for the ad group to serve. */
          status?: "ENABLED" | "PAUSED" | null;
          /** System-computed delivery state. */
          systemStatus?: "RUNNING" | "NOT_RUNNING" | null;
          /** Reasons the ad group is not delivering. */
          systemStatusReasons?: Array<string> | null;
          /** Reasons the ad group delivers below its full potential. */
          systemStatusLimitingReasons?: Array<string> | null;
          /** Rolled-up delivery state combining advertiser intent and system evaluation. CAMPAIGN_ON_HOLD means the parent campaign is what is blocking delivery. */
          displayStatus?: "RUNNING" | "PAUSED" | "ON_HOLD" | "CAMPAIGN_ON_HOLD" | "LIMITED" | "PROCESSING" | "DELETED" | null;
          /** Bid strategy governing auction participation for this ad group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          bidStrategy?: {
            /** The bid strategy type. */
            bidStrategyType?: "MANUAL_CPT" | "MANUAL_CPM" | "MAX_CONVERSIONS" | "MAX_ENGAGEMENTS" | null;
            /** The optimization goal. */
            bidStrategyGoal?: "TAP" | "IMPRESSION" | "INSTALL" | null;
            /** Bid ceiling for each auction entry. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            bid?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Audience and delivery targeting for the ad group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          targeting?: {
            /** Country targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            country?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** State or province targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            adminArea?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** City targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            locality?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Postal code targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            postalCode?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Radius targeting around business locations. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            radius?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Device class targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            deviceClass?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Lower bound of the target age range. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            minAge?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Upper bound of the target age range. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            maxAge?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Gender targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            gender?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** App Store category targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            appCategory?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** App downloader targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            appDownloader?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Hour-of-week targeting, as slot indexes from 0 to 167. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            daypart?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Location group targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            locationGroup?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Deprecated cost-per-acquisition cap, superseded by bidStrategy with MAX_CONVERSIONS. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpaCap?: {
            /** The target cost-per-acquisition amount. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            value?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** When the ad group was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the ad group was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the ad group has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create a budget order for the ad account this request is scoped to, then cap the total spend of a group of campaigns by assigning them to it. The ad account must be on the LOC (Line of Credit) payment model, which is why invoice details are required. */
    "apple_ads.create_budget_order": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /**
         * Budget order name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /**
         * When the budget order becomes active. It must be midnight UTC of tomorrow or later; Apple Ads rejects today. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset, for example 2026-01-31T23:59:59.000.
         * @minLength 1
         * @pattern \S
         */
        startTime: string;
        /**
         * When the budget order expires. It must be after startTime. Omit it for an open-ended budget order. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset, for example 2026-01-31T23:59:59.000.
         * @minLength 1
         * @pattern \S
         */
        endTime?: string;
        /** Total amount the assigned campaigns can spend against this budget order. The currency must match the currency of the ad account. */
        value: {
          /**
           * Monetary amount as a decimal string without leading zeros, for example "10.00".
           * @minLength 1
           */
          amount: string;
          /**
           * ISO 4217 currency code. It must match the currency of the ad account.
           * @minLength 1
           */
          currency?: string;
        };
        /** Invoice and billing contact details. Apple Ads requires them because budget orders are only available on Line of Credit (LOC) accounts. */
        invoiceDetail: {
          /**
           * Name of the primary buyer.
           * @minLength 1
           * @pattern \S
           */
          primaryBuyerName: string;
          /**
           * Email address of the primary buyer.
           * @format email
           */
          primaryBuyerEmail: string;
          /**
           * Billing email address.
           * @format email
           */
          billingEmail: string;
          /**
           * Advertiser or product this invoice identifies.
           * @minLength 1
           * @pattern \S
           */
          clientName?: string;
          /**
           * Purchase order number.
           * @minLength 1
           * @pattern \S
           */
          orderNumber?: string;
        };
      };
      output: {
        /** A budget order, a spending cap that the campaigns assigned to it draw from over a scheduled period. It is available only on ad accounts with the LOC (Line of Credit) payment model. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        budgetOrder: {
          /** System-assigned identifier for the budget order. */
          id: number;
          /** Organization that owns the budget order. */
          orgId?: number | null;
          /** Advertiser-given budget order name. */
          name?: string | null;
          /** When the budget order becomes active. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          startTime?: string | null;
          /** When the budget order expires, or null when it is open-ended. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          endTime?: string | null;
          /** Total amount the assigned campaigns can spend against this budget order. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          value?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Ad accounts whose campaigns can draw from this budget order. */
          adAccountIds?: Array<number> | null;
          /** System-computed state telling whether campaigns can currently draw spend against the budget order. */
          systemStatus?: "ACTIVE" | "INACTIVE" | null;
          /** Reasons behind the current system status. */
          systemStatusReasons?: Array<"CANCELED" | "CAMPAIGN_BUDGET_UNASSIGNED" | "DELETED_BY_USER" | "EXHAUSTED" | "PROCESSING" | "SCHEDULE_EXPIRED" | "SCHEDULE_PENDING"> | null;
          /** Invoice and billing contact details. Apple Ads populates it only for Line of Credit accounts. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          invoiceDetail?: {
            /** Advertiser or product this invoice identifies. */
            clientName?: string | null;
            /** Name of the primary buyer. */
            primaryBuyerName?: string | null;
            /** Email address of the primary buyer. */
            primaryBuyerEmail?: string | null;
            /** Purchase order number. */
            orderNumber?: string | null;
            /** Billing email address. */
            billingEmail?: string | null;
            [key: string]: unknown;
          } | null;
          /** When the budget order was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the budget order was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the budget order has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create a campaign. promotedObjectType, promotedObjectId and billingEvent are fixed at creation: promote a different app or brand by creating another campaign. */
    "apple_ads.create_campaign": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /**
         * Campaign name, at most 200 characters.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** Whether the campaign promotes an App Store app or an Apple Maps brand. It cannot be changed later. */
        promotedObjectType: "APPSTORE_APP" | "BUSINESS_BRAND";
        /**
         * Identifier of the promoted entity: the App Store adamId for APPSTORE_APP, or the brand identifier for BUSINESS_BRAND. It cannot be changed later.
         * @minLength 1
         * @pattern \S
         */
        promotedObjectId: string;
        /** Interaction that triggers a charge. App Store campaigns use TAPS; Apple Maps campaigns also support IMPRESSIONS. It cannot be changed later. */
        billingEvent: "TAPS" | "IMPRESSIONS";
        /** Daily spend cap for the campaign. */
        dailyBudget: {
          /** The daily budget amount. */
          value: {
            /**
             * Monetary amount as a decimal string without leading zeros, for example "10.00".
             * @minLength 1
             */
            amount: string;
            /**
             * ISO 4217 currency code. It must match the currency of the ad account.
             * @minLength 1
             */
            currency?: string;
          };
        };
        /** Where the campaign is eligible to serve ads. Ad group targeting can only narrow these boundaries. */
        targeting: {
          /** Supply sources where ads are eligible to appear. Only include is honored at the campaign level; Apple Ads ignores exclude here. */
          supplySource?: {
            /** Values to include in targeting. */
            include: Array<"APPSTORE" | "MAPS">;
          };
          /** Placements within the selected supply sources. Each placement belongs to exactly one supply source. Only include is honored at the campaign level; Apple Ads ignores exclude here. */
          supplyPlacement?: {
            /** Values to include in targeting. */
            include: Array<"APPSTORE_SEARCH_RESULTS" | "APPSTORE_SEARCH_TAB" | "APPSTORE_TODAY_TAB" | "APPSTORE_PRODUCT_PAGES" | "MAPS_SEARCH_RESULTS" | "MAPS_SEARCH_HOME">;
          };
          /** Countries or regions where the campaign serves ads. Only include is honored at the campaign level. */
          countryOrRegion?: {
            /**
             * ISO 3166-1 alpha-2 country or region codes to include.
             * @minItems 1
             */
            include: Array<string>;
          };
        };
        /** How the campaign competes in auctions. Apple Ads requires bidStrategyType and bidStrategyGoal together, paired as MANUAL_CPT with TAP, MANUAL_CPM with IMPRESSION, MAX_CONVERSIONS with INSTALL, or MAX_ENGAGEMENTS with TAP. */
        bidStrategy?: {
          /** The bid strategy type. */
          bidStrategyType?: "MANUAL_CPT" | "MANUAL_CPM" | "MAX_CONVERSIONS" | "MAX_ENGAGEMENTS";
          /** The optimization goal for the bid strategy. */
          bidStrategyGoal?: "TAP" | "IMPRESSION" | "INSTALL";
          /** Bid ceiling for each auction entry. It governs auction participation for MANUAL_CPT and acts as an upper bound for automated strategies. */
          bid?: {
            /**
             * Monetary amount as a decimal string without leading zeros, for example "10.00".
             * @minLength 1
             */
            amount: string;
            /**
             * ISO 4217 currency code. It must match the currency of the ad account.
             * @minLength 1
             */
            currency?: string;
          };
        };
        /**
         * When the campaign starts. Omit to start it as soon as it is activated. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset, for example 2026-01-31T23:59:59.000.
         * @minLength 1
         * @pattern \S
         */
        startTime?: string;
        /**
         * When the campaign ends. Omit to run it indefinitely. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset, for example 2026-01-31T23:59:59.000.
         * @minLength 1
         * @pattern \S
         */
        endTime?: string;
        /** Initial serving status. Apple Ads picks a default when this is omitted. */
        status?: "ENABLED" | "PAUSED";
        /** Budget order assignments for this campaign. Sending this array replaces every existing assignment. */
        sharedBudgets?: Array<{
          /** Identifier of the budget order to assign. */
          budgetId: number | string;
        }>;
        /** Invoice and billing contact details. Apple Ads requires them for Line of Credit accounts. */
        invoiceDetail?: {
          /**
           * Name of the primary buyer.
           * @minLength 1
           * @pattern \S
           */
          primaryBuyerName: string;
          /**
           * Email address of the primary buyer.
           * @format email
           */
          primaryBuyerEmail: string;
          /**
           * Billing email address.
           * @format email
           */
          billingEmail: string;
          /**
           * Advertiser or product this invoice identifies.
           * @minLength 1
           * @pattern \S
           */
          clientName?: string;
          /**
           * Purchase order number.
           * @minLength 1
           * @pattern \S
           */
          orderNumber?: string;
        };
        /** Regulatory consent acknowledgments required in some markets. */
        regulationResponses?: Array<{
          /** Category of regulatory disclosure being answered. */
          regulationType: "CAC" | "CAMPAIGN_SAPIN_LAW" | "ORG_SAPIN_LAW";
          /** Answer to the disclosure question. Which values are valid depends on regulationType. */
          responseValue: "AGENT" | "NOT_AGENT" | "FRENCH_BUSINESS" | "NOT_FRENCH_BUSINESS" | "TRUE" | "FALSE" | "NOT_ANSWERED";
        }>;
      };
      output: {
        /** A campaign, the top-level container that defines the promoted object, billing, scheduling and targeting for its ad groups. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        campaign: {
          /** System-assigned identifier for the campaign. */
          id: number;
          /** Ad account the campaign belongs to. */
          adAccountId?: number | null;
          /** Advertiser-given campaign name. */
          name?: string | null;
          /** Interaction that triggers a charge. */
          billingEvent?: "TAPS" | "IMPRESSIONS" | null;
          /** Payment model applied to the campaign. */
          paymentModel?: "PAYG" | "LOC" | null;
          /** Scheduled start of the campaign. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          startTime?: string | null;
          /** Scheduled end of the campaign, or null when it runs indefinitely. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          endTime?: string | null;
          /** What the campaign promotes. */
          promotedObjectType?: "APPSTORE_APP" | "BUSINESS_BRAND" | null;
          /** Identifier of the promoted entity: the App Store adamId, or the brand identifier for Apple Maps campaigns. */
          promotedObjectId?: string | null;
          /** Advertiser intent for the campaign to serve. */
          status?: "ENABLED" | "PAUSED" | null;
          /** System-computed delivery state. */
          systemStatus?: "RUNNING" | "NOT_RUNNING" | null;
          /** Reasons the campaign is not delivering. */
          systemStatusReasons?: Array<string> | null;
          /** Reasons the campaign delivers below its full potential. */
          systemStatusLimitingReasons?: Array<string> | null;
          /** Rolled-up delivery state combining advertiser intent and system evaluation. */
          displayStatus?: "RUNNING" | "PAUSED" | "ON_HOLD" | "LIMITED" | "PROCESSING" | "DELETED" | null;
          /** Daily spend cap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          dailyBudget?: {
            /** The daily budget amount. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            value?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Budget orders assigned to the campaign. */
          sharedBudgets?: Array<{
            /** Identifier of the assigned budget order. */
            budgetId?: number | null;
            [key: string]: unknown;
          }> | null;
          /** Where the campaign is eligible to serve ads. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          targeting?: {
            /** Supply sources included in targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            supplySource?: {
              /** Included supply sources. */
              include?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Placements included in targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            supplyPlacement?: {
              /** Included placements. */
              include?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Countries or regions included in targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            countryOrRegion?: {
              /** Included ISO 3166-1 alpha-2 codes. */
              include?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Bid strategy governing auction participation. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          bidStrategy?: {
            /** The bid strategy type. */
            bidStrategyType?: "MANUAL_CPT" | "MANUAL_CPM" | "MAX_CONVERSIONS" | "MAX_ENGAGEMENTS" | null;
            /** The optimization goal. */
            bidStrategyGoal?: "TAP" | "IMPRESSION" | "INSTALL" | null;
            /** Bid ceiling for each auction entry. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            bid?: {
              /** Bid amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Invoice and billing contact details. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          invoiceDetail?: {
            /** Advertiser or product this invoice identifies. */
            clientName?: string | null;
            /** Name of the primary buyer. */
            primaryBuyerName?: string | null;
            /** Email address of the primary buyer. */
            primaryBuyerEmail?: string | null;
            /** Purchase order number. */
            orderNumber?: string | null;
            /** Billing email address. */
            billingEmail?: string | null;
            [key: string]: unknown;
          } | null;
          /** Regulatory consent acknowledgments recorded for the campaign. */
          regulationResponses?: Array<{
            /** Category of regulatory disclosure. */
            regulationType?: "CAC" | "CAMPAIGN_SAPIN_LAW" | "ORG_SAPIN_LAW" | null;
            /** Recorded answer. */
            responseValue?: "AGENT" | "NOT_AGENT" | "FRENCH_BUSINESS" | "NOT_FRENCH_BUSINESS" | "TRUE" | "FALSE" | "NOT_ANSWERED" | null;
            [key: string]: unknown;
          }> | null;
          /** When the campaign was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the campaign was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the campaign has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create an ad creative at the ad account level. It is not tied to a campaign or ad group, so several ads can reference the same one. creativeType and destination are fixed at creation. Pass the returned identifier as creativeId when creating an ad. */
    "apple_ads.create_creative": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /**
         * Name of the ad creative.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** Content source of the ad creative, which decides the shape of creativeSpec and destination. It cannot be changed later. */
        creativeType: "DEFAULT_PRODUCT_PAGE" | "CUSTOM_PRODUCT_PAGE" | "LOCAL_ADS_SEARCH_CREATIVE";
        /** Pre-tap experience specification. Pass an empty object for DEFAULT_PRODUCT_PAGE and CUSTOM_PRODUCT_PAGE, whose pre-tap content comes from App Store Connect and is not customizable here. It is required for LOCAL_ADS_SEARCH_CREATIVE, where every field below applies. */
        creativeSpec?: {
          /** Brand the Apple Maps ad creative belongs to. LOCAL_ADS_SEARCH_CREATIVE only. */
          brandId?: number | string;
          /** Asset format of the Apple Maps ad creative. LOCAL_ADS_SEARCH_CREATIVE only. */
          creativeSubtype?: "BUSINESS_LOGO" | "BUSINESS_ASSET";
          /** Asset references rendered in the Apple Maps ad creative, in display order. Each asset must already exist in the ad account. LOCAL_ADS_SEARCH_CREATIVE only. */
          creativeAssets?: Array<{
            /**
             * UUID of an existing asset to display.
             * @minLength 1
             * @pattern \S
             */
            assetId: string;
            /**
             * Display position of this asset within the list.
             * @minimum 0
             */
            sortOrder?: number;
          }>;
          /** Promotional copy keyed by BCP-47 locale code, for example {"en-US": {"promoText": "Visit us today"}}. LOCAL_ADS_SEARCH_CREATIVE only. */
          localizedText?: Record<string, Record<string, string>>;
          /**
           * Locale whose copy is used when a viewer's locale is missing from localizedText, for example en-US. LOCAL_ADS_SEARCH_CREATIVE only.
           * @minLength 1
           * @pattern \S
           */
          defaultLocale?: string;
        };
        /** Post-tap destination for the ad creative. It is fixed at creation and cannot be changed afterwards. */
        destination: {
          /** Type of post-tap destination. Product page ad creatives use APP_STORE_PRODUCT_PAGE; Apple Maps ad creatives use LOCAL_ADS_PLACECARD. */
          destinationType: "APP_STORE_PRODUCT_PAGE" | "LOCAL_ADS_PLACECARD";
          /** Destination-specific identifiers. Required for APP_STORE_PRODUCT_PAGE; omit it entirely for LOCAL_ADS_PLACECARD, which takes no parameters. */
          parameters?: {
            /** App Store app identifier the destination points at. It is the same value as the campaign's promotedObjectId, and it is required for APP_STORE_PRODUCT_PAGE. */
            adamId: number | string;
            /**
             * UUID of a Custom Product Page created in App Store Connect. It is required for CUSTOM_PRODUCT_PAGE; omit it for DEFAULT_PRODUCT_PAGE to use the default product page.
             * @minLength 1
             * @pattern \S
             */
            productPageId?: string;
          };
        };
      };
      output: {
        /** An ad creative, the reusable unit of visual presentation an ad references. It carries a pre-tap creativeSpec and a post-tap destination. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        creative: {
          /** System-assigned identifier for the ad creative. Pass this value as creativeId when creating an ad. */
          id: number;
          /** Ad account the ad creative belongs to. */
          adAccountId?: number | null;
          /** Advertiser-given name of the ad creative. */
          name?: string | null;
          /** Content source and placement eligibility of the ad creative. */
          creativeType?: "DEFAULT_PRODUCT_PAGE" | "CUSTOM_PRODUCT_PAGE" | "LOCAL_ADS_SEARCH_CREATIVE" | null;
          /** Pre-tap experience specification. Apple Ads returns an empty object for DEFAULT_PRODUCT_PAGE and CUSTOM_PRODUCT_PAGE, because App Store Connect controls their pre-tap rendering. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          creativeSpec?: {
            /** Brand the Apple Maps ad creative belongs to. */
            brandId?: string | null;
            /** Asset format of the Apple Maps ad creative. */
            creativeSubtype?: "BUSINESS_LOGO" | "BUSINESS_ASSET" | null;
            /** Ordered asset references rendered in the Apple Maps ad creative. */
            creativeAssets?: Array<{
              /** UUID of the referenced asset. */
              assetId?: string | null;
              /** Display position of this asset within the list. */
              sortOrder?: number | null;
              [key: string]: unknown;
            }> | null;
            /** Localized promotional copy keyed by BCP-47 locale code, then by text key. */
            localizedText?: Record<string, Record<string, string | null> | null> | null;
            /** Locale whose copy is used when a viewer's locale is missing from localizedText. */
            defaultLocale?: string | null;
            [key: string]: unknown;
          } | null;
          /** Post-tap destination users land on after tapping the ad. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          destination?: {
            /** Type of post-tap destination. */
            destinationType?: "APP_STORE_PRODUCT_PAGE" | "LOCAL_ADS_PLACECARD" | null;
            /** Destination-specific identifiers. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            parameters?: {
              /** App Store app identifier the destination points at. */
              adamId?: string | null;
              /** UUID of the Custom Product Page, or null when the default product page is used. */
              productPageId?: string | null;
              [key: string]: unknown;
            } | null;
            /** Resolved destination URL that Apple Ads computes from destinationType and parameters. */
            url?: string | null;
            [key: string]: unknown;
          } | null;
          /** System validation state of the ad creative. */
          systemStatus?: "VALID" | "INVALID" | "PENDING" | null;
          /** Reasons behind the current system status. */
          systemStatusReasons?: Array<string> | null;
          /** Where the ad creative is allowed to serve. Apple Ads leaves it empty or null while systemStatus is PENDING. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          eligibility?: {
            /** Overall eligibility status. */
            status?: "ELIGIBLE" | "INELIGIBLE" | null;
            /** Placement and market combinations where the ad creative can serve. */
            allowedGroups?: Array<{
              /** Supply placements covered by this group. */
              supplyPlacement?: Array<string> | null;
              /** Countries or regions covered by this group. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            /** Placement and market combinations where the ad creative cannot serve. */
            blockedGroups?: Array<{
              /** Supply placements covered by this group. */
              supplyPlacement?: Array<string> | null;
              /** Countries or regions covered by this group. */
              countryOrRegion?: Array<string> | null;
              /** Why the ad creative is blocked in this group, for example APP_NOT_ELIGIBLE. */
              reason?: string | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          } | null;
          /** When the ad creative was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the ad creative was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the ad creative has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Add one keyword to an ad group. adGroupId, text and matchType are fixed at creation: to change them, delete the keyword and create a new one. */
    "apple_ads.create_keyword": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Ad group the keyword belongs to. It cannot be changed after creation. */
        adGroupId: number | string;
        /**
         * The search term to target. It cannot be changed after creation: to change it, delete the keyword and create a new one. For the CATEGORY match type this must be a Maps business category identifier such as dining.restaurant.
         * @minLength 1
         * @pattern \S
         */
        text: string;
        /** How the keyword matches user search queries. EXACT and BROAD apply to App Store campaigns using the Search results placement; PHRASE and CATEGORY apply to Apple Maps campaigns. It cannot be changed after creation. */
        matchType?: "EXACT" | "BROAD" | "PHRASE" | "CATEGORY";
        /** Per-keyword bid that overrides the ad group's bid strategy bid. Maximize Conversions campaigns do not use it. */
        bid?: {
          /**
           * Monetary amount as a decimal string without leading zeros, for example "10.00".
           * @minLength 1
           */
          amount: string;
          /**
           * ISO 4217 currency code. It must match the currency of the ad account.
           * @minLength 1
           */
          currency?: string;
        };
        /** Whether the keyword is eligible to serve. A paused keyword stays in the ad group but does not enter auctions. */
        status?: "ENABLED" | "PAUSED";
      };
      output: {
        /** A keyword, the targeting unit that makes an ad group eligible for the auction when a user search matches it. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        keyword: {
          /** System-assigned identifier for the keyword. */
          id: number;
          /** Ad account the keyword belongs to. */
          adAccountId?: number | null;
          /** Campaign that owns the keyword's ad group. Informational only; keywords are never attached to a campaign directly. */
          campaignId?: number | null;
          /** Ad group the keyword belongs to. */
          adGroupId?: number | null;
          /** Advertiser-given keyword text. */
          text?: string | null;
          /** How the keyword matches user search queries. EXACT and BROAD apply to App Store campaigns using the Search results placement; PHRASE and CATEGORY apply to Apple Maps campaigns. */
          matchType?: "EXACT" | "BROAD" | "PHRASE" | "CATEGORY" | null;
          /** Per-keyword bid override, or null when the keyword follows the ad group's bid strategy. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          bid?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Advertiser intent for the keyword to serve. */
          status?: "ENABLED" | "PAUSED" | null;
          /** Rolled-up delivery state combining the keyword, its ad group and its campaign. */
          displayStatus?: "RUNNING" | "PAUSED" | "DELETED" | "AD_GROUP_ON_HOLD" | "CAMPAIGN_ON_HOLD" | null;
          /** When the keyword was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the keyword was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the keyword has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create a location group, a named set of the advertiser's business locations that an ad group can target. brandId and the owning ad account are fixed at creation: move a group to another brand by deleting it and creating a new one. A STATIC group becomes usable immediately, while a DYNAMIC group stays PENDING until Apple Ads finishes evaluating its rules. */
    "apple_ads.create_location_group": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /**
         * Display name for the location group.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** Brand whose locations the group draws from. It cannot be changed later. */
        brandId: number | string;
        /** How membership is defined. STATIC takes an explicit locationIds list; DYNAMIC takes rules that Apple Ads re-evaluates as the brand's footprint changes. It cannot be changed later. */
        groupType: "STATIC" | "DYNAMIC";
        /**
         * Membership rules for a DYNAMIC group, evaluated against the brand's full location catalog. Sending this array replaces every stored rule.
         * @maxItems 25
         */
        rules?: Array<{
          /**
           * Location field the rule matches on, for example adminArea or locality.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /**
           * Comparison operator applied to the field, for example IN.
           * @minLength 1
           * @pattern \S
           */
          operator: string;
          /** Value the field is compared against; pass an array for a multi-value operator such as IN. An adminArea value must be the full English name, for example Illinois rather than IL, and a locality value must use the pipe-delimited countryOrRegion|adminArea|locality form, for example US|New York|Brooklyn. Apple Ads accepts an abbreviated value without an error and silently matches no locations. */
          value: unknown;
        }>;
        /** Location identifiers that make up a STATIC group. Sending this array replaces the stored list, so add a location by resending the full list with the new identifier appended. */
        locationIds?: Array<number | string>;
        /**
         * Description of the location group.
         * @minLength 1
         * @pattern \S
         */
        description?: string;
      };
      output: {
        /** A named set of business locations scoped to one brand. An ad group references the group to restrict which of the advertiser's locations its Apple Maps ads promote; it does not filter by the ad viewer's location. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        locationGroup: {
          /** System-assigned identifier for the location group. */
          id: string;
          /** Display name of the group. */
          name?: string | null;
          /** Brand the group belongs to. */
          brandId?: string | null;
          /** Ad account that owns the group. */
          adAccountId?: string | null;
          /** How membership is defined. */
          groupType?: "STATIC" | "DYNAMIC" | null;
          /** System-managed state. A group is unusable for targeting until it reaches VALID, and a group in INVALID or PENDING state cannot be updated or deleted. */
          systemStatus?: "VALID" | "INVALID" | "PENDING" | "DELETED" | null;
          /** RSQL query Apple Ads generated from the rules of a DYNAMIC group. */
          query?: string | null;
          /** Membership rules evaluated against the brand's location catalog for a DYNAMIC group. */
          rules?: Array<{
            /** Location field the rule matches on. */
            field?: string | null;
            /** Comparison operator applied to the field. */
            operator?: string | null;
            /** Value the field is compared against. */
            value?: unknown;
            [key: string]: unknown;
          }> | null;
          /** Location identifiers explicitly included in a STATIC group. */
          locationIds?: Array<string> | null;
          /** Whether this is the system-created All Locations group for the brand. */
          isAllLocationsGroup?: boolean | null;
          /** Advertiser-given description of the group. */
          description?: string | null;
          /** Number of locations currently in the group. It stays 0 for a DYNAMIC group until rule evaluation finishes. */
          groupTotal?: number | null;
          /** Ad serving eligibility for the group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          eligibility?: {
            /** System-managed eligibility status. */
            status?: "ELIGIBLE" | "INELIGIBLE" | "LIMITED" | "PENDING" | "UNDEFINED" | null;
            /** Placement and market combinations that cannot serve. */
            blockedGroups?: Array<{
              /** Supply placements this group covers. */
              supplyPlacement?: Array<string> | null;
              /** Markets this group covers. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            /** Placement and market combinations that can serve. */
            allowedGroups?: Array<{
              /** Supply placements this group covers. */
              supplyPlacement?: Array<string> | null;
              /** Markets this group covers. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          } | null;
          /** When the group was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the group was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the group has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create one negative keyword. Scope it either to a campaign, by passing campaignId alone, or to a single ad group, by passing adGroupId alone: Apple Ads rejects a payload that carries both or neither. text and matchType are fixed at creation, so changing them means deleting this record and creating another. */
    "apple_ads.create_negative_keyword": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Campaign to exclude the term across. Pass it for a campaign-level negative keyword and leave adGroupId unset. */
        campaignId?: number | string;
        /** Ad group to exclude the term within. Pass it for an ad-group-level negative keyword and leave campaignId unset. */
        adGroupId?: number | string;
        /**
         * The term to exclude. It cannot be changed later.
         * @minLength 1
         * @pattern \S
         */
        text: string;
        /** How the excluded term is matched against user searches. EXACT and BROAD apply to App Store negatives, PHRASE to Apple Maps negatives, and CATEGORY is not supported for negative keywords. Apple Ads defaults to BROAD. It cannot be changed later. */
        matchType?: "EXACT" | "BROAD" | "PHRASE";
        /** Whether the exclusion is active. Apple Ads defaults to ENABLED. */
        status?: "ENABLED" | "PAUSED";
      };
      output: {
        /** A negative keyword: a search term exclusion scoped either to a whole campaign or to a single ad group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        negativeKeyword: {
          /** System-assigned identifier for the negative keyword. */
          id: number;
          /** Ad account the negative keyword belongs to. */
          adAccountId?: number | null;
          /** Campaign the negative keyword belongs to. */
          campaignId?: number | null;
          /** Ad group the negative keyword is scoped to. Campaign-level exclusions have no ad group: Apple Ads returns null for them, or leaves the field out entirely. */
          adGroupId?: number | null;
          /** The advertiser-given term to exclude. */
          text?: string | null;
          /** How the excluded term is matched against user searches. */
          matchType?: "EXACT" | "BROAD" | "PHRASE" | "CATEGORY" | null;
          /** Whether the exclusion is active or paused. */
          status?: "ENABLED" | "PAUSED" | null;
          /** When the negative keyword was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the negative keyword was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the negative keyword has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Soft-delete one ad. Delivery stops immediately and query results exclude it, but Apple Ads keeps the record and still returns it from a read. The referenced ad creative is untouched and stays available to other ads. */
    "apple_ads.delete_ad": {
      input: {
        /** Identifier of the ad to delete. */
        adId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** Identifier of the soft-deleted ad. */
        id: string;
        /** Always true once Apple Ads confirmed the soft deletion. */
        deleted: boolean;
      };
    };
    /** Soft-delete one ad group. Apple Ads keeps the record but stops delivery and cascades the deletion to the ad group's ads, keywords and negative keywords. It cannot be undone. */
    "apple_ads.delete_ad_group": {
      input: {
        /** Identifier of the ad group to delete. */
        adGroupId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** Identifier of the soft-deleted ad group. */
        id: string;
        /** Always true once Apple Ads confirmed the soft deletion. */
        deleted: boolean;
      };
    };
    /** Soft-delete one creative asset. Only assets uploaded through the Apple Ads API can be deleted, deleting an already deleted asset fails with 404, and get_asset keeps returning the record with deleted set to true. */
    "apple_ads.delete_asset": {
      input: {
        /**
         * Identifier of the asset. Apple Ads assigns it as a UUID.
         * @format uuid
         */
        assetId: string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** Identifier of the soft-deleted asset. */
        id: string;
        /** Always true once Apple Ads confirmed the soft deletion. */
        deleted: boolean;
      };
    };
    /** Soft-delete one budget order. Apple Ads rejects the deletion with 400 while any campaign is still assigned to the budget order, and also once it has started, expired, been exhausted or been canceled. A soft-deleted budget order cannot be restored; create a new one instead. */
    "apple_ads.delete_budget_order": {
      input: {
        /** Identifier of the budget order to delete. */
        budgetOrderId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** Identifier of the soft-deleted budget order. */
        id: string;
        /** Always true once Apple Ads confirmed the soft deletion. */
        deleted: boolean;
      };
    };
    /** Soft-delete one campaign. Apple Ads keeps the record but stops delivery and cascades the deletion to the campaign's ad groups, keywords and ads. */
    "apple_ads.delete_campaign": {
      input: {
        /** Identifier of the campaign to delete. */
        campaignId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** Identifier of the soft-deleted campaign. */
        id: string;
        /** Always true once Apple Ads confirmed the soft deletion. */
        deleted: boolean;
      };
    };
    /** Soft-delete one ad creative. It cannot be undone or reused for new ads, and every ad already referencing it drops to systemStatus NOT_RUNNING without being deleted. Deleting an already deleted ad creative returns 404. */
    "apple_ads.delete_creative": {
      input: {
        /** Identifier of the ad creative to delete. */
        creativeId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** Identifier of the soft-deleted ad creative. */
        id: string;
        /** Always true once Apple Ads confirmed the soft deletion. */
        deleted: boolean;
      };
    };
    /** Soft-delete one keyword. Apple Ads keeps the record and stops bidding on the term, and leaves the parent ad group and campaign untouched. To pause the term temporarily, update its status to PAUSED instead. */
    "apple_ads.delete_keyword": {
      input: {
        /** Identifier of the keyword to delete. */
        keywordId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** Identifier of the soft-deleted keyword. */
        id: string;
        /** Always true once Apple Ads confirmed the soft deletion. */
        deleted: boolean;
      };
    };
    /** Soft-delete one location group. Deletion is permanent and there is no restore: ad groups targeting the group lose that constraint immediately and keep serving only if they target another location group. A group whose systemStatus is INVALID or PENDING cannot be deleted. */
    "apple_ads.delete_location_group": {
      input: {
        /** Identifier of the location group to delete. */
        locationGroupId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** Identifier of the soft-deleted location group. */
        id: string;
        /** Always true once Apple Ads confirmed the soft deletion. */
        deleted: boolean;
      };
    };
    /** Soft-delete one negative keyword. The excluded term stops being suppressed right away, across every ad group of the campaign for a campaign-level record. Use update_negative_keyword with status PAUSED instead when the exclusion should come back later. */
    "apple_ads.delete_negative_keyword": {
      input: {
        /** Identifier of the negative keyword to delete. */
        negativeKeywordId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** Identifier of the soft-deleted negative keyword. */
        id: string;
        /** Always true once Apple Ads confirmed the soft deletion. */
        deleted: boolean;
      };
    };
    /** Reject one or more daily budget recommendations. Each campaign keeps its current daily budget, but the recommendation moves to the terminal DISMISSED state and never returns to AVAILABLE. */
    "apple_ads.dismiss_daily_budget_recommendations": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Identifier of the promoted object this request applies to: the app Adam ID when promotedObjectType is APPSTORE_APP, or the brand identifier when it is BUSINESS_BRAND. */
        promotedObjectId: number | string;
        /** Type of the promoted object. */
        promotedObjectType: "APPSTORE_APP" | "BUSINESS_BRAND";
        /**
         * Daily budget recommendations to dismiss. Apple Ads requires every entry to belong to the same promoted object.
         * @minItems 1
         */
        recommendations: Array<{
          /**
           * Identifier of the recommendation to act on, taken from the query response.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * Optional reference to a prior history record.
           * @minLength 1
           * @pattern \S
           */
          historyId?: string;
        }>;
      };
      output: {
        /** History records Apple Ads created for the acted-on recommendations. */
        histories: Array<{
          /** Identifier of the original recommendation. */
          recommendationId?: string | null;
          /** Terminal state reached by the recommendation, either APPLIED or DISMISSED. */
          state?: "AVAILABLE" | "APPLIED" | "DISMISSED" | "DELETE" | null;
          /** The daily budget actually applied, or null when the recommendation was dismissed. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          appliedDailyBudgetAmount?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** The daily budget originally suggested. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          suggestedDailyBudgetAmount?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Rank of the recommendation when the action was taken. */
          rank?: number | null;
          /** Impressions the original recommendation projected. */
          expectedImpressions?: number | null;
          /** Lower bound of the projected impressions confidence interval. */
          expectedImpressionsLow?: number | null;
          /** Upper bound of the projected impressions confidence interval. */
          expectedImpressionsHigh?: number | null;
          /** Installs the original recommendation projected. */
          expectedInstalls?: number | null;
          /** Lower bound of the projected installs confidence interval. */
          expectedInstallsLow?: number | null;
          /** Upper bound of the projected installs confidence interval. */
          expectedInstallsHigh?: number | null;
          /** Spend the original recommendation projected. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          expectedSpend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Lower bound of the projected spend confidence interval. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          expectedSpendLow?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Upper bound of the projected spend confidence interval. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          expectedSpendHigh?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Taps the original recommendation projected. */
          expectedTaps?: number | null;
          /** Lower bound of the projected taps confidence interval. */
          expectedTapsLow?: number | null;
          /** Upper bound of the projected taps confidence interval. */
          expectedTapsHigh?: number | null;
          /** Cost per acquisition the original recommendation projected. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          expectedCpa?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Lower bound of the projected cost per acquisition confidence interval. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          expectedCpaLow?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Upper bound of the projected cost per acquisition confidence interval. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          expectedCpaHigh?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** When the apply or dismiss action was taken. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          appliedTime?: string | null;
          /** Optimization area of the recommendation. */
          recommendationType?: "KEYWORD" | "SKEYWORD" | "DAILYCAP" | "SDAILYCAP" | "TCPA" | "STCPA" | "BID" | "SBID" | null;
          /** Identifier of the promoted object: the app Adam ID for APPSTORE_APP, or the brand identifier for BUSINESS_BRAND. */
          promotedObjectId?: string | null;
          /** Type of the promoted object. */
          promotedObjectType?: "APPSTORE_APP" | "BUSINESS_BRAND" | null;
          /** Campaign the recommendation applies to. */
          campaignId?: number | null;
          /** Display name of that campaign. */
          campaignName?: string | null;
          /** Operational status of the recommendation record itself, independent of state. */
          status?: "ENABLED" | "DISABLED" | "DELETED" | null;
          /** Historical install count. */
          installs?: number | null;
          /** Historical spend. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          spend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Historical average cost per acquisition. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          averageCPA?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Historical average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          averageCPT?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Historical impression count. */
          impression?: number | null;
          /** Historical tap count. */
          taps?: number | null;
          /** Historical tap-through rate. */
          ttr?: number | null;
          /** When the recommendation was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the record was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** When the recommendation expires. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          expirationTime?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Reject one or more target CPA recommendations. The campaign keeps its current target, but each recommendation moves to the terminal DISMISSED state and never returns to AVAILABLE. */
    "apple_ads.dismiss_target_cpa_recommendations": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Identifier of the promoted object this request applies to: the app Adam ID when promotedObjectType is APPSTORE_APP, or the brand identifier when it is BUSINESS_BRAND. */
        promotedObjectId: number | string;
        /** Type of the promoted object. */
        promotedObjectType: "APPSTORE_APP" | "BUSINESS_BRAND";
        /**
         * Target CPA recommendations to dismiss. Apple Ads requires every entry to belong to the same promoted object.
         * @minItems 1
         */
        recommendations: Array<{
          /**
           * Identifier of the recommendation to act on, taken from the query response.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * Optional reference to a prior history record.
           * @minLength 1
           * @pattern \S
           */
          historyId?: string;
        }>;
      };
      output: {
        /** History records Apple Ads created for the acted-on recommendations. */
        histories: Array<{
          /** Identifier of the original recommendation. */
          recommendationId?: string | null;
          /** Terminal state reached by the recommendation, either APPLIED or DISMISSED. */
          state?: "AVAILABLE" | "APPLIED" | "DISMISSED" | "DELETE" | null;
          /** The target CPA actually applied, or null when it was dismissed. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          appliedTargetCPA?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** The target CPA originally recommended. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          recommendedTargetCPA?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Rank of the recommendation when the action was taken. */
          rank?: number | null;
          /** Installs the original recommendation projected. */
          expectedInstalls?: number | null;
          /** Spend the original recommendation projected. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          expectedSpend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Taps the original recommendation projected. */
          expectedTaps?: number | null;
          /** Cost per acquisition the original recommendation projected. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          expectedCPA?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** When the apply or dismiss action was taken. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          appliedTime?: string | null;
          /** Optimization area of the recommendation. */
          recommendationType?: "KEYWORD" | "SKEYWORD" | "DAILYCAP" | "SDAILYCAP" | "TCPA" | "STCPA" | "BID" | "SBID" | null;
          /** Identifier of the promoted object: the app Adam ID for APPSTORE_APP, or the brand identifier for BUSINESS_BRAND. */
          promotedObjectId?: string | null;
          /** Type of the promoted object. */
          promotedObjectType?: "APPSTORE_APP" | "BUSINESS_BRAND" | null;
          /** Campaign the recommendation applies to. */
          campaignId?: number | null;
          /** Display name of that campaign. */
          campaignName?: string | null;
          /** Operational status of the recommendation record itself, independent of state. */
          status?: "ENABLED" | "DISABLED" | "DELETED" | null;
          /** Historical install count. */
          installs?: number | null;
          /** Historical spend. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          spend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Historical average cost per acquisition. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          averageCPA?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Historical average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          averageCPT?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Historical impression count. */
          impression?: number | null;
          /** Historical tap count. */
          taps?: number | null;
          /** Historical tap-through rate. */
          ttr?: number | null;
          /** When the recommendation was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the record was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** When the recommendation expires. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          expirationTime?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Read one ad by identifier, including systemStatus, displayStatus and the reason arrays that explain why it is not delivering. Apple Ads still returns a soft-deleted ad with deleted set to true. */
    "apple_ads.get_ad": {
      input: {
        /** Identifier of the ad. */
        adId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** An ad, the serving unit that links an ad creative to an ad group. Only one ad per ad group can be ENABLED at a time. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        ad: {
          /** System-assigned identifier for the ad. */
          id: number;
          /** Advertiser-given name of the ad. */
          name?: string | null;
          /** Advertiser intent for the ad to serve. */
          status?: "ENABLED" | "PAUSED" | null;
          /** Ad account the ad belongs to. */
          adAccountId?: number | null;
          /** Campaign the ad belongs to. */
          campaignId?: number | null;
          /** Ad group the ad belongs to. */
          adGroupId?: number | null;
          /** Ad creative this ad serves. */
          creativeId?: number | null;
          /** System-computed delivery state. */
          systemStatus?: "RUNNING" | "NOT_RUNNING" | null;
          /** Reasons the ad is not delivering, populated when systemStatus is NOT_RUNNING. */
          systemStatusReasons?: Array<string> | null;
          /** Reasons the ad delivers at reduced capacity without stopping. */
          systemStatusLimitingReasons?: Array<string> | null;
          /** Rolled-up delivery state combining ad, ad group and campaign conditions. */
          displayStatus?: "RUNNING" | "PAUSED" | "ON_HOLD" | "AD_GROUP_ON_HOLD" | "CAMPAIGN_ON_HOLD" | "LIMITED" | "PROCESSING" | "DELETED" | null;
          /** When the ad was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the ad was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the ad has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read the full record of one ad account, including its delegated advertiser resources and the reasons it is not operational. */
    "apple_ads.get_ad_account": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** An ad account, the container that owns campaigns and carries the advertising settings inherited from its organization. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        adAccount: {
          /** System-assigned identifier for the ad account. */
          id: number;
          /** Name of the ad account, unique within the parent organization. */
          name?: string | null;
          /** Identifier of the parent organization. It can never change. */
          orgId?: number | null;
          /** Time zone of the ad account, inherited from the parent organization, for example America/New_York. */
          timezone?: string | null;
          /** Currency of the ad account, inherited from the parent organization. */
          currency?: "USD" | "RMB" | "AUD" | "CAD" | "EUR" | "GBP" | "JPY" | "MXN" | "NZD" | "RUB" | "CNY" | "INR" | "BRL" | "IDR" | null;
          /** Payment model inherited from the parent organization. LOC is line of credit, invoiced monthly and required for budget orders; PAYG is pay as you go, charged per campaign spend. */
          paymentModel?: "PAYG" | "LOC" | null;
          /** Whether the ad account is operational. An INACTIVE account cannot run campaigns. */
          systemStatus?: "ACTIVE" | "INACTIVE" | null;
          /** Reasons the ad account is INACTIVE, empty while it is ACTIVE. */
          systemStatusReasons?: Array<string> | null;
          /** Advertiser resources delegated to this ad account. */
          delegations?: Array<{
            /** Identifier of the delegated resource: the Content Provider ID (CPID) for CONTENT_PROVIDER, or the Brand ID for BUSINESS_BRAND. */
            resourceId?: string | null;
            /** Kind of delegated resource. */
            resourceType?: "CONTENT_PROVIDER" | "BUSINESS_BRAND" | null;
            /** Display name of the delegated resource: the brand name for BUSINESS_BRAND, or the App Store Connect provider name for CONTENT_PROVIDER. */
            resourceName?: string | null;
            [key: string]: unknown;
          }> | null;
          /** Advertising surface the ad account is authorized for. */
          productFeatures?: Array<string> | null;
          /** When the ad account was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the ad account was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read one ad group by identifier, including its full targeting and bid strategy. Apple Ads returns the ad group regardless of its deleted state. */
    "apple_ads.get_ad_group": {
      input: {
        /** Identifier of the ad group. */
        adGroupId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** An ad group, the unit inside a campaign that carries one targeting configuration, bid strategy and schedule for its ads. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        adGroup: {
          /** System-assigned identifier for the ad group. */
          id: number;
          /** Advertiser-given ad group name. */
          name?: string | null;
          /** Ad account the ad group belongs to. */
          adAccountId?: number | null;
          /** Campaign the ad group belongs to. */
          campaignId?: number | null;
          /** Scheduled start of the ad group. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          startTime?: string | null;
          /** Scheduled end of the ad group, or null when it inherits the campaign end date. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          endTime?: string | null;
          /** Delivery unit that triggers billing. */
          pricingModel?: "CPA" | "CPM" | "CPT" | null;
          /** Whether Search Match automatically matches relevant search terms for this ad group. */
          automatedKeywordsOptIn?: boolean | null;
          /** Whether automated keyword generation is required for this ad group. */
          automatedKeywordsRequired?: boolean | null;
          /** Advertiser intent for the ad group to serve. */
          status?: "ENABLED" | "PAUSED" | null;
          /** System-computed delivery state. */
          systemStatus?: "RUNNING" | "NOT_RUNNING" | null;
          /** Reasons the ad group is not delivering. */
          systemStatusReasons?: Array<string> | null;
          /** Reasons the ad group delivers below its full potential. */
          systemStatusLimitingReasons?: Array<string> | null;
          /** Rolled-up delivery state combining advertiser intent and system evaluation. CAMPAIGN_ON_HOLD means the parent campaign is what is blocking delivery. */
          displayStatus?: "RUNNING" | "PAUSED" | "ON_HOLD" | "CAMPAIGN_ON_HOLD" | "LIMITED" | "PROCESSING" | "DELETED" | null;
          /** Bid strategy governing auction participation for this ad group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          bidStrategy?: {
            /** The bid strategy type. */
            bidStrategyType?: "MANUAL_CPT" | "MANUAL_CPM" | "MAX_CONVERSIONS" | "MAX_ENGAGEMENTS" | null;
            /** The optimization goal. */
            bidStrategyGoal?: "TAP" | "IMPRESSION" | "INSTALL" | null;
            /** Bid ceiling for each auction entry. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            bid?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Audience and delivery targeting for the ad group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          targeting?: {
            /** Country targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            country?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** State or province targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            adminArea?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** City targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            locality?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Postal code targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            postalCode?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Radius targeting around business locations. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            radius?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Device class targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            deviceClass?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Lower bound of the target age range. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            minAge?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Upper bound of the target age range. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            maxAge?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Gender targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            gender?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** App Store category targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            appCategory?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** App downloader targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            appDownloader?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Hour-of-week targeting, as slot indexes from 0 to 167. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            daypart?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Location group targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            locationGroup?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Deprecated cost-per-acquisition cap, superseded by bidStrategy with MAX_CONVERSIONS. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpaCap?: {
            /** The target cost-per-acquisition amount. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            value?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** When the ad group was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the ad group was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the ad group has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve App Store ad group performance, one row per ad group with metrics aggregated over the date range and optionally broken out by granularity and dimension. Every App Store report request must carry a filter on campaignId; this action rejects a request without one before it reaches Apple Ads. Add an adGroupId filter to narrow the report further. */
    "apple_ads.get_ad_group_report": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Date range, time zone and optional time-series breakdown for the report. */
        timeRange: {
          /**
           * First day included in the report, in YYYY-MM-DD format.
           * @format date
           */
          start: string;
          /**
           * Last day included in the report, in YYYY-MM-DD format.
           * @format date
           */
          end: string;
          /** Time zone the date range is interpreted in. ORTZ is the org's reporting time zone and is the default. */
          timeZone?: "ORTZ" | "UTC";
          /** Time-series breakdown for granularMetrics. HOURLY needs a date range starting within the last 7 days, DAILY within the last 90 days and spanning more than one day, WEEKLY within the last 365 days with an end date at least 14 days in the past, and MONTHLY an end date at least 90 days in the past. Omit it to get a single aggregate in totalMetrics. */
          granularity?: "HOURLY" | "DAILY" | "WEEKLY" | "MONTHLY";
        };
        /** Filter conditions combined with logical AND. */
        filters?: Array<{
          /**
           * Name of the field to filter on. Apple Ads accepts entity fields such as campaignId and adGroupId as well as metric fields such as impressions, taps and localSpend; the exact set depends on the entity level.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Comparison operator. Numeric fields accept the range operators such as GREATER_THAN and BETWEEN; string fields accept EQUALS, IN and the pattern operators. */
          operator: "BETWEEN" | "CONTAINS" | "CONTAINS_ANY" | "CONTAINS_ALL" | "ENDS_WITH" | "EQUALS" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "IN" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "LIKE" | "NOT_EQUALS" | "STARTS_WITH";
          /** Operand to compare against. Pass an array for IN, BETWEEN, CONTAINS_ANY and CONTAINS_ALL, and either a bare value or a single-element array for the single-value operators. */
          value?: unknown;
        }>;
        /** Sort directives applied in order, with later entries breaking ties. The default is to sort by entity id ascending. */
        sorting?: Array<{
          /**
           * Name of the field to sort on, for example localSpend or impressions.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /** Field names to return on each row. Omit it to receive every field. */
        fields?: Array<string>;
        /** Dimensions to break each ad group's metrics out by, producing one row per dimension value. Omit it to get one aggregate row per ad group. */
        groupBy?: Array<"deviceClass" | "ageRange" | "gender" | "countryCode" | "adminArea" | "locality" | "storefront" | "countryOrRegion">;
        /** Extra rows to include. GRAND_TOTAL adds a summary of every row; EMPTY_METRICS adds rows for ad groups with no activity and cannot be combined with groupBy. */
        includeRows?: Array<"GRAND_TOTAL" | "EMPTY_METRICS">;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of rows to return on this page. The maximum is 5000 and Apple Ads defaults to 100.
         * @maximum 5000
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Ad group report rows on this page. */
        rows: Array<{
          /** Ad group attributes captured at report time, plus the groupBy dimension values applied to this row. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          metadata?: {
            /** System-assigned identifier for the ad group. */
            id?: number | null;
            /** Campaign the ad group belongs to. */
            campaignId?: number | null;
            /** Ad account the ad group belongs to. */
            adAccountId?: number | null;
            /** Ad group name as configured at report time. */
            name?: string | null;
            /** Advertiser intent for the ad group to serve. */
            status?: "ENABLED" | "PAUSED" | null;
            /** Whether the ad group has been soft-deleted. */
            deleted?: boolean | null;
            /** System-computed delivery state. */
            systemStatus?: "RUNNING" | "NOT_RUNNING" | null;
            /** Reasons contributing to the current system status. */
            systemStatusReasons?: Array<string> | null;
            /** Reasons delivery stayed below its maximum potential. */
            systemStatusLimitingReasons?: Array<string> | null;
            /** Whether the ad group opted in to automated keywords. */
            automatedKeywordsOptIn?: boolean | null;
            /** Whether automated keywords are required for this ad group. */
            automatedKeywordsRequired?: boolean | null;
            /** How the ad group is priced. */
            pricingModel?: "CPA" | "CPM" | "CPT" | null;
            /** Rolled-up delivery state combining ad group and campaign conditions. */
            displayStatus?: string | null;
            /** When the ad group was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            modificationTime?: string | null;
            /** When the ad group was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            creationTime?: string | null;
            /** Scheduled start of the ad group. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            startTime?: string | null;
            /** Scheduled end of the ad group. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            endTime?: string | null;
            /** Lightweight summary of the parent campaign. Apple Ads documents no fields on it beyond what the row already carries. */
            campaign?: Record<string, unknown> | null;
            /** Bid strategy in effect at report time. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            bidStrategy?: {
              /** The bid strategy applied. */
              bidStrategyType?: "MANUAL_CPT" | "MANUAL_CPM" | "MAX_CONVERSIONS" | "MAX_ENGAGEMENTS" | null;
              /** Bid amount for manual strategies, or null for automated strategies. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              bid?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Cost-per-acquisition cap for the ad group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpaCap?: {
              /** The monetary amount. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              value?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Value of the countryOrRegion groupBy dimension for this row, or null when the request did not group by it. */
            countryOrRegion?: string | null;
            /** Value of the deviceClass groupBy dimension for this row, or null when the request did not group by it. */
            deviceClass?: string | null;
            /** Value of the gender groupBy dimension for this row, or null when the request did not group by it. */
            gender?: string | null;
            /** Value of the ageRange groupBy dimension for this row, or null when the request did not group by it. */
            ageRange?: string | null;
            /** Value of the locality groupBy dimension for this row, or null when the request did not group by it. */
            locality?: string | null;
            /** Value of the countryCode groupBy dimension for this row, or null when the request did not group by it. */
            countryCode?: string | null;
            /** Value of the adminArea groupBy dimension for this row, or null when the request did not group by it. */
            adminArea?: string | null;
            [key: string]: unknown;
          } | null;
          /** Metrics aggregated over the whole requested date range. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          totalMetrics?: {
            /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
            date?: string | null;
            /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            localSpend?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total ad impressions. */
            impressions?: number | null;
            /** Total ad taps. */
            taps?: number | null;
            /** Tap-through rate, which is taps divided by impressions. */
            ttr?: number | null;
            /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpt?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpm?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Installs attributed to taps. */
            tapInstalls?: number | null;
            /** Average cost per tap-attributed install. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tapInstallCPI?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** First-time installs across all attribution types. */
            totalNewDownloads?: number | null;
            /** Installs of an app the user previously had installed, across all attribution types. */
            totalRedownloads?: number | null;
            /** Installs attributed to view-through, impression-based attribution. */
            viewInstalls?: number | null;
            /** Installs combining tap and view attribution. */
            totalInstalls?: number | null;
            /** First-time installs attributed to taps. */
            tapNewDownloads?: number | null;
            /** Redownloads attributed to taps. */
            tapRedownloads?: number | null;
            /** First-time installs attributed to view-through impressions. */
            viewNewDownloads?: number | null;
            /** Redownloads attributed to view-through impressions. */
            viewRedownloads?: number | null;
            /** Average cost per install across all attribution types. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            totalAvgCPI?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total installs divided by taps. */
            totalInstallRate?: number | null;
            /** Tap-attributed installs divided by taps. */
            tapInstallRate?: number | null;
            /** Pre-orders placed attributed to taps. */
            tapPreOrdersPlaced?: number | null;
            /** Pre-orders placed attributed to view-through impressions. */
            viewPreOrdersPlaced?: number | null;
            /** Pre-orders placed across all attribution types. */
            totalPreOrdersPlaced?: number | null;
            [key: string]: unknown;
          } | null;
          /** Metrics broken down by the requested granularity, one entry per period. Apple Ads omits it when the request has no granularity. */
          granularMetrics?: Array<{
            /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
            date?: string | null;
            /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            localSpend?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total ad impressions. */
            impressions?: number | null;
            /** Total ad taps. */
            taps?: number | null;
            /** Tap-through rate, which is taps divided by impressions. */
            ttr?: number | null;
            /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpt?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpm?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Installs attributed to taps. */
            tapInstalls?: number | null;
            /** Average cost per tap-attributed install. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tapInstallCPI?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** First-time installs across all attribution types. */
            totalNewDownloads?: number | null;
            /** Installs of an app the user previously had installed, across all attribution types. */
            totalRedownloads?: number | null;
            /** Installs attributed to view-through, impression-based attribution. */
            viewInstalls?: number | null;
            /** Installs combining tap and view attribution. */
            totalInstalls?: number | null;
            /** First-time installs attributed to taps. */
            tapNewDownloads?: number | null;
            /** Redownloads attributed to taps. */
            tapRedownloads?: number | null;
            /** First-time installs attributed to view-through impressions. */
            viewNewDownloads?: number | null;
            /** Redownloads attributed to view-through impressions. */
            viewRedownloads?: number | null;
            /** Average cost per install across all attribution types. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            totalAvgCPI?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total installs divided by taps. */
            totalInstallRate?: number | null;
            /** Tap-attributed installs divided by taps. */
            tapInstallRate?: number | null;
            /** Pre-orders placed attributed to taps. */
            tapPreOrdersPlaced?: number | null;
            /** Pre-orders placed attributed to view-through impressions. */
            viewPreOrdersPlaced?: number | null;
            /** Pre-orders placed across all attribution types. */
            totalPreOrdersPlaced?: number | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
        /** Totals across every row of the result set, or null when GRAND_TOTAL was not requested. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        grandTotal: {
          /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
          date?: string | null;
          /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          localSpend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Total ad impressions. */
          impressions?: number | null;
          /** Total ad taps. */
          taps?: number | null;
          /** Tap-through rate, which is taps divided by impressions. */
          ttr?: number | null;
          /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpt?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpm?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Installs attributed to taps. */
          tapInstalls?: number | null;
          /** Average cost per tap-attributed install. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          tapInstallCPI?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** First-time installs across all attribution types. */
          totalNewDownloads?: number | null;
          /** Installs of an app the user previously had installed, across all attribution types. */
          totalRedownloads?: number | null;
          /** Installs attributed to view-through, impression-based attribution. */
          viewInstalls?: number | null;
          /** Installs combining tap and view attribution. */
          totalInstalls?: number | null;
          /** First-time installs attributed to taps. */
          tapNewDownloads?: number | null;
          /** Redownloads attributed to taps. */
          tapRedownloads?: number | null;
          /** First-time installs attributed to view-through impressions. */
          viewNewDownloads?: number | null;
          /** Redownloads attributed to view-through impressions. */
          viewRedownloads?: number | null;
          /** Average cost per install across all attribution types. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          totalAvgCPI?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Total installs divided by taps. */
          totalInstallRate?: number | null;
          /** Tap-attributed installs divided by taps. */
          tapInstallRate?: number | null;
          /** Pre-orders placed attributed to taps. */
          tapPreOrdersPlaced?: number | null;
          /** Pre-orders placed attributed to view-through impressions. */
          viewPreOrdersPlaced?: number | null;
          /** Pre-orders placed across all attribution types. */
          totalPreOrdersPlaced?: number | null;
          [key: string]: unknown;
        } | null;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of rows matching the query across all pages, or null when Apple Ads leaves it out. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve App Store ad performance, one row per ad with metrics aggregated over the date range. Every App Store report request must carry a filter on campaignId; this action rejects a request without one before it reaches Apple Ads. Ad-level reports do not support HOURLY granularity or the demographic dimensions. */
    "apple_ads.get_ad_report": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Date range, time zone and optional time-series breakdown for the report. */
        timeRange: {
          /**
           * First day included in the report, in YYYY-MM-DD format.
           * @format date
           */
          start: string;
          /**
           * Last day included in the report, in YYYY-MM-DD format.
           * @format date
           */
          end: string;
          /** Time zone the date range is interpreted in. ORTZ is the org's reporting time zone and is the default. */
          timeZone?: "ORTZ" | "UTC";
          /** Time-series breakdown for granularMetrics. Ad-level reports have no HOURLY option: DAILY needs a date range starting within the last 90 days and spanning more than one day, WEEKLY within the last 365 days with an end date at least 14 days in the past, and MONTHLY an end date at least 90 days in the past. Omit it to get a single aggregate in totalMetrics. */
          granularity?: "DAILY" | "WEEKLY" | "MONTHLY";
        };
        /** Filter conditions combined with logical AND. */
        filters?: Array<{
          /**
           * Name of the field to filter on. Apple Ads accepts entity fields such as campaignId and adGroupId as well as metric fields such as impressions, taps and localSpend; the exact set depends on the entity level.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Comparison operator. Numeric fields accept the range operators such as GREATER_THAN and BETWEEN; string fields accept EQUALS, IN and the pattern operators. */
          operator: "BETWEEN" | "CONTAINS" | "CONTAINS_ANY" | "CONTAINS_ALL" | "ENDS_WITH" | "EQUALS" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "IN" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "LIKE" | "NOT_EQUALS" | "STARTS_WITH";
          /** Operand to compare against. Pass an array for IN, BETWEEN, CONTAINS_ANY and CONTAINS_ALL, and either a bare value or a single-element array for the single-value operators. */
          value?: unknown;
        }>;
        /** Sort directives applied in order, with later entries breaking ties. The default is to sort by entity id ascending. */
        sorting?: Array<{
          /**
           * Name of the field to sort on, for example localSpend or impressions.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /** Field names to return on each row. Omit it to receive every field. */
        fields?: Array<string>;
        /** Dimensions to break each ad's metrics out by. Ad-level reports support storefront and countryOrRegion only. */
        groupBy?: Array<"storefront" | "countryOrRegion">;
        /** Extra rows to include. GRAND_TOTAL adds a summary of every row; EMPTY_METRICS adds rows for ads with no activity and cannot be combined with groupBy. */
        includeRows?: Array<"GRAND_TOTAL" | "EMPTY_METRICS">;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of rows to return on this page. The maximum is 5000 and Apple Ads defaults to 100.
         * @maximum 5000
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Ad report rows on this page. */
        rows: Array<{
          /** Ad attributes captured at report time, plus the groupBy dimension values applied to this row. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          metadata?: {
            /** System-assigned identifier for the ad. */
            id?: number | null;
            /** Ad name as configured at report time. */
            name?: string | null;
            /** Whether the ad has been soft-deleted. */
            deleted?: boolean | null;
            /** Advertiser intent for the ad to serve. */
            status?: "ENABLED" | "PAUSED" | null;
            /** System-computed delivery state. */
            systemStatus?: "RUNNING" | "NOT_RUNNING" | null;
            /** Reasons contributing to the current system status. */
            systemStatusReasons?: Array<string> | null;
            /** Reasons delivery stayed below its maximum potential. */
            systemStatusLimitingReasons?: Array<string> | null;
            /** Ad account the ad belongs to. */
            adAccountId?: number | null;
            /** Campaign the ad belongs to. */
            campaignId?: number | null;
            /** Ad group the ad belongs to. */
            adGroupId?: number | null;
            /** When the ad was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            creationTime?: string | null;
            /** When the ad was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            modificationTime?: string | null;
            /** Rolled-up delivery state combining ad, ad group and campaign conditions. */
            displayStatus?: string | null;
            /** Creative snapshot for the ad. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            creative?: {
              /** System-assigned identifier for the creative. */
              id?: number | null;
              /** Creative format. */
              creativeType?: "CUSTOM_PRODUCT_PAGE" | "DEFAULT_PRODUCT_PAGE" | null;
              /** Whether the creative was eligible to serve at report time. */
              systemStatus?: "VALID" | "INVALID" | "PENDING" | null;
              /** Content configuration of the creative. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              creativeSpec?: {
                /** BCP 47 language tag of the creative, for example en-US. */
                language?: string | null;
                [key: string]: unknown;
              } | null;
              /** Click-through destination of the creative. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              destination?: {
                /** Destination parameters keyed by parameter name. The content varies by creative and destination type. */
                parameters?: Record<string, unknown> | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Value of the countryOrRegion groupBy dimension for this row, or null when the request did not group by it. */
            countryOrRegion?: string | null;
            /** Value of the deviceClass groupBy dimension for this row, or null when the request did not group by it. */
            deviceClass?: string | null;
            [key: string]: unknown;
          } | null;
          /** Metrics aggregated over the whole requested date range. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          totalMetrics?: {
            /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
            date?: string | null;
            /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            localSpend?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total ad impressions. */
            impressions?: number | null;
            /** Total ad taps. */
            taps?: number | null;
            /** Tap-through rate, which is taps divided by impressions. */
            ttr?: number | null;
            /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpt?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpm?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Installs attributed to taps. */
            tapInstalls?: number | null;
            /** Average cost per tap-attributed install. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tapInstallCPI?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** First-time installs across all attribution types. */
            totalNewDownloads?: number | null;
            /** Installs of an app the user previously had installed, across all attribution types. */
            totalRedownloads?: number | null;
            /** Installs attributed to view-through, impression-based attribution. */
            viewInstalls?: number | null;
            /** Installs combining tap and view attribution. */
            totalInstalls?: number | null;
            /** First-time installs attributed to taps. */
            tapNewDownloads?: number | null;
            /** Redownloads attributed to taps. */
            tapRedownloads?: number | null;
            /** First-time installs attributed to view-through impressions. */
            viewNewDownloads?: number | null;
            /** Redownloads attributed to view-through impressions. */
            viewRedownloads?: number | null;
            /** Average cost per install across all attribution types. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            totalAvgCPI?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total installs divided by taps. */
            totalInstallRate?: number | null;
            /** Tap-attributed installs divided by taps. */
            tapInstallRate?: number | null;
            /** Pre-orders placed attributed to taps. */
            tapPreOrdersPlaced?: number | null;
            /** Pre-orders placed attributed to view-through impressions. */
            viewPreOrdersPlaced?: number | null;
            /** Pre-orders placed across all attribution types. */
            totalPreOrdersPlaced?: number | null;
            [key: string]: unknown;
          } | null;
          /** Metrics broken down by the requested granularity, one entry per period. Apple Ads omits it when the request has no granularity. */
          granularMetrics?: Array<{
            /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
            date?: string | null;
            /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            localSpend?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total ad impressions. */
            impressions?: number | null;
            /** Total ad taps. */
            taps?: number | null;
            /** Tap-through rate, which is taps divided by impressions. */
            ttr?: number | null;
            /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpt?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpm?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Installs attributed to taps. */
            tapInstalls?: number | null;
            /** Average cost per tap-attributed install. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tapInstallCPI?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** First-time installs across all attribution types. */
            totalNewDownloads?: number | null;
            /** Installs of an app the user previously had installed, across all attribution types. */
            totalRedownloads?: number | null;
            /** Installs attributed to view-through, impression-based attribution. */
            viewInstalls?: number | null;
            /** Installs combining tap and view attribution. */
            totalInstalls?: number | null;
            /** First-time installs attributed to taps. */
            tapNewDownloads?: number | null;
            /** Redownloads attributed to taps. */
            tapRedownloads?: number | null;
            /** First-time installs attributed to view-through impressions. */
            viewNewDownloads?: number | null;
            /** Redownloads attributed to view-through impressions. */
            viewRedownloads?: number | null;
            /** Average cost per install across all attribution types. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            totalAvgCPI?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total installs divided by taps. */
            totalInstallRate?: number | null;
            /** Tap-attributed installs divided by taps. */
            tapInstallRate?: number | null;
            /** Pre-orders placed attributed to taps. */
            tapPreOrdersPlaced?: number | null;
            /** Pre-orders placed attributed to view-through impressions. */
            viewPreOrdersPlaced?: number | null;
            /** Pre-orders placed across all attribution types. */
            totalPreOrdersPlaced?: number | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
        /** Totals across every row of the result set, or null when GRAND_TOTAL was not requested. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        grandTotal: {
          /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
          date?: string | null;
          /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          localSpend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Total ad impressions. */
          impressions?: number | null;
          /** Total ad taps. */
          taps?: number | null;
          /** Tap-through rate, which is taps divided by impressions. */
          ttr?: number | null;
          /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpt?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpm?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Installs attributed to taps. */
          tapInstalls?: number | null;
          /** Average cost per tap-attributed install. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          tapInstallCPI?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** First-time installs across all attribution types. */
          totalNewDownloads?: number | null;
          /** Installs of an app the user previously had installed, across all attribution types. */
          totalRedownloads?: number | null;
          /** Installs attributed to view-through, impression-based attribution. */
          viewInstalls?: number | null;
          /** Installs combining tap and view attribution. */
          totalInstalls?: number | null;
          /** First-time installs attributed to taps. */
          tapNewDownloads?: number | null;
          /** Redownloads attributed to taps. */
          tapRedownloads?: number | null;
          /** First-time installs attributed to view-through impressions. */
          viewNewDownloads?: number | null;
          /** Redownloads attributed to view-through impressions. */
          viewRedownloads?: number | null;
          /** Average cost per install across all attribution types. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          totalAvgCPI?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Total installs divided by taps. */
          totalInstallRate?: number | null;
          /** Tap-attributed installs divided by taps. */
          tapInstallRate?: number | null;
          /** Pre-orders placed attributed to taps. */
          tapPreOrdersPlaced?: number | null;
          /** Pre-orders placed attributed to view-through impressions. */
          viewPreOrdersPlaced?: number | null;
          /** Pre-orders placed across all attribution types. */
          totalPreOrdersPlaced?: number | null;
          [key: string]: unknown;
        } | null;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of rows matching the query across all pages, or null when Apple Ads leaves it out. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** List the advertiser resources of one type that the organization can delegate to an ad account. Use the returned resourceId values in the delegations of create_ad_account and update_ad_account. */
    "apple_ads.get_advertiser_resources": {
      input: {
        /** Kind of advertiser resource to list. CONTENT_PROVIDER returns the App Store Connect content providers used for App Store advertising; BUSINESS_BRAND returns the brands used for Apple Maps advertising. */
        resourceType: "CONTENT_PROVIDER" | "BUSINESS_BRAND";
      };
      output: {
        /** Advertiser resources of the requested type that are visible to the API user. */
        advertiserResources: Array<{
          /** Identifier of the delegated resource: the Content Provider ID (CPID) for CONTENT_PROVIDER, or the Brand ID for BUSINESS_BRAND. */
          resourceId?: string | null;
          /** Kind of delegated resource. */
          resourceType?: "CONTENT_PROVIDER" | "BUSINESS_BRAND" | null;
          /** Display name of the delegated resource: the brand name for BUSINESS_BRAND, or the App Store Connect provider name for CONTENT_PROVIDER. */
          resourceName?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Read the App Store metadata of one app by its Adam ID, including its genres, supported device classes and the countries or regions it is available in. Apple Ads answers with 404 when no app matches the Adam ID. */
    "apple_ads.get_app": {
      input: {
        /** Adam ID of the app. */
        adamId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** App Store metadata for one app. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        app: {
          /** Adam ID of the app as a decimal string. It is the same value a campaign uses as promotedObjectId. */
          id: string;
          /** Application display name. */
          appName?: string | null;
          /** Developer or company name from App Store Connect. */
          artistName?: string | null;
          /** Primary language of the app as a BCP-47 code, for example en-US. */
          primaryLanguage?: string | null;
          /** Primary App Store genre category. */
          primaryGenre?: string | null;
          /** Secondary App Store genre category, if one is assigned. */
          secondaryGenre?: string | null;
          /** Device families the app supports. Check them against the device-class targeting of the ad group before launching. */
          deviceClasses?: Array<"IPHONE" | "IPAD"> | null;
          /** URL of the app icon image. */
          iconPictureUrl?: string | null;
          /** Whether the app is currently available as a pre-order. */
          isPreorder?: boolean | null;
          /** ISO 3166-1 alpha-2 country codes where the app is available. A campaign's countryOrRegion targeting has to be a subset of this list, otherwise that market serves no impressions. */
          availableStorefronts?: Array<string> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read one ad creative rejection reason by identifier, including its reason code, the level it applies at and the reviewer comment. */
    "apple_ads.get_app_rejection_reasons": {
      input: {
        /** Identifier of the rejection reason record. */
        rejectionReasonId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** One ad creative rejection reason recorded during Apple review. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        rejectionReason: {
          /** System-assigned identifier for the rejection reason record. */
          id: number;
          /** Adam ID of the app whose product page triggered the rejection, when the rejection is app-scoped. */
          adamId?: number | null;
          /** Identifier of the ad creative that was rejected. */
          creativeId?: number | null;
          /** Product page identifier associated with the rejection. */
          productPageId?: string | null;
          /** UUID of the asset that triggered the rejection. */
          assetId?: string | null;
          /** Supply source the rejection applies to. */
          supplySource?: string | null;
          /** Supply placement the rejection applies to. */
          supplyPlacement?: string | null;
          /** Country or region code the rejection applies to. */
          countryOrRegion?: string | null;
          /** Language code the rejection applies to. */
          languageCode?: string | null;
          /** Type of rejection reason, for example REJECTION_REASON. */
          reasonType?: string | null;
          /** Code for the specific rejection reason. */
          reasonCode?: string | null;
          /** Additional context for the rejection. */
          comment?: string | null;
          /** Level the rejection applies at. */
          reasonLevel?: "DEFAULT_PRODUCT_PAGE" | "DEFAULT_PRODUCT_PAGE_LOCALE" | "CUSTOM_PRODUCT_PAGE" | "CUSTOM_PRODUCT_PAGE_LOCALE" | null;
          /** When the rejection reason record was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the rejection reason record was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read one creative asset by identifier, including its eligibility status. Apple Ads returns the asset regardless of its deleted state, and this is the only way to read a variant crop, which query_assets omits. */
    "apple_ads.get_asset": {
      input: {
        /**
         * Identifier of the asset. Apple Ads assigns it as a UUID.
         * @format uuid
         */
        assetId: string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** A creative asset in one ad account's asset library, with its media metadata and policy eligibility. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        asset: {
          /** System-assigned identifier for the asset, a UUID. */
          id: string;
          /** User-facing asset name or description. */
          name?: string | null;
          /** Media type of the asset. */
          assetType?: "IMAGE" | null;
          /** Asset identifier assigned by the provider system, for example the App Store Connect asset identifier. */
          providerAssetId?: string | null;
          /** Identifier of the promoted object: the adamId for an App Store app, or the brand identifier for an Apple Maps brand. */
          promotedObjectId?: string | null;
          /** Type of the promoted object. */
          promotedObjectType?: "APPSTORE_APP" | "BUSINESS_BRAND" | null;
          /** Provider-specific metadata whose keys vary by provider. App Store Connect assets carry keys such as appPreviewDevice and assetGenId, and assets uploaded for Apple Maps brands carry an empty object. */
          providerAssetMetadata?: Record<string, unknown> | null;
          /** Image metadata Apple Ads derived when it ingested the asset. It is present when assetType is IMAGE. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          assetDetails?: {
            /** Width of the image in pixels. */
            width?: number | null;
            /** Height of the image in pixels. */
            height?: number | null;
            /** File format of the image. */
            format?: "JPEG" | "JPG" | "PNG" | "HEIC" | "HEIF" | "SVG" | "WEBP" | null;
            /** File size in bytes. */
            sizeBytes?: number | null;
            /** Aspect-ratio classification of the image. */
            orientation?: "PORTRAIT" | "LANDSCAPE" | "SQUARE" | null;
            /** Source URL of the image at the provider system. */
            providerAssetUrl?: string | null;
            /** Provider token used to reference the image in provider-specific APIs. */
            providerToken?: string | null;
            /** File checksum for verifying asset integrity after transfer. */
            checkSum?: string | null;
            /** Display order position within an asset collection. */
            sortPosition?: number | null;
            /** Ad account the asset belongs to, present for custom assets. Apple Ads returns it as a string in some payloads and as a number in others. */
            adAccountId?: string | number | null;
            [key: string]: unknown;
          } | null;
          /** Identifier of the parent asset when this asset is a variant such as a crop or a resize, or null for an original asset. */
          parentAssetId?: string | null;
          /** Identifiers of this asset's variants. */
          variantIds?: Array<string> | null;
          /** Policy evaluation result for the asset. Check it before referencing the asset in a creative: INELIGIBLE and PENDING assets cannot serve anywhere, and LIMITED assets only serve outside their blocked groups. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          eligibility?: {
            /** Overall eligibility status. */
            status?: "ELIGIBLE" | "INELIGIBLE" | "LIMITED" | "PENDING" | "UNDEFINED" | null;
            /** Constraint groups where the asset is blocked from serving. */
            blockedGroups?: Array<{
              /** Supply placements scoped by this constraint. */
              supplyPlacement?: Array<string> | null;
              /** Countries or regions scoped by this constraint. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            /** Constraint groups where the asset is explicitly allowed to serve. */
            allowedGroups?: Array<{
              /** Supply placements scoped by this constraint. */
              supplyPlacement?: Array<string> | null;
              /** Countries or regions scoped by this constraint. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          } | null;
          /** When the asset was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the asset was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the asset has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read one brand by identifier, including its categories and its current ad serving eligibility. */
    "apple_ads.get_brand": {
      input: {
        /** Identifier of the brand. */
        brandId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** A business registered in Apple Ads that can be promoted through Ads on Apple Maps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        brand: {
          /** Identifier of the brand. It is the value you pass as promotedObjectId when creating a BUSINESS_BRAND campaign. */
          id: string;
          /** Primary display name for the brand. */
          name?: string | null;
          /** Primary market for the brand as an ISO 3166-1 alpha-2 country or region code. */
          countryOrRegion?: string | null;
          /** Business category taxonomy identifiers for the brand. The first entry is the primary category. */
          categories?: Array<string> | null;
          /** Ad serving eligibility for the brand. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          eligibility?: {
            /** Overall eligibility status for the entity. */
            status?: "ELIGIBLE" | "INELIGIBLE" | "LIMITED" | "PENDING" | "UNDEFINED" | null;
            /** Placement and market combinations where the entity is blocked from serving. */
            blockedGroups?: Array<{
              /** Supply placements this constraint applies to. */
              supplyPlacement?: Array<string> | null;
              /** Countries or regions this constraint applies to. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            /** Placement and market combinations where the entity is allowed to serve. */
            allowedGroups?: Array<{
              /** Supply placements this constraint applies to. */
              supplyPlacement?: Array<string> | null;
              /** Countries or regions this constraint applies to. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            /** When Apple Ads last evaluated eligibility. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            modificationTime?: string | null;
            [key: string]: unknown;
          } | null;
          /** When the brand record was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the brand record was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve Apple Maps ad group performance, one row per ad group with spend, engagement and Apple Maps action metrics aggregated over the date range. Filter on campaignId or adGroupId to scope the report. */
    "apple_ads.get_brand_ad_group_report": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Date range, time zone and optional time-series breakdown for the report. */
        timeRange: {
          /**
           * First day included in the report, in YYYY-MM-DD format.
           * @format date
           */
          start: string;
          /**
           * Last day included in the report, in YYYY-MM-DD format.
           * @format date
           */
          end: string;
          /** Time zone the date range is interpreted in. ORTZ is the org's reporting time zone and is the default. */
          timeZone?: "ORTZ" | "UTC";
          /** Time-series breakdown for granularMetrics. HOURLY needs a date range starting within the last 7 days, DAILY within the last 90 days and spanning more than one day, WEEKLY within the last 365 days with an end date at least 14 days in the past, and MONTHLY an end date at least 90 days in the past. Omit it to get a single aggregate in totalMetrics. */
          granularity?: "HOURLY" | "DAILY" | "WEEKLY" | "MONTHLY";
        };
        /** Filter conditions combined with logical AND. */
        filters?: Array<{
          /**
           * Name of the field to filter on. Apple Ads accepts entity fields such as campaignId and adGroupId as well as metric fields such as impressions, taps and localSpend; the exact set depends on the entity level.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Comparison operator. Numeric fields accept the range operators such as GREATER_THAN and BETWEEN; string fields accept EQUALS, IN and the pattern operators. */
          operator: "BETWEEN" | "CONTAINS" | "CONTAINS_ANY" | "CONTAINS_ALL" | "ENDS_WITH" | "EQUALS" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "IN" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "LIKE" | "NOT_EQUALS" | "STARTS_WITH";
          /** Operand to compare against. Pass an array for IN, BETWEEN, CONTAINS_ANY and CONTAINS_ALL, and either a bare value or a single-element array for the single-value operators. */
          value?: unknown;
        }>;
        /** Sort directives applied in order, with later entries breaking ties. The default is to sort by entity id ascending. */
        sorting?: Array<{
          /**
           * Name of the field to sort on, for example localSpend or impressions.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /** Field names to return on each row. Omit it to receive every field. */
        fields?: Array<string>;
        /** Dimensions to break each ad group's metrics out by: device type, business location or ad placement. */
        groupBy?: Array<"deviceClass" | "locationId" | "supplyPlacement">;
        /** Extra rows to include. GRAND_TOTAL adds a summary of every row. Apple Maps reports do not support EMPTY_METRICS. */
        includeRows?: Array<"GRAND_TOTAL">;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of rows to return on this page. The maximum is 5000 and Apple Ads defaults to 100.
         * @maximum 5000
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Ad group report rows on this page. */
        rows: Array<{
          /** Apple Maps ad group attributes captured at report time, plus the groupBy dimension values applied to this row. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          metadata?: {
            /** System-assigned identifier for the ad group. */
            id?: number | null;
            /** Campaign the ad group belongs to. */
            campaignId?: number | null;
            /** Ad account the ad group belongs to. */
            adAccountId?: number | null;
            /** Ad group name as configured at report time. */
            name?: string | null;
            /** Advertiser intent for the ad group to serve. */
            status?: "ENABLED" | "PAUSED" | null;
            /** Whether the ad group has been soft-deleted. */
            deleted?: boolean | null;
            /** System-computed delivery state. */
            systemStatus?: "RUNNING" | "NOT_RUNNING" | null;
            /** Reasons contributing to the current system status. */
            systemStatusReasons?: Array<string> | null;
            /** Reasons delivery stayed below its maximum potential. */
            systemStatusLimitingReasons?: Array<string> | null;
            /** Whether the ad group opted in to automated keywords. */
            automatedKeywordsOptIn?: boolean | null;
            /** Whether automated keywords are required for this ad group. */
            automatedKeywordsRequired?: boolean | null;
            /** How the ad group is priced. */
            pricingModel?: "CPA" | "CPM" | "CPT" | null;
            /** Rolled-up delivery state combining ad group and campaign conditions. */
            displayStatus?: string | null;
            /** When the ad group was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            modificationTime?: string | null;
            /** When the ad group was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            creationTime?: string | null;
            /** Scheduled start of the ad group. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            startTime?: string | null;
            /** Scheduled end of the ad group. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            endTime?: string | null;
            /** Lightweight summary of the parent campaign. Apple Ads documents no fields on it beyond what the row already carries. */
            campaign?: Record<string, unknown> | null;
            /** Bid strategy in effect at report time. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            bidStrategy?: {
              /** The bid strategy applied. */
              bidStrategyType?: "MANUAL_CPT" | "MANUAL_CPM" | "MAX_CONVERSIONS" | "MAX_ENGAGEMENTS" | null;
              /** Bid amount for manual strategies, or null for automated strategies. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              bid?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Snapshot of the Apple Maps targeting at report time. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            targeting?: {
              /** Apple Maps placement slots included in delivery. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              supplyPlacement?: {
                /** Values targeted at report time. */
                include?: Array<string> | null;
                [key: string]: unknown;
              } | null;
              /** Countries or regions targeted over the campaign's lifetime. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              lifetimeStorefronts?: {
                /** Values targeted at report time. */
                include?: Array<string> | null;
                [key: string]: unknown;
              } | null;
              /** Supply sources delivery is restricted to. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              supplySource?: {
                /** Values targeted at report time. */
                include?: Array<string> | null;
                [key: string]: unknown;
              } | null;
              /** Location groups targeted by the campaign. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              promotedLocationGroup?: {
                /** Values targeted at report time. */
                include?: Array<string> | null;
                [key: string]: unknown;
              } | null;
              /** Individual brand locations targeted by the campaign. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              promotedLocation?: {
                /** Values targeted at report time. */
                include?: Array<string> | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Value of the deviceClass groupBy dimension for this row, or null when the request did not group by it. */
            deviceClass?: string | null;
            /** Value of the locationId groupBy dimension for this row, or null when the request did not group by it. */
            locationId?: string | null;
            /** Value of the supplyPlacement groupBy dimension for this row, or null when the request did not group by it. */
            supplyPlacement?: string | null;
            [key: string]: unknown;
          } | null;
          /** Metrics aggregated over the whole requested date range. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          totalMetrics?: {
            /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
            date?: string | null;
            /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            localSpend?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total ad impressions. */
            impressions?: number | null;
            /** Total ad taps. */
            taps?: number | null;
            /** Tap-through rate, which is taps divided by impressions. */
            ttr?: number | null;
            /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpt?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpm?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** First-time engagement actions taken after an ad tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActions?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** First actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActionsPerTap?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** First actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActionsPerImpression?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Spend divided by first actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            costPerFirstAction?: {
              /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              tap?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Total Apple Maps actions such as directions, calls, URL taps and shares. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actions?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Spend divided by actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            costPerAction?: {
              /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              tap?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Get Directions taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            getDirections?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** URL taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tapURL?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Call actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            call?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Share actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            share?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Get the App taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            getTheApp?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Gallery photo engagements. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            galleryEngagement?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actionsPerTap?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actionsPerImpression?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Metrics broken down by the requested granularity, one entry per period. Apple Ads omits it when the request has no granularity. */
          granularMetrics?: Array<{
            /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
            date?: string | null;
            /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            localSpend?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total ad impressions. */
            impressions?: number | null;
            /** Total ad taps. */
            taps?: number | null;
            /** Tap-through rate, which is taps divided by impressions. */
            ttr?: number | null;
            /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpt?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpm?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** First-time engagement actions taken after an ad tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActions?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** First actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActionsPerTap?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** First actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActionsPerImpression?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Spend divided by first actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            costPerFirstAction?: {
              /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              tap?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Total Apple Maps actions such as directions, calls, URL taps and shares. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actions?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Spend divided by actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            costPerAction?: {
              /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              tap?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Get Directions taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            getDirections?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** URL taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tapURL?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Call actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            call?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Share actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            share?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Get the App taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            getTheApp?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Gallery photo engagements. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            galleryEngagement?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actionsPerTap?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actionsPerImpression?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
        /** Totals across every row of the result set, or null when GRAND_TOTAL was not requested. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        grandTotal: {
          /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
          date?: string | null;
          /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          localSpend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Total ad impressions. */
          impressions?: number | null;
          /** Total ad taps. */
          taps?: number | null;
          /** Tap-through rate, which is taps divided by impressions. */
          ttr?: number | null;
          /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpt?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpm?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** First-time engagement actions taken after an ad tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          firstActions?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** First actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          firstActionsPerTap?: {
            /** Rate attributed to taps, expressed as a decimal. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** First actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          firstActionsPerImpression?: {
            /** Rate attributed to taps, expressed as a decimal. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Spend divided by first actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          costPerFirstAction?: {
            /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tap?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Total Apple Maps actions such as directions, calls, URL taps and shares. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          actions?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Spend divided by actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          costPerAction?: {
            /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tap?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Get Directions taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          getDirections?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** URL taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          tapURL?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Call actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          call?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Share actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          share?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Get the App taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          getTheApp?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Gallery photo engagements. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          galleryEngagement?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          actionsPerTap?: {
            /** Rate attributed to taps, expressed as a decimal. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          actionsPerImpression?: {
            /** Rate attributed to taps, expressed as a decimal. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        } | null;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of rows matching the query across all pages, or null when Apple Ads leaves it out. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve Apple Maps ad performance, one row per ad with its creative snapshot and metrics aggregated over the date range. Filter on campaignId or adGroupId to scope the report. Ad-level reports do not support HOURLY granularity. */
    "apple_ads.get_brand_ad_report": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Date range, time zone and optional time-series breakdown for the report. */
        timeRange: {
          /**
           * First day included in the report, in YYYY-MM-DD format.
           * @format date
           */
          start: string;
          /**
           * Last day included in the report, in YYYY-MM-DD format.
           * @format date
           */
          end: string;
          /** Time zone the date range is interpreted in. ORTZ is the org's reporting time zone and is the default. */
          timeZone?: "ORTZ" | "UTC";
          /** Time-series breakdown for granularMetrics. Ad-level reports have no HOURLY option: DAILY needs a date range starting within the last 90 days and spanning more than one day, WEEKLY within the last 365 days with an end date at least 14 days in the past, and MONTHLY an end date at least 90 days in the past. Omit it to get a single aggregate in totalMetrics. */
          granularity?: "DAILY" | "WEEKLY" | "MONTHLY";
        };
        /** Filter conditions combined with logical AND. */
        filters?: Array<{
          /**
           * Name of the field to filter on. Apple Ads accepts entity fields such as campaignId and adGroupId as well as metric fields such as impressions, taps and localSpend; the exact set depends on the entity level.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Comparison operator. Numeric fields accept the range operators such as GREATER_THAN and BETWEEN; string fields accept EQUALS, IN and the pattern operators. */
          operator: "BETWEEN" | "CONTAINS" | "CONTAINS_ANY" | "CONTAINS_ALL" | "ENDS_WITH" | "EQUALS" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "IN" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "LIKE" | "NOT_EQUALS" | "STARTS_WITH";
          /** Operand to compare against. Pass an array for IN, BETWEEN, CONTAINS_ANY and CONTAINS_ALL, and either a bare value or a single-element array for the single-value operators. */
          value?: unknown;
        }>;
        /** Sort directives applied in order, with later entries breaking ties. The default is to sort by entity id ascending. */
        sorting?: Array<{
          /**
           * Name of the field to sort on, for example localSpend or impressions.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /** Field names to return on each row. Omit it to receive every field. */
        fields?: Array<string>;
        /** Dimensions to break each ad's metrics out by: device type, business location or ad placement. */
        groupBy?: Array<"deviceClass" | "locationId" | "supplyPlacement">;
        /** Extra rows to include. GRAND_TOTAL adds a summary of every row. Apple Maps reports do not support EMPTY_METRICS. */
        includeRows?: Array<"GRAND_TOTAL">;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of rows to return on this page. The maximum is 5000 and Apple Ads defaults to 100.
         * @maximum 5000
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Ad report rows on this page. */
        rows: Array<{
          /** Apple Maps ad attributes captured at report time, plus the groupBy dimension values applied to this row. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          metadata?: {
            /** System-assigned identifier for the ad. */
            id?: number | null;
            /** Ad name as configured at report time. */
            name?: string | null;
            /** Whether the ad has been soft-deleted. */
            deleted?: boolean | null;
            /** Advertiser intent for the ad to serve. */
            status?: "ENABLED" | "PAUSED" | null;
            /** System-computed delivery state. */
            systemStatus?: "RUNNING" | "NOT_RUNNING" | null;
            /** Reasons contributing to the current system status. */
            systemStatusReasons?: Array<string> | null;
            /** Reasons delivery stayed below its maximum potential. */
            systemStatusLimitingReasons?: Array<string> | null;
            /** Ad account the ad belongs to. */
            adAccountId?: number | null;
            /** Campaign the ad belongs to. */
            campaignId?: number | null;
            /** Ad group the ad belongs to. */
            adGroupId?: number | null;
            /** When the ad was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            creationTime?: string | null;
            /** When the ad was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            modificationTime?: string | null;
            /** Rolled-up delivery state combining ad, ad group and campaign conditions. */
            displayStatus?: string | null;
            /** Creative snapshot for the ad. Apple Maps ads carry no creativeSpec or destination. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            creative?: {
              /** System-assigned identifier for the creative. */
              id?: number | null;
              /** Creative format. */
              creativeType?: "LOCAL_ADS_SEARCH_CREATIVE" | null;
              /** Whether the creative was eligible to serve at report time. */
              systemStatus?: "VALID" | "INVALID" | "PENDING" | null;
              [key: string]: unknown;
            } | null;
            /** Value of the deviceClass groupBy dimension for this row, or null when the request did not group by it. */
            deviceClass?: string | null;
            /** Value of the locationId groupBy dimension for this row, or null when the request did not group by it. */
            locationId?: string | null;
            /** Value of the supplyPlacement groupBy dimension for this row, or null when the request did not group by it. */
            supplyPlacement?: string | null;
            [key: string]: unknown;
          } | null;
          /** Metrics aggregated over the whole requested date range. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          totalMetrics?: {
            /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
            date?: string | null;
            /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            localSpend?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total ad impressions. */
            impressions?: number | null;
            /** Total ad taps. */
            taps?: number | null;
            /** Tap-through rate, which is taps divided by impressions. */
            ttr?: number | null;
            /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpt?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpm?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** First-time engagement actions taken after an ad tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActions?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** First actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActionsPerTap?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** First actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActionsPerImpression?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Spend divided by first actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            costPerFirstAction?: {
              /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              tap?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Total Apple Maps actions such as directions, calls, URL taps and shares. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actions?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Spend divided by actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            costPerAction?: {
              /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              tap?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Get Directions taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            getDirections?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** URL taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tapURL?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Call actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            call?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Share actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            share?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Get the App taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            getTheApp?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Gallery photo engagements. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            galleryEngagement?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actionsPerTap?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actionsPerImpression?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Metrics broken down by the requested granularity, one entry per period. Apple Ads omits it when the request has no granularity. */
          granularMetrics?: Array<{
            /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
            date?: string | null;
            /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            localSpend?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total ad impressions. */
            impressions?: number | null;
            /** Total ad taps. */
            taps?: number | null;
            /** Tap-through rate, which is taps divided by impressions. */
            ttr?: number | null;
            /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpt?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpm?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** First-time engagement actions taken after an ad tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActions?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** First actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActionsPerTap?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** First actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActionsPerImpression?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Spend divided by first actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            costPerFirstAction?: {
              /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              tap?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Total Apple Maps actions such as directions, calls, URL taps and shares. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actions?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Spend divided by actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            costPerAction?: {
              /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              tap?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Get Directions taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            getDirections?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** URL taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tapURL?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Call actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            call?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Share actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            share?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Get the App taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            getTheApp?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Gallery photo engagements. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            galleryEngagement?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actionsPerTap?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actionsPerImpression?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
        /** Totals across every row of the result set, or null when GRAND_TOTAL was not requested. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        grandTotal: {
          /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
          date?: string | null;
          /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          localSpend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Total ad impressions. */
          impressions?: number | null;
          /** Total ad taps. */
          taps?: number | null;
          /** Tap-through rate, which is taps divided by impressions. */
          ttr?: number | null;
          /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpt?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpm?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** First-time engagement actions taken after an ad tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          firstActions?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** First actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          firstActionsPerTap?: {
            /** Rate attributed to taps, expressed as a decimal. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** First actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          firstActionsPerImpression?: {
            /** Rate attributed to taps, expressed as a decimal. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Spend divided by first actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          costPerFirstAction?: {
            /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tap?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Total Apple Maps actions such as directions, calls, URL taps and shares. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          actions?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Spend divided by actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          costPerAction?: {
            /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tap?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Get Directions taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          getDirections?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** URL taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          tapURL?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Call actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          call?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Share actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          share?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Get the App taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          getTheApp?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Gallery photo engagements. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          galleryEngagement?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          actionsPerTap?: {
            /** Rate attributed to taps, expressed as a decimal. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          actionsPerImpression?: {
            /** Rate attributed to taps, expressed as a decimal. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        } | null;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of rows matching the query across all pages, or null when Apple Ads leaves it out. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve Apple Maps campaign performance, one row per campaign with spend, engagement and Apple Maps action metrics aggregated over the date range. Filter on campaignId to scope the report to specific campaigns. */
    "apple_ads.get_brand_campaign_report": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Date range, time zone and optional time-series breakdown for the report. */
        timeRange: {
          /**
           * First day included in the report, in YYYY-MM-DD format.
           * @format date
           */
          start: string;
          /**
           * Last day included in the report, in YYYY-MM-DD format.
           * @format date
           */
          end: string;
          /** Time zone the date range is interpreted in. ORTZ is the org's reporting time zone and is the default. */
          timeZone?: "ORTZ" | "UTC";
          /** Time-series breakdown for granularMetrics. HOURLY needs a date range starting within the last 7 days, DAILY within the last 90 days and spanning more than one day, WEEKLY within the last 365 days with an end date at least 14 days in the past, and MONTHLY an end date at least 90 days in the past. Omit it to get a single aggregate in totalMetrics. */
          granularity?: "HOURLY" | "DAILY" | "WEEKLY" | "MONTHLY";
        };
        /** Filter conditions combined with logical AND. */
        filters?: Array<{
          /**
           * Name of the field to filter on. Apple Ads accepts entity fields such as campaignId and adGroupId as well as metric fields such as impressions, taps and localSpend; the exact set depends on the entity level.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Comparison operator. Numeric fields accept the range operators such as GREATER_THAN and BETWEEN; string fields accept EQUALS, IN and the pattern operators. */
          operator: "BETWEEN" | "CONTAINS" | "CONTAINS_ANY" | "CONTAINS_ALL" | "ENDS_WITH" | "EQUALS" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "IN" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "LIKE" | "NOT_EQUALS" | "STARTS_WITH";
          /** Operand to compare against. Pass an array for IN, BETWEEN, CONTAINS_ANY and CONTAINS_ALL, and either a bare value or a single-element array for the single-value operators. */
          value?: unknown;
        }>;
        /** Sort directives applied in order, with later entries breaking ties. The default is to sort by entity id ascending. */
        sorting?: Array<{
          /**
           * Name of the field to sort on, for example localSpend or impressions.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /** Field names to return on each row. Omit it to receive every field. */
        fields?: Array<string>;
        /** Dimensions to break each campaign's metrics out by: device type, business location or ad placement. */
        groupBy?: Array<"deviceClass" | "locationId" | "supplyPlacement">;
        /** Extra rows to include. GRAND_TOTAL adds a summary of every row. Apple Maps reports do not support EMPTY_METRICS. */
        includeRows?: Array<"GRAND_TOTAL">;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of rows to return on this page. The maximum is 5000 and Apple Ads defaults to 100.
         * @maximum 5000
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Campaign report rows on this page. */
        rows: Array<{
          /** Apple Maps campaign attributes captured at report time, plus the groupBy dimension values applied to this row. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          metadata?: {
            /** System-assigned identifier for the campaign. */
            id?: number | null;
            /** Human-readable summary of the promoted entity. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            promotedObject?: {
              /** Name of the promoted object. For Apple Maps campaigns this is the brand or location name as it appears in Maps. */
              name?: string | null;
              [key: string]: unknown;
            } | null;
            /** Identifier of the promoted entity. */
            promotedObjectId?: string | null;
            /** Campaign name as configured at report time. */
            name?: string | null;
            /** Advertiser intent for the campaign to serve. */
            status?: "ENABLED" | "PAUSED" | null;
            /** Whether the campaign has been soft-deleted. */
            deleted?: boolean | null;
            /** Rolled-up delivery state combining advertiser intent and system evaluation. */
            displayStatus?: string | null;
            /** When the campaign was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            modificationTime?: string | null;
            /** When the campaign was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            creationTime?: string | null;
            /** Ad account the campaign belongs to. */
            adAccountId?: number | null;
            /** System-computed delivery state. */
            systemStatus?: "RUNNING" | "NOT_RUNNING" | null;
            /** Reasons contributing to the current system status. */
            systemStatusReasons?: Array<string> | null;
            /** Interaction that triggers a charge. */
            billingEvent?: "TAPS" | "IMPRESSIONS" | null;
            /** Reasons delivery stayed below its maximum potential. */
            systemStatusLimitingReasons?: Array<string> | null;
            /** Daily spend cap at report time. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            dailyBudget?: {
              /** The monetary amount. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              value?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Scheduled start of the campaign. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            startTime?: string | null;
            /** Scheduled end of the campaign. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            endTime?: string | null;
            /** Lifetime budget for the campaign. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            lifetimeBudget?: {
              /** The monetary amount. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              value?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Bid strategy in effect at report time. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            bidStrategy?: {
              /** The bid strategy applied. */
              bidStrategyType?: "MANUAL_CPT" | "MANUAL_CPM" | "MAX_CONVERSIONS" | "MAX_ENGAGEMENTS" | null;
              /** Bid amount for manual strategies, or null for automated strategies. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              bid?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Channel that served the row's metrics. SEARCH is Search results; DISPLAY covers Search tab, Today tab and product pages. */
            adChannelType?: "SEARCH" | "DISPLAY" | null;
            /** What the campaign promotes. Apple Maps campaigns always report BUSINESS_BRAND. */
            promotedObjectType?: "BUSINESS_BRAND" | null;
            /** Snapshot of the Apple Maps targeting at report time. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            targeting?: {
              /** Apple Maps placement slots included in delivery. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              supplyPlacement?: {
                /** Values targeted at report time. */
                include?: Array<string> | null;
                [key: string]: unknown;
              } | null;
              /** Countries or regions targeted over the campaign's lifetime. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              lifetimeStorefronts?: {
                /** Values targeted at report time. */
                include?: Array<string> | null;
                [key: string]: unknown;
              } | null;
              /** Supply sources delivery is restricted to. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              supplySource?: {
                /** Values targeted at report time. */
                include?: Array<string> | null;
                [key: string]: unknown;
              } | null;
              /** Location groups targeted by the campaign. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              promotedLocationGroup?: {
                /** Values targeted at report time. */
                include?: Array<string> | null;
                [key: string]: unknown;
              } | null;
              /** Individual brand locations targeted by the campaign. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              promotedLocation?: {
                /** Values targeted at report time. */
                include?: Array<string> | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Value of the deviceClass groupBy dimension for this row, or null when the request did not group by it. */
            deviceClass?: string | null;
            /** Value of the locationId groupBy dimension for this row, or null when the request did not group by it. */
            locationId?: string | null;
            /** Value of the supplyPlacement groupBy dimension for this row, or null when the request did not group by it. */
            supplyPlacement?: string | null;
            [key: string]: unknown;
          } | null;
          /** Metrics aggregated over the whole requested date range. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          totalMetrics?: {
            /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
            date?: string | null;
            /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            localSpend?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total ad impressions. */
            impressions?: number | null;
            /** Total ad taps. */
            taps?: number | null;
            /** Tap-through rate, which is taps divided by impressions. */
            ttr?: number | null;
            /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpt?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpm?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** First-time engagement actions taken after an ad tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActions?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** First actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActionsPerTap?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** First actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActionsPerImpression?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Spend divided by first actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            costPerFirstAction?: {
              /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              tap?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Total Apple Maps actions such as directions, calls, URL taps and shares. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actions?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Spend divided by actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            costPerAction?: {
              /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              tap?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Get Directions taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            getDirections?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** URL taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tapURL?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Call actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            call?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Share actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            share?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Get the App taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            getTheApp?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Gallery photo engagements. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            galleryEngagement?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actionsPerTap?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actionsPerImpression?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Metrics broken down by the requested granularity, one entry per period. Apple Ads omits it when the request has no granularity. */
          granularMetrics?: Array<{
            /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
            date?: string | null;
            /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            localSpend?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total ad impressions. */
            impressions?: number | null;
            /** Total ad taps. */
            taps?: number | null;
            /** Tap-through rate, which is taps divided by impressions. */
            ttr?: number | null;
            /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpt?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpm?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** First-time engagement actions taken after an ad tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActions?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** First actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActionsPerTap?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** First actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActionsPerImpression?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Spend divided by first actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            costPerFirstAction?: {
              /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              tap?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Total Apple Maps actions such as directions, calls, URL taps and shares. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actions?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Spend divided by actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            costPerAction?: {
              /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              tap?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Get Directions taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            getDirections?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** URL taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tapURL?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Call actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            call?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Share actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            share?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Get the App taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            getTheApp?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Gallery photo engagements. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            galleryEngagement?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actionsPerTap?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actionsPerImpression?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
        /** Totals across every row of the result set, or null when GRAND_TOTAL was not requested. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        grandTotal: {
          /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
          date?: string | null;
          /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          localSpend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Total ad impressions. */
          impressions?: number | null;
          /** Total ad taps. */
          taps?: number | null;
          /** Tap-through rate, which is taps divided by impressions. */
          ttr?: number | null;
          /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpt?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpm?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** First-time engagement actions taken after an ad tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          firstActions?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** First actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          firstActionsPerTap?: {
            /** Rate attributed to taps, expressed as a decimal. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** First actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          firstActionsPerImpression?: {
            /** Rate attributed to taps, expressed as a decimal. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Spend divided by first actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          costPerFirstAction?: {
            /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tap?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Total Apple Maps actions such as directions, calls, URL taps and shares. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          actions?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Spend divided by actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          costPerAction?: {
            /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tap?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Get Directions taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          getDirections?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** URL taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          tapURL?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Call actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          call?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Share actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          share?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Get the App taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          getTheApp?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Gallery photo engagements. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          galleryEngagement?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          actionsPerTap?: {
            /** Rate attributed to taps, expressed as a decimal. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          actionsPerImpression?: {
            /** Rate attributed to taps, expressed as a decimal. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        } | null;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of rows matching the query across all pages, or null when Apple Ads leaves it out. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve Apple Maps keyword performance, one row per keyword with metrics aggregated over the date range and an optional bid recommendation. Always filter on campaignId or adGroupId so the report does not span every keyword in the ad account. */
    "apple_ads.get_brand_keyword_report": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Date range, time zone and optional time-series breakdown for the report. */
        timeRange: {
          /**
           * First day included in the report, in YYYY-MM-DD format.
           * @format date
           */
          start: string;
          /**
           * Last day included in the report, in YYYY-MM-DD format.
           * @format date
           */
          end: string;
          /** Time zone the date range is interpreted in. ORTZ is the org's reporting time zone and is the default. */
          timeZone?: "ORTZ" | "UTC";
          /** Time-series breakdown for granularMetrics. HOURLY needs a date range starting within the last 7 days, DAILY within the last 90 days and spanning more than one day, WEEKLY within the last 365 days with an end date at least 14 days in the past, and MONTHLY an end date at least 90 days in the past. Omit it to get a single aggregate in totalMetrics. */
          granularity?: "HOURLY" | "DAILY" | "WEEKLY" | "MONTHLY";
        };
        /** Filter conditions combined with logical AND. */
        filters?: Array<{
          /**
           * Name of the field to filter on. Apple Ads accepts entity fields such as campaignId and adGroupId as well as metric fields such as impressions, taps and localSpend; the exact set depends on the entity level.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Comparison operator. Numeric fields accept the range operators such as GREATER_THAN and BETWEEN; string fields accept EQUALS, IN and the pattern operators. */
          operator: "BETWEEN" | "CONTAINS" | "CONTAINS_ANY" | "CONTAINS_ALL" | "ENDS_WITH" | "EQUALS" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "IN" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "LIKE" | "NOT_EQUALS" | "STARTS_WITH";
          /** Operand to compare against. Pass an array for IN, BETWEEN, CONTAINS_ANY and CONTAINS_ALL, and either a bare value or a single-element array for the single-value operators. */
          value?: unknown;
        }>;
        /** Sort directives applied in order, with later entries breaking ties. The default is to sort by entity id ascending. */
        sorting?: Array<{
          /**
           * Name of the field to sort on, for example localSpend or impressions.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /** Field names to return on each row. Omit it to receive every field. */
        fields?: Array<string>;
        /** Dimensions to break each keyword's metrics out by. Apple Maps keyword reports support deviceClass only; locationId and supplyPlacement are not available at this level. */
        groupBy?: Array<"deviceClass">;
        /** Extra rows to include. GRAND_TOTAL adds a summary of every row. Apple Maps reports do not support EMPTY_METRICS. */
        includeRows?: Array<"GRAND_TOTAL">;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of rows to return on this page. The maximum is 5000 and Apple Ads defaults to 100.
         * @maximum 5000
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Keyword report rows on this page. */
        rows: Array<{
          /** Apple Maps keyword attributes captured at report time, plus the groupBy dimension values applied to this row. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          metadata?: {
            /** System-assigned identifier for the keyword. */
            id?: number | null;
            /** Campaign that owns the keyword. */
            campaignId?: number | null;
            /** Ad group that owns the keyword. */
            adGroupId?: number | null;
            /** Ad account that owns the keyword. */
            adAccountId?: number | null;
            /** Lightweight summary of the parent ad group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            adGroup?: {
              /** The ad group name. */
              name?: string | null;
              /** Whether the ad group has been deleted. */
              deleted?: boolean | null;
              [key: string]: unknown;
            } | null;
            /** Whether the keyword has been deleted. */
            deleted?: boolean | null;
            /** The keyword text. */
            text?: string | null;
            /** Serving state of the keyword. */
            status?: "ACTIVE" | "PAUSED" | "DELETED" | null;
            /** Keyword-level bid amount in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            bid?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** When the keyword was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            modificationTime?: string | null;
            /** When the keyword was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            creationTime?: string | null;
            /** Computed display status of the keyword. */
            displayStatus?: string | null;
            /** How the keyword matches search queries in Apple Maps campaigns. */
            matchType?: "PHRASE" | "CATEGORY" | null;
            /** Value of the countryOrRegion groupBy dimension for this row, or null when the request did not group by it. */
            countryOrRegion?: string | null;
            /** Value of the deviceClass groupBy dimension for this row, or null when the request did not group by it. */
            deviceClass?: string | null;
            /** Value of the locationId groupBy dimension for this row, or null when the request did not group by it. */
            locationId?: string | null;
            [key: string]: unknown;
          } | null;
          /** Metrics aggregated over the whole requested date range. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          totalMetrics?: {
            /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
            date?: string | null;
            /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            localSpend?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total ad impressions. */
            impressions?: number | null;
            /** Total ad taps. */
            taps?: number | null;
            /** Tap-through rate, which is taps divided by impressions. */
            ttr?: number | null;
            /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpt?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpm?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** First-time engagement actions taken after an ad tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActions?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** First actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActionsPerTap?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** First actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActionsPerImpression?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Spend divided by first actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            costPerFirstAction?: {
              /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              tap?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Total Apple Maps actions such as directions, calls, URL taps and shares. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actions?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Spend divided by actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            costPerAction?: {
              /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              tap?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Get Directions taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            getDirections?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** URL taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tapURL?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Call actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            call?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Share actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            share?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Get the App taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            getTheApp?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Gallery photo engagements. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            galleryEngagement?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actionsPerTap?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actionsPerImpression?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Metrics broken down by the requested granularity, one entry per period. Apple Ads omits it when the request has no granularity. */
          granularMetrics?: Array<{
            /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
            date?: string | null;
            /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            localSpend?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total ad impressions. */
            impressions?: number | null;
            /** Total ad taps. */
            taps?: number | null;
            /** Tap-through rate, which is taps divided by impressions. */
            ttr?: number | null;
            /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpt?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpm?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** First-time engagement actions taken after an ad tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActions?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** First actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActionsPerTap?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** First actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActionsPerImpression?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Spend divided by first actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            costPerFirstAction?: {
              /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              tap?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Total Apple Maps actions such as directions, calls, URL taps and shares. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actions?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Spend divided by actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            costPerAction?: {
              /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              tap?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Get Directions taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            getDirections?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** URL taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tapURL?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Call actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            call?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Share actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            share?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Get the App taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            getTheApp?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Gallery photo engagements. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            galleryEngagement?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actionsPerTap?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actionsPerImpression?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          }> | null;
          /** Performance insights attached to the keyword row. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          insights?: {
            /** Suggested bid information for this keyword. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            bidRecommendation?: {
              /** Recommended bid amount for the keyword. */
              suggestedBidAmount?: number | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
        /** Totals across every row of the result set, or null when GRAND_TOTAL was not requested. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        grandTotal: {
          /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
          date?: string | null;
          /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          localSpend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Total ad impressions. */
          impressions?: number | null;
          /** Total ad taps. */
          taps?: number | null;
          /** Tap-through rate, which is taps divided by impressions. */
          ttr?: number | null;
          /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpt?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpm?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** First-time engagement actions taken after an ad tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          firstActions?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** First actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          firstActionsPerTap?: {
            /** Rate attributed to taps, expressed as a decimal. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** First actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          firstActionsPerImpression?: {
            /** Rate attributed to taps, expressed as a decimal. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Spend divided by first actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          costPerFirstAction?: {
            /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tap?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Total Apple Maps actions such as directions, calls, URL taps and shares. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          actions?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Spend divided by actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          costPerAction?: {
            /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tap?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Get Directions taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          getDirections?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** URL taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          tapURL?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Call actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          call?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Share actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          share?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Get the App taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          getTheApp?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Gallery photo engagements. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          galleryEngagement?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          actionsPerTap?: {
            /** Rate attributed to taps, expressed as a decimal. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          actionsPerImpression?: {
            /** Rate attributed to taps, expressed as a decimal. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        } | null;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of rows matching the query across all pages, or null when Apple Ads leaves it out. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the Apple Maps search terms that matched a keyword and produced an impression on the Search Results placement, one row per search term with the keyword it matched. Always filter on campaignId or adGroupId. Apple Ads suppresses or aggregates low-volume terms to protect user privacy. */
    "apple_ads.get_brand_search_term_report": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Date range, time zone and optional time-series breakdown for the report. */
        timeRange: {
          /**
           * First day included in the report, in YYYY-MM-DD format.
           * @format date
           */
          start: string;
          /**
           * Last day included in the report, in YYYY-MM-DD format.
           * @format date
           */
          end: string;
          /** Time zone the date range is interpreted in. Search term reports accept ORTZ only; Apple Ads rejects UTC here. */
          timeZone?: "ORTZ";
          /** Time-series breakdown for granularMetrics. Search term reports have no HOURLY option: DAILY needs a date range starting within the last 90 days and spanning more than one day, WEEKLY within the last 365 days with an end date at least 14 days in the past, and MONTHLY an end date at least 90 days in the past. Omit it to get a single aggregate in totalMetrics. */
          granularity?: "DAILY" | "WEEKLY" | "MONTHLY";
        };
        /** Filter conditions combined with logical AND. */
        filters?: Array<{
          /**
           * Name of the field to filter on. Apple Ads accepts entity fields such as campaignId and adGroupId as well as metric fields such as impressions, taps and localSpend; the exact set depends on the entity level.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Comparison operator. Numeric fields accept the range operators such as GREATER_THAN and BETWEEN; string fields accept EQUALS, IN and the pattern operators. */
          operator: "BETWEEN" | "CONTAINS" | "CONTAINS_ANY" | "CONTAINS_ALL" | "ENDS_WITH" | "EQUALS" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "IN" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "LIKE" | "NOT_EQUALS" | "STARTS_WITH";
          /** Operand to compare against. Pass an array for IN, BETWEEN, CONTAINS_ANY and CONTAINS_ALL, and either a bare value or a single-element array for the single-value operators. */
          value?: unknown;
        }>;
        /** Sort directives applied in order, with later entries breaking ties. The default is to sort by entity id ascending. */
        sorting?: Array<{
          /**
           * Name of the field to sort on, for example localSpend or impressions.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /** Field names to return on each row. Omit it to receive every field. */
        fields?: Array<string>;
        /** Dimensions to break each search term's metrics out by. Apple Maps search term reports support deviceClass only; locationId and supplyPlacement are not available at this level. */
        groupBy?: Array<"deviceClass">;
        /** Extra rows to include. GRAND_TOTAL adds a summary of every row. Apple Maps reports do not support EMPTY_METRICS. */
        includeRows?: Array<"GRAND_TOTAL">;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of rows to return on this page. The maximum is 5000 and Apple Ads defaults to 100.
         * @maximum 5000
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Search term report rows on this page. */
        rows: Array<{
          /** Apple Maps search term attributes captured at report time, plus the groupBy dimension values applied to this row. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          metadata?: {
            /** Campaign that owns the search term. */
            campaignId?: number | null;
            /** Ad group that owns the search term. */
            adGroupId?: number | null;
            /** Ad account that owns the search term. */
            adAccountId?: number | null;
            /** Lightweight summary of the parent ad group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            adGroup?: {
              /** The ad group name. */
              name?: string | null;
              /** Whether the ad group has been deleted. */
              deleted?: boolean | null;
              [key: string]: unknown;
            } | null;
            /** The user-entered query string. */
            searchTermText?: string | null;
            /** Whether the search term came from a direct user search or an auto-match source. */
            searchTermSource?: string | null;
            /** Apple Maps keyword attributes captured at report time, plus the groupBy dimension values applied to this row. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            keyword?: {
              /** System-assigned identifier for the keyword. */
              id?: number | null;
              /** Campaign that owns the keyword. */
              campaignId?: number | null;
              /** Ad group that owns the keyword. */
              adGroupId?: number | null;
              /** Ad account that owns the keyword. */
              adAccountId?: number | null;
              /** Lightweight summary of the parent ad group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              adGroup?: {
                /** The ad group name. */
                name?: string | null;
                /** Whether the ad group has been deleted. */
                deleted?: boolean | null;
                [key: string]: unknown;
              } | null;
              /** Whether the keyword has been deleted. */
              deleted?: boolean | null;
              /** The keyword text. */
              text?: string | null;
              /** Serving state of the keyword. */
              status?: "ACTIVE" | "PAUSED" | "DELETED" | null;
              /** Keyword-level bid amount in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              bid?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              /** When the keyword was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
              modificationTime?: string | null;
              /** When the keyword was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
              creationTime?: string | null;
              /** Computed display status of the keyword. */
              displayStatus?: string | null;
              /** How the keyword matches search queries in Apple Maps campaigns. */
              matchType?: "PHRASE" | "CATEGORY" | null;
              /** Value of the countryOrRegion groupBy dimension for this row, or null when the request did not group by it. */
              countryOrRegion?: string | null;
              /** Value of the deviceClass groupBy dimension for this row, or null when the request did not group by it. */
              deviceClass?: string | null;
              /** Value of the locationId groupBy dimension for this row, or null when the request did not group by it. */
              locationId?: string | null;
              [key: string]: unknown;
            } | null;
            /** Value of the countryOrRegion groupBy dimension for this row, or null when the request did not group by it. */
            countryOrRegion?: string | null;
            /** Value of the deviceClass groupBy dimension for this row, or null when the request did not group by it. */
            deviceClass?: string | null;
            /** Value of the locationId groupBy dimension for this row, or null when the request did not group by it. */
            locationId?: string | null;
            [key: string]: unknown;
          } | null;
          /** Metrics aggregated over the whole requested date range. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          totalMetrics?: {
            /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
            date?: string | null;
            /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            localSpend?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total ad impressions. */
            impressions?: number | null;
            /** Total ad taps. */
            taps?: number | null;
            /** Tap-through rate, which is taps divided by impressions. */
            ttr?: number | null;
            /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpt?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpm?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** First-time engagement actions taken after an ad tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActions?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** First actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActionsPerTap?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** First actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActionsPerImpression?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Spend divided by first actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            costPerFirstAction?: {
              /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              tap?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Total Apple Maps actions such as directions, calls, URL taps and shares. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actions?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Spend divided by actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            costPerAction?: {
              /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              tap?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Get Directions taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            getDirections?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** URL taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tapURL?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Call actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            call?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Share actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            share?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Get the App taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            getTheApp?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Gallery photo engagements. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            galleryEngagement?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actionsPerTap?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actionsPerImpression?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Metrics broken down by the requested granularity, one entry per period. Apple Ads omits it when the request has no granularity. */
          granularMetrics?: Array<{
            /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
            date?: string | null;
            /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            localSpend?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total ad impressions. */
            impressions?: number | null;
            /** Total ad taps. */
            taps?: number | null;
            /** Tap-through rate, which is taps divided by impressions. */
            ttr?: number | null;
            /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpt?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpm?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** First-time engagement actions taken after an ad tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActions?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** First actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActionsPerTap?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** First actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            firstActionsPerImpression?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Spend divided by first actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            costPerFirstAction?: {
              /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              tap?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Total Apple Maps actions such as directions, calls, URL taps and shares. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actions?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Spend divided by actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            costPerAction?: {
              /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              tap?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Get Directions taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            getDirections?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** URL taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tapURL?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Call actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            call?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Share actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            share?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Get the App taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            getTheApp?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Gallery photo engagements. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            galleryEngagement?: {
              /** Count attributed to taps. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actionsPerTap?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            /** Actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            actionsPerImpression?: {
              /** Rate attributed to taps, expressed as a decimal. */
              tap?: number | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
        /** Totals across every row of the result set, or null when GRAND_TOTAL was not requested. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        grandTotal: {
          /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
          date?: string | null;
          /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          localSpend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Total ad impressions. */
          impressions?: number | null;
          /** Total ad taps. */
          taps?: number | null;
          /** Tap-through rate, which is taps divided by impressions. */
          ttr?: number | null;
          /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpt?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpm?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** First-time engagement actions taken after an ad tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          firstActions?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** First actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          firstActionsPerTap?: {
            /** Rate attributed to taps, expressed as a decimal. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** First actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          firstActionsPerImpression?: {
            /** Rate attributed to taps, expressed as a decimal. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Spend divided by first actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          costPerFirstAction?: {
            /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tap?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Total Apple Maps actions such as directions, calls, URL taps and shares. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          actions?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Spend divided by actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          costPerAction?: {
            /** Cost attributed to taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tap?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Get Directions taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          getDirections?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** URL taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          tapURL?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Call actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          call?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Share actions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          share?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Get the App taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          getTheApp?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Gallery photo engagements. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          galleryEngagement?: {
            /** Count attributed to taps. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Actions divided by taps. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          actionsPerTap?: {
            /** Rate attributed to taps, expressed as a decimal. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          /** Actions divided by impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          actionsPerImpression?: {
            /** Rate attributed to taps, expressed as a decimal. */
            tap?: number | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        } | null;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of rows matching the query across all pages, or null when Apple Ads leaves it out. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read one budget order by identifier, including its amount, active date range, assigned ad account and invoice details. */
    "apple_ads.get_budget_order": {
      input: {
        /** Identifier of the budget order. */
        budgetOrderId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** A budget order, a spending cap that the campaigns assigned to it draw from over a scheduled period. It is available only on ad accounts with the LOC (Line of Credit) payment model. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        budgetOrder: {
          /** System-assigned identifier for the budget order. */
          id: number;
          /** Organization that owns the budget order. */
          orgId?: number | null;
          /** Advertiser-given budget order name. */
          name?: string | null;
          /** When the budget order becomes active. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          startTime?: string | null;
          /** When the budget order expires, or null when it is open-ended. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          endTime?: string | null;
          /** Total amount the assigned campaigns can spend against this budget order. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          value?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Ad accounts whose campaigns can draw from this budget order. */
          adAccountIds?: Array<number> | null;
          /** System-computed state telling whether campaigns can currently draw spend against the budget order. */
          systemStatus?: "ACTIVE" | "INACTIVE" | null;
          /** Reasons behind the current system status. */
          systemStatusReasons?: Array<"CANCELED" | "CAMPAIGN_BUDGET_UNASSIGNED" | "DELETED_BY_USER" | "EXHAUSTED" | "PROCESSING" | "SCHEDULE_EXPIRED" | "SCHEDULE_PENDING"> | null;
          /** Invoice and billing contact details. Apple Ads populates it only for Line of Credit accounts. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          invoiceDetail?: {
            /** Advertiser or product this invoice identifies. */
            clientName?: string | null;
            /** Name of the primary buyer. */
            primaryBuyerName?: string | null;
            /** Email address of the primary buyer. */
            primaryBuyerEmail?: string | null;
            /** Purchase order number. */
            orderNumber?: string | null;
            /** Billing email address. */
            billingEmail?: string | null;
            [key: string]: unknown;
          } | null;
          /** When the budget order was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the budget order was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the budget order has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read one Apple Maps business category by its MUID, including its qualifiedId taxonomy path and eligibility status. */
    "apple_ads.get_business_category": {
      input: {
        /**
         * MUID of the business category, as returned by query_business_categories.
         * @minLength 1
         * @pattern \S
         */
        businessCategoryId: string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** A node in the Apple Maps business taxonomy that classifies brands and locations. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        businessCategory: {
          /** MUID (Maps Unique Identifier) of the category. */
          id: string;
          /** English display name of the category. */
          name?: string | null;
          /** Dot-delimited taxonomy path such as dining.restaurant. A dot always marks a hierarchy boundary, while an individual level name may itself contain underscores. Pass this value as the text of a CATEGORY match-type keyword. */
          qualifiedId?: string | null;
          /** Human-readable description of the category. */
          description?: string | null;
          /** Ad serving eligibility for the category. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          eligibility?: {
            /** Overall eligibility status for the entity. */
            status?: "ELIGIBLE" | "INELIGIBLE" | "LIMITED" | "PENDING" | "UNDEFINED" | null;
            /** Placement and market combinations where the entity is blocked from serving. */
            blockedGroups?: Array<{
              /** Supply placements this constraint applies to. */
              supplyPlacement?: Array<string> | null;
              /** Countries or regions this constraint applies to. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            /** Placement and market combinations where the entity is allowed to serve. */
            allowedGroups?: Array<{
              /** Supply placements this constraint applies to. */
              supplyPlacement?: Array<string> | null;
              /** Countries or regions this constraint applies to. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            /** When Apple Ads last evaluated eligibility. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            modificationTime?: string | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read one campaign by identifier. Apple Ads returns the campaign regardless of its deleted state. */
    "apple_ads.get_campaign": {
      input: {
        /** Identifier of the campaign. */
        campaignId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** A campaign, the top-level container that defines the promoted object, billing, scheduling and targeting for its ad groups. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        campaign: {
          /** System-assigned identifier for the campaign. */
          id: number;
          /** Ad account the campaign belongs to. */
          adAccountId?: number | null;
          /** Advertiser-given campaign name. */
          name?: string | null;
          /** Interaction that triggers a charge. */
          billingEvent?: "TAPS" | "IMPRESSIONS" | null;
          /** Payment model applied to the campaign. */
          paymentModel?: "PAYG" | "LOC" | null;
          /** Scheduled start of the campaign. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          startTime?: string | null;
          /** Scheduled end of the campaign, or null when it runs indefinitely. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          endTime?: string | null;
          /** What the campaign promotes. */
          promotedObjectType?: "APPSTORE_APP" | "BUSINESS_BRAND" | null;
          /** Identifier of the promoted entity: the App Store adamId, or the brand identifier for Apple Maps campaigns. */
          promotedObjectId?: string | null;
          /** Advertiser intent for the campaign to serve. */
          status?: "ENABLED" | "PAUSED" | null;
          /** System-computed delivery state. */
          systemStatus?: "RUNNING" | "NOT_RUNNING" | null;
          /** Reasons the campaign is not delivering. */
          systemStatusReasons?: Array<string> | null;
          /** Reasons the campaign delivers below its full potential. */
          systemStatusLimitingReasons?: Array<string> | null;
          /** Rolled-up delivery state combining advertiser intent and system evaluation. */
          displayStatus?: "RUNNING" | "PAUSED" | "ON_HOLD" | "LIMITED" | "PROCESSING" | "DELETED" | null;
          /** Daily spend cap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          dailyBudget?: {
            /** The daily budget amount. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            value?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Budget orders assigned to the campaign. */
          sharedBudgets?: Array<{
            /** Identifier of the assigned budget order. */
            budgetId?: number | null;
            [key: string]: unknown;
          }> | null;
          /** Where the campaign is eligible to serve ads. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          targeting?: {
            /** Supply sources included in targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            supplySource?: {
              /** Included supply sources. */
              include?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Placements included in targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            supplyPlacement?: {
              /** Included placements. */
              include?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Countries or regions included in targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            countryOrRegion?: {
              /** Included ISO 3166-1 alpha-2 codes. */
              include?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Bid strategy governing auction participation. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          bidStrategy?: {
            /** The bid strategy type. */
            bidStrategyType?: "MANUAL_CPT" | "MANUAL_CPM" | "MAX_CONVERSIONS" | "MAX_ENGAGEMENTS" | null;
            /** The optimization goal. */
            bidStrategyGoal?: "TAP" | "IMPRESSION" | "INSTALL" | null;
            /** Bid ceiling for each auction entry. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            bid?: {
              /** Bid amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Invoice and billing contact details. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          invoiceDetail?: {
            /** Advertiser or product this invoice identifies. */
            clientName?: string | null;
            /** Name of the primary buyer. */
            primaryBuyerName?: string | null;
            /** Email address of the primary buyer. */
            primaryBuyerEmail?: string | null;
            /** Purchase order number. */
            orderNumber?: string | null;
            /** Billing email address. */
            billingEmail?: string | null;
            [key: string]: unknown;
          } | null;
          /** Regulatory consent acknowledgments recorded for the campaign. */
          regulationResponses?: Array<{
            /** Category of regulatory disclosure. */
            regulationType?: "CAC" | "CAMPAIGN_SAPIN_LAW" | "ORG_SAPIN_LAW" | null;
            /** Recorded answer. */
            responseValue?: "AGENT" | "NOT_AGENT" | "FRENCH_BUSINESS" | "NOT_FRENCH_BUSINESS" | "TRUE" | "FALSE" | "NOT_ANSWERED" | null;
            [key: string]: unknown;
          }> | null;
          /** When the campaign was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the campaign was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the campaign has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read why a legacy app campaign delivers below its potential in each country or region, as a map of country or region code to limiting reason. */
    "apple_ads.get_campaign_limited_status_details": {
      input: {
        /** Identifier of the campaign. */
        campaignId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** Limiting reasons keyed by ISO 3166-1 alpha-2 country or region code, or null when Apple Ads reports none. */
        countryOrRegionLimitedStatusReasons: Record<string, Array<string>> | null;
      };
    };
    /** Retrieve App Store campaign performance, one row per campaign with metrics aggregated over the date range and optionally broken out by granularity and dimension. Every App Store report request must carry a filter on campaignId; this action rejects a request without one before it reaches Apple Ads. */
    "apple_ads.get_campaign_report": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Date range, time zone and optional time-series breakdown for the report. */
        timeRange: {
          /**
           * First day included in the report, in YYYY-MM-DD format.
           * @format date
           */
          start: string;
          /**
           * Last day included in the report, in YYYY-MM-DD format.
           * @format date
           */
          end: string;
          /** Time zone the date range is interpreted in. ORTZ is the org's reporting time zone and is the default. */
          timeZone?: "ORTZ" | "UTC";
          /** Time-series breakdown for granularMetrics. HOURLY needs a date range starting within the last 7 days, DAILY within the last 90 days and spanning more than one day, WEEKLY within the last 365 days with an end date at least 14 days in the past, and MONTHLY an end date at least 90 days in the past. Omit it to get a single aggregate in totalMetrics. */
          granularity?: "HOURLY" | "DAILY" | "WEEKLY" | "MONTHLY";
        };
        /** Filter conditions combined with logical AND. */
        filters?: Array<{
          /**
           * Name of the field to filter on. Apple Ads accepts entity fields such as campaignId and adGroupId as well as metric fields such as impressions, taps and localSpend; the exact set depends on the entity level.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Comparison operator. Numeric fields accept the range operators such as GREATER_THAN and BETWEEN; string fields accept EQUALS, IN and the pattern operators. */
          operator: "BETWEEN" | "CONTAINS" | "CONTAINS_ANY" | "CONTAINS_ALL" | "ENDS_WITH" | "EQUALS" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "IN" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "LIKE" | "NOT_EQUALS" | "STARTS_WITH";
          /** Operand to compare against. Pass an array for IN, BETWEEN, CONTAINS_ANY and CONTAINS_ALL, and either a bare value or a single-element array for the single-value operators. */
          value?: unknown;
        }>;
        /** Sort directives applied in order, with later entries breaking ties. The default is to sort by entity id ascending. */
        sorting?: Array<{
          /**
           * Name of the field to sort on, for example localSpend or impressions.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /** Field names to return on each row. Omit it to receive every field. */
        fields?: Array<string>;
        /** Dimensions to break each campaign's metrics out by, producing one row per dimension value. Omit it to get one aggregate row per campaign. */
        groupBy?: Array<"deviceClass" | "ageRange" | "gender" | "countryCode" | "adminArea" | "locality" | "storefront" | "countryOrRegion">;
        /** Extra rows to include. GRAND_TOTAL adds a summary of every row; EMPTY_METRICS adds rows for campaigns with no activity and cannot be combined with groupBy. */
        includeRows?: Array<"GRAND_TOTAL" | "EMPTY_METRICS">;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of rows to return on this page. The maximum is 5000 and Apple Ads defaults to 100.
         * @maximum 5000
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Campaign report rows on this page. */
        rows: Array<{
          /** Campaign attributes captured at report time, plus the groupBy dimension values applied to this row. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          metadata?: {
            /** System-assigned identifier for the campaign. */
            id?: number | null;
            /** Human-readable summary of the promoted entity. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            promotedObject?: {
              /** Name of the promoted object. For Apple Maps campaigns this is the brand or location name as it appears in Maps. */
              name?: string | null;
              [key: string]: unknown;
            } | null;
            /** Identifier of the promoted entity. */
            promotedObjectId?: string | null;
            /** Campaign name as configured at report time. */
            name?: string | null;
            /** Advertiser intent for the campaign to serve. */
            status?: "ENABLED" | "PAUSED" | null;
            /** Whether the campaign has been soft-deleted. */
            deleted?: boolean | null;
            /** Rolled-up delivery state combining advertiser intent and system evaluation. */
            displayStatus?: string | null;
            /** When the campaign was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            modificationTime?: string | null;
            /** When the campaign was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            creationTime?: string | null;
            /** Ad account the campaign belongs to. */
            adAccountId?: number | null;
            /** System-computed delivery state. */
            systemStatus?: "RUNNING" | "NOT_RUNNING" | null;
            /** Reasons contributing to the current system status. */
            systemStatusReasons?: Array<string> | null;
            /** Interaction that triggers a charge. */
            billingEvent?: "TAPS" | "IMPRESSIONS" | null;
            /** Reasons delivery stayed below its maximum potential. */
            systemStatusLimitingReasons?: Array<string> | null;
            /** Daily spend cap at report time. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            dailyBudget?: {
              /** The monetary amount. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              value?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Scheduled start of the campaign. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            startTime?: string | null;
            /** Scheduled end of the campaign. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            endTime?: string | null;
            /** Lifetime budget for the campaign. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            lifetimeBudget?: {
              /** The monetary amount. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              value?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Bid strategy in effect at report time. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            bidStrategy?: {
              /** The bid strategy applied. */
              bidStrategyType?: "MANUAL_CPT" | "MANUAL_CPM" | "MAX_CONVERSIONS" | "MAX_ENGAGEMENTS" | null;
              /** Bid amount for manual strategies, or null for automated strategies. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              bid?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Channel that served the row's metrics. SEARCH is Search results; DISPLAY covers Search tab, Today tab and product pages. */
            adChannelType?: "SEARCH" | "DISPLAY" | null;
            /** What the campaign promotes. App Store campaigns always report APPSTORE_APP. */
            promotedObjectType?: "APPSTORE_APP" | null;
            /** Snapshot of the campaign's targeting at report time. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            targeting?: {
              /** Placement slots included in delivery. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              supplyPlacement?: {
                /** Values targeted at report time. */
                include?: Array<string> | null;
                [key: string]: unknown;
              } | null;
              /** App Store countries or regions targeted over the campaign's lifetime, which can differ from the currently active targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              lifetimeStorefronts?: {
                /** Values targeted at report time. */
                include?: Array<string> | null;
                [key: string]: unknown;
              } | null;
              /** Countries or regions currently targeted by the campaign. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              countryOrRegion?: {
                /** Values targeted at report time. */
                include?: Array<string> | null;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            } | null;
            /** Value of the countryOrRegion groupBy dimension for this row, or null when the request did not group by it. */
            countryOrRegion?: string | null;
            /** Value of the deviceClass groupBy dimension for this row, or null when the request did not group by it. */
            deviceClass?: string | null;
            /** Value of the gender groupBy dimension for this row, or null when the request did not group by it. */
            gender?: string | null;
            /** Value of the ageRange groupBy dimension for this row, or null when the request did not group by it. */
            ageRange?: string | null;
            /** Value of the locality groupBy dimension for this row, or null when the request did not group by it. */
            locality?: string | null;
            /** Value of the countryCode groupBy dimension for this row, or null when the request did not group by it. */
            countryCode?: string | null;
            /** Value of the adminArea groupBy dimension for this row, or null when the request did not group by it. */
            adminArea?: string | null;
            [key: string]: unknown;
          } | null;
          /** Metrics aggregated over the whole requested date range. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          totalMetrics?: {
            /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
            date?: string | null;
            /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            localSpend?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total ad impressions. */
            impressions?: number | null;
            /** Total ad taps. */
            taps?: number | null;
            /** Tap-through rate, which is taps divided by impressions. */
            ttr?: number | null;
            /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpt?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpm?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Installs attributed to taps. */
            tapInstalls?: number | null;
            /** Average cost per tap-attributed install. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tapInstallCPI?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** First-time installs across all attribution types. */
            totalNewDownloads?: number | null;
            /** Installs of an app the user previously had installed, across all attribution types. */
            totalRedownloads?: number | null;
            /** Installs attributed to view-through, impression-based attribution. */
            viewInstalls?: number | null;
            /** Installs combining tap and view attribution. */
            totalInstalls?: number | null;
            /** First-time installs attributed to taps. */
            tapNewDownloads?: number | null;
            /** Redownloads attributed to taps. */
            tapRedownloads?: number | null;
            /** First-time installs attributed to view-through impressions. */
            viewNewDownloads?: number | null;
            /** Redownloads attributed to view-through impressions. */
            viewRedownloads?: number | null;
            /** Average cost per install across all attribution types. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            totalAvgCPI?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total installs divided by taps. */
            totalInstallRate?: number | null;
            /** Tap-attributed installs divided by taps. */
            tapInstallRate?: number | null;
            /** Pre-orders placed attributed to taps. */
            tapPreOrdersPlaced?: number | null;
            /** Pre-orders placed attributed to view-through impressions. */
            viewPreOrdersPlaced?: number | null;
            /** Pre-orders placed across all attribution types. */
            totalPreOrdersPlaced?: number | null;
            [key: string]: unknown;
          } | null;
          /** Metrics broken down by the requested granularity, one entry per period. Apple Ads omits it when the request has no granularity. */
          granularMetrics?: Array<{
            /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
            date?: string | null;
            /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            localSpend?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total ad impressions. */
            impressions?: number | null;
            /** Total ad taps. */
            taps?: number | null;
            /** Tap-through rate, which is taps divided by impressions. */
            ttr?: number | null;
            /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpt?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpm?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Installs attributed to taps. */
            tapInstalls?: number | null;
            /** Average cost per tap-attributed install. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tapInstallCPI?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** First-time installs across all attribution types. */
            totalNewDownloads?: number | null;
            /** Installs of an app the user previously had installed, across all attribution types. */
            totalRedownloads?: number | null;
            /** Installs attributed to view-through, impression-based attribution. */
            viewInstalls?: number | null;
            /** Installs combining tap and view attribution. */
            totalInstalls?: number | null;
            /** First-time installs attributed to taps. */
            tapNewDownloads?: number | null;
            /** Redownloads attributed to taps. */
            tapRedownloads?: number | null;
            /** First-time installs attributed to view-through impressions. */
            viewNewDownloads?: number | null;
            /** Redownloads attributed to view-through impressions. */
            viewRedownloads?: number | null;
            /** Average cost per install across all attribution types. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            totalAvgCPI?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total installs divided by taps. */
            totalInstallRate?: number | null;
            /** Tap-attributed installs divided by taps. */
            tapInstallRate?: number | null;
            /** Pre-orders placed attributed to taps. */
            tapPreOrdersPlaced?: number | null;
            /** Pre-orders placed attributed to view-through impressions. */
            viewPreOrdersPlaced?: number | null;
            /** Pre-orders placed across all attribution types. */
            totalPreOrdersPlaced?: number | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
        /** Totals across every row of the result set, or null when GRAND_TOTAL was not requested. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        grandTotal: {
          /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
          date?: string | null;
          /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          localSpend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Total ad impressions. */
          impressions?: number | null;
          /** Total ad taps. */
          taps?: number | null;
          /** Tap-through rate, which is taps divided by impressions. */
          ttr?: number | null;
          /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpt?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpm?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Installs attributed to taps. */
          tapInstalls?: number | null;
          /** Average cost per tap-attributed install. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          tapInstallCPI?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** First-time installs across all attribution types. */
          totalNewDownloads?: number | null;
          /** Installs of an app the user previously had installed, across all attribution types. */
          totalRedownloads?: number | null;
          /** Installs attributed to view-through, impression-based attribution. */
          viewInstalls?: number | null;
          /** Installs combining tap and view attribution. */
          totalInstalls?: number | null;
          /** First-time installs attributed to taps. */
          tapNewDownloads?: number | null;
          /** Redownloads attributed to taps. */
          tapRedownloads?: number | null;
          /** First-time installs attributed to view-through impressions. */
          viewNewDownloads?: number | null;
          /** Redownloads attributed to view-through impressions. */
          viewRedownloads?: number | null;
          /** Average cost per install across all attribution types. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          totalAvgCPI?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Total installs divided by taps. */
          totalInstallRate?: number | null;
          /** Tap-attributed installs divided by taps. */
          tapInstallRate?: number | null;
          /** Pre-orders placed attributed to taps. */
          tapPreOrdersPlaced?: number | null;
          /** Pre-orders placed attributed to view-through impressions. */
          viewPreOrdersPlaced?: number | null;
          /** Pre-orders placed across all attribution types. */
          totalPreOrdersPlaced?: number | null;
          [key: string]: unknown;
        } | null;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of rows matching the query across all pages, or null when Apple Ads leaves it out. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read the field-level before and after values of one entity change, addressed by the composite detailId that query_change_history returns in each row's metas entries when metadata is latest or snapshot. */
    "apple_ads.get_change_history_detail": {
      input: {
        /**
         * Composite identifier of the entity change, shaped as EntityType.entityId.txnId, for example Campaign.444555666.txn_abc123def456.
         * @minLength 1
         * @pattern \S
         */
        detailId: string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /**
         * Maximum number of entries to return from the changes array. Apple Ads defaults it to 100.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Zero-based index of the first changes entry to return. Apple Ads defaults it to 0.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Change records for the requested entity change. */
        changeDetails: Array<{
          /** Identifier of the transaction that produced this change record. */
          transactionId?: string | null;
          /** Identifier of this entity change, shaped as EntityType.entityId.txnId. */
          detailId?: string | null;
          /** The change operation performed. */
          eventType?: "CREATE" | "UPDATE" | "DELETE" | null;
          /** The API entity type that changed, such as Campaign, AdGroup, Keyword, NegativeKeyword, Ad, Creative, AdAccount, Org or LocationGroup. It is not a closed enum. */
          entityType?: string | null;
          /** Platform identifier of the entity that changed. */
          entityId?: string | null;
          /** When the change happened, as an ISO 8601 UTC timestamp such as 2025-03-15T14:30:00.000Z. */
          eventTime?: string | null;
          /** Category of actor that made the change. */
          userType?: "CUSTOMER" | "CUSTOMER_API" | "APPLE_SUPPORT" | null;
          /** Identifier of the user or service that made the change. Apple Ads never exposes the user's email address. */
          modifiedBy?: string | null;
          /** Entity metadata captured when the change happened, keyed by attribute name such as name or campaignId. Which keys appear depends on the entity type, and Apple Ads fills it in regardless of the metadata option used on the query. */
          entityMetaData?: Record<string, string | null> | null;
          /** Activity groups holding the field-level changes. */
          details?: Array<{
            /** Identifier of the transaction this activity belongs to. */
            transactionId?: string | null;
            /** Field-level changes recorded in this activity. */
            changes?: Array<{
              /** Name of the API field that changed. */
              field?: string | null;
              /** Values before the change, always encoded as strings whatever the field's own type is. It is empty for CREATE events. */
              oldValues?: Array<string> | null;
              /** Values after the change, always encoded as strings. It is typically empty for DELETE events, though Apple Ads may report system-managed values such as the deletion flag or status. */
              newValues?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read one ad creative by identifier, including its creative spec, destination, system status and per-placement eligibility. A soft-deleted ad creative returns 404: read it back through query_creatives with a deleted filter instead. */
    "apple_ads.get_creative": {
      input: {
        /** Identifier of the ad creative. */
        creativeId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** An ad creative, the reusable unit of visual presentation an ad references. It carries a pre-tap creativeSpec and a post-tap destination. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        creative: {
          /** System-assigned identifier for the ad creative. Pass this value as creativeId when creating an ad. */
          id: number;
          /** Ad account the ad creative belongs to. */
          adAccountId?: number | null;
          /** Advertiser-given name of the ad creative. */
          name?: string | null;
          /** Content source and placement eligibility of the ad creative. */
          creativeType?: "DEFAULT_PRODUCT_PAGE" | "CUSTOM_PRODUCT_PAGE" | "LOCAL_ADS_SEARCH_CREATIVE" | null;
          /** Pre-tap experience specification. Apple Ads returns an empty object for DEFAULT_PRODUCT_PAGE and CUSTOM_PRODUCT_PAGE, because App Store Connect controls their pre-tap rendering. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          creativeSpec?: {
            /** Brand the Apple Maps ad creative belongs to. */
            brandId?: string | null;
            /** Asset format of the Apple Maps ad creative. */
            creativeSubtype?: "BUSINESS_LOGO" | "BUSINESS_ASSET" | null;
            /** Ordered asset references rendered in the Apple Maps ad creative. */
            creativeAssets?: Array<{
              /** UUID of the referenced asset. */
              assetId?: string | null;
              /** Display position of this asset within the list. */
              sortOrder?: number | null;
              [key: string]: unknown;
            }> | null;
            /** Localized promotional copy keyed by BCP-47 locale code, then by text key. */
            localizedText?: Record<string, Record<string, string | null> | null> | null;
            /** Locale whose copy is used when a viewer's locale is missing from localizedText. */
            defaultLocale?: string | null;
            [key: string]: unknown;
          } | null;
          /** Post-tap destination users land on after tapping the ad. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          destination?: {
            /** Type of post-tap destination. */
            destinationType?: "APP_STORE_PRODUCT_PAGE" | "LOCAL_ADS_PLACECARD" | null;
            /** Destination-specific identifiers. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            parameters?: {
              /** App Store app identifier the destination points at. */
              adamId?: string | null;
              /** UUID of the Custom Product Page, or null when the default product page is used. */
              productPageId?: string | null;
              [key: string]: unknown;
            } | null;
            /** Resolved destination URL that Apple Ads computes from destinationType and parameters. */
            url?: string | null;
            [key: string]: unknown;
          } | null;
          /** System validation state of the ad creative. */
          systemStatus?: "VALID" | "INVALID" | "PENDING" | null;
          /** Reasons behind the current system status. */
          systemStatusReasons?: Array<string> | null;
          /** Where the ad creative is allowed to serve. Apple Ads leaves it empty or null while systemStatus is PENDING. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          eligibility?: {
            /** Overall eligibility status. */
            status?: "ELIGIBLE" | "INELIGIBLE" | null;
            /** Placement and market combinations where the ad creative can serve. */
            allowedGroups?: Array<{
              /** Supply placements covered by this group. */
              supplyPlacement?: Array<string> | null;
              /** Countries or regions covered by this group. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            /** Placement and market combinations where the ad creative cannot serve. */
            blockedGroups?: Array<{
              /** Supply placements covered by this group. */
              supplyPlacement?: Array<string> | null;
              /** Countries or regions covered by this group. */
              countryOrRegion?: Array<string> | null;
              /** Why the ad creative is blocked in this group, for example APP_NOT_ELIGIBLE. */
              reason?: string | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          } | null;
          /** When the ad creative was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the ad creative was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the ad creative has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read one keyword by identifier. Apple Ads returns a soft-deleted keyword with deleted set to true rather than 404. */
    "apple_ads.get_keyword": {
      input: {
        /** Identifier of the keyword. */
        keywordId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** A keyword, the targeting unit that makes an ad group eligible for the auction when a user search matches it. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        keyword: {
          /** System-assigned identifier for the keyword. */
          id: number;
          /** Ad account the keyword belongs to. */
          adAccountId?: number | null;
          /** Campaign that owns the keyword's ad group. Informational only; keywords are never attached to a campaign directly. */
          campaignId?: number | null;
          /** Ad group the keyword belongs to. */
          adGroupId?: number | null;
          /** Advertiser-given keyword text. */
          text?: string | null;
          /** How the keyword matches user search queries. EXACT and BROAD apply to App Store campaigns using the Search results placement; PHRASE and CATEGORY apply to Apple Maps campaigns. */
          matchType?: "EXACT" | "BROAD" | "PHRASE" | "CATEGORY" | null;
          /** Per-keyword bid override, or null when the keyword follows the ad group's bid strategy. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          bid?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Advertiser intent for the keyword to serve. */
          status?: "ENABLED" | "PAUSED" | null;
          /** Rolled-up delivery state combining the keyword, its ad group and its campaign. */
          displayStatus?: "RUNNING" | "PAUSED" | "DELETED" | "AD_GROUP_ON_HOLD" | "CAMPAIGN_ON_HOLD" | null;
          /** When the keyword was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the keyword was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the keyword has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve App Store keyword performance, one row per keyword with metrics aggregated over the date range and an optional bid recommendation. Every App Store report request must carry a filter on campaignId; this action rejects a request without one before it reaches Apple Ads. Add an adGroupId filter to keep the report to a single ad group. */
    "apple_ads.get_keyword_report": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Date range, time zone and optional time-series breakdown for the report. */
        timeRange: {
          /**
           * First day included in the report, in YYYY-MM-DD format.
           * @format date
           */
          start: string;
          /**
           * Last day included in the report, in YYYY-MM-DD format.
           * @format date
           */
          end: string;
          /** Time zone the date range is interpreted in. ORTZ is the org's reporting time zone and is the default. */
          timeZone?: "ORTZ" | "UTC";
          /** Time-series breakdown for granularMetrics. HOURLY needs a date range starting within the last 7 days, DAILY within the last 90 days and spanning more than one day, WEEKLY within the last 365 days with an end date at least 14 days in the past, and MONTHLY an end date at least 90 days in the past. Omit it to get a single aggregate in totalMetrics. */
          granularity?: "HOURLY" | "DAILY" | "WEEKLY" | "MONTHLY";
        };
        /** Filter conditions combined with logical AND. */
        filters?: Array<{
          /**
           * Name of the field to filter on. Apple Ads accepts entity fields such as campaignId and adGroupId as well as metric fields such as impressions, taps and localSpend; the exact set depends on the entity level.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Comparison operator. Numeric fields accept the range operators such as GREATER_THAN and BETWEEN; string fields accept EQUALS, IN and the pattern operators. */
          operator: "BETWEEN" | "CONTAINS" | "CONTAINS_ANY" | "CONTAINS_ALL" | "ENDS_WITH" | "EQUALS" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "IN" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "LIKE" | "NOT_EQUALS" | "STARTS_WITH";
          /** Operand to compare against. Pass an array for IN, BETWEEN, CONTAINS_ANY and CONTAINS_ALL, and either a bare value or a single-element array for the single-value operators. */
          value?: unknown;
        }>;
        /** Sort directives applied in order, with later entries breaking ties. The default is to sort by entity id ascending. */
        sorting?: Array<{
          /**
           * Name of the field to sort on, for example localSpend or impressions.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /** Field names to return on each row. Omit it to receive every field. */
        fields?: Array<string>;
        /** Dimensions to break each keyword's metrics out by. Keyword reports support deviceClass, storefront and countryOrRegion only. */
        groupBy?: Array<"deviceClass" | "storefront" | "countryOrRegion">;
        /** Extra rows to include. GRAND_TOTAL adds a summary of every row; EMPTY_METRICS adds rows for keywords with no activity and cannot be combined with groupBy. */
        includeRows?: Array<"GRAND_TOTAL" | "EMPTY_METRICS">;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of rows to return on this page. The maximum is 5000 and Apple Ads defaults to 100.
         * @maximum 5000
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Keyword report rows on this page. */
        rows: Array<{
          /** Keyword attributes captured at report time, plus the groupBy dimension values applied to this row. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          metadata?: {
            /** System-assigned identifier for the keyword. */
            id?: number | null;
            /** Campaign that owns the keyword. */
            campaignId?: number | null;
            /** Ad group that owns the keyword. */
            adGroupId?: number | null;
            /** Ad account that owns the keyword. */
            adAccountId?: number | null;
            /** Lightweight summary of the parent ad group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            adGroup?: {
              /** The ad group name. */
              name?: string | null;
              /** Whether the ad group has been deleted. */
              deleted?: boolean | null;
              [key: string]: unknown;
            } | null;
            /** Whether the keyword has been deleted. */
            deleted?: boolean | null;
            /** The keyword text. */
            text?: string | null;
            /** Serving state of the keyword. */
            status?: "ACTIVE" | "PAUSED" | "DELETED" | null;
            /** Keyword-level bid amount in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            bid?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** When the keyword was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            modificationTime?: string | null;
            /** When the keyword was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            creationTime?: string | null;
            /** Computed display status of the keyword. */
            displayStatus?: string | null;
            /** How the keyword matches search queries. */
            matchType?: "BROAD" | "EXACT" | null;
            /** Value of the countryOrRegion groupBy dimension for this row, or null when the request did not group by it. */
            countryOrRegion?: string | null;
            /** Value of the deviceClass groupBy dimension for this row, or null when the request did not group by it. */
            deviceClass?: string | null;
            [key: string]: unknown;
          } | null;
          /** Metrics aggregated over the whole requested date range. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          totalMetrics?: {
            /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
            date?: string | null;
            /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            localSpend?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total ad impressions. */
            impressions?: number | null;
            /** Total ad taps. */
            taps?: number | null;
            /** Tap-through rate, which is taps divided by impressions. */
            ttr?: number | null;
            /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpt?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpm?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Installs attributed to taps. */
            tapInstalls?: number | null;
            /** Average cost per tap-attributed install. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tapInstallCPI?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** First-time installs across all attribution types. */
            totalNewDownloads?: number | null;
            /** Installs of an app the user previously had installed, across all attribution types. */
            totalRedownloads?: number | null;
            /** Installs attributed to view-through, impression-based attribution. */
            viewInstalls?: number | null;
            /** Installs combining tap and view attribution. */
            totalInstalls?: number | null;
            /** First-time installs attributed to taps. */
            tapNewDownloads?: number | null;
            /** Redownloads attributed to taps. */
            tapRedownloads?: number | null;
            /** First-time installs attributed to view-through impressions. */
            viewNewDownloads?: number | null;
            /** Redownloads attributed to view-through impressions. */
            viewRedownloads?: number | null;
            /** Average cost per install across all attribution types. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            totalAvgCPI?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total installs divided by taps. */
            totalInstallRate?: number | null;
            /** Tap-attributed installs divided by taps. */
            tapInstallRate?: number | null;
            /** Pre-orders placed attributed to taps. */
            tapPreOrdersPlaced?: number | null;
            /** Pre-orders placed attributed to view-through impressions. */
            viewPreOrdersPlaced?: number | null;
            /** Pre-orders placed across all attribution types. */
            totalPreOrdersPlaced?: number | null;
            [key: string]: unknown;
          } | null;
          /** Metrics broken down by the requested granularity, one entry per period. Apple Ads omits it when the request has no granularity. */
          granularMetrics?: Array<{
            /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
            date?: string | null;
            /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            localSpend?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total ad impressions. */
            impressions?: number | null;
            /** Total ad taps. */
            taps?: number | null;
            /** Tap-through rate, which is taps divided by impressions. */
            ttr?: number | null;
            /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpt?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpm?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Installs attributed to taps. */
            tapInstalls?: number | null;
            /** Average cost per tap-attributed install. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tapInstallCPI?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** First-time installs across all attribution types. */
            totalNewDownloads?: number | null;
            /** Installs of an app the user previously had installed, across all attribution types. */
            totalRedownloads?: number | null;
            /** Installs attributed to view-through, impression-based attribution. */
            viewInstalls?: number | null;
            /** Installs combining tap and view attribution. */
            totalInstalls?: number | null;
            /** First-time installs attributed to taps. */
            tapNewDownloads?: number | null;
            /** Redownloads attributed to taps. */
            tapRedownloads?: number | null;
            /** First-time installs attributed to view-through impressions. */
            viewNewDownloads?: number | null;
            /** Redownloads attributed to view-through impressions. */
            viewRedownloads?: number | null;
            /** Average cost per install across all attribution types. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            totalAvgCPI?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total installs divided by taps. */
            totalInstallRate?: number | null;
            /** Tap-attributed installs divided by taps. */
            tapInstallRate?: number | null;
            /** Pre-orders placed attributed to taps. */
            tapPreOrdersPlaced?: number | null;
            /** Pre-orders placed attributed to view-through impressions. */
            viewPreOrdersPlaced?: number | null;
            /** Pre-orders placed across all attribution types. */
            totalPreOrdersPlaced?: number | null;
            [key: string]: unknown;
          }> | null;
          /** Performance insights attached to the keyword row. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          insights?: {
            /** Suggested bid information for this keyword. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            bidRecommendation?: {
              /** Recommended bid amount for the keyword. */
              suggestedBidAmount?: number | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
        /** Totals across every row of the result set, or null when GRAND_TOTAL was not requested. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        grandTotal: {
          /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
          date?: string | null;
          /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          localSpend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Total ad impressions. */
          impressions?: number | null;
          /** Total ad taps. */
          taps?: number | null;
          /** Tap-through rate, which is taps divided by impressions. */
          ttr?: number | null;
          /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpt?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpm?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Installs attributed to taps. */
          tapInstalls?: number | null;
          /** Average cost per tap-attributed install. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          tapInstallCPI?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** First-time installs across all attribution types. */
          totalNewDownloads?: number | null;
          /** Installs of an app the user previously had installed, across all attribution types. */
          totalRedownloads?: number | null;
          /** Installs attributed to view-through, impression-based attribution. */
          viewInstalls?: number | null;
          /** Installs combining tap and view attribution. */
          totalInstalls?: number | null;
          /** First-time installs attributed to taps. */
          tapNewDownloads?: number | null;
          /** Redownloads attributed to taps. */
          tapRedownloads?: number | null;
          /** First-time installs attributed to view-through impressions. */
          viewNewDownloads?: number | null;
          /** Redownloads attributed to view-through impressions. */
          viewRedownloads?: number | null;
          /** Average cost per install across all attribution types. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          totalAvgCPI?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Total installs divided by taps. */
          totalInstallRate?: number | null;
          /** Tap-attributed installs divided by taps. */
          tapInstallRate?: number | null;
          /** Pre-orders placed attributed to taps. */
          tapPreOrdersPlaced?: number | null;
          /** Pre-orders placed attributed to view-through impressions. */
          viewPreOrdersPlaced?: number | null;
          /** Pre-orders placed across all attribution types. */
          totalPreOrdersPlaced?: number | null;
          [key: string]: unknown;
        } | null;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of rows matching the query across all pages, or null when Apple Ads leaves it out. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read one business location by identifier. Use it to confirm the address, coordinates, operational status and eligibility of a store before adding it to a location group. */
    "apple_ads.get_location": {
      input: {
        /** Identifier of the business location. */
        locationId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** A physical place of business associated with a brand, such as a retail store, restaurant or service center. Locations are read-only in the Apple Ads Platform API: Apple Business creates and maintains them. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        location: {
          /** Identifier for the location. Use it when building a location group. */
          id: string;
          /** Display name of the location. */
          name?: string | null;
          /** Brand the location belongs to. */
          brandId?: string | null;
          /** Operational status of the location. Only OPEN locations are eligible for ad targeting. */
          status?: "OPEN" | "OPENING_SOON" | "CLOSED" | "MOVED" | "TEMPORARILY_CLOSED" | null;
          /** ISO 3166-1 alpha-2 country or region code for the location. */
          countryOrRegion?: string | null;
          /** Business category identifiers. The first entry is the primary category. */
          categories?: Array<string> | null;
          /** Postal address of the location. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          address?: {
            /** ISO 3166-1 alpha-2 country or region code. */
            countryOrRegion?: string | null;
            /** State or province name spelled out in full. */
            adminArea?: string | null;
            /** Abbreviated state or province code. */
            adminAreaCode?: string | null;
            /** City or town name. */
            locality?: string | null;
            /** Neighborhood or district inside the locality. */
            subLocality?: string | null;
            /** County or other subdivision of the administrative area. */
            subAdminArea?: string | null;
            /** Postal or ZIP code. */
            postalCode?: string | null;
            /** Street name. */
            thoroughfare?: string | null;
            /** Street number. */
            subThoroughfare?: string | null;
            /** Street number and street name combined. */
            fullThoroughfare?: string | null;
            /** Complete address on a single line. */
            fullAddress?: string | null;
            [key: string]: unknown;
          } | null;
          /** Geographic coordinates of the location. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          displayPoint?: {
            /** Latitude as a decimal string. */
            latitude?: string | null;
            /** Longitude as a decimal string. */
            longitude?: string | null;
            [key: string]: unknown;
          } | null;
          /** System-managed eligibility for ad targeting. Only a location whose status is ELIGIBLE can be added to a location group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          eligibility?: {
            /** System-managed eligibility status. */
            status?: "ELIGIBLE" | "INELIGIBLE" | "LIMITED" | "PENDING" | "UNDEFINED" | null;
            /** Placement and market combinations that cannot serve. */
            blockedGroups?: Array<{
              /** Supply placements this group covers. */
              supplyPlacement?: Array<string> | null;
              /** Markets this group covers. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            /** Placement and market combinations that can serve. */
            allowedGroups?: Array<{
              /** Supply placements this group covers. */
              supplyPlacement?: Array<string> | null;
              /** Markets this group covers. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          } | null;
          /** When the location record was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the location record was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read one location group by identifier, including its membership definition, systemStatus, location count and eligibility. A soft-deleted group is still readable and comes back with systemStatus DELETED. */
    "apple_ads.get_location_group": {
      input: {
        /** Identifier of the location group. */
        locationGroupId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** A named set of business locations scoped to one brand. An ad group references the group to restrict which of the advertiser's locations its Apple Maps ads promote; it does not filter by the ad viewer's location. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        locationGroup: {
          /** System-assigned identifier for the location group. */
          id: string;
          /** Display name of the group. */
          name?: string | null;
          /** Brand the group belongs to. */
          brandId?: string | null;
          /** Ad account that owns the group. */
          adAccountId?: string | null;
          /** How membership is defined. */
          groupType?: "STATIC" | "DYNAMIC" | null;
          /** System-managed state. A group is unusable for targeting until it reaches VALID, and a group in INVALID or PENDING state cannot be updated or deleted. */
          systemStatus?: "VALID" | "INVALID" | "PENDING" | "DELETED" | null;
          /** RSQL query Apple Ads generated from the rules of a DYNAMIC group. */
          query?: string | null;
          /** Membership rules evaluated against the brand's location catalog for a DYNAMIC group. */
          rules?: Array<{
            /** Location field the rule matches on. */
            field?: string | null;
            /** Comparison operator applied to the field. */
            operator?: string | null;
            /** Value the field is compared against. */
            value?: unknown;
            [key: string]: unknown;
          }> | null;
          /** Location identifiers explicitly included in a STATIC group. */
          locationIds?: Array<string> | null;
          /** Whether this is the system-created All Locations group for the brand. */
          isAllLocationsGroup?: boolean | null;
          /** Advertiser-given description of the group. */
          description?: string | null;
          /** Number of locations currently in the group. It stays 0 for a DYNAMIC group until rule evaluation finishes. */
          groupTotal?: number | null;
          /** Ad serving eligibility for the group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          eligibility?: {
            /** System-managed eligibility status. */
            status?: "ELIGIBLE" | "INELIGIBLE" | "LIMITED" | "PENDING" | "UNDEFINED" | null;
            /** Placement and market combinations that cannot serve. */
            blockedGroups?: Array<{
              /** Supply placements this group covers. */
              supplyPlacement?: Array<string> | null;
              /** Markets this group covers. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            /** Placement and market combinations that can serve. */
            allowedGroups?: Array<{
              /** Supply placements this group covers. */
              supplyPlacement?: Array<string> | null;
              /** Markets this group covers. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          } | null;
          /** When the group was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the group was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the group has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read the user and organization the access token belongs to. It is the cheapest way to confirm the credential works and to learn the orgId the other account actions need. */
    "apple_ads.get_me": {
      input: Record<string, never>;
      output: {
        /** Identity of the API user the access token authenticates. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        me: {
          /** Identifier of the authenticated API user. */
          userId?: number | null;
          /** Identifier of the organization the access token is bound to. A token reaches exactly one organization. */
          orgId?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read one negative keyword by identifier. Apple Ads returns the record regardless of its deleted state, and an absent or null adGroupId marks it as a campaign-level exclusion. */
    "apple_ads.get_negative_keyword": {
      input: {
        /** Identifier of the negative keyword. */
        negativeKeywordId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** A negative keyword: a search term exclusion scoped either to a whole campaign or to a single ad group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        negativeKeyword: {
          /** System-assigned identifier for the negative keyword. */
          id: number;
          /** Ad account the negative keyword belongs to. */
          adAccountId?: number | null;
          /** Campaign the negative keyword belongs to. */
          campaignId?: number | null;
          /** Ad group the negative keyword is scoped to. Campaign-level exclusions have no ad group: Apple Ads returns null for them, or leaves the field out entirely. */
          adGroupId?: number | null;
          /** The advertiser-given term to exclude. */
          text?: string | null;
          /** How the excluded term is matched against user searches. */
          matchType?: "EXACT" | "BROAD" | "PHRASE" | "CATEGORY" | null;
          /** Whether the exclusion is active or paused. */
          status?: "ENABLED" | "PAUSED" | null;
          /** When the negative keyword was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the negative keyword was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the negative keyword has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read one organization by identifier, including the currency, time zone, payment model and system status its ad accounts inherit. */
    "apple_ads.get_org": {
      input: {
        /** Identifier of the organization. Get Me Details returns the orgId bound to the access token. */
        orgId: number | string;
      };
      output: {
        /** An organization, the top-level entity that owns ad accounts, users and the billing relationship. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        org: {
          /** System-assigned identifier for the organization. */
          id: number;
          /** Name of the organization. */
          name?: string | null;
          /** Currency the organization reports amounts in. */
          currency?: "USD" | "RMB" | "AUD" | "CAD" | "EUR" | "GBP" | "JPY" | "MXN" | "NZD" | "RUB" | "CNY" | "INR" | "BRL" | "IDR" | null;
          /** Time zone of the organization. */
          timezone?: string | null;
          /** Payment model of the organization. LOC is line of credit, invoiced monthly and required for budget orders; PAYG is pay as you go, charged per campaign spend. */
          paymentModel?: "PAYG" | "LOC" | null;
          /** Whether the organization is operational. While it is INACTIVE no campaign under it serves. */
          systemStatus?: "ACTIVE" | "INACTIVE" | null;
          /** Reasons the organization is INACTIVE, empty while it is ACTIVE. */
          systemStatusReasons?: Array<string> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read one App Store product page by identifier. Use query_product_pages to discover the identifiers of an app's product pages first. */
    "apple_ads.get_product_page": {
      input: {
        /**
         * Identifier of the product page, as assigned by App Store Connect.
         * @minLength 1
         * @pattern \S
         */
        productPageId: string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
      };
      output: {
        /** An App Store product page as Apple Ads sees it. It can be the app's default product page, a custom product page, or a product page optimization variant, and it is created and edited in App Store Connect. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        productPage: {
          /** App Store Connect identifier for the product page. */
          id: string;
          /** App Store identifier of the app this product page belongs to. */
          adamId?: number | null;
          /** Product page name as configured in App Store Connect. */
          name?: string | null;
          /** Distribution state of the product page. It is an open string rather than a closed enum; a live page is typically PUBLISHED, and App Store Connect can surface other values such as READY_FOR_DISTRIBUTION while a change propagates. */
          state?: string | null;
          /** URL used when this product page is a creative destination, or null when no deep link is configured. */
          deepLink?: string | null;
          /** When the product page was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the product page was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the App Store search terms that matched a keyword and produced an impression, one row per search term with the keyword it matched. Every App Store report request must carry a filter on campaignId; this action rejects a request without one before it reaches Apple Ads. Apple Ads suppresses or aggregates low-volume terms to protect user privacy. */
    "apple_ads.get_search_term_report": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Date range, time zone and optional time-series breakdown for the report. */
        timeRange: {
          /**
           * First day included in the report, in YYYY-MM-DD format.
           * @format date
           */
          start: string;
          /**
           * Last day included in the report, in YYYY-MM-DD format.
           * @format date
           */
          end: string;
          /** Time zone the date range is interpreted in. Search term reports accept ORTZ only; Apple Ads rejects UTC here. */
          timeZone?: "ORTZ";
          /** Time-series breakdown for granularMetrics. Search term reports have no HOURLY option: DAILY needs a date range starting within the last 90 days and spanning more than one day, WEEKLY within the last 365 days with an end date at least 14 days in the past, and MONTHLY an end date at least 90 days in the past. Omit it to get a single aggregate in totalMetrics. */
          granularity?: "DAILY" | "WEEKLY" | "MONTHLY";
        };
        /** Filter conditions combined with logical AND. */
        filters?: Array<{
          /**
           * Name of the field to filter on. Apple Ads accepts entity fields such as campaignId and adGroupId as well as metric fields such as impressions, taps and localSpend; the exact set depends on the entity level.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Comparison operator. Numeric fields accept the range operators such as GREATER_THAN and BETWEEN; string fields accept EQUALS, IN and the pattern operators. */
          operator: "BETWEEN" | "CONTAINS" | "CONTAINS_ANY" | "CONTAINS_ALL" | "ENDS_WITH" | "EQUALS" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "IN" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "LIKE" | "NOT_EQUALS" | "STARTS_WITH";
          /** Operand to compare against. Pass an array for IN, BETWEEN, CONTAINS_ANY and CONTAINS_ALL, and either a bare value or a single-element array for the single-value operators. */
          value?: unknown;
        }>;
        /** Sort directives applied in order, with later entries breaking ties. The default is to sort by entity id ascending. */
        sorting?: Array<{
          /**
           * Name of the field to sort on, for example localSpend or impressions.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /** Field names to return on each row. Omit it to receive every field. */
        fields?: Array<string>;
        /** Dimensions to break each search term's metrics out by. Search term reports support deviceClass, storefront and countryOrRegion only. */
        groupBy?: Array<"deviceClass" | "storefront" | "countryOrRegion">;
        /** Extra rows to include. GRAND_TOTAL adds a summary of every row. Search term reports do not support EMPTY_METRICS. */
        includeRows?: Array<"GRAND_TOTAL">;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of rows to return on this page. The maximum is 5000 and Apple Ads defaults to 100.
         * @maximum 5000
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Search term report rows on this page. */
        rows: Array<{
          /** Search term attributes captured at report time, plus the groupBy dimension values applied to this row. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          metadata?: {
            /** Campaign that owns the search term. */
            campaignId?: number | null;
            /** Ad group that owns the search term. */
            adGroupId?: number | null;
            /** Ad account that owns the search term. */
            adAccountId?: number | null;
            /** Lightweight summary of the parent ad group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            adGroup?: {
              /** The ad group name. */
              name?: string | null;
              /** Whether the ad group has been deleted. */
              deleted?: boolean | null;
              [key: string]: unknown;
            } | null;
            /** The user-entered query string. */
            searchTermText?: string | null;
            /** Whether the search term came from a direct user search or an auto-match source. */
            searchTermSource?: string | null;
            /** Keyword attributes captured at report time, plus the groupBy dimension values applied to this row. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            keyword?: {
              /** System-assigned identifier for the keyword. */
              id?: number | null;
              /** Campaign that owns the keyword. */
              campaignId?: number | null;
              /** Ad group that owns the keyword. */
              adGroupId?: number | null;
              /** Ad account that owns the keyword. */
              adAccountId?: number | null;
              /** Lightweight summary of the parent ad group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              adGroup?: {
                /** The ad group name. */
                name?: string | null;
                /** Whether the ad group has been deleted. */
                deleted?: boolean | null;
                [key: string]: unknown;
              } | null;
              /** Whether the keyword has been deleted. */
              deleted?: boolean | null;
              /** The keyword text. */
              text?: string | null;
              /** Serving state of the keyword. */
              status?: "ACTIVE" | "PAUSED" | "DELETED" | null;
              /** Keyword-level bid amount in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
              bid?: {
                /** Monetary amount as a decimal string. */
                amount?: string | null;
                /** ISO 4217 currency code. */
                currency?: string | null;
                [key: string]: unknown;
              } | null;
              /** When the keyword was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
              modificationTime?: string | null;
              /** When the keyword was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
              creationTime?: string | null;
              /** Computed display status of the keyword. */
              displayStatus?: string | null;
              /** How the keyword matches search queries. */
              matchType?: "BROAD" | "EXACT" | null;
              /** Value of the countryOrRegion groupBy dimension for this row, or null when the request did not group by it. */
              countryOrRegion?: string | null;
              /** Value of the deviceClass groupBy dimension for this row, or null when the request did not group by it. */
              deviceClass?: string | null;
              [key: string]: unknown;
            } | null;
            /** Value of the countryOrRegion groupBy dimension for this row, or null when the request did not group by it. */
            countryOrRegion?: string | null;
            /** Value of the deviceClass groupBy dimension for this row, or null when the request did not group by it. */
            deviceClass?: string | null;
            [key: string]: unknown;
          } | null;
          /** Metrics aggregated over the whole requested date range. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          totalMetrics?: {
            /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
            date?: string | null;
            /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            localSpend?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total ad impressions. */
            impressions?: number | null;
            /** Total ad taps. */
            taps?: number | null;
            /** Tap-through rate, which is taps divided by impressions. */
            ttr?: number | null;
            /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpt?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpm?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Installs attributed to taps. */
            tapInstalls?: number | null;
            /** Average cost per tap-attributed install. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tapInstallCPI?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** First-time installs across all attribution types. */
            totalNewDownloads?: number | null;
            /** Installs of an app the user previously had installed, across all attribution types. */
            totalRedownloads?: number | null;
            /** Installs attributed to view-through, impression-based attribution. */
            viewInstalls?: number | null;
            /** Installs combining tap and view attribution. */
            totalInstalls?: number | null;
            /** First-time installs attributed to taps. */
            tapNewDownloads?: number | null;
            /** Redownloads attributed to taps. */
            tapRedownloads?: number | null;
            /** First-time installs attributed to view-through impressions. */
            viewNewDownloads?: number | null;
            /** Redownloads attributed to view-through impressions. */
            viewRedownloads?: number | null;
            /** Average cost per install across all attribution types. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            totalAvgCPI?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total installs divided by taps. */
            totalInstallRate?: number | null;
            /** Tap-attributed installs divided by taps. */
            tapInstallRate?: number | null;
            /** Pre-orders placed attributed to taps. */
            tapPreOrdersPlaced?: number | null;
            /** Pre-orders placed attributed to view-through impressions. */
            viewPreOrdersPlaced?: number | null;
            /** Pre-orders placed across all attribution types. */
            totalPreOrdersPlaced?: number | null;
            [key: string]: unknown;
          } | null;
          /** Metrics broken down by the requested granularity, one entry per period. Apple Ads omits it when the request has no granularity. */
          granularMetrics?: Array<{
            /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
            date?: string | null;
            /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            localSpend?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total ad impressions. */
            impressions?: number | null;
            /** Total ad taps. */
            taps?: number | null;
            /** Tap-through rate, which is taps divided by impressions. */
            ttr?: number | null;
            /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpt?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            cpm?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Installs attributed to taps. */
            tapInstalls?: number | null;
            /** Average cost per tap-attributed install. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            tapInstallCPI?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** First-time installs across all attribution types. */
            totalNewDownloads?: number | null;
            /** Installs of an app the user previously had installed, across all attribution types. */
            totalRedownloads?: number | null;
            /** Installs attributed to view-through, impression-based attribution. */
            viewInstalls?: number | null;
            /** Installs combining tap and view attribution. */
            totalInstalls?: number | null;
            /** First-time installs attributed to taps. */
            tapNewDownloads?: number | null;
            /** Redownloads attributed to taps. */
            tapRedownloads?: number | null;
            /** First-time installs attributed to view-through impressions. */
            viewNewDownloads?: number | null;
            /** Redownloads attributed to view-through impressions. */
            viewRedownloads?: number | null;
            /** Average cost per install across all attribution types. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            totalAvgCPI?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            /** Total installs divided by taps. */
            totalInstallRate?: number | null;
            /** Tap-attributed installs divided by taps. */
            tapInstallRate?: number | null;
            /** Pre-orders placed attributed to taps. */
            tapPreOrdersPlaced?: number | null;
            /** Pre-orders placed attributed to view-through impressions. */
            viewPreOrdersPlaced?: number | null;
            /** Pre-orders placed across all attribution types. */
            totalPreOrdersPlaced?: number | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
        /** Totals across every row of the result set, or null when GRAND_TOTAL was not requested. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        grandTotal: {
          /** Period this metrics entry covers, in YYYY-MM-DD format. Apple Ads sets it on granular entries only. */
          date?: string | null;
          /** Total spend for the period in the ad account currency. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          localSpend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Total ad impressions. */
          impressions?: number | null;
          /** Total ad taps. */
          taps?: number | null;
          /** Tap-through rate, which is taps divided by impressions. */
          ttr?: number | null;
          /** Average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpt?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Average cost per thousand impressions. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpm?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Installs attributed to taps. */
          tapInstalls?: number | null;
          /** Average cost per tap-attributed install. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          tapInstallCPI?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** First-time installs across all attribution types. */
          totalNewDownloads?: number | null;
          /** Installs of an app the user previously had installed, across all attribution types. */
          totalRedownloads?: number | null;
          /** Installs attributed to view-through, impression-based attribution. */
          viewInstalls?: number | null;
          /** Installs combining tap and view attribution. */
          totalInstalls?: number | null;
          /** First-time installs attributed to taps. */
          tapNewDownloads?: number | null;
          /** Redownloads attributed to taps. */
          tapRedownloads?: number | null;
          /** First-time installs attributed to view-through impressions. */
          viewNewDownloads?: number | null;
          /** Redownloads attributed to view-through impressions. */
          viewRedownloads?: number | null;
          /** Average cost per install across all attribution types. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          totalAvgCPI?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Total installs divided by taps. */
          totalInstallRate?: number | null;
          /** Tap-attributed installs divided by taps. */
          tapInstallRate?: number | null;
          /** Pre-orders placed attributed to taps. */
          tapPreOrdersPlaced?: number | null;
          /** Pre-orders placed attributed to view-through impressions. */
          viewPreOrdersPlaced?: number | null;
          /** Pre-orders placed across all attribution types. */
          totalPreOrdersPlaced?: number | null;
          [key: string]: unknown;
        } | null;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of rows matching the query across all pages, or null when Apple Ads leaves it out. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** List every ad account the access token can reach and the roles the API user holds on each. Start here to discover the adAccountId values the ad-account-scoped actions need. */
    "apple_ads.get_user_acls": {
      input: Record<string, never>;
      output: {
        /** Access control entries, one per ad account the API user can reach. It is empty when the organization has no ad account yet. */
        acls: Array<{
          /** The ad account this entry covers. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          adAccount?: {
            /** Identifier of the ad account. Use it as the adAccountId input. */
            id?: number | null;
            /** Name of the ad account. */
            name?: string | null;
            /** Identifier of the organization the ad account belongs to. */
            orgId?: number | null;
            [key: string]: unknown;
          } | null;
          /** Roles the API user holds on this ad account. */
          roles?: Array<string> | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search the ad groups of one ad account with filters, sorting and offset pagination. Filter on campaignId to scope the result to a single campaign. Soft-deleted ad groups are excluded unless a filter on deleted asks for them. */
    "apple_ads.query_ad_groups": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Filter conditions combined with logical AND. Omit it to return every record in the ad account. */
        filters?: Array<{
          /** Ad group field to filter on. id accepts EQUALS and IN; campaignId and deleted accept EQUALS; name accepts EQUALS and STARTS_WITH; status accepts EQUALS and IN; startTime and endTime accept LESS_THAN and GREATER_THAN. */
          field: "id" | "campaignId" | "name" | "status" | "startTime" | "endTime" | "deleted";
          /** Comparison operator. Which operators a field accepts is documented per field. */
          operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "CONTAINS_ANY" | "NOT_CONTAINS_ANY" | "CONTAINS_ALL" | "NOT_CONTAINS_ALL" | "LIKE" | "NOT_LIKE" | "STARTS_WITH" | "ENDS_WITH" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "BETWEEN" | "IS_NULL" | "IS_NOT_NULL";
          /** Value to compare against. Pass an array for IN, NOT_IN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY and NOT_CONTAINS_ALL, an array of exactly two values ordered as [minimum, maximum] for BETWEEN, a scalar for single-value operators, and omit it entirely for IS_NULL and IS_NOT_NULL. */
          value?: unknown;
          /** Whether to compare strings case-insensitively. */
          ignoreCase?: boolean;
        }>;
        /** Sort directives applied in order. The default is to sort by id ascending. */
        sorting?: Array<{
          /** Ad group field to sort on. The default is id ascending. */
          field: "id" | "campaignId" | "name" | "status" | "startTime" | "endTime" | "deleted";
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to include totalCount in the response pagination. Apple Ads omits it unless this is true. */
        fetchTotalCount?: boolean;
      };
      output: {
        /** Ad groups matching the query on this page. */
        adGroups: Array<{
          /** System-assigned identifier for the ad group. */
          id: number;
          /** Advertiser-given ad group name. */
          name?: string | null;
          /** Ad account the ad group belongs to. */
          adAccountId?: number | null;
          /** Campaign the ad group belongs to. */
          campaignId?: number | null;
          /** Scheduled start of the ad group. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          startTime?: string | null;
          /** Scheduled end of the ad group, or null when it inherits the campaign end date. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          endTime?: string | null;
          /** Delivery unit that triggers billing. */
          pricingModel?: "CPA" | "CPM" | "CPT" | null;
          /** Whether Search Match automatically matches relevant search terms for this ad group. */
          automatedKeywordsOptIn?: boolean | null;
          /** Whether automated keyword generation is required for this ad group. */
          automatedKeywordsRequired?: boolean | null;
          /** Advertiser intent for the ad group to serve. */
          status?: "ENABLED" | "PAUSED" | null;
          /** System-computed delivery state. */
          systemStatus?: "RUNNING" | "NOT_RUNNING" | null;
          /** Reasons the ad group is not delivering. */
          systemStatusReasons?: Array<string> | null;
          /** Reasons the ad group delivers below its full potential. */
          systemStatusLimitingReasons?: Array<string> | null;
          /** Rolled-up delivery state combining advertiser intent and system evaluation. CAMPAIGN_ON_HOLD means the parent campaign is what is blocking delivery. */
          displayStatus?: "RUNNING" | "PAUSED" | "ON_HOLD" | "CAMPAIGN_ON_HOLD" | "LIMITED" | "PROCESSING" | "DELETED" | null;
          /** Bid strategy governing auction participation for this ad group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          bidStrategy?: {
            /** The bid strategy type. */
            bidStrategyType?: "MANUAL_CPT" | "MANUAL_CPM" | "MAX_CONVERSIONS" | "MAX_ENGAGEMENTS" | null;
            /** The optimization goal. */
            bidStrategyGoal?: "TAP" | "IMPRESSION" | "INSTALL" | null;
            /** Bid ceiling for each auction entry. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            bid?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Audience and delivery targeting for the ad group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          targeting?: {
            /** Country targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            country?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** State or province targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            adminArea?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** City targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            locality?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Postal code targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            postalCode?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Radius targeting around business locations. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            radius?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Device class targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            deviceClass?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Lower bound of the target age range. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            minAge?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Upper bound of the target age range. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            maxAge?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Gender targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            gender?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** App Store category targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            appCategory?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** App downloader targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            appDownloader?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Hour-of-week targeting, as slot indexes from 0 to 167. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            daypart?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Location group targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            locationGroup?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Deprecated cost-per-acquisition cap, superseded by bidStrategy with MAX_CONVERSIONS. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpaCap?: {
            /** The target cost-per-acquisition amount. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            value?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** When the ad group was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the ad group was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the ad group has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Search the ads of one ad account with filters, sorting and offset pagination. Filter on adGroupId to scope to one ad group or on campaignId for a whole campaign. Soft-deleted ads are excluded unless a deleted EQUALS true filter asks for them. */
    "apple_ads.query_ads": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Filter conditions combined with logical AND. Omit it to return every record in the ad account. */
        filters?: Array<{
          /** Ad field to filter on. id and status accept EQUALS and IN; campaignId, adGroupId, creativeId and deleted accept EQUALS. */
          field: "id" | "campaignId" | "adGroupId" | "creativeId" | "status" | "deleted";
          /** Comparison operator. Which operators a field accepts is documented per field. */
          operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "CONTAINS_ANY" | "NOT_CONTAINS_ANY" | "CONTAINS_ALL" | "NOT_CONTAINS_ALL" | "LIKE" | "NOT_LIKE" | "STARTS_WITH" | "ENDS_WITH" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "BETWEEN" | "IS_NULL" | "IS_NOT_NULL";
          /** Value to compare against. Pass an array for IN, NOT_IN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY and NOT_CONTAINS_ALL, an array of exactly two values ordered as [minimum, maximum] for BETWEEN, a scalar for single-value operators, and omit it entirely for IS_NULL and IS_NOT_NULL. */
          value?: unknown;
          /** Whether to compare strings case-insensitively. */
          ignoreCase?: boolean;
        }>;
        /** Sort directives applied in order. The default is to sort by id ascending. */
        sorting?: Array<{
          /** Ad field to sort on. Apple Ads sorts by id ascending by default. */
          field: "id" | "campaignId" | "adGroupId" | "creativeId" | "status" | "deleted";
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to include totalCount in the response pagination. Apple Ads omits it unless this is true. */
        fetchTotalCount?: boolean;
      };
      output: {
        /** Ads matching the query on this page. */
        ads: Array<{
          /** System-assigned identifier for the ad. */
          id: number;
          /** Advertiser-given name of the ad. */
          name?: string | null;
          /** Advertiser intent for the ad to serve. */
          status?: "ENABLED" | "PAUSED" | null;
          /** Ad account the ad belongs to. */
          adAccountId?: number | null;
          /** Campaign the ad belongs to. */
          campaignId?: number | null;
          /** Ad group the ad belongs to. */
          adGroupId?: number | null;
          /** Ad creative this ad serves. */
          creativeId?: number | null;
          /** System-computed delivery state. */
          systemStatus?: "RUNNING" | "NOT_RUNNING" | null;
          /** Reasons the ad is not delivering, populated when systemStatus is NOT_RUNNING. */
          systemStatusReasons?: Array<string> | null;
          /** Reasons the ad delivers at reduced capacity without stopping. */
          systemStatusLimitingReasons?: Array<string> | null;
          /** Rolled-up delivery state combining ad, ad group and campaign conditions. */
          displayStatus?: "RUNNING" | "PAUSED" | "ON_HOLD" | "AD_GROUP_ON_HOLD" | "CAMPAIGN_ON_HOLD" | "LIMITED" | "PROCESSING" | "DELETED" | null;
          /** When the ad was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the ad was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the ad has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Check whether apps are eligible to run App Store ads, one row per combination of app, supply placement, supply source, country or region and device class. Run it before creating a campaign in a new market, because an ineligible market delivers nothing. Apple Maps brand promotion is not covered here. */
    "apple_ads.query_app_eligibilities": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Filter conditions combined with logical AND. Omit it to return every record in the ad account. */
        filters?: Array<{
          /** Eligibility field to filter on. adamId accepts EQUALS and IN, and filtering on several adamId values checks several apps in one request. */
          field: "adamId" | "supplyPlacement" | "supplySource" | "countryOrRegion" | "deviceClass" | "state";
          /** Comparison operator. Which operators a field accepts is documented per field. */
          operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "CONTAINS_ANY" | "NOT_CONTAINS_ANY" | "CONTAINS_ALL" | "NOT_CONTAINS_ALL" | "LIKE" | "NOT_LIKE" | "STARTS_WITH" | "ENDS_WITH" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "BETWEEN" | "IS_NULL" | "IS_NOT_NULL";
          /** Value to compare against. Pass an array for IN, NOT_IN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY and NOT_CONTAINS_ALL, an array of exactly two values ordered as [minimum, maximum] for BETWEEN, a scalar for single-value operators, and omit it entirely for IS_NULL and IS_NOT_NULL. */
          value?: unknown;
          /** Whether to compare strings case-insensitively. */
          ignoreCase?: boolean;
        }>;
        /** Sort directives applied in order. The default is to sort by id ascending. */
        sorting?: Array<{
          /** Eligibility field to sort on. countryOrRegion is the only field Apple Ads documents as sortable here. */
          field: "countryOrRegion";
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to include totalCount in the response pagination. Apple Ads omits it unless this is true. */
        fetchTotalCount?: boolean;
      };
      output: {
        /** Eligibility records matching the query on this page. */
        eligibilities: Array<{
          /** Adam ID of the evaluated app. */
          adamId?: number | null;
          /** Supply placement being checked. */
          supplyPlacement?: string | null;
          /** Supply source being checked. */
          supplySource?: string | null;
          /** Minimum age rating required to serve ads for this app in this market. */
          minAge?: number | null;
          /** Eligibility state for this combination. */
          state?: "ELIGIBLE" | "INELIGIBLE" | null;
          /** Country or region evaluated, as an ISO 3166-1 alpha-2 code. */
          countryOrRegion?: string | null;
          /** Device class evaluated. */
          deviceClass?: string | null;
          /** Codes explaining an INELIGIBLE state. */
          reasons?: Array<string> | null;
          /** When this eligibility record was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When this eligibility record was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read the localized content of one app's default product page, identified by the app's adamId. It returns every locale configured for the default product page unless a languageCode filter narrows it. Custom product pages are not covered here: use query_product_page_locale_details for those. */
    "apple_ads.query_app_locale_details": {
      input: {
        /** App Store identifier of the app whose default product page is read. */
        adamId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Filter conditions combined with logical AND. The query is already scoped to the app named by adamId, so omit this to return every locale configured for that app's default product page. */
        filters?: Array<{
          /** Locale detail field to filter on. Apple Ads documents languageCode as the only filterable field here and does not document which operators it accepts. */
          field: "languageCode";
          /** Comparison operator. Which operators a field accepts is documented per field. */
          operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "CONTAINS_ANY" | "NOT_CONTAINS_ANY" | "CONTAINS_ALL" | "NOT_CONTAINS_ALL" | "LIKE" | "NOT_LIKE" | "STARTS_WITH" | "ENDS_WITH" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "BETWEEN" | "IS_NULL" | "IS_NOT_NULL";
          /** Value to compare against. Pass an array for IN, NOT_IN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY and NOT_CONTAINS_ALL, an array of exactly two values ordered as [minimum, maximum] for BETWEEN, a scalar for single-value operators, and omit it entirely for IS_NULL and IS_NOT_NULL. */
          value?: unknown;
          /** Whether to compare strings case-insensitively. */
          ignoreCase?: boolean;
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to include totalCount in the response pagination. Apple Ads omits it unless this is true. */
        fetchTotalCount?: boolean;
      };
      output: {
        /** Locale details of the app's default product page on this page, one record per locale. */
        localeDetails: Array<{
          /** App Store identifier of the app. */
          adamId?: number | null;
          /** Language identifier, for example en. */
          language?: string | null;
          /** Locale identifier as a BCP 47 language code, for example en-US. */
          languageCode?: string | null;
          /** Localized app display name as it appears on the App Store. */
          appName?: string | null;
          /** App subtitle for this locale. */
          subTitle?: string | null;
          /** Promotional text for this locale, at most 170 characters long. */
          promotionalText?: string | null;
          /** Short description for this locale, at most 4000 characters long. */
          shortDescription?: string | null;
          /** Device classes this locale supports. */
          deviceClasses?: Array<string> | null;
          /** Screenshots and preview videos keyed by device type, for example iphone_6_5 or iphone_6_7. The keys are device type strings and are not limited to the values in deviceClasses. */
          assetsByDevice?: Record<string, {
              /** Asset references for this device type, in display order. */
              assets?: Array<{
                /** Identifier of the referenced asset. */
                assetId?: string | null;
                [key: string]: unknown;
              }> | null;
              /** Device types to fall back to when this device type has no assets. */
              appPreviewDeviceFallBackDevices?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
          /** Whether this locale is the app's primary App Store locale. */
          isPrimaryLocale?: boolean | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Search the rejection reasons recorded for the App Store ad creatives of an app, explaining why each creative failed Apple review. Filter by adamId to scope the search to one app. */
    "apple_ads.query_app_rejection_reasons": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Filter conditions combined with logical AND. Omit it to return every record in the ad account. */
        filters?: Array<{
          /** Rejection reason field to filter on. adamId accepts EQUALS and is the only field Apple Ads documents as filterable here. */
          field: "adamId";
          /** Comparison operator. Which operators a field accepts is documented per field. */
          operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "CONTAINS_ANY" | "NOT_CONTAINS_ANY" | "CONTAINS_ALL" | "NOT_CONTAINS_ALL" | "LIKE" | "NOT_LIKE" | "STARTS_WITH" | "ENDS_WITH" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "BETWEEN" | "IS_NULL" | "IS_NOT_NULL";
          /** Value to compare against. Pass an array for IN, NOT_IN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY and NOT_CONTAINS_ALL, an array of exactly two values ordered as [minimum, maximum] for BETWEEN, a scalar for single-value operators, and omit it entirely for IS_NULL and IS_NOT_NULL. */
          value?: unknown;
          /** Whether to compare strings case-insensitively. */
          ignoreCase?: boolean;
        }>;
        /** Sort directives applied in order. The default is to sort by id ascending. */
        sorting?: Array<{
          /** Rejection reason field to sort on. Apple Ads marks no field sortable in its table, and creationTime is the only sort field its own request example uses. */
          field: "creationTime";
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to include totalCount in the response pagination. Apple Ads omits it unless this is true. */
        fetchTotalCount?: boolean;
      };
      output: {
        /** Rejection reasons matching the query on this page. */
        rejectionReasons: Array<{
          /** System-assigned identifier for the rejection reason record. */
          id: number;
          /** Adam ID of the app whose product page triggered the rejection, when the rejection is app-scoped. */
          adamId?: number | null;
          /** Identifier of the ad creative that was rejected. */
          creativeId?: number | null;
          /** Product page identifier associated with the rejection. */
          productPageId?: string | null;
          /** UUID of the asset that triggered the rejection. */
          assetId?: string | null;
          /** Supply source the rejection applies to. */
          supplySource?: string | null;
          /** Supply placement the rejection applies to. */
          supplyPlacement?: string | null;
          /** Country or region code the rejection applies to. */
          countryOrRegion?: string | null;
          /** Language code the rejection applies to. */
          languageCode?: string | null;
          /** Type of rejection reason, for example REJECTION_REASON. */
          reasonType?: string | null;
          /** Code for the specific rejection reason. */
          reasonCode?: string | null;
          /** Additional context for the rejection. */
          comment?: string | null;
          /** Level the rejection applies at. */
          reasonLevel?: "DEFAULT_PRODUCT_PAGE" | "DEFAULT_PRODUCT_PAGE_LOCALE" | "CUSTOM_PRODUCT_PAGE" | "CUSTOM_PRODUCT_PAGE_LOCALE" | null;
          /** When the rejection reason record was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the rejection reason record was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Search the creative assets of one ad account. Soft-deleted assets and variant crops are excluded from the results; filter on deleted to include soft-deleted assets, and read a variant with get_asset. Filter on promotedObjectId to scope the query to one app or brand, because an unfiltered query spans every promoted object in the ad account. */
    "apple_ads.query_assets": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Filter conditions combined with logical AND. Omit it to return every record in the ad account. */
        filters?: Array<{
          /** Asset field to filter on. id, assetType and providerAssetId accept EQUALS and IN; name additionally accepts LIKE, STARTS_WITH and ENDS_WITH; promotedObjectId, promotedObjectType and deleted accept EQUALS. Apple Ads also documents a LIKE_IGNORE_CASE operator on name; send it as LIKE with ignoreCase set to true. */
          field: "id" | "name" | "assetType" | "providerAssetId" | "promotedObjectId" | "promotedObjectType" | "deleted";
          /** Comparison operator. Which operators a field accepts is documented per field. */
          operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "CONTAINS_ANY" | "NOT_CONTAINS_ANY" | "CONTAINS_ALL" | "NOT_CONTAINS_ALL" | "LIKE" | "NOT_LIKE" | "STARTS_WITH" | "ENDS_WITH" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "BETWEEN" | "IS_NULL" | "IS_NOT_NULL";
          /** Value to compare against. Pass an array for IN, NOT_IN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY and NOT_CONTAINS_ALL, an array of exactly two values ordered as [minimum, maximum] for BETWEEN, a scalar for single-value operators, and omit it entirely for IS_NULL and IS_NOT_NULL. */
          value?: unknown;
          /** Whether to compare strings case-insensitively. */
          ignoreCase?: boolean;
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to include totalCount in the response pagination. Apple Ads omits it unless this is true. */
        fetchTotalCount?: boolean;
      };
      output: {
        /** Assets matching the query on this page. */
        assets: Array<{
          /** System-assigned identifier for the asset, a UUID. */
          id: string;
          /** User-facing asset name or description. */
          name?: string | null;
          /** Media type of the asset. */
          assetType?: "IMAGE" | null;
          /** Asset identifier assigned by the provider system, for example the App Store Connect asset identifier. */
          providerAssetId?: string | null;
          /** Identifier of the promoted object: the adamId for an App Store app, or the brand identifier for an Apple Maps brand. */
          promotedObjectId?: string | null;
          /** Type of the promoted object. */
          promotedObjectType?: "APPSTORE_APP" | "BUSINESS_BRAND" | null;
          /** Provider-specific metadata whose keys vary by provider. App Store Connect assets carry keys such as appPreviewDevice and assetGenId, and assets uploaded for Apple Maps brands carry an empty object. */
          providerAssetMetadata?: Record<string, unknown> | null;
          /** Image metadata Apple Ads derived when it ingested the asset. It is present when assetType is IMAGE. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          assetDetails?: {
            /** Width of the image in pixels. */
            width?: number | null;
            /** Height of the image in pixels. */
            height?: number | null;
            /** File format of the image. */
            format?: "JPEG" | "JPG" | "PNG" | "HEIC" | "HEIF" | "SVG" | "WEBP" | null;
            /** File size in bytes. */
            sizeBytes?: number | null;
            /** Aspect-ratio classification of the image. */
            orientation?: "PORTRAIT" | "LANDSCAPE" | "SQUARE" | null;
            /** Source URL of the image at the provider system. */
            providerAssetUrl?: string | null;
            /** Provider token used to reference the image in provider-specific APIs. */
            providerToken?: string | null;
            /** File checksum for verifying asset integrity after transfer. */
            checkSum?: string | null;
            /** Display order position within an asset collection. */
            sortPosition?: number | null;
            /** Ad account the asset belongs to, present for custom assets. Apple Ads returns it as a string in some payloads and as a number in others. */
            adAccountId?: string | number | null;
            [key: string]: unknown;
          } | null;
          /** Identifier of the parent asset when this asset is a variant such as a crop or a resize, or null for an original asset. */
          parentAssetId?: string | null;
          /** Identifiers of this asset's variants. */
          variantIds?: Array<string> | null;
          /** Policy evaluation result for the asset. Check it before referencing the asset in a creative: INELIGIBLE and PENDING assets cannot serve anywhere, and LIMITED assets only serve outside their blocked groups. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          eligibility?: {
            /** Overall eligibility status. */
            status?: "ELIGIBLE" | "INELIGIBLE" | "LIMITED" | "PENDING" | "UNDEFINED" | null;
            /** Constraint groups where the asset is blocked from serving. */
            blockedGroups?: Array<{
              /** Supply placements scoped by this constraint. */
              supplyPlacement?: Array<string> | null;
              /** Countries or regions scoped by this constraint. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            /** Constraint groups where the asset is explicitly allowed to serve. */
            allowedGroups?: Array<{
              /** Supply placements scoped by this constraint. */
              supplyPlacement?: Array<string> | null;
              /** Countries or regions scoped by this constraint. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          } | null;
          /** When the asset was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the asset was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the asset has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Search the policy assignments that explain why Apple Ads rejected a brand, one of its creatives or one of its assets. Filter on promotedObjectId to scope the results to a single brand. */
    "apple_ads.query_brand_rejection_reasons": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Filter conditions combined with logical AND. Omit it to return every record in the ad account. */
        filters?: Array<{
          /** Policy assignment field to filter on. promotedObjectId accepts IN and EQUALS; deleted accepts EQUALS and includes soft-deleted assignments when set to true. */
          field: "promotedObjectId" | "deleted";
          /** Comparison operator. Which operators a field accepts is documented per field. */
          operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "CONTAINS_ANY" | "NOT_CONTAINS_ANY" | "CONTAINS_ALL" | "NOT_CONTAINS_ALL" | "LIKE" | "NOT_LIKE" | "STARTS_WITH" | "ENDS_WITH" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "BETWEEN" | "IS_NULL" | "IS_NOT_NULL";
          /** Value to compare against. Pass an array for IN, NOT_IN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY and NOT_CONTAINS_ALL, an array of exactly two values ordered as [minimum, maximum] for BETWEEN, a scalar for single-value operators, and omit it entirely for IS_NULL and IS_NOT_NULL. */
          value?: unknown;
          /** Whether to compare strings case-insensitively. */
          ignoreCase?: boolean;
        }>;
        /** Sort directives applied in order. The default is to sort by id ascending. */
        sorting?: Array<{
          /** Field to sort on. Apple Ads documents only the default id ordering for these endpoints. */
          field: "id";
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to include totalCount in the response pagination. Apple Ads omits it unless this is true. */
        fetchTotalCount?: boolean;
      };
      output: {
        /** Policy assignments with rejection reason details matching the query on this page. */
        rejectionReasons: Array<{
          /** System-assigned identifier of the policy assignment. */
          id: number;
          /** Identifier of the brand or promoted object the policy assignment belongs to. */
          promotedObjectId?: string | null;
          /** Type of the promoted object. Apple Ads returns BUSINESS_BRAND for Apple Maps entities. */
          promotedObjectType?: "APPSTORE_APP" | "BUSINESS_BRAND" | null;
          /** Identifier of the affected entity. */
          entityId?: string | null;
          /** Type of the affected entity, for example BUSINESS_BRAND. */
          entityType?: string | null;
          /** Type of the entity component that triggered the policy, for example ENTITY_ASSET. */
          componentType?: string | null;
          /** Identifier of the specific entity component, for example an asset UUID. */
          component?: string | null;
          /** Machine-readable rejection reason code, for example PERSONAL_INFORMATION. */
          code?: string | null;
          /** Human-readable title of the rejection reason. */
          title?: string | null;
          /** Detailed explanation of the rejection reason. */
          body?: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Search the brands accessible to one ad account with filters, sorting and offset pagination. A brand must reach eligibility.status ELIGIBLE before an Apple Maps campaign can promote it. */
    "apple_ads.query_brands": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Filter conditions combined with logical AND. Omit it to return every record in the ad account. */
        filters?: Array<{
          /** Brand field to filter on. id accepts EQUALS and IN; eligibility.status accepts EQUALS. */
          field: "id" | "eligibility.status";
          /** Comparison operator. Which operators a field accepts is documented per field. */
          operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "CONTAINS_ANY" | "NOT_CONTAINS_ANY" | "CONTAINS_ALL" | "NOT_CONTAINS_ALL" | "LIKE" | "NOT_LIKE" | "STARTS_WITH" | "ENDS_WITH" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "BETWEEN" | "IS_NULL" | "IS_NOT_NULL";
          /** Value to compare against. Pass an array for IN, NOT_IN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY and NOT_CONTAINS_ALL, an array of exactly two values ordered as [minimum, maximum] for BETWEEN, a scalar for single-value operators, and omit it entirely for IS_NULL and IS_NOT_NULL. */
          value?: unknown;
          /** Whether to compare strings case-insensitively. */
          ignoreCase?: boolean;
        }>;
        /** Sort directives applied in order. The default is to sort by id ascending. */
        sorting?: Array<{
          /** Field to sort on. Apple Ads documents only the default id ordering for these endpoints. */
          field: "id";
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to include totalCount in the response pagination. Apple Ads omits it unless this is true. */
        fetchTotalCount?: boolean;
      };
      output: {
        /** Brands matching the query on this page. */
        brands: Array<{
          /** Identifier of the brand. It is the value you pass as promotedObjectId when creating a BUSINESS_BRAND campaign. */
          id: string;
          /** Primary display name for the brand. */
          name?: string | null;
          /** Primary market for the brand as an ISO 3166-1 alpha-2 country or region code. */
          countryOrRegion?: string | null;
          /** Business category taxonomy identifiers for the brand. The first entry is the primary category. */
          categories?: Array<string> | null;
          /** Ad serving eligibility for the brand. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          eligibility?: {
            /** Overall eligibility status for the entity. */
            status?: "ELIGIBLE" | "INELIGIBLE" | "LIMITED" | "PENDING" | "UNDEFINED" | null;
            /** Placement and market combinations where the entity is blocked from serving. */
            blockedGroups?: Array<{
              /** Supply placements this constraint applies to. */
              supplyPlacement?: Array<string> | null;
              /** Countries or regions this constraint applies to. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            /** Placement and market combinations where the entity is allowed to serve. */
            allowedGroups?: Array<{
              /** Supply placements this constraint applies to. */
              supplyPlacement?: Array<string> | null;
              /** Countries or regions this constraint applies to. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            /** When Apple Ads last evaluated eligibility. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            modificationTime?: string | null;
            [key: string]: unknown;
          } | null;
          /** When the brand record was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the brand record was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Search the budget orders of one ad account with filters, sorting and offset pagination. Soft-deleted budget orders are excluded unless a filter on deleted asks for them. */
    "apple_ads.query_budget_orders": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Filter conditions combined with logical AND. Omit it to return every record in the ad account. */
        filters?: Array<{
          /** Budget order field to filter on. Apple Ads documents deleted as the filterable field, with the EQUALS operator; filter deleted EQUALS true to return soft-deleted budget orders. */
          field: "deleted";
          /** Comparison operator. Which operators a field accepts is documented per field. */
          operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "CONTAINS_ANY" | "NOT_CONTAINS_ANY" | "CONTAINS_ALL" | "NOT_CONTAINS_ALL" | "LIKE" | "NOT_LIKE" | "STARTS_WITH" | "ENDS_WITH" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "BETWEEN" | "IS_NULL" | "IS_NOT_NULL";
          /** Value to compare against. Pass an array for IN, NOT_IN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY and NOT_CONTAINS_ALL, an array of exactly two values ordered as [minimum, maximum] for BETWEEN, a scalar for single-value operators, and omit it entirely for IS_NULL and IS_NOT_NULL. */
          value?: unknown;
          /** Whether to compare strings case-insensitively. */
          ignoreCase?: boolean;
        }>;
        /** Sort directives applied in order. The default is to sort by id ascending. */
        sorting?: Array<{
          /** Budget order field to sort on. Apple Ads documents name and deleted as sortable. */
          field: "name" | "deleted";
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to include totalCount in the response pagination. Apple Ads omits it unless this is true. */
        fetchTotalCount?: boolean;
      };
      output: {
        /** Budget orders matching the query on this page. */
        budgetOrders: Array<{
          /** System-assigned identifier for the budget order. */
          id: number;
          /** Organization that owns the budget order. */
          orgId?: number | null;
          /** Advertiser-given budget order name. */
          name?: string | null;
          /** When the budget order becomes active. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          startTime?: string | null;
          /** When the budget order expires, or null when it is open-ended. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          endTime?: string | null;
          /** Total amount the assigned campaigns can spend against this budget order. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          value?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Ad accounts whose campaigns can draw from this budget order. */
          adAccountIds?: Array<number> | null;
          /** System-computed state telling whether campaigns can currently draw spend against the budget order. */
          systemStatus?: "ACTIVE" | "INACTIVE" | null;
          /** Reasons behind the current system status. */
          systemStatusReasons?: Array<"CANCELED" | "CAMPAIGN_BUDGET_UNASSIGNED" | "DELETED_BY_USER" | "EXHAUSTED" | "PROCESSING" | "SCHEDULE_EXPIRED" | "SCHEDULE_PENDING"> | null;
          /** Invoice and billing contact details. Apple Ads populates it only for Line of Credit accounts. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          invoiceDetail?: {
            /** Advertiser or product this invoice identifies. */
            clientName?: string | null;
            /** Name of the primary buyer. */
            primaryBuyerName?: string | null;
            /** Email address of the primary buyer. */
            primaryBuyerEmail?: string | null;
            /** Purchase order number. */
            orderNumber?: string | null;
            /** Billing email address. */
            billingEmail?: string | null;
            [key: string]: unknown;
          } | null;
          /** When the budget order was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the budget order was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the budget order has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Search the Apple Maps business category taxonomy with filters, sorting and offset pagination. Only categories with eligibility.status ELIGIBLE can be used by an active Apple Maps campaign. */
    "apple_ads.query_business_categories": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Filter conditions combined with logical AND. Omit it to return every record in the ad account. */
        filters?: Array<{
          /** Business category field to filter on. name is the only documented filterable field and it accepts STARTS_WITH. */
          field: "name";
          /** Comparison operator. Which operators a field accepts is documented per field. */
          operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "CONTAINS_ANY" | "NOT_CONTAINS_ANY" | "CONTAINS_ALL" | "NOT_CONTAINS_ALL" | "LIKE" | "NOT_LIKE" | "STARTS_WITH" | "ENDS_WITH" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "BETWEEN" | "IS_NULL" | "IS_NOT_NULL";
          /** Value to compare against. Pass an array for IN, NOT_IN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY and NOT_CONTAINS_ALL, an array of exactly two values ordered as [minimum, maximum] for BETWEEN, a scalar for single-value operators, and omit it entirely for IS_NULL and IS_NOT_NULL. */
          value?: unknown;
          /** Whether to compare strings case-insensitively. */
          ignoreCase?: boolean;
        }>;
        /** Sort directives applied in order. The default is to sort by id ascending. */
        sorting?: Array<{
          /** Field to sort on. Apple Ads documents only the default id ordering for these endpoints. */
          field: "id";
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to include totalCount in the response pagination. Apple Ads omits it unless this is true. */
        fetchTotalCount?: boolean;
      };
      output: {
        /** Business categories matching the query on this page. */
        businessCategories: Array<{
          /** MUID (Maps Unique Identifier) of the category. */
          id: string;
          /** English display name of the category. */
          name?: string | null;
          /** Dot-delimited taxonomy path such as dining.restaurant. A dot always marks a hierarchy boundary, while an individual level name may itself contain underscores. Pass this value as the text of a CATEGORY match-type keyword. */
          qualifiedId?: string | null;
          /** Human-readable description of the category. */
          description?: string | null;
          /** Ad serving eligibility for the category. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          eligibility?: {
            /** Overall eligibility status for the entity. */
            status?: "ELIGIBLE" | "INELIGIBLE" | "LIMITED" | "PENDING" | "UNDEFINED" | null;
            /** Placement and market combinations where the entity is blocked from serving. */
            blockedGroups?: Array<{
              /** Supply placements this constraint applies to. */
              supplyPlacement?: Array<string> | null;
              /** Countries or regions this constraint applies to. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            /** Placement and market combinations where the entity is allowed to serve. */
            allowedGroups?: Array<{
              /** Supply placements this constraint applies to. */
              supplyPlacement?: Array<string> | null;
              /** Countries or regions this constraint applies to. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            /** When Apple Ads last evaluated eligibility. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
            modificationTime?: string | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Search the campaigns of one ad account with filters, sorting and offset pagination. Soft-deleted campaigns are excluded unless a filter on deleted asks for them. */
    "apple_ads.query_campaigns": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Filter conditions combined with logical AND. Omit it to return every record in the ad account. */
        filters?: Array<{
          /** Campaign field to filter on. id and name accept EQUALS, IN and the string operators; the status enums accept EQUALS and IN; the systemStatusReasons arrays accept the CONTAINS operators; the time fields accept the comparison operators. */
          field: "id" | "name" | "status" | "systemStatus" | "systemStatusReasons" | "systemStatusLimitingReasons" | "billingEvent" | "paymentModel" | "promotedObjectType" | "promotedObjectId" | "startTime" | "endTime" | "creationTime" | "modificationTime" | "deleted";
          /** Comparison operator. Which operators a field accepts is documented per field. */
          operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "CONTAINS_ANY" | "NOT_CONTAINS_ANY" | "CONTAINS_ALL" | "NOT_CONTAINS_ALL" | "LIKE" | "NOT_LIKE" | "STARTS_WITH" | "ENDS_WITH" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "BETWEEN" | "IS_NULL" | "IS_NOT_NULL";
          /** Value to compare against. Pass an array for IN, NOT_IN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY and NOT_CONTAINS_ALL, an array of exactly two values ordered as [minimum, maximum] for BETWEEN, a scalar for single-value operators, and omit it entirely for IS_NULL and IS_NOT_NULL. */
          value?: unknown;
          /** Whether to compare strings case-insensitively. */
          ignoreCase?: boolean;
        }>;
        /** Sort directives applied in order. The default is to sort by id ascending. */
        sorting?: Array<{
          /** Campaign field to sort on. */
          field: "id" | "name" | "status" | "systemStatus" | "billingEvent" | "paymentModel" | "promotedObjectType" | "promotedObjectId" | "startTime" | "endTime" | "creationTime" | "modificationTime" | "deleted";
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to include totalCount in the response pagination. Apple Ads omits it unless this is true. */
        fetchTotalCount?: boolean;
      };
      output: {
        /** Campaigns matching the query on this page. */
        campaigns: Array<{
          /** System-assigned identifier for the campaign. */
          id: number;
          /** Ad account the campaign belongs to. */
          adAccountId?: number | null;
          /** Advertiser-given campaign name. */
          name?: string | null;
          /** Interaction that triggers a charge. */
          billingEvent?: "TAPS" | "IMPRESSIONS" | null;
          /** Payment model applied to the campaign. */
          paymentModel?: "PAYG" | "LOC" | null;
          /** Scheduled start of the campaign. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          startTime?: string | null;
          /** Scheduled end of the campaign, or null when it runs indefinitely. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          endTime?: string | null;
          /** What the campaign promotes. */
          promotedObjectType?: "APPSTORE_APP" | "BUSINESS_BRAND" | null;
          /** Identifier of the promoted entity: the App Store adamId, or the brand identifier for Apple Maps campaigns. */
          promotedObjectId?: string | null;
          /** Advertiser intent for the campaign to serve. */
          status?: "ENABLED" | "PAUSED" | null;
          /** System-computed delivery state. */
          systemStatus?: "RUNNING" | "NOT_RUNNING" | null;
          /** Reasons the campaign is not delivering. */
          systemStatusReasons?: Array<string> | null;
          /** Reasons the campaign delivers below its full potential. */
          systemStatusLimitingReasons?: Array<string> | null;
          /** Rolled-up delivery state combining advertiser intent and system evaluation. */
          displayStatus?: "RUNNING" | "PAUSED" | "ON_HOLD" | "LIMITED" | "PROCESSING" | "DELETED" | null;
          /** Daily spend cap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          dailyBudget?: {
            /** The daily budget amount. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            value?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Budget orders assigned to the campaign. */
          sharedBudgets?: Array<{
            /** Identifier of the assigned budget order. */
            budgetId?: number | null;
            [key: string]: unknown;
          }> | null;
          /** Where the campaign is eligible to serve ads. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          targeting?: {
            /** Supply sources included in targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            supplySource?: {
              /** Included supply sources. */
              include?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Placements included in targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            supplyPlacement?: {
              /** Included placements. */
              include?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Countries or regions included in targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            countryOrRegion?: {
              /** Included ISO 3166-1 alpha-2 codes. */
              include?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Bid strategy governing auction participation. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          bidStrategy?: {
            /** The bid strategy type. */
            bidStrategyType?: "MANUAL_CPT" | "MANUAL_CPM" | "MAX_CONVERSIONS" | "MAX_ENGAGEMENTS" | null;
            /** The optimization goal. */
            bidStrategyGoal?: "TAP" | "IMPRESSION" | "INSTALL" | null;
            /** Bid ceiling for each auction entry. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            bid?: {
              /** Bid amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Invoice and billing contact details. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          invoiceDetail?: {
            /** Advertiser or product this invoice identifies. */
            clientName?: string | null;
            /** Name of the primary buyer. */
            primaryBuyerName?: string | null;
            /** Email address of the primary buyer. */
            primaryBuyerEmail?: string | null;
            /** Purchase order number. */
            orderNumber?: string | null;
            /** Billing email address. */
            billingEmail?: string | null;
            [key: string]: unknown;
          } | null;
          /** Regulatory consent acknowledgments recorded for the campaign. */
          regulationResponses?: Array<{
            /** Category of regulatory disclosure. */
            regulationType?: "CAC" | "CAMPAIGN_SAPIN_LAW" | "ORG_SAPIN_LAW" | null;
            /** Recorded answer. */
            responseValue?: "AGENT" | "NOT_AGENT" | "FRENCH_BUSINESS" | "NOT_FRENCH_BUSINESS" | "TRUE" | "FALSE" | "NOT_ANSWERED" | null;
            [key: string]: unknown;
          }> | null;
          /** When the campaign was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the campaign was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the campaign has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Discover the categories associated with one promoted object, or look up how popular known category names are. Pick exactly one route: SUGGESTION needs the promoted object, SEARCH needs categories or categoryLike. */
    "apple_ads.query_category_suggestions": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Which route to take. SUGGESTION discovers categories for an app or brand; SEARCH looks up or pattern-matches category names. */
        queryType: "SUGGESTION" | "SEARCH";
        /** Identifier of the promoted object, required on the SUGGESTION route: the app Adam ID for APPSTORE_APP, or the brand identifier for BUSINESS_BRAND. */
        promotedObjectId?: number | string;
        /** Type of the promoted object, required on the SUGGESTION route. */
        promotedObjectType?: "APPSTORE_APP" | "BUSINESS_BRAND";
        /** Exact category names to fetch popularity for. Use it on the SEARCH route. */
        categories?: Array<string>;
        /**
         * Pattern to match category names against, with % as the wildcard character. Use it on the SEARCH route.
         * @minLength 1
         * @pattern \S
         */
        categoryLike?: string;
        /** Whether to match category names case-insensitively on the SEARCH route. It applies to both the exact lookup and the pattern match, and Apple Ads defaults to case-sensitive matching. */
        ignoreCase?: boolean;
        /** Sort directives applied in order. Sort by popularity descending to see the highest-impact candidates first. */
        sorting?: Array<{
          /**
           * Suggestion field to sort on, for example popularity.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Sort direction. Apple Ads defaults to ASC. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of suggestions to return on this page. Apple Ads defaults to 20 and caps it at 1000.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Category suggestions on this page. */
        categories: Array<{
          /** The category name, for example Productivity or Restaurants. */
          category?: string | null;
          /** Relative popularity score on a 0 to 100 scale. */
          popularity?: number | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Search the change history of one ad account, returning one row per transaction, actor and entity type with a count of the entity changes it covers. A filter on eventTime is required and Apple Ads looks back at most 6 months. A summary row carries no entityId, so set metadata to latest or snapshot when you plan to expand rows with get_change_history_detail: each row's metas entries then include a ready-to-use detailId. */
    "apple_ads.query_change_history": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /**
         * Filter conditions combined with logical AND. One condition on eventTime is required; every other condition narrows the result set further.
         * @minItems 1
         */
        filters: Array<{
          /** Field to filter on. eventTime sets the query window and is required. entityType matches the changed API entity by name, such as Campaign, AdGroup, Keyword, NegativeKeyword, Ad, Creative, AdAccount, Org or LocationGroup. adAccountId is available when entityType is Campaign or AdGroup, campaignId when it is AdGroup, Keyword or NegativeKeyword, and adGroupId when it is Keyword or NegativeKeyword. txnId matches the transactionId returned on summary rows. */
          field: "eventTime" | "entityType" | "entityId" | "eventType" | "userType" | "userId" | "txnId" | "adAccountId" | "campaignId" | "adGroupId";
          /** Comparison operator. eventTime accepts BETWEEN, GREATER_THAN and LESS_THAN; every other field accepts only EQUALS and IN. */
          operator: "EQUALS" | "IN" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "BETWEEN";
          /** Value to compare against. Pass an array of exactly two ISO 8601 timestamps ordered as [start, end] for BETWEEN, a single ISO 8601 timestamp for GREATER_THAN and LESS_THAN, an array for IN, and a single value for EQUALS. */
          value: string | Array<string>;
        }>;
        /** Sort directives applied in order, the first one being the primary sort. Apple Ads sorts by eventTime descending when this is omitted. */
        sorting?: Array<{
          /** Field to sort on. */
          field: "eventTime" | "entityType" | "entityId" | "eventType" | "userType" | "userId" | "txnId" | "adAccountId" | "campaignId" | "adGroupId";
          /** Sort direction. Apple Ads defaults it to DESC. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether the response pagination reports the full result count. Apple Ads treats it as true by default; pass false to skip the COUNT query on large windows, which makes totalCount 0. */
        needTotals?: boolean;
        /** How Apple Ads reads the eventTime filter values: UTC takes them as UTC, ORTZ takes them in the org's configured timezone and converts them server-side. Returned timestamps are always UTC. The default is UTC. */
        timeZone?: "UTC" | "ORTZ";
        /** Which entity metadata each row's metas array carries: none returns no metadata, latest joins the entity's current state, and snapshot uses its state at the time of the event. Only latest and snapshot yield a detailId. The default is none. */
        metadata?: "none" | "latest" | "snapshot";
      };
      output: {
        /** Audit summary rows matching the query on this page. */
        changeSummaries: Array<{
          /** Identifier of the transaction that produced these changes. It matches the txnId filter and is the last segment of a detailId. */
          transactionId?: string | null;
          /** The change operation this transaction performed. */
          eventType?: "CREATE" | "UPDATE" | "DELETE" | null;
          /** When the change happened, as an ISO 8601 UTC timestamp such as 2025-03-15T14:30:00.000Z. */
          eventTime?: string | null;
          /** The API entity type that changed, matching the name of the API entity, such as Campaign, AdGroup, Keyword, NegativeKeyword, Ad, Creative, AdAccount, Org or LocationGroup. It is not a closed enum. */
          entityType?: string | null;
          /** Number of entity changes covered by this row, which is how many detail lookups it takes to expand it. */
          count?: number | null;
          /** One metadata entry per changed entity. Apple Ads returns an empty array unless the request set metadata to latest or snapshot. */
          metas?: Array<{
            /** Identifier of this entity change, shaped as EntityType.entityId.txnId. Pass it straight to get_change_history_detail. */
            detailId?: string | null;
            /** The changed entity's own fields: its current state when metadata was latest, or its state at the time of the event when metadata was snapshot. */
            meta?: Record<string, unknown> | null;
            [key: string]: unknown;
          }> | null;
          /** Category of actor that made the change. */
          userType?: "CUSTOMER" | "CUSTOMER_API" | "APPLE_SUPPORT" | null;
          /** Identifier of the user or service that made the change. Apple Ads never exposes the user's email address. */
          modifiedBy?: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Search the ad creatives of one ad account with filters, sorting and offset pagination. Soft-deleted ad creatives are excluded unless a deleted EQUALS true filter asks for them, which is the only way to read one back after deletion. */
    "apple_ads.query_creatives": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Filter conditions combined with logical AND. Omit it to return every record in the ad account. */
        filters?: Array<{
          /** Ad creative field to filter on. id, creativeType and systemStatus accept EQUALS and IN; adAccountId and deleted accept EQUALS; name accepts EQUALS and STARTS_WITH; eligibility.status accepts the documented values ELIGIBLE and INELIGIBLE. */
          field: "id" | "adAccountId" | "name" | "creativeType" | "systemStatus" | "deleted" | "eligibility.status";
          /** Comparison operator. Which operators a field accepts is documented per field. */
          operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "CONTAINS_ANY" | "NOT_CONTAINS_ANY" | "CONTAINS_ALL" | "NOT_CONTAINS_ALL" | "LIKE" | "NOT_LIKE" | "STARTS_WITH" | "ENDS_WITH" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "BETWEEN" | "IS_NULL" | "IS_NOT_NULL";
          /** Value to compare against. Pass an array for IN, NOT_IN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY and NOT_CONTAINS_ALL, an array of exactly two values ordered as [minimum, maximum] for BETWEEN, a scalar for single-value operators, and omit it entirely for IS_NULL and IS_NOT_NULL. */
          value?: unknown;
          /** Whether to compare strings case-insensitively. */
          ignoreCase?: boolean;
        }>;
        /** Sort directives applied in order. The default is to sort by id ascending. */
        sorting?: Array<{
          /** Ad creative field to sort on. id is the only sortable field, and Apple Ads sorts by it ascending by default. */
          field: "id";
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to include totalCount in the response pagination. Apple Ads omits it unless this is true. */
        fetchTotalCount?: boolean;
      };
      output: {
        /** Ad creatives matching the query on this page. */
        creatives: Array<{
          /** System-assigned identifier for the ad creative. Pass this value as creativeId when creating an ad. */
          id: number;
          /** Ad account the ad creative belongs to. */
          adAccountId?: number | null;
          /** Advertiser-given name of the ad creative. */
          name?: string | null;
          /** Content source and placement eligibility of the ad creative. */
          creativeType?: "DEFAULT_PRODUCT_PAGE" | "CUSTOM_PRODUCT_PAGE" | "LOCAL_ADS_SEARCH_CREATIVE" | null;
          /** Pre-tap experience specification. Apple Ads returns an empty object for DEFAULT_PRODUCT_PAGE and CUSTOM_PRODUCT_PAGE, because App Store Connect controls their pre-tap rendering. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          creativeSpec?: {
            /** Brand the Apple Maps ad creative belongs to. */
            brandId?: string | null;
            /** Asset format of the Apple Maps ad creative. */
            creativeSubtype?: "BUSINESS_LOGO" | "BUSINESS_ASSET" | null;
            /** Ordered asset references rendered in the Apple Maps ad creative. */
            creativeAssets?: Array<{
              /** UUID of the referenced asset. */
              assetId?: string | null;
              /** Display position of this asset within the list. */
              sortOrder?: number | null;
              [key: string]: unknown;
            }> | null;
            /** Localized promotional copy keyed by BCP-47 locale code, then by text key. */
            localizedText?: Record<string, Record<string, string | null> | null> | null;
            /** Locale whose copy is used when a viewer's locale is missing from localizedText. */
            defaultLocale?: string | null;
            [key: string]: unknown;
          } | null;
          /** Post-tap destination users land on after tapping the ad. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          destination?: {
            /** Type of post-tap destination. */
            destinationType?: "APP_STORE_PRODUCT_PAGE" | "LOCAL_ADS_PLACECARD" | null;
            /** Destination-specific identifiers. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            parameters?: {
              /** App Store app identifier the destination points at. */
              adamId?: string | null;
              /** UUID of the Custom Product Page, or null when the default product page is used. */
              productPageId?: string | null;
              [key: string]: unknown;
            } | null;
            /** Resolved destination URL that Apple Ads computes from destinationType and parameters. */
            url?: string | null;
            [key: string]: unknown;
          } | null;
          /** System validation state of the ad creative. */
          systemStatus?: "VALID" | "INVALID" | "PENDING" | null;
          /** Reasons behind the current system status. */
          systemStatusReasons?: Array<string> | null;
          /** Where the ad creative is allowed to serve. Apple Ads leaves it empty or null while systemStatus is PENDING. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          eligibility?: {
            /** Overall eligibility status. */
            status?: "ELIGIBLE" | "INELIGIBLE" | null;
            /** Placement and market combinations where the ad creative can serve. */
            allowedGroups?: Array<{
              /** Supply placements covered by this group. */
              supplyPlacement?: Array<string> | null;
              /** Countries or regions covered by this group. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            /** Placement and market combinations where the ad creative cannot serve. */
            blockedGroups?: Array<{
              /** Supply placements covered by this group. */
              supplyPlacement?: Array<string> | null;
              /** Countries or regions covered by this group. */
              countryOrRegion?: Array<string> | null;
              /** Why the ad creative is blocked in this group, for example APP_NOT_ELIGIBLE. */
              reason?: string | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          } | null;
          /** When the ad creative was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the ad creative was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the ad creative has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** List the daily budget increases Apple Ads recommends for one promoted object, with the historical and projected performance behind each one. This is the only recommendation type available for Apple Maps brand campaigns. */
    "apple_ads.query_daily_budget_recommendations": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Identifier of the promoted object this request applies to: the app Adam ID when promotedObjectType is APPSTORE_APP, or the brand identifier when it is BUSINESS_BRAND. */
        promotedObjectId: number | string;
        /** Type of the promoted object. */
        promotedObjectType: "APPSTORE_APP" | "BUSINESS_BRAND";
        /** Return only recommendations in this lifecycle state. Pass AVAILABLE to get the ones still worth acting on. */
        state?: "AVAILABLE" | "APPLIED" | "DISMISSED" | "DELETE";
        /** Return only recommendations for these campaigns. */
        campaignIds?: Array<number | string>;
        /** Sort directives applied in order, the first being the primary sort. */
        sorting?: Array<{
          /**
           * Recommendation field to sort on, for example suggestedDailyBudgetAmount, creationTime or expirationTime.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Sort direction. Apple Ads defaults to ASC. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of recommendations to return on this page. Apple Ads defaults to 20 and caps it at 1000.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Daily budget recommendations on this page. */
        recommendations: Array<{
          /** Identifier of the recommendation, used when applying or dismissing it. */
          id?: string | null;
          /** Lifecycle state tracking the advertiser response. It is terminal once APPLIED, DISMISSED or DELETE. */
          state?: "AVAILABLE" | "APPLIED" | "DISMISSED" | "DELETE" | null;
          /** The recommended new daily budget. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          suggestedDailyBudgetAmount?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** The campaign's current daily budget, for comparison. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          dailyBudget?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Bid strategy the campaign was using when the recommendation was produced. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          bidStrategy?: {
            /** The bid strategy type. */
            bidStrategyType?: "MANUAL_CPT" | "MANUAL_CPM" | "MAX_CONVERSIONS" | "MAX_ENGAGEMENTS" | null;
            /** The optimization goal of the bid strategy. */
            bidStrategyGoal?: "TAP" | "IMPRESSION" | "INSTALL" | null;
            /** Bid amount associated with the strategy. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            bidAmount?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Impressions projected over seven days if the recommendation is applied. */
          expectedImpressions?: number | null;
          /** Installs projected over seven days if the recommendation is applied. */
          expectedInstalls?: number | null;
          /** Spend projected over seven days if the recommendation is applied. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          expectedSpend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Taps projected over seven days if the recommendation is applied. */
          expectedTaps?: number | null;
          /** Average cost per acquisition projected over seven days if the recommendation is applied. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          expectedCpa?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Optimization area of the recommendation. */
          recommendationType?: "KEYWORD" | "SKEYWORD" | "DAILYCAP" | "SDAILYCAP" | "TCPA" | "STCPA" | "BID" | "SBID" | null;
          /** Identifier of the promoted object: the app Adam ID for APPSTORE_APP, or the brand identifier for BUSINESS_BRAND. */
          promotedObjectId?: string | null;
          /** Type of the promoted object. */
          promotedObjectType?: "APPSTORE_APP" | "BUSINESS_BRAND" | null;
          /** Campaign the recommendation applies to. */
          campaignId?: number | null;
          /** Display name of that campaign. */
          campaignName?: string | null;
          /** Operational status of the recommendation record itself, independent of state. */
          status?: "ENABLED" | "DISABLED" | "DELETED" | null;
          /** Historical install count. */
          installs?: number | null;
          /** Historical spend. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          spend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Historical average cost per acquisition. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          averageCPA?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Historical average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          averageCPT?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Historical impression count. */
          impression?: number | null;
          /** Historical tap count. */
          taps?: number | null;
          /** Historical tap-through rate. */
          ttr?: number | null;
          /** When the recommendation was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the record was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** When the recommendation expires. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          expirationTime?: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Look up geo targeting locations by identifier. Pass the geo location ids or pipe-delimited legacy ids you already have, and Apple Ads returns their metadata and eligibility scoped to one supply source. Use it to batch-validate targeting values before applying them to an ad group; this endpoint never filters soft-blocked geos out. */
    "apple_ads.query_geo_locations": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /**
         * Geo locations to look up. Each entry carries exactly one identifier plus its entity type.
         * @minItems 1
         */
        geoRequest: Array<{
          /** Numeric geo location identifier. Do not pass legacyId too. */
          id?: number | string;
          /**
           * Pipe-delimited geo code encoding the hierarchy, for example US|CA|San Francisco or US|TX|78238. Do not pass id too.
           * @minLength 1
           * @pattern \S
           */
          legacyId?: string;
          /** Geographic granularity of this entry. */
          entity: "Country" | "AdminArea" | "Locality" | "PostalCode";
        }>;
        /** Supply source the search is scoped to. APPSTORE returns Country, AdminArea and Locality entities for App Store campaigns. MAPS returns AdminArea, Locality and PostalCode entities for Apple Maps campaigns and restricts results to the United States and Canada. */
        supplySource: "APPSTORE" | "MAPS";
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Geo locations matching the requested identifiers, sorted alphabetically by displayName and deduplicated. */
        geoLocations: Array<{
          /** Numeric geo location identifier. Use it as the targeting value in an ad group's country, adminArea, locality or postalCode dimension. */
          id: string;
          /** Pipe-delimited identifier encoding the full geographic hierarchy, for example US|CA|San Francisco or US|TX|78238. */
          legacyId?: string | null;
          /** Geographic granularity of this location. */
          entity?: "Country" | "AdminArea" | "Locality" | "PostalCode" | null;
          /** Localized display name including the full hierarchy. */
          displayName?: string | null;
          /** ISO 3166-1 alpha-2 country or region code. */
          countryOrRegion?: string | null;
          /** State or province identifier. Apple Ads returns it for AdminArea, Locality and PostalCode entities. */
          adminArea?: string | null;
          /** City or locality name. Apple Ads returns it for Locality entities. */
          locality?: string | null;
          /** Postal code value. Apple Ads returns it for PostalCode entities. */
          postalCode?: string | null;
          /** Serving restrictions scoped to the requested supply source. Apple Ads leaves it out entirely when nothing restricts the location. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          eligibility?: {
            /** Blocking rules that apply to this location for the requested supply source. */
            blockedGroups?: Array<{
              /** Supply sources this restriction applies to. */
              supplySource?: Array<string> | null;
              /** Reason codes for the restriction. */
              reasons?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Measure what share of the available impressions one App Store app captured for each search term and country or region. Apple Maps brand campaigns have no impression share equivalent. */
    "apple_ads.query_impression_share": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Adam ID of the promoted App Store app. Apple Ads rejects the request with a 400 error when it is missing. */
        promotedObjectId: number | string;
        /**
         * Return only rows for this App Store country or region. An ISO 3166-1 alpha-2 code such as US, CA or GB.
         * @minLength 1
         * @pattern \S
         */
        countryOrRegion?: string;
        /** Date window to aggregate impression share over. The timezone is fixed to UTC. */
        timeRange: {
          /**
           * First day of the window in YYYY-MM-DD format. It must be a Sunday when granularity is WEEKLY_SUN_SAT.
           * @format date
           */
          start: string;
          /**
           * Last day of the window in YYYY-MM-DD format.
           * @format date
           */
          end: string;
          /** Aggregation period. DAILY covers at most 30 days and fills the day field of each row; WEEKLY_SUN_SAT covers at most 4 weeks and fills the week field with the Sunday start date. */
          granularity: "DAILY" | "WEEKLY_SUN_SAT";
        };
        /** Ad positions the calculation covers. FIRST_SLOT, the default, measures the first ad position only; ALL_SLOTS aggregates across every ad position. */
        impressionShareReportType?: "FIRST_SLOT" | "ALL_SLOTS";
        /** Sort directives applied in order. Apple Ads accepts at most two. */
        sorting?: Array<{
          /**
           * Row field to sort on, for example highImpressionShare, rank, searchTerm or searchPopularity1to5.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Sort direction. Apple Ads defaults to ASC. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of rows to return on this page. Apple Ads defaults to 100 and caps it at 5000.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Impression share rows on this page. */
        rows: Array<{
          /** Date of the row in YYYY-MM-DD format. Present when granularity is DAILY. */
          day?: string | null;
          /** Sunday that starts the week, in YYYY-MM-DD format. Present when granularity is WEEKLY_SUN_SAT. */
          week?: string | null;
          /** Display name of the promoted app. */
          appName?: string | null;
          /** Adam ID of the promoted app, as a decimal string. */
          promotedObjectId?: string | null;
          /** ISO 3166-1 alpha-2 country or region code. */
          countryOrRegion?: string | null;
          /** The search term. Apple Ads suppresses terms with fewer than 10 impressions in the aggregation period. */
          searchTerm?: string | null;
          /** Lower bound of the impression share, from 0 to 1. For 1% to 90% it equals highImpressionShare; above 90% it is 0.91. */
          lowImpressionShare?: number | null;
          /** Upper bound of the impression share, from 0 to 1. A value of 1 means the app holds more than 90% impression share. */
          highImpressionShare?: number | null;
          /** Stack-ranked position by impression share for this search term and country or region, where 1 is the highest share. */
          rank?: number | null;
          /** Relative search volume for the term on a 1 to 5 scale, where 5 is the most popular. */
          searchPopularity1to5?: number | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Discover keywords worth targeting for one promoted object, ranked by relative popularity. Suggestions are stateless: turn one into a live keyword with create_keyword. */
    "apple_ads.query_keyword_suggestions": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Identifier of the promoted object this request applies to: the app Adam ID when promotedObjectType is APPSTORE_APP, or the brand identifier when it is BUSINESS_BRAND. */
        promotedObjectId: number | string;
        /** Type of the promoted object. */
        promotedObjectType: "APPSTORE_APP" | "BUSINESS_BRAND";
        /** Seed search terms to get related suggestions for. */
        terms?: Array<string>;
        /** Scope suggestions to these App Store countries or regions. */
        countriesOrRegions?: Array<string>;
        /** Sort directives applied in order. Sort by popularity descending to see the highest-impact candidates first. */
        sorting?: Array<{
          /**
           * Suggestion field to sort on, for example popularity.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Sort direction. Apple Ads defaults to ASC. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of suggestions to return on this page. Apple Ads defaults to 20 and caps it at 1000.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Keyword suggestions on this page. */
        keywords: Array<{
          /** The suggested keyword text. */
          text?: string | null;
          /** Relative popularity score on a 0 to 100 scale. It is a ranking signal, not an absolute search volume. */
          popularity?: number | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Search the keywords of one ad account with filters, sorting and offset pagination. Apple Ads requires a filter on adGroupId or campaignId unless you filter on id, and soft-deleted keywords are excluded unless a filter on deleted asks for them. */
    "apple_ads.query_keywords": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Filter conditions combined with logical AND. Omit it to return every record in the ad account. */
        filters?: Array<{
          /** Keyword field to filter on. id, adGroupId, matchType and status accept EQUALS and IN; campaignId and deleted accept EQUALS; text accepts EQUALS and STARTS_WITH. An adGroupId IN filter accepts at most 1000 values, and adGroupId does not accept NOT_EQUALS, IS_NULL or IS_NOT_NULL. */
          field: "id" | "adGroupId" | "campaignId" | "text" | "matchType" | "status" | "deleted";
          /** Comparison operator. Which operators a field accepts is documented per field. */
          operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "CONTAINS_ANY" | "NOT_CONTAINS_ANY" | "CONTAINS_ALL" | "NOT_CONTAINS_ALL" | "LIKE" | "NOT_LIKE" | "STARTS_WITH" | "ENDS_WITH" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "BETWEEN" | "IS_NULL" | "IS_NOT_NULL";
          /** Value to compare against. Pass an array for IN, NOT_IN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY and NOT_CONTAINS_ALL, an array of exactly two values ordered as [minimum, maximum] for BETWEEN, a scalar for single-value operators, and omit it entirely for IS_NULL and IS_NOT_NULL. */
          value?: unknown;
          /** Whether to compare strings case-insensitively. */
          ignoreCase?: boolean;
        }>;
        /** Sort directives applied in order. The default is to sort by id ascending. */
        sorting?: Array<{
          /** Keyword field to sort on. The default is id ascending. */
          field: "id" | "adGroupId" | "campaignId" | "text" | "matchType" | "status" | "deleted";
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to include totalCount in the response pagination. Apple Ads omits it unless this is true. */
        fetchTotalCount?: boolean;
      };
      output: {
        /** Keywords matching the query on this page. */
        keywords: Array<{
          /** System-assigned identifier for the keyword. */
          id: number;
          /** Ad account the keyword belongs to. */
          adAccountId?: number | null;
          /** Campaign that owns the keyword's ad group. Informational only; keywords are never attached to a campaign directly. */
          campaignId?: number | null;
          /** Ad group the keyword belongs to. */
          adGroupId?: number | null;
          /** Advertiser-given keyword text. */
          text?: string | null;
          /** How the keyword matches user search queries. EXACT and BROAD apply to App Store campaigns using the Search results placement; PHRASE and CATEGORY apply to Apple Maps campaigns. */
          matchType?: "EXACT" | "BROAD" | "PHRASE" | "CATEGORY" | null;
          /** Per-keyword bid override, or null when the keyword follows the ad group's bid strategy. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          bid?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Advertiser intent for the keyword to serve. */
          status?: "ENABLED" | "PAUSED" | null;
          /** Rolled-up delivery state combining the keyword, its ad group and its campaign. */
          displayStatus?: "RUNNING" | "PAUSED" | "DELETED" | "AD_GROUP_ON_HOLD" | "CAMPAIGN_ON_HOLD" | null;
          /** When the keyword was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the keyword was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the keyword has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Search the location groups of one ad account with filters, sorting and offset pagination. Soft-deleted groups are excluded unless a filter on deleted asks for them. */
    "apple_ads.query_location_groups": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Filter conditions combined with logical AND. Omit it to return every record in the ad account. */
        filters?: Array<{
          /** Location group field to filter on. id, groupType and eligibility.status accept EQUALS and IN; brandId, deleted and isAllLocationsGroup accept EQUALS; the eligibility.blockedGroups and eligibility.allowedGroups fields accept CONTAINS_ANY. Apple Ads documents name as accepting EQUALS and a CONTAINS operator that is not part of the shared query operator set. */
          field: "id" | "name" | "brandId" | "groupType" | "deleted" | "isAllLocationsGroup" | "eligibility.status" | "eligibility.blockedGroups.supplyPlacement" | "eligibility.blockedGroups.countryOrRegion" | "eligibility.allowedGroups.supplyPlacement" | "eligibility.allowedGroups.countryOrRegion";
          /** Comparison operator. Which operators a field accepts is documented per field. */
          operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "CONTAINS_ANY" | "NOT_CONTAINS_ANY" | "CONTAINS_ALL" | "NOT_CONTAINS_ALL" | "LIKE" | "NOT_LIKE" | "STARTS_WITH" | "ENDS_WITH" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "BETWEEN" | "IS_NULL" | "IS_NOT_NULL";
          /** Value to compare against. Pass an array for IN, NOT_IN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY and NOT_CONTAINS_ALL, an array of exactly two values ordered as [minimum, maximum] for BETWEEN, a scalar for single-value operators, and omit it entirely for IS_NULL and IS_NOT_NULL. */
          value?: unknown;
          /** Whether to compare strings case-insensitively. */
          ignoreCase?: boolean;
        }>;
        /** Sort directives applied in order. The default is to sort by id ascending. */
        sorting?: Array<{
          /** Location group field to sort on. Every filterable field is also sortable. */
          field: "id" | "name" | "brandId" | "groupType" | "deleted" | "isAllLocationsGroup" | "eligibility.status" | "eligibility.blockedGroups.supplyPlacement" | "eligibility.blockedGroups.countryOrRegion" | "eligibility.allowedGroups.supplyPlacement" | "eligibility.allowedGroups.countryOrRegion";
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to include totalCount in the response pagination. Apple Ads omits it unless this is true. */
        fetchTotalCount?: boolean;
      };
      output: {
        /** Location groups matching the query on this page. */
        locationGroups: Array<{
          /** System-assigned identifier for the location group. */
          id: string;
          /** Display name of the group. */
          name?: string | null;
          /** Brand the group belongs to. */
          brandId?: string | null;
          /** Ad account that owns the group. */
          adAccountId?: string | null;
          /** How membership is defined. */
          groupType?: "STATIC" | "DYNAMIC" | null;
          /** System-managed state. A group is unusable for targeting until it reaches VALID, and a group in INVALID or PENDING state cannot be updated or deleted. */
          systemStatus?: "VALID" | "INVALID" | "PENDING" | "DELETED" | null;
          /** RSQL query Apple Ads generated from the rules of a DYNAMIC group. */
          query?: string | null;
          /** Membership rules evaluated against the brand's location catalog for a DYNAMIC group. */
          rules?: Array<{
            /** Location field the rule matches on. */
            field?: string | null;
            /** Comparison operator applied to the field. */
            operator?: string | null;
            /** Value the field is compared against. */
            value?: unknown;
            [key: string]: unknown;
          }> | null;
          /** Location identifiers explicitly included in a STATIC group. */
          locationIds?: Array<string> | null;
          /** Whether this is the system-created All Locations group for the brand. */
          isAllLocationsGroup?: boolean | null;
          /** Advertiser-given description of the group. */
          description?: string | null;
          /** Number of locations currently in the group. It stays 0 for a DYNAMIC group until rule evaluation finishes. */
          groupTotal?: number | null;
          /** Ad serving eligibility for the group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          eligibility?: {
            /** System-managed eligibility status. */
            status?: "ELIGIBLE" | "INELIGIBLE" | "LIMITED" | "PENDING" | "UNDEFINED" | null;
            /** Placement and market combinations that cannot serve. */
            blockedGroups?: Array<{
              /** Supply placements this group covers. */
              supplyPlacement?: Array<string> | null;
              /** Markets this group covers. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            /** Placement and market combinations that can serve. */
            allowedGroups?: Array<{
              /** Supply placements this group covers. */
              supplyPlacement?: Array<string> | null;
              /** Markets this group covers. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          } | null;
          /** When the group was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the group was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the group has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Search the advertiser's business locations, the physical stores and venues an Apple Maps campaign promotes. Filter by brandId to scope results to one brand, and collect the returned ids to build a location group. */
    "apple_ads.query_locations": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Filter conditions combined with logical AND. Omit it to return every record in the ad account. */
        filters?: Array<{
          /** Location field to filter on. brandId accepts EQUALS; name and address.locality accept EQUALS and STARTS_WITH; status, eligibility.status, address.countryOrRegion, address.adminArea and address.postalCode accept EQUALS and IN. */
          field: "brandId" | "name" | "status" | "address.countryOrRegion" | "address.adminArea" | "address.locality" | "address.postalCode" | "eligibility.status";
          /** Comparison operator. Which operators a field accepts is documented per field. */
          operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "CONTAINS_ANY" | "NOT_CONTAINS_ANY" | "CONTAINS_ALL" | "NOT_CONTAINS_ALL" | "LIKE" | "NOT_LIKE" | "STARTS_WITH" | "ENDS_WITH" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "BETWEEN" | "IS_NULL" | "IS_NOT_NULL";
          /** Value to compare against. Pass an array for IN, NOT_IN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY and NOT_CONTAINS_ALL, an array of exactly two values ordered as [minimum, maximum] for BETWEEN, a scalar for single-value operators, and omit it entirely for IS_NULL and IS_NOT_NULL. */
          value?: unknown;
          /** Whether to compare strings case-insensitively. */
          ignoreCase?: boolean;
        }>;
        /** Sort directives applied in order. The default is to sort by id ascending. */
        sorting?: Array<{
          /** Location field to sort on. Apple Ads documents only name. */
          field: "name";
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to include totalCount in the response pagination. Apple Ads omits it unless this is true. */
        fetchTotalCount?: boolean;
      };
      output: {
        /** Business locations matching the query on this page. */
        locations: Array<{
          /** Identifier for the location. Use it when building a location group. */
          id: string;
          /** Display name of the location. */
          name?: string | null;
          /** Brand the location belongs to. */
          brandId?: string | null;
          /** Operational status of the location. Only OPEN locations are eligible for ad targeting. */
          status?: "OPEN" | "OPENING_SOON" | "CLOSED" | "MOVED" | "TEMPORARILY_CLOSED" | null;
          /** ISO 3166-1 alpha-2 country or region code for the location. */
          countryOrRegion?: string | null;
          /** Business category identifiers. The first entry is the primary category. */
          categories?: Array<string> | null;
          /** Postal address of the location. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          address?: {
            /** ISO 3166-1 alpha-2 country or region code. */
            countryOrRegion?: string | null;
            /** State or province name spelled out in full. */
            adminArea?: string | null;
            /** Abbreviated state or province code. */
            adminAreaCode?: string | null;
            /** City or town name. */
            locality?: string | null;
            /** Neighborhood or district inside the locality. */
            subLocality?: string | null;
            /** County or other subdivision of the administrative area. */
            subAdminArea?: string | null;
            /** Postal or ZIP code. */
            postalCode?: string | null;
            /** Street name. */
            thoroughfare?: string | null;
            /** Street number. */
            subThoroughfare?: string | null;
            /** Street number and street name combined. */
            fullThoroughfare?: string | null;
            /** Complete address on a single line. */
            fullAddress?: string | null;
            [key: string]: unknown;
          } | null;
          /** Geographic coordinates of the location. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          displayPoint?: {
            /** Latitude as a decimal string. */
            latitude?: string | null;
            /** Longitude as a decimal string. */
            longitude?: string | null;
            [key: string]: unknown;
          } | null;
          /** System-managed eligibility for ad targeting. Only a location whose status is ELIGIBLE can be added to a location group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          eligibility?: {
            /** System-managed eligibility status. */
            status?: "ELIGIBLE" | "INELIGIBLE" | "LIMITED" | "PENDING" | "UNDEFINED" | null;
            /** Placement and market combinations that cannot serve. */
            blockedGroups?: Array<{
              /** Supply placements this group covers. */
              supplyPlacement?: Array<string> | null;
              /** Markets this group covers. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            /** Placement and market combinations that can serve. */
            allowedGroups?: Array<{
              /** Supply placements this group covers. */
              supplyPlacement?: Array<string> | null;
              /** Markets this group covers. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          } | null;
          /** When the location record was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the location record was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Search the negative keywords of one ad account with filters, sorting and offset pagination. Apple Ads requires an adGroupId filter on every query except one filtered by id: combine adGroupId IS_NULL with campaignId EQUALS to list a campaign's own exclusions, adGroupId IS_NOT_NULL with campaignId EQUALS to list the ad-group-level ones across that campaign, or adGroupId EQUALS or IN to scope the query to specific ad groups. */
    "apple_ads.query_negative_keywords": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Filter conditions combined with logical AND. Omit it to return every record in the ad account. */
        filters?: Array<{
          /** Negative keyword field to filter on. id accepts EQUALS and IN; adGroupId accepts EQUALS, IN, NOT_EQUALS, IS_NULL and IS_NOT_NULL, with at most 1000 values for IN; campaignId accepts EQUALS only; text accepts EQUALS and STARTS_WITH; matchType and status accept EQUALS and IN. */
          field: "id" | "adGroupId" | "campaignId" | "text" | "matchType" | "status";
          /** Comparison operator. Which operators a field accepts is documented per field. */
          operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "CONTAINS_ANY" | "NOT_CONTAINS_ANY" | "CONTAINS_ALL" | "NOT_CONTAINS_ALL" | "LIKE" | "NOT_LIKE" | "STARTS_WITH" | "ENDS_WITH" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "BETWEEN" | "IS_NULL" | "IS_NOT_NULL";
          /** Value to compare against. Pass an array for IN, NOT_IN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY and NOT_CONTAINS_ALL, an array of exactly two values ordered as [minimum, maximum] for BETWEEN, a scalar for single-value operators, and omit it entirely for IS_NULL and IS_NOT_NULL. */
          value?: unknown;
          /** Whether to compare strings case-insensitively. */
          ignoreCase?: boolean;
        }>;
        /** Sort directives applied in order. The default is to sort by id ascending. */
        sorting?: Array<{
          /** Negative keyword field to sort on. Apple Ads sorts by id ascending by default. */
          field: "id" | "adGroupId" | "campaignId";
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to include totalCount in the response pagination. Apple Ads omits it unless this is true. */
        fetchTotalCount?: boolean;
      };
      output: {
        /** Negative keywords matching the query on this page. */
        negativeKeywords: Array<{
          /** System-assigned identifier for the negative keyword. */
          id: number;
          /** Ad account the negative keyword belongs to. */
          adAccountId?: number | null;
          /** Campaign the negative keyword belongs to. */
          campaignId?: number | null;
          /** Ad group the negative keyword is scoped to. Campaign-level exclusions have no ad group: Apple Ads returns null for them, or leaves the field out entirely. */
          adGroupId?: number | null;
          /** The advertiser-given term to exclude. */
          text?: string | null;
          /** How the excluded term is matched against user searches. */
          matchType?: "EXACT" | "BROAD" | "PHRASE" | "CATEGORY" | null;
          /** Whether the exclusion is active or paused. */
          status?: "ENABLED" | "PAUSED" | null;
          /** When the negative keyword was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the negative keyword was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the negative keyword has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Discover natural-language search phrases for one promoted object, or look up how popular known phrases are. Pick exactly one route: SUGGESTION needs the promoted object, SEARCH needs phrases or phraseLike. */
    "apple_ads.query_phrase_suggestions": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Which route to take. SUGGESTION discovers phrases for an app or brand; SEARCH looks up or pattern-matches specific phrases. */
        queryType: "SUGGESTION" | "SEARCH";
        /** Identifier of the promoted object, required on the SUGGESTION route: the app Adam ID for APPSTORE_APP, or the brand identifier for BUSINESS_BRAND. */
        promotedObjectId?: number | string;
        /** Type of the promoted object, required on the SUGGESTION route. */
        promotedObjectType?: "APPSTORE_APP" | "BUSINESS_BRAND";
        /** Exact phrases to fetch popularity for. Use it on the SEARCH route. */
        phrases?: Array<string>;
        /**
         * Pattern to match phrases against, with % as the wildcard character. Use it on the SEARCH route.
         * @minLength 1
         * @pattern \S
         */
        phraseLike?: string;
        /** Whether to match phrases case-insensitively on the SEARCH route. It applies to both the exact lookup and the pattern match, and Apple Ads defaults to case-sensitive matching. */
        ignoreCase?: boolean;
        /** Sort directives applied in order. Sort by popularity descending to see the highest-impact candidates first. */
        sorting?: Array<{
          /**
           * Suggestion field to sort on, for example popularity.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Sort direction. Apple Ads defaults to ASC. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of suggestions to return on this page. Apple Ads defaults to 20 and caps it at 1000.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Phrase suggestions on this page. */
        phrases: Array<{
          /** The suggested phrase text. */
          phrase?: string | null;
          /** Relative popularity score on a 0 to 100 scale. */
          popularity?: number | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read the localized content of one custom product page: the localized app name, subtitle, promotional text and the screenshots and preview videos grouped by device type. A filter on productPageId is required; without a languageCode filter Apple Ads returns every locale configured for the page. */
    "apple_ads.query_product_page_locale_details": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Filter conditions combined with logical AND. A filter on productPageId is required; add a languageCode filter to narrow the result to one locale, or leave it out to return every locale configured for that product page. */
        filters: Array<{
          /** Locale detail field to filter on. productPageId, language and languageCode each accept EQUALS. A filter on productPageId is required. */
          field: "productPageId" | "language" | "languageCode";
          /** Comparison operator. Which operators a field accepts is documented per field. */
          operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "CONTAINS_ANY" | "NOT_CONTAINS_ANY" | "CONTAINS_ALL" | "NOT_CONTAINS_ALL" | "LIKE" | "NOT_LIKE" | "STARTS_WITH" | "ENDS_WITH" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "BETWEEN" | "IS_NULL" | "IS_NOT_NULL";
          /** Value to compare against. Pass an array for IN, NOT_IN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY and NOT_CONTAINS_ALL, an array of exactly two values ordered as [minimum, maximum] for BETWEEN, a scalar for single-value operators, and omit it entirely for IS_NULL and IS_NOT_NULL. */
          value?: unknown;
          /** Whether to compare strings case-insensitively. */
          ignoreCase?: boolean;
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to include totalCount in the response pagination. Apple Ads omits it unless this is true. */
        fetchTotalCount?: boolean;
      };
      output: {
        /** Locale details matching the query on this page, one record per product page and locale combination. */
        localeDetails: Array<{
          /** Identifier of the product page these details belong to. */
          productPageId?: string | null;
          /** App Store identifier of the app. */
          adamId?: number | null;
          /** Language identifier, for example en. */
          language?: string | null;
          /** Locale identifier as a BCP 47 language code, for example en-US. */
          languageCode?: string | null;
          /** Localized app display name as it appears on the App Store. */
          appName?: string | null;
          /** App subtitle for this locale. */
          subTitle?: string | null;
          /** Promotional text for this locale, at most 170 characters long. */
          promotionalText?: string | null;
          /** Short description for this locale, at most 4000 characters long. */
          shortDescription?: string | null;
          /** Device classes this locale supports. */
          deviceClasses?: Array<string> | null;
          /** Screenshots and preview videos keyed by device type, for example iphone_6_5 or iphone_6_7. The keys are device type strings and are not limited to the values in deviceClasses. */
          assetsByDevice?: Record<string, {
              /** Asset references for this device type, in display order. */
              assets?: Array<{
                /** Identifier of the referenced asset. */
                assetId?: string | null;
                [key: string]: unknown;
              }> | null;
              /** Device types to fall back to when this device type has no assets. */
              appPreviewDeviceFallBackDevices?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Search the App Store product pages available to one ad account, covering default product pages, custom product pages and product page optimization variants. Filter on adamId to list the pages of a single app, because an unfiltered query spans every app the ad account can reach. Product pages come from App Store Connect and appear here after a short propagation delay. */
    "apple_ads.query_product_pages": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Filter conditions combined with logical AND. Omit it to return every record in the ad account. */
        filters?: Array<{
          /** Product page field to filter on. adamId and state both accept EQUALS. */
          field: "adamId" | "state";
          /** Comparison operator. Which operators a field accepts is documented per field. */
          operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "CONTAINS_ANY" | "NOT_CONTAINS_ANY" | "CONTAINS_ALL" | "NOT_CONTAINS_ALL" | "LIKE" | "NOT_LIKE" | "STARTS_WITH" | "ENDS_WITH" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "BETWEEN" | "IS_NULL" | "IS_NOT_NULL";
          /** Value to compare against. Pass an array for IN, NOT_IN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY and NOT_CONTAINS_ALL, an array of exactly two values ordered as [minimum, maximum] for BETWEEN, a scalar for single-value operators, and omit it entirely for IS_NULL and IS_NOT_NULL. */
          value?: unknown;
          /** Whether to compare strings case-insensitively. */
          ignoreCase?: boolean;
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to include totalCount in the response pagination. Apple Ads omits it unless this is true. */
        fetchTotalCount?: boolean;
      };
      output: {
        /** Product pages matching the query on this page. */
        productPages: Array<{
          /** App Store Connect identifier for the product page. */
          id: string;
          /** App Store identifier of the app this product page belongs to. */
          adamId?: number | null;
          /** Product page name as configured in App Store Connect. */
          name?: string | null;
          /** Distribution state of the product page. It is an open string rather than a closed enum; a live page is typically PUBLISHED, and App Store Connect can surface other values such as READY_FOR_DISTRIBUTION while a change propagates. */
          state?: string | null;
          /** URL used when this product page is a creative destination, or null when no deep link is configured. */
          deepLink?: string | null;
          /** When the product page was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the product page was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Rank App Store search terms by relative search volume within a country or region and genre, to discover high-volume terms worth targeting. */
    "apple_ads.query_search_term_popularity": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Date window to aggregate search term popularity over. The timezone is fixed to UTC. */
        timeRange: {
          /**
           * First day of the window in YYYY-MM-DD format.
           * @format date
           */
          start: string;
          /**
           * Last day of the window in YYYY-MM-DD format.
           * @format date
           */
          end: string;
          /** Aggregation period. WEEKLY_SUN_SAT uses fixed Sunday to Saturday weeks and keeps 65 weeks of history; MONTHLY uses calendar months, keeps 15 months of history and truncates the date field to YYYY-MM. */
          granularity: "WEEKLY_SUN_SAT" | "MONTHLY";
        };
        /** Optional metrics to include on every row. countryOrRegion, genre, searchTerm and the date field for the chosen granularity are always returned. */
        fields?: Array<"rankInGenre" | "searchPopularityInGenre" | "searchPopularity1to100" | "searchPopularity1to5">;
        /** Filter conditions combined with logical AND. */
        filters?: Array<{
          /** Field to filter on. week accepts IN and is available only for WEEKLY_SUN_SAT; month accepts IN and is available only for MONTHLY; countryOrRegion and genre accept EQUALS and IN; searchTerm accepts EQUALS, IN, CONTAINS and STARTS_WITH, matching case-insensitively for the last two; the four numeric popularity fields accept EQUALS, the comparison operators and BETWEEN. Genre values are BUSINESS, EDUCATION, ENTERTAINMENT, FINANCE, FOOD_DRINK, GAMES, HEALTH_FITNESS, LIFESTYLE, NEW_PUBLICATION, PHOTO_VIDEO, PRODUCTIVITY_UTILITIES, SHOPPING, SOCIAL_NETWORKING, SPORTS, TRAVEL. */
          field: "week" | "month" | "countryOrRegion" | "genre" | "searchTerm" | "rankInGenre" | "searchPopularityInGenre" | "searchPopularity1to100" | "searchPopularity1to5";
          /** Comparison operator. Which operators a field accepts is documented per field. */
          operator: "EQUALS" | "NOT_EQUALS" | "IN" | "CONTAINS" | "CONTAINS_ANY" | "CONTAINS_ALL" | "STARTS_WITH" | "ENDS_WITH" | "LIKE" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "BETWEEN";
          /** Value to compare against. Pass an array for IN and an array of exactly two values ordered as [minimum, maximum] for BETWEEN; pass a scalar for the single-value operators. */
          value: unknown;
        }>;
        /** Sort directives applied in order. Apple Ads accepts at most two and defaults to genre ascending then rankInGenre ascending. */
        sorting?: Array<{
          /** Field to sort on. */
          field: "week" | "month" | "countryOrRegion" | "genre" | "searchTerm" | "rankInGenre" | "searchPopularityInGenre" | "searchPopularity1to100" | "searchPopularity1to5";
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of rows to return on this page. Apple Ads caps it at 5000.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Search term popularity rows on this page. */
        rows: Array<{
          /** The date immediately following the completed week, in YYYY-MM-DD format. Present when granularity is WEEKLY_SUN_SAT. */
          week?: string | null;
          /** Calendar month of the snapshot in YYYY-MM format. Present when granularity is MONTHLY. */
          month?: string | null;
          /** ISO 3166-1 alpha-2 country or region code. */
          countryOrRegion?: string | null;
          /** App Store genre classification. */
          genre?: string | null;
          /** The search term. Only terms with at least 500 searches and at least 10 impressions in the period are included. */
          searchTerm?: string | null;
          /** Rank of the term by search volume within its country or region and genre, where 1 is the highest volume. Returned only when requested in fields. */
          rankInGenre?: number | null;
          /** Popularity within the country or region and genre on a 1 to 100 scale. Returned only when requested in fields. */
          searchPopularityInGenre?: number | null;
          /** Popularity across all genres within the country or region on a 1 to 100 scale. Returned only when requested in fields. */
          searchPopularity1to100?: number | null;
          /** Popularity across all genres within the country or region on a 1 to 5 scale. Returned only when requested in fields. */
          searchPopularity1to5?: number | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** List the App Store countries or regions along with the languages that Apple Ads supports in each market. Use it to validate a locale before setting it on an ad group or a creative. An empty query returns every market. */
    "apple_ads.query_supported_app_languages": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Filter conditions combined with logical AND. Omit it to return every record in the ad account. */
        filters?: Array<{
          /** Market field to filter on. countryCode accepts EQUALS and IN; name accepts EQUALS. */
          field: "countryCode" | "name";
          /** Comparison operator. Which operators a field accepts is documented per field. */
          operator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "CONTAINS_ANY" | "NOT_CONTAINS_ANY" | "CONTAINS_ALL" | "NOT_CONTAINS_ALL" | "LIKE" | "NOT_LIKE" | "STARTS_WITH" | "ENDS_WITH" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "BETWEEN" | "IS_NULL" | "IS_NOT_NULL";
          /** Value to compare against. Pass an array for IN, NOT_IN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY and NOT_CONTAINS_ALL, an array of exactly two values ordered as [minimum, maximum] for BETWEEN, a scalar for single-value operators, and omit it entirely for IS_NULL and IS_NOT_NULL. */
          value?: unknown;
          /** Whether to compare strings case-insensitively. */
          ignoreCase?: boolean;
        }>;
        /** Sort directives applied in order. The default is to sort by id ascending. */
        sorting?: Array<{
          /** Market field to sort on. */
          field: "countryCode" | "name";
          /** Sort direction. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to include totalCount in the response pagination. Apple Ads omits it unless this is true. */
        fetchTotalCount?: boolean;
      };
      output: {
        /** One row per App Store country or region on this page. */
        markets: Array<{
          /** Full display name of the country or region, for example United States. */
          name?: string | null;
          /** ISO 3166-1 alpha-2 country or region code, for example US. */
          countryCode?: string | null;
          /** Every language and locale combination eligible for Apple Ads creatives and targeting in this market. */
          adsSupportedLanguages?: Array<{
            /** Language identifier, for example en or es. */
            language?: string | null;
            /** BCP-47 language code, for example en-US. */
            languageCode?: string | null;
            [key: string]: unknown;
          }> | null;
          /** Languages applied automatically when no explicit locale is set for this market. */
          adsDefaultLanguages?: Array<{
            /** Language identifier, for example en or es. */
            language?: string | null;
            /** BCP-47 language code, for example en-US. */
            languageCode?: string | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** List the target CPA adjustments Apple Ads recommends for one promoted object. Only campaigns on a Maximize Conversions bid strategy receive them, and a target CPA is a goal the auto-bidder optimizes toward rather than a bid. */
    "apple_ads.query_target_cpa_recommendations": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Identifier of the promoted object this request applies to: the app Adam ID when promotedObjectType is APPSTORE_APP, or the brand identifier when it is BUSINESS_BRAND. */
        promotedObjectId: number | string;
        /** Type of the promoted object. */
        promotedObjectType: "APPSTORE_APP" | "BUSINESS_BRAND";
        /** Return only recommendations in this lifecycle state. Pass AVAILABLE to get the ones still worth acting on. */
        state?: "AVAILABLE" | "APPLIED" | "DISMISSED" | "DELETE";
        /** Sort directives applied in order, the first being the primary sort. */
        sorting?: Array<{
          /**
           * Recommendation field to sort on, for example creationTime or expirationTime.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** Sort direction. Apple Ads defaults to ASC. */
          order?: "ASC" | "DESC";
        }>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of recommendations to return on this page. Apple Ads defaults to 20 and caps it at 1000.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Target CPA recommendations on this page. */
        recommendations: Array<{
          /** Identifier of the recommendation, used when applying or dismissing it. */
          id?: string | null;
          /** Lifecycle state tracking the advertiser response. It is terminal once APPLIED, DISMISSED or DELETE. */
          state?: "AVAILABLE" | "APPLIED" | "DISMISSED" | "DELETE" | null;
          /** The suggested new target CPA. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          recommendedTargetCPA?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Bid strategy the campaign was using when the recommendation was produced. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          bidStrategy?: {
            /** The bid strategy type. */
            bidStrategyType?: "MANUAL_CPT" | "MANUAL_CPM" | "MAX_CONVERSIONS" | "MAX_ENGAGEMENTS" | null;
            /** The optimization goal of the bid strategy. */
            bidStrategyGoal?: "TAP" | "IMPRESSION" | "INSTALL" | null;
            /** Bid amount associated with the strategy. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            bidAmount?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Taps projected over seven days if the recommendation is applied. */
          expectedTaps?: number | null;
          /** Average cost per acquisition projected over seven days if the recommendation is applied. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          expectedCPA?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Installs projected over seven days if the recommendation is applied. */
          expectedInstalls?: number | null;
          /** Spend projected over seven days if the recommendation is applied. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          expectedSpend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Optimization area of the recommendation. */
          recommendationType?: "KEYWORD" | "SKEYWORD" | "DAILYCAP" | "SDAILYCAP" | "TCPA" | "STCPA" | "BID" | "SBID" | null;
          /** Identifier of the promoted object: the app Adam ID for APPSTORE_APP, or the brand identifier for BUSINESS_BRAND. */
          promotedObjectId?: string | null;
          /** Type of the promoted object. */
          promotedObjectType?: "APPSTORE_APP" | "BUSINESS_BRAND" | null;
          /** Campaign the recommendation applies to. */
          campaignId?: number | null;
          /** Display name of that campaign. */
          campaignName?: string | null;
          /** Operational status of the recommendation record itself, independent of state. */
          status?: "ENABLED" | "DISABLED" | "DELETED" | null;
          /** Historical install count. */
          installs?: number | null;
          /** Historical spend. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          spend?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Historical average cost per acquisition. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          averageCPA?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Historical average cost per tap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          averageCPT?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Historical impression count. */
          impression?: number | null;
          /** Historical tap count. */
          taps?: number | null;
          /** Historical tap-through rate. */
          ttr?: number | null;
          /** When the recommendation was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the record was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** When the recommendation expires. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          expirationTime?: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read the target CPA Apple Ads suggests as the starting point for a new Maximize Conversions campaign, computed from the app's tap-install CPI over the last 28 days. It applies to App Store apps only, so the request always asks for promotedObjectType APPSTORE_APP. */
    "apple_ads.query_target_cpa_suggestion": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Adam ID of the App Store app to size a target CPA for. */
        promotedObjectId: number | string;
        /** Consider only these App Store countries or regions. Omit it to consider every eligible market. */
        countryOrRegion?: Array<string>;
      };
      output: {
        /** The suggested target CPA for a new Maximize Conversions campaign, derived from the app's tap-install CPI over the last 28 days. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        suggestion: {
          /** The suggested target CPA: the highest tap-install CPI among the evaluated countries or regions with at least 10 installs in the window. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          suggestedTargetCPA?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Countries or regions the suggestion applies to. */
          countryOrRegion?: Array<string> | null;
          /** Identifier of the app the suggestion was calculated for. */
          promotedObjectId?: string | null;
          /** App Store category used to scope the performance data behind the suggestion. */
          appCategory?: string | null;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Search the App Store for apps by name or content provider, or list the apps the organization owns. Supply at least one of query, cpids or returnOwnedApps set to true. Campaigns can only promote apps the ad account owns, so use returnOwnedApps to find a usable promotedObjectId. */
    "apple_ads.search_apps": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /**
         * Free-text search matched against app name and developer name. It has to contain at least one alphanumeric character and at least 3 characters, or 2 characters for CJK languages.
         * @minLength 1
         * @pattern \S
         */
        query?: string;
        /** Whether to return the apps owned by the caller's organization. It can be combined with query and cpids or used on its own, and Apple Ads defaults it to false. */
        returnOwnedApps?: boolean;
        /** iTunes content provider identifiers that scope the search to apps owned by those providers. They are sent as the comma-separated cpids query parameter. */
        cpids?: Array<string>;
        /** App Store countries or regions to search in. Every value has to be an enabled App Store country or region, otherwise Apple Ads answers with INVALID_COUNTRY_CODE. */
        storeFronts?: Array<string>;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Maximum number of results to return. Apple Ads defaults to 20 and caps it at a service-side maximum.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Apps matching the search criteria on this page. */
        apps: Array<{
          /** Adam ID of the app. Use it as promotedObjectId when creating a campaign that promotes this app. */
          adamId: number;
          /** App display name as shown in the App Store. */
          appName?: string | null;
          /** Developer or publisher name. */
          developerName?: string | null;
          /** ISO 3166-1 alpha-2 codes for every App Store country or region where the app is available. */
          countryOrRegionCodes?: Array<string> | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Search geo targeting locations by name. Use it to discover the geo location ids to put in an ad group's country, adminArea, locality or postalCode targeting dimension. Soft-blocked geos are returned with their eligibility data unless eligible is true. */
    "apple_ads.search_geo_locations": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Supply source the search is scoped to. APPSTORE returns Country, AdminArea and Locality entities for App Store campaigns. MAPS returns AdminArea, Locality and PostalCode entities for Apple Maps campaigns and restricts results to the United States and Canada. */
        supplySource: "APPSTORE" | "MAPS";
        /**
         * Text to search for, at least two characters. Pass "*" or omit it to return every matching geo location.
         * @minLength 1
         * @pattern \S
         */
        query?: string;
        /** Restrict results to one geographic granularity. PostalCode is only available with supplySource MAPS, and Country only with supplySource APPSTORE. */
        entity?: "Country" | "AdminArea" | "Locality" | "PostalCode";
        /**
         * ISO 3166-1 alpha-2 country code to scope results to. Apple Ads defaults it to US when entity is AdminArea, Locality or PostalCode and this is omitted.
         * @minLength 1
         * @pattern \S
         */
        countryCode?: string;
        /** Whether to drop soft-blocked geo locations, meaning those with low search volume or sparse coverage. Apple Ads includes them by default. */
        eligible?: boolean;
        /**
         * Zero-based index of the first record to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of records to return on this page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Geo locations matching the search, sorted alphabetically by displayName. */
        geoLocations: Array<{
          /** Numeric geo location identifier. Use it as the targeting value in an ad group's country, adminArea, locality or postalCode dimension. */
          id: string;
          /** Pipe-delimited identifier encoding the full geographic hierarchy, for example US|CA|San Francisco or US|TX|78238. */
          legacyId?: string | null;
          /** Geographic granularity of this location. */
          entity?: "Country" | "AdminArea" | "Locality" | "PostalCode" | null;
          /** Localized display name including the full hierarchy. */
          displayName?: string | null;
          /** ISO 3166-1 alpha-2 country or region code. */
          countryOrRegion?: string | null;
          /** State or province identifier. Apple Ads returns it for AdminArea, Locality and PostalCode entities. */
          adminArea?: string | null;
          /** City or locality name. Apple Ads returns it for Locality entities. */
          locality?: string | null;
          /** Postal code value. Apple Ads returns it for PostalCode entities. */
          postalCode?: string | null;
          /** Serving restrictions scoped to the requested supply source. Apple Ads leaves it out entirely when nothing restricts the location. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          eligibility?: {
            /** Blocking rules that apply to this location for the requested supply source. */
            blockedGroups?: Array<{
              /** Supply sources this restriction applies to. */
              supplySource?: Array<string> | null;
              /** Reason codes for the restriction. */
              reasons?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata echoed by Apple Ads for this page. */
        pagination: {
          /** Zero-based index of the first record in this page. */
          offset: number | null;
          /** Number of records requested for this page. */
          pageSize: number | null;
          /** Total number of records matching the query, or null when fetchTotalCount was not requested. */
          totalCount: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Change the name or status of one ad. They are the only mutable fields; adGroupId, creativeId, campaignId and adAccountId are locked at creation. Only the fields you pass are changed. Updating a soft-deleted ad returns 404. */
    "apple_ads.update_ad": {
      input: {
        /** Identifier of the ad to update. */
        adId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /**
         * New ad name.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /** Pause or resume auction participation. PAUSED stops it immediately. */
        status?: "ENABLED" | "PAUSED";
      };
      output: {
        /** An ad, the serving unit that links an ad creative to an ad group. Only one ad per ad group can be ENABLED at a time. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        ad: {
          /** System-assigned identifier for the ad. */
          id: number;
          /** Advertiser-given name of the ad. */
          name?: string | null;
          /** Advertiser intent for the ad to serve. */
          status?: "ENABLED" | "PAUSED" | null;
          /** Ad account the ad belongs to. */
          adAccountId?: number | null;
          /** Campaign the ad belongs to. */
          campaignId?: number | null;
          /** Ad group the ad belongs to. */
          adGroupId?: number | null;
          /** Ad creative this ad serves. */
          creativeId?: number | null;
          /** System-computed delivery state. */
          systemStatus?: "RUNNING" | "NOT_RUNNING" | null;
          /** Reasons the ad is not delivering, populated when systemStatus is NOT_RUNNING. */
          systemStatusReasons?: Array<string> | null;
          /** Reasons the ad delivers at reduced capacity without stopping. */
          systemStatusLimitingReasons?: Array<string> | null;
          /** Rolled-up delivery state combining ad, ad group and campaign conditions. */
          displayStatus?: "RUNNING" | "PAUSED" | "ON_HOLD" | "AD_GROUP_ON_HOLD" | "CAMPAIGN_ON_HOLD" | "LIMITED" | "PROCESSING" | "DELETED" | null;
          /** When the ad was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the ad was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the ad has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Change the name or the delegated advertiser resources of one ad account. Only the fields you pass are changed, and the delegations array you pass replaces the stored one entirely. The currency, time zone, payment model, organization and productFeatures are fixed and cannot be updated. */
    "apple_ads.update_ad_account": {
      input: {
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /**
         * New name for the ad account. It must be unique within the organization.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /** The complete set of advertiser resources the account should end up with. Apple Ads keeps the entries you send and removes every stored delegation you leave out, so read the account first and send the existing delegations plus the new one to add one. Pass an empty array to remove them all. */
        delegations?: Array<{
          /** Identifier of the resource to delegate: the Content Provider ID (CPID) for CONTENT_PROVIDER, or the Brand ID for BUSINESS_BRAND. Get Advertiser Resources lists the identifiers available to the organization. */
          resourceId: number | string;
          /** Kind of resource to delegate. Every delegation on one ad account must share the same resourceType, and it has to match the account's productFeatures. */
          resourceType: "CONTENT_PROVIDER" | "BUSINESS_BRAND";
        }>;
      };
      output: {
        /** An ad account, the container that owns campaigns and carries the advertising settings inherited from its organization. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        adAccount: {
          /** System-assigned identifier for the ad account. */
          id: number;
          /** Name of the ad account, unique within the parent organization. */
          name?: string | null;
          /** Identifier of the parent organization. It can never change. */
          orgId?: number | null;
          /** Time zone of the ad account, inherited from the parent organization, for example America/New_York. */
          timezone?: string | null;
          /** Currency of the ad account, inherited from the parent organization. */
          currency?: "USD" | "RMB" | "AUD" | "CAD" | "EUR" | "GBP" | "JPY" | "MXN" | "NZD" | "RUB" | "CNY" | "INR" | "BRL" | "IDR" | null;
          /** Payment model inherited from the parent organization. LOC is line of credit, invoiced monthly and required for budget orders; PAYG is pay as you go, charged per campaign spend. */
          paymentModel?: "PAYG" | "LOC" | null;
          /** Whether the ad account is operational. An INACTIVE account cannot run campaigns. */
          systemStatus?: "ACTIVE" | "INACTIVE" | null;
          /** Reasons the ad account is INACTIVE, empty while it is ACTIVE. */
          systemStatusReasons?: Array<string> | null;
          /** Advertiser resources delegated to this ad account. */
          delegations?: Array<{
            /** Identifier of the delegated resource: the Content Provider ID (CPID) for CONTENT_PROVIDER, or the Brand ID for BUSINESS_BRAND. */
            resourceId?: string | null;
            /** Kind of delegated resource. */
            resourceType?: "CONTENT_PROVIDER" | "BUSINESS_BRAND" | null;
            /** Display name of the delegated resource: the brand name for BUSINESS_BRAND, or the App Store Connect provider name for CONTENT_PROVIDER. */
            resourceName?: string | null;
            [key: string]: unknown;
          }> | null;
          /** Advertising surface the ad account is authorized for. */
          productFeatures?: Array<string> | null;
          /** When the ad account was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the ad account was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Change the mutable fields of one ad group. Only the fields you pass are changed, and targeting is merged dimension by dimension: a dimension you pass replaces the stored one, and a dimension you omit is left alone. campaignId, pricingModel and automatedKeywordsRequired cannot be changed. */
    "apple_ads.update_ad_group": {
      input: {
        /** Identifier of the ad group to update. */
        adGroupId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /**
         * New ad group name.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /** Pause or resume delivery. */
        status?: "ENABLED" | "PAUSED";
        /**
         * New scheduled start. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset, for example 2026-01-31T23:59:59.000.
         * @minLength 1
         * @pattern \S
         */
        startTime?: string;
        /**
         * New scheduled end. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset, for example 2026-01-31T23:59:59.000.
         * @minLength 1
         * @pattern \S
         */
        endTime?: string;
        /** Turn Search Match on or off. */
        automatedKeywordsOptIn?: boolean;
        /** How the ad group competes in auctions. Leave it out of a create request to inherit the campaign's bid strategy; leaving it out of an update keeps the stored one. An ad group under an auto-bidding campaign, meaning one whose bidStrategyType is MAX_CONVERSIONS or MAX_ENGAGEMENTS, inherits the campaign's strategy, so echo that strategy back when you update such an ad group. Apple Ads requires bidStrategyType and bidStrategyGoal together, paired as MANUAL_CPT with TAP, MANUAL_CPM with IMPRESSION, MAX_CONVERSIONS with INSTALL, or MAX_ENGAGEMENTS with TAP. */
        bidStrategy?: {
          /** The bid strategy type. It has to stay compatible with the parent campaign's billingEvent. */
          bidStrategyType?: "MANUAL_CPT" | "MANUAL_CPM" | "MAX_CONVERSIONS" | "MAX_ENGAGEMENTS";
          /** The optimization goal for the bid strategy. */
          bidStrategyGoal?: "TAP" | "IMPRESSION" | "INSTALL";
          /** Bid ceiling for each auction entry. It governs auction participation for MANUAL_CPT and acts as an upper bound for automated strategies. */
          bid?: {
            /**
             * Monetary amount as a decimal string without leading zeros, for example "10.00".
             * @minLength 1
             */
            amount: string;
            /**
             * ISO 4217 currency code. It must match the currency of the ad account.
             * @minLength 1
             */
            currency?: string;
          };
        };
        /** Audience and delivery targeting for the ad group. It refines the campaign's targeting and cannot widen it: a user must match every dimension you set. Not every dimension is meaningful for every campaign type, and Apple Ads does not enforce the pairings at the schema level. */
        targeting?: {
          /** Countries to deliver in, used with App Store campaigns. This dimension is include-only; an exclude array on it has no effect. */
          country?: {
            /** Country identifiers returned by the geo location endpoints. */
            include: Array<string>;
          };
          /** States or provinces to deliver in, used with App Store and Apple Maps campaigns. This dimension is include-only; an exclude array on it has no effect. */
          adminArea?: {
            /** Admin area identifiers returned by the geo location endpoints. */
            include: Array<string>;
          };
          /** Cities to deliver in, used with App Store and Apple Maps campaigns. This dimension is include-only; an exclude array on it has no effect. */
          locality?: {
            /** Locality identifiers returned by the geo location endpoints. */
            include: Array<string>;
          };
          /** Postal code areas to deliver in, used with Apple Maps campaigns. This dimension is include-only; an exclude array on it has no effect. */
          postalCode?: {
            /** Postal code identifiers returned by the geo location endpoints. */
            include: Array<string>;
          };
          /** Proximity to the advertiser's business locations, used with Apple Maps campaigns on the MAPS_SEARCH_RESULTS placement. Do not combine it with geo location targeting in the same ad group. This dimension is include-only; an exclude array on it has no effect. */
          radius?: {
            /** Radius bands to deliver in. */
            include: Array<"CLOSE" | "MEDIUM" | "FAR">;
          };
          /** Device classes to deliver on, used with App Store campaigns. This dimension is include-only; an exclude array on it has no effect. */
          deviceClass?: {
            /** Device classes to deliver on. */
            include: Array<"IPHONE" | "IPAD">;
          };
          /** Lower bound of the target age range, used with App Store campaigns. This dimension is include-only; an exclude array on it has no effect. */
          minAge?: {
            /** The lower bound of the target age range, from 18 to 64. */
            include: Array<string>;
          };
          /** Upper bound of the target age range, used with App Store campaigns. Send include as null to target users 65 and older. Leaving the dimension out of a create request has the same effect, but leaving it out of an update keeps the stored bound. This dimension is include-only; an exclude array on it has no effect. */
          maxAge?: {
            /** The upper bound of the target age range, from 18 to 64, or null to leave the range open ended. */
            include: Array<string> | null;
          };
          /** Genders to deliver to, used with App Store campaigns. This dimension is include-only; an exclude array on it has no effect. */
          gender?: {
            /** Genders to deliver to. */
            include: Array<"M" | "F">;
          };
          /** App Store categories of the apps a user engages with, used with App Store campaigns. Category 100 is the special value meaning the same category as the promoted app. This is one of the two dimensions Apple Ads honors exclude on. */
          appCategory?: {
            /** App Store category identifiers to target. */
            include?: Array<string>;
            /** App Store category identifiers to exclude. */
            exclude?: Array<string>;
          };
          /** Users selected by the apps they already downloaded, used with App Store campaigns. Exclude the promoted app's own adamId to suppress existing users and target acquisition only. Leave the dimension out of a create request to reach all users. Apple Ads only accepts adamIds of apps the API user owns. This is one of the two dimensions Apple Ads honors exclude on. */
          appDownloader?: {
            /** Adam identifiers whose downloaders to reach. */
            include?: Array<string>;
            /** Adam identifiers whose downloaders to suppress. */
            exclude?: Array<string>;
          };
          /** Hours of the week the ad group may deliver in, used with App Store campaigns on APPSTORE_SEARCH_RESULTS and Apple Maps campaigns on MAPS_SEARCH_RESULTS. Slots are evaluated in the ad account's time zone. This dimension is include-only; an exclude array on it has no effect. */
          daypart?: {
            /** One-hour slots in a 168-slot week starting at Sunday midnight: 0 is Sunday 12:00 a.m., 24 is Monday 12:00 a.m., and 167 is Saturday 11:00 p.m. */
            include: Array<string>;
          };
          /** Location groups whose business locations the ad group promotes, used with Apple Maps campaigns. This dimension is include-only; an exclude array on it has no effect. */
          locationGroup?: {
            /** Location group identifiers. */
            include: Array<string>;
          };
        };
        /** Deprecated cost-per-acquisition cap. Apple Ads still accepts it, but new integrations should use bidStrategy with MAX_CONVERSIONS instead. */
        cpaCap?: {
          /** The target cost-per-acquisition amount. */
          value: {
            /**
             * Monetary amount as a decimal string without leading zeros, for example "10.00".
             * @minLength 1
             */
            amount: string;
            /**
             * ISO 4217 currency code. It must match the currency of the ad account.
             * @minLength 1
             */
            currency?: string;
          };
        };
      };
      output: {
        /** An ad group, the unit inside a campaign that carries one targeting configuration, bid strategy and schedule for its ads. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        adGroup: {
          /** System-assigned identifier for the ad group. */
          id: number;
          /** Advertiser-given ad group name. */
          name?: string | null;
          /** Ad account the ad group belongs to. */
          adAccountId?: number | null;
          /** Campaign the ad group belongs to. */
          campaignId?: number | null;
          /** Scheduled start of the ad group. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          startTime?: string | null;
          /** Scheduled end of the ad group, or null when it inherits the campaign end date. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          endTime?: string | null;
          /** Delivery unit that triggers billing. */
          pricingModel?: "CPA" | "CPM" | "CPT" | null;
          /** Whether Search Match automatically matches relevant search terms for this ad group. */
          automatedKeywordsOptIn?: boolean | null;
          /** Whether automated keyword generation is required for this ad group. */
          automatedKeywordsRequired?: boolean | null;
          /** Advertiser intent for the ad group to serve. */
          status?: "ENABLED" | "PAUSED" | null;
          /** System-computed delivery state. */
          systemStatus?: "RUNNING" | "NOT_RUNNING" | null;
          /** Reasons the ad group is not delivering. */
          systemStatusReasons?: Array<string> | null;
          /** Reasons the ad group delivers below its full potential. */
          systemStatusLimitingReasons?: Array<string> | null;
          /** Rolled-up delivery state combining advertiser intent and system evaluation. CAMPAIGN_ON_HOLD means the parent campaign is what is blocking delivery. */
          displayStatus?: "RUNNING" | "PAUSED" | "ON_HOLD" | "CAMPAIGN_ON_HOLD" | "LIMITED" | "PROCESSING" | "DELETED" | null;
          /** Bid strategy governing auction participation for this ad group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          bidStrategy?: {
            /** The bid strategy type. */
            bidStrategyType?: "MANUAL_CPT" | "MANUAL_CPM" | "MAX_CONVERSIONS" | "MAX_ENGAGEMENTS" | null;
            /** The optimization goal. */
            bidStrategyGoal?: "TAP" | "IMPRESSION" | "INSTALL" | null;
            /** Bid ceiling for each auction entry. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            bid?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Audience and delivery targeting for the ad group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          targeting?: {
            /** Country targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            country?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** State or province targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            adminArea?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** City targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            locality?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Postal code targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            postalCode?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Radius targeting around business locations. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            radius?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Device class targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            deviceClass?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Lower bound of the target age range. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            minAge?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Upper bound of the target age range. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            maxAge?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Gender targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            gender?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** App Store category targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            appCategory?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** App downloader targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            appDownloader?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Hour-of-week targeting, as slot indexes from 0 to 167. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            daypart?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Location group targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            locationGroup?: {
              /** Values included in targeting. */
              include?: Array<string> | null;
              /** Values excluded from targeting. Most dimensions ignore it. */
              exclude?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Deprecated cost-per-acquisition cap, superseded by bidStrategy with MAX_CONVERSIONS. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          cpaCap?: {
            /** The target cost-per-acquisition amount. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            value?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** When the ad group was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the ad group was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the ad group has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Change the mutable fields of one budget order. Only the fields you pass are changed. On a budget order that is already active, an end date can only be shortened, never extended, and passing endTime as null removes the expiration date entirely. */
    "apple_ads.update_budget_order": {
      input: {
        /** Identifier of the budget order to update. */
        budgetOrderId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /**
         * New budget order name.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /**
         * New start of the budget order. It must be midnight UTC of tomorrow or later; Apple Ads rejects today. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset, for example 2026-01-31T23:59:59.000.
         * @minLength 1
         * @pattern \S
         */
        startTime?: string;
        /**
         * New end of the budget order, or null to remove the expiration date and make it open-ended. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset, for example 2026-01-31T23:59:59.000.
         * @minLength 1
         * @pattern \S
         */
        endTime?: string | null;
        /** New total amount for the budget order. Raise value.amount to extend a budget order that is close to exhaustion. */
        value?: {
          /**
           * Monetary amount as a decimal string without leading zeros, for example "10.00".
           * @minLength 1
           */
          amount: string;
          /**
           * ISO 4217 currency code. It must match the currency of the ad account.
           * @minLength 1
           */
          currency?: string;
        };
        /**
         * Ad account that can draw from this budget order. Apple Ads allows exactly one ad account per budget order and rejects requests that send more than one.
         * @minItems 1
         * @maxItems 1
         */
        adAccountIds?: Array<number | string>;
        /** New invoice and billing contact details. Every field is optional, so send only the ones you want to change. */
        invoiceDetail?: {
          /**
           * Name of the primary buyer.
           * @minLength 1
           * @pattern \S
           */
          primaryBuyerName?: string;
          /**
           * Email address of the primary buyer.
           * @format email
           */
          primaryBuyerEmail?: string;
          /**
           * Billing email address.
           * @format email
           */
          billingEmail?: string;
          /**
           * Advertiser or product this invoice identifies.
           * @minLength 1
           * @pattern \S
           */
          clientName?: string;
          /**
           * Purchase order number.
           * @minLength 1
           * @pattern \S
           */
          orderNumber?: string;
        };
      };
      output: {
        /** A budget order, a spending cap that the campaigns assigned to it draw from over a scheduled period. It is available only on ad accounts with the LOC (Line of Credit) payment model. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        budgetOrder: {
          /** System-assigned identifier for the budget order. */
          id: number;
          /** Organization that owns the budget order. */
          orgId?: number | null;
          /** Advertiser-given budget order name. */
          name?: string | null;
          /** When the budget order becomes active. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          startTime?: string | null;
          /** When the budget order expires, or null when it is open-ended. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          endTime?: string | null;
          /** Total amount the assigned campaigns can spend against this budget order. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          value?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Ad accounts whose campaigns can draw from this budget order. */
          adAccountIds?: Array<number> | null;
          /** System-computed state telling whether campaigns can currently draw spend against the budget order. */
          systemStatus?: "ACTIVE" | "INACTIVE" | null;
          /** Reasons behind the current system status. */
          systemStatusReasons?: Array<"CANCELED" | "CAMPAIGN_BUDGET_UNASSIGNED" | "DELETED_BY_USER" | "EXHAUSTED" | "PROCESSING" | "SCHEDULE_EXPIRED" | "SCHEDULE_PENDING"> | null;
          /** Invoice and billing contact details. Apple Ads populates it only for Line of Credit accounts. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          invoiceDetail?: {
            /** Advertiser or product this invoice identifies. */
            clientName?: string | null;
            /** Name of the primary buyer. */
            primaryBuyerName?: string | null;
            /** Email address of the primary buyer. */
            primaryBuyerEmail?: string | null;
            /** Purchase order number. */
            orderNumber?: string | null;
            /** Billing email address. */
            billingEmail?: string | null;
            [key: string]: unknown;
          } | null;
          /** When the budget order was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the budget order was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the budget order has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Change the mutable fields of one campaign. Only the fields you pass are changed, but an array you pass replaces the stored array entirely. */
    "apple_ads.update_campaign": {
      input: {
        /** Identifier of the campaign to update. */
        campaignId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /**
         * New campaign name, at most 200 characters.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /** Pause or resume delivery. */
        status?: "ENABLED" | "PAUSED";
        /**
         * New scheduled start. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset, for example 2026-01-31T23:59:59.000.
         * @minLength 1
         * @pattern \S
         */
        startTime?: string;
        /**
         * New scheduled end. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset, for example 2026-01-31T23:59:59.000.
         * @minLength 1
         * @pattern \S
         */
        endTime?: string;
        /** New daily spend cap. */
        dailyBudget?: {
          /** The daily budget amount. */
          value: {
            /**
             * Monetary amount as a decimal string without leading zeros, for example "10.00".
             * @minLength 1
             */
            amount: string;
            /**
             * ISO 4217 currency code. It must match the currency of the ad account.
             * @minLength 1
             */
            currency?: string;
          };
        };
        /** Where the campaign is eligible to serve ads. Ad group targeting can only narrow these boundaries. */
        targeting?: {
          /** Supply sources where ads are eligible to appear. Only include is honored at the campaign level; Apple Ads ignores exclude here. */
          supplySource?: {
            /** Values to include in targeting. */
            include: Array<"APPSTORE" | "MAPS">;
          };
          /** Placements within the selected supply sources. Each placement belongs to exactly one supply source. Only include is honored at the campaign level; Apple Ads ignores exclude here. */
          supplyPlacement?: {
            /** Values to include in targeting. */
            include: Array<"APPSTORE_SEARCH_RESULTS" | "APPSTORE_SEARCH_TAB" | "APPSTORE_TODAY_TAB" | "APPSTORE_PRODUCT_PAGES" | "MAPS_SEARCH_RESULTS" | "MAPS_SEARCH_HOME">;
          };
          /** Countries or regions where the campaign serves ads. Only include is honored at the campaign level. */
          countryOrRegion?: {
            /**
             * ISO 3166-1 alpha-2 country or region codes to include.
             * @minItems 1
             */
            include: Array<string>;
          };
        };
        /** How the campaign competes in auctions. Apple Ads requires bidStrategyType and bidStrategyGoal together, paired as MANUAL_CPT with TAP, MANUAL_CPM with IMPRESSION, MAX_CONVERSIONS with INSTALL, or MAX_ENGAGEMENTS with TAP. */
        bidStrategy?: {
          /** The bid strategy type. */
          bidStrategyType?: "MANUAL_CPT" | "MANUAL_CPM" | "MAX_CONVERSIONS" | "MAX_ENGAGEMENTS";
          /** The optimization goal for the bid strategy. */
          bidStrategyGoal?: "TAP" | "IMPRESSION" | "INSTALL";
          /** Bid ceiling for each auction entry. It governs auction participation for MANUAL_CPT and acts as an upper bound for automated strategies. */
          bid?: {
            /**
             * Monetary amount as a decimal string without leading zeros, for example "10.00".
             * @minLength 1
             */
            amount: string;
            /**
             * ISO 4217 currency code. It must match the currency of the ad account.
             * @minLength 1
             */
            currency?: string;
          };
        };
        /** Budget order assignments for this campaign. Sending this array replaces every existing assignment. */
        sharedBudgets?: Array<{
          /** Identifier of the budget order to assign. */
          budgetId: number | string;
        }>;
        /** Invoice and billing contact details. Apple Ads requires them for Line of Credit accounts. */
        invoiceDetail?: {
          /**
           * Name of the primary buyer.
           * @minLength 1
           * @pattern \S
           */
          primaryBuyerName: string;
          /**
           * Email address of the primary buyer.
           * @format email
           */
          primaryBuyerEmail: string;
          /**
           * Billing email address.
           * @format email
           */
          billingEmail: string;
          /**
           * Advertiser or product this invoice identifies.
           * @minLength 1
           * @pattern \S
           */
          clientName?: string;
          /**
           * Purchase order number.
           * @minLength 1
           * @pattern \S
           */
          orderNumber?: string;
        };
        /** Regulatory consent acknowledgments required in some markets. */
        regulationResponses?: Array<{
          /** Category of regulatory disclosure being answered. */
          regulationType: "CAC" | "CAMPAIGN_SAPIN_LAW" | "ORG_SAPIN_LAW";
          /** Answer to the disclosure question. Which values are valid depends on regulationType. */
          responseValue: "AGENT" | "NOT_AGENT" | "FRENCH_BUSINESS" | "NOT_FRENCH_BUSINESS" | "TRUE" | "FALSE" | "NOT_ANSWERED";
        }>;
      };
      output: {
        /** A campaign, the top-level container that defines the promoted object, billing, scheduling and targeting for its ad groups. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        campaign: {
          /** System-assigned identifier for the campaign. */
          id: number;
          /** Ad account the campaign belongs to. */
          adAccountId?: number | null;
          /** Advertiser-given campaign name. */
          name?: string | null;
          /** Interaction that triggers a charge. */
          billingEvent?: "TAPS" | "IMPRESSIONS" | null;
          /** Payment model applied to the campaign. */
          paymentModel?: "PAYG" | "LOC" | null;
          /** Scheduled start of the campaign. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          startTime?: string | null;
          /** Scheduled end of the campaign, or null when it runs indefinitely. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          endTime?: string | null;
          /** What the campaign promotes. */
          promotedObjectType?: "APPSTORE_APP" | "BUSINESS_BRAND" | null;
          /** Identifier of the promoted entity: the App Store adamId, or the brand identifier for Apple Maps campaigns. */
          promotedObjectId?: string | null;
          /** Advertiser intent for the campaign to serve. */
          status?: "ENABLED" | "PAUSED" | null;
          /** System-computed delivery state. */
          systemStatus?: "RUNNING" | "NOT_RUNNING" | null;
          /** Reasons the campaign is not delivering. */
          systemStatusReasons?: Array<string> | null;
          /** Reasons the campaign delivers below its full potential. */
          systemStatusLimitingReasons?: Array<string> | null;
          /** Rolled-up delivery state combining advertiser intent and system evaluation. */
          displayStatus?: "RUNNING" | "PAUSED" | "ON_HOLD" | "LIMITED" | "PROCESSING" | "DELETED" | null;
          /** Daily spend cap. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          dailyBudget?: {
            /** The daily budget amount. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            value?: {
              /** Monetary amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Budget orders assigned to the campaign. */
          sharedBudgets?: Array<{
            /** Identifier of the assigned budget order. */
            budgetId?: number | null;
            [key: string]: unknown;
          }> | null;
          /** Where the campaign is eligible to serve ads. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          targeting?: {
            /** Supply sources included in targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            supplySource?: {
              /** Included supply sources. */
              include?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Placements included in targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            supplyPlacement?: {
              /** Included placements. */
              include?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            /** Countries or regions included in targeting. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            countryOrRegion?: {
              /** Included ISO 3166-1 alpha-2 codes. */
              include?: Array<string> | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Bid strategy governing auction participation. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          bidStrategy?: {
            /** The bid strategy type. */
            bidStrategyType?: "MANUAL_CPT" | "MANUAL_CPM" | "MAX_CONVERSIONS" | "MAX_ENGAGEMENTS" | null;
            /** The optimization goal. */
            bidStrategyGoal?: "TAP" | "IMPRESSION" | "INSTALL" | null;
            /** Bid ceiling for each auction entry. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            bid?: {
              /** Bid amount as a decimal string. */
              amount?: string | null;
              /** ISO 4217 currency code. */
              currency?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          } | null;
          /** Invoice and billing contact details. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          invoiceDetail?: {
            /** Advertiser or product this invoice identifies. */
            clientName?: string | null;
            /** Name of the primary buyer. */
            primaryBuyerName?: string | null;
            /** Email address of the primary buyer. */
            primaryBuyerEmail?: string | null;
            /** Purchase order number. */
            orderNumber?: string | null;
            /** Billing email address. */
            billingEmail?: string | null;
            [key: string]: unknown;
          } | null;
          /** Regulatory consent acknowledgments recorded for the campaign. */
          regulationResponses?: Array<{
            /** Category of regulatory disclosure. */
            regulationType?: "CAC" | "CAMPAIGN_SAPIN_LAW" | "ORG_SAPIN_LAW" | null;
            /** Recorded answer. */
            responseValue?: "AGENT" | "NOT_AGENT" | "FRENCH_BUSINESS" | "NOT_FRENCH_BUSINESS" | "TRUE" | "FALSE" | "NOT_ANSWERED" | null;
            [key: string]: unknown;
          }> | null;
          /** When the campaign was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the campaign was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the campaign has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Change the name or creative spec of one ad creative. They are the only mutable fields; creativeType and destination are locked at creation. Changing creativeSpec can send the ad creative back to PENDING for re-review, which stops the ads referencing it from delivering until it is VALID again. */
    "apple_ads.update_creative": {
      input: {
        /** Identifier of the ad creative to update. */
        creativeId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /**
         * New name of the ad creative.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /** Pre-tap experience specification. Pass an empty object for DEFAULT_PRODUCT_PAGE and CUSTOM_PRODUCT_PAGE, whose pre-tap content comes from App Store Connect and is not customizable here. It is required for LOCAL_ADS_SEARCH_CREATIVE, where every field below applies. */
        creativeSpec?: {
          /** Brand the Apple Maps ad creative belongs to. LOCAL_ADS_SEARCH_CREATIVE only. */
          brandId?: number | string;
          /** Asset format of the Apple Maps ad creative. LOCAL_ADS_SEARCH_CREATIVE only. */
          creativeSubtype?: "BUSINESS_LOGO" | "BUSINESS_ASSET";
          /** Asset references rendered in the Apple Maps ad creative, in display order. Each asset must already exist in the ad account. LOCAL_ADS_SEARCH_CREATIVE only. */
          creativeAssets?: Array<{
            /**
             * UUID of an existing asset to display.
             * @minLength 1
             * @pattern \S
             */
            assetId: string;
            /**
             * Display position of this asset within the list.
             * @minimum 0
             */
            sortOrder?: number;
          }>;
          /** Promotional copy keyed by BCP-47 locale code, for example {"en-US": {"promoText": "Visit us today"}}. LOCAL_ADS_SEARCH_CREATIVE only. */
          localizedText?: Record<string, Record<string, string>>;
          /**
           * Locale whose copy is used when a viewer's locale is missing from localizedText, for example en-US. LOCAL_ADS_SEARCH_CREATIVE only.
           * @minLength 1
           * @pattern \S
           */
          defaultLocale?: string;
        };
      };
      output: {
        /** An ad creative, the reusable unit of visual presentation an ad references. It carries a pre-tap creativeSpec and a post-tap destination. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        creative: {
          /** System-assigned identifier for the ad creative. Pass this value as creativeId when creating an ad. */
          id: number;
          /** Ad account the ad creative belongs to. */
          adAccountId?: number | null;
          /** Advertiser-given name of the ad creative. */
          name?: string | null;
          /** Content source and placement eligibility of the ad creative. */
          creativeType?: "DEFAULT_PRODUCT_PAGE" | "CUSTOM_PRODUCT_PAGE" | "LOCAL_ADS_SEARCH_CREATIVE" | null;
          /** Pre-tap experience specification. Apple Ads returns an empty object for DEFAULT_PRODUCT_PAGE and CUSTOM_PRODUCT_PAGE, because App Store Connect controls their pre-tap rendering. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          creativeSpec?: {
            /** Brand the Apple Maps ad creative belongs to. */
            brandId?: string | null;
            /** Asset format of the Apple Maps ad creative. */
            creativeSubtype?: "BUSINESS_LOGO" | "BUSINESS_ASSET" | null;
            /** Ordered asset references rendered in the Apple Maps ad creative. */
            creativeAssets?: Array<{
              /** UUID of the referenced asset. */
              assetId?: string | null;
              /** Display position of this asset within the list. */
              sortOrder?: number | null;
              [key: string]: unknown;
            }> | null;
            /** Localized promotional copy keyed by BCP-47 locale code, then by text key. */
            localizedText?: Record<string, Record<string, string | null> | null> | null;
            /** Locale whose copy is used when a viewer's locale is missing from localizedText. */
            defaultLocale?: string | null;
            [key: string]: unknown;
          } | null;
          /** Post-tap destination users land on after tapping the ad. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          destination?: {
            /** Type of post-tap destination. */
            destinationType?: "APP_STORE_PRODUCT_PAGE" | "LOCAL_ADS_PLACECARD" | null;
            /** Destination-specific identifiers. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
            parameters?: {
              /** App Store app identifier the destination points at. */
              adamId?: string | null;
              /** UUID of the Custom Product Page, or null when the default product page is used. */
              productPageId?: string | null;
              [key: string]: unknown;
            } | null;
            /** Resolved destination URL that Apple Ads computes from destinationType and parameters. */
            url?: string | null;
            [key: string]: unknown;
          } | null;
          /** System validation state of the ad creative. */
          systemStatus?: "VALID" | "INVALID" | "PENDING" | null;
          /** Reasons behind the current system status. */
          systemStatusReasons?: Array<string> | null;
          /** Where the ad creative is allowed to serve. Apple Ads leaves it empty or null while systemStatus is PENDING. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          eligibility?: {
            /** Overall eligibility status. */
            status?: "ELIGIBLE" | "INELIGIBLE" | null;
            /** Placement and market combinations where the ad creative can serve. */
            allowedGroups?: Array<{
              /** Supply placements covered by this group. */
              supplyPlacement?: Array<string> | null;
              /** Countries or regions covered by this group. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            /** Placement and market combinations where the ad creative cannot serve. */
            blockedGroups?: Array<{
              /** Supply placements covered by this group. */
              supplyPlacement?: Array<string> | null;
              /** Countries or regions covered by this group. */
              countryOrRegion?: Array<string> | null;
              /** Why the ad creative is blocked in this group, for example APP_NOT_ELIGIBLE. */
              reason?: string | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          } | null;
          /** When the ad creative was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the ad creative was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the ad creative has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Change the bid or the status of one keyword. Apple Ads accepts nothing else on an update, and returns 404 for a keyword that has already been deleted. */
    "apple_ads.update_keyword": {
      input: {
        /** Identifier of the keyword to update. */
        keywordId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Per-keyword bid that overrides the ad group's bid strategy bid. Maximize Conversions campaigns do not use it. */
        bid?: {
          /**
           * Monetary amount as a decimal string without leading zeros, for example "10.00".
           * @minLength 1
           */
          amount: string;
          /**
           * ISO 4217 currency code. It must match the currency of the ad account.
           * @minLength 1
           */
          currency?: string;
        };
        /** Whether the keyword is eligible to serve. A paused keyword stays in the ad group but does not enter auctions. */
        status?: "ENABLED" | "PAUSED";
      };
      output: {
        /** A keyword, the targeting unit that makes an ad group eligible for the auction when a user search matches it. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        keyword: {
          /** System-assigned identifier for the keyword. */
          id: number;
          /** Ad account the keyword belongs to. */
          adAccountId?: number | null;
          /** Campaign that owns the keyword's ad group. Informational only; keywords are never attached to a campaign directly. */
          campaignId?: number | null;
          /** Ad group the keyword belongs to. */
          adGroupId?: number | null;
          /** Advertiser-given keyword text. */
          text?: string | null;
          /** How the keyword matches user search queries. EXACT and BROAD apply to App Store campaigns using the Search results placement; PHRASE and CATEGORY apply to Apple Maps campaigns. */
          matchType?: "EXACT" | "BROAD" | "PHRASE" | "CATEGORY" | null;
          /** Per-keyword bid override, or null when the keyword follows the ad group's bid strategy. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          bid?: {
            /** Monetary amount as a decimal string. */
            amount?: string | null;
            /** ISO 4217 currency code. */
            currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Advertiser intent for the keyword to serve. */
          status?: "ENABLED" | "PAUSED" | null;
          /** Rolled-up delivery state combining the keyword, its ad group and its campaign. */
          displayStatus?: "RUNNING" | "PAUSED" | "DELETED" | "AD_GROUP_ON_HOLD" | "CAMPAIGN_ON_HOLD" | null;
          /** When the keyword was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the keyword was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the keyword has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Change the mutable fields of one location group. Only the fields you pass are changed, but locationIds and rules replace the stored array entirely rather than merging into it. Changing rules sends a DYNAMIC group back to PENDING while Apple Ads re-evaluates membership. A group whose systemStatus is INVALID or PENDING cannot be updated. */
    "apple_ads.update_location_group": {
      input: {
        /** Identifier of the location group to update. */
        locationGroupId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /**
         * New display name for the location group.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /** Type of location grouping. Apple Ads accepts it in the update body but it is fixed at creation: switch a group between types by deleting it and creating a new one. */
        groupType?: "STATIC" | "DYNAMIC";
        /**
         * Membership rules for a DYNAMIC group, evaluated against the brand's full location catalog. Sending this array replaces every stored rule.
         * @maxItems 25
         */
        rules?: Array<{
          /**
           * Location field the rule matches on, for example adminArea or locality.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /**
           * Comparison operator applied to the field, for example IN.
           * @minLength 1
           * @pattern \S
           */
          operator: string;
          /** Value the field is compared against; pass an array for a multi-value operator such as IN. An adminArea value must be the full English name, for example Illinois rather than IL, and a locality value must use the pipe-delimited countryOrRegion|adminArea|locality form, for example US|New York|Brooklyn. Apple Ads accepts an abbreviated value without an error and silently matches no locations. */
          value: unknown;
        }>;
        /** Location identifiers that make up a STATIC group. Sending this array replaces the stored list, so add a location by resending the full list with the new identifier appended. */
        locationIds?: Array<number | string>;
        /**
         * New description of the location group.
         * @minLength 1
         * @pattern \S
         */
        description?: string;
      };
      output: {
        /** A named set of business locations scoped to one brand. An ad group references the group to restrict which of the advertiser's locations its Apple Maps ads promote; it does not filter by the ad viewer's location. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        locationGroup: {
          /** System-assigned identifier for the location group. */
          id: string;
          /** Display name of the group. */
          name?: string | null;
          /** Brand the group belongs to. */
          brandId?: string | null;
          /** Ad account that owns the group. */
          adAccountId?: string | null;
          /** How membership is defined. */
          groupType?: "STATIC" | "DYNAMIC" | null;
          /** System-managed state. A group is unusable for targeting until it reaches VALID, and a group in INVALID or PENDING state cannot be updated or deleted. */
          systemStatus?: "VALID" | "INVALID" | "PENDING" | "DELETED" | null;
          /** RSQL query Apple Ads generated from the rules of a DYNAMIC group. */
          query?: string | null;
          /** Membership rules evaluated against the brand's location catalog for a DYNAMIC group. */
          rules?: Array<{
            /** Location field the rule matches on. */
            field?: string | null;
            /** Comparison operator applied to the field. */
            operator?: string | null;
            /** Value the field is compared against. */
            value?: unknown;
            [key: string]: unknown;
          }> | null;
          /** Location identifiers explicitly included in a STATIC group. */
          locationIds?: Array<string> | null;
          /** Whether this is the system-created All Locations group for the brand. */
          isAllLocationsGroup?: boolean | null;
          /** Advertiser-given description of the group. */
          description?: string | null;
          /** Number of locations currently in the group. It stays 0 for a DYNAMIC group until rule evaluation finishes. */
          groupTotal?: number | null;
          /** Ad serving eligibility for the group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
          eligibility?: {
            /** System-managed eligibility status. */
            status?: "ELIGIBLE" | "INELIGIBLE" | "LIMITED" | "PENDING" | "UNDEFINED" | null;
            /** Placement and market combinations that cannot serve. */
            blockedGroups?: Array<{
              /** Supply placements this group covers. */
              supplyPlacement?: Array<string> | null;
              /** Markets this group covers. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            /** Placement and market combinations that can serve. */
            allowedGroups?: Array<{
              /** Supply placements this group covers. */
              supplyPlacement?: Array<string> | null;
              /** Markets this group covers. */
              countryOrRegion?: Array<string> | null;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          } | null;
          /** When the group was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the group was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the group has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Pause or resume one negative keyword. status is the only field Apple Ads allows changing: PAUSED lets the excluded term reach the auction again, ENABLED restores the exclusion. Apple Ads answers a request for a deleted negative keyword with 404. */
    "apple_ads.update_negative_keyword": {
      input: {
        /** Identifier of the negative keyword to update. */
        negativeKeywordId: number | string;
        /** Ad account to scope this request to, sent as the X-AP-Context header. Defaults to the Ad Account ID configured on the connection. */
        adAccountId?: number | string;
        /** Pause or resume the exclusion. */
        status?: "ENABLED" | "PAUSED";
      };
      output: {
        /** A negative keyword: a search term exclusion scoped either to a whole campaign or to a single ad group. An attribute Apple Ads has no value for is returned as null, and older records may leave it out entirely. */
        negativeKeyword: {
          /** System-assigned identifier for the negative keyword. */
          id: number;
          /** Ad account the negative keyword belongs to. */
          adAccountId?: number | null;
          /** Campaign the negative keyword belongs to. */
          campaignId?: number | null;
          /** Ad group the negative keyword is scoped to. Campaign-level exclusions have no ad group: Apple Ads returns null for them, or leaves the field out entirely. */
          adGroupId?: number | null;
          /** The advertiser-given term to exclude. */
          text?: string | null;
          /** How the excluded term is matched against user searches. */
          matchType?: "EXACT" | "BROAD" | "PHRASE" | "CATEGORY" | null;
          /** Whether the exclusion is active or paused. */
          status?: "ENABLED" | "PAUSED" | null;
          /** When the negative keyword was created. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          creationTime?: string | null;
          /** When the negative keyword was last modified. Format: yyyy-MM-dd'T'HH:mm:ss.SSS in UTC without a timezone offset. */
          modificationTime?: string | null;
          /** Whether the negative keyword has been soft-deleted. */
          deleted?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
