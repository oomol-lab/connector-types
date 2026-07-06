import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve SMTP2GO account email statistics and current sending cycle summary. */
    "smtp2go.get_email_summary": {
      input: {
        /** The optional SMTP2GO username to return statistics for. */
        username?: string;
      };
      output: {
        /** The SMTP2GO request identifier. */
        requestId: string;
        /** The raw data object returned by SMTP2GO. */
        summary: Record<string, unknown>;
        /** The raw data object returned by SMTP2GO. */
        data: Record<string, unknown>;
      };
    };
    /** Retrieve details for a single SMTP2GO email template by ID. */
    "smtp2go.get_email_template": {
      input: {
        /**
         * The case-sensitive SMTP2GO email template ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** The SMTP2GO request identifier. */
        requestId: string;
        /** The raw data object returned by SMTP2GO. */
        template: Record<string, unknown>;
        /** The raw data object returned by SMTP2GO. */
        data: Record<string, unknown>;
      };
    };
    /** List SMTP2GO sender domains and their verification metadata. */
    "smtp2go.list_sender_domains": {
      input: {
        /** Only return records for this sender domain. */
        domain?: string;
        /** The subaccount ID to query on behalf of. */
        subaccount_id?: string;
      };
      output: {
        /** The SMTP2GO request identifier. */
        requestId: string;
        /** The sender domain records returned by SMTP2GO. */
        domains: Array<Record<string, unknown>>;
        /** The raw data object returned by SMTP2GO. */
        data: Record<string, unknown>;
      };
    };
    /** List SMTP2GO single sender email addresses and verification status. */
    "smtp2go.list_single_sender_emails": {
      input: {
        /** Only return single sender emails matching this address. */
        email_address?: string;
        /** The subaccount ID to query on behalf of. */
        subaccount_id?: string;
      };
      output: {
        /** The SMTP2GO request identifier. */
        requestId: string;
        /** The single sender email records returned by SMTP2GO. */
        senders: Array<Record<string, unknown>>;
        /** The raw data object returned by SMTP2GO. */
        data: Record<string, unknown>;
      };
    };
    /** Search SMTP2GO email activity events with optional filters and pagination. */
    "smtp2go.search_activity": {
      input: {
        /** The inclusive start datetime for the activity search. */
        start_date?: string;
        /** The exclusive end datetime for the activity search. */
        end_date?: string;
        /** A text search across SMTP2GO activity search fields. */
        search?: string;
        /** The SMTP2GO email ID to search for. */
        search_email_id?: string;
        /** A subject search string. */
        search_subject?: string;
        /** A sender search string. */
        search_sender?: string;
        /** A recipient search string. */
        search_recipient?: string;
        /**
         * SMTP2GO usernames to include in the activity search.
         * @minItems 1
         */
        search_usernames?: Array<string>;
        /**
         * SMTP2GO subaccount IDs to include in the activity search.
         * @minItems 1
         */
        subaccounts?: Array<string>;
        /**
         * The maximum number of events to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** The continuation token from a previous activity search. */
        continue_token?: string;
        /** Whether to return only the most recent event for each email. */
        only_latest?: boolean;
        /** Whether to return the most recent event for each email ordered by sent date. */
        only_latest_by_sent?: boolean;
        /**
         * SMTP2GO event types used to filter activity results.
         * @minItems 1
         */
        event_types?: Array<"processed" | "soft-bounced" | "hard-bounced" | "rejected" | "spam" | "delivered" | "unsubscribed" | "resubscribed" | "opened" | "clicked">;
        /** Whether to include full email headers in returned events. */
        include_headers?: boolean;
        /**
         * Custom header names to extract from returned raw headers.
         * @minItems 1
         */
        custom_headers?: Array<string>;
        /** The SMTP2GO activity region to query. */
        region?: "us" | "eu" | "au";
      };
      output: {
        /** The SMTP2GO request identifier. */
        requestId: string;
        /** The SMTP2GO activity events returned for this page. */
        events: Array<Record<string, unknown>>;
        /** The total number of matching events reported by SMTP2GO. */
        totalEvents: number;
        /** The continuation token returned by SMTP2GO when another page is available. */
        continueToken: string | null;
        /** The raw data object returned by SMTP2GO. */
        data: Record<string, unknown>;
      };
    };
    /** Search SMTP2GO email templates by terms, tags, sorting, and pagination. */
    "smtp2go.search_email_templates": {
      input: {
        /** Whether search terms should use wildcard matching. */
        fuzzy_search?: boolean;
        /**
         * Template search terms matched against name, tag, ID, or subject.
         * @minItems 1
         */
        search_terms?: Array<string>;
        /**
         * Template tags used to filter results.
         * @minItems 1
         */
        tags?: Array<string>;
        /** The template sort direction. */
        sort_direction?: "asc" | "desc";
        /**
         * The maximum number of templates to return.
         * @minimum 1
         */
        page_size?: number;
        /** The continuation token from a previous template search. */
        continue_token?: string;
      };
      output: {
        /** The SMTP2GO request identifier. */
        requestId: string;
        /** The SMTP2GO templates returned for this page. */
        templates: Array<Record<string, unknown>>;
        /** The total number of matching templates reported by SMTP2GO. */
        totalCount: number;
        /** The continuation token returned by SMTP2GO when another page is available. */
        continueToken: string | null;
        /** The raw data object returned by SMTP2GO. */
        data: Record<string, unknown>;
      };
    };
    /** Send a standard JSON email through SMTP2GO without Base64 attachments or inline files. */
    "smtp2go.send_email": {
      input: {
        /**
         * The name and email address to send from, such as Sender <sender@example.com>.
         * @minLength 1
         * @pattern \S
         */
        sender: string;
        /**
         * The email addresses to send to, up to 100 recipients.
         * @minItems 1
         * @maxItems 100
         */
        to: Array<string>;
        /**
         * The email addresses to CC, up to 100 recipients.
         * @minItems 1
         * @maxItems 100
         */
        cc?: Array<string>;
        /**
         * The email addresses to BCC, up to 100 recipients.
         * @minItems 1
         * @maxItems 100
         */
        bcc?: Array<string>;
        /** The subject of the email. If template_id is provided, SMTP2GO ignores this value. */
        subject?: string;
        /** The HTML email body. Either html_body or text_body is required when template_id is omitted. */
        html_body?: string;
        /** The plain-text email body. Either html_body or text_body is required when template_id is omitted. */
        text_body?: string;
        /**
         * Custom headers to add to the email.
         * @minItems 1
         */
        custom_headers?: Array<{
          /**
           * The custom header name.
           * @minLength 1
           * @pattern \S
           */
          header: string;
          /** The custom header value. */
          value: string;
        }>;
        /**
         * The SMTP2GO template ID to use for this send.
         * @minLength 1
         * @pattern \S
         */
        template_id?: string;
        /** The template variable values passed to SMTP2GO. */
        template_data?: Record<string, unknown>;
        /**
         * A future SMTP2GO schedule timestamp within the next three days.
         * @minLength 1
         * @pattern \S
         */
        schedule?: string;
        /** Whether SMTP2GO should accept the email immediately and send it in the background. */
        fastaccept?: boolean;
      };
      output: {
        /** The SMTP2GO request identifier. */
        requestId: string;
        /** The number of recipients SMTP2GO accepted. */
        succeeded: number;
        /** The number of recipients SMTP2GO rejected. */
        failed: number;
        /** Recipient failure objects returned by SMTP2GO. */
        failures: Array<Record<string, unknown>>;
        /** The SMTP2GO email ID when present. */
        emailId: string | null;
        /** The SMTP2GO schedule ID when the email was scheduled. */
        scheduleId: string | null;
        /** The raw data object returned by SMTP2GO. */
        data: Record<string, unknown>;
      };
    };
    /** List the SMTP2GO API endpoint permissions available to the connected API key. */
    "smtp2go.view_api_key_permissions": {
      input: Record<string, never>;
      output: {
        /** The SMTP2GO request identifier. */
        requestId: string;
        /** The SMTP2GO endpoint permissions available to the current API key. */
        permissions: Array<string>;
        /** The raw permissions payload returned by SMTP2GO. */
        data: unknown;
      };
    };
  }
}
