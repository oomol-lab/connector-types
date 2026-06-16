import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a company record in Salesmate CRM. */
    "salesmate.create_company": {
      input: {
        /**
         * Name of the company. Salesmate documents a maximum length of 255.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
        /**
         * Salesmate user ID that owns this company.
         * @exclusiveMinimum 0
         */
        owner?: number;
        /**
         * Website URL of the company.
         * @minLength 1
         * @maxLength 255
         */
        website?: string;
        /**
         * Primary phone number of the company.
         * @minLength 1
         * @maxLength 255
         */
        phone?: string;
        /**
         * Secondary phone number of the company.
         * @minLength 1
         * @maxLength 255
         */
        otherPhone?: string;
        /**
         * Skype ID of the company.
         * @minLength 1
         * @maxLength 255
         */
        skypeId?: string;
        /**
         * Facebook profile or handle for the company.
         * @minLength 1
         * @maxLength 100
         */
        facebookHandle?: string;
        /**
         * LinkedIn profile link for the company.
         * @minLength 1
         * @maxLength 100
         */
        linkedInHandle?: string;
        /**
         * Twitter profile or handle for the company.
         * @minLength 1
         * @maxLength 100
         */
        twitterHandle?: string;
        /**
         * Google Plus profile or handle for the company.
         * @minLength 1
         * @maxLength 100
         */
        googlePlusHandle?: string;
        /**
         * Three-letter ISO currency code for the company, in uppercase.
         * @minLength 3
         * @maxLength 3
         */
        currency?: string;
        /**
         * Line one of the billing address.
         * @minLength 1
         * @maxLength 50
         */
        billingAddressLine1?: string;
        /**
         * Line two of the billing address.
         * @minLength 1
         * @maxLength 50
         */
        billingAddressLine2?: string;
        /**
         * Billing city name.
         * @minLength 1
         * @maxLength 50
         */
        billingCity?: string;
        /**
         * Billing ZIP or postal code.
         * @minLength 1
         * @maxLength 20
         */
        billingZipCode?: string;
        /**
         * Billing state name.
         * @minLength 1
         * @maxLength 30
         */
        billingState?: string;
        /**
         * Billing country name.
         * @minLength 1
         * @maxLength 20
         */
        billingCountry?: string;
        /**
         * Description attached to the company.
         * @minLength 1
         * @maxLength 2000
         */
        description?: string;
        /**
         * Comma-separated tags associated with the company.
         * @minLength 1
         * @maxLength 5000
         */
        tags?: string;
        /** Additional Salesmate company custom fields keyed by field API name. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** The raw Salesmate response payload. */
        company: Record<string, unknown>;
        /** The raw Salesmate response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a product in Salesmate. */
    "salesmate.create_product": {
      input: {
        /**
         * Name of the product.
         * @minLength 1
         */
        name: string;
        /**
         * Unique SKU or code of the product.
         * @minLength 1
         */
        sku?: string;
        /**
         * Three-letter ISO currency code for the product, in uppercase.
         * @minLength 3
         * @maxLength 3
         */
        currency: string;
        /** Sale price of the product. */
        unitPrice: number;
        /**
         * Description attached to the product.
         * @minLength 1
         * @maxLength 2000
         */
        description?: string;
        /** Whether the product is active for sales. */
        isActive?: boolean;
        /**
         * Comma-separated tags associated with the product.
         * @minLength 1
         * @maxLength 5000
         */
        tags?: string;
        /**
         * Salesmate user ID that owns this product.
         * @exclusiveMinimum 0
         */
        owner?: number;
        /** Cost per unit for the product. */
        costPerUnit?: number;
        /** Direct cost of the product. */
        directCost?: number;
      };
      output: {
        /** The raw Salesmate response payload. */
        product: Record<string, unknown>;
        /** The raw Salesmate response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a Salesmate product by product ID. */
    "salesmate.delete_product": {
      input: {
        /**
         * Unique identifier of the Salesmate product to delete.
         * @exclusiveMinimum 0
         */
        productId: number;
      };
      output: {
        /** Whether Salesmate accepted the product deletion request. */
        success: boolean;
        /** The raw Salesmate response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List active Salesmate users. */
    "salesmate.get_active_users": {
      input: Record<string, never>;
      output: {
        /** The active Salesmate user records. */
        users: Array<Record<string, unknown>>;
        /** The raw Salesmate response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Salesmate company record by company ID. */
    "salesmate.get_company": {
      input: {
        /**
         * Unique identifier of the Salesmate company to retrieve.
         * @exclusiveMinimum 0
         */
        companyId: number;
      };
      output: {
        /** The raw Salesmate response payload. */
        company: Record<string, unknown>;
        /** The raw Salesmate response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Salesmate internal module identifiers. */
    "salesmate.list_modules": {
      input: Record<string, never>;
      output: {
        /** The Salesmate module records. */
        modules: Array<Record<string, unknown>>;
        /** The raw Salesmate response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
