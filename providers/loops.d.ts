import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Loops contact with default and custom contact properties. */
    "loops.create_contact": {
      input: {
        /**
         * The contact's email address.
         * @format email
         */
        email: string;
        /**
         * The contact's first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * The contact's last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * A custom source value that replaces the default "API" source.
         * @minLength 1
         */
        source?: string;
        /** Whether the contact receives campaign and workflow emails. */
        subscribed?: boolean;
        /**
         * The user group used to segment the contact.
         * @minLength 1
         */
        userGroup?: string;
        /**
         * The unique user ID from an external application.
         * @minLength 1
         */
        userId?: string;
        /** Mailing list subscription changes keyed by Loops mailing list ID. */
        mailingLists?: Record<string, boolean>;
        /** Custom contact or event properties keyed by their Loops property name. */
        customProperties?: Record<string, string | number | boolean | null>;
        [key: string]: unknown;
      };
      output: {
        /** Whether Loops accepted the request. */
        success: boolean;
        /** The internal Loops contact ID. */
        id: string;
      };
    };
    /** Create a custom contact property in Loops. */
    "loops.create_contact_property": {
      input: {
        /**
         * The camelCase contact property name.
         * @minLength 1
         */
        name: string;
        /** The Loops contact property type. */
        type: "string" | "number" | "boolean" | "date";
      };
      output: {
        /** Whether Loops accepted the request. */
        success: boolean;
        /** The contact property name. */
        name: string;
        /** The contact property type. */
        type: string;
      };
    };
    /** Delete a Loops contact by email or userId. */
    "loops.delete_contact": {
      input: {
        /**
         * The contact's email address.
         * @format email
         */
        email?: string;
        /**
         * The unique user ID from an external application.
         * @minLength 1
         */
        userId?: string;
      };
      output: {
        /** Whether Loops accepted the request. */
        success: boolean;
        /** The message returned by Loops. */
        message: string;
      };
    };
    /** Find Loops contacts by email or userId. */
    "loops.find_contact": {
      input: {
        /**
         * The contact's email address.
         * @format email
         */
        email?: string;
        /**
         * The unique user ID from an external application.
         * @minLength 1
         */
        userId?: string;
      };
      output: Array<{
        /** The contact's Loops-assigned ID. */
        id?: string;
        /** The contact's email address. */
        email?: string;
        /** The contact's first name. */
        firstName?: string | null;
        /** The contact's last name. */
        lastName?: string | null;
        /** The source the contact was created from. */
        source?: string;
        /** Whether the contact receives campaign and workflow emails. */
        subscribed?: boolean;
        /** The contact's user group. */
        userGroup?: string;
        /** The contact's unique user ID. */
        userId?: string | null;
        /** Mailing lists the contact is subscribed to, keyed by mailing list ID. */
        mailingLists?: Record<string, boolean>;
        /** The contact's double opt-in status, when double opt-in applies. */
        optInStatus?: string | null;
        [key: string]: unknown;
      }>;
    };
    /** List default or custom Loops contact properties. */
    "loops.list_contact_properties": {
      input: {
        /** Which contact properties to list. */
        list?: "all" | "custom";
      };
      output: Array<{
        /** The contact property key. */
        key: string;
        /** The contact property label. */
        label: string;
        /** The contact property type. */
        type: string;
      }>;
    };
    /** List Loops mailing lists available to the current API key. */
    "loops.list_mailing_lists": {
      input: Record<string, never>;
      output: Array<{
        /** The Loops mailing list ID. */
        id: string;
        /** The mailing list name. */
        name: string;
        /** The mailing list description. */
        description: string;
        /** Whether the mailing list is public. */
        isPublic: boolean;
      }>;
    };
    /** Send a Loops event to trigger workflows for a contact. */
    "loops.send_event": {
      input: {
        /**
         * The Loops event name to trigger.
         * @minLength 1
         */
        eventName?: string;
        /**
         * The contact's email address.
         * @format email
         */
        email?: string;
        /**
         * The unique user ID from an external application.
         * @minLength 1
         */
        userId?: string;
        /**
         * An optional idempotency key sent as the Idempotency-Key header.
         * @minLength 1
         */
        idempotencyKey?: string;
        /** Custom contact or event properties keyed by their Loops property name. */
        eventProperties?: Record<string, string | number | boolean | null>;
        /** Custom contact or event properties keyed by their Loops property name. */
        contactProperties?: Record<string, string | number | boolean | null>;
        [key: string]: unknown;
      };
      output: {
        /** Whether Loops accepted the request. */
        success: boolean;
        /** The message returned by Loops. */
        message: string;
      };
    };
    /** Update or create a Loops contact by email or userId. */
    "loops.update_contact": {
      input: {
        /**
         * The contact's email address.
         * @format email
         */
        email?: string;
        /**
         * The unique user ID from an external application.
         * @minLength 1
         */
        userId?: string;
        /**
         * The contact's first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * The contact's last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * A custom source value that replaces the default "API" source.
         * @minLength 1
         */
        source?: string;
        /** Whether the contact receives campaign and workflow emails. */
        subscribed?: boolean;
        /**
         * The user group used to segment the contact.
         * @minLength 1
         */
        userGroup?: string;
        /** Mailing list subscription changes keyed by Loops mailing list ID. */
        mailingLists?: Record<string, boolean>;
        /** Custom contact or event properties keyed by their Loops property name. */
        customProperties?: Record<string, string | number | boolean | null>;
        [key: string]: unknown;
      };
      output: {
        /** Whether Loops accepted the request. */
        success: boolean;
        /** The internal Loops contact ID. */
        id: string;
      };
    };
  }
}
