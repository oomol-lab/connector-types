import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one ByteForms form by form ID. */
    "byteforms.get_form": {
      input: {
        /**
         * The ByteForms form ID to retrieve.
         * @minLength 1
         */
        formId: string;
      };
      output: {
        /** One normalized ByteForms form. */
        form: {
          /** The internal ByteForms form ID. */
          id: number | string;
          /** The public ByteForms form ID. */
          public_id?: string;
          /** The visible ByteForms form name. */
          name?: string;
          /** The form body definition. */
          body?: Array<{
            /** The ByteForms component category, such as input. */
            component?: string;
            /** The ByteForms component type, such as text or email. */
            type?: string;
            /** The field label shown in the form builder. */
            label?: string;
            /** The placeholder shown for the field. */
            placeholder?: string;
            /** The form page that owns this field. */
            page?: number;
            /** The field index within the form body. */
            index?: number;
            /** The field identifier used in ByteForms responses. */
            id?: string;
            /** Whether the field is required. */
            required?: boolean;
            [key: string]: unknown;
          }>;
          /** The ByteForms pages payload when present. */
          pages?: unknown;
          /** Whether the form is marked as custom. */
          is_custom?: boolean;
          /** The documented ByteForms form options object. */
          options?: {
            /** Whether ByteForms restricts one submission per email. */
            one_submission_per_email?: boolean;
            /** The thank-you message shown after submission. */
            thank_you_message?: string;
            /** The maximum number of allowed submissions. */
            max_submissions?: number;
            /** The timestamp after which ByteForms stops accepting submissions. */
            stop_submissions_after?: string | null;
            /** The submit button label configured for the form. */
            submit_button_text?: string;
            /** The configured form width mode. */
            form_width?: string;
            /** The redirect URL configured after submission. */
            redirect_url?: string;
            /** The configured password protection value. */
            password?: string;
            /** The ByteForms theme name applied to the form. */
            theme?: string;
            /** The visibility mode configured for the form. */
            visibility?: string;
            /** The page navigation behaviour for the form. */
            page_behaviour?: string;
            /** The custom code snippet configured for the form. */
            custom_code?: string;
            /** Whether draft submissions are enabled. */
            draft_submissions?: boolean;
            /** Whether ByteForms branding is removed from the form. */
            remove_branding?: boolean;
            /** Whether email notifications are enabled for the form. */
            email_notifications?: boolean;
            [key: string]: unknown;
          };
          /** The owning ByteForms user ID. */
          user_id?: number | string;
          /** The timestamp when the form was created. */
          created_at?: string;
          /** The timestamp when the form was last updated. */
          updated_at?: string;
          /** The timestamp when the form was deleted, or null when active. */
          deleted_at?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List responses for one ByteForms form with the documented cursor, query, order, and limit parameters. */
    "byteforms.list_form_responses": {
      input: {
        /**
         * The ByteForms form ID whose responses should be listed.
         * @minLength 1
         */
        formId: string;
        /**
         * The maximum number of responses to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** The sort order for the response page. */
        order?: "asc" | "desc";
        /**
         * The free-text filter query passed through to ByteForms.
         * @minLength 1
         */
        query?: string;
        /**
         * The cursor used to request the next response page.
         * @minLength 1
         */
        after?: string;
        /**
         * The cursor used to request the previous response page.
         * @minLength 1
         */
        before?: string;
      };
      output: {
        /**
         * The number of responses in the current page.
         * @minimum 0
         */
        count: number;
        /** The ByteForms response pagination cursors. */
        cursor: {
          /** The cursor to request the next response page, or null when unavailable. */
          after: string | null;
          /** The cursor to request the previous response page, or null when unavailable. */
          before: string | null;
        };
        /** The responses returned for the requested form. */
        responses: Array<{
          /** The ByteForms response ID. */
          id: number | string;
          /** The owning ByteForms form ID. */
          form_id: number | string;
          /** The field-value pairs returned for one form submission. */
          response: Record<string, unknown>;
          /** The submission options object returned by ByteForms. */
          options?: {
            /** The submitter IP address recorded by ByteForms. */
            ip?: string;
            [key: string]: unknown;
          };
          /** The timestamp when the response was created. */
          created_at?: string;
          /** The timestamp when the response was last updated. */
          updated_at?: string;
          /** The timestamp when the response was deleted, or null when active. */
          deleted_at?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List forms available to the authenticated ByteForms account. */
    "byteforms.list_forms": {
      input: Record<string, never>;
      output: {
        /** The forms returned by ByteForms. */
        forms: Array<{
          /** The internal ByteForms form ID. */
          id: number | string;
          /** The public ByteForms form ID. */
          public_id?: string;
          /** The visible ByteForms form name. */
          name?: string;
          /** The form body definition. */
          body?: Array<{
            /** The ByteForms component category, such as input. */
            component?: string;
            /** The ByteForms component type, such as text or email. */
            type?: string;
            /** The field label shown in the form builder. */
            label?: string;
            /** The placeholder shown for the field. */
            placeholder?: string;
            /** The form page that owns this field. */
            page?: number;
            /** The field index within the form body. */
            index?: number;
            /** The field identifier used in ByteForms responses. */
            id?: string;
            /** Whether the field is required. */
            required?: boolean;
            [key: string]: unknown;
          }>;
          /** The ByteForms pages payload when present. */
          pages?: unknown;
          /** Whether the form is marked as custom. */
          is_custom?: boolean;
          /** The documented ByteForms form options object. */
          options?: {
            /** Whether ByteForms restricts one submission per email. */
            one_submission_per_email?: boolean;
            /** The thank-you message shown after submission. */
            thank_you_message?: string;
            /** The maximum number of allowed submissions. */
            max_submissions?: number;
            /** The timestamp after which ByteForms stops accepting submissions. */
            stop_submissions_after?: string | null;
            /** The submit button label configured for the form. */
            submit_button_text?: string;
            /** The configured form width mode. */
            form_width?: string;
            /** The redirect URL configured after submission. */
            redirect_url?: string;
            /** The configured password protection value. */
            password?: string;
            /** The ByteForms theme name applied to the form. */
            theme?: string;
            /** The visibility mode configured for the form. */
            visibility?: string;
            /** The page navigation behaviour for the form. */
            page_behaviour?: string;
            /** The custom code snippet configured for the form. */
            custom_code?: string;
            /** Whether draft submissions are enabled. */
            draft_submissions?: boolean;
            /** Whether ByteForms branding is removed from the form. */
            remove_branding?: boolean;
            /** Whether email notifications are enabled for the form. */
            email_notifications?: boolean;
            [key: string]: unknown;
          };
          /** The owning ByteForms user ID. */
          user_id?: number | string;
          /** The timestamp when the form was created. */
          created_at?: string;
          /** The timestamp when the form was last updated. */
          updated_at?: string;
          /** The timestamp when the form was deleted, or null when active. */
          deleted_at?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
