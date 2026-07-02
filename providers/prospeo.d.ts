import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Enrich one company by domain or LinkedIn company URL. */
    "prospeo.enrich_company": {
      input: {
        /**
         * The company domain to enrich, such as example.com.
         * @minLength 1
         */
        domain?: string;
        /**
         * The LinkedIn company URL to enrich.
         * @format uri
         */
        linkedinUrl?: string;
        /**
         * The company name to enrich.
         * @minLength 1
         */
        companyName?: string;
        /**
         * The Prospeo company ID from a previous response.
         * @minLength 1
         */
        companyId?: string;
      };
      output: {
        /** The raw Prospeo company object returned by the API. */
        company: Record<string, unknown> | null;
        /** The raw Prospeo company enrichment payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Enrich one person from a LinkedIn URL or identifying person and company fields. */
    "prospeo.enrich_person": {
      input: {
        /**
         * The LinkedIn profile URL for the person to enrich.
         * @format uri
         */
        linkedinUrl?: string;
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
         * The person's full name.
         * @minLength 1
         */
        fullName?: string;
        /**
         * The person's work email address.
         * @format email
         */
        email?: string;
        /**
         * The Prospeo person ID from a previous search response.
         * @minLength 1
         */
        personId?: string;
        /**
         * The person's company name.
         * @minLength 1
         */
        company?: string;
        /**
         * The person's company domain.
         * @minLength 1
         */
        companyDomain?: string;
        /**
         * The person's company LinkedIn URL.
         * @format uri
         */
        companyLinkedinUrl?: string;
        /** Whether to only return records with a verified email. */
        onlyVerifiedEmail?: boolean;
        /** Whether to reveal mobile data when available. */
        enrichMobile?: boolean;
        /** Whether to only return records with a verified mobile. */
        onlyVerifiedMobile?: boolean;
      };
      output: {
        /** The raw Prospeo person object returned by the API. */
        person: Record<string, unknown> | null;
        /** The raw Prospeo person enrichment payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Prospeo account credits and subscription information for the API key. */
    "prospeo.get_account_information": {
      input: Record<string, never>;
      output: {
        /**
         * The account email returned by Prospeo when available.
         * @minLength 1
         */
        email: string | null;
        /**
         * The account plan returned by Prospeo when available.
         * @minLength 1
         */
        plan: string | null;
        /** The raw Prospeo credit counters returned for the account. */
        credits: Record<string, unknown> | null;
        /** The raw Prospeo account information payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Prospeo companies using a query and optional official filter object. */
    "prospeo.search_companies": {
      input: {
        /**
         * The 1-indexed result page to fetch.
         * @minimum 1
         */
        page?: number;
        /** Official Prospeo search filters exported from the Prospeo dashboard or filters documentation. */
        filters: Record<string, unknown>;
      };
      output: {
        /** The Prospeo companies returned by the search. */
        companies: Array<Record<string, unknown>>;
        /** The Prospeo pagination summary returned for a search. */
        pagination: {
          /** The total number of matching records when returned by Prospeo. */
          total: number | null;
          /** The current result page when returned by Prospeo. */
          page: number | null;
          /** The requested result count per page when returned by Prospeo. */
          perPage: number | null;
        } | null;
        /** The raw Prospeo company search payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Prospeo people using a query and optional official filter object. */
    "prospeo.search_people": {
      input: {
        /**
         * The 1-indexed result page to fetch.
         * @minimum 1
         */
        page?: number;
        /** Official Prospeo search filters exported from the Prospeo dashboard or filters documentation. */
        filters: Record<string, unknown>;
      };
      output: {
        /** The Prospeo people returned by the search. */
        people: Array<Record<string, unknown>>;
        /** The Prospeo pagination summary returned for a search. */
        pagination: {
          /** The total number of matching records when returned by Prospeo. */
          total: number | null;
          /** The current result page when returned by Prospeo. */
          page: number | null;
          /** The requested result count per page when returned by Prospeo. */
          perPage: number | null;
        } | null;
        /** The raw Prospeo people search payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Prospeo autocomplete suggestions for supported search filter types. */
    "prospeo.search_suggestions": {
      input: {
        /**
         * A location search query. Minimum 2 characters.
         * @minLength 1
         */
        locationSearch?: string;
        /**
         * A job title search query. Minimum 2 characters.
         * @minLength 1
         */
        jobTitleSearch?: string;
        /**
         * A technology search query. Minimum 2 characters.
         * @minLength 1
         */
        technologySearch?: string;
        /**
         * An industry search query. Minimum 2 characters.
         * @minLength 1
         */
        industrySearch?: string;
        /**
         * A NAICS code or label search query. Minimum 2 characters.
         * @minLength 1
         */
        naicsSearch?: string;
        /**
         * A SIC code or label search query. Minimum 2 characters.
         * @minLength 1
         */
        sicSearch?: string;
        /**
         * A company operating language search query.
         * @minLength 1
         */
        companyOperatingLanguagesSearch?: string;
        /**
         * A company Google discovery keyword search query.
         * @minLength 1
         */
        companyGoogleDiscoverySearch?: string;
        /**
         * A company key customer search query.
         * @minLength 1
         */
        companyKeyCustomersSearch?: string;
        /**
         * A company integration search query.
         * @minLength 1
         */
        companyIntegrationsSearch?: string;
        /**
         * A company product search query.
         * @minLength 1
         */
        companyProductsServicesProductsSearch?: string;
        /**
         * A company service search query.
         * @minLength 1
         */
        companyProductsServicesServicesSearch?: string;
        /**
         * A company ideal customer profile title search query.
         * @minLength 1
         */
        companyIcpTitlesSearch?: string;
        /**
         * A company ideal customer profile industry search query.
         * @minLength 1
         */
        companyIcpIndustriesSearch?: string;
        /**
         * A company ideal customer profile geographic market search query.
         * @minLength 1
         */
        companyIcpGeographicMarketsSearch?: string;
        /**
         * A company ideal customer profile department search query.
         * @minLength 1
         */
        companyIcpOtherDepartmentsSearch?: string;
        /**
         * A company award search query.
         * @minLength 1
         */
        companyAwardsSearch?: string;
        /**
         * A company compliance award search query.
         * @minLength 1
         */
        companyAwardsComplianceSearch?: string;
        /**
         * A company headcount country search query.
         * @minLength 1
         */
        companyHeadcountByLocationSearch?: string;
        /**
         * A company funding investor search query.
         * @minLength 1
         */
        companyFundingInvestorsSearch?: string;
        /**
         * A company funding accelerator search query.
         * @minLength 1
         */
        companyFundingAcceleratorSearch?: string;
        /**
         * A company website traffic country search query.
         * @minLength 1
         */
        companyWebsiteTrafficCountriesSearch?: string;
      };
      output: {
        /**
         * The Prospeo response field that contains the returned suggestions.
         * @minLength 1
         */
        suggestionField: string | null;
        /** The Prospeo suggestions returned for the query. */
        suggestions: Array<string | Record<string, unknown>>;
        /** Location suggestions when locationSearch was used. */
        locationSuggestions: Array<string | Record<string, unknown>> | null;
        /** Job title suggestions when jobTitleSearch was used. */
        jobTitleSuggestions: Array<string | Record<string, unknown>> | null;
        /** Technology suggestions when technologySearch was used. */
        technologySuggestions: Array<string | Record<string, unknown>> | null;
        /** Industry suggestions when industrySearch was used. */
        industrySuggestions: Array<string | Record<string, unknown>> | null;
        /** NAICS suggestions when naicsSearch was used. */
        naicsSuggestions: Array<string | Record<string, unknown>> | null;
        /** SIC suggestions when sicSearch was used. */
        sicSuggestions: Array<string | Record<string, unknown>> | null;
        /** Company filter suggestions when a company filter search field was used. */
        companyFilterSuggestions: Array<string | Record<string, unknown>> | null;
        /** The raw Prospeo search suggestions payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
