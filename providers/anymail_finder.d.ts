import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Find up to 20 verified email addresses for a company. */
    "anymail_finder.find_company_emails": {
      input: Record<string, unknown>;
      output: {
        /** Company email discovery result from Anymail Finder. */
        result: {
          /** Number of credits charged for the request. */
          credits_charged?: number;
          /** Email status returned by Anymail Finder. */
          email_status: "valid" | "risky" | "not_found" | "blacklisted";
          /** Email addresses found for the company. */
          emails?: Array<string>;
          /** Root domain of the primary MX host, if available. */
          mx_domain?: string | null;
          /** Primary MX host for the company domain, if available. */
          mx_host?: string | null;
          /** Verified deliverable email addresses found for the company. */
          valid_emails?: Array<string>;
          [key: string]: unknown;
        };
        /** The raw JSON payload returned by Anymail Finder. */
        raw: unknown;
      };
    };
    /** Find a verified email for a decision maker at a company. */
    "anymail_finder.find_decision_maker_email": {
      input: Record<string, unknown>;
      output: {
        /** A person email discovery result from Anymail Finder. */
        result: {
          /** Number of credits charged for the request. */
          credits_charged?: number;
          /**
           * Email address found by Anymail Finder, if any.
           * @format email
           */
          email?: string | null;
          /** Email status returned by Anymail Finder. */
          email_status: "valid" | "risky" | "not_found" | "blacklisted";
          /** Root domain of the primary MX host, if available. */
          mx_domain?: string | null;
          /** Primary MX host for the email domain, if available. */
          mx_host?: string | null;
          /**
           * Verified deliverable email address, if one was found.
           * @format email
           */
          valid_email?: string | null;
          /** Company name sourced from the person's profile. */
          person_company_name?: string | null;
          /** Full name sourced from the person's profile. */
          person_full_name?: string | null;
          /** Job title sourced from the person's profile. */
          person_job_title?: string | null;
          /** LinkedIn profile URL returned for the person. */
          person_linkedin_url?: string | null;
          [key: string]: unknown;
        };
        /** The raw JSON payload returned by Anymail Finder. */
        raw: unknown;
      };
    };
    /** Find a person's work email from their name and company or LinkedIn profile. */
    "anymail_finder.find_person_email": {
      input: Record<string, unknown>;
      output: {
        /** A person email discovery result from Anymail Finder. */
        result: {
          /** Number of credits charged for the request. */
          credits_charged?: number;
          /**
           * Email address found by Anymail Finder, if any.
           * @format email
           */
          email?: string | null;
          /** Email status returned by Anymail Finder. */
          email_status: "valid" | "risky" | "not_found" | "blacklisted";
          /** Root domain of the primary MX host, if available. */
          mx_domain?: string | null;
          /** Primary MX host for the email domain, if available. */
          mx_host?: string | null;
          /**
           * Verified deliverable email address, if one was found.
           * @format email
           */
          valid_email?: string | null;
          /** Company name sourced from the person's profile. */
          person_company_name?: string | null;
          /** Full name sourced from the person's profile. */
          person_full_name?: string | null;
          /** Job title sourced from the person's profile. */
          person_job_title?: string | null;
          /** LinkedIn profile URL returned for the person. */
          person_linkedin_url?: string | null;
          [key: string]: unknown;
        };
        /** The raw JSON payload returned by Anymail Finder. */
        raw: unknown;
      };
    };
    /** Get the Anymail Finder account email and remaining credits. */
    "anymail_finder.get_account": {
      input: Record<string, never>;
      output: {
        /**
         * Email address associated with the Anymail Finder account.
         * @format email
         */
        email: string;
        /** Number of credits remaining in the account. */
        creditsLeft: number;
        /** The raw JSON payload returned by Anymail Finder. */
        raw: unknown;
      };
    };
    /** Verify the deliverability status of an email address. */
    "anymail_finder.verify_email": {
      input: {
        /**
         * Email address to verify.
         * @format email
         */
        email: string;
      };
      output: {
        /** An email verification result from Anymail Finder. */
        result: {
          /** Number of credits charged for the request. */
          credits_charged?: number;
          /** Email verification status returned by Anymail Finder. */
          email_status: "valid" | "risky" | "invalid";
          /** Root domain of the primary MX host, if available. */
          mx_domain?: string | null;
          /** Primary MX host for the email domain, if available. */
          mx_host?: string | null;
          [key: string]: unknown;
        };
        /** The raw JSON payload returned by Anymail Finder. */
        raw: unknown;
      };
    };
  }
}
