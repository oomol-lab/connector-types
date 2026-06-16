import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Validate an email address with Abstract Email Validation and return deliverability, quality, and risk checks. */
    "abstract.validate_email": {
      input: {
        /**
         * The email address to validate.
         * @format email
         */
        email: string;
      };
      output: {
        /** The email address returned by Abstract. */
        email: string;
        /** The suggested email correction when Abstract detects a likely typo. */
        autocorrect: string | null;
        /** The deliverability verdict returned by Abstract. */
        deliverability: "DELIVERABLE" | "UNDELIVERABLE" | "UNKNOWN";
        /**
         * The email quality score between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        qualityScore: number;
        /** A boolean check result returned by Abstract. */
        isValidFormat: {
          /** The boolean result, or null when Abstract could not determine it. */
          value: boolean | null;
          /** The text result returned by Abstract. */
          text: "TRUE" | "FALSE" | "UNKNOWN";
        };
        /** A boolean check result returned by Abstract. */
        isFreeEmail: {
          /** The boolean result, or null when Abstract could not determine it. */
          value: boolean | null;
          /** The text result returned by Abstract. */
          text: "TRUE" | "FALSE" | "UNKNOWN";
        };
        /** A boolean check result returned by Abstract. */
        isDisposableEmail: {
          /** The boolean result, or null when Abstract could not determine it. */
          value: boolean | null;
          /** The text result returned by Abstract. */
          text: "TRUE" | "FALSE" | "UNKNOWN";
        };
        /** A boolean check result returned by Abstract. */
        isRoleEmail: {
          /** The boolean result, or null when Abstract could not determine it. */
          value: boolean | null;
          /** The text result returned by Abstract. */
          text: "TRUE" | "FALSE" | "UNKNOWN";
        };
        /** A boolean check result returned by Abstract. */
        isCatchallEmail: {
          /** The boolean result, or null when Abstract could not determine it. */
          value: boolean | null;
          /** The text result returned by Abstract. */
          text: "TRUE" | "FALSE" | "UNKNOWN";
        };
        /** A boolean check result returned by Abstract. */
        isMxFound: {
          /** The boolean result, or null when Abstract could not determine it. */
          value: boolean | null;
          /** The text result returned by Abstract. */
          text: "TRUE" | "FALSE" | "UNKNOWN";
        };
        /** A boolean check result returned by Abstract. */
        isSmtpValid: {
          /** The boolean result, or null when Abstract could not determine it. */
          value: boolean | null;
          /** The text result returned by Abstract. */
          text: "TRUE" | "FALSE" | "UNKNOWN";
        };
        /** The raw response object returned by Abstract. */
        raw: Record<string, unknown>;
      };
    };
  }
}
