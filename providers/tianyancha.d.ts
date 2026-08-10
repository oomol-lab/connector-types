import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Find the shortest ownership, employment, legal, business, or historical relationship paths between two companies. */
    "tianyancha.find_company_relationship_paths": {
      input: {
        /**
         * The exact source company name.
         * @minLength 1
         * @pattern \S
         */
        sourceCompanyName?: string;
        /**
         * The Tianyancha source company ID.
         * @exclusiveMinimum 0
         */
        sourceCompanyId?: number;
        /**
         * The exact target company name.
         * @minLength 1
         * @pattern \S
         */
        targetCompanyName?: string;
        /**
         * The Tianyancha target company ID.
         * @exclusiveMinimum 0
         */
        targetCompanyId?: number;
        /**
         * The relationship categories to search. Omit this field to use Tianyancha's default categories.
         * @minItems 1
         */
        relationshipTypes?: Array<"legal_representative" | "employment" | "investment" | "branch" | "legal" | "pledge_and_mortgage" | "business_cooperation" | "shared_contact" | "historical_shareholder" | "historical_employment" | "historical_legal_representative" | "all">;
        /**
         * The maximum relationship search depth. Defaults to 2.
         * @minimum 1
         * @maximum 10
         */
        maxDepth?: number;
      };
      output: {
        /** Whether Tianyancha found at least one relationship path. */
        hasRelationship: boolean;
        /** The shortest relationship paths returned by Tianyancha. */
        paths: Array<Record<string, unknown>>;
      };
    };
    /** Get a company's suspected actual controllers, ownership ratios, and control paths from Tianyancha. */
    "tianyancha.get_company_actual_control": {
      input: {
        /**
         * A company name, Tianyancha company ID, registration number, or unified social credit code.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
      };
      output: {
        /** The suspected actual controllers returned by Tianyancha. */
        controllers: Array<Record<string, unknown>>;
        /** The provider-defined ownership paths keyed by Tianyancha path ID. */
        paths: Record<string, unknown>;
      };
    };
    /** Get a company's annual reports, including disclosed financial, shareholder, investment, and social security information. */
    "tianyancha.get_company_annual_reports": {
      input: {
        /**
         * A company name, Tianyancha company ID, registration number, or unified social credit code.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
        /**
         * The report year to retrieve. Omit it to retrieve every available year.
         * @minLength 1
         * @pattern \S
         */
        year?: string;
      };
      output: {
        /** The annual report records returned by Tianyancha. */
        annualReports: Array<Record<string, unknown>>;
        /**
         * The total number of annual reports returned by Tianyancha.
         * @minimum 0
         */
        total: number;
      };
    };
    /** Get Tianyancha company registration details by company identifier. */
    "tianyancha.get_company_basic_info": {
      input: {
        /**
         * A company name, Tianyancha company ID, registration number, or unified social credit code.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
      };
      output: {
        /** A record returned by Tianyancha. Available fields depend on the purchased API. */
        company: Record<string, unknown> | null;
      };
    };
    /** Get a company's phone numbers, email addresses, websites, and registered address. */
    "tianyancha.get_company_contact_info": {
      input: {
        /**
         * A company name, Tianyancha company ID, registration number, or unified social credit code.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
      };
      output: {
        /** A payload returned by Tianyancha. Available fields depend on the purchased API. */
        contact: Record<string, unknown> | null;
      };
    };
    /** Get a company's core team, products, financing history, investment events, competitors, and investment institutions. */
    "tianyancha.get_company_development_info": {
      input: {
        /**
         * A company name, Tianyancha company ID, registration number, or unified social credit code.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
      };
      output: {
        /** A payload returned by Tianyancha. Available fields depend on the purchased API. */
        development: Record<string, unknown> | null;
      };
    };
    /** Get a company's trademarks, patents, software copyrights, works copyrights, and ICP registrations. */
    "tianyancha.get_company_intellectual_property": {
      input: {
        /**
         * A company name, Tianyancha company ID, registration number, or unified social credit code.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
      };
      output: {
        /** A payload returned by Tianyancha. Available fields depend on the purchased API. */
        intellectualProperty: Record<string, unknown> | null;
      };
    };
    /** Get a company's combined legal cases, hearings, court notices, enforcement, dishonesty, filing, and service-announcement data. */
    "tianyancha.get_company_judicial_risk": {
      input: {
        /**
         * A company name, Tianyancha company ID, registration number, or unified social credit code.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
      };
      output: {
        /** A payload returned by Tianyancha. Available fields depend on the purchased API. */
        judicialRisk: Record<string, unknown> | null;
      };
    };
    /** Get a company's Tianyancha risk summary, including own, related, historical, and alert risks. */
    "tianyancha.get_company_risk": {
      input: {
        /**
         * A company name, Tianyancha company ID, registration number, or unified social credit code.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
      };
      output: {
        /** The overall risk level returned by Tianyancha. */
        riskLevel: string | null;
        /** Risk groups returned by Tianyancha. */
        risks: Array<Record<string, unknown>>;
      };
    };
    /** Get one page of detailed Tianyancha risk records using a risk ID and type from get_company_risk. */
    "tianyancha.get_company_risk_detail": {
      input: {
        /**
         * The risk ID returned by get_company_risk.
         * @exclusiveMinimum 0
         */
        riskId: number;
        /**
         * The Tianyancha risk type code returned by get_company_risk.
         * @exclusiveMinimum 0
         */
        riskType: number;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of records per page. Defaults to 20 and cannot exceed 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
      };
      output: {
        /**
         * The Tianyancha risk type code.
         * @exclusiveMinimum 0
         */
        riskType: number;
        /** The detailed risk records returned by Tianyancha. */
        records: Array<Record<string, unknown>>;
        /**
         * The total number of detailed risk records.
         * @minimum 0
         */
        total: number;
        /**
         * The returned one-based page number.
         * @exclusiveMinimum 0
         */
        pageNum: number;
        /**
         * The requested number of records per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
      };
    };
    /** List a company's branch organizations and their registration details. */
    "tianyancha.list_company_branches": {
      input: {
        /**
         * A company name, Tianyancha company ID, registration number, or unified social credit code.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of records per page. Defaults to 20 and cannot exceed 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
      };
      output: {
        /** The company branch records returned by Tianyancha. */
        branches: Array<Record<string, unknown>>;
        /**
         * The total number of matching records reported by Tianyancha.
         * @minimum 0
         */
        total: number;
        /**
         * The requested one-based page number.
         * @exclusiveMinimum 0
         */
        pageNum: number;
        /**
         * The requested number of records per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
      };
    };
    /** List a company's registration changes, including before and after values. */
    "tianyancha.list_company_changes": {
      input: {
        /**
         * A company name, Tianyancha company ID, registration number, or unified social credit code.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of records per page. Defaults to 20 and cannot exceed 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
      };
      output: {
        /** The company registration change records returned by Tianyancha. */
        changes: Array<Record<string, unknown>>;
        /**
         * The total number of matching records reported by Tianyancha.
         * @minimum 0
         */
        total: number;
        /**
         * The requested one-based page number.
         * @exclusiveMinimum 0
         */
        pageNum: number;
        /**
         * The requested number of records per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
      };
    };
    /** List companies directly invested in by a company using Tianyancha. */
    "tianyancha.list_company_investments": {
      input: {
        /**
         * A company name, Tianyancha company ID, registration number, or unified social credit code.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of records per page. Defaults to 20 and cannot exceed 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
      };
      output: {
        /** The directly invested company records returned by Tianyancha. */
        investments: Array<Record<string, unknown>>;
        /**
         * The total number of matching records reported by Tianyancha.
         * @minimum 0
         */
        total: number;
        /**
         * The requested one-based page number.
         * @exclusiveMinimum 0
         */
        pageNum: number;
        /**
         * The requested number of records per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
      };
    };
    /** List a company's directors, supervisors, and senior managers from Tianyancha. */
    "tianyancha.list_company_key_personnel": {
      input: {
        /**
         * A company name, Tianyancha company ID, registration number, or unified social credit code.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of records per page. Defaults to 20 and cannot exceed 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
      };
      output: {
        /** The directors, supervisors, and senior managers returned by Tianyancha. */
        personnel: Array<Record<string, unknown>>;
        /**
         * The total number of matching records reported by Tianyancha.
         * @minimum 0
         */
        total: number;
        /**
         * The requested one-based page number.
         * @exclusiveMinimum 0
         */
        pageNum: number;
        /**
         * The requested number of records per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
      };
    };
    /** List Tianyancha news for an exact company, optionally filtered by publication date and tags. */
    "tianyancha.list_company_news": {
      input: {
        /**
         * The exact company name.
         * @minLength 1
         * @pattern \S
         */
        companyName?: string;
        /**
         * The Tianyancha company ID.
         * @exclusiveMinimum 0
         */
        companyId?: number;
        /**
         * The earliest publication date to include, in YYYY-MM-DD format.
         * @format date
         */
        startDate?: string;
        /**
         * The latest publication date to include, in YYYY-MM-DD format.
         * @format date
         */
        endDate?: string;
        /**
         * The Tianyancha news tags to include.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of records per page. Defaults to 20 and cannot exceed 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
      };
      output: {
        /** The company news records returned by Tianyancha. */
        news: Array<Record<string, unknown>>;
        /**
         * The total number of matching records reported by Tianyancha.
         * @minimum 0
         */
        total: number;
        /**
         * The requested one-based page number.
         * @exclusiveMinimum 0
         */
        pageNum: number;
        /**
         * The requested number of records per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
      };
    };
    /** List a company's shareholders and contribution details from Tianyancha. */
    "tianyancha.list_company_shareholders": {
      input: {
        /**
         * A company name, Tianyancha company ID, registration number, or unified social credit code.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of records per page. Defaults to 20 and cannot exceed 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
        /**
         * The shareholder data source: 1 for business registration or 2 for the latest public filing. Defaults to 1.
         * @minimum 1
         * @maximum 2
         */
        source?: number;
      };
      output: {
        /** The shareholder and contribution records returned by Tianyancha. */
        shareholders: Array<Record<string, unknown>>;
        /**
         * The total number of matching records reported by Tianyancha.
         * @minimum 0
         */
        total: number;
        /**
         * The requested one-based page number.
         * @exclusiveMinimum 0
         */
        pageNum: number;
        /**
         * The requested number of records per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
      };
    };
    /** List a company's ultimate beneficiaries, ownership percentages, and ownership chains from Tianyancha. */
    "tianyancha.list_company_ultimate_beneficiaries": {
      input: {
        /**
         * A company name, Tianyancha company ID, registration number, or unified social credit code.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of records per page. Defaults to 20 and cannot exceed 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
      };
      output: {
        /** The ultimate beneficiary records and ownership chains returned by Tianyancha. */
        beneficiaries: Array<Record<string, unknown>>;
        /**
         * The total number of matching records reported by Tianyancha.
         * @minimum 0
         */
        total: number;
        /**
         * The requested one-based page number.
         * @exclusiveMinimum 0
         */
        pageNum: number;
        /**
         * The requested number of records per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
      };
    };
    /** Search Tianyancha for companies by keyword and return matching company records. */
    "tianyancha.search_companies": {
      input: {
        /**
         * The company search keyword.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of records per page. Defaults to 20 and cannot exceed 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
      };
      output: {
        /** The company records matching the search keyword. */
        companies: Array<Record<string, unknown>>;
        /**
         * The total number of matching records reported by Tianyancha.
         * @minimum 0
         */
        total: number;
        /**
         * The requested one-based page number.
         * @exclusiveMinimum 0
         */
        pageNum: number;
        /**
         * The requested number of records per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
      };
    };
    /** Search Tianyancha for companies by keyword, industry, and region. */
    "tianyancha.search_companies_advanced": {
      input: {
        /**
         * The company search keyword.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
        /**
         * The GB/T 4754-2017 industry code used to filter companies.
         * @minLength 1
         * @pattern \S
         */
        industryCode?: string;
        /**
         * The Tianyancha administrative area code used to filter companies.
         * @minLength 1
         * @pattern \S
         */
        areaCode?: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of records per page. Defaults to 20 and cannot exceed 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
      };
      output: {
        /** The companies matching the search filters. */
        companies: Array<Record<string, unknown>>;
        /**
         * The total number of matching records reported by Tianyancha.
         * @minimum 0
         */
        total: number;
        /**
         * The requested one-based page number.
         * @exclusiveMinimum 0
         */
        pageNum: number;
        /**
         * The requested number of records per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
      };
    };
    /** Search Tianyancha tender and bid notices by keyword, participant role, notice type, province, and publication date. */
    "tianyancha.search_tenders": {
      input: {
        /**
         * A keyword matched against titles, purchasers, or suppliers.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
        /**
         * The fields to search. Omit this field to use Tianyancha's default.
         * @minItems 1
         */
        searchTypes?: Array<"title" | "purchaser" | "supplier">;
        /** The tender notice type to include. */
        noticeType?: "forecast" | "announcement" | "result";
        /**
         * The province used to filter results.
         * @minLength 1
         * @pattern \S
         */
        province?: string;
        /**
         * The earliest publication date to include, in YYYY-MM-DD format.
         * @format date
         */
        publishStartDate?: string;
        /**
         * The latest publication date to include, in YYYY-MM-DD format.
         * @format date
         */
        publishEndDate?: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * The number of records per page. Defaults to 20 and cannot exceed 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
      };
      output: {
        /** The tender and bid notices matching the search filters. */
        tenders: Array<Record<string, unknown>>;
        /**
         * The total number of matching records reported by Tianyancha.
         * @minimum 0
         */
        total: number;
        /**
         * The requested one-based page number.
         * @exclusiveMinimum 0
         */
        pageNum: number;
        /**
         * The requested number of records per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
      };
    };
    /** Verify that a company name, legal representative, and registration code identify the same company. */
    "tianyancha.verify_company_identity": {
      input: {
        /**
         * The exact company name to verify.
         * @minLength 1
         * @pattern \S
         */
        companyName: string;
        /**
         * The legal representative name to verify.
         * @minLength 1
         * @pattern \S
         */
        legalPersonName: string;
        /**
         * The unified social credit code, registration number, or organization code to verify.
         * @minLength 1
         * @pattern \S
         */
        registrationCode: string;
      };
      output: {
        /**
         * The match status: 0 for no match, 1 for a full match, or 2 when the company name may be a former name and the other fields match.
         * @minimum 0
         * @maximum 2
         */
        matchStatus: number | null;
        /** The verification explanation returned by Tianyancha. */
        remark: string | null;
      };
    };
  }
}
