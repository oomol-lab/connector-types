import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Reveal firmographic, employee, competitor, and intent data for companies returned by Lusha Companies Search. */
    "lusha.enrich_companies": {
      input: {
        /**
         * Lusha company IDs returned by Companies Search.
         * @minItems 1
         * @maxItems 100
         */
        ids: Array<string>;
        /**
         * Company data fields to reveal.
         * @minItems 1
         */
        reveal?: Array<"employeesByDepartment" | "employeesByLocation" | "employeesBySeniority" | "competitors" | "intent">;
      };
      output: {
        /** Lusha request ID for tracing the enrich request. */
        requestId?: string;
        /** Enriched company results returned by Lusha. */
        results?: Array<Record<string, unknown>>;
        /** Credit usage summary for a Lusha API request. */
        billing?: {
          /** Total credits charged for the request. */
          creditsCharged?: number;
          /** Number of successful results returned. */
          resultsReturned?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Reveal email and phone data for contacts previously returned by Lusha Contacts Search. */
    "lusha.enrich_contacts": {
      input: {
        /**
         * Lusha contact IDs returned by Contacts Search.
         * @minItems 1
         * @maxItems 100
         */
        ids: Array<string>;
        /**
         * Contact data fields to reveal. Omit this field to reveal both emails and phones.
         * @minItems 1
         */
        reveal?: Array<"emails" | "phones">;
      };
      output: {
        /** Lusha request ID for tracing the enrich request. */
        requestId?: string;
        /** Enriched contact results returned by Lusha. */
        results?: Array<Record<string, unknown>>;
        /** Credit usage summary for a Lusha API request. */
        billing?: {
          /** Total credits charged for the request. */
          creditsCharged?: number;
          /** Number of successful results returned. */
          resultsReturned?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve Lusha account usage, credit balance, rate limits, plan details, and API action pricing. */
    "lusha.get_account_usage": {
      input: Record<string, never>;
      output: {
        /** Credit totals for the current billing cycle. */
        credits?: Record<string, unknown>;
        /** Daily, hourly, and per-minute rate limit usage snapshots. */
        rateLimits?: Record<string, unknown>;
        /** The current Lusha plan category and renewal window. */
        plan?: Record<string, unknown>;
        /** Credit pricing entries keyed by Lusha action type. */
        pricing?: Record<string, Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Search for Lusha company previews by company ID, name, or domain. */
    "lusha.search_companies": {
      input: {
        /**
         * Companies to search for, with up to 100 entries.
         * @minItems 1
         * @maxItems 100
         */
        companies: Array<{
          /**
           * Caller-supplied reference ID echoed in the result item.
           * @minLength 1
           */
          clientReferenceId?: string;
          /**
           * Lusha company ID returned by a previous search.
           * @minLength 1
           */
          id?: string;
          /**
           * Company name used to identify the company.
           * @minLength 1
           */
          name?: string;
          /**
           * Company domain used to identify the company.
           * @minLength 1
           */
          domain?: string;
        }>;
        /** Additional options for Lusha search requests. */
        options?: {
          /** Whether to include partial profiles in the results. */
          includePartialProfiles?: boolean;
        };
      };
      output: {
        /** Lusha request ID for tracing the search request. */
        requestId?: string;
        /** Company preview results returned by Lusha. */
        results?: Array<Record<string, unknown>>;
        /** Credit usage summary for a Lusha API request. */
        billing?: {
          /** Total credits charged for the request. */
          creditsCharged?: number;
          /** Number of successful results returned. */
          resultsReturned?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search for Lusha contact previews by contact ID, LinkedIn URL, email, or name plus company identifier. */
    "lusha.search_contacts": {
      input: {
        /**
         * Contacts to search for, with up to 100 entries.
         * @minItems 1
         * @maxItems 100
         */
        contacts: Array<{
          /**
           * Caller-supplied reference ID echoed in the result item.
           * @minLength 1
           */
          clientReferenceId?: string;
          /**
           * Lusha contact ID returned by a previous search.
           * @minLength 1
           */
          id?: string;
          /**
           * Public LinkedIn profile URL for the contact.
           * @format uri
           */
          linkedinUrl?: string;
          /**
           * Email address used to identify the contact.
           * @format email
           */
          email?: string;
          /**
           * Contact first name.
           * @minLength 1
           */
          firstName?: string;
          /**
           * Contact last name.
           * @minLength 1
           */
          lastName?: string;
          /**
           * Company name used with firstName and lastName to identify the contact.
           * @minLength 1
           */
          companyName?: string;
          /**
           * Company domain used with firstName and lastName to identify the contact.
           * @minLength 1
           */
          companyDomain?: string;
        }>;
        /** Additional options for Lusha search requests. */
        options?: {
          /** Whether to include partial profiles in the results. */
          includePartialProfiles?: boolean;
        };
      };
      output: {
        /** Lusha request ID for tracing the search request. */
        requestId?: string;
        /** Contact preview results returned by Lusha. */
        results?: Array<Record<string, unknown>>;
        /** Credit usage summary for a Lusha API request. */
        billing?: {
          /** Total credits charged for the request. */
          creditsCharged?: number;
          /** Number of successful results returned. */
          resultsReturned?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
