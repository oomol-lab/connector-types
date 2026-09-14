import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check whether an SF Express pickup at an address can be served at a planned time, optionally returning the service window. */
    "sf_express.check_pickup_time": {
      input: {
        /**
         * The pickup or delivery street address.
         * @minLength 1
         */
        address: string;
        /** sender for a pickup (寄件) address, recipient for a delivery (收件) address. */
        address_type: "sender" | "recipient";
        /**
         * The shipment or pickup time in YYYY-MM-DD HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        send_time: string;
        /**
         * The SF city code, for example 755 for Shenzhen; when omitted, province, city and county are all required.
         * @minLength 1
         */
        city_code?: string;
        /**
         * The province name; used with city and county when city_code is omitted.
         * @minLength 1
         */
        province?: string;
        /**
         * The city name; used with province and county when city_code is omitted.
         * @minLength 1
         */
        city?: string;
        /**
         * The district or county name; used with province and city when city_code is omitted.
         * @minLength 1
         */
        county?: string;
        /**
         * The source system code.
         * @minLength 1
         */
        sys_code?: string;
        /** Whether to also return the service window (startTm/endTm). */
        include_time_window?: boolean;
      };
      output: {
        /** Whether the address can be served at the requested time. */
        status: boolean;
        /** The service window start in HHmm format, returned when include_time_window is set. */
        startTm?: string;
        /** The service window end in HHmm format, returned when include_time_window is set. */
        endTm?: string;
        /** The source system, when returned. */
        system?: string;
        /** The reason the time cannot be served, when returned. */
        exceptionReason?: string;
      };
    };
    /** Cancel an SF Cold Chain transport order that has not been accepted yet. */
    "sf_express.coldchain_cancel_order": {
      input: {
        /**
         * The client order number (ERP单号) to cancel.
         * @minLength 1
         */
        erp_order: string;
        /**
         * The SF order number to cancel.
         * @minLength 1
         */
        sf_order_no?: string;
        /** The order source code (订单来源). */
        source_code?: string;
      };
      output: Record<string, never>;
    };
    /** Check whether SF Cold Chain can serve a given origin-destination flow with a product, returning the serving points' business hours and the available temperature levels. */
    "sf_express.coldchain_check_transport_flow": {
      input: {
        /**
         * The cold-chain product code, e.g. SE0030.
         * @minLength 1
         */
        product_code: string;
        /**
         * The origin province name, e.g. 广东省.
         * @minLength 1
         */
        sender_province_name: string;
        /**
         * The origin city name, e.g. 深圳市.
         * @minLength 1
         */
        sender_city_name: string;
        /**
         * The origin district or county name, e.g. 南山区; for cities without districts pass the town name.
         * @minLength 1
         */
        sender_county_name: string;
        /**
         * The origin city code, e.g. 755.
         * @minLength 1
         */
        sender_city_area_number: string;
        /**
         * The origin detailed address.
         * @minLength 1
         */
        sender_address: string;
        /**
         * The destination province name, e.g. 北京.
         * @minLength 1
         */
        receiver_province_name: string;
        /**
         * The destination city name, e.g. 北京市.
         * @minLength 1
         */
        receiver_city_name: string;
        /**
         * The destination district or county name, e.g. 顺义区.
         * @minLength 1
         */
        receiver_county_name: string;
        /**
         * The destination city code, e.g. 010.
         * @minLength 1
         */
        receiver_city_area_number: string;
        /**
         * The destination detailed address.
         * @minLength 1
         */
        receiver_address: string;
      };
      output: {
        /** The service info for one side of the flow. */
        senderInfo: {
          /** The service type, e.g. DISPATCH or ONLY_PICK_UP. */
          serviceType: string;
          /** The serving point info. */
          netpoint: {
            /** The point name. */
            mdneUnitName: string;
            /** The point address. */
            mdneDetailedAddress: string;
            /** The contact phone. */
            mdneContactPhone: string;
            /** The business opening time. */
            mdneOuterBusinessStarttime: string;
            /** The business closing time. */
            mdneOuterBusinessEndtime: string;
          };
        };
        /** The service info for one side of the flow. */
        receiverInfo: {
          /** The service type, e.g. DISPATCH or ONLY_PICK_UP. */
          serviceType: string;
          /** The serving point info. */
          netpoint: {
            /** The point name. */
            mdneUnitName: string;
            /** The point address. */
            mdneDetailedAddress: string;
            /** The contact phone. */
            mdneContactPhone: string;
            /** The business opening time. */
            mdneOuterBusinessStarttime: string;
            /** The business closing time. */
            mdneOuterBusinessEndtime: string;
          };
        };
        /** The temperature levels available for this flow. */
        temperatureLevel: Array<{
          /** The temperature level code. */
          ebcdCode: string;
          /** The temperature level name, e.g. 0至10. */
          ebcdNameCn: string;
          /** The temperature type, e.g. 冷藏. */
          ebcdTemperatureType: string;
          /** The sequence number. */
          ebcdSquenceNo: string;
          /** The product code this level applies to. */
          ebcdProductCode: string;
        }>;
      };
    };
    /** Create an SF Cold Chain transport order (陆运运输). The monthly account is required for monthly-settlement payment (PR_ACCOUNT). */
    "sf_express.coldchain_create_order": {
      input: {
        /**
         * The client order number (ERP单号); must not repeat — a cancelled order needs a new one.
         * @minLength 1
         */
        erp_order: string;
        /** The cold-chain product code: SE0030 = 冷运大件到港, SE003001 = 冷运大件标快, SE0031 = 冷运整车, SE0059 = 冷运到店, SE003003 = 冷运专线. */
        product_code: "SE0030" | "SE003001" | "SE0031" | "SE0059" | "SE003003";
        /** The payment type: AR = 到付 (freight collect), PR_CASH = 寄付现结 (sender pays cash), PR_ACCOUNT = 寄付月结 (monthly settlement, requires monthly_account). */
        payment_type_code: "AR" | "PR_CASH" | "PR_ACCOUNT";
        /**
         * The SF monthly settlement card number (月结账号); required when payment_type_code is PR_ACCOUNT, omitted otherwise.
         * @minLength 1
         */
        monthly_account?: string;
        /**
         * The order time in yyyy-MM-dd HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        order_time: string;
        /**
         * The cold-chain temperature level code from 附录4.2, for example 2 = 0至10 (冷藏), 5 = 18至22, 9 = 0至4, 10 = -18以下, 30 = 冷冻, 31 = 常温 (ambient).
         * @minLength 1
         */
        temperature_level_code: string;
        /** The order remark. */
        remark?: string;
        /** The shipper company name. */
        shipper_name?: string;
        /**
         * The shipper contact name.
         * @minLength 1
         */
        shipper_contact_name: string;
        /**
         * The shipper contact mobile phone.
         * @minLength 1
         */
        shipper_contact_tel: string;
        /**
         * The shipper province name, e.g. 广东省.
         * @minLength 1
         */
        shipper_province_name: string;
        /**
         * The shipper city name, e.g. 深圳市.
         * @minLength 1
         */
        shipper_city_name: string;
        /**
         * The shipper district or county name, e.g. 南山区; for cities without districts pass the town name.
         * @minLength 1
         */
        shipper_district_name: string;
        /**
         * The shipper location name without province/city/district.
         * @minLength 1
         */
        shipper_location_name: string;
        /**
         * The pickup window start in yyyy-MM-dd HH:mm:ss format; used with the 提货服务 value-added service.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        require_pickup_time_fm?: string;
        /**
         * The pickup window end in yyyy-MM-dd HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        require_pickup_time_to?: string;
        /** The consignee company name. */
        consignee_name?: string;
        /** The client code (客户代码). */
        focus_code?: string;
        /**
         * The consignee contact name.
         * @minLength 1
         */
        consignee_contact_name: string;
        /**
         * The consignee contact phone.
         * @minLength 1
         */
        consignee_contact_tel: string;
        /**
         * The consignee province name, e.g. 广东省.
         * @minLength 1
         */
        consignee_province_name: string;
        /**
         * The consignee city name, e.g. 深圳市.
         * @minLength 1
         */
        consignee_city_name: string;
        /**
         * The consignee district or county name, e.g. 南山区; for cities without districts pass the town name.
         * @minLength 1
         */
        consignee_district_name: string;
        /**
         * The consignee location name without province/city/district.
         * @minLength 1
         */
        consignee_location_name: string;
        /**
         * The delivery window start in yyyy-MM-dd HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        require_delivery_time_fm?: string;
        /**
         * The delivery window end in yyyy-MM-dd HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        require_delivery_time_to?: string;
        /** The total weight in kilograms. */
        total_weight?: number;
        /** The total volume in cubic meters. */
        total_volume?: number;
        /** The vehicle type (required for 专车 orders), e.g. 4.2米-食品-冷运-冷藏; see the official vehicle list. */
        car_type?: string;
        /**
         * The fixed price (一口价) for a chartered vehicle order.
         * @minimum 0
         */
        freight_fee?: number;
        /** The order source code (订单来源). */
        source_code?: string;
        /**
         * The goods lines.
         * @minItems 1
         */
        order_items: Array<{
          /**
           * The goods category, from the official category list (e.g. 海鲜水产, 畜禽肉, 乳制品) or a custom category.
           * @minLength 1
           */
          sku_code: string;
          /**
           * The goods name.
           * @minLength 1
           */
          sku_name: string;
          /** The number of pieces or boxes. */
          quantity: number;
          /** The gross weight in kilograms. */
          gross_weight: number;
          /** The volume in cubic meters; may be provided without dimensions. */
          volume: number;
          /** The length in centimeters. */
          length?: number;
          /** The width in centimeters. */
          width?: number;
          /** The height in centimeters. */
          height?: number;
          /** The net weight in kilograms (upstream field name netHeight). */
          net_height?: number;
          /**
           * Whether the goods are imported: 1 = not imported, 2 = imported.
           * @minimum 1
           * @maximum 2
           */
          imported_flag?: number;
          /** The supplier name. */
          carrier_name?: string;
          /** The SKU code. */
          sku?: string;
          /** The unit of measure, e.g. kg or 个. */
          sku_unit?: string;
          /** The unit price in CNY. */
          price?: number;
        }>;
        /** The value-added services. */
        order_services?: Array<{
          /**
           * The value-added service code, e.g. VA0003 签单返还, VA0021 保价, VA0058 提货服务, VA0059 配送服务, VA0035 动检证, VA0063 拍照回传, VA0001 特殊入仓.
           * @minLength 1
           */
          service_code: string;
          /** The service content; carries the amount for priced services such as 保价 or 代收货款. */
          service_value?: string;
          /** Reserved extension field 1 (service-specific, see the official appendix). */
          user_def1?: string;
          /** Reserved extension field 2. */
          user_def2?: string;
          /** Reserved extension field 3. */
          user_def3?: string;
          /** Reserved extension field 4. */
          user_def4?: string;
          /** Reserved extension field 5. */
          user_def5?: string;
          /** Reserved extension field 6. */
          user_def6?: string;
          /** Reserved extension field 7. */
          user_def7?: string;
          /** Reserved extension field 8. */
          user_def8?: string;
        }>;
      };
      output: {
        /** The SF order number (TP-prefixed in production). */
        sfOrderNo: string;
        /** The client order number, echoed back. */
        erpOrder: string;
      };
    };
    /** Estimate the SF Cold Chain delivery time for a flow and one or more products, including pickup and delivery transit times. */
    "sf_express.coldchain_estimate_delivery_time": {
      input: {
        /**
         * The consign time in yyyy-MM-dd HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        consign_time: string;
        /**
         * The destination city code, e.g. 010.
         * @minLength 1
         */
        receiver_city_area_number: string;
        /**
         * The origin city code, e.g. 755.
         * @minLength 1
         */
        sender_city_area_number: string;
        /**
         * The product code(s); multiple codes comma-separated.
         * @minLength 1
         */
        product_code: string;
        /** Whether the sender drops off the goods (自寄件) instead of SF picking up. */
        self_send: boolean;
        /** Whether the recipient picks up the goods (自取件) instead of SF delivering. */
        oneself_pickup: boolean;
      };
      output: {
        /** One estimate per requested product; a per-product failure (e.g. 无有效的时效配置) arrives as a result, not an error. */
        results: Array<{
          /** The product code. */
          productCode: string;
          /** The per-product status code: 200 for success. */
          code?: string;
          /** The per-product status message. */
          message?: string;
          /** The delivery time details. */
          effectiveInfo?: {
            /** The estimated arrival time in yyyy-MM-dd HH:mm:ss format. */
            arriveTime: string;
            /** The delay remark. */
            delayRemark: string;
            /** The schedule description, e.g. 每日发运. */
            planDescription: string;
            /** The extra delay days. */
            delayDay: string;
            /** The promised transit days. */
            effectiveDay: string;
          } | null;
        }>;
      };
    };
    /** Estimate the SF Cold Chain transport fee for a flow and one or more products, returning the per-product fee breakdown. */
    "sf_express.coldchain_estimate_transport_fee": {
      input: {
        /**
         * The client order number (ERP单号); must be unique per call.
         * @minLength 1
         */
        erp_order: string;
        /**
         * The product code(s), e.g. SE0022; multiple codes comma-separated.
         * @minLength 1
         */
        product_code: string;
        /**
         * The order time in yyyy-MM-dd HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        order_time: string;
        /**
         * The shipper province name, e.g. 广东省.
         * @minLength 1
         */
        shipper_province_name: string;
        /**
         * The shipper city name, e.g. 深圳市.
         * @minLength 1
         */
        shipper_city_name: string;
        /**
         * The shipper district or county name, e.g. 南山区; for cities without districts pass the town name.
         * @minLength 1
         */
        shipper_district_name: string;
        /**
         * The shipper location name without province/city/district.
         * @minLength 1
         */
        shipper_location_name: string;
        /**
         * The consignee province name, e.g. 广东省.
         * @minLength 1
         */
        consignee_province_name: string;
        /**
         * The consignee city name, e.g. 深圳市.
         * @minLength 1
         */
        consignee_city_name: string;
        /**
         * The consignee district or county name, e.g. 南山区; for cities without districts pass the town name.
         * @minLength 1
         */
        consignee_district_name: string;
        /**
         * The consignee location name without province/city/district.
         * @minLength 1
         */
        consignee_location_name: string;
        /** The goods lines; weight and volume are required per line. */
        order_items?: Array<{
          /**
           * The goods category, from the official category list (e.g. 海鲜水产, 畜禽肉, 乳制品) or a custom category.
           * @minLength 1
           */
          sku_code?: string;
          /**
           * The goods name.
           * @minLength 1
           */
          sku_name?: string;
          /** The number of pieces or boxes. */
          quantity?: number;
          /** The gross weight in kilograms. */
          gross_weight: number;
          /** The volume in cubic meters; may be provided without dimensions. */
          volume: number;
          /** The length in centimeters. */
          length?: number;
          /** The width in centimeters. */
          width?: number;
          /** The height in centimeters. */
          height?: number;
          /** The net weight in kilograms (upstream field name netHeight). */
          net_height?: number;
          /**
           * Whether the goods are imported: 1 = not imported, 2 = imported.
           * @minimum 1
           * @maximum 2
           */
          imported_flag?: number;
          /** The supplier name. */
          carrier_name?: string;
          /** The SKU code. */
          sku?: string;
          /** The unit of measure, e.g. kg or 个. */
          sku_unit?: string;
          /** The unit price in CNY. */
          price?: number;
        }>;
        /** The value-added services to price in. */
        order_services?: Array<{
          /**
           * The value-added service code, e.g. VA0003 签单返还, VA0021 保价, VA0058 提货服务, VA0059 配送服务, VA0035 动检证, VA0063 拍照回传, VA0001 特殊入仓.
           * @minLength 1
           */
          service_code: string;
          /** The service content; carries the amount for priced services such as 保价 or 代收货款. */
          service_value?: string;
          /** Reserved extension field 1 (service-specific, see the official appendix). */
          user_def1?: string;
          /** Reserved extension field 2. */
          user_def2?: string;
          /** Reserved extension field 3. */
          user_def3?: string;
          /** Reserved extension field 4. */
          user_def4?: string;
          /** Reserved extension field 5. */
          user_def5?: string;
          /** Reserved extension field 6. */
          user_def6?: string;
          /** Reserved extension field 7. */
          user_def7?: string;
          /** Reserved extension field 8. */
          user_def8?: string;
        }>;
      };
      output: {
        /** One entry per requested product code. */
        results: Record<string, {
            /** The per-product status code: 200 for success. */
            code: string;
            /** The per-product status message. */
            message: string;
            /** The fee breakdown. */
            fees: Array<{
              /** The fee name, e.g. 保费. */
              feeName: string;
              /** The value-added service code this fee belongs to. */
              serviceCode: string;
              /** The fee amount in CNY; null when SF does not price the line. */
              totalAmount: number | null;
            }>;
          }>;
      };
    };
    /** Query the full details of an SF Cold Chain order, including parties, weights, goods lines, value-added services, and the sign-back receipt. */
    "sf_express.coldchain_query_order_info": {
      input: {
        /**
         * The client order number (ERP单号).
         * @minLength 1
         */
        erp_order: string;
        /** The order source code (订单来源). */
        source_code?: string;
      };
      output: {
        /** The order record: orderNo, erpNo, waybillNo, orderStatus, productCode, paymentTypeCode, addresses, weights, temperature level, driver/vehicle, and more, per the official field list. */
        order: Record<string, unknown>;
        /** The child waybills. */
        childWaybillList: Array<Record<string, unknown>>;
        /** The goods lines. */
        orderGoodsList: Array<Record<string, unknown>>;
        /** The value-added services on the order. */
        orderServiceList: Array<Record<string, unknown>>;
        /** The sign-back receipt record, or null when none exists. */
        orderReturn: Record<string, unknown> | null;
      };
    };
    /** Query SF Cold Chain route events by waybill number, SF order number, or client order number, combined with the order source code. */
    "sf_express.coldchain_query_route": {
      input: Record<string, unknown>;
      output: {
        /** The route events. */
        routes: Array<{
          /** The event serial number. */
          routeId?: string;
          /** The scan time in yyyy-MM-dd HH:mm:ss format. */
          barScanTm: string;
          /** The public name of the operating point. */
          outsideName: string;
          /** The city where the event happened. */
          distName: string;
          /** The operation code. */
          opCode: string;
          /** The event description. */
          owsRemark?: string;
          /** The waybill number. */
          waybillNo: string;
          /** The SF order number. */
          sfOrderNo: string;
          /** The client order number. */
          erpOrder: string;
        }>;
      };
    };
    /** Query the waybill numbers (master waybill, sign-back receipt number, child waybills) generated for an SF Cold Chain order. */
    "sf_express.coldchain_query_waybill_no": {
      input: {
        /**
         * The client order number (ERP单号).
         * @minLength 1
         */
        erp_order: string;
        /**
         * The SF order number.
         * @minLength 1
         */
        sf_order_no?: string;
        /** The order source code (订单来源). */
        source_code?: string;
      };
      output: {
        /** The client order number. */
        erpOrder?: string;
        /** The SF order number. */
        sfOrderNo?: string;
        /** The master waybill number. */
        waybillNo?: string;
        /** The sign-back receipt waybill number. */
        receiptWaybillNo?: string;
        /** The child waybill numbers. */
        childWaybillNos?: Array<string>;
      };
    };
    /** Create a real SF Express shipment order (下订单) and allocate waybill numbers; charges may apply. Mainland China and Hong Kong/Macao/Taiwan lanes are supported. The response includes the screening result (filterResult) and the allocated waybill numbers. Use pre_order to validate an order without creating it. */
    "sf_express.create_order": {
      input: {
        /**
         * The unique client order number; reusing one returns the waybill first allocated to it.
         * @minLength 1
         * @maxLength 64
         */
        order_id: string;
        /** Whether to return the return-business QR code URL; SF omits it by default. */
        is_return_qr_code?: boolean;
        /** Whether to return the route label (路由标签); SF returns it by default. */
        is_return_route_label?: boolean;
        /** The SF product type (快件产品类别) code from the SF product table; only products agreed with your SF sales manager are usable. Defaults to 1. Mutually exclusive with scene_plan_code. */
        express_type_id?: number;
        /**
         * The component service code (组件服务编码) for specific business scenarios, agreed with your SF account manager in advance. Mutually exclusive with express_type_id.
         * @minLength 1
         */
        scene_plan_code?: string;
        /** The sender (寄件方) contact and address. At least one of tel or mobile is required. */
        sender: {
          /**
           * The company name.
           * @minLength 1
           */
          company?: string;
          /**
           * The contact person name.
           * @minLength 1
           */
          contact: string;
          /**
           * The landline phone number.
           * @minLength 1
           */
          tel?: string;
          /**
           * The mobile phone number.
           * @minLength 1
           */
          mobile?: string;
          /**
           * The country or region code, for example CN for mainland China or 852 for Hong Kong. Defaults to CN.
           * @minLength 1
           */
          country?: string;
          /**
           * The standard province name, for example 广东省; it drives route code recognition.
           * @minLength 1
           */
          province?: string;
          /**
           * The standard city name, for example 深圳市; it drives route code recognition.
           * @minLength 1
           */
          city?: string;
          /**
           * The standard district or county name, for example 南山区.
           * @minLength 1
           */
          county?: string;
          /**
           * The detailed street address. When province and city are omitted, the address must contain them.
           * @minLength 1
           */
          address: string;
          /**
           * The postal code; required for cross-border shipments.
           * @minLength 1
           */
          post_code?: string;
          /**
           * The contact email address.
           * @format email
           */
          email?: string;
          /**
           * The contact's tax number.
           * @minLength 1
           */
          tax_no?: string;
          /**
           * The contact attribute: 01 = 个人件, 02 = 公司件 (required for cross-border).
           * @minLength 1
           */
          contact_remark?: string;
          /**
           * The ID document type (required for cross-border shipments).
           * @minLength 1
           */
          cert_type?: string;
          /**
           * The ID document number (required for cross-border shipments).
           * @minLength 1
           */
          cert_no?: string;
        };
        /** The recipient (到件方) contact and address. At least one of tel or mobile is required. */
        recipient: {
          /**
           * The company name.
           * @minLength 1
           */
          company?: string;
          /**
           * The contact person name.
           * @minLength 1
           */
          contact: string;
          /**
           * The landline phone number.
           * @minLength 1
           */
          tel?: string;
          /**
           * The mobile phone number.
           * @minLength 1
           */
          mobile?: string;
          /**
           * The country or region code, for example CN for mainland China or 852 for Hong Kong. Defaults to CN.
           * @minLength 1
           */
          country?: string;
          /**
           * The standard province name, for example 广东省; it drives route code recognition.
           * @minLength 1
           */
          province?: string;
          /**
           * The standard city name, for example 深圳市; it drives route code recognition.
           * @minLength 1
           */
          city?: string;
          /**
           * The standard district or county name, for example 南山区.
           * @minLength 1
           */
          county?: string;
          /**
           * The detailed street address. When province and city are omitted, the address must contain them.
           * @minLength 1
           */
          address: string;
          /**
           * The postal code; required for cross-border shipments.
           * @minLength 1
           */
          post_code?: string;
          /**
           * The contact email address.
           * @format email
           */
          email?: string;
          /**
           * The contact's tax number.
           * @minLength 1
           */
          tax_no?: string;
          /**
           * The contact attribute: 01 = 个人件, 02 = 公司件 (required for cross-border).
           * @minLength 1
           */
          contact_remark?: string;
          /**
           * The ID document type (required for cross-border shipments).
           * @minLength 1
           */
          cert_type?: string;
          /**
           * The ID document number (required for cross-border shipments).
           * @minLength 1
           */
          cert_no?: string;
        };
        /**
         * The cargo items (托寄物).
         * @minItems 1
         */
        cargo_details: Array<{
          /**
           * The cargo name, for example 文件, 电子产品, or 衣服.
           * @minLength 1
           */
          name: string;
          /** The cargo quantity. */
          count?: number;
          /**
           * The cargo unit, for example 个, 台, or 本.
           * @minLength 1
           */
          unit?: string;
          /** The unit weight in kilograms. */
          weight?: number;
          /** The cargo unit price. */
          amount?: number;
          /**
           * The currency of the unit price, for example CNY.
           * @minLength 1
           */
          currency?: string;
          /**
           * The origin country code, for example CHN.
           * @minLength 1
           */
          source_area?: string;
          /**
           * The customs HS code.
           * @minLength 1
           */
          hs_code?: string;
          /**
           * The merchant's product code.
           * @minLength 1
           */
          goods_code?: string;
          /**
           * The cargo brand.
           * @minLength 1
           */
          brand?: string;
          /**
           * The cargo specifications or model.
           * @minLength 1
           */
          specifications?: string;
          /**
           * The manufacturer.
           * @minLength 1
           */
          manufacturer?: string;
          /** The gross weight of the cargo in kilograms. */
          shipment_weight?: number;
          /** The cargo length in centimeters. */
          length?: number;
          /** The cargo width in centimeters. */
          width?: number;
          /** The cargo height in centimeters. */
          height?: number;
          /** The cargo volume in cubic centimeters. */
          volume?: number;
          /** The declared value of the cargo. */
          cargo_declared_value?: number;
          /**
           * The currency of the declared value.
           * @minLength 1
           */
          declared_value_currency?: string;
        }>;
        /**
         * The cargo type description, for example 文件 or 电子产品.
         * @minLength 1
         * @maxLength 20
         */
        cargo_desc?: string;
        /**
         * The SF monthly settlement card (月结卡号). Required for monthly-settlement payment; must not be sent for cash payment. Production cards are bound in the SF console under 应用详情->绑定月结.
         * @minLength 1
         */
        monthly_card?: string;
        /**
         * The payment method: 1 = 寄方付, 2 = 收方付, 3 = 第三方付. Defaults to 1.
         * @minimum 1
         * @maximum 3
         */
        pay_method?: number;
        /**
         * The number of packages; values above 1 produce one mother waybill plus child waybills, and then total_weight is required.
         * @maximum 307
         * @exclusiveMinimum 0
         */
        parcel_qty?: number;
        /**
         * The total shipment weight in kilograms; required for multi-package (子母件) shipments.
         * @exclusiveMinimum 0
         */
        total_weight?: number;
        /** The total shipment length in centimeters. */
        total_length?: number;
        /** The total shipment width in centimeters. */
        total_width?: number;
        /** The total shipment height in centimeters. */
        total_height?: number;
        /** The total shipment volume in cubic centimeters, used for volumetric weight. */
        total_volume?: number;
        /** The total net weight of the goods in kilograms. */
        total_net_weight?: number;
        /**
         * The start of the requested pickup window (要求上门取件开始时间) in YYYY-MM-DD HH:mm:ss format; defaults to the order time.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        send_start_time?: string;
        /** Whether SF should dispatch a courier for pickup at the appointment time (1) or the shipment is dropped at an agreed site (0, default). */
        is_docall?: boolean;
        /** Whether to return the sign-back (签回单) waybill number. */
        is_sign_back?: boolean;
        /**
         * Your own reference number, for example the original order number.
         * @minLength 1
         */
        cust_reference_no?: string;
        /**
         * The source platform code, for example tmall, pinduoduo, or jd.
         * @minLength 1
         */
        order_source?: string;
        /**
         * The order remark.
         * @minLength 1
         * @maxLength 100
         */
        remark?: string;
        /** The temperature range type, required when express_type_id is 12 (医药温控件): 1 = 冷藏, 3 = 冷冻. */
        temperature_range?: number;
        /** The value-added services (增值服务) to apply, from the SF value-added service product table. */
        service_list?: Array<{
          /**
           * The value-added service name, for example COD or INSURE.
           * @minLength 1
           */
          name: string;
          /**
           * The service value, for example the insured amount for INSURE.
           * @minLength 1
           */
          value?: string;
          /**
           * Service extension attribute 1.
           * @minLength 1
           */
          value1?: string;
          /**
           * Service extension attribute 2.
           * @minLength 1
           */
          value2?: string;
          /**
           * Service extension attribute 3.
           * @minLength 1
           */
          value3?: string;
          /**
           * Service extension attribute 4.
           * @minLength 1
           */
          value4?: string;
        }>;
        /** The customs declaration info; declared_value is required for cross-border shipments. */
        customs_info?: {
          /** The total declared value of the shipment, including sub-packages. */
          declared_value?: number;
          /**
           * The declared value currency, for example CNY or USD.
           * @minLength 1
           */
          declared_value_currency?: string;
          /**
           * The customs declaration batch.
           * @minLength 1
           */
          customs_batchs?: string;
          /** The tax payment method: 1 = 寄付, 2 = 到付, 3 = 第三方付. */
          tax_pay_method?: number;
          /**
           * The tax settlement account.
           * @minLength 1
           */
          tax_settle_accounts?: string;
          /**
           * The payment tool.
           * @minLength 1
           */
          payment_tool?: string;
          /**
           * The payment number.
           * @minLength 1
           */
          payment_number?: string;
          /**
           * The name of the person placing the order.
           * @minLength 1
           */
          order_name?: string;
          /**
           * The tax amount.
           * @minLength 1
           */
          tax?: string;
        };
        /** Existing waybill numbers and per-package dimensions; required when confirming an order, and used for bringing your own waybill numbers when creating one. */
        waybill_no_info_list?: Array<{
          /** The waybill number type: 1 = mother (母单), 2 = child (子单), 3 = sign-back (签回单). */
          waybill_type: number;
          /**
           * The SF waybill number.
           * @minLength 1
           */
          waybill_no?: string;
          /**
           * The box number; unique per monthly card.
           * @minLength 1
           */
          box_no?: string;
          /** The package length in centimeters. */
          length?: number;
          /** The package width in centimeters. */
          width?: number;
          /** The package height in centimeters. */
          height?: number;
          /** The package weight in kilograms. */
          weight?: number;
        }>;
        /** Extended attributes as attrName/attrVal pairs, for example pickupAppointEndTime for the pickup deadline. */
        extra_info_list?: Array<{
          /**
           * The extended field name (attrName).
           * @minLength 1
           */
          attr_name: string;
          /** The extended field value (attrVal). */
          attr_val?: string;
        }>;
        /**
         * The special delivery type code, for example 2 = 极效前置单(当日达).
         * @minLength 1
         */
        special_delivery_type_code?: string;
        /**
         * The special delivery value, for example 1:09296231 for ID verification.
         * @minLength 1
         */
        special_delivery_value?: string;
        /**
         * The response language.
         * @default "zh-CN"
         */
        language?: "zh-CN" | "zh-TW" | "zh-HK" | "zh-MO" | "en";
      };
      output: {
        /** The client order number echoed back. */
        orderId: string;
        /** The origin area code, usable for waybill label printing. */
        originCode?: string;
        /** The destination area code, usable for waybill label printing. */
        destCode?: string;
        /** The screening (筛单) result: 1 = 人工确认, 2 = 可收派, 3 = 不可以收派, 4 = 无法确定. */
        filterResult: number | null;
        /** The reason when the shipment cannot be served (filterResult 3). */
        remark?: string;
        /** The QR code URL for return operations. */
        url: string | null;
        /** The URL for third-party freight payment. */
        paymentLink: string | null;
        /** The allocated SF waybill numbers. */
        waybillNoInfoList: Array<{
          /** The waybill number type: 1 = mother (母单), 2 = child (子单), 3 = sign-back (签回单). */
          waybillType?: number;
          /** The SF waybill number. */
          waybillNo: string;
          /** The box number. */
          boxNo?: string;
        }>;
        /** The route label data used for waybill printing, returned as-is. */
        routeLabelInfo: Array<Record<string, unknown>>;
        /** The component service code used for the order. */
        scenePlanCode?: string;
      };
    };
    /** Delete a merchant custom print template (ISV 删除自定义模板); SF caps the number of templates per account, so delete unused ones before adding new. */
    "sf_express.delete_print_template": {
      input: {
        /**
         * The merchant account the ISV registered for this seller (isv商家账号).
         * @minLength 1
         */
        seller_user_id: string;
        /**
         * The custom template code to delete.
         * @minLength 1
         */
        custom_template_code: string;
      };
      output: {
        /** Whether the template was deleted. */
        deleted: boolean;
        /** The deleted custom template code. */
        customTemplateCode: string;
      };
    };
    /** Query the promised delivery time for an SF Express waybill, verified by the sender or recipient phone number or by the monthly card that paid the waybill. */
    "sf_express.estimate_delivery_time": {
      input: {
        /**
         * The SF Express waybill number (顺丰运单号).
         * @minLength 1
         */
        waybill_no: string;
        /** The verification type: phone for a sender or recipient phone number (default), or monthly_card for the monthly settlement card that paid the waybill. */
        check_type?: "phone" | "monthly_card";
        /**
         * The verification values matching check_type: full phone numbers or monthly card numbers.
         * @minItems 1
         */
        check_nos: Array<string>;
      };
      output: {
        /** The queried waybill number. */
        searchNo: string;
        /** The promised delivery time in YYYY-MM-DD HH:mm:ss format. */
        promiseTm: string;
      };
    };
    /** Check whether origin and destination addresses are within SF Express pickup and delivery coverage (筛单), before placing an order. */
    "sf_express.filter_order": {
      input: {
        /**
         * One entry per order to check.
         * @minItems 1
         */
        orders: Array<{
          /**
           * The client order number, echoed back in the result.
           * @minLength 1
           */
          order_id?: string;
          /** auto: the system judges from its address library (default); manual: unresolvable addresses are queued for manual review. */
          filter_type?: "auto" | "manual";
          /**
           * The SF monthly settlement card (月结卡号).
           * @minLength 1
           */
          monthly_card?: string;
          /** The sender (寄件方) address used for the coverage check. */
          sender: {
            /**
             * The contact phone number.
             * @minLength 1
             */
            tel?: string;
            /**
             * The country or region code, for example CN; required for cross-border shipments.
             * @minLength 1
             */
            country?: string;
            /**
             * The province name, for example 广东省.
             * @minLength 1
             */
            province?: string;
            /**
             * The city name, for example 深圳市.
             * @minLength 1
             */
            city?: string;
            /**
             * The district or county name, for example 南山区.
             * @minLength 1
             */
            county?: string;
            /**
             * The detailed street address.
             * @minLength 1
             */
            address?: string;
            /**
             * The postal code; required for cross-border shipments.
             * @minLength 1
             */
            post_code?: string;
          };
          /** The recipient (到件方) address used for the coverage check. */
          recipient: {
            /**
             * The contact phone number.
             * @minLength 1
             */
            tel?: string;
            /**
             * The country or region code, for example CN; required for cross-border shipments.
             * @minLength 1
             */
            country?: string;
            /**
             * The province name, for example 广东省.
             * @minLength 1
             */
            province?: string;
            /**
             * The city name, for example 深圳市.
             * @minLength 1
             */
            city?: string;
            /**
             * The district or county name, for example 南山区.
             * @minLength 1
             */
            county?: string;
            /**
             * The detailed street address.
             * @minLength 1
             */
            address?: string;
            /**
             * The postal code; required for cross-border shipments.
             * @minLength 1
             */
            post_code?: string;
          };
        }>;
      };
      output: {
        /** One result per checked order. */
        results: Array<{
          /** The client order number, echoed back. */
          orderId?: string;
          /** The coverage verdict: 1 = manual review, 2 = deliverable (可收派), 3 = not deliverable, 4 = address unrecognizable. */
          filterResult: number;
          /** The origin area code; present when deliverable. */
          originCode?: string;
          /** The destination area code; present when deliverable. */
          destCode?: string;
          /** The rejection reason code when filterResult is 3: 1 recipient out of range, 2 sender out of range, 3 other. */
          remark?: string;
        }>;
      };
    };
    /** Append an install service to an existing SF waybill. The append is only confirmed once the waybill is picked up; the final result arrives via the install status push. This endpoint requires SF sales onboarding (联系客户经理). */
    "sf_express.freight_append_install_service": {
      input: {
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /** The service mode: 1 = 仅安装 (install only), 2 = 提货+安装 (pickup and install). */
        install_type: "1" | "2";
        /** The source order number. */
        outer_order_id?: string;
        /** The source shop name. */
        shop_name?: string;
        /** The remark. */
        remark?: string;
        /**
         * The install cargo entries.
         * @minItems 1
         */
        cargo_list: Array<{
          /**
           * The install quantity.
           * @minimum 1
           */
          count: number;
          /** The standard category name. */
          stand_service_name?: string;
          /** The standard category code. */
          stand_service_code?: string;
          /** The customer category name. */
          cus_service_name?: string;
          /** The customer category code. */
          cus_service_code?: string;
          /**
           * The cargo image URLs, up to 8.
           * @maxItems 8
           */
          cargo_images?: Array<string>;
          /**
           * The install environment image URLs, up to 8.
           * @maxItems 8
           */
          cargo_evn_images?: Array<string>;
        }>;
      };
      output: {
        /** The install order number. */
        installOrderId: string;
        /** The install fee in CNY. */
        installFee: number | null;
      };
    };
    /** Append sub waybill numbers to an SF Freight LTL order, for shippers who finalize the package count after packing. Only own orders before pickup; at most 1200 sub waybills per order. Reprint the waybills afterwards if they were already printed. */
    "sf_express.freight_append_ltl_sub_waybill": {
      input: {
        /**
         * The client order number (客户订单号); must be unique per partnerID.
         * @minLength 1
         */
        order_id: string;
        /**
         * The number of sub waybills to append; the order can hold at most 1200 in total.
         * @exclusiveMinimum 0
         */
        count: number;
      };
      output: {
        /** The client order number, echoed back. */
        orderId: string;
        /** The SF master waybill number assigned to the order. */
        waybillNo?: string;
        /** The sub waybill numbers. */
        subWaybillNos?: Array<string>;
        /** The sign-back receipt waybill number, when one was requested. */
        returnTrackingNo?: string;
        /** The destination area code. */
        destCode?: string;
        /** The coverage verdict: 1 = manual review (人工确认), 2 = deliverable (可收派), 3 = not deliverable. */
        filterResult?: number;
        /** The reason code or note when the order is not deliverable. */
        filterRemark?: string;
        /** The address mapping code. */
        mappingMark?: string;
        /** The third-party freight payment URL. */
        paymentLink?: string;
        /** The route label information used for waybill printing; carries invokeResult plus the printable route-label fields. */
        rlsInfo?: Record<string, unknown>;
        /** The route label information for the sign-back receipt waybill, returned when a sign-back was requested. */
        signBackRlsInfo?: Record<string, unknown>;
      };
    };
    /** Audit a value-added service request (审核增值服务), for example the JZ17 好评返现 service. */
    "sf_express.freight_audit_value_added_service": {
      input: {
        /**
         * The client order number.
         * @minLength 1
         */
        outer_order_id: string;
        /**
         * The value-added service code, for example JZ17.
         * @minLength 1
         */
        added_service_code: string;
        /** The audit decision. */
        audit_status: "AUDIT_PASSED" | "AUDIT_REFUSED";
        /** The audit comments. */
        audit_comments?: string;
      };
      output: {
        /** The client order number the audit applied to. */
        outerOrderId: string;
        /** Whether SF accepted the request. */
        acknowledged: boolean;
      };
    };
    /** Report the master's decision on a bidding install order's add-fee request (增加费用结果回传). */
    "sf_express.freight_bid_report_add_fee_result": {
      input: {
        /**
         * The install order number.
         * @minLength 1
         */
        order_no: string;
        /**
         * The add-fee serial number being answered.
         * @minLength 1
         */
        add_fee_no: string;
        /** The decision: 1 = 师傅同意 (accepted), 2 = 师傅拒绝 (rejected). */
        detail_result: "1" | "2";
        /** The rejection reason; required when detail_result is 2. */
        remark?: string;
        /**
         * The add-fee amount in CNY; must match the original request.
         * @exclusiveMinimum 0
         */
        add_amt: number;
      };
      output: {
        /** The install order number the decision applied to. */
        orderNo: string;
        /** Whether SF accepted the request. */
        acknowledged: boolean;
      };
    };
    /** Report the complaint handling result for a bidding install order (接收投诉结果). */
    "sf_express.freight_bid_report_complaint_result": {
      input: {
        /**
         * The install order number.
         * @minLength 1
         */
        order_no: string;
        /**
         * The handling result: 1 = 成立 (upheld), 2 = 不成立 (dismissed).
         * @minimum 1
         * @maximum 2
         */
        handle_result: number;
        /** The compensation amount in CNY. */
        pay_amt?: string;
        /** The handling evidence URLs, comma-separated. */
        evidence_urls?: string;
        /**
         * The handling time in yyyy-MM-dd HH:mm format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$
         */
        handle_time?: string;
        /**
         * The handling description.
         * @maxLength 1024
         */
        handle_desc?: string;
        /** Whether to refund online. */
        is_online_refund?: boolean;
      };
      output: {
        /** The install order number the result applied to. */
        orderNo: string;
        /** Whether SF accepted the request. */
        acknowledged: boolean;
      };
    };
    /** Report an operation node for a bidding install order (供应商自主报价操作节点回传). operate_data's required keys depend on operate_code: OP000006 needs installMaster+installConcat, OP000004 needs appTime, OP000008/OP000001/OP000010 need imgUrl, OP000013 needs closeReason. */
    "sf_express.freight_bid_report_operation_node": {
      input: {
        /**
         * The install order number.
         * @minLength 1
         */
        order_no: string;
        /**
         * The operation description.
         * @minLength 1
         */
        content: string;
        /** The operation code: OP000006 已分配师傅, OP000004 已预约, OP000000 提货, OP000007 上门打卡, OP000008 装前检查, OP000001 已完工, OP000010 好评返现, OP000011 验收, OP000013 关闭. */
        operate_code: "OP000006" | "OP000004" | "OP000000" | "OP000007" | "OP000008" | "OP000001" | "OP000010" | "OP000011" | "OP000013";
        /**
         * The operation time in yyyy-MM-dd HH:mm:ss format.
         * @minLength 1
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        operate_time: string;
        /** The operation data; required keys depend on operate_code. */
        operate_data?: Record<string, string>;
      };
      output: {
        /** The install order number the report applied to. */
        orderNo: string;
        /** Whether SF accepted the request. */
        acknowledged: boolean;
      };
    };
    /** Report the master's decision on a bidding install order's refund request (退款结果回传). */
    "sf_express.freight_bid_report_refund_result": {
      input: {
        /**
         * The install order number.
         * @minLength 1
         */
        order_no: string;
        /**
         * The refund serial number being answered.
         * @minLength 1
         */
        refund_no: string;
        /** The decision: 0 = 师傅同意 (accepted), 1 = 师傅拒绝 (rejected). */
        refund_status: "0" | "1";
        /** The rejection reason; required when refund_status is 1. */
        remark?: string;
        /**
         * The refund amount in CNY; must match the original request.
         * @exclusiveMinimum 0
         */
        refund_amt: number;
      };
      output: {
        /** The install order number the decision applied to. */
        orderNo: string;
        /** Whether SF accepted the request. */
        acknowledged: boolean;
      };
    };
    /** Ask the customer for supplementary evidence while handling a complaint (通知用户补充举证). The deadline defaults to 12 hours after the notice time. */
    "sf_express.freight_bid_send_evidence_notice": {
      input: {
        /**
         * The install order number.
         * @minLength 1
         */
        order_no: string;
        /**
         * The notice time in yyyy-MM-dd HH:mm:ss format; defaults to now.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        notice_time?: string;
        /**
         * The evidence deadline in yyyy-MM-dd HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        expire_time?: string;
      };
      output: {
        /** The install order number the notice applied to. */
        orderNo: string;
        /** Whether SF accepted the request. */
        acknowledged: boolean;
      };
    };
    /** Submit the master's evidence for a complaint on a bidding install order (师傅举证回传). */
    "sf_express.freight_bid_submit_master_evidence": {
      input: {
        /**
         * The install order number.
         * @minLength 1
         */
        order_no: string;
        /**
         * The unique evidence submission ID, used for deduplication.
         * @minLength 1
         */
        supply_id: string;
        /**
         * The operation time in yyyy-MM-dd HH:mm:ss format.
         * @minLength 1
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        supply_time: string;
        /** The evidence description. */
        complaint_desc?: string;
        /** The evidence image URLs, comma-separated. */
        evidence_urls?: string;
        /** The evidence audio URLs, comma-separated. */
        audio_urls?: string;
        /** The evidence video URLs, comma-separated. */
        video_urls?: string;
      };
      output: {
        /** The install order number the evidence applied to. */
        orderNo: string;
        /** Whether SF accepted the request. */
        acknowledged: boolean;
      };
    };
    /** Submit a supplier master's quote for a bidding install order (回传报价). */
    "sf_express.freight_bid_submit_quote": {
      input: {
        /**
         * The install order number.
         * @minLength 1
         */
        order_no: string;
        /**
         * The master name.
         * @minLength 1
         */
        master_name: string;
        /**
         * The supplier's unique master ID.
         * @minLength 1
         */
        master_id: string;
        /**
         * The quoted price in CNY, up to 2 decimal places.
         * @exclusiveMinimum 0
         */
        offer_price: number;
        /** The master avatar image URL. */
        avatar?: string;
        /** The master's positive review rate, 0.1-100 without the % sign. */
        good_rate_percent?: string;
        /** The master's negative review count. */
        negative_comment_count?: number;
        /** The master's complaint count. */
        complaint_count?: number;
        /** The master's cooperation count. */
        co_work_times?: number;
        /** The goods category the master served most recently. */
        master_latest_goods_cat?: string;
        /** The master's completed orders in the last 30 days. */
        r30d_trade_complete?: number;
        /** The master's overall rating, 0.1-5, for example 4.5. */
        stars_avg?: string;
        /** The master's deposit amount in CNY. */
        certify_amount?: number;
      };
      output: {
        /** The install order number the quote applied to. */
        orderNo: string;
        /** Whether SF accepted the request. */
        acknowledged: boolean;
      };
    };
    /** Cancel an appended install service; the waybill must not be picked up yet. */
    "sf_express.freight_cancel_install_order": {
      input: Record<string, unknown>;
      output: {
        /** The waybill number the cancellation applied to, when given. */
        waybillNo: string;
        /** The install order number the cancellation applied to, when given. */
        orderId: string;
        /** Whether SF accepted the request. */
        acknowledged: boolean;
      };
    };
    /** Cancel an SF Freight LTL order. Only orders not yet picked up can be cancelled. */
    "sf_express.freight_cancel_ltl_order": {
      input: {
        /**
         * The client order number (客户订单号); must be unique per partnerID.
         * @minLength 1
         */
        order_id: string;
        /** When true, the order number can be reused for a new order after cancellation. */
        reuse_order_id?: boolean;
      };
      output: {
        /** The cancelled client order number, echoed back. */
        orderId: string;
      };
    };
    /** Cancel an SF recovery order; not possible once the master has arrived. */
    "sf_express.freight_cancel_recovery_order": {
      input: {
        /**
         * The client order number of the recovery order.
         * @minLength 1
         */
        outer_order_id: string;
        /**
         * The cancellation reason.
         * @minLength 1
         */
        cancel_reason: string;
      };
      output: {
        /** The client order number that was cancelled. */
        outerOrderId: string;
        /** Whether SF accepted the request. */
        acknowledged: boolean;
      };
    };
    /** Cancel an SF Freight truckload order. Cancellation only succeeds while the order is in a cancellable state; otherwise the error message explains why. */
    "sf_express.freight_cancel_tl_order": {
      input: {
        /**
         * The client order number.
         * @minLength 1
         */
        order_id: string;
        /**
         * The SF waybill number; takes precedence when provided.
         * @minLength 1
         */
        waybill_no?: string;
        /**
         * The operator name.
         * @minLength 1
         */
        operator?: string;
        /**
         * The cancellation reason.
         * @minLength 1
         */
        cancel_reason?: string;
      };
      output: {
        /** The client order number, echoed back. */
        orderId: string;
        /** The order was cancelled. */
        cancelled: true;
      };
    };
    /** Check whether an address is within SF Freight pickup or delivery coverage (订单筛单). */
    "sf_express.freight_check_address_reachable": {
      input: {
        /** The direction to check: pickup for the sender-side (寄件) or delivery for the recipient-side (收件) coverage. */
        direction: "pickup" | "delivery";
        /**
         * The province name, for example 广东省.
         * @minLength 1
         */
        province: string;
        /**
         * The city name, for example 深圳市.
         * @minLength 1
         */
        city: string;
        /**
         * The district or county name.
         * @minLength 1
         */
        district?: string;
        /**
         * The detailed street address.
         * @minLength 1
         */
        address?: string;
      };
      output: {
        /** The verdict: 1 = reachable (可达), 2 = unreachable (不可达), 3 = cannot infer (无法推断). */
        reachable: number;
        /** The result message. */
        resultMsg: string;
      };
    };
    /** Calculate the freight fee for an SF Freight city-delivery shipment before ordering. */
    "sf_express.freight_city_calc_fee": {
      input: {
        /**
         * The vehicle model, for example 4.2米箱货.
         * @minLength 1
         */
        vehicle: string;
        /**
         * The number of vehicles.
         * @minimum 1
         */
        car_num: number;
        /**
         * The planned pickup time in YYYY-MM-DD HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        send_start_time: string;
        /**
         * The order addresses.
         * @minItems 1
         */
        addresses: Array<{
          /**
           * The longitude,latitude pair, for example 113.93041,22.53332.
           * @minLength 1
           */
          coordinate: string;
          /**
           * The contact name.
           * @minLength 1
           */
          contact: string;
          /**
           * The contact phone number.
           * @minLength 1
           */
          tel: string;
          /**
           * The address.
           * @minLength 1
           */
          address: string;
          /** The floor; pass 0 when no upstairs service is needed. Defaults to 0 when omitted. */
          floor?: number;
          /** Whether the building has an elevator; no elevator can raise the upstairs fee. */
          lift: boolean;
          /** Whether a signed receipt is uploaded for this address. */
          reply_status: boolean;
        }>;
        /**
         * The city, for example 深圳市.
         * @minLength 1
         */
        city: string;
        /**
         * The order source tag.
         * @minLength 1
         */
        order_source: string;
        /** The value-added services to price. */
        vas_fee_list?: Array<{
          /**
           * The service code, for example BAOJIA (保价) or DIANZIHUIDAN (电子回单).
           * @minLength 1
           */
          vas_code: string;
          /** The insured amount or package count, when the service needs one. */
          num?: number;
        }>;
      };
      output: {
        /** The base freight fee in CNY. */
        baseFee: number;
        /** The total fee in CNY. */
        totalFee: number;
        /** The total value-added service fee in CNY. */
        totalVasFee: number;
        /** The mileage in kilometers. */
        mileage: number;
        /** The deducted payment in CNY, when returned. */
        cutPayment: number;
        /** The per-service fee breakdown. */
        orderVasFeeList: Array<{
          /** The service code. */
          vasCode: string;
          /** The vehicle model. */
          vehicle: string;
          /** The insured amount or package count, when returned. */
          num: number;
          /** The service fee in CNY. */
          fee: number;
          /** The service name. */
          name: string;
        }>;
      };
    };
    /** Cancel an SF Freight city-delivery order. */
    "sf_express.freight_city_cancel_order": {
      input: Record<string, unknown>;
      output: {
        /** The order number, echoed back when one was provided. */
        orderNo: string | null;
        /** The client order reference number, echoed back when provided. */
        customerOrderNo: string | null;
        /** The order was cancelled. */
        cancelled: true;
      };
    };
    /** Place an SF Freight city-delivery (城市配送货运) order. send_start_time must be at least 2 hours in the future. */
    "sf_express.freight_city_confirm_order": {
      input: {
        /**
         * The vehicle model, for example 中面 or 4.2米箱货.
         * @minLength 1
         */
        vehicle: string;
        /**
         * The number of vehicles.
         * @minimum 1
         */
        car_num: number;
        /**
         * The requested pickup time in YYYY-MM-DD HH:mm:ss format; must be at least 2 hours ahead.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        send_start_time: string;
        /**
         * The pickup and delivery addresses.
         * @minItems 1
         */
        address_list: Array<{
          /**
           * The longitude,latitude pair, for example 113.93041,22.53332.
           * @minLength 1
           */
          coordinate: string;
          /**
           * The contact name.
           * @minLength 1
           */
          contact: string;
          /**
           * The contact phone number.
           * @minLength 1
           */
          tel: string;
          /**
           * The address.
           * @minLength 1
           */
          address: string;
          /**
           * The detailed address line.
           * @minLength 1
           */
          address_detail: string;
          /** The floor; pass 0 when no upstairs service is needed. */
          floor: number;
          /** Whether the building has an elevator; no elevator can raise the upstairs fee. */
          lift: boolean;
          /** Whether a signed receipt is uploaded for this address. */
          reply_status: boolean;
        }>;
        /**
         * The ordering phone number.
         * @minLength 1
         */
        phone: string;
        /**
         * The ordering user nickname.
         * @minLength 1
         */
        nickname: string;
        /**
         * The origin city, for example 深圳市.
         * @minLength 1
         */
        place: string;
        /**
         * The destination city.
         * @minLength 1
         */
        destination_city: string;
        /**
         * The SF monthly settlement card (月结卡号).
         * @minLength 1
         */
        monthly_card: string;
        /** The value-added services to apply. */
        vas_fee_list?: Array<{
          /**
           * The service code, for example BAOJIA (保价) or DIANZIHUIDAN (电子回单).
           * @minLength 1
           */
          vas_code: string;
          /** The insured amount or package count, when the service needs one. */
          num?: number;
        }>;
        /**
         * The order remark.
         * @minLength 1
         */
        remark?: string;
        /**
         * Your own order reference number.
         * @minLength 1
         */
        customer_order_no?: string;
        /**
         * The goods name, at most 100 characters.
         * @minLength 1
         * @maxLength 100
         */
        goods_name?: string;
      };
      output: {
        /** The SF city-delivery order number. */
        orderNo: string;
      };
    };
    /** Get the details of an SF Freight city-delivery order by order number or client order number. */
    "sf_express.freight_city_get_order_detail": {
      input: Record<string, unknown>;
      output: {
        /** The order number. */
        orderNo: string;
        /** The order creation time. */
        orderTime: string;
        /** The service completion time. */
        finishTime: string;
        /** The monthly settlement card used. */
        monthSettlementCard: string;
        /** The contact name. */
        contact: string;
        /** The contact phone number. */
        tel: string;
        /** The scheduled pickup time. */
        sendStartTime: string;
        /** The order status: 1 待处理, 2 服务中, 3 已完成, 4 已取消, 5 待支付, 9 供应商待处理. */
        orderStatus: number;
        /** The mileage in kilometers. */
        mileage: number;
        /** The mileage fee in CNY. */
        mileageFee: number;
        /** The order remark. */
        remark: string;
        /** The client order reference number. */
        customerOrderNo: string;
        /** The number of vehicles. */
        carNumber: number;
        /** The total fee in CNY. */
        totalFee: number;
        /** The total value-added service fee in CNY. */
        vasTotal: number;
        /** The vehicle model. */
        vehicle: string;
        /** The city. */
        city: string;
        /** The payment type. */
        payType: number;
        /** The driver name. */
        chauffeurName: string;
        /** The driver phone number. */
        chauffeurTel: string;
        /** The driver's latest longitude,latitude position. */
        chauffeurCoordinate: string;
        /** The cancellation reason, when cancelled. */
        cancelMessage: string;
        /** The order's pickup and delivery addresses. */
        addressList: Array<{
          /** The address sequence: 0 is the pickup address, later entries are delivery addresses. */
          serialNo: number;
          /** The address. */
          address: string;
          /** The floor. */
          floor: number;
          /** Whether the building has an elevator: 0 no, 1 yes. */
          lift: number;
          /** The contact name. */
          contact: string;
          /** The contact phone number. */
          tel: string;
        }>;
      };
    };
    /** Get the pickup appointment time window available for a city in SF Freight city delivery. */
    "sf_express.freight_city_list_appointment_times": {
      input: {
        /**
         * The city, for example 深圳市.
         * @minLength 1
         */
        city: string;
      };
      output: {
        /** The earliest pickup time, for example 08:00:00. */
        startTime: string;
        /** The latest pickup time, for example 23:00:00. */
        endTime: string;
      };
    };
    /** List the value-added services available for a city and vehicle model in SF Freight city delivery. */
    "sf_express.freight_city_list_available_vas": {
      input: {
        /**
         * The city, for example 深圳市.
         * @minLength 1
         */
        place: string;
        /**
         * The vehicle model, for example 4.2米箱货.
         * @minLength 1
         */
        vehicle: string;
      };
      output: {
        /** The available services. */
        services: Array<{
          /** The service code, for example BAOJIA (保价). */
          vasCode: string;
          /** The service name. */
          name: string;
          /** The billing unit. */
          numUnit: string | null;
          /** The minimum charge. */
          bailMinFee?: string;
          /** The unit price. */
          fee?: string;
          /** The name of the quantity field this service expects. */
          infoName: string | null;
        }>;
      };
    };
    /** List the cities where SF Freight city delivery is available. */
    "sf_express.freight_city_list_cities": {
      input: Record<string, never>;
      output: {
        /** The city names. */
        cities: Array<string>;
      };
    };
    /** List SF Freight city-delivery orders for an ordering phone number, with optional time and pagination filters. */
    "sf_express.freight_city_list_orders": {
      input: {
        /**
         * The ordering phone number.
         * @minLength 1
         */
        phone: string;
        /**
         * The start of the order creation time range.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        create_time_start?: string;
        /**
         * The end of the order creation time range.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        create_time_end?: string;
        /**
         * The page number, starting from 1.
         * @exclusiveMinimum 0
         */
        index?: number;
        /**
         * The page size (10 by default).
         * @exclusiveMinimum 0
         */
        size?: number;
      };
      output: {
        /** The orders. */
        orders: Array<{
          /** The order number. */
          orderNo: string;
          /** The order creation time. */
          orderTime: string;
          /** The service completion time. */
          finishTime: string;
          /** The contact name. */
          contact: string;
          /** The contact phone number. */
          tel: string;
          /** The order status: 1 待处理, 2 服务中, 3 已完成, 4 已取消, 5 待支付, 9 供应商待处理. */
          orderStatus: number;
          /** The order remark. */
          remark: string;
          /** The client order reference number. */
          customerOrderNo: string;
          /** The total fee in CNY. */
          totalFee: number;
        }>;
      };
    };
    /** List the vehicle models available for a city and business scenario in SF Freight city delivery. */
    "sf_express.freight_city_list_vehicles": {
      input: {
        /**
         * The city name, for example 深圳市.
         * @minLength 1
         */
        city: string;
        /** The business scenario: 1 个人搬家, 2 标准货运. */
        order_category: number;
      };
      output: {
        /** The available vehicle models. */
        carModels: Array<{
          /** The model name, for example 依维柯. */
          model: string;
          /** The load capacity in tons. */
          weight?: number;
          /** The cargo box length in meters. */
          length?: number;
          /** The cargo box width in meters. */
          width?: number;
          /** The cargo box height in meters. */
          height?: number;
          /** The cargo box volume in cubic meters. */
          volume?: number;
          /** Whether the model has special specifications. */
          flag?: number;
          /** The selectable special specifications. */
          specialModelList?: Array<{
            /** The specification name, for example 双排座. */
            name: string;
            /** The specification code, for example SHUANGPAIZUO. */
            code: string;
          }>;
          /** The vehicle model picture URL. */
          photo?: string;
        }>;
      };
    };
    /** Create an SF install order (安装单下单): install-only, pickup-and-install, or repair. */
    "sf_express.freight_create_install_order": {
      input: {
        /**
         * The unique client order number; duplicates are rejected.
         * @minLength 1
         */
        outer_order_id: string;
        /**
         * The SF monthly settlement card number (月结卡号) used for billing.
         * @minLength 1
         */
        monthly_card_no: string;
        /** The service type: 2 = 提货并安装 (pickup and install), 1 = 仅安装 (install only), 7 = 维修 (repair). */
        service_type: "1" | "2" | "7";
        /** Whether the goods have arrived at the customer. */
        is_arrive?: boolean;
        /**
         * The customer name.
         * @minLength 1
         */
        receiver_contact: string;
        /**
         * The customer mobile number; virtual numbers are supported, extensions split by comma or dash.
         * @minLength 1
         */
        receiver_mobile: string;
        /**
         * The customer detailed address.
         * @minLength 1
         */
        receiver_address: string;
        /** The pickup location name (提货地名称), used for pickup-and-install orders. */
        pickup_zone?: string;
        /** The pickup contact name. */
        pickup_contact?: string;
        /** The pickup contact mobile number. */
        pickup_mobile?: string;
        /** The pickup detailed address. */
        pickup_address?: string;
        /**
         * The package count.
         * @minimum 1
         */
        parcel_quantity?: number;
        /** The total cargo weight in kilograms. */
        cargo_total_weight?: number;
        /** The total cargo volume in cubic centimeters. */
        volume?: number;
        /**
         * The expected appointment window start in yyyy-MM-dd HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        expect_start_time?: string;
        /**
         * The expected appointment window end in yyyy-MM-dd HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        expect_end_time?: string;
        /** The logistics company name that carried the goods. */
        logistics_company?: string;
        /** The original logistics waybill number. */
        original_mail_no?: string;
        /** The source shop name. */
        shop_name?: string;
        /** The order remark, for example special installation requirements. */
        remark?: string;
        /**
         * The install cargo entries.
         * @minItems 1
         */
        cargoes: Array<{
          /**
           * The install quantity.
           * @minimum 1
           */
          count: number;
          /** The standard category name. */
          product_name?: string;
          /** The standard category code. */
          product_sku?: string;
          /** The customer category code. */
          customer_product_sku?: string;
          /** The customer category name. */
          customer_product_name?: string;
          /** The goods remark, for example special installation notes. */
          goods_remark?: string;
          /** The repair remark; recommended when service_type is 7 (维修). */
          repair_remark?: string;
          /**
           * The cargo image URLs, up to 8.
           * @maxItems 8
           */
          img_urls?: Array<string>;
          /**
           * The cargo or install-process video URLs; at most one is supported.
           * @maxItems 1
           */
          video_link_urls?: Array<string>;
        }>;
        /** The value-added services. */
        added_services?: Array<{
          /**
           * The value-added service name, for example 好评返现.
           * @minLength 1
           */
          added_service_name: string;
          /** The value-added service code, for example JZ17 for 好评返现. */
          added_service_code?: string;
          /** The service price, when the service supports pricing. */
          added_service_price?: string;
        }>;
        /** The source order number. */
        customer_source_order_id?: string;
        /** The source platform. */
        order_channel?: string;
        /** The ordering party contact name, when it differs from the customer. */
        order_contact?: string;
        /** The ordering party contact phone number. */
        order_contact_phone?: string;
      };
      output: {
        /** The SF install order number. */
        orderId: string;
        /** The client order number, echoed back. */
        outerOrderId: string;
        /** The install status: 0 已下单(待分配师傅), 1 已提货, 2 预约中, 3 已预约, 5 已完工, 6 异常, 7 已取消, 8 已分配安装师傅, 9 已上门, 10 已检查. */
        installStatus: string;
        /** The order fee breakdown. */
        feeList: Array<{
          /** The fee name, for example 安装费. */
          feeName: string;
          /** The fee type code, for example JZ01. */
          feeTypeCode: string;
          /** The fee amount in CNY; null when SF omits it. */
          feeAmt: number | null;
        }>;
      };
    };
    /** Place an SF Freight (快运) LTL order for bulky or heavy shipments. This is for 大件 special scenarios only; for regular parcels use sf_express.create_order. When waybill_no is provided, the order uses that reserved master waybill number instead of generating one. */
    "sf_express.freight_create_ltl_order": {
      input: {
        /**
         * The client order number (客户订单号); must be unique per partnerID.
         * @minLength 1
         */
        order_id: string;
        /**
         * A reserved master waybill number to use instead of generating one.
         * @minLength 1
         */
        waybill_no?: string;
        /** The reserved sub waybill numbers to use with waybill_no. */
        sub_waybills?: Array<string>;
        /** The sender party. */
        sender: Record<string, unknown>;
        /** The recipient party. */
        recipient: Record<string, unknown>;
        /**
         * The SF monthly settlement card number (月结卡号) to charge.
         * @minLength 1
         */
        monthly_card?: string;
        /** The pickup mode: 1 = customer drop-off (客户自送), 2 = courier pickup (上门接货, default). */
        pickup_mode?: number;
        /** Whether to dispatch a courier call (下call): true = a courier picks up within about an hour; false = the shipper prints labels and the courier collects on a fixed schedule. */
        is_do_call: boolean;
        /**
         * The expected pickup time in YYYY-MM-DD HH:mm:ss format; effective only when is_do_call is true. A time past 20:00 is moved to the next day.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        expected_pickup_time?: string;
        /** The freight payment method: 1 = sender pays (寄方付), 2 = recipient pays (收方付), 3 = third party pays. */
        pay_method: number;
        /** The number of packages; values above 1 yield one master waybill and N-1 sub waybills. */
        parcel_qty?: number;
        /** The total cargo length in centimeters. */
        cargo_length?: number;
        /** The total cargo width in centimeters. */
        cargo_width?: number;
        /** The total cargo height in centimeters. */
        cargo_height?: number;
        /** The total cargo volume in cubic centimeters, used for volumetric weight. */
        volume?: number;
        /** The total cargo weight in kilograms; required when addition_services includes the HIN 安装服务 service. */
        cargo_total_weight?: number;
        /** Whether to return the sign-back receipt waybill number. */
        need_return_tracking_no?: boolean;
        /**
         * The special delivery type code: 1 = identity verification (身份验证).
         * @minLength 1
         */
        special_delivery_type_code?: string;
        /**
         * The special delivery detail, for example 1:09296231 meaning the last 8 digits of an ID card.
         * @minLength 1
         */
        special_delivery_value?: string;
        /** The delivery mode: 1 = delivery (派送, default), 2 = self pickup (自提). */
        delivery_mode?: number;
        /** Whether the delivery site has an elevator. */
        has_elevator?: boolean;
        /** The delivery appointment type: 1 = any day, 2 = workdays only, 3 = rest days only, 4 = weekends only, 5 = Monday to Saturday, 6 = Monday to Friday. */
        delivery_res_type?: number;
        /**
         * The cargo category, for example 家电 or 家俱.
         * @minLength 1
         */
        cargo_type?: string;
        /**
         * The cargo name, for example 小天鹅洗衣机.
         * @minLength 1
         */
        cargo_name?: string;
        /** The declared value of the goods (声明价值), in currency_code; this is not the INSURE value-added service amount. */
        declared_value?: number;
        /**
         * The declared value currency, default CNY.
         * @minLength 1
         */
        currency_code?: string;
        /**
         * The SF Freight product code, for example SE0100 重货包裹, SE0101 标准零担, SE0114 大票直送, SE0020 整车直达, S1 顺丰特快, S2 顺丰标快.
         * @minLength 1
         */
        product_code?: string;
        /**
         * The original e-commerce order number.
         * @minLength 1
         */
        original_number?: string;
        /**
         * The order source platform, for example taobao, tmall, jd, pdd.
         * @minLength 1
         */
        order_source?: string;
        /**
         * The order remark.
         * @minLength 1
         */
        remark?: string;
        /**
         * The cargo items (托寄物明细).
         * @minItems 1
         */
        cargo_list: Array<{
          /**
           * The cargo name.
           * @minLength 1
           */
          name?: string;
          /**
           * The unit, for example 个, 台, 件.
           * @minLength 1
           */
          unit?: string;
          /**
           * The cargo category.
           * @minLength 1
           */
          category?: string;
          /**
           * The specification.
           * @minLength 1
           */
          spec?: string;
          /** The item count. */
          count?: number;
          /** The length in centimeters. */
          length?: number;
          /** The height in centimeters. */
          height?: number;
          /** The width in centimeters. */
          width?: number;
          /** The volume in cubic centimeters. */
          volume?: number;
          /** The weight in kilograms. */
          weight?: number;
          /**
           * The goods code.
           * @minLength 1
           */
          goodsCode?: string;
          /**
           * The state bar code.
           * @minLength 1
           */
          stateBarCode?: string;
          /**
           * The box number.
           * @minLength 1
           */
          boxNo?: string;
          /**
           * The SN code used by the inspection service.
           * @minLength 1
           */
          snCode?: string;
        }>;
        /** The packages with reserved waybill numbers. */
        package_list?: Array<{
          /**
           * The reserved waybill or sub waybill number.
           * @minLength 1
           */
          waybillNo?: string;
          /**
           * The box number.
           * @minLength 1
           */
          boxNo?: string;
          /** The package length in centimeters. */
          length?: number;
          /** The package height in centimeters. */
          height?: number;
          /** The package width in centimeters. */
          width?: number;
          /** The package weight; unit per unitWeight, default KG. */
          weight?: number;
          /**
           * The weight unit, default 千克 (KG).
           * @minLength 1
           */
          unitWeight?: string;
          /** The package volume; unit per unitVolume, default cubic centimeters. */
          volume?: number;
          /**
           * The volume unit, default 立方厘米.
           * @minLength 1
           */
          unitVolume?: string;
        }>;
        /** The value-added services (增值服务). */
        addition_services?: Array<{
          /**
           * The service code, for example COD, INSURE, PKFEE, HIN (安装服务).
           * @minLength 1
           */
          name: string;
          /**
           * The service value; meaning depends on the service code.
           * @minLength 1
           */
          value?: string;
          /**
           * Service extension attribute 1.
           * @minLength 1
           */
          value1?: string;
          /**
           * Service extension attribute 2.
           * @minLength 1
           */
          value2?: string;
          /**
           * Service extension attribute 3.
           * @minLength 1
           */
          value3?: string;
          /**
           * Service extension attribute 4.
           * @minLength 1
           */
          value4?: string;
          /**
           * Service extension attribute 5; carries a JSON string for PKFEE and HIN.
           * @minLength 1
           */
          value5?: string;
        }>;
        /** The third-party sign-back recipient, used when the signed receipt is forwarded to an address other than the sender's. */
        third_sign_back?: {
          /**
           * The receipt recipient province.
           * @minLength 1
           */
          province: string;
          /**
           * The receipt recipient city.
           * @minLength 1
           */
          city: string;
          /**
           * The receipt recipient district or county.
           * @minLength 1
           */
          county: string;
          /**
           * The receipt recipient detailed address.
           * @minLength 1
           */
          address: string;
          /**
           * The receipt recipient contact person.
           * @minLength 1
           */
          contact: string;
          /**
           * The receipt recipient mobile number.
           * @minLength 1
           */
          mobile: string;
          /**
           * The receipt recipient landline number.
           * @minLength 1
           */
          tel?: string;
          /**
           * The receipt recipient company name.
           * @minLength 1
           */
          company?: string;
        };
      };
      output: {
        /** The client order number, echoed back. */
        orderId: string;
        /** The SF master waybill number assigned to the order. */
        waybillNo?: string;
        /** The sub waybill numbers. */
        subWaybillNos?: Array<string>;
        /** The sign-back receipt waybill number, when one was requested. */
        returnTrackingNo?: string;
        /** The destination area code. */
        destCode?: string;
        /** The coverage verdict: 1 = manual review (人工确认), 2 = deliverable (可收派), 3 = not deliverable. */
        filterResult?: number;
        /** The reason code or note when the order is not deliverable. */
        filterRemark?: string;
        /** The address mapping code. */
        mappingMark?: string;
        /** The third-party freight payment URL. */
        paymentLink?: string;
        /** The route label information used for waybill printing; carries invokeResult plus the printable route-label fields. */
        rlsInfo?: Record<string, unknown>;
        /** The route label information for the sign-back receipt waybill, returned when a sign-back was requested. */
        signBackRlsInfo?: Record<string, unknown>;
      };
    };
    /** Create an SF recovery order (回收单下单) for door-to-door goods recycling. The pickup date must be within 3 days, the window whole hours between 08:00 and 21:00. */
    "sf_express.freight_create_recovery_order": {
      input: {
        /**
         * The unique client order number.
         * @minLength 1
         */
        outer_order_id: string;
        /**
         * The customer name.
         * @minLength 1
         */
        sender_contact: string;
        /**
         * The customer mobile number.
         * @minLength 1
         */
        sender_mobile: string;
        /**
         * The door-to-door pickup address.
         * @minLength 1
         */
        sender_address: string;
        /**
         * The expected pickup date in yyyy-MM-dd format; within 3 days.
         * @minLength 1
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        expect_date: string;
        /**
         * The expected pickup window start in HH:mm format, whole hours from 08:00 through 21:00.
         * @minLength 1
         * @pattern ^(0[89]|1[0-9]|2[01]):00$
         */
        expect_start_time: string;
        /**
         * The expected pickup window end in HH:mm format, whole hours from 08:00 through 21:00.
         * @minLength 1
         * @pattern ^(0[89]|1[0-9]|2[01]):00$
         */
        expect_end_time: string;
        /**
         * The recovery products; exactly one product with count 1 is supported.
         * @minItems 1
         * @maxItems 1
         */
        product_list: Array<{
          /**
           * The recovery category SKU, from freight_query_recovery_products.
           * @minLength 1
           */
          product_sku: string;
          /**
           * The recovery quantity; fixed to 1.
           * @minimum 1
           * @maximum 1
           */
          count?: number;
        }>;
      };
      output: {
        /** The SF recovery order number. */
        orderId: string;
        /** The client order number, echoed back. */
        outerOrderId: string;
        /** The order fee breakdown. */
        feeList: Array<{
          /** The fee name, for example 安装费. */
          feeName: string;
          /** The fee type code, for example JZ01. */
          feeTypeCode: string;
          /** The fee amount in CNY; null when SF omits it. */
          feeAmt: number | null;
        }>;
      };
    };
    /** Create an SF Freight truckload (整车直达) order. Set generate_waybill_no to have SF assign a waybill number, or pass your own waybill_no. A monthly card (monthly_card) is required when pay_method is 1 (寄付月结) or 2 (寄付转第三方). */
    "sf_express.freight_create_tl_order": {
      input: {
        /**
         * The unique client order number.
         * @minLength 1
         */
        order_id: string;
        /** The payment method: 1 寄付月结, 2 寄付转第三方, 3 寄付现结. */
        pay_method: number;
        /** The sender contact and address. */
        sender: {
          /**
           * The contact name.
           * @minLength 1
           */
          contact: string;
          /**
           * The contact mobile number.
           * @minLength 1
           */
          mobile: string;
          /**
           * The detailed street address.
           * @minLength 1
           */
          address: string;
          /**
           * The company name.
           * @minLength 1
           */
          company?: string;
          /**
           * The province name, for example 广东省.
           * @minLength 1
           */
          province?: string;
          /**
           * The city name, for example 深圳市.
           * @minLength 1
           */
          city?: string;
          /**
           * The district or county name, for example 南山区.
           * @minLength 1
           */
          county?: string;
        };
        /** The recipient contact and address. */
        recipient: {
          /**
           * The contact name.
           * @minLength 1
           */
          contact: string;
          /**
           * The contact mobile number.
           * @minLength 1
           */
          mobile: string;
          /**
           * The detailed street address.
           * @minLength 1
           */
          address: string;
          /**
           * The company name.
           * @minLength 1
           */
          company?: string;
          /**
           * The province name, for example 广东省.
           * @minLength 1
           */
          province?: string;
          /**
           * The city name, for example 深圳市.
           * @minLength 1
           */
          city?: string;
          /**
           * The district or county name, for example 南山区.
           * @minLength 1
           */
          county?: string;
        };
        /** Whether SF assigns the waybill number. When false, waybill_no is required. */
        generate_waybill_no?: boolean;
        /**
         * Your own waybill number; used when generate_waybill_no is false.
         * @minLength 1
         */
        waybill_no?: string;
        /**
         * The SF monthly settlement card (月结卡号); required when pay_method is 1 or 2.
         * @minLength 1
         */
        monthly_card?: string;
        /**
         * The requested pickup time in YYYY-MM-DD HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        required_delivery_time?: string;
        /** The cargo category code: 1 医药卫生, 3 汽配, 4 快消品, 6 机具仪器, 7 化工橡塑, 8 服装鞋帽, 9 电子产品, 10 家电, 11 家具, 100 其他. */
        cargo_type?: "1" | "3" | "4" | "6" | "7" | "8" | "9" | "10" | "11" | "100";
        /** The packaging code: 1 裸包装, 2 膜包装, 3 缓冲物包装, 4 纸包装, 5 木包装, 6 其他. */
        package_type?: "1" | "2" | "3" | "4" | "5" | "6";
        /**
         * The cargo name, for example 冰箱.
         * @minLength 1
         */
        cargo_name?: string;
        /** The total number of cargo items. */
        total_cargo_quantity?: number;
        /** The total cargo weight in kilograms. */
        total_cargo_weight?: number;
        /** The total cargo volume in cubic meters. */
        total_cargo_volume?: number;
        /** The vehicle load capacity in tons: 1, 1.5, 3, 5, 7, 14, 20, or 30. */
        vehicle_type?: "1" | "1.5" | "3" | "5" | "7" | "14" | "20" | "30";
        /** The vehicle type code: 002001 厢式运输车, 002007 平板运输车, 002011 中澳运输车, 002012 海关监管运输车, 002010 中港运输车, 002004 冷藏车-双温, 002005 冷藏车-单温, 002006 药品运输冷藏车, 002013 冷藏车, 002024 高栏运输车. */
        car_type?: "002001" | "002007" | "002011" | "002012" | "002010" | "002004" | "002005" | "002006" | "002013" | "002024";
        /** Whether the sign-back receipt service is required (arrange it with your SF contact first). */
        need_tracking_return?: boolean;
        /**
         * The pickup remark for the order.
         * @minLength 1
         */
        receive_remark?: string;
        /**
         * The delivery remark for the order.
         * @minLength 1
         */
        delivery_remark?: string;
        /**
         * The designated pickup courier employee code.
         * @minLength 1
         */
        emp_code?: string;
        /** The estimated freight price in CNY. */
        price?: number;
        /** The cargo entries. */
        cargoes?: Array<{
          /**
           * The cargo name.
           * @minLength 1
           */
          name?: string;
          /** The cargo quantity. */
          count?: number;
          /** The weight in kilograms. */
          weight?: number;
          /** The length in centimeters. */
          length?: number;
          /** The height in centimeters. */
          height?: number;
          /** The width in centimeters. */
          width?: number;
          /** The volume in cubic meters. */
          volume?: number;
        }>;
        /** The scheduled stops on the route. */
        expected_stops?: Array<{
          /**
           * The detailed stop address.
           * @minLength 1
           */
          stop_address: string;
          /** The stop operation: 1 装, 2 卸, 3 装卸. */
          stop_operate_type: number;
          /**
           * The stop province.
           * @minLength 1
           */
          stop_province?: string;
          /**
           * The stop city.
           * @minLength 1
           */
          stop_city?: string;
          /**
           * The stop district or county.
           * @minLength 1
           */
          stop_county?: string;
        }>;
        /** The value-added services to apply. */
        addition_services?: Array<{
          /**
           * The service name, for example INSURE (保价).
           * @minLength 1
           */
          name: string;
          /**
           * The service value.
           * @minLength 1
           */
          value?: string;
          /**
           * Service extension attribute 1.
           * @minLength 1
           */
          value1?: string;
          /**
           * Service extension attribute 2.
           * @minLength 1
           */
          value2?: string;
          /**
           * Service extension attribute 3.
           * @minLength 1
           */
          value3?: string;
          /**
           * Service extension attribute 4.
           * @minLength 1
           */
          value4?: string;
        }>;
        /** The extension attributes. */
        extra_infos?: Array<{
          /**
           * The extension attribute key.
           * @minLength 1
           */
          attr_name?: string;
          /**
           * The extension attribute value.
           * @minLength 1
           */
          attr_val?: string;
        }>;
      };
      output: {
        /** The client order number, echoed back. */
        orderId: string;
        /** The SF waybill number; present when one was generated. */
        waybillNo: string | null;
        /** The sign-back receipt waybill number, when the sign-back service applies. */
        signBackWaybillNo: string | null;
      };
    };
    /** Create the vehicle track playback page URL for an SF Freight waybill. Requires the monthly card that paid the waybill. */
    "sf_express.freight_create_vehicle_track_url": {
      input: {
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The SF monthly settlement card (月结卡号) for the waybill.
         * @minLength 1
         */
        monthly_card: string;
      };
      output: {
        /** The vehicle track playback page URL. */
        url: string;
      };
    };
    /** Cancel one or more SF cross-border bulky orders by waybill number. */
    "sf_express.freight_crossborder_cancel_order": {
      input: {
        /**
         * The waybill numbers.
         * @minItems 1
         */
        waybill_nos: Array<string>;
        /**
         * The operator who cancels, for example a mobile number.
         * @minLength 1
         */
        user_name: string;
        /** The cancellation reason. */
        remark?: string;
      };
      output: {
        /** One result per waybill number. */
        results: Array<{
          /** The waybill number. */
          waybillNo?: string;
          /** The cancellation status, for example Success. */
          status?: string;
          /** The related sub waybill number, when any. */
          subWaybillNo?: string;
          /** The result message. */
          msg?: string;
        }>;
      };
    };
    /** Confirm and update a new delivery window option for an FBA shipment as the carrier agent. */
    "sf_express.freight_crossborder_confirm_delivery_window": {
      input: {
        /**
         * The FBA shipment id.
         * @pattern ^FBA[0-9A-Z]{7,9}$
         */
        fba_shipment_id: string;
        /**
         * The delivery window option id, from freight_crossborder_query_delivery_window_options.
         * @minLength 1
         */
        delivery_window_option_id: string;
        /**
         * The reference id usable to confirm the delivery window.
         * @minLength 1
         */
        reference_id: string;
      };
      output: {
        /** Whether the seller allows the carrier to update the delivery window. */
        sellerAllowCarrierUpdateDw: boolean;
        /** Whether Amazon accepted the update; this is the authoritative verdict. */
        successful: boolean;
        /** The failure code, when any. */
        errorCode: string | null;
        /** The failure message, when any. */
        errorMessage: string | null;
      };
    };
    /** Query the current delivery window of an FBA shipment as the carrier agent. */
    "sf_express.freight_crossborder_get_delivery_window": {
      input: {
        /**
         * The FBA shipment id.
         * @pattern ^FBA[0-9A-Z]{7,9}$
         */
        fba_shipment_id: string;
      };
      output: {
        /** The window start date. */
        startDate?: string;
        /** The window end date. */
        endDate?: string;
        /** The FBA number. */
        fbaNo?: string;
        /** Whether the seller allows updates: 0 = no, 1 = yes. */
        sellerAllowCarrierUpdateDw?: number;
        /** The deadline for changing the window. */
        gracePeriodEndDate?: string;
      };
    };
    /** Query the proof-of-delivery information for an SF cross-border bulky waybill. */
    "sf_express.freight_crossborder_get_pod_info": {
      input: {
        /**
         * The SF Express waybill number (顺丰运单号).
         * @minLength 1
         */
        waybill_no: string;
      };
      output: {
        /** The waybill number. */
        waybillNo?: string;
        /** Whether the waybill is signed. */
        signed: boolean;
        /** Whether POD files exist. */
        hasPod: boolean;
        /** The waybill status code, for example 240. */
        statusCode?: number;
        /** The status description, for example 已签收. */
        statusDescription?: string;
        /** The POD file download URLs. */
        podUrls: Array<string>;
        /** The result message. */
        message?: string;
      };
    };
    /** Start an SF cross-border bulky waybill print download and get the print batch number. */
    "sf_express.freight_crossborder_get_print_batch": {
      input: {
        /**
         * The SF Express waybill number (顺丰运单号).
         * @minLength 1
         */
        waybill_no: string;
      };
      output: {
        /** The print batch number, used with freight_crossborder_query_print_result. */
        printBatchNo: string;
      };
    };
    /** Place an SF cross-border bulky (大件跨境) order and receive the master and sub waybill numbers. A monthly card (monthly_card) is required when settlement_type is 2 (寄付月结). */
    "sf_express.freight_crossborder_place_order": {
      input: {
        /**
         * The unique client order number.
         * @minLength 1
         */
        customer_reference_no: string;
        /**
         * The ordering account (mobile number).
         * @minLength 1
         */
        username: string;
        /** The payment type: 1 = 寄付现结 (pay now), 2 = 寄付月结 (monthly settlement). */
        settlement_type: "1" | "2";
        /**
         * The monthly settlement card number; required when settlement_type is 2.
         * @minLength 1
         */
        monthly_card?: string;
        /** The destination address type: 1 FBA仓库, 2 非FBA地址, 3 沃尔玛仓库, 4 顺丰海外仓, 5 希音仓库. */
        receiver_type: "1" | "2" | "3" | "4" | "5";
        /** The FBA warehouse code; required when receiver_type is 1 (FBA仓库). */
        warehouse_code?: string;
        /** The recipient. address, contact, mobile, and post_code are required for non-FBA destinations. */
        recipient: {
          /**
           * The destination country/region name (English), for example US.
           * @minLength 1
           */
          country: string;
          /**
           * The destination country/region code, for example US.
           * @minLength 1
           */
          country_code: string;
          /** The detailed address. */
          address?: string;
          /** The city. */
          city?: string;
          /** The company name. */
          company?: string;
          /** The contact name. */
          contact?: string;
          /** The mobile number. */
          mobile?: string;
          /** The postal code. */
          post_code?: string;
          /** The province or state. */
          province?: string;
        };
        /** The sender. */
        sender: {
          /**
           * The detailed address.
           * @minLength 1
           */
          address: string;
          /**
           * The contact name.
           * @minLength 1
           */
          contact: string;
          /**
           * The province name in Chinese.
           * @minLength 1
           */
          province: string;
          /**
           * The city name in Chinese.
           * @minLength 1
           */
          city: string;
          /**
           * The county or district name in Chinese.
           * @minLength 1
           */
          county: string;
          /**
           * The mobile number.
           * @minLength 1
           */
          mobile: string;
          /** The company name. */
          company?: string;
          /** The province code. */
          province_code?: string;
          /** The city code. */
          city_code?: string;
          /** The county code. */
          county_code?: string;
        };
        /** The cargo type: 1 普货, 2 带电, 3 带磁, 4 带磁带电. */
        cargo_type: "1" | "2" | "3" | "4";
        /** The cargo name. */
        cargo_name?: string;
        /** The total declared value. */
        total_declared_value: number;
        /** The declared value currency. */
        declared_value_code: "CNY" | "USD" | "HKD" | "EUR";
        /** The product type: A100 FBA跨境特快, A101 FBA跨境标快, S100 FBA跨境快船, S101 FBA跨境普船, S103 跨境整柜, L100 跨境卡航, L101 跨境中欧班列, T100 海运标快, S108 跨境超大件-快船, S109 跨境超大件-普船. */
        product_type: "A100" | "A101" | "S100" | "S101" | "S103" | "L100" | "L101" | "T100" | "S108" | "S109";
        /** The customs declaration mode: agent_declear 非报关件, customer_declear 出口正式报关. */
        customs_type: "agent_declear" | "customer_declear";
        /**
         * The insurance amount in CNY (投保金额).
         * @minLength 1
         */
        declared_value: string;
        /**
         * The domestic pickup mode: 1 客户自送, 2 上门接货, 3 其他方式上门接货.
         * @minimum 1
         * @maximum 3
         */
        pickup_mode: number;
        /**
         * The packages with box dimensions.
         * @minItems 1
         */
        packages: Array<{
          /**
           * The box number (the FBA number or a numeric sequence).
           * @minLength 1
           */
          box_no: string;
          /** The package height in cm. */
          package_high: number;
          /** The package length in cm. */
          package_long: number;
          /** The package gross weight in kg. */
          package_weight: number;
          /** The package net weight in kg. */
          net_weight: number;
          /** The package width in cm. */
          package_width: number;
          /** The SKU. */
          sku?: string;
          /** The English product name. */
          english_name?: string;
          /** The Chinese product name. */
          chinese_name?: string;
          /** The brand. */
          brand?: string;
          /** The model. */
          model?: string;
          /** The material in Chinese. */
          chinese_material?: string;
          /** The material in English. */
          english_material?: string;
          /** The purpose. */
          purpose?: string;
          /** The packaging. */
          packing?: string;
          /** The customs code. */
          customs_code?: string;
          /** The item count per box. */
          number_of_boxes?: string;
          /** The declared value of this package's product. */
          declared_value?: string;
          /** The declared total value. */
          declared_total_value?: string;
          /** The sales link. */
          sales_link?: string;
          /** A picture URL. */
          pic?: string;
        }>;
        /** The FBA info list. */
        bill_fba_list?: Array<{
          /** The FBA number. */
          fba_no: string;
          /** The shipment tracking number. */
          tracking_no: string;
        }>;
        /** The VAT registration number. */
        vat_register_no?: string;
        /** The VAT-registered company name. */
        vat_register_company?: string;
        /** The VAT-registered company address. */
        vat_register_company_addr?: string;
        /** The EORI number. */
        eori?: string;
        /** The clearance mode: 1 关税预付, 2 关税不预付, 3 PVA递延. */
        tax_contain_type?: "1" | "2" | "3";
        /**
         * The appointed pickup time for pickup_mode 3, in YYYY-MM-DD HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        collection_time?: string;
        /** The pickup remark for pickup_mode 3. */
        collection_remark?: string;
        /** The self-delivery tracking number for pickup_mode 1. */
        domestic_courier_number?: string;
        /** The self-delivery carrier code for pickup_mode 1. */
        domestic_courier_code?: string;
        /** A remark. */
        remark?: string;
        /** The designated pickup courier employee code. */
        exclusive_emp_no?: string;
        /** The last-mile carrier: 快递 or 卡车, or the carrier that runs it. */
        terminal_carrier_code?: "UPS" | "FEDEX" | "DHL" | "express" | "Trucking" | "NULL";
        /** The departure point: 86 大陆飞, 852 香港飞; required for product types A100/A101. */
        depart_code?: "86" | "852";
        /** The trunk transport code; required for product types S100/S101/S108/S109. One of carrier_mason 美森正班快船, carrier_mason_ad_hoc 美森统配快船, carrier_mason_timing 美森定时达, carrier_zim 以星快船, carrier_evergreen 长荣快船, carrier_general 海运普船, carrier_fixed_pick_up 普船定提, carrier_general_express 普船快线, air_line 空运专线, air_express_line 空运快线, air_distribution_line 空运统配. */
        shipping_code?: string;
        /** The order source system code. */
        user_app_key?: string;
        /**
         * The requested delivery time in YYYY-MM-DD HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        send_time?: string;
      };
      output: {
        /** The master waybill number. */
        waybillNo: string;
        /** The sub waybill numbers. */
        subWaybillNos?: Array<string>;
        /** The warning message, when any. */
        warningMsg?: string | null;
        /** The compensation standard note. */
        compensationMsg?: string;
      };
    };
    /** Query the selectable delivery window options for an FBA shipment as the carrier agent. */
    "sf_express.freight_crossborder_query_delivery_window_options": {
      input: {
        /**
         * The FBA shipment id.
         * @pattern ^FBA[0-9A-Z]{7,9}$
         */
        fba_shipment_id: string;
      };
      output: {
        /** The selectable delivery windows. */
        deliveryWindowOptions: Array<{
          /** The window start time (UTC). */
          startDate?: string;
          /** The window end time (UTC). */
          endDate?: string;
          /** The option id, used to confirm the window. */
          deliveryWindowOptionId?: string;
          /** The warehouse congestion status, for example AVAILABLE or BLOCKED. */
          availabilityStatus?: string;
          /** The congestion data validity time (UTC). */
          availabilityStatusValidUntilTime?: string;
          /** The deadline for changing to this window (UTC). */
          gracePeriodEndDate?: string;
        }>;
        /** The reference id usable to confirm a delivery window. */
        referenceId?: string;
        /** The FBA number. */
        fbaNo?: string;
        /** Whether the seller allows updates: 0 = no, 1 = yes. */
        sellerAllowCarrierUpdateDw?: number;
      };
    };
    /** Check whether a destination postal code is served for SF cross-border bulky shipments, returning the address info and remote-area flag. */
    "sf_express.freight_crossborder_query_postcode_address": {
      input: {
        /**
         * The postal code, for example 01007.
         * @minLength 1
         */
        city_zip_code: string;
        /**
         * The country code (English), for example US.
         * @minLength 1
         */
        country_code: string;
      };
      output: {
        /** The matching address entries. */
        addresses: Array<{
          /** The postal code. */
          cityZipCode?: string;
          /** The country code. */
          countryCode?: string;
          /** Whether the entry is disabled. */
          disable?: boolean;
          /** The district name in English. */
          distEnName?: string;
          /** Whether the address is a remote area. */
          isIsolated?: boolean;
          /** The province or state name. */
          provinceName?: string;
        }>;
      };
    };
    /** Get the waybill print file download URLs for a print batch created by freight_crossborder_get_print_batch. */
    "sf_express.freight_crossborder_query_print_result": {
      input: {
        /**
         * The print batch number.
         * @minLength 1
         */
        print_batch_no: string;
      };
      output: {
        /** The printable files. */
        files: Array<{
          /** The file sequence number. */
          seqNo: number;
          /** The download token. */
          token: string | null;
          /** The file download URL. */
          url: string | null;
          /** The waybill number the file belongs to. */
          waybillNo: string | null;
        }>;
        /** The batch status. */
        status?: string;
        /** The failure reason, when any. */
        errorReason?: string | null;
      };
    };
    /** Report logistics traces for an SF cross-border bulky shipment, as the carrier agent. Routes are stored newest first; milestone values make the corresponding nodes visible to end customers. */
    "sf_express.freight_crossborder_report_trace": {
      input: {
        /**
         * The SF master waybill number (顺丰母单号).
         * @minLength 1
         */
        reference_no: string;
        /**
         * The reporting agent's short code (代理商简称), for example TWTH.
         * @minLength 1
         */
        client_code: string;
        /**
         * The dynamic route events, newest first.
         * @minItems 1
         */
        routes: Array<{
          /** The operation time as epoch milliseconds. */
          opTime: number;
          /**
           * The operation description (route text).
           * @minLength 1
           */
          opDesc: string;
          /** The customer-visible milestone, when the event matches one. */
          mileStone?: "InfoReceived" | "PickedUp" | "Departure" | "Arrival" | "AvailableForPickup" | "OutForDelivery" | "Delivered" | "Returned" | "Returning";
        }>;
        /**
         * The base route information.
         * @minItems 1
         */
        base_routes: Array<{
          /** The info type. */
          serviceType?: "TransferNo" | "ShipNo" | "FlightNo" | "ISA" | "Port";
          /** The transfer number; required when serviceType is TransferNo. */
          transferNo?: string;
          /** The vessel name; required when serviceType is ShipNo. */
          shipNo?: string;
          /** The flight number; required when serviceType is FlightNo. */
          flightNo?: string;
          /** The estimated departure time in YYYY-MM-DD HH:mm:ss format. */
          etd?: string;
          /** The estimated arrival time in YYYY-MM-DD HH:mm:ss format. */
          eta?: string;
          /** The ISA id (Amazon inbound appointment number). */
          isaId?: string;
          /** The carrier code for TransferNo entries, for example FEDEX, DHL, UPS, TNT, GLS, DPD. */
          carrierCode?: string;
          /** The departure port code for Port entries. */
          departPort?: string;
          /** The arrival port code for Port entries. */
          arrivePort?: string;
        }>;
      };
      output: {
        /** Whether SF accepted the report. */
        accepted: boolean;
        /** The master waybill number, echoed back. */
        referenceNo: string;
      };
    };
    /** Upload proof-of-delivery files for an SF cross-border bulky waybill, as publicly accessible file URLs. */
    "sf_express.freight_crossborder_upload_pod_files": {
      input: {
        /**
         * The SF Express waybill number (顺丰运单号).
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The publicly accessible file URLs.
         * @minItems 1
         */
        file_paths: Array<string>;
      };
      output: {
        /** Whether SF accepted the upload. */
        accepted: boolean;
        /** The waybill number, echoed back. */
        waybillNo: string;
      };
    };
    /** Apply for an additional last-mile fee on an SF Freight forwarding waybill; currently only 入仓垫付 (warehouse entry advance, type 50) is supported. */
    "sf_express.freight_forward_apply_add_fee": {
      input: {
        /**
         * The SF Express waybill number (顺丰运单号).
         * @minLength 1
         */
        waybill_no: string;
        /** The fee type: 50 = 入仓垫付 (warehouse entry advance). */
        fee_type: number;
        /**
         * A publicly accessible URL of the supporting image.
         * @minLength 1
         */
        report_image: string;
        /**
         * The additional fee amount.
         * @exclusiveMinimum 0
         */
        amount: number;
        /**
         * A remark.
         * @maxLength 500
         */
        report_remark?: string;
      };
      output: {
        /** Whether SF accepted the upload. */
        accepted: boolean;
        /** The waybill number, echoed back. */
        waybillNo: string;
      };
    };
    /** Bind the payment of an SF Freight forwarding waybill to a monthly settlement card (月结卡号) so the fee is charged to it. Requires a monthly card. */
    "sf_express.freight_forward_apply_monthly_payment": {
      input: Record<string, unknown>;
      output: {
        /** Whether SF accepted the upload. */
        accepted: boolean;
        /** The waybill number, echoed back. */
        waybillNo: string;
      };
    };
    /** Place a return-receipt order (标快到付) for one or more SF Freight forwarding waybills. */
    "sf_express.freight_forward_place_return_order": {
      input: {
        /**
         * The waybill numbers.
         * @minItems 1
         */
        waybill_nos: Array<string>;
        /**
         * The sender contact name.
         * @minLength 1
         */
        send_contact: string;
        /**
         * The sender mobile number.
         * @minLength 1
         */
        send_mobile: string;
        /**
         * The sender province name.
         * @minLength 1
         */
        send_province: string;
        /**
         * The sender city name.
         * @minLength 1
         */
        send_city: string;
        /**
         * The sender county or district name.
         * @minLength 1
         */
        send_county: string;
        /**
         * The sender detailed address, without province/city/district.
         * @minLength 1
         */
        send_address: string;
      };
      output: {
        /** The order response returned by SF (CreateOrderResponse; its fields are not documented). */
        result: Record<string, unknown>;
      };
    };
    /** Report an exception for an SF Freight forwarding waybill, for example damage, miscount, delay, or a reweigh appeal. delay_days is required for codes SIGN_03/SIGN_05/SIGN_15/TRANSITING_15; weight and sub_items are required for the reweigh codes HANDOVER_06/TRANSITING_17. */
    "sf_express.freight_forward_report_exception": {
      input: {
        /**
         * The SF Express waybill number (顺丰运单号).
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The exception stage: 0 装货交接, 1 运输打卡, 2 货物运达.
         * @minimum 0
         * @maximum 2
         */
        abnormal_type: number;
        /** The exception code: HANDOVER_01 货物损坏, HANDOVER_06 复磅申诉, HANDOVER_07 疫情管控时效延误, HANDOVER_08 货物多件/少件 (装货交接); TRANSITING_10 货物损坏, TRANSITING_12 疫情管控时效延误, TRANSITING_13 货物多件/少件, TRANSITING_14 堵车, TRANSITING_15 事故/封路, TRANSITING_16 违禁品, TRANSITING_17 复磅申诉 (运输打卡); SIGN_01 堵车/事故/封路/天气等延误, SIGN_03 客户节假日停止营业, SIGN_04 无法联系客户, SIGN_05 客户改派送时间, SIGN_07 客户改派送地址, SIGN_13 疫情管控时效延误, SIGN_14 违禁品, SIGN_15 入仓排队时效延误, SIGN_17 客户拒收, SIGN_18 客户要求自取 (货物运达). */
        abnormal_code: "HANDOVER_01" | "HANDOVER_06" | "HANDOVER_07" | "HANDOVER_08" | "TRANSITING_10" | "TRANSITING_12" | "TRANSITING_13" | "TRANSITING_14" | "TRANSITING_15" | "TRANSITING_16" | "TRANSITING_17" | "SIGN_01" | "SIGN_03" | "SIGN_04" | "SIGN_05" | "SIGN_07" | "SIGN_13" | "SIGN_14" | "SIGN_15" | "SIGN_17" | "SIGN_18";
        /** The forwarding supplier code; required for reweigh appeals. */
        supplier_code?: string;
        /**
         * The upload time in YYYY-MM-DD HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        upload_time?: string;
        /** The uploader name. */
        upload_operator?: string;
        /** The exception description. */
        remark?: string;
        /** The weight in kg; required for reweigh codes. */
        weight?: string;
        /** The volume in cm³. */
        volume?: string;
        /** The delay in days; required for the delay codes. */
        delay_days?: number;
        /** Image URLs, joined with English semicolons. */
        pic_url?: string;
        /** The per-piece exception dimensions; required for reweigh codes. */
        sub_items?: Array<{
          /** The length in cm. */
          length: string;
          /** The width in cm. */
          width: string;
          /** The height in cm. */
          height: string;
          /** The piece count. */
          quantity: number;
        }>;
      };
      output: {
        /** Whether SF accepted the upload. */
        accepted: boolean;
        /** The waybill number, echoed back. */
        waybillNo: string;
      };
    };
    /** Get the payment QR code for an unpaid SF Freight forwarding waybill. */
    "sf_express.freight_forward_start_pay": {
      input: {
        /**
         * The SF Express waybill number (顺丰运单号).
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The forwarding supplier code (供应商编码).
         * @minLength 1
         */
        supplier_code: string;
        /**
         * The supplier access code (对接供应商的接入编码) SF issues; sent beside msgData as clientCode.
         * @minLength 1
         */
        client_code: string;
      };
      output: {
        /** The raw payment result returned by SF; carries the QR code information when the waybill is unpaid. */
        result: unknown;
      };
    };
    /** Upload a real-time order status update for an SF Freight forwarding shipment. */
    "sf_express.freight_forward_update_order_status": {
      input: {
        /** The SF Freight forwarding order number (快运转寄订单号). */
        forward_order_id: number;
        /**
         * The SF Express waybill number (顺丰运单号).
         * @minLength 1
         */
        waybill_no: string;
        /** The order status: 40 提货, 41 提货发车, 45 提货交接, 55 确认交接, 57 干线发车, 65 干线到达, 70 派送开始, 75 派件入仓. */
        status: number;
        /**
         * A remark.
         * @maxLength 256
         */
        remark?: string;
        /**
         * The time the status changed in YYYY-MM-DD HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        operate_time?: string;
        /** The operator, for example the driver or dispatcher name. */
        operator?: string;
        /** A contact name, for example the business contact or regional manager. */
        contact?: string;
        /** The contact phone number. */
        contact_phone?: string;
        /** Publicly accessible image URLs; SF fetches them asynchronously. */
        pic_urls?: Array<string>;
        /** The actual box count of the waybill. */
        number?: number;
        /** The box codes actually scanned at pickup handover. */
        box_nos?: Array<string>;
        /**
         * The waybill verification result at pickup handover: 0 = information correct, 1 = waybill information wrong (then abnormal is required).
         * @minimum 0
         * @maximum 1
         */
        is_check?: number;
        /**
         * The abnormality remark, including major incidents.
         * @maxLength 512
         */
        abnormal?: string;
        /** The verified total volume in cm³; may be reported at pickup handover. */
        volume?: number;
        /** The verified total weight in kg; may be reported at pickup handover. */
        weight?: number;
        /** The latitude of the operation. */
        latitude?: number;
        /** The longitude of the operation. */
        longitude?: number;
        /**
         * The operating city.
         * @maxLength 32
         */
        city?: string;
        /**
         * The major event note.
         * @maxLength 256
         */
        important_event_remark?: string;
        /** The SISP route text; only for the 干配转顺心 business line. */
        sisp_router?: string;
        /** The SISP route extension info; only for the 干配转顺心 business line. */
        sisp_router_extend?: string;
      };
      output: {
        /** Whether SF accepted the upload. */
        accepted: boolean;
        /** The waybill number, echoed back. */
        waybillNo: string;
      };
    };
    /** Upload the pickup driver information for an SF Freight forwarding order once the carrier assigns the driver. */
    "sf_express.freight_forward_upload_driver": {
      input: {
        /** The SF Freight forwarding order number (快运转寄订单号). */
        forward_order_id: number;
        /**
         * The SF Express waybill number (顺丰运单号).
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The driver name.
         * @minLength 1
         */
        driver: string;
        /**
         * The driver mobile number.
         * @minLength 1
         */
        driver_mobile: string;
        /**
         * The vehicle plate number, for example 粤B1F5489.
         * @minLength 1
         */
        license_plate_number: string;
        /** The carrier company name. */
        carrier_company?: string;
        /** The carrier company phone number. */
        carrier_phone?: string;
      };
      output: {
        /** Whether SF accepted the upload. */
        accepted: boolean;
        /** The forwarding order number, echoed back. */
        forwardOrderId: number;
        /** The waybill number, echoed back. */
        waybillNo: string;
      };
    };
    /** Upload the sign-back receipt number for an SF Freight forwarding waybill. */
    "sf_express.freight_forward_upload_receipt": {
      input: {
        /**
         * The SF Express waybill number (顺丰运单号).
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The sign-back receipt waybill number (签回单号).
         * @minLength 1
         */
        return_waybill_no: string;
        /**
         * The carrier company name, for example 顺丰物流.
         * @minLength 1
         */
        company: string;
      };
      output: {
        /** Whether SF accepted the upload. */
        accepted: boolean;
        /** The waybill number, echoed back. */
        waybillNo: string;
      };
    };
    /** Upload route events for an SF Freight forwarding return receipt. Upload incrementally, newest first; cover all loading, unloading, out-for-delivery, and signed nodes. */
    "sf_express.freight_forward_upload_return_route": {
      input: {
        /**
         * The return-receipt master waybill number (回单号).
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The route entries.
         * @minItems 1
         */
        router_infos: Array<{
          /**
           * The unique id of this route entry, used by SF to deduplicate; a UUID works.
           * @minLength 1
           */
          uniqueId: string;
          /** The waybill status when the route happened; 0 = in transit. */
          status: number;
          /**
           * The operator name or employee code.
           * @minLength 1
           */
          operator: string;
          /**
           * The time the route event actually happened in YYYY-MM-DD HH:mm:ss format.
           * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
           */
          operateTime: string;
          /**
           * The route description, following the official node wording (装车/出运/卸车/派件出仓/签收).
           * @minLength 1
           */
          context: string;
          /**
           * The city where the route event happened.
           * @minLength 1
           */
          cityName: string;
          /**
           * The province where the route event happened.
           * @minLength 1
           */
          provinceName: string;
          /**
           * The county where the route event happened.
           * @minLength 1
           */
          countyName: string;
        }>;
      };
      output: {
        /** Whether SF accepted the upload. */
        accepted: boolean;
        /** The return-receipt waybill number, echoed back. */
        waybillNo: string;
      };
    };
    /** Upload route events for an SF Freight forwarding waybill. Upload incrementally, newest first; cover all loading, unloading, and out-for-delivery nodes (use freight_forward_upload_sign_image for the signed node). */
    "sf_express.freight_forward_upload_route": {
      input: {
        /**
         * The master waybill number (母单).
         * @minLength 1
         */
        waybill_no: string;
        /** The sub waybill number; when set, the routes are uploaded for the sub waybill. */
        sub_waybill_no?: string;
        /**
         * The current waybill signing status; only 0 (in transit) is supported.
         * @minimum 0
         * @maximum 0
         */
        status: number;
        /**
         * The route entries.
         * @minItems 1
         */
        router_infos: Array<{
          /**
           * The unique id of this route entry, used by SF to deduplicate; a UUID works.
           * @minLength 1
           */
          uniqueId: string;
          /** The waybill status when the route happened; 0 = in transit. */
          status: number;
          /**
           * The operator name or employee code.
           * @minLength 1
           */
          operator: string;
          /**
           * The time the route event actually happened in YYYY-MM-DD HH:mm:ss format.
           * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
           */
          operateTime: string;
          /**
           * The route description, following the official node wording (装车/出运/卸车/派件出仓/签收).
           * @minLength 1
           */
          context: string;
          /**
           * The city where the route event happened.
           * @minLength 1
           */
          cityName: string;
          /**
           * The province where the route event happened.
           * @minLength 1
           */
          provinceName: string;
          /**
           * The county where the route event happened; required for return-receipt routes.
           * @minLength 1
           */
          countyName?: string;
        }>;
      };
      output: {
        /** Whether SF accepted the upload. */
        accepted: boolean;
        /** The master waybill number, echoed back. */
        waybillNo: string;
      };
    };
    /** Upload the recipient's signature or other proof-of-delivery images for an SF Freight forwarding waybill; SF reviews them and then marks the waybill signed. Image URLs must be publicly accessible. */
    "sf_express.freight_forward_upload_sign_image": {
      input: {
        /**
         * The SF Express waybill number (顺丰运单号).
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The scan time in YYYY-MM-DD HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        scan_time: string;
        /**
         * The waybill sign image URLs.
         * @minItems 1
         */
        pic_urls: Array<string>;
        /** The scanning station code. */
        scan_station?: string;
        /** The scanning operator employee code. */
        scan_operator?: string;
        /** The scanning regional office code. */
        scan_area_code?: string;
        /** The sign-back photo URLs. */
        sign_back_pics?: Array<string>;
        /** The delivery photo URLs. */
        deliver_goods_pics?: Array<string>;
        /**
         * A remark.
         * @maxLength 512
         */
        remark?: string;
        /** Whether the uploaded sign images skip manual review; default false. */
        auto_audit?: boolean;
        /** Whether OCR review applies; default true. */
        ocr_auto_audit?: boolean;
        /** The delay explanation; required when scan_time is later than the promised delivery time. */
        delay_remark?: string;
        /** The upload latitude. */
        latitude?: number;
        /** The upload longitude. */
        longitude?: number;
        /**
         * Whether this is the original receipt: 1 original, 0 lost or other.
         * @minimum 0
         * @maximum 1
         */
        original?: number;
        /**
         * The operating city.
         * @maxLength 32
         */
        city?: string;
        /** The SISP route text; only for the 干配转顺心 business line. */
        sisp_router?: string;
        /** The SISP route extension map; only for the 干配转顺心 business line. */
        sisp_router_extend?: Record<string, unknown>;
      };
      output: {
        /** Whether SF accepted the upload. */
        accepted: boolean;
        /** The waybill number, echoed back. */
        waybillNo: string;
      };
    };
    /** Upload one vehicle track point for an SF Freight forwarding waybill. */
    "sf_express.freight_forward_upload_track": {
      input: {
        /**
         * The SF Express waybill number (顺丰运单号).
         * @minLength 1
         */
        waybill_no: string;
        /** The time the position was recorded, as epoch milliseconds. */
        timestamp: number;
        /**
         * The position source, for example GPS, 人工维护, or 定点签到.
         * @minLength 1
         */
        source: string;
        /** The check-in type: 1 发车, 2 点到, 3 派送中. */
        trace_type: number;
        /** The vehicle plate number, for example 粤B88888. */
        license_plate_number?: string;
        /** The driver name. */
        driver?: string;
        /** The driver phone number. */
        driver_phone?: string;
        /** The province name. */
        province?: string;
        /** The city name. */
        city?: string;
        /** The county name. */
        county?: string;
        /** The current address. */
        address?: string;
        /** The latitude. */
        latitude?: number;
        /** The longitude. */
        longitude?: number;
        /** The elevation in meters. */
        elevation?: number;
        /** The coordinate system: 1 百度, 2 高德, 3 Google. */
        lat_long_type?: number;
        /** A remark. */
        remark?: string;
        /** The SISP route text; only for the 干配转顺心 business line. */
        sisp_router?: string;
        /** The SISP route extension map; only for the 干配转顺心 business line. */
        sisp_router_extend?: Record<string, unknown>;
      };
      output: {
        /** Whether SF accepted the upload. */
        accepted: boolean;
        /** The waybill number, echoed back. */
        waybillNo: string;
      };
    };
    /** Upload multiple vehicle track points for one SF Freight forwarding waybill in a single call. All track points must belong to the same waybill number. */
    "sf_express.freight_forward_upload_track_batch": {
      input: {
        /**
         * The track points, all for the same waybill number.
         * @minItems 1
         */
        tracks: Array<{
          /**
           * The SF Express waybill number (顺丰运单号).
           * @minLength 1
           */
          waybillNo: string;
          /** The time the position was recorded, as epoch milliseconds. */
          timestamp: number;
          /** The vehicle plate number, for example 粤B88888. */
          licensePlateNumber?: string;
          /** The driver name. */
          driver?: string;
          /** The driver phone number. */
          driverPhone?: string;
          /** The province name. */
          province?: string;
          /** The city name. */
          city?: string;
          /** The county name. */
          county?: string;
          /** The current address. */
          address?: string;
          /** The latitude. */
          latitude?: number;
          /** The longitude. */
          longitude?: number;
          /** The elevation in meters. */
          elevation?: number;
          /** The coordinate system: 1 百度, 2 高德, 3 Google. */
          latLongType?: number;
          /**
           * The position source, for example GPS, 人工维护, or 定点签到.
           * @minLength 1
           */
          source: string;
          /** A remark. */
          remark?: string;
          /** The check-in type: 1 发车, 2 点到, 3 派送中. */
          traceType: number;
          /** The SISP route text; only for the 干配转顺心 business line. */
          sispRouter?: string;
          /** The SISP route extension map; only for the 干配转顺心 business line. */
          sispRouterExtend?: Record<string, unknown>;
        }>;
      };
      output: {
        /** Whether SF accepted the upload. */
        accepted: boolean;
        /** The number of track points uploaded. */
        count: number;
      };
    };
    /** Upload a remark for an SF Freight forwarding waybill. */
    "sf_express.freight_forward_upload_waybill_remark": {
      input: {
        /**
         * The SF Express waybill number (顺丰运单号).
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The operator name.
         * @minLength 1
         */
        operator: string;
        /**
         * The remark content.
         * @minLength 1
         * @maxLength 500
         */
        remark: string;
      };
      output: {
        /** Whether SF accepted the upload. */
        accepted: boolean;
        /** The waybill number, echoed back. */
        waybillNo: string;
      };
    };
    /** Get the latest dispatch result of an SF Freight LTL order placed with courier call (下call), including the assigned waybill numbers. */
    "sf_express.freight_get_ltl_order_result": {
      input: {
        /**
         * The client order number (客户订单号); must be unique per partnerID.
         * @minLength 1
         */
        order_id: string;
      };
      output: {
        /** The client order number, echoed back. */
        orderId: string;
        /** The SF master waybill number assigned to the order. */
        waybillNo?: string;
        /** The sub waybill numbers. */
        subWaybillNos?: Array<string>;
        /** The sign-back receipt waybill number, when one was requested. */
        returnTrackingNo?: string;
        /** The destination area code. */
        destCode?: string;
        /** The coverage verdict: 1 = manual review (人工确认), 2 = deliverable (可收派), 3 = not deliverable. */
        filterResult?: number;
        /** The reason code or note when the order is not deliverable. */
        filterRemark?: string;
        /** The address mapping code. */
        mappingMark?: string;
        /** The third-party freight payment URL. */
        paymentLink?: string;
        /** The route label information used for waybill printing; carries invokeResult plus the printable route-label fields. */
        rlsInfo?: Record<string, unknown>;
        /** The route label information for the sign-back receipt waybill, returned when a sign-back was requested. */
        signBackRlsInfo?: Record<string, unknown>;
      };
    };
    /** List the transfer waybill numbers (转单号) of an SF cross-border bulky mother waybill. */
    "sf_express.freight_list_crossborder_transfer_nos": {
      input: {
        /**
         * The SF mother waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The order placement time, for example 2023-03-01 22:20.
         * @minLength 1
         */
        order_time?: string;
      };
      output: {
        /** The recipient city. */
        receiverCity: string;
        /** The sender city. */
        senderCity: string;
        /** The number of transfer waybills. */
        waybillAmount: number;
        /** How many transfer waybills are out for delivery. */
        waybillDelivering: number;
        /** How many transfer waybills are signed for. */
        waybillReceived: number;
        /** How many transfer waybills are in transit. */
        waybillTransporting: number;
        /** The transfer waybills. */
        childrenList: Array<{
          /** The shipment status: 10 = 已揽收, 20 = 运输中, 50 = 已签收. */
          orderStatus: number;
          /** The recipient city. */
          receiverCity: string;
          /** The sender city. */
          senderCity: string;
          /** The transfer waybill number. */
          waybillNo: string;
        }>;
      };
    };
    /** Mark an install order's goods as arrived (到货通知), optionally completing the pickup address. Only the not-arrived to arrived transition is supported. */
    "sf_express.freight_notify_install_arrival": {
      input: Record<string, unknown>;
      output: {
        /** The install order number marked as arrived, when given. */
        orderId: string;
        /** The client order number marked as arrived, when given. */
        outerOrderId: string;
        /** Whether SF accepted the request. */
        acknowledged: boolean;
      };
    };
    /** Query the route of an SF cross-border bulky (大件跨境) waybill. For transfer waybill numbers (转单号), use freight_query_crossborder_transfer_routes. */
    "sf_express.freight_query_crossborder_route": {
      input: {
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The order placement time, for example 2023-03-01 22:20.
         * @minLength 1
         */
        order_time?: string;
      };
      output: {
        /** The SF waybill number. */
        waybillNo: string;
        /** The cargo volume in cubic centimeters. */
        cargoVolume?: number;
        /** The cargo weight in kilograms. */
        cargoWeight?: number;
        /** The cargo item count. */
        cargoAmount?: number;
        /** The delivery or expected delivery time as epoch milliseconds; see timeTag. */
        expectDeliveryTime?: number;
        /** The shipment status: 10 = 已揽收, 20 = 运输中, 50 = 已签收. */
        orderStatus?: string;
        /** The payment method. */
        payMethod?: string;
        /** The sender city. */
        senderCity?: string;
        /** The recipient city. */
        receiverCity?: string;
        /** The route events. */
        routeInfos?: Array<{
          /** The route description. */
          info: string;
          /** The shipment status: 10 = 已揽收, 20 = 运输中, 50 = 已签收. */
          status?: number;
          /** The status description. */
          statusDesc: string;
          /** The event time as epoch milliseconds. */
          time?: number;
          /** The operation code. */
          opCode?: string;
        }>;
        /** What expectDeliveryTime means, for example 签收时间. */
        timeTag?: string;
        /** The number of transfer waybills (转单号). */
        waybillAmount?: number;
        /** The transfer waybill numbers. */
        subWaybillNos?: Array<string>;
        /** How many transfer waybills are signed for. */
        waybillReceived?: number;
        /** How many transfer waybills are in transit. */
        waybillTransporting?: number;
        /** How many transfer waybills are out for delivery. */
        waybillDelivering?: number;
      };
    };
    /** Query the route events of a transfer waybill number (转单号) for an SF cross-border bulky shipment. */
    "sf_express.freight_query_crossborder_transfer_routes": {
      input: {
        /**
         * The transfer waybill number (转单号).
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The order placement time, for example 2023-03-01 22:20.
         * @minLength 1
         */
        order_time?: string;
      };
      output: {
        /** The route events. */
        routes: Array<{
          /** The route description. */
          info: string;
          /** The shipment status: 10 = 已揽收, 20 = 运输中, 50 = 已签收. */
          status?: number;
          /** The status description. */
          statusDesc: string;
          /** The event time as epoch milliseconds. */
          time?: number;
          /** The operation code. */
          opCode?: string;
        }>;
      };
    };
    /** Query the home-delivery service rules (宅配规则) bound to one or more SF monthly cards. */
    "sf_express.freight_query_delivery_rules": {
      input: {
        /**
         * The SF monthly settlement card numbers (月结卡号).
         * @minItems 1
         */
        monthly_cards: Array<string>;
      };
      output: {
        /** The service rules bound to the given cards. */
        rules: Array<{
          /** The service rule ID (upstream field name seviceId). */
          seviceId: string;
          /** The service rule name. */
          serviceName: string;
          /** The monthly card the rule is bound to. */
          monthlyCard: string;
        }>;
      };
    };
    /** Query an SF install order's status and fee breakdown by client order number. */
    "sf_express.freight_query_install_order": {
      input: {
        /**
         * The client order number.
         * @minLength 1
         */
        outer_order_id: string;
      };
      output: {
        /** The SF install order number. */
        orderId: string;
        /** The client order number, echoed back. */
        outerOrderId: string;
        /** The install status: 0 已下单(待分配师傅), 1 已提货, 2 预约中, 3 已预约, 5 已完工, 6 异常, 7 已取消, 8 已分配安装师傅, 9 已上门, 10 已检查. */
        installStatus: string;
        /** The order fee breakdown. */
        feeList: Array<{
          /** The fee name, for example 安装费. */
          feeName: string;
          /** The fee type code, for example JZ01. */
          feeTypeCode: string;
          /** The fee amount in CNY; null when SF omits it. */
          feeAmt: number | null;
        }>;
      };
    };
    /** Query the full SF recovery product catalog (回收品类). The list is large and returned in full; cache it instead of calling repeatedly. */
    "sf_express.freight_query_recovery_products": {
      input: Record<string, never>;
      output: {
        /** The recovery products. */
        products: Array<{
          /** The business name, for example 电视机. */
          businessName: string;
          /** The business code. */
          businessCode: string;
          /** The category name, for example 小米. */
          productCateName: string;
          /** The category code. */
          productCateCode: string;
          /** The category attributes. */
          categoryList: Array<{
            /** The attribute name. */
            cateName: string;
            /** The attribute value. */
            cateValue: string;
          }>;
          /** The recovery category SKU used when ordering. */
          productSku: string;
        }>;
      };
    };
    /** Query the standard base freight price for an SF Freight product between two addresses. At least one of weight, size, or declare_value is required for pricing. */
    "sf_express.freight_query_standard_price": {
      input: Record<string, unknown>;
      output: {
        /** The total base freight price. */
        totalPrice: number;
        /** The payment currency; empty means the payer country's currency. */
        currencyType: string;
        /** The exchange rate applied. */
        rate: number;
      };
    };
    /** Query an SF Freight truckload order by client order number; pass waybill_no as well when you have it. */
    "sf_express.freight_query_tl_order": {
      input: {
        /**
         * The client order number.
         * @minLength 1
         */
        order_id: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no?: string;
      };
      output: {
        /** The client order number, echoed back. */
        orderId: string;
        /** The SF waybill number; present when one was generated. */
        waybillNo: string | null;
        /** The sign-back receipt waybill number, when the sign-back service applies. */
        signBackWaybillNo: string | null;
      };
    };
    /** Register an SF Freight waybill for waybill picture push. The picture push callback must be configured in the SF console before pushes arrive. */
    "sf_express.freight_register_ltl_picture_push": {
      input: {
        /**
         * The client order number (客户订单号); must be unique per partnerID.
         * @minLength 1
         */
        order_id: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The picture type codes to push, for example 68 (waybill image), per the SF 图片查询 documentation.
         * @minItems 1
         */
        image_types: Array<string>;
      };
      output: {
        /** The registered client order number, echoed back. */
        orderId: string;
        /** The registered waybill number, echoed back. */
        waybillNo: string;
      };
    };
    /** Reply to an SF Freight work order, identified by work_order_id or report_source_no (at least one). */
    "sf_express.freight_reply_work_order": {
      input: Record<string, unknown>;
      output: {
        /** The reply id, echoed back. */
        replyId: string;
      };
    };
    /** Report a work order (工单) about an SF Freight shipment to SF customer service. */
    "sf_express.freight_report_work_order": {
      input: {
        /**
         * The SF waybill or order number the work order is about.
         * @minLength 1
         */
        order_no: string;
        /**
         * The reporter name.
         * @minLength 1
         */
        creator: string;
        /**
         * The reporter contact number.
         * @minLength 1
         */
        creator_phone?: string;
        /**
         * The first-level voice category (一级声音), for example 预约异常.
         * @minLength 1
         */
        category_one: string;
        /**
         * The second-level voice category (二级声音), for example 客户电话错误.
         * @minLength 1
         */
        category_two: string;
        /**
         * The third-level voice category (三级声音).
         * @minLength 1
         */
        category_three?: string;
        /** The urgency: normal (普通) or urgent (紧急). */
        urgency: "normal" | "urgent";
        /**
         * The work order content.
         * @minLength 1
         */
        content: string;
        /**
         * Up to 6 picture URLs, each at most 10MB.
         * @maxItems 6
         */
        pics?: Array<string>;
        /** The required handling time limit in minutes. */
        handle_time_limit_minutes?: number;
        /**
         * The third-party work order number (第三方工单唯一编码); used to correlate later work order interactions.
         * @minLength 1
         */
        report_source_no: string;
      };
      output: {
        /** The SF work order id. */
        workOrderId: string;
      };
    };
    /** Apply for an add-fee on a bidding install order as the supplier (供应商侧发起增加费用). */
    "sf_express.freight_supplier_apply_add_fee": {
      input: {
        /**
         * The install order number.
         * @minLength 1
         */
        order_no: string;
        /**
         * The unique add-fee serial number for this application.
         * @minLength 1
         */
        add_fee_no: string;
        /** The operation: 0 = 申请增加费用 (apply), 1 = 取消增加费用 (cancel). */
        function_flag: "0" | "1";
        /**
         * The add-fee amount in CNY, up to 2 decimal places.
         * @exclusiveMinimum 0
         */
        add_amt: number;
        /** The add-fee reason. */
        remark?: string;
        /** The add-fee image URLs, comma-separated. */
        img_url?: string;
      };
      output: {
        /** The SF add-fee serial number; keep it for reconciliation. */
        sfAddFeeNo: string | null;
      };
    };
    /** Query the result of a supplier add-fee application (增加费用结果查询); the fallback when the result push or report fails. */
    "sf_express.freight_supplier_query_add_fee_result": {
      input: {
        /**
         * The install order number.
         * @minLength 1
         */
        order_no: string;
        /**
         * The add-fee serial number to query.
         * @minLength 1
         */
        add_fee_no: string;
      };
      output: {
        /** The result: 0 待处理, 1 用户同意, 2 用户拒绝, 3 师傅取消. */
        detailResult: string;
        /** The rejection reason when detailResult is 2. */
        remark: string | null;
        /** The add-fee amount in CNY. */
        addAmt: number | null;
        /** The refund amount in CNY, when present. */
        refundAmt: number | null;
      };
    };
    /** Query the appointment times a supplier's master may offer for an install task (送装协同可预约时间). */
    "sf_express.freight_supplier_query_appointment_times": {
      input: {
        /**
         * The SF master waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The task code identifying the install task.
         * @minLength 1
         */
        task_code: string;
      };
      output: {
        /** The bookable days. */
        days: Array<{
          /** The bookable date in yyyy-MM-dd format. */
          day: string;
          /** The bookable periods. */
          periods: Array<{
            /** The period start in HH:mm format. */
            start: string;
            /** The period end in HH:mm format. */
            end: string;
          }>;
        }>;
      };
    };
    /** Report an install-task operation node to SF as the supplier (操作节点回传): assign master, pickup, appointment, arrival check, completion, review, fault detection, and more. Required fields depend on operate_code; images are required for codes 3, 17, 20, 21. */
    "sf_express.freight_supplier_report_operation_node": {
      input: {
        /**
         * The SF master waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The task code identifying the install task.
         * @minLength 1
         */
        task_code: string;
        /** The operation code: 1 分配师傅, 3 完工, 9 提货, 10 预约成功, 14 预约失败, 16 上门打卡, 17 检查, 18 重新指派师傅, 20 好评返现, 21 检测, 22 下单结果回传, 23 配件返厂. */
        operate_code: number;
        /**
         * The operation time in yyyy-MM-dd HH:mm:ss format.
         * @minLength 1
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        operate_time: string;
        /**
         * The operation description.
         * @minLength 1
         */
        content: string;
        /**
         * The install master name (or the operator before one is assigned); required for every code except 22.
         * @minLength 1
         */
        install_master?: string;
        /**
         * The install master contact; required for every code except 18 and 22.
         * @minLength 1
         */
        install_contact?: string;
        /**
         * The install master's emergency contact; used with code 1.
         * @minLength 1
         */
        emerg_contact_phone?: string;
        /**
         * The appointment window start; required for code 10.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        app_start_time?: string;
        /**
         * The appointment window end; required for code 10.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        app_end_time?: string;
        /** The appointment failure reason: 1 电话不通, 2 电话错误, 3 未确定安装时间, 4 产品未到货, 5 暂未装修好; used with code 14. */
        biz_exception_code?: "1" | "2" | "3" | "4" | "5";
        /**
         * The operation image URLs, up to 10; required for codes 3, 17, 20, 21.
         * @maxItems 10
         */
        images?: Array<string>;
        /** The operation video URL; used with code 3. */
        video_url?: string;
        /** The machine SN code; used with code 3. */
        sn?: string;
        /**
         * The fault causes, up to 3; required for code 21.
         * @maxItems 3
         */
        fault_cause?: Array<string>;
        /** Whether replacement parts must be sent; required for code 21. */
        is_send_part?: boolean;
        /** Whether the customer bought the parts themselves; required for code 21. */
        is_self_purchase_part?: boolean;
        /** The part models; required for code 21 when is_send_part or is_self_purchase_part is set. */
        part_models?: Array<string>;
        /** The self-purchased part amount in CNY; required for code 21 when is_self_purchase_part is set. */
        part_amount?: number;
        /** The order result: 1 下单成功, 2 下单失败; required for code 22. */
        order_status?: "1" | "2";
        /** The return logistics entries; required for code 23. */
        part_logistics_infos?: Array<{
          /**
           * The part return number from the install task push.
           * @minLength 1
           */
          recycle_no: string;
          /**
           * The carrier name.
           * @minLength 1
           */
          logistics_name: string;
          /**
           * The return waybill number.
           * @minLength 1
           */
          waybill_no: string;
          /**
           * The return waybill photos, up to 3.
           * @maxItems 3
           */
          images: Array<string>;
        }>;
      };
      output: {
        /** The waybill number the report applied to. */
        waybillNo: string;
        /** The task code the report applied to. */
        taskCode: string;
        /** Whether SF accepted the request. */
        acknowledged: boolean;
      };
    };
    /** Update an install order's customer info, non-SF logistics info, or cargo images. Customer and logistics info can only change before a master is assigned; cargo images can change until the waybill is signed. */
    "sf_express.freight_update_install_order": {
      input: Record<string, unknown>;
      output: {
        /** The waybill number the update applied to, when given. */
        waybillNo: string;
        /** The install order number the update applied to, when given. */
        orderId: string;
        /** The client order number the update applied to, when given. */
        outerOrderId: string;
        /** Whether SF accepted the request. */
        acknowledged: boolean;
      };
    };
    /** Allocate additional child waybill numbers (子单号) for an existing SF Express order, at most 20 per call. */
    "sf_express.get_sub_waybill_nos": {
      input: {
        /**
         * The client order number.
         * @minLength 1
         * @maxLength 64
         */
        order_id: string;
        /**
         * The number of child waybill numbers to allocate; at most 20 per call.
         * @maximum 20
         * @exclusiveMinimum 0
         */
        parcel_qty: number;
        /** Existing waybill numbers and per-package dimensions; required when confirming an order, and used for bringing your own waybill numbers when creating one. */
        waybill_no_info_list?: Array<{
          /** The waybill number type: 1 = mother (母单), 2 = child (子单), 3 = sign-back (签回单). */
          waybill_type: number;
          /**
           * The SF waybill number.
           * @minLength 1
           */
          waybill_no?: string;
          /**
           * The box number; unique per monthly card.
           * @minLength 1
           */
          box_no?: string;
          /** The package length in centimeters. */
          length?: number;
          /** The package width in centimeters. */
          width?: number;
          /** The package height in centimeters. */
          height?: number;
          /** The package weight in kilograms. */
          weight?: number;
        }>;
      };
      output: {
        /** The client order number echoed back. */
        orderId: string;
        /** The number of child waybill numbers allocated. */
        parcelQty: number | null;
        /** The allocated SF waybill numbers. */
        waybillNoInfoList: Array<{
          /** The waybill number type: 1 = mother (母单), 2 = child (子单), 3 = sign-back (签回单). */
          waybillType?: number;
          /** The SF waybill number. */
          waybillNo: string;
          /** The box number. */
          boxNo?: string;
        }>;
      };
    };
    /** Intercept, redirect, return, or adjust an in-transit SF Express waybill (截单转寄退回), for example redirecting it to a new address or returning it to the sender. Only for waybills already picked up; cancel an unshipped order with update_order instead. */
    "sf_express.intercept_order": {
      input: {
        /**
         * The SF Express waybill number (顺丰运单号).
         * @minLength 1
         */
        waybill_no: string;
        /** The instruction type: redirect (转寄), return (退回), priority (优派), redeliver (再派), change_to_self_pickup (改自取, pair with self_pick_point), change_to_door (改派送), change_delivery_time (更改派送时间), change_recipient (修改收件人信息), change_pay_method (更改付款方式), change_cod (修改代收货款), or void (作废). */
        action_type: "redirect" | "return" | "priority" | "redeliver" | "change_to_self_pickup" | "change_to_door" | "change_delivery_time" | "change_recipient" | "change_pay_method" | "change_cod" | "void";
        /** The initiator: sender (寄方), recipient (收方), or third_party (第三方). */
        role: "sender" | "recipient" | "third_party";
        /** The payment mode: sender_cash (寄付现结), recipient_cash (到付现结), sender_to_third_monthly (寄付转第三方月结), or sender_monthly (寄付月结). */
        pay_mode: "sender_cash" | "recipient_cash" | "sender_to_third_monthly" | "sender_monthly";
        /**
         * The monthly settlement card number; required when paying by monthly card or changing the COD amount.
         * @minLength 1
         */
        monthly_card_no?: string;
        /**
         * The product type.
         * @minLength 1
         */
        product_type?: string;
        /** The new COD (代收货款) amount for change_cod. */
        cod_amount?: number;
        /**
         * The requested delivery date in YYYY-MM-DD format.
         * @format date
         */
        deliver_date?: string;
        /**
         * The earliest delivery time, for example 09:00.
         * @pattern ^\d{2}:\d{2}$
         */
        deliver_time_min?: string;
        /**
         * The latest delivery time, for example 12:00.
         * @pattern ^\d{2}:\d{2}$
         */
        deliver_time_max?: string;
        /** The self-pickup point type: partner_point (合作点), locker (快递柜), site (网点), or transfer_center (中转场). */
        self_pick_point?: "partner_point" | "locker" | "site" | "transfer_center";
        /** The new destination address; required for redirect (转寄) and return (退回) instructions, omitted when cancelling one. */
        new_dest_address?: {
          /**
           * The province name, for example 广东省.
           * @minLength 1
           */
          province: string;
          /**
           * The city name, for example 深圳市.
           * @minLength 1
           */
          city: string;
          /**
           * The district name, for example 南山区.
           * @minLength 1
           */
          county: string;
          /**
           * The detailed street address without province/city/district.
           * @minLength 1
           */
          address: string;
          /**
           * The contact person name.
           * @minLength 1
           */
          contact?: string;
          /**
           * The contact phone number.
           * @minLength 1
           */
          phone?: string;
          /**
           * The country name; defaults to China.
           * @minLength 1
           */
          country?: string;
          /**
           * The country code; defaults to CN.
           * @minLength 1
           */
          country_code?: string;
          /**
           * The company name.
           * @minLength 1
           */
          company?: string;
          /**
           * The site code, for example 755WQ.
           * @minLength 1
           */
          area_code?: string;
          /**
           * The city code.
           * @minLength 1
           */
          location_code?: string;
        };
        /** Whether to cancel a previously issued redirect or return instruction instead of issuing one. */
        cancel?: boolean;
        /**
         * The instruction code (cusId) returned when the redirect or return was issued; required when cancel is true.
         * @minLength 1
         */
        command_id?: string;
      };
      output: {
        /** The instruction code; keep it to cancel the instruction later. */
        cusId?: string;
        /** The fee for the instruction. */
        amount?: number | null;
        /** The fee addition info. */
        freightAdditionInfoResp?: {
          /** The estimated interception site code. */
          interceptionDeptCode?: string;
          /** Whether the interception site is a transfer center: 1 = yes. */
          transferFlg?: string;
        };
      };
    };
    /** List a merchant's published custom print templates with their placeholder fields (ISV 自定义模板列表). */
    "sf_express.list_print_templates": {
      input: {
        /**
         * The merchant account the ISV registered for this seller (isv商家账号).
         * @minLength 1
         */
        seller_user_id: string;
        /** The standard template code: fm_76130_standard (76mm*130mm), fm_150_standard (100mm*150mm), fm_180_standard (100mm*180mm), fm_210_standard (100mm*210mm), fm_76165_standard1 (76mm*165mm 一联), fm_76165_standard2 (76mm*165mm 二联). */
        standard_template_code?: "fm_76130_standard" | "fm_150_standard" | "fm_180_standard" | "fm_210_standard" | "fm_76165_standard1" | "fm_76165_standard2";
      };
      output: {
        /** The custom templates. */
        templates: Array<{
          /** The custom template name. */
          customTemplateName: string;
          /** The custom template code. */
          customTemplateCode: string;
          /** The standard template code this custom template derives from. */
          standardTemplateCode: string;
          /** The placeholder variable names available in the custom area. */
          placeholderKeys?: Array<string>;
        }>;
      };
    };
    /** Validate whether an SF Express order would be accepted (预下单) — checks cargo, monthly card, address reachability, and number controls — without creating it, and returns the available service time windows. */
    "sf_express.pre_order": {
      input: {
        /**
         * The client order number.
         * @minLength 1
         * @maxLength 64
         */
        order_id: string;
        /** The SF product type (快件产品类别) code from the SF product table. */
        express_type_id: number;
        /** The sender (寄件方) contact and address. tel and mobile are alternatives. */
        sender: {
          /**
           * The landline phone number.
           * @minLength 1
           */
          tel?: string;
          /**
           * The mobile phone number.
           * @minLength 1
           */
          mobile?: string;
          /**
           * The standard province name, for example 广东省.
           * @minLength 1
           */
          province: string;
          /**
           * The standard city name, for example 深圳市.
           * @minLength 1
           */
          city: string;
          /**
           * The standard district or county name, for example 南山区.
           * @minLength 1
           */
          county?: string;
          /**
           * The detailed street address, for example 广东省深圳市福田区新洲十一街万基商务大厦10楼.
           * @minLength 1
           */
          address: string;
        };
        /** The recipient (到件方) contact and address. tel and mobile are alternatives. */
        recipient: {
          /**
           * The landline phone number.
           * @minLength 1
           */
          tel?: string;
          /**
           * The mobile phone number.
           * @minLength 1
           */
          mobile?: string;
          /**
           * The standard province name, for example 广东省.
           * @minLength 1
           */
          province: string;
          /**
           * The standard city name, for example 深圳市.
           * @minLength 1
           */
          city: string;
          /**
           * The standard district or county name, for example 南山区.
           * @minLength 1
           */
          county?: string;
          /**
           * The detailed street address, for example 广东省深圳市福田区新洲十一街万基商务大厦10楼.
           * @minLength 1
           */
          address: string;
        };
        /**
         * The cargo name; when provided, the cargo category is validated.
         * @minLength 1
         * @maxLength 20
         */
        cargo_name?: string;
        /**
         * The SF monthly settlement card (月结卡号).
         * @minLength 1
         */
        monthly_card?: string;
      };
      output: {
        /** The available service time windows. */
        windows: Array<{
          /** The service date, for example 2021-04-25. */
          serviceDate: string;
          /** The window start time. */
          startTime: string;
          /** The window end time. */
          endTime: string;
        }>;
      };
    };
    /** Convert waybills into Cainiao print template URLs (云打印面单转菜鸟模板) for systems already integrated with the Cainiao print component. */
    "sf_express.print_waybill_cainiao_template": {
      input: {
        /**
         * The print template code from the SF console API detail page, for example fm_76130_standard_{partnerId}.
         * @minLength 1
         */
        template_code: string;
        /**
         * The waybills to print, at most 20 per batch.
         * @minItems 1
         * @maxItems 20
         */
        documents: Array<Record<string, unknown>>;
        /** Whether to return the files synchronously (default true). When false, SF pushes the files to the configured print callback instead. */
        sync?: boolean;
        /**
         * The published custom template code, for layouts edited in the SF template editor.
         * @minLength 1
         */
        custom_template_code?: string;
        /**
         * The 6-digit masking flag for recipient name, sender name, recipient address, sender address, recipient company, sender company. The first four positions accept 0 = print or 1 = mask; the last two accept 0 = print or 2 = hide.
         * @pattern ^[01]{4}[02]{2}$
         */
        encrypt_flag?: string;
        /**
         * The order channel the waybills belong to, for example "medicine" (医药渠道) or "cx" (CX预约单).
         * @minLength 1
         */
        channel?: string;
        /** Pass CUSTOM_AREA to leave the custom area unrendered so you can draw it yourself; SF then appends a placeholder layout element. Only fm_*_standard_ templates with a custom_template_code support it. */
        ignore_areas?: "CUSTOM_AREA";
      };
      output: {
        /** One entry per waybill. */
        files: Array<{
          /** The waybill number. */
          waybillNo: string;
          /** The print sequence number. */
          seqNo?: number;
          /** The template file per copy. */
          contents: Array<{
            /** The Cainiao template download URL (valid 24h). */
            templateURL: string;
            /** The copy number; 1 for single-copy templates. */
            areaNo: number;
            /** The page number within the copy. */
            pageNo: number;
          }>;
        }>;
        /** The partnerID the templates were generated for. */
        clientCode?: string;
        /** The template code used. */
        templateCode?: string;
        /** The generated file type (cainiao). */
        fileType?: string;
      };
    };
    /** Convert waybills into printer command sets (云打印面单转指令, cpcl or zpl), returned inline as text or as downloadable files. */
    "sf_express.print_waybill_command": {
      input: {
        /**
         * The print template code from the SF console API detail page, for example fm_76130_standard_{partnerId}.
         * @minLength 1
         */
        template_code: string;
        /**
         * The waybills to print, at most 10 per batch.
         * @minItems 1
         * @maxItems 10
         */
        documents: Array<Record<string, unknown>>;
        /** The printer command set: cpcl (portable printers, default) or zpl (desktop printers). */
        command_type?: "cpcl" | "zpl";
        /** Set to url to receive command files instead of inline command text. */
        command_file_type?: "url";
        /**
         * The published custom template code, for layouts edited in the SF template editor.
         * @minLength 1
         */
        custom_template_code?: string;
        /**
         * The 6-digit masking flag for recipient name, sender name, recipient address, sender address, recipient company, sender company. The first four positions accept 0 = print or 1 = mask; the last two accept 0 = print or 2 = hide.
         * @pattern ^[01]{4}[02]{2}$
         */
        encrypt_flag?: string;
        /**
         * The order channel the waybills belong to, for example "medicine" (医药渠道) or "cx" (CX预约单).
         * @minLength 1
         */
        channel?: string;
      };
      output: {
        /** One entry per waybill: inline command text per print copy, or a downloadable file when command_file_type is url. */
        files: Array<{
          /** The waybill number. */
          waybillNo: string;
          /** The command text per print copy. */
          contents?: Array<{
            /** The copy name: master 主运单联, additional 附加联, stub 存根联, receipt 发票联, custom 自定义联. */
            area: string;
            /** The printer command text for this copy. */
            content: string;
          }>;
          /** The command file download URL (file mode). */
          url?: string;
          /** The X-Auth-token header value required to download (file mode). */
          token?: string;
          /** The print sequence number (file mode). */
          seqNo?: number;
          /** The copy (联) number; 1 for large-account templates (file mode). */
          areaNo?: number;
          /** The page number within the copy (file mode). */
          pageNo?: number;
          /** The total page count of the file (file mode). */
          pageCount?: number;
        }>;
        /** The partnerID the commands were generated for. */
        clientCode?: string;
        /** The template code used. */
        templateCode?: string;
        /** The generated file type (command). */
        fileType?: string;
      };
    };
    /** Generate waybill HTML print files from a cloud print template (云打印面单转HTML). Returns download URLs that need the returned token in the X-Auth-token header (valid 24h). */
    "sf_express.print_waybill_html": {
      input: {
        /**
         * The print template code from the SF console API detail page, for example fm_76130_standard_{partnerId}.
         * @minLength 1
         */
        template_code: string;
        /**
         * The waybills to print, at most 20 per batch.
         * @minItems 1
         * @maxItems 20
         */
        documents: Array<Record<string, unknown>>;
        /**
         * The published custom template code, for layouts edited in the SF template editor.
         * @minLength 1
         */
        custom_template_code?: string;
        /**
         * The 6-digit masking flag for recipient name, sender name, recipient address, sender address, recipient company, sender company. The first four positions accept 0 = print or 1 = mask; the last two accept 0 = print or 2 = hide.
         * @pattern ^[01]{4}[02]{2}$
         */
        encrypt_flag?: string;
        /**
         * The order channel the waybills belong to, for example "medicine" (医药渠道) or "cx" (CX预约单).
         * @minLength 1
         */
        channel?: string;
      };
      output: {
        /** The generated files; unordered, sort by seqNo. */
        files?: Array<{
          /** The download URL of the generated file on SF OSS. */
          url: string;
          /** The X-Auth-token header value required to download the file. */
          token: string;
          /** The waybill number the file belongs to. */
          waybillNo: string;
          /** The print sequence number (the document index). */
          seqNo: number;
          /** The copy (联) number; 1 for large-account templates. */
          areaNo: number;
          /** The page number within the copy. */
          pageNo: number;
          /** The total page count of the file. */
          pageCount?: number;
        }>;
        /** The partnerID the files were generated for. */
        clientCode?: string;
        /** The template code used. */
        templateCode?: string;
        /** The generated file type (html). */
        fileType?: string;
      };
    };
    /** Generate waybill PDF print files from a cloud print template (云打印面单转PDF). Returns download URLs that need the returned token in the X-Auth-token header (valid 24h). */
    "sf_express.print_waybill_pdf": {
      input: {
        /**
         * The print template code from the SF console API detail page, for example fm_76130_standard_{partnerId}.
         * @minLength 1
         */
        template_code: string;
        /**
         * The waybills to print, at most 20 per batch.
         * @minItems 1
         * @maxItems 20
         */
        documents: Array<Record<string, unknown>>;
        /** Whether to return the files synchronously (default true). When false, SF pushes the files to the configured print callback instead. */
        sync?: boolean;
        /**
         * The published custom template code, for layouts edited in the SF template editor.
         * @minLength 1
         */
        custom_template_code?: string;
        /**
         * The 6-digit masking flag for recipient name, sender name, recipient address, sender address, recipient company, sender company. The first four positions accept 0 = print or 1 = mask; the last two accept 0 = print or 2 = hide.
         * @pattern ^[01]{4}[02]{2}$
         */
        encrypt_flag?: string;
        /**
         * The order channel the waybills belong to, for example "medicine" (医药渠道) or "cx" (CX预约单).
         * @minLength 1
         */
        channel?: string;
        /** Whether to merge the batch into one PDF file. */
        merge_pdf?: boolean;
        /** How to merge when merge_pdf is set: all = one PDF for all documents, single = one PDF per document. */
        merge_type?: "all" | "single";
      };
      output: {
        /** The generated files; unordered, sort by seqNo. */
        files?: Array<{
          /** The download URL of the generated file on SF OSS. */
          url: string;
          /** The X-Auth-token header value required to download the file. */
          token: string;
          /** The waybill number the file belongs to. */
          waybillNo: string;
          /** The print sequence number (the document index). */
          seqNo: number;
          /** The copy (联) number; 1 for large-account templates. */
          areaNo: number;
          /** The page number within the copy. */
          pageNo: number;
          /** The total page count of the file. */
          pageCount?: number;
        }>;
        /** The partnerID the files were generated for. */
        clientCode?: string;
        /** The template code used. */
        templateCode?: string;
        /** The generated file type (pdf). */
        fileType?: string;
      };
    };
    /** Query the status and generated PDF files of a 大同城 citywide print batch. */
    "sf_express.query_citywide_print_status": {
      input: {
        /**
         * The print batch number returned by sf_express.submit_citywide_print.
         * @minLength 1
         */
        print_batch_no: string;
      };
      output: {
        /** The print status: -1 = failed, 0 = printing, 1 = done. */
        status: string;
        /** The failure reason when status is -1. */
        errorReason?: string;
        /** The generated PDF files; unordered, sort by seqNo. */
        files?: Array<{
          /** The download URL of the generated file on SF OSS. */
          url: string;
          /** The X-Auth-token header value required to download the file. */
          token: string;
          /** The waybill number the file belongs to. */
          waybillNo: string;
          /** The print sequence number (the document index). */
          seqNo: number;
        }>;
      };
    };
    /** Query the SF Express delivery time standards for an origin and destination, optionally with freight prices per product. */
    "sf_express.query_delivery_time_price": {
      input: {
        /** The origin address. Provide either code (the SF area code) or both province and city. */
        src_address: {
          /**
           * The province name, for example 广东省. Required when code is omitted.
           * @minLength 1
           */
          province?: string;
          /**
           * The city name, for example 深圳市. Required when code is omitted.
           * @minLength 1
           */
          city?: string;
          /**
           * The district name.
           * @minLength 1
           */
          district?: string;
          /**
           * The street address.
           * @minLength 1
           */
          address?: string;
          /**
           * The SF area code, for example 755 for Shenzhen. Overrides province and city when present.
           * @minLength 1
           */
          code?: string;
        };
        /** The destination address. Provide either code (the SF area code) or both province and city. */
        dest_address: {
          /**
           * The province name, for example 广东省. Required when code is omitted.
           * @minLength 1
           */
          province?: string;
          /**
           * The city name, for example 深圳市. Required when code is omitted.
           * @minLength 1
           */
          city?: string;
          /**
           * The district name.
           * @minLength 1
           */
          district?: string;
          /**
           * The street address.
           * @minLength 1
           */
          address?: string;
          /**
           * The SF area code, for example 755 for Shenzhen. Overrides province and city when present.
           * @minLength 1
           */
          code?: string;
        };
        /**
         * The product to query, for example 1 = 特快, 2 = 标快, 5 = 顺丰次晨, 6 = 即日件; any other 快件产品类别 code works too. Omit to list the default products. Querying a specific product requires monthly_card.
         * @minLength 1
         */
        business_type?: string;
        /**
         * The SF monthly settlement card (月结卡号) used for personalized pricing; required when business_type is set.
         * @minLength 1
         */
        monthly_card?: string;
        /**
         * The total weight in kilograms, up to 2 decimal places.
         * @exclusiveMinimum 0
         */
        weight?: number;
        /** The volume in cubic centimeters, up to 2 decimal places. */
        volume?: number;
        /**
         * The planned shipment time in YYYY-MM-DD HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        consigned_time?: string;
        /** Whether to include freight prices in the response. */
        search_price?: boolean;
      };
      output: {
        /** The delivery products with their promised time and optional price. */
        options: Array<{
          /** The product code, for example 2 for 标快. */
          businessType: string;
          /** The product name, for example 顺丰特惠. */
          businessTypeDesc: string;
          /** The promised delivery time window as start,end in YYYY-MM-DD HH:mm:ss format. */
          deliverTime: string;
          /** The estimated freight fee in CNY, or null when no price applies. */
          fee: number | null;
          /** Whether the price was included (1) or not (0). */
          searchPrice?: string;
          /** The order cutoff time for the product. */
          closeTime: string | null;
        }>;
      };
    };
    /** Query the processing result of a previously placed SF Express order, for example when the create_order response never arrived. */
    "sf_express.query_order_result": {
      input: {
        /**
         * The client order number.
         * @minLength 1
         * @maxLength 64
         */
        order_id: string;
        /** The query type: forward (正向单) or return (退货单). */
        search_type?: "forward" | "return";
        /**
         * The mother waybill number returned by the order creation.
         * @minLength 1
         */
        main_waybill_no?: string;
        /** The response language. */
        language?: "zh-CN" | "zh-TW" | "zh-HK" | "zh-MO" | "en";
      };
      output: {
        /** The client order number echoed back. */
        orderId: string;
        /** The origin area code (lowercase field name is upstream's). */
        origincode?: string;
        /** The destination area code (lowercase field name is upstream's). */
        destcode?: string;
        /** The screening (筛单) result: 1 = 人工确认, 2 = 可收派, 3 = 不可以收派. */
        filterResult: string | null;
        /** The reason when the shipment cannot be served (filterResult 3). */
        remark?: string;
        /** The allocated SF waybill numbers. */
        waybillNoInfoList: Array<{
          /** The waybill number type: 1 = mother (母单), 2 = child (子单), 3 = sign-back (签回单). */
          waybillType?: number;
          /** The SF waybill number. */
          waybillNo: string;
          /** The box number. */
          boxNo?: string;
        }>;
        /** The route label data used for waybill printing, returned as-is. */
        routeLabelInfo: Array<Record<string, unknown>>;
        /** Extended result attributes as attrName/attrVal pairs. */
        returnExtraInfoList?: Array<Record<string, unknown>>;
      };
    };
    /** List nearby SF Express service points (自营服务点, 合作商家店, 顺丰站, 丰巢柜, and more) around an address or a coordinate. */
    "sf_express.query_service_points": {
      input: {
        /**
         * The address to search around; provide address, or both longitude and latitude.
         * @minLength 1
         */
        address: string;
        /** The longitude of the search center; required with latitude when address is omitted. */
        longitude: number;
        /** The latitude of the search center; required with longitude when address is omitted. */
        latitude: number;
        /** The point types to include: 1 自营服务点, 2 合作商家店, 3 嘿客店/顺丰优选, 4 顺丰站, 5 丰巢柜. */
        dept_types: Array<"1" | "2" | "3" | "4" | "5">;
        /** The service types to include: 1 自寄, 2 自取, 3 寄取件, 4 个人地址服务, 5 便民服务, 6 自寄自取优惠服务. */
        service_types: Array<"1" | "2" | "3" | "4" | "5" | "6">;
        /**
         * The maximum number of points to return.
         * @exclusiveMinimum 0
         */
        count: number;
        /**
         * The search radius in meters; default 1000.
         * @exclusiveMinimum 0
         */
        distance: number;
        /**
         * The city name; required for Hong Kong (香港).
         * @minLength 1
         */
        city: string;
      };
      output: {
        /** The query status: 0 for success. */
        status: number;
        /** The number of points returned. */
        count: number;
        /** The data source. */
        src: string;
        /** The query message. */
        msg?: string;
        /** The service points. */
        result: Array<{
          /** The service point id. */
          id: string;
          /** The service point name. */
          name: string;
          /** The service point address. */
          address: string;
          /** The distance in meters from the queried location. */
          distance: number;
          /** The point longitude. */
          longitude: number;
          /** The point latitude. */
          latitude: number;
          /** The service type code of the point. */
          servertype: string;
        }>;
      };
    };
    /** Query the freight fee breakdown (清单运费) of an SF Express shipment by order number (only orders placed under your partnerID) or by waybill number (the waybill's monthly card must be bound to your partnerID). */
    "sf_express.query_waybill_fee": {
      input: {
        /** Query by order (order number placed under your partnerID) or by waybill (waybill number whose monthly card is bound to your partnerID). */
        query_type: "order" | "waybill";
        /**
         * The order number or waybill number to query.
         * @minLength 1
         */
        tracking_num: string;
        /**
         * The business template code configured for your partnerID.
         * @minLength 1
         */
        biz_template_code?: string;
      };
      output: {
        /** The waybill summary. */
        waybillInfo: {
          /** The waybill number. */
          waybillNo?: string;
          /** The client order number. */
          orderId?: string;
          /** The child waybill numbers, comma-separated. */
          waybillChilds?: string;
          /** The monthly settlement account. */
          customerAcctCode?: string;
          /** The billable weight in kilograms. */
          meterageWeightQty?: number | null;
          /** The actual weight in kilograms. */
          realWeightQty?: number | null;
          /** The pickup courier employee number. */
          consigneeEmpCode?: string;
          /** The delivery courier employee number. */
          deliverEmpCode?: string;
          /** The cargo content code. */
          cargoTypeCode?: string;
          /** The cargo content name. */
          cargoTypeName?: string;
          /** The time-limit type code. */
          limitTypeCode?: string;
          /** The time-limit type name. */
          limitName?: string;
          /** The business type code. */
          expressTypeCode?: string;
          /** The business type name. */
          expressTypeName?: string;
          /** The product code. */
          productCode?: string;
          /** The product name. */
          productName?: string;
          /** The declared value. */
          consValue?: number | null;
          /** The declared value currency. */
          consValueCurrencyCode?: string;
          /** The sender province. */
          jProvince?: string;
          /** The sender city. */
          jCity?: string;
          /** The sender detailed address. */
          consignorAddr?: string;
          /** The sender contact name. */
          consignorContName?: string;
          /** The sender phone number. */
          consignorPhone?: string;
          /** The sender mobile number. */
          consignorMobile?: string;
          /** The recipient province. */
          dProvince?: string;
          /** The recipient city. */
          dCity?: string;
          /** The recipient detailed address. */
          addresseeAddr?: string;
          /** The recipient contact name. */
          addresseeContName?: string;
          /** The recipient phone number. */
          addresseePhone?: string;
          /** The recipient mobile number. */
          addresseeMobile?: string;
        };
        /** The fee items. */
        waybillFeeList: Array<{
          /** The fee type code, for example 1 = 运费, 3 = 基础保. */
          type: string;
          /** The fee name when SF Express returns one. */
          name?: string;
          /** The fee amount; null when the fee item carries no amount. */
          value: number | null;
          /** The payment type: 1 = 寄付, 2 = 到付, 3 = 第三方付. */
          paymentTypeCode?: string;
          /** The settlement type: 1 = 现结, 2 = 月结. */
          settlementTypeCode?: string;
          /** The value-added service code. */
          serviceProdCode?: string;
          /** The insured value. */
          insuredValue?: string;
          /** The monthly settlement account. */
          customerAcctCode?: string;
        }>;
      };
    };
    /** Recommend SF Express products with prices and promised delivery times for a shipment. */
    "sf_express.recommend_product": {
      input: {
        /**
         * The origin province, for example 广东省.
         * @minLength 1
         */
        src_province: string;
        /**
         * The origin city, for example 深圳市.
         * @minLength 1
         */
        src_city: string;
        /**
         * The origin district or county.
         * @minLength 1
         */
        src_county?: string;
        /**
         * The destination province.
         * @minLength 1
         */
        dest_province: string;
        /**
         * The destination city.
         * @minLength 1
         */
        dest_city: string;
        /**
         * The destination district or county.
         * @minLength 1
         */
        dest_county?: string;
        /**
         * The origin street address.
         * @minLength 1
         */
        src_address: string;
        /**
         * The destination street address.
         * @minLength 1
         */
        dest_address: string;
        /**
         * The shipment or pickup time in YYYY-MM-DD HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        send_time: string;
        /**
         * The order time in YYYY-MM-DD HH:mm:ss format; defaults to the current time.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        order_time?: string;
        /**
         * The total weight in kilograms.
         * @exclusiveMinimum 0
         */
        weight: number;
        /** The parcel length in centimeters. */
        length?: number;
        /** The parcel width in centimeters. */
        width?: number;
        /** The parcel height in centimeters. */
        height?: number;
        /** The cargo names, for example [文件, 苹果]. */
        commodity_names?: Array<string>;
        /** The payment method: 1 寄付, 2 到付, 3 寄转第三方, 4 到转第三方. */
        payment_terms: "1" | "2" | "3" | "4";
        /**
         * The SF monthly settlement card (月结卡号) for personalized pricing.
         * @minLength 1
         */
        monthly_card?: string;
        /**
         * The total number of parcels.
         * @exclusiveMinimum 0
         */
        total_num?: number;
        /**
         * The sender phone when payment_terms is 1 or 3, or the recipient phone when it is 2 or 4.
         * @minLength 1
         */
        phone_number?: string;
        /**
         * The SF Express waybill number (顺丰运单号).
         * @minLength 1
         */
        waybill_no?: string;
        /**
         * A unique trace id for data tracking, for example a UUID.
         * @minLength 1
         */
        trace_id?: string;
        /** The customs declaration method (international shipments): 1 简易报关, 2 正式报关, 3 海运报关, 4 个人物品, 5 简报销售, 6 简报样品, 7 跨境直邮, 8 跨境保税, 9 个人行李, 10 自清关. */
        import_declaration_method?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
        /** The customs declaration method (international shipments): 1 简易报关, 2 正式报关, 3 海运报关, 4 个人物品, 5 简报销售, 6 简报样品, 7 跨境直邮, 8 跨境保税, 9 个人行李, 10 自清关. */
        export_declaration_method?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
        /** The declared cargo value for international shipments. */
        declared_value?: number;
        /**
         * The declared value currency, for example CNY.
         * @minLength 1
         */
        declared_currency?: string;
      };
      output: {
        /** The recommended products, best first. */
        products: Array<{
          /** The SF product code, for example S2. */
          productCode: string;
          /** The product name, for example 顺丰标快. */
          productName: string;
          /** The display name code. */
          productDisplayCode: string;
          /** The product display name. */
          productDisplayName: string;
          /** The waybill label code. */
          waybillLabelCode: string;
          /** The waybill label name, for example 标快. */
          waybillLabelName: string;
          /** The BSP product code usable as express_type when ordering. */
          expressType: string;
          /** The business type code, for example B1. */
          businessType: string;
          /** The product line: 1 便利店, 2 医药, 3 时效, 4 高铁, 5 冷运, 6 快运, 7 国际, 8 特惠. */
          productType: string;
          /** The recommendation type: 1 协议产品, 2 基础产品, 3 其他产品. */
          recommendProductType: number;
          /** The recommendation sort order; ascending, may repeat or skip. */
          sortNo: number;
          /** The promised delivery time in yyyy-MM-dd HH:mm format. */
          reachTime: string;
          /** The standard transit time code, for example 2D1200. */
          standardTime: string;
          /** The order cutoff time in HHmm format, when the product has one. */
          cutOffTime: string;
          /** The billable weight in kilograms. */
          weight: number;
          /** The charged weight in kilograms. */
          chargedWeight: number;
          /** The total price in the response currency. */
          totalFee: number;
          /** The personalized freight charge. */
          freight: number;
          /** The standard freight without customer-specific pricing. */
          stdFreight: number;
          /** The freight before channel discounts. */
          initialFreight: number;
          /** The total value-added service fee. */
          totalServiceFee: number;
          /** The self-drop-off discount. */
          selfMailingFee: number;
          /** The self-pickup discount. */
          selfTakeFee: number;
          /** Other fees. */
          otherFee: number;
          /** The price currency, for example CNY. */
          currency: string;
          /** Whether the destination is a suburban area. */
          suburbFlg: boolean;
          /** Whether reverse logistics applies: 0 no, 1 yes. */
          reverseLogistics: string;
          /** Whether locker or convenience-store delivery is allowed: 0 no, 1 yes. */
          deliverySfbox: string;
          /** Whether overtime refund is supported: 0 no, 1 yes. */
          overtimeRefund: string;
          /** A warning shown for special cargo, for example perishables. */
          specialCommodityMsg: string;
          /** The transit-time type code, for example T4. */
          reachTimeType: string;
          /** The cargo content code, for example C201. */
          expressContent: string;
          /** Whether customs clearance material is required: 0 no, 1 yes. */
          clearanceOfGoods: string;
          /** The product tier; 1 marks a premium product. */
          productLayered: string;
          /** The pricing rule, passed through from PVS. */
          priceDetail: string;
          /** The value-added service fee details. */
          serviceFeeList: Array<{
            /** The value-added service code. */
            serviceCode: string;
            /** The value-added service name. */
            serviceName: string;
            /** The service fee in the response currency. */
            serviceFee: number;
            /** The standard value-added service fee. */
            stdServiceFee: number;
            /** The billable weight the fee was computed on, in kilograms. */
            weight: number;
            /** Whether the fee is a guide price. */
            isGuide: boolean;
            /** The cash-on-delivery amount, converted to the service fee currency when needed. */
            collectionAmount: number;
            /** The cash-on-delivery exchange rate applied to the collection amount. */
            codExchangeRate: number;
          }>;
        }>;
        /** The peak-season control strategies per product. */
        controlStrategies: Array<{
          /** The product code the strategy applies to. */
          productCode: string;
          /** The strategy: 0 不管控, 1 延时管控, 2 错峰管控, 3 加价管控, 4 温馨提示. */
          controlStrategy: string;
          /** The control notice, in the response language. */
          notificationMsg: string;
        }>;
      };
    };
    /** Recommend value-added services (保鲜, 保价, 定时派送, and more) with prices for a shipment on a chosen product. */
    "sf_express.recommend_vas": {
      input: {
        /**
         * The BSP product code, for example 2 for S2 标快; use the expressType of a product returned by sf_express.recommend_product.
         * @minLength 1
         */
        express_type: string;
        /** The product price, when known. */
        prod_price?: number;
        /**
         * The origin province.
         * @minLength 1
         */
        src_province: string;
        /**
         * The origin city.
         * @minLength 1
         */
        src_city: string;
        /**
         * The origin district or county.
         * @minLength 1
         */
        src_county?: string;
        /**
         * The destination province.
         * @minLength 1
         */
        dest_province: string;
        /**
         * The destination city.
         * @minLength 1
         */
        dest_city: string;
        /**
         * The destination district or county.
         * @minLength 1
         */
        dest_county?: string;
        /**
         * The shipment or pickup time in YYYY-MM-DD HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        send_time: string;
        /**
         * The order time in YYYY-MM-DD HH:mm:ss format; defaults to the current time.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        order_time?: string;
        /**
         * The total weight in kilograms.
         * @exclusiveMinimum 0
         */
        weight: number;
        /**
         * The weight unit: 1 千克 (default), 2 克, 3 吨, 4 英镑.
         * @minimum 1
         * @maximum 4
         */
        weight_unit?: number;
        /** The parcel length in centimeters. */
        length?: number;
        /** The parcel width in centimeters. */
        width?: number;
        /** The parcel height in centimeters. */
        height?: number;
        /**
         * The length unit: 1 厘米 (default), 2 米, 3 千米, 4 英寸.
         * @minimum 1
         * @maximum 4
         */
        length_unit?: number;
        /** The payment method: 1 寄付, 2 到付, 3 寄转第三方, 4 到转第三方. */
        pay_method: "1" | "2" | "3" | "4";
        /**
         * The SF monthly settlement card (月结卡号).
         * @minLength 1
         */
        monthly_card?: string;
        /**
         * The number of parcels.
         * @exclusiveMinimum 0
         */
        package_number: number;
        /** The cargo names. */
        commodity_names?: Array<string>;
        /**
         * The origin street address.
         * @minLength 1
         */
        src_address?: string;
        /**
         * The destination street address.
         * @minLength 1
         */
        dest_address?: string;
        /**
         * The destination postal code; required for overseas destinations.
         * @minLength 1
         */
        dest_postal_code?: string;
        /** The stage the services apply to: 0 下单环节 (default), 1 收件环节, 2 派件环节. */
        apply_link?: "0" | "1" | "2";
        /**
         * The overseas country code, for example US.
         * @minLength 1
         */
        overseas_country_code?: string;
        /** The single-ticket information required by heavy-cargo services. */
        single_ticket?: {
          /** The single-ticket weight in kilograms. */
          real_total_weight: number;
          /** The single-ticket parcel count. */
          pieces_number: number;
        };
        /** The per-parcel information required by heavy-cargo services. */
        single_products?: Array<{
          /** The parcel tracking numbers. */
          single_product_no: Array<string>;
          /** The parcel length in meters. */
          single_length: number;
          /** The parcel width in meters. */
          single_width: number;
          /** The parcel height in meters. */
          single_height: number;
          /** The parcel weight in kilograms. */
          single_weight: number;
          /** The count of parcels with this specification. */
          quantity: number;
        }>;
        /**
         * Special services, comma-separated; currently only 1 = 高峰加价服务 (IN100).
         * @minLength 1
         */
        special_service?: string;
        /**
         * The access code; required for access-code scenarios.
         * @minLength 1
         */
        client_code?: string;
        /**
         * The order type, for example 31/32/33/34.
         * @minLength 1
         */
        order_type?: string;
        /** The freshness labels: 1 保鲜, 0 非保鲜. */
        label_fresh?: Array<number>;
        /**
         * The payment country code used for pricing, for example CN.
         * @minLength 1
         */
        pay_country: string;
        /**
         * The estimated delivery time in YYYY-MM-DD HH:mm:ss format, usually the reachTime returned by sf_express.recommend_product.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        arrival_time: string;
        /**
         * The sender phone when pay_method is 1 or 3, or the recipient phone when it is 2 or 4.
         * @minLength 1
         */
        src_phone_num?: string;
      };
      output: {
        /** The recommended services. */
        services: Array<{
          /** The recommendation type: 1 绑定服务, 2 可选服务, 3 附加费(加项), 4 附加费(减项), 5 默认绑定可取消, 6 可选服务不可取消, 7 取消. */
          recommendedType: number;
          /** The service code, for example IN67. */
          vasCode: string;
          /** The service name, for example 保鲜服务. */
          vasName: string;
          /** The service price. */
          floorPrice: number;
          /** The price currency, for example CNY. */
          currency: string;
          /** The billable weight in kilograms. */
          chargedWeight: number;
          /** The earliest delivery time with this service, in yyyy-MM-dd HH:mm:ss format. */
          arrivalTime: string;
          /** The order cutoff time for this service. */
          cutOffTime: string;
          /** Mutually exclusive service codes, for example IN02 (保价). */
          mutexVas: string;
          /** A timeliness warning for this service. */
          timelinessTips: string;
          /** Whether the payment method binds to the freight: 0 no, 1 yes. */
          freightBinding: number;
          /** A JSON string describing the extra information the service requires. */
          requiredInformation: string;
          /** The service fee code. */
          feeCode: number;
          /** The minimum insured value for declared-value services. */
          minInsuredPrice: number;
          /** The maximum insured value for declared-value services. */
          maxInsuredPrice: number;
          /** Whether SF coupons can pay for this service: 0 no, 1 yes. */
          useCoupon: number;
          /** The recommendation weight: 0 normal, 1 priority, 2 secondary. */
          stressRecommend: number;
          /** A JSON string with the heavy-cargo extension fields. */
          extendAttForKY: string;
          /** A JSON string array with the required extra fields. */
          conditionJsonInfo: string;
          /** A JSON string with the custom extension fields. */
          extJson: string;
          /** The configured priority code, for example B0. */
          priorityCode: string;
          /** The recommendation index. */
          recommendIndex: number;
          /** The algorithmic recommendation order. */
          order: number;
          /** The PSDS-configured service order. */
          vasOrder: number;
        }>;
      };
    };
    /** Register an SF Express order or waybill for route (tracking) push. Prerequisite: the route push callback must already be configured in the SF console (控制台 → 开发者对接 → 查看API → 路由注册接口 → 配置信息); after registration, SF pushes route updates to that address. */
    "sf_express.register_route_push": {
      input: {
        /** Register by client order number (order) or SF waybill number (waybill). */
        register_by: "order" | "waybill";
        /**
         * The client order number or SF waybill number to register.
         * @minLength 1
         */
        attribute_no: string;
        /**
         * The last 4 digits of the sender or recipient phone number for phone verification mode.
         * @pattern ^\d{4}$
         */
        check_phone_no?: string;
        /** The response language. */
        language?: "zh-CN" | "zh-TW" | "zh-HK" | "zh-MO" | "en";
        /** The country or region code, for example CN. */
        country?: string;
      };
      output: {
        /** Whether the route push registration succeeded. */
        registered: boolean;
        /** The registered order or waybill number. */
        attributeNo: string;
      };
    };
    /** Register a waybill for waybill picture push (回单 receipt, 清单 manifest, 拍照回传 photo proof, etc.). SF pushes the AES-encrypted picture to the configured callback once generated; register after the shipment is signed for, because pictures are produced late. The decryption key comes from the SF console (控制台 → 开发者对接 → 查看API → 图片注册及推送接口). */
    "sf_express.register_waybill_picture_push": {
      input: {
        /**
         * The SF Express waybill number (顺丰运单号).
         * @minLength 1
         */
        waybill_no: string;
        /** The picture type: 0 其他, 1 清单, 2 回单(非电子回单), 3 第三方, 4 代收货款, 5 电子签收, 6 发票, 7 装箱单, 8 代理报关委托书, 9 合同, 10 报关单, 11 核消单, 12 许可证, 13 同城件拍照上传, 14 开箱验证图片, 15 派送证明, 16 特安托寄物照片, 17 医药图片, 18 丰小哥开箱拍照, 19 nike笼车方案pod单照片, 20 复重图片, 21 派件特安件妥投标记异常, 22 签单返回范本图片, 24 中转复重图片, 25 重货大件入户派件端增加拍照, 71 拍照回传(增值服务 IN91), 122 电子回单(增值服务 IN149, PDF), 182 入仓增值服务图片. */
        img_type: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "24" | "25" | "71" | "122" | "182";
        /**
         * The monthly settlement card number (月结卡号).
         * @minLength 1
         */
        customer_acct_code: string;
        /**
         * The sender or recipient phone number.
         * @minLength 1
         */
        phone: string;
      };
      output: {
        /** Whether the picture push registration succeeded. */
        registered: boolean;
        /** The registered waybill number. */
        waybillNo: string;
        /** The registered picture type. */
        imgType: string;
      };
    };
    /** Save a merchant custom print template (ISV 保存自定义模板); same name means a new version of the same template. The content follows the SF markup language spec. */
    "sf_express.save_print_template": {
      input: {
        /** The standard template code: fm_76130_standard (76mm*130mm), fm_150_standard (100mm*150mm), fm_180_standard (100mm*180mm), fm_210_standard (100mm*210mm), fm_76165_standard1 (76mm*165mm 一联), fm_76165_standard2 (76mm*165mm 二联). */
        standard_template_code: "fm_76130_standard" | "fm_150_standard" | "fm_180_standard" | "fm_210_standard" | "fm_76165_standard1" | "fm_76165_standard2";
        /**
         * The merchant account the ISV registered for this seller (isv商家账号).
         * @minLength 1
         */
        seller_user_id: string;
        /**
         * The custom template name; reusing a name creates a new version of that template.
         * @minLength 1
         */
        custom_template_name: string;
        /**
         * The custom template content in the SF markup language (a JSON array string of layout elements).
         * @minLength 1
         */
        content: string;
      };
      output: {
        /** The assigned custom template code. */
        customTemplateCode: string;
      };
    };
    /** Query logistics routes (tracking events) for up to 10 SF Express shipments. Waybill-only queries return routes only for shipments paid with a monthly card bound to your partnerID; for any other shipment, pass the sender or recipient phone's last 4 digits in check_phone_nos. Only shipments from the last 3 months have routes. */
    "sf_express.search_routes": {
      input: {
        /**
         * The SF waybill numbers, or the client order numbers when tracking_type is client_order.
         * @minItems 1
         * @maxItems 10
         */
        tracking_numbers: Array<string>;
        /** The number type: waybill for SF waybill numbers (default) or client_order for order numbers placed through your own partnerID. */
        tracking_type?: "waybill" | "client_order";
        /** The last 4 digits of the sender or recipient phone numbers, one per entry in tracking_numbers. Required for waybill queries unless every waybill was paid with a monthly card bound to your partnerID. */
        check_phone_nos?: Array<string>;
        /** The response language. */
        language?: "zh-CN" | "zh-TW" | "zh-HK" | "zh-MO" | "en";
        /** The route query mode: standard (default) or custom, which returns the route nodes customised for your account. */
        route_query_type?: "standard" | "custom";
        /**
         * The customer reference number; currently only used by Amazon customers.
         * @minLength 1
         * @maxLength 4000
         */
        reference_number?: string;
      };
      output: {
        /** One result per queried tracking number. */
        results: Array<{
          /** The waybill number. */
          mailNo: string;
          /** The route events; empty when the shipment has no queryable route (see reasonCode). */
          routes: Array<{
            /** The event time in YYYY-MM-DD HH:mm:ss format. */
            acceptTime: string;
            /** The location where the event happened. */
            acceptAddress?: string;
            /** The event description. */
            remark: string;
            /** The SF operation code. */
            opCode: string;
            /** The first-level status code. */
            firstStatusCode?: string;
            /** The first-level status name. */
            firstStatusName?: string;
            /** The second-level status code. */
            secondaryStatusCode?: string;
            /** The second-level status name. */
            secondaryStatusName?: string;
          }>;
          /** The reason codes returned when no route was found, for example an unbound monthly card or a shipment older than 3 months. */
          reasonCode?: Array<string>;
          /** The reason details returned when no route was found. */
          reasonRemark?: Array<string>;
        }>;
      };
    };
    /** Send a delivery or return notification for an SF Express waybill (派件通知), used in pre-sale scenarios where the goods were stocked in an SF warehouse in advance. */
    "sf_express.send_delivery_notice": {
      input: {
        /**
         * The SF Express waybill number (顺丰运单号).
         * @minLength 1
         */
        waybill_no: string;
        /** The notification type: delivery (派送通知) or return (通知退回). */
        data_type: "delivery" | "return";
        /** The response language. */
        language?: "zh-CN" | "zh-TW" | "zh-HK" | "zh-MO" | "US";
      };
      output: {
        /** The waybill number notified. */
        waybillNo: string;
        /** Whether the notification was accepted. */
        notified: boolean;
      };
    };
    /** Submit brand-inspection images for a station task (品牌巡检相册新增); resubmitting the same task_id updates its images. */
    "sf_express.station_add_brand_inspection_images": {
      input: {
        /**
         * The brand inspection task id; resubmitting the same id updates its images.
         * @minLength 1
         */
        task_id: string;
        /**
         * The station id (驿站ID).
         * @minLength 1
         */
        virtual_addr: string;
        /**
         * The partner id for this channel (注意区别丰桥公共参数的 partnerID), e.g. YSF14SD1.
         * @minLength 1
         */
        partner_id: string;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
        /**
         * The station exterior image file names, at most 10.
         * @minItems 1
         * @maxItems 10
         */
        background_file_names: Array<string>;
        /**
         * The business license image file names, at most 10.
         * @minItems 1
         * @maxItems 10
         */
        license_file_names: Array<string>;
        /**
         * The door-head image file names; at most 1 each for these optional types.
         * @maxItems 1
         */
        door_head?: Array<string>;
        /**
         * The light-box image file names.
         * @maxItems 1
         */
        light_box?: Array<string>;
        /**
         * The image-wall file names.
         * @maxItems 1
         */
        image_wall?: Array<string>;
        /**
         * The girdle glass-sticker file names.
         * @maxItems 1
         */
        girdle?: Array<string>;
        /**
         * The cooperation-plate file names.
         * @maxItems 1
         */
        cooperation_license?: Array<string>;
        /**
         * The business-poster file names.
         * @maxItems 1
         */
        business_poster?: Array<string>;
        /**
         * The self-pickup poster file names.
         * @maxItems 1
         */
        pickup_poster?: Array<string>;
        /**
         * The pickup-desk card file names.
         * @maxItems 1
         */
        pickup_desk?: Array<string>;
        /**
         * The wall-system file names.
         * @maxItems 1
         */
        wall_system?: Array<string>;
        /**
         * The hanging-flag file names.
         * @maxItems 1
         */
        hanging_flags?: Array<string>;
        /**
         * The reception-desk file names.
         * @maxItems 1
         */
        reception_desk?: Array<string>;
        /**
         * The shelf-sticker file names.
         * @maxItems 1
         */
        shelf_stickers?: Array<string>;
        /**
         * The indication file names.
         * @maxItems 1
         */
        indication?: Array<string>;
        /**
         * The tips file names.
         * @maxItems 1
         */
        tips?: Array<string>;
        /**
         * The carton-recycling-desk file names.
         * @maxItems 1
         */
        carton_desk?: Array<string>;
      };
      output: {
        /** The brand inspection task id. */
        taskId: string;
      };
    };
    /** Attach business-license, filing, or album image file names to an external station (外部驿站上传营业执照、末端备案、相册). */
    "sf_express.station_add_store_images": {
      input: {
        /**
         * The station's own store code (合作网点自有编码).
         * @minLength 1
         */
        store_code: string;
        /** The station album file names. */
        background_file_names?: Array<string>;
        /** The business license file names. */
        license_file_names?: Array<string>;
        /** The terminal filing file names. */
        filing_file_names?: Array<string>;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The station's own store code. */
        storeCode: string;
      };
    };
    /** Batch-upload the 600 route (滞留件盘点) for waybills held at a partner station. */
    "sf_express.station_batch_inventory": {
      input: {
        /**
         * The station's own store code (合作网点自有编码).
         * @minLength 1
         */
        store_code: string;
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The waybill numbers to check in for inventory; at most 20 per call.
         * @minItems 1
         * @maxItems 20
         */
        waybill_nos: Array<string>;
      };
      output: {
        /** The message returned by SF Express. */
        msg: string;
        /** The waybills that failed, when at least one succeeded. */
        failList: Array<{
          /** The waybill number. */
          waybill_no: string;
          /** The failure reason. */
          reason?: string;
        }>;
      };
    };
    /** Check whether an operator on a channel may handle a waybill at a store (渠道可派件交接管控). */
    "sf_express.station_check_delivery_operation": {
      input: {
        /**
         * The district code sent in the request header (sgs_netcode).
         * @minLength 1
         */
        sgs_net_code?: string;
        /**
         * The system access code (系统接入编码) sent in the request header, allocated by SF Express.
         * @minLength 1
         */
        access_code?: string;
        /**
         * The convenience store code (便利店编码).
         * @minLength 1
         */
        store_code: string;
        /**
         * The city code (城市编码).
         * @minLength 1
         */
        dept_code: string;
        /**
         * The operation time in yyyy-MM-dd HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        opr_time: string;
        /**
         * The operator employee number (操作用户工号).
         * @minLength 1
         */
        opr_id: string;
        /**
         * The channel code, e.g. rider.
         * @minLength 1
         */
        channel: string;
        /**
         * The system code.
         * @minLength 1
         */
        system_code: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The request header info JSON string (accuracy/lat/lng/time/type).
         * @minLength 1
         */
        ehead?: string;
        /**
         * The store type: 1 SF store, 2 individual store, 3 sub-department, 4 chain, 5 SF station, 6 customer touchpoint, 7 嘿客店, 8 business station, 9 汪勇项目.
         * @minLength 1
         */
        store_type?: string;
      };
      output: {
        /** 1 = controlled (管控), 0 = not controlled. */
        operationControl: string;
        /** The control reason code. */
        reasonCode: string;
        /** The control reason description. */
        reason: string;
      };
    };
    /** Check whether a waybill is valid for external-station operations (外部驿站运单校验); an SF waybill without a recipient phone cannot receive station SMS. */
    "sf_express.station_check_waybill": {
      input: {
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The checked waybill number. */
        waybillNo: string;
        /** The message returned by SF Express. */
        msg?: string;
        /** The recipient phone digits SF returns for the waybill. */
        phone?: string;
      };
    };
    /** Register that an SF courier picked up the consigned parcels from a store (顺丰小哥到店收件). */
    "sf_express.station_courier_pickup_in_store": {
      input: {
        /** The request header block required by this endpoint. */
        header: {
          /**
           * The operator employee number (操作人工号).
           * @minLength 1
           */
          operatorId: string;
          /**
           * The city/department code (城市编码), e.g. 755.
           * @minLength 1
           */
          deptCode?: string;
          /**
           * The district code (区代码), sent as sgs_netcode.
           * @minLength 1
           */
          netCode?: string;
          /**
           * The system access code (系统接入编码) allocated by SF Express.
           * @minLength 1
           */
          accessCode: string;
        };
        /**
         * The agent/store code (合作网点自有编码).
         * @minLength 1
         */
        agent_code: string;
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The SF area code (地区编码), e.g. 755A.
         * @minLength 1
         */
        area_code: string;
        /**
         * The city code (城市编码), e.g. 755.
         * @minLength 1
         */
        city_id?: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /** The freight payment side: 0 = sender pays, 1 = receiver pays. */
        receiver_payment: "0" | "1";
        /**
         * The time SF took the parcels from the store in yyyy-MM-dd HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        sf_takeaway_time: string;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The picked-up waybill number. */
        waybillNo: string;
      };
    };
    /** Register that a customer picked up their parcel at a store (顾客到店取件). When receiver_payment is 1 (到付), weight, pack_fee, insurance_money, insurance_fee and successfully_payed_fee are required. */
    "sf_express.station_customer_pickup_in_store": {
      input: {
        /** The request header block required by this endpoint. */
        header: {
          /**
           * The operator employee number (操作人工号).
           * @minLength 1
           */
          operatorId: string;
          /**
           * The city/department code (城市编码), e.g. 755.
           * @minLength 1
           */
          deptCode?: string;
          /**
           * The district code (区代码), sent as sgs_netcode.
           * @minLength 1
           */
          netCode?: string;
          /**
           * The system access code (系统接入编码) allocated by SF Express.
           * @minLength 1
           */
          accessCode: string;
        };
        /**
         * The agent/store code (合作网点自有编码).
         * @minLength 1
         */
        agent_code: string;
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The SF area code (地区编码), e.g. 755A.
         * @minLength 1
         */
        area_code: string;
        /**
         * The city code (城市编码), e.g. 755.
         * @minLength 1
         */
        city_id?: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /** The freight payment side: 0 = sender pays, 1 = receiver pays. */
        receiver_payment: "0" | "1";
        /**
         * The time the customer picked up the parcel in yyyy-MM-dd HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        deliver_waybill_time: string;
        /**
         * The shipment weight in KG; required when receiver_payment is 1.
         * @minLength 1
         */
        weight?: string;
        /**
         * The freight charge in RMB; required when receiver_payment is 1.
         * @minLength 1
         */
        pack_fee?: string;
        /**
         * The insured value in RMB, 0.00 when uninsured; required when 到付.
         * @minLength 1
         */
        insurance_money?: string;
        /**
         * The insurance fee in RMB, 0.00 when uninsured; required when 到付.
         * @minLength 1
         */
        insurance_fee?: string;
        /**
         * The paid amount in cents, or -1 when payment failed; required when receiver_payment is 1.
         * @minLength 1
         */
        successfully_payed_fee?: string;
        /**
         * The courier employee number forwarded to FVP.
         * @minLength 1
         */
        courier_code?: string;
        /**
         * The 乐收直营 flag: 1直营, 0非直营.
         * @minLength 1
         */
        virtual_store_flag?: string;
        /**
         * The SKSS flip-80 flag: 1 or 0 (乐收直营 stores only).
         * @minLength 1
         */
        skss_push80_flag?: string;
        /**
         * The delivery proof method: 4 password sign, 5 id card.
         * @minLength 1
         */
        extend_attach_31?: string;
        /**
         * The delivery proof content.
         * @minLength 1
         */
        extend_attach_32?: string;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The picked-up waybill number. */
        waybillNo: string;
      };
    };
    /** Check out a waybill at an external station when the customer picks it up (外部驿站派件出库, route 658). */
    "sf_express.station_customer_receive_pack": {
      input: {
        /**
         * The station's own store code (合作网点自有编码).
         * @minLength 1
         */
        store_code: string;
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The checked-out waybill number. */
        waybillNo: string;
      };
    };
    /** Register a customer drop-off at a store (顾客到店寄件). When receiver_payment is 0 (寄付), weight, pack_fee, insurance_money and insurance_fee are required. */
    "sf_express.station_customer_send_in_store": {
      input: {
        /** The request header block required by this endpoint. */
        header: {
          /**
           * The operator employee number (操作人工号).
           * @minLength 1
           */
          operatorId: string;
          /**
           * The city/department code (城市编码), e.g. 755.
           * @minLength 1
           */
          deptCode?: string;
          /**
           * The district code (区代码), sent as sgs_netcode.
           * @minLength 1
           */
          netCode?: string;
          /**
           * The system access code (系统接入编码) allocated by SF Express.
           * @minLength 1
           */
          accessCode: string;
        };
        /**
         * The agent/store code (合作网点自有编码).
         * @minLength 1
         */
        agent_code: string;
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The SF area code (地区编码), e.g. 755A.
         * @minLength 1
         */
        area_code: string;
        /**
         * The city code (城市编码), e.g. 755.
         * @minLength 1
         */
        city_id: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /** The freight payment side: 0 = sender pays (寄付), 1 = receiver pays (到付). */
        receiver_payment: "0" | "1";
        /**
         * The store receive time in yyyy-MM-dd HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        receive_waybill_time: string;
        /**
         * The shipment weight in KG; required when receiver_payment is 0.
         * @minLength 1
         */
        weight?: string;
        /**
         * The freight charge in RMB; required when receiver_payment is 0.
         * @minLength 1
         */
        pack_fee?: string;
        /**
         * The insured value in RMB, 0.00 when uninsured; required when 寄付.
         * @minLength 1
         */
        insurance_money?: string;
        /**
         * The insurance fee in RMB, 0.00 when uninsured; required when 寄付.
         * @minLength 1
         */
        insurance_fee?: string;
        /**
         * The real-name extension flag: 1 verified, 0 not verified.
         * @minLength 1
         */
        ext1?: string;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The registered waybill number. */
        waybillNo: string;
      };
    };
    /** Get an OSS token for direct image upload (获取OSSToken信息). The oss_client_name and path_id values come from your SF Express contact. */
    "sf_express.station_get_oss_token": {
      input: {
        /** The request header block required by this endpoint. */
        header: {
          /**
           * The operator employee number (操作人工号).
           * @minLength 1
           */
          operatorId: string;
          /**
           * The city/department code (城市编码), e.g. 755.
           * @minLength 1
           */
          deptCode?: string;
          /**
           * The district code (区代码), sent as sgs_netcode.
           * @minLength 1
           */
          netCode?: string;
          /**
           * The system access code (系统接入编码) allocated by SF Express.
           * @minLength 1
           */
          accessCode: string;
        };
        /**
         * The backend OSS name (对应后端OSS名称); get it from your SF contact.
         * @minLength 1
         */
        oss_client_name: string;
        /**
         * The file path id (对应文件路径pathid); get it from your SF contact.
         * @minLength 1
         */
        path_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Report an exception return for a waybill at an external station (驿站异常件退件处理). */
    "sf_express.station_handle_exception_return": {
      input: {
        /**
         * The station's own store code (合作网点自有编码).
         * @minLength 1
         */
        store_code: string;
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /** The direction: 1 = inbound (收件), 2 = outbound (派件). */
        type: "1" | "2";
        /**
         * The exception time in yyyy-MM-dd HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        exception_time: string;
        /**
         * The exception reason, e.g. 包裹破损，客户拒收.
         * @minLength 1
         */
        exception_reason?: string;
      };
      output: {
        /** The reported waybill number. */
        waybillNo: string;
      };
    };
    /** Check in a delivery waybill at an external station (外部驿站派件入库, route 657). */
    "sf_express.station_handover_pack": {
      input: {
        /**
         * The station's own store code (合作网点自有编码).
         * @minLength 1
         */
        store_code: string;
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The checked-in waybill number. */
        waybillNo: string;
      };
    };
    /** Send a pickup notification SMS to the recipient of a waybill held at a station. */
    "sf_express.station_notify_recipient": {
      input: {
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The agent/store code (合作网点自有编码).
         * @minLength 1
         */
        agent_code: string;
      };
      output: {
        /** The message returned by SF Express. */
        msg: string;
      };
    };
    /** Pre-check-in a delivery waybill at an external station (外部驿站派件预入库) before the physical handover. */
    "sf_express.station_pre_handover_pack": {
      input: {
        /**
         * The station's own store code (合作网点自有编码).
         * @minLength 1
         */
        store_code: string;
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The pre-checked-in waybill number. */
        waybillNo: string;
      };
    };
    /** Query whether a waybill is a centralized (集收/集派) shipment through the station general query API. */
    "sf_express.station_query_centralization": {
      input: {
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The query type: 1 = 集收件查询, 2 = 集派件查询.
         * @minimum 1
         * @maximum 2
         */
        type: number;
      };
      output: {
        /** Whether the shipment is a centralized one. */
        isCentralism: boolean;
      };
    };
    /** Query the grid/bin assignment for a courier's shift at a station (星管家排班信息查询). */
    "sf_express.station_query_grid_schedule": {
      input: {
        /** The request header block required by this endpoint. */
        header: {
          /**
           * The operator employee number (操作人工号).
           * @minLength 1
           */
          operatorId: string;
          /**
           * The city/department code (城市编码), e.g. 755.
           * @minLength 1
           */
          deptCode?: string;
          /**
           * The district code (区代码), sent as sgs_netcode.
           * @minLength 1
           */
          netCode?: string;
          /**
           * The system access code (系统接入编码) allocated by SF Express.
           * @minLength 1
           */
          accessCode: string;
        };
        /**
         * The courier employee number (收派员工号).
         * @minLength 1
         */
        courier_code: string;
        /**
         * The AOI codes to query.
         * @minItems 1
         */
        aoi_list: Array<string>;
        /**
         * The shift code (班次编码), e.g. 02D.
         * @minLength 1
         */
        batch_code: string;
      };
      output: {
        /** The assigned grid bin (格口号). */
        bin_code: string;
      };
    };
    /** Query a station's information. One of virtual_addr or store_code is required. The returned field names vary by api_version. */
    "sf_express.station_query_store_info": {
      input: {
        /** The request header block required by this endpoint. */
        header: {
          /**
           * The operator employee number (操作人工号).
           * @minLength 1
           */
          operatorId: string;
          /**
           * The city/department code (城市编码), e.g. 755.
           * @minLength 1
           */
          deptCode?: string;
          /**
           * The district code (区代码), sent as sgs_netcode.
           * @minLength 1
           */
          netCode?: string;
          /**
           * The system access code (系统接入编码) allocated by SF Express.
           * @minLength 1
           */
          accessCode: string;
        };
        /**
         * The caller system id (外部调用方系统ID).
         * @minLength 1
         */
        system_id: string;
        /**
         * The API version, e.g. 1.3; different versions return different fields.
         * @minLength 1
         */
        api_version: string;
        /**
         * The SF station id (驿站ID).
         * @minLength 1
         */
        virtual_addr?: string;
        /**
         * The station's own store code.
         * @minLength 1
         */
        store_code?: string;
        /**
         * The area code.
         * @minLength 1
         */
        area_code?: string;
        /**
         * The scene code (场景编码).
         * @minLength 1
         */
        scene_code?: string;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Query a waybill's contact, payer and fee details (通用运单查询). Phone and address fields in the response are encrypted by SF Express. */
    "sf_express.station_query_waybill_info": {
      input: {
        /** The request header block required by this endpoint. */
        header: {
          /**
           * The operator employee number (操作人工号).
           * @minLength 1
           */
          operatorId: string;
          /**
           * The city/department code (城市编码), e.g. 755.
           * @minLength 1
           */
          deptCode?: string;
          /**
           * The district code (区代码), sent as sgs_netcode.
           * @minLength 1
           */
          netCode?: string;
          /**
           * The system access code (系统接入编码) allocated by SF Express.
           * @minLength 1
           */
          accessCode: string;
        };
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The agent/store code (合作网点自有编码).
         * @minLength 1
         */
        agent_code: string;
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The SF area code (地区编码), e.g. 755A.
         * @minLength 1
         */
        area_code: string;
        /**
         * The city code (城市编码), e.g. 755.
         * @minLength 1
         */
        city_id: string;
        /**
         * The language: 1 简体中文 (default, currently the only supported), 2 繁体中文, 3 English.
         * @minLength 1
         */
        lang_code?: string;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The recipient address (encrypted). */
        receiver_address?: string;
        /** The sender name. */
        sender?: string;
        /** The sender phone (encrypted). */
        sender_phone?: string;
        /** The sender mobile (encrypted). */
        sender_mobile?: string;
        /** The recipient name. */
        receiver?: string;
        /** The recipient phone (encrypted). */
        receiver_phone?: string;
        /** The recipient mobile (encrypted). */
        receiver_mobile?: string;
        /** The payer: sender, receiver, or third. */
        payer?: string;
        /** The freight fee. */
        pack_fee?: string;
        /** The insurance fee. */
        insurance_fee?: string;
        /** Whether cash-on-delivery applies. */
        cod_bill_flg?: string;
        /** The cash-on-delivery amount. */
        cod_fee?: string;
        /** The delivery courier employee number. */
        deliverEmpCode?: string;
      };
    };
    /** Query the route events of a waybill for the station channel. */
    "sf_express.station_query_waybill_route": {
      input: {
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
      };
      output: {
        /** The waybill number. */
        waybill_no: string;
        /** The route events. */
        route: Array<{
          /** The scan date. */
          date?: string;
          /** The scan time. */
          time?: string;
          /** The event description. */
          state?: string;
          /** The city where the event happened. */
          position?: string;
          /** The operator employee number. */
          oprCode?: string;
          /** The operation code. */
          opCode?: string;
        }>;
      };
    };
    /** Create or update an external station (新增/修改外部驿站). Omit virtual_addr to create; pass it to update an existing station. */
    "sf_express.station_save_store": {
      input: {
        /**
         * The station id (便利店编码); omit to create, required to update.
         * @minLength 1
         */
        virtual_addr?: string;
        /**
         * The station name.
         * @minLength 1
         */
        name: string;
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The station's own store code (合作网点自有编码).
         * @minLength 1
         */
        store_code: string;
        /** The station type: 81 = 人工驿站 (staffed), 82 = 快递柜 (locker). */
        store_type: "81" | "82";
        /**
         * The station owner name.
         * @minLength 1
         */
        linkman: string;
        /**
         * The owner mobile number.
         * @minLength 1
         */
        phone: string;
        /**
         * The station office phone number.
         * @minLength 1
         */
        telephone: string;
        /**
         * The business hours, for example 08:00--20:00.
         * @minLength 1
         */
        service_time: string;
        /** The station longitude. */
        lng: number;
        /** The station latitude. */
        lat: number;
        /**
         * The province name, e.g. 广东省.
         * @minLength 1
         */
        province_name: string;
        /**
         * The city name, e.g. 深圳市.
         * @minLength 1
         */
        city_name: string;
        /**
         * The district or county name, e.g. 南山区.
         * @minLength 1
         */
        county_name: string;
        /**
         * The town or subdistrict name.
         * @minLength 1
         */
        town_name?: string;
        /**
         * The detailed street address.
         * @minLength 1
         */
        address: string;
        /** The business scope: 1 = 快递 (express only), 2 = 快递+商业 (express and retail). */
        business_scope: "1" | "2";
        /** The station area in square meters, up to 2 decimal places. */
        square?: number;
        /** The area type: 4 学校, 5 机关单位, 6 商圈, 7 CBD, 8 其他. */
        area_type?: "4" | "5" | "6" | "7" | "8";
        /** The administrative area type: 1 城区, 2 乡镇, 3 农村. */
        administrative_area_type?: "1" | "2" | "3";
        /** Whether the station is disabled (停用, 1) or enabled (启用, 0); required by the upstream contract. */
        is_delete: boolean;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The saved station's own store code. */
        storeCode: string;
      };
    };
    /** Create or update a township agent station (乡镇代理基本信息新增). */
    "sf_express.station_save_village_store": {
      input: {
        /** The request header block required by this endpoint. */
        header: {
          /**
           * The operator employee number (操作人工号).
           * @minLength 1
           */
          operatorId: string;
          /**
           * The city/department code (城市编码), e.g. 755.
           * @minLength 1
           */
          deptCode?: string;
          /**
           * The district code (区代码), sent as sgs_netcode.
           * @minLength 1
           */
          netCode?: string;
          /**
           * The system access code (系统接入编码) allocated by SF Express.
           * @minLength 1
           */
          accessCode: string;
        };
        /**
         * The station's own store code (自有编码).
         * @minLength 1
         */
        store_code: string;
        /**
         * The agent point id (代理点ID); omit when creating.
         * @minLength 1
         */
        virtual_addr?: string;
        /**
         * The agent point name.
         * @minLength 1
         */
        name: string;
        /**
         * The supplier id (供应商).
         * @minLength 1
         */
        partner_id: string;
        /**
         * The station type: 86 镇点, 87 村点.
         * @minimum 86
         * @maximum 87
         */
        store_type: number;
        /**
         * The province name, e.g. 广东省.
         * @minLength 1
         */
        provincename: string;
        /**
         * The city name, e.g. 深圳市.
         * @minLength 1
         */
        cityname: string;
        /**
         * The district or county name, e.g. 南山区.
         * @minLength 1
         */
        countyname: string;
        /**
         * The town or subdistrict name.
         * @minLength 1
         */
        townname: string;
        /**
         * The detailed street address.
         * @minLength 1
         */
        address: string;
        /**
         * The agent name (代理人姓名).
         * @minLength 1
         */
        agent_name: string;
        /**
         * The agent employee number (代理人工号).
         * @minLength 1
         */
        agent_no: string;
        /**
         * The agent phone.
         * @minLength 1
         */
        agent_phone: string;
        /**
         * The agent id card number.
         * @minLength 1
         */
        agent_id_card?: string;
        /**
         * The contact person name.
         * @minLength 1
         */
        linkman_name: string;
        /**
         * The contact person phone.
         * @minLength 1
         */
        linkman_phone: string;
        /**
         * The business hours.
         * @minLength 1
         */
        service_time?: string;
        /** The longitude. */
        lng?: number;
        /** The latitude. */
        lat?: number;
        /**
         * The remark.
         * @minLength 1
         */
        remark?: string;
        /**
         * Whether e-commerce returns are enabled: 1 yes, 0 no.
         * @minimum 0
         * @maximum 1
         */
        open_flag: number;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
        /**
         * The e-commerce return types: 1 抖音, 2 得物, 3 唯品会; comma-separated for multiple, empty for none.
         * @minLength 1
         */
        star_business_type?: string;
        /**
         * The township agent short name (乡镇代理简称).
         * @minLength 1
         */
        short_name: string;
      };
      output: {
        /** The agent point id (代理点ID). */
        virtualAddr: string;
      };
    };
    /** Create or update a 星管家 station's base information (星管家基本信息新增). */
    "sf_express.station_save_xgj_store": {
      input: Record<string, unknown>;
      output: {
        /** The station's own store code. */
        storeCode: string;
      };
    };
    /** Send a pickup-code SMS for a waybill from an external station (外部驿站发送短信). */
    "sf_express.station_send_sms": {
      input: {
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The station's own store code (合作网点自有编码).
         * @minLength 1
         */
        store_code: string;
        /**
         * The pickup code (取件码).
         * @minLength 1
         */
        pick_up_code: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The SMS template id, from 1 to 6.
         * @minimum 1
         * @maximum 6
         */
        sms_template: number;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The waybill number the SMS was sent for. */
        waybillNo: string;
        /** The SMS id assigned by SF Express. */
        smsId?: string;
        /** The message returned by SF Express. */
        msg?: string;
      };
    };
    /** Send a fixed-template notification SMS for a waybill to its recipient or sender. */
    "sf_express.station_send_waybill_sms": {
      input: {
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The agent/store code (合作网点自有编码).
         * @minLength 1
         */
        agent_code: string;
        /**
         * The SMS recipient side, e.g. 1 (see the official example).
         * @minLength 1
         */
        send_to: string;
        /**
         * The mobile number to text.
         * @minLength 1
         */
        mobile_phone: string;
        /** Extra template variables merged into the SMS, e.g. storeAddress/storePhone/pickupCode. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The message returned by SF Express. */
        msg: string;
      };
    };
    /** Batch-upload the 600 route (滞留件盘点) for waybills held at a convenience store. */
    "sf_express.station_store_batch_inventory": {
      input: {
        /**
         * The agent/store code (合作网点自有编码).
         * @minLength 1
         */
        agent_code: string;
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The SF area code (地区编码), e.g. 755A.
         * @minLength 1
         */
        area_code: string;
        /**
         * The waybill numbers to check in for inventory; at most 20 per call.
         * @minItems 1
         * @maxItems 20
         */
        waybill_nos: Array<string>;
      };
      output: {
        /** The message returned by SF Express. */
        msg: string;
        /** The waybills that failed, when at least one succeeded. */
        failList: Array<{
          /** The waybill number. */
          waybill_no: string;
          /** The failure reason. */
          reason?: string;
        }>;
      };
    };
    /** Report an exception return for a waybill at a store (门店异常件退件处理). */
    "sf_express.station_store_handle_exception_return": {
      input: {
        /** The request header block required by this endpoint. */
        header: {
          /**
           * The operator employee number (操作人工号).
           * @minLength 1
           */
          operatorId: string;
          /**
           * The city/department code (城市编码), e.g. 755.
           * @minLength 1
           */
          deptCode?: string;
          /**
           * The district code (区代码), sent as sgs_netcode.
           * @minLength 1
           */
          netCode?: string;
          /**
           * The system access code (系统接入编码) allocated by SF Express.
           * @minLength 1
           */
          accessCode: string;
        };
        /**
         * The agent/store code (合作网点自有编码).
         * @minLength 1
         */
        agent_code: string;
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The SF area code (地区编码), e.g. 755A.
         * @minLength 1
         */
        area_code: string;
        /**
         * The city code (城市编码), e.g. 755.
         * @minLength 1
         */
        city_id?: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /** The direction: 1 = inbound (收件), 2 = outbound (派件). */
        type: "1" | "2";
        /**
         * The exception time in yyyy-MM-dd HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        exception_time: string;
        /**
         * The exception reason.
         * @minLength 1
         */
        exception_reason?: string;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The reported waybill number. */
        waybillNo: string;
      };
    };
    /** Register that a store received parcels handed over by an SF courier (门店接收小哥派件). */
    "sf_express.station_store_receive_delivery": {
      input: {
        /** The request header block required by this endpoint. */
        header: {
          /**
           * The operator employee number (操作人工号).
           * @minLength 1
           */
          operatorId: string;
          /**
           * The city/department code (城市编码), e.g. 755.
           * @minLength 1
           */
          deptCode?: string;
          /**
           * The district code (区代码), sent as sgs_netcode.
           * @minLength 1
           */
          netCode?: string;
          /**
           * The system access code (系统接入编码) allocated by SF Express.
           * @minLength 1
           */
          accessCode: string;
        };
        /**
         * The agent/store code (合作网点自有编码).
         * @minLength 1
         */
        agent_code: string;
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The SF area code (地区编码), e.g. 755A.
         * @minLength 1
         */
        area_code: string;
        /**
         * The city code (城市编码), e.g. 755.
         * @minLength 1
         */
        city_id?: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /** The freight payment side: 0 = sender pays, 1 = receiver pays. */
        receiver_payment: "0" | "1";
        /**
         * The time the store received the parcels in yyyy-MM-dd HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        sf_handover_time: string;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The received waybill number. */
        waybillNo: string;
      };
    };
    /** Submit or update a Hive Box service station's information (丰巢服务站信息接收或更新). */
    "sf_express.station_submit_fc_resource": {
      input: Record<string, unknown>;
      output: {
        /** The station's own store code. */
        storeCode?: string;
        /** The SF-assigned station id (便利店编码/驿站ID). */
        virtualAddr?: string;
        /** The AOI area code. */
        aoiAreaCode?: string;
        /** The AOI code. */
        aoiCode?: string;
        /** The business division code (经营本部代码). */
        cnCode?: string;
        /** The area code. */
        areaCode?: string;
        /** The department code (网点代码). */
        deptCode?: string;
      };
    };
    /** Submit a waybill's receipt information with its fee, service, mark and addition lists (回单信息). */
    "sf_express.station_submit_receipt_info": {
      input: {
        /** The request header block required by this endpoint. */
        header: {
          /**
           * The operator employee number (操作人工号).
           * @minLength 1
           */
          operatorId: string;
          /**
           * The city/department code (城市编码), e.g. 755.
           * @minLength 1
           */
          deptCode?: string;
          /**
           * The district code (区代码), sent as sgs_netcode.
           * @minLength 1
           */
          netCode?: string;
          /**
           * The system access code (系统接入编码) allocated by SF Express.
           * @minLength 1
           */
          accessCode: string;
        };
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The agent/store code (合作网点自有编码).
         * @minLength 1
         */
        agent_code: string;
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The SF area code (地区编码), e.g. 755A.
         * @minLength 1
         */
        area_code: string;
        /**
         * The city code (城市编码), e.g. 755.
         * @minLength 1
         */
        city_id: string;
        /**
         * The client code (客户端编号).
         * @minLength 1
         */
        client_code: string;
        /**
         * The system code (系统编码).
         * @minLength 1
         */
        sys_code: string;
        /**
         * The destination code, precise to the department (目的地代码).
         * @minLength 1
         */
        dest_zone_code: string;
        /**
         * The actual weight; required for receipts without details.
         * @minLength 1
         */
        real_weight_qty?: string;
        /**
         * The delivery courier (派件员).
         * @minLength 1
         */
        deliver_emp_code: string;
        /**
         * The signatory name (签收人).
         * @minLength 1
         */
        subscriber_name: string;
        /**
         * The signing date in yyyy-MM-dd format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        signin_tm: string;
        /**
         * The remark, as a JSON string.
         * @minLength 1
         */
        ext_attr_json?: string;
        /**
         * The delivery type: 1 正常, 2 作废件, 3 转寄, 4 退回, 5 扣件, 6 遗失, 7 补单, 8 满月交单.
         * @minLength 1
         */
        delivered_type: string;
        /**
         * The entry operator employee number (录单人工号).
         * @minLength 1
         */
        inputer_emp_code?: string;
        /**
         * The cargo content code; required for receipts without details.
         * @minLength 1
         */
        cargo_type_code?: string;
        /**
         * The time-limit type code; required for receipts without details.
         * @minLength 1
         */
        limit_type_code?: string;
        /**
         * The business type code; required for receipts without details.
         * @minLength 1
         */
        express_type_code?: string;
        /**
         * The creation date in yyyy-MM-dd format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        create_tm: string;
        /**
         * The fee entries.
         * @minItems 1
         */
        waybill_fee_dto_list: Array<{
          /**
           * The waybill number.
           * @minLength 1
           */
          waybillNo: string;
          /**
           * The fee type code.
           * @minLength 1
           */
          feeTypeCode: string;
          /**
           * The fee amount.
           * @minLength 1
           */
          feeAmt: string;
          /**
           * The collecting department code.
           * @minLength 1
           */
          gatherZoneCode?: string;
          /**
           * The payment type: 1 sender pays, 2 receiver pays, 3 third party.
           * @minLength 1
           */
          paymentTypeCode: string;
          /**
           * The payment change type: 0 none, 1 sender-to-third, 2 receiver-to-third.
           * @minLength 1
           */
          paymentChangeTypeCode?: string;
          /** The payment account; required for monthly settlement, empty for cash. */
          customerAcctCode: string;
          /**
           * The coupon number.
           * @minLength 1
           */
          ticketNo?: string;
          /**
           * The valuation card number.
           * @minLength 1
           */
          valutionAcctCode?: string;
          /**
           * The coupon offset amount.
           * @minLength 1
           */
          ticketOffsetAmt?: string;
          /**
           * The coupon type: 1 weight, 2 cash, 3 discount rate.
           * @minLength 1
           */
          ticketType?: string;
          /**
           * The coupon kind: 1 paper, 2 regular electronic, 3 self-send/pickup, 4 three-in-one electronic, 5 other.
           * @minLength 1
           */
          ticketKind?: string;
          /**
           * The coupon purpose: 1 customer maintenance, 2 public relations, 3 staff welfare.
           * @minLength 1
           */
          ticketPurpose?: string;
          /**
           * Online deduction flag: 0 cash (default), 1 online paid, 2 online unpaid.
           * @minLength 1
           */
          isOnlineDeduct?: string;
          /**
           * The currency code; required when feeAmt is set.
           * @minLength 1
           */
          currencyCode: string;
        }>;
        /** The value-added service entries. */
        waybill_service_dto_list?: Array<{
          /**
           * The waybill number.
           * @minLength 1
           */
          waybillNo: string;
          /**
           * The value-added service code.
           * @minLength 1
           */
          serviceProdCode: string;
          /**
           * Service attribute 1.
           * @minLength 1
           */
          attribute1?: string;
          /**
           * Service attribute 2.
           * @minLength 1
           */
          attribute2?: string;
          /**
           * Service attribute 3.
           * @minLength 1
           */
          attribute3?: string;
          /**
           * Service attribute 4.
           * @minLength 1
           */
          attribute4?: string;
          /**
           * Service attribute 5.
           * @minLength 1
           */
          attribute5?: string;
        }>;
        /** The mark entries. */
        waybill_mark_dto_list?: Array<{
          /**
           * The waybill number.
           * @minLength 1
           */
          waybillNo: string;
          /**
           * The mark type, e.g. ONESELF_PICKUP_FLG (self-pickup) or CUSTOMER_ACCT_NEED_CONFIRM.
           * @minLength 1
           */
          labellingPattern: string;
        }>;
        /** The additional attribute entries. */
        waybill_addition_dto_list?: Array<{
          /**
           * The waybill number.
           * @minLength 1
           */
          waybillNo: string;
          /**
           * The attribute key.
           * @minLength 1
           */
          additionKey: string;
          /**
           * The attribute value.
           * @minLength 1
           */
          additionValues: string;
        }>;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The receipted waybill number. */
        waybillNo: string;
      };
    };
    /** Report a temporary station hold for a waybill (驿站暂存): bill_type 1 = 收端暂存 (route 410), 2 = 派端暂存 (route 210). */
    "sf_express.station_temp_store": {
      input: {
        /** The hold side: 1 = 收端 (receiving), 2 = 派端 (delivery). */
        bill_type: "1" | "2";
        /**
         * The agent/store code (合作网点自有编码).
         * @minLength 1
         */
        agent_code: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The held waybill number. */
        waybillNo: string;
      };
    };
    /** Submit or update the regional outsourcing information (区域外包信息变更) for outsourced station areas. */
    "sf_express.station_update_outsource_info": {
      input: {
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The department code (网点代码).
         * @minLength 1
         */
        dept_code: string;
        /**
         * The outsourced AOI area codes, separated by ';'.
         * @minLength 1
         */
        out_aoi_area_code: string;
        /**
         * The tender creation date in yyyy-MM-dd format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        bidding_create_tm?: string;
        /**
         * The tender win date in yyyy-MM-dd format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        bidding_win_tm?: string;
        /**
         * The employer employee number (雇主工号).
         * @minLength 1
         */
        employer_emp_no: string;
        /**
         * The employer name (雇主姓名).
         * @minLength 1
         */
        employer_emp_name: string;
        /**
         * The employer phone.
         * @minLength 1
         */
        employer_phone?: string;
        /**
         * The outsourcing supplier code (外包供应商编码).
         * @minLength 1
         */
        supplier_code: string;
        /** The service state: 1 in service, 2 out of service. */
        service_state: "1" | "2";
        /**
         * The contract signing state: 1 signed, 2 signing, 3 cancelled.
         * @minimum 1
         * @maximum 3
         */
        service_sign_state: number;
        /**
         * The first contract effective date in yyyy-MM-dd format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        service_sign_tm: string;
        /**
         * The contract start date in yyyy-MM-dd format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        contract_begin_date: string;
        /**
         * The contract end date in yyyy-MM-dd format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        contract_end_date: string;
        /**
         * The employee numbers, separated by ';'.
         * @minLength 1
         */
        employee_no_detail: string;
        /** Employees who left this month, separated by ';' (may be empty). */
        this_month_leave_employee: string;
        /** Employees who left last month, separated by ';' (may be empty). */
        last_month_leave_employee: string;
        /** The per-piece pickup outsourcing incentive. */
        single_pickup_award?: number;
        /** The per-piece delivery outsourcing incentive. */
        single_deliver_award?: number;
        /**
         * Whether the contract is renewed: 0 new, 1 renewed.
         * @minimum 0
         * @maximum 1
         */
        contract_renew: number;
        /**
         * The exit reason; required when service_sign_state is 3 (cancelled).
         * @minLength 1
         */
        cancer_serve_reason?: string;
        /**
         * The tender mark code (标的编码).
         * @minLength 1
         */
        mark_code: string;
        /**
         * The outsourcing mode: 1 self-rented, 2 co-delivery, 3 exclusive, 4 regional outsourcing.
         * @minimum 1
         * @maximum 4
         */
        os_mode: number;
        /**
         * The exit type: 1 voluntary, 2 passive; required when service_sign_state is 3.
         * @minimum 1
         * @maximum 2
         */
        exit_type?: number;
        /**
         * The exit reason category, under 200 characters; required when service_sign_state is 3.
         * @minLength 1
         * @maxLength 200
         */
        exit_reason_type?: string;
        /**
         * The exit date in yyyy-MM-dd format; required when service_sign_state is 3.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        exit_date?: string;
        /**
         * Where exiting employees went, under 200 characters; required when service_sign_state is 3.
         * @minLength 1
         * @maxLength 200
         */
        exit_employee_destination?: string;
        /**
         * The pre-exit state: 1 pre-exit, 2 cancel pre-exit.
         * @minimum 1
         * @maximum 2
         */
        pre_exit_status?: number;
        /**
         * The pre-exit time in yyyy-MM-dd HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        pre_exit_time?: string;
      };
      output: {
        /** The submitted department code. */
        deptCode: string;
      };
    };
    /** Update a 星管家 station's monthly insurance fee (星管家保险费更新). */
    "sf_express.station_update_xgj_insurance_fee": {
      input: {
        /** The request header block required by this endpoint. */
        header: {
          /**
           * The operator employee number (操作人工号).
           * @minLength 1
           */
          operatorId: string;
          /**
           * The city/department code (城市编码), e.g. 755.
           * @minLength 1
           */
          deptCode?: string;
          /**
           * The district code (区代码), sent as sgs_netcode.
           * @minLength 1
           */
          netCode?: string;
          /**
           * The system access code (系统接入编码) allocated by SF Express.
           * @minLength 1
           */
          accessCode: string;
        };
        /**
         * The 星管家 station code (星管家编码).
         * @minLength 1
         */
        star_virtual_addr: string;
        /**
         * The id card number matching the station code.
         * @minLength 1
         */
        identity_card: string;
        /**
         * The billing month in yyyy-mm format.
         * @pattern ^\d{4}-\d{2}$
         */
        safe_month: string;
        /** The insurance fee in CNY. */
        safe_fee?: number;
      };
      output: {
        /** The 星管家 station code. */
        starVirtualAddr: string;
      };
    };
    /** Update a 星管家 waybill's dispatch and review-fee information (星管家运单及好评费更新). */
    "sf_express.station_update_xgj_waybill_fee": {
      input: {
        /** The request header block required by this endpoint. */
        header: {
          /**
           * The operator employee number (操作人工号).
           * @minLength 1
           */
          operatorId: string;
          /**
           * The city/department code (城市编码), e.g. 755.
           * @minLength 1
           */
          deptCode?: string;
          /**
           * The district code (区代码), sent as sgs_netcode.
           * @minLength 1
           */
          netCode?: string;
          /**
           * The system access code (系统接入编码) allocated by SF Express.
           * @minLength 1
           */
          accessCode: string;
        };
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The direction: 1 收件, 2 派件.
         * @minimum 1
         * @maximum 2
         */
        bill_type: number;
        /**
         * The pickup/delivery date.
         * @minLength 1
         */
        bill_date: string;
        /**
         * The 星管家 station code (星管家编码).
         * @minLength 1
         */
        star_virtual_addr: string;
        /**
         * The 星管家 employee number (星管家工号).
         * @minLength 1
         */
        star_emp_code: string;
        /**
         * The 星管家 delivery type: 1 上门, 2 投店, 3 投柜, 4 投外部渠道.
         * @minimum 1
         * @maximum 4
         */
        star_send_type?: number;
        /**
         * Whether the 星管家 system settles: 0 no, 1 yes.
         * @minimum 0
         * @maximum 1
         */
        is_settle: number;
        /** The review fee in CNY (好评费). */
        good_fee?: number;
        /**
         * The push time.
         * @minLength 1
         */
        push_time: string;
        /**
         * The remark.
         * @minLength 1
         */
        remark?: string;
      };
      output: {
        /** The updated waybill number. */
        waybillNo: string;
      };
    };
    /** Upload storefront and interior images for a Hive Box service station (丰巢服务站相册新增). */
    "sf_express.station_upload_fc_images": {
      input: {
        /** The request header block required by this endpoint. */
        header: {
          /**
           * The operator employee number (操作人工号).
           * @minLength 1
           */
          operatorId: string;
          /**
           * The city/department code (城市编码), e.g. 755.
           * @minLength 1
           */
          deptCode?: string;
          /**
           * The district code (区代码), sent as sgs_netcode.
           * @minLength 1
           */
          netCode?: string;
          /**
           * The system access code (系统接入编码) allocated by SF Express.
           * @minLength 1
           */
          accessCode: string;
        };
        /**
         * The station id (驿站ID).
         * @minLength 1
         */
        virtual_addr: string;
        /**
         * The storefront image file names (站点门店照片).
         * @minItems 1
         */
        site_door_file_names: Array<string>;
        /** The interior image file names (站点室内照片). */
        site_inside_file_names?: Array<string>;
        /** The site image file names (站点照片). */
        site_file_names?: Array<string>;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The station id. */
        virtualAddr: string;
      };
    };
    /** Upload one base64 image for a station (图片上传); the image must be at most 200 KB. */
    "sf_express.station_upload_picture": {
      input: {
        /** The request header block required by this endpoint. */
        header: {
          /**
           * The operator employee number (操作人工号).
           * @minLength 1
           */
          operatorId: string;
          /**
           * The city/department code (城市编码), e.g. 755.
           * @minLength 1
           */
          deptCode?: string;
          /**
           * The district code (区代码), sent as sgs_netcode.
           * @minLength 1
           */
          netCode?: string;
          /**
           * The system access code (系统接入编码) allocated by SF Express.
           * @minLength 1
           */
          accessCode: string;
        };
        /**
         * The backend OSS name; get it from your SF contact.
         * @minLength 1
         */
        oss_client_name: string;
        /**
         * The file path id; get it from your SF contact.
         * @minLength 1
         */
        path_id: string;
        /**
         * The image type, e.g. png, jpg, bmp.
         * @minLength 1
         */
        file_type_name: string;
        /**
         * The base64-encoded image content, at most 200 KB.
         * @minLength 1
         */
        base64_content: string;
      };
      output: {
        /** The file path id. */
        pathId: string;
      };
    };
    /** Upload album images for a station (驿站相册新增), such as exterior, license, poster and signage photos. */
    "sf_express.station_upload_store_album": {
      input: {
        /** The request header block required by this endpoint. */
        header: {
          /**
           * The operator employee number (操作人工号).
           * @minLength 1
           */
          operatorId: string;
          /**
           * The city/department code (城市编码), e.g. 755.
           * @minLength 1
           */
          deptCode?: string;
          /**
           * The district code (区代码), sent as sgs_netcode.
           * @minLength 1
           */
          netCode?: string;
          /**
           * The system access code (系统接入编码) allocated by SF Express.
           * @minLength 1
           */
          accessCode: string;
        };
        /**
         * The station id (驿站ID).
         * @minLength 1
         */
        virtual_addr: string;
        /** The exterior image file names (驿站外观文件名称). */
        background_file_names?: Array<string>;
        /** The business license image file names (营业执照文件名称). */
        license_file_names?: Array<string>;
        /** The door-head image file names (门头); 易收发 regional-outsource city stations only. */
        door_head?: Array<string>;
        /** The light-box image file names (灯箱). */
        light_box?: Array<string>;
        /** The image-wall file names (形象墙). */
        image_wall?: Array<string>;
        /** The girdle glass-sticker file names (腰封玻璃贴). */
        girdle?: Array<string>;
        /** The cooperation-plate image file names (授权合作牌). */
        cooperation_license?: Array<string>;
        /** The business-poster image file names (业务介绍海报). */
        business_poster?: Array<string>;
        /** The self-pickup poster file names (自助取件海报). */
        pickup_poster?: Array<string>;
        /** The pickup-desk card file names (寄取件台卡). */
        pickup_desk?: Array<string>;
        /** The wall-system image file names (上墙制度). */
        wall_system?: Array<string>;
        /** The hanging-flag image file names (吊旗8面). */
        hanging_flags?: Array<string>;
        /** The reception-desk image file names (接待台). */
        reception_desk?: Array<string>;
        /** The shelf-sticker image file names (货架贴). */
        shelf_stickers?: Array<string>;
        /** The indication image file names (指示类). */
        indication?: Array<string>;
        /** The tips image file names (提示类). */
        tips?: Array<string>;
        /** The carton-recycling-desk image file names (纸箱回收台). */
        carton_desk?: Array<string>;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The station id. */
        virtualAddr: string;
      };
    };
    /** Upload the exterior and interior images for a township agent station (乡镇代理图片上传). */
    "sf_express.station_upload_village_store_images": {
      input: {
        /** The request header block required by this endpoint. */
        header: {
          /**
           * The operator employee number (操作人工号).
           * @minLength 1
           */
          operatorId: string;
          /**
           * The city/department code (城市编码), e.g. 755.
           * @minLength 1
           */
          deptCode?: string;
          /**
           * The district code (区代码), sent as sgs_netcode.
           * @minLength 1
           */
          netCode?: string;
          /**
           * The system access code (系统接入编码) allocated by SF Express.
           * @minLength 1
           */
          accessCode: string;
        };
        /**
         * The agent point id (代理点ID).
         * @minLength 1
         */
        virtual_addr: string;
        /**
         * The exterior image file names (外部形象名称).
         * @minItems 1
         */
        outer_image_file_names: Array<string>;
        /**
         * The interior image file names (内部文件名称).
         * @minItems 1
         */
        inner_image_file_names: Array<string>;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The agent point id. */
        virtualAddr: string;
      };
    };
    /** Upload identity, face and property images for a 星管家 station (星管家相册新增); identity_file_names must contain exactly 2 images. */
    "sf_express.station_upload_xgj_images": {
      input: {
        /** The request header block required by this endpoint. */
        header: {
          /**
           * The operator employee number (操作人工号).
           * @minLength 1
           */
          operatorId: string;
          /**
           * The city/department code (城市编码), e.g. 755.
           * @minLength 1
           */
          deptCode?: string;
          /**
           * The district code (区代码), sent as sgs_netcode.
           * @minLength 1
           */
          netCode?: string;
          /**
           * The system access code (系统接入编码) allocated by SF Express.
           * @minLength 1
           */
          accessCode: string;
        };
        /**
         * The station id (驿站ID).
         * @minLength 1
         */
        virtual_addr: string;
        /**
         * The id-card image file names; exactly 2 required.
         * @minItems 2
         * @maxItems 2
         */
        identity_file_names: Array<string>;
        /** The face image file names. */
        face_file_names?: Array<string>;
        /** The property image file names. */
        house_file_names?: Array<string>;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The station id. */
        virtualAddr: string;
      };
    };
    /** Create or update a cage cabinet (笼车柜); the sn field is the upsert key. */
    "sf_express.station_upsert_cage_cabinet": {
      input: {
        /**
         * The partner id (合作伙伴ID), e.g. FCKJU7H5.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The cabinet terminal SN; the record is updated when it already exists.
         * @minLength 1
         */
        sn: string;
        /**
         * The cabinet code (柜机编码).
         * @minLength 1
         */
        cabinet_code: string;
        /**
         * The longitude.
         * @minLength 1
         */
        lng: string;
        /**
         * The latitude.
         * @minLength 1
         */
        lat: string;
        /**
         * The grid cell count.
         * @minimum 1
         */
        grid_num: number;
        /**
         * The province name, e.g. 广东省.
         * @minLength 1
         */
        provincename: string;
        /**
         * The city name, e.g. 深圳市.
         * @minLength 1
         */
        cityname: string;
        /**
         * The district or county name, e.g. 南山区.
         * @minLength 1
         */
        countyname: string;
        /**
         * The town or subdistrict name.
         * @minLength 1
         */
        townname: string;
        /**
         * The detailed street address.
         * @minLength 1
         */
        address: string;
        /**
         * The cabinet status: 1 in use, 2 under maintenance, 3 retired.
         * @minimum 1
         * @maximum 3
         */
        status: number;
        /**
         * The community name.
         * @minLength 1
         */
        community_name?: string;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The upserted cabinet terminal SN. */
        sn: string;
      };
    };
    /** Create or update a Hive Box regional-outsource store (丰巢区域外包门店新增及更新). */
    "sf_express.station_upsert_fc_outsource_store": {
      input: Record<string, unknown>;
      output: {
        /** The station's own store code. */
        storeCode?: string;
        /** The SF-assigned station id (便利店编码/驿站ID). */
        virtualAddr?: string;
        /** The AOI area code. */
        aoiAreaCode?: string;
        /** The AOI code. */
        aoiCode?: string;
        /** The business division code (经营本部代码). */
        cnCode?: string;
        /** The area code. */
        areaCode?: string;
        /** The department code (网点代码). */
        deptCode?: string;
      };
    };
    /** Create or update a robot/smart-cabinet channel station (渠道新增/修改). Omit virtual_addr when creating; pass it when updating. */
    "sf_express.station_upsert_robot_channel": {
      input: {
        /**
         * The partner id (合作伙伴ID) for the channel, e.g. YJ12345.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The SF-assigned station id; required when updating, omit when creating.
         * @minLength 1
         */
        virtual_addr?: string;
        /**
         * The robot or cabinet name.
         * @minLength 1
         */
        name: string;
        /**
         * The manufacturer.
         * @minLength 1
         */
        manufactor: string;
        /**
         * The hardware id (机器人编码), at most 32 characters.
         * @minLength 1
         */
        store_code: string;
        /**
         * The status: 0 in use, 1 not in use.
         * @minimum 0
         * @maximum 1
         */
        status: number;
        /**
         * The operation start date in yyyy-MM-dd format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        service_begin_date: string;
        /**
         * The device disable date in yyyy-MM-dd format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        device_forbidden_date: string;
        /**
         * The contact person.
         * @minLength 1
         */
        linkman: string;
        /**
         * The contact phone.
         * @minLength 1
         */
        phone: string;
        /** The maximum locker grid count. */
        max_grid_count?: number;
        /**
         * The service type: 1 drop-off, 2 pickup, 3 both.
         * @minimum 1
         * @maximum 3
         */
        service_content_type: number;
        /**
         * The province name, e.g. 广东省.
         * @minLength 1
         */
        provincename: string;
        /**
         * The city name, e.g. 深圳市.
         * @minLength 1
         */
        cityname: string;
        /**
         * The district or county name, e.g. 南山区.
         * @minLength 1
         */
        countyname: string;
        /**
         * The town or subdistrict name.
         * @minLength 1
         */
        townname: string;
        /**
         * The detailed street address.
         * @minLength 1
         */
        address: string;
        /**
         * The device type: 30 robot, 31 smart cabinet.
         * @minimum 30
         * @maximum 31
         */
        store_type: number;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The SF-assigned station id. */
        virtualAddr: string;
      };
    };
    /** Create or update a city station's base information (驿站基本信息新增/更新). When outsource_flag is 1, outsource_info is saved and required for 驿收发/丰巢 stores. */
    "sf_express.station_upsert_store_info": {
      input: Record<string, unknown>;
      output: {
        /** The station's own store code. */
        storeCode?: string;
        /** The SF-assigned station id (便利店编码/驿站ID). */
        virtualAddr?: string;
        /** The AOI area code. */
        aoiAreaCode?: string;
        /** The AOI code. */
        aoiCode?: string;
        /** The business division code (经营本部代码). */
        cnCode?: string;
        /** The area code. */
        areaCode?: string;
        /** The department code (网点代码). */
        deptCode?: string;
      };
    };
    /** Create or update a 驿收发 regional-outsource store (驿收发区域外包门店新增及更新). */
    "sf_express.station_upsert_ysf_outsource_store": {
      input: Record<string, unknown>;
      output: {
        /** The station's own store code. */
        storeCode?: string;
        /** The SF-assigned station id (便利店编码/驿站ID). */
        virtualAddr?: string;
        /** The AOI area code. */
        aoiAreaCode?: string;
        /** The AOI code. */
        aoiCode?: string;
        /** The business division code (经营本部代码). */
        cnCode?: string;
        /** The area code. */
        areaCode?: string;
        /** The department code (网点代码). */
        deptCode?: string;
      };
    };
    /** Validate a customer's pickup password for a waybill at a partner station (验证取件密码). */
    "sf_express.station_validate_delivery_password": {
      input: {
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The agent/store code (合作网点自有编码).
         * @minLength 1
         */
        agent_code: string;
        /**
         * The pickup password (取件密码).
         * @minLength 1
         */
        pwd: string;
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: {
        /** The validated waybill number. */
        waybillNo: string;
        /** The result message, e.g. 取件密码验证通过. */
        msg?: string;
      };
    };
    /** Check whether a channel and courier may deliver a waybill (派件管控). The channel code is allocated by SF (联系868850). */
    "sf_express.station_verify_delivery_permission": {
      input: {
        /**
         * The courier's employee id (小哥工号).
         * @minLength 1
         */
        sgs_username: string;
        /**
         * The department code (网点编码), e.g. 755Q.
         * @minLength 1
         */
        sgs_netcode: string;
        /**
         * The city code used for traffic splitting (城市编码), e.g. 755.
         * @minLength 1
         */
        sgs_distcode: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
        /**
         * The channel code allocated by SF.
         * @minLength 1
         */
        channel: string;
        /**
         * The operator name.
         * @minLength 1
         */
        opr_id?: string;
        /**
         * The department or city code.
         * @minLength 1
         */
        dept_code?: string;
        /** The scenario code: DELIVERY = 派件 (default), STOREHANDOVER = 便利店交接. */
        operation_scenario?: "DELIVERY" | "STOREHANDOVER";
        /** Extra business attributes sent as a JSON string. */
        extend_json?: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Check whether a Hive Box (丰巢) cabinet drop-off fee settles monthly (丰巢订单结算校验, 订单类型 1 派件投柜). The rental and reservation order types carry different payloads and are not covered. */
    "sf_express.station_verify_fc_settlement": {
      input: {
        /**
         * The operation type: 1 投柜, 2 放弃投柜.
         * @minimum 1
         * @maximum 2
         */
        op_type: number;
        /**
         * The order number.
         * @minLength 1
         */
        order_id: string;
        /**
         * The Hive Box cabinet code; required when op_type is 1.
         * @minLength 1
         */
        cabinet_code?: string;
        /**
         * The courier employee number; required when op_type is 1.
         * @minLength 1
         */
        emp_no?: string;
        /**
         * The contact phone; required when op_type is 1.
         * @minLength 1
         */
        phone?: string;
        /**
         * The payment type: 1 网点钱包（公司月结）; required when op_type is 1.
         * @minimum 1
         */
        payment_type?: number;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no?: string;
        /**
         * The grid size: 1 大, 2 中, 3 小; required when op_type is 1.
         * @minimum 1
         * @maximum 3
         */
        grid_type?: number;
        /**
         * The discount type, when any.
         * @minLength 1
         */
        discount_type?: string;
        /** The discount amount in cents (分), when any. */
        discount_fee?: number;
        /** The charged amount in cents (分); required when op_type is 1. */
        payed_fee?: number;
        /**
         * The drop-off time in yyyy-MM-dd HH:mm:ss format; required when op_type is 1.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        deliver_tm?: string;
      };
      output: {
        /** The monthly-settlement flag: 0 not monthly-settled, 1 monthly-settled. */
        settleFlag: number;
        /** The reason when settleFlag is 0. */
        reason?: string;
        /** The failure code when settleFlag is 0. */
        failCode?: string;
        /** The area code. */
        areaCode: string;
        /** The department code. */
        deptCode: string;
        /** The unique response id. */
        responseId: string;
      };
    };
    /** Check whether a waybill number is an SF Express waybill number, for the station channel. */
    "sf_express.station_verify_waybill_number": {
      input: {
        /**
         * The KB partner id (合作伙伴ID) issued for the station channel, e.g. KBWL8S6H.
         * @minLength 1
         */
        partner_id: string;
        /**
         * The SF waybill number.
         * @minLength 1
         */
        waybill_no: string;
      };
      output: {
        /** The message returned by SF Express. */
        msg: string;
      };
    };
    /** Submit waybill print content for 大同城 citywide freight orders. Asynchronous by default: returns a print batch number to poll with sf_express.query_citywide_print_status; sync mode (max 20 documents) returns the files directly. */
    "sf_express.submit_citywide_print": {
      input: {
        /**
         * The print template code; 拼车集货 uses CITYWIDE_PERSONAL_CARPOOL_001, otherwise the fm_* code from the console.
         * @minLength 1
         */
        template_code: string;
        /**
         * The waybills to print; at most 200 asynchronously, at most 20 when sync is true.
         * @minItems 1
         * @maxItems 200
         */
        documents: Array<{
          /**
           * The master waybill number (母单号).
           * @minLength 1
           */
          masterWaybillNo: string;
          /**
           * The branch waybill number (子单号).
           * @minLength 1
           */
          branchWaybillNo?: string;
          /**
           * The sign-back waybill number (回单号).
           * @minLength 1
           */
          backWaybillNo?: string;
          /** The print sequence number; required for master/branch printing (master = 1). */
          seq?: number;
          /** The total number of waybills in a master/branch shipment; required for master/branch printing. */
          sum?: number;
          /** The waybill ownership check type: 1 = last 6 digits of the recipient phone, 2 = last 6 digits of the sender phone. */
          waybillNoCheckType: "1" | "2";
          /**
           * The phone last-6 value matching waybillNoCheckType.
           * @minLength 1
           */
          waybillNoCheckValue: string;
        }>;
        /** Whether to print synchronously and return the files directly (default false = asynchronous batch). */
        sync?: boolean;
      };
      output: {
        /** The generated PDF files (sync mode only); unordered, sort by seqNo. */
        files?: Array<{
          /** The download URL of the generated file on SF OSS. */
          url: string;
          /** The X-Auth-token header value required to download the file. */
          token: string;
          /** The waybill number the file belongs to. */
          waybillNo: string;
          /** The print sequence number (the document index). */
          seqNo: number;
        }>;
        /** The print batch number for polling the status (async mode only, valid 24h). */
        printBatchNo?: string;
      };
    };
    /** Confirm (deal_type confirm) or cancel (deal_type cancel) an SF Express order before shipment, optionally updating weight, volume, or the recipient address. Confirming requires the waybill numbers. A cancelled order number cannot be reused. */
    "sf_express.update_order": {
      input: {
        /**
         * The client order number.
         * @minLength 1
         * @maxLength 64
         */
        order_id: string;
        /** The operation: confirm (确认) or cancel (取消). Defaults to confirm. */
        deal_type?: "confirm" | "cancel";
        /** Existing waybill numbers and per-package dimensions; required when confirming an order, and used for bringing your own waybill numbers when creating one. */
        waybill_no_info_list?: Array<{
          /** The waybill number type: 1 = mother (母单), 2 = child (子单), 3 = sign-back (签回单). */
          waybill_type: number;
          /**
           * The SF waybill number.
           * @minLength 1
           */
          waybill_no?: string;
          /**
           * The box number; unique per monthly card.
           * @minLength 1
           */
          box_no?: string;
          /** The package length in centimeters. */
          length?: number;
          /** The package width in centimeters. */
          width?: number;
          /** The package height in centimeters. */
          height?: number;
          /** The package weight in kilograms. */
          weight?: number;
        }>;
        /**
         * The updated total weight in kilograms.
         * @exclusiveMinimum 0
         */
        total_weight?: number;
        /** The updated total volume in cubic centimeters. */
        total_volume?: number;
        /** The updated total length in centimeters. */
        total_length?: number;
        /** The updated total width in centimeters. */
        total_width?: number;
        /** The updated total height in centimeters. */
        total_height?: number;
        /** The updated SF product type code. */
        express_type_id?: number;
        /** The value-added services (增值服务) to apply, from the SF value-added service product table. */
        service_list?: Array<{
          /**
           * The value-added service name, for example COD or INSURE.
           * @minLength 1
           */
          name: string;
          /**
           * The service value, for example the insured amount for INSURE.
           * @minLength 1
           */
          value?: string;
          /**
           * Service extension attribute 1.
           * @minLength 1
           */
          value1?: string;
          /**
           * Service extension attribute 2.
           * @minLength 1
           */
          value2?: string;
          /**
           * Service extension attribute 3.
           * @minLength 1
           */
          value3?: string;
          /**
           * Service extension attribute 4.
           * @minLength 1
           */
          value4?: string;
        }>;
        /** Extended attributes as attrName/attrVal pairs, for example pickupAppointEndTime for the pickup deadline. */
        extra_info_list?: Array<{
          /**
           * The extended field name (attrName).
           * @minLength 1
           */
          attr_name: string;
          /** The extended field value (attrVal). */
          attr_val?: string;
        }>;
        /** The updated recipient (收件人) address. */
        dest_contact_info?: {
          /**
           * The company name.
           * @minLength 1
           */
          company?: string;
          /**
           * The contact person name.
           * @minLength 1
           */
          contact: string;
          /**
           * The recipient landline phone number.
           * @minLength 1
           */
          tel?: string;
          /**
           * The recipient mobile phone number.
           * @minLength 1
           */
          mobile?: string;
          /**
           * The two-letter country or region code.
           * @minLength 1
           */
          country: string;
          /**
           * The standard province name.
           * @minLength 1
           */
          province: string;
          /**
           * The standard city name.
           * @minLength 1
           */
          city: string;
          /**
           * The standard district or county name.
           * @minLength 1
           */
          county: string;
          /**
           * The detailed street address.
           * @minLength 1
           */
          address: string;
        };
        /** Whether to notify the courier for pickup via the handheld terminal. */
        is_docall?: boolean;
        /**
         * The special delivery type code.
         * @minLength 1
         */
        special_delivery_type_code?: string;
        /**
         * The special delivery value.
         * @minLength 1
         */
        special_delivery_value?: string;
        /**
         * The start of the requested pickup window (要求上门取件开始时间) in YYYY-MM-DD HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        send_start_time?: string;
        /**
         * The end of the requested pickup window (预约取件截止时间) in YYYY-MM-DD HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$
         */
        pickup_appoint_end_time?: string;
        /**
         * The customs declaration batch.
         * @minLength 1
         */
        customs_batchs?: string;
        /**
         * The pickup courier employee code.
         * @minLength 1
         */
        collect_emp_code?: string;
        /**
         * The origin site code.
         * @minLength 1
         */
        source_zone_code?: string;
        /**
         * The destination site code.
         * @minLength 1
         */
        dest_zone_code?: string;
        /**
         * The remark.
         * @minLength 1
         * @maxLength 100
         */
        remark?: string;
      };
      output: {
        /** The client order number echoed back. */
        orderId: string;
        /** The result status: 1 = the order number does not match the SF waybill, 2 = success. */
        resStatus: number;
        /** The SF waybill numbers. */
        waybillNoInfoList: Array<{
          /** The waybill number type: 1 = mother (母单), 2 = child (子单), 3 = sign-back (签回单). */
          waybillType?: number;
          /** The SF waybill number. */
          waybillNo: string;
          /** The box number. */
          boxNo?: string;
        }>;
      };
    };
    /** Check whether a waybill number is a valid SF Express waybill number. */
    "sf_express.validate_waybill_no": {
      input: {
        /**
         * The SF Express waybill number (顺丰运单号).
         * @minLength 1
         */
        waybill_no: string;
      };
      output: {
        /** The checked waybill number. */
        waybillNo: string;
        /** Whether the waybill number is valid. */
        valid: boolean;
      };
    };
  }
}
