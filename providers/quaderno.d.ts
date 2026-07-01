import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Calculate the Quaderno tax rate for an address and transaction details. */
    "quaderno.calculate_tax_rate": {
      input: {
        /**
         * The seller's two-letter ISO country code.
         * @minLength 2
         */
        from_country?: string;
        /**
         * The seller's ZIP or postal code.
         * @minLength 1
         */
        from_postal_code?: string;
        /**
         * The customer's two-letter ISO country code.
         * @minLength 2
         */
        to_country: string;
        /**
         * The customer's ZIP or postal code.
         * @minLength 1
         */
        to_postal_code?: string;
        /**
         * The customer's city.
         * @minLength 1
         */
        to_city?: string;
        /**
         * The customer's street address.
         * @minLength 1
         */
        to_street?: string;
        /**
         * The customer's tax identification number.
         * @minLength 1
         */
        tax_id?: string;
        /** The transaction tax code. */
        tax_code?: "consulting" | "eservice" | "ebook" | "saas" | "standard" | "reduced" | "exempt";
        /** Whether the price includes tax. */
        tax_behavior?: "inclusive" | "exclusive";
        /** Whether the product is a good or service. */
        product_type?: "good" | "service";
        /**
         * The transaction date. Defaults to today in Quaderno.
         * @minLength 1
         */
        date?: string;
        /**
         * The transaction amount.
         * @minLength 1
         */
        amount?: string;
        /**
         * The three-letter ISO 4217 currency code.
         * @minLength 3
         */
        currency?: string;
      };
      output: {
        /** A normalized Quaderno tax rate calculation. */
        taxRate: {
          /** The tax name. */
          name: string | null;
          /** The tax rate applied. */
          rate: number | null;
          /** The percentage of the subtotal used for calculating the tax amount. */
          taxablePart: number | null;
          /** The country used for the tax calculation. */
          country: string | null;
          /** The region used for the tax calculation. */
          region: string | null;
          /** The tax code used for the calculation. */
          taxCode: string | null;
          /** Whether prices were treated as inclusive or exclusive. */
          taxBehavior: string | null;
          /** The calculated tax amount. */
          taxAmount: number | null;
          /** The price before taxes. */
          subtotal: number | null;
          /** The total amount including taxes. */
          totalAmount: number | null;
          /** The tax calculation status. */
          status: string | null;
          /** The raw Quaderno API object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a Quaderno contact. */
    "quaderno.create_contact": {
      input: {
        /** The Quaderno contact fields to create or update. */
        contact: {
          /**
           * The contact's first name. Required by Quaderno when creating a contact.
           * @minLength 1
           */
          first_name?: string;
          /**
           * The contact's last name when the contact is a person.
           * @minLength 1
           */
          last_name?: string;
          /**
           * The contact's email address.
           * @format email
           */
          email?: string;
          /** The contact kind. */
          kind?: "company" | "person";
          /**
           * The two-letter ISO 3166-1 alpha-2 country code.
           * @minLength 2
           */
          country?: string;
          /**
           * The external payment processor ID.
           * @minLength 1
           */
          processor_id?: string;
          /** The contact tax status. */
          tax_status?: "taxable" | "exempt" | "reverse";
          [key: string]: unknown;
        };
      };
      output: {
        /** A normalized Quaderno contact. */
        contact: {
          /** The contact ID. */
          id: number | null;
          /** The contact first name. */
          firstName: string | null;
          /** The contact last name. */
          lastName: string | null;
          /** The contact email address. */
          email: string | null;
          /** The contact kind, such as company or person. */
          kind: string | null;
          /** The contact country code. */
          country: string | null;
          /** The external payment processor ID for the contact. */
          processorId: string | null;
          /** The contact tax status. */
          taxStatus: string | null;
          /** The raw Quaderno API object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a Quaderno product. */
    "quaderno.create_product": {
      input: {
        /** The Quaderno product fields to create or update. */
        product: {
          /**
           * The product name displayed to customers.
           * @minLength 1
           */
          name?: string;
          /**
           * The product SKU or code.
           * @minLength 1
           */
          code?: string;
          /**
           * The unit amount charged for the product.
           * @minLength 1
           */
          unit_cost?: string;
          /**
           * The three-letter ISO 4217 currency code.
           * @minLength 3
           */
          currency?: string;
          /** Whether the product is a good or a service. */
          product_type?: "good" | "service";
          /** The tax class that applies to the product. */
          tax_class?: "consulting" | "eservice" | "ebook" | "saas" | "standard" | "reduced";
          [key: string]: unknown;
        };
      };
      output: {
        /** A normalized Quaderno product. */
        product: {
          /** The product ID. */
          id: number | null;
          /** The product name. */
          name: string | null;
          /** The product SKU or code. */
          code: string | null;
          /** The unit amount charged for the product. */
          unitCost: string | null;
          /** The product currency code. */
          currency: string | null;
          /** The product type, such as good or service. */
          productType: string | null;
          /** The tax class that applies to the product. */
          taxClass: string | null;
          /** The raw Quaderno API object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Delete a Quaderno contact permanently. */
    "quaderno.delete_contact": {
      input: {
        /**
         * The Quaderno object ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Quaderno accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Delete a Quaderno product permanently. */
    "quaderno.delete_product": {
      input: {
        /**
         * The Quaderno object ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Quaderno accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Retrieve the Quaderno account identity and API endpoint for the API key. */
    "quaderno.get_account": {
      input: Record<string, never>;
      output: {
        /** A normalized Quaderno account identity. */
        account: {
          /** The Quaderno identity ID. */
          id: string | null;
          /** The account user's full name. */
          name: string | null;
          /** The account user's email address. */
          email: string | null;
          /** The account publishable key. */
          publishableKey: string | null;
          /** The Quaderno account API base URL. */
          accountUrl: string;
          /** The Quaderno account subdomain. */
          accountSubdomain: string;
          /** The raw Quaderno API object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Quaderno contact by ID. */
    "quaderno.get_contact": {
      input: {
        /**
         * The Quaderno object ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Quaderno contact. */
        contact: {
          /** The contact ID. */
          id: number | null;
          /** The contact first name. */
          firstName: string | null;
          /** The contact last name. */
          lastName: string | null;
          /** The contact email address. */
          email: string | null;
          /** The contact kind, such as company or person. */
          kind: string | null;
          /** The contact country code. */
          country: string | null;
          /** The external payment processor ID for the contact. */
          processorId: string | null;
          /** The contact tax status. */
          taxStatus: string | null;
          /** The raw Quaderno API object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Quaderno product by ID. */
    "quaderno.get_product": {
      input: {
        /**
         * The Quaderno object ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Quaderno product. */
        product: {
          /** The product ID. */
          id: number | null;
          /** The product name. */
          name: string | null;
          /** The product SKU or code. */
          code: string | null;
          /** The unit amount charged for the product. */
          unitCost: string | null;
          /** The product currency code. */
          currency: string | null;
          /** The product type, such as good or service. */
          productType: string | null;
          /** The tax class that applies to the product. */
          taxClass: string | null;
          /** The raw Quaderno API object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Quaderno contacts with optional search or processor ID filters. */
    "quaderno.list_contacts": {
      input: {
        /**
         * A case-sensitive search query accepted by Quaderno.
         * @minLength 1
         */
        q?: string;
        /**
         * The external payment processor ID.
         * @minLength 1
         */
        processor_id?: string;
      };
      output: {
        /** Contacts returned by Quaderno. */
        contacts: Array<{
          /** The contact ID. */
          id: number | null;
          /** The contact first name. */
          firstName: string | null;
          /** The contact last name. */
          lastName: string | null;
          /** The contact email address. */
          email: string | null;
          /** The contact kind, such as company or person. */
          kind: string | null;
          /** The contact country code. */
          country: string | null;
          /** The external payment processor ID for the contact. */
          processorId: string | null;
          /** The contact tax status. */
          taxStatus: string | null;
          /** The raw Quaderno API object. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination links and rate limit metadata returned by Quaderno. */
        pagination: {
          /** The URL for the next page when Quaderno provides one. */
          next: string | null;
          /** The URL for the previous page when Quaderno provides one. */
          previous: string | null;
          /** The URL for the first page when Quaderno provides one. */
          first: string | null;
          /** The URL for the last page when Quaderno provides one. */
          last: string | null;
          /** The Quaderno request limit for the current window. */
          rateLimitLimit: number | null;
          /** The number of Quaderno requests remaining in the current window. */
          rateLimitRemaining: number | null;
          /** The UTC epoch second when the Quaderno rate limit window resets. */
          rateLimitReset: number | null;
        };
      };
    };
    /** List Quaderno products with an optional search query. */
    "quaderno.list_products": {
      input: {
        /**
         * A case-sensitive search query accepted by Quaderno.
         * @minLength 1
         */
        q?: string;
      };
      output: {
        /** Products returned by Quaderno. */
        products: Array<{
          /** The product ID. */
          id: number | null;
          /** The product name. */
          name: string | null;
          /** The product SKU or code. */
          code: string | null;
          /** The unit amount charged for the product. */
          unitCost: string | null;
          /** The product currency code. */
          currency: string | null;
          /** The product type, such as good or service. */
          productType: string | null;
          /** The tax class that applies to the product. */
          taxClass: string | null;
          /** The raw Quaderno API object. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination links and rate limit metadata returned by Quaderno. */
        pagination: {
          /** The URL for the next page when Quaderno provides one. */
          next: string | null;
          /** The URL for the previous page when Quaderno provides one. */
          previous: string | null;
          /** The URL for the first page when Quaderno provides one. */
          first: string | null;
          /** The URL for the last page when Quaderno provides one. */
          last: string | null;
          /** The Quaderno request limit for the current window. */
          rateLimitLimit: number | null;
          /** The number of Quaderno requests remaining in the current window. */
          rateLimitRemaining: number | null;
          /** The UTC epoch second when the Quaderno rate limit window resets. */
          rateLimitReset: number | null;
        };
      };
    };
    /** Update a Quaderno contact. Fields not provided are left unchanged. */
    "quaderno.update_contact": {
      input: {
        /** The Quaderno object ID. */
        id: number;
        /** The Quaderno contact fields to create or update. */
        contact: {
          /**
           * The contact's first name. Required by Quaderno when creating a contact.
           * @minLength 1
           */
          first_name?: string;
          /**
           * The contact's last name when the contact is a person.
           * @minLength 1
           */
          last_name?: string;
          /**
           * The contact's email address.
           * @format email
           */
          email?: string;
          /** The contact kind. */
          kind?: "company" | "person";
          /**
           * The two-letter ISO 3166-1 alpha-2 country code.
           * @minLength 2
           */
          country?: string;
          /**
           * The external payment processor ID.
           * @minLength 1
           */
          processor_id?: string;
          /** The contact tax status. */
          tax_status?: "taxable" | "exempt" | "reverse";
          [key: string]: unknown;
        };
      };
      output: {
        /** A normalized Quaderno contact. */
        contact: {
          /** The contact ID. */
          id: number | null;
          /** The contact first name. */
          firstName: string | null;
          /** The contact last name. */
          lastName: string | null;
          /** The contact email address. */
          email: string | null;
          /** The contact kind, such as company or person. */
          kind: string | null;
          /** The contact country code. */
          country: string | null;
          /** The external payment processor ID for the contact. */
          processorId: string | null;
          /** The contact tax status. */
          taxStatus: string | null;
          /** The raw Quaderno API object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Update a Quaderno product. Fields not provided are left unchanged. */
    "quaderno.update_product": {
      input: {
        /** The Quaderno object ID. */
        id: number;
        /** The Quaderno product fields to create or update. */
        product: {
          /**
           * The product name displayed to customers.
           * @minLength 1
           */
          name?: string;
          /**
           * The product SKU or code.
           * @minLength 1
           */
          code?: string;
          /**
           * The unit amount charged for the product.
           * @minLength 1
           */
          unit_cost?: string;
          /**
           * The three-letter ISO 4217 currency code.
           * @minLength 3
           */
          currency?: string;
          /** Whether the product is a good or a service. */
          product_type?: "good" | "service";
          /** The tax class that applies to the product. */
          tax_class?: "consulting" | "eservice" | "ebook" | "saas" | "standard" | "reduced";
          [key: string]: unknown;
        };
      };
      output: {
        /** A normalized Quaderno product. */
        product: {
          /** The product ID. */
          id: number | null;
          /** The product name. */
          name: string | null;
          /** The product SKU or code. */
          code: string | null;
          /** The unit amount charged for the product. */
          unitCost: string | null;
          /** The product currency code. */
          currency: string | null;
          /** The product type, such as good or service. */
          productType: string | null;
          /** The tax class that applies to the product. */
          taxClass: string | null;
          /** The raw Quaderno API object. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
