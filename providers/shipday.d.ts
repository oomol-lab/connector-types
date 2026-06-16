import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Insert a Shipday delivery order. */
    "shipday.create_order": {
      input: {
        /**
         * The alphanumeric identifier for the order.
         * @minLength 1
         */
        orderNumber: string;
        /**
         * The name of the customer.
         * @minLength 1
         */
        customerName: string;
        /**
         * The address of the customer.
         * @minLength 1
         */
        customerAddress: string;
        /**
         * The phone number of the customer with country code.
         * @minLength 1
         */
        customerPhoneNumber: string;
        /**
         * The name of the restaurant.
         * @minLength 1
         */
        restaurantName: string;
        /**
         * The address of the restaurant.
         * @minLength 1
         */
        restaurantAddress: string;
        /**
         * The email address of the customer.
         * @format email
         */
        customerEmail?: string;
        /** The phone number of the restaurant with country code. */
        restaurantPhoneNumber?: string;
        /**
         * The expected delivery date in yyyy-mm-dd format.
         * @format date
         */
        expectedDeliveryDate?: string;
        /** The expected pickup time in hh:mm:ss format. */
        expectedPickupTime?: string;
        /** The expected delivery time in hh:mm:ss format. */
        expectedDeliveryTime?: string;
        /** The pickup location latitude. */
        pickupLatitude?: number;
        /** The pickup location longitude. */
        pickupLongitude?: number;
        /** The delivery location latitude. */
        deliveryLatitude?: number;
        /** The delivery location longitude. */
        deliveryLongitude?: number;
        /** The order items to send to Shipday. */
        orderItem?: Array<{
          /**
           * The name of the order item.
           * @minLength 1
           */
          name: string;
          /** The price of one unit of the order item. */
          unitPrice: number;
          /**
           * The quantity of the order item.
           * @minimum 1
           */
          quantity: number;
          /** The add-on names for the order item. */
          addOns?: Array<string>;
          /** The detailed note for the order item. */
          detail?: string;
        }>;
        /** The tip amount for the order. */
        tips?: number;
        /** The tax amount for the order. */
        tax?: number;
        /** The discount amount for the order. */
        discountAmount?: number;
        /** The delivery fee amount for the order. */
        deliveryFee?: number;
        /** The total cost for the order. */
        totalOrderCost?: number;
        /** The pickup instructions for the order. */
        pickupInstruction?: string;
        /** The delivery instructions for the driver or restaurant. */
        deliveryInstruction?: string;
        /** The source of the order. */
        orderSource?: string;
        /** The additional ID for the order. */
        additionalId?: string;
        /** The client restaurant ID. */
        clientRestaurantId?: number;
        /** The selected payment method for the order. */
        paymentMethod?: "cash" | "credit_card";
        /** The type of credit card used for the order. */
        creditCardType?: "VISA" | "MASTER_CARD" | "AMEX" | "OTHER";
        /** The last four digits of the credit card. */
        creditCardId?: number;
        /** A structured Shipday pickup or dropoff location. */
        pickup?: {
          /** A structured Shipday address. */
          address?: {
            /** The unit or second address line. */
            unit?: string;
            /** The street or first address line. */
            street?: string;
            /** The city name. */
            city?: string;
            /** The state, province, or region. */
            state?: string;
            /** The postal code. */
            zip?: string;
            /** The country name. */
            country?: string;
          };
        };
        /** A structured Shipday pickup or dropoff location. */
        dropoff?: {
          /** A structured Shipday address. */
          address?: {
            /** The unit or second address line. */
            unit?: string;
            /** The street or first address line. */
            street?: string;
            /** The city name. */
            city?: string;
            /** The state, province, or region. */
            state?: string;
            /** The postal code. */
            zip?: string;
            /** The country name. */
            country?: string;
          };
        };
        /** Whether this is a catering order. */
        isCatering?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** Whether the order insert completed successfully. */
        success: boolean;
        /** The response message returned by Shipday. */
        response: string;
        /** The inserted Shipday order ID. */
        orderId: number;
        /** The raw response body returned by Shipday. */
        raw: unknown;
      };
    };
    /** Delete a Shipday delivery order by order ID. */
    "shipday.delete_order": {
      input: {
        /**
         * The positive Shipday identifier.
         * @exclusiveMinimum 0
         */
        orderId: number;
      };
      output: {
        /** Whether the Shipday request completed successfully. */
        success: boolean;
        /**
         * The positive Shipday identifier.
         * @exclusiveMinimum 0
         */
        orderId: number;
        /** The raw response body returned by Shipday. */
        raw: unknown;
      };
    };
    /** Edit an existing Shipday delivery order. */
    "shipday.edit_order": {
      input: {
        /**
         * The positive Shipday identifier.
         * @exclusiveMinimum 0
         */
        orderId: number;
        /**
         * The numeric or alphanumeric identifier for the order.
         * @minLength 1
         */
        orderNo: string;
        /**
         * The name of the customer.
         * @minLength 1
         */
        customerName: string;
        /**
         * The address of the customer.
         * @minLength 1
         */
        customerAddress: string;
        /**
         * The email address of the customer.
         * @format email
         */
        customerEmail: string;
        /**
         * The phone number of the customer with country code.
         * @minLength 1
         */
        customerPhoneNumber: string;
        /**
         * The name of the restaurant.
         * @minLength 1
         */
        restaurantName: string;
        /**
         * The address of the restaurant.
         * @minLength 1
         */
        restaurantAddress: string;
        /** The phone number of the restaurant with country code. */
        restaurantPhoneNumber?: string;
        /**
         * The expected delivery date in yyyy-mm-dd format.
         * @format date
         */
        expectedDeliveryDate?: string;
        /** The expected pickup time in hh:mm:ss format. */
        expectedPickupTime?: string;
        /** The expected delivery time in hh:mm:ss format. */
        expectedDeliveryTime?: string;
        /** The pickup location latitude. */
        pickupLatitude?: number;
        /** The pickup location longitude. */
        pickupLongitude?: number;
        /** The delivery location latitude. */
        deliveryLatitude?: number;
        /** The delivery location longitude. */
        deliveryLongitude?: number;
        /** The order items to send to Shipday. */
        orderItems?: Array<{
          /**
           * The name of the order item.
           * @minLength 1
           */
          name: string;
          /** The price of one unit of the order item. */
          unitPrice: number;
          /**
           * The quantity of the order item.
           * @minimum 1
           */
          quantity: number;
          /** The add-on names for the order item. */
          addOns?: Array<string>;
          /** The detailed note for the order item. */
          detail?: string;
        }>;
        /** The tip amount for the order. */
        tip?: number;
        /** The tax amount for the order. */
        tax?: number;
        /** The discount amount for the order. */
        discountAmount?: number;
        /** The delivery fee amount for the order. */
        deliveryFee?: number;
        /** The total cost for the order. */
        totalCost?: string;
        /** The delivery instructions for the driver or restaurant. */
        deliveryInstruction?: string;
        /** The source of the order. */
        orderSource?: string;
        /** The additional ID for the order. */
        additionalId?: string;
        /** The client restaurant ID. */
        clientRestaurantId?: number;
        /** The selected payment method for the order. */
        paymentMethod?: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the Shipday request completed successfully. */
        success: boolean;
        /**
         * The positive Shipday identifier.
         * @exclusiveMinimum 0
         */
        orderId: number;
        /** The raw response body returned by Shipday. */
        raw: unknown;
      };
    };
    /** Retrieve one Shipday delivery order by order number. */
    "shipday.get_order": {
      input: {
        /**
         * The Shipday order number.
         * @minLength 1
         */
        orderNumber: string;
      };
      output: {
        /** The Shipday order returned by the API. */
        order: Record<string, unknown>;
      };
    };
    /** Retrieve real-time delivery progress and ETA for a Shipday order. */
    "shipday.get_order_progress": {
      input: {
        /**
         * The Shipday tracking ID.
         * @minLength 1
         */
        trackingId: string;
        /** Whether the response should include static customer, restaurant, and carrier details. */
        isStaticDataRequired?: boolean;
      };
      output: {
        /** The delivery progress returned by Shipday. */
        progress: Record<string, unknown>;
      };
    };
    /** Retrieve active delivery orders from Shipday. */
    "shipday.list_active_orders": {
      input: Record<string, never>;
      output: {
        /** The active orders returned by Shipday. */
        orders: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve carriers configured in Shipday. */
    "shipday.list_carriers": {
      input: Record<string, never>;
      output: {
        /** The carriers returned by Shipday. */
        carriers: Array<Record<string, unknown>>;
      };
    };
  }
}
