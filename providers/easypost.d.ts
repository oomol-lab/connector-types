import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an immutable EasyPost address for shipping workflows. */
    "easypost.create_address": {
      input: {
        /**
         * The first line of the address.
         * @minLength 1
         */
        street1: string;
        /**
         * The second line of the address.
         * @minLength 1
         */
        street2?: string;
        /**
         * The full city name.
         * @minLength 1
         */
        city: string;
        /**
         * The state or province.
         * @minLength 1
         */
        state: string;
        /**
         * The ZIP or postal code.
         * @minLength 1
         */
        zip: string;
        /**
         * The ISO 3166 country code.
         * @minLength 1
         */
        country: string;
        /**
         * The person name for the address.
         * @minLength 1
         */
        name?: string;
        /**
         * The organization name for the address.
         * @minLength 1
         */
        company?: string;
        /**
         * The phone number for the person or organization.
         * @minLength 1
         */
        phone?: string;
        /**
         * The email address for the person or organization.
         * @format email
         */
        email?: string;
        /** Whether the address should be treated as residential. */
        residential?: boolean;
        /**
         * The carrier facility designation when relevant.
         * @minLength 1
         */
        carrier_facility?: string;
        /**
         * The federal tax identifier for the person or organization.
         * @minLength 1
         */
        federal_tax_id?: string;
        /**
         * The state tax identifier for the person or organization.
         * @minLength 1
         */
        state_tax_id?: string;
        /** Set true to request EasyPost delivery and ZIP verification. */
        verify?: boolean;
        /** Set true to request strict EasyPost delivery and ZIP verification. */
        verify_strict?: boolean;
        /** The carrier-specific address verification service to use. */
        verify_carrier?: "ups" | "fedex";
      };
      output: {
        /** A JSON object returned by EasyPost. */
        address: Record<string, unknown>;
      };
    };
    /** Create an EasyPost standalone tracker from a carrier tracking code. */
    "easypost.create_tracker": {
      input: {
        /**
         * The tracking code associated with the package.
         * @minLength 1
         */
        tracking_code: string;
        /**
         * The carrier associated with the tracking code.
         * @minLength 1
         */
        carrier?: string;
      };
      output: {
        /** A JSON object returned by EasyPost. */
        tracker: Record<string, unknown>;
      };
    };
    /** Retrieve an EasyPost address by ID. */
    "easypost.get_address": {
      input: {
        /**
         * The EasyPost resource ID.
         * @minLength 1
         */
        address_id: string;
      };
      output: {
        /** A JSON object returned by EasyPost. */
        address: Record<string, unknown>;
      };
    };
    /** Retrieve an EasyPost tracker by ID. */
    "easypost.get_tracker": {
      input: {
        /**
         * The EasyPost resource ID.
         * @minLength 1
         */
        tracker_id: string;
      };
      output: {
        /** A JSON object returned by EasyPost. */
        tracker: Record<string, unknown>;
      };
    };
    /** List carrier types available to the EasyPost account. */
    "easypost.list_carrier_types": {
      input: Record<string, never>;
      output: {
        /** The EasyPost carrier types available to the account. */
        carrierTypes: Array<Record<string, unknown>>;
      };
    };
    /** List EasyPost trackers with pagination and optional carrier filters. */
    "easypost.list_trackers": {
      input: {
        /**
         * The EasyPost resource ID.
         * @minLength 1
         */
        before_id?: string;
        /**
         * The EasyPost resource ID.
         * @minLength 1
         */
        after_id?: string;
        /**
         * The number of records to return on each page.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
        /**
         * Only return trackers created after this timestamp.
         * @format date-time
         */
        start_datetime?: string;
        /**
         * Only return trackers created before this timestamp.
         * @format date-time
         */
        end_datetime?: string;
        /**
         * Only return trackers with these tracking codes.
         * @minItems 1
         */
        tracking_codes?: Array<string>;
        /**
         * Only return trackers with this carrier.
         * @minLength 1
         */
        carrier?: string;
      };
      output: {
        /** The EasyPost trackers returned for the page. */
        trackers: Array<Record<string, unknown>>;
        /** Whether another page of trackers is available. */
        hasMore: boolean;
        /** A JSON object returned by EasyPost. */
        raw: Record<string, unknown>;
      };
    };
  }
}
