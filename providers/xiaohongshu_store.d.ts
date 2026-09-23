import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Increase or decrease the sellable stock of a Xiaohongshu SKU. */
    "xiaohongshu_store.adjust_sku_stock": {
      input: {
        /**
         * The Xiaohongshu SKU ID.
         * @minLength 1
         * @pattern \S
         */
        skuId: string;
        /** The quantity to add when positive or remove when negative. */
        qty: number;
      };
      output: {
        /** A Xiaohongshu SKU stock result, including per-warehouse breakdowns. */
        stock: Record<string, unknown>;
      };
    };
    /** Audit a Xiaohongshu after-sale request. Only callable while the after-sale is pending seller audit. */
    "xiaohongshu_store.audit_after_sale": {
      input: {
        /**
         * The Xiaohongshu after-sale ID.
         * @minLength 1
         * @pattern \S
         */
        returnsId: string;
        /**
         * The audit decision: 1 to agree to a direct refund (refund-only requests), 2 to agree to a return shipment (not for refund-only requests), or 3 to reject.
         * @minimum 1
         * @maximum 3
         */
        action: number;
        /** The reject reason ID from list_after_sale_reject_reasons. Required when action is 3. */
        reason?: number;
        /**
         * The reject reason description. Required when the reject reason is other.
         * @minLength 1
         * @pattern \S
         */
        description?: string;
        /**
         * A message shown to the buyer when agreeing to a return shipment.
         * @minLength 1
         * @pattern \S
         */
        message?: string;
        /**
         * The seller return address record ID. Required when agreeing to a return shipment.
         * @minimum 0
         */
        sellerAddressRecordId?: number;
        /** The drone SN codes copied from the after-sale detail. */
        droneSnCodes?: Array<string>;
      };
      output: {
        /** Whether Xiaohongshu accepted the audit decision. */
        success: boolean;
      };
    };
    /** Confirm receipt of a buyer-returned package for a Xiaohongshu after-sale. Only callable while the after-sale waits for seller receipt. */
    "xiaohongshu_store.confirm_after_sale_receive": {
      input: {
        /**
         * The Xiaohongshu after-sale ID.
         * @minLength 1
         * @pattern \S
         */
        returnsId: string;
        /**
         * The receipt decision: 1 to confirm receipt, 2 to reject, or 3 to extend the wait.
         * @minimum 1
         * @maximum 3
         */
        action: number;
        /** The reject reason ID from list_after_sale_reject_reasons. Required when action is 2. */
        reason?: number;
        /**
         * The reject reason description.
         * @minLength 1
         * @pattern \S
         */
        description?: string;
        /** The drone SN codes copied from the after-sale detail. */
        droneSnCodes?: Array<string>;
      };
      output: {
        /** Whether Xiaohongshu accepted the receipt decision. */
        success: boolean;
      };
    };
    /** Create a Xiaohongshu item with its SKUs after resolving its category, attributes, brand, freight template, logistics plan, and material URLs. */
    "xiaohongshu_store.create_item": {
      input: {
        /**
         * The Xiaohongshu item ID.
         * @minLength 1
         * @pattern \S
         */
        itemId?: string;
        /**
         * The item title.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /**
         * The leaf category ID.
         * @minLength 1
         * @pattern \S
         */
        categoryId: string;
        /**
         * The freight template ID.
         * @minLength 1
         * @pattern \S
         */
        shippingTemplateId: string;
        /**
         * The item's gross shipping weight.
         * @minimum 0
         */
        shippingGrossWeight?: number;
        /**
         * The main material URLs.
         * @minItems 1
         */
        images: Array<Record<string, unknown>>;
        /**
         * The SKUs to create.
         * @minItems 1
         */
        createSkuList: Array<Record<string, unknown>>;
        /** The existing SKUs to update. */
        updateSkuList?: Array<Record<string, unknown>>;
        /** The SKU IDs to delete. */
        deleteSkuIdList?: Array<string>;
        /**
         * The brand ID.
         * @minLength 1
         * @pattern \S
         */
        brandId?: string;
        /** The category attribute assignments. */
        attributes?: Array<Record<string, unknown>>;
        /** The item specification type IDs. */
        variantIds?: Array<string>;
        /**
         * The merchant article number.
         * @minLength 1
         * @pattern \S
         */
        articleNo?: string;
        /**
         * The item description.
         * @minLength 1
         * @pattern \S
         */
        description?: string;
        /**
         * The item short title.
         * @minLength 1
         * @pattern \S
         */
        itemShortTitle?: string;
        /**
         * The delivery mode: 0 normal or 1 no-logistics.
         * @minimum 0
         * @maximum 1
         */
        deliveryMode?: number;
        /**
         * The free-return policy value: 1 or 2.
         * @minimum 1
         * @maximum 2
         */
        freeReturn?: number;
        /** The main video material URLs. */
        videos?: Array<Record<string, unknown>>;
        /** The description image material URLs. */
        imageDescriptions?: Array<Record<string, unknown>>;
      };
      output: {
        /** A Xiaohongshu item record. Available fields depend on the query form. */
        item: Record<string, unknown>;
      };
    };
    /** Ship a Xiaohongshu order with an express tracking number. Supports split shipments by passing the SKU IDs of one package. */
    "xiaohongshu_store.deliver_order": {
      input: {
        /**
         * The Xiaohongshu order ID.
         * @minLength 1
         * @pattern \S
         */
        orderId: string;
        /**
         * The express tracking number, or the delivery content for no-logistics delivery.
         * @minLength 1
         * @pattern \S
         */
        expressNo: string;
        /**
         * The express company code, as returned by list_express_companies. Use selfdelivery for no-logistics delivery.
         * @minLength 1
         * @pattern \S
         */
        expressCompanyCode: string;
        /**
         * The express company name. Matched from the code when omitted.
         * @minLength 1
         * @pattern \S
         */
        expressCompanyName?: string;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        deliveringTime?: number;
        /** Whether this is a split shipment. Requires skuIdList. */
        unpack?: boolean;
        /** The SKU IDs shipped in this package when unpack is true. */
        skuIdList?: Array<string>;
        /**
         * The return address ID used for this shipment.
         * @minLength 1
         * @pattern \S
         */
        returnAddressId?: string;
        /** The device identification codes required by subsidy or drone orders. */
        skuIdentifyCodeInfo?: {
          /**
           * The device SN code.
           * @minLength 1
           * @pattern \S
           */
          sNCode?: string;
          /**
           * The device barcode.
           * @minLength 1
           * @pattern \S
           */
          barCode?: string;
          /**
           * The first IMEI code.
           * @minLength 1
           * @pattern \S
           */
          iMEI1Code?: string;
          /**
           * The second IMEI code.
           * @minLength 1
           * @pattern \S
           */
          iMEI2Code?: string;
        };
      };
      output: {
        /** Whether Xiaohongshu accepted the shipment. */
        success: boolean;
      };
    };
    /** Get a Xiaohongshu after-sale record by its after-sale ID, including SKUs, amounts, and logistics. */
    "xiaohongshu_store.get_after_sale": {
      input: {
        /**
         * The Xiaohongshu after-sale ID.
         * @minLength 1
         * @pattern \S
         */
        returnsId: string;
        /** Whether to include the buyer-seller negotiation records. */
        needNegotiateRecord?: boolean;
      };
      output: {
        /** A Xiaohongshu after-sale record. Available fields depend on the after-sale status. */
        afterSale: Record<string, unknown>;
      };
    };
    /** Get the attributes and validation rules of a leaf Xiaohongshu category. */
    "xiaohongshu_store.get_category_attributes": {
      input: {
        /**
         * The leaf category ID.
         * @minLength 1
         * @pattern \S
         */
        categoryId: string;
      };
      output: {
        /** The attribute records with validation rules. */
        attributes: Array<Record<string, unknown>>;
      };
    };
    /** Get a Xiaohongshu item by its item ID, including its SKU list. */
    "xiaohongshu_store.get_item": {
      input: {
        /**
         * The Xiaohongshu item ID.
         * @minLength 1
         * @pattern \S
         */
        itemId: string;
        /**
         * The one-based page number of the SKU list.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * The number of SKUs per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** A Xiaohongshu item record. Available fields depend on the query form. */
        item: Record<string, unknown>;
        /** The SKU records of the item. */
        skus: Array<Record<string, unknown>>;
        /**
         * The total number of SKUs reported by Xiaohongshu.
         * @minimum 0
         */
        total: number;
      };
    };
    /** Get a Xiaohongshu order by its order ID, including SKU, amount, and delivery package details. */
    "xiaohongshu_store.get_order": {
      input: {
        /**
         * The Xiaohongshu order ID.
         * @minLength 1
         * @pattern \S
         */
        orderId: string;
      };
      output: {
        /** A Xiaohongshu order record. Available fields depend on the order type. */
        order: Record<string, unknown>;
      };
    };
    /** Get the customs declaration identity information of a cross-border Xiaohongshu order. */
    "xiaohongshu_store.get_order_declare_info": {
      input: {
        /**
         * The Xiaohongshu order ID.
         * @minLength 1
         * @pattern \S
         */
        orderId: string;
      };
      output: {
        /** The customs declaration records. */
        declarations: Array<Record<string, unknown>>;
      };
    };
    /** Get receiver addresses for Xiaohongshu orders. Only available while an order is pending shipment; call it right before printing shipping labels. */
    "xiaohongshu_store.get_order_receiver_info": {
      input: {
        /** Up to 20 receiver queries. Each needs the order ID and the openAddressId returned by get_order. */
        receiverQueries: Array<{
          /**
           * The Xiaohongshu order ID.
           * @minLength 1
           * @pattern \S
           */
          orderId: string;
          /**
           * The address credential returned by get_order as openAddressId.
           * @minLength 1
           * @pattern \S
           */
          openAddressId: string;
        }>;
        /** Whether the query targets exchange orders instead of regular orders. Defaults to false. */
        isReturn?: boolean;
      };
      output: {
        /** The receiver records, one per matched order. */
        receivers: Array<Record<string, unknown>>;
      };
    };
    /** Get the logistics tracking records of every package in a Xiaohongshu order. */
    "xiaohongshu_store.get_order_tracking": {
      input: {
        /**
         * The Xiaohongshu order ID.
         * @minLength 1
         * @pattern \S
         */
        orderId: string;
      };
      output: {
        /** The logistics packages with tracking records. */
        packages: Array<Record<string, unknown>>;
      };
    };
    /** Get the sellable, total, and occupied stock of a Xiaohongshu SKU, including per-warehouse breakdowns. */
    "xiaohongshu_store.get_sku_stock": {
      input: {
        /**
         * The Xiaohongshu SKU ID.
         * @minLength 1
         * @pattern \S
         */
        skuId: string;
      };
      output: {
        /** A Xiaohongshu SKU stock result, including per-warehouse breakdowns. */
        stock: Record<string, unknown>;
      };
    };
    /** List shop address records, including return addresses used when accepting after-sale returns. */
    "xiaohongshu_store.list_address_records": {
      input: {
        /**
         * The one-based page index.
         * @minimum 1
         */
        pageIndex?: number;
        /**
         * The number of records per page.
         * @minimum 1
         * @maximum 200
         */
        pageSize?: number;
      };
      output: {
        /** The address records. */
        addresses: Array<Record<string, unknown>>;
        /**
         * The total number of address records.
         * @minimum 0
         */
        total: number;
      };
    };
    /** List the reject reason options available when auditing or confirming receipt of a Xiaohongshu after-sale. */
    "xiaohongshu_store.list_after_sale_reject_reasons": {
      input: {
        /**
         * The Xiaohongshu after-sale ID.
         * @minLength 1
         * @pattern \S
         */
        returnsId: string;
        /**
         * The reject reason group: 1 for audit rejection or 2 for receipt rejection.
         * @minimum 1
         * @maximum 2
         */
        rejectReasonType: number;
      };
      output: {
        /** The available reject reason options. */
        reasons: Array<Record<string, unknown>>;
      };
    };
    /** List Xiaohongshu after-sale records by order or by creation/update time. Pass an order ID, or a time window (24 hours by creation time, 30 minutes by update time). */
    "xiaohongshu_store.list_after_sales": {
      input: {
        /**
         * The Xiaohongshu order ID.
         * @minLength 1
         * @pattern \S
         */
        orderId?: string;
        /**
         * The time field to filter on: 1 for creation time or 2 for update time. Required with startTime and endTime when orderId is omitted.
         * @minimum 1
         * @maximum 2
         */
        timeType?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        startTime?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        endTime?: number;
        /** The after-sale statuses to include: 1 pending audit, 2 pending buyer return, 3 pending seller receipt, 4 completed, 5 canceled, 6 closed, 9 audit rejected, 9001 receipt rejected, 12 exchange pending seller shipment, 13 exchange pending buyer confirmation, or 14 platform intervening. */
        statuses?: Array<number>;
        /** The after-sale types to include: 1 return, 2 exchange, 4 refund only after shipment, 5 refund only before shipment, or 6 price protection. */
        returnTypes?: Array<number>;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * The number of records per page. Defaults to 50 and cannot exceed 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The Xiaohongshu after-sale records. */
        afterSales: Array<Record<string, unknown>>;
        /**
         * The total number of matching after-sale records reported by Xiaohongshu.
         * @minimum 0
         */
        total: number;
        /**
         * The requested one-based page number.
         * @exclusiveMinimum 0
         */
        pageNo: number;
        /**
         * The requested number of records per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
      };
    };
    /** List the freight templates configured for the Xiaohongshu shop. */
    "xiaohongshu_store.list_carriage_templates": {
      input: {
        /**
         * The one-based page index.
         * @minimum 1
         */
        pageIndex?: number;
        /**
         * The number of records per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The freight templates. */
        templates: Array<Record<string, unknown>>;
        /**
         * The total number of freight templates.
         * @minimum 0
         */
        total: number;
      };
    };
    /** List the Xiaohongshu item categories under a parent category, or the top-level categories. */
    "xiaohongshu_store.list_categories": {
      input: {
        /**
         * The parent category ID. Lists top-level categories when omitted.
         * @minLength 1
         * @pattern \S
         */
        categoryId?: string;
      };
      output: {
        /** The child category records. */
        categories: Array<Record<string, unknown>>;
      };
    };
    /** List the express companies supported by Xiaohongshu for order shipment. */
    "xiaohongshu_store.list_express_companies": {
      input: Record<string, never>;
      output: {
        /** The express company records. */
        companies: Array<Record<string, unknown>>;
      };
    };
    /** List Xiaohongshu items together with their full SKU details such as price, stock, and logistics plan. */
    "xiaohongshu_store.list_item_skus": {
      input: {
        /**
         * An exact Xiaohongshu SKU ID.
         * @minLength 1
         * @pattern \S
         */
        id?: string;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        createTimeFrom?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        createTimeTo?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        updateTimeFrom?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        updateTimeTo?: number;
        /** Whether to include only items currently on sale. */
        buyable?: boolean;
        /**
         * The minimum stock quantity to include.
         * @minimum 0
         */
        stockGte?: number;
        /**
         * The maximum stock quantity to include.
         * @minimum 0
         */
        stockLte?: number;
        /**
         * An item barcode.
         * @minLength 1
         * @pattern \S
         */
        barcode?: string;
        /**
         * A Xiaohongshu SKU code.
         * @minLength 1
         * @pattern \S
         */
        scSkucode?: string;
        /** Whether to return only single-item packs. */
        singlePackOnly?: boolean;
        /**
         * The cursor from the previous catalog page.
         * @minLength 1
         * @pattern \S
         */
        lastId?: string;
        /** Whether to include only channel items. */
        isChannel?: boolean;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * The number of records per page. Defaults to 50 and cannot exceed 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The item records with SKU details. */
        items: Array<Record<string, unknown>>;
        /**
         * The total number of matching SKUs.
         * @minimum 0
         */
        total: number;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNo: number;
        /**
         * The number of records per page. Defaults to 50 and cannot exceed 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize: number;
      };
    };
    /** List Xiaohongshu items with basic fields using ID, time, stock, barcode, or availability filters. */
    "xiaohongshu_store.list_items": {
      input: {
        /**
         * An exact Xiaohongshu item ID.
         * @minLength 1
         * @pattern \S
         */
        id?: string;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        createTimeFrom?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        createTimeTo?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        updateTimeFrom?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        updateTimeTo?: number;
        /** Whether to include only items currently on sale. */
        buyable?: boolean;
        /**
         * The minimum stock quantity to include.
         * @minimum 0
         */
        stockGte?: number;
        /**
         * The maximum stock quantity to include.
         * @minimum 0
         */
        stockLte?: number;
        /**
         * An item barcode.
         * @minLength 1
         * @pattern \S
         */
        barcode?: string;
        /**
         * A Xiaohongshu item code.
         * @minLength 1
         * @pattern \S
         */
        skucode?: string;
        /** Whether to include only frozen items. */
        freeze?: boolean;
        /** Whether to return only single-item packs. */
        singlePackOnly?: boolean;
        /**
         * The cursor from the previous page when syncing the whole catalog.
         * @minLength 1
         * @pattern \S
         */
        lastId?: string;
        /** Whether to include only channel items. */
        isChannel?: boolean;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * The number of records per page. Defaults to 50 and cannot exceed 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The Xiaohongshu item records. */
        items: Array<Record<string, unknown>>;
        /**
         * The total number of matching items reported by Xiaohongshu.
         * @minimum 0
         */
        total: number;
        /**
         * The requested one-based page number.
         * @exclusiveMinimum 0
         */
        pageNo: number;
        /**
         * The requested number of items per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
      };
    };
    /** List shop logistics plans whose IDs can be assigned to item SKUs. */
    "xiaohongshu_store.list_logistics_plans": {
      input: Record<string, never>;
      output: {
        /** The logistics plans. */
        plans: Array<Record<string, unknown>>;
      };
    };
    /** List and filter files in the Xiaohongshu material center. */
    "xiaohongshu_store.list_materials": {
      input: {
        /**
         * An exact material ID.
         * @minLength 1
         * @pattern \S
         */
        materialId?: string;
        /**
         * A material file-name filter.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /** The material type. */
        type?: "IMAGE" | "VIDEO";
        /**
         * The upload status: 1 success, 2 uploading, or 3 failed.
         * @minimum 1
         * @maximum 3
         */
        status?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        createTimeFrom?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        createTimeTo?: number;
        /** Whether to sort creation time in ascending order. */
        ascByCreateTime?: boolean;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * The page size, from 1 to 500.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
      };
      output: {
        /** The material records. */
        materials: Array<Record<string, unknown>>;
      };
    };
    /** List Xiaohongshu orders by creation or update time. startTime and endTime are Unix timestamps in seconds, while the returned order times are in milliseconds. Creation-time windows are limited to 24 hours and update-time windows to 30 minutes. */
    "xiaohongshu_store.list_orders": {
      input: {
        /**
         * The time field to filter on: 1 for creation time or 2 for update time.
         * @minimum 1
         * @maximum 2
         */
        timeType: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        startTime: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        endTime: number;
        /**
         * The order type: 0 for all, 1 for in-stock, 2 for deposit presale, 4 for full-payment presale, or 5 for exchange reshipment.
         * @minimum 0
         * @maximum 5
         */
        orderType?: number;
        /**
         * The order status: 0 for all, 1 unpaid, 2 paid processing, 3 in customs clearance, 4 pending shipment, 5 partially shipped, 6 shipped, 7 completed, 8 closed, 9 canceled, or 10 exchange requested.
         * @minimum 0
         * @maximum 10
         */
        orderStatus?: number;
        /**
         * The one-based page number. Defaults to 1 and cannot exceed 100.
         * @minimum 1
         * @maximum 100
         */
        pageNo?: number;
        /**
         * The number of records per page. Defaults to 50 and cannot exceed 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The Xiaohongshu order records. */
        orders: Array<Record<string, unknown>>;
        /**
         * The total number of matching orders reported by Xiaohongshu.
         * @minimum 0
         */
        total: number;
        /**
         * The requested one-based page number.
         * @exclusiveMinimum 0
         */
        pageNo: number;
        /**
         * The requested number of orders per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
      };
    };
    /** List the customs ports supported by Xiaohongshu for cross-border clearance. */
    "xiaohongshu_store.list_supported_ports": {
      input: Record<string, never>;
      output: {
        /** The customs ports supported by the platform. */
        platformPorts: Array<Record<string, unknown>>;
        /** The customs ports the seller may declare through. */
        sellerPorts: Array<Record<string, unknown>>;
      };
    };
    /** Change the express tracking number of a shipped Xiaohongshu order. Only available after shipment and before receipt. */
    "xiaohongshu_store.modify_order_express": {
      input: {
        /**
         * The Xiaohongshu order ID.
         * @minLength 1
         * @pattern \S
         */
        orderId: string;
        /**
         * The new express tracking number.
         * @minLength 1
         * @pattern \S
         */
        expressNo: string;
        /**
         * The Xiaohongshu express company code, as returned by list_express_companies.
         * @minLength 1
         * @pattern \S
         */
        expressCompanyCode: string;
        /**
         * The express company name.
         * @minLength 1
         * @pattern \S
         */
        expressCompanyName: string;
        /** The delivery package index from the order detail simpleDeliveryOrderList. Required for split shipments. */
        deliveryOrderIndex?: number;
        /**
         * The tracking number to replace. Takes precedence over deliveryOrderIndex and rewrites every package using it.
         * @minLength 1
         * @pattern \S
         */
        oldExpressNo?: string;
        /** The new delivery links for automatically delivered orders. */
        expressUrlProofList?: Array<string>;
      };
      output: {
        /** Whether Xiaohongshu accepted the update. */
        success: boolean;
      };
    };
    /** Modify the seller remark and flag of a Xiaohongshu order. */
    "xiaohongshu_store.modify_order_remark": {
      input: {
        /**
         * The Xiaohongshu order ID.
         * @minLength 1
         * @pattern \S
         */
        orderId: string;
        /**
         * The seller remark content.
         * @minLength 1
         * @pattern \S
         */
        sellerMarkNote: string;
        /**
         * The name of the operator making the change.
         * @minLength 1
         * @pattern \S
         */
        operator: string;
        /**
         * The remark flag: 1 gray, 2 red, 3 yellow, 4 green, 5 blue, or 6 purple.
         * @minimum 1
         * @maximum 6
         */
        sellerMarkPriority: number;
      };
      output: {
        /** Whether Xiaohongshu accepted the update. */
        success: boolean;
      };
    };
    /** Refresh the access token using the refresh token stored in the connection credential. Xiaohongshu only issues new tokens when the access token has under 30 minutes left or has expired; otherwise it returns the current ones unchanged. A changed token set must be saved back to the connection, and the old access token stays valid for only 5 more minutes. Access tokens expire after 7 days. */
    "xiaohongshu_store.refresh_token": {
      input: Record<string, never>;
      output: {
        /** The token record with accessToken, accessTokenExpiresAt, refreshToken, refreshTokenExpiresAt, sellerId, and sellerName. */
        token: Record<string, unknown>;
      };
    };
    /** Ask Xiaohongshu to notify the payment company to push the payment record to customs again for a bonded cross-border order. */
    "xiaohongshu_store.resend_payment_record": {
      input: {
        /**
         * The Xiaohongshu order ID.
         * @minLength 1
         * @pattern \S
         */
        orderId: string;
        /** The customs system to push to. */
        customsType: "zongshu" | "local";
      };
      output: {
        /** The result message returned by Xiaohongshu. */
        message: string;
      };
    };
    /** Search the brands available for a leaf Xiaohongshu category. */
    "xiaohongshu_store.search_brands": {
      input: {
        /**
         * The leaf category ID.
         * @minLength 1
         * @pattern \S
         */
        categoryId: string;
        /**
         * A brand-name keyword.
         * @minLength 1
         * @pattern \S
         */
        keyword?: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * The page size, from 1 to 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
      };
      output: {
        /** The matching brands. */
        brands: Array<Record<string, unknown>>;
      };
    };
    /** Search Xiaohongshu items with full publish fields using keywords, item codes, or availability filters. */
    "xiaohongshu_store.search_items": {
      input: {
        /**
         * A keyword matched against the item title.
         * @minLength 1
         * @pattern \S
         */
        keyword?: string;
        /** Exact item identifiers to look up, such as item codes, barcodes, item IDs, SPU IDs, or article numbers. */
        keywords?: Array<string>;
        /** Whether to include only items currently on sale. */
        buyable?: boolean;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        createTimeFrom?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        createTimeTo?: number;
        /**
         * The starting item ID cursor for deep-paging a full-catalog sync.
         * @minLength 1
         * @pattern \S
         */
        lastId?: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * The number of records per page. Defaults to 50 and cannot exceed 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The Xiaohongshu item records with full publish fields. */
        items: Array<Record<string, unknown>>;
        /**
         * The total number of matching items reported by Xiaohongshu.
         * @minimum 0
         */
        total: number;
        /**
         * The requested one-based page number.
         * @exclusiveMinimum 0
         */
        pageNo: number;
        /**
         * The requested number of items per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
      };
    };
    /** List or delist a Xiaohongshu SKU. */
    "xiaohongshu_store.set_sku_availability": {
      input: {
        /**
         * The Xiaohongshu SKU ID.
         * @minLength 1
         * @pattern \S
         */
        skuId: string;
        /** Whether the SKU should be on sale. */
        available: boolean;
      };
      output: {
        /** Whether Xiaohongshu accepted the update. */
        success: boolean;
      };
    };
    /** Confirm receipt of the returned package and report the exchange shipment tracking number for a Xiaohongshu exchange after-sale. */
    "xiaohongshu_store.ship_after_sale_exchange": {
      input: {
        /**
         * The Xiaohongshu after-sale ID.
         * @minLength 1
         * @pattern \S
         */
        returnsId: string;
        /**
         * The Xiaohongshu express company code, as returned by list_express_companies.
         * @minLength 1
         * @pattern \S
         */
        expressCompanyCode: string;
        /**
         * The express tracking number of the exchange shipment.
         * @minLength 1
         * @pattern \S
         */
        expressNo: string;
      };
      output: {
        /** Whether Xiaohongshu accepted the exchange shipment. */
        success: boolean;
      };
    };
    /** Set the total stock of a Xiaohongshu SKU. Xiaohongshu derives the sellable stock from the difference with occupied and channel stock. */
    "xiaohongshu_store.sync_sku_stock": {
      input: {
        /**
         * The Xiaohongshu SKU ID.
         * @minLength 1
         * @pattern \S
         */
        skuId: string;
        /**
         * The new total stock, including occupied and channel quantities.
         * @minimum 0
         */
        qty: number;
      };
      output: {
        /** A Xiaohongshu SKU stock result, including per-warehouse breakdowns. */
        stock: Record<string, unknown>;
      };
    };
    /** Update a Xiaohongshu item and its SKU collection, including adding and removing SKUs. */
    "xiaohongshu_store.update_item": {
      input: {
        /**
         * The Xiaohongshu item ID.
         * @minLength 1
         * @pattern \S
         */
        itemId: string;
        /**
         * The item title.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /**
         * The leaf category ID.
         * @minLength 1
         * @pattern \S
         */
        categoryId: string;
        /**
         * The freight template ID.
         * @minLength 1
         * @pattern \S
         */
        shippingTemplateId: string;
        /**
         * The item's gross shipping weight.
         * @minimum 0
         */
        shippingGrossWeight?: number;
        /**
         * The main material URLs.
         * @minItems 1
         */
        images: Array<Record<string, unknown>>;
        /** The SKUs to create. */
        createSkuList?: Array<Record<string, unknown>>;
        /**
         * The existing SKUs to update.
         * @minItems 1
         */
        updateSkuList: Array<Record<string, unknown>>;
        /** The SKU IDs to delete. */
        deleteSkuIdList?: Array<string>;
        /**
         * The brand ID.
         * @minLength 1
         * @pattern \S
         */
        brandId?: string;
        /** The category attribute assignments. */
        attributes?: Array<Record<string, unknown>>;
        /** The item specification type IDs. */
        variantIds?: Array<string>;
        /**
         * The merchant article number.
         * @minLength 1
         * @pattern \S
         */
        articleNo?: string;
        /**
         * The item description.
         * @minLength 1
         * @pattern \S
         */
        description?: string;
        /**
         * The item short title.
         * @minLength 1
         * @pattern \S
         */
        itemShortTitle?: string;
        /**
         * The delivery mode: 0 normal or 1 no-logistics.
         * @minimum 0
         * @maximum 1
         */
        deliveryMode?: number;
        /**
         * The free-return policy value: 1 or 2.
         * @minimum 1
         * @maximum 2
         */
        freeReturn?: number;
        /** The main video material URLs. */
        videos?: Array<Record<string, unknown>>;
        /** The description image material URLs. */
        imageDescriptions?: Array<Record<string, unknown>>;
      };
      output: {
        /** A Xiaohongshu item record. Available fields depend on the query form. */
        item: Record<string, unknown>;
      };
    };
    /** Upload an image or video to the Xiaohongshu material center and return its URL for item media fields. */
    "xiaohongshu_store.upload_material": {
      input: {
        /**
         * The material file name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** The material type. */
        type: "IMAGE" | "VIDEO";
        /**
         * The file content encoded as base64.
         * @minLength 1
         * @pattern \S
         */
        contentBase64: string;
      };
      output: {
        /** The material record with its ID, URL, and upload status. */
        material: Record<string, unknown>;
      };
    };
  }
}
