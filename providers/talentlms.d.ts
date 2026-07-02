import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a TalentLMS user with common user fields and optional raw API fields. */
    "talentlms.create_user": {
      input: {
        /**
         * The user's email address.
         * @format email
         */
        email: string;
        /**
         * The user's first name.
         * @minLength 1
         */
        firstName: string;
        /**
         * The user's last name.
         * @minLength 1
         */
        lastName: string;
        /**
         * The user's TalentLMS login name.
         * @minLength 1
         */
        login: string;
        /**
         * The user's password.
         * @minLength 1
         */
        password: string;
        /**
         * The TalentLMS user type, such as learner, trainer, or administrator.
         * @minLength 1
         */
        userType?: string;
        /**
         * The user's timezone value accepted by TalentLMS.
         * @minLength 1
         */
        timezone?: string;
        /**
         * The user's language value accepted by TalentLMS.
         * @minLength 1
         */
        language?: string;
        /**
         * The user's TalentLMS status value.
         * @minLength 1
         */
        status?: string;
        /** Additional official TalentLMS user fields to send unchanged in the JSON request body. */
        rawFields?: Record<string, unknown>;
      };
      output: {
        /** A TalentLMS user object. */
        user: Record<string, unknown>;
        /** The raw TalentLMS API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a TalentLMS user by ID. */
    "talentlms.delete_user": {
      input: {
        /**
         * The TalentLMS user ID.
         * @exclusiveMinimum 0
         */
        userId: number;
      };
      output: {
        /** Whether the TalentLMS delete request completed successfully. */
        deleted: boolean;
        /** The raw TalentLMS API response payload, or an empty object for 204 responses. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a TalentLMS branch by ID. */
    "talentlms.get_branch": {
      input: {
        /**
         * The TalentLMS branch ID.
         * @exclusiveMinimum 0
         */
        branchId: number;
      };
      output: {
        /** A TalentLMS branch object. */
        branch: Record<string, unknown>;
        /** The raw TalentLMS API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a TalentLMS category by ID. */
    "talentlms.get_category": {
      input: {
        /**
         * The TalentLMS category ID.
         * @exclusiveMinimum 0
         */
        categoryId: number;
      };
      output: {
        /** A TalentLMS category object. */
        category: Record<string, unknown>;
        /** The raw TalentLMS API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a TalentLMS course by ID. */
    "talentlms.get_course": {
      input: {
        /**
         * The TalentLMS course ID.
         * @exclusiveMinimum 0
         */
        courseId: number;
      };
      output: {
        /** A TalentLMS course object. */
        course: Record<string, unknown>;
        /** The raw TalentLMS API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a TalentLMS group by ID. */
    "talentlms.get_group": {
      input: {
        /**
         * The TalentLMS group ID.
         * @exclusiveMinimum 0
         */
        groupId: number;
      };
      output: {
        /** A TalentLMS group object. */
        group: Record<string, unknown>;
        /** The raw TalentLMS API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a TalentLMS user by ID. */
    "talentlms.get_user": {
      input: {
        /**
         * The TalentLMS user ID.
         * @exclusiveMinimum 0
         */
        userId: number;
      };
      output: {
        /** A TalentLMS user object. */
        user: Record<string, unknown>;
        /** The raw TalentLMS API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Check whether the configured TalentLMS API domain and API key can reach API v2. */
    "talentlms.health_check": {
      input: Record<string, never>;
      output: {
        /** Whether the TalentLMS health endpoint responded successfully. */
        healthy: boolean;
        /** The raw TalentLMS API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List TalentLMS branches with optional API v2 pagination. */
    "talentlms.list_branches": {
      input: {
        /**
         * The TalentLMS page number to request.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The TalentLMS page size to request. TalentLMS supports up to 100.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** The TalentLMS branches returned by the API. */
        branches: Array<Record<string, unknown>>;
        /** Pagination links returned by TalentLMS, such as self, first, last, prev, or next. */
        links: Record<string, unknown>;
        /** The raw TalentLMS API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List TalentLMS categories with optional API v2 pagination. */
    "talentlms.list_categories": {
      input: {
        /**
         * The TalentLMS page number to request.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The TalentLMS page size to request. TalentLMS supports up to 100.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** The TalentLMS categories returned by the API. */
        categories: Array<Record<string, unknown>>;
        /** Pagination links returned by TalentLMS, such as self, first, last, prev, or next. */
        links: Record<string, unknown>;
        /** The raw TalentLMS API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List TalentLMS courses with optional API v2 pagination. */
    "talentlms.list_courses": {
      input: {
        /**
         * The TalentLMS page number to request.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The TalentLMS page size to request. TalentLMS supports up to 100.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** The TalentLMS courses returned by the API. */
        courses: Array<Record<string, unknown>>;
        /** Pagination links returned by TalentLMS, such as self, first, last, prev, or next. */
        links: Record<string, unknown>;
        /** The raw TalentLMS API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List TalentLMS groups with optional API v2 pagination. */
    "talentlms.list_groups": {
      input: {
        /**
         * The TalentLMS page number to request.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The TalentLMS page size to request. TalentLMS supports up to 100.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** The TalentLMS groups returned by the API. */
        groups: Array<Record<string, unknown>>;
        /** Pagination links returned by TalentLMS, such as self, first, last, prev, or next. */
        links: Record<string, unknown>;
        /** The raw TalentLMS API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List TalentLMS users with optional API v2 pagination. */
    "talentlms.list_users": {
      input: {
        /**
         * The TalentLMS page number to request.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The TalentLMS page size to request. TalentLMS supports up to 100.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** The TalentLMS users returned by the API. */
        users: Array<Record<string, unknown>>;
        /** Pagination links returned by TalentLMS, such as self, first, last, prev, or next. */
        links: Record<string, unknown>;
        /** The raw TalentLMS API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a TalentLMS user with common user fields and optional raw API fields. */
    "talentlms.update_user": {
      input: {
        /**
         * The TalentLMS user ID.
         * @exclusiveMinimum 0
         */
        userId: number;
        /**
         * The user's email address.
         * @format email
         */
        email?: string;
        /**
         * The user's first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * The user's last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * The user's TalentLMS login name.
         * @minLength 1
         */
        login?: string;
        /**
         * The user's password.
         * @minLength 1
         */
        password?: string;
        /**
         * The TalentLMS user type, such as learner, trainer, or administrator.
         * @minLength 1
         */
        userType?: string;
        /**
         * The user's timezone value accepted by TalentLMS.
         * @minLength 1
         */
        timezone?: string;
        /**
         * The user's language value accepted by TalentLMS.
         * @minLength 1
         */
        language?: string;
        /**
         * The user's TalentLMS status value.
         * @minLength 1
         */
        status?: string;
        /** Additional official TalentLMS user fields to send unchanged in the JSON request body. */
        rawFields?: Record<string, unknown>;
      };
      output: {
        /** A TalentLMS user object. */
        user: Record<string, unknown>;
        /** The raw TalentLMS API response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
