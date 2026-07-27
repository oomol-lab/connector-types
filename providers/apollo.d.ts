import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Enrich an Apollo organization by domain. */
    "apollo.enrich_organization": {
      input: {
        /**
         * The bare company domain used to enrich an Apollo organization.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** The enriched Apollo organization object. */
        organization: Record<string, unknown>;
      };
    };
    /** Enrich an Apollo person with the first-pass matching inputs. */
    "apollo.enrich_person": {
      input: {
        /**
         * The Apollo person identifier.
         * @minLength 1
         */
        id?: string;
        /**
         * The person's email address.
         * @format email
         */
        email?: string;
        /**
         * The hashed email used for Apollo person matching.
         * @minLength 1
         */
        hashedEmail?: string;
        /**
         * The LinkedIn profile URL used for Apollo person matching.
         * @minLength 1
         */
        linkedinUrl?: string;
        /**
         * The full name used for Apollo person matching.
         * @minLength 1
         */
        name?: string;
        /**
         * The first name used for Apollo person matching.
         * @minLength 1
         */
        firstName?: string;
        /**
         * The last name used for Apollo person matching.
         * @minLength 1
         */
        lastName?: string;
        /**
         * The organization name paired with name-based person matching.
         * @minLength 1
         */
        organizationName?: string;
        /**
         * The bare organization domain paired with person matching.
         * @minLength 1
         */
        domain?: string;
        /** Whether Apollo should reveal personal-email data when available. */
        revealPersonalEmails?: boolean;
      };
      output: {
        /** The enriched Apollo person object. */
        person: Record<string, unknown>;
      };
    };
    /** Retrieve Apollo API usage statistics for the current team and key. */
    "apollo.get_api_usage_stats": {
      input: Record<string, never>;
      output: {
        /** The normalized Apollo usage stats payload. */
        usage: {
          /** The Apollo team identifier. */
          teamId?: string;
          /** The normalized Apollo credit usage summary. */
          credits: {
            /** The number of credits already used. */
            used?: number;
            /** The credit limit for the current usage period. */
            limit?: number;
            /** The number of credits remaining in the current usage period. */
            remaining?: number;
          };
          /** The Apollo per-endpoint usage summary. */
          endpoints: Array<Record<string, unknown>>;
          /** The start timestamp of the current usage period. */
          usagePeriodStart?: string;
          /** The end timestamp of the current usage period. */
          usagePeriodEnd?: string;
          /** The raw Apollo usage stats payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Search Apollo organizations with the first-pass organization filters. */
    "apollo.search_organizations": {
      input: {
        /**
         * The 1-based page number to request.
         * @minimum 1
         * @maximum 500
         */
        page?: number;
        /**
         * The number of records to request per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * Apollo organization IDs used to scope the search.
         * @minItems 1
         */
        organizationIds?: Array<string>;
        /**
         * The organization name query used for partial company-name matching.
         * @minLength 1
         */
        organizationName?: string;
        /**
         * The organization headquarters locations to include in the search.
         * @minItems 1
         */
        organizationLocations?: Array<string>;
        /**
         * The organization headquarters locations to exclude from the search.
         * @minItems 1
         */
        excludedOrganizationLocations?: Array<string>;
        /**
         * The bare company domains used to restrict the organization search.
         * @minItems 1
         */
        organizationDomains?: Array<string>;
        /**
         * The organization industry or specialization keywords used to refine the search.
         * @minItems 1
         */
        organizationKeywordTags?: Array<string>;
        /**
         * The employee-count ranges expressed as Apollo 'min,max' strings.
         * @minItems 1
         */
        organizationEmployeeRanges?: Array<string>;
        /**
         * The minimum annual revenue, in US dollars, used to refine the organization search.
         * @minimum 0
         */
        organizationRevenueMin?: number;
        /**
         * The maximum annual revenue, in US dollars, used to refine the organization search.
         * @minimum 0
         */
        organizationRevenueMax?: number;
      };
      output: {
        /** The matched Apollo organizations. */
        organizations: Array<Record<string, unknown>>;
        /** The Apollo organization-search pagination metadata. */
        pagination?: Record<string, unknown>;
        /** The Apollo organization-search breadcrumb metadata. */
        breadcrumbs?: Array<Record<string, unknown>>;
      };
    };
    /** Search Apollo people with the first-pass prospecting filters. */
    "apollo.search_people": {
      input: {
        /**
         * The 1-based page number to request.
         * @minimum 1
         * @maximum 500
         */
        page?: number;
        /**
         * The number of records to request per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The Apollo keywords string used to refine the people search.
         * @minLength 1
         */
        keywords?: string;
        /**
         * The current job titles to include in the people search.
         * @minItems 1
         */
        personTitles?: Array<string>;
        /** Whether Apollo should include titles similar to the supplied person titles. */
        includeSimilarTitles?: boolean;
        /**
         * The Apollo organization IDs used to scope the people search.
         * @minItems 1
         */
        organizationIds?: Array<string>;
        /**
         * The person locations to include in the search.
         * @minItems 1
         */
        personLocations?: Array<string>;
        /**
         * The person seniority values to include in the search.
         * @minItems 1
         */
        personSeniorities?: Array<string>;
        /**
         * The Apollo contact-email-status values to include.
         * @minItems 1
         */
        contactEmailStatus?: Array<string>;
        /**
         * The organization headquarters locations used to refine the people search.
         * @minItems 1
         */
        organizationLocations?: Array<string>;
        /**
         * The organization domains used to refine the people search.
         * @minItems 1
         */
        organizationDomains?: Array<string>;
        /**
         * The employee-count ranges expressed as Apollo 'min,max' strings.
         * @minItems 1
         */
        organizationEmployeeRanges?: Array<string>;
        /**
         * The minimum annual revenue, in US dollars, used to refine the people search.
         * @minimum 0
         */
        organizationRevenueMin?: number;
        /**
         * The maximum annual revenue, in US dollars, used to refine the people search.
         * @minimum 0
         */
        organizationRevenueMax?: number;
      };
      output: {
        /** The matched Apollo people search results. */
        people: Array<Record<string, unknown>>;
        /** The Apollo people-search pagination metadata. */
        pagination?: Record<string, unknown>;
      };
    };
  }
}
