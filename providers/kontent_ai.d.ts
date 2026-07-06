import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one content item from a Kontent.ai environment. */
    "kontent_ai.get_content_item": {
      input: {
        /**
         * The Kontent.ai resource identifier value.
         * @minLength 1
         * @pattern \S
         */
        identifier: string;
        /** How to address a Kontent.ai resource. */
        identifierType: "id" | "codename" | "externalId";
      };
      output: {
        /** A normalized Kontent.ai resource summary. */
        item: {
          /** The Kontent.ai resource UUID when returned. */
          id: string | null;
          /** The Kontent.ai display name when returned. */
          name: string | null;
          /** The Kontent.ai codename when returned. */
          codename: string | null;
          /** The Kontent.ai external_id value when returned. */
          externalId: string | null;
          /** The raw Kontent.ai object. */
          raw: Record<string, unknown>;
        };
        /** The raw Kontent.ai object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one content type from a Kontent.ai environment. */
    "kontent_ai.get_content_type": {
      input: {
        /**
         * The Kontent.ai resource identifier value.
         * @minLength 1
         * @pattern \S
         */
        identifier: string;
        /** How to address a Kontent.ai resource. */
        identifierType: "id" | "codename" | "externalId";
      };
      output: {
        /** A normalized Kontent.ai resource summary. */
        type: {
          /** The Kontent.ai resource UUID when returned. */
          id: string | null;
          /** The Kontent.ai display name when returned. */
          name: string | null;
          /** The Kontent.ai codename when returned. */
          codename: string | null;
          /** The Kontent.ai external_id value when returned. */
          externalId: string | null;
          /** The raw Kontent.ai object. */
          raw: Record<string, unknown>;
        };
        /** The raw Kontent.ai object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one language from a Kontent.ai environment. */
    "kontent_ai.get_language": {
      input: {
        /**
         * The Kontent.ai resource identifier value.
         * @minLength 1
         * @pattern \S
         */
        identifier: string;
        /** How to address a Kontent.ai resource. */
        identifierType: "id" | "codename" | "externalId";
      };
      output: {
        /** A normalized Kontent.ai language. */
        language: {
          /** The Kontent.ai language UUID when returned. */
          id: string | null;
          /** The language display name when returned. */
          name: string | null;
          /** The Kontent.ai language codename when returned. */
          codename: string | null;
          /** The Kontent.ai external_id value when returned. */
          externalId: string | null;
          /** Whether the language is active when returned. */
          isActive: boolean | null;
          /** Whether the language is the environment default when returned. */
          isDefault: boolean | null;
          /** The raw Kontent.ai object. */
          raw: Record<string, unknown>;
        };
        /** The raw Kontent.ai object. */
        raw: Record<string, unknown>;
      };
    };
    /** List content items in a Kontent.ai environment. */
    "kontent_ai.list_content_items": {
      input: {
        /**
         * The x-continuation token returned by a previous Kontent.ai list response.
         * @minLength 1
         * @pattern \S
         */
        continuationToken?: string;
      };
      output: {
        /** The Kontent.ai items returned by the API. */
        items: Array<{
          /** The Kontent.ai resource UUID when returned. */
          id: string | null;
          /** The Kontent.ai display name when returned. */
          name: string | null;
          /** The Kontent.ai codename when returned. */
          codename: string | null;
          /** The Kontent.ai external_id value when returned. */
          externalId: string | null;
          /** The raw Kontent.ai object. */
          raw: Record<string, unknown>;
        }>;
        /** The next pagination.continuation_token value when Kontent.ai returns one. */
        continuationToken: string | null;
        /** The raw Kontent.ai list response. */
        raw: Record<string, unknown>;
      };
    };
    /** List content types in a Kontent.ai environment. */
    "kontent_ai.list_content_types": {
      input: {
        /**
         * The x-continuation token returned by a previous Kontent.ai list response.
         * @minLength 1
         * @pattern \S
         */
        continuationToken?: string;
      };
      output: {
        /** The Kontent.ai types returned by the API. */
        types: Array<{
          /** The Kontent.ai resource UUID when returned. */
          id: string | null;
          /** The Kontent.ai display name when returned. */
          name: string | null;
          /** The Kontent.ai codename when returned. */
          codename: string | null;
          /** The Kontent.ai external_id value when returned. */
          externalId: string | null;
          /** The raw Kontent.ai object. */
          raw: Record<string, unknown>;
        }>;
        /** The next pagination.continuation_token value when Kontent.ai returns one. */
        continuationToken: string | null;
        /** The raw Kontent.ai list response. */
        raw: Record<string, unknown>;
      };
    };
    /** List languages in a Kontent.ai environment. */
    "kontent_ai.list_languages": {
      input: {
        /**
         * The x-continuation token returned by a previous Kontent.ai list response.
         * @minLength 1
         * @pattern \S
         */
        continuationToken?: string;
      };
      output: {
        /** The Kontent.ai languages returned by the API. */
        languages: Array<{
          /** The Kontent.ai language UUID when returned. */
          id: string | null;
          /** The language display name when returned. */
          name: string | null;
          /** The Kontent.ai language codename when returned. */
          codename: string | null;
          /** The Kontent.ai external_id value when returned. */
          externalId: string | null;
          /** Whether the language is active when returned. */
          isActive: boolean | null;
          /** Whether the language is the environment default when returned. */
          isDefault: boolean | null;
          /** The raw Kontent.ai object. */
          raw: Record<string, unknown>;
        }>;
        /** The next pagination.continuation_token value when Kontent.ai returns one. */
        continuationToken: string | null;
        /** The raw Kontent.ai list response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
