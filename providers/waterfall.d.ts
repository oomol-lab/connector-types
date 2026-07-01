import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check whether a contact changed jobs using Waterfall job change detection. */
    "waterfall.check_job_change": {
      input: Record<string, unknown>;
      output: {
        /** The Waterfall job ID. */
        job_id: string;
        /** The current Waterfall job status. */
        status: string;
        /** The raw object returned by Waterfall. */
        input?: Record<string, unknown>;
        /** The raw object returned by Waterfall. */
        output?: Record<string, unknown>;
        /** The raw object returned by Waterfall. */
        raw: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get Waterfall usage metrics for the authenticated API key and full account. */
    "waterfall.get_account_usage": {
      input: {
        /**
         * Optional month in YYYY-MM format used to scope usage counters.
         * @minLength 7
         * @maxLength 7
         */
        month?: string;
      };
      output: {
        /** Usage counters returned by Waterfall. */
        key_usage: {
          /** Number of Prospector Launcher jobs submitted. */
          prospector_requests?: number;
          /** Number of contacts returned by Prospector. */
          prospector_persons?: number;
          /** Phone numbers returned via Prospector. */
          prospector_persons_phones?: number;
          /** Number of Contact Enrichment jobs submitted. */
          enrichment_contact_requests?: number;
          /** Contacts successfully enriched. */
          enrichment_contact_persons?: number;
          /** Phone numbers returned via Contact Enrichment. */
          enrichment_contact_persons_phones?: number;
          /** Number of Phone Enrichment jobs submitted. */
          enrichment_phone_requests?: number;
          /** Phone numbers successfully returned. */
          enrichment_phone_phones?: number;
          /** Number of Company Enrichment jobs submitted. */
          enrichment_company_requests?: number;
          /** Companies successfully enriched. */
          enrichment_company_companies?: number;
          /** Number of Search Contact jobs submitted. */
          search_contact_requests?: number;
          /** Contacts returned by Search Contact. */
          search_contact_found?: number;
          /** Number of Email Verifier calls made. */
          verify_email_requests?: number;
          /** Emails that returned a definitive verification status. */
          verify_email_verified?: number;
          /** Remaining account balance in USD. */
          balance_remaining_usd?: number;
          [key: string]: unknown;
        };
        /** Usage counters returned by Waterfall. */
        account_usage: {
          /** Number of Prospector Launcher jobs submitted. */
          prospector_requests?: number;
          /** Number of contacts returned by Prospector. */
          prospector_persons?: number;
          /** Phone numbers returned via Prospector. */
          prospector_persons_phones?: number;
          /** Number of Contact Enrichment jobs submitted. */
          enrichment_contact_requests?: number;
          /** Contacts successfully enriched. */
          enrichment_contact_persons?: number;
          /** Phone numbers returned via Contact Enrichment. */
          enrichment_contact_persons_phones?: number;
          /** Number of Phone Enrichment jobs submitted. */
          enrichment_phone_requests?: number;
          /** Phone numbers successfully returned. */
          enrichment_phone_phones?: number;
          /** Number of Company Enrichment jobs submitted. */
          enrichment_company_requests?: number;
          /** Companies successfully enriched. */
          enrichment_company_companies?: number;
          /** Number of Search Contact jobs submitted. */
          search_contact_requests?: number;
          /** Contacts returned by Search Contact. */
          search_contact_found?: number;
          /** Number of Email Verifier calls made. */
          verify_email_requests?: number;
          /** Emails that returned a definitive verification status. */
          verify_email_verified?: number;
          /** Remaining account balance in USD. */
          balance_remaining_usd?: number;
          [key: string]: unknown;
        };
        /** Remaining account balance in USD. */
        balance_remaining_usd: number;
        /** The raw object returned by Waterfall. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve Waterfall company enrichment job state and output by job ID. */
    "waterfall.get_company_enrichment": {
      input: {
        /**
         * The Waterfall job ID returned by a launcher action.
         * @minLength 1
         */
        job_id: string;
      };
      output: {
        /** The Waterfall job ID. */
        job_id: string;
        /** The current Waterfall job status. */
        status: string;
        /** The raw object returned by Waterfall. */
        input?: Record<string, unknown>;
        /** The raw object returned by Waterfall. */
        output?: Record<string, unknown>;
        /** The raw object returned by Waterfall. */
        raw: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve Waterfall contact enrichment job state and output by job ID. */
    "waterfall.get_contact_enrichment": {
      input: {
        /**
         * The Waterfall job ID returned by a launcher action.
         * @minLength 1
         */
        job_id: string;
      };
      output: {
        /** The Waterfall job ID. */
        job_id: string;
        /** The current Waterfall job status. */
        status: string;
        /** The raw object returned by Waterfall. */
        input?: Record<string, unknown>;
        /** The raw object returned by Waterfall. */
        output?: Record<string, unknown>;
        /** The raw object returned by Waterfall. */
        raw: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Launch a Waterfall company enrichment job and return the job envelope. */
    "waterfall.launch_company_enrichment": {
      input: Record<string, unknown>;
      output: {
        /** The Waterfall job ID. */
        job_id: string;
        /** The current Waterfall job status. */
        status: string;
        /** The raw object returned by Waterfall. */
        input?: Record<string, unknown>;
        /** The raw object returned by Waterfall. */
        output?: Record<string, unknown>;
        /** The raw object returned by Waterfall. */
        raw: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Launch a Waterfall contact enrichment job and return the job envelope. */
    "waterfall.launch_contact_enrichment": {
      input: Record<string, unknown>;
      output: {
        /** The Waterfall job ID. */
        job_id: string;
        /** The current Waterfall job status. */
        status: string;
        /** The raw object returned by Waterfall. */
        input?: Record<string, unknown>;
        /** The raw object returned by Waterfall. */
        output?: Record<string, unknown>;
        /** The raw object returned by Waterfall. */
        raw: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Verify one email address with Waterfall and return deliverability status. */
    "waterfall.verify_email": {
      input: {
        /**
         * Email address to verify.
         * @format email
         */
        email: string;
      };
      output: {
        /** The Waterfall email deliverability status. */
        status: "valid" | "risky" | "invalid" | "unknown";
        /** The email address that Waterfall verified. */
        email: string;
        /** Optional Waterfall reason for the verification status. */
        reason: string;
        /** Usage counters returned by Waterfall. */
        usage: {
          /** Number of Prospector Launcher jobs submitted. */
          prospector_requests?: number;
          /** Number of contacts returned by Prospector. */
          prospector_persons?: number;
          /** Phone numbers returned via Prospector. */
          prospector_persons_phones?: number;
          /** Number of Contact Enrichment jobs submitted. */
          enrichment_contact_requests?: number;
          /** Contacts successfully enriched. */
          enrichment_contact_persons?: number;
          /** Phone numbers returned via Contact Enrichment. */
          enrichment_contact_persons_phones?: number;
          /** Number of Phone Enrichment jobs submitted. */
          enrichment_phone_requests?: number;
          /** Phone numbers successfully returned. */
          enrichment_phone_phones?: number;
          /** Number of Company Enrichment jobs submitted. */
          enrichment_company_requests?: number;
          /** Companies successfully enriched. */
          enrichment_company_companies?: number;
          /** Number of Search Contact jobs submitted. */
          search_contact_requests?: number;
          /** Contacts returned by Search Contact. */
          search_contact_found?: number;
          /** Number of Email Verifier calls made. */
          verify_email_requests?: number;
          /** Emails that returned a definitive verification status. */
          verify_email_verified?: number;
          /** Remaining account balance in USD. */
          balance_remaining_usd?: number;
          [key: string]: unknown;
        } | null;
        /** The raw object returned by Waterfall. */
        raw: Record<string, unknown>;
      };
    };
  }
}
