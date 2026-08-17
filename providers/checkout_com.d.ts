import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Checkout.com customer for storing reusable customer details. */
    "checkout_com.create_customer": {
      input: {
        /**
         * The customer's email address.
         * @maxLength 255
         * @format email
         */
        email: string;
        /**
         * The customer's name.
         * @minLength 1
         * @maxLength 255
         */
        name?: string;
        /** The customer's phone number. */
        phone?: {
          /**
           * The international country calling code.
           * @minLength 1
           * @maxLength 7
           */
          country_code?: string;
          /**
           * The phone number.
           * @minLength 1
           * @maxLength 25
           */
          number?: string;
        };
        /** Customer metadata with up to 10 key-value pairs. */
        metadata?: Record<string, string | number | boolean>;
        /**
         * The payment instrument ID to set as the customer's default instrument.
         * @minLength 1
         */
        default?: string;
      };
      output: {
        /** The unique ID of the created customer. */
        customer_id: string;
      };
    };
    /** Delete a Checkout.com customer and all linked payment instruments. */
    "checkout_com.delete_customer": {
      input: {
        /**
         * The Checkout.com customer ID.
         * @minLength 1
         */
        customer_id: string;
      };
      output: {
        /** Whether Checkout.com accepted the customer deletion. */
        deleted: boolean;
      };
    };
    /** Get a Checkout.com customer and their linked payment instruments by ID or email. */
    "checkout_com.get_customer": {
      input: {
        /**
         * The Checkout.com customer ID or email address.
         * @minLength 1
         * @maxLength 255
         */
        identifier: string;
      };
      output: {
        /** Customer details returned by Checkout.com. */
        customer: {
          /** The unique Checkout.com customer ID. */
          id: string;
          /** The customer's email address. */
          email: string;
          /** The customer's default payment instrument ID. */
          default?: string;
          /** The customer's name. */
          name?: string;
          /** The customer's phone number. */
          phone?: Record<string, unknown>;
          /** The metadata attached to the customer. */
          metadata?: Record<string, unknown>;
          /** The payment instruments linked to the customer. */
          instruments?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Update stored details for a Checkout.com customer. */
    "checkout_com.update_customer": {
      input: {
        /**
         * The Checkout.com customer ID.
         * @minLength 1
         */
        customer_id: string;
        /**
         * The customer's email address.
         * @maxLength 255
         * @format email
         */
        email?: string;
        /**
         * The customer's name.
         * @minLength 1
         * @maxLength 255
         */
        name?: string;
        /** The customer's phone number. */
        phone?: {
          /**
           * The international country calling code.
           * @minLength 1
           * @maxLength 7
           */
          country_code?: string;
          /**
           * The phone number.
           * @minLength 1
           * @maxLength 25
           */
          number?: string;
        };
        /** Customer metadata with up to 10 key-value pairs. */
        metadata?: Record<string, string | number | boolean>;
        /**
         * The payment instrument ID to set as the customer's default instrument.
         * @minLength 1
         */
        default?: string;
      };
      output: {
        /** Whether Checkout.com accepted the customer update. */
        updated: boolean;
      };
    };
  }
}
