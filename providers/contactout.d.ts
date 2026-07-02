import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check whether ContactOut has a personal email for a LinkedIn profile. */
    "contactout.check_personal_email_available": {
      input: {
        /**
         * The full LinkedIn profile URL, such as https://www.linkedin.com/in/example-person.
         * @minLength 1
         */
        profile: string;
      };
      output: {
        /** The ContactOut status_code value returned by the API. */
        status_code: number;
        /** The raw ContactOut availability profile object. */
        profile: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Check whether ContactOut has a phone number for a LinkedIn profile. */
    "contactout.check_phone_available": {
      input: {
        /**
         * The full LinkedIn profile URL, such as https://www.linkedin.com/in/example-person.
         * @minLength 1
         */
        profile: string;
      };
      output: {
        /** The ContactOut status_code value returned by the API. */
        status_code: number;
        /** The raw ContactOut availability profile object. */
        profile: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Check whether ContactOut has a work email for a LinkedIn profile. */
    "contactout.check_work_email_available": {
      input: {
        /**
         * The full LinkedIn profile URL, such as https://www.linkedin.com/in/example-person.
         * @minLength 1
         */
        profile: string;
      };
      output: {
        /** The ContactOut status_code value returned by the API. */
        status_code: number;
        /** The raw ContactOut availability profile object. */
        profile: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Count ContactOut people records matching official search filters. */
    "contactout.count_people": {
      input: {
        /** Official ContactOut search filters to send in the request body. */
        filters: Record<string, unknown>;
      };
      output: {
        /** The ContactOut status_code value returned by the API. */
        status_code: number;
        /** The total number of ContactOut profiles matching the filters. */
        total_results: number;
        [key: string]: unknown;
      };
    };
    /** Enrich companies from domain names with ContactOut. */
    "contactout.enrich_companies_by_domain": {
      input: {
        /**
         * Domain names to enrich with ContactOut.
         * @maxItems 30
         */
        domains: Array<string>;
      };
      output: {
        /** The ContactOut status_code value returned by the API. */
        status_code: number;
        /** Company records keyed by input domain. */
        companies: Record<string, Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Enrich a ContactOut profile from an email address. */
    "contactout.enrich_email_profile": {
      input: {
        /**
         * The email address to look up or verify.
         * @format email
         */
        email: string;
        /** Additional data to include in the response. */
        include?: "work_email";
      };
      output: {
        /** The ContactOut status_code value returned by the API. */
        status_code: number;
        /** The raw ContactOut profile object. */
        profile: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Enrich a ContactOut profile from a LinkedIn profile URL. */
    "contactout.enrich_linkedin_profile": {
      input: {
        /**
         * The full LinkedIn profile URL, such as https://www.linkedin.com/in/example-person.
         * @minLength 1
         */
        profile: string;
        /** Whether to return profile data without contact information. */
        profile_only?: boolean;
      };
      output: {
        /** The ContactOut status_code value returned by the API. */
        status_code: number;
        /** The raw ContactOut profile object. */
        profile: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Enrich a ContactOut profile from identifiers or name plus context. */
    "contactout.enrich_person": {
      input: {
        /**
         * LinkedIn profile URL for the person.
         * @minLength 1
         */
        linkedin_url?: string;
        /**
         * Email address for the person.
         * @format email
         */
        email?: string;
        /**
         * Phone number for the person.
         * @minLength 1
         */
        phone?: string;
        /**
         * Full name of the person.
         * @minLength 1
         */
        full_name?: string;
        /**
         * First name of the person.
         * @minLength 1
         */
        first_name?: string;
        /**
         * Last name of the person.
         * @minLength 1
         */
        last_name?: string;
        /**
         * Company names to use as secondary matching context.
         * @maxItems 10
         */
        company?: Array<string>;
        /**
         * Company domains to use as secondary matching context.
         * @maxItems 10
         */
        company_domain?: Array<string>;
        /**
         * Educational institutions to use as secondary matching context.
         * @maxItems 10
         */
        education?: Array<string>;
        /**
         * Location or city to use as secondary matching context.
         * @minLength 1
         */
        location?: string;
        /**
         * Job title to use as secondary matching context.
         * @minLength 1
         */
        job_title?: string;
        /** Contact data fields to include in the enrichment response. */
        include?: Array<"work_email" | "personal_email" | "phone">;
      };
      output: {
        /** The ContactOut status_code value returned by the API. */
        status_code: number;
        /** The raw ContactOut profile object. */
        profile: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Find decision makers for a company with ContactOut. */
    "contactout.find_decision_makers": {
      input: {
        /**
         * The full LinkedIn company URL, such as https://www.linkedin.com/company/contactout.
         * @minLength 1
         */
        linkedin_url?: string;
        /**
         * The company website domain, such as example.com.
         * @minLength 1
         */
        domain?: string;
        /**
         * The company name.
         * @minLength 1
         */
        name?: string;
        /** Whether ContactOut should reveal contact information. */
        reveal_info?: boolean;
      };
      output: {
        /** The ContactOut status_code value returned by the API. */
        status_code: number;
        /** Decision-maker profiles returned by ContactOut. */
        profiles: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get ContactOut contact information for a LinkedIn profile. */
    "contactout.get_linkedin_contact_info": {
      input: {
        /**
         * The full LinkedIn profile URL, such as https://www.linkedin.com/in/example-person.
         * @minLength 1
         */
        profile: string;
        /** Whether ContactOut should include phone data and deduct phone credits. */
        include_phone?: boolean;
        /** Which email types ContactOut should return. */
        email_type?: "personal" | "work" | "personal,work" | "none";
      };
      output: {
        /** The ContactOut status_code value returned by the API. */
        status_code: number;
        /** The raw ContactOut profile object. */
        profile: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Resolve a LinkedIn profile URL from an email address with ContactOut. */
    "contactout.get_linkedin_profile_by_email": {
      input: {
        /**
         * The email address to look up or verify.
         * @format email
         */
        email: string;
      };
      output: {
        /** The ContactOut status_code value returned by the API. */
        status_code: number;
        /** The raw ContactOut profile object. */
        profile: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Read ContactOut API usage statistics. */
    "contactout.get_usage_stats": {
      input: {
        /**
         * Usage month in YYYY-MM format. Defaults to the current month.
         * @minLength 1
         */
        period?: string;
      };
      output: {
        /** The ContactOut status_code value returned by the API. */
        status_code: number;
        /** The ContactOut usage period object. */
        period: Record<string, unknown>;
        /** The raw ContactOut usage object. */
        usage: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Search ContactOut company records with official search filters. */
    "contactout.search_companies": {
      input: {
        /** Official ContactOut search filters to send in the request body. */
        filters: Record<string, unknown>;
      };
      output: {
        /** The ContactOut status_code value returned by the API. */
        status_code: number;
        /** Companies matched by the ContactOut company search. */
        companies: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Search ContactOut people records with official search filters. */
    "contactout.search_people": {
      input: {
        /** Official ContactOut search filters to send in the request body. */
        filters: Record<string, unknown>;
        /**
         * The ContactOut result page to request.
         * @minimum 1
         */
        page?: number;
        /** Contact data types ContactOut should reveal when reveal_info is true. */
        data_types?: Array<"work_email" | "personal_email" | "phone">;
        /** Whether ContactOut should reveal contact information in results. */
        reveal_info?: boolean;
      };
      output: {
        /** The ContactOut status_code value returned by the API. */
        status_code: number;
        /** Profiles matched by the ContactOut people search. */
        profiles: Array<Record<string, unknown>>;
        /** The total number of matching ContactOut profiles. */
        total_results: number;
        [key: string]: unknown;
      };
    };
    /** Verify an email address with ContactOut. */
    "contactout.verify_email": {
      input: {
        /**
         * The email address to look up or verify.
         * @format email
         */
        email: string;
      };
      output: {
        /** The ContactOut email verification status. */
        status: "valid" | "invalid" | "accept_all" | "disposable" | "unknown";
        [key: string]: unknown;
      };
    };
  }
}
