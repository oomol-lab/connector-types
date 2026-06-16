import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Shippo address object and optionally validate it. */
    "shippo.create_address": {
      input: {
        /**
         * The first and last name of the addressee.
         * @minLength 1
         */
        name?: string;
        /**
         * The company name for the address.
         * @minLength 1
         */
        company?: string;
        /**
         * The first street line.
         * @minLength 1
         */
        street1?: string;
        /**
         * The second street line.
         * @minLength 1
         */
        street2?: string;
        /**
         * The third street line.
         * @minLength 1
         */
        street3?: string;
        /**
         * The street number for carriers that require it.
         * @minLength 1
         */
        streetNo?: string;
        /**
         * The city name.
         * @minLength 1
         */
        city?: string;
        /**
         * The state or province code.
         * @minLength 1
         */
        state?: string;
        /**
         * The postal code.
         * @minLength 1
         */
        zip?: string;
        /**
         * The ISO country code.
         * @minLength 1
         */
        country: string;
        /**
         * The phone number for the address.
         * @minLength 1
         */
        phone?: string;
        /**
         * The email address for the address.
         * @format email
         */
        email?: string;
        /** Whether the address is residential. */
        isResidential?: boolean;
        /**
         * Metadata to attach to the address.
         * @minLength 1
         * @maxLength 100
         */
        metadata?: string;
        /** Whether Shippo should validate the address during creation. */
        validate?: boolean;
      };
      output: {
        /** A Shippo address object. */
        address: {
          /** The Shippo address object ID. */
          object_id?: string;
          /** Whether Shippo considers the address complete. */
          is_complete?: boolean;
          /** Shippo validation details for the address. */
          validation_results?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Shippo parcel object from dimensions or a template. */
    "shippo.create_parcel": {
      input: {
        /**
         * The parcel length.
         * @minLength 1
         */
        length?: string;
        /**
         * The parcel width.
         * @minLength 1
         */
        width?: string;
        /**
         * The parcel height.
         * @minLength 1
         */
        height?: string;
        /** The distance unit for parcel dimensions. */
        distanceUnit?: "cm" | "in" | "ft" | "mm" | "m" | "yd";
        /**
         * The parcel weight.
         * @minLength 1
         */
        weight: string;
        /** The mass unit for parcel weight. */
        massUnit: "g" | "kg" | "lb" | "oz";
        /**
         * A Shippo parcel template token.
         * @minLength 1
         */
        template?: string;
        /**
         * Metadata to attach to the parcel.
         * @minLength 1
         * @maxLength 100
         */
        metadata?: string;
        /** Optional Shippo parcel extra services. */
        extra?: Record<string, unknown>;
      };
      output: {
        /** A Shippo parcel object. */
        parcel: {
          /** The Shippo parcel object ID. */
          object_id?: string;
          /** The validation state of the parcel object. */
          object_state?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a Shippo address by object ID. */
    "shippo.get_address": {
      input: {
        /**
         * The Shippo address object ID.
         * @minLength 1
         */
        addressId: string;
      };
      output: {
        /** A Shippo address object. */
        address: {
          /** The Shippo address object ID. */
          object_id?: string;
          /** Whether Shippo considers the address complete. */
          is_complete?: boolean;
          /** Shippo validation details for the address. */
          validation_results?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a Shippo parcel by object ID. */
    "shippo.get_parcel": {
      input: {
        /**
         * The Shippo parcel object ID.
         * @minLength 1
         */
        parcelId: string;
      };
      output: {
        /** A Shippo parcel object. */
        parcel: {
          /** The Shippo parcel object ID. */
          object_id?: string;
          /** The validation state of the parcel object. */
          object_state?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve Shippo tracking status using a carrier and tracking number. */
    "shippo.get_tracking_status": {
      input: {
        /**
         * The Shippo carrier token, such as usps or fedex.
         * @minLength 1
         */
        carrier: string;
        /**
         * The package tracking number.
         * @minLength 1
         */
        trackingNumber: string;
      };
      output: {
        /** A Shippo tracking status object. */
        track: {
          /** The package carrier. */
          carrier?: string;
          /** The tracking number. */
          tracking_number?: string;
          /** The latest Shippo tracking status. */
          tracking_status?: Record<string, unknown>;
          /** The full Shippo tracking event history. */
          tracking_history?: Array<Record<string, unknown>>;
          /** Carrier or Shippo messages for the tracking object. */
          messages?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** List address objects created in the connected Shippo account. */
    "shippo.list_addresses": {
      input: {
        /**
         * The page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @exclusiveMinimum 0
         */
        results?: number;
      };
      output: {
        /** Shippo address objects on this page. */
        results: Array<{
          /** The Shippo address object ID. */
          object_id?: string;
          /** Whether Shippo considers the address complete. */
          is_complete?: boolean;
          /** Shippo validation details for the address. */
          validation_results?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The total number of matching Shippo objects. */
        count: number;
        /** The URL for the next page, when available. */
        next: string | null;
        /** The URL for the previous page, when available. */
        previous: string | null;
        /** The raw paginated Shippo response. */
        raw: Record<string, unknown>;
      };
    };
    /** List parcel objects created in the connected Shippo account. */
    "shippo.list_parcels": {
      input: {
        /**
         * The page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @exclusiveMinimum 0
         */
        results?: number;
      };
      output: {
        /** Shippo parcel objects on this page. */
        results: Array<{
          /** The Shippo parcel object ID. */
          object_id?: string;
          /** The validation state of the parcel object. */
          object_state?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching Shippo objects. */
        count: number;
        /** The URL for the next page, when available. */
        next: string | null;
        /** The URL for the previous page, when available. */
        previous: string | null;
        /** The raw paginated Shippo response. */
        raw: Record<string, unknown>;
      };
    };
    /** Validate an existing Shippo address by object ID. */
    "shippo.validate_address": {
      input: {
        /**
         * The Shippo address object ID.
         * @minLength 1
         */
        addressId: string;
      };
      output: {
        /** A Shippo address object. */
        address: {
          /** The Shippo address object ID. */
          object_id?: string;
          /** Whether Shippo considers the address complete. */
          is_complete?: boolean;
          /** Shippo validation details for the address. */
          validation_results?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
