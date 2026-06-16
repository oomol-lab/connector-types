import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one MoonClerk customer by its numeric ID. */
    "moonclerk.get_customer": {
      input: {
        /**
         * The MoonClerk numeric identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The MoonClerk customer object. */
        customer: {
          /**
           * The MoonClerk numeric identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The amount in cents as returned by MoonClerk. */
          account_balance?: number;
          /** The customer name. */
          name?: string;
          /** The customer email address. */
          email?: string;
          /** The payment method details returned by MoonClerk. */
          payment_method?: {
            /** The payment method type, such as card. */
            type?: string;
            /** The last four digits of the payment method. */
            last4?: string;
            /** The payment card expiration month. */
            exp_month?: number;
            /** The payment card expiration year. */
            exp_year?: number;
            /** The payment card brand. */
            brand?: string;
          } | null;
          /** The custom ID supplied through MoonClerk integrations. */
          custom_id?: string | null;
          /** The related Stripe customer reference. */
          customer_reference?: string | null;
          /** The discount details returned by MoonClerk. */
          discount?: {
            /** The coupon details returned by MoonClerk. */
            coupon?: {
              /** The coupon code. */
              code?: string;
              /** The coupon duration type. */
              duration?: string;
              /** The amount in cents as returned by MoonClerk when a value exists. */
              amount_off?: number | null;
              /** The coupon currency. */
              currency?: string | null;
              /** The coupon percent discount when present. */
              percent_off?: number | null;
              /** The number of months the coupon is active. */
              duration_in_months?: number | null;
              /** The coupon redemption limit when present. */
              max_redemptions?: number | null;
              /**
               * The coupon redemption deadline in UTC.
               * @format date-time
               */
              redeem_by?: string | null;
            };
            /**
             * The discount start timestamp in UTC.
             * @format date-time
             */
            starts_at?: string | null;
            /**
             * The discount end timestamp in UTC.
             * @format date-time
             */
            ends_at?: string | null;
          } | null;
          /** Whether the customer is currently delinquent. */
          delinquent?: boolean;
          /** The MoonClerk management URL for the customer. */
          management_url?: string | null;
          /** The custom fields returned for the customer. */
          custom_fields?: Record<string, {
              /** The numeric custom field identifier. */
              id?: number;
              /** The custom field type. */
              type?: string;
              /** The custom field response value. */
              response?: string | {
                /** The first address line. */
                line1?: string;
                /** The second address line. */
                line2?: string;
                /** The address city. */
                city?: string;
                /** The address state or region. */
                state?: string;
                /** The postal or ZIP code. */
                postal_code?: string;
                /** The country name. */
                country?: string;
              } | string | null | {
                /** The first address line. */
                line1?: string;
                /** The second address line. */
                line2?: string;
                /** The address city. */
                city?: string;
                /** The address state or region. */
                state?: string;
                /** The postal or ZIP code. */
                postal_code?: string;
                /** The country name. */
                country?: string;
              } | null | unknown;
            }>;
          /** The associated MoonClerk form ID. */
          form_id?: number | null;
          /** The checkout details returned by MoonClerk. */
          checkout?: {
            /** The amount in cents as returned by MoonClerk when a value exists. */
            amount_due?: number | null;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            coupon_amount?: number | null;
            /** The coupon code applied during checkout. */
            coupon_code?: string | null;
            /**
             * The checkout timestamp in UTC.
             * @format date-time
             */
            date?: string | null;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            fee?: number | null;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            subtotal?: number | null;
            /** The MoonClerk checkout token. */
            token?: string | null;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            total?: number | null;
            /** The checkout trial period in days. */
            trial_period_days?: number | null;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            upfront_amount?: number | null;
          } | null;
          /** The subscription details returned by MoonClerk. */
          subscription?: {
            /** The MoonClerk subscription identifier. */
            id?: number | null;
            /** The related Stripe subscription reference. */
            subscription_reference?: string | null;
            /** The subscription status. */
            status?: string | null;
            /**
             * The subscription start timestamp in UTC.
             * @format date-time
             */
            start?: string | null;
            /**
             * The first payment attempt timestamp in UTC.
             * @format date-time
             */
            first_payment_attempt?: string | null;
            /**
             * The next payment attempt timestamp in UTC.
             * @format date-time
             */
            next_payment_attempt?: string | null;
            /**
             * The current billing period start in UTC.
             * @format date-time
             */
            current_period_start?: string | null;
            /**
             * The current billing period end in UTC.
             * @format date-time
             */
            current_period_end?: string | null;
            /**
             * The trial start timestamp in UTC.
             * @format date-time
             */
            trial_start?: string | null;
            /**
             * The trial end timestamp in UTC.
             * @format date-time
             */
            trial_end?: string | null;
            /** The subscription trial period in days. */
            trial_period_days?: number | null;
            /**
             * The subscription expiry timestamp in UTC.
             * @format date-time
             */
            expires_at?: string | null;
            /**
             * The subscription cancellation timestamp in UTC.
             * @format date-time
             */
            canceled_at?: string | null;
            /**
             * The subscription end timestamp in UTC.
             * @format date-time
             */
            ended_at?: string | null;
            /** The subscription plan details returned by MoonClerk. */
            plan?: {
              /** The MoonClerk plan identifier. */
              id?: number | null;
              /** The related Stripe plan reference. */
              plan_reference?: string | null;
              /** The amount in cents as returned by MoonClerk when a value exists. */
              amount?: number | null;
              /** The plan amount description. */
              amount_description?: string | null;
              /** The plan currency. */
              currency?: string | null;
              /** The billing interval. */
              interval?: string | null;
              /** The billing interval count. */
              interval_count?: number | null;
            } | null;
          } | null;
        };
      };
    };
    /** Retrieve one MoonClerk payment form by its numeric ID. */
    "moonclerk.get_form": {
      input: {
        /**
         * The MoonClerk numeric identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The MoonClerk form object. */
        form: {
          /**
           * The MoonClerk numeric identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The MoonClerk form title. */
          title: string;
          /** The public access token for the form. */
          access_token?: string;
          /** The form currency. */
          currency?: string;
          /** The amount in cents as returned by MoonClerk. */
          payment_volume?: number;
          /** The number of successful checkouts for the form. */
          successful_checkout_count?: number;
          /**
           * The form creation timestamp in UTC.
           * @format date-time
           */
          created_at?: string;
          /**
           * The form last update timestamp in UTC.
           * @format date-time
           */
          updated_at?: string;
        };
      };
    };
    /** Retrieve one MoonClerk payment by its numeric ID. */
    "moonclerk.get_payment": {
      input: {
        /**
         * The MoonClerk numeric identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The MoonClerk payment object. */
        payment: {
          /**
           * The MoonClerk numeric identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The payment timestamp in UTC.
           * @format date-time
           */
          date?: string;
          /** The payment status. */
          status?: string;
          /** The payment currency. */
          currency?: string;
          /** The amount in cents as returned by MoonClerk. */
          amount?: number;
          /** The amount in cents as returned by MoonClerk. */
          fee?: number;
          /** The amount in cents as returned by MoonClerk. */
          amount_refunded?: number;
          /** The payment amount description. */
          amount_description?: string | null;
          /** The payer name. */
          name?: string;
          /** The payer email address. */
          email?: string;
          /** The payment method details returned by MoonClerk. */
          payment_method?: {
            /** The payment method type, such as card. */
            type?: string;
            /** The last four digits of the payment method. */
            last4?: string;
            /** The payment card expiration month. */
            exp_month?: number;
            /** The payment card expiration year. */
            exp_year?: number;
            /** The payment card brand. */
            brand?: string;
          } | null;
          /** The related Stripe charge reference. */
          charge_reference?: string | null;
          /** The associated MoonClerk customer ID. */
          customer_id?: number | null;
          /** The related Stripe customer reference. */
          customer_reference?: string | null;
          /** The related Stripe invoice reference. */
          invoice_reference?: string | null;
          /** The custom fields returned for the payment. */
          custom_fields?: Record<string, {
              /** The numeric custom field identifier. */
              id?: number;
              /** The custom field type. */
              type?: string;
              /** The custom field response value. */
              response?: string | {
                /** The first address line. */
                line1?: string;
                /** The second address line. */
                line2?: string;
                /** The address city. */
                city?: string;
                /** The address state or region. */
                state?: string;
                /** The postal or ZIP code. */
                postal_code?: string;
                /** The country name. */
                country?: string;
              } | string | null | {
                /** The first address line. */
                line1?: string;
                /** The second address line. */
                line2?: string;
                /** The address city. */
                city?: string;
                /** The address state or region. */
                state?: string;
                /** The postal or ZIP code. */
                postal_code?: string;
                /** The country name. */
                country?: string;
              } | null | unknown;
            }>;
          /** The associated MoonClerk form ID. */
          form_id?: number | null;
          /** The custom ID supplied through MoonClerk integrations. */
          custom_id?: string | null;
          /** The checkout details returned by MoonClerk. */
          checkout?: {
            /** The amount in cents as returned by MoonClerk when a value exists. */
            amount_due?: number | null;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            coupon_amount?: number | null;
            /** The coupon code applied during checkout. */
            coupon_code?: string | null;
            /**
             * The checkout timestamp in UTC.
             * @format date-time
             */
            date?: string | null;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            fee?: number | null;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            subtotal?: number | null;
            /** The MoonClerk checkout token. */
            token?: string | null;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            total?: number | null;
            /** The checkout trial period in days. */
            trial_period_days?: number | null;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            upfront_amount?: number | null;
          } | null;
          /** The coupon details returned by MoonClerk. */
          coupon?: {
            /** The coupon code. */
            code?: string;
            /** The coupon duration type. */
            duration?: string;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            amount_off?: number | null;
            /** The coupon currency. */
            currency?: string | null;
            /** The coupon percent discount when present. */
            percent_off?: number | null;
            /** The number of months the coupon is active. */
            duration_in_months?: number | null;
            /** The coupon redemption limit when present. */
            max_redemptions?: number | null;
            /**
             * The coupon redemption deadline in UTC.
             * @format date-time
             */
            redeem_by?: string | null;
          } | null;
        };
      };
    };
    /** List MoonClerk customers with official filters for form, checkout date, next payment date, and status. */
    "moonclerk.list_customers": {
      input: {
        /**
         * The number of rows to return. MoonClerk accepts values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /**
         * The starting offset for pagination in the current result set.
         * @minimum 0
         */
        offset?: number;
        /**
         * The MoonClerk numeric identifier.
         * @exclusiveMinimum 0
         */
        form_id?: number;
        /**
         * The date in YYYY-MM-DD format required by MoonClerk.
         * @format date
         */
        checkout_from?: string;
        /**
         * The date in YYYY-MM-DD format required by MoonClerk.
         * @format date
         */
        checkout_to?: string;
        /**
         * The date in YYYY-MM-DD format required by MoonClerk.
         * @format date
         */
        next_payment_from?: string;
        /**
         * The date in YYYY-MM-DD format required by MoonClerk.
         * @format date
         */
        next_payment_to?: string;
        /** The MoonClerk customer subscription status filter. */
        status?: "active" | "canceled" | "expired" | "past_due" | "pending" | "unpaid";
      };
      output: {
        /** The customers returned by MoonClerk. */
        customers: Array<{
          /**
           * The MoonClerk numeric identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The amount in cents as returned by MoonClerk. */
          account_balance?: number;
          /** The customer name. */
          name?: string;
          /** The customer email address. */
          email?: string;
          /** The payment method details returned by MoonClerk. */
          payment_method?: {
            /** The payment method type, such as card. */
            type?: string;
            /** The last four digits of the payment method. */
            last4?: string;
            /** The payment card expiration month. */
            exp_month?: number;
            /** The payment card expiration year. */
            exp_year?: number;
            /** The payment card brand. */
            brand?: string;
          } | null;
          /** The custom ID supplied through MoonClerk integrations. */
          custom_id?: string | null;
          /** The related Stripe customer reference. */
          customer_reference?: string | null;
          /** The discount details returned by MoonClerk. */
          discount?: {
            /** The coupon details returned by MoonClerk. */
            coupon?: {
              /** The coupon code. */
              code?: string;
              /** The coupon duration type. */
              duration?: string;
              /** The amount in cents as returned by MoonClerk when a value exists. */
              amount_off?: number | null;
              /** The coupon currency. */
              currency?: string | null;
              /** The coupon percent discount when present. */
              percent_off?: number | null;
              /** The number of months the coupon is active. */
              duration_in_months?: number | null;
              /** The coupon redemption limit when present. */
              max_redemptions?: number | null;
              /**
               * The coupon redemption deadline in UTC.
               * @format date-time
               */
              redeem_by?: string | null;
            };
            /**
             * The discount start timestamp in UTC.
             * @format date-time
             */
            starts_at?: string | null;
            /**
             * The discount end timestamp in UTC.
             * @format date-time
             */
            ends_at?: string | null;
          } | null;
          /** Whether the customer is currently delinquent. */
          delinquent?: boolean;
          /** The MoonClerk management URL for the customer. */
          management_url?: string | null;
          /** The custom fields returned for the customer. */
          custom_fields?: Record<string, {
              /** The numeric custom field identifier. */
              id?: number;
              /** The custom field type. */
              type?: string;
              /** The custom field response value. */
              response?: string | {
                /** The first address line. */
                line1?: string;
                /** The second address line. */
                line2?: string;
                /** The address city. */
                city?: string;
                /** The address state or region. */
                state?: string;
                /** The postal or ZIP code. */
                postal_code?: string;
                /** The country name. */
                country?: string;
              } | string | null | {
                /** The first address line. */
                line1?: string;
                /** The second address line. */
                line2?: string;
                /** The address city. */
                city?: string;
                /** The address state or region. */
                state?: string;
                /** The postal or ZIP code. */
                postal_code?: string;
                /** The country name. */
                country?: string;
              } | null | unknown;
            }>;
          /** The associated MoonClerk form ID. */
          form_id?: number | null;
          /** The checkout details returned by MoonClerk. */
          checkout?: {
            /** The amount in cents as returned by MoonClerk when a value exists. */
            amount_due?: number | null;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            coupon_amount?: number | null;
            /** The coupon code applied during checkout. */
            coupon_code?: string | null;
            /**
             * The checkout timestamp in UTC.
             * @format date-time
             */
            date?: string | null;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            fee?: number | null;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            subtotal?: number | null;
            /** The MoonClerk checkout token. */
            token?: string | null;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            total?: number | null;
            /** The checkout trial period in days. */
            trial_period_days?: number | null;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            upfront_amount?: number | null;
          } | null;
          /** The subscription details returned by MoonClerk. */
          subscription?: {
            /** The MoonClerk subscription identifier. */
            id?: number | null;
            /** The related Stripe subscription reference. */
            subscription_reference?: string | null;
            /** The subscription status. */
            status?: string | null;
            /**
             * The subscription start timestamp in UTC.
             * @format date-time
             */
            start?: string | null;
            /**
             * The first payment attempt timestamp in UTC.
             * @format date-time
             */
            first_payment_attempt?: string | null;
            /**
             * The next payment attempt timestamp in UTC.
             * @format date-time
             */
            next_payment_attempt?: string | null;
            /**
             * The current billing period start in UTC.
             * @format date-time
             */
            current_period_start?: string | null;
            /**
             * The current billing period end in UTC.
             * @format date-time
             */
            current_period_end?: string | null;
            /**
             * The trial start timestamp in UTC.
             * @format date-time
             */
            trial_start?: string | null;
            /**
             * The trial end timestamp in UTC.
             * @format date-time
             */
            trial_end?: string | null;
            /** The subscription trial period in days. */
            trial_period_days?: number | null;
            /**
             * The subscription expiry timestamp in UTC.
             * @format date-time
             */
            expires_at?: string | null;
            /**
             * The subscription cancellation timestamp in UTC.
             * @format date-time
             */
            canceled_at?: string | null;
            /**
             * The subscription end timestamp in UTC.
             * @format date-time
             */
            ended_at?: string | null;
            /** The subscription plan details returned by MoonClerk. */
            plan?: {
              /** The MoonClerk plan identifier. */
              id?: number | null;
              /** The related Stripe plan reference. */
              plan_reference?: string | null;
              /** The amount in cents as returned by MoonClerk when a value exists. */
              amount?: number | null;
              /** The plan amount description. */
              amount_description?: string | null;
              /** The plan currency. */
              currency?: string | null;
              /** The billing interval. */
              interval?: string | null;
              /** The billing interval count. */
              interval_count?: number | null;
            } | null;
          } | null;
        }>;
      };
    };
    /** List MoonClerk payment forms with official pagination parameters. */
    "moonclerk.list_forms": {
      input: {
        /**
         * The number of rows to return. MoonClerk accepts values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /**
         * The starting offset for pagination in the current result set.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The forms returned by MoonClerk. */
        forms: Array<{
          /**
           * The MoonClerk numeric identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The MoonClerk form title. */
          title: string;
          /** The public access token for the form. */
          access_token?: string;
          /** The form currency. */
          currency?: string;
          /** The amount in cents as returned by MoonClerk. */
          payment_volume?: number;
          /** The number of successful checkouts for the form. */
          successful_checkout_count?: number;
          /**
           * The form creation timestamp in UTC.
           * @format date-time
           */
          created_at?: string;
          /**
           * The form last update timestamp in UTC.
           * @format date-time
           */
          updated_at?: string;
        }>;
      };
    };
    /** List MoonClerk payments with official filters for form, customer, payment date, and status. */
    "moonclerk.list_payments": {
      input: {
        /**
         * The number of rows to return. MoonClerk accepts values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /**
         * The starting offset for pagination in the current result set.
         * @minimum 0
         */
        offset?: number;
        /**
         * The MoonClerk numeric identifier.
         * @exclusiveMinimum 0
         */
        form_id?: number;
        /**
         * The MoonClerk numeric identifier.
         * @exclusiveMinimum 0
         */
        customer_id?: number;
        /**
         * The date in YYYY-MM-DD format required by MoonClerk.
         * @format date
         */
        date_from?: string;
        /**
         * The date in YYYY-MM-DD format required by MoonClerk.
         * @format date
         */
        date_to?: string;
        /** The MoonClerk payment status filter. */
        status?: "successful" | "refunded" | "failed";
      };
      output: {
        /** The payments returned by MoonClerk. */
        payments: Array<{
          /**
           * The MoonClerk numeric identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The payment timestamp in UTC.
           * @format date-time
           */
          date?: string;
          /** The payment status. */
          status?: string;
          /** The payment currency. */
          currency?: string;
          /** The amount in cents as returned by MoonClerk. */
          amount?: number;
          /** The amount in cents as returned by MoonClerk. */
          fee?: number;
          /** The amount in cents as returned by MoonClerk. */
          amount_refunded?: number;
          /** The payment amount description. */
          amount_description?: string | null;
          /** The payer name. */
          name?: string;
          /** The payer email address. */
          email?: string;
          /** The payment method details returned by MoonClerk. */
          payment_method?: {
            /** The payment method type, such as card. */
            type?: string;
            /** The last four digits of the payment method. */
            last4?: string;
            /** The payment card expiration month. */
            exp_month?: number;
            /** The payment card expiration year. */
            exp_year?: number;
            /** The payment card brand. */
            brand?: string;
          } | null;
          /** The related Stripe charge reference. */
          charge_reference?: string | null;
          /** The associated MoonClerk customer ID. */
          customer_id?: number | null;
          /** The related Stripe customer reference. */
          customer_reference?: string | null;
          /** The related Stripe invoice reference. */
          invoice_reference?: string | null;
          /** The custom fields returned for the payment. */
          custom_fields?: Record<string, {
              /** The numeric custom field identifier. */
              id?: number;
              /** The custom field type. */
              type?: string;
              /** The custom field response value. */
              response?: string | {
                /** The first address line. */
                line1?: string;
                /** The second address line. */
                line2?: string;
                /** The address city. */
                city?: string;
                /** The address state or region. */
                state?: string;
                /** The postal or ZIP code. */
                postal_code?: string;
                /** The country name. */
                country?: string;
              } | string | null | {
                /** The first address line. */
                line1?: string;
                /** The second address line. */
                line2?: string;
                /** The address city. */
                city?: string;
                /** The address state or region. */
                state?: string;
                /** The postal or ZIP code. */
                postal_code?: string;
                /** The country name. */
                country?: string;
              } | null | unknown;
            }>;
          /** The associated MoonClerk form ID. */
          form_id?: number | null;
          /** The custom ID supplied through MoonClerk integrations. */
          custom_id?: string | null;
          /** The checkout details returned by MoonClerk. */
          checkout?: {
            /** The amount in cents as returned by MoonClerk when a value exists. */
            amount_due?: number | null;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            coupon_amount?: number | null;
            /** The coupon code applied during checkout. */
            coupon_code?: string | null;
            /**
             * The checkout timestamp in UTC.
             * @format date-time
             */
            date?: string | null;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            fee?: number | null;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            subtotal?: number | null;
            /** The MoonClerk checkout token. */
            token?: string | null;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            total?: number | null;
            /** The checkout trial period in days. */
            trial_period_days?: number | null;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            upfront_amount?: number | null;
          } | null;
          /** The coupon details returned by MoonClerk. */
          coupon?: {
            /** The coupon code. */
            code?: string;
            /** The coupon duration type. */
            duration?: string;
            /** The amount in cents as returned by MoonClerk when a value exists. */
            amount_off?: number | null;
            /** The coupon currency. */
            currency?: string | null;
            /** The coupon percent discount when present. */
            percent_off?: number | null;
            /** The number of months the coupon is active. */
            duration_in_months?: number | null;
            /** The coupon redemption limit when present. */
            max_redemptions?: number | null;
            /**
             * The coupon redemption deadline in UTC.
             * @format date-time
             */
            redeem_by?: string | null;
          } | null;
        }>;
      };
    };
  }
}
