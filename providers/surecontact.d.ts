import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add one or more SureContact contacts to a list. */
    "surecontact.add_contacts_to_list": {
      input: {
        /**
         * The SureContact list UUID.
         * @minLength 1
         */
        listUuid: string;
        /**
         * SureContact contact UUIDs to add or remove.
         * @minItems 1
         */
        contactUuids: Array<string>;
      };
      output: {
        /** Whether SureContact reported the operation as successful. */
        success: boolean;
        /** SureContact response message. */
        message: string | null;
        /** Raw SureContact mutation response. */
        raw: unknown;
      };
    };
    /** Attach one or more SureContact lists to a contact. */
    "surecontact.attach_contact_lists": {
      input: {
        /**
         * The SureContact contact UUID.
         * @minLength 1
         */
        contactUuid: string;
        /**
         * SureContact resource UUIDs to attach.
         * @minItems 1
         */
        uuids: Array<string>;
      };
      output: {
        /** Whether SureContact reported the operation as successful. */
        success: boolean;
        /** SureContact response message. */
        message: string | null;
        /** Raw SureContact mutation response. */
        raw: unknown;
      };
    };
    /** Attach one or more SureContact tags to a contact. */
    "surecontact.attach_contact_tags": {
      input: {
        /**
         * The SureContact contact UUID.
         * @minLength 1
         */
        contactUuid: string;
        /**
         * SureContact resource UUIDs to attach.
         * @minItems 1
         */
        uuids: Array<string>;
      };
      output: {
        /** Whether SureContact reported the operation as successful. */
        success: boolean;
        /** SureContact response message. */
        message: string | null;
        /** Raw SureContact mutation response. */
        raw: unknown;
      };
    };
    /** Create a SureContact contact and optionally attach lists or tags. */
    "surecontact.create_contact": {
      input: {
        /**
         * Contact email address.
         * @format email
         */
        email: string;
        /**
         * Contact first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * Contact last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * Contact phone number.
         * @minLength 1
         */
        phone?: string;
        /** Contact subscription status. */
        status?: "subscribed" | "unsubscribed" | "pending";
        /** Custom contact fields keyed by SureContact field identifier. */
        customFields?: Record<string, unknown>;
        /**
         * SureContact list UUIDs to attach to the contact.
         * @minItems 1
         */
        listUuids?: Array<string>;
        /**
         * SureContact tag UUIDs to attach to the contact.
         * @minItems 1
         */
        tagUuids?: Array<string>;
      };
      output: {
        /** A SureContact contact record. */
        contact: {
          /** SureContact contact UUID. */
          uuid?: string;
          /** Contact email address. */
          email?: string | null;
          /** Contact first name. */
          first_name?: string | null;
          /** Contact last name. */
          last_name?: string | null;
          /** Contact subscription status. */
          status?: string | null;
          [key: string]: unknown;
        };
        /** Raw SureContact contact response. */
        raw: unknown;
      };
    };
    /** Create a SureContact list. */
    "surecontact.create_list": {
      input: {
        /**
         * List name.
         * @minLength 1
         */
        name: string;
        /**
         * List description.
         * @minLength 1
         */
        description?: string;
      };
      output: {
        /** A SureContact list record. */
        list: {
          /** SureContact list UUID. */
          uuid?: string;
          /** List name. */
          name?: string;
          /** List type returned by SureContact. */
          type?: string | null;
          /** Number of contacts in the list. */
          contacts_count?: number | null;
          [key: string]: unknown;
        };
        /** Raw SureContact list response. */
        raw: unknown;
      };
    };
    /** Create a SureContact tag. */
    "surecontact.create_tag": {
      input: {
        /**
         * Tag name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A SureContact tag record. */
        tag: {
          /** SureContact tag UUID. */
          uuid?: string;
          /** Tag name. */
          name?: string;
          /** Number of contacts assigned to the tag. */
          contacts_count?: number | null;
          [key: string]: unknown;
        };
        /** Raw SureContact tag response. */
        raw: unknown;
      };
    };
    /** Delete a SureContact contact by UUID. */
    "surecontact.delete_contact": {
      input: {
        /**
         * The SureContact contact UUID.
         * @minLength 1
         */
        uuid: string;
      };
      output: {
        /** Whether SureContact reported the operation as successful. */
        success: boolean;
        /** SureContact response message. */
        message: string | null;
        /** Raw SureContact mutation response. */
        raw: unknown;
      };
    };
    /** Delete a SureContact list by UUID. */
    "surecontact.delete_list": {
      input: {
        /**
         * The SureContact list UUID.
         * @minLength 1
         */
        uuid: string;
      };
      output: {
        /** Whether SureContact reported the operation as successful. */
        success: boolean;
        /** SureContact response message. */
        message: string | null;
        /** Raw SureContact mutation response. */
        raw: unknown;
      };
    };
    /** Delete a SureContact tag by UUID. */
    "surecontact.delete_tag": {
      input: {
        /**
         * The SureContact tag UUID.
         * @minLength 1
         */
        uuid: string;
      };
      output: {
        /** Whether SureContact reported the operation as successful. */
        success: boolean;
        /** SureContact response message. */
        message: string | null;
        /** Raw SureContact mutation response. */
        raw: unknown;
      };
    };
    /** Detach one or more SureContact lists from a contact. */
    "surecontact.detach_contact_lists": {
      input: {
        /**
         * The SureContact contact UUID.
         * @minLength 1
         */
        contactUuid: string;
        /**
         * SureContact resource UUIDs to attach.
         * @minItems 1
         */
        uuids: Array<string>;
      };
      output: {
        /** Whether SureContact reported the operation as successful. */
        success: boolean;
        /** SureContact response message. */
        message: string | null;
        /** Raw SureContact mutation response. */
        raw: unknown;
      };
    };
    /** Detach one or more SureContact tags from a contact. */
    "surecontact.detach_contact_tags": {
      input: {
        /**
         * The SureContact contact UUID.
         * @minLength 1
         */
        contactUuid: string;
        /**
         * SureContact resource UUIDs to attach.
         * @minItems 1
         */
        uuids: Array<string>;
      };
      output: {
        /** Whether SureContact reported the operation as successful. */
        success: boolean;
        /** SureContact response message. */
        message: string | null;
        /** Raw SureContact mutation response. */
        raw: unknown;
      };
    };
    /** Retrieve one SureContact contact by UUID. */
    "surecontact.get_contact": {
      input: {
        /**
         * The SureContact contact UUID.
         * @minLength 1
         */
        uuid: string;
      };
      output: {
        /** A SureContact contact record. */
        contact: {
          /** SureContact contact UUID. */
          uuid?: string;
          /** Contact email address. */
          email?: string | null;
          /** Contact first name. */
          first_name?: string | null;
          /** Contact last name. */
          last_name?: string | null;
          /** Contact subscription status. */
          status?: string | null;
          [key: string]: unknown;
        };
        /** Raw SureContact contact response. */
        raw: unknown;
      };
    };
    /** Retrieve one SureContact contact by email address. */
    "surecontact.get_contact_by_email": {
      input: {
        /**
         * The contact email address.
         * @format email
         */
        email: string;
      };
      output: {
        /** A SureContact contact record. */
        contact: {
          /** SureContact contact UUID. */
          uuid?: string;
          /** Contact email address. */
          email?: string | null;
          /** Contact first name. */
          first_name?: string | null;
          /** Contact last name. */
          last_name?: string | null;
          /** Contact subscription status. */
          status?: string | null;
          [key: string]: unknown;
        };
        /** Raw SureContact contact response. */
        raw: unknown;
      };
    };
    /** Retrieve one SureContact list by UUID. */
    "surecontact.get_list": {
      input: {
        /**
         * The SureContact list UUID.
         * @minLength 1
         */
        uuid: string;
      };
      output: {
        /** A SureContact list record. */
        list: {
          /** SureContact list UUID. */
          uuid?: string;
          /** List name. */
          name?: string;
          /** List type returned by SureContact. */
          type?: string | null;
          /** Number of contacts in the list. */
          contacts_count?: number | null;
          [key: string]: unknown;
        };
        /** Raw SureContact list response. */
        raw: unknown;
      };
    };
    /** Retrieve one SureContact tag by UUID. */
    "surecontact.get_tag": {
      input: {
        /**
         * The SureContact tag UUID.
         * @minLength 1
         */
        uuid: string;
      };
      output: {
        /** A SureContact tag record. */
        tag: {
          /** SureContact tag UUID. */
          uuid?: string;
          /** Tag name. */
          name?: string;
          /** Number of contacts assigned to the tag. */
          contacts_count?: number | null;
          [key: string]: unknown;
        };
        /** Raw SureContact tag response. */
        raw: unknown;
      };
    };
    /** List SureContact contacts with optional search, status, list, tag, and pagination filters. */
    "surecontact.list_contacts": {
      input: {
        /**
         * Page number to request from SureContact.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of records to request per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * Search term used to filter contacts.
         * @minLength 1
         */
        search?: string;
        /** Contact status filter. */
        status?: "subscribed" | "unsubscribed" | "pending";
        /**
         * Return contacts attached to this SureContact list UUID.
         * @minLength 1
         */
        listUuid?: string;
        /**
         * Return contacts attached to this SureContact tag UUID.
         * @minLength 1
         */
        tagUuid?: string;
      };
      output: {
        /** Contacts returned by SureContact. */
        contacts: Array<{
          /** SureContact contact UUID. */
          uuid?: string;
          /** Contact email address. */
          email?: string | null;
          /** Contact first name. */
          first_name?: string | null;
          /** Contact last name. */
          last_name?: string | null;
          /** Contact subscription status. */
          status?: string | null;
          [key: string]: unknown;
        }>;
        /** SureContact pagination metadata. */
        pagination: {
          /** Current page number returned by SureContact. */
          current_page?: number;
          /** Number of records per page returned by SureContact. */
          per_page?: number;
          /** Total record count returned by SureContact. */
          total?: number;
          /** Last page number returned by SureContact. */
          last_page?: number;
          [key: string]: unknown;
        } | null;
        /** Raw SureContact contacts response. */
        raw: unknown;
      };
    };
    /** List SureContact lists with optional search and pagination filters. */
    "surecontact.list_lists": {
      input: {
        /**
         * Page number to request from SureContact.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of records to request per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * Search term used to filter resources.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** Lists returned by SureContact. */
        lists: Array<{
          /** SureContact list UUID. */
          uuid?: string;
          /** List name. */
          name?: string;
          /** List type returned by SureContact. */
          type?: string | null;
          /** Number of contacts in the list. */
          contacts_count?: number | null;
          [key: string]: unknown;
        }>;
        /** SureContact pagination metadata. */
        pagination: {
          /** Current page number returned by SureContact. */
          current_page?: number;
          /** Number of records per page returned by SureContact. */
          per_page?: number;
          /** Total record count returned by SureContact. */
          total?: number;
          /** Last page number returned by SureContact. */
          last_page?: number;
          [key: string]: unknown;
        } | null;
        /** Raw SureContact lists response. */
        raw: unknown;
      };
    };
    /** List SureContact tags with optional search and pagination filters. */
    "surecontact.list_tags": {
      input: {
        /**
         * Page number to request from SureContact.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of records to request per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * Search term used to filter resources.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** Tags returned by SureContact. */
        tags: Array<{
          /** SureContact tag UUID. */
          uuid?: string;
          /** Tag name. */
          name?: string;
          /** Number of contacts assigned to the tag. */
          contacts_count?: number | null;
          [key: string]: unknown;
        }>;
        /** SureContact pagination metadata. */
        pagination: {
          /** Current page number returned by SureContact. */
          current_page?: number;
          /** Number of records per page returned by SureContact. */
          per_page?: number;
          /** Total record count returned by SureContact. */
          total?: number;
          /** Last page number returned by SureContact. */
          last_page?: number;
          [key: string]: unknown;
        } | null;
        /** Raw SureContact tags response. */
        raw: unknown;
      };
    };
    /** Remove one or more SureContact contacts from a list. */
    "surecontact.remove_contacts_from_list": {
      input: {
        /**
         * The SureContact list UUID.
         * @minLength 1
         */
        listUuid: string;
        /**
         * SureContact contact UUIDs to add or remove.
         * @minItems 1
         */
        contactUuids: Array<string>;
      };
      output: {
        /** Whether SureContact reported the operation as successful. */
        success: boolean;
        /** SureContact response message. */
        message: string | null;
        /** Raw SureContact mutation response. */
        raw: unknown;
      };
    };
    /** Update a SureContact contact by UUID. */
    "surecontact.update_contact": {
      input: {
        /**
         * The SureContact contact UUID to update.
         * @minLength 1
         */
        contactUuid: string;
        /**
         * Contact email address.
         * @format email
         */
        email?: string;
        /**
         * Contact first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * Contact last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * Contact phone number.
         * @minLength 1
         */
        phone?: string;
        /** Contact subscription status. */
        status?: "subscribed" | "unsubscribed" | "pending";
        /** Custom contact fields keyed by SureContact field identifier. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** A SureContact contact record. */
        contact: {
          /** SureContact contact UUID. */
          uuid?: string;
          /** Contact email address. */
          email?: string | null;
          /** Contact first name. */
          first_name?: string | null;
          /** Contact last name. */
          last_name?: string | null;
          /** Contact subscription status. */
          status?: string | null;
          [key: string]: unknown;
        };
        /** Raw SureContact contact response. */
        raw: unknown;
      };
    };
    /** Update a SureContact list by UUID. */
    "surecontact.update_list": {
      input: {
        /**
         * The SureContact list UUID to update.
         * @minLength 1
         */
        listUuid: string;
        /**
         * List name.
         * @minLength 1
         */
        name?: string;
        /**
         * List description.
         * @minLength 1
         */
        description?: string;
      };
      output: {
        /** A SureContact list record. */
        list: {
          /** SureContact list UUID. */
          uuid?: string;
          /** List name. */
          name?: string;
          /** List type returned by SureContact. */
          type?: string | null;
          /** Number of contacts in the list. */
          contacts_count?: number | null;
          [key: string]: unknown;
        };
        /** Raw SureContact list response. */
        raw: unknown;
      };
    };
    /** Update a SureContact tag by UUID. */
    "surecontact.update_tag": {
      input: {
        /**
         * The SureContact tag UUID to update.
         * @minLength 1
         */
        tagUuid: string;
        /**
         * Tag name.
         * @minLength 1
         */
        name?: string;
      };
      output: {
        /** A SureContact tag record. */
        tag: {
          /** SureContact tag UUID. */
          uuid?: string;
          /** Tag name. */
          name?: string;
          /** Number of contacts assigned to the tag. */
          contacts_count?: number | null;
          [key: string]: unknown;
        };
        /** Raw SureContact tag response. */
        raw: unknown;
      };
    };
    /** Create or update a SureContact contact by email address. */
    "surecontact.upsert_contact": {
      input: {
        /**
         * Contact email address.
         * @format email
         */
        email: string;
        /**
         * Contact first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * Contact last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * Contact phone number.
         * @minLength 1
         */
        phone?: string;
        /** Contact subscription status. */
        status?: "subscribed" | "unsubscribed" | "pending";
        /** Custom contact fields keyed by SureContact field identifier. */
        customFields?: Record<string, unknown>;
        /**
         * SureContact list UUIDs to attach to the contact.
         * @minItems 1
         */
        listUuids?: Array<string>;
        /**
         * SureContact tag UUIDs to attach to the contact.
         * @minItems 1
         */
        tagUuids?: Array<string>;
      };
      output: {
        /** A SureContact contact record. */
        contact: {
          /** SureContact contact UUID. */
          uuid?: string;
          /** Contact email address. */
          email?: string | null;
          /** Contact first name. */
          first_name?: string | null;
          /** Contact last name. */
          last_name?: string | null;
          /** Contact subscription status. */
          status?: string | null;
          [key: string]: unknown;
        };
        /** Raw SureContact contact response. */
        raw: unknown;
      };
    };
  }
}
