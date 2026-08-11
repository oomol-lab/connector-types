import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Helcim customer using a contact name, business name, or both. */
    "helcim.create_customer": {
      input: {
        /** The unique customer code, or omit it to let Helcim generate one. */
        customerCode?: string;
        /** The customer's primary contact name. */
        contactName?: string;
        /** The customer's business name. */
        businessName?: string;
        /** The customer's cell phone number. */
        cellPhone?: string;
        /** A billing or shipping address for a Helcim customer. */
        billingAddress?: {
          /**
           * The recipient or business name for this address.
           * @minLength 1
           */
          name: string;
          /**
           * The primary street address.
           * @minLength 1
           */
          street1: string;
          /** Additional address details such as a unit or suite number. */
          street2?: string;
          /** The city for this address. */
          city?: string;
          /** The two-letter province or state code. */
          province?: string;
          /** The ISO 3166-1 alpha-3 country code. */
          country?: string;
          /**
           * The postal or ZIP code.
           * @minLength 1
           */
          postalCode: string;
          /** The contact phone number for this address. */
          phone?: string;
          /** The contact email address for this address. */
          email?: string;
        };
        /** A billing or shipping address for a Helcim customer. */
        shippingAddress?: {
          /**
           * The recipient or business name for this address.
           * @minLength 1
           */
          name: string;
          /**
           * The primary street address.
           * @minLength 1
           */
          street1: string;
          /** Additional address details such as a unit or suite number. */
          street2?: string;
          /** The city for this address. */
          city?: string;
          /** The two-letter province or state code. */
          province?: string;
          /** The ISO 3166-1 alpha-3 country code. */
          country?: string;
          /**
           * The postal or ZIP code.
           * @minLength 1
           */
          postalCode: string;
          /** The contact phone number for this address. */
          phone?: string;
          /** The contact email address for this address. */
          email?: string;
        };
      };
      output: {
        /** A customer returned by Helcim. */
        customer: {
          /** The Helcim customer ID. */
          id?: number;
          /** The customer code returned by Helcim. */
          customerCode?: string;
          /** The customer's business name. */
          businessName?: string;
          /** The customer's primary contact name. */
          contactName?: string;
          /** The customer's cell phone number. */
          cellPhone?: string;
          /** The customer's billing address. */
          billingAddress?: Record<string, unknown>;
          /** The customer's shipping address. */
          shippingAddress?: Record<string, unknown>;
          /** The non-sensitive stored card metadata returned by Helcim. */
          cards?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Helcim customer by ID. */
    "helcim.get_customer": {
      input: {
        /**
         * The Helcim customer ID.
         * @minimum 1
         */
        customerId: number;
      };
      output: {
        /** A customer returned by Helcim. */
        customer: {
          /** The Helcim customer ID. */
          id?: number;
          /** The customer code returned by Helcim. */
          customerCode?: string;
          /** The customer's business name. */
          businessName?: string;
          /** The customer's primary contact name. */
          contactName?: string;
          /** The customer's cell phone number. */
          cellPhone?: string;
          /** The customer's billing address. */
          billingAddress?: Record<string, unknown>;
          /** The customer's shipping address. */
          shippingAddress?: Record<string, unknown>;
          /** The non-sensitive stored card metadata returned by Helcim. */
          cards?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List or search Helcim customers with page-based pagination. */
    "helcim.list_customers": {
      input: {
        /** A partial match across customer names, code, city, phone, or email. */
        search?: string;
        /** An exact customer code filter. */
        customerCode?: string;
        /**
         * The maximum number of customers to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The one-based result page to return.
         * @minimum 1
         */
        page?: number;
        /** Whether to include stored card metadata for each customer. */
        includeCards?: boolean;
      };
      output: {
        /** The customers returned by Helcim. */
        customers: Array<{
          /** The Helcim customer ID. */
          id?: number;
          /** The customer code returned by Helcim. */
          customerCode?: string;
          /** The customer's business name. */
          businessName?: string;
          /** The customer's primary contact name. */
          contactName?: string;
          /** The customer's cell phone number. */
          cellPhone?: string;
          /** The customer's billing address. */
          billingAddress?: Record<string, unknown>;
          /** The customer's shipping address. */
          shippingAddress?: Record<string, unknown>;
          /** The non-sensitive stored card metadata returned by Helcim. */
          cards?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update an existing Helcim customer. */
    "helcim.update_customer": {
      input: {
        /**
         * The Helcim customer ID.
         * @minimum 1
         */
        customerId: number;
        /** The unique customer code, or omit it to let Helcim generate one. */
        customerCode?: string;
        /** The customer's primary contact name. */
        contactName?: string;
        /** The customer's business name. */
        businessName?: string;
        /** The customer's cell phone number. */
        cellPhone?: string;
        /** A billing or shipping address for a Helcim customer. */
        billingAddress?: {
          /**
           * The recipient or business name for this address.
           * @minLength 1
           */
          name: string;
          /**
           * The primary street address.
           * @minLength 1
           */
          street1: string;
          /** Additional address details such as a unit or suite number. */
          street2?: string;
          /** The city for this address. */
          city?: string;
          /** The two-letter province or state code. */
          province?: string;
          /** The ISO 3166-1 alpha-3 country code. */
          country?: string;
          /**
           * The postal or ZIP code.
           * @minLength 1
           */
          postalCode: string;
          /** The contact phone number for this address. */
          phone?: string;
          /** The contact email address for this address. */
          email?: string;
        };
        /** A billing or shipping address for a Helcim customer. */
        shippingAddress?: {
          /**
           * The recipient or business name for this address.
           * @minLength 1
           */
          name: string;
          /**
           * The primary street address.
           * @minLength 1
           */
          street1: string;
          /** Additional address details such as a unit or suite number. */
          street2?: string;
          /** The city for this address. */
          city?: string;
          /** The two-letter province or state code. */
          province?: string;
          /** The ISO 3166-1 alpha-3 country code. */
          country?: string;
          /**
           * The postal or ZIP code.
           * @minLength 1
           */
          postalCode: string;
          /** The contact phone number for this address. */
          phone?: string;
          /** The contact email address for this address. */
          email?: string;
        };
      };
      output: {
        /** A customer returned by Helcim. */
        customer: {
          /** The Helcim customer ID. */
          id?: number;
          /** The customer code returned by Helcim. */
          customerCode?: string;
          /** The customer's business name. */
          businessName?: string;
          /** The customer's primary contact name. */
          contactName?: string;
          /** The customer's cell phone number. */
          cellPhone?: string;
          /** The customer's billing address. */
          billingAddress?: Record<string, unknown>;
          /** The customer's shipping address. */
          shippingAddress?: Record<string, unknown>;
          /** The non-sensitive stored card metadata returned by Helcim. */
          cards?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
  }
}
