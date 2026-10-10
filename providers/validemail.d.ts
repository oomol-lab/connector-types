import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get remaining ValidEmail verification credits without consuming a credit. */
    "validemail.get_balance": {
      input: Record<string, never>;
      output: {
        /** The number of verification credits remaining. */
        balance: number;
        [key: string]: unknown;
      };
    };
    /** Verify one email address with ValidEmail. Each request consumes one credit. Unknown is inconclusive; when RetryAfterSeconds is present, wait that long before repeating the request. */
    "validemail.verify_email": {
      input: {
        /**
         * The email address to verify, including potentially invalid addresses.
         * @minLength 1
         * @pattern \S
         */
        email: string;
      };
      output: {
        /** Whether the address passed verification. */
        IsValid?: boolean;
        /** Deliverability confidence score from 0 to 100. */
        Score?: number;
        /** The queried email address normalized to lower case. */
        Email?: string;
        /** Verification state: Deliverable, Not Deliverable, or Unknown. */
        State?: string;
        /** The reason for the verification state. */
        Reason?: string;
        /** The email domain. */
        Domain?: string;
        /** Whether the address uses a free email provider. */
        Free?: boolean;
        /** Whether the address is a role inbox. */
        Role?: boolean;
        /** Whether the address uses a disposable email provider. */
        Disposable?: boolean;
        /** Whether the domain accepts any recipient; positive results require caution. */
        AcceptAll?: boolean;
        /** Whether the address contains a plus tag. */
        Tag?: boolean;
        /** The mail exchange host for the domain. */
        MXRecord?: string;
        /** Seconds to wait before repeating an interim verification; null for definitive results. */
        RetryAfterSeconds?: number | null;
        /** Additional diagnostic details. */
        EmailAdditionalInfo?: Array<{
          /** The diagnostic key. */
          Key?: string;
          /** The diagnostic value. */
          Value?: unknown;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
