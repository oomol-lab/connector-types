import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Enrich one company profile synchronously from its domain using Reverse Contact V2. */
    "reversecontact.enrich_company": {
      input: {
        /**
         * The company domain or full company URL to enrich, such as acme.com.
         * @minLength 1
         */
        domain: string;
        /** Whether to request the expanded company profile for one additional credit when matched. */
        fullProfile?: boolean;
      };
      output: {
        /** Whether Reverse Contact processed the request successfully. */
        success: boolean;
        /** The company enrichment payload. */
        data: {
          /** A Reverse Contact company profile. Light fields are stable, while fullProfile adds documented fetch-profile fields. */
          company: {
            /** The Reverse Contact company identifier. */
            id: string;
            /** The company name in the light enrichment response. */
            name?: string;
            /** The public company-profile slug. */
            publicId?: string;
            /** The social-network company identifier. */
            linkedinId?: string;
            /** The full social-network company URL. */
            linkedinUrl?: string;
            /** The official company website URL. */
            websiteUrl?: string;
            [key: string]: unknown;
          };
        };
        /** The upstream error payload, or null on success. */
        error: unknown;
        /** Credit and rate-limit usage after the request. */
        quotas?: {
          /** The credits consumed by this request. */
          creditsConsumed?: number;
          [key: string]: unknown;
        };
        /** Request tracking metadata returned by Reverse Contact. */
        metadata?: {
          /** The unique request identifier. */
          requestId?: string;
          /** The total execution time in milliseconds. */
          executionTimeMs?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Enrich one professional profile synchronously from an email, name, or company context using Reverse Contact V2. */
    "reversecontact.enrich_person": {
      input: {
        /**
         * A professional email address used to identify the person.
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
        /**
         * A company domain or full company URL used to disambiguate the person.
         * @minLength 1
         */
        companyDomain?: string;
        /**
         * A company name used to disambiguate the person.
         * @minLength 1
         */
        companyName?: string;
        /** Whether to request the expanded person profile for one additional credit when matched. */
        fullProfile?: boolean;
      };
      output: {
        /** Whether Reverse Contact processed the request successfully. */
        success: boolean;
        /** The person enrichment payload. */
        data: {
          /** A Reverse Contact person profile. Light fields are stable, while fullProfile adds documented fetch-profile fields. */
          person: {
            /** The Reverse Contact person identifier. */
            id: string;
            /** The public professional-profile slug. */
            publicId?: string;
            /** The full professional-profile URL. */
            linkedinUrl?: string;
            /** The person's first name. */
            firstName?: string;
            /** The person's last name. */
            lastName?: string;
            [key: string]: unknown;
          };
          /** Other matching people ranked best first. */
          alternativePersons: Array<{
            /** The Reverse Contact person identifier. */
            id: string;
            /** The public professional-profile slug. */
            publicId?: string;
            /** The full professional-profile URL. */
            linkedinUrl?: string;
            /** The person's first name. */
            firstName?: string;
            /** The person's last name. */
            lastName?: string;
            [key: string]: unknown;
          }>;
        };
        /** The upstream error payload, or null on success. */
        error: unknown;
        /** Credit and rate-limit usage after the request. */
        quotas?: {
          /** The credits consumed by this request. */
          creditsConsumed?: number;
          [key: string]: unknown;
        };
        /** Request tracking metadata returned by Reverse Contact. */
        metadata?: {
          /** The unique request identifier. */
          requestId?: string;
          /** The total execution time in milliseconds. */
          executionTimeMs?: number;
          [key: string]: unknown;
        };
      };
    };
  }
}
