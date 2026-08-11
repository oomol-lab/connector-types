import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a Youzan item by its item ID. */
    "youzan.get_item": {
      input: {
        /**
         * The Youzan item ID.
         * @exclusiveMinimum 0
         */
        itemId: number;
      };
      output: {
        /** A Youzan item record. Available fields depend on the store type and enabled capabilities. */
        item: Record<string, unknown>;
      };
    };
    /** Get a Youzan order by its order ID. */
    "youzan.get_order": {
      input: {
        /**
         * The Youzan order ID.
         * @minLength 1
         * @pattern \S
         */
        orderId: string;
      };
      output: {
        /** A Youzan order record. Available fields depend on the order type and enabled capabilities. */
        order: Record<string, unknown>;
      };
    };
    /** Get all express or local-delivery packages and tracking details for a Youzan order. */
    "youzan.get_order_logistics": {
      input: {
        /**
         * The Youzan order ID.
         * @minLength 1
         * @pattern \S
         */
        orderId: string;
        /**
         * The Youzan order source: 1001 for catering or 1002 for other stores. Defaults to 1002.
         * @minimum 1001
         * @maximum 1002
         */
        sourceId?: number;
      };
      output: {
        /** The logistics packages associated with the order. */
        packages: Array<Record<string, unknown>>;
      };
    };
    /** Get a Youzan refund or after-sale record by its refund ID. */
    "youzan.get_refund": {
      input: {
        /**
         * The Youzan refund ID.
         * @minLength 1
         * @pattern \S
         */
        refundId: string;
        /** Whether to include all buyer and seller consultation messages. */
        includeAllConsultMessages?: boolean;
      };
      output: {
        /** A Youzan refund record. Available fields depend on the after-sale type and current status. */
        refund: Record<string, unknown>;
      };
    };
    /** Get the identity and basic profile of the connected Youzan shop. */
    "youzan.get_shop": {
      input: Record<string, never>;
      output: {
        /** A Youzan shop record. Available fields depend on the store type and enabled capabilities. */
        shop: Record<string, unknown>;
      };
    };
    /** List shelved or sold-out items from a Youzan store inventory. */
    "youzan.list_inventory_items": {
      input: {
        /** The inventory section to query. Defaults to for_shelved. */
        status?: "for_shelved" | "sold_out";
        /**
         * A keyword matched against the item title.
         * @minLength 1
         * @pattern \S
         */
        query?: string;
        /** The inventory result sort field and direction. */
        orderBy?: "created_time:asc" | "created_time:desc" | "update_time:asc" | "update_time:desc" | "price:asc" | "price:desc" | "sold_num:asc" | "sold_num:desc";
        /**
         * The earliest item update time to include, as a Unix timestamp in milliseconds.
         * @minimum 0
         */
        updatedAfter?: number;
        /**
         * The latest item update time to include, as a Unix timestamp in milliseconds.
         * @minimum 0
         */
        updatedBefore?: number;
        /**
         * The child store kdt_id used in a chain-store query.
         * @exclusiveMinimum 0
         */
        nodeKdtId?: number;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of inventory items per page. Defaults to 40 and cannot exceed 300.
         * @minimum 1
         * @maximum 300
         */
        pageSize?: number;
      };
      output: {
        /** The Youzan inventory item records. */
        items: Array<Record<string, unknown>>;
        /**
         * The total number of matching items reported by Youzan.
         * @minimum 0
         */
        total: number;
        /**
         * The requested one-based page number.
         * @exclusiveMinimum 0
         */
        page: number;
        /**
         * The requested number of items per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
      };
    };
    /** List items currently visible for sale in a Youzan online or physical store. */
    "youzan.list_onsale_items": {
      input: {
        /**
         * The Youzan store kdt_id. Defaults to the store ID in the connection credential.
         * @exclusiveMinimum 0
         */
        kdtId?: number;
        /**
         * The sales channel: 0 for an online store or 1 for a physical store. Defaults to 0.
         * @minimum 0
         * @maximum 1
         */
        channel?: number;
        /**
         * A keyword matched against the item title.
         * @minLength 1
         * @pattern \S
         */
        title?: string;
        /** The Youzan item IDs to include. */
        itemIds?: Array<number>;
        /** The merchant item codes to include. */
        itemCodes?: Array<string>;
        /**
         * The earliest item update time to include, as a Unix timestamp in milliseconds.
         * @minimum 0
         */
        updatedAfter?: number;
        /**
         * The latest item update time to include, as a Unix timestamp in milliseconds.
         * @minimum 0
         */
        updatedBefore?: number;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of on-sale items per page. Defaults to 20 and cannot exceed 50.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
      };
      output: {
        /** The Youzan on-sale item records. */
        items: Array<Record<string, unknown>>;
        /**
         * The total number of matching items reported by Youzan.
         * @minimum 0
         */
        total: number;
        /**
         * The requested one-based page number.
         * @exclusiveMinimum 0
         */
        page: number;
        /**
         * The requested number of items per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
      };
    };
    /** List Youzan orders using status, time, item, delivery, and text filters. */
    "youzan.list_orders": {
      input: {
        /** The Youzan order status to include. */
        status?: "WAIT_BUYER_PAY" | "WAIT_SELLER_SEND_GOODS" | "WAIT_BUYER_CONFIRM_GOODS" | "TRADE_SUCCESS" | "TRADE_CLOSED" | "TRADE_REFUND";
        /**
         * An exact Youzan order ID.
         * @minLength 1
         * @pattern \S
         */
        orderId?: string;
        /**
         * A general order search value such as an order ID or receiver phone suffix.
         * @minLength 1
         * @pattern \S
         */
        keywords?: string;
        /**
         * A Youzan item ID included in the order.
         * @exclusiveMinimum 0
         */
        itemId?: number;
        /** The order delivery method. */
        expressType?: "LOCAL_DELIVERY" | "SELF_FETCH" | "EXPRESS";
        /**
         * A Youzan date-time in YYYY-MM-DD HH:mm:ss format.
         * @minLength 1
         * @pattern \S
         */
        createdAfter?: string;
        /**
         * A Youzan date-time in YYYY-MM-DD HH:mm:ss format.
         * @minLength 1
         * @pattern \S
         */
        createdBefore?: string;
        /**
         * A Youzan date-time in YYYY-MM-DD HH:mm:ss format.
         * @minLength 1
         * @pattern \S
         */
        updatedAfter?: string;
        /**
         * A Youzan date-time in YYYY-MM-DD HH:mm:ss format.
         * @minLength 1
         * @pattern \S
         */
        updatedBefore?: string;
        /**
         * A Youzan date-time in YYYY-MM-DD HH:mm:ss format.
         * @minLength 1
         * @pattern \S
         */
        completedAfter?: string;
        /**
         * A Youzan date-time in YYYY-MM-DD HH:mm:ss format.
         * @minLength 1
         * @pattern \S
         */
        completedBefore?: string;
        /**
         * The child store kdt_id used in a chain-store query.
         * @exclusiveMinimum 0
         */
        nodeKdtId?: number;
        /**
         * The one-based page number. Defaults to 1 and cannot exceed 100.
         * @minimum 1
         * @maximum 100
         */
        page?: number;
        /**
         * The number of orders per page. Defaults to 20 and cannot exceed 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The Youzan order records. */
        orders: Array<Record<string, unknown>>;
        /**
         * The total number of matching orders reported by Youzan.
         * @minimum 0
         */
        total: number;
        /**
         * The requested one-based page number.
         * @exclusiveMinimum 0
         */
        page: number;
        /**
         * The requested number of orders per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
      };
    };
    /** List Youzan refund and after-sale records using order, status, and time filters. */
    "youzan.list_refunds": {
      input: {
        /**
         * An exact Youzan order ID.
         * @minLength 1
         * @pattern \S
         */
        orderId?: string;
        /**
         * An exact Youzan refund ID.
         * @minLength 1
         * @pattern \S
         */
        refundId?: string;
        /** The current Youzan refund status. */
        status?: "WAIT_SELLER_AGREE" | "WAIT_BUYER_RETURN_GOODS" | "WAIT_SELLER_CONFIRM_GOODS" | "SELLER_REFUSE_BUYER" | "CLOSED" | "SUCCESS" | "CUSTOMER_SERVICE_IN" | "SELLER_REFUSE_BUYER_RETURN_GOODS" | "SELLER_RETURN_GOODS";
        /**
         * The buyer demand: 1 for refund only, 2 for return and refund, or 3 for exchange.
         * @minimum 1
         * @maximum 3
         */
        demand?: number;
        /**
         * The earliest refund creation time to include, as a Unix timestamp in seconds.
         * @minimum 0
         */
        createdAfter?: number;
        /**
         * The latest refund creation time to include, as a Unix timestamp in seconds.
         * @minimum 0
         */
        createdBefore?: number;
        /**
         * The earliest refund update time to include, as a Unix timestamp in seconds.
         * @minimum 0
         */
        updatedAfter?: number;
        /**
         * The latest refund update time to include, as a Unix timestamp in seconds.
         * @minimum 0
         */
        updatedBefore?: number;
        /**
         * The child store kdt_id used in a chain-store query.
         * @exclusiveMinimum 0
         */
        nodeKdtId?: number;
        /**
         * The one-based page number. Defaults to 1 and cannot exceed 100.
         * @minimum 1
         * @maximum 100
         */
        page?: number;
        /**
         * The number of refund records per page. Defaults to 20.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** The Youzan refund records. */
        refunds: Array<Record<string, unknown>>;
        /**
         * The total number of matching refunds reported by Youzan.
         * @minimum 0
         */
        total: number;
        /**
         * The requested one-based page number.
         * @exclusiveMinimum 0
         */
        page: number;
        /**
         * The requested number of refunds per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
      };
    };
  }
}
