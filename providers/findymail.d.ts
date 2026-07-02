import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get remaining Findymail credits and usage information for the API key. */
    "findymail.get_credits": {
      input: Record<string, never>;
      output: {
        /** Findymail account credit and usage information. */
        credits: {
          /** The remaining credit count reported by Findymail. */
          credits?: number;
          /** The remaining credits reported by Findymail. */
          remaining?: number;
          /** The used credits reported by Findymail. */
          used?: number;
          /** The plan name reported by Findymail. */
          plan?: string;
          [key: string]: unknown;
        };
        /** The raw JSON payload returned by Findymail. */
        raw: unknown;
      };
    };
    /** Find a verified professional email from a person's name and company domain. */
    "findymail.search_by_name": {
      input: {
        /**
         * The person's full name. Use this or firstName and lastName.
         * @minLength 1
         */
        name?: string;
        /**
         * The person's first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * The person's last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * The company domain, such as example.com.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** A contact object returned by Findymail. */
        contact: Record<string, unknown> | null;
        /** The raw JSON payload returned by Findymail. */
        raw: unknown;
      };
    };
    /** Find professional email contacts associated with a company domain. */
    "findymail.search_domain": {
      input: {
        /**
         * The company domain to search, such as example.com.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** The contacts returned by Findymail. */
        contacts: Array<Record<string, unknown>>;
        /** The raw JSON payload returned by Findymail. */
        raw: unknown;
      };
    };
    /** Find employees at a company using Findymail's company search endpoint. */
    "findymail.search_employees": {
      input: {
        /**
         * The company domain to search, such as example.com.
         * @minLength 1
         */
        domain?: string;
        /**
         * The company name to search when no domain is available.
         * @minLength 1
         */
        companyName?: string;
        /**
         * The maximum number of employees to request.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The employees returned by Findymail. */
        employees: Array<Record<string, unknown>>;
        /** The raw JSON payload returned by Findymail. */
        raw: unknown;
      };
    };
    /** Verify a professional email address with Findymail. */
    "findymail.verify_email": {
      input: {
        /**
         * The email address to verify.
         * @format email
         */
        email: string;
      };
      output: {
        /** Findymail email verification result. */
        verification: {
          /**
           * The email address that was verified.
           * @format email
           */
          email?: string;
          /** Whether Findymail considers the email address verified. */
          verified?: boolean;
          /** The detected email provider or verification source. */
          provider?: string;
          /** The verification status returned by Findymail. */
          status?: string;
          [key: string]: unknown;
        };
        /** The raw JSON payload returned by Findymail. */
        raw: unknown;
      };
    };
  }
}
