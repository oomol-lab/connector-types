import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new Basin form. */
    "basin.create_form": {
      input: {
        /**
         * Form name.
         * @minLength 1
         */
        name: string;
        /**
         * IANA timezone used for form timestamps.
         * @minLength 1
         */
        timezone: string;
        /**
         * Basin project ID that owns the form.
         * @minimum 1
         */
        project_id: number;
        /**
         * URL to redirect users to after submission.
         * @minLength 1
         */
        redirect_url?: string;
        /** Whether the form should submit via AJAX. */
        use_ajax?: boolean;
        /**
         * Comma-separated email addresses notified for each submission.
         * @minLength 1
         */
        notification_emails?: string;
        /**
         * Comma-separated CC email addresses for submission notifications.
         * @minLength 1
         */
        notification_cc_emails?: string;
        /**
         * Comma-separated BCC email addresses for submission notifications.
         * @minLength 1
         */
        notification_bcc_emails?: string;
        /**
         * Subject for submission notification emails.
         * @minLength 1
         */
        notification_subject?: string;
        /**
         * From name for submission notification emails.
         * @minLength 1
         */
        notification_from_name?: string;
        /** Whether Basin should send auto-reply emails. */
        autoreply?: boolean;
        /**
         * Body text for auto-reply emails.
         * @minLength 1
         */
        autoreply_body?: string;
        /**
         * Subject for auto-reply emails.
         * @minLength 1
         */
        autoreply_subject?: string;
        /**
         * From name for auto-reply emails.
         * @minLength 1
         */
        autoreply_from_name?: string;
        /**
         * Greeting text for auto-reply emails.
         * @minLength 1
         */
        autoreply_greeting?: string;
        /**
         * Sender display name for auto-reply emails.
         * @minLength 1
         */
        autoreply_name?: string;
        /**
         * Title text for auto-reply emails.
         * @minLength 1
         */
        autoreply_title?: string;
        /**
         * Reply-to email address for auto-reply emails.
         * @minLength 1
         */
        autoreply_email?: string;
        /** Whether Google reCAPTCHA is required. */
        force_recaptcha?: boolean;
        /** Whether hCaptcha is required. */
        force_hcaptcha?: boolean;
        /** Whether Cloudflare Turnstile is required. */
        force_turnstile?: boolean;
        /**
         * Honeypot field name used for spam filtering.
         * @minLength 1
         */
        honeypot_field?: string;
        /**
         * Number of days to retain form submissions.
         * @minimum 1
         */
        retention_days?: number;
        /** Domains allowed to submit the form. */
        allowed_domains?: Array<string>;
        /** Domains blocked from submitting the form. */
        blocked_domains?: Array<string>;
        /** Whether Basin should filter duplicate submissions. */
        duplicate_filter?: boolean;
        /** Whether SMTP email validation is enabled. */
        smtp_email_validation?: boolean;
      };
      output: {
        uuid: string | null;
        /** Form name. */
        name: string;
        /** IANA timezone configured for the form. */
        timezone: string;
        redirect_url: string | null;
        /** Whether the form submits using AJAX. */
        use_ajax: boolean;
        /** Notification email recipients. */
        notification_emails: string;
        /** Whether Basin sends auto-reply emails. */
        autoreply: boolean;
        autoreply_body: string | null;
        whitelist_source_domains: string | null;
        /** Whether Google reCAPTCHA is required. */
        force_recaptcha: boolean;
        /** Whether hCaptcha is required. */
        force_hcaptcha: boolean;
        /** Whether Cloudflare Turnstile is required. */
        force_turnstile: boolean;
        turnstile_site_key: string | null;
        turnstile_secret: string | null;
        notification_cc_emails: string | null;
        notification_bcc_emails: string | null;
        notification_subject: string | null;
        notification_from_name: string | null;
        autoreply_subject: string | null;
        autoreply_from_name: string | null;
        autoreply_greeting: string | null;
        autoreply_name: string | null;
        autoreply_title: string | null;
        autoreply_email: string | null;
        logo: string | null;
        button_background_color: string | null;
        button_text_color: string | null;
        /** Whether Basin sends a data receipt email. */
        data_receipt_email: boolean;
        /** Number of days submissions are retained. */
        retention_days: number;
        /** Whether the dashboard button is hidden. */
        hide_dashboard_button: boolean;
        /** Whether the submitter is excluded from reply recipients. */
        exclude_submitter_from_reply: boolean;
        custom_template: string | null;
        /** Whether the custom notification template is enabled. */
        use_custom_template: boolean;
        autoreply_custom_template: string | null;
        /** Whether the custom auto-reply template is enabled. */
        autoreply_use_custom_template: boolean;
        notification_mail_template_id: number | null;
        auto_response_mail_template_id: number | null;
        confirmation_mail_template_id: number | null;
        honeypot_field: string | null;
        recaptcha_failed_url: string | null;
        domain_id: number | null;
        domain_email: string | null;
        /** Whether duplicate submission filtering is enabled. */
        duplicate_filter: boolean;
        /** Project ID that owns the form. */
        project_id: number;
        redirect_heading: string | null;
        redirect_message: string | null;
        redirect_button_background_color: string | null;
        redirect_button_text: string | null;
        redirect_button_text_color: string | null;
        content_blacklist: Array<string> | null;
        allowed_domains: Array<string> | null;
        blocked_domains: Array<string> | null;
        /** Whether SMTP email validation is enabled. */
        smtp_email_validation: boolean;
        /** Form ID. */
        id: number;
        /** Timestamp when the form was created. */
        created_at: string;
        /** Timestamp when the form was last updated. */
        updated_at: string;
        /** Project name associated with the form. */
        project_name: string;
        /** Webhooks associated with the form. */
        form_webhooks: Array<{
          /** Webhook ID when Basin includes it in the embedded form webhook list. */
          id: number;
          /** Form ID associated with the embedded webhook. */
          form_id: number;
          /** Webhook name when Basin includes it in the embedded form response. */
          name: string;
          /** Webhook destination URL when Basin includes it in the embedded form response. */
          url: string;
          /** Webhook payload format when Basin includes it in the embedded form response. */
          format: string;
          /** Whether the embedded webhook also fires for spam submissions. */
          trigger_when_spam: boolean;
          /** Whether the embedded webhook is enabled. */
          enabled: boolean;
          /** Timestamp when the embedded webhook was created. */
          created_at: string;
          /** Timestamp when the embedded webhook was last updated. */
          updated_at: string;
          /** Number of recent delivery failures for the embedded webhook. */
          failure_count: number;
          last_failure_at: string | null;
          [key: string]: unknown;
        }>;
        /** Number of inbox submissions for the form. */
        inbox_count: number;
        /** Number of spam submissions for the form. */
        spam_count: number;
        /** Number of trashed submissions for the form. */
        trash_count: number;
      };
    };
    /** Create a new Basin form webhook. */
    "basin.create_form_webhook": {
      input: {
        /**
         * Basin form ID to attach the webhook to.
         * @minimum 1
         */
        form_id: number;
        /**
         * Friendly webhook name.
         * @minLength 1
         */
        name: string;
        /**
         * Destination URL where Basin posts submission payloads.
         * @format uri
         */
        url: string;
        /**
         * Webhook payload format accepted by Basin.
         * @minLength 1
         */
        format?: string;
        /** Whether the webhook is enabled. */
        enabled?: boolean;
        /** Whether the webhook fires for spam submissions. */
        trigger_when_spam?: boolean;
      };
      output: {
        /** Form ID associated with the webhook. */
        form_id: number;
        /** Webhook name. */
        name: string;
        /** Webhook destination URL. */
        url: string;
        /** Webhook payload format. */
        format: string;
        /** Whether the webhook also fires for spam submissions. */
        trigger_when_spam: boolean;
        /** Whether the webhook is enabled. */
        enabled: boolean;
        /** Webhook ID. */
        id: number;
        /** Timestamp when the webhook was created. */
        created_at: string;
        /** Timestamp when the webhook was last updated. */
        updated_at: string;
        /** Number of recent webhook delivery failures. */
        failure_count: number;
        last_failure_at: string | null;
      };
    };
    /** Create a new Basin project. */
    "basin.create_project": {
      input: {
        /**
         * Project name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** Project name. */
        name: string;
        /** Project ID. */
        id: number;
        /** Timestamp when the project was created. */
        created_at: string;
        /** Timestamp when the project was last updated. */
        updated_at: string;
      };
    };
    /** Delete a Basin form by ID. */
    "basin.delete_form": {
      input: {
        /**
         * Basin form ID.
         * @minLength 1
         */
        form_id: string;
      };
      output: {
        uuid: string | null;
        /** Form name. */
        name: string;
        /** IANA timezone configured for the form. */
        timezone: string;
        redirect_url: string | null;
        /** Whether the form submits using AJAX. */
        use_ajax: boolean;
        /** Notification email recipients. */
        notification_emails: string;
        /** Whether Basin sends auto-reply emails. */
        autoreply: boolean;
        autoreply_body: string | null;
        whitelist_source_domains: string | null;
        /** Whether Google reCAPTCHA is required. */
        force_recaptcha: boolean;
        /** Whether hCaptcha is required. */
        force_hcaptcha: boolean;
        /** Whether Cloudflare Turnstile is required. */
        force_turnstile: boolean;
        turnstile_site_key: string | null;
        turnstile_secret: string | null;
        notification_cc_emails: string | null;
        notification_bcc_emails: string | null;
        notification_subject: string | null;
        notification_from_name: string | null;
        autoreply_subject: string | null;
        autoreply_from_name: string | null;
        autoreply_greeting: string | null;
        autoreply_name: string | null;
        autoreply_title: string | null;
        autoreply_email: string | null;
        logo: string | null;
        button_background_color: string | null;
        button_text_color: string | null;
        /** Whether Basin sends a data receipt email. */
        data_receipt_email: boolean;
        /** Number of days submissions are retained. */
        retention_days: number;
        /** Whether the dashboard button is hidden. */
        hide_dashboard_button: boolean;
        /** Whether the submitter is excluded from reply recipients. */
        exclude_submitter_from_reply: boolean;
        custom_template: string | null;
        /** Whether the custom notification template is enabled. */
        use_custom_template: boolean;
        autoreply_custom_template: string | null;
        /** Whether the custom auto-reply template is enabled. */
        autoreply_use_custom_template: boolean;
        notification_mail_template_id: number | null;
        auto_response_mail_template_id: number | null;
        confirmation_mail_template_id: number | null;
        honeypot_field: string | null;
        recaptcha_failed_url: string | null;
        domain_id: number | null;
        domain_email: string | null;
        /** Whether duplicate submission filtering is enabled. */
        duplicate_filter: boolean;
        /** Project ID that owns the form. */
        project_id: number;
        redirect_heading: string | null;
        redirect_message: string | null;
        redirect_button_background_color: string | null;
        redirect_button_text: string | null;
        redirect_button_text_color: string | null;
        content_blacklist: Array<string> | null;
        allowed_domains: Array<string> | null;
        blocked_domains: Array<string> | null;
        /** Whether SMTP email validation is enabled. */
        smtp_email_validation: boolean;
        /** Form ID. */
        id: number;
        /** Timestamp when the form was created. */
        created_at: string;
        /** Timestamp when the form was last updated. */
        updated_at: string;
        /** Project name associated with the form. */
        project_name: string;
        /** Webhooks associated with the form. */
        form_webhooks: Array<{
          /** Webhook ID when Basin includes it in the embedded form webhook list. */
          id: number;
          /** Form ID associated with the embedded webhook. */
          form_id: number;
          /** Webhook name when Basin includes it in the embedded form response. */
          name: string;
          /** Webhook destination URL when Basin includes it in the embedded form response. */
          url: string;
          /** Webhook payload format when Basin includes it in the embedded form response. */
          format: string;
          /** Whether the embedded webhook also fires for spam submissions. */
          trigger_when_spam: boolean;
          /** Whether the embedded webhook is enabled. */
          enabled: boolean;
          /** Timestamp when the embedded webhook was created. */
          created_at: string;
          /** Timestamp when the embedded webhook was last updated. */
          updated_at: string;
          /** Number of recent delivery failures for the embedded webhook. */
          failure_count: number;
          last_failure_at: string | null;
          [key: string]: unknown;
        }>;
        /** Number of inbox submissions for the form. */
        inbox_count: number;
        /** Number of spam submissions for the form. */
        spam_count: number;
        /** Number of trashed submissions for the form. */
        trash_count: number;
      } | {
        /** Whether Basin accepted the operation. */
        success: boolean;
      };
    };
    /** Delete a Basin form webhook by ID. */
    "basin.delete_form_webhook": {
      input: {
        /**
         * Basin form webhook ID.
         * @minimum 1
         */
        webhook_id: number;
      };
      output: {
        /** Form ID associated with the webhook. */
        form_id: number;
        /** Webhook name. */
        name: string;
        /** Webhook destination URL. */
        url: string;
        /** Webhook payload format. */
        format: string;
        /** Whether the webhook also fires for spam submissions. */
        trigger_when_spam: boolean;
        /** Whether the webhook is enabled. */
        enabled: boolean;
        /** Webhook ID. */
        id: number;
        /** Timestamp when the webhook was created. */
        created_at: string;
        /** Timestamp when the webhook was last updated. */
        updated_at: string;
        /** Number of recent webhook delivery failures. */
        failure_count: number;
        last_failure_at: string | null;
      } | {
        /** Whether Basin accepted the operation. */
        success: boolean;
      };
    };
    /** Delete a Basin project by ID. */
    "basin.delete_project": {
      input: {
        /**
         * Basin project ID.
         * @minimum 1
         */
        project_id: number;
      };
      output: {
        /** Project name. */
        name: string;
        /** Project ID. */
        id: number;
        /** Timestamp when the project was created. */
        created_at: string;
        /** Timestamp when the project was last updated. */
        updated_at: string;
      } | {
        /** Whether Basin accepted the operation. */
        success: boolean;
      };
    };
    /** Delete a Basin submission by ID. */
    "basin.delete_submission": {
      input: {
        /**
         * Basin submission ID.
         * @minimum 1
         */
        submission_id: number;
      };
      output: {
        /** Whether Basin accepted the operation. */
        success: boolean;
      };
    };
    /** Fetch a single Basin form by ID. */
    "basin.get_form": {
      input: {
        /**
         * Basin form ID.
         * @minLength 1
         */
        form_id: string;
      };
      output: {
        uuid: string | null;
        /** Form name. */
        name: string;
        /** IANA timezone configured for the form. */
        timezone: string;
        redirect_url: string | null;
        /** Whether the form submits using AJAX. */
        use_ajax: boolean;
        /** Notification email recipients. */
        notification_emails: string;
        /** Whether Basin sends auto-reply emails. */
        autoreply: boolean;
        autoreply_body: string | null;
        whitelist_source_domains: string | null;
        /** Whether Google reCAPTCHA is required. */
        force_recaptcha: boolean;
        /** Whether hCaptcha is required. */
        force_hcaptcha: boolean;
        /** Whether Cloudflare Turnstile is required. */
        force_turnstile: boolean;
        turnstile_site_key: string | null;
        turnstile_secret: string | null;
        notification_cc_emails: string | null;
        notification_bcc_emails: string | null;
        notification_subject: string | null;
        notification_from_name: string | null;
        autoreply_subject: string | null;
        autoreply_from_name: string | null;
        autoreply_greeting: string | null;
        autoreply_name: string | null;
        autoreply_title: string | null;
        autoreply_email: string | null;
        logo: string | null;
        button_background_color: string | null;
        button_text_color: string | null;
        /** Whether Basin sends a data receipt email. */
        data_receipt_email: boolean;
        /** Number of days submissions are retained. */
        retention_days: number;
        /** Whether the dashboard button is hidden. */
        hide_dashboard_button: boolean;
        /** Whether the submitter is excluded from reply recipients. */
        exclude_submitter_from_reply: boolean;
        custom_template: string | null;
        /** Whether the custom notification template is enabled. */
        use_custom_template: boolean;
        autoreply_custom_template: string | null;
        /** Whether the custom auto-reply template is enabled. */
        autoreply_use_custom_template: boolean;
        notification_mail_template_id: number | null;
        auto_response_mail_template_id: number | null;
        confirmation_mail_template_id: number | null;
        honeypot_field: string | null;
        recaptcha_failed_url: string | null;
        domain_id: number | null;
        domain_email: string | null;
        /** Whether duplicate submission filtering is enabled. */
        duplicate_filter: boolean;
        /** Project ID that owns the form. */
        project_id: number;
        redirect_heading: string | null;
        redirect_message: string | null;
        redirect_button_background_color: string | null;
        redirect_button_text: string | null;
        redirect_button_text_color: string | null;
        content_blacklist: Array<string> | null;
        allowed_domains: Array<string> | null;
        blocked_domains: Array<string> | null;
        /** Whether SMTP email validation is enabled. */
        smtp_email_validation: boolean;
        /** Form ID. */
        id: number;
        /** Timestamp when the form was created. */
        created_at: string;
        /** Timestamp when the form was last updated. */
        updated_at: string;
        /** Project name associated with the form. */
        project_name: string;
        /** Webhooks associated with the form. */
        form_webhooks: Array<{
          /** Webhook ID when Basin includes it in the embedded form webhook list. */
          id: number;
          /** Form ID associated with the embedded webhook. */
          form_id: number;
          /** Webhook name when Basin includes it in the embedded form response. */
          name: string;
          /** Webhook destination URL when Basin includes it in the embedded form response. */
          url: string;
          /** Webhook payload format when Basin includes it in the embedded form response. */
          format: string;
          /** Whether the embedded webhook also fires for spam submissions. */
          trigger_when_spam: boolean;
          /** Whether the embedded webhook is enabled. */
          enabled: boolean;
          /** Timestamp when the embedded webhook was created. */
          created_at: string;
          /** Timestamp when the embedded webhook was last updated. */
          updated_at: string;
          /** Number of recent delivery failures for the embedded webhook. */
          failure_count: number;
          last_failure_at: string | null;
          [key: string]: unknown;
        }>;
        /** Number of inbox submissions for the form. */
        inbox_count: number;
        /** Number of spam submissions for the form. */
        spam_count: number;
        /** Number of trashed submissions for the form. */
        trash_count: number;
      };
    };
    /** Fetch a single Basin form webhook by ID. */
    "basin.get_form_webhook": {
      input: {
        /**
         * Basin form webhook ID.
         * @minimum 1
         */
        webhook_id: number;
      };
      output: {
        /** Form ID associated with the webhook. */
        form_id: number;
        /** Webhook name. */
        name: string;
        /** Webhook destination URL. */
        url: string;
        /** Webhook payload format. */
        format: string;
        /** Whether the webhook also fires for spam submissions. */
        trigger_when_spam: boolean;
        /** Whether the webhook is enabled. */
        enabled: boolean;
        /** Webhook ID. */
        id: number;
        /** Timestamp when the webhook was created. */
        created_at: string;
        /** Timestamp when the webhook was last updated. */
        updated_at: string;
        /** Number of recent webhook delivery failures. */
        failure_count: number;
        last_failure_at: string | null;
      };
    };
    /** Fetch a single Basin project by ID. */
    "basin.get_project": {
      input: {
        /**
         * Basin project ID.
         * @minimum 1
         */
        project_id: number;
      };
      output: {
        /** Project name. */
        name: string;
        /** Project ID. */
        id: number;
        /** Timestamp when the project was created. */
        created_at: string;
        /** Timestamp when the project was last updated. */
        updated_at: string;
      };
    };
    /** Fetch a single Basin submission by ID. */
    "basin.get_submission": {
      input: {
        /**
         * Basin submission ID.
         * @minimum 1
         */
        submission_id: number;
      };
      output: {
        /** Submission ID. */
        id: number;
        /** Primary submitter email address. */
        email: string;
        /** Original submission payload parameters returned by Basin. */
        payload_params: {
          /** Submitter name captured in the submission payload. */
          name?: string;
          /** Submitter email captured in the submission payload. */
          email?: string;
          /** Nested submission payload values. */
          submission?: {
            /** Email value nested under the submission payload. */
            email?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Form ID that owns the submission. */
        form_id: number;
        /** Whether Basin classified the submission as spam. */
        spam: boolean;
        /** Timestamp when the submission was created. */
        created_at: string;
        /** Timestamp when the submission was last updated. */
        updated_at: string;
        /** Whether the submission has been marked as read. */
        read: boolean;
        /** Whether the submission is currently in trash. */
        trash: boolean;
        spam_reason: string | null;
        webhook_sent_at: string | null;
        ip: string | null;
        referrer: string | null;
        user_agent: string | null;
        attachments: Array<unknown> | null;
        /** Form summary embedded inside a Basin submission response. */
        form: {
          /** Name of the form that received the submission. */
          name: string;
          /** UUID of the form that received the submission. */
          uuid: string;
        };
      };
    };
    /** List Basin form webhooks with optional filters. */
    "basin.list_form_webhooks": {
      input: {
        /**
         * Page number to request from Basin.
         * @minimum 1
         */
        page?: number;
        /**
         * Search query accepted by the Basin list endpoint.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Form webhooks returned by the Basin list endpoint. */
        form_webhooks: Array<{
          /** Webhook ID. */
          id: number;
          /** Form ID associated with the webhook. */
          form_id: number;
          /** Webhook name. */
          name: string;
          /** Webhook destination URL. */
          url: string;
          /** Webhook payload format. */
          format: string;
          /** Whether the webhook also fires for spam submissions. */
          trigger_when_spam: boolean;
          /** Whether the webhook is enabled. */
          enabled: boolean;
          /** Timestamp when the webhook was created. */
          created_at: string;
          /** Timestamp when the webhook was last updated. */
          updated_at: string;
          /** Number of recent webhook delivery failures. */
          failure_count: number;
          last_failure_at: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata inferred from Basin list responses. */
        meta?: {
          /** Total number of records available for the current query. */
          count: number;
          /** Current page number. */
          page: number;
          /** Maximum number of records returned on each page. */
          per_page: number;
          [key: string]: unknown;
        };
      };
    };
    /** List forms available to the current Basin API key. */
    "basin.list_forms": {
      input: {
        /**
         * Page number to request from Basin.
         * @minimum 1
         */
        page?: number;
        /**
         * Search query accepted by the Basin list endpoint.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Forms returned by the Basin forms list endpoint. */
        forms: Array<{
          /** Form ID. */
          id: number;
          uuid: string | null;
          /** Form name. */
          name: string;
          /** Project ID associated with the form. */
          project_id: number;
          /** Timestamp when the form was created. */
          created_at: string;
          /** Timestamp when the form was last updated. */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata inferred from Basin list responses. */
        meta?: {
          /** Total number of records available for the current query. */
          count: number;
          /** Current page number. */
          page: number;
          /** Maximum number of records returned on each page. */
          per_page: number;
          [key: string]: unknown;
        };
      };
    };
    /** List projects available to the current Basin API key. */
    "basin.list_projects": {
      input: {
        /**
         * Page number to request from Basin.
         * @minimum 1
         */
        page?: number;
        /**
         * Search query accepted by the Basin list endpoint.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Projects returned by the Basin projects list endpoint. */
        projects: Array<{
          /** Project name. */
          name: string;
          /** Project ID. */
          id: number;
          /** Timestamp when the project was created. */
          created_at: string;
          /** Timestamp when the project was last updated. */
          updated_at: string;
        }>;
        /** Pagination metadata inferred from Basin list responses. */
        meta?: {
          /** Total number of records available for the current query. */
          count: number;
          /** Current page number. */
          page: number;
          /** Maximum number of records returned on each page. */
          per_page: number;
          [key: string]: unknown;
        };
      };
    };
    /** List Basin form submissions with optional filters. */
    "basin.list_submissions": {
      input: {
        /**
         * Basin form ID used to filter submissions.
         * @minLength 1
         */
        form_id?: string;
        /** Submission status filter accepted by Basin. */
        filter_by?: "new" | "spam" | "trash" | "all";
        /**
         * Search text for matching submissions.
         * @minLength 1
         */
        query?: string;
        /** Submission sort order accepted by Basin. */
        order_by?: "date_asc" | "date_desc" | "email_asc" | "email_desc";
        /**
         * Date range in YYYY-MM-DD+to+YYYY-MM-DD format accepted by Basin.
         * @minLength 1
         */
        date_range?: string;
      };
      output: {
        /** Submissions returned by the Basin submissions list endpoint. */
        submissions: Array<{
          /** Submission ID. */
          id: number;
          /** Primary submitter email address. */
          email: string;
          /** Form ID that owns the submission. */
          form_id: number;
          /** Whether Basin classified the submission as spam. */
          spam: boolean;
          /** Whether the submission has been marked as read. */
          read: boolean;
          /** Whether the submission is currently in trash. */
          trash: boolean;
          /** Timestamp when the submission was created. */
          created_at: string;
          /** Timestamp when the submission was last updated. */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata inferred from Basin list responses. */
        meta?: {
          /** Total number of records available for the current query. */
          count: number;
          /** Current page number. */
          page: number;
          /** Maximum number of records returned on each page. */
          per_page: number;
          [key: string]: unknown;
        };
      };
    };
    /** Update an existing Basin form by ID. */
    "basin.update_form": {
      input: {
        /**
         * Form name.
         * @minLength 1
         */
        name?: string;
        /**
         * IANA timezone used for form timestamps.
         * @minLength 1
         */
        timezone?: string;
        /**
         * Basin project ID that owns the form.
         * @minimum 1
         */
        project_id?: number;
        /**
         * URL to redirect users to after submission.
         * @minLength 1
         */
        redirect_url?: string;
        /** Whether the form should submit via AJAX. */
        use_ajax?: boolean;
        /**
         * Comma-separated email addresses notified for each submission.
         * @minLength 1
         */
        notification_emails?: string;
        /**
         * Comma-separated CC email addresses for submission notifications.
         * @minLength 1
         */
        notification_cc_emails?: string;
        /**
         * Comma-separated BCC email addresses for submission notifications.
         * @minLength 1
         */
        notification_bcc_emails?: string;
        /**
         * Subject for submission notification emails.
         * @minLength 1
         */
        notification_subject?: string;
        /**
         * From name for submission notification emails.
         * @minLength 1
         */
        notification_from_name?: string;
        /** Whether Basin should send auto-reply emails. */
        autoreply?: boolean;
        /**
         * Body text for auto-reply emails.
         * @minLength 1
         */
        autoreply_body?: string;
        /**
         * Subject for auto-reply emails.
         * @minLength 1
         */
        autoreply_subject?: string;
        /**
         * From name for auto-reply emails.
         * @minLength 1
         */
        autoreply_from_name?: string;
        /**
         * Greeting text for auto-reply emails.
         * @minLength 1
         */
        autoreply_greeting?: string;
        /**
         * Sender display name for auto-reply emails.
         * @minLength 1
         */
        autoreply_name?: string;
        /**
         * Title text for auto-reply emails.
         * @minLength 1
         */
        autoreply_title?: string;
        /**
         * Reply-to email address for auto-reply emails.
         * @minLength 1
         */
        autoreply_email?: string;
        /** Whether Google reCAPTCHA is required. */
        force_recaptcha?: boolean;
        /** Whether hCaptcha is required. */
        force_hcaptcha?: boolean;
        /** Whether Cloudflare Turnstile is required. */
        force_turnstile?: boolean;
        /**
         * Honeypot field name used for spam filtering.
         * @minLength 1
         */
        honeypot_field?: string;
        /**
         * Number of days to retain form submissions.
         * @minimum 1
         */
        retention_days?: number;
        /** Domains allowed to submit the form. */
        allowed_domains?: Array<string>;
        /** Domains blocked from submitting the form. */
        blocked_domains?: Array<string>;
        /** Whether Basin should filter duplicate submissions. */
        duplicate_filter?: boolean;
        /** Whether SMTP email validation is enabled. */
        smtp_email_validation?: boolean;
        /**
         * Basin form ID.
         * @minLength 1
         */
        form_id: string;
      };
      output: {
        uuid: string | null;
        /** Form name. */
        name: string;
        /** IANA timezone configured for the form. */
        timezone: string;
        redirect_url: string | null;
        /** Whether the form submits using AJAX. */
        use_ajax: boolean;
        /** Notification email recipients. */
        notification_emails: string;
        /** Whether Basin sends auto-reply emails. */
        autoreply: boolean;
        autoreply_body: string | null;
        whitelist_source_domains: string | null;
        /** Whether Google reCAPTCHA is required. */
        force_recaptcha: boolean;
        /** Whether hCaptcha is required. */
        force_hcaptcha: boolean;
        /** Whether Cloudflare Turnstile is required. */
        force_turnstile: boolean;
        turnstile_site_key: string | null;
        turnstile_secret: string | null;
        notification_cc_emails: string | null;
        notification_bcc_emails: string | null;
        notification_subject: string | null;
        notification_from_name: string | null;
        autoreply_subject: string | null;
        autoreply_from_name: string | null;
        autoreply_greeting: string | null;
        autoreply_name: string | null;
        autoreply_title: string | null;
        autoreply_email: string | null;
        logo: string | null;
        button_background_color: string | null;
        button_text_color: string | null;
        /** Whether Basin sends a data receipt email. */
        data_receipt_email: boolean;
        /** Number of days submissions are retained. */
        retention_days: number;
        /** Whether the dashboard button is hidden. */
        hide_dashboard_button: boolean;
        /** Whether the submitter is excluded from reply recipients. */
        exclude_submitter_from_reply: boolean;
        custom_template: string | null;
        /** Whether the custom notification template is enabled. */
        use_custom_template: boolean;
        autoreply_custom_template: string | null;
        /** Whether the custom auto-reply template is enabled. */
        autoreply_use_custom_template: boolean;
        notification_mail_template_id: number | null;
        auto_response_mail_template_id: number | null;
        confirmation_mail_template_id: number | null;
        honeypot_field: string | null;
        recaptcha_failed_url: string | null;
        domain_id: number | null;
        domain_email: string | null;
        /** Whether duplicate submission filtering is enabled. */
        duplicate_filter: boolean;
        /** Project ID that owns the form. */
        project_id: number;
        redirect_heading: string | null;
        redirect_message: string | null;
        redirect_button_background_color: string | null;
        redirect_button_text: string | null;
        redirect_button_text_color: string | null;
        content_blacklist: Array<string> | null;
        allowed_domains: Array<string> | null;
        blocked_domains: Array<string> | null;
        /** Whether SMTP email validation is enabled. */
        smtp_email_validation: boolean;
        /** Form ID. */
        id: number;
        /** Timestamp when the form was created. */
        created_at: string;
        /** Timestamp when the form was last updated. */
        updated_at: string;
        /** Project name associated with the form. */
        project_name: string;
        /** Webhooks associated with the form. */
        form_webhooks: Array<{
          /** Webhook ID when Basin includes it in the embedded form webhook list. */
          id: number;
          /** Form ID associated with the embedded webhook. */
          form_id: number;
          /** Webhook name when Basin includes it in the embedded form response. */
          name: string;
          /** Webhook destination URL when Basin includes it in the embedded form response. */
          url: string;
          /** Webhook payload format when Basin includes it in the embedded form response. */
          format: string;
          /** Whether the embedded webhook also fires for spam submissions. */
          trigger_when_spam: boolean;
          /** Whether the embedded webhook is enabled. */
          enabled: boolean;
          /** Timestamp when the embedded webhook was created. */
          created_at: string;
          /** Timestamp when the embedded webhook was last updated. */
          updated_at: string;
          /** Number of recent delivery failures for the embedded webhook. */
          failure_count: number;
          last_failure_at: string | null;
          [key: string]: unknown;
        }>;
        /** Number of inbox submissions for the form. */
        inbox_count: number;
        /** Number of spam submissions for the form. */
        spam_count: number;
        /** Number of trashed submissions for the form. */
        trash_count: number;
      };
    };
    /** Update an existing Basin form webhook by ID. */
    "basin.update_form_webhook": {
      input: {
        /**
         * Basin form ID to attach the webhook to.
         * @minimum 1
         */
        form_id?: number;
        /**
         * Friendly webhook name.
         * @minLength 1
         */
        name?: string;
        /**
         * Destination URL where Basin posts submission payloads.
         * @format uri
         */
        url?: string;
        /**
         * Webhook payload format accepted by Basin.
         * @minLength 1
         */
        format?: string;
        /** Whether the webhook is enabled. */
        enabled?: boolean;
        /** Whether the webhook fires for spam submissions. */
        trigger_when_spam?: boolean;
        /**
         * Basin form webhook ID.
         * @minimum 1
         */
        webhook_id: number;
      };
      output: {
        /** Form ID associated with the webhook. */
        form_id: number;
        /** Webhook name. */
        name: string;
        /** Webhook destination URL. */
        url: string;
        /** Webhook payload format. */
        format: string;
        /** Whether the webhook also fires for spam submissions. */
        trigger_when_spam: boolean;
        /** Whether the webhook is enabled. */
        enabled: boolean;
        /** Webhook ID. */
        id: number;
        /** Timestamp when the webhook was created. */
        created_at: string;
        /** Timestamp when the webhook was last updated. */
        updated_at: string;
        /** Number of recent webhook delivery failures. */
        failure_count: number;
        last_failure_at: string | null;
      };
    };
    /** Update an existing Basin project by ID. */
    "basin.update_project": {
      input: {
        /**
         * Project name.
         * @minLength 1
         */
        name: string;
        /**
         * Basin project ID.
         * @minimum 1
         */
        project_id: number;
      };
      output: {
        /** Project name. */
        name: string;
        /** Project ID. */
        id: number;
        /** Timestamp when the project was created. */
        created_at: string;
        /** Timestamp when the project was last updated. */
        updated_at: string;
      };
    };
  }
}
