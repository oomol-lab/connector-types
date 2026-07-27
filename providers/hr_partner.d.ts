import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one HR Partner recruitment applicant by applicant ID or email address, including their job applications when available. */
    "hr_partner.get_applicant": {
      input: {
        /**
         * The HR Partner applicant ID or email address.
         * @minLength 1
         */
        applicant_id: string;
      };
      output: {
        /** Raw HR Partner object payload. */
        applicant: Record<string, unknown>;
      };
    };
    /** Retrieve one HR Partner recruitment application by application ID, including applicant, job listing, scorecard, attachment metadata, interviews, and comments when available. */
    "hr_partner.get_application": {
      input: {
        /**
         * The HR Partner application ID.
         * @exclusiveMinimum 0
         */
        application_id: number;
      };
      output: {
        /** Raw HR Partner object payload. */
        application: Record<string, unknown>;
      };
    };
    /** Retrieve basic HR Partner company information, optionally including custom fields and active modules. */
    "hr_partner.get_company": {
      input: {
        /** Whether to include configured company custom field definitions. */
        custom_fields?: boolean;
        /** Whether to include enabled HR Partner modules and feature flags. */
        active_modules?: boolean;
      };
      output: {
        /** Raw HR Partner object payload. */
        company: Record<string, unknown>;
      };
    };
    /** Retrieve one HR Partner employee by employee code, including detailed contact, address, tag, and custom field data when available. */
    "hr_partner.get_employee": {
      input: {
        /**
         * The HR Partner employee code.
         * @minLength 1
         */
        employee_code: string;
      };
      output: {
        /** Raw HR Partner object payload. */
        employee: Record<string, unknown>;
      };
    };
    /** Retrieve one HR Partner recruitment job listing by job ID, including detailed content, custom form, scorecard, and stage data when available. */
    "hr_partner.get_job_listing": {
      input: {
        /**
         * The HR Partner job listing ID.
         * @minLength 1
         */
        job_id: string;
      };
      output: {
        /** Raw HR Partner object payload. */
        job: Record<string, unknown>;
      };
    };
    /** List HR Partner recruitment applicants, optionally filtered by name or email search text. */
    "hr_partner.list_applicants": {
      input: {
        /**
         * Text to match against applicant first name, last name, or email.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** Raw HR Partner object records. */
        applicants: Array<Record<string, unknown>>;
      };
    };
    /** List HR Partner recruitment applications for one job listing with official filters such as source, stage, submitted date, and read flags. */
    "hr_partner.list_applications": {
      input: {
        /**
         * The HR Partner job listing ID.
         * @minLength 1
         */
        job_id: string;
        /**
         * Text to match against the application source field.
         * @minLength 1
         */
        source?: string;
        /**
         * Application stage to filter by.
         * @minLength 1
         */
        stage?: string;
        /**
         * Start submitted date filter in yyyy-mm-dd format.
         * @format date
         */
        submitted_at_from?: string;
        /**
         * End submitted date filter in yyyy-mm-dd format.
         * @format date
         */
        submitted_at_to?: string;
        /** Whether to return only flagged applications. */
        is_flagged?: boolean;
        /** Whether to return only archived applications. */
        is_archived?: boolean;
        /** Whether to return only hired applications. */
        is_hired?: boolean;
        /** Whether to return only read applications. */
        is_read?: boolean;
      };
      output: {
        /** Raw HR Partner object records. */
        applications: Array<Record<string, unknown>>;
      };
    };
    /** List HR Partner employees with official filters such as search, department, location, status, tags, and employment dates. */
    "hr_partner.list_employees": {
      input: {
        /**
         * Text to match against employee first or last names.
         * @minLength 1
         */
        search?: string;
        /**
         * One or more department names separated by commas to filter employees.
         * @minLength 1
         */
        department?: string;
        /**
         * Location name to filter employees.
         * @minLength 1
         */
        location?: string;
        /**
         * Group name to filter employees.
         * @minLength 1
         */
        group?: string;
        /**
         * Position description to filter employees.
         * @minLength 1
         */
        position?: string;
        /**
         * Employment status to filter employees.
         * @minLength 1
         */
        employment_status?: string;
        /**
         * Gender identity value to filter employees.
         * @minLength 1
         */
        gender_identity?: string;
        /**
         * Pay point identifier to filter employees.
         * @minLength 1
         */
        pay_point?: string;
        /**
         * Start birth date filter in yyyy-mm-dd format.
         * @format date
         */
        birth_date_from?: string;
        /**
         * End birth date filter in yyyy-mm-dd format.
         * @format date
         */
        birth_date_to?: string;
        /**
         * Start employment date filter in yyyy-mm-dd format.
         * @format date
         */
        start_date_from?: string;
        /**
         * End employment date filter in yyyy-mm-dd format.
         * @format date
         */
        start_date_to?: string;
        /**
         * Start termination date filter in yyyy-mm-dd format.
         * @format date
         */
        end_date_from?: string;
        /**
         * End termination date filter in yyyy-mm-dd format.
         * @format date
         */
        end_date_to?: string;
        /**
         * Single employee tag to filter employees.
         * @minLength 1
         */
        tag?: string;
        /** Whether to return only active employees. */
        is_active?: boolean;
        /** Whether to return only terminated employees. */
        is_terminated?: boolean;
        /** Whether to return only employees who can log on. */
        can_logon?: boolean;
        /** Whether to return only employees eligible for rehiring. */
        eligible_for_rehire?: boolean;
        /**
         * Employee code of the manager to filter by.
         * @minLength 1
         */
        reports_to?: string;
      };
      output: {
        /** Raw HR Partner object records. */
        employees: Array<Record<string, unknown>>;
      };
    };
    /** List HR Partner recruitment job listings with official filters such as search, department, publish dates, active state, and response email. */
    "hr_partner.list_job_listings": {
      input: {
        /**
         * Text to match against job title, summary, or content.
         * @minLength 1
         */
        search?: string;
        /**
         * Department name to filter jobs.
         * @minLength 1
         */
        department?: string;
        /**
         * Location name to filter jobs.
         * @minLength 1
         */
        location?: string;
        /**
         * Position title to filter jobs.
         * @minLength 1
         */
        position?: string;
        /**
         * Employment status name to filter jobs.
         * @minLength 1
         */
        employment_status?: string;
        /**
         * Start publish date filter in yyyy-mm-dd format.
         * @format date
         */
        publish_at_from?: string;
        /**
         * End publish date filter in yyyy-mm-dd format.
         * @format date
         */
        publish_at_to?: string;
        /**
         * Start unpublish date filter in yyyy-mm-dd format.
         * @format date
         */
        unpublish_date_from?: string;
        /**
         * End unpublish date filter in yyyy-mm-dd format.
         * @format date
         */
        unpublish_date_to?: string;
        /** Whether to return only active job listings. */
        is_active?: boolean;
        /** Whether to return jobs published on the internet. */
        publish_on_internet?: boolean;
        /** Whether to return jobs that allow online applications. */
        allow_online_applications?: boolean;
        /** Whether to return jobs that allow uploads. */
        allow_uploads?: boolean;
        /** Whether to return jobs that notify admins about new applications. */
        notify_new_application?: boolean;
        /**
         * Response email address to filter jobs.
         * @format email
         */
        response_email?: string;
      };
      output: {
        /** Raw HR Partner object records. */
        jobs: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve one HR Partner read-only lookup file such as departments, locations, positions, tags, stages, or training statuses. */
    "hr_partner.list_lookups": {
      input: {
        /** The HR Partner lookup file name. */
        lookup_name: "absence_reasons" | "absence_statuses" | "asset_types" | "benefit_types" | "benefit_statuses" | "benefit_providers" | "departments" | "dependent_types" | "education_types" | "education_statuses" | "employment_statuses" | "genders" | "grievance_types" | "grievance_statuses" | "groups" | "interview_types" | "locations" | "paylevels" | "positions" | "renewable_types" | "review_types" | "review_statuses" | "scorecards" | "skill_names" | "skill_ratings" | "stages" | "tags" | "termination_reasons" | "training_types" | "training_statuses";
      };
      output: {
        /** Raw HR Partner object records. */
        lookups: Array<Record<string, unknown>>;
      };
    };
  }
}
