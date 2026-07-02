import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Manatal candidate using JSON-safe profile fields. */
    "manatal.create_candidate": {
      input: {
        /**
         * Full name of the candidate.
         * @minLength 1
         * @maxLength 255
         */
        fullName: string;
        /**
         * ID of the candidate in an external system.
         * @minLength 1
         * @maxLength 255
         */
        externalId?: string;
        /**
         * ID of the owner of the candidate.
         * @exclusiveMinimum 0
         */
        owner?: number;
        /** Origin of the candidate. */
        sourceType?: "sourced" | "applied" | "referred" | "agency" | "other";
        /**
         * Manual source information when sourceType is other.
         * @minLength 1
         * @maxLength 255
         */
        sourceOther?: string;
        /** Whether the candidate gave permission to use their data. */
        consent?: boolean;
        /**
         * Candidate email address.
         * @format email
         */
        email?: string;
        /**
         * Candidate phone number.
         * @minLength 1
         * @maxLength 255
         */
        phoneNumber?: string;
        /** Gender value stored on the candidate. */
        gender?: "male" | "female" | "other" | "unknown";
        /**
         * Candidate birth date.
         * @format date
         */
        birthDate?: string;
        /**
         * Full address of the candidate.
         * @minLength 1
         * @maxLength 255
         */
        address?: string;
        /**
         * Postal code for the candidate address.
         * @minLength 1
         * @maxLength 255
         */
        zipcode?: string;
        /**
         * Latest degree obtained by the candidate.
         * @minLength 1
         * @maxLength 255
         */
        latestDegree?: string;
        /**
         * Latest university the candidate graduated from.
         * @minLength 1
         * @maxLength 255
         */
        latestUniversity?: string;
        /**
         * Company where the candidate currently works.
         * @minLength 1
         * @maxLength 255
         */
        currentCompany?: string;
        /**
         * Department where the candidate currently works.
         * @minLength 1
         * @maxLength 255
         */
        currentDepartment?: string;
        /**
         * Current position of the candidate.
         * @minLength 1
         * @maxLength 255
         */
        currentPosition?: string;
        /**
         * Text description of the candidate.
         * @minLength 1
         */
        description?: string;
        /** Custom field values defined in Manatal. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** One Manatal candidate object. */
        candidate: Record<string, unknown>;
        /** Raw Manatal response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Manatal job using JSON-safe job fields. */
    "manatal.create_job": {
      input: {
        /**
         * ID of the organization the job is assigned to.
         * @exclusiveMinimum 0
         */
        organization: number;
        /**
         * Job title.
         * @minLength 1
         * @maxLength 255
         */
        positionName: string;
        /**
         * ID of the job in an external system.
         * @minLength 1
         * @maxLength 255
         */
        externalId?: string;
        /**
         * Description of the job.
         * @minLength 1
         */
        description?: string;
        /**
         * Expected date and time when the job will be closed or filled.
         * @format date-time
         */
        expectedCloseAt?: string;
        /**
         * Number of people to be hired for the job.
         * @minimum 0
         */
        headcount?: number;
        /**
         * Minimum salary value for the job.
         * @minLength 1
         */
        salaryMin?: string;
        /**
         * Maximum salary value for the job.
         * @minLength 1
         */
        salaryMax?: string;
        /** Whether salary information is displayed to candidates. */
        isSalaryVisible?: boolean;
        /**
         * Salary frequency for the job.
         * @minLength 1
         */
        frequency?: string;
        /**
         * Currency code for salary values.
         * @minLength 1
         */
        currency?: string;
        /**
         * ID of the industry assigned to the job.
         * @exclusiveMinimum 0
         */
        industry?: number;
        /**
         * ID of the owner of the job.
         * @exclusiveMinimum 0
         */
        owner?: number;
        /**
         * Address of the office where the job takes place.
         * @minLength 1
         * @maxLength 255
         */
        address?: string;
        /**
         * City of the office where the job takes place.
         * @minLength 1
         * @maxLength 255
         */
        city?: string;
        /**
         * State of the office where the job takes place.
         * @minLength 1
         * @maxLength 255
         */
        state?: string;
        /**
         * Country of the office where the job takes place.
         * @minLength 1
         * @maxLength 255
         */
        country?: string;
        /**
         * Postal code for the job address.
         * @minLength 1
         * @maxLength 255
         */
        zipcode?: string;
        /** Contract type for the job. */
        contractDetails?: "full_time" | "part_time" | "temporary" | "freelance" | "internship" | "apprenticeship" | "contractor" | "consultancy";
        /** Whether the job is published. */
        isPublished?: boolean;
        /** Whether the job is remote. */
        isRemote?: boolean;
        /** Status of the job. */
        status?: "active" | "on_hold" | "won" | "lost";
        /** Whether the job is pinned on the career page. */
        isPinnedInCareerPage?: boolean;
        /** Custom field values defined in Manatal. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** One Manatal job object. */
        job: Record<string, unknown>;
        /** Raw Manatal response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Manatal candidate-job match using JSON-safe match fields. */
    "manatal.create_match": {
      input: {
        /**
         * ID of the job the candidate is matched with.
         * @exclusiveMinimum 0
         */
        job: number;
        /**
         * ID of the candidate matched to the job.
         * @exclusiveMinimum 0
         */
        candidate: number;
        /**
         * ID of the owner of the match.
         * @exclusiveMinimum 0
         */
        owner?: number;
        /**
         * ID of the match in an external system.
         * @minLength 1
         * @maxLength 255
         */
        externalId?: string;
        /** Whether the match is still active. */
        isActive?: boolean;
        /**
         * Date and time at which the candidate was hired.
         * @format date-time
         */
        hiredAt?: string;
        /**
         * Date and time at which the candidate was added to the job.
         * @format date-time
         */
        submittedAt?: string;
        /**
         * Date and time at which the candidate was last interviewed.
         * @format date-time
         */
        interviewAt?: string;
        /**
         * Date and time at which an offer was made to the candidate.
         * @format date-time
         */
        offerAt?: string;
        /**
         * Date and time at which the candidate was no longer considered.
         * @format date-time
         */
        droppedAt?: string;
        /** Custom field values defined in Manatal. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** One Manatal match object. */
        match: Record<string, unknown>;
        /** Raw Manatal response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Manatal organization using JSON-safe organization fields. */
    "manatal.create_organization": {
      input: {
        /**
         * Name of the organization.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
        /**
         * ID of the organization in an external system.
         * @minLength 1
         * @maxLength 255
         */
        externalId?: string;
        /**
         * ID of the owner of the organization.
         * @exclusiveMinimum 0
         */
        owner?: number;
        /**
         * Full address of the organization.
         * @minLength 1
         * @maxLength 255
         */
        address?: string;
        /**
         * Website URL for the organization.
         * @format uri
         */
        website?: string;
        /**
         * Description of the organization.
         * @minLength 1
         */
        description?: string;
        /** Whether the organization is public. */
        isPublic?: boolean;
        /** Whether the organization is visible. */
        isVisible?: boolean;
        /** Custom field values defined in Manatal. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** One Manatal organization object. */
        organization: Record<string, unknown>;
        /** Raw Manatal response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a single Manatal candidate by ID. */
    "manatal.get_candidate": {
      input: {
        /**
         * ID of the Manatal candidate to retrieve.
         * @exclusiveMinimum 0
         */
        candidateId: number;
      };
      output: {
        /** One Manatal candidate object. */
        candidate: Record<string, unknown>;
        /** Raw Manatal response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a single Manatal job by ID. */
    "manatal.get_job": {
      input: {
        /**
         * ID of the Manatal job to retrieve.
         * @exclusiveMinimum 0
         */
        jobId: number;
      };
      output: {
        /** One Manatal job object. */
        job: Record<string, unknown>;
        /** Raw Manatal response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a single Manatal candidate-job match by ID. */
    "manatal.get_match": {
      input: {
        /**
         * ID of the Manatal match to retrieve.
         * @exclusiveMinimum 0
         */
        matchId: number;
      };
      output: {
        /** One Manatal match object. */
        match: Record<string, unknown>;
        /** Raw Manatal response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a single Manatal organization by ID. */
    "manatal.get_organization": {
      input: {
        /**
         * ID of the Manatal organization to retrieve.
         * @exclusiveMinimum 0
         */
        organizationId: number;
      };
      output: {
        /** One Manatal organization object. */
        organization: Record<string, unknown>;
        /** Raw Manatal response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Manatal candidates with pagination and recruitment profile filters. */
    "manatal.list_candidates": {
      input: {
        /**
         * Page number to request. Manatal starts pagination at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of records to return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Return a specific candidate ID.
         * @exclusiveMinimum 0
         */
        id?: number;
        /**
         * Filter candidates by full name.
         * @minLength 1
         */
        fullName?: string;
        /**
         * Return candidates created by this Manatal user ID.
         * @exclusiveMinimum 0
         */
        creatorId?: number;
        /**
         * Return candidates owned by this Manatal user ID.
         * @exclusiveMinimum 0
         */
        ownerId?: number;
        /**
         * Filter candidates by source type.
         * @minLength 1
         */
        sourceType?: string;
        /**
         * Filter candidates by email address.
         * @minLength 1
         */
        email?: string;
        /**
         * Filter candidates by phone number.
         * @minLength 1
         */
        phoneNumber?: string;
        /**
         * Filter candidates by gender.
         * @minLength 1
         */
        gender?: string;
        /**
         * Return candidates born on or after this date.
         * @format date
         */
        birthDateGte?: string;
        /**
         * Return candidates born on or before this date.
         * @format date
         */
        birthDateLte?: string;
        /**
         * Filter candidates by address text.
         * @minLength 1
         */
        address?: string;
        /**
         * Filter candidates by latest degree.
         * @minLength 1
         */
        latestDegree?: string;
        /**
         * Filter candidates by latest university.
         * @minLength 1
         */
        latestUniversity?: string;
        /**
         * Filter candidates by current company.
         * @minLength 1
         */
        currentCompany?: string;
        /**
         * Filter candidates by current position.
         * @minLength 1
         */
        currentPosition?: string;
        /**
         * Filter candidates by description text.
         * @minLength 1
         */
        description?: string;
        /**
         * Filter candidates by external ID.
         * @minLength 1
         */
        externalId?: string;
        /**
         * Filter candidates by candidate tag IDs or names.
         * @minLength 1
         */
        candidateTags?: string;
        /**
         * Filter candidates by candidate industry IDs or names.
         * @minLength 1
         */
        candidateIndustries?: string;
        /**
         * Filter candidates by location text.
         * @minLength 1
         */
        candidateLocation?: string;
        /**
         * Return records created at or after this timestamp.
         * @format date-time
         */
        createdAtGte?: string;
        /**
         * Return records created at or before this timestamp.
         * @format date-time
         */
        createdAtLte?: string;
        /**
         * Return records updated at or after this timestamp.
         * @format date-time
         */
        updatedAtGte?: string;
        /**
         * Return records updated at or before this timestamp.
         * @format date-time
         */
        updatedAtLte?: string;
      };
      output: {
        /** Candidates returned by Manatal. */
        candidates: Array<Record<string, unknown>>;
        /** Total number of matching records reported by Manatal. */
        count?: number;
        /** URL for the next Manatal result page, or null when there is no next page. */
        next?: string | null;
        /** URL for the previous Manatal result page, or null when there is no previous page. */
        previous?: string | null;
        /** Raw Manatal response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Manatal jobs with pagination and job status filters. */
    "manatal.list_jobs": {
      input: {
        /**
         * Page number to request. Manatal starts pagination at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of records to return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Return a specific job ID.
         * @exclusiveMinimum 0
         */
        id?: number;
        /**
         * Filter jobs by organization ID.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /**
         * Filter jobs by position name.
         * @minLength 1
         */
        positionName?: string;
        /**
         * Filter jobs by required headcount.
         * @minimum 0
         */
        headcount?: number;
        /**
         * Return jobs created by this Manatal user ID.
         * @exclusiveMinimum 0
         */
        creatorId?: number;
        /**
         * Return jobs owned by this Manatal user ID.
         * @exclusiveMinimum 0
         */
        ownerId?: number;
        /**
         * Filter jobs by address text.
         * @minLength 1
         */
        address?: string;
        /**
         * Filter jobs by status.
         * @minLength 1
         */
        status?: string;
        /**
         * Filter jobs by salary frequency.
         * @minLength 1
         */
        frequency?: string;
        /**
         * Filter jobs by city.
         * @minLength 1
         */
        city?: string;
        /**
         * Filter jobs by state.
         * @minLength 1
         */
        state?: string;
        /**
         * Filter jobs by contract details.
         * @minLength 1
         */
        contractDetails?: string;
        /** Filter jobs by whether they are published. */
        isPublished?: boolean;
        /** Filter jobs by whether they are remote. */
        isRemote?: boolean;
        /**
         * Filter jobs by external ID.
         * @minLength 1
         */
        externalId?: string;
        /**
         * Return jobs opened at or after this timestamp.
         * @format date-time
         */
        openAtGte?: string;
        /**
         * Return jobs opened at or before this timestamp.
         * @format date-time
         */
        openAtLte?: string;
        /**
         * Return jobs closed at or after this timestamp.
         * @format date-time
         */
        closeAtGte?: string;
        /**
         * Return jobs closed at or before this timestamp.
         * @format date-time
         */
        closeAtLte?: string;
        /**
         * Return records created at or after this timestamp.
         * @format date-time
         */
        createdAtGte?: string;
        /**
         * Return records created at or before this timestamp.
         * @format date-time
         */
        createdAtLte?: string;
        /**
         * Return records updated at or after this timestamp.
         * @format date-time
         */
        updatedAtGte?: string;
        /**
         * Return records updated at or before this timestamp.
         * @format date-time
         */
        updatedAtLte?: string;
      };
      output: {
        /** Jobs returned by Manatal. */
        jobs: Array<Record<string, unknown>>;
        /** Total number of matching records reported by Manatal. */
        count?: number;
        /** URL for the next Manatal result page, or null when there is no next page. */
        next?: string | null;
        /** URL for the previous Manatal result page, or null when there is no previous page. */
        previous?: string | null;
        /** Raw Manatal response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Manatal candidate-job matches with pagination and pipeline filters. */
    "manatal.list_matches": {
      input: {
        /**
         * Page number to request. Manatal starts pagination at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of records to return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Field used to order Manatal match results.
         * @minLength 1
         */
        ordering?: string;
        /**
         * Filter matches by external ID.
         * @minLength 1
         */
        externalId?: string;
        /**
         * Comma-separated Manatal pipeline stage IDs.
         * @minLength 1
         */
        stageIn?: string;
        /**
         * Return matches hired at or after this timestamp.
         * @format date-time
         */
        hiredAtGte?: string;
        /**
         * Return matches hired at or before this timestamp.
         * @format date-time
         */
        hiredAtLte?: string;
        /**
         * Return matches submitted at or after this timestamp.
         * @format date-time
         */
        submittedAtGte?: string;
        /**
         * Return matches submitted at or before this timestamp.
         * @format date-time
         */
        submittedAtLte?: string;
        /**
         * Return matches interviewed at or after this timestamp.
         * @format date-time
         */
        interviewAtGte?: string;
        /**
         * Return matches interviewed at or before this timestamp.
         * @format date-time
         */
        interviewAtLte?: string;
        /**
         * Return matches offered at or after this timestamp.
         * @format date-time
         */
        offerAtGte?: string;
        /**
         * Return matches offered at or before this timestamp.
         * @format date-time
         */
        offerAtLte?: string;
        /**
         * Return matches dropped at or after this timestamp.
         * @format date-time
         */
        droppedAtGte?: string;
        /**
         * Return matches dropped at or before this timestamp.
         * @format date-time
         */
        droppedAtLte?: string;
        /**
         * Return records created at or after this timestamp.
         * @format date-time
         */
        createdAtGte?: string;
        /**
         * Return records created at or before this timestamp.
         * @format date-time
         */
        createdAtLte?: string;
        /**
         * Return records updated at or after this timestamp.
         * @format date-time
         */
        updatedAtGte?: string;
        /**
         * Return records updated at or before this timestamp.
         * @format date-time
         */
        updatedAtLte?: string;
      };
      output: {
        /** Matches returned by Manatal. */
        matches: Array<Record<string, unknown>>;
        /** Total number of matching records reported by Manatal. */
        count?: number;
        /** URL for the next Manatal result page, or null when there is no next page. */
        next?: string | null;
        /** URL for the previous Manatal result page, or null when there is no previous page. */
        previous?: string | null;
        /** Raw Manatal response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Manatal organizations with pagination and organization filters. */
    "manatal.list_organizations": {
      input: {
        /**
         * Page number to request. Manatal starts pagination at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of records to return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Return a specific organization ID.
         * @exclusiveMinimum 0
         */
        id?: number;
        /**
         * Filter organizations by name.
         * @minLength 1
         */
        name?: string;
        /**
         * Return organizations created by this Manatal user ID.
         * @exclusiveMinimum 0
         */
        creatorId?: number;
        /**
         * Return organizations owned by this Manatal user ID.
         * @exclusiveMinimum 0
         */
        ownerId?: number;
        /**
         * Filter organizations by address text.
         * @minLength 1
         */
        address?: string;
        /**
         * Filter organizations by website.
         * @minLength 1
         */
        website?: string;
        /** Filter organizations by whether they are public. */
        isPublic?: boolean;
        /** Filter organizations by whether they are visible. */
        isVisible?: boolean;
        /**
         * Filter organizations by external ID.
         * @minLength 1
         */
        externalId?: string;
        /**
         * Return records created at or after this timestamp.
         * @format date-time
         */
        createdAtGte?: string;
        /**
         * Return records created at or before this timestamp.
         * @format date-time
         */
        createdAtLte?: string;
        /**
         * Return records updated at or after this timestamp.
         * @format date-time
         */
        updatedAtGte?: string;
        /**
         * Return records updated at or before this timestamp.
         * @format date-time
         */
        updatedAtLte?: string;
      };
      output: {
        /** Organizations returned by Manatal. */
        organizations: Array<Record<string, unknown>>;
        /** Total number of matching records reported by Manatal. */
        count?: number;
        /** URL for the next Manatal result page, or null when there is no next page. */
        next?: string | null;
        /** URL for the previous Manatal result page, or null when there is no previous page. */
        previous?: string | null;
        /** Raw Manatal response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Partially update a Manatal candidate by ID. */
    "manatal.update_candidate": {
      input: {
        /**
         * ID of the Manatal candidate to update.
         * @exclusiveMinimum 0
         */
        candidateId: number;
        /**
         * Full name of the candidate.
         * @minLength 1
         * @maxLength 255
         */
        fullName?: string;
        /**
         * ID of the candidate in an external system.
         * @minLength 1
         * @maxLength 255
         */
        externalId?: string;
        /**
         * ID of the owner of the candidate.
         * @exclusiveMinimum 0
         */
        owner?: number;
        /** Origin of the candidate. */
        sourceType?: "sourced" | "applied" | "referred" | "agency" | "other";
        /**
         * Manual source information when sourceType is other.
         * @minLength 1
         * @maxLength 255
         */
        sourceOther?: string;
        /** Whether the candidate gave permission to use their data. */
        consent?: boolean;
        /**
         * Candidate email address.
         * @format email
         */
        email?: string;
        /**
         * Candidate phone number.
         * @minLength 1
         * @maxLength 255
         */
        phoneNumber?: string;
        /** Gender value stored on the candidate. */
        gender?: "male" | "female" | "other" | "unknown";
        /**
         * Candidate birth date.
         * @format date
         */
        birthDate?: string;
        /**
         * Full address of the candidate.
         * @minLength 1
         * @maxLength 255
         */
        address?: string;
        /**
         * Postal code for the candidate address.
         * @minLength 1
         * @maxLength 255
         */
        zipcode?: string;
        /**
         * Latest degree obtained by the candidate.
         * @minLength 1
         * @maxLength 255
         */
        latestDegree?: string;
        /**
         * Latest university the candidate graduated from.
         * @minLength 1
         * @maxLength 255
         */
        latestUniversity?: string;
        /**
         * Company where the candidate currently works.
         * @minLength 1
         * @maxLength 255
         */
        currentCompany?: string;
        /**
         * Department where the candidate currently works.
         * @minLength 1
         * @maxLength 255
         */
        currentDepartment?: string;
        /**
         * Current position of the candidate.
         * @minLength 1
         * @maxLength 255
         */
        currentPosition?: string;
        /**
         * Text description of the candidate.
         * @minLength 1
         */
        description?: string;
        /** Custom field values defined in Manatal. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** One Manatal candidate object. */
        candidate: Record<string, unknown>;
        /** Raw Manatal response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Partially update a Manatal job by ID. */
    "manatal.update_job": {
      input: {
        /**
         * ID of the Manatal job to update.
         * @exclusiveMinimum 0
         */
        jobId: number;
        /**
         * ID of the organization the job is assigned to.
         * @exclusiveMinimum 0
         */
        organization?: number;
        /**
         * Job title.
         * @minLength 1
         * @maxLength 255
         */
        positionName?: string;
        /**
         * ID of the job in an external system.
         * @minLength 1
         * @maxLength 255
         */
        externalId?: string;
        /**
         * Description of the job.
         * @minLength 1
         */
        description?: string;
        /**
         * Expected date and time when the job will be closed or filled.
         * @format date-time
         */
        expectedCloseAt?: string;
        /**
         * Number of people to be hired for the job.
         * @minimum 0
         */
        headcount?: number;
        /**
         * Minimum salary value for the job.
         * @minLength 1
         */
        salaryMin?: string;
        /**
         * Maximum salary value for the job.
         * @minLength 1
         */
        salaryMax?: string;
        /** Whether salary information is displayed to candidates. */
        isSalaryVisible?: boolean;
        /**
         * Salary frequency for the job.
         * @minLength 1
         */
        frequency?: string;
        /**
         * Currency code for salary values.
         * @minLength 1
         */
        currency?: string;
        /**
         * ID of the industry assigned to the job.
         * @exclusiveMinimum 0
         */
        industry?: number;
        /**
         * ID of the owner of the job.
         * @exclusiveMinimum 0
         */
        owner?: number;
        /**
         * Address of the office where the job takes place.
         * @minLength 1
         * @maxLength 255
         */
        address?: string;
        /**
         * City of the office where the job takes place.
         * @minLength 1
         * @maxLength 255
         */
        city?: string;
        /**
         * State of the office where the job takes place.
         * @minLength 1
         * @maxLength 255
         */
        state?: string;
        /**
         * Country of the office where the job takes place.
         * @minLength 1
         * @maxLength 255
         */
        country?: string;
        /**
         * Postal code for the job address.
         * @minLength 1
         * @maxLength 255
         */
        zipcode?: string;
        /** Contract type for the job. */
        contractDetails?: "full_time" | "part_time" | "temporary" | "freelance" | "internship" | "apprenticeship" | "contractor" | "consultancy";
        /** Whether the job is published. */
        isPublished?: boolean;
        /** Whether the job is remote. */
        isRemote?: boolean;
        /** Status of the job. */
        status?: "active" | "on_hold" | "won" | "lost";
        /** Whether the job is pinned on the career page. */
        isPinnedInCareerPage?: boolean;
        /** Custom field values defined in Manatal. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** One Manatal job object. */
        job: Record<string, unknown>;
        /** Raw Manatal response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Partially update a Manatal candidate-job match by ID. */
    "manatal.update_match": {
      input: {
        /**
         * ID of the Manatal match to update.
         * @exclusiveMinimum 0
         */
        matchId: number;
        /**
         * ID of the job the candidate is matched with.
         * @exclusiveMinimum 0
         */
        job?: number;
        /**
         * ID of the candidate matched to the job.
         * @exclusiveMinimum 0
         */
        candidate?: number;
        /**
         * ID of the owner of the match.
         * @exclusiveMinimum 0
         */
        owner?: number;
        /**
         * ID of the match in an external system.
         * @minLength 1
         * @maxLength 255
         */
        externalId?: string;
        /** Whether the match is still active. */
        isActive?: boolean;
        /**
         * Date and time at which the candidate was hired.
         * @format date-time
         */
        hiredAt?: string;
        /**
         * Date and time at which the candidate was added to the job.
         * @format date-time
         */
        submittedAt?: string;
        /**
         * Date and time at which the candidate was last interviewed.
         * @format date-time
         */
        interviewAt?: string;
        /**
         * Date and time at which an offer was made to the candidate.
         * @format date-time
         */
        offerAt?: string;
        /**
         * Date and time at which the candidate was no longer considered.
         * @format date-time
         */
        droppedAt?: string;
        /** Custom field values defined in Manatal. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** One Manatal match object. */
        match: Record<string, unknown>;
        /** Raw Manatal response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Partially update a Manatal organization by ID. */
    "manatal.update_organization": {
      input: {
        /**
         * ID of the Manatal organization to update.
         * @exclusiveMinimum 0
         */
        organizationId: number;
        /**
         * Name of the organization.
         * @minLength 1
         * @maxLength 255
         */
        name?: string;
        /**
         * ID of the organization in an external system.
         * @minLength 1
         * @maxLength 255
         */
        externalId?: string;
        /**
         * ID of the owner of the organization.
         * @exclusiveMinimum 0
         */
        owner?: number;
        /**
         * Full address of the organization.
         * @minLength 1
         * @maxLength 255
         */
        address?: string;
        /**
         * Website URL for the organization.
         * @format uri
         */
        website?: string;
        /**
         * Description of the organization.
         * @minLength 1
         */
        description?: string;
        /** Whether the organization is public. */
        isPublic?: boolean;
        /** Whether the organization is visible. */
        isVisible?: boolean;
        /** Custom field values defined in Manatal. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** One Manatal organization object. */
        organization: Record<string, unknown>;
        /** Raw Manatal response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
