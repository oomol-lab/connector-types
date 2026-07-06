import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Gem candidate by ID. */
    "gem.get_candidate": {
      input: {
        /**
         * The Gem candidate ID.
         * @minLength 1
         */
        candidate_id: string;
      };
      output: {
        /** A Gem object returned by the API. */
        candidate: Record<string, unknown>;
      };
    };
    /** Get one Gem project by ID. */
    "gem.get_project": {
      input: {
        /**
         * The Gem project ID.
         * @minLength 1
         */
        project_id: string;
      };
      output: {
        /** A Gem object returned by the API. */
        project: Record<string, unknown>;
      };
    };
    /** Get one Gem sequence by ID. */
    "gem.get_sequence": {
      input: {
        /**
         * The Gem sequence ID.
         * @minLength 1
         */
        sequence_id: string;
      };
      output: {
        /** A Gem object returned by the API. */
        sequence: Record<string, unknown>;
      };
    };
    /** List candidates in Gem CRM. */
    "gem.list_candidates": {
      input: {
        /**
         * Only return records created after this Unix timestamp in seconds.
         * @minimum 1
         */
        created_after?: number;
        /**
         * Only return records created before this Unix timestamp in seconds.
         * @minimum 1
         */
        created_before?: number;
        /** The sort direction for Gem results. */
        sort?: "asc" | "desc";
        /**
         * Only return candidates added to Gem by this user ID.
         * @minLength 1
         */
        created_by?: string;
        /**
         * Filter records by email address.
         * @maxLength 255
         * @format email
         */
        email?: string;
        /**
         * Only return candidates with this LinkedIn handle.
         * @minLength 1
         * @maxLength 255
         */
        linked_in_handle?: string;
        /**
         * Only return candidates updated after this Unix timestamp in seconds.
         * @minimum 1
         */
        updated_after?: number;
        /**
         * Only return candidates updated before this Unix timestamp in seconds.
         * @minimum 1
         */
        updated_before?: number;
        /**
         * Candidate IDs to include. Gem accepts at most 20 IDs.
         * @minItems 1
         * @maxItems 20
         */
        candidate_ids?: Array<string>;
        /**
         * The 1-indexed page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
      };
      output: {
        /** Gem candidates returned for the requested page. */
        candidates: Array<Record<string, unknown>>;
        /** Pagination metadata parsed from the Gem X-Pagination response header. */
        pagination?: {
          /** Total number of records across all pages. */
          total?: number;
          /** Total number of pages. */
          total_pages?: number;
          /** First available page. */
          first_page?: number;
          /** Last available page. */
          last_page?: number;
          /** Current page number. */
          page?: number;
          /** Previous page number, when present. */
          previous_page?: number | null;
          /** Next page number, when present. */
          next_page?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** List custom fields configured in Gem. */
    "gem.list_custom_fields": {
      input: {
        /**
         * Only return records created after this Unix timestamp in seconds.
         * @minimum 1
         */
        created_after?: number;
        /**
         * Only return records created before this Unix timestamp in seconds.
         * @minimum 1
         */
        created_before?: number;
        /** The sort direction for Gem results. */
        sort?: "asc" | "desc";
        /**
         * Only return project-scoped fields for this Gem project ID.
         * @minLength 1
         */
        project_id?: string;
        /** The custom field scope to return. */
        scope?: "team" | "project";
        /** Whether to return hidden custom fields. */
        is_hidden?: boolean;
        /**
         * Filter custom fields by name.
         * @minLength 1
         */
        name?: string;
        /**
         * The 1-indexed page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
      };
      output: {
        /** Gem custom fields returned for the requested page. */
        custom_fields: Array<Record<string, unknown>>;
        /** Pagination metadata parsed from the Gem X-Pagination response header. */
        pagination?: {
          /** Total number of records across all pages. */
          total?: number;
          /** Total number of pages. */
          total_pages?: number;
          /** First available page. */
          first_page?: number;
          /** Last available page. */
          last_page?: number;
          /** Current page number. */
          page?: number;
          /** Previous page number, when present. */
          previous_page?: number | null;
          /** Next page number, when present. */
          next_page?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** List candidate memberships in a Gem project. */
    "gem.list_project_candidates": {
      input: {
        /**
         * The Gem project ID.
         * @minLength 1
         */
        project_id: string;
        /**
         * Only return memberships added after this Unix timestamp in seconds.
         * @minimum 1
         */
        added_after?: number;
        /**
         * Only return memberships added before this Unix timestamp in seconds.
         * @minimum 1
         */
        added_before?: number;
        /** The sort direction for Gem results. */
        sort?: "asc" | "desc";
        /**
         * The 1-indexed page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
      };
      output: {
        /** Gem project candidate memberships returned for the requested page. */
        project_candidates: Array<Record<string, unknown>>;
        /** Pagination metadata parsed from the Gem X-Pagination response header. */
        pagination?: {
          /** Total number of records across all pages. */
          total?: number;
          /** Total number of pages. */
          total_pages?: number;
          /** First available page. */
          first_page?: number;
          /** Last available page. */
          last_page?: number;
          /** Current page number. */
          page?: number;
          /** Previous page number, when present. */
          previous_page?: number | null;
          /** Next page number, when present. */
          next_page?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** List projects in Gem CRM. */
    "gem.list_projects": {
      input: {
        /**
         * Only return records created after this Unix timestamp in seconds.
         * @minimum 1
         */
        created_after?: number;
        /**
         * Only return records created before this Unix timestamp in seconds.
         * @minimum 1
         */
        created_before?: number;
        /** The sort direction for Gem results. */
        sort?: "asc" | "desc";
        /**
         * Only return projects owned by this user ID.
         * @minLength 1
         */
        user_id?: string;
        /**
         * Only return projects this user ID can read.
         * @minLength 1
         */
        readable_by?: string;
        /**
         * Only return projects this user ID can update.
         * @minLength 1
         */
        writable_by?: string;
        /** Whether to return archived projects. */
        is_archived?: boolean;
        /**
         * The 1-indexed page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
      };
      output: {
        /** Gem projects returned for the requested page. */
        projects: Array<Record<string, unknown>>;
        /** Pagination metadata parsed from the Gem X-Pagination response header. */
        pagination?: {
          /** Total number of records across all pages. */
          total?: number;
          /** Total number of pages. */
          total_pages?: number;
          /** First available page. */
          first_page?: number;
          /** Last available page. */
          last_page?: number;
          /** Current page number. */
          page?: number;
          /** Previous page number, when present. */
          previous_page?: number | null;
          /** Next page number, when present. */
          next_page?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** List outreach sequences in Gem. */
    "gem.list_sequences": {
      input: {
        /**
         * Only return records created after this Unix timestamp in seconds.
         * @minimum 1
         */
        created_after?: number;
        /**
         * Only return records created before this Unix timestamp in seconds.
         * @minimum 1
         */
        created_before?: number;
        /** The sort direction for Gem results. */
        sort?: "asc" | "desc";
        /**
         * Only return sequences owned by this user ID.
         * @minLength 1
         */
        user_id?: string;
        /**
         * The 1-indexed page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
      };
      output: {
        /** Gem sequences returned for the requested page. */
        sequences: Array<Record<string, unknown>>;
        /** Pagination metadata parsed from the Gem X-Pagination response header. */
        pagination?: {
          /** Total number of records across all pages. */
          total?: number;
          /** Total number of pages. */
          total_pages?: number;
          /** First available page. */
          first_page?: number;
          /** Last available page. */
          last_page?: number;
          /** Current page number. */
          page?: number;
          /** Previous page number, when present. */
          previous_page?: number | null;
          /** Next page number, when present. */
          next_page?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Gem users visible to the current API key. */
    "gem.list_users": {
      input: {
        /**
         * Filter records by email address.
         * @maxLength 255
         * @format email
         */
        email?: string;
        /**
         * The 1-indexed page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
      };
      output: {
        /** Gem users returned for the requested page. */
        users: Array<Record<string, unknown>>;
        /** Pagination metadata parsed from the Gem X-Pagination response header. */
        pagination?: {
          /** Total number of records across all pages. */
          total?: number;
          /** Total number of pages. */
          total_pages?: number;
          /** First available page. */
          first_page?: number;
          /** Last available page. */
          last_page?: number;
          /** Current page number. */
          page?: number;
          /** Previous page number, when present. */
          previous_page?: number | null;
          /** Next page number, when present. */
          next_page?: number | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
