import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one or more submissions for a Fillout form. */
    "fillout.create_submissions": {
      input: {
        /**
         * The Fillout form ID.
         * @minLength 1
         */
        formId: string;
        /**
         * The submissions to create in Fillout.
         * @minItems 1
         * @maxItems 10
         */
        submissions: Array<Record<string, unknown>>;
      };
      output: {
        /** The submissions created by Fillout. */
        submissions: Array<{
          /** The Fillout submission ID. */
          submissionId?: string;
          /** The timestamp when the submission was received. */
          submissionTime?: string;
          /** The timestamp when the submission was last updated. */
          lastUpdatedAt?: string;
          /** The answers returned for this submission. */
          questions?: Array<{
            /** The Fillout question ID. */
            questionId?: string;
            /** The question label or name. */
            name?: string;
            /** The Fillout question type. */
            type?: "ShortAnswer" | "LongAnswer" | "EmailInput" | "MultipleChoice" | "Checkboxes" | "Dropdown" | "FileUpload" | "DatePicker" | "NumberInput" | "PhoneNumber" | "CurrencyInput" | "Payment" | "Signature" | "Address" | "Slider" | "Rating" | "OpinionScale" | "Switch" | "Password" | "HiddenField" | "Table" | "Matrix" | "Captcha" | "ImagePicker" | "ColorPicker";
            /** The answer value returned by Fillout for this question type. */
            value?: unknown;
            [key: string]: unknown;
          }>;
          /** The calculated values returned for this submission. */
          calculations?: Array<unknown>;
          /** URL parameters captured with the submission. */
          urlParameters?: unknown;
          /** The quiz result payload when Fillout includes it. */
          quiz?: unknown;
          /** The generated documents attached to the submission. */
          documents?: Array<unknown>;
          /** The scheduling payload when Fillout includes it. */
          scheduling?: unknown;
          /** The payment payloads attached to the submission. */
          payments?: Array<unknown>;
          [key: string]: unknown;
        }>;
        /** The raw response object returned by Fillout. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete one Fillout form submission by submission ID. */
    "fillout.delete_submission": {
      input: {
        /**
         * The Fillout form ID.
         * @minLength 1
         */
        formId: string;
        /**
         * The Fillout submission ID.
         * @minLength 1
         */
        submissionId: string;
        /** Whether Fillout should include an edit link in the response. */
        includeEditLink?: boolean;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
        /** The deleted submission ID when Fillout returns it. */
        submissionId: string | null;
        /** The raw response returned by Fillout. */
        raw: unknown;
      };
    };
    /** Get metadata and configured questions for one Fillout form. */
    "fillout.get_form_metadata": {
      input: {
        /**
         * The Fillout form ID.
         * @minLength 1
         */
        formId: string;
      };
      output: {
        /** One Fillout form. */
        form: {
          /** The Fillout form ID. */
          formId?: string;
          /** The Fillout form name. */
          name?: string;
          /** The questions configured on the form. */
          questions?: Array<{
            /** The stable Fillout question ID. */
            id?: string;
            /** The question label or name. */
            name?: string;
            /** The Fillout question type. */
            type?: "ShortAnswer" | "LongAnswer" | "EmailInput" | "MultipleChoice" | "Checkboxes" | "Dropdown" | "FileUpload" | "DatePicker" | "NumberInput" | "PhoneNumber" | "CurrencyInput" | "Payment" | "Signature" | "Address" | "Slider" | "Rating" | "OpinionScale" | "Switch" | "Password" | "HiddenField" | "Table" | "Matrix" | "Captcha" | "ImagePicker" | "ColorPicker";
            [key: string]: unknown;
          }>;
          /**
           * The public Fillout form URL.
           * @format uri
           */
          url?: string;
          /** The Fillout form status. */
          status?: string;
          /** The timestamp when the form was created. */
          createdAt?: string;
          /** The timestamp when the form was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Fillout form submission by submission ID. */
    "fillout.get_submission": {
      input: {
        /**
         * The Fillout form ID.
         * @minLength 1
         */
        formId: string;
        /**
         * The Fillout submission ID.
         * @minLength 1
         */
        submissionId: string;
        /** Whether Fillout should include an edit link in the response. */
        includeEditLink?: boolean;
      };
      output: {
        /** One Fillout form submission. */
        submission: {
          /** The Fillout submission ID. */
          submissionId?: string;
          /** The timestamp when the submission was received. */
          submissionTime?: string;
          /** The timestamp when the submission was last updated. */
          lastUpdatedAt?: string;
          /** The answers returned for this submission. */
          questions?: Array<{
            /** The Fillout question ID. */
            questionId?: string;
            /** The question label or name. */
            name?: string;
            /** The Fillout question type. */
            type?: "ShortAnswer" | "LongAnswer" | "EmailInput" | "MultipleChoice" | "Checkboxes" | "Dropdown" | "FileUpload" | "DatePicker" | "NumberInput" | "PhoneNumber" | "CurrencyInput" | "Payment" | "Signature" | "Address" | "Slider" | "Rating" | "OpinionScale" | "Switch" | "Password" | "HiddenField" | "Table" | "Matrix" | "Captcha" | "ImagePicker" | "ColorPicker";
            /** The answer value returned by Fillout for this question type. */
            value?: unknown;
            [key: string]: unknown;
          }>;
          /** The calculated values returned for this submission. */
          calculations?: Array<unknown>;
          /** URL parameters captured with the submission. */
          urlParameters?: unknown;
          /** The quiz result payload when Fillout includes it. */
          quiz?: unknown;
          /** The generated documents attached to the submission. */
          documents?: Array<unknown>;
          /** The scheduling payload when Fillout includes it. */
          scheduling?: unknown;
          /** The payment payloads attached to the submission. */
          payments?: Array<unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List forms available to the authenticated Fillout account. */
    "fillout.list_forms": {
      input: Record<string, never>;
      output: {
        /** The forms returned by Fillout. */
        forms: Array<{
          /** The Fillout form ID. */
          formId?: string;
          /** The Fillout form name. */
          name?: string;
          /** The questions configured on the form. */
          questions?: Array<{
            /** The stable Fillout question ID. */
            id?: string;
            /** The question label or name. */
            name?: string;
            /** The Fillout question type. */
            type?: "ShortAnswer" | "LongAnswer" | "EmailInput" | "MultipleChoice" | "Checkboxes" | "Dropdown" | "FileUpload" | "DatePicker" | "NumberInput" | "PhoneNumber" | "CurrencyInput" | "Payment" | "Signature" | "Address" | "Slider" | "Rating" | "OpinionScale" | "Switch" | "Password" | "HiddenField" | "Table" | "Matrix" | "Captcha" | "ImagePicker" | "ColorPicker";
            [key: string]: unknown;
          }>;
          /**
           * The public Fillout form URL.
           * @format uri
           */
          url?: string;
          /** The Fillout form status. */
          status?: string;
          /** The timestamp when the form was created. */
          createdAt?: string;
          /** The timestamp when the form was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List submissions for one Fillout form with documented pagination and filters. */
    "fillout.list_submissions": {
      input: {
        /**
         * The Fillout form ID whose submissions should be listed.
         * @minLength 1
         */
        formId: string;
        /**
         * The maximum number of submissions to return.
         * @maximum 150
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Return submissions received after this ISO timestamp or date.
         * @minLength 1
         */
        afterDate?: string;
        /**
         * Return submissions received before this ISO timestamp or date.
         * @minLength 1
         */
        beforeDate?: string;
        /**
         * The zero-based offset for paginating submissions.
         * @minimum 0
         */
        offset?: number;
        /** The submission status filter. */
        status?: "in_progress" | "finished";
        /** Whether Fillout should include edit links in the response. */
        includeEditLink?: boolean;
        /** Whether Fillout should include preview submissions. */
        includePreview?: boolean;
        /** The sort order for returned submissions. */
        sort?: "asc" | "desc";
        /**
         * The search text passed through to Fillout.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** The submissions returned by Fillout. */
        submissions: Array<{
          /** The Fillout submission ID. */
          submissionId?: string;
          /** The timestamp when the submission was received. */
          submissionTime?: string;
          /** The timestamp when the submission was last updated. */
          lastUpdatedAt?: string;
          /** The answers returned for this submission. */
          questions?: Array<{
            /** The Fillout question ID. */
            questionId?: string;
            /** The question label or name. */
            name?: string;
            /** The Fillout question type. */
            type?: "ShortAnswer" | "LongAnswer" | "EmailInput" | "MultipleChoice" | "Checkboxes" | "Dropdown" | "FileUpload" | "DatePicker" | "NumberInput" | "PhoneNumber" | "CurrencyInput" | "Payment" | "Signature" | "Address" | "Slider" | "Rating" | "OpinionScale" | "Switch" | "Password" | "HiddenField" | "Table" | "Matrix" | "Captcha" | "ImagePicker" | "ColorPicker";
            /** The answer value returned by Fillout for this question type. */
            value?: unknown;
            [key: string]: unknown;
          }>;
          /** The calculated values returned for this submission. */
          calculations?: Array<unknown>;
          /** URL parameters captured with the submission. */
          urlParameters?: unknown;
          /** The quiz result payload when Fillout includes it. */
          quiz?: unknown;
          /** The generated documents attached to the submission. */
          documents?: Array<unknown>;
          /** The scheduling payload when Fillout includes it. */
          scheduling?: unknown;
          /** The payment payloads attached to the submission. */
          payments?: Array<unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Fillout. */
        pagination: {
          /**
           * The total number of submissions matching the query.
           * @minimum 0
           */
          totalResponses: number;
          /**
           * The total number of available pages.
           * @minimum 0
           */
          pageCount: number;
        };
      };
    };
  }
}
