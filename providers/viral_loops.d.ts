import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get public information for the campaign associated with this connection. */
    "viral_loops.get_campaign": {
      input: Record<string, never>;
      output: {
        /** Campaign name. */
        campaignName?: string;
        /** Company name. */
        companyName?: string;
        /** Campaign type. */
        type?: string;
        /** Campaign template. */
        template?: string;
        /** Campaign landing page. */
        landingPage?: string;
        /** Campaign configuration. */
        genericConfig?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the lead count and total referral count for the connected campaign. */
    "viral_loops.get_campaign_stats": {
      input: Record<string, never>;
      output: {
        /** Number of campaign leads. */
        leadCount?: number;
        /** Total number of referrals. */
        referralCountTotal?: number;
        [key: string]: unknown;
      };
    };
    /** Get full participant information using the connected campaign's secret API token. */
    "viral_loops.get_participant": {
      input: Record<string, unknown>;
      output: {
        /** Participant email address. */
        email?: string;
        /** Participant first name. */
        firstname?: string;
        /** Participant last name. */
        lastname?: string;
        /** Participant referral code. */
        referralCode?: string;
        /** Custom participant data. */
        extraData?: Record<string, unknown>;
        /** Participant rank. */
        rank?: number;
        /** Total referral count. */
        referralCountTotal?: number;
        /** Total points for campaigns with points enabled. */
        pointsTotal?: number;
        /** Number of referred leads. */
        referredLeads?: number;
        /** Additional referral count reported by the campaign. */
        xReferrals?: number;
        /** Referrer details. */
        referrer?: Record<string, unknown>;
        /** Redeemed rewards. */
        redeemedRewards?: Array<Record<string, unknown>>;
        /** Pending rewards. */
        pendingRewards?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get the order in which a participant joined the campaign. */
    "viral_loops.get_participant_order": {
      input: Record<string, unknown>;
      output: {
        /** Joining order, starting at one. */
        order?: number;
        /** Number of campaign leads. */
        leadCount?: number;
        [key: string]: unknown;
      };
    };
    /** Get a participant's waiting-list or leaderboard rank; flagged participants are excluded. */
    "viral_loops.get_participant_rank": {
      input: Record<string, unknown>;
      output: {
        /** Participant rank. */
        rank?: number;
        /** Total referral count. */
        referralCountTotal?: number;
        /** Total points for campaigns with points enabled. */
        pointsTotal?: number;
        /** Provider ranking suggestion. */
        suggestion?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the referrer of a campaign participant. */
    "viral_loops.get_referrer": {
      input: Record<string, unknown>;
      output: {
        /** Original Viral Loops referrer response, including an empty result when no referrer exists. */
        result: unknown;
      };
    };
    /** Get one page of a participant's referrals, with optional conversion-status filtering. */
    "viral_loops.list_referrals": {
      input: Record<string, unknown>;
      output: Record<string, unknown>;
    };
    /** Query campaign participants by participant or referrer identifiers with limit and skip pagination. */
    "viral_loops.query_participants": {
      input: {
        /** Referrer identifiers to filter by. */
        referrers?: Array<Record<string, unknown>>;
        /** Participant identifiers to filter by. */
        participants?: Array<Record<string, unknown>>;
        /** Pagination controls. */
        filter?: {
          /**
           * Maximum number of results to return.
           * @minimum 1
           */
          limit?: number;
          /**
           * Number of results to skip.
           * @minimum 0
           */
          skip?: number;
        };
      };
      output: {
        /** Matching participant records. */
        results?: Array<unknown>;
        [key: string]: unknown;
      };
    };
  }
}
