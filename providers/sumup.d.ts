import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a SumUp checkout, optionally enabling the SumUp-hosted payment page. */
    "sumup.create_checkout": {
      input: {
        /**
         * The merchant-defined checkout reference.
         * @minLength 1
         * @maxLength 90
         */
        checkout_reference: string;
        /** The amount to charge in major currency units. */
        amount: number;
        /** The three-letter ISO 4217 currency code. */
        currency: "BGN" | "BRL" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "HRK" | "HUF" | "NOK" | "PLN" | "RON" | "SEK" | "USD";
        /**
         * The SumUp merchant code receiving the payment.
         * @minLength 1
         */
        merchant_code: string;
        /** A short description of the checkout. */
        description?: string;
        /**
         * The backend callback URL for checkout processing updates.
         * @format uri
         */
        return_url?: string;
        /**
         * The payer redirect URL for SCA or alternative payment methods.
         * @format uri
         */
        redirect_url?: string;
        /** The business purpose of the checkout. */
        purpose?: "CHECKOUT" | "SETUP_RECURRING_PAYMENT";
        /**
         * The optional checkout expiration timestamp.
         * @format date-time
         */
        valid_until?: string | null;
        /** The saved SumUp customer identifier associated with the checkout. */
        customer_id?: string;
        /** Configuration for the SumUp-hosted checkout page. */
        hosted_checkout?: {
          /** Whether SumUp should create a hosted checkout URL. */
          enabled: boolean;
        };
      };
      output: {
        /** The checkout resource returned by SumUp. */
        checkout: Record<string, unknown>;
      };
    };
    /** Create a saved customer in SumUp for future payment workflows. */
    "sumup.create_customer": {
      input: {
        /**
         * The merchant-defined unique customer identifier.
         * @minLength 1
         */
        customer_id: string;
        /** Personal details stored for a SumUp customer. */
        personal_details?: {
          /** The customer's first name. */
          first_name?: string;
          /** The customer's last name. */
          last_name?: string;
          /** The customer's email address. */
          email?: string;
          /** The customer's phone number. */
          phone?: string;
          /**
           * The customer's birth date in YYYY-MM-DD format.
           * @format date
           */
          birth_date?: string;
          /**
           * The customer's tax identification number.
           * @maxLength 255
           */
          tax_id?: string;
          /** A postal address associated with the SumUp customer. */
          address?: {
            /** The city name. */
            city?: string;
            /**
             * The ISO 3166-1 alpha-2 country code.
             * @minLength 2
             * @maxLength 2
             */
            country?: string;
            /** The first address line. */
            line_1?: string;
            /** The second address line. */
            line_2?: string;
            /** The postal code. */
            postal_code?: string;
            /** The state or region name. */
            state?: string;
          };
        };
      };
      output: {
        /** The customer resource returned by SumUp. */
        customer: Record<string, unknown>;
      };
    };
    /** Deactivate a pending SumUp checkout so it can no longer be processed. */
    "sumup.deactivate_checkout": {
      input: {
        /**
         * The unique SumUp checkout identifier.
         * @minLength 1
         */
        checkout_id: string;
      };
      output: {
        /** The checkout resource returned by SumUp. */
        checkout: Record<string, unknown>;
      };
    };
    /** Retrieve a SumUp checkout and its current payment status. */
    "sumup.get_checkout": {
      input: {
        /**
         * The unique SumUp checkout identifier.
         * @minLength 1
         */
        checkout_id: string;
      };
      output: {
        /** The checkout resource returned by SumUp. */
        checkout: Record<string, unknown>;
      };
    };
    /** Retrieve a saved SumUp customer by its merchant-scoped identifier. */
    "sumup.get_customer": {
      input: {
        /**
         * The merchant-scoped customer identifier.
         * @minLength 1
         */
        customer_id: string;
      };
      output: {
        /** The customer resource returned by SumUp. */
        customer: Record<string, unknown>;
      };
    };
    /** List SumUp checkouts, optionally filtered by checkout reference. */
    "sumup.list_checkouts": {
      input: {
        /** The checkout reference used to filter results. */
        checkout_reference?: string;
      };
      output: {
        /** The matching SumUp checkouts. */
        checkouts: Array<Record<string, unknown>>;
      };
    };
    /** List payment instruments saved for a SumUp customer. */
    "sumup.list_payment_instruments": {
      input: {
        /**
         * The merchant-scoped customer identifier.
         * @minLength 1
         */
        customer_id: string;
      };
      output: {
        /** The customer's saved payment instruments. */
        payment_instruments: Array<Record<string, unknown>>;
      };
    };
    /** Update the supplied personal details of a saved SumUp customer. */
    "sumup.update_customer": {
      input: {
        /**
         * The merchant-scoped customer identifier.
         * @minLength 1
         */
        customer_id: string;
        /** Personal details stored for a SumUp customer. */
        personal_details: {
          /** The customer's first name. */
          first_name?: string;
          /** The customer's last name. */
          last_name?: string;
          /** The customer's email address. */
          email?: string;
          /** The customer's phone number. */
          phone?: string;
          /**
           * The customer's birth date in YYYY-MM-DD format.
           * @format date
           */
          birth_date?: string;
          /**
           * The customer's tax identification number.
           * @maxLength 255
           */
          tax_id?: string;
          /** A postal address associated with the SumUp customer. */
          address?: {
            /** The city name. */
            city?: string;
            /**
             * The ISO 3166-1 alpha-2 country code.
             * @minLength 2
             * @maxLength 2
             */
            country?: string;
            /** The first address line. */
            line_1?: string;
            /** The second address line. */
            line_2?: string;
            /** The postal code. */
            postal_code?: string;
            /** The state or region name. */
            state?: string;
          };
        };
      };
      output: {
        /** The customer resource returned by SumUp. */
        customer: Record<string, unknown>;
      };
    };
  }
}
