import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the Social Fetch user associated with the connected API key. */
    "social_fetch.get_account": {
      input: Record<string, never>;
      output: {
        /** The authenticated Social Fetch user. */
        user: {
          /** The internal Social Fetch user identifier. */
          id: string;
          /** The user's display name when available. */
          name: string | null;
          /** The user's email address when available. */
          email: string | null;
        };
        /** Metadata returned with a Social Fetch API response. */
        meta: {
          /**
           * The request identifier used for support and tracing.
           * @minLength 1
           */
          requestId: string;
          /**
           * The number of Social Fetch credits charged for the request.
           * @minimum 0
           */
          creditsCharged: number;
          /** The Social Fetch API version that served the request. */
          version: "v1";
          /** Whether Social Fetch served the response from its shared cache. */
          cached?: boolean;
        };
      };
    };
    /** Get the remaining Social Fetch credit balance and billing state. */
    "social_fetch.get_balance": {
      input: Record<string, never>;
      output: {
        /**
         * The total spendable Social Fetch credit balance.
         * @minimum 0
         */
        balance: number;
        /**
         * The total pay-as-you-go credit bucket, including grace credits.
         * @minimum 0
         */
        payg: number;
        /**
         * The pay-as-you-go credits currently available to spend.
         * @minimum 0
         */
        paygSpendable: number;
        /**
         * The grace credits used during the current refill episode.
         * @minimum 0
         */
        graceDebtCredits: number;
        /** The automatic refill state when auto-refill is enabled. */
        refillState: "healthy" | "grace" | "exhausted" | null;
        /** The current billing alert state. */
        billingAlert: "none" | "payment_action_required" | "suspended";
        /**
         * The subscription credits remaining in the current period.
         * @minimum 0
         */
        subscriptionIncludedRemaining: number;
        /**
         * The subscription credits granted for the current period.
         * @minimum 0
         */
        subscriptionIncludedTotal: number;
        /** The active subscription summary for subscribed accounts. */
        subscription: {
          /** The subscription tier. */
          tier: string;
          /** The subscription status. */
          status: string;
          /** The ISO 8601 end time of the current subscription period. */
          periodEnd: string;
        } | null;
        /** The subscription collection state. */
        collectionStatus: "current" | "base_past_due" | "suspended";
        /** Metadata returned with a Social Fetch API response. */
        meta: {
          /**
           * The request identifier used for support and tracing.
           * @minLength 1
           */
          requestId: string;
          /**
           * The number of Social Fetch credits charged for the request.
           * @minimum 0
           */
          creditsCharged: number;
          /** The Social Fetch API version that served the request. */
          version: "v1";
          /** Whether Social Fetch served the response from its shared cache. */
          cached?: boolean;
        };
      };
    };
    /** Get a public profile or channel by handle from a supported social platform. */
    "social_fetch.get_profile": {
      input: {
        /** The social platform containing the public profile. */
        platform: "tiktok" | "instagram" | "twitter" | "threads" | "bluesky" | "telegram" | "github" | "soundcloud" | "linktree";
        /**
         * The public profile handle, with or without a leading at sign.
         * @minLength 1
         * @maxLength 253
         * @pattern \S
         */
        handle: string;
      };
      output: {
        /** The outcome reported by Social Fetch for the lookup. */
        lookupStatus: "found" | "private" | "restricted" | "not_found";
        /** The platform-specific profile or channel returned by Social Fetch. */
        profile: Record<string, unknown> | null;
        /** The platform-specific profile metrics returned by Social Fetch. */
        metrics: Record<string, unknown> | null;
        /** The complete platform-specific data object returned by Social Fetch. */
        raw: Record<string, unknown>;
        /** Metadata returned with a Social Fetch API response. */
        meta: {
          /**
           * The request identifier used for support and tracing.
           * @minLength 1
           */
          requestId: string;
          /**
           * The number of Social Fetch credits charged for the request.
           * @minimum 0
           */
          creditsCharged: number;
          /** The Social Fetch API version that served the request. */
          version: "v1";
          /** Whether Social Fetch served the response from its shared cache. */
          cached?: boolean;
        };
      };
    };
  }
}
