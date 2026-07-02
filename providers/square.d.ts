import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Square customer profile. */
    "square.create_customer": {
      input: {
        /** Square customer fields to send in the request body. */
        customer: {
          /** The customer's given name. */
          given_name?: string;
          /** The customer's family name. */
          family_name?: string;
          /** The customer's company name. */
          company_name?: string;
          /** The customer's nickname. */
          nickname?: string;
          /** The customer's email address. */
          email_address?: string;
          /** A Square address object. */
          address?: {
            /** The first line of the address. */
            address_line_1?: string;
            /** The second line of the address. */
            address_line_2?: string;
            /** The third line of the address. */
            address_line_3?: string;
            /** The city or locality. */
            locality?: string;
            /** The neighborhood or sublocality. */
            sublocality?: string;
            /** The first-level administrative district. */
            administrative_district_level_1?: string;
            /** The postal code. */
            postal_code?: string;
            /** The country code. */
            country?: string;
            [key: string]: unknown;
          };
          /** The customer's phone number. */
          phone_number?: string;
          /** The merchant-defined customer reference ID. */
          reference_id?: string;
          /** The merchant-defined note for the customer. */
          note?: string;
          /** The customer's birthday in Square format. */
          birthday?: string;
          /** Square customer tax IDs. */
          tax_ids?: {
            /** The customer's EU VAT ID. */
            eu_vat?: string;
            [key: string]: unknown;
          };
          /** The Square customer version for optimistic concurrency. */
          version?: number;
          [key: string]: unknown;
        };
        /**
         * A unique key that makes the Square write request idempotent.
         * @minLength 1
         */
        idempotency_key?: string;
      };
      output: {
        /** A Square customer profile. */
        customer: {
          /** The Square customer ID. */
          id?: string;
          /** The time when Square created the customer. */
          created_at?: string;
          /** The time when Square last updated the customer. */
          updated_at?: string;
          /** Cards associated with the customer. */
          cards?: Array<Record<string, unknown>>;
          /** The customer's given name. */
          given_name?: string;
          /** The customer's family name. */
          family_name?: string;
          /** The customer's nickname. */
          nickname?: string;
          /** The customer's company name. */
          company_name?: string;
          /** The customer's email address. */
          email_address?: string;
          /** A Square address object. */
          address?: {
            /** The first line of the address. */
            address_line_1?: string;
            /** The second line of the address. */
            address_line_2?: string;
            /** The third line of the address. */
            address_line_3?: string;
            /** The city or locality. */
            locality?: string;
            /** The neighborhood or sublocality. */
            sublocality?: string;
            /** The first-level administrative district. */
            administrative_district_level_1?: string;
            /** The postal code. */
            postal_code?: string;
            /** The country code. */
            country?: string;
            [key: string]: unknown;
          };
          /** The customer's phone number. */
          phone_number?: string;
          /** The customer's birthday in Square format. */
          birthday?: string;
          /** The merchant-defined customer reference ID. */
          reference_id?: string;
          /** The merchant-defined note for the customer. */
          note?: string;
          /** Square customer preferences. */
          preferences?: {
            /** Whether the customer is unsubscribed from marketing email. */
            email_unsubscribed?: boolean;
            [key: string]: unknown;
          };
          /** The Square customer creation source. */
          creation_source?: string;
          /** Customer group IDs returned by Square. */
          group_ids?: Array<string>;
          /** Customer segment IDs returned by Square. */
          segment_ids?: Array<string>;
          /** Square customer tax IDs. */
          tax_ids?: {
            /** The customer's EU VAT ID. */
            eu_vat?: string;
            [key: string]: unknown;
          };
          /** The Square customer version for optimistic concurrency. */
          version?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Square customer profile by ID. */
    "square.get_customer": {
      input: {
        /**
         * The Square customer ID.
         * @minLength 1
         */
        customer_id: string;
      };
      output: {
        /** A Square customer profile. */
        customer: {
          /** The Square customer ID. */
          id?: string;
          /** The time when Square created the customer. */
          created_at?: string;
          /** The time when Square last updated the customer. */
          updated_at?: string;
          /** Cards associated with the customer. */
          cards?: Array<Record<string, unknown>>;
          /** The customer's given name. */
          given_name?: string;
          /** The customer's family name. */
          family_name?: string;
          /** The customer's nickname. */
          nickname?: string;
          /** The customer's company name. */
          company_name?: string;
          /** The customer's email address. */
          email_address?: string;
          /** A Square address object. */
          address?: {
            /** The first line of the address. */
            address_line_1?: string;
            /** The second line of the address. */
            address_line_2?: string;
            /** The third line of the address. */
            address_line_3?: string;
            /** The city or locality. */
            locality?: string;
            /** The neighborhood or sublocality. */
            sublocality?: string;
            /** The first-level administrative district. */
            administrative_district_level_1?: string;
            /** The postal code. */
            postal_code?: string;
            /** The country code. */
            country?: string;
            [key: string]: unknown;
          };
          /** The customer's phone number. */
          phone_number?: string;
          /** The customer's birthday in Square format. */
          birthday?: string;
          /** The merchant-defined customer reference ID. */
          reference_id?: string;
          /** The merchant-defined note for the customer. */
          note?: string;
          /** Square customer preferences. */
          preferences?: {
            /** Whether the customer is unsubscribed from marketing email. */
            email_unsubscribed?: boolean;
            [key: string]: unknown;
          };
          /** The Square customer creation source. */
          creation_source?: string;
          /** Customer group IDs returned by Square. */
          group_ids?: Array<string>;
          /** Customer segment IDs returned by Square. */
          segment_ids?: Array<string>;
          /** Square customer tax IDs. */
          tax_ids?: {
            /** The customer's EU VAT ID. */
            eu_vat?: string;
            [key: string]: unknown;
          };
          /** The Square customer version for optimistic concurrency. */
          version?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List Square customer profiles with cursor pagination. */
    "square.list_customers": {
      input: {
        /**
         * Cursor token returned by a previous Square page.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of records to return. Square allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The Square customer list sort field. */
        sort_field?: "DEFAULT" | "CREATED_AT";
      };
      output: {
        /** Customers returned by Square. */
        customers: Array<{
          /** The Square customer ID. */
          id?: string;
          /** The time when Square created the customer. */
          created_at?: string;
          /** The time when Square last updated the customer. */
          updated_at?: string;
          /** Cards associated with the customer. */
          cards?: Array<Record<string, unknown>>;
          /** The customer's given name. */
          given_name?: string;
          /** The customer's family name. */
          family_name?: string;
          /** The customer's nickname. */
          nickname?: string;
          /** The customer's company name. */
          company_name?: string;
          /** The customer's email address. */
          email_address?: string;
          /** A Square address object. */
          address?: {
            /** The first line of the address. */
            address_line_1?: string;
            /** The second line of the address. */
            address_line_2?: string;
            /** The third line of the address. */
            address_line_3?: string;
            /** The city or locality. */
            locality?: string;
            /** The neighborhood or sublocality. */
            sublocality?: string;
            /** The first-level administrative district. */
            administrative_district_level_1?: string;
            /** The postal code. */
            postal_code?: string;
            /** The country code. */
            country?: string;
            [key: string]: unknown;
          };
          /** The customer's phone number. */
          phone_number?: string;
          /** The customer's birthday in Square format. */
          birthday?: string;
          /** The merchant-defined customer reference ID. */
          reference_id?: string;
          /** The merchant-defined note for the customer. */
          note?: string;
          /** Square customer preferences. */
          preferences?: {
            /** Whether the customer is unsubscribed from marketing email. */
            email_unsubscribed?: boolean;
            [key: string]: unknown;
          };
          /** The Square customer creation source. */
          creation_source?: string;
          /** Customer group IDs returned by Square. */
          group_ids?: Array<string>;
          /** Customer segment IDs returned by Square. */
          segment_ids?: Array<string>;
          /** Square customer tax IDs. */
          tax_ids?: {
            /** The customer's EU VAT ID. */
            eu_vat?: string;
            [key: string]: unknown;
          };
          /** The Square customer version for optimistic concurrency. */
          version?: number;
          [key: string]: unknown;
        }>;
        /** Cursor returned by Square, when another page is available. */
        cursor: string | null;
        /** Cursor to pass into the next request, when one is available. */
        nextCursor: string | null;
      };
    };
    /** List Square seller locations for the connected access token. */
    "square.list_locations": {
      input: Record<string, never>;
      output: {
        /** Locations returned by Square. */
        locations: Array<{
          /** The Square location ID. */
          id?: string;
          /** The Square location name. */
          name?: string;
          /** A Square address object. */
          address?: {
            /** The first line of the address. */
            address_line_1?: string;
            /** The second line of the address. */
            address_line_2?: string;
            /** The third line of the address. */
            address_line_3?: string;
            /** The city or locality. */
            locality?: string;
            /** The neighborhood or sublocality. */
            sublocality?: string;
            /** The first-level administrative district. */
            administrative_district_level_1?: string;
            /** The postal code. */
            postal_code?: string;
            /** The country code. */
            country?: string;
            [key: string]: unknown;
          };
          /** The IANA timezone for the location. */
          timezone?: string;
          /** Capabilities enabled for the location. */
          capabilities?: Array<string>;
          /** The Square location status. */
          status?: string;
          /** The time when Square created the location. */
          created_at?: string;
          /** The Square merchant ID. */
          merchant_id?: string;
          /** The location country code. */
          country?: string;
          /** The location language code. */
          language_code?: string;
          /** The location currency code. */
          currency?: string;
          /** The location phone number. */
          phone_number?: string;
          /** The public business name for the location. */
          business_name?: string;
          /** The Square location type. */
          type?: string;
          /** The location description. */
          description?: string;
          /** Square geographic coordinates. */
          coordinates?: {
            /** The latitude coordinate. */
            latitude?: number;
            /** The longitude coordinate. */
            longitude?: number;
            [key: string]: unknown;
          };
          /** Square business hours. */
          business_hours?: {
            /** Business-hour periods returned by Square. */
            periods?: Array<{
              /** The day of week for the period. */
              day_of_week?: string;
              /** The local opening time. */
              start_local_time?: string;
              /** The local closing time. */
              end_local_time?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** The merchant category code. */
          mcc?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Square customer profiles with supported Square filters. */
    "square.search_customers": {
      input: {
        /** Square customer search query. */
        query?: {
          /** Square customer search filters. */
          filter?: Record<string, unknown>;
          /** Square customer search sort options. */
          sort?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /**
         * Maximum number of records to return. Square allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Cursor token returned by a previous Square page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Customers returned by Square. */
        customers: Array<{
          /** The Square customer ID. */
          id?: string;
          /** The time when Square created the customer. */
          created_at?: string;
          /** The time when Square last updated the customer. */
          updated_at?: string;
          /** Cards associated with the customer. */
          cards?: Array<Record<string, unknown>>;
          /** The customer's given name. */
          given_name?: string;
          /** The customer's family name. */
          family_name?: string;
          /** The customer's nickname. */
          nickname?: string;
          /** The customer's company name. */
          company_name?: string;
          /** The customer's email address. */
          email_address?: string;
          /** A Square address object. */
          address?: {
            /** The first line of the address. */
            address_line_1?: string;
            /** The second line of the address. */
            address_line_2?: string;
            /** The third line of the address. */
            address_line_3?: string;
            /** The city or locality. */
            locality?: string;
            /** The neighborhood or sublocality. */
            sublocality?: string;
            /** The first-level administrative district. */
            administrative_district_level_1?: string;
            /** The postal code. */
            postal_code?: string;
            /** The country code. */
            country?: string;
            [key: string]: unknown;
          };
          /** The customer's phone number. */
          phone_number?: string;
          /** The customer's birthday in Square format. */
          birthday?: string;
          /** The merchant-defined customer reference ID. */
          reference_id?: string;
          /** The merchant-defined note for the customer. */
          note?: string;
          /** Square customer preferences. */
          preferences?: {
            /** Whether the customer is unsubscribed from marketing email. */
            email_unsubscribed?: boolean;
            [key: string]: unknown;
          };
          /** The Square customer creation source. */
          creation_source?: string;
          /** Customer group IDs returned by Square. */
          group_ids?: Array<string>;
          /** Customer segment IDs returned by Square. */
          segment_ids?: Array<string>;
          /** Square customer tax IDs. */
          tax_ids?: {
            /** The customer's EU VAT ID. */
            eu_vat?: string;
            [key: string]: unknown;
          };
          /** The Square customer version for optimistic concurrency. */
          version?: number;
          [key: string]: unknown;
        }>;
        /** Cursor returned by Square, when another page is available. */
        cursor: string | null;
        /** Cursor to pass into the next request, when one is available. */
        nextCursor: string | null;
      };
    };
    /** Update a Square customer profile by ID. */
    "square.update_customer": {
      input: {
        /**
         * The Square customer ID.
         * @minLength 1
         */
        customer_id: string;
        /** Square customer fields to send in the request body. */
        customer: {
          /** The customer's given name. */
          given_name?: string;
          /** The customer's family name. */
          family_name?: string;
          /** The customer's company name. */
          company_name?: string;
          /** The customer's nickname. */
          nickname?: string;
          /** The customer's email address. */
          email_address?: string;
          /** A Square address object. */
          address?: {
            /** The first line of the address. */
            address_line_1?: string;
            /** The second line of the address. */
            address_line_2?: string;
            /** The third line of the address. */
            address_line_3?: string;
            /** The city or locality. */
            locality?: string;
            /** The neighborhood or sublocality. */
            sublocality?: string;
            /** The first-level administrative district. */
            administrative_district_level_1?: string;
            /** The postal code. */
            postal_code?: string;
            /** The country code. */
            country?: string;
            [key: string]: unknown;
          };
          /** The customer's phone number. */
          phone_number?: string;
          /** The merchant-defined customer reference ID. */
          reference_id?: string;
          /** The merchant-defined note for the customer. */
          note?: string;
          /** The customer's birthday in Square format. */
          birthday?: string;
          /** Square customer tax IDs. */
          tax_ids?: {
            /** The customer's EU VAT ID. */
            eu_vat?: string;
            [key: string]: unknown;
          };
          /** The Square customer version for optimistic concurrency. */
          version?: number;
          [key: string]: unknown;
        };
      };
      output: {
        /** A Square customer profile. */
        customer: {
          /** The Square customer ID. */
          id?: string;
          /** The time when Square created the customer. */
          created_at?: string;
          /** The time when Square last updated the customer. */
          updated_at?: string;
          /** Cards associated with the customer. */
          cards?: Array<Record<string, unknown>>;
          /** The customer's given name. */
          given_name?: string;
          /** The customer's family name. */
          family_name?: string;
          /** The customer's nickname. */
          nickname?: string;
          /** The customer's company name. */
          company_name?: string;
          /** The customer's email address. */
          email_address?: string;
          /** A Square address object. */
          address?: {
            /** The first line of the address. */
            address_line_1?: string;
            /** The second line of the address. */
            address_line_2?: string;
            /** The third line of the address. */
            address_line_3?: string;
            /** The city or locality. */
            locality?: string;
            /** The neighborhood or sublocality. */
            sublocality?: string;
            /** The first-level administrative district. */
            administrative_district_level_1?: string;
            /** The postal code. */
            postal_code?: string;
            /** The country code. */
            country?: string;
            [key: string]: unknown;
          };
          /** The customer's phone number. */
          phone_number?: string;
          /** The customer's birthday in Square format. */
          birthday?: string;
          /** The merchant-defined customer reference ID. */
          reference_id?: string;
          /** The merchant-defined note for the customer. */
          note?: string;
          /** Square customer preferences. */
          preferences?: {
            /** Whether the customer is unsubscribed from marketing email. */
            email_unsubscribed?: boolean;
            [key: string]: unknown;
          };
          /** The Square customer creation source. */
          creation_source?: string;
          /** Customer group IDs returned by Square. */
          group_ids?: Array<string>;
          /** Customer segment IDs returned by Square. */
          segment_ids?: Array<string>;
          /** Square customer tax IDs. */
          tax_ids?: {
            /** The customer's EU VAT ID. */
            eu_vat?: string;
            [key: string]: unknown;
          };
          /** The Square customer version for optimistic concurrency. */
          version?: number;
          [key: string]: unknown;
        };
      };
    };
  }
}
