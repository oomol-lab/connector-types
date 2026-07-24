import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a Luckin Coffee order. This changes a real order and may be irreversible; confirm the exact order with the user first. */
    "luckin_coffee.cancelOrder": {
      input: {
        /**
         * The exact order ID to cancel.
         * @minLength 1
         */
        orderId: string;
      };
      output: {
        /** The upstream result code. Zero indicates success. */
        code?: number;
        /** The upstream result message. */
        msg?: string;
        /** Whether it was canceled. */
        data?: boolean;
        /** Whether the operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Create a real Luckin Coffee order that may require payment. Preview the order first and obtain the user's confirmation before calling this action. */
    "luckin_coffee.createOrder": {
      input: {
        /**
         * The Luckin Coffee store ID returned by `queryShopList`.
         * @exclusiveMinimum 0
         */
        deptId: number;
        /**
         * The configured products to order.
         * @minItems 1
         */
        productList: Array<{
          /**
           * The quantity to order.
           * @exclusiveMinimum 0
           */
          amount: number;
          /**
           * The Luckin Coffee product ID.
           * @exclusiveMinimum 0
           */
          productId: number;
          /**
           * The exact product SKU code.
           * @minLength 1
           */
          skuCode: string;
        }>;
        /**
         * Longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        longitude: number;
        /**
         * Latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        latitude: number;
        /** Coupon codes returned by `previewOrder`. */
        couponCodeList?: Array<string>;
        /** An optional order note. */
        remark?: string;
      };
      output: {
        /** The upstream result code. Zero indicates success. */
        code?: number;
        /** The upstream result message. */
        msg?: string;
        /** The created Luckin Coffee order and payment details. */
        data?: {
          /** The numeric order ID. Prefer `orderIdStr` when passing it to another action. */
          orderId?: number;
          /** The WeChat payment URL. */
          payOrderUrl?: string;
          /** The payment QR-code URL. */
          payOrderQrCodeUrl?: string;
          /** The amount to pay. */
          discountPrice?: number;
          /** Whether payment is required. */
          needPay?: boolean;
          /** The payment transaction number. */
          tradeNo?: string | null;
          /** Additional order information. */
          description?: string | null;
          /** The business notification URL. */
          businessNotifyUrl?: string | null;
          /** The WeChat Pay sub-merchant ID. */
          subMchid?: string | null;
          /** The order ID as a lossless string. */
          orderIdStr?: string;
          [key: string]: unknown;
        };
        /** Whether the operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Preview a Luckin Coffee order, including prices and available coupons, without creating it. */
    "luckin_coffee.previewOrder": {
      input: {
        /**
         * The Luckin Coffee store ID returned by `queryShopList`.
         * @exclusiveMinimum 0
         */
        deptId: number;
        /**
         * The configured products to preview.
         * @minItems 1
         */
        productList: Array<{
          /**
           * The quantity to order.
           * @exclusiveMinimum 0
           */
          amount: number;
          /**
           * The Luckin Coffee product ID.
           * @exclusiveMinimum 0
           */
          productId: number;
          /**
           * The exact product SKU code.
           * @minLength 1
           */
          skuCode: string;
        }>;
      };
      output: {
        /** The upstream result code. Zero indicates success. */
        code?: number;
        /** The upstream result message. */
        msg?: string;
        /** A Luckin Coffee order preview. */
        data?: {
          /** The estimated pickup or delivery timestamp. */
          aboutTime?: number;
          /** The estimated amount to pay. */
          discountPrice?: number;
          /** A Luckin Coffee store. */
          shopInfo?: {
            /** The store ID. */
            deptId?: number;
            /** The store name. */
            deptName?: string;
            /** The store address. */
            address?: string;
            /** Store tags. */
            deptTags?: Array<string>;
            /** The store longitude. */
            longitude?: number;
            /** The store latitude. */
            latitude?: number;
            /** The opening time. */
            workTimeStart?: string;
            /** The closing time. */
            workTimeEnd?: string;
            /** The distance from the requested coordinates in kilometers. */
            distance?: number;
            /** The store number. */
            number?: string;
            [key: string]: unknown;
          };
          /** The configured products in the preview. */
          productInfoList?: Array<{
            /** The product ID. */
            productId?: number;
            /** The product SKU code. */
            skuCode?: string;
            /** The product name. */
            name?: string;
            /** The ordered quantity. */
            amount?: number;
            /** The selected attribute summary. */
            additionDesc?: string;
            /** The large product image URL. */
            bigPicUrl?: string | null;
            /** The product thumbnail URL. */
            breviaryPicUrl?: string | null;
            /** The product list price. */
            initPrice?: number;
            /** The estimated unit price. */
            estimatePrice?: number;
            /** The estimated line total. */
            estimateTotalPrice?: number;
            [key: string]: unknown;
          }>;
          /** Coupon codes selected by the preview. */
          couponCodeList?: Array<string>;
          /** Per-commodity price details. */
          orderGranularCommodityList?: Array<{
            /** The commodity ID. */
            commodityId?: number;
            /** The commodity code. */
            commodityCode?: string;
            /** The commodity name. */
            commodityName?: string;
            /** The payable amount. */
            payableMoney?: number;
            /** The paid amount. */
            payMoney?: number;
            [key: string]: unknown;
          }>;
          /** The estimated delivery time. */
          expressExpectTime?: number | null;
          /** The discount amount. */
          privilegeMoney?: number;
          /** The total list price. */
          totalInitialPrice?: number;
          [key: string]: unknown;
        };
        /** Whether the operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get the current status, pickup details, products, payment, and delivery information for an order. */
    "luckin_coffee.queryOrderDetailInfo": {
      input: {
        /**
         * The lossless order ID string returned by `createOrder`.
         * @minLength 1
         */
        orderId: string;
      };
      output: {
        /** The upstream result code. Zero indicates success. */
        code?: number;
        /** The upstream result message. */
        msg?: string;
        /** Luckin Coffee order details. */
        data?: {
          /** The order ID. */
          orderId?: string;
          /** Order status: 10 pending payment, 20 placed, 30 preparing, 60 ready, 80 completed, 100 canceled. */
          orderStatus?: number;
          /** The localized order status name. */
          orderStatusName?: string;
          /** The estimated pickup or delivery timestamp. */
          aboutTime?: number;
          /** The actual pickup time. */
          takeMealTime?: string;
          /** Pickup-code information. */
          takeMealCodeInfo?: {
            /** The pickup code or its generation status. */
            code?: string;
            /** The pickup order ID. */
            takeOrderId?: string;
            [key: string]: unknown;
          };
          /** A Luckin Coffee store. */
          shopInfo?: {
            /** The store ID. */
            deptId?: number;
            /** The store name. */
            deptName?: string;
            /** The store address. */
            address?: string;
            /** Store tags. */
            deptTags?: Array<string>;
            /** The store longitude. */
            longitude?: number;
            /** The store latitude. */
            latitude?: number;
            /** The opening time. */
            workTimeStart?: string;
            /** The closing time. */
            workTimeEnd?: string;
            /** The distance from the requested coordinates in kilometers. */
            distance?: number;
            /** The store number. */
            number?: string;
            [key: string]: unknown;
          };
          /** Products in the order. */
          productInfoList?: Array<{
            /** The product ID. */
            productId?: number;
            /** The product SKU code. */
            skuCode?: string;
            /** The product name. */
            name?: string;
            /** The ordered quantity. */
            amount?: number;
            /** The selected attribute summary. */
            additionDesc?: string;
            /** The large product image URL. */
            bigPicUrl?: string | null;
            /** The product thumbnail URL. */
            breviaryPicUrl?: string | null;
            /** The product list price. */
            initPrice?: number;
            /** The estimated unit price. */
            estimatePrice?: number;
            /** The estimated line total. */
            estimateTotalPrice?: number;
            [key: string]: unknown;
          }> | null;
          /** The paid order amount. */
          orderPayAmount?: number;
          /** Delivery information. */
          dispatchInfo?: {
            /** The courier name. */
            dispatcherName?: string;
            /** The courier phone number. */
            dispatcherMobile?: string;
            /** The estimated delivery time. */
            dispatchAboutTime?: string;
            /** The remaining delivery distance. */
            destinationDistance?: number;
            [key: string]: unknown;
          };
          /** Commodity price details. */
          orderCommodityList?: Array<{
            /** The commodity ID. */
            commodityId?: number;
            /** The commodity code. */
            commodityCode?: string;
            /** The commodity name. */
            commodityName?: string;
            /** The payable amount. */
            payableMoney?: number;
            /** The paid amount. */
            payMoney?: number;
            [key: string]: unknown;
          }>;
          /** The order type. */
          orderType?: string;
          /** Additional customer parameters. */
          customerParams?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
        /** Whether the operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get the current details, attributes, SKU, and price for one Luckin Coffee product at a store. */
    "luckin_coffee.queryProductDetailInfo": {
      input: {
        /**
         * The Luckin Coffee store ID returned by `queryShopList`.
         * @exclusiveMinimum 0
         */
        deptId: number;
        /**
         * The Luckin Coffee product ID.
         * @exclusiveMinimum 0
         */
        productId: number;
      };
      output: {
        /** The upstream result code. Zero indicates success. */
        code?: number;
        /** The upstream result message. */
        msg?: string;
        /** A Luckin Coffee product and its current configuration. */
        data?: {
          /** The product ID. */
          productId?: number;
          /** The product name. */
          productName?: string;
          /** The configured product SKU code. */
          skuCode?: string;
          /** The product image URL. */
          pictureUrl?: string;
          /** The product attribute groups. */
          productAttrs?: Array<{
            /** The attribute group ID. */
            attributeId?: number;
            /** The attribute group name. */
            attributeName?: string;
            /** Selectable values in this group. */
            productSubAttrs?: Array<{
              /** The attribute value ID. */
              attributeId?: number;
              /** The attribute value name. */
              attributeName?: string;
              /** Whether this value is selected. */
              selected?: boolean | null;
              /** The price adjustment for this value. */
              price?: number;
              /** Whether this value can be selected. */
              canSelected?: number | null;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** Product tags. */
          tags?: Array<string> | null;
          /** The list price. */
          initialPrice?: number;
          /** The estimated final price. */
          estimatePrice?: number;
          [key: string]: unknown;
        };
        /** Whether the operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Find nearby Luckin Coffee stores using a location and optional store name. */
    "luckin_coffee.queryShopList": {
      input: {
        /** An optional store-name filter. */
        deptName?: string;
        /**
         * Longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        longitude: number;
        /**
         * Latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        latitude: number;
      };
      output: {
        /** The upstream result code. Zero indicates success. */
        code?: number;
        /** The upstream result message. */
        msg?: string;
        /** Matching stores. */
        data?: Array<{
          /** The store ID. */
          deptId?: number;
          /** The store name. */
          deptName?: string;
          /** The store address. */
          address?: string;
          /** Store tags. */
          deptTags?: Array<string>;
          /** The store longitude. */
          longitude?: number;
          /** The store latitude. */
          latitude?: number;
          /** The opening time. */
          workTimeStart?: string;
          /** The closing time. */
          workTimeEnd?: string;
          /** The distance from the requested coordinates in kilometers. */
          distance?: number;
          /** The store number. */
          number?: string;
          [key: string]: unknown;
        }>;
        /** Whether the operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Search and recommend Luckin Coffee products at a specific store from the user's original request. */
    "luckin_coffee.searchProductForMcp": {
      input: {
        /**
         * The Luckin Coffee store ID returned by `queryShopList`.
         * @exclusiveMinimum 0
         */
        deptId: number;
        /**
         * The user's original product request in natural language.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** The upstream result code. Zero indicates success. */
        code?: number;
        /** The upstream result message. */
        msg?: string;
        /** Matching products. */
        data?: Array<{
          /** The product ID. */
          productId?: number;
          /** The product name. */
          productName?: string;
          /** The configured product SKU code. */
          skuCode?: string;
          /** The product image URL. */
          pictureUrl?: string;
          /** The product attribute groups. */
          productAttrs?: Array<{
            /** The attribute group ID. */
            attributeId?: number;
            /** The attribute group name. */
            attributeName?: string;
            /** Selectable values in this group. */
            productSubAttrs?: Array<{
              /** The attribute value ID. */
              attributeId?: number;
              /** The attribute value name. */
              attributeName?: string;
              /** Whether this value is selected. */
              selected?: boolean | null;
              /** The price adjustment for this value. */
              price?: number;
              /** Whether this value can be selected. */
              canSelected?: number | null;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** Product tags. */
          tags?: Array<string> | null;
          /** The list price. */
          initialPrice?: number;
          /** The estimated final price. */
          estimatePrice?: number;
          [key: string]: unknown;
        }>;
        /** Whether the operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Change a selectable attribute on a Luckin Coffee product and return the updated SKU and price. */
    "luckin_coffee.switchProduct": {
      input: {
        /**
         * The Luckin Coffee store ID returned by `queryShopList`.
         * @exclusiveMinimum 0
         */
        deptId: number;
        /**
         * The Luckin Coffee product ID.
         * @exclusiveMinimum 0
         */
        productId: number;
        /**
         * The exact product SKU code.
         * @minLength 1
         */
        skuCode: string;
        /** The attribute operation to apply. */
        attrOperationParam: {
          /**
           * The attribute group ID.
           * @exclusiveMinimum 0
           */
          attributeId: number;
          /** The attribute value operation. */
          subAttr: {
            /**
             * The attribute value ID.
             * @exclusiveMinimum 0
             */
            attributeId: number;
            /** The operation code. Use 3 to select the value. */
            operation: number;
          };
        };
        /**
         * The product quantity.
         * @exclusiveMinimum 0
         */
        amount: number;
      };
      output: {
        /** The upstream result code. Zero indicates success. */
        code?: number;
        /** The upstream result message. */
        msg?: string;
        /** A Luckin Coffee product and its current configuration. */
        data?: {
          /** The product ID. */
          productId?: number;
          /** The product name. */
          productName?: string;
          /** The configured product SKU code. */
          skuCode?: string;
          /** The product image URL. */
          pictureUrl?: string;
          /** The product attribute groups. */
          productAttrs?: Array<{
            /** The attribute group ID. */
            attributeId?: number;
            /** The attribute group name. */
            attributeName?: string;
            /** Selectable values in this group. */
            productSubAttrs?: Array<{
              /** The attribute value ID. */
              attributeId?: number;
              /** The attribute value name. */
              attributeName?: string;
              /** Whether this value is selected. */
              selected?: boolean | null;
              /** The price adjustment for this value. */
              price?: number;
              /** Whether this value can be selected. */
              canSelected?: number | null;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** Product tags. */
          tags?: Array<string> | null;
          /** The list price. */
          initialPrice?: number;
          /** The estimated final price. */
          estimatePrice?: number;
          [key: string]: unknown;
        };
        /** Whether the operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
  }
}
