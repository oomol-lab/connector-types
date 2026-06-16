import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete a Carbone template or a specific template version. */
    "carbone.delete_template": {
      input: {
        /**
         * The Carbone template ID or version ID.
         * @minLength 1
         * @pattern \S
         */
        templateIdOrVersionId: string;
        /**
         * The Carbone API version header value.
         * @minimum 4
         * @maximum 5
         */
        carboneVersion?: number;
      };
      output: {
        /** Whether the delete request succeeded. */
        success: boolean;
        /** The raw Carbone response wrapper. */
        raw: {
          /** Whether Carbone reported a successful operation. */
          success?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** List categories used by deployed Carbone templates. */
    "carbone.list_template_categories": {
      input: {
        /**
         * The Carbone API version header value.
         * @minimum 4
         * @maximum 5
         */
        carboneVersion?: number;
      };
      output: {
        /** The template categories returned by Carbone. */
        categories: Array<string>;
        /** The raw Carbone response wrapper. */
        raw: {
          /** Whether Carbone reported a successful operation. */
          success?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** List tags used by deployed Carbone templates. */
    "carbone.list_template_tags": {
      input: {
        /**
         * The Carbone API version header value.
         * @minimum 4
         * @maximum 5
         */
        carboneVersion?: number;
      };
      output: {
        /** The template tags returned by Carbone. */
        tags: Array<string>;
        /** The raw Carbone response wrapper. */
        raw: {
          /** Whether Carbone reported a successful operation. */
          success?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Carbone templates with optional filtering and cursor pagination. */
    "carbone.list_templates": {
      input: {
        /**
         * Filter templates by template ID.
         * @minLength 1
         * @pattern \S
         */
        id?: string;
        /**
         * Filter templates by version ID.
         * @minLength 1
         * @pattern \S
         */
        versionId?: string;
        /**
         * Filter templates by category.
         * @minLength 1
         * @pattern \S
         */
        category?: string;
        /**
         * Search templates by name or ID.
         * @minLength 1
         * @pattern \S
         */
        search?: string;
        /** Whether to include every template version in the result. */
        includeVersions?: boolean;
        /**
         * The cursor returned by a previous list_templates call.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /**
         * The maximum number of templates to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The Carbone API version header value.
         * @minimum 4
         * @maximum 5
         */
        carboneVersion?: number;
      };
      output: {
        /** The templates returned by Carbone. */
        templates: Array<{
          /** The template ID when returned by Carbone. */
          id?: string | null;
          /** The template version ID when returned by Carbone. */
          versionId?: string | null;
          /** The template name when returned by Carbone. */
          name?: string | null;
          /** The template category when returned by Carbone. */
          category?: string | null;
          /** The tags attached to the template. */
          tags?: Array<string> | null;
          [key: string]: unknown;
        }>;
        /** The pagination metadata returned by Carbone. */
        pagination: {
          /** The current cursor returned by Carbone. */
          cursor?: string | null;
          /** The next cursor returned by Carbone. */
          nextCursor?: string | null;
          /** The page size returned by Carbone. */
          limit?: number | null;
          [key: string]: unknown;
        };
        /** The raw Carbone response wrapper. */
        raw: {
          /** Whether Carbone reported a successful operation. */
          success?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Update metadata on an existing Carbone template or template version. */
    "carbone.update_template_metadata": {
      input: {
        /**
         * The Carbone template ID or version ID.
         * @minLength 1
         * @pattern \S
         */
        templateIdOrVersionId: string;
        /** The metadata fields used to update a Carbone template. */
        metadata: {
          /**
           * The template name.
           * @minLength 1
           * @pattern \S
           */
          name?: string;
          /**
           * The template comment.
           * @minLength 1
           * @pattern \S
           */
          comment?: string;
          /**
           * The template category.
           * @minLength 1
           * @pattern \S
           */
          category?: string;
          /** The tags attached to the template. */
          tags?: Array<string>;
          /** The UTC Unix timestamp used by Carbone. */
          expireAt?: number;
          /** The UTC Unix timestamp used by Carbone. */
          deployedAt?: number;
          /** Whether template versioning should be enabled. */
          versioning?: boolean;
        };
        /**
         * The Carbone API version header value.
         * @minimum 4
         * @maximum 5
         */
        carboneVersion?: number;
      };
      output: {
        /** Whether the update request succeeded. */
        success: boolean;
        /** A Carbone template object returned by the API. */
        template: {
          /** The template ID when returned by Carbone. */
          id?: string | null;
          /** The template version ID when returned by Carbone. */
          versionId?: string | null;
          /** The template name when returned by Carbone. */
          name?: string | null;
          /** The template category when returned by Carbone. */
          category?: string | null;
          /** The tags attached to the template. */
          tags?: Array<string> | null;
          [key: string]: unknown;
        } | null;
        /** The raw Carbone response wrapper. */
        raw: {
          /** Whether Carbone reported a successful operation. */
          success?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
