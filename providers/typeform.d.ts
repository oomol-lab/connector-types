import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current Typeform user associated with the authenticated personal access token. */
    "typeform.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The current Typeform user. */
        user: {
          /** The alias or display name of the current Typeform user. */
          alias?: string;
          /** The email address of the current Typeform user. */
          email?: string;
          /** The language code configured on the current user. */
          language?: string;
          /** The API URL for the current user resource. */
          href?: string;
          /** The Typeform account associated with the current user. */
          account?: {
            /** The Typeform account identifier. */
            id?: string;
            /** The API URL for the Typeform account. */
            href?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get one Typeform form by form ID. */
    "typeform.get_form": {
      input: {
        /**
         * The Typeform form identifier.
         * @minLength 1
         */
        formId: string;
      };
      output: {
        /** The requested Typeform form. */
        form: {
          /**
           * The Typeform form identifier.
           * @minLength 1
           */
          id: string;
          /** The title of the form. */
          title?: string;
          /** The form type returned by Typeform. */
          type?: string;
          /** The language code configured on the form. */
          language?: string;
          /** The hidden field keys configured on the form. */
          hidden?: Array<string>;
          /** Whether CAPTCHA is enabled on the form. */
          captcha?: boolean;
          /** The fields configured on the form. */
          fields?: Array<{
            /** The field identifier. */
            id?: string;
            /** The developer-defined field reference. */
            ref?: string;
            /** The title shown for the field. */
            title?: string;
            /** The Typeform field type. */
            type?: string;
            /** The raw field properties returned by Typeform. */
            properties?: Record<string, unknown>;
            /** The field validations returned by Typeform. */
            validations?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The logic rules configured on the form. */
          logic?: Array<Record<string, unknown>>;
          /** The theme object returned for the form. */
          theme?: Record<string, unknown>;
          /** The workspace object returned for the form. */
          workspace?: Record<string, unknown>;
          /** The full settings object returned for the form. */
          settings?: Record<string, unknown>;
          /** The variables object returned for the form. */
          variables?: Record<string, unknown>;
          /** The links object returned for the form. */
          links?: Record<string, unknown>;
          /** The metadata object returned for the form. */
          meta?: Record<string, unknown>;
          /** The conversational UI settings returned for the form. */
          cui_settings?: Record<string, unknown>;
          /** The duplicate prevention settings returned for the form. */
          duplicate_prevention?: Record<string, unknown>;
          /** The welcome screens configured on the form. */
          welcome_screens?: Array<Record<string, unknown>>;
          /** The thank-you screens configured on the form. */
          thankyou_screens?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Typeform workspace by workspace ID. */
    "typeform.get_workspace": {
      input: {
        /**
         * The Typeform workspace identifier.
         * @minLength 1
         */
        workspaceId: string;
      };
      output: {
        /** The requested Typeform workspace. */
        workspace: {
          /**
           * The Typeform workspace identifier.
           * @minLength 1
           */
          id: string;
          /** The API URL for this workspace. */
          href?: string;
          /** The workspace name. */
          name?: string;
          /** The forms summary attached to this workspace. */
          forms?: {
            /** The API URL for the forms collection in this workspace. */
            href?: string;
            /**
             * The number of forms in this workspace.
             * @minimum 0
             */
            count?: number;
            [key: string]: unknown;
          };
          /** The members returned for this workspace. */
          members?: Array<{
            /** The full name of the workspace member. */
            name?: string;
            /** The email address of the workspace member. */
            email?: string;
            /** The role assigned to the workspace member. */
            role?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** List responses submitted to one Typeform form. */
    "typeform.list_form_responses": {
      input: {
        /**
         * The Typeform form identifier whose responses should be listed.
         * @minLength 1
         */
        formId: string;
        /**
         * The maximum number of responses to return.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * The lower time bound for responses, using an ISO 8601 timestamp or Unix seconds.
         * @minLength 1
         */
        since?: string;
        /**
         * The upper time bound for responses, using an ISO 8601 timestamp or Unix seconds.
         * @minLength 1
         */
        until?: string;
        /**
         * The opaque cursor used to fetch responses after a prior page.
         * @minLength 1
         */
        after?: string;
        /**
         * The opaque cursor used to fetch responses before a prior page.
         * @minLength 1
         */
        before?: string;
        /**
         * The free-text query matched against response answers.
         * @minLength 1
         */
        query?: string;
        /**
         * The upstream sort expression in the format fieldId,asc|desc.
         * @minLength 1
         */
        sort?: string;
        /** The field identifiers whose answers should be returned. */
        fields?: Array<string>;
        /** The response types that should be included. */
        responseType?: Array<"completed" | "partial" | "started">;
        /** The field identifiers that responses must answer. */
        answeredFields?: Array<string>;
        /** The response identifiers that should be explicitly included. */
        includedResponseIds?: Array<string>;
        /** The response identifiers that should be excluded. */
        excludedResponseIds?: Array<string>;
      };
      output: {
        /** The responses returned for this page. */
        items: Array<{
          /** The landing identifier returned for the response. */
          landing_id?: string;
          /** The Typeform response identifier. */
          response_id?: string;
          /** The response token. */
          token?: string;
          /** The timestamp when the respondent landed on the form. */
          landed_at?: string;
          /** The timestamp when the respondent submitted the form. */
          submitted_at?: string;
          /** The hidden field values returned for this response. */
          hidden?: Record<string, string>;
          /** The answers returned for this response. */
          answers?: Array<{
            /** The field reference associated with this answer. */
            field: {
              /** The field identifier associated with this answer. */
              id: string;
              /** The Typeform field type for this answer. */
              type: string;
              /** The developer-defined field reference. */
              ref?: string;
            };
            /** The answer type returned by Typeform. */
            type: string;
            /** The text value returned for a text answer. */
            text?: string;
            /** The email value returned for an email answer. */
            email?: string;
            /** The URL value returned for a URL answer. */
            url?: string;
            /** The date value returned for a date answer. */
            date?: string;
            /** The numeric value returned for a number answer. */
            number?: number;
            /** The boolean value returned for a yes-no answer. */
            boolean?: boolean;
            /** The phone number returned for a phone answer. */
            phone_number?: string;
            /** The file URL returned for a file-upload answer. */
            file_url?: string;
            /** The single-choice payload returned for this answer. */
            choice?: {
              /** The selected choice identifier. */
              id?: string;
              /** The selected choice reference. */
              ref?: string;
              /** The selected choice label. */
              label?: string;
              /** The free-text value used for an other-choice selection. */
              other?: string;
              [key: string]: unknown;
            };
            /** The multiple-choice payload returned for this answer. */
            choices?: {
              /** The selected choice identifiers. */
              ids?: Array<string>;
              /** The selected choice references. */
              refs?: Array<string>;
              /** The selected choice labels. */
              labels?: Array<string>;
              /** The free-text value used for an other-choice selection. */
              other?: string;
              [key: string]: unknown;
            };
            /** The payment payload returned for this answer. */
            payment?: Record<string, unknown>;
            /** The multi-format payload returned for this answer. */
            multi_format?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The metadata returned for this response. */
          metadata?: {
            /** The browser reported for the response. */
            browser?: string;
            /** The referer URL reported for the response. */
            referer?: string;
            /** The platform reported for the response. */
            platform?: string;
            /** The user agent string reported for the response. */
            user_agent?: string;
            /** The network identifier reported for the response. */
            network_id?: string;
            [key: string]: unknown;
          };
          /** The calculated values returned for this response. */
          calculated?: Record<string, unknown>;
          /** The variables returned for this response. */
          variables?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /**
         * The total number of available pages.
         * @minimum 0
         */
        pageCount: number;
        /**
         * The total number of matching responses.
         * @minimum 0
         */
        totalItems: number;
      };
    };
    /** List forms available to the authenticated Typeform account. */
    "typeform.list_forms": {
      input: {
        /**
         * The 1-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The search string used to filter forms by title or description.
         * @minLength 1
         */
        search?: string;
        /** The field used to sort the returned forms. */
        sortBy?: "created_at" | "last_updated_at";
        /** The sort direction used for the returned forms. */
        orderBy?: "asc" | "desc";
        /**
         * The maximum number of forms to return per page.
         * @minimum 1
         * @maximum 200
         */
        pageSize?: number;
        /**
         * The workspace identifier used to filter forms.
         * @minLength 1
         */
        workspaceId?: string;
      };
      output: {
        /** The forms returned for this page. */
        items: Array<{
          /**
           * The Typeform form identifier.
           * @minLength 1
           */
          id: string;
          /** The title of the form. */
          title?: string;
          /** The theme reference returned for the form. */
          theme?: {
            /** The API URL for the theme used by this form. */
            href?: string;
            [key: string]: unknown;
          };
          /** The related links returned for the form. */
          _links?: {
            /** The self link for this form. */
            self?: {
              /** The API URL for the current form resource. */
              href?: string;
              [key: string]: unknown;
            };
            /** The public URL used to display the form. */
            display?: string;
            /** The API URL used to retrieve responses for the form. */
            responses?: string;
            [key: string]: unknown;
          };
          /** The summary settings returned for the form. */
          settings?: {
            /** Whether the form is publicly accessible. */
            is_public?: boolean;
            [key: string]: unknown;
          };
          /** The workspace reference attached to the form. */
          workspace?: {
            /** The API URL for the workspace that owns the form. */
            href?: string;
            [key: string]: unknown;
          };
          /** The timestamp when the form was created. */
          created_at?: string;
          /** The timestamp when the form was last updated. */
          last_updated_at?: string;
          [key: string]: unknown;
        }>;
        /**
         * The total number of available pages.
         * @minimum 0
         */
        pageCount: number;
        /**
         * The total number of matching forms.
         * @minimum 0
         */
        totalItems: number;
      };
    };
    /** List workspaces available to the authenticated Typeform account. */
    "typeform.list_workspaces": {
      input: {
        /**
         * The 1-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The search string used to filter workspaces by name.
         * @minLength 1
         */
        search?: string;
        /**
         * The maximum number of workspaces to return per page.
         * @minimum 1
         * @maximum 200
         */
        pageSize?: number;
      };
      output: {
        /** The workspaces returned for this page. */
        items: Array<{
          /**
           * The Typeform workspace identifier.
           * @minLength 1
           */
          id: string;
          /** The API URL for this workspace. */
          href?: string;
          /** The workspace name. */
          name?: string;
          /** The forms summary attached to this workspace. */
          forms?: {
            /** The API URL for the forms collection in this workspace. */
            href?: string;
            /**
             * The number of forms in this workspace.
             * @minimum 0
             */
            count?: number;
            [key: string]: unknown;
          };
          /** The members returned for this workspace. */
          members?: Array<{
            /** The full name of the workspace member. */
            name?: string;
            /** The email address of the workspace member. */
            email?: string;
            /** The role assigned to the workspace member. */
            role?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /**
         * The total number of available pages.
         * @minimum 0
         */
        pageCount: number;
        /**
         * The total number of matching workspaces.
         * @minimum 0
         */
        totalItems: number;
      };
    };
  }
}
