import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Turn a plain-language request, such as 湖北近30天物业服务中标结果，金额500万以上, into search_projects filters with keywords, dates, notice class, procurement type, amount range, and region and industry codes. Waits up to about 25 seconds; if status is not completed, call again with the same userQuery to keep polling. A failed rewrite is returned as an error. */
    "baobiao.build_search_query": {
      input: {
        /**
         * The search request in natural language, usually Chinese.
         * @minLength 1
         * @pattern \S
         */
        userQuery: string;
      };
      output: {
        /** Request identifier. */
        requestKey?: string;
        /** Progress: processing, search_rewrite_done, area_code_done, industry_done, or completed. */
        status?: "processing" | "search_rewrite_done" | "area_code_done" | "industry_done" | "completed";
        /** Filters to pass to search_projects. */
        searchCondition?: {
          /** Start date. */
          startDate?: string | null;
          /** End date. */
          endDate?: string | null;
          /** Keywords separated by |. */
          keyword?: string | null;
          /** Company name. */
          companyName?: string | null;
          /** Inferred company industry. */
          enterpriseIndustry?: string | null;
          /** Subjects or subject matter. */
          subjects?: Array<string> | null;
          /** Notice class IDs. */
          projectClassID?: string | null;
          /** Procurement type IDs. */
          purchaseTypeID?: string | null;
          /** Minimum amount in yuan. */
          projectMoneyMin?: number | null;
          /** Maximum amount in yuan. */
          projectMoneyMax?: number | null;
          /** Whether the project is split into lots. */
          subcontractFlag?: boolean | null;
          /** Region codes. */
          areaCode?: {
            /** Province-level division codes. */
            proviceCodeList?: Array<string>;
            /** City-level division codes. */
            cityCodeList?: Array<string>;
            /** County-level division codes. */
            countyCodeList?: Array<string>;
            [key: string]: unknown;
          } | null;
          /** Industry codes. */
          industryCode?: Record<string, unknown> | null;
          [key: string]: unknown;
        } | null;
        /** Region codes. */
        areaCode?: {
          /** Province-level division codes. */
          proviceCodeList?: Array<string>;
          /** City-level division codes. */
          cityCodeList?: Array<string>;
          /** County-level division codes. */
          countyCodeList?: Array<string>;
          [key: string]: unknown;
        } | null;
        /** Industry candidates. */
        industryCodes?: Array<{
          /** Section-level codes. */
          firstCodeList?: Array<string>;
          /** Division-level codes. */
          secondCodeList?: Array<string>;
          /** Group-level codes. */
          thirdCodeList?: Array<string>;
          /** Full industry path, such as 教育-教育-高等教育. */
          fullTitle?: string;
          /** Most specific industry name. */
          minTitle?: string;
          [key: string]: unknown;
        }> | null;
        [key: string]: unknown;
      };
    };
    /** Read the Baobiao account's cash balance, coupon balance, and package call quota. The account must have this endpoint enabled by Baobiao sales; a failure does not mean the balance is zero. */
    "baobiao.get_account_resources": {
      input: Record<string, never>;
      output: {
        /** Cash balance in fen (0.01 yuan); may be negative. */
        balanceAmount?: number;
        /** Coupon balance in fen. */
        couponAmount?: number;
        /** Unit of the amounts, 分. */
        amountUnit?: string;
        /** Whether an unlimited package is active. */
        packageUnlimited?: boolean;
        /** Total calls in active packages; 0 without a package, -1 when unlimited. */
        packageTotalQuota?: number;
        /** Remaining calls in active packages; 0 without a package, -1 when unlimited. */
        packageRemainingQuota?: number;
        /** Unit of the quotas, 次. */
        quotaUnit?: string;
        [key: string]: unknown;
      };
    };
    /** Read a company's key business information from a third-party registry: type, industry, region, capital, headcount, status, credit code, scope, and its tender and award counts. */
    "baobiao.get_company_business_info": {
      input: {
        /**
         * Full registered company name.
         * @minLength 1
         * @pattern \S
         */
        companyName: string;
      };
      output: {
        /** Business information, or null when the registry has no match. */
        company: {
          /** Company ID; Baobiao may return it as a number or a string. */
          enterpriseId?: unknown;
          /** Company name. */
          enterpriseName?: string;
          /** Company type. */
          enterpriseTypeName?: string | null;
          /** Industry. */
          industryName?: string | null;
          /** Province. */
          province?: string | null;
          /** City. */
          city?: string | null;
          /** County. */
          county?: string | null;
          /** Registered capital in 10,000 yuan. */
          registeredCapitalAmount?: number | null;
          /** Employees. */
          employeeCount?: number | null;
          /** Operating status. */
          operatingStatusName?: string | null;
          /** Number of tenders issued. */
          biddingCount?: number | null;
          /** Number of awards won. */
          winningCount?: number | null;
          /** Unified social credit code. */
          creditCode?: string | null;
          /** Establishment date. */
          establishedDate?: string | null;
          /** Business scope. */
          businessScope?: string | null;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Read a company's full business registration record: codes, legal representative, capital, status, operating period, scope, address, tax details, industry chain, headcount, listing status, contacts, and tags. */
    "baobiao.get_company_registration": {
      input: {
        /**
         * Company name, unified social credit code, registration number, or organization code.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /** What query contains: 1 company name, 2 unified social credit code, 3 registration number, 4 organization code. Defaults to 1. */
        keyType?: "1" | "2" | "3" | "4";
      };
      output: {
        /** Registration record, or null when no company matches. */
        company: {
          /** Company name. */
          enterpriseName?: string;
          /** Unified social credit code. */
          creditCode?: string | null;
          /** Registration number. */
          registrationNumber?: string | null;
          /** Organization code. */
          organizationCode?: string | null;
          /** Legal representative. */
          legalRepresentativeName?: string | null;
          /** Registered capital as returned by Baobiao. */
          registeredCapitalAmount?: unknown;
          /** Registered capital currency. */
          registeredCapitalCurrency?: string | null;
          /** Paid-in capital as returned by Baobiao. */
          paidInCapitalAmount?: unknown;
          /** Operating status. */
          operatingStatusName?: string | null;
          /** Company type. */
          enterpriseTypeName?: string | null;
          /** Establishment date. */
          establishedDate?: string | null;
          /** Operating period start. */
          operatingPeriodStartDate?: string | null;
          /** Operating period end. */
          operatingPeriodEndDate?: string | null;
          /** Address. */
          address?: string | null;
          /** Registration authority. */
          registrationAuthority?: string | null;
          /** Business scope. */
          businessScope?: string | null;
          /** Taxpayer type. */
          taxpayerTypeName?: string | null;
          /** Tax credit rating. */
          taxCreditRating?: string | null;
          /** Full industry chain. */
          industryName?: string | null;
          /** Employees. */
          employeeCount?: number | null;
          /** Insured employees. */
          insuredEmployeeCount?: number | null;
          /** Former name. */
          formerName?: string | null;
          /** Website. */
          website?: string | null;
          /** Published phone number. */
          phoneNumber?: string | null;
          /** Published email. */
          email?: string | null;
          /** Whether the company is listed. */
          listedFlag?: number | null;
          /** Company tags. */
          tags?: Array<unknown>;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Read a company's bid and award statistics by industry and its contact, customer, and supplier relationship counts, without registration details. */
    "baobiao.get_company_statistics": {
      input: {
        /**
         * Full registered company name.
         * @minLength 1
         * @pattern \S
         */
        companyName: string;
      };
      output: {
        /** Company name. */
        companyName?: string;
        /** Bid and award statistics by industry. */
        projectInsights?: {
          /** Statistics of projects the company tendered. */
          bidStatistics?: Array<{
            /** Industry name. */
            industryName?: string;
            /** Number of projects. */
            projectCount?: number;
            /** Share of all projects. */
            projectShare?: string;
            /** Budget amount in 10,000 yuan, or null. */
            budgetAmountWan?: string | null;
            [key: string]: unknown;
          }>;
          /** Statistics of projects the company won. */
          winStatistics?: Array<{
            /** Industry name. */
            industryName?: string;
            /** Number of projects. */
            projectCount?: number;
            /** Share of all projects. */
            projectShare?: string;
            /** Budget amount in 10,000 yuan, or null. */
            budgetAmountWan?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Relationship counts. */
        relationshipSummary?: {
          /** Number of known contacts. */
          contactPersonCount?: unknown;
          /** Number of projects with customers. */
          customerProjectCount?: unknown;
          /** Number of projects with suppliers. */
          supplierProjectCount?: unknown;
          [key: string]: unknown;
        };
        /** Which datasets have data for this company. */
        dataStatus?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Read a company profile summary: registration, capital, operation and contact details, bid and award statistics by industry, relationship counts, and which datasets have data. */
    "baobiao.get_company_summary": {
      input: {
        /**
         * Full registered company name.
         * @minLength 1
         * @pattern \S
         */
        companyName: string;
      };
      output: {
        /** Company name. */
        companyName?: string;
        /** Registration, capital, operation, and contact details: enterpriseProfile, registrationInfo, operationInfo, and contactInfo. */
        baseInfo?: Record<string, unknown>;
        /** Bid and award statistics by industry. */
        projectInsights?: {
          /** Statistics of projects the company tendered. */
          bidStatistics?: Array<{
            /** Industry name. */
            industryName?: string;
            /** Number of projects. */
            projectCount?: number;
            /** Share of all projects. */
            projectShare?: string;
            /** Budget amount in 10,000 yuan, or null. */
            budgetAmountWan?: string | null;
            [key: string]: unknown;
          }>;
          /** Statistics of projects the company won. */
          winStatistics?: Array<{
            /** Industry name. */
            industryName?: string;
            /** Number of projects. */
            projectCount?: number;
            /** Share of all projects. */
            projectShare?: string;
            /** Budget amount in 10,000 yuan, or null. */
            budgetAmountWan?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Relationship counts. */
        relationshipSummary?: {
          /** Number of known contacts. */
          contactPersonCount?: unknown;
          /** Number of projects with customers. */
          customerProjectCount?: unknown;
          /** Number of projects with suppliers. */
          supplierProjectCount?: unknown;
          [key: string]: unknown;
        };
        /** Which datasets have data for this company. */
        dataStatus?: {
          /** Whether registration details were found. */
          baseInfoAvailable?: boolean;
          /** Whether project statistics were found. */
          projectStatisticsAvailable?: boolean;
          /** Whether contacts were found. */
          contactsAvailable?: boolean;
          /** Whether customers were found. */
          customersAvailable?: boolean;
          /** Whether suppliers were found. */
          suppliersAvailable?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Read the full details of a planned or under-construction project. */
    "baobiao.get_planned_project": {
      input: {
        /**
         * Planned project ID returned by search_planned_projects.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Publish time of the record exactly as returned by a search, as yyyy-MM-dd or yyyy-MM-dd HH:mm:ss. Baobiao uses it to locate the record's storage partition.
         * @minLength 1
         */
        publishTime: string;
      };
      output: {
        /** Planned project ID. */
        proposeProjectID?: number;
        /** Title. */
        title?: string;
        /** Details, usually HTML. */
        content?: string;
        /** Developer, or null when not given. */
        constructionCompany?: string | null;
        /** Province-level division code. */
        proviceCode?: string | null;
        /** City-level division code. */
        cityCode?: string | null;
        /** County-level division code, or null. */
        countyCode?: string | null;
        /** Province name. */
        proviceName?: string | null;
        /** City name. */
        cityName?: string | null;
        /** County name. */
        countyName?: string | null;
        /** Publish time. */
        publishTime?: string;
        /** Attachment names. */
        projectFiles?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Read the full HTML body of a tender or award notice with its parties, amount, classification, and attachment names. Use get_project_text when plain text is enough. */
    "baobiao.get_project_content": {
      input: {
        /**
         * Project ID returned by a Baobiao search.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Publish time of the record exactly as returned by a search, as yyyy-MM-dd or yyyy-MM-dd HH:mm:ss. Baobiao uses it to locate the record's storage partition.
         * @minLength 1
         */
        publishTime: string;
      };
      output: {
        /** Project ID. */
        id?: number;
        /** Notice title. */
        title?: string;
        /** Full notice body as HTML. */
        content?: string;
        /** Publish time. */
        publishTime?: string;
        /** Province-level division code. */
        proviceCode?: string | null;
        /** City-level division code. */
        cityCode?: string | null;
        /** County-level division code, or null. */
        countyCode?: string | null;
        /** Display amount: contract, else award, else budget amount. */
        projectMoney?: string | null;
        /** Notice class ID. */
        projectClassID?: string | null;
        /** Notice class name. */
        projectClassName?: string | null;
        /** Procurement type ID: 0 other, 1 services, 2 construction, 3 goods. */
        purchaseType?: string | null;
        /** Buyer names, comma-separated. */
        partAName?: string | null;
        /** Supplier names, comma-separated. */
        partBName?: string | null;
        /** Agency names, comma-separated. */
        agentName?: string | null;
        /** Buyer industries. */
        partAIndustryName?: Array<unknown>;
        /** Subject-matter industries. */
        subMatIndustryName?: Array<unknown>;
        /** Attachment names; use list_project_files for download links. */
        projectFiles?: Array<{
          /** Attachment ID. */
          projectFileID?: number;
          /** Attachment name. */
          name?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Read the second-stage extraction of a notice: funding sources, subject matter, qualification requirements, evaluation methods, and per-bidder quotes and scores. Only notices published on or after 2026-09-18 may have this data. */
    "baobiao.get_project_requirements": {
      input: {
        /**
         * Project ID returned by a Baobiao search.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Publish time of the record exactly as returned by a search, as yyyy-MM-dd or yyyy-MM-dd HH:mm:ss. Baobiao uses it to locate the record's storage partition.
         * @minLength 1
         */
        publishTime: string;
      };
      output: {
        /** Project ID. */
        projectID?: number;
        /** Publish time. */
        publishTime?: string;
        /** Funding sources. */
        fundSources?: Array<string>;
        /** Subject matter. */
        subjectMatters?: Array<string>;
        /** Required qualifications. */
        qualifications?: Array<string>;
        /** Evaluation methods. */
        bidEvaluationMethods?: Array<string>;
        /** Bid records. */
        bidRecords?: Array<{
          /** Lot number or name. */
          projectSectionCode?: string;
          /** Bidder names. */
          bidCompanyName?: Array<string>;
          /** Bidder qualifications. */
          bidderQualifications?: Array<string>;
          /** Total quote as published, with unit. */
          totalQuote?: string;
          /** Technical score; empty when not found. */
          technicalScore?: string;
          /** Commercial score; empty when not found. */
          businessScore?: string;
          /** Combined commercial and technical score; empty when not found. */
          businessTechnicalScore?: string;
          /** Price score; empty when not found. */
          quoteScore?: string;
          /** Total score; empty when not found. */
          totalScore?: string;
          /** Price coefficient; empty when not found. */
          quoteCoefficient?: string;
          /** Fee rate; empty when not found. */
          rate?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get the original web page a tender or award notice was collected from. */
    "baobiao.get_project_source_url": {
      input: {
        /**
         * Project ID returned by a Baobiao search.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Publish time of the record exactly as returned by a search, as yyyy-MM-dd or yyyy-MM-dd HH:mm:ss. Baobiao uses it to locate the record's storage partition.
         * @minLength 1
         */
        publishTime: string;
      };
      output: {
        /** Original page URL, or null when Baobiao has none. */
        url: string | null;
      };
    };
    /** Read fields Baobiao extracted from a notice: project name and numbers, lots, budget and award amounts in yuan, registration deadline, bid opening time and place, buyer, supplier, and agency contacts, bidders, and the source URL. */
    "baobiao.get_project_structure": {
      input: {
        /**
         * Project ID returned by a Baobiao search.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Publish time of the record exactly as returned by a search, as yyyy-MM-dd or yyyy-MM-dd HH:mm:ss. Baobiao uses it to locate the record's storage partition.
         * @minLength 1
         */
        publishTime: string;
      };
      output: {
        /** Project ID. */
        projectID?: number;
        /** Publish time. */
        publishTime?: string;
        /** Project name. */
        projectName?: string | null;
        /** Project numbers. */
        projectNumber?: Array<string>;
        /** Lot numbers. */
        projectSectionCode?: Array<string>;
        /** Budget amounts in yuan. */
        budgetMoney?: Array<unknown>;
        /** Award amounts in yuan. */
        bidMoney?: Array<unknown>;
        /** Registration deadline. */
        siginUpStopDate?: string | null;
        /** Bid opening time. */
        bidStartDate?: string | null;
        /** Bid opening locations. */
        bidStartAddress?: Array<string>;
        /** Buyers. */
        partyAInfo?: Array<{
          /** Company name. */
          name?: string;
          /** Contact names. */
          contactName?: unknown;
          /** Contact phone numbers. */
          contactPhone?: unknown;
          /** Addresses. */
          address?: unknown;
          /** Emails. */
          email?: unknown;
          [key: string]: unknown;
        }>;
        /** Suppliers. */
        partyBInfo?: Array<{
          /** Company name. */
          name?: string;
          /** Contact names. */
          contactName?: unknown;
          /** Contact phone numbers. */
          contactPhone?: unknown;
          /** Addresses. */
          address?: unknown;
          /** Emails. */
          email?: unknown;
          [key: string]: unknown;
        }>;
        /** Procurement agencies. */
        agencyInfo?: Array<{
          /** Company name. */
          name?: string;
          /** Contact names. */
          contactName?: unknown;
          /** Contact phone numbers. */
          contactPhone?: unknown;
          /** Addresses. */
          address?: unknown;
          /** Emails. */
          email?: unknown;
          [key: string]: unknown;
        }>;
        /** Bidding companies. */
        bidCompany?: Array<unknown>;
        /** Original page the notice was collected from. */
        collectUrl?: string | null;
        /** Notice page on the Baobiao website. */
        sbkjBidUrl?: string | null;
        [key: string]: unknown;
      };
    };
    /** Read a tender or award notice as plain text without HTML, with region names, amount, category, and buyer, supplier, and agency name lists. Best for summarizing a notice. */
    "baobiao.get_project_text": {
      input: {
        /**
         * Project ID returned by a Baobiao search.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Publish time of the record exactly as returned by a search, as yyyy-MM-dd or yyyy-MM-dd HH:mm:ss. Baobiao uses it to locate the record's storage partition.
         * @minLength 1
         */
        publishTime: string;
      };
      output: {
        /** Project ID. */
        id?: number;
        /** Notice category name, such as 招标信息 or 中标信息. */
        newsTypeName?: string | null;
        /** Notice title. */
        title?: string;
        /** Notice body as plain text. */
        content?: string;
        /** Publish time, as yyyy-MM-dd HH:mm:ss. */
        publishTime?: string;
        /** Province name. */
        proviceName?: string | null;
        /** City name. */
        cityName?: string | null;
        /** County name. */
        countyName?: string | null;
        /** Display amount with unit, such as 370万. */
        projectMoney?: string | null;
        /** Notice class name. */
        projectClassName?: string | null;
        /** Procurement type name. */
        purchaseType?: string | null;
        /** Buyer industries. */
        partAIndustryName?: Array<string>;
        /** Subject-matter industries. */
        subMatIndustryName?: Array<string>;
        /** Buyer names. */
        partAName?: Array<string>;
        /** Supplier names. */
        partBName?: Array<string>;
        /** Agency names. */
        agentName?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Infer national economic industry classification codes (GB/T 4754) for an industry phrase, for use in industryCode filters. */
    "baobiao.infer_industry_codes": {
      input: {
        /**
         * Industry keyword or short phrase, such as 高校 or 物业服务.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
      };
      output: {
        /** Candidates ordered by relevance. */
        industries: Array<{
          /** Section-level codes. */
          firstCodeList?: Array<string>;
          /** Division-level codes. */
          secondCodeList?: Array<string>;
          /** Group-level codes. */
          thirdCodeList?: Array<string>;
          /** Full industry path, such as 教育-教育-高等教育. */
          fullTitle?: string;
          /** Most specific industry name. */
          minTitle?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List contact people and phone numbers that appeared in a company's tender and award notices. The result contains personal data; use it only for lawful business contact. */
    "baobiao.list_company_contacts": {
      input: {
        /**
         * Full registered company name.
         * @minLength 1
         * @pattern \S
         */
        companyName: string;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        pageNo: number;
        /**
         * Records per page, from 1 to 5.
         * @minimum 1
         * @maximum 5
         */
        pageSize: number;
      };
      output: {
        /** Company name. */
        companyName?: string;
        /** Pagination. */
        pagination?: {
          /** Current page number. */
          pageNo?: number;
          /** Records per page. */
          pageSize?: number;
          /** Total number of records. */
          total?: number | string;
          /** Total number of pages. */
          totalPages?: number;
          /** Whether another page is available. */
          hasNext?: boolean;
          [key: string]: unknown;
        };
        /** Records on this page. */
        records?: Array<{
          /** Contact name. */
          contactName?: string;
          /** Phone numbers. */
          contactPhones?: Array<string>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the buyers a company has supplied, one record per related project. */
    "baobiao.list_company_customers": {
      input: {
        /**
         * Full registered company name.
         * @minLength 1
         * @pattern \S
         */
        companyName: string;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        pageNo: number;
        /**
         * Records per page, from 1 to 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize: number;
      };
      output: {
        /** Company name. */
        companyName?: string;
        /** Pagination. */
        pagination?: {
          /** Current page number. */
          pageNo?: number;
          /** Records per page. */
          pageSize?: number;
          /** Total number of records. */
          total?: number | string;
          /** Total number of pages. */
          totalPages?: number;
          /** Whether another page is available. */
          hasNext?: boolean;
          [key: string]: unknown;
        };
        /** Records on this page. */
        records?: Array<{
          /** Partner company name. */
          partnerCompanyName?: string;
          /** Related project ID. */
          relatedProjectId?: string;
          /** Related project name. */
          relatedProjectName?: string;
          /** Publish time of the related project. */
          projectPublishTime?: string;
          /** Relationship type. */
          relationshipType?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the suppliers a company has bought from, one record per related project. */
    "baobiao.list_company_suppliers": {
      input: {
        /**
         * Full registered company name.
         * @minLength 1
         * @pattern \S
         */
        companyName: string;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        pageNo: number;
        /**
         * Records per page, from 1 to 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize: number;
      };
      output: {
        /** Company name. */
        companyName?: string;
        /** Pagination. */
        pagination?: {
          /** Current page number. */
          pageNo?: number;
          /** Records per page. */
          pageSize?: number;
          /** Total number of records. */
          total?: number | string;
          /** Total number of pages. */
          totalPages?: number;
          /** Whether another page is available. */
          hasNext?: boolean;
          [key: string]: unknown;
        };
        /** Records on this page. */
        records?: Array<{
          /** Partner company name. */
          partnerCompanyName?: string;
          /** Related project ID. */
          relatedProjectId?: string;
          /** Related project name. */
          relatedProjectName?: string;
          /** Publish time of the related project. */
          projectPublishTime?: string;
          /** Relationship type. */
          relationshipType?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List a planned project's attachments with download links. */
    "baobiao.list_planned_project_files": {
      input: {
        /**
         * Planned project ID returned by search_planned_projects.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Publish time of the record exactly as returned by a search, as yyyy-MM-dd or yyyy-MM-dd HH:mm:ss. Baobiao uses it to locate the record's storage partition.
         * @minLength 1
         */
        publishTime: string;
      };
      output: {
        /** Attachments; empty when the project has none. */
        files: Array<{
          /** Attachment ID. */
          projectFileID?: number;
          /** Project ID. */
          projectID?: string;
          /** Attachment name; may be truncated. */
          name?: string;
          /** Public download URL. */
          url?: string | null;
          /** File extension, such as pdf or docx. */
          suffix?: string | null;
          /** Size in KB, or null when unknown. */
          size?: number | null;
          /** Download state: 0 not downloaded, 1 available, 2 download failed, 3 larger than 20 MB, 4 corrupted, 5 source link expired. */
          state?: string | null;
          /** Publish time of the parent project. */
          publishTime?: string;
          /** Time Baobiao stored the attachment. */
          createTime?: string | null;
          /** Province-level division code. */
          proviceCode?: string | null;
          /** City-level division code. */
          cityCode?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List a tender or award notice's attachments with public download links and download state. */
    "baobiao.list_project_files": {
      input: {
        /**
         * Project ID returned by a Baobiao search.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Publish time of the record exactly as returned by a search, as yyyy-MM-dd or yyyy-MM-dd HH:mm:ss. Baobiao uses it to locate the record's storage partition.
         * @minLength 1
         */
        publishTime: string;
      };
      output: {
        /** Attachments; empty when the project has none. */
        files: Array<{
          /** Attachment ID. */
          projectFileID?: number;
          /** Project ID. */
          projectID?: string;
          /** Attachment name; may be truncated. */
          name?: string;
          /** Public download URL. */
          url?: string | null;
          /** File extension, such as pdf or docx. */
          suffix?: string | null;
          /** Size in KB, or null when unknown. */
          size?: number | null;
          /** Download state: 0 not downloaded, 1 available, 2 download failed, 3 larger than 20 MB, 4 corrupted, 5 source link expired. */
          state?: string | null;
          /** Publish time of the parent project. */
          publishTime?: string;
          /** Time Baobiao stored the attachment. */
          createTime?: string | null;
          /** Province-level division code. */
          proviceCode?: string | null;
          /** City-level division code. */
          cityCode?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Chinese companies by name, former name, legal representative, unified social credit code, or registration number, and return brief business-registration profiles. */
    "baobiao.search_companies": {
      input: {
        /**
         * Text to match.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
        /** Fields to match; all of them when omitted: main__entname current name, main__history_entname former name, main__legal_person legal representative, main__uniscid unified social credit code, main__regno registration number. */
        filterFields?: Array<"main__entname" | "main__history_entname" | "main__legal_person" | "main__uniscid" | "main__regno">;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        pageNo?: number;
        /**
         * Records per page, from 1 to 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
      };
      output: {
        /** Total number of matching companies. */
        total?: number | string;
        /** Current page number. */
        pageNo?: number;
        /** Records per page. */
        pageSize?: number;
        /** Companies on this page. */
        records?: Array<{
          /** Company ID. */
          enterpriseId?: string;
          /** Current name. */
          enterpriseName?: string;
          /** Former names. */
          historyNames?: Array<string>;
          /** Operating status. */
          operatingStatus?: string | null;
          /** Registered capital in 10,000 yuan. */
          registeredCapitalAmount?: number | null;
          /** Region name. */
          regionName?: string | null;
          /** Industry name. */
          industryName?: string | null;
          /** Company type. */
          enterpriseType?: string | null;
          /** Registration number. */
          registrationNo?: string | null;
          /** Unified social credit code. */
          creditCode?: string | null;
          /** Registered address. */
          address?: string | null;
          /** Establishment date. */
          establishedDate?: string | null;
          /** Legal representative. */
          legalRepresentative?: string | null;
          /** Longitude. */
          longitude?: string | null;
          /** Latitude. */
          latitude?: string | null;
          /** Logo URL. */
          logoUrl?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the tender and award notices a company took part in as buyer, supplier, or agency. */
    "baobiao.search_company_projects": {
      input: {
        /**
         * Company name as buyer, supplier, or agency.
         * @minLength 1
         * @pattern \S
         */
        companyName: string;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        pageId: number;
        /**
         * Records per page, at most 100. Set 0 to return only the total count.
         * @minimum 0
         * @maximum 100
         */
        pageNumber?: number;
      };
      output: {
        /** Total number of matching records. */
        total?: number;
        /** Current page number. */
        pageId?: number;
        /** Records per page. */
        pageNumber?: number;
        /** Whether another page is available. */
        hasNext?: boolean;
        /** Effective search start time. */
        startDate?: string;
        /** Effective search end time. */
        endDate?: string;
        /** Search time in milliseconds, or null when not measured. */
        costTime?: string | null;
        /** Matched keywords that Baobiao highlights. */
        seKeyWords?: string | null;
        /** Records on this page. */
        data?: Array<{
          /** Project ID; pass it with publishTime to the detail actions. */
          id?: number;
          /** Notice category name. */
          newsTypeName?: string;
          /** Notice title. May contain HTML highlight tags. */
          title?: string;
          /** Publish time, as yyyy-MM-dd HH:mm:ss. */
          publishTime?: string;
          /** Matched excerpt of the notice body, or null. */
          content?: string | null;
          /** Region name. */
          areaName?: string | null;
          /** Relevance score, or null. */
          score?: number | null;
          /** Display amount with unit, such as 54.38万. */
          projectMoney?: string | null;
          /** Notice class name. */
          projectClass?: string | null;
          /** Procurement type name. */
          purchaseType?: string | null;
          /** Buyers. */
          partAInfo?: Array<{
            /** Company name. */
            name?: string;
            /** Contact phone numbers separated by 、. */
            contactPhone?: string | null;
            /** Contact emails separated by 、. */
            email?: string | null;
            [key: string]: unknown;
          }>;
          /** Suppliers. */
          partBInfo?: Array<{
            /** Company name. */
            name?: string;
            /** Contact phone numbers separated by 、. */
            contactPhone?: string | null;
            /** Contact emails separated by 、. */
            email?: string | null;
            [key: string]: unknown;
          }>;
          /** Procurement agencies. */
          agencyInfo?: Array<{
            /** Company name. */
            name?: string;
            /** Contact phone numbers separated by 、. */
            contactPhone?: string | null;
            /** Contact emails separated by 、. */
            email?: string | null;
            [key: string]: unknown;
          }>;
          /** Registration deadline. */
          siginUpStopDate?: string | null;
          /** Bid opening date. */
          bidStartDate?: string | null;
          /** Bid opening location. */
          bidStartAddress?: string | null;
          /** Original page the notice was collected from. */
          collectUrl?: string | null;
          /** Notice page on the Baobiao website. */
          sbkjBidUrl?: string | null;
          /** Buyer industries. */
          partAIndustryList?: Array<unknown>;
          /** Subject-matter industries. */
          subMatIndustryList?: Array<unknown>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search published procurement contracts by keyword, region and industry codes, parties, amount range, and contract period. */
    "baobiao.search_contracts": {
      input: {
        /**
         * Earliest publish time to search, as yyyy-MM-dd or yyyy-MM-dd HH:mm:ss.
         * @minLength 1
         */
        startDate: string;
        /**
         * Latest publish time to search, as yyyy-MM-dd or yyyy-MM-dd HH:mm:ss.
         * @minLength 1
         */
        endDate: string;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        pageId: number;
        /**
         * Records per page, at most 100. Set 0 to return only the total count.
         * @minimum 0
         * @maximum 100
         */
        pageNumber: number;
        /** Search type: 1 fuzzy smart match, 2 exact match, 3 advanced match. */
        searchType: 1 | 2 | 3;
        /**
         * Search keywords, at most 300 characters. Separate terms that must all appear with spaces, and alternatives with |.
         * @maxLength 300
         */
        keyword?: string;
        /**
         * Keywords to exclude, separated by |, at most 50 characters.
         * @maxLength 50
         */
        excludeKW?: string;
        /**
         * Keywords at least one of which must appear, separated by |, at most 50 characters. Do not repeat terms already in keyword.
         * @maxLength 50
         */
        inCludeKW?: string;
        /** Fields to match: 1 title and body, 2 title only, 3 body only. Defaults to 1. */
        searchMode?: 1 | 2 | 3;
        /** Region filter using 6-digit Chinese administrative division codes (GB/T 2260), such as 420000 for Hubei and 420100 for Wuhan. Pass proviceCodeList ["0"] for the whole country. */
        areaCode?: {
          /** Province-level division codes. An empty list does not filter on this level. */
          proviceCodeList?: Array<string>;
          /** City-level division codes. An empty list does not filter on this level. */
          cityCodeList?: Array<string>;
          /** County-level division codes. An empty list does not filter on this level. */
          countyCodeList?: Array<string>;
        };
        /** Industry filter using national economic industry classification codes (GB/T 4754), such as Q, Q83, or Q831. Use infer_industry_codes to find codes for a phrase. */
        industryCode?: {
          /** Section-level industry codes. An empty list does not filter on this level. */
          firstCodeList?: Array<string>;
          /** Division-level industry codes. An empty list does not filter on this level. */
          secondCodeList?: Array<string>;
          /** Group-level industry codes. An empty list does not filter on this level. */
          thirdCodeList?: Array<string>;
        };
        /** Contract end date bound, as yyyy-MM-dd. */
        contractEndMin?: string;
        /** Contract end date bound, as yyyy-MM-dd. */
        contractEndMax?: string;
        /** Comma-separated procurement type IDs, or -100 for all: 0 other, 1 services, 2 construction, 3 goods. */
        purchaseTypeID?: string;
        /** Comma-separated buyer names, matched fuzzily. */
        partAName?: string;
        /** Comma-separated supplier names, matched fuzzily. */
        partBName?: string;
        /** Comma-separated agency names, matched fuzzily. */
        agentName?: string;
        /** Comma-separated company names matched fuzzily as buyer, supplier, or agency, when the role is unknown. */
        companyName?: string;
        /** Project amount bound in yuan (CNY), as a number or numeric string. Empty or null means no bound. */
        projectMoneyMin?: string | number | null;
        /** Project amount bound in yuan (CNY), as a number or numeric string. Empty or null means no bound. */
        projectMoneyMax?: string | number | null;
        /** Attachment filter: -1 any, 0 without attachments, 1 with attachments. */
        fileFlag?: -1 | 0 | 1;
      };
      output: {
        /** Total number of matching records. */
        total?: number;
        /** Current page number. */
        pageId?: number;
        /** Records per page. */
        pageNumber?: number;
        /** Whether another page is available. */
        hasNext?: boolean;
        /** Effective search start time. */
        startDate?: string;
        /** Effective search end time. */
        endDate?: string;
        /** Search time in milliseconds, or null when not measured. */
        costTime?: string | null;
        /** Matched keywords that Baobiao highlights. */
        seKeyWords?: string | null;
        /** Records on this page. */
        data?: Array<{
          /** Notice ID; pass it with publishTime to the detail actions. */
          id?: number;
          /** Contract title. May contain HTML highlight tags. */
          title?: string;
          /** Publish time, as yyyy-MM-dd HH:mm:ss. */
          publishTime?: string;
          /** Matched excerpt. May contain HTML highlight tags. */
          content?: string;
          /** Province-level division code. */
          proviceCode?: string | null;
          /** City-level division code. */
          cityCode?: string | null;
          /** County-level division code, or null. */
          countyCode?: string | null;
          /** 1 when the notice has attachments, otherwise 0. */
          hasFile?: number;
          /** Display amount with unit. */
          projectMoney?: string | null;
          /** Notice class ID. */
          projectClassID?: string | null;
          /** Procurement type ID. */
          purchaseTypeID?: string | null;
          /** Industry codes. */
          industryCodeList?: Array<string>;
          /** Contract periods, one per lot. */
          projectCycle?: Array<unknown>;
          /** Buyers. */
          partAInfo?: Array<unknown>;
          /** Suppliers. */
          partBInfo?: Array<unknown>;
          /** Contract start date, as yyyy-MM-dd. */
          contractStartDate?: string | null;
          /** Contract end date, as yyyy-MM-dd. */
          contractEndDate?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search planned and under-construction projects, such as investment filings and approvals, before they go to tender. */
    "baobiao.search_planned_projects": {
      input: {
        /**
         * Earliest publish time to search, as yyyy-MM-dd or yyyy-MM-dd HH:mm:ss.
         * @minLength 1
         */
        startDate: string;
        /**
         * Latest publish time to search, as yyyy-MM-dd or yyyy-MM-dd HH:mm:ss.
         * @minLength 1
         */
        endDate: string;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        pageId: number;
        /**
         * Records per page, at most 50. Set 0 to return only the total count.
         * @minimum 0
         * @maximum 50
         */
        pageNumber: number;
        /** Search type: 1 fuzzy smart match, 2 exact match, 3 advanced match. */
        searchType: 1 | 2 | 3;
        /**
         * Search keywords, at most 300 characters. Separate terms that must all appear with spaces, and alternatives with |.
         * @maxLength 300
         */
        keyword?: string;
        /**
         * Keywords to exclude, separated by |, at most 150 characters.
         * @maxLength 150
         */
        excludeKW?: string;
        /**
         * Keywords at least one of which must appear, separated by |, at most 150 characters. Do not repeat terms already in keyword.
         * @maxLength 150
         */
        inCludeKW?: string;
        /** Fields to match: 1 title and body, 2 title only, 3 body only. Defaults to 1. */
        searchMode?: 1 | 2 | 3;
        /** Region filter using 6-digit Chinese administrative division codes (GB/T 2260), such as 420000 for Hubei and 420100 for Wuhan. Pass proviceCodeList ["0"] for the whole country. */
        areaCode?: {
          /** Province-level division codes. An empty list does not filter on this level. */
          proviceCodeList?: Array<string>;
          /** City-level division codes. An empty list does not filter on this level. */
          cityCodeList?: Array<string>;
          /** County-level division codes. An empty list does not filter on this level. */
          countyCodeList?: Array<string>;
        };
      };
      output: {
        /** Total number of matching records. */
        total?: number;
        /** Current page number. */
        pageId?: number;
        /** Records per page. */
        pageNumber?: number;
        /** Whether another page is available. */
        hasNext?: boolean;
        /** Effective search start time. */
        startDate?: string;
        /** Effective search end time. */
        endDate?: string;
        /** Search time in milliseconds, or null when not measured. */
        costTime?: string | null;
        /** Matched keywords that Baobiao highlights. */
        seKeyWords?: string | null;
        /** Records on this page. */
        data?: Array<{
          /** Planned project ID; pass it with publishTime to get_planned_project. */
          id?: number;
          /** Title. May contain HTML highlight tags. */
          title?: string;
          /** Matched excerpt. May contain HTML highlight tags. */
          summary?: string;
          /** Publish time. */
          publishTime?: string;
          /** Province-level division code. */
          proviceCode?: string | null;
          /** City-level division code. */
          cityCode?: string | null;
          /** County-level division code, or null. */
          countyCode?: string | null;
          /** 1 when the project has attachments, otherwise 0. */
          hasFile?: number;
          /** Relevance score. */
          score?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search Chinese tender and award notices with code-based filters: notice class, procurement type, region and industry codes, amount range, party names, subject matter, contract end date, and attachments. Use build_search_query to turn a plain-language request into these filters. */
    "baobiao.search_projects": {
      input: {
        /**
         * Earliest publish time to search, as yyyy-MM-dd or yyyy-MM-dd HH:mm:ss.
         * @minLength 1
         */
        startDate: string;
        /**
         * Latest publish time to search, as yyyy-MM-dd or yyyy-MM-dd HH:mm:ss.
         * @minLength 1
         */
        endDate: string;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        pageId: number;
        /**
         * Records per page, at most 50. Set 0 to return only the total count.
         * @minimum 0
         * @maximum 50
         */
        pageNumber: number;
        /** Search type: 1 fuzzy smart match, 2 exact match, 3 advanced match. */
        searchType: 1 | 2 | 3;
        /**
         * Search keywords, at most 300 characters. Separate terms that must all appear with spaces, and alternatives with |.
         * @maxLength 300
         */
        keyword?: string;
        /**
         * Keywords to exclude, separated by |, at most 150 characters.
         * @maxLength 150
         */
        excludeKW?: string;
        /**
         * Keywords at least one of which must appear, separated by |, at most 150 characters. Do not repeat terms already in keyword.
         * @maxLength 150
         */
        inCludeKW?: string;
        /** Subject-matter keywords, separated by | for alternatives. */
        subjectMatter?: string;
        /** Comma-separated notice class IDs, or -100 for all: 1 open tender, 2 award result, 3 contract notice, 4 procurement intention or tender forecast, 5 clarification or change, 6 candidate announcement, 7 bid opening, 8 re-tender, 11 failed or cancelled tender, 18 result change, 26 auction or lease, 28 competitive negotiation, 29 competitive consultation, 30 single-source procurement, 31 other. */
        projectClassID?: string;
        /** Fields to match: 1 title and body, 2 title only, 3 body only. Defaults to 1. */
        searchMode?: 1 | 2 | 3;
        /** Region filter using 6-digit Chinese administrative division codes (GB/T 2260), such as 420000 for Hubei and 420100 for Wuhan. Pass proviceCodeList ["0"] for the whole country. */
        areaCode?: {
          /** Province-level division codes. An empty list does not filter on this level. */
          proviceCodeList?: Array<string>;
          /** City-level division codes. An empty list does not filter on this level. */
          cityCodeList?: Array<string>;
          /** County-level division codes. An empty list does not filter on this level. */
          countyCodeList?: Array<string>;
        };
        /** Buyer industry filter (GB/T 4754 codes). */
        industryCode?: {
          /** Section-level industry codes. An empty list does not filter on this level. */
          firstCodeList?: Array<string>;
          /** Division-level industry codes. An empty list does not filter on this level. */
          secondCodeList?: Array<string>;
          /** Group-level industry codes. An empty list does not filter on this level. */
          thirdCodeList?: Array<string>;
        };
        /** Subject-matter industry filter. */
        subMatterIndustryCode?: {
          /** Section-level industry codes. An empty list does not filter on this level. */
          firstCodeList?: Array<string>;
          /** Division-level industry codes. An empty list does not filter on this level. */
          secondCodeList?: Array<string>;
          /** Group-level industry codes. An empty list does not filter on this level. */
          thirdCodeList?: Array<string>;
        };
        /** Contract end date bound, as yyyy-MM-dd. */
        contractEndMin?: string;
        /** Contract end date bound, as yyyy-MM-dd. */
        contractEndMax?: string;
        /** Comma-separated procurement type IDs, or -100 for all: 0 other, 1 services, 2 construction, 3 goods. */
        purchaseTypeID?: string;
        /** Comma-separated buyer names, matched fuzzily. */
        partAName?: string;
        /** Comma-separated supplier names, matched fuzzily. */
        partBName?: string;
        /** Comma-separated agency names, matched fuzzily. */
        agentName?: string;
        /** Project amount bound in yuan (CNY), as a number or numeric string. Empty or null means no bound. */
        projectMoneyMin?: string | number | null;
        /** Project amount bound in yuan (CNY), as a number or numeric string. Empty or null means no bound. */
        projectMoneyMax?: string | number | null;
        /** Attachment filter: -1 any, 0 without attachments, 1 with attachments. */
        fileFlag?: -1 | 0 | 1;
        /** Comma-separated company names matched fuzzily as buyer, supplier, or agency, when the role is unknown. */
        companyName?: string;
        /** Sort order: 1 relevance score descending, 2 publish time descending. */
        orderByType?: 1 | 2;
      };
      output: {
        /** Total number of matching records. */
        total?: number;
        /** Current page number. */
        pageId?: number;
        /** Records per page. */
        pageNumber?: number;
        /** Whether another page is available. */
        hasNext?: boolean;
        /** Effective search start time. */
        startDate?: string;
        /** Effective search end time. */
        endDate?: string;
        /** Search time in milliseconds, or null when not measured. */
        costTime?: string | null;
        /** Matched keywords that Baobiao highlights. */
        seKeyWords?: string | null;
        /** Records on this page. */
        data?: Array<{
          /** Project ID; pass it with publishTime to the detail actions. */
          id?: number;
          /** Notice title. May contain HTML highlight tags. */
          title?: string;
          /** Publish time, as yyyy-MM-dd HH:mm:ss. */
          publishTime?: string;
          /** Matched excerpt of the notice body, or null. May contain HTML highlight tags. */
          content?: string | null;
          /** Province-level division code. */
          proviceCode?: string | null;
          /** City-level division code. */
          cityCode?: string | null;
          /** County-level division code, or null. */
          countyCode?: string | null;
          /** 1 when the notice has attachments, otherwise 0. */
          hasFile?: number;
          /** Relevance score, or null. */
          score?: number | null;
          /** Display amount with unit, such as 16.8万. */
          projectMoney?: string | null;
          /** Notice class ID. */
          projectClassID?: string | null;
          /** Procurement type ID. */
          purchaseTypeID?: string | null;
          /** Industry codes. */
          industryCodeList?: Array<string>;
          /** Buyer names. */
          partANameList?: Array<string> | null;
          /** Supplier names. */
          partBNameList?: Array<string> | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Find tender and award notices by their official project or tender number. */
    "baobiao.search_projects_by_number": {
      input: {
        /**
         * Official project or tender number, such as HNXW-202605028.
         * @minLength 1
         * @pattern \S
         */
        projectNumber: string;
        /** Approximate publish time, as yyyy-MM-dd or yyyy-MM-dd HH:mm:ss, used to choose the search window. Defaults to the current date. */
        publishTime?: string;
      };
      output: {
        /** Matching notices. */
        projects: Array<{
          /** Project ID; pass it with publishTime to the detail actions. */
          id?: number;
          /** Notice title. May contain HTML highlight tags. */
          title?: string;
          /** Publish time, as yyyy-MM-dd HH:mm:ss. */
          publishTime?: string;
          /** Matched excerpt of the notice body, or null. May contain HTML highlight tags. */
          content?: string | null;
          /** Province-level division code. */
          proviceCode?: string | null;
          /** City-level division code. */
          cityCode?: string | null;
          /** County-level division code, or null. */
          countyCode?: string | null;
          /** 1 when the notice has attachments, otherwise 0. */
          hasFile?: number;
          /** Relevance score, or null. */
          score?: number | null;
          /** Display amount with unit, such as 16.8万. */
          projectMoney?: string | null;
          /** Notice class ID. */
          projectClassID?: string | null;
          /** Procurement type ID. */
          purchaseTypeID?: string | null;
          /** Industry codes. */
          industryCodeList?: Array<string>;
          /** Buyer names. */
          partANameList?: Array<string> | null;
          /** Supplier names. */
          partBNameList?: Array<string> | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search tender and award notices collected from specific publishing websites, such as a provincial government procurement portal. */
    "baobiao.search_projects_by_source_url": {
      input: {
        /**
         * Earliest publish time to search, as yyyy-MM-dd or yyyy-MM-dd HH:mm:ss.
         * @minLength 1
         */
        startDate: string;
        /**
         * Latest publish time to search, as yyyy-MM-dd or yyyy-MM-dd HH:mm:ss.
         * @minLength 1
         */
        endDate: string;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        pageId: number;
        /**
         * Records per page, at most 50. Set 0 to return only the total count.
         * @minimum 0
         * @maximum 50
         */
        pageNumber: number;
        /**
         * Publishing website URL; separate several with |.
         * @minLength 1
         * @pattern \S
         */
        collectURL: string;
        /** Comma-separated notice class IDs, or -100 for all: 1 open tender, 2 award result, 3 contract notice, 4 procurement intention or tender forecast, 5 clarification or change, 6 candidate announcement, 7 bid opening, 8 re-tender, 11 failed or cancelled tender, 18 result change, 26 auction or lease, 28 competitive negotiation, 29 competitive consultation, 30 single-source procurement, 31 other. */
        projectClassID?: string;
        /** Region filter using 6-digit Chinese administrative division codes (GB/T 2260), such as 420000 for Hubei and 420100 for Wuhan. Pass proviceCodeList ["0"] for the whole country. */
        areaCode?: {
          /** Province-level division codes. An empty list does not filter on this level. */
          proviceCodeList?: Array<string>;
          /** City-level division codes. An empty list does not filter on this level. */
          cityCodeList?: Array<string>;
          /** County-level division codes. An empty list does not filter on this level. */
          countyCodeList?: Array<string>;
        };
        /** Project amount bound in yuan (CNY), as a number or numeric string. Empty or null means no bound. */
        projectMoneyMin?: string | number | null;
        /** Project amount bound in yuan (CNY), as a number or numeric string. Empty or null means no bound. */
        projectMoneyMax?: string | number | null;
        /** Comma-separated company names matched fuzzily as buyer, supplier, or agency, when the role is unknown. */
        companyName?: string;
        /** Sort order: 1 relevance score descending, 2 publish time descending. */
        orderByType?: 1 | 2;
      };
      output: {
        /** Total number of matching records. */
        total?: number;
        /** Current page number. */
        pageId?: number;
        /** Records per page. */
        pageNumber?: number;
        /** Whether another page is available. */
        hasNext?: boolean;
        /** Effective search start time. */
        startDate?: string;
        /** Effective search end time. */
        endDate?: string;
        /** Search time in milliseconds, or null when not measured. */
        costTime?: string | null;
        /** Matched keywords that Baobiao highlights. */
        seKeyWords?: string | null;
        /** Records on this page. */
        data?: Array<{
          /** Project ID; pass it with publishTime to the detail actions. */
          id?: number;
          /** Notice title. May contain HTML highlight tags. */
          title?: string;
          /** Publish time, as yyyy-MM-dd HH:mm:ss. */
          publishTime?: string;
          /** Matched excerpt of the notice body, or null. May contain HTML highlight tags. */
          content?: string | null;
          /** Province-level division code. */
          proviceCode?: string | null;
          /** City-level division code. */
          cityCode?: string | null;
          /** County-level division code, or null. */
          countyCode?: string | null;
          /** 1 when the notice has attachments, otherwise 0. */
          hasFile?: number;
          /** Relevance score, or null. */
          score?: number | null;
          /** Display amount with unit, such as 16.8万. */
          projectMoney?: string | null;
          /** Notice class ID. */
          projectClassID?: string | null;
          /** Procurement type ID. */
          purchaseTypeID?: string | null;
          /** Industry codes. */
          industryCodeList?: Array<string>;
          /** Buyer names. */
          partANameList?: Array<string> | null;
          /** Supplier names. */
          partBNameList?: Array<string> | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search Chinese tender, award, contract, procurement-intention, and auction notices with plain-language filters such as a region name, category name, and company name. Prefer this over search_projects unless you need code-based filters. Results include parties, contacts, deadlines, and source links. */
    "baobiao.search_projects_simple": {
      input: {
        /**
         * Earliest publish time to search, as yyyy-MM-dd or yyyy-MM-dd HH:mm:ss.
         * @minLength 1
         */
        startDate: string;
        /**
         * Latest publish time to search, as yyyy-MM-dd or yyyy-MM-dd HH:mm:ss.
         * @minLength 1
         */
        endDate: string;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        pageId: number;
        /**
         * Records per page, at most 20. Set 0 to return only the total count.
         * @minimum 0
         * @maximum 20
         */
        pageNumber: number;
        /**
         * Search keywords, at most 300 characters. Separate terms that must all appear with spaces, and alternatives with |.
         * @maxLength 300
         */
        keyword?: string;
        /** Keywords to exclude, separated by |. */
        excludeKW?: string;
        /** Keywords at least one of which must appear, separated by |. Keep it short and do not repeat terms already in keyword. */
        inCludeKW?: string;
        /** Comma-separated notice categories in Chinese: 全部信息, 招标信息, 中标信息, 合同信息, 采购意向, 拍租信息. */
        className?: string;
        /** Region name in Chinese, such as 武汉 or 湖北省. */
        areaName?: string;
        /** Company taking part as buyer, supplier, or agency. */
        companyName?: string;
        /** Sort order: 相关性 by relevance, 发布时间 by publish time. */
        OrderByType?: "相关性" | "发布时间";
      };
      output: {
        /** Total number of matching records. */
        total?: number;
        /** Current page number. */
        pageId?: number;
        /** Records per page. */
        pageNumber?: number;
        /** Whether another page is available. */
        hasNext?: boolean;
        /** Effective search start time. */
        startDate?: string;
        /** Effective search end time. */
        endDate?: string;
        /** Search time in milliseconds, or null when not measured. */
        costTime?: string | null;
        /** Matched keywords that Baobiao highlights. */
        seKeyWords?: string | null;
        /** Records on this page. */
        data?: Array<{
          /** Project ID; pass it with publishTime to the detail actions. */
          id?: number;
          /** Notice category name. */
          newsTypeName?: string;
          /** Notice title. May contain HTML highlight tags. */
          title?: string;
          /** Publish time, as yyyy-MM-dd HH:mm:ss. */
          publishTime?: string;
          /** Matched excerpt of the notice body, or null. */
          content?: string | null;
          /** Region name. */
          areaName?: string | null;
          /** Relevance score, or null. */
          score?: number | null;
          /** Display amount with unit, such as 54.38万. */
          projectMoney?: string | null;
          /** Notice class name. */
          projectClass?: string | null;
          /** Procurement type name. */
          purchaseType?: string | null;
          /** Buyers. */
          partAInfo?: Array<{
            /** Company name. */
            name?: string;
            /** Contact phone numbers separated by 、. */
            contactPhone?: string | null;
            /** Contact emails separated by 、. */
            email?: string | null;
            [key: string]: unknown;
          }>;
          /** Suppliers. */
          partBInfo?: Array<{
            /** Company name. */
            name?: string;
            /** Contact phone numbers separated by 、. */
            contactPhone?: string | null;
            /** Contact emails separated by 、. */
            email?: string | null;
            [key: string]: unknown;
          }>;
          /** Procurement agencies. */
          agencyInfo?: Array<{
            /** Company name. */
            name?: string;
            /** Contact phone numbers separated by 、. */
            contactPhone?: string | null;
            /** Contact emails separated by 、. */
            email?: string | null;
            [key: string]: unknown;
          }>;
          /** Registration deadline. */
          siginUpStopDate?: string | null;
          /** Bid opening date. */
          bidStartDate?: string | null;
          /** Bid opening location. */
          bidStartAddress?: string | null;
          /** Original page the notice was collected from. */
          collectUrl?: string | null;
          /** Notice page on the Baobiao website. */
          sbkjBidUrl?: string | null;
          /** Buyer industries. */
          partAIndustryList?: Array<unknown>;
          /** Subject-matter industries. */
          subMatIndustryList?: Array<unknown>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Find buyers (tendering organizations) whose name contains the given text, with their historical tender count, total tender amount, and contact and supplier counts. */
    "baobiao.search_purchasing_units": {
      input: {
        /**
         * Company name or part of it.
         * @minLength 1
         * @pattern \S
         */
        companyName: string;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        pageNo?: number;
        /**
         * Records per page, from 1 to 50.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
      };
      output: {
        /** Total number of matching companies. */
        total?: number | string;
        /** Current page number. */
        pageNo?: number;
        /** Records per page. */
        pageSize?: number;
        /** Whether another page is available. */
        hasNext?: boolean;
        /** Companies on this page. */
        records?: Array<{
          /** Company name. */
          companyName?: string;
          /** Province and city, or null. */
          region?: string | null;
          /** Historical tender count. */
          bidCount?: number | string;
          /** Historical tender amount in yuan. */
          totalBidAmount?: number;
          /** Number of contacts. */
          contactCount?: number | string;
          /** Number of supplier relationships. */
          supplierCount?: number | string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Find suppliers (winning bidders) whose name contains the given text, with their historical award count, total award amount, and contact and customer counts. */
    "baobiao.search_winning_suppliers": {
      input: {
        /**
         * Company name or part of it.
         * @minLength 1
         * @pattern \S
         */
        companyName: string;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        pageNo?: number;
        /**
         * Records per page, from 1 to 50.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
      };
      output: {
        /** Total number of matching companies. */
        total?: number | string;
        /** Current page number. */
        pageNo?: number;
        /** Records per page. */
        pageSize?: number;
        /** Whether another page is available. */
        hasNext?: boolean;
        /** Companies on this page. */
        records?: Array<{
          /** Company name. */
          companyName?: string;
          /** Province and city, or null. */
          region?: string | null;
          /** Historical award count. */
          winCount?: number | string;
          /** Historical award amount in yuan. */
          totalWinAmount?: number;
          /** Number of contacts. */
          contactCount?: number | string;
          /** Number of customer relationships. */
          customerCount?: number | string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
