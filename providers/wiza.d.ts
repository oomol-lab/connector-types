import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the remaining Wiza API credit balances for the connected account. */
    "wiza.get_credits": {
      input: Record<string, never>;
      output: {
        /** The Wiza response status object. */
        status?: {
          /** The Wiza response status code. */
          code?: number;
          /** The Wiza response status message. */
          message?: string;
          [key: string]: unknown;
        };
        /** The Wiza credit balances grouped by credit type. */
        credits?: Record<string, unknown>;
        /** The Wiza response data object returned by the upstream endpoint. */
        data?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the status and results of a Wiza individual reveal by ID. */
    "wiza.get_individual_reveal": {
      input: {
        /**
         * The Wiza resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Wiza response status object. */
        status?: {
          /** The Wiza response status code. */
          code?: number;
          /** The Wiza response status message. */
          message?: string;
          [key: string]: unknown;
        };
        /** The Wiza response resource type. */
        type?: string;
        /** The Wiza response data object returned by the upstream endpoint. */
        data?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the status and details of a Wiza list by ID. */
    "wiza.get_list": {
      input: {
        /**
         * The Wiza resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Wiza response status object. */
        status?: {
          /** The Wiza response status code. */
          code?: number;
          /** The Wiza response status message. */
          message?: string;
          [key: string]: unknown;
        };
        /** The Wiza response resource type. */
        type?: string;
        /** The Wiza response data object returned by the upstream endpoint. */
        data?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Search Wiza prospects with a filters object. */
    "wiza.prospect_search": {
      input: {
        /** The Wiza prospect search filters object, such as job title, location, company, industry, headcount, or other filters supported by Wiza. */
        filters: Record<string, unknown>;
        /**
         * The optional number of prospect results to request from Wiza.
         * @minimum 0
         * @maximum 30
         */
        size?: number;
      };
      output: {
        /** The Wiza response status object. */
        status?: {
          /** The Wiza response status code. */
          code?: number;
          /** The Wiza response status message. */
          message?: string;
          [key: string]: unknown;
        };
        /** The Wiza response resource type. */
        type?: string;
        /** The Wiza response data object returned by the upstream endpoint. */
        data?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Start a Wiza individual reveal for real-time single contact enrichment. */
    "wiza.start_individual_reveal": {
      input: {
        /** The Wiza individual reveal contact input. Provide an email, a LinkedIn profile URL, or a name with company or domain. */
        individual_reveal: {
          /**
           * The contact email address to enrich.
           * @minLength 1
           */
          email?: string;
          /**
           * The contact full name to enrich.
           * @minLength 1
           */
          full_name?: string;
          /**
           * The contact company name used with full_name.
           * @minLength 1
           */
          company?: string;
          /**
           * The contact company domain used with full_name.
           * @minLength 1
           */
          domain?: string;
          /**
           * The LinkedIn, Sales Navigator, or Recruiter profile URL to enrich.
           * @minLength 1
           */
          profile_url?: string;
          /**
           * Alias for the LinkedIn, Sales Navigator, or Recruiter profile URL to enrich.
           * @minLength 1
           */
          linkedin_profile_url?: string;
          [key: string]: unknown;
        };
        /** The Wiza enrichment level to request. */
        enrichment_level: "none" | "partial" | "phone" | "full";
        /** Email type preferences sent to Wiza when starting an individual reveal. */
        email_options?: {
          /** Whether Wiza should return work email addresses when available. */
          accept_work?: boolean;
          /** Whether Wiza should return personal email addresses when available. */
          accept_personal?: boolean;
          /** Whether Wiza should return generic email addresses when available. */
          accept_generic?: boolean;
          [key: string]: unknown;
        };
        /**
         * Optional webhook URL that Wiza should call when the individual reveal updates.
         * @minLength 1
         */
        callback_url?: string;
      };
      output: {
        /** The Wiza response status object. */
        status?: {
          /** The Wiza response status code. */
          code?: number;
          /** The Wiza response status message. */
          message?: string;
          [key: string]: unknown;
        };
        /** The Wiza response resource type. */
        type?: string;
        /** The Wiza response data object returned by the upstream endpoint. */
        data?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
