import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new Formcarry form with basic notification, redirect, and storage settings. */
    "formcarry.create_form": {
      input: {
        /**
         * Name of the form.
         * @minLength 1
         */
        name: string;
        /**
         * Comma-separated email addresses that should receive submission notifications.
         * @minLength 1
         */
        email: string;
        /**
         * URL to redirect users to after a successful submission when not using the built-in thank-you page.
         * @format uri
         */
        returnUrl?: string;
        /**
         * URL to redirect users to after a failed submission when returnUrl is configured.
         * @format uri
         */
        failUrl?: string;
        /** Whether Formcarry should append submission data to the returnUrl query string. */
        returnParams?: boolean;
        /** Google reCAPTCHA secret key used to enable spam protection for the form. */
        googleRecaptcha?: string;
        /**
         * Webhook URL that Formcarry should call with a POST request for each submission.
         * @format uri
         */
        webhook?: string;
        /** Whether Formcarry should save incoming submissions to its database. */
        retention?: boolean;
      };
      output: {
        /** Numeric status code returned by Formcarry. */
        code: number;
        /** Title message returned by Formcarry. */
        title: string;
        /** Human-readable message returned by Formcarry. */
        message: string;
        /** Result type returned by Formcarry. */
        type: string;
        /** Hosted Formcarry form URL created for the new form. */
        formUrl: string;
        [key: string]: unknown;
      };
    };
    /** Delete an existing Formcarry form by ID. */
    "formcarry.delete_form": {
      input: {
        /**
         * Formcarry form ID to delete.
         * @minLength 1
         */
        form_id: string;
      };
      output: {
        /** Numeric status code returned by Formcarry. */
        code: number;
        /** Title message returned by Formcarry. */
        title: string;
        /** Human-readable message returned by Formcarry. */
        message: string;
        /** Result type returned by Formcarry. */
        type: string;
        [key: string]: unknown;
      };
    };
    /** List submissions for a Formcarry form with the documented pagination, sorting, and filtering query parameters. */
    "formcarry.list_submissions": {
      input: {
        /**
         * Formcarry form ID whose submissions should be retrieved.
         * @minLength 1
         */
        form_id: string;
        /**
         * Maximum number of submissions to return. Formcarry documents a maximum of 50.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /** Sorting criteria in the format field:order, such as createdAt:-1 or createdAt:1. */
        sort?: string;
        /** Comma-separated filter expressions in the format key:value, including documented filters like date:7, attachments:true, or spam:false. */
        filter?: string;
      };
      output: {
        /** Form ID whose submissions were requested. */
        form: string;
        /** Number of submissions returned in the current response. */
        results: number;
        /** Submissions returned by Formcarry. */
        submissions: Array<{
          /** Unique identifier of the submission. */
          _id?: string;
          /** Form ID associated with the submission. */
          form?: string;
          /** Timestamp when the submission was created. */
          createdAt?: string;
          /** Timestamp when the submission was last updated. */
          updatedAt?: string;
          /** Field values captured in the submission. */
          fields?: Array<{
            /** Field key returned by Formcarry. */
            key?: string;
            /** Field label returned by Formcarry. */
            label?: string;
            /** Field type returned by Formcarry. */
            type?: string;
            /** Field value returned by Formcarry. */
            value?: unknown;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Formcarry. */
        pagination: {
          /** Current page number. */
          current_page: number;
          /** Previous page number, or null when unavailable. */
          previous_page: number | null;
          /** Next page number, or null when unavailable. */
          next_page: number | null;
          /** Total number of available pages. */
          total_page: number;
          /** Total number of submissions available for the form. */
          total_submissions: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
