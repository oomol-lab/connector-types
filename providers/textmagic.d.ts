import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a contact list in Textmagic. */
    "textmagic.create_list": {
      input: {
        /**
         * The contact-list name.
         * @minLength 1
         */
        name: string;
        /** Whether subaccounts can access the new list. */
        shared?: boolean;
        /** Whether the new list should be favorited. */
        favorited?: boolean;
        /** Whether new web contacts should use this list by default. */
        isDefault?: boolean;
      };
      output: {
        /** The created Textmagic list ID. */
        id: number;
        /** The relative URI of the created Textmagic list. */
        href: string;
      };
    };
    /** Get one Textmagic contact by ID. */
    "textmagic.get_contact": {
      input: {
        /**
         * The Textmagic contact ID.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** The Textmagic contact ID. */
        id: number;
        /** Whether the contact is favorited. */
        favorited?: boolean;
        /** Whether the contact is blocked. */
        blocked?: boolean;
        /** The contact first name. */
        firstName?: string | null;
        /** The contact last name. */
        lastName?: string | null;
        /** The contact company name. */
        companyName?: string | null;
        /** The contact phone number in E.164 format. */
        phone?: string | null;
        /**
         * The contact email address.
         * @format email
         */
        email?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get the Textmagic account associated with the connected API credentials. */
    "textmagic.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The Textmagic user ID. */
        id: number;
        /** The Textmagic username. */
        username: string;
        /** The account first name. */
        firstName: string;
        /** The account last name. */
        lastName: string;
        /**
         * The account email address.
         * @format email
         */
        email: string;
        /** The account balance in the account currency. */
        balance: number;
        /** The account currency code. */
        currency: string;
        [key: string]: unknown;
      };
    };
    /** List contacts in the connected Textmagic account. */
    "textmagic.list_contacts": {
      input: {
        /**
         * The one-based results page to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of resources to return per page.
         * @minimum 1
         */
        limit?: number;
        /**
         * Whether shared contacts should be included, using 0 or 1.
         * @minimum 0
         * @maximum 1
         */
        shared?: number;
        /** The field used to order contacts. */
        orderBy?: "id" | "firstName" | "lastName";
        /** The contact ordering direction. */
        direction?: "asc" | "desc";
      };
      output: {
        /** The current results page. */
        page: number;
        /** The total number of results pages. */
        pageCount: number;
        /** The number of resources per page. */
        limit: number;
        /** Contacts on the requested page. */
        resources: Array<{
          /** The Textmagic contact ID. */
          id: number;
          /** Whether the contact is favorited. */
          favorited?: boolean;
          /** Whether the contact is blocked. */
          blocked?: boolean;
          /** The contact first name. */
          firstName?: string | null;
          /** The contact last name. */
          lastName?: string | null;
          /** The contact company name. */
          companyName?: string | null;
          /** The contact phone number in E.164 format. */
          phone?: string | null;
          /**
           * The contact email address.
           * @format email
           */
          email?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List contact lists in the connected Textmagic account. */
    "textmagic.list_lists": {
      input: {
        /**
         * The one-based results page to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of resources to return per page.
         * @minimum 1
         */
        limit?: number;
        /** The field used to order contact lists. */
        orderBy?: "id" | "firstName" | "lastName";
        /** The contact-list ordering direction. */
        direction?: "asc" | "desc";
        /**
         * Whether only favorited lists should be returned, using 0 or 1.
         * @minimum 0
         * @maximum 1
         */
        favoriteOnly?: number;
        /**
         * Whether only current-user lists should be returned, using 0 or 1.
         * @minimum 0
         * @maximum 1
         */
        onlyMine?: number;
      };
      output: {
        /** The current results page. */
        page: number;
        /** The total number of results pages. */
        pageCount: number;
        /** The number of resources per page. */
        limit: number;
        /** Contact lists on the requested page. */
        resources: Array<{
          /** The Textmagic list ID. */
          id: number;
          /** The list name. */
          name: string;
          /** The list description. */
          description?: string | null;
          /** Whether the list is favorited. */
          favorited?: boolean;
          /** The number of contacts in the list. */
          membersCount?: number;
          /** Whether subaccounts can access the list. */
          shared?: boolean | null;
          /** Whether new web contacts use this list by default. */
          isDefault?: boolean | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List SMS message templates in the connected Textmagic account. */
    "textmagic.list_templates": {
      input: {
        /**
         * The one-based results page to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of resources to return per page.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** The current results page. */
        page: number;
        /** The total number of results pages. */
        pageCount: number;
        /** The number of resources per page. */
        limit: number;
        /** Message templates on the requested page. */
        resources: Array<{
          /** The Textmagic template ID. */
          id: number;
          /** The template name. */
          name: string;
          /** The template text, which may contain Textmagic dynamic fields. */
          content: string;
          /** The template last-modified timestamp. */
          lastModified: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Send a plain-text SMS message to up to 1,000 phone numbers through Textmagic. */
    "textmagic.send_message": {
      input: {
        /**
         * The SMS message text.
         * @minLength 1
         */
        text: string;
        /**
         * Recipient phone numbers in E.164 format without separators.
         * @minItems 1
         * @maxItems 1000
         */
        phones: Array<string>;
        /**
         * An allowed Textmagic phone number or alphanumeric sender ID.
         * @minLength 1
         */
        from?: string;
        /** A custom integer reference ID for delivery callbacks. */
        referenceId?: number;
        /** Whether Textmagic should truncate text beyond partsCount. */
        cutExtra?: boolean;
        /**
         * The maximum number of SMS message parts.
         * @minimum 1
         * @maximum 6
         */
        partsCount?: number;
        /** Whether recipient numbers should be interpreted as local numbers. */
        local?: boolean;
        /**
         * The two-letter country code used when local is true.
         * @minLength 2
         * @maxLength 2
         */
        localCountry?: string;
      };
      output: {
        /** The created message, session, schedule, or bulk ID. */
        id: number;
        /** The relative URI of the created Textmagic resource. */
        href: string;
        /** The kind of Textmagic resource created for the submission. */
        type: "message" | "session" | "schedule" | "bulk";
        /** The message session ID when one was created. */
        sessionId: number | null;
        /** The bulk session ID when asynchronous processing was required. */
        bulkId: number | null;
        /** The message ID for a single-recipient submission. */
        messageId: number | null;
        /** The schedule ID when a scheduled message was created. */
        scheduleId: number | null;
        /** The chat ID when a chat was created. */
        chatId: number | null;
      };
    };
  }
}
