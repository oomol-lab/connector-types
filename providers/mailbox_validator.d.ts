import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check whether an email address belongs to a disposable email provider. */
    "mailbox_validator.check_disposable_email": {
      input: {
        /**
         * The email address to check.
         * @format email
         */
        email: string;
      };
      output: {
        /** The input email address returned by MailboxValidator. */
        email_address: string;
        /** Whether the email address is from a disposable email provider. */
        is_disposable: boolean;
        /** Number of API credits currently available. */
        credits_available: number;
      };
    };
    /** Check whether an email address belongs to a free email provider. */
    "mailbox_validator.check_free_email": {
      input: {
        /**
         * The email address to check.
         * @format email
         */
        email: string;
      };
      output: {
        /** The input email address returned by MailboxValidator. */
        email_address: string;
        /** Whether the email address is from a free email provider. */
        is_free: boolean;
        /** Number of API credits currently available. */
        credits_available: number;
      };
    };
    /** Validate a single email address and return MailboxValidator deliverability signals. */
    "mailbox_validator.validate_email": {
      input: {
        /**
         * The email address to check.
         * @format email
         */
        email: string;
      };
      output: {
        /** The input email address returned by MailboxValidator. */
        email_address: string;
        /** The sanitized base email address returned by MailboxValidator. */
        base_email_address?: string;
        /** The email domain returned by MailboxValidator. */
        domain?: string;
        /** MailboxValidator boolean signal, or null when the check is not applicable. */
        is_free?: boolean | null;
        /** Whether the email address syntax is valid. */
        is_syntax?: boolean;
        /** MailboxValidator boolean signal, or null when the check is not applicable. */
        is_domain?: boolean | null;
        /** MailboxValidator boolean signal, or null when the check is not applicable. */
        is_smtp?: boolean | null;
        /** MailboxValidator boolean signal, or null when the check is not applicable. */
        is_verified?: boolean | null;
        /** MailboxValidator boolean signal, or null when the check is not applicable. */
        is_server_down?: boolean | null;
        /** MailboxValidator boolean signal, or null when the check is not applicable. */
        is_greylisted?: boolean | null;
        /** MailboxValidator boolean signal, or null when the check is not applicable. */
        is_disposable?: boolean | null;
        /** MailboxValidator boolean signal, or null when the check is not applicable. */
        is_suppressed?: boolean | null;
        /** MailboxValidator boolean signal, or null when the check is not applicable. */
        is_role?: boolean | null;
        /** MailboxValidator boolean signal, or null when the check is not applicable. */
        is_high_risk?: boolean | null;
        /** MailboxValidator boolean signal, or null when the check is not applicable. */
        is_catchall?: boolean | null;
        /** Whether the email domain enforces DMARC. */
        is_dmarc_enforced?: boolean;
        /** Whether the email domain uses strict SPF. */
        is_strict_spf?: boolean;
        /** Whether the email domain has a reachable website. */
        website_exist?: boolean;
        /** MailboxValidator reputation score for the email address. */
        mailboxvalidator_score?: number;
        /** Time taken by MailboxValidator to produce the result, in seconds. */
        time_taken?: number;
        /** Whether MailboxValidator considers the email address valid. */
        status?: boolean;
        /** Number of validation credits currently available. */
        credits_available?: number;
      };
    };
  }
}
