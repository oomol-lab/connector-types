import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get UniOne user or project information for the current API key. */
    "unione.get_account_info": {
      input: Record<string, never>;
      output: {
        /** API operation status. */
        status: string;
        /** Unique UniOne user identifier. */
        user_id: number;
        /**
         * UniOne account email address.
         * @format email
         */
        email: string;
        /** Project identifier when the API key belongs to a project. */
        project_id?: string;
        /** Project name when the API key belongs to a project. */
        project_name?: string;
        /** Project email counters returned by UniOne. */
        project_accounting?: {
          /** Number of emails sent by the project counter. */
          email_counter?: number;
          /** Current project email counter limit. */
          email_counter_limit?: number;
          /** Project email counter mode. */
          email_counter_mode?: string;
          [key: string]: unknown;
        };
        /** Accounting counters returned by UniOne. */
        accounting?: {
          /** UTC start time of the accounting period. */
          period_start?: string;
          /** UTC end time of the accounting period. */
          period_end?: string;
          /** Number of emails included in the accounting period. */
          emails_included?: number;
          /** Number of emails sent during the accounting period. */
          emails_sent?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List UniOne suppressed recipients with optional filters. */
    "unione.list_suppressions": {
      input: {
        /** Suppression cause filter. */
        cause?: "unsubscribed" | "temporary_unavailable" | "permanent_unavailable" | "complained" | "blocked";
        /** Suppression source filter. */
        source?: "user" | "system" | "subscriber";
        /** UTC datetime string in the "YYYY-MM-DD hh:mm:ss" format accepted by UniOne. */
        start_time?: string;
        /** Pagination cursor from the previous UniOne response. */
        cursor?: string;
        /**
         * Maximum number of suppression records to return. Defaults to 50.
         * @minimum 0
         */
        limit?: number;
      };
      output: {
        /** API operation status. */
        status: string;
        /** Suppression records returned by UniOne. */
        suppressions: Array<{
          /**
           * Suppressed email address.
           * @format email
           */
          email?: string;
          /** Suppression cause. */
          cause: string;
          /** Suppression source. */
          source: string;
          /** Whether the suppression can be removed. */
          is_deletable: boolean;
          /** UTC timestamp when the suppression was created. */
          created: string;
        }>;
        /** Cursor for the next page of suppression records. */
        cursor?: string;
      };
    };
    /** List UniOne user-defined tags. */
    "unione.list_tags": {
      input: Record<string, never>;
      output: {
        /** API operation status. */
        status: string;
        /** User-defined tags returned by UniOne. */
        tags: Array<{
          /** Unique tag identifier. */
          tag_id: number;
          /** Tag name. */
          tag: string;
        }>;
      };
    };
    /** List UniOne templates available to the current API key. */
    "unione.list_templates": {
      input: {
        /**
         * Maximum number of templates to return. Defaults to 50.
         * @minimum 1
         */
        limit?: number;
        /**
         * Index of the first template to return.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** API operation status. */
        status: string;
        /** Template objects returned by UniOne. */
        templates: Array<Record<string, unknown>>;
      };
    };
    /** Send a transactional email through UniOne without attachments. */
    "unione.send_email": {
      input: {
        /**
         * Recipients accepted by UniOne.
         * @minItems 1
         * @maxItems 500
         */
        recipients: Array<{
          /**
           * Recipient email address.
           * @format email
           */
          email: string;
          /** String key-value object with string or integer values accepted by UniOne. */
          substitutions?: Record<string, string | number>;
          /** String key-value object with string or integer values accepted by UniOne. */
          metadata?: Record<string, string | number>;
        }>;
        /** Email body parts accepted by UniOne. */
        body: {
          /** HTML body part of the email. */
          html?: string;
          /** Plain-text body part of the email. */
          plaintext?: string;
          /** AMP4Email body part of the email. */
          amp?: string;
        };
        /** Email subject. */
        subject: string;
        /**
         * Sender email address.
         * @format email
         */
        from_email: string;
        /** Sender display name. */
        from_name?: string;
        /**
         * Reply-To email address.
         * @format email
         */
        reply_to?: string;
        /** Reply-To display name. */
        reply_to_name?: string;
        /**
         * Template identifier created in UniOne.
         * @format uuid
         */
        template_id?: string;
        /**
         * Up to four tags attached to the message.
         * @maxItems 4
         */
        tags?: Array<string>;
        /**
         * Whether UniOne should skip appending the default unsubscribe footer.
         * @minimum 0
         * @maximum 1
         */
        skip_unsubscribe?: number;
        /** Language used for the unsubscribe footer and page. */
        global_language?: "be" | "de" | "en" | "es" | "fr" | "it" | "pl" | "pt" | "ru" | "ua" | "kz";
        /** Template engine used for substitutions. */
        template_engine?: "simple" | "velocity" | "liquid" | "none";
        /** String key-value object with string or integer values accepted by UniOne. */
        global_substitutions?: Record<string, string | number>;
        /** String key-value object with string or integer values accepted by UniOne. */
        global_metadata?: Record<string, string | number>;
        /**
         * Whether click tracking is enabled, where 1 is enabled and 0 is disabled.
         * @minimum 0
         * @maximum 1
         */
        track_links?: number;
        /**
         * Whether read tracking is enabled, where 1 is enabled and 0 is disabled.
         * @minimum 0
         * @maximum 1
         */
        track_read?: number;
        /**
         * Whether the global unavailability list should be ignored.
         * @minimum 0
         * @maximum 1
         */
        bypass_global?: number;
        /**
         * Whether the current account or project unavailability list should be ignored.
         * @minimum 0
         * @maximum 1
         */
        bypass_unavailable?: number;
        /**
         * Whether the current unsubscribed list should be ignored.
         * @minimum 0
         * @maximum 1
         */
        bypass_unsubscribed?: number;
        /**
         * Whether the current complaint list should be ignored.
         * @minimum 0
         * @maximum 1
         */
        bypass_complained?: number;
        /**
         * Unique message key used to prevent accidental duplicates.
         * @maxLength 64
         */
        idempotence_key?: string;
        /** Custom email headers accepted by UniOne. */
        headers?: Record<string, string>;
        /** Additional email sending options accepted by UniOne. */
        options?: {
          /** UTC datetime string in the "YYYY-MM-DD hh:mm:ss" format accepted by UniOne. */
          send_at?: string;
          /**
           * Custom unsubscribe URL.
           * @format uri
           */
          unsubscribe_url?: string;
          /** Backend-domain identifier used to send the message. */
          custom_backend_id?: number;
          /**
           * SMTP pool identifier used to send the message.
           * @format uuid
           */
          smtp_pool_id?: string;
        };
      };
      output: {
        /** API operation status. */
        status: string;
        /** UniOne job identifier for the accepted send request. */
        job_id: string;
        /** Recipient email addresses accepted for sending. */
        emails?: Array<string>;
        /** Recipient email addresses rejected by UniOne with rejection reasons. */
        failed_emails?: Record<string, string>;
      };
    };
  }
}
