import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Count companies matching segmentation conditions or a text query. */
    "the_companies_api.count_companies": {
      input: {
        /** Existing action ID used as the search source. */
        actionId?: number;
        /** Company segmentation conditions. */
        query?: Array<{
          /** Company attribute to filter. */
          attribute: "about.businessType" | "about.industries" | "about.industry" | "about.name" | "about.totalEmployees" | "about.yearFounded" | "ai.search" | "analytics.monthlyVisitors" | "apps" | "codes.naics" | "codes.sic" | "contacts" | "domain.domain" | "domain.tld" | "finances.revenue" | "finances.stockExchange" | "locations.headquarters.city.code" | "locations.headquarters.continent.code" | "locations.headquarters.country.code" | "locations.headquarters.county.code" | "locations.headquarters.state.code" | "meta.listIds" | "meta.score" | "meta.syncedAt" | "socials" | "socials.linkedin.id" | "technologies.active" | "technologies.categories" | "urls";
          /** Whether the condition operator is blocked. */
          blockedOperator?: boolean;
          /** Logical operator joining this condition. */
          operator: "and" | "or";
          /** Comparison to apply to the attribute. */
          sign: "equals" | "exactEquals" | "greater" | "lower" | "notEquals";
          /** Values to compare against. */
          values: Array<string | number>;
        }>;
        /** Text to search for in the selected fields. */
        search?: string;
        /** Company fields searched by the text query. */
        searchFields?: Array<"about.name" | "domain.domain">;
      };
      output: {
        /** Number of matching companies. */
        count: number;
        [key: string]: unknown;
      };
    };
    /** Get company data by domain, optionally requesting a data refresh. */
    "the_companies_api.get_company": {
      input: {
        /**
         * Company domain, such as example.com.
         * @minLength 1
         */
        domain: string;
        /** Request a real-time refresh of company data for 10 additional credits. */
        refresh?: boolean;
        /** Return the simplified company representation. */
        simplified?: boolean;
      };
      output: {
        /** Company ID. */
        id?: string;
        /** Company identity, industry and workforce information. */
        about?: Record<string, unknown>;
        /** Company domain information. */
        domain?: Record<string, unknown>;
        /** Company contact information. */
        contacts?: Record<string, unknown>;
        /** Company office and headquarters locations. */
        locations?: Record<string, unknown>;
        /** Company social profiles. */
        socials?: Record<string, unknown>;
        /** Company technology information. */
        technologies?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get company data and email analysis from an email address, optionally requesting a data refresh. */
    "the_companies_api.get_company_by_email": {
      input: {
        /**
         * Email address to analyze.
         * @minLength 1
         */
        email: string;
        /** Request a real-time refresh of company data for 10 additional credits. */
        refresh?: boolean;
        /** Return the simplified company representation. */
        simplified?: boolean;
      };
      output: {
        /** Company profile. Available fields depend on the data and simplified option. */
        company?: {
          /** Company ID. */
          id?: string;
          /** Company identity, industry and workforce information. */
          about?: Record<string, unknown>;
          /** Company domain information. */
          domain?: Record<string, unknown>;
          /** Company contact information. */
          contacts?: Record<string, unknown>;
          /** Company office and headquarters locations. */
          locations?: Record<string, unknown>;
          /** Company social profiles. */
          socials?: Record<string, unknown>;
          /** Company technology information. */
          technologies?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Email address analysis and classification. */
        email: Record<string, unknown>;
        /** Request billing metadata. */
        meta?: {
          /** Whether this request was free. */
          freeRequest?: boolean;
          [key: string]: unknown;
        };
        /** Whether company data is being refreshed. */
        refreshing?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get company data from social profile URLs, optionally requesting a data refresh. */
    "the_companies_api.get_company_by_social": {
      input: Record<string, unknown>;
      output: {
        /** Company ID. */
        id?: string;
        /** Company identity, industry and workforce information. */
        about?: Record<string, unknown>;
        /** Company domain information. */
        domain?: Record<string, unknown>;
        /** Company contact information. */
        contacts?: Record<string, unknown>;
        /** Company office and headquarters locations. */
        locations?: Record<string, unknown>;
        /** Company social profiles. */
        socials?: Record<string, unknown>;
        /** Company technology information. */
        technologies?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Search companies using segmentation conditions or text, returning one page and its pagination metadata. */
    "the_companies_api.search_companies": {
      input: {
        /** Existing action ID used as the search source. */
        actionId?: number;
        /** Company segmentation conditions. */
        query?: Array<{
          /** Company attribute to filter. */
          attribute: "about.businessType" | "about.industries" | "about.industry" | "about.name" | "about.totalEmployees" | "about.yearFounded" | "ai.search" | "analytics.monthlyVisitors" | "apps" | "codes.naics" | "codes.sic" | "contacts" | "domain.domain" | "domain.tld" | "finances.revenue" | "finances.stockExchange" | "locations.headquarters.city.code" | "locations.headquarters.continent.code" | "locations.headquarters.country.code" | "locations.headquarters.county.code" | "locations.headquarters.state.code" | "meta.listIds" | "meta.score" | "meta.syncedAt" | "socials" | "socials.linkedin.id" | "technologies.active" | "technologies.categories" | "urls";
          /** Whether the condition operator is blocked. */
          blockedOperator?: boolean;
          /** Logical operator joining this condition. */
          operator: "and" | "or";
          /** Comparison to apply to the attribute. */
          sign: "equals" | "exactEquals" | "greater" | "lower" | "notEquals";
          /** Values to compare against. */
          values: Array<string | number>;
        }>;
        /** Text to search for in the selected fields. */
        search?: string;
        /** Company fields searched by the text query. */
        searchFields?: Array<"about.name" | "domain.domain">;
        /** Comma-separated company domains to exclude. */
        domainsToExclude?: string;
        /** Comma-separated LinkedIn profile URLs to exclude. */
        linkedinToExclude?: string;
        /** Page number to retrieve. Defaults to 1. */
        page?: number;
        /** Return the simplified company representation. */
        simplified?: boolean;
        /**
         * Number of companies per page, between 1 and 100. Defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** Ordered sorting criteria. */
        sortFields?: Array<{
          /** Company field used for sorting. */
          key: "about.businessType" | "about.industries" | "about.industry" | "about.name" | "about.totalEmployees" | "about.yearFounded" | "analytics.monthlyVisitors" | "apps" | "codes.naics" | "codes.sic" | "contacts" | "domain.domain" | "domain.tld" | "finances.revenue" | "locations.headquarters.city.code" | "locations.headquarters.country.code" | "locations.headquarters.county.code" | "locations.headquarters.state.code" | "meta.score" | "meta.syncedAt" | "socials" | "technologies.active" | "urls";
          /** Where to place records without a sort value. */
          missing?: "_first" | "_last";
          /** Sort direction. */
          order: "asc" | "desc";
        }>;
        /** Company field used for sorting. */
        sortKey?: "about.businessType" | "about.industries" | "about.industry" | "about.name" | "about.totalEmployees" | "about.yearFounded" | "analytics.monthlyVisitors" | "apps" | "codes.naics" | "codes.sic" | "contacts" | "domain.domain" | "domain.tld" | "finances.revenue" | "locations.headquarters.city.code" | "locations.headquarters.country.code" | "locations.headquarters.county.code" | "locations.headquarters.state.code" | "meta.score" | "meta.syncedAt" | "socials" | "technologies.active" | "urls";
        /** Sort direction. */
        sortOrder?: "asc" | "desc";
      };
      output: {
        /** Companies on the requested page. */
        companies: Array<{
          /** Company ID. */
          id?: string;
          /** Company identity, industry and workforce information. */
          about?: Record<string, unknown>;
          /** Company domain information. */
          domain?: Record<string, unknown>;
          /** Company contact information. */
          contacts?: Record<string, unknown>;
          /** Company office and headquarters locations. */
          locations?: Record<string, unknown>;
          /** Company social profiles. */
          socials?: Record<string, unknown>;
          /** Company technology information. */
          technologies?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination and credit usage for this response. */
        meta: {
          /** Credits charged for this request. */
          cost: number;
          /** Credit balance reported by the API. */
          credits: number;
          /** Current page number. */
          currentPage: number;
          /** First page number. */
          firstPage: number;
          /** Whether this request was free. */
          freeRequest: boolean;
          /** Last available page number. */
          lastPage: number;
          /** Number of results per page. */
          perPage: number;
          /** Total matching companies. */
          total: number;
          /** Whether the maximum scroll result limit has been reached. */
          maxScrollResultsReached?: boolean;
          [key: string]: unknown;
        };
        /** Segmentation conditions used by the API. */
        query: Array<{
          /** Company attribute to filter. */
          attribute: "about.businessType" | "about.industries" | "about.industry" | "about.name" | "about.totalEmployees" | "about.yearFounded" | "ai.search" | "analytics.monthlyVisitors" | "apps" | "codes.naics" | "codes.sic" | "contacts" | "domain.domain" | "domain.tld" | "finances.revenue" | "finances.stockExchange" | "locations.headquarters.city.code" | "locations.headquarters.continent.code" | "locations.headquarters.country.code" | "locations.headquarters.county.code" | "locations.headquarters.state.code" | "meta.listIds" | "meta.score" | "meta.syncedAt" | "socials" | "socials.linkedin.id" | "technologies.active" | "technologies.categories" | "urls";
          /** Whether the condition operator is blocked. */
          blockedOperator?: boolean;
          /** Logical operator joining this condition. */
          operator: "and" | "or";
          /** Comparison to apply to the attribute. */
          sign: "equals" | "exactEquals" | "greater" | "lower" | "notEquals";
          /** Values to compare against. */
          values: Array<string | number>;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
