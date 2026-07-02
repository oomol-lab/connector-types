import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Builder.io content entry for a model using the Write API. */
    "builder_io.create_content": {
      input: {
        /**
         * The Builder.io model name to create content under.
         * @minLength 1
         */
        model: string;
        /**
         * The human-readable Builder.io content name.
         * @minLength 1
         */
        name: string;
        /** The Builder.io content data object. */
        data: Record<string, unknown>;
        /** The Builder.io published state to set on the content. */
        published?: string;
        /** A MongoDB-style Builder.io query object. Use Builder.io field names and operators. */
        query?: Record<string, unknown>;
      };
      output: {
        /** A normalized Builder.io content entry. */
        content: {
          /** The Builder.io content ID. */
          id: string;
          /** The Builder.io content name, when returned. */
          name?: string | null;
          /** The Builder.io model ID, when returned. */
          modelId?: string | null;
          /** The Builder.io published state, when returned. */
          published?: string | null;
          /** The Builder.io content data object. */
          data: Record<string, unknown>;
          /** A Builder.io object with provider-defined fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Builder.io content entry by model and content ID using the Write API. */
    "builder_io.delete_content": {
      input: {
        /**
         * The Builder.io model name that owns the content entry.
         * @minLength 1
         */
        model: string;
        /**
         * The Builder.io content ID to delete.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Builder.io content ID that was deleted. */
        id: string;
        /** Whether the connector sent the delete request successfully. */
        deleted: boolean;
        /** A Builder.io object with provider-defined fields. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch a single Builder.io content entry by model and content ID. */
    "builder_io.get_content": {
      input: {
        /**
         * The Builder.io model name, such as `page` or `announcement-bar`.
         * @minLength 1
         */
        model: string;
        /**
         * The Builder.io content ID.
         * @minLength 1
         */
        id: string;
        /**
         * The Builder.io public API key for Content API reads. If omitted, the connected private key is used.
         * @minLength 1
         */
        publicKey?: string;
        /** User attributes used by Builder.io targeting when resolving content. */
        userAttributes?: Record<string, unknown>;
        /** Additional Builder.io Content API options. */
        options?: Record<string, unknown>;
        /** Whether Builder.io should include referenced content. */
        includeRefs?: boolean;
        /** Whether to bypass Builder.io targeting rules. */
        noTargeting?: boolean;
      };
      output: {
        /** A normalized Builder.io content entry. */
        content: {
          /** The Builder.io content ID. */
          id: string;
          /** The Builder.io content name, when returned. */
          name?: string | null;
          /** The Builder.io model ID, when returned. */
          modelId?: string | null;
          /** The Builder.io published state, when returned. */
          published?: string | null;
          /** The Builder.io content data object. */
          data: Record<string, unknown>;
          /** A Builder.io object with provider-defined fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List Builder.io content entries for a model using the Content API. */
    "builder_io.list_content": {
      input: {
        /**
         * The Builder.io model name, such as `page` or `announcement-bar`.
         * @minLength 1
         */
        model: string;
        /**
         * The Builder.io public API key for Content API reads. If omitted, the connected private key is used.
         * @minLength 1
         */
        publicKey?: string;
        /** A MongoDB-style Builder.io query object. Use Builder.io field names and operators. */
        query?: Record<string, unknown>;
        /** User attributes used by Builder.io targeting when resolving content. */
        userAttributes?: Record<string, unknown>;
        /** Additional Builder.io Content API options. */
        options?: Record<string, unknown>;
        /**
         * The maximum number of content entries to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of entries to skip.
         * @minimum 0
         */
        offset?: number;
        /** Whether Builder.io should include referenced content. */
        includeRefs?: boolean;
        /** Whether to bypass Builder.io targeting rules. */
        noTargeting?: boolean;
        /** A Builder.io sort object, such as { createdDate: -1 } or { name: 1 }. */
        sort?: Record<string, unknown>;
      };
      output: {
        /** The content entries returned by Builder.io. */
        results: Array<{
          /** The Builder.io content ID. */
          id: string;
          /** The Builder.io content name, when returned. */
          name?: string | null;
          /** The Builder.io model ID, when returned. */
          modelId?: string | null;
          /** The Builder.io published state, when returned. */
          published?: string | null;
          /** The Builder.io content data object. */
          data: Record<string, unknown>;
          /** A Builder.io object with provider-defined fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The number of content entries returned in this response. */
        count: number;
        /** A Builder.io object with provider-defined fields. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Builder.io content entry by model and content ID using the Write API. */
    "builder_io.update_content": {
      input: {
        /**
         * The Builder.io model name that owns the content entry.
         * @minLength 1
         */
        model: string;
        /**
         * The Builder.io content ID to update.
         * @minLength 1
         */
        id: string;
        /**
         * The updated human-readable Builder.io content name.
         * @minLength 1
         */
        name?: string;
        /** The Builder.io content data object. */
        data?: Record<string, unknown>;
        /** The updated Builder.io published state. */
        published?: string;
        /** A MongoDB-style Builder.io query object. Use Builder.io field names and operators. */
        query?: Record<string, unknown>;
      };
      output: {
        /** A normalized Builder.io content entry. */
        content: {
          /** The Builder.io content ID. */
          id: string;
          /** The Builder.io content name, when returned. */
          name?: string | null;
          /** The Builder.io model ID, when returned. */
          modelId?: string | null;
          /** The Builder.io published state, when returned. */
          published?: string | null;
          /** The Builder.io content data object. */
          data: Record<string, unknown>;
          /** A Builder.io object with provider-defined fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
