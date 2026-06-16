import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check the current status of one or more RocketReach person lookups. */
    "rocket_reach.check_person_status": {
      input: {
        /**
         * The person identifiers to check.
         * @minItems 1
         */
        ids: Array<string | number>;
      };
      output: {
        /** The person status objects returned by RocketReach. */
        people: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve the authenticated RocketReach account profile. */
    "rocket_reach.get_account": {
      input: Record<string, never>;
      output: {
        /** The RocketReach account object. */
        account: Record<string, unknown>;
      };
    };
    /** Retrieve the revenue and funding-investor data exposed on a RocketReach company profile by looking up the target company first. */
    "rocket_reach.get_company_funding": {
      input: {
        /**
         * The RocketReach numeric identifier.
         * @exclusiveMinimum 0
         */
        id?: number;
        /** The RocketReach company identifier. */
        company_id?: string | number;
        /**
         * The company name to look up.
         * @minLength 1
         */
        name?: string;
        /**
         * The bare company domain to look up.
         * @minLength 1
         */
        domain?: string;
      };
      output: {
        /** The normalized RocketReach company profile. */
        company: {
          /** The RocketReach company identifier, or null when it is not available. */
          companyId: number | null;
          /** The company display name, or null when it is not available. */
          name: string | null;
          /** The primary company domain, or null when it is not available. */
          domain: string | null;
          /** The company email domain, or null when it is not available. */
          emailDomain: string | null;
          /** The company website domain, or null when it is not available. */
          websiteDomain: string | null;
          /** The RocketReach web profile URL, or null when it is not available. */
          rrProfileUrl: string | null;
          /** The company founded date string returned by RocketReach, or null. */
          yearFounded: string | null;
          /** The employee count returned by RocketReach, or null when it is not available. */
          numEmployees: number | null;
          /** The revenue value returned by RocketReach, or null. */
          revenue: number | null;
          /** The primary industry returned by RocketReach, or null when it is not available. */
          industry: string | null;
          /** The industry keywords returned by RocketReach. */
          industryKeywords: Array<string>;
          /** The company description returned by RocketReach, or null when it is not available. */
          description: string | null;
          /** The social and reference links returned by RocketReach, or null. */
          links: Record<string, unknown> | null;
          /** The company address object returned by RocketReach, or null. */
          address: Record<string, unknown> | null;
          /** The raw RocketReach company object. */
          raw: Record<string, unknown>;
        };
        /** The revenue value returned by RocketReach, or null. */
        revenue: number | null;
        /** The funding investors returned by RocketReach. */
        fundingInvestors: Array<unknown>;
      };
    };
    /** Retrieve the industry and industry-keyword data exposed on a RocketReach company profile by looking up the target company first. */
    "rocket_reach.get_company_industries": {
      input: {
        /**
         * The RocketReach numeric identifier.
         * @exclusiveMinimum 0
         */
        id?: number;
        /** The RocketReach company identifier. */
        company_id?: string | number;
        /**
         * The company name to look up.
         * @minLength 1
         */
        name?: string;
        /**
         * The bare company domain to look up.
         * @minLength 1
         */
        domain?: string;
      };
      output: {
        /** The normalized RocketReach company profile. */
        company: {
          /** The RocketReach company identifier, or null when it is not available. */
          companyId: number | null;
          /** The company display name, or null when it is not available. */
          name: string | null;
          /** The primary company domain, or null when it is not available. */
          domain: string | null;
          /** The company email domain, or null when it is not available. */
          emailDomain: string | null;
          /** The company website domain, or null when it is not available. */
          websiteDomain: string | null;
          /** The RocketReach web profile URL, or null when it is not available. */
          rrProfileUrl: string | null;
          /** The company founded date string returned by RocketReach, or null. */
          yearFounded: string | null;
          /** The employee count returned by RocketReach, or null when it is not available. */
          numEmployees: number | null;
          /** The revenue value returned by RocketReach, or null. */
          revenue: number | null;
          /** The primary industry returned by RocketReach, or null when it is not available. */
          industry: string | null;
          /** The industry keywords returned by RocketReach. */
          industryKeywords: Array<string>;
          /** The company description returned by RocketReach, or null when it is not available. */
          description: string | null;
          /** The social and reference links returned by RocketReach, or null. */
          links: Record<string, unknown> | null;
          /** The company address object returned by RocketReach, or null. */
          address: Record<string, unknown> | null;
          /** The raw RocketReach company object. */
          raw: Record<string, unknown>;
        };
        /** The primary industry returned by RocketReach, or null when it is not available. */
        primaryIndustry: string | null;
        /** The industry keywords returned by RocketReach. */
        industryKeywords: Array<string>;
      };
    };
    /** Retrieve the employee-count data exposed on a RocketReach company profile by looking up the target company first. */
    "rocket_reach.get_company_size": {
      input: {
        /**
         * The RocketReach numeric identifier.
         * @exclusiveMinimum 0
         */
        id?: number;
        /** The RocketReach company identifier. */
        company_id?: string | number;
        /**
         * The company name to look up.
         * @minLength 1
         */
        name?: string;
        /**
         * The bare company domain to look up.
         * @minLength 1
         */
        domain?: string;
      };
      output: {
        /** The normalized RocketReach company profile. */
        company: {
          /** The RocketReach company identifier, or null when it is not available. */
          companyId: number | null;
          /** The company display name, or null when it is not available. */
          name: string | null;
          /** The primary company domain, or null when it is not available. */
          domain: string | null;
          /** The company email domain, or null when it is not available. */
          emailDomain: string | null;
          /** The company website domain, or null when it is not available. */
          websiteDomain: string | null;
          /** The RocketReach web profile URL, or null when it is not available. */
          rrProfileUrl: string | null;
          /** The company founded date string returned by RocketReach, or null. */
          yearFounded: string | null;
          /** The employee count returned by RocketReach, or null when it is not available. */
          numEmployees: number | null;
          /** The revenue value returned by RocketReach, or null. */
          revenue: number | null;
          /** The primary industry returned by RocketReach, or null when it is not available. */
          industry: string | null;
          /** The industry keywords returned by RocketReach. */
          industryKeywords: Array<string>;
          /** The company description returned by RocketReach, or null when it is not available. */
          description: string | null;
          /** The social and reference links returned by RocketReach, or null. */
          links: Record<string, unknown> | null;
          /** The company address object returned by RocketReach, or null. */
          address: Record<string, unknown> | null;
          /** The raw RocketReach company object. */
          raw: Record<string, unknown>;
        };
        /** The employee count returned by RocketReach, or null when it is not available. */
        numEmployees: number | null;
      };
    };
    /** Look up a RocketReach company profile by id, name, or domain. */
    "rocket_reach.lookup_company": {
      input: {
        /**
         * The RocketReach numeric identifier.
         * @exclusiveMinimum 0
         */
        id?: number;
        /** The RocketReach company identifier. */
        company_id?: string | number;
        /**
         * The company name to look up.
         * @minLength 1
         */
        name?: string;
        /**
         * The bare company domain to look up.
         * @minLength 1
         */
        domain?: string;
      };
      output: {
        /** The normalized RocketReach company profile. */
        company: {
          /** The RocketReach company identifier, or null when it is not available. */
          companyId: number | null;
          /** The company display name, or null when it is not available. */
          name: string | null;
          /** The primary company domain, or null when it is not available. */
          domain: string | null;
          /** The company email domain, or null when it is not available. */
          emailDomain: string | null;
          /** The company website domain, or null when it is not available. */
          websiteDomain: string | null;
          /** The RocketReach web profile URL, or null when it is not available. */
          rrProfileUrl: string | null;
          /** The company founded date string returned by RocketReach, or null. */
          yearFounded: string | null;
          /** The employee count returned by RocketReach, or null when it is not available. */
          numEmployees: number | null;
          /** The revenue value returned by RocketReach, or null. */
          revenue: number | null;
          /** The primary industry returned by RocketReach, or null when it is not available. */
          industry: string | null;
          /** The industry keywords returned by RocketReach. */
          industryKeywords: Array<string>;
          /** The company description returned by RocketReach, or null when it is not available. */
          description: string | null;
          /** The social and reference links returned by RocketReach, or null. */
          links: Record<string, unknown> | null;
          /** The company address object returned by RocketReach, or null. */
          address: Record<string, unknown> | null;
          /** The raw RocketReach company object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Look up a RocketReach person profile by id, email, name, or LinkedIn URL through the official lookup endpoint. */
    "rocket_reach.lookup_person": {
      input: {
        /**
         * The RocketReach numeric identifier.
         * @exclusiveMinimum 0
         */
        id?: number;
        /**
         * The email address of the person to look up.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email?: string;
        /**
         * The name of the person to look up.
         * @minLength 1
         */
        name?: string;
        /**
         * The LinkedIn profile URL of the person to look up.
         * @minLength 1
         */
        linkedin_url?: string;
        /**
         * The current employer to pair with a person-name lookup.
         * @minLength 1
         */
        current_employer?: string;
        /** The RocketReach lookup type to request. */
        lookup_type?: "standard" | "premium" | "premium (feeds disabled)" | "bulk" | "phone" | "enrich";
        /**
         * The RocketReach webhook identifier to associate with the request.
         * @exclusiveMinimum 0
         */
        webhook_id?: number;
        /** Whether RocketReach should block until the lookup completes when supported. */
        block?: boolean;
      };
      output: {
        /** The RocketReach person object. */
        person: Record<string, unknown>;
      };
    };
    /** Look up a RocketReach person profile and return any company profile embedded in the official lookup response. */
    "rocket_reach.lookup_person_and_company": {
      input: {
        /**
         * The RocketReach numeric identifier.
         * @exclusiveMinimum 0
         */
        id?: number;
        /**
         * The email address of the person to look up.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email?: string;
        /**
         * The name of the person to look up.
         * @minLength 1
         */
        name?: string;
        /**
         * The job title to pair with the person lookup.
         * @minLength 1
         */
        title?: string;
        /**
         * The NPI number to use for a healthcare-focused lookup.
         * @exclusiveMinimum 0
         */
        npi_number?: number;
        /** The RocketReach lookup type to request. */
        lookup_type?: "standard" | "premium" | "premium (feeds disabled)" | "bulk" | "phone" | "enrich";
        /**
         * The LinkedIn profile URL of the person to look up.
         * @minLength 1
         */
        linkedin_url?: string;
        /**
         * The current employer to pair with the person lookup.
         * @minLength 1
         */
        current_employer?: string;
        /**
         * The RocketReach webhook identifier to associate with the request.
         * @exclusiveMinimum 0
         */
        webhook_id?: number;
        /** Whether RocketReach should return cached emails when they are available. */
        return_cached_emails?: boolean;
        /** Whether RocketReach should block until the lookup completes when supported. */
        block?: boolean;
      };
      output: {
        /** The RocketReach person object. */
        person: Record<string, unknown>;
        /** The normalized company profile extracted from the lookup response, or null. */
        company: {
          /** The RocketReach company identifier, or null when it is not available. */
          companyId: number | null;
          /** The company display name, or null when it is not available. */
          name: string | null;
          /** The primary company domain, or null when it is not available. */
          domain: string | null;
          /** The company email domain, or null when it is not available. */
          emailDomain: string | null;
          /** The company website domain, or null when it is not available. */
          websiteDomain: string | null;
          /** The RocketReach web profile URL, or null when it is not available. */
          rrProfileUrl: string | null;
          /** The company founded date string returned by RocketReach, or null. */
          yearFounded: string | null;
          /** The employee count returned by RocketReach, or null when it is not available. */
          numEmployees: number | null;
          /** The revenue value returned by RocketReach, or null. */
          revenue: number | null;
          /** The primary industry returned by RocketReach, or null when it is not available. */
          industry: string | null;
          /** The industry keywords returned by RocketReach. */
          industryKeywords: Array<string>;
          /** The company description returned by RocketReach, or null when it is not available. */
          description: string | null;
          /** The social and reference links returned by RocketReach, or null. */
          links: Record<string, unknown> | null;
          /** The company address object returned by RocketReach, or null. */
          address: Record<string, unknown> | null;
          /** The raw RocketReach company object. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Look up a company by exact name, domain, or id and return it as a single-item company list for search-style compatibility. */
    "rocket_reach.search_companies": {
      input: {
        /**
         * The exact company name to look up for compatibility.
         * @minLength 1
         */
        query?: string;
        /**
         * The company name to look up.
         * @minLength 1
         */
        name?: string;
        /**
         * The bare company domain to look up.
         * @minLength 1
         */
        domain?: string;
        /**
         * The RocketReach numeric identifier.
         * @exclusiveMinimum 0
         */
        id?: number;
        /**
         * The 1-based page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * How many results to request per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The exact-match company results. */
        companies: Array<{
          /** The RocketReach company identifier, or null when it is not available. */
          companyId: number | null;
          /** The company display name, or null when it is not available. */
          name: string | null;
          /** The primary company domain, or null when it is not available. */
          domain: string | null;
          /** The company email domain, or null when it is not available. */
          emailDomain: string | null;
          /** The company website domain, or null when it is not available. */
          websiteDomain: string | null;
          /** The RocketReach web profile URL, or null when it is not available. */
          rrProfileUrl: string | null;
          /** The company founded date string returned by RocketReach, or null. */
          yearFounded: string | null;
          /** The employee count returned by RocketReach, or null when it is not available. */
          numEmployees: number | null;
          /** The revenue value returned by RocketReach, or null. */
          revenue: number | null;
          /** The primary industry returned by RocketReach, or null when it is not available. */
          industry: string | null;
          /** The industry keywords returned by RocketReach. */
          industryKeywords: Array<string>;
          /** The company description returned by RocketReach, or null when it is not available. */
          description: string | null;
          /** The social and reference links returned by RocketReach, or null. */
          links: Record<string, unknown> | null;
          /** The company address object returned by RocketReach, or null. */
          address: Record<string, unknown> | null;
          /** The raw RocketReach company object. */
          raw: Record<string, unknown>;
        }>;
        /** Whether this helper is limited to exact-match company lookups. */
        exactMatchOnly: boolean;
      };
    };
    /** Search RocketReach people with the official structured query object and pagination controls. */
    "rocket_reach.search_people": {
      input: {
        /** The official RocketReach people-search facet object, such as { name: ['Ada Lovelace'] } or { current_employer: ['OpenAI'] }. */
        query: Record<string, unknown>;
        /**
         * The 1-based page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * How many results to request per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Additional RocketReach search options merged into the top-level request body. */
        options?: Record<string, unknown>;
      };
      output: {
        /** The matching RocketReach people profiles. */
        profiles: Array<Record<string, unknown>>;
        /** The RocketReach pagination object, or null when it is not available. */
        pagination: Record<string, unknown> | null;
      };
    };
  }
}
