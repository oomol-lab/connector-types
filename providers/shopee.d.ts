import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Shopee global product draft for a mainland China CNSC merchant. */
    "shopee.create_global_item": {
      input: {
        /**
         * The Shopee merchant ID. Omit it when the connection has exactly one merchant.
         * @minimum 1
         */
        merchantId?: number;
        /**
         * The Shopee global category ID.
         * @minimum 1
         */
        categoryId: number;
        /** The global product name. */
        name: string;
        /** The global product description. */
        description: string;
        /** The seller-defined global product SKU. */
        sku?: string;
        /**
         * Shopee Media Space image IDs for the product.
         * @minItems 1
         * @maxItems 9
         */
        imageIds?: Array<string>;
        /**
         * The original global product price in the merchant base currency.
         * @exclusiveMinimum 0
         */
        originalPrice: number;
        /**
         * The available normal stock for the product.
         * @minimum 0
         */
        stock?: number;
        /**
         * The package weight in kilograms.
         * @exclusiveMinimum 0
         */
        weight: number;
        /**
         * The package length in centimeters.
         * @exclusiveMinimum 0
         */
        packageLength?: number;
        /**
         * The package width in centimeters.
         * @exclusiveMinimum 0
         */
        packageWidth?: number;
        /**
         * The package height in centimeters.
         * @exclusiveMinimum 0
         */
        packageHeight?: number;
        /**
         * The number of days needed to ship the product.
         * @minimum 1
         */
        daysToShip: number;
        /** The product condition. */
        condition: "NEW" | "USED";
        /**
         * The Shopee brand ID.
         * @minimum 1
         */
        brandId?: number;
        /** The original brand name. */
        brandName?: string;
        /** The product attributes required by its category. */
        attributes?: Array<{
          /**
           * The Shopee attribute ID.
           * @minimum 1
           */
          attributeId: number;
          /**
           * The values selected for this attribute.
           * @minItems 1
           */
          values?: Array<{
            /** The predefined Shopee attribute value ID, or 0 for a custom value. */
            valueId?: number;
            /** The predefined or custom attribute value name. */
            originalValueName?: string;
            /** The unit for a quantitative attribute value. */
            valueUnit?: string;
          }>;
        }>;
        /** Stock allocated to Shopee seller stock locations. */
        sellerStock?: Array<{
          /** The Shopee seller stock location ID. */
          locationId: string;
          /**
           * The available stock at this location.
           * @minimum 0
           */
          stock: number;
        }>;
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** Get Shopee global product attributes for up to 20 category IDs. */
    "shopee.get_global_attribute_tree": {
      input: {
        /**
         * The Shopee merchant ID. Omit it when the connection has exactly one merchant.
         * @minimum 1
         */
        merchantId?: number;
        /**
         * The global category IDs whose attribute definitions should be returned.
         * @minItems 1
         * @maxItems 20
         */
        categoryIds: Array<number>;
        /** The language used for category and attribute names. */
        language?: "en" | "zh-hans";
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** Get details for up to 20 Shopee global products. */
    "shopee.get_global_items": {
      input: {
        /**
         * The Shopee merchant ID. Omit it when the connection has exactly one merchant.
         * @minimum 1
         */
        merchantId?: number;
        /**
         * The global product IDs to retrieve.
         * @minItems 1
         * @maxItems 20
         */
        globalItemIds: Array<number>;
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** Get variation tiers, model prices, and model stock for a Shopee shop item. */
    "shopee.get_item_models": {
      input: {
        /**
         * The Shopee shop ID. Omit it when the connection has exactly one shop.
         * @minimum 1
         */
        shopId?: number;
        /**
         * The Shopee item ID.
         * @minimum 1
         */
        itemId: number;
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** Get the identity, region, currency, and authorization status of a Shopee merchant. */
    "shopee.get_merchant_info": {
      input: {
        /**
         * The Shopee merchant ID. Omit it when the connection has exactly one merchant.
         * @minimum 1
         */
        merchantId?: number;
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** Get Shopee accounting and fee details for one order. */
    "shopee.get_order_escrow": {
      input: {
        /**
         * The Shopee shop ID. Omit it when the connection has exactly one shop.
         * @minimum 1
         */
        shopId?: number;
        /** The Shopee order serial number. */
        orderSerialNumber: string;
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** Get detailed information for up to 50 Shopee orders from one shop. */
    "shopee.get_orders": {
      input: {
        /**
         * The Shopee shop ID. Omit it when the connection has exactly one shop.
         * @minimum 1
         */
        shopId?: number;
        /**
         * The Shopee order serial numbers to retrieve.
         * @minItems 1
         * @maxItems 50
         */
        orderSerialNumbers: Array<string>;
        /**
         * Additional documented order fields to include in the response.
         * @minItems 1
         */
        optionalFields?: Array<string>;
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** Get the details and current workflow state of a Shopee return. */
    "shopee.get_return": {
      input: {
        /**
         * The Shopee shop ID. Omit it when the connection has exactly one shop.
         * @minimum 1
         */
        shopId?: number;
        /** The Shopee return serial number. */
        returnSerialNumber: string;
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** Get the pickup, drop-off, or non-integrated shipping options for an order package. */
    "shopee.get_shipping_parameters": {
      input: {
        /**
         * The Shopee shop ID. Omit it when the connection has exactly one shop.
         * @minimum 1
         */
        shopId?: number;
        /** The Shopee order serial number. */
        orderSerialNumber: string;
        /** The package number for an order split into packages. */
        packageNumber?: string;
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** Get the profile, region, authorization, and cross-border status of a Shopee shop. */
    "shopee.get_shop_info": {
      input: {
        /**
         * The Shopee shop ID. Omit it when the connection has exactly one shop.
         * @minimum 1
         */
        shopId?: number;
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** Get base information for up to 50 Shopee shop items. */
    "shopee.get_shop_items": {
      input: {
        /**
         * The Shopee shop ID. Omit it when the connection has exactly one shop.
         * @minimum 1
         */
        shopId?: number;
        /**
         * The Shopee item IDs to retrieve.
         * @minItems 1
         * @maxItems 50
         */
        itemIds: Array<number>;
        /** Whether to include item tax information. */
        includeTaxInfo?: boolean;
        /** Whether to include item complaint policies. */
        includeComplaintPolicy?: boolean;
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** Get logistics tracking events for a Shopee order package. */
    "shopee.get_tracking_info": {
      input: {
        /**
         * The Shopee shop ID. Omit it when the connection has exactly one shop.
         * @minimum 1
         */
        shopId?: number;
        /** The Shopee order serial number. */
        orderSerialNumber: string;
        /** The package number for an order split into packages. */
        packageNumber?: string;
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** Get carrier tracking numbers for a shipped Shopee order package. */
    "shopee.get_tracking_number": {
      input: {
        /**
         * The Shopee shop ID. Omit it when the connection has exactly one shop.
         * @minimum 1
         */
        shopId?: number;
        /** The Shopee order serial number. */
        orderSerialNumber: string;
        /** The package number for an order split into packages. */
        packageNumber?: string;
        /** Additional tracking number fields to return. */
        optionalFields?: Array<"plp_number" | "first_mile_tracking_number" | "last_mile_tracking_number">;
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** List Shopee brands available for a global product category. */
    "shopee.list_global_brands": {
      input: {
        /**
         * The Shopee merchant ID. Omit it when the connection has exactly one merchant.
         * @minimum 1
         */
        merchantId?: number;
        /**
         * The Shopee global category ID.
         * @minimum 1
         */
        categoryId: number;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The number of brands to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The brand status: 1 for normal or 2 for pending.
         * @minimum 1
         * @maximum 2
         */
        status?: number;
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** List the Shopee global product category tree for a cross-border merchant. */
    "shopee.list_global_categories": {
      input: {
        /**
         * The Shopee merchant ID. Omit it when the connection has exactly one merchant.
         * @minimum 1
         */
        merchantId?: number;
        /** The language used for category and attribute names. */
        language?: "en" | "zh-hans";
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** List global products owned by a Shopee cross-border merchant. */
    "shopee.list_global_items": {
      input: {
        /**
         * The Shopee merchant ID. Omit it when the connection has exactly one merchant.
         * @minimum 1
         */
        merchantId?: number;
        /** The cursor returned by the previous page. */
        cursor?: string;
        /**
         * The number of global products to return, from 1 to 50.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /**
         * The earliest item update time as a Unix timestamp in seconds.
         * @minimum 0
         */
        updatedFrom?: number;
        /**
         * The latest item update time as a Unix timestamp in seconds.
         * @minimum 0
         */
        updatedTo?: number;
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** List shops authorized and bound to a Shopee merchant. */
    "shopee.list_merchant_shops": {
      input: {
        /**
         * The Shopee merchant ID. Omit it when the connection has exactly one merchant.
         * @minimum 1
         */
        merchantId?: number;
        /**
         * The one-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of shops to return, from 1 to 500.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** List Shopee shop orders created or updated in a time range of at most 15 days. */
    "shopee.list_orders": {
      input: {
        /**
         * The Shopee shop ID. Omit it when the connection has exactly one shop.
         * @minimum 1
         */
        shopId?: number;
        /** The order timestamp field used for the range. */
        timeRangeField?: "create_time" | "update_time";
        /**
         * The inclusive range start as a Unix timestamp in seconds.
         * @minimum 0
         */
        timeFrom: number;
        /**
         * The inclusive range end as a Unix timestamp in seconds.
         * @minimum 0
         */
        timeTo: number;
        /**
         * The number of orders to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The cursor returned by the previous page. */
        cursor?: string;
        /** The Shopee order status to include. */
        orderStatus?: "UNPAID" | "READY_TO_SHIP" | "PROCESSED" | "SHIPPED" | "COMPLETED" | "IN_CANCEL" | "CANCELLED" | "INVOICE_PENDING";
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** List Shopee returns by creation time, update time, and workflow status. */
    "shopee.list_returns": {
      input: {
        /**
         * The Shopee shop ID. Omit it when the connection has exactly one shop.
         * @minimum 1
         */
        shopId?: number;
        /**
         * The one-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of returns to include, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The earliest return creation time as a Unix timestamp.
         * @minimum 0
         */
        createdFrom?: number;
        /**
         * The latest return creation time as a Unix timestamp.
         * @minimum 0
         */
        createdTo?: number;
        /**
         * The earliest return update time as a Unix timestamp.
         * @minimum 0
         */
        updatedFrom?: number;
        /**
         * The latest return update time as a Unix timestamp.
         * @minimum 0
         */
        updatedTo?: number;
        /** A Shopee ReturnStatus value. */
        status?: string;
        /** A Shopee NegotiationStatus value. */
        negotiationStatus?: string;
        /** A Shopee SellerProofStatus value. */
        sellerProofStatus?: string;
        /** A Shopee SellerCompensationStatus value. */
        sellerCompensationStatus?: string;
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** List Shopee shop items by listing status and update time. */
    "shopee.list_shop_items": {
      input: {
        /**
         * The Shopee shop ID. Omit it when the connection has exactly one shop.
         * @minimum 1
         */
        shopId?: number;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The number of items to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The listing statuses to include.
         * @minItems 1
         */
        statuses: Array<"NORMAL" | "BANNED" | "UNLIST" | "REVIEWING" | "SELLER_DELETE" | "SHOPEE_DELETE">;
        /**
         * The earliest item update time as a Unix timestamp.
         * @minimum 0
         */
        updatedFrom?: number;
        /**
         * The latest item update time as a Unix timestamp.
         * @minimum 0
         */
        updatedTo?: number;
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** Arrange pickup, drop-off, or non-integrated shipment for a Shopee order package. */
    "shopee.ship_order": {
      input: {
        /**
         * The Shopee shop ID. Omit it when the connection has exactly one shop.
         * @minimum 1
         */
        shopId?: number;
        /** The Shopee order serial number. */
        orderSerialNumber: string;
        /** The package number for an order split into packages. */
        packageNumber?: string;
        /** Pickup options returned by Shopee. */
        pickup?: {
          /**
           * The pickup address ID.
           * @minimum 1
           */
          addressId: number;
          /** The pickup time-slot ID. */
          pickupTimeId?: string;
          /** A carrier-assigned tracking number when required. */
          trackingNumber?: string;
        };
        /** Drop-off options returned by Shopee. */
        dropoff?: {
          /**
           * The carrier branch ID.
           * @minimum 1
           */
          branchId?: number;
          /** The sender's legal name when required. */
          senderRealName?: string;
          /** A carrier-assigned tracking number when required. */
          trackingNumber?: string;
          /** The selected third-party logistics provider slug. */
          slug?: string;
        };
        /** Options for a non-integrated logistics channel. */
        nonIntegrated?: {
          /** The carrier-assigned tracking number. */
          trackingNumber?: string;
        };
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** Replace prices for up to 50 models of one Shopee shop item. */
    "shopee.update_item_prices": {
      input: {
        /**
         * The Shopee shop ID. Omit it when the connection has exactly one shop.
         * @minimum 1
         */
        shopId?: number;
        /**
         * The Shopee item ID.
         * @minimum 1
         */
        itemId: number;
        /**
         * The replacement prices for the item or its models.
         * @minItems 1
         * @maxItems 50
         */
        prices: Array<{
          /**
           * The Shopee model ID. Omit it for an item without variations.
           * @minimum 1
           */
          modelId?: number;
          /**
           * The new original price in the shop currency.
           * @exclusiveMinimum 0
           */
          originalPrice: number;
        }>;
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** Replace seller stock for up to 50 models of one Shopee shop item. */
    "shopee.update_item_stocks": {
      input: {
        /**
         * The Shopee shop ID. Omit it when the connection has exactly one shop.
         * @minimum 1
         */
        shopId?: number;
        /**
         * The Shopee item ID.
         * @minimum 1
         */
        itemId: number;
        /**
         * The replacement stock for the item or its models.
         * @minItems 1
         * @maxItems 50
         */
        stocks: Array<{
          /**
           * The Shopee model ID. Omit it for an item without variations.
           * @minimum 1
           */
          modelId?: number;
          /**
           * The new seller stock values, optionally split by warehouse location.
           * @minItems 1
           */
          sellerStock: Array<{
            /** The warehouse location ID returned by Shopee. */
            locationId?: string;
            /**
             * The new available stock at this location.
             * @minimum 0
             */
            stock: number;
          }>;
        }>;
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
    /** Download a public image URL and upload it to Shopee Media Space for products. */
    "shopee.upload_product_image": {
      input: {
        /**
         * A public HTTPS URL for a JPG, JPEG, or PNG image up to 10 MB.
         * @format uri
         */
        imageUrl: string;
        /** How Shopee processes the image. */
        scene?: "normal" | "desc";
        /** The requested image ratio for eligible sellers. */
        ratio?: "1:1" | "3:4";
      };
      output: {
        /** The Shopee request ID used for upstream error tracking. */
        requestId?: string;
        /** The response data returned by Shopee Open Platform. */
        data: Record<string, unknown>;
      };
    };
  }
}
