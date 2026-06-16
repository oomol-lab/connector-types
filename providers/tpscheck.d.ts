import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check up to 100 UK phone numbers against TPS and CTPS and return the TPSCheck v2 batch response. */
    "tpscheck.batch_check_phones": {
      input: {
        /**
         * List of 1 to 100 UK phone numbers to check with TPSCheck.
         * @minItems 1
         * @maxItems 100
         */
        phones: Array<string>;
      };
      output: {
        /** Number of results returned by TPSCheck. */
        total: number;
        /** Batch TPSCheck v2 results for each submitted phone number. */
        results: Array<{
          /**
           * Phone number as submitted to TPSCheck.
           * @minLength 1
           */
          input: string;
          /**
           * E.164 formatted phone number returned by TPSCheck.
           * @minLength 1
           */
          e164?: string;
          /** Whether TPSCheck considers the phone number valid. */
          valid: boolean;
          /** Line details returned by TPSCheck in the v2 phone check response. */
          line?: {
            /**
             * Line type returned by TPSCheck, such as landline or mobile.
             * @minLength 1
             */
            type?: string;
            /**
             * Original carrier name returned by TPSCheck for the phone number.
             * @minLength 1
             */
            original_carrier?: string;
            /**
             * Location returned by TPSCheck for the phone number.
             * @minLength 1
             */
            location?: string;
            /**
             * Country or nation name returned by TPSCheck.
             * @minLength 1
             */
            country?: string;
            /**
             * Dialling prefix returned by TPSCheck for the phone number.
             * @minLength 1
             */
            prefix?: string;
            [key: string]: unknown;
          };
          /** Reachability details returned by TPSCheck in the v2 phone check response. */
          reachability?: {
            /**
             * Reachability status returned by TPSCheck.
             * @minLength 1
             */
            status?: string;
            /**
             * Reachability confidence returned by TPSCheck.
             * @minLength 1
             */
            confidence?: string;
            [key: string]: unknown;
          };
          /** Whether the number is registered with the TPS. */
          tps?: boolean;
          /** Whether the number is registered with the CTPS. */
          ctps?: boolean;
          /** Risk scoring block returned by TPSCheck v2 plans when available. */
          risk?: {
            /** Compliance risk score returned by TPSCheck. */
            score?: number;
            /**
             * Risk level returned by TPSCheck, such as LOW or CRITICAL.
             * @minLength 1
             */
            level?: string;
            /** Risk factors returned by TPSCheck when risk scoring is available. */
            factors?: string | Array<string>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Check one UK phone number against TPS and CTPS and return the TPSCheck v2 response. */
    "tpscheck.check_phone": {
      input: {
        /**
         * UK phone number to check with TPSCheck.
         * @minLength 1
         */
        phone: string;
      };
      output: {
        /**
         * Phone number as submitted to TPSCheck.
         * @minLength 1
         */
        input: string;
        /**
         * E.164 formatted phone number returned by TPSCheck.
         * @minLength 1
         */
        e164?: string;
        /** Whether TPSCheck considers the phone number valid. */
        valid: boolean;
        /** Line details returned by TPSCheck in the v2 phone check response. */
        line?: {
          /**
           * Line type returned by TPSCheck, such as landline or mobile.
           * @minLength 1
           */
          type?: string;
          /**
           * Original carrier name returned by TPSCheck for the phone number.
           * @minLength 1
           */
          original_carrier?: string;
          /**
           * Location returned by TPSCheck for the phone number.
           * @minLength 1
           */
          location?: string;
          /**
           * Country or nation name returned by TPSCheck.
           * @minLength 1
           */
          country?: string;
          /**
           * Dialling prefix returned by TPSCheck for the phone number.
           * @minLength 1
           */
          prefix?: string;
          [key: string]: unknown;
        };
        /** Reachability details returned by TPSCheck in the v2 phone check response. */
        reachability?: {
          /**
           * Reachability status returned by TPSCheck.
           * @minLength 1
           */
          status?: string;
          /**
           * Reachability confidence returned by TPSCheck.
           * @minLength 1
           */
          confidence?: string;
          [key: string]: unknown;
        };
        /** Whether the number is registered with the TPS. */
        tps?: boolean;
        /** Whether the number is registered with the CTPS. */
        ctps?: boolean;
        /** Risk scoring block returned by TPSCheck v2 plans when available. */
        risk?: {
          /** Compliance risk score returned by TPSCheck. */
          score?: number;
          /**
           * Risk level returned by TPSCheck, such as LOW or CRITICAL.
           * @minLength 1
           */
          level?: string;
          /** Risk factors returned by TPSCheck when risk scoring is available. */
          factors?: string | Array<string>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve current TPSCheck usage, remaining requests, and plan reset details. */
    "tpscheck.get_credits": {
      input: Record<string, never>;
      output: {
        /** Number of API requests used in the current billing period. */
        requests_used: number;
        /** Number of API requests remaining in the current billing period. */
        requests_remaining: number;
        /** Monthly request limit for the current TPSCheck plan. */
        monthly_limit: number;
        /**
         * Current TPSCheck subscription plan name.
         * @minLength 1
         */
        plan: string;
        /**
         * ISO 8601 timestamp when TPSCheck usage resets.
         * @minLength 1
         */
        reset_date: string;
        [key: string]: unknown;
      };
    };
  }
}
