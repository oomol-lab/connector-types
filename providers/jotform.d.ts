import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a submission on a Jotform form using question IDs and answer values. */
    "jotform.create_submission": {
      input: {
        /**
         * The Jotform form ID that will receive the submission.
         * @minLength 1
         */
        formId: string;
        /** The submission answers keyed by Jotform question ID. Values may be scalars, arrays, or nested objects for compound fields. */
        answers: Record<string, unknown>;
        /** Whether Jotform should mark the submission as new. */
        markAsNew?: boolean;
        /** Whether Jotform should set the submission flag. */
        flag?: boolean;
      };
      output: {
        /**
         * The Jotform submission ID created by the request.
         * @minLength 1
         */
        submissionId: string;
        /** The API URL that can be used to retrieve the created Jotform submission. */
        submissionUrl: string;
      };
    };
    /** Get the current Jotform account associated with the authenticated API key. */
    "jotform.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The normalized current Jotform account. */
        user: {
          /**
           * The Jotform username associated with the API key.
           * @minLength 1
           */
          username: string;
          /** The full name reported by Jotform. */
          name?: string;
          /** The account email address reported by Jotform. */
          email?: string;
          /** The website URL stored on the Jotform account. */
          website?: string;
          /** The configured IANA time zone for the account. */
          time_zone?: string;
          /** The Jotform account plan URL or identifier. */
          account_type?: string;
          /** The current account status reported by Jotform. */
          status?: string;
          /** The timestamp when the account was created. */
          created_at?: string;
          /** The timestamp when the account was last updated. */
          updated_at?: string;
          /** Whether the Jotform account is verified. */
          is_verified: boolean;
          /** The Jotform usage endpoint URL for the account. */
          usage?: string;
          /** The industry configured on the account. */
          industry?: string;
          /** The company configured on the account. */
          company?: string;
          /** The language configured on the account. */
          language?: string;
          /** The avatar URL reported by Jotform. */
          avatarUrl?: string;
          /** The account-level webhooks configured in Jotform. */
          webhooks: Array<string>;
          /** Whether the account disables form cloning. */
          doNotClone: boolean;
        };
      };
    };
    /** Get one Jotform form by form ID. */
    "jotform.get_form": {
      input: {
        /**
         * The Jotform form ID to retrieve.
         * @minLength 1
         */
        formId: string;
      };
      output: {
        /** The requested Jotform form. */
        form: {
          /**
           * The unique Jotform form ID.
           * @minLength 1
           */
          id: string;
          /** The Jotform username that owns the form. */
          username?: string;
          /** The visible form title. */
          title?: string;
          /** The configured form height in pixels. */
          height?: number;
          /** The current Jotform form status. */
          status?: string;
          /** The timestamp when the form was created. */
          created_at?: string;
          /** The timestamp when the form was last updated. */
          updated_at?: string;
          /** The timestamp of the most recent form submission. */
          last_submission?: string;
          /**
           * The count of unread submissions.
           * @minimum 0
           */
          new?: number;
          /**
           * The total submission count.
           * @minimum 0
           */
          count?: number;
          /** The Jotform form type, such as LEGACY or CARD. */
          type?: string;
          /** Whether the form is marked as a favorite. */
          favorite?: boolean;
          /** Whether the form is archived. */
          archived?: boolean;
          /** The public URL of the Jotform form. */
          url?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Jotform submission by submission ID. */
    "jotform.get_submission": {
      input: {
        /**
         * The Jotform submission ID to retrieve.
         * @minLength 1
         */
        submissionId: string;
      };
      output: {
        /** The requested Jotform submission. */
        submission: {
          /**
           * The unique Jotform submission ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Jotform form ID that owns this submission.
           * @minLength 1
           */
          form_id: string;
          /** The submitter IP address reported by Jotform. */
          ip?: string;
          /** The timestamp when the submission was created. */
          created_at?: string;
          /** The timestamp when the submission was last updated. */
          updated_at?: string;
          /** The Jotform submission status. */
          status?: string;
          /** Whether the submission is currently marked as new. */
          new: boolean;
          /** The answers keyed by Jotform question ID. */
          answers: Record<string, {
              /** The question label shown on the Jotform form. */
              text?: string;
              /** The Jotform question type, such as control_textbox. */
              type?: string;
              /** The raw answer payload returned by Jotform. */
              answer?: unknown;
              /** The formatted answer string returned by Jotform when available. */
              prettyFormat?: string;
              [key: string]: unknown;
            }>;
          /** The workflow status reported by Jotform when a workflow is attached. */
          workflowStatus?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List the question definitions configured on one Jotform form. */
    "jotform.list_form_questions": {
      input: {
        /**
         * The Jotform form ID whose questions should be listed.
         * @minLength 1
         */
        formId: string;
      };
      output: {
        /** The normalized questions keyed by Jotform question ID. */
        questions: Record<string, {
            /**
             * The unique Jotform question ID.
             * @minLength 1
             */
            qid: string;
            /** The Jotform question type, such as control_textbox. */
            type: string;
            /** The visible question label on the form. */
            text?: string;
            /** The Jotform internal question name. */
            name?: string;
            /** The position of the question in the form. */
            order?: string;
            /** Whether Jotform marks the question as required. */
            required?: string;
            /** Whether Jotform marks the question as readonly. */
            readonly?: string;
            /** The configured label alignment for the question. */
            labelAlign?: string;
            /** The question hint text returned by Jotform. */
            hint?: string;
            /** The validation mode configured on the question. */
            validation?: string;
            /** The visible sublabels for compound Jotform question fields. */
            sublabels?: Record<string, string>;
            [key: string]: unknown;
          }>;
      };
    };
    /** List submissions for one Jotform form. */
    "jotform.list_form_submissions": {
      input: {
        /**
         * The Jotform form ID whose submissions should be listed.
         * @minLength 1
         */
        formId: string;
        /**
         * The maximum number of submissions to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The starting offset for the submissions page.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The submissions returned by Jotform. */
        submissions: Array<{
          /**
           * The unique Jotform submission ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Jotform form ID that owns this submission.
           * @minLength 1
           */
          form_id: string;
          /** The submitter IP address reported by Jotform. */
          ip?: string;
          /** The timestamp when the submission was created. */
          created_at?: string;
          /** The timestamp when the submission was last updated. */
          updated_at?: string;
          /** The Jotform submission status. */
          status?: string;
          /** Whether the submission is currently marked as new. */
          new: boolean;
          /** The answers keyed by Jotform question ID. */
          answers: Record<string, {
              /** The question label shown on the Jotform form. */
              text?: string;
              /** The Jotform question type, such as control_textbox. */
              type?: string;
              /** The raw answer payload returned by Jotform. */
              answer?: unknown;
              /** The formatted answer string returned by Jotform when available. */
              prettyFormat?: string;
              [key: string]: unknown;
            }>;
          /** The workflow status reported by Jotform when a workflow is attached. */
          workflowStatus?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List forms available to the authenticated Jotform account. */
    "jotform.list_forms": {
      input: {
        /**
         * The maximum number of forms to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The starting offset for the forms page.
         * @minimum 0
         */
        offset?: number;
        /**
         * The free-text search query for matching forms.
         * @minLength 1
         */
        search?: string;
        /**
         * The folder ID used to filter returned forms.
         * @minLength 1
         */
        folder?: string;
        /**
         * The Jotform form field used for upstream sorting.
         * @minLength 1
         */
        orderby?: string;
        /** The upstream sort direction used when listing forms. */
        sorting?: "ASC" | "DESC";
      };
      output: {
        /** The forms returned by Jotform. */
        forms: Array<{
          /**
           * The unique Jotform form ID.
           * @minLength 1
           */
          id: string;
          /** The Jotform username that owns the form. */
          username?: string;
          /** The visible form title. */
          title?: string;
          /** The configured form height in pixels. */
          height?: number;
          /** The current Jotform form status. */
          status?: string;
          /** The timestamp when the form was created. */
          created_at?: string;
          /** The timestamp when the form was last updated. */
          updated_at?: string;
          /** The timestamp of the most recent form submission. */
          last_submission?: string;
          /**
           * The count of unread submissions.
           * @minimum 0
           */
          new?: number;
          /**
           * The total submission count.
           * @minimum 0
           */
          count?: number;
          /** The Jotform form type, such as LEGACY or CARD. */
          type?: string;
          /** Whether the form is marked as a favorite. */
          favorite?: boolean;
          /** Whether the form is archived. */
          archived?: boolean;
          /** The public URL of the Jotform form. */
          url?: string;
          [key: string]: unknown;
        }>;
        /** The pagination metadata returned for the current forms page. */
        resultSet?: {
          /**
           * The starting offset of the returned form page.
           * @minimum 0
           */
          offset: number;
          /**
           * The maximum number of forms requested.
           * @minimum 1
           */
          limit: number;
          /**
           * The number of forms returned in this page.
           * @minimum 0
           */
          count: number;
        };
      };
    };
  }
}
