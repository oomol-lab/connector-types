import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a pending delayed GrowSurf referral trigger. Returns success false when there is no pending trigger. */
    "growsurf.cancel_delayed_referral": {
      input: {
        /**
         * GrowSurf program ID.
         * @minLength 1
         * @pattern \S
         */
        campaignId: string;
        /**
         * Participant ID or email address; pass the original unencoded value.
         * @minLength 1
         * @pattern \S
         */
        participantIdOrEmail: string;
      };
      output: {
        /** Whether referral credit was awarded, scheduled, or its pending trigger cancelled. */
        success: boolean;
        /** Additional result details, when returned. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Add a GrowSurf participant; an existing email returns its participant unchanged. In affiliate programs, omitted isAffiliate enrolls an approved affiliate unless a valid referredBy is supplied. Referred signups may earn Lead rewards. */
    "growsurf.create_participant": {
      input: {
        /**
         * GrowSurf program ID.
         * @minLength 1
         * @pattern \S
         */
        campaignId: string;
        /** New participant fields. */
        participant: {
          /**
           * Participant email address.
           * @format email
           */
          email: string;
          /**
           * Referrer participant ID or email address.
           * @maxLength 100
           */
          referredBy?: string;
          /**
           * Participant first name.
           * @maxLength 255
           */
          firstName?: string;
          /**
           * Participant last name.
           * @maxLength 255
           */
          lastName?: string;
          /** Shallow custom participant metadata. */
          metadata?: Record<string, unknown>;
          /** Affiliate programs only: true enrolls an approved affiliate; false creates a non-affiliate. Applies only to new participants. */
          isAffiliate?: boolean;
          /** Referral credit status when referredBy resolves; omit to use program rules. */
          referralStatus?: "CREDIT_PENDING" | "CREDIT_AWARDED";
          /**
           * Participant IP address, when available.
           * @maxLength 255
           */
          ipAddress?: string;
          /**
           * Browser identifier, when available.
           * @maxLength 255
           */
          fingerprint?: string;
          /** App-install scoped identifier supplied by a native app. */
          mobileInstanceId?: string;
        };
      };
      output: {
        /** Participant ID. */
        id: string;
        /** Participant email address. */
        email: string;
        /** Participant first name. */
        firstName?: string | null;
        /** Participant last name. */
        lastName?: string | null;
        /** Total referrals made by the participant. */
        referralCount?: number;
        /** Referral sharing URL; omitted for unapproved affiliates. */
        shareUrl?: string;
        /** Referral credit status. */
        referralStatus?: string;
        /** Affiliate enrollment status. */
        affiliateStatus?: string | null;
        /** Shallow custom participant metadata. */
        metadata?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Delete a GrowSurf participant. Pending analytics erasure runs automatically; do not repeat deletion to complete it. */
    "growsurf.delete_participant": {
      input: {
        /**
         * GrowSurf program ID.
         * @minLength 1
         * @pattern \S
         */
        campaignId: string;
        /**
         * Participant ID or email address; pass the original unencoded value.
         * @minLength 1
         * @pattern \S
         */
        participantIdOrEmail: string;
      };
      output: {
        /** Whether participant cleanup completed. */
        success: boolean;
        /** Pending analytics erasure details, when returned. */
        analyticsErasure?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get one GrowSurf program's configuration and totals. */
    "growsurf.get_campaign": {
      input: {
        /**
         * GrowSurf program ID.
         * @minLength 1
         * @pattern \S
         */
        campaignId: string;
      };
      output: {
        /** Program ID. */
        id: string;
        /** Internal program name. */
        name: string;
        /** Program type. */
        type?: string;
        /** Program status. */
        status?: string;
        /** Total referral count. */
        referralCount?: number;
        /** Total participant count. */
        participantCount?: number;
        [key: string]: unknown;
      };
    };
    /** Get a GrowSurf participant by ID or email address. */
    "growsurf.get_participant": {
      input: {
        /**
         * GrowSurf program ID.
         * @minLength 1
         * @pattern \S
         */
        campaignId: string;
        /**
         * Participant ID or email address; pass the original unencoded value.
         * @minLength 1
         * @pattern \S
         */
        participantIdOrEmail: string;
      };
      output: {
        /** Participant ID. */
        id: string;
        /** Participant email address. */
        email: string;
        /** Participant first name. */
        firstName?: string | null;
        /** Participant last name. */
        lastName?: string | null;
        /** Total referrals made by the participant. */
        referralCount?: number;
        /** Referral sharing URL; omitted for unapproved affiliates. */
        shareUrl?: string;
        /** Referral credit status. */
        referralStatus?: string;
        /** Affiliate enrollment status. */
        affiliateStatus?: string | null;
        /** Shallow custom participant metadata. */
        metadata?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the GrowSurf team bound to your API key and its email verification state. */
    "growsurf.get_team": {
      input: Record<string, never>;
      output: {
        /** Team display name. */
        name: string;
        /** Team verification state; VERIFIED is required to send participant emails. */
        verificationStatus?: string;
        /** Last verification request time in Unix milliseconds. */
        verificationRequestedAt?: number | null;
        [key: string]: unknown;
      };
    };
    /** List GrowSurf programs belonging to your API key's team. Deleted programs are excluded. */
    "growsurf.list_campaigns": {
      input: Record<string, never>;
      output: {
        /** Available programs. */
        campaigns: Array<{
          /** Program ID. */
          id: string;
          /** Internal program name. */
          name: string;
          /** Program type. */
          type?: string;
          /** Program status. */
          status?: string;
          /** Total referral count. */
          referralCount?: number;
          /** Total participant count. */
          participantCount?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List a page of GrowSurf participants. Pass nextId into the next request until null; metadata filters match all supplied values exactly. */
    "growsurf.list_participants": {
      input: {
        /**
         * GrowSurf program ID.
         * @minLength 1
         * @pattern \S
         */
        campaignId: string;
        /** Cursor from the previous page. */
        nextId?: string;
        /**
         * Page size; GrowSurf defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Exact metadata filters, up to three keys. */
        metadata?: Record<string, string>;
      };
      output: {
        /** Participants on this page. */
        participants: Array<{
          /** Participant ID. */
          id: string;
          /** Participant email address. */
          email: string;
          /** Participant first name. */
          firstName?: string | null;
          /** Participant last name. */
          lastName?: string | null;
          /** Total referrals made by the participant. */
          referralCount?: number;
          /** Referral sharing URL; omitted for unapproved affiliates. */
          shareUrl?: string;
          /** Referral credit status. */
          referralStatus?: string;
          /** Affiliate enrollment status. */
          affiliateStatus?: string | null;
          /** Shallow custom participant metadata. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Requested page size. */
        limit: number;
        /** Next page cursor, or null when finished. */
        nextId: string | null;
        [key: string]: unknown;
      };
    };
    /** Trigger referral credit for a GrowSurf participant immediately or after a delay managed by GrowSurf. Inspect success and message for the actual outcome. */
    "growsurf.trigger_referral": {
      input: {
        /**
         * GrowSurf program ID.
         * @minLength 1
         * @pattern \S
         */
        campaignId: string;
        /**
         * Participant ID or email address; pass the original unencoded value.
         * @minLength 1
         * @pattern \S
         */
        participantIdOrEmail: string;
        /**
         * Whole days to delay credit; omit for immediate credit.
         * @minimum 1
         * @maximum 90
         */
        delayInDays?: number;
      };
      output: {
        /** Whether referral credit was awarded, scheduled, or its pending trigger cancelled. */
        success: boolean;
        /** Additional result details, when returned. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Update a GrowSurf participant. Can suspend or ban affiliates and expire referral credit. Supplied vanityKeys replace existing aliases; omitted fields remain unchanged. */
    "growsurf.update_participant": {
      input: {
        /**
         * GrowSurf program ID.
         * @minLength 1
         * @pattern \S
         */
        campaignId: string;
        /**
         * Participant ID or email address; pass the original unencoded value.
         * @minLength 1
         * @pattern \S
         */
        participantIdOrEmail: string;
        /** Participant fields to update. */
        participant: {
          /**
           * Participant email address.
           * @format email
           */
          email?: string;
          /**
           * Referrer participant ID or email address.
           * @maxLength 100
           */
          referredBy?: string;
          /**
           * Participant first name.
           * @maxLength 255
           */
          firstName?: string;
          /**
           * Participant last name.
           * @maxLength 255
           */
          lastName?: string;
          /** Shallow custom participant metadata. */
          metadata?: Record<string, unknown>;
          /** Referral credit status. */
          referralStatus?: "CREDIT_PENDING" | "CREDIT_AWARDED" | "CREDIT_EXPIRED";
          /** Affiliate status; APPROVED also enrolls a non-affiliate, while SUSPENDED and BANNED require an existing affiliate. */
          affiliateStatus?: "APPROVED" | "SUSPENDED" | "BANNED";
          /**
           * Replacement referral-code aliases.
           * @maxItems 5
           */
          vanityKeys?: Array<string>;
          /** Whether the participant is unsubscribed from program emails. */
          unsubscribed?: boolean;
          /**
           * Internal participant notes, never exposed to participants.
           * @maxLength 500
           */
          notes?: string;
        };
      };
      output: {
        /** Participant ID. */
        id: string;
        /** Participant email address. */
        email: string;
        /** Participant first name. */
        firstName?: string | null;
        /** Participant last name. */
        lastName?: string | null;
        /** Total referrals made by the participant. */
        referralCount?: number;
        /** Referral sharing URL; omitted for unapproved affiliates. */
        shareUrl?: string;
        /** Referral credit status. */
        referralStatus?: string;
        /** Affiliate enrollment status. */
        affiliateStatus?: string | null;
        /** Shallow custom participant metadata. */
        metadata?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
