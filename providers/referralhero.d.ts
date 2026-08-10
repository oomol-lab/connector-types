import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a subscriber to a ReferralHero campaign using its configured identifier. */
    "referralhero.add_subscriber": {
      input: {
        /**
         * The ReferralHero campaign UUID, such as MF078d000987.
         * @minLength 1
         */
        campaignId: string;
        /**
         * The subscriber email address when email is the campaign identifier.
         * @format email
         */
        email?: string;
        /**
         * The subscriber phone number when phone is the campaign identifier.
         * @minLength 1
         */
        phoneNumber?: string;
        /**
         * The subscriber wallet address when a crypto wallet is the campaign identifier.
         * @minLength 1
         */
        cryptoWalletAddress?: string;
        /**
         * The subscriber identifier when the campaign uses a custom identifier.
         * @minLength 1
         */
        otherIdentifierValue?: string;
        /**
         * The subscriber name.
         * @minLength 1
         */
        name?: string;
        /** The first campaign-specific extra field value. */
        extraField?: string;
        /** The second campaign-specific extra field value. */
        extraField2?: string;
        /** The third campaign-specific extra field value. */
        extraField3?: string;
        /** The fourth campaign-specific extra field value. */
        extraField4?: string;
        /** The subscriber point total for contest campaigns. */
        points?: number;
        /**
         * The Stripe customer ID associated with the subscriber.
         * @minLength 1
         */
        stripeCustomerId?: string;
        /** Tags to assign to the subscriber. */
        tags?: Array<string>;
        /** The subscriber street address. */
        address?: string;
        /** The subscriber city. */
        city?: string;
        /** The subscriber country. */
        country?: string;
        /** The initial referral conversion status. */
        status?: "custom_event_pending";
        /**
         * The external transaction ID associated with the referral.
         * @minLength 1
         */
        transactionId?: string;
        /** The conversion category used for reporting. */
        conversionCategory?: string;
        /** The monetary value of the referral conversion. */
        conversionValue?: number;
        /** The device name used for campaign analytics. */
        device?: string;
        /** The acquisition source used for campaign analytics. */
        source?: string;
        /** Whether ReferralHero should send a confirmation message. */
        doubleOptin?: boolean;
        /**
         * The referrer's referral code or unique identifier.
         * @minLength 1
         */
        referrer?: string;
        /**
         * The URL ReferralHero should use to generate the referral link.
         * @format uri
         */
        domain?: string;
        /** The advocate name associated with the subscriber. */
        advocateName?: string;
      };
      output: {
        /** The normalized data object returned by ReferralHero. */
        data: Record<string, unknown>;
        /** The remaining hourly API calls, or null when ReferralHero omits it. */
        callsLeft: number | null;
        /** The ReferralHero response timestamp, or null when absent. */
        timestamp: number | null;
      };
    };
    /** Confirm the third conversion event for a verified ReferralHero subscriber. */
    "referralhero.confirm_referral": {
      input: {
        /**
         * The ReferralHero campaign UUID, such as MF078d000987.
         * @minLength 1
         */
        campaignId: string;
        /**
         * The unique ReferralHero subscriber ID.
         * @minLength 1
         */
        subscriberId: string;
      };
      output: {
        /** The normalized data object returned by ReferralHero. */
        data: Record<string, unknown>;
        /** The remaining hourly API calls, or null when ReferralHero omits it. */
        callsLeft: number | null;
        /** The ReferralHero response timestamp, or null when absent. */
        timestamp: number | null;
      };
    };
    /** Create a ReferralHero referral campaign with a name and default referral URL. */
    "referralhero.create_list": {
      input: {
        /**
         * The campaign name.
         * @minLength 1
         */
        name: string;
        /**
         * The default referral URL for the campaign.
         * @format uri
         */
        website: string;
      };
      output: {
        /** The normalized data object returned by ReferralHero. */
        data: Record<string, unknown>;
        /** The remaining hourly API calls, or null when ReferralHero omits it. */
        callsLeft: number | null;
        /** The ReferralHero response timestamp, or null when absent. */
        timestamp: number | null;
      };
    };
    /** Delete one subscriber from a ReferralHero campaign. */
    "referralhero.delete_subscriber": {
      input: {
        /**
         * The ReferralHero campaign UUID, such as MF078d000987.
         * @minLength 1
         */
        campaignId: string;
        /**
         * The unique ReferralHero subscriber ID.
         * @minLength 1
         */
        subscriberId: string;
      };
      output: {
        /** The normalized data object returned by ReferralHero. */
        data: Record<string, unknown>;
        /** The remaining hourly API calls, or null when ReferralHero omits it. */
        callsLeft: number | null;
        /** The ReferralHero response timestamp, or null when absent. */
        timestamp: number | null;
      };
    };
    /** Get the highest-ranked subscribers in a ReferralHero campaign. */
    "referralhero.get_leaderboard": {
      input: {
        /**
         * The ReferralHero campaign UUID, such as MF078d000987.
         * @minLength 1
         */
        campaignId: string;
        /**
         * The number of subscribers to return, from 10 through 100.
         * @minimum 10
         * @maximum 100
         */
        count: number;
      };
      output: {
        /** The ranked subscribers. */
        ranking: Array<Record<string, unknown>>;
        /** The remaining hourly API calls, or null when ReferralHero omits it. */
        callsLeft: number | null;
        /** The ReferralHero response timestamp, or null when absent. */
        timestamp: number | null;
      };
    };
    /** Retrieve one verified ReferralHero subscriber by ID. */
    "referralhero.get_subscriber": {
      input: {
        /**
         * The ReferralHero campaign UUID, such as MF078d000987.
         * @minLength 1
         */
        campaignId: string;
        /**
         * The unique ReferralHero subscriber ID.
         * @minLength 1
         */
        subscriberId: string;
      };
      output: {
        /** The normalized data object returned by ReferralHero. */
        data: Record<string, unknown>;
        /** The remaining hourly API calls, or null when ReferralHero omits it. */
        callsLeft: number | null;
        /** The ReferralHero response timestamp, or null when absent. */
        timestamp: number | null;
      };
    };
    /** List active ReferralHero referral campaigns in the connected account. */
    "referralhero.list_lists": {
      input: {
        /**
         * The page number to retrieve. ReferralHero starts pagination at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The active campaigns on this page. */
        lists: Array<Record<string, unknown>>;
        /** ReferralHero pagination metadata. */
        pagination: {
          /** The total number of result pages. */
          total_pages?: number;
          /** The current result page. */
          current_page?: number;
          /** The maximum number of objects returned per page. */
          per_page?: number;
          /** The total number of matching objects. */
          total_objects?: number;
          [key: string]: unknown;
        };
        /** The remaining hourly API calls, or null when ReferralHero omits it. */
        callsLeft: number | null;
        /** The ReferralHero response timestamp, or null when absent. */
        timestamp: number | null;
      };
    };
    /** List the rewards configured for a ReferralHero campaign. */
    "referralhero.list_rewards": {
      input: {
        /**
         * The ReferralHero campaign UUID, such as MF078d000987.
         * @minLength 1
         */
        campaignId: string;
      };
      output: {
        /** The configured campaign rewards. */
        rewards: Array<Record<string, unknown>>;
        /** The remaining hourly API calls, or null when ReferralHero omits it. */
        callsLeft: number | null;
        /** The ReferralHero response timestamp, or null when absent. */
        timestamp: number | null;
      };
    };
    /** List subscribers in a ReferralHero campaign with pagination and optional sorting. */
    "referralhero.list_subscribers": {
      input: {
        /**
         * The ReferralHero campaign UUID, such as MF078d000987.
         * @minLength 1
         */
        campaignId: string;
        /**
         * The page number to retrieve. ReferralHero starts pagination at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** The ordering applied to subscribers. */
        sortBy?: "registration_desc" | "registration_asc" | "email_asc" | "email_desc" | "name_asc" | "name_desc" | "position_asc" | "position_desc" | "people_referred_asc" | "people_referred_desc" | "points_asc" | "points_desc";
        /** Filter by the first extra field. */
        extraField?: string;
        /** Filter by the second extra field. */
        extraField2?: string;
        /** Filter by the option field. */
        optionField?: string;
        /** Filter by Stripe customer ID. */
        stripeCustomerId?: string;
      };
      output: {
        /** The subscribers on this page. */
        subscribers: Array<Record<string, unknown>>;
        /** ReferralHero pagination metadata. */
        pagination: {
          /** The total number of result pages. */
          total_pages?: number;
          /** The current result page. */
          current_page?: number;
          /** The maximum number of objects returned per page. */
          per_page?: number;
          /** The total number of matching objects. */
          total_objects?: number;
          [key: string]: unknown;
        };
        /** The remaining hourly API calls, or null when ReferralHero omits it. */
        callsLeft: number | null;
        /** The ReferralHero response timestamp, or null when absent. */
        timestamp: number | null;
      };
    };
    /** Track the second conversion event for a two-step or three-step referral campaign. */
    "referralhero.track_conversion": {
      input: {
        /**
         * The ReferralHero campaign UUID, such as MF078d000987.
         * @minLength 1
         */
        campaignId: string;
        /**
         * The subscriber email address when email is the campaign identifier.
         * @format email
         */
        email?: string;
        /**
         * The subscriber phone number when phone is the campaign identifier.
         * @minLength 1
         */
        phoneNumber?: string;
        /**
         * The subscriber wallet address when a crypto wallet is the campaign identifier.
         * @minLength 1
         */
        cryptoWalletAddress?: string;
        /**
         * The subscriber identifier when the campaign uses a custom identifier.
         * @minLength 1
         */
        otherIdentifierValue?: string;
        /**
         * The referrer's unique campaign identifier.
         * @minLength 1
         */
        referrer?: string;
        /** The referral conversion value. */
        conversionValue?: number;
        /** The Stripe customer ID for the conversion. */
        stripeCustomerId?: string;
        /** The external transaction ID for the conversion. */
        transactionId?: string;
        /** The product ID used for product-specific rewards. */
        productId?: string;
        /** Tags assigned during conversion tracking. */
        tags?: Array<string>;
      };
      output: {
        /** The normalized data object returned by ReferralHero. */
        data: Record<string, unknown>;
        /** The remaining hourly API calls, or null when ReferralHero omits it. */
        callsLeft: number | null;
        /** The ReferralHero response timestamp, or null when absent. */
        timestamp: number | null;
      };
    };
    /** Update fields on one verified ReferralHero subscriber. */
    "referralhero.update_subscriber": {
      input: {
        /**
         * The ReferralHero campaign UUID, such as MF078d000987.
         * @minLength 1
         */
        campaignId: string;
        /**
         * The unique ReferralHero subscriber ID.
         * @minLength 1
         */
        subscriberId: string;
        /**
         * The subscriber email address when email is the campaign identifier.
         * @format email
         */
        email?: string;
        /**
         * The subscriber phone number when phone is the campaign identifier.
         * @minLength 1
         */
        phoneNumber?: string;
        /**
         * The subscriber wallet address when a crypto wallet is the campaign identifier.
         * @minLength 1
         */
        cryptoWalletAddress?: string;
        /**
         * The subscriber identifier when the campaign uses a custom identifier.
         * @minLength 1
         */
        otherIdentifierValue?: string;
        /**
         * The subscriber name.
         * @minLength 1
         */
        name?: string;
        /** The first campaign-specific extra field value. */
        extraField?: string;
        /** The second campaign-specific extra field value. */
        extraField2?: string;
        /** The third campaign-specific extra field value. */
        extraField3?: string;
        /** The fourth campaign-specific extra field value. */
        extraField4?: string;
        /** The subscriber point total for contest campaigns. */
        points?: number;
        /**
         * The Stripe customer ID associated with the subscriber.
         * @minLength 1
         */
        stripeCustomerId?: string;
        /** Tags to assign to the subscriber. */
        tags?: Array<string>;
        /** The subscriber street address. */
        address?: string;
        /** The subscriber city. */
        city?: string;
        /** The subscriber country. */
        country?: string;
      };
      output: {
        /** The normalized data object returned by ReferralHero. */
        data: Record<string, unknown>;
        /** The remaining hourly API calls, or null when ReferralHero omits it. */
        callsLeft: number | null;
        /** The ReferralHero response timestamp, or null when absent. */
        timestamp: number | null;
      };
    };
  }
}
