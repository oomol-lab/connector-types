import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check whether a contact still works at their last-known company or appears to have changed jobs. */
    "datagma.detect_job_change": {
      input: {
        /**
         * The contact's first name when fullName is not supplied.
         * @minLength 1
         * @pattern \S
         */
        firstName?: string;
        /**
         * The contact's last name when fullName is not supplied.
         * @minLength 1
         * @pattern \S
         */
        lastName?: string;
        /**
         * The contact's full name.
         * @minLength 1
         * @pattern \S
         */
        fullName?: string;
        /**
         * The contact's last-known company name.
         * @minLength 1
         * @pattern \S
         */
        companyName?: string;
        /**
         * The contact's last-known job title, used to disambiguate people with similar names.
         * @minLength 1
         * @pattern \S
         */
        jobTitle?: string;
      };
      output: {
        /** The raw JSON result returned by Datagma; available enrichment fields vary by lookup type and enabled options. */
        result: unknown;
      };
    };
    /** Enrich a person or company from an email, LinkedIn URL, domain, company identifier, or name-and-company combination. */
    "datagma.enrich_person_or_company": {
      input: {
        /**
         * A professional email address, LinkedIn profile URL, company domain, company name, or French SIREN number.
         * @minLength 1
         * @pattern \S
         */
        data?: string;
        /**
         * The person's first name; use it with lastName and company when data is not provided.
         * @minLength 1
         * @pattern \S
         */
        firstName?: string;
        /**
         * The person's last name; use it with firstName and company when data is not provided.
         * @minLength 1
         * @pattern \S
         */
        lastName?: string;
        /**
         * The person's full name; use it with company when data is not provided.
         * @minLength 1
         * @pattern \S
         */
        fullName?: string;
        /**
         * The person's company name or domain when enriching by name instead of the data field.
         * @minLength 1
         * @pattern \S
         */
        company?: string;
        /**
         * A disambiguating keyword such as an industry, founder, or location for company-name enrichment.
         * @minLength 1
         * @pattern \S
         */
        companyKeyword?: string;
        /**
         * A country code that narrows the Datagma search and reduces namesake matches.
         * @minLength 1
         * @pattern \S
         */
        countryCode?: string;
        /** Whether to include LinkedIn-derived company details such as employees, industry, and locations. */
        companyPremium?: boolean;
        /** Whether to include extended company financial, funding, technology, and traffic details. */
        companyFull?: boolean;
        /** Whether to include French SIREN directory information for the matched company. */
        companyFrench?: boolean;
        /** Whether to include the person's extended profile, education, experience, skills, and posts. */
        personFull?: boolean;
        /** Whether to search for a mobile phone number when enriching from a name and company. */
        phoneFull?: boolean;
        /** Whether to include detailed website traffic sources, countries, and similar-site data. */
        deepTraffic?: boolean;
        /** Whether to include lower-confidence matches and additional scoring details. */
        debug?: boolean;
        /** Whether Datagma should check if returned phone numbers are associated with WhatsApp. */
        whatsappCheck?: boolean;
      };
      output: {
        /** The raw JSON result returned by Datagma; available enrichment fields vary by lookup type and enabled options. */
        result: unknown;
      };
    };
    /** Find and verify a person's work email from their name plus a company domain, company name, or LinkedIn company URL. */
    "datagma.find_work_email": {
      input: {
        /**
         * The person's first name when fullName is not supplied.
         * @minLength 1
         * @pattern \S
         */
        firstName?: string;
        /**
         * The person's last name when fullName is not supplied.
         * @minLength 1
         * @pattern \S
         */
        lastName?: string;
        /**
         * The person's full name.
         * @minLength 1
         * @pattern \S
         */
        fullName?: string;
        /**
         * The company domain or company name.
         * @minLength 1
         * @pattern \S
         */
        company?: string;
        /**
         * The LinkedIn company URL used to resolve the employer when a company domain is unavailable.
         * @format uri
         */
        linkedInSlug?: string;
      };
      output: {
        /** The raw JSON result returned by Datagma; available enrichment fields vary by lookup type and enabled options. */
        result: unknown;
      };
    };
    /** Get the remaining API credit balance for the connected Datagma account. */
    "datagma.get_credit": {
      input: {
        /**
         * The account email to include when Datagma requires it for credit lookup.
         * @format email
         */
        email?: string;
      };
      output: {
        /** The raw JSON result returned by Datagma; available enrichment fields vary by lookup type and enabled options. */
        result: unknown;
      };
    };
    /** Find mobile phone numbers from an email address, a social-profile URL, or both, with optional confidence and WhatsApp checks. */
    "datagma.search_phone_numbers": {
      input: {
        /**
         * The person's email address used to search for mobile phone numbers.
         * @format email
         */
        email?: string;
        /**
         * The person's LinkedIn or other supported social-profile URL used for phone lookup.
         * @format uri
         */
        username?: string;
        /** The minimum match threshold passed to Datagma. */
        minimumMatch?: number;
        /** Whether Datagma should check if returned phone numbers are associated with WhatsApp. */
        whatsappCheck?: boolean;
      };
      output: {
        /** The raw JSON result returned by Datagma; available enrichment fields vary by lookup type and enabled options. */
        result: unknown;
      };
    };
  }
}
