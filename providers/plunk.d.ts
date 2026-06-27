import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create or update a Plunk contact by email. */
    "plunk.create_contact": {
      input: {
        /**
         * The contact email address.
         * @format email
         */
        email: string;
        /** Whether the contact is subscribed. */
        subscribed?: boolean;
        /** Custom contact data or template variables accepted by Plunk. */
        data?: Record<string, unknown>;
      };
      output: {
        /** A Plunk contact resource with upsert metadata. */
        contact: {
          /** The Plunk contact ID. */
          id?: string;
          /**
           * The contact email address.
           * @format email
           */
          email?: string;
          /** Whether the contact is subscribed. */
          subscribed?: boolean;
          /** Custom contact data or template variables accepted by Plunk. */
          data?: Record<string, unknown> | null;
          /**
           * When the contact was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * When the contact was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /** Metadata describing whether Plunk created or updated the contact. */
          _meta?: {
            /** Whether Plunk created a new contact. */
            isNew?: boolean;
            /** Whether Plunk updated an existing contact. */
            isUpdate?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Raw object returned by the official Plunk API. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a Plunk contact by ID. */
    "plunk.delete_contact": {
      input: {
        /**
         * The Plunk contact ID.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** Whether the contact deletion request completed successfully. */
        deleted: boolean;
      };
    };
    /** Get a single Plunk contact by ID. */
    "plunk.get_contact": {
      input: {
        /**
         * The Plunk contact ID.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** A Plunk contact resource. */
        contact: {
          /** The Plunk contact ID. */
          id?: string;
          /**
           * The contact email address.
           * @format email
           */
          email?: string;
          /** Whether the contact is subscribed. */
          subscribed?: boolean;
          /** Custom contact data or template variables accepted by Plunk. */
          data?: Record<string, unknown> | null;
          /**
           * When the contact was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * When the contact was last updated.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        };
        /** Raw object returned by the official Plunk API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Plunk contacts with cursor pagination. */
    "plunk.list_contacts": {
      input: {
        /**
         * Maximum number of contacts to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination cursor returned by a previous list request.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Case-insensitive substring search on contact email.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** Contacts returned by Plunk. */
        items: Array<{
          /** The Plunk contact ID. */
          id?: string;
          /**
           * The contact email address.
           * @format email
           */
          email?: string;
          /** Whether the contact is subscribed. */
          subscribed?: boolean;
          /** Custom contact data or template variables accepted by Plunk. */
          data?: Record<string, unknown> | null;
          /**
           * When the contact was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * When the contact was last updated.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page. */
        cursor: string | null;
        /** Whether another page is available. */
        hasMore: boolean;
        /** Total count on the first page; later pages may return zero. */
        total: number;
        /** Raw object returned by the official Plunk API. */
        raw: Record<string, unknown>;
      };
    };
    /** Send a transactional email through Plunk. */
    "plunk.send_email": {
      input: {
        /** One or more Plunk recipients. */
        to: string | {
          /**
           * The email address.
           * @format email
           */
          email: string;
          /**
           * The display name.
           * @minLength 1
           */
          name?: string;
        } | Array<string | {
          /**
           * The email address.
           * @format email
           */
          email: string;
          /**
           * The display name.
           * @minLength 1
           */
          name?: string;
        }>;
        /**
         * The email subject. Required when template is omitted.
         * @minLength 1
         * @maxLength 998
         */
        subject?: string;
        /**
         * The HTML email body. Required when template is omitted.
         * @minLength 1
         */
        body?: string;
        /**
         * The Plunk template ID to use for this email.
         * @minLength 1
         */
        template?: string;
        /** A Plunk sender as an email string or object. */
        from?: string | {
          /**
           * The email address.
           * @format email
           */
          email: string;
          /**
           * The display name.
           * @minLength 1
           */
          name?: string;
        };
        /** Subscription state to apply to the recipient contact. */
        subscribed?: boolean;
        /** Custom contact data or template variables accepted by Plunk. */
        data?: Record<string, unknown>;
        /** Custom email headers keyed by header name. */
        headers?: Record<string, string>;
        /**
         * The reply-to email address.
         * @format email
         */
        reply?: string;
      };
      output: {
        /** Email records queued by Plunk. */
        emails: Array<{
          /** The recipient contact linked to the queued email. */
          contact: {
            /** The Plunk contact ID. */
            id: string;
            /**
             * The recipient email address.
             * @format email
             */
            email: string;
          };
          /** The Plunk email record ID. */
          email: string;
        }>;
        /**
         * Timestamp returned by Plunk for the queued send.
         * @format date-time
         */
        timestamp: string;
        /** Raw object returned by the official Plunk API. */
        raw: Record<string, unknown>;
      };
    };
    /** Track an event for a Plunk contact. */
    "plunk.track_event": {
      input: {
        /**
         * The contact email address. Plunk creates the contact if needed.
         * @format email
         */
        email: string;
        /**
         * The event name to track.
         * @minLength 1
         */
        event: string;
        /** Subscription state to apply to the contact. */
        subscribed?: boolean;
        /** Custom contact data or template variables accepted by Plunk. */
        data?: Record<string, unknown>;
      };
      output: {
        /** The Plunk contact ID. */
        contact: string;
        /** The Plunk event ID. */
        event: string;
        /**
         * Timestamp returned by Plunk for the tracked event.
         * @format date-time
         */
        timestamp: string;
        /** Raw object returned by the official Plunk API. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Plunk contact by ID. */
    "plunk.update_contact": {
      input: {
        /**
         * The Plunk contact ID.
         * @minLength 1
         */
        contactId: string;
        /**
         * Updated contact email address.
         * @format email
         */
        email?: string;
        /** Updated subscription state. */
        subscribed?: boolean;
        /** Custom contact data or template variables accepted by Plunk. */
        data?: Record<string, unknown>;
      };
      output: {
        /** A Plunk contact resource. */
        contact: {
          /** The Plunk contact ID. */
          id?: string;
          /**
           * The contact email address.
           * @format email
           */
          email?: string;
          /** Whether the contact is subscribed. */
          subscribed?: boolean;
          /** Custom contact data or template variables accepted by Plunk. */
          data?: Record<string, unknown> | null;
          /**
           * When the contact was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * When the contact was last updated.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        };
        /** Raw object returned by the official Plunk API. */
        raw: Record<string, unknown>;
      };
    };
    /** Verify an email address with Plunk. */
    "plunk.verify_email": {
      input: {
        /**
         * The email address to verify.
         * @format email
         */
        email: string;
      };
      output: {
        /**
         * The email address that was verified.
         * @format email
         */
        email: string;
        /** Whether the email appears valid overall. */
        valid: boolean;
        /** Whether the email uses a disposable domain. */
        isDisposable: boolean;
        /** Whether the email uses an alias or forwarding service. */
        isAlias: boolean;
        /** Whether Plunk detected a likely typo. */
        isTypo: boolean;
        /** Whether the email uses plus addressing. */
        isPlusAddressed: boolean;
        /** Whether the email uses a personal email provider. */
        isPersonalEmail: boolean;
        /** Whether DNS indicates that the domain exists. */
        domainExists: boolean;
        /** Whether the domain has a website DNS record. */
        hasWebsite: boolean;
        /** Whether the domain has MX records. */
        hasMxRecords: boolean;
        /**
         * Suggested correction when Plunk detects a typo.
         * @format email
         */
        suggestedEmail: string | null;
        /** Human-readable verification reasons. */
        reasons: Array<string>;
        /** Raw object returned by the official Plunk API. */
        raw: Record<string, unknown>;
      };
    };
  }
}
