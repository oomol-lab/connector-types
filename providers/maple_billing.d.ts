import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Measure hosted checkout session link. */
    "maple_billing.create_checkout_session": {
      input: {
        /**
         * A Measure customer ID or external customer identifier.
         * @minLength 1
         */
        customerId: string;
        /**
         * Subscription configuration items forwarded to Measure.
         * @minItems 1
         */
        configItems: Array<Record<string, unknown>>;
        /**
         * Product pricing IDs that form the checkout session.
         * @minItems 1
         */
        productPricingIds?: Array<string>;
        /**
         * The bundle pricing ID that forms the checkout session.
         * @minLength 1
         */
        bundlePricingId?: string;
        /** The official Measure subscription term object. */
        term?: Record<string, unknown>;
        /** Whether the checkout session creates a trial subscription. */
        trial?: boolean;
        /** The official Measure trial term object. */
        trialTerm?: Record<string, unknown>;
        /** Whether the subscription is automatically charged after checkout. */
        autoCharges?: boolean;
        /** Whether the subscription auto-renews at the end of the term. */
        autoRenews?: boolean;
        /** Metadata key-value pairs forwarded to Measure. */
        metadata?: Record<string, unknown>;
        /** Official Measure checkout session options. */
        options?: Record<string, unknown>;
        /** Discounts attached to the checkout session. */
        discounts?: Array<Record<string, unknown>>;
        /** One-time charges attached to the checkout session. */
        onetimeItems?: Array<Record<string, unknown>>;
        /**
         * The existing subscription ID whose plan changes with this checkout session.
         * @minLength 1
         */
        previousSubscriptionId?: string;
        /** When Measure should apply a subscription plan change. */
        changeTiming?: "IMMEDIATE" | "PERIOD_END" | "RENEWAL";
        /** How Measure should prorate a subscription plan change. */
        changeProrationType?: "NEXT" | "IMMEDIATE" | "NONE";
        /** Whether Measure should reset the billing anchor for a subscription plan change. */
        changeResetBillingAnchor?: boolean;
        /** The Measure checkout session type. */
        type?: "CHECKOUT_SESSION";
        /**
         * The optional Measure Idempotency-Key header value for mutation requests.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** A normalized Measure checkout session. */
        checkoutSession: {
          /**
           * A Measure resource identifier.
           * @minLength 1
           */
          id: string;
          /** The hosted checkout session URL when returned by Measure. */
          url: string | null;
          /** The Measure customer ID attached to this checkout session. */
          customerId: string | null;
          /** The checkout session status returned by Measure. */
          status: string | null;
          /** The raw object returned by Measure. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a Measure customer from JSON-friendly fields. */
    "maple_billing.create_customer": {
      input: {
        /**
         * A unique identifier that ties the customer back to your system.
         * @minLength 1
         */
        identifier: string;
        /**
         * The customer email address.
         * @format email
         */
        email?: string;
        /**
         * The customer name.
         * @minLength 1
         */
        name?: string;
        /**
         * The organization this customer belongs to.
         * @minLength 1
         */
        orgName?: string;
        /**
         * The customer phone number.
         * @minLength 1
         */
        phone?: string;
        /**
         * The customer's title.
         * @minLength 1
         */
        title?: string;
        /**
         * The customer's locale.
         * @minLength 1
         */
        locale?: string;
        /** The official Measure customer address object. */
        address?: Record<string, unknown>;
        /**
         * Additional email addresses to copy on customer invoices.
         * @minItems 1
         */
        billingEmails?: Array<string>;
        /** Metadata key-value pairs forwarded to Measure. */
        metadata?: Record<string, unknown>;
        /**
         * Tags to attach to the customer.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * The company user ID assigned to manage this customer.
         * @minLength 1
         */
        ownerId?: string;
        /**
         * The parent customer ID for parent-child billing.
         * @minLength 1
         */
        parentCustomerId?: string;
        /** Whether Measure should exclude this customer from metrics. */
        excludeFromMetrics?: boolean;
        /** Whether Measure should enable rollup billing for children. */
        childRollupBilling?: boolean;
        /**
         * The optional Measure Idempotency-Key header value for mutation requests.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** A normalized Measure customer. */
        customer: {
          /**
           * A Measure resource identifier.
           * @minLength 1
           */
          id: string;
          /** The external customer identifier when returned by Measure. */
          identifier: string | null;
          /** The computed customer display name. */
          displayName: string | null;
          /** The customer email address. */
          email: string | null;
          /** The customer's organization name. */
          orgName: string | null;
          /** The customer status returned by Measure. */
          status: string | null;
          /** The raw object returned by Measure. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Search Measure customers with pagination and official query criteria. */
    "maple_billing.find_customers": {
      input: {
        /** Measure pagination parameters. */
        pagination: {
          /**
           * The maximum number of records to return.
           * @minimum 0
           * @maximum 200
           */
          limit?: number;
          /**
           * The pagination cursor returned by a previous Measure find request.
           * @minLength 1
           */
          fromKey?: string;
        };
        /** Official Measure query criteria for this find endpoint. */
        query?: Record<string, unknown>;
        /**
         * The official Measure sort_key value for this find endpoint.
         * @minLength 1
         */
        sortKey?: string;
        /** Whether Measure should include additional pagination metadata. */
        includeMeta?: boolean;
      };
      output: {
        /** Customers returned by Measure. */
        customers: Array<{
          /**
           * A Measure resource identifier.
           * @minLength 1
           */
          id: string;
          /** The external customer identifier when returned by Measure. */
          identifier: string | null;
          /** The computed customer display name. */
          displayName: string | null;
          /** The customer email address. */
          email: string | null;
          /** The customer's organization name. */
          orgName: string | null;
          /** The customer status returned by Measure. */
          status: string | null;
          /** The raw object returned by Measure. */
          raw: Record<string, unknown>;
        }>;
        /** Measure pagination metadata. */
        pagination: {
          /** The cursor for the next page when Measure returns one. */
          fromKey: string | null;
          /** The page size returned by Measure. */
          limit: number | null;
          /** The raw object returned by Measure. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Search Measure product pricing records with official query criteria. */
    "maple_billing.find_product_pricing": {
      input: {
        /** Measure pagination parameters. */
        pagination: {
          /**
           * The maximum number of records to return.
           * @minimum 0
           * @maximum 200
           */
          limit?: number;
          /**
           * The pagination cursor returned by a previous Measure find request.
           * @minLength 1
           */
          fromKey?: string;
        };
        /** Official Measure query criteria for this find endpoint. */
        query?: Record<string, unknown>;
        /**
         * The official Measure sort_key value for this find endpoint.
         * @minLength 1
         */
        sortKey?: string;
        /** Whether Measure should include additional pagination metadata. */
        includeMeta?: boolean;
      };
      output: {
        /** Product pricing records returned by Measure. */
        productPricing: Array<{
          /**
           * A Measure resource identifier.
           * @minLength 1
           */
          id: string;
          /** The Measure product ID attached to this pricing record. */
          productId: string | null;
          /** The product pricing name returned by Measure. */
          name: string | null;
          /** The product pricing currency code. */
          currency: string | null;
          /** The product pricing state returned by Measure. */
          state: string | null;
          /** The raw object returned by Measure. */
          raw: Record<string, unknown>;
        }>;
        /** Measure pagination metadata. */
        pagination: {
          /** The cursor for the next page when Measure returns one. */
          fromKey: string | null;
          /** The page size returned by Measure. */
          limit: number | null;
          /** The raw object returned by Measure. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Search Measure products with pagination and official query criteria. */
    "maple_billing.find_products": {
      input: {
        /** Measure pagination parameters. */
        pagination: {
          /**
           * The maximum number of records to return.
           * @minimum 0
           * @maximum 200
           */
          limit?: number;
          /**
           * The pagination cursor returned by a previous Measure find request.
           * @minLength 1
           */
          fromKey?: string;
        };
        /** Official Measure query criteria for this find endpoint. */
        query?: Record<string, unknown>;
        /**
         * The official Measure sort_key value for this find endpoint.
         * @minLength 1
         */
        sortKey?: string;
        /** Whether Measure should include additional pagination metadata. */
        includeMeta?: boolean;
      };
      output: {
        /** Products returned by Measure. */
        products: Array<{
          /**
           * A Measure resource identifier.
           * @minLength 1
           */
          id: string;
          /** The Measure product name. */
          name: string | null;
          /** The external product name returned by Measure. */
          externalName: string | null;
          /** The product state returned by Measure. */
          state: string | null;
          /** The raw object returned by Measure. */
          raw: Record<string, unknown>;
        }>;
        /** Measure pagination metadata. */
        pagination: {
          /** The cursor for the next page when Measure returns one. */
          fromKey: string | null;
          /** The page size returned by Measure. */
          limit: number | null;
          /** The raw object returned by Measure. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Search Measure subscriptions with pagination and official query criteria. */
    "maple_billing.find_subscriptions": {
      input: {
        /** Measure pagination parameters. */
        pagination: {
          /**
           * The maximum number of records to return.
           * @minimum 0
           * @maximum 200
           */
          limit?: number;
          /**
           * The pagination cursor returned by a previous Measure find request.
           * @minLength 1
           */
          fromKey?: string;
        };
        /** Official Measure subscription query criteria. */
        query?: Record<string, unknown>;
        /**
         * The official Measure subscription sort_key value.
         * @minLength 1
         */
        sortKey: string;
        /** Whether Measure should include additional pagination metadata. */
        includeMeta?: boolean;
      };
      output: {
        /** Subscriptions returned by Measure. */
        subscriptions: Array<{
          /**
           * A Measure resource identifier.
           * @minLength 1
           */
          id: string;
          /** The Measure customer ID attached to this subscription. */
          customerId: string | null;
          /** The subscription status returned by Measure. */
          status: string | null;
          /** The subscription currency code. */
          currency: string | null;
          /** The raw object returned by Measure. */
          raw: Record<string, unknown>;
        }>;
        /** Measure pagination metadata. */
        pagination: {
          /** The cursor for the next page when Measure returns one. */
          fromKey: string | null;
          /** The page size returned by Measure. */
          limit: number | null;
          /** The raw object returned by Measure. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve a Measure checkout session by ID. */
    "maple_billing.get_checkout_session": {
      input: {
        /**
         * A Measure resource identifier.
         * @minLength 1
         */
        checkoutSessionId: string;
      };
      output: {
        /** A normalized Measure checkout session. */
        checkoutSession: {
          /**
           * A Measure resource identifier.
           * @minLength 1
           */
          id: string;
          /** The hosted checkout session URL when returned by Measure. */
          url: string | null;
          /** The Measure customer ID attached to this checkout session. */
          customerId: string | null;
          /** The checkout session status returned by Measure. */
          status: string | null;
          /** The raw object returned by Measure. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve a Measure customer by ID or external identifier. */
    "maple_billing.get_customer": {
      input: {
        /**
         * A Measure customer ID or external customer identifier.
         * @minLength 1
         */
        customerId: string;
      };
      output: {
        /** A normalized Measure customer. */
        customer: {
          /**
           * A Measure resource identifier.
           * @minLength 1
           */
          id: string;
          /** The external customer identifier when returned by Measure. */
          identifier: string | null;
          /** The computed customer display name. */
          displayName: string | null;
          /** The customer email address. */
          email: string | null;
          /** The customer's organization name. */
          orgName: string | null;
          /** The customer status returned by Measure. */
          status: string | null;
          /** The raw object returned by Measure. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve a Measure product by ID or external identifier. */
    "maple_billing.get_product": {
      input: {
        /**
         * A Measure resource identifier.
         * @minLength 1
         */
        productId: string;
      };
      output: {
        /** A normalized Measure product. */
        product: {
          /**
           * A Measure resource identifier.
           * @minLength 1
           */
          id: string;
          /** The Measure product name. */
          name: string | null;
          /** The external product name returned by Measure. */
          externalName: string | null;
          /** The product state returned by Measure. */
          state: string | null;
          /** The raw object returned by Measure. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve a Measure product pricing record by ID or external identifier. */
    "maple_billing.get_product_pricing": {
      input: {
        /**
         * A Measure resource identifier.
         * @minLength 1
         */
        productPricingId: string;
      };
      output: {
        /** A normalized Measure product pricing record. */
        productPricing: {
          /**
           * A Measure resource identifier.
           * @minLength 1
           */
          id: string;
          /** The Measure product ID attached to this pricing record. */
          productId: string | null;
          /** The product pricing name returned by Measure. */
          name: string | null;
          /** The product pricing currency code. */
          currency: string | null;
          /** The product pricing state returned by Measure. */
          state: string | null;
          /** The raw object returned by Measure. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve a Measure subscription by ID or external identifier. */
    "maple_billing.get_subscription": {
      input: {
        /**
         * A Measure resource identifier.
         * @minLength 1
         */
        subscriptionId: string;
      };
      output: {
        /** A normalized Measure subscription. */
        subscription: {
          /**
           * A Measure resource identifier.
           * @minLength 1
           */
          id: string;
          /** The Measure customer ID attached to this subscription. */
          customerId: string | null;
          /** The subscription status returned by Measure. */
          status: string | null;
          /** The subscription currency code. */
          currency: string | null;
          /** The raw object returned by Measure. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Update common fields on a Measure customer. */
    "maple_billing.update_customer": {
      input: {
        /**
         * A Measure customer ID or external customer identifier.
         * @minLength 1
         */
        customerId: string;
        /**
         * A unique identifier that ties the customer back to your system.
         * @minLength 1
         */
        identifier?: string;
        /**
         * The customer email address.
         * @format email
         */
        email?: string;
        /**
         * The customer name.
         * @minLength 1
         */
        name?: string;
        /**
         * The organization this customer belongs to.
         * @minLength 1
         */
        orgName?: string;
        /**
         * The customer phone number.
         * @minLength 1
         */
        phone?: string;
        /**
         * The customer's title.
         * @minLength 1
         */
        title?: string;
        /**
         * The customer's locale.
         * @minLength 1
         */
        locale?: string;
        /** The official Measure customer address object. */
        address?: Record<string, unknown>;
        /**
         * Additional email addresses to copy on customer invoices.
         * @minItems 1
         */
        billingEmails?: Array<string>;
        /** Metadata key-value pairs forwarded to Measure. */
        metadata?: Record<string, unknown>;
        /**
         * Tags to attach to the customer.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * The company user ID assigned to manage this customer.
         * @minLength 1
         */
        ownerId?: string;
        /**
         * The parent customer ID for parent-child billing.
         * @minLength 1
         */
        parentCustomerId?: string;
        /** Whether Measure should exclude this customer from metrics. */
        excludeFromMetrics?: boolean;
        /** Whether Measure should enable rollup billing for children. */
        childRollupBilling?: boolean;
        /**
         * The optional Measure Idempotency-Key header value for mutation requests.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** A normalized Measure customer. */
        customer: {
          /**
           * A Measure resource identifier.
           * @minLength 1
           */
          id: string;
          /** The external customer identifier when returned by Measure. */
          identifier: string | null;
          /** The computed customer display name. */
          displayName: string | null;
          /** The customer email address. */
          email: string | null;
          /** The customer's organization name. */
          orgName: string | null;
          /** The customer status returned by Measure. */
          status: string | null;
          /** The raw object returned by Measure. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
