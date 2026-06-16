import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one Contentstack entry for a content type. */
    "contentstack_content_management.create_entry": {
      input: {
        /**
         * The Contentstack content type UID identifying the entry collection.
         * @minLength 1
         */
        contentTypeUid: string;
        /** The Contentstack entry object. */
        entry: Record<string, unknown>;
        /**
         * The optional Contentstack branch UID passed with the branch request header.
         * @minLength 1
         */
        branch?: string;
        /**
         * The optional Contentstack locale code.
         * @minLength 1
         */
        locale?: string;
      };
      output: {
        /** The Contentstack entry object. */
        entry: Record<string, unknown>;
        /** The raw Contentstack JSON object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Contentstack content type schema by UID. */
    "contentstack_content_management.get_content_type": {
      input: {
        /**
         * The Contentstack content type UID identifying the entry collection.
         * @minLength 1
         */
        contentTypeUid: string;
        /**
         * The optional Contentstack branch UID passed with the branch request header.
         * @minLength 1
         */
        branch?: string;
        /** Whether Contentstack should include the _branch field. */
        includeBranch?: boolean;
        /** Whether Contentstack should include global field schemas in content type responses. */
        includeGlobalFieldSchema?: boolean;
      };
      output: {
        /** The Contentstack content type object. */
        contentType: Record<string, unknown>;
        /** The raw Contentstack JSON object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Contentstack entry for a content type. */
    "contentstack_content_management.get_entry": {
      input: {
        /**
         * The Contentstack content type UID identifying the entry collection.
         * @minLength 1
         */
        contentTypeUid: string;
        /**
         * The Contentstack entry UID identifying one entry.
         * @minLength 1
         */
        entryUid: string;
        /**
         * The optional Contentstack branch UID passed with the branch request header.
         * @minLength 1
         */
        branch?: string;
        /**
         * The optional Contentstack locale code.
         * @minLength 1
         */
        locale?: string;
        /** Whether Contentstack should include the _branch field. */
        includeBranch?: boolean;
      };
      output: {
        /** The Contentstack entry object. */
        entry: Record<string, unknown>;
        /** The raw Contentstack JSON object. */
        raw: Record<string, unknown>;
      };
    };
    /** List content types available in a Contentstack stack. */
    "contentstack_content_management.list_content_types": {
      input: {
        /**
         * The optional Contentstack branch UID passed with the branch request header.
         * @minLength 1
         */
        branch?: string;
        /** A Contentstack query object serialized into the query URL parameter. */
        query?: Record<string, unknown>;
        /**
         * The maximum number of items to return. Contentstack returns at most 100 items.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of items to skip for pagination.
         * @minimum 0
         */
        skip?: number;
        /** Whether Contentstack should include the total item count. */
        includeCount?: boolean;
        /** Whether Contentstack should include the _branch field. */
        includeBranch?: boolean;
        /** Whether Contentstack should include global field schemas in content type responses. */
        includeGlobalFieldSchema?: boolean;
      };
      output: {
        /** Contentstack content type objects. */
        contentTypes: Array<Record<string, unknown>>;
        /** The total content type count when included by Contentstack. */
        count: number | null;
        /** The raw Contentstack JSON object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Contentstack entries for a content type. */
    "contentstack_content_management.list_entries": {
      input: {
        /**
         * The Contentstack content type UID identifying the entry collection.
         * @minLength 1
         */
        contentTypeUid: string;
        /**
         * The optional Contentstack branch UID passed with the branch request header.
         * @minLength 1
         */
        branch?: string;
        /**
         * The optional Contentstack locale code.
         * @minLength 1
         */
        locale?: string;
        /** A Contentstack query object serialized into the query URL parameter. */
        query?: Record<string, unknown>;
        /**
         * The maximum number of items to return. Contentstack returns at most 100 items.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of items to skip for pagination.
         * @minimum 0
         */
        skip?: number;
        /** Whether Contentstack should include the total item count. */
        includeCount?: boolean;
        /** Whether Contentstack should include the _branch field. */
        includeBranch?: boolean;
      };
      output: {
        /** Contentstack entry objects. */
        entries: Array<Record<string, unknown>>;
        /** The total entry count when included by Contentstack. */
        count: number | null;
        /** The raw Contentstack JSON object. */
        raw: Record<string, unknown>;
      };
    };
    /** Update one Contentstack entry for a content type. */
    "contentstack_content_management.update_entry": {
      input: {
        /**
         * The Contentstack content type UID identifying the entry collection.
         * @minLength 1
         */
        contentTypeUid: string;
        /**
         * The Contentstack entry UID identifying one entry.
         * @minLength 1
         */
        entryUid: string;
        /** The Contentstack entry object. */
        entry: Record<string, unknown>;
        /**
         * The optional Contentstack branch UID passed with the branch request header.
         * @minLength 1
         */
        branch?: string;
        /**
         * The optional Contentstack locale code.
         * @minLength 1
         */
        locale?: string;
      };
      output: {
        /** The Contentstack entry object. */
        entry: Record<string, unknown>;
        /** The raw Contentstack JSON object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
