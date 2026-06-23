import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Persona inquiry with an inquiry template and optional JSON prefilled attributes. */
    "persona.create_inquiry": {
      input: {
        /**
         * The Dynamic Flow inquiry template ID starting with itmpl_.
         * @minLength 1
         */
        inquiryTemplateId: string;
        /**
         * External reference ID to attach to the inquiry.
         * @minLength 1
         */
        referenceId?: string;
        /**
         * Existing Persona account ID to attach to the inquiry.
         * @minLength 1
         */
        accountId?: string;
        /**
         * Note to attach to the inquiry.
         * @minLength 1
         */
        note?: string;
        /** Tags to attach to the inquiry. */
        tags?: Array<string>;
        /** Template-specific prefill fields accepted by Persona. */
        fields?: Record<string, unknown>;
        /** Additional Persona JSON:API relationships to include in the create request. */
        relationships?: Record<string, {
            /** The related resource identifier or identifiers. */
            data: {
              /**
               * The Persona resource ID.
               * @minLength 1
               */
              id: string;
              /**
               * The Persona resource type.
               * @minLength 1
               */
              type: string;
            } | Array<{
              /**
               * The Persona resource ID.
               * @minLength 1
               */
              id: string;
              /**
               * The Persona resource type.
               * @minLength 1
               */
              type: string;
            }>;
          }>;
        /**
         * Comma-separated relationship paths to include in the response.
         * @minLength 1
         */
        include?: string;
        /** Sparse fieldsets keyed by Persona resource type for the response. */
        fieldsToSerialize?: Record<string, string>;
        /**
         * Idempotency key used by Persona to make the create request safe to retry.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** One Persona inquiry. */
        inquiry: {
          /**
           * The Persona inquiry ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Persona resource type.
           * @minLength 1
           */
          type: string;
          /** Persona inquiry attributes returned by the API. */
          attributes?: {
            /** The current Persona inquiry status. */
            status?: string;
            /** The external reference ID attached to the inquiry. */
            referenceId?: string | null;
            /** The note attached to the inquiry. */
            note?: string | null;
            /** The tags attached to the inquiry. */
            tags?: Array<string>;
            /** The timestamp when the inquiry was created. */
            createdAt?: string | null;
            /** The timestamp when the inquiry was last updated. */
            updatedAt?: string | null;
            /** The timestamp when the inquiry was completed. */
            completedAt?: string | null;
            /** The timestamp when the inquiry was decisioned. */
            decisionedAt?: string | null;
            /** Template-specific field values returned by Persona. */
            fields?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Persona relationships included on the inquiry. */
          relationships?: Record<string, unknown>;
          /** The raw Persona inquiry object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Related Persona resources included in the response. */
        included: Array<Record<string, unknown>>;
        /** The raw Persona response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Persona inquiry by ID. */
    "persona.get_inquiry": {
      input: {
        /**
         * The Persona inquiry ID starting with inq_.
         * @minLength 1
         */
        inquiryId: string;
        /**
         * Comma-separated relationship paths to include in the response.
         * @minLength 1
         */
        include?: string;
        /** Sparse fieldsets keyed by Persona resource type. */
        fields?: Record<string, string>;
      };
      output: {
        /** One Persona inquiry. */
        inquiry: {
          /**
           * The Persona inquiry ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Persona resource type.
           * @minLength 1
           */
          type: string;
          /** Persona inquiry attributes returned by the API. */
          attributes?: {
            /** The current Persona inquiry status. */
            status?: string;
            /** The external reference ID attached to the inquiry. */
            referenceId?: string | null;
            /** The note attached to the inquiry. */
            note?: string | null;
            /** The tags attached to the inquiry. */
            tags?: Array<string>;
            /** The timestamp when the inquiry was created. */
            createdAt?: string | null;
            /** The timestamp when the inquiry was last updated. */
            updatedAt?: string | null;
            /** The timestamp when the inquiry was completed. */
            completedAt?: string | null;
            /** The timestamp when the inquiry was decisioned. */
            decisionedAt?: string | null;
            /** Template-specific field values returned by Persona. */
            fields?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Persona relationships included on the inquiry. */
          relationships?: Record<string, unknown>;
          /** The raw Persona inquiry object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Related Persona resources included in the response. */
        included: Array<Record<string, unknown>>;
        /** The raw Persona response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Persona inquiries across inquiry templates with documented cursor pagination and filters. */
    "persona.list_inquiries": {
      input: {
        /** Cursor pagination options for Persona list endpoints. */
        page?: {
          /**
           * Object ID cursor for the next page.
           * @minLength 1
           */
          after?: string;
          /**
           * Object ID cursor for the previous page.
           * @minLength 1
           */
          before?: string;
          /**
           * The maximum number of objects to return.
           * @exclusiveMinimum 0
           */
          size?: number;
        };
        /** Persona inquiry filters. */
        filter?: {
          /**
           * Comma-separated inquiry IDs starting with inq_ to filter by.
           * @minLength 1
           */
          inquiryId?: string;
          /**
           * Comma-separated account IDs starting with act_ to filter by.
           * @minLength 1
           */
          accountId?: string;
          /**
           * Filter inquiries by note. Must be the only filter.
           * @minLength 1
           */
          note?: string;
          /**
           * Filter inquiries by reference ID.
           * @minLength 1
           */
          referenceId?: string;
          /**
           * Comma-separated inquiry template IDs starting with itmpl_ to filter by.
           * @minLength 1
           */
          inquiryTemplateId?: string;
          /**
           * Comma-separated legacy template IDs starting with tmpl_ to filter by.
           * @minLength 1
           */
          templateId?: string;
          /**
           * Comma-separated inquiry statuses to filter by.
           * @minLength 1
           */
          status?: string;
          /**
           * Filter inquiries created at or after this ISO timestamp.
           * @minLength 1
           */
          createdAtStart?: string;
          /**
           * Filter inquiries created at or before this ISO timestamp.
           * @minLength 1
           */
          createdAtEnd?: string;
        };
        /**
         * Comma-separated relationship paths to include in the response.
         * @minLength 1
         */
        include?: string;
        /** Sparse fieldsets keyed by Persona resource type. */
        fields?: Record<string, string>;
      };
      output: {
        /** The Persona inquiries returned by the API. */
        inquiries: Array<{
          /**
           * The Persona inquiry ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Persona resource type.
           * @minLength 1
           */
          type: string;
          /** Persona inquiry attributes returned by the API. */
          attributes?: {
            /** The current Persona inquiry status. */
            status?: string;
            /** The external reference ID attached to the inquiry. */
            referenceId?: string | null;
            /** The note attached to the inquiry. */
            note?: string | null;
            /** The tags attached to the inquiry. */
            tags?: Array<string>;
            /** The timestamp when the inquiry was created. */
            createdAt?: string | null;
            /** The timestamp when the inquiry was last updated. */
            updatedAt?: string | null;
            /** The timestamp when the inquiry was completed. */
            completedAt?: string | null;
            /** The timestamp when the inquiry was decisioned. */
            decisionedAt?: string | null;
            /** Template-specific field values returned by Persona. */
            fields?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Persona relationships included on the inquiry. */
          relationships?: Record<string, unknown>;
          /** The raw Persona inquiry object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Persona pagination links. */
        links: {
          /** The previous page URL returned by Persona, or null. */
          prev: string | null;
          /** The next page URL returned by Persona, or null. */
          next: string | null;
        };
        /** Related Persona resources included in the response. */
        included: Array<Record<string, unknown>>;
        /** The raw Persona response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Update supported Persona inquiry attributes such as reference ID, note, tags, or fields. */
    "persona.update_inquiry": {
      input: {
        /**
         * The Persona inquiry ID starting with inq_.
         * @minLength 1
         */
        inquiryId: string;
        /**
         * External reference ID to attach to the inquiry.
         * @minLength 1
         */
        referenceId?: string;
        /**
         * Note to attach to the inquiry.
         * @minLength 1
         */
        note?: string;
        /** Tags to attach to the inquiry. */
        tags?: Array<string>;
        /** Template-specific field updates accepted by Persona. */
        fields?: Record<string, unknown>;
        /**
         * Comma-separated relationship paths to include in the response.
         * @minLength 1
         */
        include?: string;
        /** Sparse fieldsets keyed by Persona resource type for the response. */
        fieldsToSerialize?: Record<string, string>;
        /**
         * Idempotency key used by Persona to make the update request safe to retry.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** One Persona inquiry. */
        inquiry: {
          /**
           * The Persona inquiry ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Persona resource type.
           * @minLength 1
           */
          type: string;
          /** Persona inquiry attributes returned by the API. */
          attributes?: {
            /** The current Persona inquiry status. */
            status?: string;
            /** The external reference ID attached to the inquiry. */
            referenceId?: string | null;
            /** The note attached to the inquiry. */
            note?: string | null;
            /** The tags attached to the inquiry. */
            tags?: Array<string>;
            /** The timestamp when the inquiry was created. */
            createdAt?: string | null;
            /** The timestamp when the inquiry was last updated. */
            updatedAt?: string | null;
            /** The timestamp when the inquiry was completed. */
            completedAt?: string | null;
            /** The timestamp when the inquiry was decisioned. */
            decisionedAt?: string | null;
            /** Template-specific field values returned by Persona. */
            fields?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Persona relationships included on the inquiry. */
          relationships?: Record<string, unknown>;
          /** The raw Persona inquiry object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Related Persona resources included in the response. */
        included: Array<Record<string, unknown>>;
        /** The raw Persona response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
