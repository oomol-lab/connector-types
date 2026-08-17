import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve DACHSER delivery-order status using order references and filters. */
    "dachser.get_delivery_order_status": {
      input: {
        /**
         * The first delivery-order reference number.
         * @minLength 1
         */
        referenceNumber1?: string;
        /**
         * The second delivery-order reference number.
         * @minLength 1
         */
        referenceNumber2?: string;
        /**
         * The third delivery-order reference number.
         * @minLength 1
         */
        referenceNumber3?: string;
        /**
         * The purchase order number.
         * @minLength 1
         */
        purchaseOrderNumber?: string;
        /**
         * The delivery order date in YYYY-MM-DD format.
         * @format date
         */
        deliveryOrderDate?: string;
        /**
         * The DACHSER delivery-order event code.
         * @minLength 1
         */
        eventCode?: string;
        /**
         * The DACHSER customer number filter.
         * @minLength 1
         */
        customerId?: string;
        /**
         * An optional HTTP language preference for translated status descriptions, such as en-US or de-DE.
         * @minLength 1
         */
        acceptLanguage?: string;
      };
      output: {
        /** The DACHSER delivery orders that matched the supplied filters. */
        deliveryOrders: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Retrieve the full DACHSER event history for shipments matching a tracking reference. */
    "dachser.get_shipment_history": {
      input: {
        /**
         * A DACHSER shipment reference such as a consignment, customer order, delivery note, purchase order, SSCC, bill of lading, air waybill, container, invoice, batch, or packing-list number.
         * @minLength 1
         */
        trackingNumber: string;
        /**
         * An optional DACHSER customer number filter; separate multiple values with commas.
         * @minLength 1
         */
        customerId?: string;
        /**
         * An optional HTTP language preference for translated status descriptions, such as en-US or de-DE.
         * @minLength 1
         */
        acceptLanguage?: string;
      };
      output: {
        /** The DACHSER shipments that matched the tracking reference. */
        shipments: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Retrieve the current DACHSER status for shipments matching a tracking reference. */
    "dachser.get_shipment_status": {
      input: {
        /**
         * A DACHSER shipment reference such as a consignment, customer order, delivery note, purchase order, SSCC, bill of lading, air waybill, container, invoice, batch, or packing-list number.
         * @minLength 1
         */
        trackingNumber: string;
        /**
         * An optional DACHSER customer number filter; separate multiple values with commas.
         * @minLength 1
         */
        customerId?: string;
        /**
         * An optional HTTP language preference for translated status descriptions, such as en-US or de-DE.
         * @minLength 1
         */
        acceptLanguage?: string;
      };
      output: {
        /** The DACHSER shipments that matched the tracking reference. */
        shipments: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
  }
}
