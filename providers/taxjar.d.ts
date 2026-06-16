import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Calculate TaxJar sales tax for an order. */
    "taxjar.calculate_sales_tax_for_order": {
      input: {
        /**
         * Origin country code, using ISO 3166-1 alpha-2 format.
         * @minLength 1
         */
        from_country: string;
        /**
         * Origin ZIP or postal code.
         * @minLength 1
         */
        from_zip: string;
        /**
         * Origin state or province.
         * @minLength 1
         */
        from_state: string;
        /**
         * Origin city.
         * @minLength 1
         */
        from_city?: string;
        /**
         * Origin street address.
         * @minLength 1
         */
        from_street?: string;
        /**
         * Destination country code, using ISO 3166-1 alpha-2 format.
         * @minLength 1
         */
        to_country: string;
        /**
         * Destination ZIP or postal code.
         * @minLength 1
         */
        to_zip: string;
        /**
         * Destination state or province.
         * @minLength 1
         */
        to_state: string;
        /**
         * Destination city.
         * @minLength 1
         */
        to_city?: string;
        /**
         * Destination street address.
         * @minLength 1
         */
        to_street?: string;
        /**
         * Order amount excluding shipping.
         * @minimum 0
         */
        amount: number;
        /**
         * Shipping cost for the order.
         * @minimum 0
         */
        shipping: number;
        /**
         * TaxJar customer identifier, if known.
         * @minLength 1
         */
        customer_id?: string;
        /**
         * Exemption type for the order, such as wholesale, government, non_profit, or other.
         * @minLength 1
         */
        exemption_type?: string;
        /**
         * Seller nexus addresses to consider for the tax calculation.
         * @minItems 1
         */
        nexus_addresses?: Array<{
          /**
           * Unique identifier for this nexus address.
           * @minLength 1
           */
          id?: string;
          /**
           * Country code for the address, using ISO 3166-1 alpha-2 format.
           * @minLength 1
           */
          country: string;
          /**
           * ZIP or postal code for the address.
           * @minLength 1
           */
          zip: string;
          /**
           * State or province for the address.
           * @minLength 1
           */
          state: string;
          /**
           * City for the address.
           * @minLength 1
           */
          city?: string;
          /**
           * Street address.
           * @minLength 1
           */
          street?: string;
        }>;
        /**
         * Line items in the order.
         * @minItems 1
         */
        line_items?: Array<{
          /**
           * Line item identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * Number of units for this line item.
           * @minimum 1
           */
          quantity: number;
          /**
           * Price per unit for this line item.
           * @minimum 0
           */
          unit_price: number;
          /**
           * Discount amount applied to this line item.
           * @minimum 0
           */
          discount?: number;
          /**
           * TaxJar product tax category code for this item.
           * @minLength 1
           */
          product_tax_code?: string;
        }>;
      };
      output: {
        /** Tax calculation payload returned by TaxJar. */
        tax: Record<string, unknown>;
      };
    };
    /** Create a TaxJar customer for exemption management. */
    "taxjar.create_customer": {
      input: {
        /**
         * TaxJar customer identifier.
         * @minLength 1
         */
        customer_id: string;
        /**
         * Customer exemption type, such as wholesale, government, non_profit, or other.
         * @minLength 1
         */
        exemption_type: string;
        /**
         * Customer name.
         * @minLength 1
         */
        name: string;
        /**
         * Customer country code, using ISO 3166-1 alpha-2 format.
         * @minLength 1
         */
        country?: string;
        /**
         * Customer state or province.
         * @minLength 1
         */
        state?: string;
        /**
         * Customer ZIP or postal code.
         * @minLength 1
         */
        zip?: string;
        /**
         * Customer city.
         * @minLength 1
         */
        city?: string;
        /**
         * Customer street address.
         * @minLength 1
         */
        street?: string;
        /** Customer exempt regions. */
        exempt_regions?: Array<{
          /**
           * Unique identifier for this nexus address.
           * @minLength 1
           */
          id?: string;
          /**
           * Country code for the address, using ISO 3166-1 alpha-2 format.
           * @minLength 1
           */
          country: string;
          /**
           * ZIP or postal code for the address.
           * @minLength 1
           */
          zip: string;
          /**
           * State or province for the address.
           * @minLength 1
           */
          state: string;
          /**
           * City for the address.
           * @minLength 1
           */
          city?: string;
          /**
           * Street address.
           * @minLength 1
           */
          street?: string;
        }>;
      };
      output: {
        /** Customer payload returned by TaxJar. */
        customer: Record<string, unknown>;
      };
    };
    /** Create a TaxJar order transaction for reporting and filing. */
    "taxjar.create_order_transaction": {
      input: {
        /**
         * Unique transaction identifier.
         * @minLength 1
         */
        transaction_id: string;
        /**
         * Transaction date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        transaction_date: string;
        /**
         * Optional source provider name.
         * @minLength 1
         */
        provider?: string;
        /**
         * Destination country code, using ISO 3166-1 alpha-2 format.
         * @minLength 1
         */
        to_country: string;
        /**
         * Destination ZIP or postal code.
         * @minLength 1
         */
        to_zip: string;
        /**
         * Destination state or province.
         * @minLength 1
         */
        to_state: string;
        /**
         * Destination city.
         * @minLength 1
         */
        to_city?: string;
        /**
         * Destination street address.
         * @minLength 1
         */
        to_street?: string;
        /**
         * Order total including shipping and excluding sales tax.
         * @minimum 0
         */
        amount: number;
        /**
         * Shipping cost for the order.
         * @minimum 0
         */
        shipping: number;
        /**
         * Sales tax collected for the order.
         * @minimum 0
         */
        sales_tax?: number;
        /**
         * Optional TaxJar user identifier.
         * @minLength 1
         */
        user_id?: string;
        /**
         * Exemption type applied to the order.
         * @minLength 1
         */
        exemption_type?: string;
        /** Destination latitude. */
        to_lat?: number;
        /** Destination longitude. */
        to_lng?: number;
        /**
         * Seller nexus addresses for the transaction.
         * @minItems 1
         */
        nexus_addresses?: Array<{
          /**
           * Unique identifier for this nexus address.
           * @minLength 1
           */
          id?: string;
          /**
           * Country code for the address, using ISO 3166-1 alpha-2 format.
           * @minLength 1
           */
          country: string;
          /**
           * ZIP or postal code for the address.
           * @minLength 1
           */
          zip: string;
          /**
           * State or province for the address.
           * @minLength 1
           */
          state: string;
          /**
           * City for the address.
           * @minLength 1
           */
          city?: string;
          /**
           * Street address.
           * @minLength 1
           */
          street?: string;
        }>;
        /**
         * Order line items.
         * @minItems 1
         */
        line_items?: Array<{
          /**
           * Line item identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * Number of units for this line item.
           * @minimum 1
           */
          quantity: number;
          /**
           * Price per unit for this line item.
           * @minimum 0
           */
          unit_price: number;
          /**
           * Discount amount applied to this line item.
           * @minimum 0
           */
          discount?: number;
          /**
           * Sales tax collected for this line item.
           * @minimum 0
           */
          sales_tax?: number;
          /**
           * Description of this line item.
           * @minLength 1
           */
          description?: string;
          /**
           * Product identifier, SKU, or other merchant item code.
           * @minLength 1
           */
          product_identifier?: string;
        }>;
      };
      output: {
        /** Order transaction payload returned by TaxJar. */
        order: Record<string, unknown>;
      };
    };
    /** Create a TaxJar refund transaction. */
    "taxjar.create_refund_transaction": {
      input: {
        /**
         * Unique refund transaction identifier.
         * @minLength 1
         */
        transaction_id: string;
        /**
         * Refund transaction date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        transaction_date: string;
        /**
         * Original order transaction identifier.
         * @minLength 1
         */
        transaction_reference_id: string;
        /**
         * Optional source provider name.
         * @minLength 1
         */
        provider?: string;
        /**
         * Destination country code, using ISO 3166-1 alpha-2 format.
         * @minLength 1
         */
        to_country: string;
        /**
         * Destination ZIP or postal code.
         * @minLength 1
         */
        to_zip: string;
        /**
         * Destination state or province.
         * @minLength 1
         */
        to_state: string;
        /**
         * Destination city.
         * @minLength 1
         */
        to_city?: string;
        /**
         * Destination street address.
         * @minLength 1
         */
        to_street?: string;
        /**
         * Refund amount excluding sales tax.
         * @minimum 0
         */
        amount: number;
        /**
         * Shipping amount refunded.
         * @minimum 0
         */
        shipping?: number;
        /**
         * Sales tax refunded.
         * @minimum 0
         */
        sales_tax?: number;
        /**
         * Refund line items.
         * @minItems 1
         */
        line_items?: Array<{
          /**
           * Line item identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * Number of units refunded for this line item.
           * @minimum 1
           */
          quantity: number;
          /**
           * Price per unit for this refunded line item.
           * @minimum 0
           */
          unit_price: number;
          /**
           * Sales tax refunded for this line item.
           * @minimum 0
           */
          sales_tax?: number;
          /**
           * Description of this refunded line item.
           * @minLength 1
           */
          description?: string;
          /**
           * Product identifier, SKU, or other merchant item code.
           * @minLength 1
           */
          product_identifier?: string;
        }>;
      };
      output: {
        /** Refund transaction payload returned by TaxJar. */
        refund: Record<string, unknown>;
      };
    };
    /** Delete a TaxJar customer by identifier. */
    "taxjar.delete_customer": {
      input: {
        /**
         * TaxJar customer identifier.
         * @minLength 1
         */
        customer_id: string;
      };
      output: {
        /** Whether the TaxJar customer delete request succeeded. */
        deleted: boolean;
        /**
         * TaxJar customer identifier that was deleted.
         * @minLength 1
         */
        customer_id: string;
        /** Raw TaxJar delete response payload. */
        response?: Record<string, unknown>;
      };
    };
    /** Delete a TaxJar order transaction by identifier. */
    "taxjar.delete_order_transaction": {
      input: {
        /**
         * TaxJar transaction identifier.
         * @minLength 1
         */
        transaction_id: string;
      };
      output: {
        /** Whether the TaxJar transaction delete request succeeded. */
        deleted: boolean;
        /**
         * TaxJar transaction identifier that was deleted.
         * @minLength 1
         */
        transaction_id: string;
        /** Raw TaxJar delete response payload. */
        response?: Record<string, unknown>;
      };
    };
    /** Delete a TaxJar refund transaction by identifier. */
    "taxjar.delete_refund_transaction": {
      input: {
        /**
         * TaxJar transaction identifier.
         * @minLength 1
         */
        transaction_id: string;
      };
      output: {
        /** Whether the TaxJar transaction delete request succeeded. */
        deleted: boolean;
        /**
         * TaxJar transaction identifier that was deleted.
         * @minLength 1
         */
        transaction_id: string;
        /** Raw TaxJar delete response payload. */
        response?: Record<string, unknown>;
      };
    };
    /** List TaxJar customer identifiers. */
    "taxjar.list_customers": {
      input: {
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of customers per page.
         * @minimum 1
         * @maximum 100
         */
        per_page?: number;
      };
      output: {
        /** Customer identifiers returned by TaxJar. */
        customers: Array<string>;
      };
    };
    /** List TaxJar nexus regions for the account. */
    "taxjar.list_nexus_regions": {
      input: Record<string, never>;
      output: {
        /** Nexus regions returned by TaxJar. */
        regions: Array<Record<string, unknown>>;
      };
    };
    /** List TaxJar order transaction identifiers within a date range. */
    "taxjar.list_order_transactions": {
      input: {
        /**
         * Start transaction date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        from_transaction_date: string;
        /**
         * End transaction date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        to_transaction_date: string;
        /**
         * Optional source provider filter used by TaxJar.
         * @minLength 1
         */
        provider?: string;
      };
      output: {
        /** Order transaction identifiers returned by TaxJar. */
        orders: Array<string>;
      };
    };
    /** List TaxJar refund transaction identifiers within a date range. */
    "taxjar.list_refund_transactions": {
      input: {
        /**
         * Start transaction date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        from_transaction_date: string;
        /**
         * End transaction date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        to_transaction_date: string;
        /**
         * Optional source provider filter used by TaxJar.
         * @minLength 1
         */
        provider?: string;
      };
      output: {
        /** Refund transaction identifiers returned by TaxJar. */
        refunds: Array<string>;
      };
    };
    /** List TaxJar product tax categories and codes. */
    "taxjar.list_tax_categories": {
      input: Record<string, never>;
      output: {
        /** Product tax categories returned by TaxJar. */
        categories: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve a TaxJar customer by identifier. */
    "taxjar.show_customer": {
      input: {
        /**
         * TaxJar customer identifier.
         * @minLength 1
         */
        customer_id: string;
      };
      output: {
        /** Customer payload returned by TaxJar. */
        customer: Record<string, unknown>;
      };
    };
    /** Retrieve a TaxJar order transaction by identifier. */
    "taxjar.show_order_transaction": {
      input: {
        /**
         * TaxJar transaction identifier.
         * @minLength 1
         */
        transaction_id: string;
      };
      output: {
        /** Order transaction payload returned by TaxJar. */
        order: Record<string, unknown>;
      };
    };
    /** Retrieve a TaxJar refund transaction by identifier. */
    "taxjar.show_refund_transaction": {
      input: {
        /**
         * TaxJar transaction identifier.
         * @minLength 1
         */
        transaction_id: string;
      };
      output: {
        /** Refund transaction payload returned by TaxJar. */
        refund: Record<string, unknown>;
      };
    };
    /** Retrieve TaxJar sales tax rates for a location. */
    "taxjar.show_tax_rates_for_location": {
      input: {
        /**
         * ZIP or postal code for the location.
         * @minLength 1
         */
        zip: string;
        /**
         * Country code for the location, using ISO 3166-1 alpha-2 format.
         * @minLength 1
         */
        country?: string;
        /**
         * State or province for the location.
         * @minLength 1
         */
        state?: string;
        /**
         * City for the location.
         * @minLength 1
         */
        city?: string;
        /**
         * Street address for rooftop-level rates when available.
         * @minLength 1
         */
        street?: string;
      };
      output: {
        /** Tax rate payload returned by TaxJar. */
        rate: Record<string, unknown>;
      };
    };
    /** Retrieve TaxJar minimum and average sales tax rates by region. */
    "taxjar.summarize_tax_rates_for_all_regions": {
      input: Record<string, never>;
      output: {
        /** Summary rates returned by TaxJar. */
        summary_rates: Array<Record<string, unknown>>;
      };
    };
    /** Update an existing TaxJar customer. */
    "taxjar.update_customer": {
      input: {
        /**
         * TaxJar customer identifier.
         * @minLength 1
         */
        customer_id: string;
        /**
         * Customer exemption type, such as wholesale, government, non_profit, or other.
         * @minLength 1
         */
        exemption_type: string;
        /**
         * Customer name.
         * @minLength 1
         */
        name: string;
        /**
         * Customer country code, using ISO 3166-1 alpha-2 format.
         * @minLength 1
         */
        country?: string;
        /**
         * Customer state or province.
         * @minLength 1
         */
        state?: string;
        /**
         * Customer ZIP or postal code.
         * @minLength 1
         */
        zip?: string;
        /**
         * Customer city.
         * @minLength 1
         */
        city?: string;
        /**
         * Customer street address.
         * @minLength 1
         */
        street?: string;
        /** Customer exempt regions. */
        exempt_regions?: Array<{
          /**
           * Unique identifier for this nexus address.
           * @minLength 1
           */
          id?: string;
          /**
           * Country code for the address, using ISO 3166-1 alpha-2 format.
           * @minLength 1
           */
          country: string;
          /**
           * ZIP or postal code for the address.
           * @minLength 1
           */
          zip: string;
          /**
           * State or province for the address.
           * @minLength 1
           */
          state: string;
          /**
           * City for the address.
           * @minLength 1
           */
          city?: string;
          /**
           * Street address.
           * @minLength 1
           */
          street?: string;
        }>;
      };
      output: {
        /** Customer payload returned by TaxJar. */
        customer: Record<string, unknown>;
      };
    };
    /** Update an existing TaxJar order transaction. */
    "taxjar.update_order_transaction": {
      input: {
        /**
         * Unique transaction identifier.
         * @minLength 1
         */
        transaction_id: string;
        /**
         * Transaction date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        transaction_date?: string;
        /**
         * Optional source provider name.
         * @minLength 1
         */
        provider?: string;
        /**
         * Destination country code, using ISO 3166-1 alpha-2 format.
         * @minLength 1
         */
        to_country?: string;
        /**
         * Destination ZIP or postal code.
         * @minLength 1
         */
        to_zip?: string;
        /**
         * Destination state or province.
         * @minLength 1
         */
        to_state?: string;
        /**
         * Destination city.
         * @minLength 1
         */
        to_city?: string;
        /**
         * Destination street address.
         * @minLength 1
         */
        to_street?: string;
        /**
         * Order total including shipping and excluding sales tax.
         * @minimum 0
         */
        amount?: number;
        /**
         * Shipping cost for the order.
         * @minimum 0
         */
        shipping?: number;
        /**
         * Sales tax collected for the order.
         * @minimum 0
         */
        sales_tax?: number;
        /**
         * Optional TaxJar user identifier.
         * @minLength 1
         */
        user_id?: string;
        /**
         * Exemption type applied to the order.
         * @minLength 1
         */
        exemption_type?: string;
        /** Destination latitude. */
        to_lat?: number;
        /** Destination longitude. */
        to_lng?: number;
        /**
         * Seller nexus addresses for the transaction.
         * @minItems 1
         */
        nexus_addresses?: Array<{
          /**
           * Unique identifier for this nexus address.
           * @minLength 1
           */
          id?: string;
          /**
           * Country code for the address, using ISO 3166-1 alpha-2 format.
           * @minLength 1
           */
          country: string;
          /**
           * ZIP or postal code for the address.
           * @minLength 1
           */
          zip: string;
          /**
           * State or province for the address.
           * @minLength 1
           */
          state: string;
          /**
           * City for the address.
           * @minLength 1
           */
          city?: string;
          /**
           * Street address.
           * @minLength 1
           */
          street?: string;
        }>;
        /**
         * Order line items.
         * @minItems 1
         */
        line_items?: Array<{
          /**
           * Line item identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * Number of units for this line item.
           * @minimum 1
           */
          quantity: number;
          /**
           * Price per unit for this line item.
           * @minimum 0
           */
          unit_price: number;
          /**
           * Discount amount applied to this line item.
           * @minimum 0
           */
          discount?: number;
          /**
           * Sales tax collected for this line item.
           * @minimum 0
           */
          sales_tax?: number;
          /**
           * Description of this line item.
           * @minLength 1
           */
          description?: string;
          /**
           * Product identifier, SKU, or other merchant item code.
           * @minLength 1
           */
          product_identifier?: string;
        }>;
      };
      output: {
        /** Order transaction payload returned by TaxJar. */
        order: Record<string, unknown>;
      };
    };
    /** Update an existing TaxJar refund transaction. */
    "taxjar.update_refund_transaction": {
      input: {
        /**
         * Unique refund transaction identifier.
         * @minLength 1
         */
        transaction_id: string;
        /**
         * Refund transaction date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        transaction_date?: string;
        /**
         * Original order transaction identifier.
         * @minLength 1
         */
        transaction_reference_id?: string;
        /**
         * Optional source provider name.
         * @minLength 1
         */
        provider?: string;
        /**
         * Destination country code, using ISO 3166-1 alpha-2 format.
         * @minLength 1
         */
        to_country?: string;
        /**
         * Destination ZIP or postal code.
         * @minLength 1
         */
        to_zip?: string;
        /**
         * Destination state or province.
         * @minLength 1
         */
        to_state?: string;
        /**
         * Destination city.
         * @minLength 1
         */
        to_city?: string;
        /**
         * Destination street address.
         * @minLength 1
         */
        to_street?: string;
        /**
         * Refund amount excluding sales tax.
         * @minimum 0
         */
        amount?: number;
        /**
         * Shipping amount refunded.
         * @minimum 0
         */
        shipping?: number;
        /**
         * Sales tax refunded.
         * @minimum 0
         */
        sales_tax?: number;
        /**
         * Refund line items.
         * @minItems 1
         */
        line_items?: Array<{
          /**
           * Line item identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * Number of units refunded for this line item.
           * @minimum 1
           */
          quantity: number;
          /**
           * Price per unit for this refunded line item.
           * @minimum 0
           */
          unit_price: number;
          /**
           * Sales tax refunded for this line item.
           * @minimum 0
           */
          sales_tax?: number;
          /**
           * Description of this refunded line item.
           * @minLength 1
           */
          description?: string;
          /**
           * Product identifier, SKU, or other merchant item code.
           * @minLength 1
           */
          product_identifier?: string;
        }>;
      };
      output: {
        /** Refund transaction payload returned by TaxJar. */
        refund: Record<string, unknown>;
      };
    };
    /** Validate a VAT identification number with TaxJar. */
    "taxjar.validate_vat_number": {
      input: {
        /**
         * VAT identification number to validate.
         * @minLength 1
         */
        vat_number: string;
      };
      output: {
        /** VAT validation payload returned by TaxJar. */
        validation: Record<string, unknown>;
      };
    };
  }
}
