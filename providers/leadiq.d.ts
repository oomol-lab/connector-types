import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search for people using documented role, seniority, and location filters and return a flat list. */
    "leadiq.flat_advanced_search": {
      input: {
        /**
         * Professional roles to include.
         * @minItems 1
         */
        roles?: Array<string>;
        /**
         * Professional seniority levels to include.
         * @minItems 1
         */
        seniorities?: Array<string>;
        /**
         * Geographic locations to include.
         * @minItems 1
         */
        locations?: Array<{
          /**
           * The city name.
           * @minLength 1
           */
          city?: string;
          /**
           * The state, province, or first-level administrative area.
           * @minLength 1
           */
          areaLevel1?: string;
          /**
           * The country name.
           * @minLength 1
           */
          country?: string;
        }>;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of results to skip for pagination.
         * @minimum 0
         */
        skip?: number;
      };
      output: {
        /** The total number of matching people. */
        totalPeople: number;
        /** The matching people. */
        people: Array<{
          /** The LeadIQ person ID. */
          id?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve LeadIQ subscription plans and current Data Hub and Universal credit balances. */
    "leadiq.get_account": {
      input: Record<string, never>;
      output: {
        /** The account's subscription plans. */
        plans: Array<{
          /** The plan name. */
          name?: string;
          /** The LeadIQ product covered by the plan. */
          product?: string;
          /** The current plan status. */
          status?: string;
          /** The next billing period date or timestamp. */
          nextBillingPeriod?: string | null;
          [key: string]: unknown;
        }>;
        /** A LeadIQ credit-bearing plan. */
        dataHubPlan?: {
          /** The plan name. */
          name?: string;
          /** The LeadIQ product covered by the plan. */
          product?: string;
          /** The current plan status. */
          status?: string;
          /** The next billing period date or timestamp. */
          nextBillingPeriod?: string | null;
          /** The number of credits currently available. */
          available?: number;
          /** The number of credits used in the current billing period. */
          used?: number;
          [key: string]: unknown;
        } | null;
        /** A LeadIQ credit-bearing plan. */
        universalPlan?: {
          /** The plan name. */
          name?: string;
          /** The LeadIQ product covered by the plan. */
          product?: string;
          /** The current plan status. */
          status?: string;
          /** The next billing period date or timestamp. */
          nextBillingPeriod?: string | null;
          /** The number of credits currently available. */
          available?: number;
          /** The number of credits used in the current billing period. */
          used?: number;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Search for people using documented filters and return matches grouped by company. */
    "leadiq.grouped_advanced_search": {
      input: {
        /**
         * Professional roles to include.
         * @minItems 1
         */
        roles?: Array<string>;
        /**
         * Professional seniority levels to include.
         * @minItems 1
         */
        seniorities?: Array<string>;
        /**
         * Geographic locations to include.
         * @minItems 1
         */
        locations?: Array<{
          /**
           * The city name.
           * @minLength 1
           */
          city?: string;
          /**
           * The state, province, or first-level administrative area.
           * @minLength 1
           */
          areaLevel1?: string;
          /**
           * The country name.
           * @minLength 1
           */
          country?: string;
        }>;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of results to skip for pagination.
         * @minimum 0
         */
        skip?: number;
      };
      output: {
        /** The total number of matching companies. */
        totalCompanies: number;
        /** Companies with their matching people. */
        companies: Array<{
          /** The number of matching contacts at the company. */
          totalContactsInCompany?: number;
          /** A company returned by LeadIQ. */
          company?: {
            /** The LeadIQ company ID. */
            id?: string;
            /** The company name. */
            name?: string;
            /** The company domain. */
            domain?: string;
            /** The company's industry. */
            industry?: string;
            /** The company's employee count. */
            numberOfEmployees?: number;
            /** The company's location. */
            locationInfo?: {
              /** The city. */
              city?: string;
              /** The state, province, or first-level administrative area. */
              areaLevel1?: string;
              /** The country. */
              country?: string;
              [key: string]: unknown;
            };
            /** The company's funding information. */
            fundingInfo?: {
              /** The company's total funding in US dollars. */
              fundingTotalUsd?: number;
              /** The most recent funding type. */
              lastFundingType?: string;
              [key: string]: unknown;
            };
            /** Technologies used by the company. */
            technologies?: Array<{
              /** The technology name. */
              name?: string;
              /** The technology category. */
              category?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** The people matching at this company. */
          people?: Array<{
            /** The LeadIQ person ID. */
            id?: string;
            /** The person's full name. */
            name?: string;
            /** The person's job title. */
            title?: string;
            /** The person's seniority. */
            seniority?: string;
            /** The person's LinkedIn profile URL. */
            linkedinUrl?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Find companies in LeadIQ by company ID, name, domain, or LinkedIn ID. */
    "leadiq.search_company": {
      input: {
        /**
         * A LeadIQ company ID.
         * @minLength 1
         */
        id?: string;
        /**
         * The company name.
         * @minLength 1
         */
        name?: string;
        /**
         * The company domain.
         * @minLength 1
         */
        domain?: string;
        /**
         * The LinkedIn company ID.
         * @minLength 1
         */
        linkedinId?: string;
      };
      output: {
        /** The total number of matching companies. */
        totalResults: number;
        /** The matching companies. */
        results: Array<{
          /** The LeadIQ company ID. */
          id?: string;
          /** The company name. */
          name?: string;
          /** The company domain. */
          domain?: string;
          /** The company's industry. */
          industry?: string;
          /** The company's employee count. */
          numberOfEmployees?: number;
          /** The company's location. */
          locationInfo?: {
            /** The city. */
            city?: string;
            /** The state, province, or first-level administrative area. */
            areaLevel1?: string;
            /** The country. */
            country?: string;
            [key: string]: unknown;
          };
          /** The company's funding information. */
          fundingInfo?: {
            /** The company's total funding in US dollars. */
            fundingTotalUsd?: number;
            /** The most recent funding type. */
            lastFundingType?: string;
            [key: string]: unknown;
          };
          /** Technologies used by the company. */
          technologies?: Array<{
            /** The technology name. */
            name?: string;
            /** The technology category. */
            category?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Find and enrich people in LeadIQ by person ID, LinkedIn URL, email, or name and company. */
    "leadiq.search_people": {
      input: {
        /**
         * A LeadIQ person ID.
         * @minLength 1
         */
        id?: string;
        /**
         * A LinkedIn profile URL.
         * @format uri
         */
        linkedinUrl?: string;
        /**
         * A known email address.
         * @format email
         */
        email?: string;
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
        /** Company information used to identify a person. */
        company?: {
          /**
           * The company name.
           * @minLength 1
           */
          name?: string;
          /**
           * The company domain, such as example.com.
           * @minLength 1
           */
          domain?: string;
        };
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of results to skip for pagination.
         * @minimum 0
         */
        skip?: number;
      };
      output: {
        /** The total number of matching people. */
        totalResults: number;
        /** Whether more results are available. */
        hasMore: boolean;
        /** The matching people. */
        results: Array<{
          /** The LeadIQ person ID. */
          id?: string;
          /** The person's name. */
          name?: {
            /** The person's full name. */
            fullName?: string | null;
            /** The person's first name. */
            first?: string | null;
            /** The person's last name. */
            last?: string | null;
            [key: string]: unknown;
          };
          /** The person's current positions. */
          currentPositions?: Array<{
            /** The current job title. */
            title?: string | null;
            /** The current job seniority. */
            seniority?: string | null;
            /** The current job function. */
            function?: string | null;
            /** The company associated with this position. */
            companyInfo?: {
              /** The LeadIQ company ID. */
              id?: string;
              /** The company name. */
              name?: string;
              /** The company domain. */
              domain?: string;
              [key: string]: unknown;
            } | null;
            /** Work email addresses associated with this position. */
            emails?: Array<{
              /** The email address. */
              value?: string;
              /** The email verification status. */
              status?: string;
              /** The email type. */
              type?: string;
              [key: string]: unknown;
            }>;
            /** Work phone numbers associated with this position. */
            phones?: Array<{
              /** The phone number. */
              value?: string;
              /** The phone type. */
              type?: string;
              /** The phone verification status. */
              verificationStatus?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** The person's LinkedIn profile. */
          linkedin?: {
            /** The LinkedIn profile URL. */
            linkedinUrl?: string;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
