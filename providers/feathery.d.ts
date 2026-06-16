import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Feathery hidden field by field ID. */
    "feathery.create_hidden_field": {
      input: {
        /**
         * The Feathery hidden field ID.
         * @minLength 1
         * @pattern \S
         */
        field_id: string;
      };
      output: {
        /** One Feathery hidden field. */
        hiddenField: {
          /**
           * The hidden field ID.
           * @minLength 1
           * @pattern \S
           */
          id?: string;
          /**
           * The hidden field ID returned by write endpoints.
           * @minLength 1
           * @pattern \S
           */
          field_id?: string;
          /**
           * The hidden field value type.
           * @minLength 1
           * @pattern \S
           */
          type?: string;
          /**
           * The Feathery internal hidden field identifier.
           * @minLength 1
           * @pattern \S
           */
          internal_id?: string;
          /**
           * The timestamp when the hidden field was created.
           * @minLength 1
           * @pattern \S
           */
          created_at?: string;
          /**
           * The timestamp when the hidden field was last updated.
           * @minLength 1
           * @pattern \S
           */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Feathery user or fetch the existing user by ID. */
    "feathery.create_or_fetch_user": {
      input: {
        /**
         * The Feathery user ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** One Feathery end user. */
        user: {
          /**
           * The Feathery user ID.
           * @minLength 1
           * @pattern \S
           */
          id?: string;
          /**
           * The timestamp when the user was created.
           * @minLength 1
           * @pattern \S
           */
          created_at?: string;
          /**
           * The SDK key returned for this Feathery user.
           * @minLength 1
           * @pattern \S
           */
          sdk_key?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create or update Feathery form submissions for one form. */
    "feathery.create_or_update_form_submissions": {
      input: {
        /**
         * The Feathery form ID.
         * @minLength 1
         * @pattern \S
         */
        form_id: string;
        /**
         * The Feathery submission objects to create or update.
         * @minItems 1
         */
        submissions: Array<Record<string, unknown>>;
      };
      output: {
        /** The raw Feathery submission write payload. */
        result: Record<string, unknown>;
      };
    };
    /** Delete one Feathery hidden field by field ID. */
    "feathery.delete_hidden_field": {
      input: {
        /**
         * The Feathery hidden field ID.
         * @minLength 1
         * @pattern \S
         */
        field_id: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
        /**
         * The deleted Feathery hidden field ID.
         * @minLength 1
         * @pattern \S
         */
        field_id: string;
        /** The raw response returned by Feathery. */
        raw: unknown;
      };
    };
    /** Delete one Feathery user by ID. */
    "feathery.delete_user": {
      input: {
        /**
         * The Feathery user ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
        /**
         * The deleted Feathery user ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /** The raw response returned by Feathery. */
        raw: unknown;
      };
    };
    /** Rename or edit a Feathery hidden field by field ID. */
    "feathery.edit_hidden_field": {
      input: {
        /**
         * The existing Feathery hidden field ID.
         * @minLength 1
         * @pattern \S
         */
        field_id: string;
        /**
         * The replacement Feathery hidden field ID.
         * @minLength 1
         * @pattern \S
         */
        new_field_id: string;
      };
      output: {
        /** One Feathery hidden field. */
        hiddenField: {
          /**
           * The hidden field ID.
           * @minLength 1
           * @pattern \S
           */
          id?: string;
          /**
           * The hidden field ID returned by write endpoints.
           * @minLength 1
           * @pattern \S
           */
          field_id?: string;
          /**
           * The hidden field value type.
           * @minLength 1
           * @pattern \S
           */
          type?: string;
          /**
           * The Feathery internal hidden field identifier.
           * @minLength 1
           * @pattern \S
           */
          internal_id?: string;
          /**
           * The timestamp when the hidden field was created.
           * @minLength 1
           * @pattern \S
           */
          created_at?: string;
          /**
           * The timestamp when the hidden field was last updated.
           * @minLength 1
           * @pattern \S
           */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve Feathery team and account information for the authenticated API key. */
    "feathery.get_account_info": {
      input: Record<string, never>;
      output: {
        /** The Feathery account information returned for the API key. */
        account: {
          /**
           * The Feathery team name.
           * @minLength 1
           * @pattern \S
           */
          team?: string;
          /** The accounts belonging to the Feathery team. */
          accounts?: Array<{
            /**
             * The Feathery account member ID.
             * @minLength 1
             * @pattern \S
             */
            id?: string;
            /**
             * The account member email address.
             * @format email
             */
            email?: string;
            /**
             * The account member role.
             * @minLength 1
             * @pattern \S
             */
            role?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the complete schema for one Feathery form. */
    "feathery.get_form_schema": {
      input: {
        /**
         * The Feathery form ID.
         * @minLength 1
         * @pattern \S
         */
        form_id: string;
      };
      output: {
        /** The raw Feathery form schema payload. */
        schema: Record<string, unknown>;
      };
    };
    /** Retrieve all Feathery field data, optionally scoped to one user. */
    "feathery.get_user_data": {
      input: {
        /**
         * The Feathery user ID whose field data should be returned.
         * @minLength 1
         * @pattern \S
         */
        id?: string;
      };
      output: {
        /** The Feathery field data entries returned by the API. */
        fields: Array<{
          /**
           * The field ID.
           * @minLength 1
           * @pattern \S
           */
          id?: string;
          /**
           * The field value type.
           * @minLength 1
           * @pattern \S
           */
          type?: string;
          /** The submitted field value returned by Feathery. */
          value?: unknown;
          /** Whether this entry is a hidden field. */
          hidden?: boolean;
          /**
           * The Feathery internal field identifier.
           * @minLength 1
           * @pattern \S
           */
          internal_id?: string;
          /** The human-readable field label when returned. */
          display_text?: string;
          /**
           * The timestamp when this field was created.
           * @minLength 1
           * @pattern \S
           */
          created_at?: string;
          /**
           * The timestamp when this field was last updated.
           * @minLength 1
           * @pattern \S
           */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve Feathery form session and progress data for one user. */
    "feathery.get_user_session": {
      input: {
        /**
         * The Feathery user ID.
         * @minLength 1
         * @pattern \S
         */
        user_id: string;
      };
      output: {
        /** The raw Feathery user session payload. */
        session: Record<string, unknown>;
      };
    };
    /** List Feathery forms, optionally filtered by tags. */
    "feathery.list_forms": {
      input: {
        /** Only return forms that have all of these Feathery tags. */
        tags?: Array<string>;
      };
      output: {
        /** The Feathery forms returned by the API. */
        forms: Array<{
          /**
           * The Feathery form ID.
           * @minLength 1
           * @pattern \S
           */
          id?: string;
          /**
           * The Feathery form name.
           * @minLength 1
           * @pattern \S
           */
          name?: string;
          /** Whether the Feathery form is active. */
          active?: boolean;
          /** The tags associated with the form. */
          tags?: Array<string>;
          /**
           * The timestamp when the form was created.
           * @minLength 1
           * @pattern \S
           */
          created_at?: string;
          /**
           * The timestamp when the form was last updated.
           * @minLength 1
           * @pattern \S
           */
          updated_at?: string;
          /** The Feathery internal form identifier when returned. */
          internal_id?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List hidden fields configured in the Feathery account. */
    "feathery.list_hidden_fields": {
      input: Record<string, never>;
      output: {
        /** The hidden fields returned by Feathery. */
        hiddenFields: Array<{
          /**
           * The hidden field ID.
           * @minLength 1
           * @pattern \S
           */
          id?: string;
          /**
           * The hidden field ID returned by write endpoints.
           * @minLength 1
           * @pattern \S
           */
          field_id?: string;
          /**
           * The hidden field value type.
           * @minLength 1
           * @pattern \S
           */
          type?: string;
          /**
           * The Feathery internal hidden field identifier.
           * @minLength 1
           * @pattern \S
           */
          internal_id?: string;
          /**
           * The timestamp when the hidden field was created.
           * @minLength 1
           * @pattern \S
           */
          created_at?: string;
          /**
           * The timestamp when the hidden field was last updated.
           * @minLength 1
           * @pattern \S
           */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Feathery users with optional creation-time and field-value filters. */
    "feathery.list_users": {
      input: {
        /** Return users created on or after this ISO timestamp. */
        created_after?: string;
        /** Return users created on or before this ISO timestamp. */
        created_before?: string;
        /** The form or hidden field ID used to filter users. */
        filter_field_id?: string;
        /** The value matched for filter_field_id. */
        filter_field_value?: string;
      };
      output: {
        /** The Feathery users returned by the API. */
        users: Array<{
          /**
           * The Feathery user ID.
           * @minLength 1
           * @pattern \S
           */
          id?: string;
          /**
           * The timestamp when the user was created.
           * @minLength 1
           * @pattern \S
           */
          created_at?: string;
          /**
           * The SDK key returned for this Feathery user.
           * @minLength 1
           * @pattern \S
           */
          sdk_key?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
