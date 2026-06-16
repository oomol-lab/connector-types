import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the current Veriphone verification credit summary for the account. */
    "veriphone.get_credits": {
      input: Record<string, never>;
      output: {
        /** The response status returned by Veriphone. */
        status: string;
        /** The remaining verification credits on the account. */
        credits: number;
        /** The cumulative number of verified phone numbers on the account. */
        total_verified_phone_numbers?: number;
        /** Whether the Veriphone account is active. */
        active?: boolean;
        /** The account email returned by Veriphone. */
        email?: string;
        /** The account country returned by Veriphone. */
        country?: string;
        /** The account counter value returned by Veriphone. */
        counter?: number;
      };
    };
    /** Verify whether a phone number is valid and return its carrier and region data. */
    "veriphone.verify_phone_number": {
      input: {
        /**
         * The phone number to verify in E.164 or another commonly used format.
         * @minLength 1
         */
        phone: string;
        /**
         * The optional ISO 3166-1 alpha-2 country code used to interpret local numbers.
         * @minLength 2
         * @maxLength 2
         */
        default_country?: string;
      };
      output: {
        /** The response status returned by Veriphone. */
        status: string;
        /** The phone number echoed back by Veriphone. */
        phone: string;
        /** Whether Veriphone considers the phone number valid. */
        phone_valid: boolean;
        /** The detected line type, such as mobile or landline. */
        phone_type?: string;
        /** The detected region or area associated with the phone number. */
        phone_region?: string;
        /** The detected country name. */
        country?: string;
        /** The detected ISO 3166-1 alpha-2 country code. */
        country_code?: string;
        /** The detected country calling prefix. */
        country_prefix?: string;
        /** The international presentation of the phone number. */
        international_number?: string;
        /** The local significant number. */
        local_number?: string;
        /** The E.164 representation of the phone number. */
        e164?: string;
        /** The detected carrier name, when available. */
        carrier?: string;
      };
    };
  }
}
