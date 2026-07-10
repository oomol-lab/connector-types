import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check the reputation, blacklist status, category flags, and risk score of a domain with APIVoid. */
    "api_void.check_domain_reputation": {
      input: {
        /**
         * The domain or host to submit, for example google.com.
         * @minLength 1
         */
        host: string;
        /**
         * Comma-separated APIVoid engine names to exclude from the scan.
         * @minLength 1
         */
        excludeEngines?: string;
        /**
         * Optional Spamhaus DBL DQS key to enable the Spamhaus engine.
         * @minLength 1
         */
        spamhausKey?: string;
        /** Whether APIVoid should include domain age as a risk factor. This may consume an additional credit. */
        includeDomainAge?: boolean;
        /** Whether to use only cached domain age data when includeDomainAge is enabled. */
        domainAgeCacheOnly?: boolean;
      };
      output: {
        /** APIVoid domain reputation payload. */
        data: {
          /** The host submitted for scanning. */
          host?: string;
          /** Blacklist engine results returned by APIVoid. */
          blacklists?: Record<string, unknown>;
          /** Domain category and structural risk flags returned by APIVoid. */
          category?: Record<string, unknown>;
          /** APIVoid domain risk score. */
          risk_score?: Record<string, unknown>;
          /** Domain age details returned when requested. */
          domain_age?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Quota values parsed from the APIVoid X-Service-Quota response header. */
        quota: {
          /** The raw X-Service-Quota header value. */
          raw: string;
          /** The amount of credits consumed for the request. */
          callUsage?: number;
          /** The amount of credits available after the request. */
          available?: number;
          /** Unix timestamp when credits will next reset. */
          reset?: number;
          /** Whether overage is allowed on the subscription plan. */
          overageAllowed?: boolean;
          /** Whether overage is enabled for the account. */
          overageEnabled?: boolean;
          /** The amount of overage credits consumed. */
          overageValue?: number;
          /** The maximum overage credits allowed in the billing cycle. */
          overageLimit?: number;
        } | null;
      };
    };
    /** Check the reputation, blacklist status, and risk score of an IP address with APIVoid. */
    "api_void.check_ip_reputation": {
      input: {
        /**
         * The public IPv4 or IPv6 address to scan with APIVoid.
         * @minLength 1
         */
        ip: string;
        /**
         * Comma-separated APIVoid engine names to exclude from the scan.
         * @minLength 1
         */
        excludeEngines?: string;
        /**
         * Optional Spamhaus DBL DQS key to enable the Spamhaus engine.
         * @minLength 1
         */
        spamhausKey?: string;
        /** Whether to disable reverse DNS lookup to reduce response time. */
        disableReverseDns?: boolean;
      };
      output: {
        /** APIVoid IP reputation payload. */
        data: {
          /** The IP address submitted for scanning. */
          ip?: string;
          /** Blacklist engine results returned by APIVoid. */
          blacklists?: Record<string, unknown>;
          /** IP geolocation and network information returned by APIVoid. */
          information?: Record<string, unknown>;
          /** Anomaly and proxy risk flags returned by APIVoid. */
          anomaly?: Record<string, unknown>;
          /** APIVoid IP risk score. */
          risk_score?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Quota values parsed from the APIVoid X-Service-Quota response header. */
        quota: {
          /** The raw X-Service-Quota header value. */
          raw: string;
          /** The amount of credits consumed for the request. */
          callUsage?: number;
          /** The amount of credits available after the request. */
          available?: number;
          /** Unix timestamp when credits will next reset. */
          reset?: number;
          /** Whether overage is allowed on the subscription plan. */
          overageAllowed?: boolean;
          /** Whether overage is enabled for the account. */
          overageEnabled?: boolean;
          /** The amount of overage credits consumed. */
          overageValue?: number;
          /** The maximum overage credits allowed in the billing cycle. */
          overageLimit?: number;
        } | null;
      };
    };
    /** Check DNS, blacklist, file, and risk signals for a URL with APIVoid. */
    "api_void.check_url_reputation": {
      input: {
        /**
         * The URL to submit for reputation scanning.
         * @minLength 1
         * @format uri
         */
        url: string;
      };
      output: {
        /** APIVoid URL reputation payload. */
        data: {
          /** The URL submitted for scanning. */
          url?: string;
          /** DNS records returned by APIVoid. */
          dns_records?: Record<string, unknown>;
          /** Domain blacklist engine results returned by APIVoid. */
          domain_blacklist?: Record<string, unknown>;
          /** File type details returned by APIVoid. */
          file_type?: Record<string, unknown>;
          /** APIVoid URL risk score. */
          risk_score?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Quota values parsed from the APIVoid X-Service-Quota response header. */
        quota: {
          /** The raw X-Service-Quota header value. */
          raw: string;
          /** The amount of credits consumed for the request. */
          callUsage?: number;
          /** The amount of credits available after the request. */
          available?: number;
          /** Unix timestamp when credits will next reset. */
          reset?: number;
          /** Whether overage is allowed on the subscription plan. */
          overageAllowed?: boolean;
          /** Whether overage is enabled for the account. */
          overageEnabled?: boolean;
          /** The amount of overage credits consumed. */
          overageValue?: number;
          /** The maximum overage credits allowed in the billing cycle. */
          overageLimit?: number;
        } | null;
      };
    };
    /** Get APIVoid account credit, overage, and usage information. */
    "api_void.get_account_info": {
      input: Record<string, never>;
      output: {
        /** APIVoid account, credit, overage, and usage statistics. */
        data: {
          /** APIVoid credit details. */
          credits?: Record<string, unknown>;
          /** APIVoid overage settings. */
          overage?: Record<string, unknown>;
          /** APIVoid usage statistics. */
          usage_stats?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Quota values parsed from the APIVoid X-Service-Quota response header. */
        quota: {
          /** The raw X-Service-Quota header value. */
          raw: string;
          /** The amount of credits consumed for the request. */
          callUsage?: number;
          /** The amount of credits available after the request. */
          available?: number;
          /** Unix timestamp when credits will next reset. */
          reset?: number;
          /** Whether overage is allowed on the subscription plan. */
          overageAllowed?: boolean;
          /** Whether overage is enabled for the account. */
          overageEnabled?: boolean;
          /** The amount of overage credits consumed. */
          overageValue?: number;
          /** The maximum overage credits allowed in the billing cycle. */
          overageLimit?: number;
        } | null;
      };
    };
    /** Verify an email address or email domain with APIVoid. */
    "api_void.verify_email": {
      input: {
        /**
         * The email address to submit for APIVoid verification.
         * @format email
         */
        email?: string;
        /**
         * The email domain to submit when verifying domain-level email signals.
         * @minLength 1
         */
        domain?: string;
      };
      output: {
        /** APIVoid email verification payload. */
        data: {
          /** The email address submitted for verification. */
          email?: string;
          /** The normalized email address returned by APIVoid. */
          canonical_email?: string;
          /** Whether APIVoid found a valid email format. */
          valid_format?: boolean;
          /** The email domain returned by APIVoid. */
          domain?: string;
          /** Whether the email domain is disposable. */
          disposable?: boolean;
          /** Whether APIVoid recommends blocking the email. */
          should_block?: boolean;
          /** APIVoid email score. */
          score?: number;
          /** APIVoid processing time in milliseconds. */
          elapsed_ms?: number;
          [key: string]: unknown;
        };
        /** Quota values parsed from the APIVoid X-Service-Quota response header. */
        quota: {
          /** The raw X-Service-Quota header value. */
          raw: string;
          /** The amount of credits consumed for the request. */
          callUsage?: number;
          /** The amount of credits available after the request. */
          available?: number;
          /** Unix timestamp when credits will next reset. */
          reset?: number;
          /** Whether overage is allowed on the subscription plan. */
          overageAllowed?: boolean;
          /** Whether overage is enabled for the account. */
          overageEnabled?: boolean;
          /** The amount of overage credits consumed. */
          overageValue?: number;
          /** The maximum overage credits allowed in the billing cycle. */
          overageLimit?: number;
        } | null;
      };
    };
  }
}
