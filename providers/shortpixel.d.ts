import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add and associate a domain with the current ShortPixel account. */
    "shortpixel.add_domain": {
      input: {
        /**
         * The domain name managed in ShortPixel CDN endpoints.
         * @minLength 1
         * @pattern \S
         */
        domain: string;
      };
      output: {
        /** The status object returned by ShortPixel. */
        status: {
          /** The status code returned by ShortPixel. */
          code: string;
          /** The human-readable status message returned by ShortPixel. */
          message: string;
        };
        /** The domain echoed by ShortPixel when present. */
        domain?: string | null;
        /** The raw ShortPixel payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Read CDN usage and quota details for one ShortPixel-associated domain. */
    "shortpixel.get_domain_cdn_usage": {
      input: {
        /**
         * The domain name managed in ShortPixel CDN endpoints.
         * @minLength 1
         * @pattern \S
         */
        domain: string;
      };
      output: {
        /** The account email returned by ShortPixel when present. */
        email: string | null;
        /** The monthly API quota reported by ShortPixel. */
        apiQuota: number | null;
        /** The one-time API quota reported by ShortPixel. */
        apiQuotaOneTime: number | null;
        /** The number of days until quota reset. */
        daysToReset: number | null;
        /** Whether the account is a subaccount. */
        isSubaccount: boolean | null;
        /** Whether the account is an alias account. */
        isAlias: boolean | null;
        /** The remaining CDN traffic quota for the domain. */
        remainingCdnTraffic: number | null;
        /** The used CDN traffic quota for the domain. */
        usedCdnTraffic: number | null;
        /** The free API calls reported by ShortPixel. */
        freeApiCalls: number | null;
        /** The paid API calls reported by ShortPixel. */
        paidApiCalls: number | null;
        /** The paid one-time API calls reported by ShortPixel. */
        paidApiCallsOneTime: number | null;
        /** The total CDN quota reported by ShortPixel. */
        cdnQuota: number | null;
        /** Whether the account has unlimited usage enabled. */
        unlimited: boolean | null;
        /** The normalized per-day CDN traffic usage returned by ShortPixel. */
        usedCdn: Record<string, {
            /** The traffic value reported for the day. */
            traffic: number | null;
            /** The raw daily CDN usage object returned by ShortPixel. */
            raw: Record<string, unknown>;
          }>;
        /** The normalized per-day credit usage returned by ShortPixel. */
        usedCredits: Record<string, {
            /** The paid credits used for the day. */
            paid: number | null;
            /** The free credits used for the day. */
            free: number | null;
            /** The original byte total reported for the day. */
            originalBytes: number | null;
            /** The optimized byte total reported for the day. */
            optimizedBytes: number | null;
            /** The raw daily credit usage object returned by ShortPixel. */
            raw: Record<string, unknown>;
          }>;
        /** The raw ShortPixel payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Purge the ShortPixel CDN cache for one associated domain. */
    "shortpixel.purge_domain_cache": {
      input: {
        /**
         * The domain name managed in ShortPixel CDN endpoints.
         * @minLength 1
         * @pattern \S
         */
        domain: string;
      };
      output: {
        /** The status object returned by ShortPixel. */
        status: {
          /** The status code returned by ShortPixel. */
          code: string;
          /** The human-readable status message returned by ShortPixel. */
          message: string;
        };
        /** The domain echoed by ShortPixel when present. */
        domain?: string | null;
        /** The raw ShortPixel payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Purge ShortPixel stored optimized variants for one associated domain. */
    "shortpixel.purge_domain_storage": {
      input: {
        /**
         * The domain name managed in ShortPixel CDN endpoints.
         * @minLength 1
         * @pattern \S
         */
        domain: string;
      };
      output: {
        /** The status object returned by ShortPixel. */
        status: {
          /** The status code returned by ShortPixel. */
          code: string;
          /** The human-readable status message returned by ShortPixel. */
          message: string;
        };
        /** The domain echoed by ShortPixel when present. */
        domain?: string | null;
        /** The raw ShortPixel payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Remove the current ShortPixel account association from a domain. */
    "shortpixel.revoke_domain": {
      input: {
        /**
         * The domain name managed in ShortPixel CDN endpoints.
         * @minLength 1
         * @pattern \S
         */
        domain: string;
      };
      output: {
        /** The status object returned by ShortPixel. */
        status: {
          /** The status code returned by ShortPixel. */
          code: string;
          /** The human-readable status message returned by ShortPixel. */
          message: string;
        };
        /** The domain echoed by ShortPixel when present. */
        domain?: string | null;
        /** The raw ShortPixel payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Associate an existing domain with the current ShortPixel account. */
    "shortpixel.set_domain": {
      input: {
        /**
         * The domain name managed in ShortPixel CDN endpoints.
         * @minLength 1
         * @pattern \S
         */
        domain: string;
      };
      output: {
        /** The status object returned by ShortPixel. */
        status: {
          /** The status code returned by ShortPixel. */
          code: string;
          /** The human-readable status message returned by ShortPixel. */
          message: string;
        };
        /** The domain echoed by ShortPixel when present. */
        domain?: string | null;
        /** The raw ShortPixel payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
