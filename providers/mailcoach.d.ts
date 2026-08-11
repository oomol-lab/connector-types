import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Confirm a pending Mailcoach subscriber by UUID. */
    "mailcoach.confirm_subscriber": {
      input: {
        /**
         * Mailcoach subscriber UUID.
         * @format uuid
         */
        subscriber_uuid: string;
      };
      output: {
        /** Whether Mailcoach accepted the operation. */
        success: boolean;
      };
    };
    /** Create a Mailcoach email list. */
    "mailcoach.create_email_list": {
      input: {
        /**
         * Email list name.
         * @minLength 1
         */
        name: string;
        /**
         * Default sender email address.
         * @format email
         */
        default_from_email: string;
        /** Default sender name. */
        default_from_name?: string;
        /**
         * Default reply-to email address.
         * @format email
         */
        default_reply_to_email?: string;
        /** Default reply-to name. */
        default_reply_to_name?: string;
        /**
         * Configured mailer for campaigns.
         * @minLength 1
         */
        campaign_mailer?: string;
        /**
         * Configured mailer for automation messages.
         * @minLength 1
         */
        automation_mailer?: string;
        /**
         * Configured mailer for transactional messages.
         * @minLength 1
         */
        transactional_mailer?: string;
        /** Whether to enable the public campaigns feed. */
        campaigns_feed_enabled?: boolean;
        /** Comma-delimited report recipient email addresses. */
        report_recipients?: string;
        /** Whether to send a report when a campaign is sent. */
        report_campaign_sent?: boolean;
        /** Whether to send campaign summary reports. */
        report_campaign_summary?: boolean;
        /** Whether to send email-list summary reports. */
        report_email_list_summary?: boolean;
        /** Whether to allow subscriptions through public forms. */
        allow_form_subscriptions?: boolean;
        /** Whether new subscriptions require confirmation. */
        requires_confirmation?: boolean;
        /** Tags allowed through public subscription forms. */
        allowed_form_subscription_tags?: Array<string>;
        /** Redirect URL after a successful subscription. */
        redirect_after_subscribed?: string;
        /** Redirect URL when the address is already subscribed. */
        redirect_after_already_subscribed?: string;
        /** Redirect URL when subscription confirmation is pending. */
        redirect_after_subscription_pending?: string;
        /** Redirect URL after an unsubscribe. */
        redirect_after_unsubscribed?: string;
        /** Confirmation email strategy. */
        confirmation_mail?: "send_default_confirmation_mail" | "send_custom_confirmation_mail";
        /** Custom confirmation email subject. */
        confirmation_mail_subject?: string;
        /** Custom confirmation email content. */
        confirmation_mail_content?: string;
      };
      output: {
        /** Mailcoach email list returned by the official API. */
        data: {
          /**
           * Mailcoach email list UUID.
           * @format uuid
           */
          uuid: string;
          /** Email list name. */
          name: string;
          /** Number of active subscribers in the list. */
          active_subscribers_count?: number;
          /** Whether the campaigns feed is enabled. */
          campaigns_feed_enabled?: boolean;
          /**
           * Default sender email address.
           * @format email
           */
          default_from_email?: string;
          /** Default sender name. */
          default_from_name?: string | null;
          /** Default reply-to email address. */
          default_reply_to_email?: string | null;
          /** Default reply-to name. */
          default_reply_to_name?: string | null;
          /** Whether public form subscriptions are allowed. */
          allow_form_subscriptions?: boolean;
          /** Redirect URL after a successful subscription. */
          redirect_after_subscribed?: string | null;
          /** Redirect URL when the address is already subscribed. */
          redirect_after_already_subscribed?: string | null;
          /** Redirect URL when subscription confirmation is pending. */
          redirect_after_subscription_pending?: string | null;
          /** Redirect URL after an unsubscribe. */
          redirect_after_unsubscribed?: string | null;
          /** Whether new subscriptions require confirmation. */
          requires_confirmation?: boolean;
          /** Custom confirmation email subject. */
          confirmation_mail_subject?: string | null;
          /** Custom confirmation email content. */
          confirmation_mail_content?: string | null;
          /** Mailer used for campaigns. */
          campaign_mailer?: string;
          /** Mailer used for automation messages. */
          automation_mailer?: string;
          /** Mailer used for transactional messages. */
          transactional_mailer?: string;
          /** Comma-delimited report recipient email addresses. */
          report_recipients?: string | null;
          /** Whether a campaign-sent report is enabled. */
          report_campaign_sent?: boolean;
          /** Whether a campaign summary report is enabled. */
          report_campaign_summary?: boolean;
          /** Whether an email-list summary report is enabled. */
          report_email_list_summary?: boolean;
          /**
           * Email list creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * Email list update timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Mailcoach email list by UUID. */
    "mailcoach.delete_email_list": {
      input: {
        /**
         * Mailcoach email list UUID.
         * @format uuid
         */
        email_list_uuid: string;
      };
      output: {
        /** Whether Mailcoach accepted the operation. */
        success: boolean;
      };
    };
    /** Permanently delete a Mailcoach subscriber by UUID. */
    "mailcoach.delete_subscriber": {
      input: {
        /**
         * Mailcoach subscriber UUID.
         * @format uuid
         */
        subscriber_uuid: string;
      };
      output: {
        /** Whether Mailcoach accepted the operation. */
        success: boolean;
      };
    };
    /** Get one Mailcoach email list by UUID. */
    "mailcoach.get_email_list": {
      input: {
        /**
         * Mailcoach email list UUID.
         * @format uuid
         */
        email_list_uuid: string;
      };
      output: {
        /** Mailcoach email list returned by the official API. */
        data: {
          /**
           * Mailcoach email list UUID.
           * @format uuid
           */
          uuid: string;
          /** Email list name. */
          name: string;
          /** Number of active subscribers in the list. */
          active_subscribers_count?: number;
          /** Whether the campaigns feed is enabled. */
          campaigns_feed_enabled?: boolean;
          /**
           * Default sender email address.
           * @format email
           */
          default_from_email?: string;
          /** Default sender name. */
          default_from_name?: string | null;
          /** Default reply-to email address. */
          default_reply_to_email?: string | null;
          /** Default reply-to name. */
          default_reply_to_name?: string | null;
          /** Whether public form subscriptions are allowed. */
          allow_form_subscriptions?: boolean;
          /** Redirect URL after a successful subscription. */
          redirect_after_subscribed?: string | null;
          /** Redirect URL when the address is already subscribed. */
          redirect_after_already_subscribed?: string | null;
          /** Redirect URL when subscription confirmation is pending. */
          redirect_after_subscription_pending?: string | null;
          /** Redirect URL after an unsubscribe. */
          redirect_after_unsubscribed?: string | null;
          /** Whether new subscriptions require confirmation. */
          requires_confirmation?: boolean;
          /** Custom confirmation email subject. */
          confirmation_mail_subject?: string | null;
          /** Custom confirmation email content. */
          confirmation_mail_content?: string | null;
          /** Mailer used for campaigns. */
          campaign_mailer?: string;
          /** Mailer used for automation messages. */
          automation_mailer?: string;
          /** Mailer used for transactional messages. */
          transactional_mailer?: string;
          /** Comma-delimited report recipient email addresses. */
          report_recipients?: string | null;
          /** Whether a campaign-sent report is enabled. */
          report_campaign_sent?: boolean;
          /** Whether a campaign summary report is enabled. */
          report_campaign_summary?: boolean;
          /** Whether an email-list summary report is enabled. */
          report_email_list_summary?: boolean;
          /**
           * Email list creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * Email list update timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Mailcoach subscriber by UUID. */
    "mailcoach.get_subscriber": {
      input: {
        /**
         * Mailcoach subscriber UUID.
         * @format uuid
         */
        subscriber_uuid: string;
      };
      output: {
        /** Mailcoach subscriber returned by the official API. */
        data: {
          /**
           * Mailcoach subscriber UUID.
           * @format uuid
           */
          uuid: string;
          /**
           * Mailcoach email list UUID.
           * @format uuid
           */
          email_list_uuid: string;
          /**
           * Subscriber email address.
           * @format email
           */
          email: string;
          /** Subscriber first name. */
          first_name?: string | null;
          /** Subscriber last name. */
          last_name?: string | null;
          /** Subscriber extra attributes as returned by the Mailcoach installation. */
          extra_attributes?: unknown;
          /** Tags attached to the subscriber. */
          tags?: Array<unknown>;
          /**
           * Subscription timestamp.
           * @format date-time
           */
          subscribed_at?: string | null;
          /**
           * Unsubscribe timestamp.
           * @format date-time
           */
          unsubscribed_at?: string | null;
          /**
           * Subscriber creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * Subscriber update timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List email lists available to the connected Mailcoach API token. */
    "mailcoach.list_email_lists": {
      input: {
        /**
         * Fuzzy email list name search term.
         * @minLength 1
         */
        search?: string;
        /**
         * Exact email list name filter.
         * @minLength 1
         */
        name?: string;
        /** Email list sort field and direction. */
        sort?: "name" | "-name" | "created_at" | "-created_at" | "updated_at" | "-updated_at" | "active_subscribers_count" | "-active_subscribers_count";
        /**
         * Page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Email lists returned for the requested page. */
        data: Array<{
          /**
           * Mailcoach email list UUID.
           * @format uuid
           */
          uuid: string;
          /** Email list name. */
          name: string;
          /** Number of active subscribers in the list. */
          active_subscribers_count?: number;
          /** Whether the campaigns feed is enabled. */
          campaigns_feed_enabled?: boolean;
          /**
           * Default sender email address.
           * @format email
           */
          default_from_email?: string;
          /** Default sender name. */
          default_from_name?: string | null;
          /** Default reply-to email address. */
          default_reply_to_email?: string | null;
          /** Default reply-to name. */
          default_reply_to_name?: string | null;
          /** Whether public form subscriptions are allowed. */
          allow_form_subscriptions?: boolean;
          /** Redirect URL after a successful subscription. */
          redirect_after_subscribed?: string | null;
          /** Redirect URL when the address is already subscribed. */
          redirect_after_already_subscribed?: string | null;
          /** Redirect URL when subscription confirmation is pending. */
          redirect_after_subscription_pending?: string | null;
          /** Redirect URL after an unsubscribe. */
          redirect_after_unsubscribed?: string | null;
          /** Whether new subscriptions require confirmation. */
          requires_confirmation?: boolean;
          /** Custom confirmation email subject. */
          confirmation_mail_subject?: string | null;
          /** Custom confirmation email content. */
          confirmation_mail_content?: string | null;
          /** Mailer used for campaigns. */
          campaign_mailer?: string;
          /** Mailer used for automation messages. */
          automation_mailer?: string;
          /** Mailer used for transactional messages. */
          transactional_mailer?: string;
          /** Comma-delimited report recipient email addresses. */
          report_recipients?: string | null;
          /** Whether a campaign-sent report is enabled. */
          report_campaign_sent?: boolean;
          /** Whether a campaign summary report is enabled. */
          report_campaign_summary?: boolean;
          /** Whether an email-list summary report is enabled. */
          report_email_list_summary?: boolean;
          /**
           * Email list creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * Email list update timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Mailcoach. */
        links: {
          /** URL of the first result page. */
          first?: string;
          /** URL of the last result page. */
          last?: string;
          /** URL of the previous page, or null when unavailable. */
          prev?: string | null;
          /** URL of the next page, or null when unavailable. */
          next?: string | null;
          [key: string]: unknown;
        };
        /** Pagination metadata returned by Mailcoach. */
        meta: {
          /** Current page number. */
          current_page?: number;
          /** One-based position of the first item, or null for an empty page. */
          from?: number | null;
          /** Last available page number. */
          last_page?: number;
          /** Base URL of the paginated resource. */
          path?: string;
          /** Number of items requested per page. */
          per_page?: number;
          /** One-based position of the last item, or null for an empty page. */
          to?: number | null;
          /** Total number of matching items. */
          total?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List subscribers in a Mailcoach email list. */
    "mailcoach.list_subscribers": {
      input: {
        /**
         * Mailcoach email list UUID.
         * @format uuid
         */
        email_list_uuid: string;
        /**
         * Exact subscriber email filter.
         * @format email
         */
        email?: string;
        /**
         * Fuzzy search term for email, first name, last name, or tags.
         * @minLength 1
         */
        search?: string;
        /** Subscriber status filter. */
        status?: "unconfirmed" | "subscribed" | "unsubscribed";
        /** Subscriber sort field and direction. */
        sort?: "created_at" | "-created_at" | "updated_at" | "-updated_at" | "subscribed_at" | "-subscribed_at" | "unsubscribed_at" | "-unsubscribed_at" | "email" | "-email" | "first_name" | "-first_name" | "last_name" | "-last_name";
        /**
         * Page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Subscribers returned for the requested page. */
        data: Array<{
          /**
           * Mailcoach subscriber UUID.
           * @format uuid
           */
          uuid: string;
          /**
           * Mailcoach email list UUID.
           * @format uuid
           */
          email_list_uuid: string;
          /**
           * Subscriber email address.
           * @format email
           */
          email: string;
          /** Subscriber first name. */
          first_name?: string | null;
          /** Subscriber last name. */
          last_name?: string | null;
          /** Subscriber extra attributes as returned by the Mailcoach installation. */
          extra_attributes?: unknown;
          /** Tags attached to the subscriber. */
          tags?: Array<unknown>;
          /**
           * Subscription timestamp.
           * @format date-time
           */
          subscribed_at?: string | null;
          /**
           * Unsubscribe timestamp.
           * @format date-time
           */
          unsubscribed_at?: string | null;
          /**
           * Subscriber creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * Subscriber update timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Mailcoach. */
        links: {
          /** URL of the first result page. */
          first?: string;
          /** URL of the last result page. */
          last?: string;
          /** URL of the previous page, or null when unavailable. */
          prev?: string | null;
          /** URL of the next page, or null when unavailable. */
          next?: string | null;
          [key: string]: unknown;
        };
        /** Pagination metadata returned by Mailcoach. */
        meta: {
          /** Current page number. */
          current_page?: number;
          /** One-based position of the first item, or null for an empty page. */
          from?: number | null;
          /** Last available page number. */
          last_page?: number;
          /** Base URL of the paginated resource. */
          path?: string;
          /** Number of items requested per page. */
          per_page?: number;
          /** One-based position of the last item, or null for an empty page. */
          to?: number | null;
          /** Total number of matching items. */
          total?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Resend the confirmation email for a Mailcoach subscriber by UUID. */
    "mailcoach.resend_subscriber_confirmation": {
      input: {
        /**
         * Mailcoach subscriber UUID.
         * @format uuid
         */
        subscriber_uuid: string;
      };
      output: {
        /** Whether Mailcoach accepted the operation. */
        success: boolean;
      };
    };
    /** Subscribe an email address to a Mailcoach email list. */
    "mailcoach.subscribe": {
      input: {
        /**
         * Mailcoach email list UUID.
         * @format uuid
         */
        email_list_uuid: string;
        /**
         * Subscriber email address.
         * @format email
         */
        email: string;
        /** Subscriber first name. */
        first_name?: string | null;
        /** Subscriber last name. */
        last_name?: string | null;
        /** Subscriber-defined extra attributes. */
        extra_attributes?: Record<string, unknown> | null;
        /** Tags to synchronize onto the subscriber. */
        tags?: Array<string>;
        /** Whether to skip the email list confirmation flow. */
        skip_confirmation?: boolean;
        /** Whether subscribing an existing address should return a validation error. */
        strict?: boolean;
      };
      output: {
        /** Mailcoach subscriber returned by the official API. */
        data: {
          /**
           * Mailcoach subscriber UUID.
           * @format uuid
           */
          uuid: string;
          /**
           * Mailcoach email list UUID.
           * @format uuid
           */
          email_list_uuid: string;
          /**
           * Subscriber email address.
           * @format email
           */
          email: string;
          /** Subscriber first name. */
          first_name?: string | null;
          /** Subscriber last name. */
          last_name?: string | null;
          /** Subscriber extra attributes as returned by the Mailcoach installation. */
          extra_attributes?: unknown;
          /** Tags attached to the subscriber. */
          tags?: Array<unknown>;
          /**
           * Subscription timestamp.
           * @format date-time
           */
          subscribed_at?: string | null;
          /**
           * Unsubscribe timestamp.
           * @format date-time
           */
          unsubscribed_at?: string | null;
          /**
           * Subscriber creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * Subscriber update timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Unsubscribe a Mailcoach subscriber by UUID. */
    "mailcoach.unsubscribe_subscriber": {
      input: {
        /**
         * Mailcoach subscriber UUID.
         * @format uuid
         */
        subscriber_uuid: string;
      };
      output: {
        /** Whether Mailcoach accepted the operation. */
        success: boolean;
      };
    };
    /** Update a Mailcoach email list by UUID. */
    "mailcoach.update_email_list": {
      input: {
        /**
         * Email list name.
         * @minLength 1
         */
        name: string;
        /**
         * Default sender email address.
         * @format email
         */
        default_from_email: string;
        /** Default sender name. */
        default_from_name?: string;
        /**
         * Default reply-to email address.
         * @format email
         */
        default_reply_to_email?: string;
        /** Default reply-to name. */
        default_reply_to_name?: string;
        /**
         * Configured mailer for campaigns.
         * @minLength 1
         */
        campaign_mailer?: string;
        /**
         * Configured mailer for automation messages.
         * @minLength 1
         */
        automation_mailer?: string;
        /**
         * Configured mailer for transactional messages.
         * @minLength 1
         */
        transactional_mailer?: string;
        /** Whether to enable the public campaigns feed. */
        campaigns_feed_enabled?: boolean;
        /** Comma-delimited report recipient email addresses. */
        report_recipients?: string;
        /** Whether to send a report when a campaign is sent. */
        report_campaign_sent?: boolean;
        /** Whether to send campaign summary reports. */
        report_campaign_summary?: boolean;
        /** Whether to send email-list summary reports. */
        report_email_list_summary?: boolean;
        /** Whether to allow subscriptions through public forms. */
        allow_form_subscriptions?: boolean;
        /** Whether new subscriptions require confirmation. */
        requires_confirmation?: boolean;
        /** Tags allowed through public subscription forms. */
        allowed_form_subscription_tags?: Array<string>;
        /** Redirect URL after a successful subscription. */
        redirect_after_subscribed?: string;
        /** Redirect URL when the address is already subscribed. */
        redirect_after_already_subscribed?: string;
        /** Redirect URL when subscription confirmation is pending. */
        redirect_after_subscription_pending?: string;
        /** Redirect URL after an unsubscribe. */
        redirect_after_unsubscribed?: string;
        /** Confirmation email strategy. */
        confirmation_mail?: "send_default_confirmation_mail" | "send_custom_confirmation_mail";
        /** Custom confirmation email subject. */
        confirmation_mail_subject?: string;
        /** Custom confirmation email content. */
        confirmation_mail_content?: string;
        /**
         * Mailcoach email list UUID.
         * @format uuid
         */
        email_list_uuid: string;
      };
      output: {
        /** Mailcoach email list returned by the official API. */
        data: {
          /**
           * Mailcoach email list UUID.
           * @format uuid
           */
          uuid: string;
          /** Email list name. */
          name: string;
          /** Number of active subscribers in the list. */
          active_subscribers_count?: number;
          /** Whether the campaigns feed is enabled. */
          campaigns_feed_enabled?: boolean;
          /**
           * Default sender email address.
           * @format email
           */
          default_from_email?: string;
          /** Default sender name. */
          default_from_name?: string | null;
          /** Default reply-to email address. */
          default_reply_to_email?: string | null;
          /** Default reply-to name. */
          default_reply_to_name?: string | null;
          /** Whether public form subscriptions are allowed. */
          allow_form_subscriptions?: boolean;
          /** Redirect URL after a successful subscription. */
          redirect_after_subscribed?: string | null;
          /** Redirect URL when the address is already subscribed. */
          redirect_after_already_subscribed?: string | null;
          /** Redirect URL when subscription confirmation is pending. */
          redirect_after_subscription_pending?: string | null;
          /** Redirect URL after an unsubscribe. */
          redirect_after_unsubscribed?: string | null;
          /** Whether new subscriptions require confirmation. */
          requires_confirmation?: boolean;
          /** Custom confirmation email subject. */
          confirmation_mail_subject?: string | null;
          /** Custom confirmation email content. */
          confirmation_mail_content?: string | null;
          /** Mailer used for campaigns. */
          campaign_mailer?: string;
          /** Mailer used for automation messages. */
          automation_mailer?: string;
          /** Mailer used for transactional messages. */
          transactional_mailer?: string;
          /** Comma-delimited report recipient email addresses. */
          report_recipients?: string | null;
          /** Whether a campaign-sent report is enabled. */
          report_campaign_sent?: boolean;
          /** Whether a campaign summary report is enabled. */
          report_campaign_summary?: boolean;
          /** Whether an email-list summary report is enabled. */
          report_email_list_summary?: boolean;
          /**
           * Email list creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * Email list update timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Mailcoach subscriber by UUID. */
    "mailcoach.update_subscriber": {
      input: {
        /**
         * Mailcoach subscriber UUID.
         * @format uuid
         */
        subscriber_uuid: string;
        /**
         * Subscriber email address.
         * @format email
         */
        email: string;
        /** Subscriber first name. */
        first_name?: string | null;
        /** Subscriber last name. */
        last_name?: string | null;
        /** Tags to synchronize or append. */
        tags?: Array<string>;
        /** Whether supplied tags should be appended instead of synchronized. */
        append_tags?: boolean;
        /** Subscriber-defined extra attributes. */
        extra_attributes?: Record<string, unknown> | null;
      };
      output: {
        /** Mailcoach subscriber returned by the official API. */
        data: {
          /**
           * Mailcoach subscriber UUID.
           * @format uuid
           */
          uuid: string;
          /**
           * Mailcoach email list UUID.
           * @format uuid
           */
          email_list_uuid: string;
          /**
           * Subscriber email address.
           * @format email
           */
          email: string;
          /** Subscriber first name. */
          first_name?: string | null;
          /** Subscriber last name. */
          last_name?: string | null;
          /** Subscriber extra attributes as returned by the Mailcoach installation. */
          extra_attributes?: unknown;
          /** Tags attached to the subscriber. */
          tags?: Array<unknown>;
          /**
           * Subscription timestamp.
           * @format date-time
           */
          subscribed_at?: string | null;
          /**
           * Unsubscribe timestamp.
           * @format date-time
           */
          unsubscribed_at?: string | null;
          /**
           * Subscriber creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * Subscriber update timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
