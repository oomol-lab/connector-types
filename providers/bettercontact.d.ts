import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get BetterContact credits for the connected account email or an optional email override. */
    "bettercontact.get_account_balance": {
      input: {
        /**
         * Optional BetterContact account email to query instead of the email stored during connection.
         * @format email
         */
        email?: string;
      };
      output: {
        /** Whether BetterContact reported success for the account request. */
        success: boolean;
        /** The remaining BetterContact credits for the queried account. */
        creditsLeft: number;
        /**
         * The BetterContact account email returned by the credits endpoint.
         * @format email
         */
        email: string;
        /** The raw BetterContact account payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the current BetterContact enrichment result for a submitted request ID. */
    "bettercontact.get_enrichment_result": {
      input: {
        /**
         * The BetterContact request ID returned by submit_enrichment.
         * @minLength 1
         */
        requestId: string;
      };
      output: {
        /**
         * The BetterContact request ID.
         * @minLength 1
         */
        requestId: string;
        /**
         * The BetterContact request status string.
         * @minLength 1
         */
        status: string;
        /** The BetterContact credits consumed by this enrichment request when available. */
        creditsConsumed: number | null;
        /** The BetterContact credits remaining after this enrichment request when available. */
        creditsLeft: number | null;
        /** Summary counters returned by BetterContact enrichment results when available. */
        summary: {
          /** The total number of submitted leads. */
          total: number | null;
          /** The number of leads with a valid contact result. */
          valid: number | null;
          /** The number of catch-all email results. */
          catchAll: number | null;
          /** The number of safe catch-all email results. */
          catchAllSafe: number | null;
          /** The number of unsafe catch-all email results. */
          catchAllNotSafe: number | null;
          /** The number of undeliverable email results. */
          undeliverable: number | null;
          /** The number of leads for which no contact data was found. */
          notFound: number | null;
        } | null;
        /** The normalized BetterContact enrichment result records. */
        results: Array<{
          /** Whether BetterContact enriched this lead. */
          enriched: boolean | null;
          /**
           * The BetterContact email provider label returned for this lead when available.
           * @minLength 1
           */
          emailProvider: string | null;
          /**
           * The enriched contact first name when available.
           * @minLength 1
           */
          contactFirstName: string | null;
          /**
           * The enriched contact last name when available.
           * @minLength 1
           */
          contactLastName: string | null;
          /**
           * The enriched work email address when available.
           * @minLength 1
           */
          contactEmailAddress: string | null;
          /**
           * The BetterContact email status string when available.
           * @minLength 1
           */
          contactEmailAddressStatus: string | null;
          /**
           * The enriched contact gender when available.
           * @minLength 1
           */
          contactGender: string | null;
          /**
           * The enriched contact job title when available.
           * @minLength 1
           */
          contactJobTitle: string | null;
          /** The raw BetterContact result record. */
          raw: Record<string, unknown>;
        }>;
        /** The raw BetterContact enrichment payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Submit one or more leads to BetterContact waterfall enrichment and return the request handle. */
    "bettercontact.submit_enrichment": {
      input: {
        /**
         * The leads to enrich. BetterContact supports up to 100 leads per request.
         * @minItems 1
         * @maxItems 100
         */
        leads: Array<{
          /**
           * The contact first name.
           * @minLength 1
           */
          firstName: string;
          /**
           * The contact last name.
           * @minLength 1
           */
          lastName: string;
          /**
           * The contact company name when known.
           * @minLength 1
           */
          company?: string;
          /**
           * The contact company domain when known.
           * @minLength 1
           */
          companyDomain?: string;
          /**
           * The public LinkedIn profile URL for the contact.
           * @format uri
           */
          linkedinUrl?: string;
          /** Arbitrary custom fields BetterContact should echo back in the enrichment result. */
          customFields?: Record<string, unknown>;
        }>;
        /** Whether BetterContact should enrich work email addresses for the submitted leads. */
        enrichEmailAddress: boolean;
        /** Whether BetterContact should enrich direct phone numbers for the submitted leads. */
        enrichPhoneNumber: boolean;
        /**
         * Optional webhook URL where BetterContact should push the enrichment result.
         * @format uri
         */
        webhookUrl?: string;
        /**
         * Optional BetterContact process flow ID when your account uses the process flow add-on.
         * @minLength 1
         */
        processFlowId?: string;
      };
      output: {
        /** Whether BetterContact accepted the enrichment request. */
        success: boolean;
        /**
         * The BetterContact request ID used to fetch enrichment results.
         * @minLength 1
         */
        requestId: string;
        /**
         * The BetterContact acceptance message.
         * @minLength 1
         */
        message: string;
      };
    };
  }
}
