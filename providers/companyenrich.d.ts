import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Count how many companies match the provided CompanyEnrich search filters. */
    "companyenrich.count_companies": {
      input: {
        /**
         * The search query applied to company names and domains.
         * @minLength 1
         * @maxLength 250
         */
        query?: string;
        /**
         * The semantic search query applied by CompanyEnrich.
         * @minLength 1
         * @maxLength 500
         */
        semanticQuery?: string;
        /**
         * The semantic ranking weight between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        semanticWeight?: number;
        /**
         * The CompanyEnrich list identifiers used to filter results.
         * @minItems 1
         */
        lists?: Array<string>;
        /**
         * The company types to include.
         * @minItems 1
         */
        type?: Array<"private" | "public" | "self-employed" | "self-owned" | "partnership" | "nonprofit" | "educational" | "government">;
        /**
         * The company categories to include.
         * @minItems 1
         */
        category?: Array<"b2b" | "b2c" | "b2g" | "e-commerce" | "media" | "service-provider" | "mobile" | "saas">;
        /**
         * The employee-count ranges to include.
         * @minItems 1
         */
        employees?: Array<"1-10" | "11-50" | "51-200" | "201-500" | "501-1K" | "1K-5K" | "5K-10K" | "over-10K">;
        /**
         * The revenue ranges to include.
         * @minItems 1
         */
        revenue?: Array<"under-1m" | "1m-10m" | "10m-50m" | "50m-100m" | "100m-200m" | "200m-1b" | "over-1b">;
        /**
         * The funding rounds to include.
         * @minItems 1
         */
        fundingRounds?: Array<"seed" | "debt_financing" | "angel" | "venture" | "series_a" | "series_b" | "series_c" | "series_d" | "series_e" | "series_f" | "series_g" | "series_h" | "other">;
        /**
         * The CompanyEnrich feature requirements that must exist.
         * @minItems 1
         */
        require?: Array<"linkedin" | "twitter" | "facebook" | "instagram" | "angellist" | "crunchbase" | "youtube" | "country" | "city" | "state" | "revenue" | "foundedYear" | "anyFunding">;
        /**
         * The region identifiers to include.
         * @minItems 1
         */
        regions?: Array<string>;
        /**
         * The country codes to include.
         * @minItems 1
         */
        countries?: Array<string>;
        /**
         * The state identifiers to include.
         * @minItems 1
         */
        states?: Array<number>;
        /**
         * The city identifiers to include.
         * @minItems 1
         */
        cities?: Array<number>;
        /**
         * The NAICS codes to include.
         * @minItems 1
         */
        naicsCode?: Array<number>;
        /**
         * The company keywords to include.
         * @minItems 1
         */
        keywords?: Array<string>;
        /**
         * The technologies to include.
         * @minItems 1
         */
        technologies?: Array<string>;
        /**
         * The official operator applied to category filters.
         * @minLength 1
         */
        categoryOperator?: string;
        /**
         * The official operator applied to keyword filters.
         * @minLength 1
         */
        keywordsOperator?: string;
        /**
         * The official operator applied to technology filters.
         * @minLength 1
         */
        technologiesOperator?: string;
        /** The official CompanyEnrich exclusion filters object. */
        exclude?: Record<string, unknown>;
        /** The official founded-year range object. */
        foundedYear?: Record<string, unknown>;
        /** The official funding-amount range object. */
        fundingAmount?: Record<string, unknown>;
        /** The official funding-year range object. */
        fundingYear?: Record<string, unknown>;
        /** The official workforce-growth filter object. */
        workforceGrowth?: Record<string, unknown>;
        /**
         * The official workforce-size filters.
         * @minItems 1
         */
        workforceSize?: Array<Record<string, unknown>>;
      };
      output: {
        /** The number of matching companies. */
        count: number;
      };
    };
    /** Enrich a company profile from its primary domain. */
    "companyenrich.enrich_company_by_domain": {
      input: {
        /**
         * The company domain to enrich.
         * @minLength 1
         */
        domain: string;
        /**
         * The expandable company fields to request.
         * @minItems 1
         */
        expand?: Array<"workforce">;
      };
      output: {
        /** The enriched company profile. */
        company: {
          /**
           * The unique CompanyEnrich company identifier.
           * @minLength 1
           */
          id: string;
          /** The company display name. */
          name?: string;
          /** The primary company domain. */
          domain?: string;
          /** The website URL returned by CompanyEnrich. */
          website?: string;
          /** The company type filter value. */
          type?: "private" | "public" | "self-employed" | "self-owned" | "partnership" | "nonprofit" | "educational" | "government";
          /** The primary company industry label. */
          industry?: string;
          /** The industries associated with the company. */
          industries?: Array<string>;
          /** The ordered company categories returned by CompanyEnrich. */
          categories?: Array<"b2b" | "b2c" | "b2g" | "e-commerce" | "media" | "service-provider" | "mobile" | "saas">;
          /** The company employee-count range filter value. */
          employees?: "1-10" | "11-50" | "51-200" | "201-500" | "501-1K" | "1K-5K" | "5K-10K" | "over-10K";
          /** The company revenue range filter value. */
          revenue?: "under-1m" | "1m-10m" | "10m-50m" | "50m-100m" | "100m-200m" | "200m-1b" | "over-1b";
          /** The company description. */
          description?: string;
          /** The search keywords associated with the company. */
          keywords?: Array<string>;
          /** The technology names associated with the company. */
          technologies?: Array<string>;
          /** The subsidiary company names returned by CompanyEnrich. */
          subsidiaries?: Array<string>;
          /** The year when the company was founded. */
          founded_year?: number;
          /** The NAICS codes associated with the company. */
          naics_codes?: Array<string>;
          /** The official CompanyEnrich nested object for this filter or response branch. */
          location?: Record<string, unknown>;
          /** The official CompanyEnrich nested object for this filter or response branch. */
          financial?: Record<string, unknown>;
          /** The official CompanyEnrich nested object for this filter or response branch. */
          socials?: Record<string, unknown>;
          /** The CompanyEnrich page-rank score. */
          page_rank?: number;
          /** The official CompanyEnrich nested object for this filter or response branch. */
          workforce?: Record<string, unknown>;
          /** The logo URL returned by CompanyEnrich. */
          logo_url?: string;
          /** The SEO description returned by CompanyEnrich. */
          seo_description?: string;
          /** The last-update timestamp returned by CompanyEnrich. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Enrich a company profile from identifying company properties. */
    "companyenrich.enrich_company_by_properties": {
      input: {
        /**
         * The company name used for enrichment.
         * @minLength 1
         */
        name?: string;
        /**
         * The LinkedIn company URL used for enrichment.
         * @minLength 1
         */
        linkedinUrl?: string;
        /**
         * The LinkedIn company identifier used for enrichment.
         * @minLength 1
         */
        linkedinId?: string;
        /**
         * The Twitter profile URL used for enrichment.
         * @minLength 1
         */
        twitterUrl?: string;
        /**
         * The Facebook profile URL used for enrichment.
         * @minLength 1
         */
        facebookUrl?: string;
        /**
         * The Instagram profile URL used for enrichment.
         * @minLength 1
         */
        instagramUrl?: string;
        /**
         * The YouTube profile URL used for enrichment.
         * @minLength 1
         */
        youTubeUrl?: string;
        /**
         * The expandable company fields to request.
         * @minItems 1
         */
        expand?: Array<"workforce">;
      };
      output: {
        /** The enriched company profile. */
        company: {
          /**
           * The unique CompanyEnrich company identifier.
           * @minLength 1
           */
          id: string;
          /** The company display name. */
          name?: string;
          /** The primary company domain. */
          domain?: string;
          /** The website URL returned by CompanyEnrich. */
          website?: string;
          /** The company type filter value. */
          type?: "private" | "public" | "self-employed" | "self-owned" | "partnership" | "nonprofit" | "educational" | "government";
          /** The primary company industry label. */
          industry?: string;
          /** The industries associated with the company. */
          industries?: Array<string>;
          /** The ordered company categories returned by CompanyEnrich. */
          categories?: Array<"b2b" | "b2c" | "b2g" | "e-commerce" | "media" | "service-provider" | "mobile" | "saas">;
          /** The company employee-count range filter value. */
          employees?: "1-10" | "11-50" | "51-200" | "201-500" | "501-1K" | "1K-5K" | "5K-10K" | "over-10K";
          /** The company revenue range filter value. */
          revenue?: "under-1m" | "1m-10m" | "10m-50m" | "50m-100m" | "100m-200m" | "200m-1b" | "over-1b";
          /** The company description. */
          description?: string;
          /** The search keywords associated with the company. */
          keywords?: Array<string>;
          /** The technology names associated with the company. */
          technologies?: Array<string>;
          /** The subsidiary company names returned by CompanyEnrich. */
          subsidiaries?: Array<string>;
          /** The year when the company was founded. */
          founded_year?: number;
          /** The NAICS codes associated with the company. */
          naics_codes?: Array<string>;
          /** The official CompanyEnrich nested object for this filter or response branch. */
          location?: Record<string, unknown>;
          /** The official CompanyEnrich nested object for this filter or response branch. */
          financial?: Record<string, unknown>;
          /** The official CompanyEnrich nested object for this filter or response branch. */
          socials?: Record<string, unknown>;
          /** The CompanyEnrich page-rank score. */
          page_rank?: number;
          /** The official CompanyEnrich nested object for this filter or response branch. */
          workforce?: Record<string, unknown>;
          /** The logo URL returned by CompanyEnrich. */
          logo_url?: string;
          /** The SEO description returned by CompanyEnrich. */
          seo_description?: string;
          /** The last-update timestamp returned by CompanyEnrich. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Find companies similar to one or more seed company domains. */
    "companyenrich.find_similar_companies": {
      input: {
        /**
         * The seed company domains used to find similar companies.
         * @minItems 1
         * @maxItems 10
         */
        domains: Array<string>;
        /**
         * The 1-indexed result page to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of similar companies to request per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The similarity weighting factor between -1 and 1.
         * @minimum -1
         * @maximum 1
         */
        similarityWeight?: number;
        /**
         * The expandable company fields to request.
         * @minItems 1
         */
        expand?: Array<"workforce">;
        /**
         * The search query applied to company names and domains.
         * @minLength 1
         * @maxLength 250
         */
        query?: string;
        /**
         * The semantic search query applied by CompanyEnrich.
         * @minLength 1
         * @maxLength 500
         */
        semanticQuery?: string;
        /**
         * The semantic ranking weight between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        semanticWeight?: number;
        /**
         * The CompanyEnrich list identifiers used to filter results.
         * @minItems 1
         */
        lists?: Array<string>;
        /**
         * The company types to include.
         * @minItems 1
         */
        type?: Array<"private" | "public" | "self-employed" | "self-owned" | "partnership" | "nonprofit" | "educational" | "government">;
        /**
         * The company categories to include.
         * @minItems 1
         */
        category?: Array<"b2b" | "b2c" | "b2g" | "e-commerce" | "media" | "service-provider" | "mobile" | "saas">;
        /**
         * The employee-count ranges to include.
         * @minItems 1
         */
        employees?: Array<"1-10" | "11-50" | "51-200" | "201-500" | "501-1K" | "1K-5K" | "5K-10K" | "over-10K">;
        /**
         * The revenue ranges to include.
         * @minItems 1
         */
        revenue?: Array<"under-1m" | "1m-10m" | "10m-50m" | "50m-100m" | "100m-200m" | "200m-1b" | "over-1b">;
        /**
         * The funding rounds to include.
         * @minItems 1
         */
        fundingRounds?: Array<"seed" | "debt_financing" | "angel" | "venture" | "series_a" | "series_b" | "series_c" | "series_d" | "series_e" | "series_f" | "series_g" | "series_h" | "other">;
        /**
         * The CompanyEnrich feature requirements that must exist.
         * @minItems 1
         */
        require?: Array<"linkedin" | "twitter" | "facebook" | "instagram" | "angellist" | "crunchbase" | "youtube" | "country" | "city" | "state" | "revenue" | "foundedYear" | "anyFunding">;
        /**
         * The region identifiers to include.
         * @minItems 1
         */
        regions?: Array<string>;
        /**
         * The country codes to include.
         * @minItems 1
         */
        countries?: Array<string>;
        /**
         * The state identifiers to include.
         * @minItems 1
         */
        states?: Array<number>;
        /**
         * The city identifiers to include.
         * @minItems 1
         */
        cities?: Array<number>;
        /**
         * The NAICS codes to include.
         * @minItems 1
         */
        naicsCode?: Array<number>;
        /**
         * The company keywords to include.
         * @minItems 1
         */
        keywords?: Array<string>;
        /**
         * The technologies to include.
         * @minItems 1
         */
        technologies?: Array<string>;
        /**
         * The official operator applied to category filters.
         * @minLength 1
         */
        categoryOperator?: string;
        /**
         * The official operator applied to keyword filters.
         * @minLength 1
         */
        keywordsOperator?: string;
        /**
         * The official operator applied to technology filters.
         * @minLength 1
         */
        technologiesOperator?: string;
        /** The official CompanyEnrich exclusion filters object. */
        exclude?: Record<string, unknown>;
        /** The official founded-year range object. */
        foundedYear?: Record<string, unknown>;
        /** The official funding-amount range object. */
        fundingAmount?: Record<string, unknown>;
        /** The official funding-year range object. */
        fundingYear?: Record<string, unknown>;
        /** The official workforce-growth filter object. */
        workforceGrowth?: Record<string, unknown>;
        /**
         * The official workforce-size filters.
         * @minItems 1
         */
        workforceSize?: Array<Record<string, unknown>>;
      };
      output: {
        /** The similar companies returned by CompanyEnrich. */
        companies: Array<{
          /**
           * The unique CompanyEnrich company identifier.
           * @minLength 1
           */
          id: string;
          /** The company display name. */
          name?: string;
          /** The primary company domain. */
          domain?: string;
          /** The website URL returned by CompanyEnrich. */
          website?: string;
          /** The company type filter value. */
          type?: "private" | "public" | "self-employed" | "self-owned" | "partnership" | "nonprofit" | "educational" | "government";
          /** The primary company industry label. */
          industry?: string;
          /** The industries associated with the company. */
          industries?: Array<string>;
          /** The ordered company categories returned by CompanyEnrich. */
          categories?: Array<"b2b" | "b2c" | "b2g" | "e-commerce" | "media" | "service-provider" | "mobile" | "saas">;
          /** The company employee-count range filter value. */
          employees?: "1-10" | "11-50" | "51-200" | "201-500" | "501-1K" | "1K-5K" | "5K-10K" | "over-10K";
          /** The company revenue range filter value. */
          revenue?: "under-1m" | "1m-10m" | "10m-50m" | "50m-100m" | "100m-200m" | "200m-1b" | "over-1b";
          /** The company description. */
          description?: string;
          /** The search keywords associated with the company. */
          keywords?: Array<string>;
          /** The technology names associated with the company. */
          technologies?: Array<string>;
          /** The subsidiary company names returned by CompanyEnrich. */
          subsidiaries?: Array<string>;
          /** The year when the company was founded. */
          founded_year?: number;
          /** The NAICS codes associated with the company. */
          naics_codes?: Array<string>;
          /** The official CompanyEnrich nested object for this filter or response branch. */
          location?: Record<string, unknown>;
          /** The official CompanyEnrich nested object for this filter or response branch. */
          financial?: Record<string, unknown>;
          /** The official CompanyEnrich nested object for this filter or response branch. */
          socials?: Record<string, unknown>;
          /** The CompanyEnrich page-rank score. */
          page_rank?: number;
          /** The official CompanyEnrich nested object for this filter or response branch. */
          workforce?: Record<string, unknown>;
          /** The logo URL returned by CompanyEnrich. */
          logo_url?: string;
          /** The SEO description returned by CompanyEnrich. */
          seo_description?: string;
          /** The last-update timestamp returned by CompanyEnrich. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** The similarity metadata returned by CompanyEnrich. */
        metadata: {
          /** The similarity score keyed by CompanyEnrich company identifier. */
          scores: Record<string, number>;
        } | null;
        /** The pagination summary for the similarity search. */
        pagination: {
          /** The current 1-indexed page returned by CompanyEnrich. */
          page: number;
          /** The total number of pages returned by CompanyEnrich. */
          totalPages: number;
          /** The total number of matching companies returned by CompanyEnrich. */
          totalItems: number;
        };
      };
    };
    /** Get the authenticated CompanyEnrich user summary and remaining capabilities. */
    "companyenrich.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The authenticated CompanyEnrich user. */
        user: {
          /**
           * The CompanyEnrich user identifier.
           * @minLength 1
           */
          userId: string;
          /** The CompanyEnrich credit summary. */
          credits: {
            /** The total credit allotment for the authenticated account. */
            total: number;
            /** The number of credits already used by the account. */
            used: number;
          };
          /** The CompanyEnrich account capability summary. */
          capabilities: {
            /** Whether company-list features are enabled for the account. */
            lists: boolean;
            /** Whether preview endpoints are enabled for the account. */
            previews: boolean;
            /** The maximum number of companies allowed in synchronous company searches. */
            companySearchLimit: number;
            /** The maximum number of companies allowed in async company searches. */
            companySearchAsyncLimit: number;
            /** The maximum number of people allowed in people-search workflows. */
            peopleSearchLimit: number;
            /** The maximum number of search terms accepted by the account. */
            searchTermLimit: number;
          };
        };
      };
    };
    /** Search CompanyEnrich companies with page-based filters and pagination. */
    "companyenrich.search_companies": {
      input: {
        /**
         * The 1-indexed result page to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to request per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The expandable response fields to request for each company.
         * @minItems 1
         */
        expand?: Array<"workforce">;
        /**
         * The search query applied to company names and domains.
         * @minLength 1
         * @maxLength 250
         */
        query?: string;
        /**
         * The semantic search query applied by CompanyEnrich.
         * @minLength 1
         * @maxLength 500
         */
        semanticQuery?: string;
        /**
         * The semantic ranking weight between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        semanticWeight?: number;
        /**
         * The CompanyEnrich list identifiers used to filter results.
         * @minItems 1
         */
        lists?: Array<string>;
        /**
         * The company types to include.
         * @minItems 1
         */
        type?: Array<"private" | "public" | "self-employed" | "self-owned" | "partnership" | "nonprofit" | "educational" | "government">;
        /**
         * The company categories to include.
         * @minItems 1
         */
        category?: Array<"b2b" | "b2c" | "b2g" | "e-commerce" | "media" | "service-provider" | "mobile" | "saas">;
        /**
         * The employee-count ranges to include.
         * @minItems 1
         */
        employees?: Array<"1-10" | "11-50" | "51-200" | "201-500" | "501-1K" | "1K-5K" | "5K-10K" | "over-10K">;
        /**
         * The revenue ranges to include.
         * @minItems 1
         */
        revenue?: Array<"under-1m" | "1m-10m" | "10m-50m" | "50m-100m" | "100m-200m" | "200m-1b" | "over-1b">;
        /**
         * The funding rounds to include.
         * @minItems 1
         */
        fundingRounds?: Array<"seed" | "debt_financing" | "angel" | "venture" | "series_a" | "series_b" | "series_c" | "series_d" | "series_e" | "series_f" | "series_g" | "series_h" | "other">;
        /**
         * The CompanyEnrich feature requirements that must exist.
         * @minItems 1
         */
        require?: Array<"linkedin" | "twitter" | "facebook" | "instagram" | "angellist" | "crunchbase" | "youtube" | "country" | "city" | "state" | "revenue" | "foundedYear" | "anyFunding">;
        /**
         * The region identifiers to include.
         * @minItems 1
         */
        regions?: Array<string>;
        /**
         * The country codes to include.
         * @minItems 1
         */
        countries?: Array<string>;
        /**
         * The state identifiers to include.
         * @minItems 1
         */
        states?: Array<number>;
        /**
         * The city identifiers to include.
         * @minItems 1
         */
        cities?: Array<number>;
        /**
         * The NAICS codes to include.
         * @minItems 1
         */
        naicsCode?: Array<number>;
        /**
         * The company keywords to include.
         * @minItems 1
         */
        keywords?: Array<string>;
        /**
         * The technologies to include.
         * @minItems 1
         */
        technologies?: Array<string>;
        /**
         * The official operator applied to category filters.
         * @minLength 1
         */
        categoryOperator?: string;
        /**
         * The official operator applied to keyword filters.
         * @minLength 1
         */
        keywordsOperator?: string;
        /**
         * The official operator applied to technology filters.
         * @minLength 1
         */
        technologiesOperator?: string;
        /** The official CompanyEnrich exclusion filters object. */
        exclude?: Record<string, unknown>;
        /** The official founded-year range object. */
        foundedYear?: Record<string, unknown>;
        /** The official funding-amount range object. */
        fundingAmount?: Record<string, unknown>;
        /** The official funding-year range object. */
        fundingYear?: Record<string, unknown>;
        /** The official workforce-growth filter object. */
        workforceGrowth?: Record<string, unknown>;
        /**
         * The official workforce-size filters.
         * @minItems 1
         */
        workforceSize?: Array<Record<string, unknown>>;
      };
      output: {
        /** The companies returned by the search. */
        companies: Array<{
          /**
           * The unique CompanyEnrich company identifier.
           * @minLength 1
           */
          id: string;
          /** The company display name. */
          name?: string;
          /** The primary company domain. */
          domain?: string;
          /** The website URL returned by CompanyEnrich. */
          website?: string;
          /** The company type filter value. */
          type?: "private" | "public" | "self-employed" | "self-owned" | "partnership" | "nonprofit" | "educational" | "government";
          /** The primary company industry label. */
          industry?: string;
          /** The industries associated with the company. */
          industries?: Array<string>;
          /** The ordered company categories returned by CompanyEnrich. */
          categories?: Array<"b2b" | "b2c" | "b2g" | "e-commerce" | "media" | "service-provider" | "mobile" | "saas">;
          /** The company employee-count range filter value. */
          employees?: "1-10" | "11-50" | "51-200" | "201-500" | "501-1K" | "1K-5K" | "5K-10K" | "over-10K";
          /** The company revenue range filter value. */
          revenue?: "under-1m" | "1m-10m" | "10m-50m" | "50m-100m" | "100m-200m" | "200m-1b" | "over-1b";
          /** The company description. */
          description?: string;
          /** The search keywords associated with the company. */
          keywords?: Array<string>;
          /** The technology names associated with the company. */
          technologies?: Array<string>;
          /** The subsidiary company names returned by CompanyEnrich. */
          subsidiaries?: Array<string>;
          /** The year when the company was founded. */
          founded_year?: number;
          /** The NAICS codes associated with the company. */
          naics_codes?: Array<string>;
          /** The official CompanyEnrich nested object for this filter or response branch. */
          location?: Record<string, unknown>;
          /** The official CompanyEnrich nested object for this filter or response branch. */
          financial?: Record<string, unknown>;
          /** The official CompanyEnrich nested object for this filter or response branch. */
          socials?: Record<string, unknown>;
          /** The CompanyEnrich page-rank score. */
          page_rank?: number;
          /** The official CompanyEnrich nested object for this filter or response branch. */
          workforce?: Record<string, unknown>;
          /** The logo URL returned by CompanyEnrich. */
          logo_url?: string;
          /** The SEO description returned by CompanyEnrich. */
          seo_description?: string;
          /** The last-update timestamp returned by CompanyEnrich. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** The pagination summary for the company search. */
        pagination: {
          /** The current 1-indexed page returned by CompanyEnrich. */
          page: number;
          /** The total number of pages returned by CompanyEnrich. */
          totalPages: number;
          /** The total number of matching companies returned by CompanyEnrich. */
          totalItems: number;
        };
      };
    };
  }
}
