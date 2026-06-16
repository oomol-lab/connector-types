import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one Mails batch validation job for a list of email addresses. */
    "mails_so.create_validation_batch": {
      input: {
        /**
         * The list of email addresses to validate in one batch job.
         * @minItems 1
         */
        emails: Array<string>;
      };
      output: {
        /**
         * The batch job identifier.
         * @format uuid
         */
        id: string;
        /** The batch job name, or null when Mails did not return one. */
        name: string | null;
        /**
         * The ISO 8601 timestamp when the batch job was created.
         * @format date-time
         */
        createdAt: string;
        /**
         * The ISO 8601 timestamp when the batch job was last updated.
         * @format date-time
         */
        updatedAt: string;
        /** The batch job deletion timestamp, or null when the batch job has not been deleted. */
        deletedAt: string | null;
        /** The batch job completion timestamp, or null when the batch job is still running. */
        finishedAt: string | null;
        /**
         * The Mails user identifier that owns the batch job.
         * @format uuid
         */
        userId: string;
        /**
         * The number of emails in the batch job.
         * @minimum 0
         */
        size: number;
      };
    };
    /** Fetch one Mails batch validation job together with its email results. */
    "mails_so.get_validation_batch": {
      input: {
        /**
         * The batch job identifier returned by Mails.
         * @format uuid
         */
        batchId: string;
      };
      output: {
        /**
         * The batch job identifier.
         * @format uuid
         */
        id: string;
        /** The batch job name, or null when Mails did not return one. */
        name: string | null;
        /**
         * The ISO 8601 timestamp when the batch job was created.
         * @format date-time
         */
        createdAt: string;
        /**
         * The ISO 8601 timestamp when the batch job was last updated.
         * @format date-time
         */
        updatedAt: string;
        /** The batch job deletion timestamp, or null when the batch job has not been deleted. */
        deletedAt: string | null;
        /** The batch job completion timestamp, or null when the batch job is still running. */
        finishedAt: string | null;
        /**
         * The Mails user identifier that owns the batch job.
         * @format uuid
         */
        userId: string;
        /**
         * The number of emails in the batch job.
         * @minimum 0
         */
        size: number;
        /** The normalized validation results returned for this batch job. */
        emails: Array<{
          /**
           * The validation result identifier.
           * @format uuid
           */
          id: string;
          /**
           * The email address that was validated.
           * @format email
           */
          email: string;
          /** The email username, or null when Mails did not return one. */
          username: string | null;
          /** The email domain, or null when Mails did not return one. */
          domain: string | null;
          /** The MX record, or null when Mails did not return one. */
          mxRecord: string | null;
          /**
           * The validation score from 0 to 100 returned by Mails.
           * @minimum 0
           * @maximum 100
           */
          score: number;
          /** Whether the email format is valid. */
          isValidFormat: boolean;
          /** Whether the email domain is valid. */
          isValidDomain: boolean;
          /** Whether the MX record is valid, or null when Mails did not complete MX validation. */
          isValidMx: boolean | null;
          /** Whether the email was not found on a provider blocklist. */
          hasNoBlocklist: boolean;
          /** Whether the email domain is not configured as catch-all. */
          hasNoCatchall: boolean;
          /** Whether the email is not a generic role inbox. */
          hasNoGeneric: boolean;
          /** Whether the email uses a free mailbox provider. */
          isFree: boolean;
          /** The overall Mails validation result. */
          result: "deliverable" | "undeliverable" | "risky" | "unknown";
          /** The detailed reason returned by Mails for the validation result. */
          reason: "accepted_email" | "invalid_format" | "invalid_domain" | "invalid_smtp" | "rejected_email" | "catch_all" | "disposable" | "no_connect" | "timeout" | "other";
        }>;
      };
    };
    /** Validate one email address with the Mails single validation endpoint. */
    "mails_so.validate_email": {
      input: {
        /**
         * The email address to validate.
         * @format email
         */
        email: string;
      };
      output: {
        /**
         * The validation result identifier.
         * @format uuid
         */
        id: string;
        /**
         * The email address that was validated.
         * @format email
         */
        email: string;
        /** The email username, or null when Mails did not return one. */
        username: string | null;
        /** The email domain, or null when Mails did not return one. */
        domain: string | null;
        /** The MX record, or null when Mails did not return one. */
        mxRecord: string | null;
        /**
         * The validation score from 0 to 100 returned by Mails.
         * @minimum 0
         * @maximum 100
         */
        score: number;
        /** Whether the email format is valid. */
        isValidFormat: boolean;
        /** Whether the email domain is valid. */
        isValidDomain: boolean;
        /** Whether the MX record is valid, or null when Mails did not complete MX validation. */
        isValidMx: boolean | null;
        /** Whether the email was not found on a provider blocklist. */
        hasNoBlocklist: boolean;
        /** Whether the email domain is not configured as catch-all. */
        hasNoCatchall: boolean;
        /** Whether the email is not a generic role inbox. */
        hasNoGeneric: boolean;
        /** Whether the email uses a free mailbox provider. */
        isFree: boolean;
        /** The overall Mails validation result. */
        result: "deliverable" | "undeliverable" | "risky" | "unknown";
        /** The detailed reason returned by Mails for the validation result. */
        reason: "accepted_email" | "invalid_format" | "invalid_domain" | "invalid_smtp" | "rejected_email" | "catch_all" | "disposable" | "no_connect" | "timeout" | "other";
      };
    };
  }
}
