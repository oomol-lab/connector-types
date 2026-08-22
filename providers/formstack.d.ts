import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a submission for a Formstack form using field IDs and typed values. */
    "formstack.create_submission": {
      input: {
        /**
         * The Formstack form ID.
         * @exclusiveMinimum 0
         */
        formId: number;
        /**
         * Field values to submit.
         * @minItems 1
         */
        fields: Array<{
          /**
           * The form field ID.
           * @minLength 1
           */
          id: string;
          /** The field value in the shape supported by the field type. */
          value: unknown;
        }>;
        /**
         * Browser user agent associated with the submission.
         * @minLength 1
         */
        userAgent?: string;
        /**
         * IP address associated with the submission.
         * @minLength 1
         */
        remoteAddress?: string;
        /** Whether the new submission should be marked as read. */
        read?: boolean;
        /**
         * Longitude captured with the submission.
         * @minLength 1
         */
        longitude?: string;
        /**
         * Latitude captured with the submission.
         * @minLength 1
         */
        latitude?: string;
        /**
         * Device identifier associated with the submission.
         * @minLength 1
         */
        deviceId?: string;
      };
      output: {
        /** A Formstack submission. */
        submission: {
          /** The submission ID. */
          id?: number | null;
          /** The form ID that owns the submission. */
          formId?: number | null;
          /** The provider-formatted submission timestamp. */
          timestamp?: string | null;
          /** The human-readable submission name when requested. */
          prettyName?: string | null;
          /** Field data returned for the submission. */
          data?: unknown;
          [key: string]: unknown;
        };
      };
    };
    /** Permanently delete a Formstack submission and its associated data. */
    "formstack.delete_submission": {
      input: {
        /**
         * The Formstack submission ID.
         * @exclusiveMinimum 0
         */
        submissionId: number;
      };
      output: {
        /** Whether the submission was deleted. */
        deleted: boolean;
        /**
         * The Formstack submission ID.
         * @exclusiveMinimum 0
         */
        submissionId: number;
      };
    };
    /** Retrieve one Formstack form, optionally including its fields. */
    "formstack.get_form": {
      input: {
        /**
         * The Formstack form ID.
         * @exclusiveMinimum 0
         */
        formId: number;
        /** Whether to include the form fields in the response. */
        includeFields?: boolean;
      };
      output: {
        /** A Formstack form. */
        form: {
          /**
           * The form ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The form name. */
          name?: string | null;
          /** The public form view key. */
          viewKey?: string;
          /** The live form URL returned by Formstack. */
          url?: string;
          /** Whether the form is active. */
          active?: boolean;
          /**
           * Total number of form submissions.
           * @minimum 0
           */
          submissionsCount?: number;
          /**
           * Number of unread form submissions.
           * @minimum 0
           */
          unreadSubmissionsCount?: number;
          /** The provider-formatted form creation time. */
          created?: string;
          /** The provider-formatted form update time. */
          updated?: string;
          /** Fields included with detailed form data. */
          fields?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Formstack submission and its field data. */
    "formstack.get_submission": {
      input: {
        /**
         * The Formstack submission ID.
         * @exclusiveMinimum 0
         */
        submissionId: number;
        /**
         * Form encryption password required to read encrypted submission data.
         * @minLength 1
         */
        encryptionPassword?: string;
      };
      output: {
        /** A Formstack submission. */
        submission: {
          /** The submission ID. */
          id?: number | null;
          /** The form ID that owns the submission. */
          formId?: number | null;
          /** The provider-formatted submission timestamp. */
          timestamp?: string | null;
          /** The human-readable submission name when requested. */
          prettyName?: string | null;
          /** Field data returned for the submission. */
          data?: unknown;
          [key: string]: unknown;
        };
      };
    };
    /** List the fields defined on a Formstack form. */
    "formstack.list_form_fields": {
      input: {
        /**
         * The Formstack form ID.
         * @exclusiveMinimum 0
         */
        formId: number;
      };
      output: {
        /** Form fields. */
        fields: Array<{
          /**
           * The field ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The field label. */
          label?: string | null;
          /** The field type. */
          type?: string;
          /** Whether the field is required, or null when unspecified. */
          required?: boolean | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Formstack forms with pagination, name search, sorting, and folder filtering. */
    "formstack.list_forms": {
      input: {
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * Number of forms per page.
         * @minimum 10
         * @maximum 500
         */
        pageSize?: number;
        /**
         * Text matched against form names.
         * @minLength 1
         */
        search?: string;
        /**
         * Form property used to sort results.
         * @minLength 1
         */
        orderBy?: string;
        /** Sort direction. */
        order?: "ASC" | "DESC";
        /**
         * Folder ID used to filter forms.
         * @exclusiveMinimum 0
         */
        folderId?: number;
      };
      output: {
        /** Pagination details returned by Formstack. */
        page: {
          /**
           * Number of records returned on the current page.
           * @minimum 0
           */
          size?: number;
          /**
           * Current page number.
           * @exclusiveMinimum 0
           */
          pageNumber?: number;
          /**
           * Configured page size.
           * @exclusiveMinimum 0
           */
          pageSize?: number;
          /**
           * Total number of matching records.
           * @minimum 0
           */
          totalElements?: number;
          /**
           * Total number of result pages.
           * @minimum 0
           */
          totalPages?: number;
          [key: string]: unknown;
        };
        /** Forms returned on the current page. */
        forms: Array<{
          /**
           * The form ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The form name. */
          name?: string | null;
          /** The public form view key. */
          viewKey?: string;
          /** The live form URL returned by Formstack. */
          url?: string;
          /** Whether the form is active. */
          active?: boolean;
          /**
           * Total number of form submissions.
           * @minimum 0
           */
          submissionsCount?: number;
          /**
           * Number of unread form submissions.
           * @minimum 0
           */
          unreadSubmissionsCount?: number;
          /** The provider-formatted form creation time. */
          created?: string;
          /** The provider-formatted form update time. */
          updated?: string;
          /** Fields included with detailed form data. */
          fields?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List submissions for a Formstack form with pagination, time, keyword, and field-level filters. */
    "formstack.list_submissions": {
      input: {
        /**
         * The Formstack form ID.
         * @exclusiveMinimum 0
         */
        formId: number;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * Number of submissions per page.
         * @minimum 10
         * @maximum 100
         */
        pageSize?: number;
        /** Sort direction. */
        order?: "ASC" | "DESC";
        /**
         * Text matched across submission fields.
         * @minLength 1
         */
        keyword?: string;
        /**
         * Earliest submission time in YYYY-MM-DD or YYYY-MM-DD HH:MM:SS Eastern Time format.
         * @minLength 1
         */
        minTime?: string;
        /**
         * Latest submission time in YYYY-MM-DD or YYYY-MM-DD HH:MM:SS Eastern Time format.
         * @minLength 1
         */
        maxTime?: string;
        /**
         * Field-level search criteria.
         * @maxItems 10
         */
        search?: Array<{
          /**
           * The field ID to search.
           * @minLength 1
           */
          fieldId: string;
          /** The value to match in the field. */
          value: string;
        }>;
        /** Whether to include field data in each submission. */
        includeData?: boolean;
        /** Whether to include parsed field values. */
        expandData?: boolean;
        /** Whether to include a human-readable submission name. */
        prettyName?: boolean;
        /** Shape used for returned field data. */
        dataFormat?: "legacy" | "standardized";
        /**
         * Form encryption password required to read encrypted submission data.
         * @minLength 1
         */
        encryptionPassword?: string;
      };
      output: {
        /** Pagination details returned by Formstack. */
        page: {
          /**
           * Number of records returned on the current page.
           * @minimum 0
           */
          size?: number;
          /**
           * Current page number.
           * @exclusiveMinimum 0
           */
          pageNumber?: number;
          /**
           * Configured page size.
           * @exclusiveMinimum 0
           */
          pageSize?: number;
          /**
           * Total number of matching records.
           * @minimum 0
           */
          totalElements?: number;
          /**
           * Total number of result pages.
           * @minimum 0
           */
          totalPages?: number;
          [key: string]: unknown;
        };
        /** Submissions returned on the current page. */
        submissions: Array<{
          /** The submission ID. */
          id?: number | null;
          /** The form ID that owns the submission. */
          formId?: number | null;
          /** The provider-formatted submission timestamp. */
          timestamp?: string | null;
          /** The human-readable submission name when requested. */
          prettyName?: string | null;
          /** Field data returned for the submission. */
          data?: unknown;
          [key: string]: unknown;
        }>;
      };
    };
    /** Replace field values or metadata on an existing Formstack submission. */
    "formstack.update_submission": {
      input: {
        /**
         * The Formstack submission ID.
         * @exclusiveMinimum 0
         */
        submissionId: number;
        /**
         * Replacement field values.
         * @minItems 1
         */
        fields?: Array<{
          /**
           * The form field ID.
           * @minLength 1
           */
          id: string;
          /** The field value in the shape supported by the field type. */
          value: unknown;
        }>;
        /**
         * Updated browser user agent.
         * @minLength 1
         */
        userAgent?: string;
        /**
         * Updated source IP address.
         * @minLength 1
         */
        remoteAddress?: string;
        /**
         * Updated payment status.
         * @minLength 1
         */
        paymentStatus?: string;
        /** Whether the submission should be marked as read. */
        read?: boolean;
        /**
         * Updated provider-formatted submission timestamp.
         * @minLength 1
         */
        timestamp?: string;
        /**
         * Form encryption password required to update encrypted submission data.
         * @minLength 1
         */
        encryptionPassword?: string;
      };
      output: {
        /** A Formstack submission. */
        submission: {
          /** The submission ID. */
          id?: number | null;
          /** The form ID that owns the submission. */
          formId?: number | null;
          /** The provider-formatted submission timestamp. */
          timestamp?: string | null;
          /** The human-readable submission name when requested. */
          prettyName?: string | null;
          /** Field data returned for the submission. */
          data?: unknown;
          [key: string]: unknown;
        };
      };
    };
  }
}
