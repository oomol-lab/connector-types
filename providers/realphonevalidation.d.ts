import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Validate one 10-digit phone number with the RealPhoneValidation Turbo Standard endpoint. */
    "realphonevalidation.validate_phone_standard": {
      input: {
        /**
         * The 10-digit US phone number to validate, using numeric digits only.
         * @pattern ^\d{10}$
         */
        phone: string;
      };
      output: {
        /** The line status returned by RealPhoneValidation, such as connected, disconnected, busy, or pending. */
        status: string;
        /** The upstream error text returned by RealPhoneValidation when the request was not a normal validation success. */
        error_text: string | null;
        /** The detected phone type returned by RealPhoneValidation, such as Mobile, Landline, or VoIP. */
        phone_type: string | null;
      };
    };
    /** Validate one 10-digit phone number with the RealPhoneValidation Turbo v3 endpoint and return caller enrichment fields when available. */
    "realphonevalidation.validate_phone_v3": {
      input: {
        /**
         * The 10-digit US phone number to validate, using numeric digits only.
         * @pattern ^\d{10}$
         */
        phone: string;
      };
      output: {
        /** The line status returned by RealPhoneValidation, such as connected, disconnected, busy, or pending. */
        status: string;
        /** The upstream error text returned by RealPhoneValidation when the request was not a normal validation success. */
        error_text: string | null;
        /** The detected phone type returned by RealPhoneValidation, such as Mobile, Landline, or VoIP. */
        phone_type: string | null;
        /** The subscriber name returned by RealPhoneValidation when available. */
        caller_name: string | null;
        /** The carrier or service provider returned by RealPhoneValidation when available. */
        carrier: string | null;
        /** The caller type returned by RealPhoneValidation, such as Consumer or Business. */
        caller_type: string | null;
      };
    };
  }
}
