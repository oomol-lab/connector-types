import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a contact in 2Chat with one or more contact details and optional channel and profile picture metadata. */
    "twochat.create_contact": {
      input: {
        /**
         * The first name of the contact to create.
         * @minLength 1
         */
        firstName: string;
        /**
         * Optional last name of the contact to create.
         * @minLength 1
         */
        lastName?: string;
        /**
         * Optional channel UUID to associate with the created contact.
         * @minLength 1
         */
        channelUuid?: string;
        /**
         * Optional public profile picture URL for the contact.
         * @format uri
         */
        profilePicUrl?: string;
        /**
         * The contact details to create with the new contact.
         * @minItems 1
         */
        contactDetails: Array<{
          /** Contact detail type: E for email, A for address, PH for phone, WAPH for WhatsApp phone. */
          type: "E" | "A" | "PH" | "WAPH";
          /**
           * The contact detail value, such as an email address or phone number.
           * @minLength 1
           */
          value: string;
        }>;
      };
      output: {
        /** The contact created by 2Chat. */
        contact: {
          /** The 2Chat contact ID, or null when the response omits it. */
          id: number | null;
          /**
           * The 2Chat contact UUID.
           * @minLength 1
           */
          uuid: string;
          /** The contact first name. */
          firstName: string;
          /** The contact last name, or null when unavailable. */
          lastName: string | null;
          /** The connected channel UUID associated with the contact, or null when unavailable. */
          channelUuid: string | null;
          /** The contact profile picture URL, or null when unavailable. */
          profilePicUrl: string | null;
          /** The contact details stored for the contact. */
          details: Array<{
            /** The 2Chat contact detail ID. */
            id: number;
            /**
             * The contact detail value returned by 2Chat.
             * @minLength 1
             */
            value: string;
            /**
             * The 2Chat contact detail type code.
             * @minLength 1
             */
            type: string;
            /** When the contact detail was created. */
            createdAt: string | null;
            /** When the contact detail was last updated. */
            updatedAt: string | null;
          }>;
        };
      };
    };
    /** Fetch the current 2Chat account, rate limit, and usage counters for the connected API key. */
    "twochat.get_api_usage_info": {
      input: Record<string, never>;
      output: {
        /** The connected 2Chat account. */
        account: {
          /**
           * The 2Chat account name.
           * @minLength 1
           */
          name: string;
          /**
           * The 2Chat account UUID.
           * @minLength 1
           */
          uuid: string;
          /** Whether the account is currently on a trial plan. */
          onTrial: boolean;
          /** Whether the account is currently blocked. */
          blocked: boolean;
          /**
           * When the 2Chat account was created.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          createdAt: string;
          /**
           * When the current 2Chat plan expires.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          expiresAt: string;
        };
        /** The 2Chat API rate limits. */
        limits: {
          /**
           * The maximum number of API requests allowed per minute.
           * @minimum 0
           */
          requestsPerMinute: number;
        };
        /** The current 2Chat API usage counters. */
        usage: {
          /**
           * The number of API requests already used in the current period.
           * @minimum 0
           */
          apiRequestCount: number;
          /**
           * The maximum number of API requests included in the current plan.
           * @minimum 0
           */
          maxApiRequestCount: number;
          /**
           * The number of phone number checks already used in the current period.
           * @minimum 0
           */
          numberCheckCount: number;
          /**
           * The maximum number of phone number checks included in the current plan.
           * @minimum 0
           */
          maxNumberCheckCount: number;
        };
      };
    };
    /** List contacts from the connected 2Chat account, with optional pagination and channel filtering. */
    "twochat.list_contacts": {
      input: {
        /**
         * Optional page number to retrieve.
         * @minimum 0
         */
        pageNumber?: number;
        /**
         * Optional page size to request from 2Chat, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        resultsPerPage?: number;
        /**
         * Optional connected number UUID used to filter contacts by channel.
         * @minLength 1
         */
        channelUuid?: string;
      };
      output: {
        /**
         * The page number returned by 2Chat.
         * @minimum 0
         */
        page: number;
        /**
         * The total number of contacts available for the current query.
         * @minimum 0
         */
        count: number;
        /** Contacts returned by the requested 2Chat page. */
        contacts: Array<{
          /** The 2Chat contact ID, or null when the response omits it. */
          id: number | null;
          /**
           * The 2Chat contact UUID.
           * @minLength 1
           */
          uuid: string;
          /** The contact first name. */
          firstName: string;
          /** The contact last name, or null when unavailable. */
          lastName: string | null;
          /** The connected channel UUID associated with the contact, or null when unavailable. */
          channelUuid: string | null;
          /** The contact profile picture URL, or null when unavailable. */
          profilePicUrl: string | null;
          /** The contact details stored for the contact. */
          details: Array<{
            /** The 2Chat contact detail ID. */
            id: number;
            /**
             * The contact detail value returned by 2Chat.
             * @minLength 1
             */
            value: string;
            /**
             * The 2Chat contact detail type code.
             * @minLength 1
             */
            type: string;
            /** When the contact detail was created. */
            createdAt: string | null;
            /** When the contact detail was last updated. */
            updatedAt: string | null;
          }>;
        }>;
      };
    };
    /** List the webhook subscriptions currently configured in the connected 2Chat account. */
    "twochat.list_webhooks": {
      input: Record<string, never>;
      output: {
        /** Webhook subscriptions configured in the connected 2Chat account. */
        webhooks: Array<{
          /**
           * The 2Chat webhook UUID.
           * @minLength 1
           */
          uuid: string;
          /**
           * The event name subscribed by the webhook.
           * @minLength 1
           */
          eventName: string;
          /**
           * The channel UUID monitored by the webhook.
           * @minLength 1
           */
          channelUuid: string;
          /**
           * The callback URL configured for the webhook.
           * @minLength 1
           */
          hookUrl: string;
          /** Additional webhook parameters returned by 2Chat. */
          hookParams: Record<string, unknown>;
          /**
           * When the webhook was created.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          createdAt: string;
        }>;
      };
    };
    /** Validate the connected 2Chat API key and return normalized account, limit, and usage information. */
    "twochat.test_api_key": {
      input: Record<string, never>;
      output: {
        /** The connected 2Chat account. */
        account: {
          /**
           * The 2Chat account name.
           * @minLength 1
           */
          name: string;
          /**
           * The 2Chat account UUID.
           * @minLength 1
           */
          uuid: string;
          /** Whether the account is currently on a trial plan. */
          onTrial: boolean;
          /** Whether the account is currently blocked. */
          blocked: boolean;
          /**
           * When the 2Chat account was created.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          createdAt: string;
          /**
           * When the current 2Chat plan expires.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          expiresAt: string;
        };
        /** The 2Chat API rate limits. */
        limits: {
          /**
           * The maximum number of API requests allowed per minute.
           * @minimum 0
           */
          requestsPerMinute: number;
        };
        /** The current 2Chat API usage counters. */
        usage: {
          /**
           * The number of API requests already used in the current period.
           * @minimum 0
           */
          apiRequestCount: number;
          /**
           * The maximum number of API requests included in the current plan.
           * @minimum 0
           */
          maxApiRequestCount: number;
          /**
           * The number of phone number checks already used in the current period.
           * @minimum 0
           */
          numberCheckCount: number;
          /**
           * The maximum number of phone number checks included in the current plan.
           * @minimum 0
           */
          maxNumberCheckCount: number;
        };
      };
    };
  }
}
