import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Validate a single email address and return Mailboxlayer quality signals. */
    "mailboxlayer.check_email": {
      input: {
        /**
         * The email address to validate.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email: string;
        /** Whether to perform the SMTP validation check. */
        smtp?: boolean;
        /** Whether to enable pretty-printed JSON output for debugging. */
        format?: boolean;
        /** Whether to check whether the domain has MX records. */
        mx?: boolean;
        /** Whether to enable this Mailboxlayer validation check. When provided, the flag is sent as 1 or 0. */
        free?: boolean;
        /** Whether to enable this Mailboxlayer validation check. When provided, the flag is sent as 1 or 0. */
        role?: boolean;
        /** Whether to enable this Mailboxlayer validation check. When provided, the flag is sent as 1 or 0. */
        catch_all?: boolean;
        /** Whether to enable this Mailboxlayer validation check. When provided, the flag is sent as 1 or 0. */
        disposable?: boolean;
      };
      output: {
        /** The validated email address. */
        email: string;
        /** Suggested corrected email address when a typo is detected. */
        did_you_mean: string;
        /** The local part of the email address. */
        user?: string;
        /** The domain part of the email address. */
        domain?: string;
        /** Whether the email address format is valid. */
        format_valid?: boolean;
        /** Whether MX records were found for the email domain. */
        mx_found?: boolean;
        /** Whether the SMTP check succeeded. */
        smtp_check?: boolean;
        /** Whether the domain appears to accept all addresses. */
        catch_all?: boolean | null;
        /** Whether the address is role-based, such as support@ or admin@. */
        role?: boolean;
        /** Whether the address belongs to a disposable email provider. */
        disposable?: boolean;
        /** Whether the address belongs to a free email provider. */
        free?: boolean;
        /** Mailboxlayer quality score between 0 and 1. */
        score?: number;
      };
    };
  }
}
