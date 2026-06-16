import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve Emailable account information including owner email and available credits. */
    "emailable.get_account_info": {
      input: Record<string, never>;
      output: {
        /**
         * The email address of the Emailable account owner.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        owner_email: string;
        /**
         * The number of verification credits currently available on the account.
         * @minimum 0
         */
        available_credits: number;
      };
    };
    /** Retrieve the latest Emailable status and results for an existing batch verification job. */
    "emailable.get_batch_status": {
      input: {
        /**
         * The unique batch identifier returned by Emailable batch creation.
         * @minLength 1
         */
        batch_id: string;
      };
      output: {
        /**
         * The Emailable batch identifier.
         * @minLength 1
         */
        id: string;
        /** The current status message for the Emailable batch. */
        message: string;
        /**
         * The number of emails processed so far in the batch.
         * @minimum 0
         */
        processed?: number;
        /**
         * The total number of emails submitted in the batch.
         * @minimum 0
         */
        total?: number;
        /** The individual email verification results when Emailable returns inline batch results. */
        emails?: Array<{
          /**
           * The normalized email address verified by Emailable.
           * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
           * @format email
           */
          email: string;
          /** The verification state returned by Emailable: deliverable, undeliverable, risky, or unknown. */
          state: "deliverable" | "undeliverable" | "risky" | "unknown";
          /** The provider reason returned by Emailable for the verification result. */
          reason: string;
          /**
           * The Emailable deliverability score from 0 to 100.
           * @minimum 0
           */
          score?: number;
          /** The local part of the verified email address. */
          user?: string;
          /** The domain part of the verified email address. */
          domain?: string;
          /** Whether the email is hosted by a free email provider. */
          free?: boolean;
          /** Whether the email is a role-based address such as support@ or info@. */
          role?: boolean;
          /** Whether the domain appears to accept all inbound email addresses. */
          accept_all?: boolean;
          /** Whether the email belongs to a disposable or temporary email provider. */
          disposable?: boolean;
          /** Suggested corrected email address when Emailable detects a likely typo. */
          did_you_mean?: string;
          /** The MX record used during verification. */
          mx_record?: string;
          /** The SMTP provider identified for the email domain. */
          smtp_provider?: string;
          /** Whether the address is a no-reply address. */
          no_reply?: boolean;
          /** Whether the mailbox appears to be full. */
          mailbox_full?: boolean;
          /** The first name inferred from the email address, when available. */
          first_name?: string;
          /** The last name inferred from the email address, when available. */
          last_name?: string;
          /** The full name inferred from the email address, when available. */
          full_name?: string;
          /** The gender inferred from the email address, when available. */
          gender?: string;
          /** The tag portion of the email address, such as the value after a plus sign. */
          tag?: string;
          /** The verification duration in seconds. */
          duration?: number;
          [key: string]: unknown;
        }>;
        /** The download URL for large batch result exports, when Emailable returns one. */
        download_file?: string;
        /** Summary counts grouped by verification state for the Emailable batch. */
        total_counts?: {
          /**
           * The number of deliverable email addresses in the batch.
           * @minimum 0
           */
          deliverable?: number;
          /**
           * The number of undeliverable email addresses in the batch.
           * @minimum 0
           */
          undeliverable?: number;
          /**
           * The number of risky email addresses in the batch.
           * @minimum 0
           */
          risky?: number;
          /**
           * The number of emails with unknown status in the batch.
           * @minimum 0
           */
          unknown?: number;
          /**
           * The number of duplicate email addresses in the batch.
           * @minimum 0
           */
          duplicate?: number;
          /**
           * The number of emails processed so far in the batch.
           * @minimum 0
           */
          processed?: number;
          /**
           * The total number of emails included in the batch.
           * @minimum 0
           */
          total?: number;
          [key: string]: unknown;
        };
        /** Summary counts grouped by verification reason for the Emailable batch. */
        reason_counts?: {
          /**
           * The number of emails accepted by the destination mail server.
           * @minimum 0
           */
          accepted_email?: number;
          /**
           * The number of emails explicitly rejected by the destination mail server.
           * @minimum 0
           */
          rejected_email?: number;
          /**
           * The number of emails rejected because the email format is invalid.
           * @minimum 0
           */
          invalid_email?: number;
          /**
           * The number of emails rejected because the domain is invalid.
           * @minimum 0
           */
          invalid_domain?: number;
          /**
           * The number of emails rejected because the SMTP setup is invalid.
           * @minimum 0
           */
          invalid_smtp?: number;
          /**
           * The number of emails where Emailable could not connect to the mail server.
           * @minimum 0
           */
          no_connect?: number;
          /**
           * The number of emails where the SMTP server was unavailable.
           * @minimum 0
           */
          unavailable_smtp?: number;
          /**
           * The number of emails whose verification timed out.
           * @minimum 0
           */
          timeout?: number;
          /**
           * The number of emails flagged as low quality.
           * @minimum 0
           */
          low_quality?: number;
          /**
           * The number of emails with low deliverability.
           * @minimum 0
           */
          low_deliverability?: number;
          /**
           * The number of emails that ended with an unexpected verification error.
           * @minimum 0
           */
          unexpected_error?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create an Emailable batch verification job for a list of email addresses. */
    "emailable.verify_batch_emails": {
      input: {
        /**
         * The list of email addresses to verify in the Emailable batch request.
         * @minItems 2
         * @maxItems 50000
         */
        emails: Array<string>;
      };
      output: {
        /**
         * The unique identifier of the newly created Emailable batch.
         * @minLength 1
         */
        id: string;
        /** The status message returned after Emailable creates the batch. */
        message: string;
      };
    };
    /** Verify a single email address and return Emailable deliverability signals. */
    "emailable.verify_email": {
      input: {
        /**
         * The email address to verify with Emailable.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email: string;
      };
      output: {
        /**
         * The normalized email address verified by Emailable.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email: string;
        /** The verification state returned by Emailable: deliverable, undeliverable, risky, or unknown. */
        state: "deliverable" | "undeliverable" | "risky" | "unknown";
        /** The provider reason returned by Emailable for the verification result. */
        reason: string;
        /**
         * The Emailable deliverability score from 0 to 100.
         * @minimum 0
         */
        score?: number;
        /** The local part of the verified email address. */
        user?: string;
        /** The domain part of the verified email address. */
        domain?: string;
        /** Whether the email is hosted by a free email provider. */
        free?: boolean;
        /** Whether the email is a role-based address such as support@ or info@. */
        role?: boolean;
        /** Whether the domain appears to accept all inbound email addresses. */
        accept_all?: boolean;
        /** Whether the email belongs to a disposable or temporary email provider. */
        disposable?: boolean;
        /** Suggested corrected email address when Emailable detects a likely typo. */
        did_you_mean?: string;
        /** The MX record used during verification. */
        mx_record?: string;
        /** The SMTP provider identified for the email domain. */
        smtp_provider?: string;
        /** Whether the address is a no-reply address. */
        no_reply?: boolean;
        /** Whether the mailbox appears to be full. */
        mailbox_full?: boolean;
        /** The first name inferred from the email address, when available. */
        first_name?: string;
        /** The last name inferred from the email address, when available. */
        last_name?: string;
        /** The full name inferred from the email address, when available. */
        full_name?: string;
        /** The gender inferred from the email address, when available. */
        gender?: string;
        /** The tag portion of the email address, such as the value after a plus sign. */
        tag?: string;
        /** The verification duration in seconds. */
        duration?: number;
        [key: string]: unknown;
      };
    };
  }
}
