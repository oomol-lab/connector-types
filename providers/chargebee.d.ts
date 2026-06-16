import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a basic Chargebee customer record from JSON-friendly fields. */
    "chargebee.create_customer": {
      input: {
        /**
         * The Chargebee customer identifier.
         * @minLength 1
         * @maxLength 50
         */
        id?: string;
        /**
         * The customer email address.
         * @format email
         */
        email?: string;
        /**
         * The customer first name.
         * @minLength 1
         * @maxLength 150
         */
        firstName?: string;
        /**
         * The customer last name.
         * @minLength 1
         * @maxLength 150
         */
        lastName?: string;
        /**
         * The customer phone number.
         * @minLength 1
         * @maxLength 50
         */
        phone?: string;
        /**
         * The customer company name.
         * @minLength 1
         * @maxLength 250
         */
        company?: string;
        /**
         * The customer VAT or tax registration number.
         * @minLength 1
         * @maxLength 20
         */
        vatNumber?: string;
        /** Whether Chargebee should auto-collect customer invoices. */
        autoCollection?: "on" | "off";
        /** The number of net term days for the customer. */
        netTermDays?: number;
        /** Customer metadata forwarded to Chargebee as meta_data fields. */
        metadata?: Record<string, string | number | boolean>;
      };
      output: {
        /** A normalized Chargebee customer. */
        customer: {
          /**
           * The Chargebee customer identifier.
           * @minLength 1
           * @maxLength 50
           */
          id: string;
          /**
           * The customer email address when returned by Chargebee.
           * @format email
           */
          email: string | null;
          /** The customer first name when returned by Chargebee. */
          firstName: string | null;
          /** The customer last name when returned by Chargebee. */
          lastName: string | null;
          /** The customer company name when returned by Chargebee. */
          company: string | null;
          /** Whether Chargebee marks the customer as deleted. */
          deleted: boolean | null;
          /** The raw customer object returned by Chargebee. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Chargebee customer by ID. */
    "chargebee.get_customer": {
      input: {
        /**
         * The Chargebee customer identifier.
         * @minLength 1
         * @maxLength 50
         */
        customerId: string;
      };
      output: {
        /** A normalized Chargebee customer. */
        customer: {
          /**
           * The Chargebee customer identifier.
           * @minLength 1
           * @maxLength 50
           */
          id: string;
          /**
           * The customer email address when returned by Chargebee.
           * @format email
           */
          email: string | null;
          /** The customer first name when returned by Chargebee. */
          firstName: string | null;
          /** The customer last name when returned by Chargebee. */
          lastName: string | null;
          /** The customer company name when returned by Chargebee. */
          company: string | null;
          /** Whether Chargebee marks the customer as deleted. */
          deleted: boolean | null;
          /** The raw customer object returned by Chargebee. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Chargebee invoice by ID. */
    "chargebee.get_invoice": {
      input: {
        /**
         * The Chargebee invoice identifier.
         * @minLength 1
         * @maxLength 50
         */
        invoiceId: string;
      };
      output: {
        /** A normalized Chargebee invoice. */
        invoice: {
          /**
           * The Chargebee invoice identifier.
           * @minLength 1
           * @maxLength 50
           */
          id: string;
          /** The Chargebee customer ID attached to the invoice. */
          customerId: string | null;
          /** The Chargebee subscription ID attached to the invoice. */
          subscriptionId: string | null;
          /** The Chargebee invoice status. */
          status: string | null;
          /** The invoice currency code. */
          currencyCode: string | null;
          /** The invoice total in the minor unit of the currency. */
          total: number | null;
          /** The paid amount in the minor unit of the currency. */
          amountPaid: number | null;
          /** The due amount in the minor unit of the currency. */
          amountDue: number | null;
          /** The invoice date timestamp in seconds. */
          date: number | null;
          /** The invoice due date timestamp in seconds. */
          dueDate: number | null;
          /** Whether Chargebee marks the invoice as deleted. */
          deleted: boolean | null;
          /** The raw invoice object returned by Chargebee. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Chargebee item price by ID. */
    "chargebee.get_item_price": {
      input: {
        /**
         * The Chargebee item price identifier.
         * @minLength 1
         * @maxLength 100
         */
        itemPriceId: string;
      };
      output: {
        /** A normalized Chargebee item price. */
        itemPrice: {
          /**
           * The Chargebee item price identifier.
           * @minLength 1
           * @maxLength 100
           */
          id: string;
          /** The Chargebee item ID attached to the item price. */
          itemId: string | null;
          /** The Chargebee item type such as plan, addon, or charge. */
          itemType: string | null;
          /** The item price display name. */
          name: string | null;
          /** The Chargebee item price status. */
          status: string | null;
          /** The item price currency code. */
          currencyCode: string | null;
          /** The item price amount in the minor unit of the currency. */
          price: number | null;
          /** The raw item_price object returned by Chargebee. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Chargebee subscription by ID. */
    "chargebee.get_subscription": {
      input: {
        /**
         * The Chargebee subscription identifier.
         * @minLength 1
         * @maxLength 50
         */
        subscriptionId: string;
      };
      output: {
        /** A normalized Chargebee subscription. */
        subscription: {
          /**
           * The Chargebee subscription identifier.
           * @minLength 1
           * @maxLength 50
           */
          id: string;
          /** The Chargebee customer ID attached to the subscription. */
          customerId: string | null;
          /** The Chargebee subscription status. */
          status: string | null;
          /** The subscription currency code. */
          currencyCode: string | null;
          /** The next billing timestamp in seconds. */
          nextBillingAt: number | null;
          /** Whether Chargebee marks the subscription as deleted. */
          deleted: boolean | null;
          /** The raw subscription object returned by Chargebee. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Chargebee customers with optional exact-match filters and pagination. */
    "chargebee.list_customers": {
      input: {
        /**
         * The maximum number of records Chargebee should return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The next_offset value returned by a previous Chargebee list call.
         * @minLength 1
         */
        offset?: string;
        /**
         * The Chargebee customer identifier.
         * @minLength 1
         * @maxLength 50
         */
        id?: string;
        /**
         * Filter customers whose email exactly matches this value.
         * @format email
         */
        email?: string;
        /** The Chargebee customer field to sort by. */
        sortBy?: "created_at" | "updated_at";
        /** The sort direction used for supported Chargebee sort keys. */
        sortOrder?: "asc" | "desc";
      };
      output: {
        /** Customers returned by Chargebee. */
        customers: Array<{
          /**
           * The Chargebee customer identifier.
           * @minLength 1
           * @maxLength 50
           */
          id: string;
          /**
           * The customer email address when returned by Chargebee.
           * @format email
           */
          email: string | null;
          /** The customer first name when returned by Chargebee. */
          firstName: string | null;
          /** The customer last name when returned by Chargebee. */
          lastName: string | null;
          /** The customer company name when returned by Chargebee. */
          company: string | null;
          /** Whether Chargebee marks the customer as deleted. */
          deleted: boolean | null;
          /** The raw customer object returned by Chargebee. */
          raw: Record<string, unknown>;
        }>;
        /** The offset token for the next page when present. */
        nextOffset: string | null;
      };
    };
    /** List Chargebee invoices with optional exact-match filters and pagination. */
    "chargebee.list_invoices": {
      input: {
        /**
         * The maximum number of records Chargebee should return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The next_offset value returned by a previous Chargebee list call.
         * @minLength 1
         */
        offset?: string;
        /**
         * The Chargebee invoice identifier.
         * @minLength 1
         * @maxLength 50
         */
        id?: string;
        /**
         * The Chargebee customer identifier.
         * @minLength 1
         * @maxLength 50
         */
        customerId?: string;
        /**
         * The Chargebee subscription identifier.
         * @minLength 1
         * @maxLength 50
         */
        subscriptionId?: string;
        /**
         * Filter invoices whose status exactly matches this value.
         * @minLength 1
         */
        status?: string;
        /** The Chargebee invoice field to sort by. */
        sortBy?: "date" | "updated_at";
        /** The sort direction used for supported Chargebee sort keys. */
        sortOrder?: "asc" | "desc";
      };
      output: {
        /** Invoices returned by Chargebee. */
        invoices: Array<{
          /**
           * The Chargebee invoice identifier.
           * @minLength 1
           * @maxLength 50
           */
          id: string;
          /** The Chargebee customer ID attached to the invoice. */
          customerId: string | null;
          /** The Chargebee subscription ID attached to the invoice. */
          subscriptionId: string | null;
          /** The Chargebee invoice status. */
          status: string | null;
          /** The invoice currency code. */
          currencyCode: string | null;
          /** The invoice total in the minor unit of the currency. */
          total: number | null;
          /** The paid amount in the minor unit of the currency. */
          amountPaid: number | null;
          /** The due amount in the minor unit of the currency. */
          amountDue: number | null;
          /** The invoice date timestamp in seconds. */
          date: number | null;
          /** The invoice due date timestamp in seconds. */
          dueDate: number | null;
          /** Whether Chargebee marks the invoice as deleted. */
          deleted: boolean | null;
          /** The raw invoice object returned by Chargebee. */
          raw: Record<string, unknown>;
        }>;
        /** The offset token for the next page when present. */
        nextOffset: string | null;
      };
    };
    /** List Chargebee item prices with optional exact-match filters and pagination. */
    "chargebee.list_item_prices": {
      input: {
        /**
         * The maximum number of records Chargebee should return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The next_offset value returned by a previous Chargebee list call.
         * @minLength 1
         */
        offset?: string;
        /**
         * The Chargebee item price identifier.
         * @minLength 1
         * @maxLength 100
         */
        id?: string;
        /**
         * A Chargebee resource identifier.
         * @minLength 1
         * @maxLength 100
         */
        itemId?: string;
        /**
         * Filter item prices whose status exactly matches this value.
         * @minLength 1
         */
        status?: string;
        /** The Chargebee item price field to sort by. */
        sortBy?: "created_at" | "updated_at";
        /** The sort direction used for supported Chargebee sort keys. */
        sortOrder?: "asc" | "desc";
      };
      output: {
        /** Item prices returned by Chargebee. */
        itemPrices: Array<{
          /**
           * The Chargebee item price identifier.
           * @minLength 1
           * @maxLength 100
           */
          id: string;
          /** The Chargebee item ID attached to the item price. */
          itemId: string | null;
          /** The Chargebee item type such as plan, addon, or charge. */
          itemType: string | null;
          /** The item price display name. */
          name: string | null;
          /** The Chargebee item price status. */
          status: string | null;
          /** The item price currency code. */
          currencyCode: string | null;
          /** The item price amount in the minor unit of the currency. */
          price: number | null;
          /** The raw item_price object returned by Chargebee. */
          raw: Record<string, unknown>;
        }>;
        /** The offset token for the next page when present. */
        nextOffset: string | null;
      };
    };
    /** List Chargebee subscriptions with optional exact-match filters and pagination. */
    "chargebee.list_subscriptions": {
      input: {
        /**
         * The maximum number of records Chargebee should return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The next_offset value returned by a previous Chargebee list call.
         * @minLength 1
         */
        offset?: string;
        /**
         * The Chargebee subscription identifier.
         * @minLength 1
         * @maxLength 50
         */
        id?: string;
        /**
         * The Chargebee customer identifier.
         * @minLength 1
         * @maxLength 50
         */
        customerId?: string;
        /**
         * Filter subscriptions whose status exactly matches this value.
         * @minLength 1
         */
        status?: string;
        /** The Chargebee subscription field to sort by. */
        sortBy?: "created_at" | "updated_at";
        /** The sort direction used for supported Chargebee sort keys. */
        sortOrder?: "asc" | "desc";
      };
      output: {
        /** Subscriptions returned by Chargebee. */
        subscriptions: Array<{
          /**
           * The Chargebee subscription identifier.
           * @minLength 1
           * @maxLength 50
           */
          id: string;
          /** The Chargebee customer ID attached to the subscription. */
          customerId: string | null;
          /** The Chargebee subscription status. */
          status: string | null;
          /** The subscription currency code. */
          currencyCode: string | null;
          /** The next billing timestamp in seconds. */
          nextBillingAt: number | null;
          /** Whether Chargebee marks the subscription as deleted. */
          deleted: boolean | null;
          /** The raw subscription object returned by Chargebee. */
          raw: Record<string, unknown>;
        }>;
        /** The offset token for the next page when present. */
        nextOffset: string | null;
      };
    };
  }
}
