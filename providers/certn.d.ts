import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Certn background-check case by UUID. */
    "certn.get_case": {
      input: {
        /**
         * Certn UUID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** Certn case object. */
        case: Record<string, unknown> | null;
      };
    };
    /** Retrieve one Certn group by UUID. */
    "certn.get_group": {
      input: {
        /**
         * Certn UUID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** Certn group object. */
        group: Record<string, unknown> | null;
      };
    };
    /** Retrieve one Certn Client Portal user by UUID. */
    "certn.get_user": {
      input: {
        /**
         * Certn UUID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** Certn user object. */
        user: Record<string, unknown> | null;
      };
    };
    /** List Certn background-check cases with pagination and optional filters. */
    "certn.list_cases": {
      input: {
        /**
         * One-based page number to request from Certn.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results to return per page. Certn defaults to 10 and allows at most 100.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Filter cases by applicant email address.
         * @format email
         */
        emailAddress?: string;
        /**
         * Filter cases by one or more Certn group UUIDs.
         * @minItems 1
         */
        groupIds?: Array<string>;
        /**
         * Filter cases by one or more Certn overall status values.
         * @minItems 1
         */
        overallStatuses?: Array<string>;
        /**
         * Filter cases by one or more Certn tag values.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * Filter cases by one or more Certn versioned check type identifiers.
         * @minItems 1
         */
        checkTypes?: Array<string>;
      };
      output: {
        /** Certn cases returned by the API. */
        cases: Array<Record<string, unknown>>;
        /** Certn pagination metadata. */
        pagination: {
          /** Total number of results. */
          result_count?: number;
          /** Total number of pages. */
          page_count?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Current page number. */
          current_page?: number;
          /** Next page number, when available. */
          next_page?: number | null;
          /** Previous page number, when available. */
          previous_page?: number | null;
          /** Total number of results for legacy paginated endpoints. */
          count?: number;
          /** Next page URL, when available. */
          next?: string | null;
          /** Previous page URL, when available. */
          previous?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List historical Certn events with optional incremental cursor filtering. */
    "certn.list_events": {
      input: {
        /**
         * One-based page number to request from Certn.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Certn UUID.
         * @format uuid
         */
        lastProcessedEventId?: string;
      };
      output: {
        /** Certn events returned by the API. */
        events: Array<Record<string, unknown>>;
        /** Certn pagination metadata. */
        pagination: {
          /** Total number of results. */
          result_count?: number;
          /** Total number of pages. */
          page_count?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Current page number. */
          current_page?: number;
          /** Next page number, when available. */
          next_page?: number | null;
          /** Previous page number, when available. */
          previous_page?: number | null;
          /** Total number of results for legacy paginated endpoints. */
          count?: number;
          /** Next page URL, when available. */
          next?: string | null;
          /** Previous page URL, when available. */
          previous?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Certn groups with pagination and optional filters. */
    "certn.list_groups": {
      input: {
        /**
         * One-based page number to request from Certn.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results to return per page. Certn defaults to 10 and allows at most 100.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Certn UUID.
         * @format uuid
         */
        id?: string;
        /** Whether to return active or inactive groups. */
        isActive?: boolean;
        /**
         * Filter groups by name.
         * @minLength 1
         */
        name?: string;
        /**
         * Certn UUID.
         * @format uuid
         */
        parentId?: string;
      };
      output: {
        /** Certn groups returned by the API. */
        groups: Array<Record<string, unknown>>;
        /** Certn pagination metadata. */
        pagination: {
          /** Total number of results. */
          result_count?: number;
          /** Total number of pages. */
          page_count?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Current page number. */
          current_page?: number;
          /** Next page number, when available. */
          next_page?: number | null;
          /** Previous page number, when available. */
          previous_page?: number | null;
          /** Total number of results for legacy paginated endpoints. */
          count?: number;
          /** Next page URL, when available. */
          next?: string | null;
          /** Previous page URL, when available. */
          previous?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Certn check packages with pagination and optional filters. */
    "certn.list_packages": {
      input: {
        /**
         * One-based page number to request from Certn.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results to return per page. Certn defaults to 10 and allows at most 100.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Whether to return active or inactive packages. */
        isActive?: boolean;
        /**
         * Filter packages by one or more permissible purpose values.
         * @minItems 1
         */
        permissiblePurposes?: Array<string>;
      };
      output: {
        /** Certn packages returned by the API. */
        packages: Array<Record<string, unknown>>;
        /** Certn pagination metadata. */
        pagination: {
          /** Total number of results. */
          result_count?: number;
          /** Total number of pages. */
          page_count?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Current page number. */
          current_page?: number;
          /** Next page number, when available. */
          next_page?: number | null;
          /** Previous page number, when available. */
          previous_page?: number | null;
          /** Total number of results for legacy paginated endpoints. */
          count?: number;
          /** Next page URL, when available. */
          next?: string | null;
          /** Previous page URL, when available. */
          previous?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Certn questionnaire templates with pagination. */
    "certn.list_questionnaires": {
      input: {
        /**
         * One-based page number to request from Certn.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results to return per page. Certn defaults to 10 and allows at most 100.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Certn questionnaire templates returned by the API. */
        questionnaires: Array<Record<string, unknown>>;
        /** Certn pagination metadata. */
        pagination: {
          /** Total number of results. */
          result_count?: number;
          /** Total number of pages. */
          page_count?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Current page number. */
          current_page?: number;
          /** Next page number, when available. */
          next_page?: number | null;
          /** Previous page number, when available. */
          previous_page?: number | null;
          /** Total number of results for legacy paginated endpoints. */
          count?: number;
          /** Next page URL, when available. */
          next?: string | null;
          /** Previous page URL, when available. */
          previous?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Certn tags with pagination and optional ID filtering. */
    "certn.list_tags": {
      input: {
        /**
         * One-based page number to request from Certn.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results to return per page. Certn defaults to 10 and allows at most 100.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Certn UUID.
         * @format uuid
         */
        id?: string;
        /** Whether to return active or inactive tags. */
        isActive?: boolean;
        /**
         * Filter tags by name.
         * @minLength 1
         */
        name?: string;
      };
      output: {
        /** Certn tags returned by the API. */
        tags: Array<Record<string, unknown>>;
        /** Certn pagination metadata. */
        pagination: {
          /** Total number of results. */
          result_count?: number;
          /** Total number of pages. */
          page_count?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Current page number. */
          current_page?: number;
          /** Next page number, when available. */
          next_page?: number | null;
          /** Previous page number, when available. */
          previous_page?: number | null;
          /** Total number of results for legacy paginated endpoints. */
          count?: number;
          /** Next page URL, when available. */
          next?: string | null;
          /** Previous page URL, when available. */
          previous?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Certn Client Portal users with pagination and optional filters. */
    "certn.list_users": {
      input: {
        /**
         * One-based page number to request from Certn.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results to return per page. Certn defaults to 10 and allows at most 100.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Filter users by email address.
         * @format email
         */
        email?: string;
        /**
         * Filter users by full name.
         * @minLength 1
         */
        fullName?: string;
        /**
         * Filter users by one or more Certn group UUIDs.
         * @minItems 1
         */
        groupIds?: Array<string>;
        /**
         * Certn UUID.
         * @format uuid
         */
        id?: string;
        /** Whether to return active or inactive users. */
        isActive?: boolean;
        /**
         * Filter users by one or more Certn portal roles.
         * @minItems 1
         */
        roles?: Array<string>;
      };
      output: {
        /** Certn users returned by the API. */
        users: Array<Record<string, unknown>>;
        /** Certn pagination metadata. */
        pagination: {
          /** Total number of results. */
          result_count?: number;
          /** Total number of pages. */
          page_count?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Current page number. */
          current_page?: number;
          /** Next page number, when available. */
          next_page?: number | null;
          /** Previous page number, when available. */
          previous_page?: number | null;
          /** Total number of results for legacy paginated endpoints. */
          count?: number;
          /** Next page URL, when available. */
          next?: string | null;
          /** Previous page URL, when available. */
          previous?: string | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
