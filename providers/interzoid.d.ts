import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate an Interzoid similarity key for a company or organization name. */
    "interzoid.get_company_match_key": {
      input: {
        /**
         * The company or organization name to generate a similarity key for.
         * @minLength 1
         * @pattern \S
         */
        company: string;
        /** The Interzoid company matching algorithm used to generate the similarity key. */
        algorithm: "wide" | "narrow" | "model-v4-wide" | "model-v4-narrow";
      };
      output: {
        /** The Interzoid response code, such as Success. */
        code: string;
        /** The remaining Interzoid API credits after the request when available. */
        credits: number | null;
        /** The provider message when Interzoid returns one. */
        message: string | null;
        /** The raw response object returned by Interzoid. */
        raw: Record<string, unknown>;
        /** The generated similarity key for the company name. */
        simKey: string | null;
      };
    };
    /** Validate and enrich an email address with Interzoid. */
    "interzoid.get_email_info": {
      input: {
        /**
         * The email address to validate and enrich.
         * @format email
         */
        email: string;
      };
      output: {
        /** The Interzoid response code, such as Success. */
        code: string;
        /** The remaining Interzoid API credits after the request when available. */
        credits: number | null;
        /** The provider message when Interzoid returns one. */
        message: string | null;
        /** The raw response object returned by Interzoid. */
        raw: Record<string, unknown>;
        /** The email address returned by Interzoid. */
        email: string | null;
        /** The Interzoid validation response for the email address. */
        response: string | null;
        /** Additional Interzoid validation information. */
        info: string | null;
        /** The domain part of the email address. */
        domain: string | null;
        /** The organization associated with the email domain. */
        organization: string | null;
        /** The geolocation associated with the email domain. */
        geolocation: string | null;
        /** The domain owner returned by Interzoid. */
        domainOwner: string | null;
        /** Whether Interzoid marks the email domain as disposable. */
        isDisposable: string | null;
        /** Whether Interzoid marks the email address as generic. */
        isGeneric: string | null;
      };
    };
    /** Generate an Interzoid similarity key for a person's full name. */
    "interzoid.get_full_name_match_key": {
      input: {
        /**
         * The full name to generate a similarity key for.
         * @minLength 1
         * @pattern \S
         */
        fullName: string;
      };
      output: {
        /** The Interzoid response code, such as Success. */
        code: string;
        /** The remaining Interzoid API credits after the request when available. */
        credits: number | null;
        /** The provider message when Interzoid returns one. */
        message: string | null;
        /** The raw response object returned by Interzoid. */
        raw: Record<string, unknown>;
        /** The generated similarity key for the full name. */
        simKey: string | null;
      };
    };
    /** Score how closely two full names match according to Interzoid. */
    "interzoid.get_full_name_match_score": {
      input: {
        /**
         * The first full name to compare.
         * @minLength 1
         * @pattern \S
         */
        fullName1: string;
        /**
         * The second full name to compare.
         * @minLength 1
         * @pattern \S
         */
        fullName2: string;
      };
      output: {
        /** The Interzoid response code, such as Success. */
        code: string;
        /** The remaining Interzoid API credits after the request when available. */
        credits: number | null;
        /** The provider message when Interzoid returns one. */
        message: string | null;
        /** The raw response object returned by Interzoid. */
        raw: Record<string, unknown>;
        /** The Interzoid similarity score for the two full names. */
        score: number | null;
      };
    };
    /** Retrieve Interzoid profile and reputation information for an IP address. */
    "interzoid.get_ip_profile": {
      input: {
        /**
         * The IPv4 or IPv6 address to profile with Interzoid.
         * @minLength 1
         * @pattern \S
         */
        ip: string;
      };
      output: {
        /** The Interzoid response code, such as Success. */
        code: string;
        /** The remaining Interzoid API credits after the request when available. */
        credits: number | null;
        /** The provider message when Interzoid returns one. */
        message: string | null;
        /** The raw response object returned by Interzoid. */
        raw: Record<string, unknown>;
        /** The IP protocol version returned by Interzoid. */
        version: string | null;
        /** The CIDR block associated with the IP address. */
        cidr: string | null;
        /** The autonomous system number for the IP address. */
        asn: string | null;
        /** The reverse DNS hostname for the IP address. */
        hostname: string | null;
        /** The organization or ISP for the IP address. */
        organization: string | null;
        /** The geolocation string returned by Interzoid. */
        geolocation: string | null;
        /** The reputation assessment returned by Interzoid. */
        reputation: string | null;
        /** The abuse contact returned by Interzoid. */
        abuseContact: string | null;
      };
    };
    /** Return the remaining credits for the connected Interzoid API license key. */
    "interzoid.get_remaining_credits": {
      input: Record<string, never>;
      output: {
        /** The Interzoid response code, such as Success. */
        code: string;
        /** The remaining Interzoid API credits after the request when available. */
        credits: number | null;
        /** The provider message when Interzoid returns one. */
        message: string | null;
        /** The raw response object returned by Interzoid. */
        raw: Record<string, unknown>;
      };
    };
    /** Standardize an organization name using Interzoid. */
    "interzoid.standardize_organization_name": {
      input: {
        /**
         * The organization name to standardize.
         * @minLength 1
         * @pattern \S
         */
        organization: string;
      };
      output: {
        /** The Interzoid response code, such as Success. */
        code: string;
        /** The remaining Interzoid API credits after the request when available. */
        credits: number | null;
        /** The provider message when Interzoid returns one. */
        message: string | null;
        /** The raw response object returned by Interzoid. */
        raw: Record<string, unknown>;
        /** The standardized organization name returned by Interzoid. */
        standard: string | null;
      };
    };
  }
}
