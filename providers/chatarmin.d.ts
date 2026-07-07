import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add new voucher codes to a Chatarmin pool or replace one unused code. */
    "chatarmin.add_or_replace_voucher_codes": {
      input: {
        /**
         * The Chatarmin voucher pool ID.
         * @minLength 1
         */
        poolId: string;
        /**
         * Voucher code strings to add to the pool.
         * @minItems 1
         */
        codes?: Array<string>;
        /** An unused voucher code replacement. */
        replaceCode?: {
          /**
           * The ID of the existing voucher code to replace.
           * @minLength 1
           */
          id: string;
          /**
           * The replacement voucher code string.
           * @minLength 1
           */
          newCode: string;
        };
      };
      output: {
        /** Voucher codes added by Chatarmin. */
        added: Array<Record<string, unknown>>;
        /** The raw Chatarmin voucher code update response. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a new Chatarmin contact. */
    "chatarmin.create_contact": {
      input: {
        /**
         * The contact phone number in international format.
         * @minLength 1
         */
        phone: string;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /**
         * The contact first name.
         * @minLength 1
         */
        firstname: string;
        /**
         * The contact last name.
         * @minLength 1
         */
        lastname?: string;
        /** The Chatarmin consent state for the contact. */
        consent: "none" | "optedOut" | "transactional" | "single" | "double";
        /**
         * An external identifier to store on the contact.
         * @minLength 1
         */
        externalId?: string;
        /** Custom contact properties keyed by Chatarmin property name. */
        properties?: Record<string, unknown>;
      };
      output: {
        /** A Chatarmin contact object. */
        contact: {
          /** The Chatarmin contact ID. */
          id?: string;
          /** The contact phone number. */
          phone?: string;
          /** The contact email address. */
          email?: string;
          /** The contact first name. */
          firstname?: string;
          /** The contact last name. */
          lastname?: string;
          /** The contact consent state. */
          consent?: string;
          /** The contact external identifier. */
          externalId?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Chatarmin voucher pool with an initial list of voucher codes. */
    "chatarmin.create_voucher_pool": {
      input: {
        /**
         * The display name of the voucher pool.
         * @minLength 1
         */
        poolName: string;
        /**
         * Voucher code strings to add to the pool.
         * @minItems 1
         */
        vouchers: Array<string>;
        /** Whether contacts who already received a code should get the same code again. */
        reuseCodes?: boolean;
        /** Low-voucher email reminder settings. */
        reminder?: {
          /**
           * The remaining voucher count that triggers reminder emails.
           * @exclusiveMinimum 0
           */
          reminderThreshold?: number;
          /**
           * Email addresses to notify when the reminder threshold is reached.
           * @minItems 1
           */
          reminderEmailAdresses?: Array<string>;
        };
        /** Behavior settings for an empty voucher pool. */
        emptyOptions?: {
          /**
           * Fallback text sent when the voucher pool is empty.
           * @minLength 1
           */
          emptyMessage?: string;
          /** Whether Chatarmin should skip sending when the pool is empty. */
          doNotSendWhenEmpty?: boolean;
        };
      };
      output: {
        /** A Chatarmin voucher pool object. */
        voucherPool: Record<string, unknown>;
      };
    };
    /** Create a Chatarmin webhook for one supported topic. */
    "chatarmin.create_webhook": {
      input: {
        /**
         * The webhook target URL.
         * @format uri
         */
        url: string;
        /** The Chatarmin webhook topic. */
        topic: "contact/updated" | "contact/created" | "flow/enrolled" | "contact/deleted" | "message/updated" | "error/occurred";
      };
      output: {
        /** A Chatarmin webhook object. */
        webhook: Record<string, unknown>;
      };
    };
    /** Delete a Chatarmin contact by contact ID or externalId. */
    "chatarmin.delete_contact": {
      input: {
        /**
         * The Chatarmin contact ID or externalId.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** Whether the delete request succeeded. */
        success: boolean;
      };
    };
    /** Delete a Chatarmin voucher pool and its unused voucher codes. */
    "chatarmin.delete_voucher_pool": {
      input: {
        /**
         * The Chatarmin voucher pool ID.
         * @minLength 1
         */
        poolId: string;
      };
      output: {
        /** Whether the delete request succeeded. */
        success: boolean;
      };
    };
    /** Delete a Chatarmin webhook by webhook ID. */
    "chatarmin.delete_webhook": {
      input: {
        /**
         * The Chatarmin webhook ID.
         * @minLength 1
         */
        webhookId: string;
      };
      output: {
        /** Whether the delete request succeeded. */
        success: boolean;
      };
    };
    /** Retrieve one Chatarmin campaign by campaign ID. */
    "chatarmin.get_campaign": {
      input: {
        /**
         * The Chatarmin campaign ID.
         * @minLength 1
         */
        campaignId: string;
      };
      output: {
        /** A Chatarmin campaign analytics object. */
        campaign: Record<string, unknown>;
      };
    };
    /** Retrieve one Chatarmin contact by contact ID or externalId. */
    "chatarmin.get_contact": {
      input: {
        /**
         * The Chatarmin contact ID or externalId.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** A Chatarmin contact object. */
        contact: {
          /** The Chatarmin contact ID. */
          id?: string;
          /** The contact phone number. */
          phone?: string;
          /** The contact email address. */
          email?: string;
          /** The contact first name. */
          firstname?: string;
          /** The contact last name. */
          lastname?: string;
          /** The contact consent state. */
          consent?: string;
          /** The contact external identifier. */
          externalId?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Chatarmin flow by flow ID. */
    "chatarmin.get_flow": {
      input: {
        /**
         * The Chatarmin flow ID.
         * @minLength 1
         */
        flowId: string;
      };
      output: {
        /** A Chatarmin flow analytics object. */
        flow: Record<string, unknown>;
      };
    };
    /** Retrieve paginated Chatarmin flow analytics for a flow. */
    "chatarmin.get_flow_analytics": {
      input: {
        /**
         * The Chatarmin flow ID.
         * @minLength 1
         */
        flowId: string;
        /**
         * The page number for pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The analytics start timestamp in ISO 8601 format.
         * @format date-time
         */
        start?: string;
        /**
         * The analytics end timestamp in ISO 8601 format.
         * @format date-time
         */
        end?: string;
      };
      output: {
        /** The flow analytics records returned by Chatarmin. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Chatarmin. */
        pagination: {
          /** The current page number returned by Chatarmin. */
          page?: number;
          /** The page size returned by Chatarmin. */
          limit?: number;
          /** The total number of matching records returned by Chatarmin. */
          total?: number;
          /** The total number of pages returned by Chatarmin. */
          totalPages?: number;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Retrieve Chatarmin flow analytics for specific contacts. */
    "chatarmin.get_flow_contact_analytics": {
      input: {
        /**
         * The Chatarmin flow ID.
         * @minLength 1
         */
        flowId: string;
        /**
         * Contact IDs to fetch analytics for.
         * @minItems 1
         */
        contactIds: Array<string>;
        /**
         * The analytics start timestamp in ISO 8601 format.
         * @format date-time
         */
        start?: string;
        /**
         * The analytics end timestamp in ISO 8601 format.
         * @format date-time
         */
        end?: string;
      };
      output: {
        /** Flow analytics keyed by Chatarmin contact ID. */
        data: Record<string, Record<string, unknown>>;
      };
    };
    /** Retrieve one Chatarmin voucher pool by voucher pool ID. */
    "chatarmin.get_voucher_pool": {
      input: {
        /**
         * The Chatarmin voucher pool ID.
         * @minLength 1
         */
        poolId: string;
      };
      output: {
        /** A Chatarmin voucher pool object. */
        voucherPool: Record<string, unknown>;
      };
    };
    /** Retrieve a paginated list of Chatarmin campaigns with optional day or month metrics. */
    "chatarmin.list_campaigns": {
      input: {
        /**
         * The page number for pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** The analytics grouping period. */
        groupBy?: "day" | "month";
        /**
         * The start date for grouped campaign metrics.
         * @format date
         */
        startDate?: string;
        /**
         * The end date for grouped campaign metrics.
         * @format date
         */
        endDate?: string;
      };
      output: {
        /** The campaigns returned by Chatarmin. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Chatarmin. */
        pagination: {
          /** The current page number returned by Chatarmin. */
          page?: number;
          /** The page size returned by Chatarmin. */
          limit?: number;
          /** The total number of matching records returned by Chatarmin. */
          total?: number;
          /** The total number of pages returned by Chatarmin. */
          totalPages?: number;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Retrieve a paginated list of Chatarmin contacts with optional text search. */
    "chatarmin.list_contacts": {
      input: {
        /**
         * The page number for pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Optional search text matched by Chatarmin against firstname, lastname, email, and phone.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** The contacts returned by Chatarmin. */
        data: Array<{
          /** The Chatarmin contact ID. */
          id?: string;
          /** The contact phone number. */
          phone?: string;
          /** The contact email address. */
          email?: string;
          /** The contact first name. */
          firstname?: string;
          /** The contact last name. */
          lastname?: string;
          /** The contact consent state. */
          consent?: string;
          /** The contact external identifier. */
          externalId?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Chatarmin. */
        pagination: {
          /** The current page number returned by Chatarmin. */
          page?: number;
          /** The page size returned by Chatarmin. */
          limit?: number;
          /** The total number of matching records returned by Chatarmin. */
          total?: number;
          /** The total number of pages returned by Chatarmin. */
          totalPages?: number;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Retrieve a paginated list of Chatarmin flows with optional day or month metrics. */
    "chatarmin.list_flows": {
      input: {
        /**
         * The page number for pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** The analytics grouping period. */
        groupBy?: "day" | "month";
        /**
         * The start date for grouped flow metrics.
         * @format date
         */
        startDate?: string;
        /**
         * The end date for grouped flow metrics.
         * @format date
         */
        endDate?: string;
      };
      output: {
        /** The flows returned by Chatarmin. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Chatarmin. */
        pagination: {
          /** The current page number returned by Chatarmin. */
          page?: number;
          /** The page size returned by Chatarmin. */
          limit?: number;
          /** The total number of matching records returned by Chatarmin. */
          total?: number;
          /** The total number of pages returned by Chatarmin. */
          totalPages?: number;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Retrieve a paginated list of Chatarmin voucher pools with voucher codes. */
    "chatarmin.list_voucher_pools": {
      input: {
        /**
         * The page number for pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The voucher pools returned by Chatarmin. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Chatarmin. */
        pagination: {
          /** The current page number returned by Chatarmin. */
          page?: number;
          /** The page size returned by Chatarmin. */
          limit?: number;
          /** The total number of matching records returned by Chatarmin. */
          total?: number;
          /** The total number of pages returned by Chatarmin. */
          totalPages?: number;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Retrieve all Chatarmin webhooks for the authenticated user. */
    "chatarmin.list_webhooks": {
      input: Record<string, never>;
      output: {
        /** The webhooks returned by Chatarmin. */
        webhooks: Array<Record<string, unknown>>;
      };
    };
    /** Remove one unused voucher code from a Chatarmin voucher pool. */
    "chatarmin.remove_voucher_code": {
      input: {
        /**
         * The Chatarmin voucher pool ID.
         * @minLength 1
         */
        poolId: string;
        /**
         * The voucher code string to remove.
         * @minLength 1
         */
        code: string;
      };
      output: {
        /** Whether the delete request succeeded. */
        success: boolean;
      };
    };
    /** Send a WhatsApp text, media, document, or template message to a Chatarmin contact. */
    "chatarmin.send_message": {
      input: {
        /**
         * The recipient phone number in international format.
         * @minLength 1
         */
        phone?: string;
        /**
         * The recipient email address used to look up the contact.
         * @format email
         */
        email?: string;
        /**
         * The Chatarmin contact ID or externalId of the recipient.
         * @minLength 1
         */
        contactId?: string;
        /** The WhatsApp message type to send. */
        type: "text" | "image" | "video" | "document" | "template";
        /**
         * The message body text. Required when type is text.
         * @minLength 1
         */
        text?: string;
        /**
         * The publicly accessible media URL. Required for image, video, and document messages.
         * @format uri
         */
        mediaUrl?: string;
        /**
         * An optional media caption. Chatarmin supports captions up to 1024 characters.
         * @minLength 1
         */
        caption?: string;
        /**
         * An optional file name for document messages.
         * @minLength 1
         */
        fileName?: string;
        /**
         * The exact approved WhatsApp template name.
         * @minLength 1
         */
        templateName?: string;
        /**
         * The WhatsApp template language code approved for the template.
         * @minLength 1
         */
        language?: string;
        /**
         * Template components used to fill dynamic template placeholders.
         * @minItems 1
         */
        components?: Array<{
          /** The template component section. */
          type: "header" | "body" | "button";
          /** The button subtype when the component type is button. */
          sub_type?: "url" | "quick_reply";
          /**
           * The zero-based template button index when type is button.
           * @minLength 1
           */
          index?: string;
          /**
           * The runtime values to substitute into the template component.
           * @minItems 1
           */
          parameters: Array<{
            /** The template parameter type. */
            type: "text" | "image" | "video" | "document";
            /**
             * The text value for a text parameter.
             * @minLength 1
             */
            text?: string;
            /** Template header media object. */
            image?: {
              /**
               * The public URL of the template header media.
               * @format uri
               */
              link: string;
            };
            /** Template header media object. */
            video?: {
              /**
               * The public URL of the template header media.
               * @format uri
               */
              link: string;
            };
            /** Template header media object. */
            document?: {
              /**
               * The public URL of the template header media.
               * @format uri
               */
              link: string;
            };
          }>;
        }>;
      };
      output: {
        /** The Chatarmin send message response. */
        message: Record<string, unknown>;
      };
    };
    /** Update an existing Chatarmin contact by contact ID or externalId. */
    "chatarmin.update_contact": {
      input: {
        /**
         * The Chatarmin contact ID or externalId.
         * @minLength 1
         */
        contactId: string;
        /**
         * The contact phone number in international format.
         * @minLength 1
         */
        phone?: string;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /**
         * The contact first name.
         * @minLength 1
         */
        firstname?: string;
        /**
         * The contact last name.
         * @minLength 1
         */
        lastname?: string;
        /** The Chatarmin consent state for the contact. */
        consent?: "none" | "optedOut" | "transactional" | "single" | "double";
        /**
         * An external identifier to store on the contact.
         * @minLength 1
         */
        externalId?: string;
        /** Custom contact properties keyed by Chatarmin property name. */
        properties?: Record<string, unknown>;
      };
      output: {
        /** A Chatarmin contact object. */
        contact: {
          /** The Chatarmin contact ID. */
          id?: string;
          /** The contact phone number. */
          phone?: string;
          /** The contact email address. */
          email?: string;
          /** The contact first name. */
          firstname?: string;
          /** The contact last name. */
          lastname?: string;
          /** The contact consent state. */
          consent?: string;
          /** The contact external identifier. */
          externalId?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Chatarmin voucher pool's name, settings, or unused voucher codes. */
    "chatarmin.update_voucher_pool": {
      input: {
        /**
         * The Chatarmin voucher pool ID.
         * @minLength 1
         */
        poolId: string;
        /**
         * The display name of the voucher pool.
         * @minLength 1
         */
        poolName?: string;
        /**
         * Voucher code strings to add to the pool.
         * @minItems 1
         */
        vouchers?: Array<string>;
        /** Whether contacts who already received a code should get the same code again. */
        reuseCodes?: boolean;
        /** Low-voucher email reminder settings. */
        reminder?: {
          /**
           * The remaining voucher count that triggers reminder emails.
           * @exclusiveMinimum 0
           */
          reminderThreshold?: number;
          /**
           * Email addresses to notify when the reminder threshold is reached.
           * @minItems 1
           */
          reminderEmailAdresses?: Array<string>;
        };
        /** Behavior settings for an empty voucher pool. */
        emptyOptions?: {
          /**
           * Fallback text sent when the voucher pool is empty.
           * @minLength 1
           */
          emptyMessage?: string;
          /** Whether Chatarmin should skip sending when the pool is empty. */
          doNotSendWhenEmpty?: boolean;
        };
      };
      output: {
        /** A Chatarmin voucher pool object. */
        voucherPool: Record<string, unknown>;
      };
    };
    /** Update a Chatarmin webhook URL or topic. */
    "chatarmin.update_webhook": {
      input: {
        /**
         * The Chatarmin webhook ID.
         * @minLength 1
         */
        webhookId: string;
        /**
         * The webhook target URL.
         * @format uri
         */
        url?: string;
        /** The Chatarmin webhook topic. */
        topic?: "contact/updated" | "contact/created" | "flow/enrolled" | "contact/deleted" | "message/updated" | "error/occurred";
      };
      output: {
        /** A Chatarmin webhook object. */
        webhook: Record<string, unknown>;
      };
    };
  }
}
