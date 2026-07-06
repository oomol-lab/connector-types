import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Freshteam employee by identifier. */
    "freshteam.get_employee": {
      input: {
        /**
         * Freshteam employee identifier.
         * @exclusiveMinimum 0
         */
        employeeId: number;
        /**
         * Freshteam include tokens for employee details.
         * @minItems 1
         */
        include?: Array<"awards" | "honors" | "certificates" | "licenses" | "background_verification_details" | "visas" | "government_documents" | "dependents" | "user_documents" | "bank_accounts" | "prev_employments" | "qualifications" | "compensation_details" | "bonuses" | "stocks" | "additional_teams" | "additional_managers" | "additional_hr_managers" | "languages" | "roles" | "team" | "branch" | "business_unit" | "sub_department" | "department" | "reporting_to" | "hr_incharge" | "level" | "shift" | "user_function" | "cost_center" | "user_title" | "user_suffix_name" | "user_honorary_suffix" | "user_professional_suffix" | "user_academic_suffix" | "retirement_status" | "citizenship_status" | "termination_category" | "time_off">;
      };
      output: {
        /** A Freshteam employee object. */
        employee: Record<string, unknown>;
      };
    };
    /** Get one Freshteam job posting by identifier. */
    "freshteam.get_job_posting": {
      input: {
        /**
         * Freshteam job posting identifier.
         * @exclusiveMinimum 0
         */
        jobPostingId: number;
      };
      output: {
        /** A Freshteam job posting object. */
        jobPosting: Record<string, unknown>;
      };
    };
    /** List Freshteam applicant fields for one job posting. */
    "freshteam.list_applicant_fields": {
      input: {
        /**
         * Freshteam job posting identifier.
         * @exclusiveMinimum 0
         */
        jobPostingId: number;
        /**
         * Page number for the Freshteam list request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Freshteam applicant fields returned for the current page. */
        applicantFields: Array<Record<string, unknown>>;
        /** Freshteam list pagination details. */
        pagination: {
          /**
           * Freshteam page requested.
           * @exclusiveMinimum 0
           */
          page: number;
          /** Whether another Freshteam page is available. */
          hasMore: boolean;
          /**
           * Next Freshteam page number when available.
           * @exclusiveMinimum 0
           */
          nextPage: number | null;
          /**
           * Total Freshteam pages reported by the response headers.
           * @exclusiveMinimum 0
           */
          totalPages: number | null;
          /**
           * Total Freshteam objects reported by the response headers.
           * @minimum 0
           */
          totalObjects: number | null;
          /** Freshteam response Link header, when returned. */
          link: string | null;
        };
      };
    };
    /** List Freshteam candidate source categories. */
    "freshteam.list_candidate_source_categories": {
      input: {
        /**
         * Page number for the Freshteam list request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Freshteam candidate source categories returned for the current page. */
        candidateSourceCategories: Array<Record<string, unknown>>;
        /** Freshteam list pagination details. */
        pagination: {
          /**
           * Freshteam page requested.
           * @exclusiveMinimum 0
           */
          page: number;
          /** Whether another Freshteam page is available. */
          hasMore: boolean;
          /**
           * Next Freshteam page number when available.
           * @exclusiveMinimum 0
           */
          nextPage: number | null;
          /**
           * Total Freshteam pages reported by the response headers.
           * @exclusiveMinimum 0
           */
          totalPages: number | null;
          /**
           * Total Freshteam objects reported by the response headers.
           * @minimum 0
           */
          totalObjects: number | null;
          /** Freshteam response Link header, when returned. */
          link: string | null;
        };
      };
    };
    /** List Freshteam candidate sources. */
    "freshteam.list_candidate_sources": {
      input: {
        /**
         * Page number for the Freshteam list request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Freshteam candidate sources returned for the current page. */
        candidateSources: Array<Record<string, unknown>>;
        /** Freshteam list pagination details. */
        pagination: {
          /**
           * Freshteam page requested.
           * @exclusiveMinimum 0
           */
          page: number;
          /** Whether another Freshteam page is available. */
          hasMore: boolean;
          /**
           * Next Freshteam page number when available.
           * @exclusiveMinimum 0
           */
          nextPage: number | null;
          /**
           * Total Freshteam pages reported by the response headers.
           * @exclusiveMinimum 0
           */
          totalPages: number | null;
          /**
           * Total Freshteam objects reported by the response headers.
           * @minimum 0
           */
          totalObjects: number | null;
          /** Freshteam response Link header, when returned. */
          link: string | null;
        };
      };
    };
    /** List Freshteam employee form fields. */
    "freshteam.list_employee_fields": {
      input: {
        /**
         * Page number for the Freshteam list request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Freshteam employee fields returned for the current page. */
        employeeFields: Array<Record<string, unknown>>;
        /** Freshteam list pagination details. */
        pagination: {
          /**
           * Freshteam page requested.
           * @exclusiveMinimum 0
           */
          page: number;
          /** Whether another Freshteam page is available. */
          hasMore: boolean;
          /**
           * Next Freshteam page number when available.
           * @exclusiveMinimum 0
           */
          nextPage: number | null;
          /**
           * Total Freshteam pages reported by the response headers.
           * @exclusiveMinimum 0
           */
          totalPages: number | null;
          /**
           * Total Freshteam objects reported by the response headers.
           * @minimum 0
           */
          totalObjects: number | null;
          /** Freshteam response Link header, when returned. */
          link: string | null;
        };
      };
    };
    /** List Freshteam employees with optional directory filters and pagination. */
    "freshteam.list_employees": {
      input: {
        /**
         * Page number for the Freshteam list request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** Freshteam employee status filter. */
        status?: "active" | "inactive";
        /**
         * First name used to filter Freshteam employees.
         * @minLength 1
         */
        firstName?: string;
        /**
         * Last name used to filter Freshteam employees.
         * @minLength 1
         */
        lastName?: string;
        /**
         * Personal email address used to filter Freshteam employees.
         * @format email
         */
        personalEmail?: string;
        /**
         * Official email address used to filter Freshteam employees.
         * @format email
         */
        officialEmail?: string;
        /**
         * Freshteam employee type filter.
         * @minLength 1
         */
        employeeType?: string;
        /**
         * Freshteam department identifier filter.
         * @exclusiveMinimum 0
         */
        departmentId?: number;
        /**
         * Freshteam business unit identifier filter.
         * @exclusiveMinimum 0
         */
        businessUnitId?: number;
        /**
         * Freshteam location identifiers used to filter employee results.
         * @minItems 1
         */
        locationIds?: Array<number>;
        /**
         * Freshteam employee identifier for the reporting manager filter.
         * @exclusiveMinimum 0
         */
        reportingManagerId?: number;
        /**
         * ISO 8601 timestamp used as Freshteam's updated_since filter.
         * @format date-time
         */
        updatedSince?: string;
        /** Freshteam employee field used for sorting results. */
        sort?: "first_name" | "last_name" | "employee_id";
        /** Freshteam sort direction. */
        sortType?: "asc" | "desc";
        /** Whether to return Freshteam draft employees. */
        draft?: boolean;
        /** Whether to return Freshteam terminated employees. */
        terminated?: boolean;
        /** Whether to return Freshteam deleted employees. */
        deleted?: boolean;
      };
      output: {
        /** Freshteam employees returned for the current page. */
        employees: Array<Record<string, unknown>>;
        /** Freshteam list pagination details. */
        pagination: {
          /**
           * Freshteam page requested.
           * @exclusiveMinimum 0
           */
          page: number;
          /** Whether another Freshteam page is available. */
          hasMore: boolean;
          /**
           * Next Freshteam page number when available.
           * @exclusiveMinimum 0
           */
          nextPage: number | null;
          /**
           * Total Freshteam pages reported by the response headers.
           * @exclusiveMinimum 0
           */
          totalPages: number | null;
          /**
           * Total Freshteam objects reported by the response headers.
           * @minimum 0
           */
          totalObjects: number | null;
          /** Freshteam response Link header, when returned. */
          link: string | null;
        };
      };
    };
    /** List Freshteam job posting fields. */
    "freshteam.list_job_posting_fields": {
      input: {
        /**
         * Page number for the Freshteam list request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Freshteam job posting fields returned for the current page. */
        jobPostingFields: Array<Record<string, unknown>>;
        /** Freshteam list pagination details. */
        pagination: {
          /**
           * Freshteam page requested.
           * @exclusiveMinimum 0
           */
          page: number;
          /** Whether another Freshteam page is available. */
          hasMore: boolean;
          /**
           * Next Freshteam page number when available.
           * @exclusiveMinimum 0
           */
          nextPage: number | null;
          /**
           * Total Freshteam pages reported by the response headers.
           * @exclusiveMinimum 0
           */
          totalPages: number | null;
          /**
           * Total Freshteam objects reported by the response headers.
           * @minimum 0
           */
          totalObjects: number | null;
          /** Freshteam response Link header, when returned. */
          link: string | null;
        };
      };
    };
    /** List Freshteam job postings with optional recruiting filters. */
    "freshteam.list_job_postings": {
      input: {
        /**
         * Page number for the Freshteam list request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** Freshteam job posting status filter. */
        status?: "draft" | "published" | "internal" | "private" | "on_hold" | "closed";
        /**
         * Freshteam job posting title filter.
         * @minLength 1
         */
        title?: string;
        /**
         * Freshteam job posting type filter.
         * @minLength 1
         */
        type?: string;
        /**
         * Freshteam department identifier filter.
         * @exclusiveMinimum 0
         */
        departmentId?: number;
        /**
         * Freshteam location identifier filter.
         * @exclusiveMinimum 0
         */
        locationId?: number;
        /** Whether to filter Freshteam job postings by remote status. */
        remote?: boolean;
        /**
         * Freshteam job posting city filter.
         * @minLength 1
         */
        locationCity?: string;
        /**
         * Freshteam job posting country code filter.
         * @minLength 1
         */
        locationCountry?: string;
      };
      output: {
        /** Freshteam job postings returned for the current page. */
        jobPostings: Array<Record<string, unknown>>;
        /** Freshteam list pagination details. */
        pagination: {
          /**
           * Freshteam page requested.
           * @exclusiveMinimum 0
           */
          page: number;
          /** Whether another Freshteam page is available. */
          hasMore: boolean;
          /**
           * Next Freshteam page number when available.
           * @exclusiveMinimum 0
           */
          nextPage: number | null;
          /**
           * Total Freshteam pages reported by the response headers.
           * @exclusiveMinimum 0
           */
          totalPages: number | null;
          /**
           * Total Freshteam objects reported by the response headers.
           * @minimum 0
           */
          totalObjects: number | null;
          /** Freshteam response Link header, when returned. */
          link: string | null;
        };
      };
    };
  }
}
