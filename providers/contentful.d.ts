import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Contentful entry in a specific environment. */
    "contentful.create_entry": {
      input: {
        /**
         * Contentful space identifier.
         * @minLength 1
         */
        spaceId: string;
        /**
         * Contentful environment identifier.
         * @minLength 1
         */
        environmentId: string;
        /**
         * Contentful content type identifier for the new entry.
         * @minLength 1
         */
        contentType: string;
        /** Entry fields organized by field identifier and locale, for example { title: { 'en-US': 'Hello' } }. */
        fields: Record<string, unknown>;
        /** Optional Contentful metadata payload, such as tags. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** Created Contentful entry. */
        entry: Record<string, unknown>;
      };
    };
    /** Get the authenticated Contentful user profile for the current personal access token. */
    "contentful.get_current_user": {
      input: Record<string, never>;
      output: {
        /** Authenticated Contentful user profile. */
        user: Record<string, unknown>;
      };
    };
    /** Get a single Contentful entry by identifier. */
    "contentful.get_entry": {
      input: {
        /**
         * Contentful space identifier.
         * @minLength 1
         */
        spaceId: string;
        /**
         * Contentful environment identifier.
         * @minLength 1
         */
        environmentId: string;
        /**
         * Contentful entry identifier.
         * @minLength 1
         */
        entryId: string;
      };
      output: {
        /** Requested Contentful entry. */
        entry: Record<string, unknown>;
      };
    };
    /** List Contentful content types available in a specific environment. */
    "contentful.list_content_types": {
      input: {
        /**
         * Contentful space identifier.
         * @minLength 1
         */
        spaceId: string;
        /**
         * Contentful environment identifier.
         * @minLength 1
         */
        environmentId: string;
        /**
         * Number of Contentful records to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /**
         * Maximum number of Contentful records to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Sort expression for the Contentful collection request.
         * @minLength 1
         */
        order?: string;
      };
      output: {
        /** Contentful content types returned for the environment. */
        contentTypes: Array<Record<string, unknown>>;
        /**
         * Total number of Contentful content types available.
         * @minimum 0
         */
        total: number;
        /**
         * Number of Contentful content types skipped before this page.
         * @minimum 0
         */
        skip: number;
        /**
         * Maximum number of Contentful content types requested for this page.
         * @minimum 0
         */
        limit: number;
      };
    };
    /** List Contentful entries with common filtering, pagination, and include options. */
    "contentful.list_entries": {
      input: {
        /**
         * Contentful space identifier.
         * @minLength 1
         */
        spaceId: string;
        /**
         * Contentful environment identifier.
         * @minLength 1
         */
        environmentId: string;
        /**
         * Contentful content type identifier used to filter entries.
         * @minLength 1
         */
        contentType?: string;
        /**
         * Full-text search query applied to Contentful entries.
         * @minLength 1
         */
        query?: string;
        /**
         * Locale code used when reading Contentful entry fields.
         * @minLength 1
         */
        locale?: string;
        /**
         * Comma-separated list of fields to include in the Contentful response.
         * @minLength 1
         */
        select?: string;
        /**
         * Number of linked content levels to include in the Contentful response.
         * @minimum 0
         * @maximum 10
         */
        include?: number;
        /**
         * Number of Contentful records to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /**
         * Maximum number of Contentful records to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Sort expression for the Contentful collection request.
         * @minLength 1
         */
        order?: string;
      };
      output: {
        /** Contentful entries returned for the current page. */
        entries: Array<Record<string, unknown>>;
        /**
         * Total number of matching Contentful entries.
         * @minimum 0
         */
        total: number;
        /**
         * Number of Contentful entries skipped before this page.
         * @minimum 0
         */
        skip: number;
        /**
         * Maximum number of Contentful entries requested for this page.
         * @minimum 0
         */
        limit: number;
        /** Included linked Contentful resources returned with the current page. */
        includes?: Record<string, unknown>;
      };
    };
    /** List Contentful environments inside a specific space. */
    "contentful.list_environments": {
      input: {
        /**
         * Contentful space identifier.
         * @minLength 1
         */
        spaceId: string;
      };
      output: {
        /** Contentful environments returned for the space. */
        environments: Array<Record<string, unknown>>;
        /**
         * Total number of Contentful environments available.
         * @minimum 0
         */
        total: number;
        /**
         * Number of Contentful environments skipped before this page.
         * @minimum 0
         */
        skip: number;
        /**
         * Maximum number of Contentful environments requested for this page.
         * @minimum 0
         */
        limit: number;
      };
    };
    /** List Contentful spaces accessible to the current personal access token. */
    "contentful.list_spaces": {
      input: {
        /**
         * Number of Contentful records to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /**
         * Maximum number of Contentful records to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Sort expression for the Contentful collection request.
         * @minLength 1
         */
        order?: string;
      };
      output: {
        /** Contentful spaces returned for the request. */
        spaces: Array<Record<string, unknown>>;
        /**
         * Total number of accessible Contentful spaces.
         * @minimum 0
         */
        total: number;
        /**
         * Number of Contentful spaces skipped before this page.
         * @minimum 0
         */
        skip: number;
        /**
         * Maximum number of Contentful spaces requested for this page.
         * @minimum 0
         */
        limit: number;
      };
    };
    /** Update a Contentful entry using optimistic locking. */
    "contentful.update_entry": {
      input: {
        /**
         * Contentful space identifier.
         * @minLength 1
         */
        spaceId: string;
        /**
         * Contentful environment identifier.
         * @minLength 1
         */
        environmentId: string;
        /**
         * Contentful entry identifier.
         * @minLength 1
         */
        entryId: string;
        /**
         * Contentful content type identifier for the entry.
         * @minLength 1
         */
        contentType: string;
        /**
         * Current Contentful entry version used for optimistic locking.
         * @exclusiveMinimum 0
         */
        version: number;
        /** Entry fields organized by field identifier and locale, for example { title: { 'en-US': 'Hello' } }. */
        fields: Record<string, unknown>;
        /** Optional Contentful metadata payload, such as tags. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** Updated Contentful entry. */
        entry: Record<string, unknown>;
      };
    };
  }
}
