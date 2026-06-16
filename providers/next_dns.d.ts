import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List per-device DNS query analytics for a NextDNS profile. */
    "next_dns.get_analytics_devices": {
      input: {
        /**
         * The NextDNS profile ID.
         * @minLength 1
         * @pattern \S
         */
        profileId: string;
        /**
         * The inclusive start date filter. NextDNS accepts ISO timestamps, Unix timestamps, and relative values such as -7d.
         * @minLength 1
         * @pattern \S
         */
        from?: string;
        /**
         * The exclusive end date filter. NextDNS accepts ISO timestamps, Unix timestamps, and relative values such as now.
         * @minLength 1
         * @pattern \S
         */
        to?: string;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * The opaque pagination cursor from a previous response.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /**
         * The NextDNS device ID to filter by, or __UNIDENTIFIED__ for unidentified devices.
         * @minLength 1
         * @pattern \S
         */
        device?: string;
      };
      output: {
        /** The items returned by NextDNS. */
        data: Array<{
          /** The item identifier when returned by NextDNS. */
          id?: string;
          /** The item display name when returned by NextDNS. */
          name?: string;
          /** The domain value when returned by NextDNS. */
          domain?: string;
          /** The status value when returned by NextDNS. */
          status?: string;
          /** The query count for this item. */
          queries?: number;
          [key: string]: unknown;
        }>;
        /** The response metadata returned by NextDNS. */
        meta: {
          /** The pagination metadata returned by NextDNS. */
          pagination?: {
            /** The cursor for the next page of results. */
            cursor?: string;
          };
          [key: string]: unknown;
        } | null;
        /** The raw response returned by NextDNS. */
        raw: Record<string, unknown>;
      };
    };
    /** List per-domain DNS query analytics for a NextDNS profile. */
    "next_dns.get_analytics_domains": {
      input: {
        /**
         * The NextDNS profile ID.
         * @minLength 1
         * @pattern \S
         */
        profileId: string;
        /**
         * The inclusive start date filter. NextDNS accepts ISO timestamps, Unix timestamps, and relative values such as -7d.
         * @minLength 1
         * @pattern \S
         */
        from?: string;
        /**
         * The exclusive end date filter. NextDNS accepts ISO timestamps, Unix timestamps, and relative values such as now.
         * @minLength 1
         * @pattern \S
         */
        to?: string;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * The opaque pagination cursor from a previous response.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /**
         * The NextDNS device ID to filter by, or __UNIDENTIFIED__ for unidentified devices.
         * @minLength 1
         * @pattern \S
         */
        device?: string;
        /** The analytics status to filter by. */
        status?: "default" | "blocked" | "allowed";
        /** Whether to aggregate results by root domain. */
        root?: boolean;
      };
      output: {
        /** The items returned by NextDNS. */
        data: Array<{
          /** The item identifier when returned by NextDNS. */
          id?: string;
          /** The item display name when returned by NextDNS. */
          name?: string;
          /** The domain value when returned by NextDNS. */
          domain?: string;
          /** The status value when returned by NextDNS. */
          status?: string;
          /** The query count for this item. */
          queries?: number;
          [key: string]: unknown;
        }>;
        /** The response metadata returned by NextDNS. */
        meta: {
          /** The pagination metadata returned by NextDNS. */
          pagination?: {
            /** The cursor for the next page of results. */
            cursor?: string;
          };
          [key: string]: unknown;
        } | null;
        /** The raw response returned by NextDNS. */
        raw: Record<string, unknown>;
      };
    };
    /** List DNS query counts grouped by blocking reason for a NextDNS profile. */
    "next_dns.get_analytics_reasons": {
      input: {
        /**
         * The NextDNS profile ID.
         * @minLength 1
         * @pattern \S
         */
        profileId: string;
        /**
         * The inclusive start date filter. NextDNS accepts ISO timestamps, Unix timestamps, and relative values such as -7d.
         * @minLength 1
         * @pattern \S
         */
        from?: string;
        /**
         * The exclusive end date filter. NextDNS accepts ISO timestamps, Unix timestamps, and relative values such as now.
         * @minLength 1
         * @pattern \S
         */
        to?: string;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * The opaque pagination cursor from a previous response.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /**
         * The NextDNS device ID to filter by, or __UNIDENTIFIED__ for unidentified devices.
         * @minLength 1
         * @pattern \S
         */
        device?: string;
      };
      output: {
        /** The items returned by NextDNS. */
        data: Array<{
          /** The item identifier when returned by NextDNS. */
          id?: string;
          /** The item display name when returned by NextDNS. */
          name?: string;
          /** The domain value when returned by NextDNS. */
          domain?: string;
          /** The status value when returned by NextDNS. */
          status?: string;
          /** The query count for this item. */
          queries?: number;
          [key: string]: unknown;
        }>;
        /** The response metadata returned by NextDNS. */
        meta: {
          /** The pagination metadata returned by NextDNS. */
          pagination?: {
            /** The cursor for the next page of results. */
            cursor?: string;
          };
          [key: string]: unknown;
        } | null;
        /** The raw response returned by NextDNS. */
        raw: Record<string, unknown>;
      };
    };
    /** List DNS query counts grouped by status for a NextDNS profile. */
    "next_dns.get_analytics_status": {
      input: {
        /**
         * The NextDNS profile ID.
         * @minLength 1
         * @pattern \S
         */
        profileId: string;
        /**
         * The inclusive start date filter. NextDNS accepts ISO timestamps, Unix timestamps, and relative values such as -7d.
         * @minLength 1
         * @pattern \S
         */
        from?: string;
        /**
         * The exclusive end date filter. NextDNS accepts ISO timestamps, Unix timestamps, and relative values such as now.
         * @minLength 1
         * @pattern \S
         */
        to?: string;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * The opaque pagination cursor from a previous response.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /**
         * The NextDNS device ID to filter by, or __UNIDENTIFIED__ for unidentified devices.
         * @minLength 1
         * @pattern \S
         */
        device?: string;
      };
      output: {
        /** The items returned by NextDNS. */
        data: Array<{
          /** The item identifier when returned by NextDNS. */
          id?: string;
          /** The item display name when returned by NextDNS. */
          name?: string;
          /** The domain value when returned by NextDNS. */
          domain?: string;
          /** The status value when returned by NextDNS. */
          status?: string;
          /** The query count for this item. */
          queries?: number;
          [key: string]: unknown;
        }>;
        /** The response metadata returned by NextDNS. */
        meta: {
          /** The pagination metadata returned by NextDNS. */
          pagination?: {
            /** The cursor for the next page of results. */
            cursor?: string;
          };
          [key: string]: unknown;
        } | null;
        /** The raw response returned by NextDNS. */
        raw: Record<string, unknown>;
      };
    };
    /** List DNS query logs for a NextDNS profile with optional filters. */
    "next_dns.get_logs": {
      input: {
        /**
         * The NextDNS profile ID.
         * @minLength 1
         * @pattern \S
         */
        profileId: string;
        /**
         * The inclusive start date filter. NextDNS accepts ISO timestamps, Unix timestamps, and relative values such as -1d.
         * @minLength 1
         * @pattern \S
         */
        from?: string;
        /**
         * The exclusive end date filter. NextDNS accepts ISO timestamps, Unix timestamps, and relative values such as now.
         * @minLength 1
         * @pattern \S
         */
        to?: string;
        /**
         * The maximum number of log entries to return.
         * @minimum 10
         * @maximum 1000
         */
        limit?: number;
        /**
         * The opaque pagination cursor from a previous response.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /**
         * The NextDNS device ID to filter by, or __UNIDENTIFIED__ for unidentified devices.
         * @minLength 1
         * @pattern \S
         */
        device?: string;
        /**
         * The domain or substring to search for in logs.
         * @minLength 1
         * @pattern \S
         */
        search?: string;
        /** The DNS query status to filter by. */
        status?: "default" | "error" | "blocked" | "allowed";
        /** The log order to request from NextDNS. */
        sort?: "asc" | "desc";
        /** Whether to return raw DNS queries instead of filtered navigational logs. */
        raw?: boolean;
      };
      output: {
        /** The items returned by NextDNS. */
        data: Array<{
          /** The query timestamp. */
          timestamp?: string;
          /** The queried domain. */
          domain?: string;
          /** The query status. */
          status?: string;
          /** The query protocol. */
          protocol?: string;
          /** The reasons attached to this log entry. */
          reasons?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** The response metadata returned by NextDNS. */
        meta: {
          /** The pagination metadata returned by NextDNS. */
          pagination?: {
            /** The cursor for the next page of results. */
            cursor?: string;
          };
          [key: string]: unknown;
        } | null;
        /** The raw response returned by NextDNS. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one NextDNS profile with its current settings and setup details. */
    "next_dns.get_profile": {
      input: {
        /**
         * The NextDNS profile ID.
         * @minLength 1
         * @pattern \S
         */
        profileId: string;
      };
      output: {
        /** The raw profile object returned by NextDNS. */
        profile: Record<string, unknown>;
        /** The raw response returned by NextDNS. */
        raw: Record<string, unknown>;
      };
    };
    /** List NextDNS profiles available to the authenticated account. */
    "next_dns.list_profiles": {
      input: Record<string, never>;
      output: {
        /** The items returned by NextDNS. */
        data: Array<{
          /** The NextDNS profile ID. */
          id?: string;
          /** The profile name. */
          name?: string;
          /** The current user's role for this profile. */
          role?: string;
          /** The profile fingerprint when returned by NextDNS. */
          fingerprint?: string;
          [key: string]: unknown;
        }>;
        /** The response metadata returned by NextDNS. */
        meta: {
          /** The pagination metadata returned by NextDNS. */
          pagination?: {
            /** The cursor for the next page of results. */
            cursor?: string;
          };
          [key: string]: unknown;
        } | null;
        /** The raw response returned by NextDNS. */
        raw: Record<string, unknown>;
      };
    };
  }
}
