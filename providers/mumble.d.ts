import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a customer in the Mumble WhatsApp customer database. */
    "mumble.create_customer": {
      input: {
        /**
         * The customer's phone number in international digits without a leading plus sign.
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        customerPhone: string;
        /** The customer's display name. */
        name?: string;
        /**
         * The customer's email address.
         * @format email
         */
        email?: string;
        /** A comma-separated list of label names to attach to the customer. */
        source?: string;
        /** The bot identifier, AI, or turn_off value assigned to the customer. */
        botToken?: string;
        /** Official Mumble marketing attribution fields using upstream snake_case keys. */
        marketingAttribution?: Record<string, unknown>;
      };
      output: {
        /** Whether Mumble completed the operation successfully. */
        success: boolean;
        /** The operation message returned by Mumble. */
        message: string | null;
      };
    };
    /** Create a reusable customer label in Mumble. */
    "mumble.create_label": {
      input: {
        /**
         * The Mumble label name.
         * @minLength 1
         */
        labelName: string;
      };
      output: {
        /** Whether Mumble completed the operation successfully. */
        success: boolean;
        /** The operation message returned by Mumble. */
        message: string | null;
      };
    };
    /** Permanently delete a customer from Mumble. */
    "mumble.delete_customer": {
      input: {
        /**
         * The customer's phone number in international digits without a leading plus sign.
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        customerPhone: string;
      };
      output: {
        /** Whether Mumble completed the operation successfully. */
        success: boolean;
        /** The operation message returned by Mumble. */
        message: string | null;
      };
    };
    /** Delete a customer label from Mumble. */
    "mumble.delete_label": {
      input: {
        /**
         * The Mumble label name.
         * @minLength 1
         */
        labelName: string;
      };
      output: {
        /** Whether Mumble completed the operation successfully. */
        success: boolean;
        /** The operation message returned by Mumble. */
        message: string | null;
      };
    };
    /** Get one Mumble customer and its custom fields by phone number. */
    "mumble.get_customer": {
      input: {
        /**
         * The customer's phone number in international digits without a leading plus sign.
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        customerPhone: string;
      };
      output: {
        /** A customer record returned by Mumble, including account-defined custom fields. */
        customer: Record<string, unknown>;
      };
    };
    /** List one page of customers from the Mumble customer database. */
    "mumble.list_customers": {
      input: {
        /**
         * The one-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The customers on this page. */
        customers: Array<Record<string, unknown>>;
        /** The total number of customers when provided. */
        total: number | null;
        /** The current page number when provided. */
        currentPage: number | null;
        /** The number of customers per page when provided. */
        perPage: number | null;
        /** The total number of pages when provided. */
        totalPages: number | null;
      };
    };
    /** List all customer labels in the Mumble account. */
    "mumble.list_labels": {
      input: Record<string, never>;
      output: {
        /** The labels returned by Mumble. */
        labels: Array<string>;
      };
    };
    /** Update standard or account-defined fields on an existing Mumble customer. */
    "mumble.update_customer": {
      input: {
        /**
         * The customer's phone number in international digits without a leading plus sign.
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        customerPhone: string;
        /** The customer's display name. */
        name?: string;
        /**
         * The customer's email address.
         * @format email
         */
        email?: string;
        /** A comma-separated list of label names to attach to the customer. */
        source?: string;
        /** The bot identifier, AI, or turn_off value assigned to the customer. */
        botToken?: string;
        /** Official Mumble marketing attribution fields using upstream snake_case keys. */
        marketingAttribution?: Record<string, unknown>;
        /** Account-defined customer fields whose keys are sent directly to Mumble. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** Whether Mumble completed the operation successfully. */
        success: boolean;
        /** The operation message returned by Mumble. */
        message: string | null;
      };
    };
  }
}
