import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a Baremetrics subscription at a documented cancellation timestamp. */
    "baremetrics.cancel_subscription": {
      input: {
        /**
         * The Baremetrics source ID from the List Sources endpoint.
         * @minLength 1
         */
        sourceId: string;
        /**
         * Your unique Baremetrics subscription ID.
         * @minLength 1
         */
        subscriptionOid: string;
        /**
         * Unix timestamp for when the subscription was canceled.
         * @minLength 1
         */
        canceledAt: string;
      };
      output: {
        /** A Baremetrics subscription object. */
        subscription: Record<string, unknown> | null;
        /** A Baremetrics event object returned by a mutation endpoint. */
        event: Record<string, unknown> | null;
        /** Raw Baremetrics subscription response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a customer record in a Baremetrics API source. */
    "baremetrics.create_customer": {
      input: {
        /**
         * The Baremetrics source ID from the List Sources endpoint.
         * @minLength 1
         */
        sourceId: string;
        /**
         * Your unique Baremetrics customer ID.
         * @minLength 1
         */
        oid: string;
        /**
         * The customer name.
         * @minLength 1
         */
        name?: string;
        /**
         * The customer's email address.
         * @format email
         */
        email?: string;
        /** Your own notes for this customer. */
        notes?: string;
        /**
         * Unix timestamp for when the customer was created.
         * @minLength 1
         */
        created?: string;
      };
      output: {
        /** A Baremetrics customer object. */
        customer: Record<string, unknown> | null;
        /** Raw Baremetrics customer response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a plan for use in Baremetrics subscription records. */
    "baremetrics.create_plan": {
      input: {
        /**
         * The Baremetrics source ID from the List Sources endpoint.
         * @minLength 1
         */
        sourceId: string;
        /**
         * Your unique Baremetrics plan ID.
         * @minLength 1
         */
        oid: string;
        /**
         * The internal name for this plan.
         * @minLength 1
         */
        name: string;
        /**
         * The ISO currency code for this plan, such as usd.
         * @minLength 1
         */
        currency: string;
        /** The plan amount in cents. */
        amount: number;
        /** The recurring interval for the plan. */
        interval: "day" | "month" | "year";
        /**
         * How many intervals are included in each billing period.
         * @minimum 1
         */
        intervalCount: number;
        /**
         * The trial duration to use with trialDurationUnit.
         * @minimum 0
         */
        trialDuration?: number;
        /** The unit for the trial duration. */
        trialDurationUnit?: "day" | "month";
      };
      output: {
        /** A Baremetrics plan object. */
        plan: Record<string, unknown> | null;
        /** Raw Baremetrics plan response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a subscription in a Baremetrics API source. */
    "baremetrics.create_subscription": {
      input: {
        /**
         * The Baremetrics source ID from the List Sources endpoint.
         * @minLength 1
         */
        sourceId: string;
        /**
         * Your unique Baremetrics subscription ID.
         * @minLength 1
         */
        oid: string;
        /**
         * Unix timestamp for when the subscription started.
         * @minLength 1
         */
        startedAt: string;
        /**
         * Unix timestamp for when the subscription was or should be canceled.
         * @minLength 1
         */
        canceledAt?: string;
        /**
         * Your unique Baremetrics plan ID.
         * @minLength 1
         */
        planOid: string;
        /**
         * Your unique Baremetrics customer ID.
         * @minLength 1
         */
        customerOid: string;
        /** Addons attached to this subscription. */
        addons?: Array<{
          /**
           * Your unique ID for the addon.
           * @minLength 1
           */
          oid: string;
          /** The addon amount in cents. */
          amount: number;
          /** The addon quantity. */
          quantity: number;
        }>;
        /**
         * The subscription quantity.
         * @minimum 1
         */
        quantity?: number;
        /** Discount amount in the same currency as the plan. */
        discount?: number;
      };
      output: {
        /** A Baremetrics subscription object. */
        subscription: Record<string, unknown> | null;
        /** A Baremetrics event object returned by a mutation endpoint. */
        event: Record<string, unknown> | null;
        /** Raw Baremetrics subscription response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List charges for a Baremetrics source with optional time and entity filters. */
    "baremetrics.list_charges": {
      input: {
        /**
         * The Baremetrics source ID from the List Sources endpoint.
         * @minLength 1
         */
        sourceId: string;
        /**
         * Unix timestamp for the start of the charge window.
         * @minLength 1
         */
        start?: string;
        /**
         * Unix timestamp for the end of the charge window.
         * @minLength 1
         */
        end?: string;
        /**
         * Your unique Baremetrics subscription ID.
         * @minLength 1
         */
        subscriptionOid?: string;
        /**
         * Your unique Baremetrics customer ID.
         * @minLength 1
         */
        customerOid?: string;
      };
      output: {
        /** Baremetrics charges matching the request. */
        charges: Array<Record<string, unknown>>;
        /** Raw Baremetrics list charges response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List customers for a Baremetrics source with optional search and ordering. */
    "baremetrics.list_customers": {
      input: {
        /**
         * The Baremetrics source ID from the List Sources endpoint.
         * @minLength 1
         */
        sourceId: string;
        /**
         * Search customers by Baremetrics oid, email, notes, or name.
         * @minLength 1
         */
        search?: string;
        /** The customer field Baremetrics should sort by. */
        sort?: "ltv" | "created";
        /** The order to return Baremetrics results in. */
        order?: "asc" | "desc";
      };
      output: {
        /** Baremetrics customers matching the request. */
        customers: Array<Record<string, unknown>>;
        /** Raw Baremetrics list customers response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List plans for a Baremetrics source with optional search. */
    "baremetrics.list_plans": {
      input: {
        /**
         * The Baremetrics source ID from the List Sources endpoint.
         * @minLength 1
         */
        sourceId: string;
        /**
         * Search plans by Baremetrics name or oid.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** Baremetrics plans matching the request. */
        plans: Array<Record<string, unknown>>;
        /** Raw Baremetrics list plans response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Baremetrics sources available to the current API key. */
    "baremetrics.list_sources": {
      input: Record<string, never>;
      output: {
        /** Baremetrics sources available to this API key. */
        sources: Array<Record<string, unknown>>;
        /** Raw Baremetrics list sources response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List subscriptions for a Baremetrics source with optional customer and ordering filters. */
    "baremetrics.list_subscriptions": {
      input: {
        /**
         * The Baremetrics source ID from the List Sources endpoint.
         * @minLength 1
         */
        sourceId: string;
        /**
         * Your unique Baremetrics customer ID.
         * @minLength 1
         */
        customerOid?: string;
        /** The order to return Baremetrics results in. */
        order?: "asc" | "desc";
      };
      output: {
        /** Baremetrics subscriptions matching the request. */
        subscriptions: Array<Record<string, unknown>>;
        /** Raw Baremetrics list subscriptions response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Update basic information for a Baremetrics customer. */
    "baremetrics.update_customer": {
      input: {
        /**
         * The Baremetrics source ID from the List Sources endpoint.
         * @minLength 1
         */
        sourceId: string;
        /**
         * Your unique Baremetrics customer ID.
         * @minLength 1
         */
        customerOid: string;
        /**
         * The updated customer name.
         * @minLength 1
         */
        name?: string;
        /**
         * The updated customer email address.
         * @format email
         */
        email?: string;
        /** Updated notes for this customer. */
        notes?: string;
        /**
         * Unix timestamp for when the customer was created.
         * @minLength 1
         */
        created?: string;
      };
      output: {
        /** A Baremetrics customer object. */
        customer: Record<string, unknown> | null;
        /** Raw Baremetrics customer response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Update the name of a Baremetrics plan. */
    "baremetrics.update_plan": {
      input: {
        /**
         * The Baremetrics source ID from the List Sources endpoint.
         * @minLength 1
         */
        sourceId: string;
        /**
         * Your unique Baremetrics plan ID.
         * @minLength 1
         */
        planOid: string;
        /**
         * The new name for this plan.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A Baremetrics plan object. */
        plan: Record<string, unknown> | null;
        /** Raw Baremetrics plan response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Update plan, addon, quantity, or discount data for a Baremetrics subscription. */
    "baremetrics.update_subscription": {
      input: {
        /**
         * The Baremetrics source ID from the List Sources endpoint.
         * @minLength 1
         */
        sourceId: string;
        /**
         * Your unique Baremetrics subscription ID.
         * @minLength 1
         */
        subscriptionOid: string;
        /**
         * Your unique Baremetrics plan ID.
         * @minLength 1
         */
        planOid: string;
        /**
         * Unix timestamp for when this subscription change occurred.
         * @minLength 1
         */
        occurredAt?: string;
        /** Addons attached to this subscription. */
        addons?: Array<{
          /**
           * Your unique ID for the addon.
           * @minLength 1
           */
          oid: string;
          /** The addon amount in cents. */
          amount: number;
          /** The addon quantity. */
          quantity: number;
        }>;
        /**
         * The subscription quantity.
         * @minimum 1
         */
        quantity?: number;
        /** Discount amount in the same currency as the plan. */
        discount?: number;
      };
      output: {
        /** A Baremetrics subscription object. */
        subscription: Record<string, unknown> | null;
        /** A Baremetrics event object returned by a mutation endpoint. */
        event: Record<string, unknown> | null;
        /** Raw Baremetrics subscription response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
