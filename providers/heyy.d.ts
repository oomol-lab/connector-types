import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Heyy contact attribute definition. */
    "heyy.create_attribute": {
      input: {
        /**
         * The Heyy attribute name.
         * @minLength 1
         */
        name: string;
        /**
         * The Heyy attribute external ID.
         * @minLength 1
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        externalId: string;
        /**
         * The optional Heyy attribute description.
         * @minLength 1
         */
        description?: string | null;
        /** Whether the attribute is visible in quick edit. */
        isVisibleQuickEdit?: boolean;
        /** Whether the attribute is visible in the contacts table. */
        isVisibleContactsTable?: boolean;
        /** Whether the attribute is visible while creating contacts. */
        isVisibleContactCreate?: boolean;
      };
      output: {
        /** A Heyy contact attribute definition. */
        attribute: {
          /** The Heyy attribute ID. */
          id: string;
          /** The Heyy attribute name. */
          name: string;
          /** The Heyy attribute type. */
          type: string;
          /** The Heyy attribute external ID. */
          externalId?: string;
          /** Whether the attribute is visible in quick edit. */
          isVisibleQuickEdit: boolean;
          /** Whether the attribute is visible in the contacts table. */
          isVisibleContactsTable: boolean;
          /** Whether the attribute is visible while creating contacts. */
          isVisibleContactCreate: boolean;
          /** The Heyy attribute description. */
          description?: string;
          /** The attribute creation timestamp. */
          createdAt: string;
          /** The attribute update timestamp. */
          updatedAt: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Heyy contact with profile fields, labels, and custom attributes. */
    "heyy.create_contact": {
      input: {
        /**
         * The contact first name.
         * @minLength 1
         */
        firstName?: string | null;
        /**
         * The contact last name.
         * @minLength 1
         */
        lastName?: string | null;
        /**
         * The contact email address.
         * @format email
         */
        email?: string | null;
        /**
         * The contact phone number.
         * @minLength 1
         */
        phoneNumber?: string | null;
        /** Labels to assign to the contact. */
        labels?: Array<{
          /**
           * The Heyy label name.
           * @minLength 1
           */
          name: string;
        }>;
        /** Custom attribute values to assign to the contact. */
        attributes?: Array<{
          /**
           * The Heyy attribute external ID.
           * @minLength 1
           * @pattern ^[A-Za-z][A-Za-z0-9_]*$
           */
          externalId: string;
          /**
           * The Heyy attribute value.
           * @minLength 1
           */
          value: string;
        }>;
      };
      output: {
        /** A Heyy contact. */
        contact: {
          /** The Heyy contact ID. */
          id: string;
          /** The contact first name. */
          firstName?: string;
          /** The contact last name. */
          lastName?: string;
          /** The contact phone number. */
          phoneNumber?: string | null;
          /** The contact email address. */
          email?: string | null;
          /** The Heyy labels attached to the contact. */
          labels?: Array<string>;
          /** The Heyy contact custom attribute values. */
          attributes?: Array<{
            /** The Heyy contact attribute name. */
            name?: string;
            /** The Heyy contact attribute value. */
            value?: string;
            [key: string]: unknown;
          }>;
          /** The contact creation timestamp. */
          createdAt: string;
          /** The contact update timestamp. */
          updatedAt: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Heyy label. */
    "heyy.create_label": {
      input: {
        /**
         * The Heyy label name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A Heyy label. */
        label: {
          /** The Heyy label ID. */
          id: string;
          /** The Heyy label name. */
          name: string;
          /** The Heyy label color. */
          color: string;
          /** The label creation timestamp. */
          createdAt: string;
          /** The label update timestamp. */
          updatedAt: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Heyy contact by ID. */
    "heyy.get_contact": {
      input: {
        /**
         * The Heyy contact ID.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** A Heyy contact. */
        contact: {
          /** The Heyy contact ID. */
          id: string;
          /** The contact first name. */
          firstName?: string;
          /** The contact last name. */
          lastName?: string;
          /** The contact phone number. */
          phoneNumber?: string | null;
          /** The contact email address. */
          email?: string | null;
          /** The Heyy labels attached to the contact. */
          labels?: Array<string>;
          /** The Heyy contact custom attribute values. */
          attributes?: Array<{
            /** The Heyy contact attribute name. */
            name?: string;
            /** The Heyy contact attribute value. */
            value?: string;
            [key: string]: unknown;
          }>;
          /** The contact creation timestamp. */
          createdAt: string;
          /** The contact update timestamp. */
          updatedAt: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Heyy contact attribute definitions. */
    "heyy.list_attributes": {
      input: Record<string, never>;
      output: {
        /** The Heyy contact attributes returned by the API. */
        attributes: Array<{
          /** The Heyy attribute ID. */
          id: string;
          /** The Heyy attribute name. */
          name: string;
          /** The Heyy attribute type. */
          type: string;
          /** The Heyy attribute external ID. */
          externalId?: string;
          /** Whether the attribute is visible in quick edit. */
          isVisibleQuickEdit: boolean;
          /** Whether the attribute is visible in the contacts table. */
          isVisibleContactsTable: boolean;
          /** Whether the attribute is visible while creating contacts. */
          isVisibleContactCreate: boolean;
          /** The Heyy attribute description. */
          description?: string;
          /** The attribute creation timestamp. */
          createdAt: string;
          /** The attribute update timestamp. */
          updatedAt: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Heyy communication channels. */
    "heyy.list_channels": {
      input: Record<string, never>;
      output: {
        /** The Heyy channels returned by the API. */
        channels: Array<{
          /** The Heyy channel ID. */
          id: string;
          /** The Heyy channel name. */
          name: string;
          /** The Heyy channel type. */
          type: string;
          /** The Heyy channel status. */
          status: string;
          /** Provider-specific channel metadata. */
          vendorDetails?: Record<string, unknown>;
          /** The channel creation timestamp. */
          createdAt: string;
          /** The channel update timestamp. */
          updatedAt: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Heyy contacts with optional pagination, sorting, and search. */
    "heyy.list_contacts": {
      input: {
        /**
         * The Heyy contacts page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of Heyy contacts to return.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** The Heyy contact field to sort by. */
        sortBy?: "firstName" | "lastName" | "phoneNumber" | "createdAt" | "updatedAt";
        /** The Heyy contact sort order. */
        order?: "ASC" | "DESC";
        /**
         * Search text used to filter Heyy contacts.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** The Heyy contacts returned by the API. */
        contacts: Array<{
          /** The Heyy contact ID. */
          id: string;
          /** The contact first name. */
          firstName?: string;
          /** The contact last name. */
          lastName?: string;
          /** The contact phone number. */
          phoneNumber?: string | null;
          /** The contact email address. */
          email?: string | null;
          /** The Heyy labels attached to the contact. */
          labels?: Array<string>;
          /** The Heyy contact custom attribute values. */
          attributes?: Array<{
            /** The Heyy contact attribute name. */
            name?: string;
            /** The Heyy contact attribute value. */
            value?: string;
            [key: string]: unknown;
          }>;
          /** The contact creation timestamp. */
          createdAt: string;
          /** The contact update timestamp. */
          updatedAt: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Heyy labels. */
    "heyy.list_labels": {
      input: Record<string, never>;
      output: {
        /** The Heyy labels returned by the API. */
        labels: Array<{
          /** The Heyy label ID. */
          id: string;
          /** The Heyy label name. */
          name: string;
          /** The Heyy label color. */
          color: string;
          /** The label creation timestamp. */
          createdAt: string;
          /** The label update timestamp. */
          updatedAt: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update a Heyy contact's profile fields, labels, or custom attributes. */
    "heyy.update_contact": {
      input: {
        /**
         * The Heyy contact ID.
         * @minLength 1
         */
        contactId: string;
        /**
         * The contact first name.
         * @minLength 1
         */
        firstName?: string | null;
        /**
         * The contact last name.
         * @minLength 1
         */
        lastName?: string | null;
        /** Labels to assign to the contact. */
        labels?: Array<{
          /**
           * The Heyy label name.
           * @minLength 1
           */
          name: string;
        }>;
        /** Custom attribute values to assign to the contact. */
        attributes?: Array<{
          /**
           * The Heyy attribute external ID.
           * @minLength 1
           * @pattern ^[A-Za-z][A-Za-z0-9_]*$
           */
          externalId: string;
          /**
           * The Heyy attribute value.
           * @minLength 1
           */
          value: string;
        }>;
      };
      output: {
        /** A Heyy contact. */
        contact: {
          /** The Heyy contact ID. */
          id: string;
          /** The contact first name. */
          firstName?: string;
          /** The contact last name. */
          lastName?: string;
          /** The contact phone number. */
          phoneNumber?: string | null;
          /** The contact email address. */
          email?: string | null;
          /** The Heyy labels attached to the contact. */
          labels?: Array<string>;
          /** The Heyy contact custom attribute values. */
          attributes?: Array<{
            /** The Heyy contact attribute name. */
            name?: string;
            /** The Heyy contact attribute value. */
            value?: string;
            [key: string]: unknown;
          }>;
          /** The contact creation timestamp. */
          createdAt: string;
          /** The contact update timestamp. */
          updatedAt: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
