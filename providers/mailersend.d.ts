import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a single MailerSend domain by ID. */
    "mailersend.get_domain": {
      input: {
        /**
         * MailerSend domain ID.
         * @minLength 1
         */
        domain_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get DNS records required for a MailerSend domain. */
    "mailersend.get_domain_dns_records": {
      input: {
        /**
         * MailerSend domain ID.
         * @minLength 1
         */
        domain_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get the verification status for a MailerSend domain. */
    "mailersend.get_domain_verification_status": {
      input: {
        /**
         * MailerSend domain ID.
         * @minLength 1
         */
        domain_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a single MailerSend message by ID. */
    "mailersend.get_message": {
      input: {
        /**
         * MailerSend message ID.
         * @minLength 1
         */
        message_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a single MailerSend sender identity by ID. */
    "mailersend.get_sender_identity": {
      input: {
        /**
         * MailerSend sender identity ID.
         * @minLength 1
         */
        identity_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a single MailerSend template by ID. */
    "mailersend.get_template": {
      input: {
        /**
         * MailerSend template ID.
         * @minLength 1
         */
        template_id: string;
      };
      output: Record<string, unknown>;
    };
    /** List recipients associated with a MailerSend domain. */
    "mailersend.list_domain_recipients": {
      input: {
        /**
         * MailerSend domain ID.
         * @minLength 1
         */
        domain_id: string;
        /**
         * Page number to request from the official MailerSend API.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of items to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** List items returned by MailerSend. */
        data: Array<Record<string, unknown>>;
        /** Pagination links returned by the official MailerSend API. */
        links?: Record<string, unknown>;
        /** Pagination metadata returned by the official MailerSend API. */
        meta?: Record<string, unknown>;
      };
    };
    /** List MailerSend domains available to the current API token. */
    "mailersend.list_domains": {
      input: {
        /**
         * Page number to request from the official MailerSend API.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of items to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Domain name filter. */
        name?: string;
      };
      output: {
        /** List items returned by MailerSend. */
        data: Array<Record<string, unknown>>;
        /** Pagination links returned by the official MailerSend API. */
        links?: Record<string, unknown>;
        /** Pagination metadata returned by the official MailerSend API. */
        meta?: Record<string, unknown>;
      };
    };
    /** List messages available to the current MailerSend API token. */
    "mailersend.list_messages": {
      input: {
        /**
         * Page number to request from the official MailerSend API.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of items to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Message status filter. */
        status?: string;
        /** Sender email filter. */
        from?: string;
        /** Recipient email filter. */
        to?: string;
        /** Message subject filter. */
        subject?: string;
        /**
         * MailerSend domain ID.
         * @minLength 1
         */
        domain_id?: string;
      };
      output: {
        /** List items returned by MailerSend. */
        data: Array<Record<string, unknown>>;
        /** Pagination links returned by the official MailerSend API. */
        links?: Record<string, unknown>;
        /** Pagination metadata returned by the official MailerSend API. */
        meta?: Record<string, unknown>;
      };
    };
    /** List MailerSend sender identities available to the current API token. */
    "mailersend.list_sender_identities": {
      input: {
        /**
         * Page number to request from the official MailerSend API.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of items to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * MailerSend domain ID.
         * @minLength 1
         */
        domain_id?: string;
      };
      output: {
        /** List items returned by MailerSend. */
        data: Array<Record<string, unknown>>;
        /** Pagination links returned by the official MailerSend API. */
        links?: Record<string, unknown>;
        /** Pagination metadata returned by the official MailerSend API. */
        meta?: Record<string, unknown>;
      };
    };
    /** List MailerSend templates available to the current API token. */
    "mailersend.list_templates": {
      input: {
        /**
         * Page number to request from the official MailerSend API.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of items to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** List items returned by MailerSend. */
        data: Array<Record<string, unknown>>;
        /** Pagination links returned by the official MailerSend API. */
        links?: Record<string, unknown>;
        /** Pagination metadata returned by the official MailerSend API. */
        meta?: Record<string, unknown>;
      };
    };
    /** Send a transactional email through MailerSend. */
    "mailersend.send_email": {
      input: {
        /** Sender object accepted by the MailerSend email API. */
        from: {
          /**
           * Sender email address.
           * @format email
           */
          email: string;
          /** Sender display name. */
          name?: string;
        };
        /**
         * Primary recipients.
         * @minItems 1
         */
        to: Array<{
          /**
           * Email address for the recipient.
           * @format email
           */
          email: string;
          /** Display name for the recipient. */
          name?: string;
        }>;
        /** Carbon copy recipients. */
        cc?: Array<{
          /**
           * Email address for the recipient.
           * @format email
           */
          email: string;
          /** Display name for the recipient. */
          name?: string;
        }>;
        /** Blind carbon copy recipients. */
        bcc?: Array<{
          /**
           * Email address for the recipient.
           * @format email
           */
          email: string;
          /** Display name for the recipient. */
          name?: string;
        }>;
        /** Reply-to mailbox override. */
        reply_to?: {
          /**
           * Sender email address.
           * @format email
           */
          email: string;
          /** Sender display name. */
          name?: string;
        };
        /**
         * Email subject line.
         * @minLength 1
         */
        subject: string;
        /** Plain-text email body. */
        text?: string;
        /** HTML email body. */
        html?: string;
        /** Tags attached to the email. */
        tags?: Array<string>;
        /** Variable substitution payloads accepted by MailerSend. */
        variables?: Array<Record<string, unknown>>;
        /** Per-recipient personalization payloads. */
        personalization?: Array<Record<string, unknown>>;
        /** Attachments included with the email. */
        attachments?: Array<{
          /**
           * Base64-encoded attachment content.
           * @minLength 1
           */
          content: string;
          /**
           * Attachment file name.
           * @minLength 1
           */
          filename: string;
          /** Attachment disposition used by MailerSend. */
          disposition?: "attachment" | "inline";
          /** Inline attachment content ID. */
          id?: string;
          /** Attachment MIME type. */
          type?: string;
        }>;
        /** Datetime string that schedules the email for future delivery. */
        send_at?: string;
      };
      output: {
        /** Response message returned by MailerSend. */
        message: string;
        /** Message ID extracted from the x-message-id response header. */
        message_id: string;
        /** Raw JSON response body returned by MailerSend. */
        raw: Record<string, unknown>;
      };
    };
  }
}
