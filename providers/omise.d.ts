import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an Omise customer without collecting or attaching card data. */
    "omise.create_customer": {
      input: {
        /**
         * The customer's email address.
         * @format email
         */
        email?: string;
        /** A description that helps identify the customer. */
        description?: string;
        /** Custom metadata attached to the customer. */
        metadata?: Record<string, string | number | boolean>;
      };
      output: {
        /** The customer object returned by Omise. */
        customer: Record<string, unknown>;
      };
    };
    /** Permanently delete an Omise customer. */
    "omise.delete_customer": {
      input: {
        /**
         * The Omise resource ID.
         * @minLength 1
         */
        customer_id: string;
      };
      output: {
        /** The deleted customer object returned by Omise. */
        customer: Record<string, unknown>;
      };
    };
    /** Get the Omise account associated with the connected secret key. */
    "omise.get_account": {
      input: Record<string, never>;
      output: {
        /** The account object returned by Omise. */
        account: Record<string, unknown>;
      };
    };
    /** Get the current transferable and on-hold balances for the Omise account. */
    "omise.get_balance": {
      input: Record<string, never>;
      output: {
        /** The balance object returned by Omise. */
        balance: Record<string, unknown>;
      };
    };
    /** Get an Omise charge by ID. */
    "omise.get_charge": {
      input: {
        /**
         * The Omise resource ID.
         * @minLength 1
         */
        charge_id: string;
      };
      output: {
        /** The charge object returned by Omise. */
        charge: Record<string, unknown>;
      };
    };
    /** Get an Omise customer by ID. */
    "omise.get_customer": {
      input: {
        /**
         * The Omise resource ID.
         * @minLength 1
         */
        customer_id: string;
      };
      output: {
        /** The customer object returned by Omise. */
        customer: Record<string, unknown>;
      };
    };
    /** List charges in the connected Omise account for reconciliation or support. */
    "omise.list_charges": {
      input: {
        /**
         * The maximum number of resources to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of resources to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** The order in which Omise returns resources. */
        order?: "chronological" | "reverse_chronological";
        /** Return resources created on or after this ISO 8601 date-time. */
        from?: string;
        /** Return resources created before this ISO 8601 date-time. */
        to?: string;
      };
      output: {
        /** The charge objects returned by Omise. */
        charges: Array<Record<string, unknown>>;
        /** The pagination fields returned by Omise. */
        pagination: Record<string, unknown>;
      };
    };
    /** List customers in the connected Omise account. */
    "omise.list_customers": {
      input: {
        /**
         * The maximum number of resources to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of resources to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** The order in which Omise returns resources. */
        order?: "chronological" | "reverse_chronological";
        /** Return resources created on or after this ISO 8601 date-time. */
        from?: string;
        /** Return resources created before this ISO 8601 date-time. */
        to?: string;
      };
      output: {
        /** The customer objects returned by Omise. */
        customers: Array<Record<string, unknown>>;
        /** The pagination fields returned by Omise. */
        pagination: Record<string, unknown>;
      };
    };
    /** Update the email, description, or metadata of an Omise customer. */
    "omise.update_customer": {
      input: {
        /**
         * The Omise resource ID.
         * @minLength 1
         */
        customer_id: string;
        /**
         * The customer's email address.
         * @format email
         */
        email?: string;
        /** A description that helps identify the customer. */
        description?: string;
        /** Custom metadata attached to the customer. */
        metadata?: Record<string, string | number | boolean>;
      };
      output: {
        /** The customer object returned by Omise. */
        customer: Record<string, unknown>;
      };
    };
  }
}
