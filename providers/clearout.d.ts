import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current Clearout credit balance and daily verification limits. */
    "clearout.get_available_credits": {
      input: Record<string, never>;
      output: {
        /** The upstream Clearout response status. */
        status: string;
        /** The Clearout credits response data. */
        data: {
          /** The remaining available credits. */
          available_credits: number;
          /** The Clearout credits detail object. */
          credits: {
            /** The remaining available credits. */
            available: number;
            /** The current subscription label or identifier. */
            subs?: string | null;
            /** The remaining daily verify limit. */
            available_daily_verify_limit?: string | null;
            /** The next daily verify limit reset date. */
            reset_daily_verify_limit_date?: string | null;
            /** The total credits in the current plan. */
            total?: number;
            [key: string]: unknown;
          };
          /** The low credit balance alert threshold. */
          low_credit_balance_min_threshold?: number | null;
        };
      };
    };
    /** Verify an email address in real time and return the full Clearout verification result. */
    "clearout.instant_verify_email": {
      input: {
        /**
         * Email address to verify.
         * @format email
         */
        email: string;
        /**
         * Request wait time in milliseconds.
         * @minimum 1
         * @maximum 180000
         */
        timeout?: number;
      };
      output: {
        /** The upstream Clearout response status. */
        status: string;
        /** The Clearout instant verification result. */
        data: {
          /** The email address returned by Clearout. */
          email_address: string;
          /** Whether Clearout marks the address safe to send. */
          safe_to_send: string;
          /** The verification status returned by Clearout. */
          status: string;
          /** The verification timestamp returned by Clearout. */
          verified_on: string;
          /** The verification latency in milliseconds. */
          time_taken: number;
          /** The verification sub-status returned by Clearout. */
          sub_status?: {
            /** The upstream verification sub-status code. */
            code: number;
            /** The upstream verification sub-status description. */
            desc: string;
            [key: string]: unknown;
          } | null;
          /** Additional verification details returned by Clearout. */
          detail_info?: {
            /** The account-level verification detail. */
            account?: string;
            /** The domain-level verification detail. */
            domain?: string;
            [key: string]: unknown;
          } | null;
          /** Whether the address is disposable. */
          disposable?: string;
          /** Whether the address belongs to a free email provider. */
          free?: string;
          /** Whether the address is role-based. */
          role?: string;
          /** Whether the address looks like gibberish. */
          gibberish?: string;
          /** The suggested corrected email address, if any. */
          suggested_email_address?: string | null;
          /** The associated profile reference, if any. */
          profile?: string | null;
          /** The bounce type classification, if any. */
          bounce_type?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Check whether an email address belongs to a business account. */
    "clearout.verify_business_account_email": {
      input: {
        /**
         * Email address to verify.
         * @format email
         */
        email: string;
        /**
         * Request wait time in milliseconds.
         * @minimum 1
         * @maximum 180000
         */
        timeout?: number;
      };
      output: {
        /** The upstream Clearout response status. */
        status: string;
        /** The Clearout attribute verification result. */
        data: {
          /** The email address returned by Clearout. */
          email_address: string;
          /** The verification timestamp returned by Clearout. */
          verified_on: string;
          /** The verification latency in milliseconds. */
          time_taken: number;
          /** Whether the address is catch-all. */
          catchall?: string;
          /** Whether the address is disposable. */
          disposable?: string;
          /** Whether the address belongs to a free email provider. */
          free?: string;
          /** Whether the address is role-based. */
          role?: string;
          /** Whether the address looks like gibberish. */
          gibberish?: string;
          /** Whether the address is a business account. */
          business_account?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Check whether an email address belongs to a catch-all domain. */
    "clearout.verify_catch_all_email": {
      input: {
        /**
         * Email address to verify.
         * @format email
         */
        email: string;
        /**
         * Request wait time in milliseconds.
         * @minimum 1
         * @maximum 180000
         */
        timeout?: number;
      };
      output: {
        /** The upstream Clearout response status. */
        status: string;
        /** The Clearout attribute verification result. */
        data: {
          /** The email address returned by Clearout. */
          email_address: string;
          /** The verification timestamp returned by Clearout. */
          verified_on: string;
          /** The verification latency in milliseconds. */
          time_taken: number;
          /** Whether the address is catch-all. */
          catchall?: string;
          /** Whether the address is disposable. */
          disposable?: string;
          /** Whether the address belongs to a free email provider. */
          free?: string;
          /** Whether the address is role-based. */
          role?: string;
          /** Whether the address looks like gibberish. */
          gibberish?: string;
          /** Whether the address is a business account. */
          business_account?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Check whether an email address belongs to a disposable email service. */
    "clearout.verify_disposable_email": {
      input: {
        /**
         * Email address to verify.
         * @format email
         */
        email: string;
        /**
         * Request wait time in milliseconds.
         * @minimum 1
         * @maximum 180000
         */
        timeout?: number;
      };
      output: {
        /** The upstream Clearout response status. */
        status: string;
        /** The Clearout attribute verification result. */
        data: {
          /** The email address returned by Clearout. */
          email_address: string;
          /** The verification timestamp returned by Clearout. */
          verified_on: string;
          /** The verification latency in milliseconds. */
          time_taken: number;
          /** Whether the address is catch-all. */
          catchall?: string;
          /** Whether the address is disposable. */
          disposable?: string;
          /** Whether the address belongs to a free email provider. */
          free?: string;
          /** Whether the address is role-based. */
          role?: string;
          /** Whether the address looks like gibberish. */
          gibberish?: string;
          /** Whether the address is a business account. */
          business_account?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Check whether an email address belongs to a free email provider. */
    "clearout.verify_free_account_email": {
      input: {
        /**
         * Email address to verify.
         * @format email
         */
        email: string;
        /**
         * Request wait time in milliseconds.
         * @minimum 1
         * @maximum 180000
         */
        timeout?: number;
      };
      output: {
        /** The upstream Clearout response status. */
        status: string;
        /** The Clearout attribute verification result. */
        data: {
          /** The email address returned by Clearout. */
          email_address: string;
          /** The verification timestamp returned by Clearout. */
          verified_on: string;
          /** The verification latency in milliseconds. */
          time_taken: number;
          /** Whether the address is catch-all. */
          catchall?: string;
          /** Whether the address is disposable. */
          disposable?: string;
          /** Whether the address belongs to a free email provider. */
          free?: string;
          /** Whether the address is role-based. */
          role?: string;
          /** Whether the address looks like gibberish. */
          gibberish?: string;
          /** Whether the address is a business account. */
          business_account?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Check whether an email address looks like a gibberish account. */
    "clearout.verify_gibberish_email": {
      input: {
        /**
         * Email address to verify.
         * @format email
         */
        email: string;
        /**
         * Request wait time in milliseconds.
         * @minimum 1
         * @maximum 180000
         */
        timeout?: number;
      };
      output: {
        /** The upstream Clearout response status. */
        status: string;
        /** The Clearout attribute verification result. */
        data: {
          /** The email address returned by Clearout. */
          email_address: string;
          /** The verification timestamp returned by Clearout. */
          verified_on: string;
          /** The verification latency in milliseconds. */
          time_taken: number;
          /** Whether the address is catch-all. */
          catchall?: string;
          /** Whether the address is disposable. */
          disposable?: string;
          /** Whether the address belongs to a free email provider. */
          free?: string;
          /** Whether the address is role-based. */
          role?: string;
          /** Whether the address looks like gibberish. */
          gibberish?: string;
          /** Whether the address is a business account. */
          business_account?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Check whether an email address is a role-based account. */
    "clearout.verify_role_account_email": {
      input: {
        /**
         * Email address to verify.
         * @format email
         */
        email: string;
        /**
         * Request wait time in milliseconds.
         * @minimum 1
         * @maximum 180000
         */
        timeout?: number;
      };
      output: {
        /** The upstream Clearout response status. */
        status: string;
        /** The Clearout attribute verification result. */
        data: {
          /** The email address returned by Clearout. */
          email_address: string;
          /** The verification timestamp returned by Clearout. */
          verified_on: string;
          /** The verification latency in milliseconds. */
          time_taken: number;
          /** Whether the address is catch-all. */
          catchall?: string;
          /** Whether the address is disposable. */
          disposable?: string;
          /** Whether the address belongs to a free email provider. */
          free?: string;
          /** Whether the address is role-based. */
          role?: string;
          /** Whether the address looks like gibberish. */
          gibberish?: string;
          /** Whether the address is a business account. */
          business_account?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
