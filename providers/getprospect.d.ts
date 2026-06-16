import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Find a prospect's business email address from a person name and a company domain or company name. */
    "getprospect.find_email": {
      input: {
        /**
         * The contact's full name. Use instead of first_name plus last_name when available.
         * @minLength 1
         */
        full_name?: string;
        /**
         * The contact's first name. Required with last_name when full_name is not provided.
         * @minLength 1
         */
        first_name?: string;
        /**
         * The contact's last name. Required with first_name when full_name is not provided.
         * @minLength 1
         */
        last_name?: string;
        /**
         * The company domain. GetProspect recommends this instead of company for better results.
         * @minLength 1
         */
        domain?: string;
        /**
         * The company name. Use as a fallback when the company domain is not available.
         * @minLength 1
         */
        company?: string;
      };
      output: {
        /**
         * The business email address found by GetProspect.
         * @minLength 1
         */
        email: string;
        /**
         * The upstream GetProspect status for this match.
         * @minLength 1
         */
        status: string;
        /** The local-part of the email address, when available. */
        account?: string | null;
        /** The company domain associated with the match, when available. */
        domain?: string | null;
        /** The contact full name returned by GetProspect, when available. */
        full_name?: string | null;
        /** The contact first name returned by GetProspect, when available. */
        first_name?: string | null;
        /** The contact last name returned by GetProspect, when available. */
        last_name?: string | null;
        /** The LinkedIn profile URL returned by GetProspect, when available. */
        linkedin_url?: string | null;
        /** An arbitrary JSON object returned by GetProspect. */
        raw: Record<string, unknown>;
      };
    };
    /** Look up a saved GetProspect contact profile by email address and return the normalized contact details. */
    "getprospect.lookup_email": {
      input: {
        /**
         * The email address you want to look up.
         * @format email
         */
        email: string;
      };
      output: {
        /**
         * The queried email address.
         * @format email
         */
        email: string;
        /**
         * The email status returned by GetProspect.
         * @minLength 1
         */
        status: string;
        /** Whether GetProspect considers the address a free email. */
        free_email?: boolean | null;
        /** The contact full name returned by GetProspect, when available. */
        full_name?: string | null;
        /** The contact first name returned by GetProspect, when available. */
        first_name?: string | null;
        /** The contact last name returned by GetProspect, when available. */
        last_name?: string | null;
        /** A list of arbitrary JSON objects returned by GetProspect. */
        linkedin?: Array<Record<string, unknown>>;
        /** A list of arbitrary JSON objects returned by GetProspect. */
        companies?: Array<Record<string, unknown>>;
        /** An arbitrary JSON object returned by GetProspect. */
        raw: Record<string, unknown>;
      };
    };
    /** Search GetProspect's company database with structured company filters and paginated results. */
    "getprospect.search_companies": {
      input: {
        /**
         * How many records to return per page.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
        /**
         * The 1-based page number used to paginate through the results.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /** The field used to sort company search results. */
        sort?: "id" | "name" | "domain" | "size" | "headquarters" | "description" | "postalCode" | "location.region" | "location.timezone" | "location.location" | "location.countryCode";
        /** The sort order to apply to the search results. */
        order?: "ASC" | "DESC";
        /** The body payload for the GetProspect company search endpoint. */
        filters?: {
          /** A text filter object accepted by GetProspect search endpoints. */
          name?: {
            /**
             * Match values containing this text.
             * @minLength 1
             */
            contains?: string;
            /**
             * Match values exactly equal to this text.
             * @minLength 1
             */
            equals?: string;
            /**
             * Match values starting with this text.
             * @minLength 1
             */
            startsWith?: string;
            /**
             * Match any of these text values.
             * @minItems 1
             */
            in?: Array<string>;
          };
          /** A text filter object accepted by GetProspect search endpoints. */
          domain?: {
            /**
             * Match values containing this text.
             * @minLength 1
             */
            contains?: string;
            /**
             * Match values exactly equal to this text.
             * @minLength 1
             */
            equals?: string;
            /**
             * Match values starting with this text.
             * @minLength 1
             */
            startsWith?: string;
            /**
             * Match any of these text values.
             * @minItems 1
             */
            in?: Array<string>;
          };
          /** An industry filter object accepted by GetProspect search endpoints. */
          industry?: {
            /**
             * Match the exact industry name.
             * @minLength 1
             */
            equals?: string;
            /**
             * Match any of these industries.
             * @minItems 1
             */
            in?: Array<string>;
          };
          /** A text filter object accepted by GetProspect search endpoints. */
          location?: {
            /**
             * Match values containing this text.
             * @minLength 1
             */
            contains?: string;
            /**
             * Match values exactly equal to this text.
             * @minLength 1
             */
            equals?: string;
            /**
             * Match values starting with this text.
             * @minLength 1
             */
            startsWith?: string;
            /**
             * Match any of these text values.
             * @minItems 1
             */
            in?: Array<string>;
          };
          /** A text filter object accepted by GetProspect search endpoints. */
          keywords?: {
            /**
             * Match values containing this text.
             * @minLength 1
             */
            contains?: string;
            /**
             * Match values exactly equal to this text.
             * @minLength 1
             */
            equals?: string;
            /**
             * Match values starting with this text.
             * @minLength 1
             */
            startsWith?: string;
            /**
             * Match any of these text values.
             * @minItems 1
             */
            in?: Array<string>;
          };
          /**
           * Filter results updated on the given full-date value.
           * @format date
           */
          lastUpdated?: string;
          /** A count-range filter object accepted by GetProspect search endpoints. */
          employees?: {
            /**
             * Match the exact predefined employee-count bucket.
             * @minLength 1
             */
            equals?: string;
            /**
             * Match any of these predefined employee-count buckets.
             * @minItems 1
             */
            in?: Array<string>;
          };
        };
      };
      output: {
        /** The matched company search results. */
        data: Array<{
          /**
           * The GetProspect identifier for the company.
           * @minLength 1
           */
          getProspectId: string;
          /**
           * The company name.
           * @minLength 1
           */
          name: string;
          /**
           * The company domain.
           * @minLength 1
           */
          domain: string;
          /** The company description, when available. */
          description?: string | null;
          /** The company headquarters, when available. */
          headquarters?: string | null;
          /** The company industry, when available. */
          industry?: string | null;
          /** The company postal code, when available. */
          postalCode?: string | null;
          /** The company size value returned by GetProspect. */
          size?: number | null;
          /** A list of arbitrary JSON objects returned by GetProspect. */
          linkedin: Array<Record<string, unknown>>;
          /** An arbitrary JSON object returned by GetProspect. */
          location: Record<string, unknown>;
          /** A list of arbitrary JSON objects returned by GetProspect. */
          technologies: Array<Record<string, unknown>>;
          /** An arbitrary JSON object returned by GetProspect. */
          raw: Record<string, unknown>;
        }>;
        /** The pagination metadata returned by GetProspect search endpoints. */
        meta: {
          /** The total number of result pages. */
          totalPages: number;
          /** The total number of matching items. */
          totalItems: number;
          /** The number of saved items reported by GetProspect. */
          savedItems: number;
          /** The number of items returned per page. */
          pageSize: number;
          /** The current result page number. */
          page: number;
          /** The sort configuration applied by GetProspect. */
          sort: {
            /**
             * The column name used for sorting.
             * @minLength 1
             */
            column: string;
            /** The sort order to apply to the search results. */
            order: "ASC" | "DESC";
          };
          /** An arbitrary JSON object returned by GetProspect. */
          additionalInfo: Record<string, unknown>;
        };
      };
    };
    /** Search GetProspect's B2B lead database with structured lead filters and paginated results. */
    "getprospect.search_leads": {
      input: {
        /**
         * How many records to return per page.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
        /**
         * The 1-based page number used to paginate through the results.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /** The field used to sort lead search results. */
        sort?: "id" | "firstName" | "lastName" | "contactInfo" | "summary" | "geolocation.region" | "geolocation.timezone" | "geolocation.location" | "geolocation.countryCode";
        /** The sort order to apply to the search results. */
        order?: "ASC" | "DESC";
        /** The body payload for the GetProspect lead search endpoint. */
        filters?: {
          /** A text filter object accepted by GetProspect search endpoints. */
          contactName?: {
            /**
             * Match values containing this text.
             * @minLength 1
             */
            contains?: string;
            /**
             * Match values exactly equal to this text.
             * @minLength 1
             */
            equals?: string;
            /**
             * Match values starting with this text.
             * @minLength 1
             */
            startsWith?: string;
            /**
             * Match any of these text values.
             * @minItems 1
             */
            in?: Array<string>;
          };
          /** A text filter object accepted by GetProspect search endpoints. */
          companyName?: {
            /**
             * Match values containing this text.
             * @minLength 1
             */
            contains?: string;
            /**
             * Match values exactly equal to this text.
             * @minLength 1
             */
            equals?: string;
            /**
             * Match values starting with this text.
             * @minLength 1
             */
            startsWith?: string;
            /**
             * Match any of these text values.
             * @minItems 1
             */
            in?: Array<string>;
          };
          /** A text filter object accepted by GetProspect search endpoints. */
          jobTitle?: {
            /**
             * Match values containing this text.
             * @minLength 1
             */
            contains?: string;
            /**
             * Match values exactly equal to this text.
             * @minLength 1
             */
            equals?: string;
            /**
             * Match values starting with this text.
             * @minLength 1
             */
            startsWith?: string;
            /**
             * Match any of these text values.
             * @minItems 1
             */
            in?: Array<string>;
          };
          /** A text filter object accepted by GetProspect search endpoints. */
          seniority?: {
            /**
             * Match values containing this text.
             * @minLength 1
             */
            contains?: string;
            /**
             * Match values exactly equal to this text.
             * @minLength 1
             */
            equals?: string;
            /**
             * Match values starting with this text.
             * @minLength 1
             */
            startsWith?: string;
            /**
             * Match any of these text values.
             * @minItems 1
             */
            in?: Array<string>;
          };
          /** A text filter object accepted by GetProspect search endpoints. */
          domain?: {
            /**
             * Match values containing this text.
             * @minLength 1
             */
            contains?: string;
            /**
             * Match values exactly equal to this text.
             * @minLength 1
             */
            equals?: string;
            /**
             * Match values starting with this text.
             * @minLength 1
             */
            startsWith?: string;
            /**
             * Match any of these text values.
             * @minItems 1
             */
            in?: Array<string>;
          };
          /** An industry filter object accepted by GetProspect search endpoints. */
          industry?: {
            /**
             * Match the exact industry name.
             * @minLength 1
             */
            equals?: string;
            /**
             * Match any of these industries.
             * @minItems 1
             */
            in?: Array<string>;
          };
          /** A text filter object accepted by GetProspect search endpoints. */
          location?: {
            /**
             * Match values containing this text.
             * @minLength 1
             */
            contains?: string;
            /**
             * Match values exactly equal to this text.
             * @minLength 1
             */
            equals?: string;
            /**
             * Match values starting with this text.
             * @minLength 1
             */
            startsWith?: string;
            /**
             * Match any of these text values.
             * @minItems 1
             */
            in?: Array<string>;
          };
          /** A text filter object accepted by GetProspect search endpoints. */
          keywords?: {
            /**
             * Match values containing this text.
             * @minLength 1
             */
            contains?: string;
            /**
             * Match values exactly equal to this text.
             * @minLength 1
             */
            equals?: string;
            /**
             * Match values starting with this text.
             * @minLength 1
             */
            startsWith?: string;
            /**
             * Match any of these text values.
             * @minItems 1
             */
            in?: Array<string>;
          };
          /** A text filter object accepted by GetProspect search endpoints. */
          headquarters?: {
            /**
             * Match values containing this text.
             * @minLength 1
             */
            contains?: string;
            /**
             * Match values exactly equal to this text.
             * @minLength 1
             */
            equals?: string;
            /**
             * Match values starting with this text.
             * @minLength 1
             */
            startsWith?: string;
            /**
             * Match any of these text values.
             * @minItems 1
             */
            in?: Array<string>;
          };
          /** A count-range filter object accepted by GetProspect search endpoints. */
          employees?: {
            /**
             * Match the exact predefined employee-count bucket.
             * @minLength 1
             */
            equals?: string;
            /**
             * Match any of these predefined employee-count buckets.
             * @minItems 1
             */
            in?: Array<string>;
          };
          /**
           * Filter results updated on the given full-date value.
           * @format date
           */
          lastUpdated?: string;
          /** Limit results to records with email coverage. */
          email?: "all" | "all_contacts";
        };
      };
      output: {
        /** The matched lead search results. */
        data: Array<{
          /**
           * The GetProspect identifier for the contact.
           * @minLength 1
           */
          getProspectId: string;
          /** The contact first name, when available. */
          firstName?: string | null;
          /** The contact last name, when available. */
          lastName?: string | null;
          /** The contact info summary returned by GetProspect. */
          contactInfo?: string | null;
          /** The contact summary returned by GetProspect. */
          summary?: string | null;
          /** A list of arbitrary JSON objects returned by GetProspect. */
          companies: Array<Record<string, unknown>>;
          /** The ISO 8601 date or date-time string returned by GetProspect. */
          lastUpdatedAt: string;
          /** A list of arbitrary JSON objects returned by GetProspect. */
          linkedin: Array<Record<string, unknown>>;
          /** An arbitrary JSON object returned by GetProspect. */
          geolocation: Record<string, unknown>;
          /** An arbitrary JSON object returned by GetProspect. */
          raw: Record<string, unknown>;
        }>;
        /** The pagination metadata returned by GetProspect search endpoints. */
        meta: {
          /** The total number of result pages. */
          totalPages: number;
          /** The total number of matching items. */
          totalItems: number;
          /** The number of saved items reported by GetProspect. */
          savedItems: number;
          /** The number of items returned per page. */
          pageSize: number;
          /** The current result page number. */
          page: number;
          /** The sort configuration applied by GetProspect. */
          sort: {
            /**
             * The column name used for sorting.
             * @minLength 1
             */
            column: string;
            /** The sort order to apply to the search results. */
            order: "ASC" | "DESC";
          };
          /** An arbitrary JSON object returned by GetProspect. */
          additionalInfo: Record<string, unknown>;
        };
      };
    };
    /** Verify a single email address and return its deliverability status from GetProspect. */
    "getprospect.verify_email": {
      input: {
        /**
         * The email address you want to verify.
         * @format email
         */
        email: string;
      };
      output: {
        /**
         * The verified email address.
         * @format email
         */
        email: string;
        /**
         * The deliverability status returned by GetProspect.
         * @minLength 1
         */
        status: string;
        /**
         * The account part of the verified email address.
         * @minLength 1
         */
        account: string;
        /**
         * The domain part of the verified email address.
         * @minLength 1
         */
        domain: string;
        /**
         * The domain-level verification status.
         * @minLength 1
         */
        domain_status: string;
        /**
         * The SMTP provider detected by GetProspect.
         * @minLength 1
         */
        smtp_provider: string;
        /** Whether GetProspect considers the address a free email. */
        free_email?: boolean | null;
        /** An arbitrary JSON object returned by GetProspect. */
        raw: Record<string, unknown>;
      };
    };
  }
}
