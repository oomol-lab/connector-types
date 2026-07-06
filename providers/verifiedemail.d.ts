import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one VerifiedEmail download request by ID. */
    "verifiedemail.get_download": {
      input: {
        /**
         * The VerifiedEmail resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A VerifiedEmail download request object. */
        download: {
          /** The download request ID. */
          id?: string;
          /** The related verification list ID. */
          listId?: string;
          /** Email statuses included in the download. */
          include?: Array<"pending" | "malformed" | "ghost" | "unknown" | "nonexistent" | "failed" | "full" | "deliverable">;
          /** The direct download URL returned by VerifiedEmail. */
          url?: string;
          /** The download request status. */
          status?: "new" | "progress" | "completed" | "failed" | "deleted";
          /** Creation time returned by VerifiedEmail. */
          dateAdded?: string;
          /** File ready time returned by VerifiedEmail. */
          dateReady?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get VerifiedEmail verification credit entitlements for the account. */
    "verifiedemail.get_entitlements": {
      input: Record<string, never>;
      output: {
        /** VerifiedEmail entitlement details. */
        entitlements: {
          /** VerifiedEmail entitlement bucket. */
          payAsYouGo?: {
            /** Credits available in this entitlement bucket. */
            credits?: number;
            /** Credits or email count needed in this entitlement bucket. */
            needed?: number;
          };
          /** VerifiedEmail entitlement bucket. */
          autoVerify?: {
            /** Credits available in this entitlement bucket. */
            credits?: number;
            /** Credits or email count needed in this entitlement bucket. */
            needed?: number;
          };
        };
      };
    };
    /** Get one VerifiedEmail verification list by ID. */
    "verifiedemail.get_list": {
      input: {
        /**
         * The VerifiedEmail resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A VerifiedEmail verification list. */
        list: {
          /** The verification list ID. */
          id?: string;
          /** The verification list title. */
          title?: string;
          /** The verification list status. */
          status?: "new" | "ready" | "progress" | "failed" | "partial" | "verified";
          /** Whether auto-refill is enabled for this list. */
          isAutoRefill?: boolean;
          /** The list score. */
          score?: number;
          /** The verification list type. */
          type?: "user" | "system" | "widget" | "zapier" | "integration";
          /** The last list error returned by VerifiedEmail. */
          error?: string;
          /** The auto verification mode. */
          autoVerify?: "off" | "weekly";
          /** The related integration object, if any. */
          integration?: Record<string, unknown> | null;
          /** VerifiedEmail list statistics. */
          records?: {
            /** Total records in the list. */
            total?: number;
            /** Duplicate records in the list. */
            duplicate?: number;
            /** Malformed records in the list. */
            malformed?: number;
            /** Billable records in the list. */
            billable?: number;
            /** Pending records in the list. */
            pending?: number;
            /** Unknown records in the list. */
            unknown?: number;
            /** Nonexistent records in the list. */
            nonexistent?: number;
            /** Inactive records in the list. */
            inactive?: number;
            /** Full mailbox records in the list. */
            full?: number;
            /** Ghost records in the list. */
            ghosts?: number;
            /** Failed records in the list. */
            failed?: number;
            /** Undeliverable records in the list. */
            undeliverable?: number;
            /** Deliverable records in the list. */
            deliverable?: number;
            /** Free-provider records in the list. */
            free?: number;
            /** Government-domain records in the list. */
            government?: number;
            /** Academic-domain records in the list. */
            academic?: number;
            /** Military-domain records in the list. */
            military?: number;
            /** Disposable records in the list. */
            disposable?: number;
            /** Catch-all records in the list. */
            catchall?: number;
            /** Role-address records in the list. */
            role?: number;
            /** Google Workspace records in the list. */
            googleworkspace?: number;
            /** Outlook 365 records in the list. */
            outlook365?: number;
            [key: string]: unknown;
          };
          /** Creation time returned by VerifiedEmail. */
          dateAdded?: string;
          /** Last verification time returned by VerifiedEmail. */
          dateLastVerified?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List VerifiedEmail download requests with optional pagination and sorting. */
    "verifiedemail.list_downloads": {
      input: {
        /**
         * Number of items to offset the result set by.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of items to return.
         * @minimum 1
         * @maximum 10
         */
        limit?: number;
        /**
         * Field name to sort the result set by.
         * @minLength 1
         */
        sortField?: string;
        /** Sort order for the result set. */
        sortOrder?: "asc" | "desc";
      };
      output: {
        /** Download requests returned by VerifiedEmail. */
        downloads: Array<{
          /** The download request ID. */
          id?: string;
          /** The related verification list ID. */
          listId?: string;
          /** Email statuses included in the download. */
          include?: Array<"pending" | "malformed" | "ghost" | "unknown" | "nonexistent" | "failed" | "full" | "deliverable">;
          /** The direct download URL returned by VerifiedEmail. */
          url?: string;
          /** The download request status. */
          status?: "new" | "progress" | "completed" | "failed" | "deleted";
          /** Creation time returned by VerifiedEmail. */
          dateAdded?: string;
          /** File ready time returned by VerifiedEmail. */
          dateReady?: string;
          [key: string]: unknown;
        }>;
        /** VerifiedEmail pagination metadata. */
        metadata?: {
          /** Total count of matching items. */
          count?: number;
          /** Limit applied to this result set. */
          limit?: number;
          /** Offset applied to this result set. */
          offset?: number;
          /** Sort field applied to this result set. */
          sortField?: string;
          /** Sort order applied to this result set. */
          sortOrder?: string;
        };
      };
    };
    /** List VerifiedEmail verification lists with optional pagination and sorting. */
    "verifiedemail.list_lists": {
      input: {
        /**
         * Number of items to offset the result set by.
         * @minimum 0
         */
        offset?: number;
        /**
         * Number of items to return.
         * @minimum 1
         * @maximum 10
         */
        limit?: number;
        /**
         * Field name to sort the result set by.
         * @minLength 1
         */
        sortField?: string;
        /** Sort order for the result set. */
        sortOrder?: "asc" | "desc";
      };
      output: {
        /** Verification lists returned by VerifiedEmail. */
        lists: Array<{
          /** The verification list ID. */
          id?: string;
          /** The verification list title. */
          title?: string;
          /** The verification list status. */
          status?: "new" | "ready" | "progress" | "failed" | "partial" | "verified";
          /** Whether auto-refill is enabled for this list. */
          isAutoRefill?: boolean;
          /** The list score. */
          score?: number;
          /** The verification list type. */
          type?: "user" | "system" | "widget" | "zapier" | "integration";
          /** The last list error returned by VerifiedEmail. */
          error?: string;
          /** The auto verification mode. */
          autoVerify?: "off" | "weekly";
          /** The related integration object, if any. */
          integration?: Record<string, unknown> | null;
          /** VerifiedEmail list statistics. */
          records?: {
            /** Total records in the list. */
            total?: number;
            /** Duplicate records in the list. */
            duplicate?: number;
            /** Malformed records in the list. */
            malformed?: number;
            /** Billable records in the list. */
            billable?: number;
            /** Pending records in the list. */
            pending?: number;
            /** Unknown records in the list. */
            unknown?: number;
            /** Nonexistent records in the list. */
            nonexistent?: number;
            /** Inactive records in the list. */
            inactive?: number;
            /** Full mailbox records in the list. */
            full?: number;
            /** Ghost records in the list. */
            ghosts?: number;
            /** Failed records in the list. */
            failed?: number;
            /** Undeliverable records in the list. */
            undeliverable?: number;
            /** Deliverable records in the list. */
            deliverable?: number;
            /** Free-provider records in the list. */
            free?: number;
            /** Government-domain records in the list. */
            government?: number;
            /** Academic-domain records in the list. */
            academic?: number;
            /** Military-domain records in the list. */
            military?: number;
            /** Disposable records in the list. */
            disposable?: number;
            /** Catch-all records in the list. */
            catchall?: number;
            /** Role-address records in the list. */
            role?: number;
            /** Google Workspace records in the list. */
            googleworkspace?: number;
            /** Outlook 365 records in the list. */
            outlook365?: number;
            [key: string]: unknown;
          };
          /** Creation time returned by VerifiedEmail. */
          dateAdded?: string;
          /** Last verification time returned by VerifiedEmail. */
          dateLastVerified?: string | null;
          [key: string]: unknown;
        }>;
        /** VerifiedEmail pagination metadata. */
        metadata?: {
          /** Total count of matching items. */
          count?: number;
          /** Limit applied to this result set. */
          limit?: number;
          /** Offset applied to this result set. */
          offset?: number;
          /** Sort field applied to this result set. */
          sortField?: string;
          /** Sort order applied to this result set. */
          sortOrder?: string;
        };
      };
    };
    /** Verify one to ten email addresses synchronously with VerifiedEmail. */
    "verifiedemail.verify_emails": {
      input: {
        /**
         * One to ten email addresses to verify.
         * @minItems 1
         * @maxItems 10
         */
        emails: Array<string>;
      };
      output: {
        /** Verification objects returned by VerifiedEmail. */
        verifications: Array<{
          /** The email address returned by VerifiedEmail. */
          email?: string;
          /** The email score returned by VerifiedEmail. */
          score?: number;
          /** The verification result returned by VerifiedEmail. */
          result?: "pending" | "malformed" | "ghost" | "unknown" | "blocked" | "nonexistent" | "inactive" | "failed" | "full" | "deliverable";
          /** The role value returned by VerifiedEmail, if any. */
          role?: string | null;
          /** The email alias returned by VerifiedEmail, if any. */
          alias?: string | null;
          /** The canonical email returned by VerifiedEmail, if any. */
          canonical?: string | null;
          /** Whether VerifiedEmail marks the email as a ghost address. */
          isGhost?: boolean | null;
          /** Whether VerifiedEmail found MX records for the email domain. */
          isMX?: boolean | null;
          /** Whether the email belongs to a subdomain. */
          isSubdomain?: boolean | null;
          /** Whether the email domain is catch-all. */
          isCatchAll?: boolean | null;
          /** Whether the email belongs to a free email provider. */
          isFree?: boolean | null;
          /** Whether the email is disposable. */
          isDisposable?: boolean | null;
          /** Whether the email belongs to a government domain. */
          isGovernment?: boolean | null;
          /** Whether the email belongs to an academic domain. */
          isAcademic?: boolean | null;
          /** Whether the email belongs to a military domain. */
          isMilitary?: boolean | null;
          /** Whether the email domain uses Google Workspace. */
          isGoogleWorkspace?: boolean | null;
          /** Whether the email domain uses Outlook 365. */
          isOutlook365?: boolean | null;
          /** Creation time returned by VerifiedEmail. */
          dateAdded?: string;
          /** Last verification time returned by VerifiedEmail. */
          dateLastVerified?: string | null;
          /** Last valid time returned by VerifiedEmail. */
          dateLastValid?: string | null;
          [key: string]: unknown;
        }>;
        /** VerifiedEmail metadata for a synchronous verification response. */
        metadata?: {
          /** The related verification list ID, if any. */
          listId?: string | null;
          /** Number of verification objects returned. */
          count?: number;
        } | null;
      };
    };
  }
}
