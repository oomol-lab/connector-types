import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Contentstack content type schema by UID. */
    "contentstack_content_delivery.get_content_type": {
      input: {
        /**
         * The Contentstack UID identifying the requested resource.
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
        /** The raw Contentstack JSON object. */
        contentType: Record<string, unknown>;
        /** The raw Contentstack JSON object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one published Contentstack entry for a content type. */
    "contentstack_content_delivery.get_entry": {
      input: {
        /**
         * The Contentstack UID identifying the requested resource.
         * @minLength 1
         */
        contentTypeUid: string;
        /**
         * The Contentstack UID identifying the requested resource.
         * @minLength 1
         */
        entryUid: string;
        /**
         * The Contentstack publishing environment to read published content from.
         * @minLength 1
         */
        environment: string;
        /**
         * The optional Contentstack branch UID passed with the branch request header.
         * @minLength 1
         */
        branch?: string;
        /**
         * The optional Contentstack locale code for localized content.
         * @minLength 1
         */
        locale?: string;
        /** A Contentstack query object serialized into the query URL parameter. */
        query?: Record<string, unknown>;
        /** Whether Contentstack should include extension metadata. */
        includeMetadata?: boolean;
        /** Whether Contentstack should include publish details in entry responses. */
        includePublishDetails?: boolean;
        /** Whether Contentstack should return fallback locale content when localized content is missing. */
        includeFallback?: boolean;
        /** Whether Contentstack should include the _branch field. */
        includeBranch?: boolean;
        /**
         * Contentstack field UIDs to include or exclude in the response.
         * @minItems 1
         */
        includeFields?: Array<string>;
        /**
         * Contentstack field UIDs to include or exclude in the response.
         * @minItems 1
         */
        excludeFields?: Array<string>;
      };
      output: {
        /** The raw Contentstack JSON object. */
        entry: Record<string, unknown>;
        /** The raw Contentstack JSON object. */
        raw: Record<string, unknown>;
      };
    };
    /** List published Contentstack assets in a stack. */
    "contentstack_content_delivery.list_assets": {
      input: {
        /**
         * The Contentstack publishing environment to read published content from.
         * @minLength 1
         */
        environment: string;
        /**
         * The optional Contentstack branch UID passed with the branch request header.
         * @minLength 1
         */
        branch?: string;
        /**
         * The optional Contentstack locale code for localized content.
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
        /** Whether Contentstack should include extension metadata. */
        includeMetadata?: boolean;
        /** Whether Contentstack should return fallback locale content when localized content is missing. */
        includeFallback?: boolean;
        /** Whether Contentstack should include the _branch field. */
        includeBranch?: boolean;
        /** Whether Contentstack should include image dimension details in asset responses. */
        includeDimension?: boolean;
        /**
         * A Contentstack field UID used to sort the returned items.
         * @minLength 1
         */
        asc?: string;
        /**
         * A Contentstack field UID used to sort the returned items.
         * @minLength 1
         */
        desc?: string;
      };
      output: {
        /** Contentstack asset objects. */
        assets: Array<Record<string, unknown>>;
        /** The total asset count when included by Contentstack. */
        count: number | null;
        /** The raw Contentstack JSON object. */
        raw: Record<string, unknown>;
      };
    };
    /** List content types available in a Contentstack stack. */
    "contentstack_content_delivery.list_content_types": {
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
    /** List published Contentstack entries for a content type. */
    "contentstack_content_delivery.list_entries": {
      input: {
        /**
         * The Contentstack UID identifying the requested resource.
         * @minLength 1
         */
        contentTypeUid: string;
        /**
         * The Contentstack publishing environment to read published content from.
         * @minLength 1
         */
        environment: string;
        /**
         * The optional Contentstack branch UID passed with the branch request header.
         * @minLength 1
         */
        branch?: string;
        /**
         * The optional Contentstack locale code for localized content.
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
        /** Whether Contentstack should include extension metadata. */
        includeMetadata?: boolean;
        /** Whether Contentstack should include publish details in entry responses. */
        includePublishDetails?: boolean;
        /** Whether Contentstack should return fallback locale content when localized content is missing. */
        includeFallback?: boolean;
        /** Whether Contentstack should include the _branch field. */
        includeBranch?: boolean;
        /**
         * Contentstack field UIDs to include or exclude in the response.
         * @minItems 1
         */
        includeFields?: Array<string>;
        /**
         * Contentstack field UIDs to include or exclude in the response.
         * @minItems 1
         */
        excludeFields?: Array<string>;
        /**
         * A Contentstack field UID used to sort the returned items.
         * @minLength 1
         */
        asc?: string;
        /**
         * A Contentstack field UID used to sort the returned items.
         * @minLength 1
         */
        desc?: string;
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
  }
}
