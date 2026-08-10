import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add up to 1000 contacts to Elastic Email and optionally assign them to lists. */
    "elasticemail.add_contacts": {
      input: {
        /**
         * Contact payloads to create or add through Elastic Email.
         * @minItems 1
         * @maxItems 1000
         */
        contacts: Array<{
          /** Elastic Email contact status. */
          status?: "Transactional" | "Engaged" | "Active" | "Bounced" | "Unsubscribed" | "Abuse" | "Inactive" | "Stale" | "NotConfirmed";
          /** Contact first name. */
          firstName?: string;
          /** Contact last name. */
          lastName?: string;
          /** Key-value collection of Elastic Email custom contact fields. */
          customFields?: Record<string, string>;
          /** Consent data accepted by Elastic Email contact write endpoints. */
          consent?: {
            /** IP address of consent to send email; Elastic Email uses the current public IP when omitted. */
            consentIp?: string;
            /**
             * Date of consent to send email.
             * @format date-time
             */
            consentDate?: string;
            /** Elastic Email consent tracking value. */
            consentTracking?: "Unknown" | "Allow" | "Deny";
          };
          /**
           * Proper email address accepted by Elastic Email.
           * @format email
           */
          email: string;
        }>;
        /**
         * Names of lists to which Elastic Email should add the uploaded contacts.
         * @minItems 1
         */
        listNames?: Array<string>;
      };
      output: Array<{
        /** Contact email address. */
        Email?: string;
        /** Elastic Email contact status. */
        Status?: string;
        /** Contact first name. */
        FirstName?: string;
        /** Contact last name. */
        LastName?: string;
        /** Elastic Email custom contact fields returned for this contact. */
        CustomFields?: Record<string, string>;
        /** Consent data returned by Elastic Email. */
        Consent?: {
          /** IP address recorded for consent. */
          ConsentIP?: string;
          /** Date of consent returned by Elastic Email, when present. */
          ConsentDate?: string | null;
          /** Consent tracking value returned by Elastic Email. */
          ConsentTracking?: string;
          [key: string]: unknown;
        };
        /** Contact source returned by Elastic Email. */
        Source?: string;
        /** Additional contact source information. */
        SourceInfo?: string;
        /** Date and time string returned by Elastic Email, usually in YYYY-MM-DDThh:mm:ss format. */
        DateAdded?: string;
        /** Last contact update date returned by Elastic Email, when present. */
        DateUpdated?: string | null;
        /** Last contact status-change date returned by Elastic Email. */
        StatusChangeDate?: string | null;
        /** Contact activity object returned by Elastic Email, when present. */
        Activity?: Record<string, unknown>;
        [key: string]: unknown;
      }>;
    };
    /** Add existing Elastic Email contacts to a contact list. */
    "elasticemail.add_contacts_to_list": {
      input: {
        /**
         * Elastic Email contact list name.
         * @minLength 1
         */
        listName: string;
        /**
         * Contact email addresses accepted by Elastic Email list membership endpoints.
         * @minItems 1
         */
        emails: Array<string>;
      };
      output: {
        /** Elastic Email list name. */
        ListName?: string;
        /** Elastic Email public list identifier, when present. */
        PublicListID?: string | null;
        /** Date and time string returned by Elastic Email, usually in YYYY-MM-DDThh:mm:ss format. */
        DateAdded?: string;
        /** Whether Elastic Email allows unsubscribing from this list. */
        AllowUnsubscribe?: boolean;
        [key: string]: unknown;
      };
    };
    /** Create a new Elastic Email contact list. */
    "elasticemail.create_list": {
      input: {
        /**
         * Elastic Email contact list name.
         * @minLength 1
         */
        listName: string;
        /** Whether Elastic Email should allow unsubscribing from this list. */
        allowUnsubscribe?: boolean;
        /**
         * Existing contact emails to add to the new list.
         * @minItems 1
         */
        emails?: Array<string>;
      };
      output: {
        /** Elastic Email list name. */
        ListName?: string;
        /** Elastic Email public list identifier, when present. */
        PublicListID?: string | null;
        /** Date and time string returned by Elastic Email, usually in YYYY-MM-DDThh:mm:ss format. */
        DateAdded?: string;
        /** Whether Elastic Email allows unsubscribing from this list. */
        AllowUnsubscribe?: boolean;
        [key: string]: unknown;
      };
    };
    /** Delete one Elastic Email contact by email address. */
    "elasticemail.delete_contact": {
      input: {
        /**
         * Proper email address accepted by Elastic Email.
         * @format email
         */
        email: string;
      };
      output: {
        /** Whether Elastic Email accepted the operation. */
        success: boolean;
      };
    };
    /** Delete an Elastic Email list without deleting its contacts. */
    "elasticemail.delete_list": {
      input: {
        /**
         * Elastic Email contact list name.
         * @minLength 1
         */
        listName: string;
      };
      output: {
        /** Whether Elastic Email accepted the operation. */
        success: boolean;
      };
    };
    /** Fetch one Elastic Email contact by email address. */
    "elasticemail.get_contact": {
      input: {
        /**
         * Proper email address accepted by Elastic Email.
         * @format email
         */
        email: string;
      };
      output: {
        /** Contact email address. */
        Email?: string;
        /** Elastic Email contact status. */
        Status?: string;
        /** Contact first name. */
        FirstName?: string;
        /** Contact last name. */
        LastName?: string;
        /** Elastic Email custom contact fields returned for this contact. */
        CustomFields?: Record<string, string>;
        /** Consent data returned by Elastic Email. */
        Consent?: {
          /** IP address recorded for consent. */
          ConsentIP?: string;
          /** Date of consent returned by Elastic Email, when present. */
          ConsentDate?: string | null;
          /** Consent tracking value returned by Elastic Email. */
          ConsentTracking?: string;
          [key: string]: unknown;
        };
        /** Contact source returned by Elastic Email. */
        Source?: string;
        /** Additional contact source information. */
        SourceInfo?: string;
        /** Date and time string returned by Elastic Email, usually in YYYY-MM-DDThh:mm:ss format. */
        DateAdded?: string;
        /** Last contact update date returned by Elastic Email, when present. */
        DateUpdated?: string | null;
        /** Last contact status-change date returned by Elastic Email. */
        StatusChangeDate?: string | null;
        /** Contact activity object returned by Elastic Email, when present. */
        Activity?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Fetch one Elastic Email contact list by name. */
    "elasticemail.get_list": {
      input: {
        /**
         * Elastic Email contact list name.
         * @minLength 1
         */
        listName: string;
      };
      output: {
        /** Elastic Email list name. */
        ListName?: string;
        /** Elastic Email public list identifier, when present. */
        PublicListID?: string | null;
        /** Date and time string returned by Elastic Email, usually in YYYY-MM-DDThh:mm:ss format. */
        DateAdded?: string;
        /** Whether Elastic Email allows unsubscribing from this list. */
        AllowUnsubscribe?: boolean;
        [key: string]: unknown;
      };
    };
    /** List contacts available to the current Elastic Email API key. */
    "elasticemail.list_contacts": {
      input: {
        /**
         * Maximum number of returned items accepted by Elastic Email.
         * @minimum 0
         */
        limit?: number;
        /**
         * Number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
      };
      output: Array<{
        /** Contact email address. */
        Email?: string;
        /** Elastic Email contact status. */
        Status?: string;
        /** Contact first name. */
        FirstName?: string;
        /** Contact last name. */
        LastName?: string;
        /** Elastic Email custom contact fields returned for this contact. */
        CustomFields?: Record<string, string>;
        /** Consent data returned by Elastic Email. */
        Consent?: {
          /** IP address recorded for consent. */
          ConsentIP?: string;
          /** Date of consent returned by Elastic Email, when present. */
          ConsentDate?: string | null;
          /** Consent tracking value returned by Elastic Email. */
          ConsentTracking?: string;
          [key: string]: unknown;
        };
        /** Contact source returned by Elastic Email. */
        Source?: string;
        /** Additional contact source information. */
        SourceInfo?: string;
        /** Date and time string returned by Elastic Email, usually in YYYY-MM-DDThh:mm:ss format. */
        DateAdded?: string;
        /** Last contact update date returned by Elastic Email, when present. */
        DateUpdated?: string | null;
        /** Last contact status-change date returned by Elastic Email. */
        StatusChangeDate?: string | null;
        /** Contact activity object returned by Elastic Email, when present. */
        Activity?: Record<string, unknown>;
        [key: string]: unknown;
      }>;
    };
    /** List contacts that belong to an Elastic Email contact list. */
    "elasticemail.list_contacts_in_list": {
      input: {
        /**
         * Maximum number of returned items accepted by Elastic Email.
         * @minimum 0
         */
        limit?: number;
        /**
         * Number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * Elastic Email contact list name.
         * @minLength 1
         */
        listName: string;
      };
      output: Array<{
        /** Contact email address. */
        Email?: string;
        /** Elastic Email contact status. */
        Status?: string;
        /** Contact first name. */
        FirstName?: string;
        /** Contact last name. */
        LastName?: string;
        /** Elastic Email custom contact fields returned for this contact. */
        CustomFields?: Record<string, string>;
        /** Consent data returned by Elastic Email. */
        Consent?: {
          /** IP address recorded for consent. */
          ConsentIP?: string;
          /** Date of consent returned by Elastic Email, when present. */
          ConsentDate?: string | null;
          /** Consent tracking value returned by Elastic Email. */
          ConsentTracking?: string;
          [key: string]: unknown;
        };
        /** Contact source returned by Elastic Email. */
        Source?: string;
        /** Additional contact source information. */
        SourceInfo?: string;
        /** Date and time string returned by Elastic Email, usually in YYYY-MM-DDThh:mm:ss format. */
        DateAdded?: string;
        /** Last contact update date returned by Elastic Email, when present. */
        DateUpdated?: string | null;
        /** Last contact status-change date returned by Elastic Email. */
        StatusChangeDate?: string | null;
        /** Contact activity object returned by Elastic Email, when present. */
        Activity?: Record<string, unknown>;
        [key: string]: unknown;
      }>;
    };
    /** List Elastic Email contact lists. */
    "elasticemail.list_lists": {
      input: {
        /**
         * Maximum number of returned items accepted by Elastic Email.
         * @minimum 0
         */
        limit?: number;
        /**
         * Number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
      };
      output: Array<{
        /** Elastic Email list name. */
        ListName?: string;
        /** Elastic Email public list identifier, when present. */
        PublicListID?: string | null;
        /** Date and time string returned by Elastic Email, usually in YYYY-MM-DDThh:mm:ss format. */
        DateAdded?: string;
        /** Whether Elastic Email allows unsubscribing from this list. */
        AllowUnsubscribe?: boolean;
        [key: string]: unknown;
      }>;
    };
    /** Remove Elastic Email contacts from a contact list. */
    "elasticemail.remove_contacts_from_list": {
      input: {
        /**
         * Elastic Email contact list name.
         * @minLength 1
         */
        listName: string;
        /**
         * Contact email addresses accepted by Elastic Email list membership endpoints.
         * @minItems 1
         */
        emails: Array<string>;
      };
      output: {
        /** Whether Elastic Email accepted the operation. */
        success: boolean;
      };
    };
    /** Update an existing Elastic Email contact by email address. */
    "elasticemail.update_contact": {
      input: {
        /** Contact first name. */
        firstName?: string;
        /** Contact last name. */
        lastName?: string;
        /** Key-value collection of Elastic Email custom contact fields. */
        customFields?: Record<string, string>;
        /**
         * Proper email address accepted by Elastic Email.
         * @format email
         */
        email: string;
      };
      output: {
        /** Contact email address. */
        Email?: string;
        /** Elastic Email contact status. */
        Status?: string;
        /** Contact first name. */
        FirstName?: string;
        /** Contact last name. */
        LastName?: string;
        /** Elastic Email custom contact fields returned for this contact. */
        CustomFields?: Record<string, string>;
        /** Consent data returned by Elastic Email. */
        Consent?: {
          /** IP address recorded for consent. */
          ConsentIP?: string;
          /** Date of consent returned by Elastic Email, when present. */
          ConsentDate?: string | null;
          /** Consent tracking value returned by Elastic Email. */
          ConsentTracking?: string;
          [key: string]: unknown;
        };
        /** Contact source returned by Elastic Email. */
        Source?: string;
        /** Additional contact source information. */
        SourceInfo?: string;
        /** Date and time string returned by Elastic Email, usually in YYYY-MM-DDThh:mm:ss format. */
        DateAdded?: string;
        /** Last contact update date returned by Elastic Email, when present. */
        DateUpdated?: string | null;
        /** Last contact status-change date returned by Elastic Email. */
        StatusChangeDate?: string | null;
        /** Contact activity object returned by Elastic Email, when present. */
        Activity?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Update an existing Elastic Email contact list. */
    "elasticemail.update_list": {
      input: {
        /**
         * Elastic Email contact list name.
         * @minLength 1
         */
        listName: string;
        /**
         * New Elastic Email list name.
         * @minLength 1
         */
        newListName?: string;
        /** Whether Elastic Email should allow unsubscribing from this list. */
        allowUnsubscribe?: boolean;
      };
      output: {
        /** Elastic Email list name. */
        ListName?: string;
        /** Elastic Email public list identifier, when present. */
        PublicListID?: string | null;
        /** Date and time string returned by Elastic Email, usually in YYYY-MM-DDThh:mm:ss format. */
        DateAdded?: string;
        /** Whether Elastic Email allows unsubscribing from this list. */
        AllowUnsubscribe?: boolean;
        [key: string]: unknown;
      };
    };
  }
}
