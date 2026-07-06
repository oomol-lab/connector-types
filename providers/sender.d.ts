import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add subscribers or a Sender conditions selection to a group. */
    "sender.add_subscribers_to_group": {
      input: {
        /**
         * The Sender group ID.
         * @minLength 1
         */
        groupId: string;
        /**
         * Email addresses to add or remove from the group.
         * @minItems 1
         */
        subscribers?: Array<string>;
        /**
         * Sender conditions expression for selecting subscribers.
         * @minLength 1
         */
        conditions?: string;
        /** Whether Sender should trigger automations for newly added subscribers. */
        trigger_automation?: boolean;
      };
      output: {
        /** Whether Sender accepted the group membership change. */
        success: boolean;
        /** The message returned by Sender. */
        message: unknown;
      };
    };
    /** Create a Sender custom subscriber field. */
    "sender.create_field": {
      input: {
        /**
         * The display title of the custom field.
         * @minLength 1
         */
        title: string;
        /** The Sender field type. */
        type: "number" | "text" | "datetime";
      };
      output: {
        /** Whether Sender created the field. */
        success: boolean;
        /** The message returned by Sender. */
        message: unknown;
        /** A Sender custom field record. */
        field?: {
          /** The Sender field ID, when present. */
          id?: string | null;
          /** The custom field title. */
          title?: string;
          /** The Sender account ID, when present. */
          account_id?: string | null;
          /** The Sender user ID, when present. */
          user_id?: string | null;
          /** When Sender created the field, when present. */
          created?: string | null;
          /** When Sender last modified the field, when present. */
          modified?: string | null;
          /** The field value type. */
          type?: string;
          /** Whether Sender displays the field, when present. */
          show?: number | null;
          /** The Sender template field name. */
          field_name?: string;
          /** The field display position, when present. */
          position?: number | null;
          /** Whether this is a default Sender field. */
          default?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Sender subscriber with optional groups and custom fields. */
    "sender.create_subscriber": {
      input: {
        /**
         * The subscriber email address.
         * @format email
         */
        email: string;
        /**
         * The subscriber first name.
         * @minLength 1
         */
        firstname?: string;
        /**
         * The subscriber last name.
         * @minLength 1
         */
        lastname?: string;
        /**
         * Sender group IDs assigned to the subscriber.
         * @minItems 1
         */
        groups?: Array<string>;
        /** Custom field values keyed by Sender field name. */
        fields?: Record<string, unknown>;
        /**
         * The subscriber phone number with country code.
         * @minLength 1
         */
        phone?: string;
        /** Whether Sender should trigger automations for this change. */
        trigger_automation?: boolean;
      };
      output: {
        /** Whether Sender accepted the subscriber change. */
        success: boolean;
        /** The message returned by Sender. */
        message: unknown;
        /** A Sender subscriber record. */
        subscriber?: {
          /** The Sender subscriber ID. */
          id?: string;
          /** The subscriber email address. */
          email?: string;
          /** The subscriber first name. */
          firstname?: string;
          /** The subscriber last name. */
          lastname?: string;
          /** The subscriber phone number. */
          phone?: string | null;
          /** Sender phone country metadata. */
          phone_country?: {
            /** The numeric country calling code. */
            phone_code?: number;
            /** The ISO country code. */
            country_code?: string;
            [key: string]: unknown;
          } | null;
          /** When Sender created the subscriber record. */
          created?: string;
          /** Sender subscriber status details. */
          status?: {
            /** The marketing email subscription status. */
            email?: string;
            /** The transactional email subscription status. */
            temail?: string;
            [key: string]: unknown;
          };
          /** When the subscriber bounced, when present. */
          bounced_at?: string | null;
          /** When the subscriber unsubscribed, when present. */
          unsubscribed_at?: string | null;
          /** Location details returned by Sender, when present. */
          location?: unknown;
          /** Groups attached to this subscriber. */
          subscriber_tags?: Array<{
            /** The Sender group ID. */
            id?: string;
            /** The Sender group title. */
            title?: string;
            [key: string]: unknown;
          }>;
          /** Custom field values returned by Sender. */
          columns?: unknown;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Sender campaign by ID. */
    "sender.get_campaign": {
      input: {
        /**
         * The Sender campaign ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Sender campaign record. */
        campaign: {
          /** The Sender campaign ID. */
          id?: string;
          /** The campaign subject. */
          subject?: string;
          /** The reply-to email address. */
          reply_to?: string;
          /** The campaign language. */
          language?: string;
          /** The campaign recipient count. */
          recipient_count?: number;
          /** The campaign sender name. */
          from?: string;
          /** When the campaign is scheduled, when present. */
          schedule_time?: string | null;
          /** The last campaign action recorded by Sender. */
          last_action?: string;
          /** When the campaign was sent, when present. */
          sent_time?: string | null;
          /** The campaign status. */
          status?: string;
          /** When Sender created the campaign. */
          created?: string;
          /** When Sender last modified the campaign. */
          modified?: string;
          /** The campaign title. */
          title?: string;
          /** The Sender sending domain ID. */
          domain_id?: string;
          /** The campaign preheader text. */
          preheader?: string;
          /** Total opens reported by Sender. */
          opens?: number;
          /** Total clicks reported by Sender. */
          clicks?: number;
          /** Total bounces reported by Sender. */
          bounces_count?: number;
          /** Total sent emails reported by Sender. */
          sent_count?: number;
          /** Group IDs targeted by the campaign. */
          campaign_groups?: Array<string>;
          /** Segment IDs targeted by the campaign. */
          segments?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Sender group by ID. */
    "sender.get_group": {
      input: {
        /**
         * The Sender group ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Sender group record. */
        group: {
          /** The Sender group ID. */
          id?: string;
          /** The Sender group title. */
          title?: string;
          /** Total recipients in the group. */
          recipient_count?: number;
          /** Active subscribers in the group. */
          active_subscribers?: number;
          /** Unsubscribed recipients in the group. */
          unsubscribed_count?: number;
          /** Bounced recipients in the group. */
          bounced_count?: number;
          /** Phone recipients in the group. */
          phone_count?: number;
          /** Active phone recipients in the group. */
          active_phone_count?: number;
          /** The Sender account ID. */
          account_id?: string;
          /** The Sender user ID. */
          user_id?: string;
          /** When Sender created the group. */
          created?: string;
          /** When Sender last modified the group. */
          modified?: string;
          /** Whether Sender is recalculating group subscribers. */
          is_recalculating_subscribers?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Sender subscriber by email address, phone number, or ID. */
    "sender.get_subscriber": {
      input: {
        /**
         * The subscriber email address, phone number, or Sender ID.
         * @minLength 1
         */
        identifier: string;
      };
      output: {
        /** A Sender subscriber record. */
        subscriber: {
          /** The Sender subscriber ID. */
          id?: string;
          /** The subscriber email address. */
          email?: string;
          /** The subscriber first name. */
          firstname?: string;
          /** The subscriber last name. */
          lastname?: string;
          /** The subscriber phone number. */
          phone?: string | null;
          /** Sender phone country metadata. */
          phone_country?: {
            /** The numeric country calling code. */
            phone_code?: number;
            /** The ISO country code. */
            country_code?: string;
            [key: string]: unknown;
          } | null;
          /** When Sender created the subscriber record. */
          created?: string;
          /** Sender subscriber status details. */
          status?: {
            /** The marketing email subscription status. */
            email?: string;
            /** The transactional email subscription status. */
            temail?: string;
            [key: string]: unknown;
          };
          /** When the subscriber bounced, when present. */
          bounced_at?: string | null;
          /** When the subscriber unsubscribed, when present. */
          unsubscribed_at?: string | null;
          /** Location details returned by Sender, when present. */
          location?: unknown;
          /** Groups attached to this subscriber. */
          subscriber_tags?: Array<{
            /** The Sender group ID. */
            id?: string;
            /** The Sender group title. */
            title?: string;
            [key: string]: unknown;
          }>;
          /** Custom field values returned by Sender. */
          columns?: unknown;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Sender automation workflow by ID. */
    "sender.get_workflow": {
      input: {
        /**
         * The Sender workflow ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Sender workflow record. */
        workflow: {
          /** The Sender workflow ID. */
          id?: string;
          /** The Sender user ID. */
          user_id?: number;
          /** The Sender account ID. */
          account_id?: number;
          /** The workflow title. */
          title?: string;
          /** The workflow status. */
          status?: string;
          /** When Sender created the workflow. */
          created?: string;
          /** When Sender last modified the workflow. */
          modified?: string;
          /** Number of emails sent by the workflow. */
          emails_sent?: number;
          /** The workflow type. */
          type?: string;
          /** The workflow description. */
          description?: string;
          /** The workflow thumbnail URL, when present. */
          thumbnail?: string | null;
          /** The Sender workflow category ID. */
          workflow_category_id?: number;
          /** Sender workflow report metrics. */
          index_report?: {
            /** Number of workflow emails sent. */
            sent?: number;
            /** Number of workflow emails opened. */
            opened?: number;
            /** Number of workflow emails clicked. */
            clicked?: number;
            /** Workflow open rate. */
            open_rate?: number;
            /** Workflow click rate. */
            click_rate?: number;
            [key: string]: unknown;
          };
          /** Sender workflow report metrics. */
          report?: {
            /** Number of workflow emails sent. */
            sent?: number;
            /** Number of workflow emails opened. */
            opened?: number;
            /** Number of workflow emails clicked. */
            clicked?: number;
            /** Workflow open rate. */
            open_rate?: number;
            /** Workflow click rate. */
            click_rate?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List Sender campaigns with pagination and an optional status filter. */
    "sender.list_campaigns": {
      input: {
        /**
         * Page number for Sender pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of records to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** A Sender campaign status filter. */
        status?: "SCHEDULED" | "SENDING" | "SENT" | "DRAFT";
      };
      output: {
        /** The Sender campaigns returned for this page. */
        campaigns: Array<{
          /** The Sender campaign ID. */
          id?: string;
          /** The campaign subject. */
          subject?: string;
          /** The reply-to email address. */
          reply_to?: string;
          /** The campaign language. */
          language?: string;
          /** The campaign recipient count. */
          recipient_count?: number;
          /** The campaign sender name. */
          from?: string;
          /** When the campaign is scheduled, when present. */
          schedule_time?: string | null;
          /** The last campaign action recorded by Sender. */
          last_action?: string;
          /** When the campaign was sent, when present. */
          sent_time?: string | null;
          /** The campaign status. */
          status?: string;
          /** When Sender created the campaign. */
          created?: string;
          /** When Sender last modified the campaign. */
          modified?: string;
          /** The campaign title. */
          title?: string;
          /** The Sender sending domain ID. */
          domain_id?: string;
          /** The campaign preheader text. */
          preheader?: string;
          /** Total opens reported by Sender. */
          opens?: number;
          /** Total clicks reported by Sender. */
          clicks?: number;
          /** Total bounces reported by Sender. */
          bounces_count?: number;
          /** Total sent emails reported by Sender. */
          sent_count?: number;
          /** Group IDs targeted by the campaign. */
          campaign_groups?: Array<string>;
          /** Segment IDs targeted by the campaign. */
          segments?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Sender. */
        links?: {
          /** URL for the first page. */
          first?: string | null;
          /** URL for the last page. */
          last?: string | null;
          /** URL for the previous page. */
          prev?: string | null;
          /** URL for the next page. */
          next?: string | null;
          [key: string]: unknown;
        };
        /** Pagination metadata returned by Sender. */
        meta?: {
          /** The current page number. */
          current_page?: number;
          /** The first item number on this page. */
          from?: number | null;
          /** The last available page number. */
          last_page?: number;
          /** The request path reported by Sender. */
          path?: string;
          /** The number of records per page. */
          per_page?: number;
          /** The last item number on this page. */
          to?: number | null;
          /** The total number of records. */
          total?: number;
          [key: string]: unknown;
        };
        /** Whether Sender reports another page after this one. */
        hasMoreResources?: boolean;
      };
    };
    /** List Sender custom subscriber fields with pagination. */
    "sender.list_fields": {
      input: {
        /**
         * Page number for Sender pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of records to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The Sender fields returned for this page. */
        fields: Array<{
          /** The Sender field ID, when present. */
          id?: string | null;
          /** The custom field title. */
          title?: string;
          /** The Sender account ID, when present. */
          account_id?: string | null;
          /** The Sender user ID, when present. */
          user_id?: string | null;
          /** When Sender created the field, when present. */
          created?: string | null;
          /** When Sender last modified the field, when present. */
          modified?: string | null;
          /** The field value type. */
          type?: string;
          /** Whether Sender displays the field, when present. */
          show?: number | null;
          /** The Sender template field name. */
          field_name?: string;
          /** The field display position, when present. */
          position?: number | null;
          /** Whether this is a default Sender field. */
          default?: boolean;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Sender. */
        links?: {
          /** URL for the first page. */
          first?: string | null;
          /** URL for the last page. */
          last?: string | null;
          /** URL for the previous page. */
          prev?: string | null;
          /** URL for the next page. */
          next?: string | null;
          [key: string]: unknown;
        };
        /** Pagination metadata returned by Sender. */
        meta?: {
          /** The current page number. */
          current_page?: number;
          /** The first item number on this page. */
          from?: number | null;
          /** The last available page number. */
          last_page?: number;
          /** The request path reported by Sender. */
          path?: string;
          /** The number of records per page. */
          per_page?: number;
          /** The last item number on this page. */
          to?: number | null;
          /** The total number of records. */
          total?: number;
          [key: string]: unknown;
        };
        /** Whether Sender reports another page after this one. */
        hasMoreResources?: boolean;
      };
    };
    /** List Sender groups with pagination. */
    "sender.list_groups": {
      input: {
        /**
         * Page number for Sender pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of records to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The Sender groups returned for this page. */
        groups: Array<{
          /** The Sender group ID. */
          id?: string;
          /** The Sender group title. */
          title?: string;
          /** Total recipients in the group. */
          recipient_count?: number;
          /** Active subscribers in the group. */
          active_subscribers?: number;
          /** Unsubscribed recipients in the group. */
          unsubscribed_count?: number;
          /** Bounced recipients in the group. */
          bounced_count?: number;
          /** Phone recipients in the group. */
          phone_count?: number;
          /** Active phone recipients in the group. */
          active_phone_count?: number;
          /** The Sender account ID. */
          account_id?: string;
          /** The Sender user ID. */
          user_id?: string;
          /** When Sender created the group. */
          created?: string;
          /** When Sender last modified the group. */
          modified?: string;
          /** Whether Sender is recalculating group subscribers. */
          is_recalculating_subscribers?: boolean;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Sender. */
        links?: {
          /** URL for the first page. */
          first?: string | null;
          /** URL for the last page. */
          last?: string | null;
          /** URL for the previous page. */
          prev?: string | null;
          /** URL for the next page. */
          next?: string | null;
          [key: string]: unknown;
        };
        /** Pagination metadata returned by Sender. */
        meta?: {
          /** The current page number. */
          current_page?: number;
          /** The first item number on this page. */
          from?: number | null;
          /** The last available page number. */
          last_page?: number;
          /** The request path reported by Sender. */
          path?: string;
          /** The number of records per page. */
          per_page?: number;
          /** The last item number on this page. */
          to?: number | null;
          /** The total number of records. */
          total?: number;
          [key: string]: unknown;
        };
        /** Whether Sender reports another page after this one. */
        hasMoreResources?: boolean;
      };
    };
    /** List Sender subscribers with pagination. */
    "sender.list_subscribers": {
      input: {
        /**
         * Page number for Sender pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of records to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The Sender subscribers returned for this page. */
        subscribers: Array<{
          /** The Sender subscriber ID. */
          id?: string;
          /** The subscriber email address. */
          email?: string;
          /** The subscriber first name. */
          firstname?: string;
          /** The subscriber last name. */
          lastname?: string;
          /** The subscriber phone number. */
          phone?: string | null;
          /** Sender phone country metadata. */
          phone_country?: {
            /** The numeric country calling code. */
            phone_code?: number;
            /** The ISO country code. */
            country_code?: string;
            [key: string]: unknown;
          } | null;
          /** When Sender created the subscriber record. */
          created?: string;
          /** Sender subscriber status details. */
          status?: {
            /** The marketing email subscription status. */
            email?: string;
            /** The transactional email subscription status. */
            temail?: string;
            [key: string]: unknown;
          };
          /** When the subscriber bounced, when present. */
          bounced_at?: string | null;
          /** When the subscriber unsubscribed, when present. */
          unsubscribed_at?: string | null;
          /** Location details returned by Sender, when present. */
          location?: unknown;
          /** Groups attached to this subscriber. */
          subscriber_tags?: Array<{
            /** The Sender group ID. */
            id?: string;
            /** The Sender group title. */
            title?: string;
            [key: string]: unknown;
          }>;
          /** Custom field values returned by Sender. */
          columns?: unknown;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Sender. */
        links?: {
          /** URL for the first page. */
          first?: string | null;
          /** URL for the last page. */
          last?: string | null;
          /** URL for the previous page. */
          prev?: string | null;
          /** URL for the next page. */
          next?: string | null;
          [key: string]: unknown;
        };
        /** Pagination metadata returned by Sender. */
        meta?: {
          /** The current page number. */
          current_page?: number;
          /** The first item number on this page. */
          from?: number | null;
          /** The last available page number. */
          last_page?: number;
          /** The request path reported by Sender. */
          path?: string;
          /** The number of records per page. */
          per_page?: number;
          /** The last item number on this page. */
          to?: number | null;
          /** The total number of records. */
          total?: number;
          [key: string]: unknown;
        };
        /** Whether Sender reports another page after this one. */
        hasMoreResources?: boolean;
      };
    };
    /** List Sender automation workflows with pagination and filters. */
    "sender.list_workflows": {
      input: {
        /**
         * Page number for Sender pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of workflows to return per page (1-100).
         * @maximum 100
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** A Sender workflow status filter. */
        status?: "DRAFT" | "ACTIVE" | "PAUSED";
        /**
         * Only return workflows whose title starts with this string.
         * @minLength 1
         */
        title?: string;
      };
      output: {
        /** The Sender workflows returned for this page. */
        workflows: Array<{
          /** The Sender workflow ID. */
          id?: string;
          /** The Sender user ID. */
          user_id?: number;
          /** The Sender account ID. */
          account_id?: number;
          /** The workflow title. */
          title?: string;
          /** The workflow status. */
          status?: string;
          /** When Sender created the workflow. */
          created?: string;
          /** When Sender last modified the workflow. */
          modified?: string;
          /** Number of emails sent by the workflow. */
          emails_sent?: number;
          /** The workflow type. */
          type?: string;
          /** The workflow description. */
          description?: string;
          /** The workflow thumbnail URL, when present. */
          thumbnail?: string | null;
          /** The Sender workflow category ID. */
          workflow_category_id?: number;
          /** Sender workflow report metrics. */
          index_report?: {
            /** Number of workflow emails sent. */
            sent?: number;
            /** Number of workflow emails opened. */
            opened?: number;
            /** Number of workflow emails clicked. */
            clicked?: number;
            /** Workflow open rate. */
            open_rate?: number;
            /** Workflow click rate. */
            click_rate?: number;
            [key: string]: unknown;
          };
          /** Sender workflow report metrics. */
          report?: {
            /** Number of workflow emails sent. */
            sent?: number;
            /** Number of workflow emails opened. */
            opened?: number;
            /** Number of workflow emails clicked. */
            clicked?: number;
            /** Workflow open rate. */
            open_rate?: number;
            /** Workflow click rate. */
            click_rate?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Sender. */
        links?: {
          /** URL for the first page. */
          first?: string | null;
          /** URL for the last page. */
          last?: string | null;
          /** URL for the previous page. */
          prev?: string | null;
          /** URL for the next page. */
          next?: string | null;
          [key: string]: unknown;
        };
        /** Pagination metadata returned by Sender. */
        meta?: {
          /** The current page number. */
          current_page?: number;
          /** The first item number on this page. */
          from?: number | null;
          /** The last available page number. */
          last_page?: number;
          /** The request path reported by Sender. */
          path?: string;
          /** The number of records per page. */
          per_page?: number;
          /** The last item number on this page. */
          to?: number | null;
          /** The total number of records. */
          total?: number;
          [key: string]: unknown;
        };
        /** Whether Sender reports another page after this one. */
        hasMoreResources?: boolean;
      };
    };
    /** Remove subscribers or a Sender conditions selection from a group. */
    "sender.remove_subscribers_from_group": {
      input: {
        /**
         * The Sender group ID.
         * @minLength 1
         */
        groupId: string;
        /**
         * Email addresses to add or remove from the group.
         * @minItems 1
         */
        subscribers?: Array<string>;
        /**
         * Sender conditions expression for selecting subscribers.
         * @minLength 1
         */
        conditions?: string;
      };
      output: {
        /** Whether Sender accepted the group membership change. */
        success: boolean;
        /** The message returned by Sender. */
        message: unknown;
      };
    };
    /** Update a Sender subscriber by email address, phone number, or ID. */
    "sender.update_subscriber": {
      input: {
        /**
         * The subscriber email address, phone number, or Sender ID.
         * @minLength 1
         */
        identifier: string;
        /**
         * The subscriber first name.
         * @minLength 1
         */
        firstname?: string;
        /**
         * The subscriber last name.
         * @minLength 1
         */
        lastname?: string;
        /**
         * Sender group IDs assigned to the subscriber.
         * @minItems 1
         */
        groups?: Array<string>;
        /** Custom field values keyed by Sender field name. */
        fields?: Record<string, unknown>;
        /**
         * The subscriber phone number with country code.
         * @minLength 1
         */
        phone?: string;
        /** Whether Sender should trigger automations for this change. */
        trigger_automation?: boolean;
        /** A Sender subscriber status value. */
        subscriber_status?: "ACTIVE" | "UNSUBSCRIBED" | "BOUNCED" | "SPAM_REPORTED";
        /** A Sender subscriber status value. */
        sms_status?: "ACTIVE" | "UNSUBSCRIBED" | "BOUNCED" | "SPAM_REPORTED";
        /** A Sender subscriber status value. */
        transactional_email_status?: "ACTIVE" | "UNSUBSCRIBED" | "BOUNCED" | "SPAM_REPORTED";
      };
      output: {
        /** Whether Sender accepted the subscriber change. */
        success: boolean;
        /** The message returned by Sender. */
        message: unknown;
        /** A Sender subscriber record. */
        subscriber?: {
          /** The Sender subscriber ID. */
          id?: string;
          /** The subscriber email address. */
          email?: string;
          /** The subscriber first name. */
          firstname?: string;
          /** The subscriber last name. */
          lastname?: string;
          /** The subscriber phone number. */
          phone?: string | null;
          /** Sender phone country metadata. */
          phone_country?: {
            /** The numeric country calling code. */
            phone_code?: number;
            /** The ISO country code. */
            country_code?: string;
            [key: string]: unknown;
          } | null;
          /** When Sender created the subscriber record. */
          created?: string;
          /** Sender subscriber status details. */
          status?: {
            /** The marketing email subscription status. */
            email?: string;
            /** The transactional email subscription status. */
            temail?: string;
            [key: string]: unknown;
          };
          /** When the subscriber bounced, when present. */
          bounced_at?: string | null;
          /** When the subscriber unsubscribed, when present. */
          unsubscribed_at?: string | null;
          /** Location details returned by Sender, when present. */
          location?: unknown;
          /** Groups attached to this subscriber. */
          subscriber_tags?: Array<{
            /** The Sender group ID. */
            id?: string;
            /** The Sender group title. */
            title?: string;
            [key: string]: unknown;
          }>;
          /** Custom field values returned by Sender. */
          columns?: unknown;
          [key: string]: unknown;
        };
      };
    };
  }
}
