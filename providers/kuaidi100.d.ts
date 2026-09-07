import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Detect the likely express carriers for a tracking number from its format. */
    "kuaidi100.auto_number": {
      input: {
        /**
         * The express tracking number (快递单号).
         * @minLength 1
         */
        trackingNumber: string;
      };
      output: {
        /** The candidate carriers for the tracking number. */
        data: Array<{
          /** The Kuaidi100 carrier code. */
          comCode: string;
          /** The carrier display name. */
          name: string;
          /** The tracking number length the carrier uses. */
          lengthPre: string;
        }>;
        /** An upstream notice, present when the call consumed the Kuaidi100 free daily quota. */
        tips?: string;
      };
    };
    /** Cancel a pickup order that is no longer needed. */
    "kuaidi100.cancel_order": {
      input: {
        /**
         * The Kuaidi100 pickup order ID.
         * @minLength 1
         */
        orderId: string;
        /**
         * The cancellation reason, up to 30 characters.
         * @minLength 1
         * @maxLength 30
         */
        reason: string;
      };
      output: {
        /** The provider-defined response payload. */
        data?: unknown;
        /** The provider business status code. */
        code?: string;
        /** The provider response message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Create a pay-offline pickup order after obtaining an order_price quote. */
    "kuaidi100.create_order": {
      input: {
        /** The carrier code used for pickup orders. */
        carrier: "jd" | "debangkuaidi" | "shunfeng" | "yuantong" | "zhongtong" | "shunfengkuaiyun" | "sxjdfreight" | "kuayue" | "ems";
        /** A sender or recipient contact. */
        sender: {
          /**
           * The contact name.
           * @minLength 1
           */
          name: string;
          /**
           * The contact mobile number.
           * @minLength 1
           */
          mobile: string;
          /**
           * The full contact address.
           * @minLength 1
           */
          address: string;
        };
        /** A sender or recipient contact. */
        recipient: {
          /**
           * The contact name.
           * @minLength 1
           */
          name: string;
          /**
           * The contact mobile number.
           * @minLength 1
           */
          mobile: string;
          /**
           * The full contact address.
           * @minLength 1
           */
          address: string;
        };
        /**
         * The item name, such as 文件.
         * @minLength 1
         */
        itemName: string;
        /**
         * The parcel weight in kilograms.
         * @exclusiveMinimum 0
         */
        weightKg?: number;
        /** Who pays the shipping fee. */
        payment?: "SHIPPER" | "CONSIGNEE";
        /** The requested pickup day. */
        pickupDay?: "今天" | "明天" | "后天";
        /** The pickup window start time in HH:mm format. */
        pickupStartTime?: string;
        /** The pickup window end time in HH:mm format. */
        pickupEndTime?: string;
        /** An optional order note. */
        remark?: string;
      };
      output: {
        /** The provider-defined response payload. */
        data?: unknown;
        /** The provider business status code. */
        code?: string;
        /** The provider response message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Estimate the shipping price for a carrier, sender and recipient addresses, and parcel weight. */
    "kuaidi100.estimate_price": {
      input: {
        /** The Kuaidi100 carrier code in lowercase: shunfeng (顺丰), jd (京东), debangkuaidi (德邦快递), yuantong (圆通), zhongtong (中通), shentong (申通), yunda (韵达), ems (EMS). */
        carrier: "shunfeng" | "jd" | "debangkuaidi" | "yuantong" | "zhongtong" | "shentong" | "yunda" | "ems";
        /**
         * The sender address, for example 北京市海淀区.
         * @minLength 1
         */
        senderAddress: string;
        /**
         * The recipient address, for example 广东省深圳市南山区.
         * @minLength 1
         */
        recipientAddress: string;
        /**
         * The parcel weight in kilograms.
         * @exclusiveMinimum 0
         */
        weightKg: number;
      };
      output: {
        /** The Kuaidi100 carrier code. */
        kuaidicom: string;
        /** The carrier display name. */
        kuaidiName: string;
        /** The normalized sender address. */
        from: string;
        /** The normalized recipient address. */
        to: string;
        /** The parcel weight in kilograms the estimate used. */
        weight: string;
        /** The per-product price estimates. */
        combos: Array<{
          /** The business or product type. */
          expType: string;
          /** The estimated shipping price in CNY. */
          price: string;
          /** The product name when the carrier distinguishes products. */
          productName: string | null;
        }>;
        /** An upstream notice, present when the call consumed the Kuaidi100 free daily quota. */
        tips?: string;
      };
    };
    /** Estimate the delivery time for a shipment before it is sent, from the carrier, origin, destination, and optional order time and product type. */
    "kuaidi100.estimate_time": {
      input: {
        /** The Kuaidi100 carrier code in lowercase: yuantong (圆通), zhongtong (中通), shunfeng (顺丰), shunfengkuaiyun (顺丰快运), jd (京东), jtexpress (极兔速递), shentong (申通), yunda (韵达), ems (EMS), kuayue (跨越), debangkuaidi (德邦快递), emsguoji (EMS国际件), youzhengguonei (邮政国内), youzhengguoji (国际包裹), zhaijisong (宅急送), zhimakaimen (芝麻开门), lianbangkuaidi (联邦快递), tiandihuayu (天地华宇), annengwuliu (安能快运), jinguangsudikuaijian (京广速递), jiayunmeiwuliu (加运美). */
        carrier: "yuantong" | "zhongtong" | "shunfeng" | "shunfengkuaiyun" | "jd" | "jtexpress" | "shentong" | "yunda" | "ems" | "kuayue" | "debangkuaidi" | "emsguoji" | "youzhengguonei" | "youzhengguoji" | "zhaijisong" | "zhimakaimen" | "lianbangkuaidi" | "tiandihuayu" | "annengwuliu" | "jinguangsudikuaijian" | "jiayunmeiwuliu";
        /**
         * The origin address, for example 广东省深圳市南山区.
         * @minLength 1
         */
        origin: string;
        /**
         * The destination address, for example 北京市海淀区.
         * @minLength 1
         */
        destination: string;
        /**
         * The order placement time in yyyy-MM-dd HH:mm:ss format, for example 2026-09-04 08:08:08. Defaults to the current time when omitted.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        orderTime?: string;
        /**
         * The carrier business or product type, such as 标准快递.
         * @minLength 1
         */
        productType?: string;
      };
      output: {
        /** The normalized origin name. */
        fromName: string;
        /** The normalized destination name. */
        toName: string;
        /** The order time the estimate is based on. */
        orderTime: string;
        /** The estimated arrival time in yyyy-MM-dd HH:mm:ss format. */
        arrivalTime: string;
        /** The estimated total transit duration in days. */
        deliveryExpendTime: string;
        /** The remaining transit time in hours, or null when it does not apply. */
        remainTime: number | null;
        /** The business or product type the estimate used. */
        expType: string | null;
        /** An upstream notice, present when the call consumed the Kuaidi100 free daily quota. */
        tips?: string;
      };
    };
    /** Estimate the remaining delivery time for an in-transit shipment from its existing logistics trajectory, usually the data returned by kuaidi100.query_trace. */
    "kuaidi100.estimate_time_with_logistic": {
      input: {
        /** The Kuaidi100 carrier code in lowercase: yuantong (圆通), zhongtong (中通), shunfeng (顺丰), shunfengkuaiyun (顺丰快运), jd (京东), jtexpress (极兔速递), shentong (申通), yunda (韵达), ems (EMS), kuayue (跨越), debangkuaidi (德邦快递), emsguoji (EMS国际件), youzhengguonei (邮政国内), youzhengguoji (国际包裹), zhaijisong (宅急送), zhimakaimen (芝麻开门), lianbangkuaidi (联邦快递), tiandihuayu (天地华宇), annengwuliu (安能快运), jinguangsudikuaijian (京广速递), jiayunmeiwuliu (加运美). */
        carrier: "yuantong" | "zhongtong" | "shunfeng" | "shunfengkuaiyun" | "jd" | "jtexpress" | "shentong" | "yunda" | "ems" | "kuayue" | "debangkuaidi" | "emsguoji" | "youzhengguonei" | "youzhengguoji" | "zhaijisong" | "zhimakaimen" | "lianbangkuaidi" | "tiandihuayu" | "annengwuliu" | "jinguangsudikuaijian" | "jiayunmeiwuliu";
        /**
         * The origin address, for example 广东省深圳市南山区.
         * @minLength 1
         */
        origin: string;
        /**
         * The destination address, for example 北京市海淀区.
         * @minLength 1
         */
        destination: string;
        /**
         * The order placement time in yyyy-MM-dd HH:mm:ss format, for example 2026-09-04 08:08:08. Defaults to the current time when omitted.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        orderTime: string;
        /**
         * The historical logistics trajectory events, usually the data returned by kuaidi100.query_trace.
         * @minItems 1
         */
        trajectory: Array<{
          /** The event time in yyyy-MM-dd HH:mm:ss format. */
          time: string;
          /** The event description. */
          context: string;
          /** The event status, such as 揽收, 在途, or 已签收. */
          status?: string;
        }>;
      };
      output: {
        /** The normalized origin name. */
        fromName: string;
        /** The normalized destination name. */
        toName: string;
        /** The order time the estimate is based on. */
        orderTime: string;
        /** The estimated arrival time in yyyy-MM-dd HH:mm:ss format. */
        arrivalTime: string;
        /** The estimated total transit duration in days. */
        deliveryExpendTime: string;
        /** The remaining transit time in hours, or null when it does not apply. */
        remainTime: number | null;
        /** The business or product type the estimate used. */
        expType: string | null;
        /** An upstream notice, present when the call consumed the Kuaidi100 free daily quota. */
        tips?: string;
      };
    };
    /** Quote a pickup order before creating it. This uses the pickup-order pricing service, not the general estimate_price calculation. */
    "kuaidi100.order_price": {
      input: {
        /** The carrier code used for pickup orders. */
        carrier?: "jd" | "debangkuaidi" | "shunfeng" | "yuantong" | "zhongtong" | "shunfengkuaiyun" | "sxjdfreight" | "kuayue" | "ems";
        /**
         * The sender address, at least to city level.
         * @minLength 1
         */
        senderAddress: string;
        /**
         * The recipient address, at least to city level.
         * @minLength 1
         */
        recipientAddress: string;
        /**
         * The parcel weight in kilograms.
         * @exclusiveMinimum 0
         */
        weightKg?: number;
        /**
         * The carrier service type, such as 顺丰标快.
         * @minLength 1
         */
        serviceType?: string;
      };
      output: {
        /** The provider-defined response payload. */
        data?: unknown;
        /** The provider business status code. */
        code?: string;
        /** The provider response message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Get a pickup order and optionally include its logistics trajectory. */
    "kuaidi100.query_order": {
      input: {
        /**
         * The Kuaidi100 pickup order ID.
         * @minLength 1
         */
        orderId: string;
        /** Whether to include the logistics trajectory. */
        includeTracking?: boolean;
        /** The phone number needed by carriers such as SF Express or ZTO. */
        phone?: string;
      };
      output: {
        /** The provider-defined response payload. */
        data?: unknown;
        /** The provider business status code. */
        code?: string;
        /** The provider response message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Query the real-time logistics trajectory for an express tracking number. The carrier is detected automatically. */
    "kuaidi100.query_trace": {
      input: {
        /**
         * The express tracking number (快递单号).
         * @minLength 1
         */
        trackingNumber: string;
        /**
         * The sender or recipient phone number; required only for SF Express (顺丰), SF Freight (顺丰快运), and ZTO (中通) shipments.
         * @minLength 1
         */
        phone?: string;
      };
      output: {
        /** The Kuaidi100 carrier code handling the shipment. */
        kuaidiCom: string;
        /** The carrier display name. */
        kuaidiName: string;
        /** The queried tracking number. */
        kuaidiNum: string;
        /** The current shipment state, such as 在途 (in transit) or 已签收 (delivered). */
        state: string;
        /** The shipment route in origin -> destination form. */
        fromTo: string;
        /** The logistics trajectory events. */
        data: Array<{
          /** The event time in yyyy-MM-dd HH:mm:ss format. */
          time: string;
          /** The event status, such as 揽收, 在途, or 已签收. */
          status: string;
          /** The event description. */
          context: string;
        }>;
        /** An upstream notice, present when the call consumed the Kuaidi100 free daily quota. */
        tips?: string;
      };
    };
  }
}
