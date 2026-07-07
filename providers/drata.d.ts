import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get company metadata for the connected Drata account. */
    "drata.get_company": {
      input: Record<string, never>;
      output: {
        /** The Drata company metadata for the connected account. */
        company: {
          /** The Drata account ID for the company. */
          accountId?: string;
          /** The company's domain. */
          domain?: string;
          /** The company's common name. */
          name?: string;
          /** The company's full legal name. */
          legalName?: string | null;
          /** The company description. */
          description?: string | null;
          /** The company avatar URL. */
          logoUrl?: string | null;
          /** The account creation timestamp. */
          createdAt?: string;
          /** The account update timestamp. */
          updatedAt?: string;
          [key: string]: unknown;
        };
        /** The raw Drata object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Drata control by ID or code-prefixed identifier. */
    "drata.get_control": {
      input: {
        /** The Drata workspace ID. */
        workspaceId: number;
        /** The control ID or a code-prefixed identifier. */
        controlId: number | string;
        /**
         * The Drata cursor returned in pagination.cursor by a previous list response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of results to return.
         * @minimum 1
         * @maximum 500
         */
        size?: number;
        /**
         * The Drata field name to sort by.
         * @minLength 1
         */
        sort?: string;
        /** The direction to sort returned data. */
        sortDir?: "asc" | "desc";
        /** Related Drata subcollections and sub-objects to expand. */
        expand?: Array<string>;
      };
      output: {
        /** The raw Drata object returned by the API. */
        control: Record<string, unknown>;
        /** The raw Drata object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Drata personnel record by ID or email-prefixed identifier. */
    "drata.get_personnel": {
      input: {
        /** The personnel ID or an email-prefixed identifier. */
        personnelId: number | string;
        /** Related Drata subcollections and sub-objects to expand. */
        expand?: Array<string>;
      };
      output: {
        /** The raw Drata object returned by the API. */
        personnel: Record<string, unknown>;
        /** The raw Drata object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Drata vendor by ID. */
    "drata.get_vendor": {
      input: {
        /** The Drata vendor ID. */
        vendorId: number;
        /** Related Drata subcollections and sub-objects to expand. */
        expand?: Array<string>;
      };
      output: {
        /** The raw Drata object returned by the API. */
        vendor: Record<string, unknown>;
        /** The raw Drata object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List controls in a Drata workspace. */
    "drata.list_controls": {
      input: {
        /** The Drata workspace ID. */
        workspaceId: number;
        /**
         * The Drata cursor returned in pagination.cursor by a previous list response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of results to return.
         * @minimum 1
         * @maximum 500
         */
        size?: number;
        /**
         * The Drata field name to sort by.
         * @minLength 1
         */
        sort?: string;
        /** The direction to sort returned data. */
        sortDir?: "asc" | "desc";
        /** Whether Drata should include totalCount on the first page of results. */
        includeTotalCount?: boolean;
        /** Related Drata subcollections and sub-objects to expand. */
        expand?: Array<string>;
        /** Whether to filter controls by monitor presence. */
        isMonitored?: boolean;
        /** Whether to filter controls by readiness. */
        isReady?: boolean;
        /** Whether to filter controls by evidence presence. */
        hasEvidence?: boolean;
        /** Whether to filter controls by policy presence. */
        hasPolicy?: boolean;
        /** Whether to filter controls with at least one passing test. */
        hasPassingTest?: boolean;
        /**
         * The task management ticket status to filter controls by.
         * @minLength 1
         */
        ticketStatus?: string;
        /** The policy ID to filter controls by. */
        policyId?: number;
        /** Whether to filter controls by enabled status. */
        isEnabled?: boolean;
        /** Whether to filter controls by archived status. */
        isArchived?: boolean;
      };
      output: {
        /** The Drata records returned for the current page. */
        data: Array<Record<string, unknown>>;
        /** Drata cursor pagination metadata. */
        pagination: {
          /** The cursor to pass to the next list request, when present. */
          cursor?: string | null;
          /** The total count returned when includeTotalCount is used. */
          totalCount?: number | null;
          [key: string]: unknown;
        };
        /** The raw Drata list response returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Drata personnel visible to the current API key. */
    "drata.list_personnel": {
      input: {
        /**
         * The Drata cursor returned in pagination.cursor by a previous list response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of results to return.
         * @minimum 1
         * @maximum 500
         */
        size?: number;
        /**
         * The Drata field name to sort by.
         * @minLength 1
         */
        sort?: string;
        /** The direction to sort returned data. */
        sortDir?: "asc" | "desc";
        /** Whether Drata should include totalCount on the first page of results. */
        includeTotalCount?: boolean;
        /** Related Drata subcollections and sub-objects to expand. */
        expand?: Array<string>;
        /** Employment statuses to filter personnel by. */
        employmentStatus?: Array<string>;
        /** Overall compliance statuses to filter personnel by. */
        complianceStatus?: Array<string>;
      };
      output: {
        /** The Drata records returned for the current page. */
        data: Array<Record<string, unknown>>;
        /** Drata cursor pagination metadata. */
        pagination: {
          /** The cursor to pass to the next list request, when present. */
          cursor?: string | null;
          /** The total count returned when includeTotalCount is used. */
          totalCount?: number | null;
          [key: string]: unknown;
        };
        /** The raw Drata list response returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List vendors in Drata. */
    "drata.list_vendors": {
      input: {
        /**
         * The Drata cursor returned in pagination.cursor by a previous list response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of results to return.
         * @minimum 1
         * @maximum 500
         */
        size?: number;
        /**
         * The Drata field name to sort by.
         * @minLength 1
         */
        sort?: string;
        /** The direction to sort returned data. */
        sortDir?: "asc" | "desc";
        /** Whether Drata should include totalCount on the first page of results. */
        includeTotalCount?: boolean;
        /** Related Drata subcollections and sub-objects to expand. */
        expand?: Array<string>;
        /**
         * The Drata vendor category to filter by.
         * @minLength 1
         */
        category?: string;
        /**
         * The overall vendor impact level to filter by.
         * @minLength 1
         */
        impactLevel?: string;
        /**
         * The vendor renewal date to filter by.
         * @format date
         */
        renewalDate?: string;
        /**
         * The vendor renewal schedule type to filter by.
         * @minLength 1
         */
        renewalScheduleType?: string;
        /**
         * The vendor risk level to filter by.
         * @minLength 1
         */
        risk?: string;
        /**
         * The vendor status to filter by.
         * @minLength 1
         */
        status?: string;
        /**
         * The vendor type to filter by.
         * @minLength 1
         */
        type?: string;
      };
      output: {
        /** The Drata records returned for the current page. */
        data: Array<Record<string, unknown>>;
        /** Drata cursor pagination metadata. */
        pagination: {
          /** The cursor to pass to the next list request, when present. */
          cursor?: string | null;
          /** The total count returned when includeTotalCount is used. */
          totalCount?: number | null;
          [key: string]: unknown;
        };
        /** The raw Drata list response returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Drata workspaces visible to the current API key. */
    "drata.list_workspaces": {
      input: {
        /**
         * The Drata cursor returned in pagination.cursor by a previous list response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of results to return.
         * @minimum 1
         * @maximum 500
         */
        size?: number;
        /**
         * The Drata field name to sort by.
         * @minLength 1
         */
        sort?: string;
        /** The direction to sort returned data. */
        sortDir?: "asc" | "desc";
        /** Whether Drata should include totalCount on the first page of results. */
        includeTotalCount?: boolean;
        /** Related Drata subcollections and sub-objects to expand. */
        expand?: Array<string>;
      };
      output: {
        /** The Drata records returned for the current page. */
        data: Array<Record<string, unknown>>;
        /** Drata cursor pagination metadata. */
        pagination: {
          /** The cursor to pass to the next list request, when present. */
          cursor?: string | null;
          /** The total count returned when includeTotalCount is used. */
          totalCount?: number | null;
          [key: string]: unknown;
        };
        /** The raw Drata list response returned by the API. */
        raw: Record<string, unknown>;
      };
    };
  }
}
