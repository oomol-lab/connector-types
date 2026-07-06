import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Enrich one IPv4 or IPv6 address with Leadfeeder company or network intelligence. */
    "leadfeeder.enrich_ip": {
      input: {
        /**
         * The Leadfeeder account ID. Retrieve available account IDs with list_accounts.
         * @minLength 1
         */
        accountId: string;
        /**
         * A valid IPv4 or IPv6 address to enrich.
         * @minLength 1
         */
        ip: string;
      };
      output: {
        /** A Leadfeeder JSON:API resource object. */
        data: {
          /** The Leadfeeder resource type. */
          type?: string;
          /** The Leadfeeder resource ID. */
          id?: string;
          /** The attributes returned for this Leadfeeder resource. */
          attributes?: Record<string, unknown>;
          /** The relationships returned for this Leadfeeder resource. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Leadfeeder response metadata such as request ID, credits, pagination, or result counts. */
        meta: {
          /** The unique request ID assigned by Leadfeeder. */
          request_id?: string;
          /** Credit consumption metadata returned by Leadfeeder. */
          credits?: Record<string, unknown>;
          /** Pagination metadata returned by Leadfeeder. */
          pagination?: Record<string, unknown>;
          /** The number of results returned by Leadfeeder. */
          num_results?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch detailed Leadfeeder firmographic data for up to 100 company IDs in one request. */
    "leadfeeder.get_companies": {
      input: {
        /**
         * The Leadfeeder account ID. Retrieve available account IDs with list_accounts.
         * @minLength 1
         */
        accountId: string;
        /**
         * Leadfeeder company IDs to retrieve.
         * @minItems 1
         * @maxItems 100
         */
        companyIds: Array<string>;
        /** Additional relationship data to attach to a company response. */
        include?: "group_company" | "tags" | "lists" | "web_visits" | "icps" | "crm_connections" | "crm_connections.crm_record" | "crm_connections.crm_record.crm_owner" | "crm_suggestions" | "crm_suggestions.crm_record" | "crm_suggestions.crm_record.crm_owner" | "crm_group_connections" | "crm_group_connections.crm_connection" | "crm_group_connections.crm_connection.crm_record" | "crm_group_connections.crm_connection.crm_record.crm_owner";
      };
      output: {
        /** The Leadfeeder resources returned by the API. */
        data: Array<{
          /** The Leadfeeder resource type. */
          type?: string;
          /** The Leadfeeder resource ID. */
          id?: string;
          /** The attributes returned for this Leadfeeder resource. */
          attributes?: Record<string, unknown>;
          /** The relationships returned for this Leadfeeder resource. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Leadfeeder response metadata such as request ID, credits, pagination, or result counts. */
        meta: {
          /** The unique request ID assigned by Leadfeeder. */
          request_id?: string;
          /** Credit consumption metadata returned by Leadfeeder. */
          credits?: Record<string, unknown>;
          /** Pagination metadata returned by Leadfeeder. */
          pagination?: Record<string, unknown>;
          /** The number of results returned by Leadfeeder. */
          num_results?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch detailed Leadfeeder firmographic and hierarchy data for one company ID. */
    "leadfeeder.get_company": {
      input: {
        /**
         * The Leadfeeder account ID. Retrieve available account IDs with list_accounts.
         * @minLength 1
         */
        accountId: string;
        /**
         * The Leadfeeder company ID. Older string-based company IDs are also supported by Leadfeeder.
         * @minLength 1
         */
        companyId: string;
        /** Additional relationship data to attach to a company response. */
        include?: "group_company" | "tags" | "lists" | "web_visits" | "icps" | "crm_connections" | "crm_connections.crm_record" | "crm_connections.crm_record.crm_owner" | "crm_suggestions" | "crm_suggestions.crm_record" | "crm_suggestions.crm_record.crm_owner" | "crm_group_connections" | "crm_group_connections.crm_connection" | "crm_group_connections.crm_connection.crm_record" | "crm_group_connections.crm_connection.crm_record.crm_owner";
      };
      output: {
        /** A Leadfeeder JSON:API resource object. */
        data: {
          /** The Leadfeeder resource type. */
          type?: string;
          /** The Leadfeeder resource ID. */
          id?: string;
          /** The attributes returned for this Leadfeeder resource. */
          attributes?: Record<string, unknown>;
          /** The relationships returned for this Leadfeeder resource. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Leadfeeder response metadata such as request ID, credits, pagination, or result counts. */
        meta: {
          /** The unique request ID assigned by Leadfeeder. */
          request_id?: string;
          /** Credit consumption metadata returned by Leadfeeder. */
          credits?: Record<string, unknown>;
          /** Pagination metadata returned by Leadfeeder. */
          pagination?: Record<string, unknown>;
          /** The number of results returned by Leadfeeder. */
          num_results?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the Leadfeeder user associated with the connected API key. */
    "leadfeeder.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A Leadfeeder JSON:API resource object. */
        data: {
          /** The Leadfeeder resource type. */
          type?: string;
          /** The Leadfeeder resource ID. */
          id?: string;
          /** The attributes returned for this Leadfeeder resource. */
          attributes?: Record<string, unknown>;
          /** The relationships returned for this Leadfeeder resource. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Leadfeeder response metadata such as request ID, credits, pagination, or result counts. */
        meta: {
          /** The unique request ID assigned by Leadfeeder. */
          request_id?: string;
          /** Credit consumption metadata returned by Leadfeeder. */
          credits?: Record<string, unknown>;
          /** Pagination metadata returned by Leadfeeder. */
          pagination?: Record<string, unknown>;
          /** The number of results returned by Leadfeeder. */
          num_results?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List Leadfeeder accounts available to the API key, optionally including credit details for one account. */
    "leadfeeder.list_accounts": {
      input: {
        /**
         * The Leadfeeder account ID. Retrieve available account IDs with list_accounts.
         * @minLength 1
         */
        accountId?: string;
      };
      output: {
        /** The Leadfeeder resources returned by the API. */
        data: Array<{
          /** The Leadfeeder resource type. */
          type?: string;
          /** The Leadfeeder resource ID. */
          id?: string;
          /** The attributes returned for this Leadfeeder resource. */
          attributes?: Record<string, unknown>;
          /** The relationships returned for this Leadfeeder resource. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Leadfeeder response metadata such as request ID, credits, pagination, or result counts. */
        meta: {
          /** The unique request ID assigned by Leadfeeder. */
          request_id?: string;
          /** Credit consumption metadata returned by Leadfeeder. */
          credits?: Record<string, unknown>;
          /** Pagination metadata returned by Leadfeeder. */
          pagination?: Record<string, unknown>;
          /** The number of results returned by Leadfeeder. */
          num_results?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Match one or more company records to Leadfeeder companies and return ranked matches for each input record. */
    "leadfeeder.match_companies": {
      input: {
        /**
         * The Leadfeeder account ID. Retrieve available account IDs with list_accounts.
         * @minLength 1
         */
        accountId: string;
        /**
         * Maximum number of Leadfeeder matches returned per input company.
         * @minimum 1
         * @maximum 20
         */
        maxResultsPerCompany?: number;
        /**
         * Company records to match.
         * @minItems 1
         * @maxItems 200
         */
        companies: Array<{
          /**
           * The legal name of the company.
           * @minLength 1
           */
          companyName?: string;
          /**
           * The URL of the company website.
           * @minLength 1
           */
          url?: string;
          /**
           * A company email address.
           * @minLength 1
           */
          email?: string;
          /**
           * A company phone number in E.164 format when available.
           * @minLength 1
           */
          phone?: string;
          /**
           * The country name.
           * @minLength 1
           */
          country?: string;
          /**
           * The ISO 3166-1 alpha-2 country code.
           * @minLength 1
           */
          countryCode?: string;
          /**
           * The city name.
           * @minLength 1
           */
          city?: string;
          /**
           * The postal code for the company's location.
           * @minLength 1
           */
          postalCode?: string;
          /**
           * The full street address line.
           * @minLength 1
           */
          street?: string;
          /**
           * The street name part of the company's primary address.
           * @minLength 1
           */
          streetName?: string;
          /**
           * The street number part of the company's primary address.
           * @minLength 1
           */
          streetNumber?: string;
          /**
           * The company's commercial register identifier.
           * @minLength 1
           */
          registerId?: string;
          /**
           * The company's commercial register location.
           * @minLength 1
           */
          registerLocation?: string;
          /**
           * The company's VAT ID or tax ID.
           * @minLength 1
           */
          vatId?: string;
        }>;
      };
      output: {
        /** Match result groups in the same order as the input companies. */
        data: Array<Array<{
          /** The Leadfeeder resource type. */
          type?: string;
          /** The Leadfeeder resource ID. */
          id?: string;
          /** The attributes returned for this Leadfeeder resource. */
          attributes?: Record<string, unknown>;
          /** The relationships returned for this Leadfeeder resource. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>>;
        /** Leadfeeder response metadata such as request ID, credits, pagination, or result counts. */
        meta: {
          /** The unique request ID assigned by Leadfeeder. */
          request_id?: string;
          /** Credit consumption metadata returned by Leadfeeder. */
          credits?: Record<string, unknown>;
          /** Pagination metadata returned by Leadfeeder. */
          pagination?: Record<string, unknown>;
          /** The number of results returned by Leadfeeder. */
          num_results?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Search Leadfeeder company intelligence using company terms, location, industry, size, revenue, ICP, and boolean filters. */
    "leadfeeder.search_companies": {
      input: {
        /**
         * The Leadfeeder account ID. Retrieve available account IDs with list_accounts.
         * @minLength 1
         */
        accountId: string;
        /**
         * Cursor for retrieving the next page of company search results.
         * @minLength 1
         */
        pageCursor?: string;
        /**
         * The number of company search results to return. Leadfeeder caps this at 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * Strings matched against company names, alternative names, trade names, and domains.
         * @minItems 1
         */
        searchTerms?: Array<string>;
        /**
         * Company address or geographic filters. Multiple locations are combined as an OR query.
         * @minItems 1
         */
        locations?: Array<{
          /**
           * The full street address line.
           * @minLength 1
           */
          street?: string;
          /**
           * The postal code related to the company's location.
           * @minLength 1
           */
          postalCode?: string;
          /**
           * The city name.
           * @minLength 1
           */
          city?: string;
          /**
           * The ISO 3166-1 alpha-2 country code.
           * @minLength 1
           */
          countryCode?: string;
          /**
           * The region code for the company's location.
           * @minLength 1
           */
          regionCode?: string;
          /** A geographic radius filter for company search. */
          geo?: {
            /** The latitude of the geographical point. */
            latitude?: number;
            /** The longitude of the geographical point. */
            longitude?: number;
            /**
             * Maximum distance in kilometers from the geographical point.
             * @minimum 0
             * @maximum 500
             */
            distance?: number;
          };
        }>;
        /** Industry classification filters for company search. */
        industries?: {
          /** The industry classification system for the supplied codes. */
          classification?: "internal" | "wz" | "nace";
          /**
           * The industry codes to filter companies by.
           * @minItems 1
           */
          codes: Array<string>;
        };
        /**
         * Employee count ranges to filter companies by.
         * @minItems 1
         */
        employeeRanges?: Array<"1-10" | "11-100" | "101-500" | "501-1.000" | "1.001-5.000" | "5.001-10.000" | "10.000+">;
        /** A revenue range filter for companies. */
        revenue?: {
          /**
           * The minimum annual revenue.
           * @minimum 0
           */
          min?: number;
          /**
           * The maximum annual revenue.
           * @minimum 0
           */
          max?: number;
        };
        /**
         * Ideal Customer Profile IDs to use as company search filters.
         * @minItems 1
         */
        icpIds?: Array<string>;
        /** Boolean company search filters combined by Leadfeeder using AND. */
        filters?: {
          /** Whether to return only companies with at least one phone number. */
          hasPhone?: boolean;
          /** Whether to return only companies with at least one known email address. */
          hasEmail?: boolean;
          /** Whether to return only companies with at least one social media profile. */
          hasSocialMediaProfiles?: boolean;
          /** Whether to return only companies marked as do-not-contact. */
          doNotContact?: boolean;
          /** Whether to return only companies with known revenue data. */
          hasFinancialsRevenue?: boolean;
          /** Whether to return only companies with known earnings data. */
          hasFinancialsEarnings?: boolean;
          /** Whether to return only companies with known net worth data. */
          hasFinancialsNetWorth?: boolean;
          /** Whether to return only companies with IP address data. */
          hasIpAddresses?: boolean;
        };
      };
      output: {
        /** The Leadfeeder resources returned by the API. */
        data: Array<{
          /** The Leadfeeder resource type. */
          type?: string;
          /** The Leadfeeder resource ID. */
          id?: string;
          /** The attributes returned for this Leadfeeder resource. */
          attributes?: Record<string, unknown>;
          /** The relationships returned for this Leadfeeder resource. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Leadfeeder response metadata such as request ID, credits, pagination, or result counts. */
        meta: {
          /** The unique request ID assigned by Leadfeeder. */
          request_id?: string;
          /** Credit consumption metadata returned by Leadfeeder. */
          credits?: Record<string, unknown>;
          /** Pagination metadata returned by Leadfeeder. */
          pagination?: Record<string, unknown>;
          /** The number of results returned by Leadfeeder. */
          num_results?: number;
          [key: string]: unknown;
        };
      };
    };
  }
}
