import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a basic Holded contact with JSON-friendly identity fields. */
    "holded.create_contact": {
      input: {
        /**
         * The contact name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /**
         * The contact phone number.
         * @minLength 1
         * @pattern \S
         */
        phone?: string;
        /**
         * The contact mobile number.
         * @minLength 1
         * @pattern \S
         */
        mobile?: string;
        /**
         * The contact tax identification code.
         * @minLength 1
         * @pattern \S
         */
        code?: string;
        /**
         * External custom identifier for the contact.
         * @minLength 1
         * @pattern \S
         */
        customId?: string;
        /**
         * Holded contact type value.
         * @minLength 1
         * @pattern \S
         */
        type?: string;
      };
      output: {
        /** A normalized Holded contact. */
        contact: {
          /** The Holded contact identifier. */
          id: string;
          /** The contact name when returned by Holded. */
          name: string | null;
          /** The contact email address when returned by Holded. */
          email: string | null;
          /** The contact phone number when returned by Holded. */
          phone: string | null;
          /** The contact mobile number when returned by Holded. */
          mobile: string | null;
          /** The contact tax identification code when returned by Holded. */
          code: string | null;
          /** The external custom identifier when returned by Holded. */
          customId: string | null;
          /** The contact type when returned by Holded. */
          type: string | null;
          /** The raw object returned by Holded. */
          raw: Record<string, unknown>;
        };
        /** The raw top-level payload returned by Holded. */
        raw: unknown;
      };
    };
    /** Get a Holded contact by identifier. */
    "holded.get_contact": {
      input: {
        /**
         * Holded object identifier.
         * @minLength 1
         * @pattern \S
         */
        contactId: string;
      };
      output: {
        /** A normalized Holded contact. */
        contact: {
          /** The Holded contact identifier. */
          id: string;
          /** The contact name when returned by Holded. */
          name: string | null;
          /** The contact email address when returned by Holded. */
          email: string | null;
          /** The contact phone number when returned by Holded. */
          phone: string | null;
          /** The contact mobile number when returned by Holded. */
          mobile: string | null;
          /** The contact tax identification code when returned by Holded. */
          code: string | null;
          /** The external custom identifier when returned by Holded. */
          customId: string | null;
          /** The contact type when returned by Holded. */
          type: string | null;
          /** The raw object returned by Holded. */
          raw: Record<string, unknown>;
        };
        /** The raw top-level payload returned by Holded. */
        raw: unknown;
      };
    };
    /** Get a Holded product by identifier. */
    "holded.get_product": {
      input: {
        /**
         * Holded object identifier.
         * @minLength 1
         * @pattern \S
         */
        productId: string;
      };
      output: {
        /** A normalized Holded product. */
        product: {
          /** The Holded product identifier. */
          id: string;
          /** The product name when returned by Holded. */
          name: string | null;
          /** The product SKU when returned by Holded. */
          sku: string | null;
          /** The product description when returned by Holded. */
          description: string | null;
          /** The product price when returned by Holded. */
          price: number | null;
          /** The raw object returned by Holded. */
          raw: Record<string, unknown>;
        };
        /** The raw top-level payload returned by Holded. */
        raw: unknown;
      };
    };
    /** List Holded contacts with exact-match filters and cursor pagination. */
    "holded.list_contacts": {
      input: {
        /**
         * Filter contacts by exact phone number.
         * @minLength 1
         * @pattern \S
         */
        phone?: string;
        /**
         * Filter contacts by exact mobile number.
         * @minLength 1
         * @pattern \S
         */
        mobile?: string;
        /**
         * Filter contacts by exact email address.
         * @format email
         */
        email?: string;
        /**
         * Filter contacts by exact tax identification code.
         * @minLength 1
         * @pattern \S
         */
        code?: string;
        /**
         * Filter contacts by exact external custom identifier.
         * @minLength 1
         * @pattern \S
         */
        customId?: string;
        /**
         * Opaque pagination cursor returned by Holded in the previous response.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /**
         * Maximum number of records to return. Holded accepts up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The contacts returned by Holded. */
        contacts: Array<{
          /** The Holded contact identifier. */
          id: string;
          /** The contact name when returned by Holded. */
          name: string | null;
          /** The contact email address when returned by Holded. */
          email: string | null;
          /** The contact phone number when returned by Holded. */
          phone: string | null;
          /** The contact mobile number when returned by Holded. */
          mobile: string | null;
          /** The contact tax identification code when returned by Holded. */
          code: string | null;
          /** The external custom identifier when returned by Holded. */
          customId: string | null;
          /** The contact type when returned by Holded. */
          type: string | null;
          /** The raw object returned by Holded. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Holded. */
        pagination: {
          /** Cursor for the next page when Holded reports that another page is available. */
          nextCursor: string | null;
          /** Whether Holded reports that another page is available. */
          hasMore: boolean | null;
          /** The raw pagination metadata returned by Holded. */
          raw: Record<string, unknown>;
        } | null;
        /** The raw top-level payload returned by Holded. */
        raw: unknown;
      };
    };
    /** List Holded products with cursor pagination. */
    "holded.list_products": {
      input: {
        /**
         * Opaque pagination cursor returned by Holded in the previous response.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /**
         * Maximum number of records to return. Holded accepts up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The products returned by Holded. */
        products: Array<{
          /** The Holded product identifier. */
          id: string;
          /** The product name when returned by Holded. */
          name: string | null;
          /** The product SKU when returned by Holded. */
          sku: string | null;
          /** The product description when returned by Holded. */
          description: string | null;
          /** The product price when returned by Holded. */
          price: number | null;
          /** The raw object returned by Holded. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Holded. */
        pagination: {
          /** Cursor for the next page when Holded reports that another page is available. */
          nextCursor: string | null;
          /** Whether Holded reports that another page is available. */
          hasMore: boolean | null;
          /** The raw pagination metadata returned by Holded. */
          raw: Record<string, unknown>;
        } | null;
        /** The raw top-level payload returned by Holded. */
        raw: unknown;
      };
    };
  }
}
