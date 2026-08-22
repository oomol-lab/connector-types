import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add one or more company domains to the connected FundzWatch account's watchlist. Requires a FundzWatch API key. */
    "fundzwatch.add_to_watchlist": {
      input: {
        /**
         * The company domains to track, such as stripe.com or github.com.
         * @minItems 1
         */
        domains: Array<string>;
      };
      output: {
        /** The number of companies added to the watchlist. */
        added: number;
        /** The number of supplied companies that were already tracked. */
        alreadyTracked: number;
        /** The number of supplied companies FundzWatch could not resolve. */
        notFound: number;
        /** The total number of companies tracked after the request. */
        totalTracked: number;
        /** Fundz attribution and licensing metadata. */
        attribution?: {
          /** The upstream data source name. */
          source?: string;
          /**
           * The upstream attribution or pricing URL.
           * @format uri
           */
          url?: string;
          /** The upstream attribution and licensing notice. */
          notice?: string;
          /** The upstream licensing contact when supplied. */
          contact?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get recently funded companies with benefit-plan filings, renewal timing, participant counts, and incumbent carrier evidence. No API key is required; anonymous results may be a limited preview. */
    "fundzwatch.get_benefit_plans": {
      input: {
        /**
         * Company, lender, or broker name to search for.
         * @minLength 1
         * @pattern \S
         */
        query?: string;
        /**
         * Two-letter US state code such as CA or CO.
         * @minLength 2
         * @maxLength 2
         */
        state?: string;
      };
      output: {
        /** The score-ranked company records returned by the public FundzWatch feed. */
        companies: Array<Record<string, unknown>>;
        /** Summary statistics for a FundzWatch scored cohort. */
        summary: {
          /** The total number of companies in the cohort. */
          total: number;
          /** The number of companies newly added during the current week. */
          newThisWeek: number;
          /**
           * The date on which FundzWatch last refreshed the cohort.
           * @format date
           */
          lastRefreshedOn: string;
          [key: string]: unknown;
        };
        /** Pagination, access-tier, and attribution metadata. */
        meta: {
          /** The current one-based page number. */
          currentPage?: number;
          /** The next page number, or null when no next page is available. */
          nextPage?: number | null;
          /** The number of records represented by this response. */
          totalCount?: number;
          /** Whether the response is limited to a free preview. */
          freeTierLimited?: boolean;
          /** Whether Fundz marks the complete feed as Strategic-only. */
          strategicRequired?: boolean;
          /** The geographic or source coverage described by FundzWatch. */
          coverage?: string;
          [key: string]: unknown;
        };
        /** Fundz attribution and licensing metadata. */
        attribution?: {
          /** The upstream data source name. */
          source?: string;
          /**
           * The upstream attribution or pricing URL.
           * @format uri
           */
          url?: string;
          /** The upstream attribution and licensing notice. */
          notice?: string;
          /** The upstream licensing contact when supplied. */
          contact?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Search the FundzWatch benefits broker-of-record directory derived from Form 5500 Schedule A filings. No API key is required; Fundz attribution and licensing metadata is returned with the results. */
    "fundzwatch.get_brokers": {
      input: {
        /**
         * Company, lender, or broker name to search for.
         * @minLength 1
         * @pattern \S
         */
        query?: string;
        /**
         * Two-letter US state code such as CA or CO.
         * @minLength 2
         * @maxLength 2
         */
        state?: string;
        /**
         * One-based results page. FundzWatch returns 50 rows per page.
         * @minimum 1
         * @default 1
         */
        page?: number;
      };
      output: {
        /** The broker directory entries returned by FundzWatch. */
        brokers: Array<Record<string, unknown>>;
        /** Pagination, access-tier, and attribution metadata. */
        meta: {
          /** The current one-based page number. */
          currentPage?: number;
          /** The next page number, or null when no next page is available. */
          nextPage?: number | null;
          /** The number of records represented by this response. */
          totalCount?: number;
          /** Whether the response is limited to a free preview. */
          freeTierLimited?: boolean;
          /** Whether Fundz marks the complete feed as Strategic-only. */
          strategicRequired?: boolean;
          /** The geographic or source coverage described by FundzWatch. */
          coverage?: string;
          [key: string]: unknown;
        };
        /** Fundz attribution and licensing metadata. */
        attribution?: {
          /** The upstream data source name. */
          source?: string;
          /**
           * The upstream attribution or pricing URL.
           * @format uri
           */
          url?: string;
          /** The upstream attribution and licensing notice. */
          notice?: string;
          /** The upstream licensing contact when supplied. */
          contact?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get recent FundzWatch business events, including funding rounds, acquisitions, executive hires, contracts, and product launches. Requires a FundzWatch API key. */
    "fundzwatch.get_events": {
      input: {
        /**
         * The business event types to include.
         * @minItems 1
         */
        types?: Array<"funding" | "acquisition" | "hiring" | "contract" | "product_launch">;
        /**
         * The number of days to look back.
         * @minimum 1
         * @maximum 90
         * @default 7
         */
        days?: number;
        /**
         * The maximum number of events to return.
         * @minimum 1
         * @maximum 200
         * @default 50
         */
        limit?: number;
        /**
         * The number of matching events to skip before returning results.
         * @minimum 0
         * @default 0
         */
        offset?: number;
        /**
         * The industries to include. Values cannot contain commas because FundzWatch uses commas as separators.
         * @minItems 1
         */
        industries?: Array<string>;
        /**
         * The locations to include. Values cannot contain commas because FundzWatch uses commas as separators.
         * @minItems 1
         */
        locations?: Array<string>;
      };
      output: {
        /** The total number of events matching the request. */
        total: number;
        /** The business event records returned by FundzWatch. */
        events: Array<Record<string, unknown>>;
        /** Fundz attribution and licensing metadata. */
        attribution?: {
          /** The upstream data source name. */
          source?: string;
          /**
           * The upstream attribution or pricing URL.
           * @format uri
           */
          url?: string;
          /** The upstream attribution and licensing notice. */
          notice?: string;
          /** The upstream licensing contact when supplied. */
          contact?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get score-ranked companies with a verified recent funding round and live hiring evidence. No API key is required; anonymous results may be a limited preview. */
    "fundzwatch.get_funded_and_hiring": {
      input: {
        /**
         * Company, lender, or broker name to search for.
         * @minLength 1
         * @pattern \S
         */
        query?: string;
        /**
         * Two-letter US state code such as CA or CO.
         * @minLength 2
         * @maxLength 2
         */
        state?: string;
      };
      output: {
        /** The score-ranked company records returned by the public FundzWatch feed. */
        companies: Array<Record<string, unknown>>;
        /** Summary statistics for a FundzWatch scored cohort. */
        summary: {
          /** The total number of companies in the cohort. */
          total: number;
          /** The number of companies newly added during the current week. */
          newThisWeek: number;
          /**
           * The date on which FundzWatch last refreshed the cohort.
           * @format date
           */
          lastRefreshedOn: string;
          [key: string]: unknown;
        };
        /** Pagination, access-tier, and attribution metadata. */
        meta: {
          /** The current one-based page number. */
          currentPage?: number;
          /** The next page number, or null when no next page is available. */
          nextPage?: number | null;
          /** The number of records represented by this response. */
          totalCount?: number;
          /** Whether the response is limited to a free preview. */
          freeTierLimited?: boolean;
          /** Whether Fundz marks the complete feed as Strategic-only. */
          strategicRequired?: boolean;
          /** The geographic or source coverage described by FundzWatch. */
          coverage?: string;
          [key: string]: unknown;
        };
        /** Fundz attribution and licensing metadata. */
        attribution?: {
          /** The upstream data source name. */
          source?: string;
          /**
           * The upstream attribution or pricing URL.
           * @format uri
           */
          url?: string;
          /** The upstream attribution and licensing notice. */
          notice?: string;
          /** The upstream licensing contact when supplied. */
          contact?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Search the FundzWatch UCC secured-party directory ranked by filing activity and lapsing-soon exposure. No API key is required; Fundz attribution and licensing metadata is returned with the results. */
    "fundzwatch.get_lenders": {
      input: {
        /**
         * Company, lender, or broker name to search for.
         * @minLength 1
         * @pattern \S
         */
        query?: string;
        /**
         * One-based results page. FundzWatch returns 50 rows per page.
         * @minimum 1
         * @default 1
         */
        page?: number;
      };
      output: {
        /** The lender directory entries returned by FundzWatch. */
        lenders: Array<Record<string, unknown>>;
        /** Pagination, access-tier, and attribution metadata. */
        meta: {
          /** The current one-based page number. */
          currentPage?: number;
          /** The next page number, or null when no next page is available. */
          nextPage?: number | null;
          /** The number of records represented by this response. */
          totalCount?: number;
          /** Whether the response is limited to a free preview. */
          freeTierLimited?: boolean;
          /** Whether Fundz marks the complete feed as Strategic-only. */
          strategicRequired?: boolean;
          /** The geographic or source coverage described by FundzWatch. */
          coverage?: string;
          [key: string]: unknown;
        };
        /** Fundz attribution and licensing metadata. */
        attribution?: {
          /** The upstream data source name. */
          source?: string;
          /**
           * The upstream attribution or pricing URL.
           * @format uri
           */
          url?: string;
          /** The upstream attribution and licensing notice. */
          notice?: string;
          /** The upstream licensing contact when supplied. */
          contact?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the current FundzWatch AI-generated strategic intelligence brief and its referenced companies. Requires a FundzWatch API key. */
    "fundzwatch.get_market_brief": {
      input: Record<string, never>;
      output: {
        /** The provider-defined market brief, including its date, narrative, and referenced companies. */
        brief: Record<string, unknown>;
        /** Fundz attribution and licensing metadata. */
        attribution?: {
          /** The upstream data source name. */
          source?: string;
          /**
           * The upstream attribution or pricing URL.
           * @format uri
           */
          url?: string;
          /** The upstream attribution and licensing notice. */
          notice?: string;
          /** The upstream licensing contact when supplied. */
          contact?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the FundzWatch market activity overview with recent funding, acquisition, executive-move, contract, and product-launch aggregates. Requires a FundzWatch API key. */
    "fundzwatch.get_market_pulse": {
      input: Record<string, never>;
      output: {
        /** The provider-defined market pulse, including generated time, aggregates, and notable rounds. */
        pulse: Record<string, unknown>;
        /** Fundz attribution and licensing metadata. */
        attribution?: {
          /** The upstream data source name. */
          source?: string;
          /**
           * The upstream attribution or pricing URL.
           * @format uri
           */
          url?: string;
          /** The upstream attribution and licensing notice. */
          notice?: string;
          /** The upstream licensing contact when supplied. */
          contact?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get companies combining a recent executive move with recent funding, highlighting wealth and benefits money-in-motion moments. No API key is required; anonymous results may be a limited preview. */
    "fundzwatch.get_money_in_motion": {
      input: {
        /**
         * Company, lender, or broker name to search for.
         * @minLength 1
         * @pattern \S
         */
        query?: string;
        /**
         * Two-letter US state code such as CA or CO.
         * @minLength 2
         * @maxLength 2
         */
        state?: string;
      };
      output: {
        /** The score-ranked company records returned by the public FundzWatch feed. */
        companies: Array<Record<string, unknown>>;
        /** Summary statistics for a FundzWatch scored cohort. */
        summary: {
          /** The total number of companies in the cohort. */
          total: number;
          /** The number of companies newly added during the current week. */
          newThisWeek: number;
          /**
           * The date on which FundzWatch last refreshed the cohort.
           * @format date
           */
          lastRefreshedOn: string;
          [key: string]: unknown;
        };
        /** Pagination, access-tier, and attribution metadata. */
        meta: {
          /** The current one-based page number. */
          currentPage?: number;
          /** The next page number, or null when no next page is available. */
          nextPage?: number | null;
          /** The number of records represented by this response. */
          totalCount?: number;
          /** Whether the response is limited to a free preview. */
          freeTierLimited?: boolean;
          /** Whether Fundz marks the complete feed as Strategic-only. */
          strategicRequired?: boolean;
          /** The geographic or source coverage described by FundzWatch. */
          coverage?: string;
          [key: string]: unknown;
        };
        /** Fundz attribution and licensing metadata. */
        attribution?: {
          /** The upstream data source name. */
          source?: string;
          /**
           * The upstream attribution or pricing URL.
           * @format uri
           */
          url?: string;
          /** The upstream attribution and licensing notice. */
          notice?: string;
          /** The upstream licensing contact when supplied. */
          contact?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get companies whose active UCC-1 liens approach their lapse dates, identifying potential refinancing windows. No API key is required; anonymous results may be a limited preview. */
    "fundzwatch.get_renewal_radar": {
      input: {
        /**
         * Company, lender, or broker name to search for.
         * @minLength 1
         * @pattern \S
         */
        query?: string;
        /**
         * Two-letter US state code such as CA or CO.
         * @minLength 2
         * @maxLength 2
         */
        state?: string;
      };
      output: {
        /** The score-ranked company records returned by the public FundzWatch feed. */
        companies: Array<Record<string, unknown>>;
        /** Summary statistics for a FundzWatch scored cohort. */
        summary: {
          /** The total number of companies in the cohort. */
          total: number;
          /** The number of companies newly added during the current week. */
          newThisWeek: number;
          /**
           * The date on which FundzWatch last refreshed the cohort.
           * @format date
           */
          lastRefreshedOn: string;
          [key: string]: unknown;
        };
        /** Pagination, access-tier, and attribution metadata. */
        meta: {
          /** The current one-based page number. */
          currentPage?: number;
          /** The next page number, or null when no next page is available. */
          nextPage?: number | null;
          /** The number of records represented by this response. */
          totalCount?: number;
          /** Whether the response is limited to a free preview. */
          freeTierLimited?: boolean;
          /** Whether Fundz marks the complete feed as Strategic-only. */
          strategicRequired?: boolean;
          /** The geographic or source coverage described by FundzWatch. */
          coverage?: string;
          [key: string]: unknown;
        };
        /** Fundz attribution and licensing metadata. */
        attribution?: {
          /** The upstream data source name. */
          source?: string;
          /**
           * The upstream attribution or pricing URL.
           * @format uri
           */
          url?: string;
          /** The upstream attribution and licensing notice. */
          notice?: string;
          /** The upstream licensing contact when supplied. */
          contact?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get FundzWatch leads scored against the connected account's ideal customer profile, including buyer intent and outreach guidance. Requires a FundzWatch API key. */
    "fundzwatch.get_scored_leads": {
      input: {
        /**
         * The minimum buyer intent score from 0 through 100.
         * @minimum 0
         * @maximum 100
         * @default 0
         */
        minScore?: number;
        /**
         * The maximum number of scored leads to return.
         * @minimum 1
         * @maximum 50
         * @default 25
         */
        maxResults?: number;
        /**
         * The buying stages to include.
         * @minItems 1
         */
        buyingStages?: Array<"Active Evaluation" | "Decision" | "Research" | "Awareness">;
        /**
         * The industries to include, such as SaaS or HealthTech.
         * @minItems 1
         */
        industries?: Array<string>;
      };
      output: {
        /** The total number of scored signals found for the request. */
        signalsFound: number;
        /** The scored lead records returned by FundzWatch. */
        signals: Array<Record<string, unknown>>;
        /** Fundz attribution and licensing metadata. */
        attribution?: {
          /** The upstream data source name. */
          source?: string;
          /**
           * The upstream attribution or pricing URL.
           * @format uri
           */
          url?: string;
          /** The upstream attribution and licensing notice. */
          notice?: string;
          /** The upstream licensing contact when supplied. */
          contact?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get companies with active secured debt from multiple distinct lenders and recent UCC activity. No API key is required; anonymous results may be a limited preview. */
    "fundzwatch.get_stacked_borrowers": {
      input: {
        /**
         * Company, lender, or broker name to search for.
         * @minLength 1
         * @pattern \S
         */
        query?: string;
        /**
         * Two-letter US state code such as CA or CO.
         * @minLength 2
         * @maxLength 2
         */
        state?: string;
      };
      output: {
        /** The score-ranked company records returned by the public FundzWatch feed. */
        companies: Array<Record<string, unknown>>;
        /** Summary statistics for a FundzWatch scored cohort. */
        summary: {
          /** The total number of companies in the cohort. */
          total: number;
          /** The number of companies newly added during the current week. */
          newThisWeek: number;
          /**
           * The date on which FundzWatch last refreshed the cohort.
           * @format date
           */
          lastRefreshedOn: string;
          [key: string]: unknown;
        };
        /** Pagination, access-tier, and attribution metadata. */
        meta: {
          /** The current one-based page number. */
          currentPage?: number;
          /** The next page number, or null when no next page is available. */
          nextPage?: number | null;
          /** The number of records represented by this response. */
          totalCount?: number;
          /** Whether the response is limited to a free preview. */
          freeTierLimited?: boolean;
          /** Whether Fundz marks the complete feed as Strategic-only. */
          strategicRequired?: boolean;
          /** The geographic or source coverage described by FundzWatch. */
          coverage?: string;
          [key: string]: unknown;
        };
        /** Fundz attribution and licensing metadata. */
        attribution?: {
          /** The upstream data source name. */
          source?: string;
          /**
           * The upstream attribution or pricing URL.
           * @format uri
           */
          url?: string;
          /** The upstream attribution and licensing notice. */
          notice?: string;
          /** The upstream licensing contact when supplied. */
          contact?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the connected FundzWatch API key's current tier, usage counters, and limits. Requires a FundzWatch API key. */
    "fundzwatch.get_usage": {
      input: Record<string, never>;
      output: {
        /** The current FundzWatch API tier. */
        tier: string;
        /** The current usage period reported by FundzWatch. */
        currentPeriod: string;
        /** The number of API calls used in the current period. */
        apiCallsUsed: number;
        /** The number of AI scoring calls used in the current period. */
        aiScoreCallsUsed: number;
        /** FundzWatch usage limits for the current tier. */
        limits: {
          /** The monthly API call limit when supplied. */
          apiCallsMonthly?: number;
          /** The monthly AI scoring call limit when supplied. */
          aiScoreCallsMonthly?: number;
          [key: string]: unknown;
        };
        /** The last API call time, or null when none is available. */
        lastApiCall?: string | null;
        /** Fundz attribution and licensing metadata. */
        attribution?: {
          /** The upstream data source name. */
          source?: string;
          /**
           * The upstream attribution or pricing URL.
           * @format uri
           */
          url?: string;
          /** The upstream attribution and licensing notice. */
          notice?: string;
          /** The upstream licensing contact when supplied. */
          contact?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List the companies tracked by the connected FundzWatch account. Requires a FundzWatch API key. */
    "fundzwatch.get_watchlist": {
      input: Record<string, never>;
      output: {
        /** The companies currently present on the watchlist. */
        companies: Array<Record<string, unknown>>;
        /** The number of companies currently tracked. */
        total: number;
        /** The maximum number of companies allowed by the current tier. */
        limit: number;
        /** Fundz attribution and licensing metadata. */
        attribution?: {
          /** The upstream data source name. */
          source?: string;
          /**
           * The upstream attribution or pricing URL.
           * @format uri
           */
          url?: string;
          /** The upstream attribution and licensing notice. */
          notice?: string;
          /** The upstream licensing contact when supplied. */
          contact?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get recent business events for companies on the connected FundzWatch account's watchlist. Requires a FundzWatch API key. */
    "fundzwatch.get_watchlist_events": {
      input: {
        /**
         * The number of days to look back.
         * @minimum 1
         * @maximum 90
         * @default 7
         */
        days?: number;
        /**
         * The business event types to include.
         * @minItems 1
         */
        types?: Array<"funding" | "acquisition" | "hiring" | "contract" | "product_launch">;
      };
      output: {
        /** The watchlist event records returned by FundzWatch. */
        events: Array<Record<string, unknown>>;
        /** The total number of matching watchlist events. */
        total: number;
        /** The number of tracked companies considered by the request. */
        trackedCompanies: number;
        /** The lookback period represented by the response. */
        periodDays: number;
        /** Fundz attribution and licensing metadata. */
        attribution?: {
          /** The upstream data source name. */
          source?: string;
          /**
           * The upstream attribution or pricing URL.
           * @format uri
           */
          url?: string;
          /** The upstream attribution and licensing notice. */
          notice?: string;
          /** The upstream licensing contact when supplied. */
          contact?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
