import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Simla customer using the official customer payload object. */
    "simla.create_customer": {
      input: {
        /**
         * Optional Simla store symbolic code.
         * @minLength 1
         */
        site?: string;
        /** Entity fields passed to Simla. */
        customer: Record<string, unknown>;
      };
      output: {
        /** Whether Simla reported a successful request. */
        success: boolean;
        /**
         * Internal ID of the created customer.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Raw Simla response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Simla order using the official order payload object. */
    "simla.create_order": {
      input: {
        /**
         * Optional Simla store symbolic code.
         * @minLength 1
         */
        site?: string;
        /** Entity fields passed to Simla. */
        order: Record<string, unknown>;
      };
      output: {
        /** Whether Simla reported a successful request. */
        success: boolean;
        /**
         * Internal ID of the created order.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Raw Simla response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Edit a Simla customer by internal ID or external ID. */
    "simla.edit_customer": {
      input: {
        /**
         * Customer internal ID or external ID.
         * @minLength 1
         */
        id: string;
        /** Which identifier type is supplied in the id field. */
        by?: "externalId" | "id";
        /**
         * Optional Simla store symbolic code.
         * @minLength 1
         */
        site?: string;
        /** Entity fields passed to Simla. */
        customer: Record<string, unknown>;
      };
      output: {
        /** Whether Simla reported a successful request. */
        success: boolean;
        /**
         * Internal ID of the edited customer when Simla returns it.
         * @exclusiveMinimum 0
         */
        id: number | null;
        /** Raw Simla response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Edit a Simla order by internal ID or external ID. */
    "simla.edit_order": {
      input: {
        /**
         * Order internal ID or external ID.
         * @minLength 1
         */
        id: string;
        /** Which identifier type is supplied in the id field. */
        by?: "externalId" | "id";
        /**
         * Optional Simla store symbolic code.
         * @minLength 1
         */
        site?: string;
        /** Entity fields passed to Simla. */
        order: Record<string, unknown>;
      };
      output: {
        /** Whether Simla reported a successful request. */
        success: boolean;
        /**
         * Internal ID of the edited order when Simla returns it.
         * @exclusiveMinimum 0
         */
        id: number | null;
        /** Raw Simla response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get full Simla customer information by internal ID or external ID. */
    "simla.get_customer": {
      input: {
        /**
         * Customer internal ID or external ID.
         * @minLength 1
         */
        id: string;
        /** Which identifier type is supplied in the id field. */
        by?: "externalId" | "id";
        /**
         * Optional Simla store symbolic code.
         * @minLength 1
         */
        site?: string;
      };
      output: {
        /** Whether Simla reported a successful request. */
        success: boolean;
        /** Raw Simla object payload. */
        customer: Record<string, unknown>;
        /** Raw Simla response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get full Simla order information by internal ID or external ID. */
    "simla.get_order": {
      input: {
        /**
         * Order internal ID or external ID.
         * @minLength 1
         */
        id: string;
        /** Which identifier type is supplied in the id field. */
        by?: "externalId" | "id";
        /**
         * Optional Simla store symbolic code.
         * @minLength 1
         */
        site?: string;
      };
      output: {
        /** Whether Simla reported a successful request. */
        success: boolean;
        /** Raw Simla object payload. */
        order: Record<string, unknown>;
        /** Raw Simla response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Simla status information for orders by internal IDs or external IDs. */
    "simla.get_order_statuses": {
      input: {
        /** Simla internal numeric identifiers. */
        ids?: Array<number>;
        /** Simla external identifiers. */
        externalIds?: Array<string>;
      };
      output: {
        /** Whether Simla reported a successful request. */
        success: boolean;
        /** Order status items returned by Simla. */
        orders: Array<Record<string, unknown>>;
        /** Raw Simla response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Simla customers with optional pagination and filter parameters. */
    "simla.list_customers": {
      input: {
        /** Number of records to return. Simla accepts only 20, 50, or 100. */
        limit?: 20 | 50 | 100;
        /**
         * One-based page number to request.
         * @minimum 1
         */
        page?: number;
        /** Filter object encoded as Simla filter[...] query parameters. */
        filter?: Record<string, unknown>;
      };
      output: {
        /** Whether Simla reported a successful request. */
        success: boolean;
        /** Customers returned by Simla. */
        customers: Array<Record<string, unknown>>;
        /** Simla pagination metadata. */
        pagination: Record<string, unknown>;
        /** Raw Simla response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Simla orders with optional pagination and filter parameters. */
    "simla.list_orders": {
      input: {
        /** Number of records to return. Simla accepts only 20, 50, or 100. */
        limit?: 20 | 50 | 100;
        /**
         * One-based page number to request.
         * @minimum 1
         */
        page?: number;
        /** Filter object encoded as Simla filter[...] query parameters. */
        filter?: Record<string, unknown>;
      };
      output: {
        /** Whether Simla reported a successful request. */
        success: boolean;
        /** Orders returned by Simla. */
        orders: Array<Record<string, unknown>>;
        /** Simla pagination metadata. */
        pagination: Record<string, unknown>;
        /** Raw Simla response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
