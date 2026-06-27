import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Greenhouse candidate activity feed note using an explicit On-Behalf-Of audit user. */
    "greenhouse.add_candidate_note": {
      input: {
        /** The Greenhouse candidate ID that receives the note. */
        candidateId: number | string;
        /** The Greenhouse user ID supplied in the required On-Behalf-Of audit header. */
        onBehalfOfUserId: number | string;
        /**
         * The note body to add to the candidate activity feed.
         * @minLength 1
         */
        body: string;
        /** The Greenhouse note visibility. */
        visibility: "admin_only" | "private" | "public";
      };
      output: {
        /** A Greenhouse candidate activity feed note. */
        note: {
          /** Greenhouse note ID. */
          id?: number;
          /** Greenhouse note body. */
          body?: string;
          /** Greenhouse note visibility. */
          visibility?: string;
          /** Timestamp when the note was created. */
          created_at?: string;
          [key: string]: unknown;
        };
        /** Raw Greenhouse candidate note response. */
        raw: unknown;
      };
    };
    /** Retrieve one Greenhouse application by ID. */
    "greenhouse.get_application": {
      input: {
        /** The application ID. */
        id: number | string;
      };
      output: {
        /** A Greenhouse application record. */
        application: {
          /** Greenhouse application ID. */
          id?: number;
          /** Greenhouse candidate ID associated with this application. */
          candidate_id?: number;
          /** Timestamp when the candidate applied, if present. */
          applied_at?: string | null;
          /** Timestamp when the application was rejected, if present. */
          rejected_at?: string | null;
          /** Application status. */
          status?: string;
          [key: string]: unknown;
        };
        /** Raw Greenhouse application response. */
        raw: unknown;
      };
    };
    /** Retrieve one Greenhouse candidate by ID. */
    "greenhouse.get_candidate": {
      input: {
        /** The candidate ID. */
        id: number | string;
      };
      output: {
        /** A Greenhouse candidate record. */
        candidate: {
          /** Greenhouse candidate ID. */
          id?: number;
          /** Candidate first name. */
          first_name?: string | null;
          /** Candidate last name. */
          last_name?: string | null;
          /** Candidate company. */
          company?: string | null;
          /** Candidate title. */
          title?: string | null;
          /** Timestamp when the candidate was created. */
          created_at?: string;
          /** Timestamp when the candidate was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** Raw Greenhouse candidate response. */
        raw: unknown;
      };
    };
    /** Retrieve one Greenhouse job by ID. */
    "greenhouse.get_job": {
      input: {
        /** The job ID. */
        id: number | string;
      };
      output: {
        /** A Greenhouse job record. */
        job: {
          /** Greenhouse job ID. */
          id?: number;
          /** Job name. */
          name?: string;
          /** Job status. */
          status?: string;
          /** Job requisition ID, if present. */
          requisition_id?: string | null;
          /** Timestamp when the job was created. */
          created_at?: string;
          /** Timestamp when the job was opened, if present. */
          opened_at?: string | null;
          /** Timestamp when the job was closed, if present. */
          closed_at?: string | null;
          [key: string]: unknown;
        };
        /** Raw Greenhouse job response. */
        raw: unknown;
      };
    };
    /** List Greenhouse applications with optional candidate, job, and status filters. */
    "greenhouse.list_applications": {
      input: {
        /**
         * Maximum number of records to return in one response.
         * @minimum 1
         * @maximum 500
         */
        perPage?: number;
        /**
         * Greenhouse page number to request.
         * @minimum 1
         */
        page?: number;
        /** Whether to omit the last pagination link for faster list requests. */
        skipCount?: boolean;
        /** Return only applications for this candidate. */
        candidateId?: number | string;
        /** Return only applications for this job. */
        jobId?: number | string;
        /**
         * Return only applications with this Greenhouse status.
         * @minLength 1
         */
        status?: string;
      };
      output: {
        /** Greenhouse applications returned for the requested page. */
        applications: Array<{
          /** Greenhouse application ID. */
          id?: number;
          /** Greenhouse candidate ID associated with this application. */
          candidate_id?: number;
          /** Timestamp when the candidate applied, if present. */
          applied_at?: string | null;
          /** Timestamp when the application was rejected, if present. */
          rejected_at?: string | null;
          /** Application status. */
          status?: string;
          [key: string]: unknown;
        }>;
        /** Greenhouse pagination links parsed from the Link response header. */
        links: {
          /** URL for the next page, if present. */
          next: string | null;
          /** URL for the previous page, if present. */
          prev: string | null;
          /** URL for the last page, if present. */
          last: string | null;
        };
        /** Raw Greenhouse applications response. */
        raw: unknown;
      };
    };
    /** List Greenhouse candidates with optional job, email, candidate ID, and timestamp filters. */
    "greenhouse.list_candidates": {
      input: {
        /**
         * Maximum number of records to return in one response.
         * @minimum 1
         * @maximum 500
         */
        perPage?: number;
        /**
         * Greenhouse page number to request.
         * @minimum 1
         */
        page?: number;
        /** Whether to omit the last pagination link for faster list requests. */
        skipCount?: boolean;
        /**
         * Return only records created before this ISO-8601 timestamp.
         * @minLength 1
         */
        createdBefore?: string;
        /**
         * Return only records created at or after this ISO-8601 timestamp.
         * @minLength 1
         */
        createdAfter?: string;
        /**
         * Return only records updated before this ISO-8601 timestamp.
         * @minLength 1
         */
        updatedBefore?: string;
        /**
         * Return only records updated at or after this ISO-8601 timestamp.
         * @minLength 1
         */
        updatedAfter?: string;
        /** Return only candidates who have applied to this job. */
        jobId?: number | string;
        /**
         * Return only candidates with this email address.
         * @minLength 1
         */
        email?: string;
        /**
         * Return only candidates with these IDs. Greenhouse accepts up to 50 candidate IDs.
         * @minItems 1
         * @maxItems 50
         */
        candidateIds?: Array<number | string>;
      };
      output: {
        /** Greenhouse candidates returned for the requested page. */
        candidates: Array<{
          /** Greenhouse candidate ID. */
          id?: number;
          /** Candidate first name. */
          first_name?: string | null;
          /** Candidate last name. */
          last_name?: string | null;
          /** Candidate company. */
          company?: string | null;
          /** Candidate title. */
          title?: string | null;
          /** Timestamp when the candidate was created. */
          created_at?: string;
          /** Timestamp when the candidate was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Greenhouse pagination links parsed from the Link response header. */
        links: {
          /** URL for the next page, if present. */
          next: string | null;
          /** URL for the previous page, if present. */
          prev: string | null;
          /** URL for the last page, if present. */
          last: string | null;
        };
        /** Raw Greenhouse candidates response. */
        raw: unknown;
      };
    };
    /** List Greenhouse jobs with optional status, department, and timestamp filters. */
    "greenhouse.list_jobs": {
      input: {
        /**
         * Maximum number of records to return in one response.
         * @minimum 1
         * @maximum 500
         */
        perPage?: number;
        /**
         * Greenhouse page number to request.
         * @minimum 1
         */
        page?: number;
        /** Whether to omit the last pagination link for faster list requests. */
        skipCount?: boolean;
        /**
         * Return only records created before this ISO-8601 timestamp.
         * @minLength 1
         */
        createdBefore?: string;
        /**
         * Return only records created at or after this ISO-8601 timestamp.
         * @minLength 1
         */
        createdAfter?: string;
        /**
         * Return only records updated before this ISO-8601 timestamp.
         * @minLength 1
         */
        updatedBefore?: string;
        /**
         * Return only records updated at or after this ISO-8601 timestamp.
         * @minLength 1
         */
        updatedAfter?: string;
        /** Return only jobs with this status. */
        status?: "open" | "closed" | "draft";
        /**
         * Return only jobs matching this requisition ID.
         * @minLength 1
         */
        requisitionId?: string;
        /**
         * Return only jobs containing this opening ID.
         * @minLength 1
         */
        openingId?: string;
        /** Return only jobs in this Greenhouse department. */
        departmentId?: number | string;
        /**
         * Return only jobs in the department matching this external department ID.
         * @minLength 1
         */
        externalDepartmentId?: string;
      };
      output: {
        /** Greenhouse jobs returned for the requested page. */
        jobs: Array<{
          /** Greenhouse job ID. */
          id?: number;
          /** Job name. */
          name?: string;
          /** Job status. */
          status?: string;
          /** Job requisition ID, if present. */
          requisition_id?: string | null;
          /** Timestamp when the job was created. */
          created_at?: string;
          /** Timestamp when the job was opened, if present. */
          opened_at?: string | null;
          /** Timestamp when the job was closed, if present. */
          closed_at?: string | null;
          [key: string]: unknown;
        }>;
        /** Greenhouse pagination links parsed from the Link response header. */
        links: {
          /** URL for the next page, if present. */
          next: string | null;
          /** URL for the previous page, if present. */
          prev: string | null;
          /** URL for the last page, if present. */
          last: string | null;
        };
        /** Raw Greenhouse jobs response. */
        raw: unknown;
      };
    };
  }
}
