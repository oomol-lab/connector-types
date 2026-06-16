import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new sevdesk contact using the official contact payload fields. */
    "sevdesk.create_contact": {
      input: {
        /** The organization name. When set, sevdesk treats the contact as an organization. */
        name?: string | null;
        /** The sevdesk contact status code, such as 100, 500, or 1000. */
        status?: number | null;
        /** The customer number to store on the contact. */
        customerNumber?: string | null;
        /** A sevdesk contact reference object. */
        parent?: {
          /**
           * The referenced sevdesk contact identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The sevdesk model name for a contact reference. */
          objectName: "Contact";
        } | null;
        /** The first name for a person contact. */
        surename?: string | null;
        /** The last name for a person contact. */
        familyname?: string | null;
        /** The non-academic title for the contact. */
        titel?: string | null;
        /** A sevdesk contact category reference object. */
        category: {
          /**
           * The referenced sevdesk category identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The sevdesk model name for a category reference. */
          objectName: "Category";
        };
        /** The free-form description stored on the contact. */
        description?: string | null;
        /** The academic title for the contact. */
        academicTitle?: string | null;
        /** The gender value for the contact. */
        gender?: string | null;
        /** The second name for a person contact. */
        name2?: string | null;
        /**
         * The birthday for a person contact in YYYY-MM-DD format.
         * @format date
         */
        birthday?: string | null;
        /** The VAT number stored on the contact. */
        vatNumber?: string | null;
        /** The bank account number (IBAN) stored on the contact. */
        bankAccount?: string | null;
        /** The bank number stored on the contact. */
        bankNumber?: string | null;
        /** The default cashback time in days for this contact. */
        defaultCashbackTime?: number | null;
        /** The default cashback percent for this contact. */
        defaultCashbackPercent?: number | null;
        /** The default time to pay in days for this contact. */
        defaultTimeToPay?: number | null;
        /** The tax number stored on the contact. */
        taxNumber?: string | null;
        /** The tax office stored on the contact. */
        taxOffice?: string | null;
        /** Whether the contact is exempt from VAT. */
        exemptVat?: boolean | null;
        /** The default discount amount applied to this contact. */
        defaultDiscountAmount?: number | null;
        /** Whether the default discount amount is interpreted as a percentage. */
        defaultDiscountPercentage?: boolean | null;
        /** The buyer reference stored on the contact. */
        buyerReference?: string | null;
        /** Whether the contact represents a government agency. */
        governmentAgency?: boolean | null;
      };
      output: {
        /** A sevdesk contact object. */
        contact: {
          /** The sevdesk contact identifier. */
          id?: string;
          /** The sevdesk model name for the contact. */
          objectName?: string;
          /** The organization name when the contact is a company. */
          name?: string | null;
          /** The sevdesk status code returned for the contact. */
          status?: string | null;
          /** The customer number returned by sevdesk. */
          customerNumber?: string | null;
          /** The first name returned by sevdesk. */
          surename?: string | null;
          /** The last name returned by sevdesk. */
          familyname?: string | null;
          /** The non-academic title returned by sevdesk. */
          titel?: string | null;
          /** A sevdesk contact category reference object. */
          category?: {
            /** The referenced sevdesk category identifier. */
            id: string;
            /** The sevdesk model name for the category reference. */
            objectName: string;
          } | null;
          /** A sevdesk contact reference object. */
          parent?: {
            /** The referenced sevdesk contact identifier. */
            id: string;
            /** The sevdesk model name for the contact reference. */
            objectName: string;
          } | null;
          /** The description stored on the contact. */
          description?: string | null;
          /** The academic title stored on the contact. */
          academicTitle?: string | null;
          /** The gender value stored on the contact. */
          gender?: string | null;
          /** The secondary name stored on the contact. */
          name2?: string | null;
          /** The birthday stored on the contact. */
          birthday?: string | null;
          /** The VAT number stored on the contact. */
          vatNumber?: string | null;
          /** The bank account stored on the contact. */
          bankAccount?: string | null;
          /** The bank number stored on the contact. */
          bankNumber?: string | null;
          /** The default cashback time returned by sevdesk. */
          defaultCashbackTime?: string | null;
          /** The default cashback percentage returned by sevdesk. */
          defaultCashbackPercent?: string | null;
          /** The default payment time returned by sevdesk. */
          defaultTimeToPay?: string | null;
          /** The tax number stored on the contact. */
          taxNumber?: string | null;
          /** The tax office stored on the contact. */
          taxOffice?: string | null;
          /** The VAT exemption flag returned by sevdesk. */
          exemptVat?: string | null;
          /** The default discount amount returned by sevdesk. */
          defaultDiscountAmount?: string | null;
          /** The default discount percentage flag returned by sevdesk. */
          defaultDiscountPercentage?: string | null;
          /** The buyer reference stored on the contact. */
          buyerReference?: string | null;
          /** The government agency flag returned by sevdesk. */
          governmentAgency?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a sevdesk contact by its identifier. */
    "sevdesk.delete_contact": {
      input: {
        /**
         * The sevdesk contact identifier.
         * @exclusiveMinimum 0
         */
        contactId: number;
      };
      output: {
        /** Whether the requested contact was deleted successfully. */
        deleted: boolean;
      };
    };
    /** Get one sevdesk contact by its identifier. */
    "sevdesk.get_contact": {
      input: {
        /**
         * The sevdesk contact identifier.
         * @exclusiveMinimum 0
         */
        contactId: number;
        /**
         * Nested resource names to expand through sevdesk's embed query parameter.
         * @minItems 1
         */
        embed?: Array<string>;
      };
      output: {
        /** A sevdesk contact object. */
        contact: {
          /** The sevdesk contact identifier. */
          id?: string;
          /** The sevdesk model name for the contact. */
          objectName?: string;
          /** The organization name when the contact is a company. */
          name?: string | null;
          /** The sevdesk status code returned for the contact. */
          status?: string | null;
          /** The customer number returned by sevdesk. */
          customerNumber?: string | null;
          /** The first name returned by sevdesk. */
          surename?: string | null;
          /** The last name returned by sevdesk. */
          familyname?: string | null;
          /** The non-academic title returned by sevdesk. */
          titel?: string | null;
          /** A sevdesk contact category reference object. */
          category?: {
            /** The referenced sevdesk category identifier. */
            id: string;
            /** The sevdesk model name for the category reference. */
            objectName: string;
          } | null;
          /** A sevdesk contact reference object. */
          parent?: {
            /** The referenced sevdesk contact identifier. */
            id: string;
            /** The sevdesk model name for the contact reference. */
            objectName: string;
          } | null;
          /** The description stored on the contact. */
          description?: string | null;
          /** The academic title stored on the contact. */
          academicTitle?: string | null;
          /** The gender value stored on the contact. */
          gender?: string | null;
          /** The secondary name stored on the contact. */
          name2?: string | null;
          /** The birthday stored on the contact. */
          birthday?: string | null;
          /** The VAT number stored on the contact. */
          vatNumber?: string | null;
          /** The bank account stored on the contact. */
          bankAccount?: string | null;
          /** The bank number stored on the contact. */
          bankNumber?: string | null;
          /** The default cashback time returned by sevdesk. */
          defaultCashbackTime?: string | null;
          /** The default cashback percentage returned by sevdesk. */
          defaultCashbackPercent?: string | null;
          /** The default payment time returned by sevdesk. */
          defaultTimeToPay?: string | null;
          /** The tax number stored on the contact. */
          taxNumber?: string | null;
          /** The tax office stored on the contact. */
          taxOffice?: string | null;
          /** The VAT exemption flag returned by sevdesk. */
          exemptVat?: string | null;
          /** The default discount amount returned by sevdesk. */
          defaultDiscountAmount?: string | null;
          /** The default discount percentage flag returned by sevdesk. */
          defaultDiscountPercentage?: string | null;
          /** The buyer reference stored on the contact. */
          buyerReference?: string | null;
          /** The government agency flag returned by sevdesk. */
          governmentAgency?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List sevdesk contacts with optional customer number, pagination, and embed options. */
    "sevdesk.list_contacts": {
      input: {
        /** Whether to return only organizations or both organizations and persons. */
        depth?: "0" | "1";
        /**
         * The customer number to filter contacts by.
         * @minLength 1
         */
        customerNumber?: string;
        /**
         * The maximum number of contacts to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The number of contacts to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** Whether sevdesk should include the total number of matching contacts. */
        countAll?: boolean;
        /**
         * Nested resource names to expand through sevdesk's embed query parameter.
         * @minItems 1
         */
        embed?: Array<string>;
      };
      output: {
        /** The contacts returned by sevdesk. */
        contacts: Array<{
          /** The sevdesk contact identifier. */
          id?: string;
          /** The sevdesk model name for the contact. */
          objectName?: string;
          /** The organization name when the contact is a company. */
          name?: string | null;
          /** The sevdesk status code returned for the contact. */
          status?: string | null;
          /** The customer number returned by sevdesk. */
          customerNumber?: string | null;
          /** The first name returned by sevdesk. */
          surename?: string | null;
          /** The last name returned by sevdesk. */
          familyname?: string | null;
          /** The non-academic title returned by sevdesk. */
          titel?: string | null;
          /** A sevdesk contact category reference object. */
          category?: {
            /** The referenced sevdesk category identifier. */
            id: string;
            /** The sevdesk model name for the category reference. */
            objectName: string;
          } | null;
          /** A sevdesk contact reference object. */
          parent?: {
            /** The referenced sevdesk contact identifier. */
            id: string;
            /** The sevdesk model name for the contact reference. */
            objectName: string;
          } | null;
          /** The description stored on the contact. */
          description?: string | null;
          /** The academic title stored on the contact. */
          academicTitle?: string | null;
          /** The gender value stored on the contact. */
          gender?: string | null;
          /** The secondary name stored on the contact. */
          name2?: string | null;
          /** The birthday stored on the contact. */
          birthday?: string | null;
          /** The VAT number stored on the contact. */
          vatNumber?: string | null;
          /** The bank account stored on the contact. */
          bankAccount?: string | null;
          /** The bank number stored on the contact. */
          bankNumber?: string | null;
          /** The default cashback time returned by sevdesk. */
          defaultCashbackTime?: string | null;
          /** The default cashback percentage returned by sevdesk. */
          defaultCashbackPercent?: string | null;
          /** The default payment time returned by sevdesk. */
          defaultTimeToPay?: string | null;
          /** The tax number stored on the contact. */
          taxNumber?: string | null;
          /** The tax office stored on the contact. */
          taxOffice?: string | null;
          /** The VAT exemption flag returned by sevdesk. */
          exemptVat?: string | null;
          /** The default discount amount returned by sevdesk. */
          defaultDiscountAmount?: string | null;
          /** The default discount percentage flag returned by sevdesk. */
          defaultDiscountPercentage?: string | null;
          /** The buyer reference stored on the contact. */
          buyerReference?: string | null;
          /** The government agency flag returned by sevdesk. */
          governmentAgency?: string | null;
          [key: string]: unknown;
        }>;
        /** The total number of matching contacts when sevdesk returns it. */
        total: number | null;
      };
    };
    /** Update an existing sevdesk contact using the official contact update payload fields. */
    "sevdesk.update_contact": {
      input: {
        /**
         * The sevdesk contact identifier.
         * @exclusiveMinimum 0
         */
        contactId: number;
        /** The organization name. When set, sevdesk treats the contact as an organization. */
        name?: string | null;
        /** The sevdesk contact status code, such as 100, 500, or 1000. */
        status?: number | null;
        /** The customer number to store on the contact. */
        customerNumber?: string | null;
        /** A sevdesk contact reference object. */
        parent?: {
          /**
           * The referenced sevdesk contact identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The sevdesk model name for a contact reference. */
          objectName: "Contact";
        } | null;
        /** The first name for a person contact. */
        surename?: string | null;
        /** The last name for a person contact. */
        familyname?: string | null;
        /** The non-academic title for the contact. */
        titel?: string | null;
        /** A sevdesk contact category reference object. */
        category?: {
          /**
           * The referenced sevdesk category identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The sevdesk model name for a category reference. */
          objectName: "Category";
        } | null;
        /** The free-form description stored on the contact. */
        description?: string | null;
        /** The academic title for the contact. */
        academicTitle?: string | null;
        /** The gender value for the contact. */
        gender?: string | null;
        /** The second name for a person contact. */
        name2?: string | null;
        /**
         * The birthday for a person contact in YYYY-MM-DD format.
         * @format date
         */
        birthday?: string | null;
        /** The VAT number stored on the contact. */
        vatNumber?: string | null;
        /** The bank account number (IBAN) stored on the contact. */
        bankAccount?: string | null;
        /** The bank number stored on the contact. */
        bankNumber?: string | null;
        /** The default cashback time in days for this contact. */
        defaultCashbackTime?: number | null;
        /** The default cashback percent for this contact. */
        defaultCashbackPercent?: number | null;
        /** The default time to pay in days for this contact. */
        defaultTimeToPay?: number | null;
        /** The tax number stored on the contact. */
        taxNumber?: string | null;
        /** The tax office stored on the contact. */
        taxOffice?: string | null;
        /** Whether the contact is exempt from VAT. */
        exemptVat?: boolean | null;
        /** The default discount amount applied to this contact. */
        defaultDiscountAmount?: number | null;
        /** Whether the default discount amount is interpreted as a percentage. */
        defaultDiscountPercentage?: boolean | null;
        /** The buyer reference stored on the contact. */
        buyerReference?: string | null;
        /** Whether the contact represents a government agency. */
        governmentAgency?: boolean | null;
      };
      output: {
        /** A sevdesk contact object. */
        contact: {
          /** The sevdesk contact identifier. */
          id?: string;
          /** The sevdesk model name for the contact. */
          objectName?: string;
          /** The organization name when the contact is a company. */
          name?: string | null;
          /** The sevdesk status code returned for the contact. */
          status?: string | null;
          /** The customer number returned by sevdesk. */
          customerNumber?: string | null;
          /** The first name returned by sevdesk. */
          surename?: string | null;
          /** The last name returned by sevdesk. */
          familyname?: string | null;
          /** The non-academic title returned by sevdesk. */
          titel?: string | null;
          /** A sevdesk contact category reference object. */
          category?: {
            /** The referenced sevdesk category identifier. */
            id: string;
            /** The sevdesk model name for the category reference. */
            objectName: string;
          } | null;
          /** A sevdesk contact reference object. */
          parent?: {
            /** The referenced sevdesk contact identifier. */
            id: string;
            /** The sevdesk model name for the contact reference. */
            objectName: string;
          } | null;
          /** The description stored on the contact. */
          description?: string | null;
          /** The academic title stored on the contact. */
          academicTitle?: string | null;
          /** The gender value stored on the contact. */
          gender?: string | null;
          /** The secondary name stored on the contact. */
          name2?: string | null;
          /** The birthday stored on the contact. */
          birthday?: string | null;
          /** The VAT number stored on the contact. */
          vatNumber?: string | null;
          /** The bank account stored on the contact. */
          bankAccount?: string | null;
          /** The bank number stored on the contact. */
          bankNumber?: string | null;
          /** The default cashback time returned by sevdesk. */
          defaultCashbackTime?: string | null;
          /** The default cashback percentage returned by sevdesk. */
          defaultCashbackPercent?: string | null;
          /** The default payment time returned by sevdesk. */
          defaultTimeToPay?: string | null;
          /** The tax number stored on the contact. */
          taxNumber?: string | null;
          /** The tax office stored on the contact. */
          taxOffice?: string | null;
          /** The VAT exemption flag returned by sevdesk. */
          exemptVat?: string | null;
          /** The default discount amount returned by sevdesk. */
          defaultDiscountAmount?: string | null;
          /** The default discount percentage flag returned by sevdesk. */
          defaultDiscountPercentage?: string | null;
          /** The buyer reference stored on the contact. */
          buyerReference?: string | null;
          /** The government agency flag returned by sevdesk. */
          governmentAgency?: string | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
