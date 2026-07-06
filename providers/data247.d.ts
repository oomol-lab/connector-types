import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Infer a probable gender from a first name using Data247. */
    "data247.append_gender": {
      input: {
        /**
         * The first name to submit to Data247.
         * @minLength 1
         * @maxLength 100
         */
        fname: string;
      };
      output: {
        /** The Data247 response status. */
        status: string;
        /** The Data247 response message when one is returned. */
        message?: string;
        /** The gender append records returned by Data247. */
        results: Array<{
          /** The first name returned by Data247. */
          fname: string;
          /** The probable gender returned by Data247. */
          gender: string;
          /** The confidence percentage returned by Data247. */
          gender_pct: string;
        }>;
      };
    };
    /** Check the current Data247 account balance. */
    "data247.check_balance": {
      input: Record<string, never>;
      output: {
        /** The Data247 response status. */
        status: string;
        /** The Data247 response message when one is returned. */
        message?: string;
        /** The balance records returned by Data247. */
        results: Array<{
          /** The current Data247 account balance as returned by the API. */
          balance: string;
        }>;
      };
    };
    /** Check a phone number against Data247 Do-Not-Call data. */
    "data247.check_dnc": {
      input: {
        /**
         * The phone number to submit to Data247.
         * @minLength 1
         * @maxLength 40
         */
        phone: string;
      };
      output: {
        /** The Data247 response status. */
        status: string;
        /** The Data247 response message when one is returned. */
        message?: string;
        /** The phone number returned by Data247. */
        phone: string;
        /** The DNC status returned by Data247. */
        dnc: string;
      };
    };
    /** Determine whether a USA or Canadian phone number is mobile, landline, or VOIP. */
    "data247.get_carrier_type": {
      input: {
        /**
         * The phone number to submit to Data247.
         * @minLength 1
         * @maxLength 40
         */
        phone: string;
      };
      output: {
        /** The Data247 response status. */
        status: string;
        /** The Data247 response message when one is returned. */
        message?: string;
        /** The carrier type records returned by Data247. */
        results: Array<{
          /** The phone number returned by Data247. */
          phone: string;
          /** The carrier type code returned by Data247, such as M, L, or V. */
          type: string;
        }>;
      };
    };
    /** Verify whether an international phone number is active. */
    "data247.verify_phone": {
      input: {
        /**
         * The phone number to submit to Data247.
         * @minLength 1
         * @maxLength 40
         */
        phone: string;
      };
      output: {
        /** The Data247 response status. */
        status: string;
        /** The Data247 response message when one is returned. */
        message?: string;
        /** The phone verification records returned by Data247. */
        results: Array<{
          /** The phone number returned by Data247. */
          phone: string;
          /** Whether Data247 reports the phone number as active. */
          active: string;
          /** The confidence level returned by Data247. */
          confidence: string;
        }>;
      };
    };
  }
}
