import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve UserCheck account information, plan details, and current API usage. */
    "mailcheck.get_status": {
      input: Record<string, never>;
      output: {
        /** The UserCheck status payload wrapped for connector output. */
        status: {
          /** The top-level status string returned by the status endpoint. */
          status: string;
          /** The account block returned by the UserCheck status endpoint. */
          account: {
            /** The current UserCheck plan information. */
            plan: {
              /** The name of the current UserCheck plan. */
              name: string;
              /** The total credits included in the current plan. */
              credits: number;
              /** The maximum number of requests per second allowed by the current plan. */
              rate_limit: number;
            };
            /** The current UserCheck account owner information. */
            user: {
              /** The name of the UserCheck account owner. */
              name: string;
              /**
               * The email address of the UserCheck account owner.
               * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
               * @format email
               */
              email: string;
            };
          };
          /** The usage block returned by the UserCheck status endpoint. */
          usage: {
            /** The total usage limit for the current billing period. */
            limit: number;
            /** The number of credits already used in the current billing period. */
            current: number;
            /** The number of credits remaining in the current billing period. */
            remaining: number;
            /** The ISO 8601 timestamp when the current billing period resets. */
            reset_at: string;
          };
        };
      };
    };
    /** Validate a domain and return UserCheck domain-level risk and MX signals. */
    "mailcheck.validate_domain": {
      input: {
        /**
         * The domain to validate with UserCheck.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** The UserCheck domain validation payload. */
        domain: {
          /** The HTTP-style status code returned by the domain endpoint. */
          status: number;
          /** The normalized domain returned by UserCheck. */
          domain: string;
          /** The optional 0 to 100 domain authority score returned by UserCheck. */
          domain_authority?: number | null;
          /** The optional TLD trust score returned by UserCheck. */
          tld_trust?: number | null;
          /** The optional number of days since the domain was registered. */
          domain_age_in_days?: number | null;
          /** Whether the domain has valid MX records. */
          mx: boolean;
          /** The MX records returned for the validated domain. */
          mx_records: Array<{
            /** The hostname of the MX server. */
            hostname: string;
            /** The priority assigned to the MX record. */
            priority: number;
          }>;
          /** The recognized MX providers returned for the validated domain. */
          mx_providers: Array<{
            /** The stable provider identifier returned by UserCheck. */
            slug: string;
            /** The provider category assigned to the detected MX provider. */
            type: "mailbox" | "hosting" | "email_api" | "security_gateway" | "forwarding";
            /** The onboarding or commitment grade assigned to the detected MX provider. */
            grade: "enterprise" | "professional" | "standard" | "basic";
          }>;
          /** Whether the domain belongs to a disposable email provider. */
          disposable: boolean;
          /** Whether the domain is a public email service. */
          public_domain: boolean;
          /** Whether the domain is used for email forwarding. */
          relay_domain: boolean;
          /** Whether the domain is associated with spam activity. */
          spam: boolean;
          /** The typo correction suggestion returned by UserCheck, if any. */
          did_you_mean?: string | null;
          /** Whether the domain appears on the account blocklist. */
          blocklisted?: boolean;
          /** The disposable provider domain returned by UserCheck when available. */
          disposable_provider?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Validate a single email address and return UserCheck deliverability and risk signals. */
    "mailcheck.verify_email": {
      input: {
        /**
         * The email address to validate with UserCheck.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email: string;
      };
      output: {
        /** The UserCheck email validation payload. */
        email: {
          /** The HTTP-style status code returned by the email endpoint. */
          status: number;
          /** The normalized email address returned by UserCheck. */
          email: string;
          /** The normalized email address returned after alias or typo normalization. */
          normalized_email: string;
          /** The domain extracted from the validated email address. */
          domain: string;
          /** The optional 0 to 100 domain authority score returned by UserCheck. */
          domain_authority?: number | null;
          /** The optional TLD trust score returned by UserCheck. */
          tld_trust?: number | null;
          /** The optional number of days since the domain was registered. */
          domain_age_in_days?: number | null;
          /** Whether the email domain has valid MX records. */
          mx: boolean;
          /** The MX records returned for the email domain. */
          mx_records: Array<{
            /** The hostname of the MX server. */
            hostname: string;
            /** The priority assigned to the MX record. */
            priority: number;
          }>;
          /** The recognized MX providers returned for the email domain. */
          mx_providers: Array<{
            /** The stable provider identifier returned by UserCheck. */
            slug: string;
            /** The provider category assigned to the detected MX provider. */
            type: "mailbox" | "hosting" | "email_api" | "security_gateway" | "forwarding";
            /** The onboarding or commitment grade assigned to the detected MX provider. */
            grade: "enterprise" | "professional" | "standard" | "basic";
          }>;
          /** Whether the email is disposable. */
          disposable: boolean;
          /** Whether the email uses a public mailbox domain. */
          public_domain: boolean;
          /** Whether the email uses a forwarding or relay domain. */
          relay_domain: boolean;
          /** Whether the original email included an alias component according to UserCheck. */
          alias: boolean;
          /** Whether the email is a role account. */
          role_account: boolean;
          /** Whether the email domain is associated with spam activity. */
          spam: boolean;
          /** The typo correction suggestion returned by UserCheck, if any. */
          did_you_mean?: string | null;
          /** Whether the email domain appears on the account blocklist. */
          blocklisted?: boolean;
          /** The disposable provider domain returned by UserCheck when available. */
          disposable_provider?: string | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
