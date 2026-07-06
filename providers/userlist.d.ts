import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Userlist event for a user, company, or both. */
    "userlist.create_event": {
      input: {
        /**
         * The event name.
         * @minLength 1
         */
        name: string;
        /** A Userlist user identifier or embedded user object. */
        user?: string | number | {
          /** A Userlist resource identifier. */
          identifier?: string | number;
          /**
           * The email address of the user.
           * @format email
           */
          email?: string;
          /**
           * When the user signed up.
           * @format date-time
           */
          signed_up_at?: string;
          /** Custom properties stored by Userlist. Keys are normalized to snake_case by Userlist. */
          properties?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A Userlist company identifier or embedded company object. */
        company?: string | number | {
          /** A Userlist resource identifier. */
          identifier?: string | number;
          /**
           * The company name.
           * @minLength 1
           */
          name?: string;
          /**
           * When the company signed up.
           * @format date-time
           */
          signed_up_at?: string;
          /** Custom properties stored by Userlist. Keys are normalized to snake_case by Userlist. */
          properties?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /**
         * When the event occurred.
         * @format date-time
         */
        occurred_at?: string;
        /** Custom properties stored by Userlist. Keys are normalized to snake_case by Userlist. */
        properties?: Record<string, unknown>;
      };
      output: {
        /** Whether Userlist accepted the request for asynchronous processing. */
        accepted: boolean;
        /** The HTTP status code returned by Userlist. */
        status: number;
      };
    };
    /** Create or update a Userlist company through the Push API. */
    "userlist.push_company": {
      input: {
        /** A Userlist resource identifier. */
        identifier: string | number;
        /**
         * The company name.
         * @minLength 1
         */
        name?: string;
        /**
         * When the company signed up.
         * @format date-time
         */
        signed_up_at?: string;
        /** Custom properties stored by Userlist. Keys are normalized to snake_case by Userlist. */
        properties?: Record<string, unknown>;
        /**
         * Relationships to users for this company.
         * @minItems 1
         */
        relationships?: Array<{
          /** A Userlist user identifier or embedded user object. */
          user: string | number | {
            /** A Userlist resource identifier. */
            identifier?: string | number;
            /**
             * The email address of the user.
             * @format email
             */
            email?: string;
            /**
             * When the user signed up.
             * @format date-time
             */
            signed_up_at?: string;
            /** Custom properties stored by Userlist. Keys are normalized to snake_case by Userlist. */
            properties?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Custom properties stored by Userlist. Keys are normalized to snake_case by Userlist. */
          properties?: Record<string, unknown>;
        }>;
        /** A Userlist user identifier or embedded user object. */
        user?: string | number | {
          /** A Userlist resource identifier. */
          identifier?: string | number;
          /**
           * The email address of the user.
           * @format email
           */
          email?: string;
          /**
           * When the user signed up.
           * @format date-time
           */
          signed_up_at?: string;
          /** Custom properties stored by Userlist. Keys are normalized to snake_case by Userlist. */
          properties?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /**
         * User identifiers or embedded users.
         * @minItems 1
         */
        users?: Array<string | number | {
          /** A Userlist resource identifier. */
          identifier?: string | number;
          /**
           * The email address of the user.
           * @format email
           */
          email?: string;
          /**
           * When the user signed up.
           * @format date-time
           */
          signed_up_at?: string;
          /** Custom properties stored by Userlist. Keys are normalized to snake_case by Userlist. */
          properties?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** Whether Userlist accepted the request for asynchronous processing. */
        accepted: boolean;
        /** The HTTP status code returned by Userlist. */
        status: number;
      };
    };
    /** Create or update a Userlist relationship between a user and a company. */
    "userlist.push_relationship": {
      input: {
        /** A Userlist user identifier or embedded user object. */
        user: string | number | {
          /** A Userlist resource identifier. */
          identifier?: string | number;
          /**
           * The email address of the user.
           * @format email
           */
          email?: string;
          /**
           * When the user signed up.
           * @format date-time
           */
          signed_up_at?: string;
          /** Custom properties stored by Userlist. Keys are normalized to snake_case by Userlist. */
          properties?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A Userlist company identifier or embedded company object. */
        company: string | number | {
          /** A Userlist resource identifier. */
          identifier?: string | number;
          /**
           * The company name.
           * @minLength 1
           */
          name?: string;
          /**
           * When the company signed up.
           * @format date-time
           */
          signed_up_at?: string;
          /** Custom properties stored by Userlist. Keys are normalized to snake_case by Userlist. */
          properties?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Custom properties stored by Userlist. Keys are normalized to snake_case by Userlist. */
        properties?: Record<string, unknown>;
      };
      output: {
        /** Whether Userlist accepted the request for asynchronous processing. */
        accepted: boolean;
        /** The HTTP status code returned by Userlist. */
        status: number;
      };
    };
    /** Create or update a Userlist user through the Push API. */
    "userlist.push_user": {
      input: {
        /** A Userlist resource identifier. */
        identifier?: string | number;
        /**
         * The email address of the user.
         * @format email
         */
        email?: string;
        /**
         * When the user signed up.
         * @format date-time
         */
        signed_up_at?: string;
        /** Custom properties stored by Userlist. Keys are normalized to snake_case by Userlist. */
        properties?: Record<string, unknown>;
        /**
         * Relationships to companies for this user.
         * @minItems 1
         */
        relationships?: Array<{
          /** A Userlist company identifier or embedded company object. */
          company: string | number | {
            /** A Userlist resource identifier. */
            identifier?: string | number;
            /**
             * The company name.
             * @minLength 1
             */
            name?: string;
            /**
             * When the company signed up.
             * @format date-time
             */
            signed_up_at?: string;
            /** Custom properties stored by Userlist. Keys are normalized to snake_case by Userlist. */
            properties?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Custom properties stored by Userlist. Keys are normalized to snake_case by Userlist. */
          properties?: Record<string, unknown>;
        }>;
        /** A Userlist company identifier or embedded company object. */
        company?: string | number | {
          /** A Userlist resource identifier. */
          identifier?: string | number;
          /**
           * The company name.
           * @minLength 1
           */
          name?: string;
          /**
           * When the company signed up.
           * @format date-time
           */
          signed_up_at?: string;
          /** Custom properties stored by Userlist. Keys are normalized to snake_case by Userlist. */
          properties?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /**
         * Company identifiers or embedded companies.
         * @minItems 1
         */
        companies?: Array<string | number | {
          /** A Userlist resource identifier. */
          identifier?: string | number;
          /**
           * The company name.
           * @minLength 1
           */
          name?: string;
          /**
           * When the company signed up.
           * @format date-time
           */
          signed_up_at?: string;
          /** Custom properties stored by Userlist. Keys are normalized to snake_case by Userlist. */
          properties?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /**
         * Subscription preference updates for this user.
         * @minItems 1
         */
        preferences?: Array<{
          /**
           * The topic identifier from Userlist topic settings.
           * @minLength 1
           */
          topic: string;
          /** Whether the user is subscribed to the topic. */
          subscribed: boolean;
        }>;
      };
      output: {
        /** Whether Userlist accepted the request for asynchronous processing. */
        accepted: boolean;
        /** The HTTP status code returned by Userlist. */
        status: number;
      };
    };
    /** Send a Userlist transactional message to a user or email address. */
    "userlist.send_message": {
      input: {
        /**
         * The transactional message template identifier.
         * @minLength 1
         */
        template?: string;
        /** A Userlist user identifier or embedded user object. */
        user?: string | number | {
          /** A Userlist resource identifier. */
          identifier?: string | number;
          /**
           * The email address of the user.
           * @format email
           */
          email?: string;
          /**
           * When the user signed up.
           * @format date-time
           */
          signed_up_at?: string;
          /** Custom properties stored by Userlist. Keys are normalized to snake_case by Userlist. */
          properties?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A Userlist company identifier or embedded company object. */
        company?: string | number | {
          /** A Userlist resource identifier. */
          identifier?: string | number;
          /**
           * The company name.
           * @minLength 1
           */
          name?: string;
          /**
           * When the company signed up.
           * @format date-time
           */
          signed_up_at?: string;
          /** Custom properties stored by Userlist. Keys are normalized to snake_case by Userlist. */
          properties?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Custom properties stored by Userlist. Keys are normalized to snake_case by Userlist. */
        properties?: Record<string, unknown>;
        /** The delivery channel for the message. */
        channel?: "email" | "web";
        /**
         * The recipient email address for email messages.
         * @format email
         */
        to?: string;
        /**
         * The sender email address for email messages.
         * @format email
         */
        from?: string;
        /**
         * The reply-to email address for email messages.
         * @format email
         */
        reply_to?: string;
        /**
         * The custom message subject. Required when template is omitted.
         * @minLength 1
         */
        subject?: string;
        /**
         * The custom email preheader text.
         * @minLength 1
         */
        preheader?: string;
        /** The Userlist transactional message body. */
        body?: {
          /** The message body content type. */
          type: "html" | "text" | "multipart";
          /** The body content string or multipart array. */
          content: string | Array<{
            /** The content type for this body part. */
            type: "html" | "text";
            /**
             * The body part content.
             * @minLength 1
             */
            content: string;
          }>;
        };
        /**
         * The sender identifier configured in Userlist.
         * @minLength 1
         */
        sender?: string;
        /** The theme identifier to apply, or false to disable theming. */
        theme?: string | false;
        /**
         * The topic identifier configured in Userlist.
         * @minLength 1
         */
        topic?: string;
      };
      output: {
        /** Whether Userlist accepted the request for asynchronous processing. */
        accepted: boolean;
        /** The HTTP status code returned by Userlist. */
        status: number;
      };
    };
  }
}
