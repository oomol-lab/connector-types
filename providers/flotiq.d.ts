import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Flotiq content object using fields from its content type schema. Types with Draft & Public enabled create drafts. */
    "flotiq.create_content_object": {
      input: {
        /**
         * The content type API name, such as blogposts.
         * @minLength 1
         */
        contentType: string;
        /** Content fields matching the content type schema, including optional id and relation references. Maximum object size is 1 MB. */
        content: Record<string, unknown>;
      };
      output: {
        /** The content object's schema-defined fields and Flotiq metadata. */
        object: Record<string, unknown>;
      };
    };
    /** Delete one Flotiq content object by ID. Flotiq can reject deletion when other objects reference it. */
    "flotiq.delete_content_object": {
      input: {
        /**
         * The content type API name, such as blogposts.
         * @minLength 1
         */
        contentType: string;
        /**
         * The content object ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Flotiq accepted the deletion. */
        deleted: boolean;
      };
    };
    /** Get a Flotiq content object by ID with optional relation hydration and draft preview. */
    "flotiq.get_content_object": {
      input: {
        /**
         * The content type API name, such as blogposts.
         * @minLength 1
         */
        contentType: string;
        /**
         * The content object ID.
         * @minLength 1
         */
        id: string;
        /**
         * Relation hydration depth: 0, 1 or 2.
         * @minimum 0
         * @maximum 2
         */
        hydrate?: number;
        /** Include draft and archived content using X-MODE: preview; defaults to false. */
        preview?: boolean;
      };
      output: {
        /** The content object's schema-defined fields and Flotiq metadata. */
        object: Record<string, unknown>;
      };
    };
    /** Get a Flotiq content type definition to discover its fields before reading or writing objects. */
    "flotiq.get_content_type": {
      input: {
        /**
         * The content type API name, such as blogposts.
         * @minLength 1
         */
        contentType: string;
        /** Resolve schema references; defaults to false. */
        resolveRef?: boolean;
        /** Use the OpenAPI-compatible schema property when resolveRef is true. */
        strictSchema?: boolean;
      };
      output: {
        /** The complete content type definition and schema. */
        contentType: Record<string, unknown>;
      };
    };
    /** List one page of Flotiq content objects with filtering, sorting, relation hydration and optional draft preview. */
    "flotiq.list_content_objects": {
      input: {
        /**
         * The content type API name, such as blogposts.
         * @minLength 1
         */
        contentType: string;
        /**
         * The 1-based page number; defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Objects per page; defaults to 20, maximum 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The schema field to sort by, such as internal.createdAt.
         * @minLength 1
         */
        order_by?: string;
        /** Sort direction; defaults to asc. */
        order_direction?: "asc" | "desc";
        /** Place empty values first; defaults to false. */
        empty_first?: boolean;
        /** Flotiq filter conditions keyed by field, such as {title: {type: 'equals', filter: 'Hello'}}. Encoded as JSON by the connector. */
        filters?: Record<string, unknown>;
        /**
         * Relation hydration depth: 0, 1 or 2.
         * @minimum 0
         * @maximum 2
         */
        hydrate?: number;
        /** Include draft and archived content using X-MODE: preview; defaults to false. */
        preview?: boolean;
      };
      output: {
        /** The content objects on this page. */
        data?: Array<Record<string, unknown>>;
        /** Total matching objects. */
        total_count?: number;
        /** Total available pages. */
        total_pages?: number;
        /** The returned 1-based page number. */
        current_page?: number;
        /** The number of objects on this page. */
        count?: number;
        [key: string]: unknown;
      };
    };
    /** Update a Flotiq content object. PATCH changes supplied fields; PUT replaces object data and requires all schema-required fields. */
    "flotiq.update_content_object": {
      input: {
        /**
         * The content type API name, such as blogposts.
         * @minLength 1
         */
        contentType: string;
        /**
         * The content object ID.
         * @minLength 1
         */
        id: string;
        /** Content fields matching the content type schema, including optional id and relation references. Maximum object size is 1 MB. */
        content: Record<string, unknown>;
        /** Update method; defaults to PATCH. PUT requires the complete object data. */
        method?: "PATCH" | "PUT";
      };
      output: {
        /** The content object's schema-defined fields and Flotiq metadata. */
        object: Record<string, unknown>;
      };
    };
  }
}
