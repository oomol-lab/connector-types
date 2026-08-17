import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate the current six-digit TOTP code for the configured website account. */
    "totp.generate_code": {
      input: Record<string, never>;
      output: {
        /**
         * The current six-digit TOTP code.
         * @pattern ^\d{6}$
         */
        code: string;
        /**
         * The ISO 8601 timestamp when this code expires.
         * @format date-time
         */
        expiresAt: string;
        /**
         * The number of whole or partial seconds until this code expires.
         * @minimum 1
         * @maximum 30
         */
        remainingSeconds: number;
        /**
         * The website associated with the configured account.
         * @format uri
         */
        website: string;
        /** The username associated with the configured account. */
        username: string;
      };
    };
  }
}
