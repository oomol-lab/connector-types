import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check whether an email address or domain belongs to a disposable email provider. */
    "kickbox.check_disposable_email": {
      input: {
        /**
         * The email address or domain to check for disposable-email status.
         * @minLength 1
         */
        domain_or_email: string;
      };
      output: {
        /** Whether the input email address or domain belongs to a disposable provider. */
        disposable: boolean;
      };
    };
    /** Verify whether a single email address is deliverable and retrieve Kickbox risk signals. */
    "kickbox.verify_email": {
      input: {
        /**
         * The email address to verify.
         * @format email
         */
        email: string;
      };
      output: {
        /** The overall verification result returned by Kickbox. */
        result: "deliverable" | "undeliverable" | "risky" | "unknown";
        /** The provider reason that explains the verification result. */
        reason: string;
        /** Whether the address is role-based, such as support@ or admin@. */
        role: boolean;
        /** Whether the address belongs to a free email provider. */
        free: boolean;
        /** Whether the address belongs to a disposable email provider. */
        disposable: boolean;
        /** Whether the domain appears to accept all inbound email addresses. */
        accept_all: boolean;
        /** Kickbox Sendex quality score between 0 and 1. */
        sendex: number;
        /** The normalized email address evaluated by Kickbox. */
        email: string;
        /** Whether Kickbox completed the verification request successfully. */
        success: boolean;
        /** The local part of the verified email address. */
        user?: string;
        /** The domain part of the verified email address. */
        domain?: string;
        /** Suggested corrected email address when Kickbox detects a likely typo. */
        did_you_mean?: string;
      };
    };
  }
}
