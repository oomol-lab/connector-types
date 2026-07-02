import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check legal text for hallucinated or inconsistent statute, clause, and case references using Yuan Dian. */
    "yuandian.check_legal_hallucinations": {
      input: {
        /**
         * The legal text to check for citation hallucinations.
         * @minLength 1
         */
        text: string;
        /**
         * Optional caller-supplied request identifier sent as X-Request-ID.
         * @minLength 1
         */
        requestId?: string;
      };
      output: {
        /** Regulation or clause references extracted from the submitted text. */
        regulations: Array<Record<string, unknown>>;
        /** Case references extracted from the submitted text. */
        cases: Array<Record<string, unknown>>;
        /** HTML text with Yuan Dian highlight spans for detected legal references. */
        highlightedText: string | null;
        /** Semantic comparison error text when Yuan Dian returned one. */
        semanticCompareError: string | null;
        /** The server-side chat model used by Yuan Dian. */
        chatModel: string | null;
        /** The Yuan Dian request identifier for this check. */
        requestId: string | null;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve Yuan Dian ordinary or authoritative case details by case ID or case number. */
    "yuandian.get_case_details": {
      input: {
        /**
         * Yuan Dian case identifier.
         * @minLength 1
         */
        caseId?: string;
        /**
         * Case number used when no caseId is supplied.
         * @minLength 1
         */
        caseNumber?: string;
        /** Case type filter. */
        type?: "ptal" | "qwal";
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response status when returned. */
        status: string | null;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The Yuan Dian response data field. */
        data: unknown;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Yuan Dian statutory clause detail by clause ID or by regulation name and clause number. */
    "yuandian.get_clause_detail": {
      input: {
        /**
         * Yuan Dian clause identifier.
         * @minLength 1
         */
        clauseId?: string;
        /**
         * Regulation name used when no clauseId is supplied.
         * @minLength 1
         */
        regulationName?: string;
        /**
         * Clause number or name, such as Article 100.
         * @minLength 1
         */
        clauseNumber?: string;
        /**
         * Reference date for locating the effective clause version.
         * @format date
         */
        referenceDate?: string;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response status when returned. */
        status: string | null;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The Yuan Dian response data field. */
        data: unknown;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve Yuan Dian enterprise aggregation summary for due-diligence and risk review. */
    "yuandian.get_enterprise_aggregation_summary": {
      input: {
        /**
         * Yuan Dian enterprise identifier.
         * @minLength 1
         */
        enterpriseId?: string;
        /**
         * Unified social credit code.
         * @minLength 1
         */
        creditCode?: string;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response status when returned. */
        status: string | null;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The Yuan Dian response data field. */
        data: unknown;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Yuan Dian enterprise annual report by enterprise ID or unified social credit code and year. */
    "yuandian.get_enterprise_annual_report": {
      input: {
        /**
         * Yuan Dian enterprise identifier.
         * @minLength 1
         */
        enterpriseId?: string;
        /**
         * Unified social credit code.
         * @minLength 1
         */
        creditCode?: string;
        /**
         * Annual report year, such as 2023.
         * @minLength 1
         */
        year: string;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response status when returned. */
        status: string | null;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The Yuan Dian response data field. */
        data: unknown;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve Yuan Dian enterprise base registration, shareholder, member, and branch information. */
    "yuandian.get_enterprise_base_info": {
      input: {
        /**
         * Yuan Dian enterprise identifier.
         * @minLength 1
         */
        enterpriseId?: string;
        /**
         * Unified social credit code.
         * @minLength 1
         */
        creditCode?: string;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response status when returned. */
        status: string | null;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The Yuan Dian response data field. */
        data: unknown;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Yuan Dian enterprise aggregate detail by enterprise ID or unified social credit code. */
    "yuandian.get_enterprise_detail": {
      input: {
        /**
         * Yuan Dian enterprise identifier.
         * @minLength 1
         */
        enterpriseId?: string;
        /**
         * Unified social credit code.
         * @minLength 1
         */
        creditCode?: string;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response status when returned. */
        status: string | null;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The Yuan Dian response data field. */
        data: unknown;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve Yuan Dian enterprise litigation statistics grouped by case, court, year, region, and party dimensions. */
    "yuandian.get_enterprise_litigation_statistics": {
      input: {
        /**
         * Yuan Dian enterprise identifier.
         * @minLength 1
         */
        enterpriseId?: string;
        /**
         * Unified social credit code.
         * @minLength 1
         */
        creditCode?: string;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response status when returned. */
        status: string | null;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The Yuan Dian response data field. */
        data: unknown;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Yuan Dian regulation detail by regulation ID or regulation name, optionally at a reference date. */
    "yuandian.get_regulation_detail": {
      input: {
        /**
         * Yuan Dian regulation identifier.
         * @minLength 1
         */
        regulationId?: string;
        /**
         * Regulation name used when no regulationId is supplied.
         * @minLength 1
         */
        regulationName?: string;
        /**
         * Reference date for locating the effective regulation version.
         * @format date
         */
        referenceDate?: string;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response status when returned. */
        status: string | null;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The Yuan Dian response data field. */
        data: unknown;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List paginated Yuan Dian enterprise changes, investments, guarantees, pledges, or frozen-equity records. */
    "yuandian.list_enterprise_business_records": {
      input: {
        /**
         * Yuan Dian enterprise identifier.
         * @minLength 1
         */
        enterpriseId?: string;
        /**
         * Unified social credit code.
         * @minLength 1
         */
        creditCode?: string;
        /** Business record type to list. */
        recordType: "change_info" | "out_invest" | "guaranty" | "pledge" | "frozen_equity";
        /**
         * Page number to request from Yuan Dian.
         * @minimum 1
         */
        pageNo?: number;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response status when returned. */
        status: string | null;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The upstream total record count when returned. */
        total: unknown;
        /** The upstream page number when returned. */
        pageNo: unknown;
        /** The upstream page size when returned. */
        pageSize: unknown;
        /** The normalized Yuan Dian result list. */
        results: Array<Record<string, unknown>>;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List paginated Yuan Dian punishment, abnormal-operation, serious-illegal, or tax records for one enterprise. */
    "yuandian.list_enterprise_compliance_records": {
      input: {
        /**
         * Yuan Dian enterprise identifier.
         * @minLength 1
         */
        enterpriseId?: string;
        /**
         * Unified social credit code.
         * @minLength 1
         */
        creditCode?: string;
        /** Compliance record type to list. */
        recordType: "punishment" | "abnormal_operation" | "serious_illegal" | "corporate_tax";
        /**
         * Page number to request from Yuan Dian.
         * @minimum 1
         */
        pageNo?: number;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response status when returned. */
        status: string | null;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The upstream total record count when returned. */
        total: unknown;
        /** The upstream page number when returned. */
        pageNo: unknown;
        /** The upstream page size when returned. */
        pageSize: unknown;
        /** The normalized Yuan Dian result list. */
        results: Array<Record<string, unknown>>;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List paginated Yuan Dian court session notices or court notices for one enterprise. */
    "yuandian.list_enterprise_court_notices": {
      input: {
        /**
         * Yuan Dian enterprise identifier.
         * @minLength 1
         */
        enterpriseId?: string;
        /**
         * Unified social credit code.
         * @minLength 1
         */
        creditCode?: string;
        /** Court notice type to list. */
        noticeType: "court_session_notice" | "court_notice";
        /**
         * Page number to request from Yuan Dian.
         * @minimum 1
         */
        pageNo?: number;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response status when returned. */
        status: string | null;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The upstream total record count when returned. */
        total: unknown;
        /** The upstream page number when returned. */
        pageNo: unknown;
        /** The upstream page size when returned. */
        pageSize: unknown;
        /** The normalized Yuan Dian result list. */
        results: Array<Record<string, unknown>>;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List paginated Yuan Dian executed-person or dishonest-execution records for one enterprise. */
    "yuandian.list_enterprise_execution_risks": {
      input: {
        /**
         * Yuan Dian enterprise identifier.
         * @minLength 1
         */
        enterpriseId?: string;
        /**
         * Unified social credit code.
         * @minLength 1
         */
        creditCode?: string;
        /** Execution risk record type to list. */
        recordType: "executed_person" | "dishonest_execution";
        /**
         * Page number to request from Yuan Dian.
         * @minimum 1
         */
        pageNo?: number;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response status when returned. */
        status: string | null;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The upstream total record count when returned. */
        total: unknown;
        /** The upstream page number when returned. */
        pageNo: unknown;
        /** The upstream page size when returned. */
        pageSize: unknown;
        /** The normalized Yuan Dian result list. */
        results: Array<Record<string, unknown>>;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List paginated Yuan Dian patents, trademarks, copyrights, software copyrights, or ICP filings for one enterprise. */
    "yuandian.list_enterprise_ip_assets": {
      input: {
        /**
         * Yuan Dian enterprise identifier.
         * @minLength 1
         */
        enterpriseId?: string;
        /**
         * Unified social credit code.
         * @minLength 1
         */
        creditCode?: string;
        /** Intellectual property asset type to list. */
        assetType: "patent" | "trademark" | "software_copyright" | "works_copyright" | "icp";
        /**
         * Page number to request from Yuan Dian.
         * @minimum 1
         */
        pageNo?: number;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response status when returned. */
        status: string | null;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The upstream total record count when returned. */
        total: unknown;
        /** The upstream page number when returned. */
        pageNo: unknown;
        /** The upstream page size when returned. */
        pageSize: unknown;
        /** The normalized Yuan Dian result list. */
        results: Array<Record<string, unknown>>;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List paginated Yuan Dian writ summaries related to one enterprise. */
    "yuandian.list_enterprise_writs": {
      input: {
        /**
         * Yuan Dian enterprise identifier.
         * @minLength 1
         */
        enterpriseId?: string;
        /**
         * Unified social credit code.
         * @minLength 1
         */
        creditCode?: string;
        /**
         * Page number to request from Yuan Dian.
         * @minimum 1
         */
        pageNo?: number;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response status when returned. */
        status: string | null;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The upstream total record count when returned. */
        total: unknown;
        /** The upstream page number when returned. */
        pageNo: unknown;
        /** The upstream page size when returned. */
        pageSize: unknown;
        /** The normalized Yuan Dian result list. */
        results: Array<Record<string, unknown>>;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Yuan Dian authoritative, typical, reference, bulletin, and guidance cases by metadata and full-text filters. */
    "yuandian.search_authoritative_cases": {
      input: {
        /**
         * Case number filter.
         * @minLength 1
         */
        caseNumber?: string;
        /**
         * Case title keyword filter.
         * @minLength 1
         */
        title?: string;
        /** Case causes to include. */
        causes?: Array<string>;
        /** Courts to include. */
        courts?: Array<string>;
        /** Authoritative case sources to include. */
        sources?: Array<string>;
        /** Province-level regions to include. */
        provinces?: Array<string>;
        /** Document types to include. */
        documentTypes?: Array<string>;
        /**
         * Case category filter.
         * @minLength 1
         */
        caseCategory?: string;
        /**
         * Earliest judgment date to include.
         * @format date
         */
        judgmentStartDate?: string;
        /**
         * Latest judgment date to include.
         * @format date
         */
        judgmentEndDate?: string;
        /**
         * Full-text keyword query.
         * @minLength 1
         */
        fullTextKeyword?: string;
        /** How Yuan Dian should combine case keyword terms. */
        searchMode?: "and" | "or";
        /**
         * Maximum number of keyword search results to return. Yuan Dian caps keyword search endpoints at 50.
         * @minimum 1
         * @maximum 50
         */
        topK?: number;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response status when returned. */
        status: string | null;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The upstream total hit count or hit-count object. */
        total: unknown;
        /** The normalized Yuan Dian result list. */
        results: Array<Record<string, unknown>>;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Yuan Dian statutory clauses by required content keyword plus optional regulation metadata filters. */
    "yuandian.search_clauses": {
      input: {
        /**
         * Clause content keyword.
         * @minLength 1
         */
        keyword: string;
        /** How Yuan Dian should combine regulation keyword terms. */
        searchMode?: "and" | "or" | "AND" | "OR";
        /**
         * Regulation name filter.
         * @minLength 1
         */
        regulationName?: string;
        /**
         * Primary legal effect level filter.
         * @minLength 1
         */
        effectLevel?: string;
        /**
         * Regulation validity status filter.
         * @minLength 1
         */
        validityStatus?: string;
        /**
         * Region filter, such as central, Beijing, or Shanghai.
         * @minLength 1
         */
        region?: string;
        /**
         * Issuing authority filter.
         * @minLength 1
         */
        issuingAuthority?: string;
        /**
         * Earliest publication date to include.
         * @format date
         */
        publishStartDate?: string;
        /**
         * Latest publication date to include.
         * @format date
         */
        publishEndDate?: string;
        /**
         * Earliest effective date to include.
         * @format date
         */
        effectiveStartDate?: string;
        /**
         * Latest effective date to include.
         * @format date
         */
        effectiveEndDate?: string;
        /**
         * Maximum number of keyword search results to return. Yuan Dian caps keyword search endpoints at 50.
         * @minimum 1
         * @maximum 50
         */
        topK?: number;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response status when returned. */
        status: string | null;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The normalized Yuan Dian result list. */
        results: Array<Record<string, unknown>>;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Yuan Dian enterprise profile candidates by enterprise name or stock short name. */
    "yuandian.search_enterprise_profiles": {
      input: {
        /**
         * Enterprise name or stock short name.
         * @minLength 1
         */
        name: string;
        /**
         * Maximum number of enterprise profile candidates to return.
         * @minimum 1
         * @maximum 50
         */
        count?: number;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response status when returned. */
        status: string | null;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The normalized Yuan Dian result list. */
        results: Array<Record<string, unknown>>;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Yuan Dian enterprises by name and return low-cost enterprise identifier candidates. */
    "yuandian.search_enterprises": {
      input: {
        /**
         * Enterprise name, stock short name, or search keyword.
         * @minLength 1
         */
        name: string;
        /**
         * Maximum number of enterprise search results to return. Yuan Dian caps this endpoint at 50.
         * @minimum 1
         * @maximum 50
         */
        topK?: number;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response status when returned. */
        status: string | null;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The normalized Yuan Dian result list. */
        results: Array<Record<string, unknown>>;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Yuan Dian ordinary adjudication cases by case metadata, full text, analysis text, and cited clauses. */
    "yuandian.search_ordinary_cases": {
      input: {
        /**
         * Case number filter.
         * @minLength 1
         */
        caseNumber?: string;
        /**
         * Case title keyword filter.
         * @minLength 1
         */
        title?: string;
        /** Case causes to include. */
        causes?: Array<string>;
        /** Courts to include. */
        courts?: Array<string>;
        /** Province-level regions to include. */
        provinces?: Array<string>;
        /** Document types to include. */
        documentTypes?: Array<string>;
        /**
         * Case category filter.
         * @minLength 1
         */
        caseCategory?: string;
        /**
         * Earliest judgment or close date to include.
         * @format date
         */
        judgmentStartDate?: string;
        /**
         * Latest judgment or close date to include.
         * @format date
         */
        judgmentEndDate?: string;
        /**
         * Full-text keyword query.
         * @minLength 1
         */
        fullTextKeyword?: string;
        /**
         * Analysis-process keyword query.
         * @minLength 1
         */
        analysisKeyword?: string;
        /** How Yuan Dian should combine case keyword terms. */
        searchMode?: "and" | "or";
        /** Cited statutory clauses to include. */
        citedClauses?: Array<string>;
        /** How Yuan Dian should combine case keyword terms. */
        citedClauseSearchMode?: "and" | "or";
        /**
         * Maximum number of keyword search results to return. Yuan Dian caps keyword search endpoints at 50.
         * @minimum 1
         * @maximum 50
         */
        topK?: number;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response status when returned. */
        status: string | null;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The upstream total hit count or hit-count object. */
        total: unknown;
        /** The normalized Yuan Dian result list. */
        results: Array<Record<string, unknown>>;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Yuan Dian regulations by keyword, name, validity, region, effect level, issuing authority, and dates. */
    "yuandian.search_regulations": {
      input: {
        /**
         * Regulation content keyword.
         * @minLength 1
         */
        keyword?: string;
        /** How Yuan Dian should combine regulation keyword terms. */
        searchMode?: "and" | "or" | "AND" | "OR";
        /**
         * Regulation name filter.
         * @minLength 1
         */
        regulationName?: string;
        /**
         * Regulation validity status filter, such as current or invalid.
         * @minLength 1
         */
        validityStatus?: string;
        /**
         * Region filter, such as central, Beijing, or Shanghai.
         * @minLength 1
         */
        region?: string;
        /**
         * Primary legal effect level filter.
         * @minLength 1
         */
        effectLevel?: string;
        /**
         * Issuing authority filter.
         * @minLength 1
         */
        issuingAuthority?: string;
        /**
         * Earliest publication date to include.
         * @format date
         */
        publishStartDate?: string;
        /**
         * Latest publication date to include.
         * @format date
         */
        publishEndDate?: string;
        /**
         * Earliest effective date to include.
         * @format date
         */
        effectiveStartDate?: string;
        /**
         * Latest effective date to include.
         * @format date
         */
        effectiveEndDate?: string;
        /**
         * Maximum number of keyword search results to return. Yuan Dian caps keyword search endpoints at 50.
         * @minimum 1
         * @maximum 50
         */
        topK?: number;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response status when returned. */
        status: string | null;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The normalized Yuan Dian result list. */
        results: Array<Record<string, unknown>>;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Run a natural-language semantic search over Yuan Dian cases with optional case metadata filters. */
    "yuandian.semantic_search_cases": {
      input: {
        /**
         * Natural-language case search query text.
         * @minLength 1
         */
        query: string;
        /** Whether Yuan Dian should rewrite the query before searching. */
        rewriteQuery?: boolean;
        /** Optional filters for Yuan Dian case semantic search. */
        filter?: {
          /**
           * Case category filter.
           * @minLength 1
           */
          caseCategory?: string;
          /** Case causes to include. */
          causes?: Array<string>;
          /** Document type codes to include. */
          documentTypeCodes?: Array<string>;
          /**
           * Earliest close or judgment date to include.
           * @format date
           */
          judgmentStartDate?: string;
          /**
           * Latest close or judgment date to include.
           * @format date
           */
          judgmentEndDate?: string;
          /** Whether to search only authoritative cases. */
          authoritativeOnly?: boolean;
          /** Courts to include. */
          courts?: Array<string>;
          /** Authoritative case sources to include. */
          sources?: Array<string>;
          /**
           * Court level filter, such as basic, intermediate, high, or supreme.
           * @minLength 1
           */
          courtLevel?: string;
          /**
           * Province-level region filter.
           * @minLength 1
           */
          province?: string;
          /**
           * City-level region filter.
           * @minLength 1
           */
          city?: string;
        };
        /**
         * Number of semantic search results to return.
         * @minimum 1
         */
        returnCount?: number;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The normalized Yuan Dian result list. */
        results: Array<Record<string, unknown>>;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Run a natural-language semantic search over Yuan Dian statutory clauses and return matched clauses. */
    "yuandian.semantic_search_regulations": {
      input: {
        /**
         * Natural-language legal query text.
         * @minLength 1
         */
        query: string;
        /** Whether Yuan Dian should rewrite the query before searching. */
        rewriteQuery?: boolean;
        /** Optional filters for Yuan Dian regulation semantic search. */
        filter?: {
          /** Regulation validity statuses to include. */
          validityStatuses?: Array<string>;
          /** Primary legal effect levels to include. */
          effectLevels?: Array<string>;
          /**
           * Earliest effective date to include.
           * @format date
           */
          effectiveStartDate?: string;
          /**
           * Latest effective date to include.
           * @format date
           */
          effectiveEndDate?: string;
        };
        /**
         * Number of semantic search results to return.
         * @minimum 1
         */
        returnCount?: number;
      };
      output: {
        /** The Yuan Dian business response code. */
        code: number;
        /** The Yuan Dian response message when returned. */
        message: string | null;
        /** The normalized Yuan Dian result list. */
        results: Array<Record<string, unknown>>;
        /** The raw Yuan Dian response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
