import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate a MailGenius test email address for an inbound deliverability audit. */
    "mailgenius.create_email_audit": {
      input: Record<string, never>;
      output: {
        /** A JSON object returned by MailGenius. */
        audit: Record<string, unknown>;
      };
    };
    /** Get the MailGenius API token daily test limit, used count, and remaining count. */
    "mailgenius.get_daily_limit": {
      input: Record<string, never>;
      output: {
        /** A JSON object returned by MailGenius. */
        dailyLimit: Record<string, unknown>;
      };
    };
    /** Get the MailGenius result for a generated test email slug, including NOT_READY responses before analysis is complete. */
    "mailgenius.get_email_result": {
      input: {
        /**
         * The MailGenius test email slug returned by create_email_audit or list_email_audits.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** A JSON object returned by MailGenius. */
        result: Record<string, unknown>;
      };
    };
    /** List MailGenius generated test emails and their slugs, optionally filtered by time range and used state. */
    "mailgenius.list_email_audits": {
      input: {
        /**
         * The start timestamp in seconds.
         * @minimum 0
         */
        fromTimestamp?: number;
        /**
         * The end timestamp in seconds.
         * @minimum 0
         */
        toTimestamp?: number;
        /**
         * The one-based result page to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of audit items to return.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** Whether to return used or unused test email audit items. */
        used?: boolean;
      };
      output: {
        /** The test email audit items returned by MailGenius. */
        testEmails: Array<{
          /** The MailGenius slug used to fetch this test email result. */
          slug?: string;
          /**
           * The generated MailGenius test email address.
           * @format email
           */
          test_email?: string;
          [key: string]: unknown;
        }>;
        /** A JSON object returned by MailGenius. */
        raw: Record<string, unknown>;
      };
    };
  }
}
