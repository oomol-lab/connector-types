import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a single JazzHR applicant by ID. */
    "jazzhr.get_applicant": {
      input: {
        /**
         * The JazzHR applicant ID.
         * @minLength 1
         */
        applicant_id: string;
      };
      output: {
        /** A raw JazzHR record returned by the API. */
        applicant: Record<string, unknown>;
        /** The raw JazzHR API response payload. */
        raw: unknown;
      };
    };
    /** Get a single JazzHR job by ID. */
    "jazzhr.get_job": {
      input: {
        /**
         * The JazzHR job ID.
         * @minLength 1
         */
        job_id: string;
      };
      output: {
        /** A raw JazzHR record returned by the API. */
        job: Record<string, unknown>;
        /** The raw JazzHR API response payload. */
        raw: unknown;
      };
    };
    /** Get a single JazzHR user by ID. */
    "jazzhr.get_user": {
      input: {
        /**
         * The JazzHR user ID.
         * @minLength 1
         */
        user_id: string;
      };
      output: {
        /** A raw JazzHR record returned by the API. */
        user: Record<string, unknown>;
        /** The raw JazzHR API response payload. */
        raw: unknown;
      };
    };
    /** List JazzHR applicants with optional name, job, date, workflow status, and rating filters. */
    "jazzhr.list_applicants": {
      input: {
        /**
         * The JazzHR result page to request. JazzHR pages start at 1 and return up to 100 records.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** Filter applicants by any substring in first or last name. */
        name?: string;
        /** Filter applicants by city. */
        city?: string;
        /** Filter applicants by JazzHR job ID. */
        job_id?: string;
        /** Filter applicants by job title. */
        job_title?: string;
        /** Filter applicants by recruiter ID. */
        recruiter_id?: string;
        /**
         * Filter applicants by exact applied date.
         * @format date
         */
        apply_date?: string;
        /**
         * Only include applicants who applied on or after this date.
         * @format date
         */
        from_apply_date?: string;
        /**
         * Only include applicants who applied on or before this date.
         * @format date
         */
        to_apply_date?: string;
        /** Filter applicants by workflow status ID. */
        status?: string;
        /**
         * Filter applicants by rating from 1 to 5.
         * @minimum 1
         * @maximum 5
         */
        rating?: number;
      };
      output: {
        /** JazzHR applicants returned by the API. */
        applicants: Array<Record<string, unknown>>;
        /** The raw JazzHR API response payload. */
        raw: unknown;
      };
    };
    /** List JazzHR jobs with optional title, owner, location, date, and status filters. */
    "jazzhr.list_jobs": {
      input: {
        /**
         * The JazzHR result page to request. JazzHR pages start at 1 and return up to 100 records.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** Filter jobs by title. */
        title?: string;
        /** Filter jobs by recruiter. */
        recruiter?: string;
        /** Filter jobs by board code. */
        board_code?: string;
        /** Filter jobs by department. */
        department?: string;
        /** Filter jobs by hiring lead. */
        hiring_lead?: string;
        /** Filter jobs by state. */
        state?: string;
        /** Filter jobs by city. */
        city?: string;
        /**
         * Only include jobs opened on or after this date.
         * @format date
         */
        from_open_date?: string;
        /**
         * Only include jobs opened on or before this date.
         * @format date
         */
        to_open_date?: string;
        /** The JazzHR job status filter. */
        status?: "open" | "on hold" | "approved" | "needs approval" | "drafting" | "filled" | "cancelled" | "closed";
        /** Whether this JazzHR boolean filter should match. */
        confidential?: boolean;
        /** Whether this JazzHR boolean filter should match. */
        private?: boolean;
      };
      output: {
        /** JazzHR jobs returned by the API. */
        jobs: Array<Record<string, unknown>>;
        /** The raw JazzHR API response payload. */
        raw: unknown;
      };
    };
    /** List JazzHR users with optional name, email, and type filters. */
    "jazzhr.list_users": {
      input: {
        /**
         * The JazzHR result page to request. JazzHR pages start at 1 and return up to 100 records.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** Filter users by name. */
        name?: string;
        /**
         * Filter users by email address.
         * @format email
         */
        email?: string;
        /** Filter users by type, such as Administrator, Manager, User, Recruiter, Employee, Deactivated, or Deleted. */
        type?: string;
      };
      output: {
        /** JazzHR users returned by the API. */
        users: Array<Record<string, unknown>>;
        /** The raw JazzHR API response payload. */
        raw: unknown;
      };
    };
  }
}
