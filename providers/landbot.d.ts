import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch the message history for a Landbot customer. */
    "landbot.get_customer_messages": {
      input: {
        /**
         * Numeric Landbot customer id.
         * @minimum 1
         */
        customer_id: number;
      };
      output: {
        /** Whether Landbot accepted the request. */
        success: boolean;
        /** Messages returned for the customer. */
        messages: Array<Record<string, unknown>>;
      };
    };
    /** List channels in a Landbot workspace with optional pagination and filters. */
    "landbot.list_channels": {
      input: {
        /**
         * Number of items to skip before returning this page.
         * @minimum 0
         */
        offset?: number;
        /**
         * Maximum number of items to return in this page. Landbot accepts up to 100.
         * @minimum 0
         * @maximum 100
         */
        limit?: number;
        /**
         * Filter channels by Landbot channel type, such as webchat or whatsapp.
         * @minLength 1
         */
        type?: string;
        /** Filter channels by active state. */
        active?: boolean;
      };
      output: {
        /** Whether Landbot accepted the request. */
        success: boolean;
        /** Total number of matching resources before pagination. */
        total: number;
        /** Channels returned for this page. */
        channels: Array<Record<string, unknown>>;
      };
    };
    /** List Landbot customers with pagination and optional channel or search filters. */
    "landbot.list_customers": {
      input: {
        /**
         * Number of items to skip before returning this page.
         * @minimum 0
         */
        offset?: number;
        /**
         * Maximum number of items to return in this page. Landbot accepts up to 100.
         * @minimum 0
         * @maximum 100
         */
        limit?: number;
        /**
         * Filter customers by numeric Landbot channel id.
         * @minimum 1
         */
        channel_id?: number;
        /**
         * Filter customers by numeric Landbot agent id.
         * @minimum 1
         */
        agent_id?: number;
        /** Filter customers by archived state. */
        archived?: boolean;
        /** Filter customers by opt-in state. */
        opt_in?: boolean;
        /** Customer field used for search. */
        search_by?: "name" | "email" | "phone";
        /**
         * Search text matched against the selected customer field.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** Whether Landbot accepted the request. */
        success: boolean;
        /** Total number of matching resources before pagination. */
        total: number;
        /** Customers returned for this page. */
        customers: Array<Record<string, unknown>>;
      };
    };
    /** Send a text message to a Landbot customer through their current channel. */
    "landbot.send_text": {
      input: {
        /**
         * Numeric Landbot customer id.
         * @minimum 1
         */
        customer_id: number;
        /**
         * Text message to send to the customer.
         * @minLength 1
         */
        message: string;
      };
      output: {
        /** Whether Landbot accepted the request. */
        success: boolean;
      };
    };
    /** Set a typed custom field value on a Landbot customer. */
    "landbot.set_customer_field": {
      input: {
        /**
         * Numeric Landbot customer id.
         * @minimum 1
         */
        customer_id: number;
        /**
         * Landbot field name to set on the customer.
         * @minLength 1
         */
        field_name: string;
        /** Landbot field type for the value. */
        type: "string" | "integer" | "float" | "boolean" | "date" | "datetime";
        /** Value to store in the Landbot customer field. */
        value: string | number | boolean | null;
        /** Optional extra metadata passed through to Landbot for the field. */
        extra?: Record<string, unknown>;
      };
      output: {
        /** Whether Landbot accepted the request. */
        success: boolean;
      };
    };
  }
}
