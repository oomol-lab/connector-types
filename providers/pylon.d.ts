import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Pylon account. */
    "pylon.create_account": {
      input: {
        /**
         * The account name.
         * @minLength 1
         */
        name: string;
        /** The account type. */
        account_type?: "customer" | "internal" | "community" | "partner";
        /** Domains for the account, without a leading scheme. */
        domains?: Array<string>;
        /**
         * The primary domain, which must be included in domains when domains are provided.
         * @minLength 1
         */
        primary_domain?: string;
        /** External IDs associated with the object. */
        external_ids?: Array<{
          /**
           * The external ID. It must be unique for the object type.
           * @minLength 1
           */
          external_id: string;
          /**
           * The label for this external ID. It must be unique on the object.
           * @minLength 1
           */
          label: string;
        }>;
        /** Tags to set on the Pylon object. */
        tags?: Array<string>;
        /**
         * The user ID of the account owner.
         * @minLength 1
         */
        owner_id?: string;
        /**
         * The square .png, .jpg, or .jpeg logo URL for the account.
         * @format uri
         */
        logo_url?: string;
        /** Custom field values to apply to the Pylon object. */
        custom_fields?: Array<{
          /**
           * The slug of the custom field.
           * @minLength 1
           */
          slug: string;
          /**
           * The single value for the custom field. For select or relationship fields, use the option slug or related object ID.
           * @minLength 1
           */
          value?: string;
          /** The values for a multi-valued custom field, such as a multiselect field. */
          values?: Array<string>;
        }>;
      };
      output: {
        /** The Pylon request ID for tracking this API call. */
        request_id: string | null;
        /** A Pylon account. */
        account: {
          /** The Pylon account ID. */
          id?: string;
          /** The account name. */
          name?: string;
          /** The account's primary domain. */
          primary_domain?: string;
          /** Domains associated with the account. */
          domains?: Array<string>;
          /** Tags associated with the account. */
          tags?: Array<string>;
          /** The account type. */
          type?: string;
          /** The time when the account was created. */
          created_at?: string;
          /** The time when the account was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Pylon contact. */
    "pylon.create_contact": {
      input: {
        /**
         * The contact name.
         * @minLength 1
         */
        name: string;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /**
         * The account that this contact belongs to.
         * @minLength 1
         */
        account_id?: string;
        /**
         * The external ID of the account that this contact belongs to.
         * @minLength 1
         */
        account_external_id?: string;
        /**
         * The square .png, .jpg, or .jpeg avatar URL for the contact.
         * @format uri
         */
        avatar_url?: string;
        /** External IDs associated with the object. */
        external_ids?: Array<{
          /**
           * The external ID. It must be unique for the object type.
           * @minLength 1
           */
          external_id: string;
          /**
           * The label for this external ID. It must be unique on the object.
           * @minLength 1
           */
          label: string;
        }>;
        /** Phone numbers for the contact. Pylon expects digits only and at most 15 digits. */
        phone_numbers?: Array<string>;
        /**
         * The primary phone number, which must be in phone_numbers.
         * @minLength 1
         */
        primary_phone_number?: string;
        /**
         * The portal role slug to assign to the contact.
         * @minLength 1
         */
        portal_role?: string;
        /**
         * The custom portal role ID to assign to the contact.
         * @minLength 1
         */
        portal_role_id?: string;
        /** Custom field values to apply to the Pylon object. */
        custom_fields?: Array<{
          /**
           * The slug of the custom field.
           * @minLength 1
           */
          slug: string;
          /**
           * The single value for the custom field. For select or relationship fields, use the option slug or related object ID.
           * @minLength 1
           */
          value?: string;
          /** The values for a multi-valued custom field, such as a multiselect field. */
          values?: Array<string>;
        }>;
      };
      output: {
        /** The Pylon request ID for tracking this API call. */
        request_id: string | null;
        /** A Pylon contact. */
        contact: {
          /** The Pylon contact ID. */
          id?: string;
          /** The contact name. */
          name?: string;
          /** The contact's primary email address. */
          email?: string;
          /** All email addresses for the contact. */
          emails?: Array<string>;
          /** Phone numbers for the contact. */
          phone_numbers?: Array<string>;
          /** The account associated with the contact. */
          account?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Pylon issue with a title, HTML body, and requester or account context. */
    "pylon.create_issue": {
      input: {
        /**
         * The issue title.
         * @minLength 1
         */
        title: string;
        /**
         * The HTML content of the issue body.
         * @minLength 1
         */
        body_html: string;
        /**
         * The account this issue belongs to.
         * @minLength 1
         */
        account_id?: string;
        /**
         * The contact this issue is on behalf of.
         * @minLength 1
         */
        requester_id?: string;
        /**
         * The requester email address. Pylon creates a contact when none exists.
         * @format email
         */
        requester_email?: string;
        /**
         * The full name to use when creating a requester contact.
         * @minLength 1
         */
        requester_name?: string;
        /**
         * The requester avatar URL.
         * @format uri
         */
        requester_avatar_url?: string;
        /**
         * The internal user to attribute the first message to.
         * @minLength 1
         */
        user_id?: string;
        /**
         * The contact to attribute the first message to.
         * @minLength 1
         */
        contact_id?: string;
        /**
         * The user the issue should be assigned to.
         * @minLength 1
         */
        assignee_id?: string;
        /**
         * The team the issue should be assigned to.
         * @minLength 1
         */
        team_id?: string;
        /** The issue priority. */
        priority?: "urgent" | "high" | "medium" | "low";
        /** Tags to set on the Pylon object. */
        tags?: Array<string>;
        /** Publicly reachable attachment URLs for Pylon to fetch and attach. */
        attachment_urls?: Array<string>;
        /** Whether the requester's identity has not been verified. */
        author_unverified?: boolean;
        /**
         * The issue creation timestamp in RFC3339 format.
         * @format date-time
         */
        created_at?: string;
        /** Custom field values to apply to the Pylon object. */
        custom_fields?: Array<{
          /**
           * The slug of the custom field.
           * @minLength 1
           */
          slug: string;
          /**
           * The single value for the custom field. For select or relationship fields, use the option slug or related object ID.
           * @minLength 1
           */
          value?: string;
          /** The values for a multi-valued custom field, such as a multiselect field. */
          values?: Array<string>;
        }>;
        /** Delivery metadata for a newly created Pylon issue. */
        destination_metadata?: {
          /** How Pylon should deliver the initial issue message. */
          destination?: "slack" | "email" | "in_app_chat" | "internal" | "sms" | "whatsapp";
          /**
           * The configured email address used to send email to the requester.
           * @minLength 1
           */
          email?: string;
          /** Email addresses to CC on the message. */
          email_ccs?: Array<string>;
          /** Email addresses to BCC on the message. */
          email_bccs?: Array<string>;
          /**
           * The chat widget app ID used for in-app chat delivery.
           * @minLength 1
           */
          chat_widget_app_id?: string;
          /**
           * The Telnyx phone number ID used for SMS delivery.
           * @minLength 1
           */
          from_sms_phone_number_id?: string;
          /**
           * The WhatsApp app ID used for WhatsApp delivery.
           * @minLength 1
           */
          whatsapp_app_id?: string;
          /**
           * The WhatsApp message template language.
           * @minLength 1
           */
          whatsapp_message_template_language?: string;
          /**
           * The WhatsApp message template name.
           * @minLength 1
           */
          whatsapp_message_template_name?: string;
        };
      };
      output: {
        /** The Pylon request ID for tracking this API call. */
        request_id: string | null;
        /** A Pylon issue. */
        issue: {
          /** The Pylon issue ID. */
          id?: string;
          /** The Pylon issue number. */
          number?: number;
          /** The issue title. */
          title?: string;
          /** The issue body in HTML. */
          body_html?: string;
          /** The current issue state or custom status slug. */
          state?: string;
          /** The issue type. */
          type?: "conversation" | "ticket";
          /** The link to the issue in Pylon. */
          link?: string;
          /** The time when the issue was created. */
          created_at?: string;
          /** The time when the issue was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create an internal note on a Pylon issue. */
    "pylon.create_issue_note": {
      input: {
        /**
         * The Pylon issue ID.
         * @minLength 1
         */
        id: string;
        /**
         * The HTML body of the internal note.
         * @minLength 1
         */
        body_html: string;
        /** Publicly reachable attachment URLs for Pylon to fetch and attach. */
        attachment_urls?: Array<string>;
        /**
         * The internal note message ID to reply to.
         * @minLength 1
         */
        message_id?: string;
        /**
         * The internal thread ID to post the note to.
         * @minLength 1
         */
        thread_id?: string;
        /**
         * The thread name to use if Pylon creates a new internal thread.
         * @minLength 1
         */
        thread_name?: string;
        /**
         * The internal user ID to post the note as.
         * @minLength 1
         */
        user_id?: string;
      };
      output: {
        /** The Pylon request ID for tracking this API call. */
        request_id: string | null;
        /** The Pylon message identifiers returned after creating a note. */
        note: {
          /** The ID of the created message. */
          id: string;
          /** The ID of the issue that received the note. */
          issue_id: string;
        };
      };
    };
    /** Fetch one Pylon account by account ID or external ID. */
    "pylon.get_account": {
      input: {
        /**
         * The Pylon account ID or external ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Pylon request ID for tracking this API call. */
        request_id: string | null;
        /** A Pylon account. */
        account: {
          /** The Pylon account ID. */
          id?: string;
          /** The account name. */
          name?: string;
          /** The account's primary domain. */
          primary_domain?: string;
          /** Domains associated with the account. */
          domains?: Array<string>;
          /** Tags associated with the account. */
          tags?: Array<string>;
          /** The account type. */
          type?: string;
          /** The time when the account was created. */
          created_at?: string;
          /** The time when the account was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch one Pylon contact by contact ID with optional paginated account context. */
    "pylon.get_contact": {
      input: {
        /**
         * The Pylon contact ID.
         * @minLength 1
         */
        id: string;
        /**
         * The pagination cursor returned by a previous Pylon request.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of related accounts to fetch. Pylon requires this query value and accepts values from 1 through 999.
         * @minimum 1
         * @maximum 999
         */
        limit: number;
      };
      output: {
        /** The Pylon request ID for tracking this API call. */
        request_id: string | null;
        /** Cursor pagination metadata returned by Pylon. */
        pagination: {
          /** The cursor for the next page of results. */
          cursor: string;
          /** Whether another page of results is available. */
          has_next_page: boolean;
        } | null;
        /** A Pylon contact. */
        contact: {
          /** The Pylon contact ID. */
          id?: string;
          /** The contact name. */
          name?: string;
          /** The contact's primary email address. */
          email?: string;
          /** All email addresses for the contact. */
          emails?: Array<string>;
          /** Phone numbers for the contact. */
          phone_numbers?: Array<string>;
          /** The account associated with the contact. */
          account?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch one Pylon issue by ID or issue number. */
    "pylon.get_issue": {
      input: {
        /**
         * The Pylon issue ID or issue number.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Pylon request ID for tracking this API call. */
        request_id: string | null;
        /** A Pylon issue. */
        issue: {
          /** The Pylon issue ID. */
          id?: string;
          /** The Pylon issue number. */
          number?: number;
          /** The issue title. */
          title?: string;
          /** The issue body in HTML. */
          body_html?: string;
          /** The current issue state or custom status slug. */
          state?: string;
          /** The issue type. */
          type?: "conversation" | "ticket";
          /** The link to the issue in Pylon. */
          link?: string;
          /** The time when the issue was created. */
          created_at?: string;
          /** The time when the issue was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch the Pylon organization associated with the API token. */
    "pylon.get_me": {
      input: Record<string, never>;
      output: {
        /** The Pylon request ID for tracking this API call. */
        request_id: string | null;
        /** A Pylon organization returned by the /me endpoint. */
        organization: {
          /** The Pylon organization ID. */
          id: string;
          /** The Pylon organization name. */
          name: string;
        };
      };
    };
    /** List messages, replies, and internal notes on one Pylon issue. */
    "pylon.list_issue_messages": {
      input: {
        /**
         * The Pylon issue ID.
         * @minLength 1
         */
        id: string;
        /**
         * The pagination cursor returned by a previous Pylon request.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of messages to fetch. Pylon accepts values from 1 through 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The Pylon request ID for tracking this API call. */
        request_id: string | null;
        /** Cursor pagination metadata returned by Pylon. */
        pagination: {
          /** The cursor for the next page of results. */
          cursor: string;
          /** Whether another page of results is available. */
          has_next_page: boolean;
        } | null;
        /** The issue messages returned by Pylon. */
        messages: Array<{
          /** The Pylon message ID. */
          id?: string;
          /** The message body in HTML. */
          message_html?: string;
          /** Whether this message is private. */
          is_private?: boolean;
          /** The message source. */
          source?: string;
          /** The time when the message was created. */
          timestamp?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Pylon issues within a required time range of up to 30 days. */
    "pylon.list_issues": {
      input: {
        /**
         * The start time of the issue range in RFC3339 format.
         * @format date-time
         */
        start_time: string;
        /**
         * The end time of the issue range in RFC3339 format.
         * @format date-time
         */
        end_time: string;
        /**
         * The pagination cursor returned by a previous Pylon request.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of issues to fetch. Pylon accepts 0 through 20000.
         * @minimum 0
         * @maximum 20000
         */
        limit?: number;
      };
      output: {
        /** The Pylon request ID for tracking this API call. */
        request_id: string | null;
        /** Cursor pagination metadata returned by Pylon. */
        pagination: {
          /** The cursor for the next page of results. */
          cursor: string;
          /** Whether another page of results is available. */
          has_next_page: boolean;
        } | null;
        /** The issues returned by Pylon. */
        issues: Array<{
          /** The Pylon issue ID. */
          id?: string;
          /** The Pylon issue number. */
          number?: number;
          /** The issue title. */
          title?: string;
          /** The issue body in HTML. */
          body_html?: string;
          /** The current issue state or custom status slug. */
          state?: string;
          /** The issue type. */
          type?: "conversation" | "ticket";
          /** The link to the issue in Pylon. */
          link?: string;
          /** The time when the issue was created. */
          created_at?: string;
          /** The time when the issue was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Pylon accounts with a filter and optional fuzzy text search. */
    "pylon.search_accounts": {
      input: {
        /** A Pylon search filter object. */
        filter: {
          /**
           * The Pylon field to filter on.
           * @minLength 1
           */
          field?: string;
          /** The Pylon filter operator. */
          operator?: "equals" | "not_equals" | "contains" | "does_not_contain" | "in" | "not_in" | "and" | "or" | "time_is_after" | "time_is_before" | "time_range" | "string_contains" | "string_does_not_contain" | "is_set" | "is_unset" | "greater_than" | "less_than" | "greater_than_or_equals" | "less_than_or_equals";
          /** A value used in a Pylon search filter. */
          value?: string | number | boolean | null;
          /** Multiple values for an in-style Pylon search filter. */
          values?: Array<string | number | boolean | null>;
          /** Nested filters for compound and/or search filters. */
          filters?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /**
         * Fuzzy text search intersected with the provided account filter.
         * @minLength 1
         */
        search_text?: string;
        /**
         * The pagination cursor returned by a previous Pylon request.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of accounts to fetch. Pylon accepts values from 1 through 999.
         * @minimum 1
         * @maximum 999
         */
        limit?: number;
      };
      output: {
        /** The Pylon request ID for tracking this API call. */
        request_id: string | null;
        /** Cursor pagination metadata returned by Pylon. */
        pagination: {
          /** The cursor for the next page of results. */
          cursor: string;
          /** Whether another page of results is available. */
          has_next_page: boolean;
        } | null;
        /** The accounts returned by Pylon. */
        accounts: Array<{
          /** The Pylon account ID. */
          id?: string;
          /** The account name. */
          name?: string;
          /** The account's primary domain. */
          primary_domain?: string;
          /** Domains associated with the account. */
          domains?: Array<string>;
          /** Tags associated with the account. */
          tags?: Array<string>;
          /** The account type. */
          type?: string;
          /** The time when the account was created. */
          created_at?: string;
          /** The time when the account was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Pylon contacts with a filter and optional fuzzy text search. */
    "pylon.search_contacts": {
      input: {
        /** A Pylon search filter object. */
        filter: {
          /**
           * The Pylon field to filter on.
           * @minLength 1
           */
          field?: string;
          /** The Pylon filter operator. */
          operator?: "equals" | "not_equals" | "contains" | "does_not_contain" | "in" | "not_in" | "and" | "or" | "time_is_after" | "time_is_before" | "time_range" | "string_contains" | "string_does_not_contain" | "is_set" | "is_unset" | "greater_than" | "less_than" | "greater_than_or_equals" | "less_than_or_equals";
          /** A value used in a Pylon search filter. */
          value?: string | number | boolean | null;
          /** Multiple values for an in-style Pylon search filter. */
          values?: Array<string | number | boolean | null>;
          /** Nested filters for compound and/or search filters. */
          filters?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /**
         * Fuzzy text search intersected with the provided contact filter.
         * @minLength 1
         */
        search_text?: string;
        /**
         * The pagination cursor returned by a previous Pylon request.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of contacts to fetch. Pylon accepts values from 1 through 999.
         * @minimum 1
         * @maximum 999
         */
        limit?: number;
      };
      output: {
        /** The Pylon request ID for tracking this API call. */
        request_id: string | null;
        /** Cursor pagination metadata returned by Pylon. */
        pagination: {
          /** The cursor for the next page of results. */
          cursor: string;
          /** Whether another page of results is available. */
          has_next_page: boolean;
        } | null;
        /** The contacts returned by Pylon. */
        contacts: Array<{
          /** The Pylon contact ID. */
          id?: string;
          /** The contact name. */
          name?: string;
          /** The contact's primary email address. */
          email?: string;
          /** All email addresses for the contact. */
          emails?: Array<string>;
          /** Phone numbers for the contact. */
          phone_numbers?: Array<string>;
          /** The account associated with the contact. */
          account?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update mutable fields on one Pylon issue by ID or issue number. */
    "pylon.update_issue": {
      input: {
        /**
         * The Pylon issue ID or issue number.
         * @minLength 1
         */
        id: string;
        /**
         * The updated issue title.
         * @minLength 1
         */
        title?: string;
        /**
         * The new issue state or custom status slug.
         * @minLength 1
         */
        state?: string;
        /** The updated issue type. */
        type?: "conversation" | "ticket";
        /**
         * The account this issue belongs to.
         * @minLength 1
         */
        account_id?: string;
        /**
         * The contact this issue is on behalf of.
         * @minLength 1
         */
        requester_id?: string;
        /** The user to assign this issue to. Use an empty string to remove the assignee. */
        assignee_id?: string;
        /** The team to assign this issue to. Use an empty string to remove the team. */
        team_id?: string;
        /** Whether the issue should be visible in the customer portal. */
        customer_portal_visible?: boolean;
        /** Tags to set on the Pylon object. */
        tags?: Array<string>;
        /** Custom field values to apply to the Pylon object. */
        custom_fields?: Array<{
          /**
           * The slug of the custom field.
           * @minLength 1
           */
          slug: string;
          /**
           * The single value for the custom field. For select or relationship fields, use the option slug or related object ID.
           * @minLength 1
           */
          value?: string;
          /** The values for a multi-valued custom field, such as a multiselect field. */
          values?: Array<string>;
        }>;
      };
      output: {
        /** The Pylon request ID for tracking this API call. */
        request_id: string | null;
        /** A Pylon issue. */
        issue: {
          /** The Pylon issue ID. */
          id?: string;
          /** The Pylon issue number. */
          number?: number;
          /** The issue title. */
          title?: string;
          /** The issue body in HTML. */
          body_html?: string;
          /** The current issue state or custom status slug. */
          state?: string;
          /** The issue type. */
          type?: "conversation" | "ticket";
          /** The link to the issue in Pylon. */
          link?: string;
          /** The time when the issue was created. */
          created_at?: string;
          /** The time when the issue was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
