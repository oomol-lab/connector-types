import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the ablefy account associated with the configured API credentials. */
    "ablefy.get_account": {
      input: Record<string, never>;
      output: {
        /** The JSON response returned by ablefy. */
        data: unknown;
      };
    };
    /** Get one ablefy pricing plan by its numeric identifier. */
    "ablefy.get_pricing_plan": {
      input: {
        /**
         * The numeric ablefy pricing plan identifier.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** The JSON response returned by ablefy. */
        data: unknown;
      };
    };
    /** Get an ablefy product and its related pricing and author information. */
    "ablefy.get_product": {
      input: {
        /**
         * The numeric ablefy product identifier.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** The JSON response returned by ablefy. */
        data: unknown;
      };
    };
    /** List pricing plans available in the connected ablefy account. */
    "ablefy.list_pricing_plans": {
      input: Record<string, never>;
      output: {
        /** The JSON response returned by ablefy. */
        data: unknown;
      };
    };
    /** List products available in the connected ablefy account. */
    "ablefy.list_products": {
      input: Record<string, never>;
      output: {
        /** The JSON response returned by ablefy. */
        data: unknown;
      };
    };
  }
}
