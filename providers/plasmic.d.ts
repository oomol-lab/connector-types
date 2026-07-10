import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Count rows in a Plasmic CMS model using the same q query filters, draft mode, and locale selection as list_items. */
    "plasmic.count_items": {
      input: {
        /**
         * The Plasmic CMS model ID, such as testimonials, copied from the model schema page.
         * @minLength 1
         */
        modelId: string;
        /** A Plasmic CMS query object serialized into the q query parameter. Use official keys such as where, limit, and offset. */
        query?: Record<string, unknown>;
        /** Whether to pass draft=1 and load draft or unpublished rows. This requires a secret CMS token. */
        draft?: boolean;
        /**
         * The CMS locale tag used for localized fields, such as ar-JO.
         * @minLength 1
         */
        locale?: string;
      };
      output: {
        /**
         * The number of rows matching the requested Plasmic CMS query.
         * @minimum 0
         */
        count: number;
        [key: string]: unknown;
      };
    };
    /** List rows from a Plasmic CMS model with optional q query filters, draft mode, and locale selection. */
    "plasmic.list_items": {
      input: {
        /**
         * The Plasmic CMS model ID, such as testimonials, copied from the model schema page.
         * @minLength 1
         */
        modelId: string;
        /** A Plasmic CMS query object serialized into the q query parameter. Use official keys such as where, limit, and offset. */
        query?: Record<string, unknown>;
        /** Whether to pass draft=1 and load draft or unpublished rows. This requires a secret CMS token. */
        draft?: boolean;
        /**
         * The CMS locale tag used for localized fields, such as ar-JO.
         * @minLength 1
         */
        locale?: string;
      };
      output: {
        /** Rows returned for the requested model query. */
        rows: Array<{
          /** The Plasmic CMS row ID. */
          id?: string;
          /**
           * The time Plasmic created the row.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The time Plasmic last updated the row.
           * @format date-time
           */
          updatedAt?: string;
          /** The row identifier configured for the model. */
          identifier?: string | null;
          /** Model-defined Plasmic CMS field values for a row. */
          data?: Record<string, unknown> | null;
          /** Model-defined Plasmic CMS field values for a row. */
          draftData?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
