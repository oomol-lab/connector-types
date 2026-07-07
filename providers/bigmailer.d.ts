import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a contact in a BigMailer brand. */
    "bigmailer.create_contact": {
      input: {
        /**
         * The BigMailer brand ID.
         * @format uuid
         */
        brandId: string;
        /** Whether BigMailer should validate email deliverability before adding the contact. */
        validate?: boolean;
        /**
         * The contact email address.
         * @minLength 1
         * @maxLength 100
         * @format email
         */
        email: string;
        /** Field values to save with the contact. Each name must match a BigMailer field tag name. */
        fieldValues?: Array<{
          /**
           * The BigMailer field tag name.
           * @minLength 1
           */
          name: string;
          /** The text value for this field. */
          string?: string;
          /** The integer value for this field. */
          integer?: number;
          /**
           * The date value for this field.
           * @format date
           */
          date?: string;
        }>;
        /** IDs of lists the contact should belong to. */
        listIds?: Array<string>;
        /** Whether to unsubscribe the contact from all future campaigns regardless of message type. */
        unsubscribeAll?: boolean;
        /** IDs of message types the contact should be unsubscribed from. */
        unsubscribeIds?: Array<string>;
      };
      output: {
        /** The affected BigMailer object ID. */
        id: string | null;
        /** The raw BigMailer mutation response. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a contact list in a BigMailer brand. */
    "bigmailer.create_list": {
      input: {
        /**
         * The BigMailer brand ID.
         * @format uuid
         */
        brandId: string;
        /**
         * The list name.
         * @minLength 1
         * @maxLength 50
         */
        name: string;
      };
      output: {
        /** The affected BigMailer object ID. */
        id: string | null;
        /** The raw BigMailer mutation response. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a BigMailer contact by ID or email address. */
    "bigmailer.delete_contact": {
      input: {
        /**
         * The BigMailer brand ID.
         * @format uuid
         */
        brandId: string;
        /**
         * The BigMailer contact ID or email address.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** The affected BigMailer object ID. */
        id: string | null;
        /** The raw BigMailer mutation response. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a BigMailer contact list without deleting its contacts. */
    "bigmailer.delete_list": {
      input: {
        /**
         * The BigMailer brand ID.
         * @format uuid
         */
        brandId: string;
        /**
         * The BigMailer list ID.
         * @format uuid
         */
        listId: string;
      };
      output: {
        /** The affected BigMailer object ID. */
        id: string | null;
        /** The raw BigMailer mutation response. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one BigMailer brand by ID. */
    "bigmailer.get_brand": {
      input: {
        /**
         * The BigMailer brand ID.
         * @format uuid
         */
        brandId: string;
      };
      output: {
        /** A BigMailer brand. */
        brand: {
          /** The brand ID. */
          id: string | null;
          /** The brand name. */
          name: string | null;
          /** The default From name used by campaigns in this brand. */
          fromName: string | null;
          /** The default From email used by campaigns in this brand. */
          fromEmail: string | null;
          /** The website URL associated with the brand. */
          url: string | null;
          /** The maximum number of contacts allowed in this brand. */
          contactLimit: number | null;
          /** The number of contacts in this brand. */
          numContacts: number | null;
          /** The Unix timestamp when the brand was created. */
          created: number | null;
          /** The BigMailer engagement metrics object. */
          engagement: Record<string, unknown> | null;
          /** The raw BigMailer brand object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one BigMailer contact by ID or email address. */
    "bigmailer.get_contact": {
      input: {
        /**
         * The BigMailer brand ID.
         * @format uuid
         */
        brandId: string;
        /**
         * The BigMailer contact ID or email address.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** A BigMailer contact. */
        contact: {
          /** The contact ID. */
          id: string | null;
          /** The brand ID that owns the contact. */
          brandId: string | null;
          /** The contact email address. */
          email: string | null;
          /** Field values associated with the contact. */
          fieldValues: Array<Record<string, unknown>>;
          /** IDs of lists the contact belongs to. */
          listIds: Array<string>;
          /** Whether the contact is unsubscribed from all future campaigns. */
          unsubscribeAll: boolean | null;
          /** IDs of message types the contact is unsubscribed from. */
          unsubscribeIds: Array<string>;
          /** The number of soft bounces for the contact. */
          numSoftBounces: number | null;
          /** The number of hard bounces for the contact. */
          numHardBounces: number | null;
          /** The number of complaints for the contact. */
          numComplaints: number | null;
          /** The Unix timestamp when the contact was created. */
          created: number | null;
          /** The raw BigMailer contact object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one BigMailer contact list by ID. */
    "bigmailer.get_list": {
      input: {
        /**
         * The BigMailer brand ID.
         * @format uuid
         */
        brandId: string;
        /**
         * The BigMailer list ID.
         * @format uuid
         */
        listId: string;
      };
      output: {
        /** A BigMailer contact list. */
        list: {
          /** The list ID. */
          id: string | null;
          /** The list name. */
          name: string | null;
          /** Whether this list represents all contacts in the brand. */
          all: boolean | null;
          /** The number of contacts in the list. */
          numContacts: number | null;
          /** The Unix timestamp when the list was created. */
          created: number | null;
          /** The BigMailer engagement metrics object. */
          engagement: Record<string, unknown> | null;
          /** The raw BigMailer list object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List brands in the BigMailer account. */
    "bigmailer.list_brands": {
      input: {
        /**
         * The maximum number of objects to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The pagination cursor returned by a previous BigMailer response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** BigMailer cursor pagination metadata. */
        page: {
          /** Whether BigMailer has more objects after this page. */
          hasMore: boolean | null;
          /** The cursor for the next page when BigMailer returns one. */
          cursor: string | null;
          /** The total number of matching items when BigMailer returns it. */
          total: number | null;
        };
        /** The BigMailer brands in the current page. */
        brands: Array<{
          /** The brand ID. */
          id: string | null;
          /** The brand name. */
          name: string | null;
          /** The default From name used by campaigns in this brand. */
          fromName: string | null;
          /** The default From email used by campaigns in this brand. */
          fromEmail: string | null;
          /** The website URL associated with the brand. */
          url: string | null;
          /** The maximum number of contacts allowed in this brand. */
          contactLimit: number | null;
          /** The number of contacts in this brand. */
          numContacts: number | null;
          /** The Unix timestamp when the brand was created. */
          created: number | null;
          /** The BigMailer engagement metrics object. */
          engagement: Record<string, unknown> | null;
          /** The raw BigMailer brand object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List contacts in a BigMailer brand, optionally filtered by list. */
    "bigmailer.list_contacts": {
      input: {
        /**
         * The BigMailer brand ID.
         * @format uuid
         */
        brandId: string;
        /**
         * The maximum number of objects to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The pagination cursor returned by a previous BigMailer response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The BigMailer list ID.
         * @format uuid
         */
        listId?: string;
      };
      output: {
        /** BigMailer cursor pagination metadata. */
        page: {
          /** Whether BigMailer has more objects after this page. */
          hasMore: boolean | null;
          /** The cursor for the next page when BigMailer returns one. */
          cursor: string | null;
          /** The total number of matching items when BigMailer returns it. */
          total: number | null;
        };
        /** The BigMailer contacts in the current page. */
        contacts: Array<{
          /** The contact ID. */
          id: string | null;
          /** The brand ID that owns the contact. */
          brandId: string | null;
          /** The contact email address. */
          email: string | null;
          /** Field values associated with the contact. */
          fieldValues: Array<Record<string, unknown>>;
          /** IDs of lists the contact belongs to. */
          listIds: Array<string>;
          /** Whether the contact is unsubscribed from all future campaigns. */
          unsubscribeAll: boolean | null;
          /** IDs of message types the contact is unsubscribed from. */
          unsubscribeIds: Array<string>;
          /** The number of soft bounces for the contact. */
          numSoftBounces: number | null;
          /** The number of hard bounces for the contact. */
          numHardBounces: number | null;
          /** The number of complaints for the contact. */
          numComplaints: number | null;
          /** The Unix timestamp when the contact was created. */
          created: number | null;
          /** The raw BigMailer contact object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List contact lists in a BigMailer brand. */
    "bigmailer.list_lists": {
      input: {
        /**
         * The BigMailer brand ID.
         * @format uuid
         */
        brandId: string;
        /**
         * The maximum number of objects to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The pagination cursor returned by a previous BigMailer response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** BigMailer cursor pagination metadata. */
        page: {
          /** Whether BigMailer has more objects after this page. */
          hasMore: boolean | null;
          /** The cursor for the next page when BigMailer returns one. */
          cursor: string | null;
          /** The total number of matching items when BigMailer returns it. */
          total: number | null;
        };
        /** The BigMailer lists in the current page. */
        lists: Array<{
          /** The list ID. */
          id: string | null;
          /** The list name. */
          name: string | null;
          /** Whether this list represents all contacts in the brand. */
          all: boolean | null;
          /** The number of contacts in the list. */
          numContacts: number | null;
          /** The Unix timestamp when the list was created. */
          created: number | null;
          /** The BigMailer engagement metrics object. */
          engagement: Record<string, unknown> | null;
          /** The raw BigMailer list object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Update a BigMailer contact by ID or email address. */
    "bigmailer.update_contact": {
      input: {
        /**
         * The BigMailer brand ID.
         * @format uuid
         */
        brandId: string;
        /**
         * The BigMailer contact ID or email address.
         * @minLength 1
         */
        contactId: string;
        /** How BigMailer should apply the supplied values. */
        fieldValuesOp?: "add" | "remove" | "replace";
        /** How BigMailer should apply the supplied values. */
        listIdsOp?: "add" | "remove" | "replace";
        /** How BigMailer should apply the supplied values. */
        unsubscribeIdsOp?: "add" | "remove" | "replace";
        /**
         * The contact email address.
         * @minLength 1
         * @maxLength 100
         * @format email
         */
        email?: string;
        /** Field values to save with the contact. Each name must match a BigMailer field tag name. */
        fieldValues?: Array<{
          /**
           * The BigMailer field tag name.
           * @minLength 1
           */
          name: string;
          /** The text value for this field. */
          string?: string;
          /** The integer value for this field. */
          integer?: number;
          /**
           * The date value for this field.
           * @format date
           */
          date?: string;
        }>;
        /** IDs of lists the contact should belong to. */
        listIds?: Array<string>;
        /** Whether to unsubscribe the contact from all future campaigns regardless of message type. */
        unsubscribeAll?: boolean;
        /** IDs of message types the contact should be unsubscribed from. */
        unsubscribeIds?: Array<string>;
      };
      output: {
        /** The affected BigMailer object ID. */
        id: string | null;
        /** The raw BigMailer mutation response. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a BigMailer contact list name. */
    "bigmailer.update_list": {
      input: {
        /**
         * The BigMailer brand ID.
         * @format uuid
         */
        brandId: string;
        /**
         * The BigMailer list ID.
         * @format uuid
         */
        listId: string;
        /**
         * The new list name.
         * @minLength 1
         * @maxLength 50
         */
        name: string;
      };
      output: {
        /** The affected BigMailer object ID. */
        id: string | null;
        /** The raw BigMailer mutation response. */
        raw: Record<string, unknown>;
      };
    };
    /** Create or update a BigMailer contact by email address. */
    "bigmailer.upsert_contact": {
      input: {
        /**
         * The BigMailer brand ID.
         * @format uuid
         */
        brandId: string;
        /** Whether BigMailer should validate email deliverability before adding the contact. */
        validate?: boolean;
        /**
         * The contact email address.
         * @minLength 1
         * @maxLength 100
         * @format email
         */
        email: string;
        /** Field values to save with the contact. Each name must match a BigMailer field tag name. */
        fieldValues?: Array<{
          /**
           * The BigMailer field tag name.
           * @minLength 1
           */
          name: string;
          /** The text value for this field. */
          string?: string;
          /** The integer value for this field. */
          integer?: number;
          /**
           * The date value for this field.
           * @format date
           */
          date?: string;
        }>;
        /** IDs of lists the contact should belong to. */
        listIds?: Array<string>;
        /** Whether to unsubscribe the contact from all future campaigns regardless of message type. */
        unsubscribeAll?: boolean;
        /** IDs of message types the contact should be unsubscribed from. */
        unsubscribeIds?: Array<string>;
      };
      output: {
        /** The affected BigMailer object ID. */
        id: string | null;
        /** The raw BigMailer mutation response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
