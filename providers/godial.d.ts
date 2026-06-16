import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one GoDial contact in a target list using the official external API form fields. */
    "godial.create_contact": {
      input: {
        /**
         * The contact name.
         * @minLength 1
         */
        name?: string;
        /**
         * The contact email address.
         * @minLength 1
         */
        email?: string;
        /**
         * The primary phone number of the contact.
         * @minLength 1
         */
        phone: string;
        /**
         * An alternate phone number for the contact.
         * @minLength 1
         */
        secondPhone?: string;
        /**
         * The contact company name.
         * @minLength 1
         */
        companyName?: string;
        /**
         * The note text saved for the contact.
         * @minLength 1
         */
        note?: string;
        /**
         * The remarks text saved for the contact.
         * @minLength 1
         */
        remarks?: string;
        /**
         * Extra note content saved for the contact.
         * @minLength 1
         */
        extra?: string;
        /** How GoDial should assign the new contact when an explicit assignee is not used. */
        assignmentMode?: "default" | "roundrobin";
        /** Custom fields forwarded to GoDial. */
        customFields?: Array<{
          /**
           * The custom field name.
           * @minLength 1
           */
          name: string;
          /** The custom field value. */
          value: unknown;
        }>;
        /**
         * The GoDial list ID where the contact should be stored.
         * @minLength 1
         */
        listId: string;
        /**
         * The GoDial account ID assigned to the contact.
         * @minLength 1
         */
        assignedAccountId?: string;
        /**
         * The lead source label for the contact.
         * @minLength 1
         */
        source?: string;
        /**
         * The contact address.
         * @minLength 1
         */
        address?: string;
        /** UTM-style marketing attribution object forwarded to GoDial. */
        sourceMarketing?: Record<string, unknown>;
      };
      output: {
        /** The raw GoDial response returned after contact creation. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch one GoDial contact by contact ID. */
    "godial.get_contact": {
      input: {
        /**
         * The GoDial contact ID to fetch.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** The normalized contact returned by GoDial. */
        contact: {
          /** The GoDial contact identifier. */
          id: string;
          /** One raw GoDial item. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List GoDial accounts in the current company. */
    "godial.list_accounts": {
      input: Record<string, never>;
      output: {
        /** Accounts returned by GoDial. */
        accounts: Array<{
          /** The GoDial account identifier. */
          id: string;
          /** The GoDial account display name. */
          name: string;
          /** One raw GoDial item. */
          raw: Record<string, unknown>;
        }>;
        /** The raw account payload returned by GoDial. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List all contacts currently stored in one GoDial list. */
    "godial.list_contacts_in_list": {
      input: {
        /**
         * The GoDial list ID whose contacts should be returned.
         * @minLength 1
         */
        listId: string;
      };
      output: {
        /** Contacts returned for the GoDial list. */
        contacts: Array<{
          /** The GoDial contact identifier. */
          id: string;
          /** The primary phone number returned for the contact. */
          phone: string;
          /** The contact name when GoDial returns it. */
          name: string;
          /** One raw GoDial item. */
          raw: Record<string, unknown>;
        }>;
        /** The raw contact payload returned by GoDial. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List GoDial lists in the current company. */
    "godial.list_lists": {
      input: Record<string, never>;
      output: {
        /** Lists returned by GoDial. */
        lists: Array<{
          /** The GoDial list identifier. */
          id: string;
          /** The GoDial list display name. */
          name: string;
          /** One raw GoDial item. */
          raw: Record<string, unknown>;
        }>;
        /** The raw list payload returned by GoDial. */
        raw: Array<Record<string, unknown>>;
      };
    };
  }
}
