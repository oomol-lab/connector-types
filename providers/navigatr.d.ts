import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a badge and its issuing providers, criteria, and other available details. */
    "navigatr.get_badge": {
      input: {
        /** Navigatr badge ID. */
        badge_id: number;
      };
      output: {
        /** Navigatr badge ID. */
        id?: number;
        /** Badge name. */
        name?: string | null;
        /** Badge publication status. */
        status?: string;
        /** Public badge URL. */
        url?: string;
        /** Providers that can issue this badge. */
        providers?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve a badge assertion. Navigatr redacts recipient information when the connected account lacks permission to view it. */
    "navigatr.get_badge_assertion": {
      input: {
        /** Navigatr badge assertion ID. */
        badge_assertion_id: number;
      };
      output: {
        /** Navigatr badge assertion ID. */
        id?: number;
        /** Assertion status. */
        status?: string;
        /** Navigatr badge ID. */
        badge_id?: number | null;
        /** Recipient user ID. */
        recipient_id?: number | null;
        /** Public assertion URL. */
        url?: string | null;
        [key: string]: unknown;
      };
    };
    /** Issue a configured badge to a user or organisation. Identify the recipient by user ID, QR code, Spydus barcode, or email with first and last name; include recipient_organisation for organisation badges. */
    "navigatr.issue_badge": {
      input: Record<string, unknown>;
      output: {
        /** Navigatr badge assertion ID. */
        id?: number;
        /** Assertion status. */
        status?: string;
        /** Navigatr badge ID. */
        badge_id?: number | null;
        /** Recipient user ID. */
        recipient_id?: number | null;
        /** Public assertion URL. */
        url?: string | null;
        [key: string]: unknown;
      };
    };
    /** List issuance records for a badge with optional provider, status, keyword, and pagination filters. */
    "navigatr.list_badge_assertions": {
      input: {
        /** Navigatr badge ID. */
        badge_id: number;
        /** Issuing provider ID; must be one of the badge's providers. */
        provider_id?: number;
        /** Sort order. */
        order_by?: "Time_Created_Asc" | "Time_Created_Desc" | "Name_Asc" | "Name_Desc";
        /** Search assertion records. */
        keyword?: string;
        /** Assertion status filter. */
        status?: string;
        /** Return a paginated response; defaults to true upstream. */
        paginated?: boolean;
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Results per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
      };
      output: {
        /** Results in this response. */
        items?: Array<{
          /** Navigatr badge assertion ID. */
          id?: number;
          /** Assertion status. */
          status?: string;
          /** Navigatr badge ID. */
          badge_id?: number | null;
          /** Recipient user ID. */
          recipient_id?: number | null;
          /** Public assertion URL. */
          url?: string | null;
          [key: string]: unknown;
        }>;
        /** Total matching results. */
        total?: number;
        /** Current page number. */
        page?: number;
        /** Requested page size. */
        size?: number;
        /** Total pages. */
        pages?: number;
        [key: string]: unknown;
      };
    };
    /** List badges for a provider, community, QA community, or issuer. Public API access is limited to the connected user's own provider or community. */
    "navigatr.list_badges": {
      input: Record<string, unknown>;
      output: {
        /** Results in this response. */
        items?: Array<{
          /** Navigatr badge ID. */
          id?: number;
          /** Badge name. */
          name?: string | null;
          /** Badge publication status. */
          status?: string;
          /** Public badge URL. */
          url?: string;
          /** Providers that can issue this badge. */
          providers?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        }>;
        /** Total matching results. */
        total?: number;
        /** Current page number. */
        page?: number;
        /** Requested page size. */
        size?: number;
        /** Total pages. */
        pages?: number;
        [key: string]: unknown;
      };
    };
    /** Revoke a badge assertion, optionally recording a reason. */
    "navigatr.revoke_badge_assertion": {
      input: {
        /** Navigatr badge assertion ID. */
        badge_assertion_id: number;
        /** Reason for revoking the assertion. */
        revocation_reason?: string;
      };
      output: {
        /** Navigatr badge assertion ID. */
        id?: number;
        /** Assertion status. */
        status?: string;
        /** Navigatr badge ID. */
        badge_id?: number | null;
        /** Recipient user ID. */
        recipient_id?: number | null;
        /** Public assertion URL. */
        url?: string | null;
        [key: string]: unknown;
      };
    };
    /** Verify a badge assertion and retrieve the result and reasons. This updates or clears the persisted time_verified field and the public verification indicator. */
    "navigatr.verify_badge_assertion": {
      input: {
        /** Navigatr badge assertion ID. */
        badge_assertion_id: number;
      };
      output: {
        /** Whether the assertion is verified. */
        verified?: boolean;
        /** Verification reasons keyed by check. */
        reasons?: Record<string, string>;
        /** Assertion status. */
        status?: string;
        [key: string]: unknown;
      };
    };
  }
}
