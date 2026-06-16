import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a SignWell document from one or more existing templates with recipients and optional prefilled template field values. */
    "signwell.create_document_from_template": {
      input: {
        /** Set to true to enable SignWell test mode for this document creation request. */
        test_mode?: boolean;
        /**
         * Use when you want to create the document from a single SignWell template.
         * @minLength 1
         * @pattern \S
         */
        template_id?: string;
        /**
         * Use when you want to create the document from multiple SignWell templates.
         * @minItems 1
         */
        template_ids?: Array<string>;
        /**
         * The string value.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /**
         * The string value.
         * @minLength 1
         * @pattern \S
         */
        subject?: string;
        /**
         * The string value.
         * @minLength 1
         * @pattern \S
         */
        message?: string;
        /** Recipients that should be assigned to SignWell template placeholders. */
        recipients: Array<{
          /**
           * A unique recipient identifier for the request.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The recipient name.
           * @minLength 1
           * @pattern \S
           */
          name?: string;
          /**
           * The recipient email address.
           * @format email
           */
          email: string;
          /**
           * The template placeholder name this recipient should fill.
           * @minLength 1
           * @pattern \S
           */
          placeholder_name?: string;
          /**
           * The string value.
           * @minLength 1
           * @pattern \S
           */
          passcode?: string;
          /** Passcode delivery settings for this recipient. */
          passcode_delivery?: {
            /** Whether SignWell should deliver the passcode automatically. */
            enabled: boolean;
            /** The passcode delivery methods to use. */
            methods: Array<string>;
            /** Whether SignWell should expire the passcode after successful access. */
            expire_after_access: boolean;
          };
          /**
           * The string value.
           * @minLength 1
           * @pattern \S
           */
          subject?: string;
          /**
           * The string value.
           * @minLength 1
           * @pattern \S
           */
          message?: string;
          /** Whether SignWell should still send email when embedded signing is enabled. */
          send_email?: boolean;
          /**
           * The embedded-signing email delay in minutes before SignWell sends a fallback email.
           * @minimum 0
           * @maximum 60
           */
          send_email_delay?: number;
        }>;
        /**
         * Placeholder names to exclude from the created document.
         * @minItems 1
         */
        exclude_placeholders?: Array<string>;
        /** Whether SignWell should keep the created document in draft instead of sending it immediately. */
        draft?: boolean;
        /** Whether SignWell should append a signature page to the document. */
        with_signature_page?: boolean;
        /**
         * The number of days before the signature request expires.
         * @minimum 1
         * @maximum 365
         */
        expires_in?: number;
        /** Whether SignWell should send reminder emails to recipients. */
        reminders?: boolean;
        /** Whether recipients should sign in the same order as the recipients array. */
        apply_signing_order?: boolean;
        /**
         * The SignWell identifier.
         * @minLength 1
         * @pattern \S
         */
        api_application_id?: string;
        /** Whether SignWell should create the document for embedded signing. */
        embedded_signing?: boolean;
        /** Whether SignWell should send final notification emails for embedded signing. */
        embedded_signing_notifications?: boolean;
        /** Whether SignWell should parse text tags instead of explicit field placement. */
        text_tags?: boolean;
        /**
         * The string value.
         * @minLength 1
         * @pattern \S
         */
        custom_requester_name?: string;
        /**
         * A custom requester email used in SignWell email communications.
         * @format email
         */
        custom_requester_email?: string;
        /**
         * The URL SignWell redirects recipients to after they successfully sign.
         * @format uri
         */
        redirect_url?: string;
        /** Whether SignWell allows recipients to decline signing. */
        allow_decline?: boolean;
        /** Whether SignWell allows recipients to reassign signing. */
        allow_reassign?: boolean;
        /**
         * The URL SignWell redirects recipients to after they decline the document.
         * @format uri
         */
        decline_redirect_url?: string;
        /**
         * The ISO 639-1 language code for recipient-facing interactions.
         * @minLength 2
         * @pattern \S
         */
        language?: string;
        /** Optional metadata key-value pairs attached to the document. */
        metadata?: Record<string, string>;
        /** Template field values that should be prefilled before recipients sign. */
        template_fields?: Array<{
          /**
           * The SignWell field API identifier.
           * @minLength 1
           * @pattern \S
           */
          api_id: string;
          /** The prefilled field value. */
          value: string | number | boolean;
        }>;
        /** Additional files to append to the SignWell document. */
        files?: Array<{
          /**
           * The name of the uploaded file.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /**
           * The publicly accessible file URL that SignWell should fetch.
           * @format uri
           */
          file_url?: string;
          /**
           * The RFC 4648 base64-encoded file content.
           * @minLength 1
           * @pattern \S
           */
          file_base64?: string;
        }>;
        /** Additional field groups for appended files. */
        fields?: Array<Array<{
          /** The horizontal field position in pixels. */
          x: number;
          /** The vertical field position in pixels. */
          y: number;
          /** The one-based page number where the field is placed. */
          page: number;
          /** The field recipient reference returned by SignWell. */
          recipient: {
            /**
             * The recipient email address.
             * @format email
             */
            email: string;
            /** The recipient name. */
            name: string;
            /** The recipient role when SignWell returns one. */
            role: string;
          };
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          api_id: string;
          /** The SignWell field type. */
          type: string;
          /** Whether the field must be completed. */
          required: boolean;
          /** The string value when SignWell returns one. */
          label: string | null;
          /** The current field value returned by SignWell. */
          value: string | number | boolean | null;
          /** The string value when SignWell returns one. */
          name: string | null;
          /** The string value when SignWell returns one. */
          validation: string | null;
          /** Whether the field width is fixed. */
          fixed_width: boolean | null;
          /** Whether the date is locked to signing time. */
          lock_sign_date: boolean | null;
          /** The string value when SignWell returns one. */
          date_format: string | null;
          /** The string value when SignWell returns one. */
          formula: string | null;
          /** The field height in pixels. */
          height: number;
          /** The field width in pixels. */
          width: number;
          /** The string value when SignWell returns one. */
          recipient_id: string | null;
          /** The string value when SignWell returns one. */
          placeholder_name: string | null;
          /** The string value when SignWell returns one. */
          signing_elements_group_id: string | null;
          [key: string]: unknown;
        }>>;
        /** Attachment requests recipients must complete after signing fields. */
        attachment_requests?: Array<{
          /**
           * The attachment request name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /**
           * The recipient ID that should see the attachment request.
           * @minLength 1
           * @pattern \S
           */
          recipient_id: string;
          /** Whether the attachment request is required. */
          required: boolean;
        }>;
        /** Contacts SignWell should CC on the signature workflow. */
        copied_contacts?: Array<{
          /**
           * The copied contact name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /**
           * The copied contact email address.
           * @format email
           */
          email: string;
        }>;
        /** Labels to attach to the document. */
        labels?: Array<{
          /**
           * The SignWell label name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
        }>;
        /** Checkbox group constraints for appended checkbox fields. */
        checkbox_groups?: Array<{
          /**
           * A unique checkbox group identifier.
           * @minLength 1
           * @pattern \S
           */
          group_name: string;
          /**
           * The recipient ID tied to this checkbox group.
           * @minLength 1
           * @pattern \S
           */
          recipient_id: string;
          /**
           * Checkbox API IDs grouped under this SignWell rule.
           * @minItems 2
           */
          checkbox_ids: Array<string>;
          /**
           * The SignWell checkbox validation mode.
           * @minLength 1
           * @pattern \S
           */
          validation: string;
          /** Whether the checkbox group is required. */
          required?: boolean;
          /**
           * The minimum selections allowed for the group.
           * @minimum 0
           */
          min_value?: number;
          /**
           * The maximum selections allowed for the group.
           * @minimum 0
           */
          max_value?: number;
          /**
           * The exact selections required for the group.
           * @minimum 0
           */
          exact_value?: number;
        }>;
      };
      output: {
        /** Whether SignWell created the document in test mode. */
        test_mode: boolean;
        /**
         * The SignWell identifier.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /**
         * The SignWell identifier.
         * @minLength 1
         * @pattern \S
         */
        template_id?: string;
        /** The template identifiers SignWell associates with this document. */
        template_ids: Array<string>;
        /**
         * The SignWell identifier.
         * @minLength 1
         * @pattern \S
         */
        api_application_id: string | null;
        /**
         * The email address of the document requester.
         * @format email
         */
        requester_email_address: string;
        /** The string value when SignWell returns one. */
        custom_requester_name: string | null;
        /**
         * The email address returned by SignWell when available.
         * @format email
         */
        custom_requester_email: string | null;
        /** The document name. */
        name: string;
        /** The email subject SignWell uses for the signature request. */
        subject: string;
        /** The email message SignWell uses for the signature request. */
        message: string;
        /** Optional SignWell metadata key-value pairs. */
        metadata: Record<string, string> | null;
        /**
         * The timestamp when the document was created.
         * @format date-time
         */
        created_at: string;
        /**
         * The timestamp when the document was last updated.
         * @format date-time
         */
        updated_at: string;
        /** The recipients configured on the document. */
        recipients: Array<{
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The recipient name. */
          name: string;
          /**
           * The recipient email address.
           * @format email
           */
          email: string;
          /** The recipient role when SignWell returns one. */
          role?: string;
          /** The string value when SignWell returns one. */
          message?: string | null;
          /** The string value when SignWell returns one. */
          subject?: string | null;
          /** Whether SignWell sends email to this recipient. */
          send_email?: boolean | null;
          /** The delayed email notification window in minutes when present. */
          send_email_delay?: number | null;
          /** The recipient signing order. */
          signing_order?: number;
          /**
           * The URL returned by SignWell when available.
           * @format uri
           */
          signing_url?: string | null;
          /**
           * The URL returned by SignWell when available.
           * @format uri
           */
          embedded_signing_url?: string | null;
          /** Whether the email bounced when SignWell returns the value. */
          bounced?: boolean | null;
          /** The string value when SignWell returns one. */
          bounced_details?: string | null;
          /** The attachment requests assigned to this recipient. */
          attachment_requests?: Array<{
            /** The attachment request name. */
            name: string;
            /** Whether the attachment request is required. */
            required: boolean;
            /**
             * The attachment upload URL returned by SignWell.
             * @format uri
             */
            url: string;
          }>;
          /** The string value when SignWell returns one. */
          passcode?: string | null;
          /** Passcode delivery settings returned by SignWell. */
          passcode_delivery?: {
            /** Whether passcode delivery is enabled. */
            enabled: boolean;
            /** The passcode delivery methods returned by SignWell. */
            methods: Array<string> | null;
            /** Whether SignWell expires the passcode after successful access. */
            expire_after_access: boolean;
          };
          /** The string value when SignWell returns one. */
          status?: string | null;
          /** The placeholder name assigned to this recipient. */
          placeholder_name?: string;
        }>;
        /** The SignWell document status. */
        status: string;
        /** Whether SignWell reminders are enabled for the document. */
        reminders: boolean;
        /** Whether the document is archived. */
        archived: boolean;
        /** Whether the document is configured for embedded signing. */
        embedded_signing: boolean;
        /**
         * The URL returned by SignWell when available.
         * @format uri
         */
        embedded_edit_url: string | null;
        /**
         * The URL returned by SignWell when available.
         * @format uri
         */
        embedded_preview_url: string | null;
        /** Whether SignWell applies signing order for the document. */
        apply_signing_order: boolean;
        /**
         * The URL returned by SignWell when available.
         * @format uri
         */
        redirect_url: string | null;
        /**
         * The URL returned by SignWell when available.
         * @format uri
         */
        decline_redirect_url: string | null;
        /** The ISO 639-1 language code stored on the document. */
        language: string;
        /** The number of days before the document expires. */
        expires_in: number;
        /** The string value when SignWell returns one. */
        decline_message: string | null;
        /** The string value when SignWell returns one. */
        error_message: string | null;
        /** Whether SignWell sends final notifications for embedded signing. */
        embedded_signing_notifications?: boolean;
        /** Attachment requests configured on the document. */
        attachment_requests: Array<{
          /** The attachment request name. */
          name: string;
          /** The recipient ID tied to the attachment request. */
          recipient_id: string;
          /** Whether the attachment request is required. */
          required: boolean;
        }>;
        /** The files attached to the document. */
        files: Array<{
          /** The file name. */
          name: string;
          /** The number of pages SignWell detected in the file. */
          pages_number: number;
        }>;
        /** The copied contacts attached to the document. */
        copied_contacts: Array<{
          /** The copied contact name. */
          name: string;
          /**
           * The copied contact email address.
           * @format email
           */
          email: string;
        }>;
        /** The SignWell field groups returned by the API. */
        fields: Array<Array<{
          /** The horizontal field position in pixels. */
          x: number;
          /** The vertical field position in pixels. */
          y: number;
          /** The one-based page number where the field is placed. */
          page: number;
          /** The field recipient reference returned by SignWell. */
          recipient: {
            /**
             * The recipient email address.
             * @format email
             */
            email: string;
            /** The recipient name. */
            name: string;
            /** The recipient role when SignWell returns one. */
            role: string;
          };
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          api_id: string;
          /** The SignWell field type. */
          type: string;
          /** Whether the field must be completed. */
          required: boolean;
          /** The string value when SignWell returns one. */
          label: string | null;
          /** The current field value returned by SignWell. */
          value: string | number | boolean | null;
          /** The string value when SignWell returns one. */
          name: string | null;
          /** The string value when SignWell returns one. */
          validation: string | null;
          /** Whether the field width is fixed. */
          fixed_width: boolean | null;
          /** Whether the date is locked to signing time. */
          lock_sign_date: boolean | null;
          /** The string value when SignWell returns one. */
          date_format: string | null;
          /** The string value when SignWell returns one. */
          formula: string | null;
          /** The field height in pixels. */
          height: number;
          /** The field width in pixels. */
          width: number;
          /** The string value when SignWell returns one. */
          recipient_id: string | null;
          /** The string value when SignWell returns one. */
          placeholder_name: string | null;
          /** The string value when SignWell returns one. */
          signing_elements_group_id: string | null;
          [key: string]: unknown;
        }>>;
        /** The labels attached to the document. */
        labels: Array<{
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The label name. */
          name: string;
        }>;
        /** The checkbox groups configured on the document. */
        checkbox_groups: Array<{
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The string value when SignWell returns one. */
          group_name: string | null;
          /** The string value when SignWell returns one. */
          recipient_id: string | null;
          /** The checkbox API IDs grouped together. */
          checkbox_ids: Array<string>;
          /** The string value when SignWell returns one. */
          validation: string | null;
          /** Whether the checkbox group is required. */
          required: boolean;
          /** The minimum number of checked boxes when SignWell returns one. */
          min_value: number;
          /** The maximum number of checked boxes when SignWell returns one. */
          max_value: number;
          /** The exact number of checked boxes when SignWell returns one. */
          exact_value: number;
        }>;
        /** Whether recipients can decline the document. */
        allow_decline: boolean;
        /** Whether recipients can reassign the document. */
        allow_reassign: boolean;
      };
    };
    /** Get a SignWell document and all associated document data by document ID. */
    "signwell.get_document": {
      input: {
        /**
         * The SignWell document ID from the document URL or create response.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** Whether SignWell created the document in test mode. */
        test_mode: boolean;
        /**
         * The SignWell identifier.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /**
         * The SignWell identifier.
         * @minLength 1
         * @pattern \S
         */
        template_id?: string;
        /** The template identifiers SignWell associates with this document. */
        template_ids: Array<string>;
        /**
         * The SignWell identifier.
         * @minLength 1
         * @pattern \S
         */
        api_application_id: string | null;
        /**
         * The email address of the document requester.
         * @format email
         */
        requester_email_address: string;
        /** The string value when SignWell returns one. */
        custom_requester_name: string | null;
        /**
         * The email address returned by SignWell when available.
         * @format email
         */
        custom_requester_email: string | null;
        /** The document name. */
        name: string;
        /** The email subject SignWell uses for the signature request. */
        subject: string;
        /** The email message SignWell uses for the signature request. */
        message: string;
        /** Optional SignWell metadata key-value pairs. */
        metadata: Record<string, string> | null;
        /**
         * The timestamp when the document was created.
         * @format date-time
         */
        created_at: string;
        /**
         * The timestamp when the document was last updated.
         * @format date-time
         */
        updated_at: string;
        /** The recipients configured on the document. */
        recipients: Array<{
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The recipient name. */
          name: string;
          /**
           * The recipient email address.
           * @format email
           */
          email: string;
          /** The recipient role when SignWell returns one. */
          role?: string;
          /** The string value when SignWell returns one. */
          message?: string | null;
          /** The string value when SignWell returns one. */
          subject?: string | null;
          /** Whether SignWell sends email to this recipient. */
          send_email?: boolean | null;
          /** The delayed email notification window in minutes when present. */
          send_email_delay?: number | null;
          /** The recipient signing order. */
          signing_order?: number;
          /**
           * The URL returned by SignWell when available.
           * @format uri
           */
          signing_url?: string | null;
          /**
           * The URL returned by SignWell when available.
           * @format uri
           */
          embedded_signing_url?: string | null;
          /** Whether the email bounced when SignWell returns the value. */
          bounced?: boolean | null;
          /** The string value when SignWell returns one. */
          bounced_details?: string | null;
          /** The attachment requests assigned to this recipient. */
          attachment_requests?: Array<{
            /** The attachment request name. */
            name: string;
            /** Whether the attachment request is required. */
            required: boolean;
            /**
             * The attachment upload URL returned by SignWell.
             * @format uri
             */
            url: string;
          }>;
          /** The string value when SignWell returns one. */
          passcode?: string | null;
          /** Passcode delivery settings returned by SignWell. */
          passcode_delivery?: {
            /** Whether passcode delivery is enabled. */
            enabled: boolean;
            /** The passcode delivery methods returned by SignWell. */
            methods: Array<string> | null;
            /** Whether SignWell expires the passcode after successful access. */
            expire_after_access: boolean;
          };
          /** The string value when SignWell returns one. */
          status?: string | null;
          /** The placeholder name assigned to this recipient. */
          placeholder_name?: string;
        }>;
        /** The SignWell document status. */
        status: string;
        /** Whether SignWell reminders are enabled for the document. */
        reminders: boolean;
        /** Whether the document is archived. */
        archived: boolean;
        /** Whether the document is configured for embedded signing. */
        embedded_signing: boolean;
        /**
         * The URL returned by SignWell when available.
         * @format uri
         */
        embedded_edit_url: string | null;
        /**
         * The URL returned by SignWell when available.
         * @format uri
         */
        embedded_preview_url: string | null;
        /** Whether SignWell applies signing order for the document. */
        apply_signing_order: boolean;
        /**
         * The URL returned by SignWell when available.
         * @format uri
         */
        redirect_url: string | null;
        /**
         * The URL returned by SignWell when available.
         * @format uri
         */
        decline_redirect_url: string | null;
        /** The ISO 639-1 language code stored on the document. */
        language: string;
        /** The number of days before the document expires. */
        expires_in: number;
        /** The string value when SignWell returns one. */
        decline_message: string | null;
        /** The string value when SignWell returns one. */
        error_message: string | null;
        /** Whether SignWell sends final notifications for embedded signing. */
        embedded_signing_notifications?: boolean;
        /** Attachment requests configured on the document. */
        attachment_requests: Array<{
          /** The attachment request name. */
          name: string;
          /** The recipient ID tied to the attachment request. */
          recipient_id: string;
          /** Whether the attachment request is required. */
          required: boolean;
        }>;
        /** The files attached to the document. */
        files: Array<{
          /** The file name. */
          name: string;
          /** The number of pages SignWell detected in the file. */
          pages_number: number;
        }>;
        /** The copied contacts attached to the document. */
        copied_contacts: Array<{
          /** The copied contact name. */
          name: string;
          /**
           * The copied contact email address.
           * @format email
           */
          email: string;
        }>;
        /** The SignWell field groups returned by the API. */
        fields: Array<Array<{
          /** The horizontal field position in pixels. */
          x: number;
          /** The vertical field position in pixels. */
          y: number;
          /** The one-based page number where the field is placed. */
          page: number;
          /** The field recipient reference returned by SignWell. */
          recipient: {
            /**
             * The recipient email address.
             * @format email
             */
            email: string;
            /** The recipient name. */
            name: string;
            /** The recipient role when SignWell returns one. */
            role: string;
          };
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          api_id: string;
          /** The SignWell field type. */
          type: string;
          /** Whether the field must be completed. */
          required: boolean;
          /** The string value when SignWell returns one. */
          label: string | null;
          /** The current field value returned by SignWell. */
          value: string | number | boolean | null;
          /** The string value when SignWell returns one. */
          name: string | null;
          /** The string value when SignWell returns one. */
          validation: string | null;
          /** Whether the field width is fixed. */
          fixed_width: boolean | null;
          /** Whether the date is locked to signing time. */
          lock_sign_date: boolean | null;
          /** The string value when SignWell returns one. */
          date_format: string | null;
          /** The string value when SignWell returns one. */
          formula: string | null;
          /** The field height in pixels. */
          height: number;
          /** The field width in pixels. */
          width: number;
          /** The string value when SignWell returns one. */
          recipient_id: string | null;
          /** The string value when SignWell returns one. */
          placeholder_name: string | null;
          /** The string value when SignWell returns one. */
          signing_elements_group_id: string | null;
          [key: string]: unknown;
        }>>;
        /** The labels attached to the document. */
        labels: Array<{
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The label name. */
          name: string;
        }>;
        /** The checkbox groups configured on the document. */
        checkbox_groups: Array<{
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The string value when SignWell returns one. */
          group_name: string | null;
          /** The string value when SignWell returns one. */
          recipient_id: string | null;
          /** The checkbox API IDs grouped together. */
          checkbox_ids: Array<string>;
          /** The string value when SignWell returns one. */
          validation: string | null;
          /** Whether the checkbox group is required. */
          required: boolean;
          /** The minimum number of checked boxes when SignWell returns one. */
          min_value: number;
          /** The maximum number of checked boxes when SignWell returns one. */
          max_value: number;
          /** The exact number of checked boxes when SignWell returns one. */
          exact_value: number;
        }>;
        /** Whether recipients can decline the document. */
        allow_decline: boolean;
        /** Whether recipients can reassign the document. */
        allow_reassign: boolean;
      };
    };
    /** Get the SignWell account information associated with the current API key. */
    "signwell.get_me": {
      input: Record<string, never>;
      output: {
        /**
         * The SignWell identifier.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /** The membership role tied to the API key. */
        role: string;
        /** Whether the membership is archived. */
        archived: boolean;
        /** The authenticated SignWell user. */
        user: {
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The user name. */
          name: string;
          /**
           * The user email address.
           * @format email
           */
          email: string;
          /** Whether the user originally registered with Google. */
          has_google_registration: boolean;
          /** The user's first name. */
          first_name: string;
        };
        /** The SignWell account summary. */
        account: {
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The account name. */
          name: string;
          /** The SignWell pricing tier. */
          plan_tier: string;
          /** The number of active templates in the account. */
          active_templates: number;
          /** Whether the account can create templates. */
          can_create_template: boolean;
          /** Whether the account can create tracking documents. */
          can_create_tracking_document: boolean;
          /** Whether the account can create completion documents. */
          can_create_completion_document: boolean;
          /** The active users in the SignWell account. */
          active_users: Array<{
            /**
             * The SignWell identifier.
             * @minLength 1
             * @pattern \S
             */
            id: string;
            /** The user name. */
            name: string;
            /**
             * The user email address.
             * @format email
             */
            email: string;
            /** Whether the user originally registered with Google. */
            has_google_registration: boolean;
          }>;
        };
        /** The SignWell workspace summary. */
        workspace: {
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The workspace name. */
          name: string;
          /** The SignWell workspace pricing tier. */
          plan_tier: string;
          /** The number of active templates in the workspace. */
          active_templates: number;
          /** Whether the workspace can create templates. */
          can_create_template: boolean;
          /** Whether the workspace can create tracking documents. */
          can_create_tracking_document: boolean;
          /** Whether the workspace can create completion documents. */
          can_create_completion_document: boolean;
          /** The active users in the SignWell workspace. */
          active_users: Array<{
            /**
             * The SignWell identifier.
             * @minLength 1
             * @pattern \S
             */
            id: string;
            /** The user name. */
            name: string;
            /**
             * The user email address.
             * @format email
             */
            email: string;
            /** Whether the user originally registered with Google. */
            has_google_registration: boolean;
          }>;
        };
        /** The SignWell contact tied to the authenticated user. */
        contact: {
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The contact email address.
           * @format email
           */
          email: string;
          /** The contact display name. */
          name: string;
          /** The string value when SignWell returns one. */
          company_name: string | null;
          /** The string value when SignWell returns one. */
          phone_number: string | null;
          /** The string value when SignWell returns one. */
          alt_phone_number: string | null;
          /**
           * The URL returned by SignWell when available.
           * @format uri
           */
          website: string | null;
          /** The string value when SignWell returns one. */
          initials: string | null;
          /** Whether the contact is archived. */
          archived: boolean;
        };
      };
    };
    /** Get a SignWell template and all associated template data by template ID. */
    "signwell.get_template": {
      input: {
        /**
         * The SignWell template ID from the template URL or create response.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /**
         * The SignWell identifier.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /**
         * The SignWell identifier.
         * @minLength 1
         * @pattern \S
         */
        api_application_id: string | null;
        /**
         * The email address of the template requester.
         * @format email
         */
        requester_email_address: string;
        /** The string value when SignWell returns one. */
        custom_requester_name?: string | null;
        /**
         * The email address returned by SignWell when available.
         * @format email
         */
        custom_requester_email?: string | null;
        /** The template name. */
        name: string;
        /** The default email subject stored on the template. */
        subject: string;
        /** The default email message stored on the template. */
        message: string;
        /** Optional SignWell metadata key-value pairs. */
        metadata: Record<string, string> | null;
        /**
         * The timestamp when the template was created.
         * @format date-time
         */
        created_at: string;
        /**
         * The timestamp when the template was last updated.
         * @format date-time
         */
        updated_at: string;
        /** The placeholders configured on the template. */
        placeholders: Array<{
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The placeholder name. */
          name: string;
          /** The string value when SignWell returns one. */
          subject?: string | null;
          /** The string value when SignWell returns one. */
          message?: string | null;
          /** The string value when SignWell returns one. */
          preassigned_recipient_name: string | null;
          /**
           * The email address returned by SignWell when available.
           * @format email
           */
          preassigned_recipient_email: string | null;
          /** The signing order assigned to this placeholder. */
          signing_order?: number;
          /** The attachment requests attached to this placeholder. */
          attachment_requests?: Array<{
            /** The attachment request name. */
            name: string;
            /** Whether the attachment request is required. */
            required: boolean;
            /**
             * The attachment upload URL returned by SignWell.
             * @format uri
             */
            url: string;
          }>;
          /** Passcode delivery settings returned by SignWell. */
          passcode_delivery?: {
            /** Whether passcode delivery is enabled. */
            enabled: boolean;
            /** The passcode delivery methods returned by SignWell. */
            methods: Array<string> | null;
            /** Whether SignWell expires the passcode after successful access. */
            expire_after_access: boolean;
          };
        }>;
        /** The copied placeholders configured on the template. */
        copied_placeholders: Array<{
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          placeholder_id: string;
          /** The copied placeholder name. */
          name: string;
          /** The string value when SignWell returns one. */
          subject: string | null;
          /** The string value when SignWell returns one. */
          message: string | null;
          /** The string value when SignWell returns one. */
          preassigned_recipient_name: string | null;
          /**
           * The email address returned by SignWell when available.
           * @format email
           */
          preassigned_recipient_email: string | null;
        }>;
        /** The SignWell template status. */
        status: string;
        /** Whether SignWell reminders are enabled on the template. */
        reminders: boolean | null;
        /** Whether the template is archived. */
        archived: boolean;
        /**
         * The URL returned by SignWell when available.
         * @format uri
         */
        embedded_edit_url: string | null;
        /**
         * The URL returned by SignWell when available.
         * @format uri
         */
        template_link: string | null;
        /** Whether SignWell applies signing order on the template. */
        apply_signing_order: boolean;
        /**
         * The URL returned by SignWell when available.
         * @format uri
         */
        redirect_url: string | null;
        /**
         * The URL returned by SignWell when available.
         * @format uri
         */
        decline_redirect_url: string | null;
        /** The ISO 639-1 language code stored on the template. */
        language: string;
        /** The number of days before documents created from this template expire. */
        expires_in: number | null;
        /** Whether recipients may decline documents from this template. */
        allow_decline: boolean | null;
        /** Whether recipients may reassign documents from this template. */
        allow_reassign: boolean | null;
        /** The files attached to the template. */
        files: Array<{
          /** The file name. */
          name: string;
          /** The number of pages SignWell detected in the file. */
          pages_number: number;
        }>;
        /** The SignWell field groups returned by the API. */
        fields: Array<Array<{
          /** The horizontal field position in pixels. */
          x: number;
          /** The vertical field position in pixels. */
          y: number;
          /** The one-based page number where the field is placed. */
          page: number;
          /** The field recipient reference returned by SignWell. */
          recipient: {
            /**
             * The recipient email address.
             * @format email
             */
            email: string;
            /** The recipient name. */
            name: string;
            /** The recipient role when SignWell returns one. */
            role: string;
          };
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          api_id: string;
          /** The SignWell field type. */
          type: string;
          /** Whether the field must be completed. */
          required: boolean;
          /** The string value when SignWell returns one. */
          label: string | null;
          /** The current field value returned by SignWell. */
          value: string | number | boolean | null;
          /** The string value when SignWell returns one. */
          name: string | null;
          /** The string value when SignWell returns one. */
          validation: string | null;
          /** Whether the field width is fixed. */
          fixed_width: boolean | null;
          /** Whether the date is locked to signing time. */
          lock_sign_date: boolean | null;
          /** The string value when SignWell returns one. */
          date_format: string | null;
          /** The string value when SignWell returns one. */
          formula: string | null;
          /** The field height in pixels. */
          height: number;
          /** The field width in pixels. */
          width: number;
          /** The string value when SignWell returns one. */
          recipient_id: string | null;
          /** The string value when SignWell returns one. */
          placeholder_name: string | null;
          /** The string value when SignWell returns one. */
          signing_elements_group_id: string | null;
          [key: string]: unknown;
        }>>;
        /** The labels attached to the template. */
        labels: Array<{
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The label name. */
          name: string;
        }>;
        /** The checkbox groups configured on the template. */
        checkbox_groups: Array<{
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The string value when SignWell returns one. */
          group_name: string | null;
          /** The string value when SignWell returns one. */
          recipient_id: string | null;
          /** The checkbox API IDs grouped together. */
          checkbox_ids: Array<string>;
          /** The string value when SignWell returns one. */
          validation: string | null;
          /** Whether the checkbox group is required. */
          required: boolean;
          /** The minimum number of checked boxes when SignWell returns one. */
          min_value: number;
          /** The maximum number of checked boxes when SignWell returns one. */
          max_value: number;
          /** The exact number of checked boxes when SignWell returns one. */
          exact_value: number;
        }>;
      };
    };
    /** Send a draft SignWell document for signing, with optional final subject, message, reminder, and redirect updates. */
    "signwell.send_document": {
      input: {
        /**
         * The draft SignWell document ID to send.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /** Whether SignWell should keep the document in test mode. */
        test_mode?: boolean;
        /**
         * The string value.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /**
         * The string value.
         * @minLength 1
         * @pattern \S
         */
        subject?: string;
        /**
         * The string value.
         * @minLength 1
         * @pattern \S
         */
        message?: string;
        /**
         * The updated expiration window in days.
         * @minimum 1
         * @maximum 365
         */
        expires_in?: number;
        /** Whether SignWell should send reminders after the document is sent. */
        reminders?: boolean;
        /** Whether SignWell should enforce recipient signing order. */
        apply_signing_order?: boolean;
        /**
         * The SignWell identifier.
         * @minLength 1
         * @pattern \S
         */
        api_application_id?: string;
        /** Whether the document should use embedded signing. */
        embedded_signing?: boolean;
        /** Whether SignWell should send final notifications for embedded signing. */
        embedded_signing_notifications?: boolean;
        /**
         * The string value.
         * @minLength 1
         * @pattern \S
         */
        custom_requester_name?: string;
        /**
         * A custom requester email used in SignWell email communications.
         * @format email
         */
        custom_requester_email?: string;
        /**
         * The URL SignWell redirects recipients to after they successfully sign.
         * @format uri
         */
        redirect_url?: string;
        /** Whether SignWell allows recipients to decline signing. */
        allow_decline?: boolean;
        /** Whether SignWell allows recipients to reassign signing. */
        allow_reassign?: boolean;
        /**
         * The URL SignWell redirects recipients to after they decline the document.
         * @format uri
         */
        decline_redirect_url?: string;
        /** Optional metadata key-value pairs to replace on the document. */
        metadata?: Record<string, string>;
        /** Labels to replace on the document. */
        labels?: Array<{
          /**
           * The SignWell label name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
        }>;
        /** Checkbox group constraints to apply before the document is sent. */
        checkbox_groups?: Array<{
          /**
           * A unique checkbox group identifier.
           * @minLength 1
           * @pattern \S
           */
          group_name: string;
          /**
           * The recipient ID tied to this checkbox group.
           * @minLength 1
           * @pattern \S
           */
          recipient_id: string;
          /**
           * Checkbox API IDs grouped under this SignWell rule.
           * @minItems 2
           */
          checkbox_ids: Array<string>;
          /**
           * The SignWell checkbox validation mode.
           * @minLength 1
           * @pattern \S
           */
          validation: string;
          /** Whether the checkbox group is required. */
          required?: boolean;
          /**
           * The minimum selections allowed for the group.
           * @minimum 0
           */
          min_value?: number;
          /**
           * The maximum selections allowed for the group.
           * @minimum 0
           */
          max_value?: number;
          /**
           * The exact selections required for the group.
           * @minimum 0
           */
          exact_value?: number;
        }>;
      };
      output: {
        /** Whether SignWell created the document in test mode. */
        test_mode: boolean;
        /**
         * The SignWell identifier.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /**
         * The SignWell identifier.
         * @minLength 1
         * @pattern \S
         */
        template_id?: string;
        /** The template identifiers SignWell associates with this document. */
        template_ids: Array<string>;
        /**
         * The SignWell identifier.
         * @minLength 1
         * @pattern \S
         */
        api_application_id: string | null;
        /**
         * The email address of the document requester.
         * @format email
         */
        requester_email_address: string;
        /** The string value when SignWell returns one. */
        custom_requester_name: string | null;
        /**
         * The email address returned by SignWell when available.
         * @format email
         */
        custom_requester_email: string | null;
        /** The document name. */
        name: string;
        /** The email subject SignWell uses for the signature request. */
        subject: string;
        /** The email message SignWell uses for the signature request. */
        message: string;
        /** Optional SignWell metadata key-value pairs. */
        metadata: Record<string, string> | null;
        /**
         * The timestamp when the document was created.
         * @format date-time
         */
        created_at: string;
        /**
         * The timestamp when the document was last updated.
         * @format date-time
         */
        updated_at: string;
        /** The recipients configured on the document. */
        recipients: Array<{
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The recipient name. */
          name: string;
          /**
           * The recipient email address.
           * @format email
           */
          email: string;
          /** The recipient role when SignWell returns one. */
          role?: string;
          /** The string value when SignWell returns one. */
          message?: string | null;
          /** The string value when SignWell returns one. */
          subject?: string | null;
          /** Whether SignWell sends email to this recipient. */
          send_email?: boolean | null;
          /** The delayed email notification window in minutes when present. */
          send_email_delay?: number | null;
          /** The recipient signing order. */
          signing_order?: number;
          /**
           * The URL returned by SignWell when available.
           * @format uri
           */
          signing_url?: string | null;
          /**
           * The URL returned by SignWell when available.
           * @format uri
           */
          embedded_signing_url?: string | null;
          /** Whether the email bounced when SignWell returns the value. */
          bounced?: boolean | null;
          /** The string value when SignWell returns one. */
          bounced_details?: string | null;
          /** The attachment requests assigned to this recipient. */
          attachment_requests?: Array<{
            /** The attachment request name. */
            name: string;
            /** Whether the attachment request is required. */
            required: boolean;
            /**
             * The attachment upload URL returned by SignWell.
             * @format uri
             */
            url: string;
          }>;
          /** The string value when SignWell returns one. */
          passcode?: string | null;
          /** Passcode delivery settings returned by SignWell. */
          passcode_delivery?: {
            /** Whether passcode delivery is enabled. */
            enabled: boolean;
            /** The passcode delivery methods returned by SignWell. */
            methods: Array<string> | null;
            /** Whether SignWell expires the passcode after successful access. */
            expire_after_access: boolean;
          };
          /** The string value when SignWell returns one. */
          status?: string | null;
          /** The placeholder name assigned to this recipient. */
          placeholder_name?: string;
        }>;
        /** The SignWell document status. */
        status: string;
        /** Whether SignWell reminders are enabled for the document. */
        reminders: boolean;
        /** Whether the document is archived. */
        archived: boolean;
        /** Whether the document is configured for embedded signing. */
        embedded_signing: boolean;
        /**
         * The URL returned by SignWell when available.
         * @format uri
         */
        embedded_edit_url: string | null;
        /**
         * The URL returned by SignWell when available.
         * @format uri
         */
        embedded_preview_url: string | null;
        /** Whether SignWell applies signing order for the document. */
        apply_signing_order: boolean;
        /**
         * The URL returned by SignWell when available.
         * @format uri
         */
        redirect_url: string | null;
        /**
         * The URL returned by SignWell when available.
         * @format uri
         */
        decline_redirect_url: string | null;
        /** The ISO 639-1 language code stored on the document. */
        language: string;
        /** The number of days before the document expires. */
        expires_in: number;
        /** The string value when SignWell returns one. */
        decline_message: string | null;
        /** The string value when SignWell returns one. */
        error_message: string | null;
        /** Whether SignWell sends final notifications for embedded signing. */
        embedded_signing_notifications?: boolean;
        /** Attachment requests configured on the document. */
        attachment_requests: Array<{
          /** The attachment request name. */
          name: string;
          /** The recipient ID tied to the attachment request. */
          recipient_id: string;
          /** Whether the attachment request is required. */
          required: boolean;
        }>;
        /** The files attached to the document. */
        files: Array<{
          /** The file name. */
          name: string;
          /** The number of pages SignWell detected in the file. */
          pages_number: number;
        }>;
        /** The copied contacts attached to the document. */
        copied_contacts: Array<{
          /** The copied contact name. */
          name: string;
          /**
           * The copied contact email address.
           * @format email
           */
          email: string;
        }>;
        /** The SignWell field groups returned by the API. */
        fields: Array<Array<{
          /** The horizontal field position in pixels. */
          x: number;
          /** The vertical field position in pixels. */
          y: number;
          /** The one-based page number where the field is placed. */
          page: number;
          /** The field recipient reference returned by SignWell. */
          recipient: {
            /**
             * The recipient email address.
             * @format email
             */
            email: string;
            /** The recipient name. */
            name: string;
            /** The recipient role when SignWell returns one. */
            role: string;
          };
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          api_id: string;
          /** The SignWell field type. */
          type: string;
          /** Whether the field must be completed. */
          required: boolean;
          /** The string value when SignWell returns one. */
          label: string | null;
          /** The current field value returned by SignWell. */
          value: string | number | boolean | null;
          /** The string value when SignWell returns one. */
          name: string | null;
          /** The string value when SignWell returns one. */
          validation: string | null;
          /** Whether the field width is fixed. */
          fixed_width: boolean | null;
          /** Whether the date is locked to signing time. */
          lock_sign_date: boolean | null;
          /** The string value when SignWell returns one. */
          date_format: string | null;
          /** The string value when SignWell returns one. */
          formula: string | null;
          /** The field height in pixels. */
          height: number;
          /** The field width in pixels. */
          width: number;
          /** The string value when SignWell returns one. */
          recipient_id: string | null;
          /** The string value when SignWell returns one. */
          placeholder_name: string | null;
          /** The string value when SignWell returns one. */
          signing_elements_group_id: string | null;
          [key: string]: unknown;
        }>>;
        /** The labels attached to the document. */
        labels: Array<{
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The label name. */
          name: string;
        }>;
        /** The checkbox groups configured on the document. */
        checkbox_groups: Array<{
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The string value when SignWell returns one. */
          group_name: string | null;
          /** The string value when SignWell returns one. */
          recipient_id: string | null;
          /** The checkbox API IDs grouped together. */
          checkbox_ids: Array<string>;
          /** The string value when SignWell returns one. */
          validation: string | null;
          /** Whether the checkbox group is required. */
          required: boolean;
          /** The minimum number of checked boxes when SignWell returns one. */
          min_value: number;
          /** The maximum number of checked boxes when SignWell returns one. */
          max_value: number;
          /** The exact number of checked boxes when SignWell returns one. */
          exact_value: number;
        }>;
        /** Whether recipients can decline the document. */
        allow_decline: boolean;
        /** Whether recipients can reassign the document. */
        allow_reassign: boolean;
      };
    };
    /** Send a SignWell reminder email to all unsigned recipients or to a targeted subset on a document. */
    "signwell.send_document_reminder": {
      input: {
        /**
         * The SignWell document ID to remind.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /**
         * Optional subset of recipients that should receive the SignWell reminder.
         * @minItems 1
         */
        recipients?: Array<{
          /**
           * The recipient name when multiple recipients share the same email address on the document.
           * @minLength 1
           * @pattern \S
           */
          name?: string;
          /**
           * The recipient email address to remind.
           * @format email
           */
          email: string;
        }>;
      };
      output: {
        /** Whether SignWell created the document in test mode. */
        test_mode: boolean;
        /**
         * The SignWell identifier.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /**
         * The SignWell identifier.
         * @minLength 1
         * @pattern \S
         */
        template_id?: string;
        /** The template identifiers SignWell associates with this document. */
        template_ids: Array<string>;
        /**
         * The SignWell identifier.
         * @minLength 1
         * @pattern \S
         */
        api_application_id: string | null;
        /**
         * The email address of the document requester.
         * @format email
         */
        requester_email_address: string;
        /** The string value when SignWell returns one. */
        custom_requester_name: string | null;
        /**
         * The email address returned by SignWell when available.
         * @format email
         */
        custom_requester_email: string | null;
        /** The document name. */
        name: string;
        /** The email subject SignWell uses for the signature request. */
        subject: string;
        /** The email message SignWell uses for the signature request. */
        message: string;
        /** Optional SignWell metadata key-value pairs. */
        metadata: Record<string, string> | null;
        /**
         * The timestamp when the document was created.
         * @format date-time
         */
        created_at: string;
        /**
         * The timestamp when the document was last updated.
         * @format date-time
         */
        updated_at: string;
        /** The recipients configured on the document. */
        recipients: Array<{
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The recipient name. */
          name: string;
          /**
           * The recipient email address.
           * @format email
           */
          email: string;
          /** The recipient role when SignWell returns one. */
          role?: string;
          /** The string value when SignWell returns one. */
          message?: string | null;
          /** The string value when SignWell returns one. */
          subject?: string | null;
          /** Whether SignWell sends email to this recipient. */
          send_email?: boolean | null;
          /** The delayed email notification window in minutes when present. */
          send_email_delay?: number | null;
          /** The recipient signing order. */
          signing_order?: number;
          /**
           * The URL returned by SignWell when available.
           * @format uri
           */
          signing_url?: string | null;
          /**
           * The URL returned by SignWell when available.
           * @format uri
           */
          embedded_signing_url?: string | null;
          /** Whether the email bounced when SignWell returns the value. */
          bounced?: boolean | null;
          /** The string value when SignWell returns one. */
          bounced_details?: string | null;
          /** The attachment requests assigned to this recipient. */
          attachment_requests?: Array<{
            /** The attachment request name. */
            name: string;
            /** Whether the attachment request is required. */
            required: boolean;
            /**
             * The attachment upload URL returned by SignWell.
             * @format uri
             */
            url: string;
          }>;
          /** The string value when SignWell returns one. */
          passcode?: string | null;
          /** Passcode delivery settings returned by SignWell. */
          passcode_delivery?: {
            /** Whether passcode delivery is enabled. */
            enabled: boolean;
            /** The passcode delivery methods returned by SignWell. */
            methods: Array<string> | null;
            /** Whether SignWell expires the passcode after successful access. */
            expire_after_access: boolean;
          };
          /** The string value when SignWell returns one. */
          status?: string | null;
          /** The placeholder name assigned to this recipient. */
          placeholder_name?: string;
        }>;
        /** The SignWell document status. */
        status: string;
        /** Whether SignWell reminders are enabled for the document. */
        reminders: boolean;
        /** Whether the document is archived. */
        archived: boolean;
        /** Whether the document is configured for embedded signing. */
        embedded_signing: boolean;
        /**
         * The URL returned by SignWell when available.
         * @format uri
         */
        embedded_edit_url: string | null;
        /**
         * The URL returned by SignWell when available.
         * @format uri
         */
        embedded_preview_url: string | null;
        /** Whether SignWell applies signing order for the document. */
        apply_signing_order: boolean;
        /**
         * The URL returned by SignWell when available.
         * @format uri
         */
        redirect_url: string | null;
        /**
         * The URL returned by SignWell when available.
         * @format uri
         */
        decline_redirect_url: string | null;
        /** The ISO 639-1 language code stored on the document. */
        language: string;
        /** The number of days before the document expires. */
        expires_in: number;
        /** The string value when SignWell returns one. */
        decline_message: string | null;
        /** The string value when SignWell returns one. */
        error_message: string | null;
        /** Whether SignWell sends final notifications for embedded signing. */
        embedded_signing_notifications?: boolean;
        /** Attachment requests configured on the document. */
        attachment_requests: Array<{
          /** The attachment request name. */
          name: string;
          /** The recipient ID tied to the attachment request. */
          recipient_id: string;
          /** Whether the attachment request is required. */
          required: boolean;
        }>;
        /** The files attached to the document. */
        files: Array<{
          /** The file name. */
          name: string;
          /** The number of pages SignWell detected in the file. */
          pages_number: number;
        }>;
        /** The copied contacts attached to the document. */
        copied_contacts: Array<{
          /** The copied contact name. */
          name: string;
          /**
           * The copied contact email address.
           * @format email
           */
          email: string;
        }>;
        /** The SignWell field groups returned by the API. */
        fields: Array<Array<{
          /** The horizontal field position in pixels. */
          x: number;
          /** The vertical field position in pixels. */
          y: number;
          /** The one-based page number where the field is placed. */
          page: number;
          /** The field recipient reference returned by SignWell. */
          recipient: {
            /**
             * The recipient email address.
             * @format email
             */
            email: string;
            /** The recipient name. */
            name: string;
            /** The recipient role when SignWell returns one. */
            role: string;
          };
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          api_id: string;
          /** The SignWell field type. */
          type: string;
          /** Whether the field must be completed. */
          required: boolean;
          /** The string value when SignWell returns one. */
          label: string | null;
          /** The current field value returned by SignWell. */
          value: string | number | boolean | null;
          /** The string value when SignWell returns one. */
          name: string | null;
          /** The string value when SignWell returns one. */
          validation: string | null;
          /** Whether the field width is fixed. */
          fixed_width: boolean | null;
          /** Whether the date is locked to signing time. */
          lock_sign_date: boolean | null;
          /** The string value when SignWell returns one. */
          date_format: string | null;
          /** The string value when SignWell returns one. */
          formula: string | null;
          /** The field height in pixels. */
          height: number;
          /** The field width in pixels. */
          width: number;
          /** The string value when SignWell returns one. */
          recipient_id: string | null;
          /** The string value when SignWell returns one. */
          placeholder_name: string | null;
          /** The string value when SignWell returns one. */
          signing_elements_group_id: string | null;
          [key: string]: unknown;
        }>>;
        /** The labels attached to the document. */
        labels: Array<{
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The label name. */
          name: string;
        }>;
        /** The checkbox groups configured on the document. */
        checkbox_groups: Array<{
          /**
           * The SignWell identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The string value when SignWell returns one. */
          group_name: string | null;
          /** The string value when SignWell returns one. */
          recipient_id: string | null;
          /** The checkbox API IDs grouped together. */
          checkbox_ids: Array<string>;
          /** The string value when SignWell returns one. */
          validation: string | null;
          /** Whether the checkbox group is required. */
          required: boolean;
          /** The minimum number of checked boxes when SignWell returns one. */
          min_value: number;
          /** The maximum number of checked boxes when SignWell returns one. */
          max_value: number;
          /** The exact number of checked boxes when SignWell returns one. */
          exact_value: number;
        }>;
        /** Whether recipients can decline the document. */
        allow_decline: boolean;
        /** Whether recipients can reassign the document. */
        allow_reassign: boolean;
      };
    };
  }
}
