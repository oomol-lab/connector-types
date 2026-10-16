import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add up to 50 products to a seller-defined category. */
    "1688.add_products_to_category": {
      input: {
        /** Offer ids accepted by 1688. */
        offerIds: string;
        /** Category ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        categoryId: number | string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Agree to an exchange refund and provide the return address; only exchange disputes are supported. */
    "1688.agree_refund_exchange": {
      input: {
        /** Input accepted by 1688. */
        input: {
          /** Street address. */
          address: string;
          /** Description accepted by 1688. */
          description?: string;
          /** Dispute type accepted by 1688. */
          disputeType?: number;
          /** Recipient full name. */
          fullName: string;
          /** Mobile phone accepted by 1688. */
          mobilePhone?: string;
          /** Landline phone number. */
          phone?: string;
          /** Post accepted by 1688. */
          post?: string;
          /** Refund dispute ID. */
          refundId: string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Agree to reship goods for a reshipping dispute. */
    "1688.agree_refund_reshipping": {
      input: {
        /** Input accepted by 1688. */
        input: {
          /** Description accepted by 1688. */
          description?: string;
          /** Dispute type accepted by 1688. */
          disputeType?: number;
          /** Refund dispute ID. */
          refundId: string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Agree to a return-of-goods refund and provide the seller's return address. */
    "1688.agree_return_goods": {
      input: {
        /** Refund dispute ID. */
        refundId: string;
        /** Street address. */
        address?: string;
        /** Post accepted by 1688. */
        post?: string;
        /** Landline phone number. */
        phone?: string;
        /** Recipient full name. */
        fullName?: string;
        /** Mobile phone accepted by 1688. */
        mobilePhone?: string;
        /** Discription accepted by 1688. */
        discription?: string;
        /** Dispute type accepted by 1688. */
        disputeType?: number;
      };
      output: {
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Ext error message returned by 1688. */
        extErrorMessage?: string;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Trigger an automatic refund after returned goods enter the warehouse. */
    "1688.auto_refund_returned_order": {
      input: {
        /** Order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        orderId: number | string;
        /** Refund dispute ID. */
        refundId: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Code returned by 1688. */
        code?: string;
        /** Buyer message, at most 500 characters when creating an order. */
        message?: string;
        /** Sub code returned by 1688. */
        subCode?: string;
        /** Sub message returned by 1688. */
        subMessage?: string;
        /** Ret codes returned by 1688. */
        retCodes?: string;
        [key: string]: unknown;
      };
    };
    /** Cancel an AliExpress JIT pickup order. */
    "1688.cancel_ae_pickup_order": {
      input: {
        /** Order ID. */
        orderId: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Cancel an eligible unpaid order as buyer or seller; orders less than ten seconds old may reject cancellation. */
    "1688.cancel_order": {
      input: {
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
        /** Trade order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        tradeID: number | string;
        /** Cancel reason accepted by 1688. */
        cancelReason: string;
        /** Remark accepted by 1688. */
        remark?: string;
      };
      output: {
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Cancel a Cainiao electronic waybill. */
    "1688.cancel_waybill": {
      input: {
        /** Waybill apply cancel request accepted by 1688. */
        waybillApplyCancelRequest: {
          /** Cp code accepted by 1688. */
          cpCode: string;
          /** Waybill code accepted by 1688. */
          waybillCode: string;
        };
        /** Client info dto accepted by 1688. */
        clientInfoDTO?: {
          /** Description accepted by 1688. */
          description: string;
          /** Object id accepted by 1688. */
          objectId: string;
          /** Operator id accepted by 1688. */
          operatorId: string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Check whether AliExpress JIT orders share the same shipping address. */
    "1688.check_ae_shipping_addresses": {
      input: {
        /** Order ids accepted by 1688. */
        orderIds: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Check support for multi-package shipping. */
    "1688.check_multi_package_shipping": {
      input: Record<string, never>;
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Check whether the specified products can be edited. */
    "1688.check_products_modifiable": {
      input: {
        /** Product IDs. */
        productIds: Array<number | string>;
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Array<Record<string, unknown>>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Check video-center capacity for supported Work shop videos. */
    "1688.check_video_capacity": {
      input: Record<string, never>;
      output: {
        /** Allow total videos returned by 1688. */
        allowTotalVideos?: number;
        /** Already total videos returned by 1688. */
        alreadyTotalVideos?: number;
        [key: string]: unknown;
      };
    };
    /** Count logistics monitoring exceptions. */
    "1688.count_logistics_exceptions": {
      input: {
        /** Arg0 accepted by 1688. */
        arg0: {
          /** Event date end accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          eventDateEnd?: number | string;
          /** Event date start accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          eventDateStart?: number | string;
          /** Exception code accepted by 1688. */
          exceptionCode: string;
          /** Offer ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
          offerId?: number | string;
          /** Order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
          orderId?: number | string;
          /** Page number, starting at 1. */
          pageNo: number;
          /** Maximum records per page. */
          pageSize: number;
          /** Sub exception code accepted by 1688. */
          subExceptionCode: string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create an AliExpress JIT pickup order for the specified trade orders. */
    "1688.create_ae_pickup_order": {
      input: {
        /** Order ids accepted by 1688. */
        orderIds: string;
        /** Type accepted by 1688. */
        type?: string;
        /** Total weight accepted by 1688. */
        totalWeight: string;
        /** Total volume accepted by 1688. */
        totalVolume: string;
        /** Total package accepted by 1688. */
        totalPackage: number;
        /** Address id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        addressId: number | string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a photo album with private, public or password-protected access. */
    "1688.create_album": {
      input: {
        /**
         * Name accepted by 1688.
         * @maxLength 30
         */
        name: string;
        /**
         * Description accepted by 1688.
         * @maxLength 2000
         */
        description?: string;
        /** Album visibility: 0=private, 1=public, 2=password-protected. Public/password access requires a shop. */
        authority: 0 | 1 | 2;
        /**
         * Album access password. For a new password-protected album, supply 4 to 16 non-Chinese characters.
         * @minLength 4
         * @maxLength 16
         */
        password?: string;
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
      };
      output: {
        /** Album id returned by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        albumID?: number | string;
        /** Err code returned by 1688. */
        errCode?: string;
        /** Upstream error message, when present. */
        errMsg?: string;
        [key: string]: unknown;
      };
    };
    /** Create a wholesale or distribution purchase order. Omit tradeType to let 1688 select an available payment method; use outOrderId for idempotency. */
    "1688.create_order": {
      input: {
        /** Ordering flow, such as general, fenxiao, saleproxy, paired, repurchase, boutiquefenxiao or boutiquepifa. Flow affects prices and buyer protection. */
        flow: string;
        /** Sub user id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        subUserId?: number | string;
        /**
         * Buyer message, at most 500 characters when creating an order.
         * @maxLength 500
         */
        message?: string;
        /** Receiving address. Supply region names and a street address of at most 200 characters. */
        addressParam: {
          /** Address id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          addressId?: number | string;
          /** Recipient full name. */
          fullName: string;
          /** Mobile phone number. */
          mobile?: string;
          /** Landline phone number. */
          phone?: string;
          /** Postal code. */
          postCode?: string;
          /** City name. */
          cityText: string;
          /** Province name. */
          provinceText: string;
          /** District name. */
          areaText: string;
          /** Town or subdistrict name. */
          townText?: string;
          /**
           * Street address.
           * @maxLength 200
           */
          address: string;
          /** District code accepted by 1688. */
          districtCode?: string;
        };
        /** Products and quantities from the same supplier. */
        cargoParamList: Array<{
          /** Offer ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
          offerId?: number | string;
          /** Open offer id accepted by 1688. */
          openOfferId?: string;
          /** 1688 product specification ID. */
          specId: string;
          /** Product quantity. */
          quantity: number;
          /** Out member id accepted by 1688. */
          outMemberId?: string;
          /** Biz fen xiao out sub order info accepted by 1688. */
          bizFenXiaoOutSubOrderInfo?: Array<{
            /** Out sub order id accepted by 1688. */
            outSubOrderId?: string;
            /** Out sku id accepted by 1688. */
            outSkuId?: string;
            /** Out sub gmv accepted by 1688. */
            outSubGmv?: number;
            /** Out sub qty accepted by 1688. */
            outSubQty?: number;
            /** Out sub gmv discount accepted by 1688. */
            outSubGmvDiscount?: number;
            /** Out sub gmv post accepted by 1688. */
            outSubGmvPost?: number;
            /** Out sub gmv receive accepted by 1688. */
            outSubGmvReceive?: number;
            /** Out sub order pay time accepted by 1688. */
            outSubOrderPayTime?: string;
            /** Out sub order latest delivery time accepted by 1688. */
            outSubOrderLatestDeliveryTime?: string;
          }>;
          /** Out item code accepted by 1688. */
          outItemCode?: string;
          /** Instant retail param accepted by 1688. */
          instantRetailParam?: {
            /** Tenant id accepted by 1688. */
            tenantId?: string;
            /** Selection url accepted by 1688. */
            selectionUrl?: string;
          };
        }>;
        /** Invoice information. */
        invoiceParam?: {
          /** Invoice type accepted by 1688. */
          invoiceType: number;
          /** Province name. */
          provinceText: string;
          /** City name. */
          cityText: string;
          /** District name. */
          areaText: string;
          /** Town or subdistrict name. */
          townText: string;
          /** Postal code. */
          postCode: string;
          /** Street address. */
          address: string;
          /** Recipient full name. */
          fullName: string;
          /** Landline phone number. */
          phone: string;
          /** Mobile phone number. */
          mobile: string;
          /** Company name accepted by 1688. */
          companyName: string;
          /** Taxpayer identifier accepted by 1688. */
          taxpayerIdentifier: string;
          /** Bank and account accepted by 1688. */
          bankAndAccount: string;
          /** Local invoice id accepted by 1688. */
          localInvoiceId: string;
        };
        /** Isv biz type str accepted by 1688. */
        isvBizTypeStr?: string;
        /** Isv biz type erp accepted by 1688. */
        isvBizTypeErp?: boolean;
        /** Isv biz type pd accepted by 1688. */
        isvBizTypePD?: boolean;
        /** Shop promotion id accepted by 1688. */
        shopPromotionId?: string;
        /** Upstream trade/payment type. For order creation use a tradeModeNameList value from preview_order; omitting it lets 1688 choose an available method. */
        tradeType?: string;
        /** Encrypt out order info accepted by 1688. */
        encryptOutOrderInfo?: {
          /** Encrypt order accepted by 1688. */
          encryptOrder: boolean;
          /** Out platform order no accepted by 1688. */
          outPlatformOrderNo: string;
          /** Out platform supply order no accepted by 1688. */
          outPlatformSupplyOrderNo?: string;
          /** Out platform code accepted by 1688. */
          outPlatformCode: string;
          /** Out platform appkey accepted by 1688. */
          outPlatformAppkey: string;
          /** Out shop id accepted by 1688. */
          outShopId?: string;
          /** Out shop name accepted by 1688. */
          outShopName?: string;
          /** Out origin address accepted by 1688. */
          outOriginAddress?: {
            /** Province accepted by 1688. */
            province: {
              /** Code accepted by 1688. */
              code: string;
              /** Name accepted by 1688. */
              name: string;
            };
            /** City accepted by 1688. */
            city: {
              /** Code accepted by 1688. */
              code: string;
              /** Name accepted by 1688. */
              name: string;
            };
            /** Area accepted by 1688. */
            area: {
              /** Code accepted by 1688. */
              code: string;
              /** Name accepted by 1688. */
              name: string;
            };
            /** Town accepted by 1688. */
            town?: {
              /** Code accepted by 1688. */
              code: string;
              /** Name accepted by 1688. */
              name: string;
            };
            /** Street address. */
            address?: string;
            /** Postal code. */
            postCode?: string;
          };
          /** OAID or CAID is required; only orders obtained through 1688 Open Platform are supported. */
          oaid?: string;
          /** Out patform extra info accepted by 1688. */
          outPatformExtraInfo?: string;
          /** Encrypt receiver name accepted by 1688. */
          encryptReceiverName?: string;
          /** Encrypt receiver mobile accepted by 1688. */
          encryptReceiverMobile?: string;
          /** Encrypt receiver address accepted by 1688. */
          encryptReceiverAddress?: string;
          /** Out platform sub code accepted by 1688. */
          outPlatformSubCode?: string;
          /** Out supplier id accepted by 1688. */
          outSupplierId?: string;
          /** Out order pay time accepted by 1688. */
          outOrderPayTime?: string;
          /** Out latest delivery time accepted by 1688. */
          outLatestDeliveryTime?: string;
        };
        /** Instance id accepted by 1688. */
        instanceId?: string;
        /** Proxy settle record id accepted by 1688. */
        proxySettleRecordId?: string;
        /** Fenxiao channel accepted by 1688. */
        fenxiaoChannel?: string;
        /** External order ID used for idempotency and subsequent order lookup. */
        outOrderId?: string;
        /** Pre select pay channel accepted by 1688. */
        preSelectPayChannel?: string;
        /** Deprecated upstream parameter; prefer useRedEnvelope. */
        noUseRedEnvelope?: boolean;
        /** Whether to use a red envelope: y=yes, n=no; default y. */
        useRedEnvelope?: string;
        /** Extend param accepted by 1688. */
        extendParam?: {
          /** Out shop id inner accepted by 1688. */
          outShopIdInner?: string;
          /** Out shop name inner accepted by 1688. */
          outShopNameInner?: string;
        };
        /** Whether to use official logistics pickup. */
        useOfficialSolution?: boolean;
        /** Official pickup solutions; required when useOfficialSolution is true. */
        useOfficialSolutionModelList?: Array<{
          /** Order group accepted by 1688. */
          orderGroup: string;
          /** Use official solution code accepted by 1688. */
          useOfficialSolutionCode: string;
        }>;
        /** From agent accepted by 1688. */
        fromAgent?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Code returned by 1688. */
        code?: string;
        /** Buyer message, at most 500 characters when creating an order. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Publish a product using the current category schema returned by get_product_schema. */
    "1688.create_product": {
      input: {
        /** Product category ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        catId?: number | string;
        /** Publishing scene: cbu for categoryType 1, industry for 2, popular for 3, or processing for customization. For industry supply bizParam.industryCategoryId. */
        scene: string;
        /** Product-schema data. Supply a JSON object or its encoded string using the current publishing schema. */
        dataBody: string | Record<string, unknown>;
        /** Biz param accepted by 1688. */
        bizParam?: {
          /** Industry category id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          industryCategoryId: number | string;
          /** Isv opportunity sign accepted by 1688. */
          isvOpportunitySign?: boolean;
          /** Opp id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          oppId?: number | string;
        };
        /** Source platform code published by 1688, such as pinduoduo, tm, thyny, douyin, shopify or other. */
        productSourceChannels?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a seller contract with payment, freight and order agreements. */
    "1688.create_seller_contract": {
      input: {
        /** Buyer accepted by 1688. */
        buyer: string;
        /** Name accepted by 1688. */
        name: string;
        /** Start time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        startTime?: string;
        /** End time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        endTime?: string;
        /** Remark accepted by 1688. */
        remark?: string;
        /** Freight agreement: 0=free shipping, 1=fixed fee per order, 2=total contract freight. */
        postFeeChargeType: {
          /** Type accepted by 1688. */
          type: string;
          /** Post fee accepted by 1688. */
          postFee: string;
        };
        /** Post fee accepted by 1688. */
        postFee: string;
        /** Payment agreement: autoPay or manualPay. */
        payMode: string;
        /** Preferred MyBank payment channel: mybank_eft for corporate accounts or mybank_peft for individuals. Check enrollment first. */
        firstPayChannel: string;
        /** Order data accepted by 1688. */
        orderData: Array<{
          /** Out biz order id accepted by 1688. */
          outBizOrderId: string;
          /** Cargo data accepted by 1688. */
          cargoData: Array<{
            /** Price accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
            price: number | string;
            /** Product ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
            productId: number | string;
            /** Product quantity. Use a decimal string for IDs outside the JavaScript safe integer range. */
            quantity: number | string;
            /** Sku id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
            skuId: number | string;
            /** 1688 product specification ID. */
            specId: string;
          }>;
          /** Receive address accepted by 1688. */
          receiveAddress: {
            /** Address id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
            addressId: number | string;
            /** Recipient full name. */
            fullName: string;
            /** Mobile phone number. */
            mobile: string;
            /** Landline phone number. */
            phone: string;
            /** Postal code. */
            postCode: string;
            /** City name. */
            cityText: string;
            /** Province name. */
            provinceText: string;
            /** District name. */
            areaText: string;
            /** Town or subdistrict name. */
            townText: string;
            /** Street address. */
            address: string;
            /** District code accepted by 1688. */
            districtCode: string;
          };
        }>;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a seller-defined product category; parentID 0 creates a root category. */
    "1688.create_user_category": {
      input: {
        /** Group name accepted by 1688. */
        groupName: string;
        /** Parent id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        parentID: number | string;
      };
      output: {
        /** Product category ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        catId?: number | string;
        [key: string]: unknown;
      };
    };
    /** Allocate a Cainiao electronic waybill number and print data. */
    "1688.create_waybill": {
      input: {
        /** Waybill cloud print apply new request accepted by 1688. */
        waybillCloudPrintApplyNewRequest: {
          /** Brand code accepted by 1688. */
          brandCode?: string;
          /** Call door pick up accepted by 1688. */
          callDoorPickUp: boolean;
          /** Cp code accepted by 1688. */
          cpCode: string;
          /** Customer code accepted by 1688. */
          customerCode?: string;
          /** Dms sorting accepted by 1688. */
          dmsSorting?: boolean;
          /** Door pick up end time accepted by 1688. */
          doorPickUpEndTime?: string;
          /** Door pick up time accepted by 1688. */
          doorPickUpTime?: string;
          /** Extra info accepted by 1688. */
          extraInfo?: string;
          /** Multi packages shipment accepted by 1688. */
          multiPackagesShipment?: boolean;
          /** Need encrypt accepted by 1688. */
          needEncrypt?: boolean;
          /** Product code accepted by 1688. */
          productCode?: string;
          /** Resource code accepted by 1688. */
          resourceCode?: string;
          /** Sender accepted by 1688. */
          sender: {
            /** Street address. */
            address: {
              /** City accepted by 1688. */
              city?: string;
              /** Detail accepted by 1688. */
              detail: string;
              /** District accepted by 1688. */
              district?: string;
              /** Province accepted by 1688. */
              province: string;
              /** Town accepted by 1688. */
              town?: string;
            };
            /** Encrypted recipient address identifier. */
            caid?: string;
            /** Mobile phone number. */
            mobile?: string;
            /** Name accepted by 1688. */
            name: string;
            /** Object id accepted by 1688. */
            objectId?: string;
            /** Landline phone number. */
            phone?: string;
            /** Tid accepted by 1688. */
            tid?: string;
          };
          /** Shipping address accepted by 1688. */
          shippingAddress?: {
            /** Address detail accepted by 1688. */
            addressDetail: string;
            /** Area id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
            areaId: number | string;
            /** Area name accepted by 1688. */
            areaName: string;
            /** City id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
            cityId: number | string;
            /** City name accepted by 1688. */
            cityName: string;
            /** Object id accepted by 1688. */
            objectId: string;
            /** Province id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
            provinceId: number | string;
            /** Province name accepted by 1688. */
            provinceName: string;
            /** Town id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
            townId: number | string;
            /** Town name accepted by 1688. */
            townName: string;
            /** Village id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
            villageId: number | string;
            /** Village name accepted by 1688. */
            villageName: string;
            /** Waybill address id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
            waybillAddressId: number | string;
            /** Zip accepted by 1688. */
            zip: string;
          };
          /** Shipping branch code accepted by 1688. */
          shippingBranchCode?: string;
          /** Store code accepted by 1688. */
          storeCode?: string;
          /** Three pl timing accepted by 1688. */
          threePlTiming: boolean;
          /**
           * Trade order info dtos accepted by 1688.
           * @maxItems 10
           */
          tradeOrderInfoDTOs: Array<{
            /** Logistics services accepted by 1688. */
            logisticsServices?: string;
            /** Object id accepted by 1688. */
            objectId: string;
            /** Order info accepted by 1688. */
            orderInfo: {
              /** Order channels type accepted by 1688. */
              orderChannelsType: string;
              /** Out trade order list accepted by 1688. */
              outTradeOrderList?: Array<string>;
              /** Out trade sub order list accepted by 1688. */
              outTradeSubOrderList?: Array<string>;
              /** Trade order list accepted by 1688. */
              tradeOrderList: Array<string>;
            };
            /** Package info accepted by 1688. */
            packageInfo: {
              /** Id accepted by 1688. */
              id?: string;
              /** Items accepted by 1688. */
              items: Array<{
                /** Count accepted by 1688. */
                count: number;
                /** Name accepted by 1688. */
                name: string;
                /** Object id accepted by 1688. */
                objectId?: string;
              }>;
              /** Good value accepted by 1688. */
              goodValue?: number;
              /** Goods description accepted by 1688. */
              goodsDescription?: string;
              /** Height accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
              height?: number | string;
              /** Length accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
              length?: number | string;
              /** Object id accepted by 1688. */
              objectId?: string;
              /** Packaging description accepted by 1688. */
              packagingDescription?: string;
              /** Total packages count accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
              totalPackagesCount?: number | string;
              /** Volume accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
              volume?: number | string;
              /** Weight accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
              weight?: number | string;
              /** Width accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
              width?: number | string;
            };
            /** Recipient accepted by 1688. */
            recipient: {
              /** Street address. */
              address: {
                /** City accepted by 1688. */
                city?: string;
                /** Detail accepted by 1688. */
                detail: string;
                /** District accepted by 1688. */
                district?: string;
                /** Province accepted by 1688. */
                province: string;
                /** Town accepted by 1688. */
                town?: string;
              };
              /** Encrypted recipient address identifier. */
              caid?: string;
              /** Mobile phone number. */
              mobile?: string;
              /** Name accepted by 1688. */
              name: string;
              /** Object id accepted by 1688. */
              objectId?: string;
              /** Landline phone number. */
              phone?: string;
              /** Tid accepted by 1688. */
              tid?: string;
            };
            /** Template url accepted by 1688. */
            templateURL: string;
            /** Apply user accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
            applyUser: number | string;
            /** Waybill code accepted by 1688. */
            waybillCode?: string;
          }>;
        };
        /** Client info dto accepted by 1688. */
        clientInfoDTO: {
          /** Description accepted by 1688. */
          description?: string;
          /** Object id accepted by 1688. */
          objectId?: string;
          /** Operator id accepted by 1688. */
          operatorId?: string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get invoice information for an order authorized to the current user. */
    "1688.decrypt_invoice": {
      input: {
        /** Order ID. */
        orderId: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Resolve buyer recipient information using the authorized order ID and caid. */
    "1688.decrypt_order_recipient": {
      input: {
        /** Order ID. */
        orderId: string;
        /** Encrypted recipient address identifier. */
        caid: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Delete a photo album. */
    "1688.delete_album": {
      input: {
        /** Album id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        albumID: number | string;
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
      };
      output: {
        /** Is success returned by 1688. */
        isSuccess?: boolean;
        /** Reason returned by 1688. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Delete a seller invoice. */
    "1688.delete_invoice": {
      input: {
        /** Input accepted by 1688. */
        input: {
          /** Order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
          orderId: number | string;
          /** Invoice no accepted by 1688. */
          invoiceNo?: string;
          /** Out biz id accepted by 1688. */
          outBizId?: string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Delete a photo. */
    "1688.delete_photo": {
      input: {
        /** Photo id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        photoID: number | string;
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
      };
      output: {
        /** Is success returned by 1688. */
        isSuccess?: boolean;
        /** Reason returned by 1688. */
        reason?: string;
        /** Image id returned by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        imageId?: number | string;
        /** Url returned by 1688. */
        url?: string;
        /** Product IDs. */
        productIds?: Array<number | string>;
        [key: string]: unknown;
      };
    };
    /** Delete at most 20 photos in one request. */
    "1688.delete_photos": {
      input: {
        /**
         * Image ids accepted by 1688.
         * @maxItems 20
         */
        imageIds: Array<number | string>;
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Array<Record<string, unknown>>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Move a product to the recycle bin; permanent deletion or restoration is performed on the website. */
    "1688.delete_product": {
      input: {
        /** Product ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        productID: number | string;
      };
      output: {
        /** Is success returned by 1688. */
        isSuccess?: boolean;
        /** Reason returned by 1688. */
        reason?: string;
        [key: string]: unknown;
      };
    };
    /** Delete a video from the 1688 video center. */
    "1688.delete_video": {
      input: {
        /** Video id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        videoId: number | string;
      };
      output: {
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Code returned by 1688. */
        code?: string;
        /** Buyer message, at most 500 characters when creating an order. */
        message?: string;
        /** Result returned by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        result?: number | string;
        [key: string]: unknown;
      };
    };
    /** Edit a product using its current category publishing schema. */
    "1688.edit_product": {
      input: {
        /** Product category ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        catId?: number | string;
        /** Offer ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        offerId: number | string;
        /** Business scenario accepted by this endpoint. */
        scene: string;
        /** Product-schema data. Supply a JSON object or its encoded string using the current publishing schema. */
        dataBody: string | Record<string, unknown>;
        /** Biz param accepted by 1688. */
        bizParam?: {
          /** Industry category id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          industryCategoryId: number | string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Convert a login ID to OpenUID for a manually initiated operation; 1688 prohibits automated batch use of this endpoint. */
    "1688.encrypt_login_id": {
      input: {
        /** 1688 login ID. */
        loginId: string;
      };
      output: {
        /** Encrypted 1688 user identifier. */
        openUid?: string;
        [key: string]: unknown;
      };
    };
    /** Batch-convert login IDs to OpenUIDs for ERP order management; null entries are ignored by 1688. */
    "1688.encrypt_login_ids": {
      input: {
        /** Input accepted by 1688. */
        input: {
          /** Login id list accepted by 1688. */
          loginIdList: Array<{
            /** Value accepted by 1688. */
            value?: string;
          }>;
        };
      };
      output: {
        /** Output returned by 1688. */
        output?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Mark the seller's specified offers expired using the legacy offer endpoint. */
    "1688.expire_offers": {
      input: {
        /** Offer ids accepted by 1688. */
        offerIds: string;
      };
      output: {
        /** Total returned by 1688. */
        total?: number;
        [key: string]: unknown;
      };
    };
    /** Take the specified products off sale by marking them expired. */
    "1688.expire_products": {
      input: {
        /** Product IDs. */
        productIds: Array<number | string>;
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Array<Record<string, unknown>>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Extend the buyer's confirmation period as the seller. */
    "1688.extend_order_confirmation": {
      input: {
        /** Order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        orderId: number | string;
        /** Sub pay order id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        subPayOrderId?: number | string;
        /** Delayed days accepted by 1688. */
        delayedDays: number;
      };
      output: {
        /** Result returned by 1688. */
        result?: boolean;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMsg?: string;
        [key: string]: unknown;
      };
    };
    /** Find seller-side order IDs by recipient information. */
    "1688.find_orders_by_recipient": {
      input: {
        /** Create start accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        createStart?: string;
        /** Create end accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        createEnd?: string;
        /** Name accepted by 1688. */
        name?: string;
        /** Mobile phone accepted by 1688. */
        mobilePhone?: string;
        /** Status accepted by 1688. */
        status?: string;
        /** Page index. */
        pageIndex: number;
        /**
         * Maximum records per page.
         * @minimum 1
         */
        pageSize: number;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Find a supplier's products by cargo number or product ID; the supplier ID is required. */
    "1688.find_supplier_products": {
      input: {
        /** Request accepted by 1688. */
        request: {
          /** Supply user id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          supplyUserId: number | string;
          /** Seller login id accepted by 1688. */
          sellerLoginId: string;
          /** Id list of supplier accepted by 1688. */
          idListOfSupplier: Array<{
            /** Sku id accepted by 1688. */
            skuId: string;
            /** Spu id accepted by 1688. */
            spuId: string;
            /** Sku name accepted by 1688. */
            skuName: string;
          }>;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Array<Record<string, unknown>>;
        /** Whether the upstream operation succeeded. */
        success?: string;
        /** Error info returned by 1688. */
        errorInfo?: string;
        /** Upstream error code, when present. */
        errorCode?: string;
        [key: string]: unknown;
      };
    };
    /** Get basic information for the authorized 1688 account. */
    "1688.get_account": {
      input: Record<string, never>;
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get an address code and its immediate children. */
    "1688.get_address_code": {
      input: {
        /** Area code accepted by 1688. */
        areaCode: string;
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Get shipping and receiving addresses for an AliExpress JIT order. */
    "1688.get_ae_order_addresses": {
      input: {
        /** Order ID. */
        orderId: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get pickup information for AliExpress JIT orders. */
    "1688.get_ae_pickup_orders": {
      input: {
        /** Order ids accepted by 1688. */
        orderIds: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get buyer-side logistics tracking; dedicated API permission is required and updates may be delayed. */
    "1688.get_buyer_logistics_trace": {
      input: {
        /** Logistics id accepted by 1688. */
        logisticsId?: string;
        /** Order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        orderId: number | string;
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
      };
      output: {
        /** Logistics trace returned by 1688. */
        logisticsTrace?: Array<Record<string, unknown>>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Cross package fulfillment dto returned by 1688. */
        crossPackageFulfillmentDTO?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get buyer-side order details with selectable information fields using version 1. */
    "1688.get_buyer_order": {
      input: {
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
        /** Order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        orderId: number | string;
        /** Comma-separated response sections supported by this endpoint. */
        includeFields?: string;
        /** Additional order attribute keys to include. */
        attributeKeys?: Array<string>;
        /** External order ID used for idempotency and subsequent order lookup. */
        outOrderId?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Whether the upstream operation succeeded. */
        success?: string;
        [key: string]: unknown;
      };
    };
    /** Get buyer-side order details using version 2. */
    "1688.get_buyer_order_v2": {
      input: {
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
        /** Order ID. */
        orderId: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Get buyer-protection services available or enabled for a product. */
    "1688.get_buyer_protection": {
      input: {
        /** Offer ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        offerId?: number | string;
        /** Sub category id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        subCategoryId: number | string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Code returned by 1688. */
        code?: string;
        /** Buyer message, at most 500 characters when creating an order. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Get buyer-side refund details and optional operation history. */
    "1688.get_buyer_refund": {
      input: {
        /** Refund dispute ID. */
        refundId: string;
        /** Need time out info accepted by 1688. */
        needTimeOutInfo?: boolean;
        /** Need order refund operation accepted by 1688. */
        needOrderRefundOperation?: boolean;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Ext error message returned by 1688. */
        extErrorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Get a category and its children; use categoryID 0 to list root categories. */
    "1688.get_category": {
      input: {
        /** Category ID; 0 lists root categories. Use a decimal string for IDs outside the JavaScript safe integer range. */
        categoryID: number | string;
      };
      output: {
        /** Succes returned by 1688. */
        succes?: string;
        /** Category info returned by 1688. */
        categoryInfo?: Array<Record<string, unknown>>;
        /** Upstream error message, when present. */
        errorMsg?: string;
        /** Upstream error code, when present. */
        errorCode?: string;
        [key: string]: unknown;
      };
    };
    /** Get company information for a 1688 member. */
    "1688.get_company": {
      input: {
        /** 1688 member ID. */
        memberId: string;
        /** Return fields accepted by 1688. */
        returnFields?: Array<string>;
      };
      output: {
        /** Company returned by 1688. */
        company?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get customization services by category and optional product. */
    "1688.get_customization_services": {
      input: {
        /** Offer ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        offerId?: number | string;
        /** Cate1 id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        cate1Id: number | string;
        /** Cate2 id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        cate2Id: number | string;
        /** Cate3 id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        cate3Id: number | string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Map an authorized supplier's product IDs to enterprise procurement SKU IDs. */
    "1688.get_enterprise_sku_mapping": {
      input: {
        /** Supply item id list accepted by 1688. */
        supplyItemIdList: Array<unknown>;
        /** Cbu shop code accepted by 1688. */
        cbuShopCode: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the seller's freight template details; template 0 denotes a freight description and 1 seller-paid freight. */
    "1688.get_freight_templates": {
      input: {
        /** Template id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        templateId?: number | string;
        /** Query sub template accepted by 1688. */
        querySubTemplate?: boolean;
        /** Query rate accepted by 1688. */
        queryRate?: boolean;
      };
      output: {
        /** Result returned by 1688. */
        result?: Array<Record<string, unknown>>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMsg?: string;
        [key: string]: unknown;
      };
    };
    /** Get the user's fulfillment data. */
    "1688.get_fulfillment_data": {
      input: {
        /** Fulfillment member request accepted by 1688. */
        fulfillmentMemberRequest: {
          /** Force source accepted by 1688. */
          forceSource: boolean;
          /** Need diagnose accepted by 1688. */
          needDiagnose: boolean;
        };
      };
      output: {
        /** Fulfill member model returned by 1688. */
        fulfillMemberModel?: Record<string, unknown>;
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Find merged-order relationships by trade order or invoice application. */
    "1688.get_invoice_related_orders": {
      input: {
        /** Req dto accepted by 1688. */
        reqDTO: {
          /** Order ID. */
          orderId: string;
          /** Out biz id accepted by 1688. */
          outBizId: string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a supplier's seller-defined product categories. */
    "1688.get_member_categories": {
      input: {
        /** 1688 member ID. */
        memberId: string;
      };
      output: {
        /** Seller cats returned by 1688. */
        sellerCats?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get a seller's mixed-batch purchasing settings. */
    "1688.get_mixed_batch_settings": {
      input: {
        /** Seller member id accepted by 1688. */
        sellerMemberId?: string;
        /** Seller login id accepted by 1688. */
        sellerLoginId?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Ext error message returned by 1688. */
        extErrorMessage?: string;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get MyBank receiving-service enrollment status and information. */
    "1688.get_mybank_service": {
      input: {
        /** Mybank type accepted by 1688. */
        mybankType: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Query waybill details by order identifiers. */
    "1688.get_order_waybills": {
      input: {
        /** Request accepted by 1688. */
        request: Array<{
          /** Biz sub code accepted by 1688. */
          bizSubCode: string;
          /** Cp code accepted by 1688. */
          cpCode: string;
          /** Object id accepted by 1688. */
          objectId: string;
        }>;
        /** Client app info accepted by 1688. */
        clientAppInfo: {
          /** Description accepted by 1688. */
          description?: string;
          /** Object id accepted by 1688. */
          objectId?: string;
          /** Operator id accepted by 1688. */
          operatorId?: string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get another account's basic information by login ID or shop domain; restricted to approved ISVs. */
    "1688.get_other_account": {
      input: Record<string, unknown>;
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Get another seller's product using specifically approved API permissions; Lingshoutong products are unsupported. */
    "1688.get_other_seller_product": {
      input: {
        /** Product ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        productID: number | string;
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
      };
      output: {
        /** Product info returned by 1688. */
        productInfo?: Record<string, unknown>;
        /** Biz group infos returned by 1688. */
        bizGroupInfos?: Array<Record<string, unknown>>;
        /** Create time returned by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        createTime?: string;
        /** Last update time returned by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        lastUpdateTime?: string;
        /** Last repost time returned by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        lastRepostTime?: string;
        /** Approved time returned by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        approvedTime?: string;
        /** Expire time returned by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        expireTime?: string;
        /** Upstream error message, when present. */
        errMsg?: string;
        [key: string]: unknown;
      };
    };
    /** Get checkout links for orders; payment is completed by the user at checkout. */
    "1688.get_payment_urls": {
      input: {
        /**
         * Order IDs; at most 100, or 30 for cross-border payment.
         * @maxItems 100
         */
        orderIdList: Array<number | string>;
      };
      output: {
        /** Erro msg returned by 1688. */
        erroMsg?: string;
        /** Pay url returned by 1688. */
        payUrl?: string;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Pay failure order list returned by 1688. */
        payFailureOrderList?: Array<number | string>;
        [key: string]: unknown;
      };
    };
    /** Get photo-album storage details. */
    "1688.get_photo_storage": {
      input: {
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Get photos by image IDs or URLs. */
    "1688.get_photos": {
      input: Record<string, unknown>;
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get processing/customization categories and their children. */
    "1688.get_processing_category": {
      input: {
        /** Input accepted by 1688. */
        input: {
          /** Category ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
          categoryId: number | string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get detailed information for a product owned by the authorized seller. */
    "1688.get_product": {
      input: {
        /** Product ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        productID: number | string;
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
        /** Business scenario accepted by this endpoint. */
        scene?: string;
      };
      output: {
        /** Product info returned by 1688. */
        productInfo?: Record<string, unknown>;
        /** Biz group infos returned by 1688. */
        bizGroupInfos?: Array<Record<string, unknown>>;
        /** Create time returned by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        createTime?: string;
        /** Last update time returned by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        lastUpdateTime?: string;
        /** Last repost time returned by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        lastRepostTime?: string;
        /** Approved time returned by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        approvedTime?: string;
        /** Expire time returned by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        expireTime?: string;
        /** Upstream error message, when present. */
        errMsg?: string;
        [key: string]: unknown;
      };
    };
    /** Get product quality-star improvement advice when editing a product. */
    "1688.get_product_quality_advice": {
      input: {
        /** Product ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        productID: number | string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get category-specific product publishing rules and current product data. */
    "1688.get_product_schema": {
      input: {
        /** Product category ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        catId?: number | string;
        /** Publishing scene: cbu for categoryType 1, industry for 2, popular for 3, or processing for customization. For industry supply bizParam.industryCategoryId. */
        scene: string;
        /** Offer ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        offerId?: number | string;
        /** Biz param accepted by 1688. */
        bizParam?: {
          /** Industry category id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          industryCategoryId: number | string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get cascading component rules for a publishing component with supportLevelProp enabled. */
    "1688.get_product_sub_schema": {
      input: {
        /** Product category ID. */
        catId: string;
        /** Business scenario accepted by this endpoint. */
        scene?: string;
        /** Product-schema data. Supply a JSON object or its encoded string using the current publishing schema. */
        dataBody: string | Record<string, unknown>;
        /** Biz param accepted by 1688. */
        bizParam?: {
          /** Industry category id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          industryCategoryId: number | string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get seller-defined category IDs for the specified products. */
    "1688.get_product_user_categories": {
      input: {
        /** Offer ids accepted by 1688. */
        offerIds: string;
      };
      output: {
        /** Group ids returned by 1688. */
        groupIds?: string;
        [key: string]: unknown;
      };
    };
    /** Get the authorized seller's products by product ID list. */
    "1688.get_products": {
      input: {
        /** Product IDs. */
        productIdList: Array<number | string>;
      };
      output: {
        /** Product list returned by 1688. */
        productList?: Array<Record<string, unknown>>;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Buyer message, at most 500 characters when creating an order. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Get quality-star improvement advice for at most 100 products. */
    "1688.get_products_quality_advice": {
      input: {
        /**
         * Product IDs; at most 100.
         * @maxItems 100
         */
        productIDs: Array<number | string>;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the seller's private-label and relabeling service address. */
    "1688.get_relabeling_address": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Get a repurchase contract. */
    "1688.get_repurchase_contract": {
      input: {
        /** Param accepted by 1688. */
        param: {
          /** Offer ids accepted by 1688. */
          offerIds: Array<number | string>;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get an order's invoice information in the encrypted-data scenario; partner permission is required. */
    "1688.get_seller_invoice": {
      input: {
        /** Order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        orderId: number | string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Ret codes returned by 1688. */
        retCodes?: Array<string>;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get seller-side shipment details in the encrypted-data scenario. */
    "1688.get_seller_logistics": {
      input: {
        /** Order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        orderId: number | string;
        /** Fields accepted by 1688. */
        fields?: string;
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Array<Record<string, unknown>>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Ret codes returned by 1688. */
        retCodes?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Get seller-side logistics tracking; tracking updates may be delayed. */
    "1688.get_seller_logistics_trace": {
      input: {
        /** Logistics id accepted by 1688. */
        logisticsId?: string;
        /** Order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        orderId: number | string;
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
      };
      output: {
        /** Logistics trace returned by 1688. */
        logisticsTrace?: Array<Record<string, unknown>>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Get seller-side order details in the encrypted-data scenario. */
    "1688.get_seller_order": {
      input: {
        /** Order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        orderId: number | string;
        /** Comma-separated response sections supported by this endpoint. */
        includeFields?: string;
        /** Need out channel accepted by 1688. */
        needOutChannel?: boolean;
        /** Need send goods overdue risk accepted by 1688. */
        needSendGoodsOverdueRisk?: boolean;
        /** Need deliver goods overdue risk accepted by 1688. */
        needDeliverGoodsOverdueRisk?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Whether the upstream operation succeeded. */
        success?: string;
        /** Ret codes returned by 1688. */
        retCodes?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Get seller-side refund details and optional operation history. */
    "1688.get_seller_refund": {
      input: {
        /** Refund dispute ID. */
        refundId: string;
        /** Need time out info accepted by 1688. */
        needTimeOutInfo?: boolean;
        /** Need order refund operation accepted by 1688. */
        needOrderRefundOperation?: boolean;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Ext error message returned by 1688. */
        extErrorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Get a supplier's freight templates for an established distribution relationship. */
    "1688.get_supplier_freight_templates": {
      input: {
        /** Supplier login id accepted by 1688. */
        supplierLoginId: string;
        /** Template id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        templateId?: number | string;
        /** Query sub template accepted by 1688. */
        querySubTemplate?: boolean;
        /** Query rate accepted by 1688. */
        queryRate?: boolean;
      };
      output: {
        /** Result returned by 1688. */
        result?: Array<Record<string, unknown>>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMsg?: string;
        [key: string]: unknown;
      };
    };
    /** Get 1688 system time for clock synchronization. */
    "1688.get_system_time": {
      input: Record<string, never>;
      output: {
        /** Current time returned by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        currentTime?: string;
        [key: string]: unknown;
      };
    };
    /** Get Tao Da Dian logistics tracking by order ID. */
    "1688.get_tdd_logistics_trace": {
      input: {
        /** Tdd logistics outer param accepted by 1688. */
        tddLogisticsOuterParam: {
          /** Biz order id accepted by 1688. */
          bizOrderId: string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a Tao Da Dian order. */
    "1688.get_tdd_order": {
      input: {
        /** Param accepted by 1688. */
        param: {
          /** Biz order id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          bizOrderId: number | string;
          /** Need detail order accepted by 1688. */
          needDetailOrder?: boolean;
          /** Need logistics order accepted by 1688. */
          needLogisticsOrder?: boolean;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Check whether a member has enabled seller-defined product categories. */
    "1688.get_user_category_enabled": {
      input: {
        /** 1688 member ID. */
        memberId: string;
      };
      output: {
        /** Is opened returned by 1688. */
        isOpened?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get a video from the authorized user's video center. */
    "1688.get_video": {
      input: {
        /** Video id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        videoId: number | string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Code returned by 1688. */
        code?: string;
        /** Buyer message, at most 500 characters when creating an order. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Query electronic waybill service subscriptions. */
    "1688.get_waybill_subscriptions": {
      input: {
        /** Waybill subscription query dto accepted by 1688. */
        waybillSubscriptionQueryDTO: {
          /** Cp code accepted by 1688. */
          cpCode?: string;
        };
        /** Client info for1688 dto accepted by 1688. */
        clientInfoFor1688DTO: {
          /** Description accepted by 1688. */
          description?: string;
          /** Object id accepted by 1688. */
          objectId?: string;
          /** Operator id accepted by 1688. */
          operatorId?: string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Query waybill details by waybill numbers. */
    "1688.get_waybills": {
      input: {
        /** Request accepted by 1688. */
        request: Array<{
          /** Cp code accepted by 1688. */
          cpCode: string;
          /** Object id accepted by 1688. */
          objectId: string;
          /** Waybill code accepted by 1688. */
          waybillCode: string;
        }>;
        /** Client app info accepted by 1688. */
        clientAppInfo: {
          /** Description accepted by 1688. */
          description?: string;
          /** Object id accepted by 1688. */
          objectId?: string;
          /** Operator id accepted by 1688. */
          operatorId?: string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Group orders with matching recipient addresses by caid without modifying the orders. */
    "1688.group_orders_by_recipient": {
      input: {
        /** Items accepted by 1688. */
        items: Array<{
          /** Caid base accepted by 1688. */
          caidBase?: string;
          /** OAID or CAID is required; only orders obtained through 1688 Open Platform are supported. */
          oaid?: string;
          /** Order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
          orderId: number | string;
        }>;
      };
      output: {
        /** Result returned by 1688. */
        result?: Array<Record<string, unknown>>;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Code returned by 1688. */
        code?: string;
        /** Buyer message, at most 500 characters when creating an order. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** List child address codes; omit areaCode for the root level. */
    "1688.list_address_codes": {
      input: {
        /** Area code accepted by 1688. */
        areaCode?: string;
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Array<Record<string, unknown>>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** List seller shipping addresses for AliExpress JIT. */
    "1688.list_ae_shipping_addresses": {
      input: Record<string, never>;
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List photo albums. */
    "1688.list_albums": {
      input: {
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
        /** Album type accepted by 1688. */
        albumType?: string;
      };
      output: {
        /** Album infos returned by 1688. */
        albumInfos?: Array<Record<string, unknown>>;
        /** Upstream error message, when present. */
        errorMsg?: string;
        /** Upstream error code, when present. */
        errorCode?: string;
        [key: string]: unknown;
      };
    };
    /** List service-market orders for the calling platform application. */
    "1688.list_app_orders": {
      input: {
        /** Gmt create accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        gmtCreate: string;
        /** 1688 member ID. */
        memberId?: string;
        /** Service statuses: B=before service, S=active, P=suspended, E=closed, C=void. */
        bizStatusList?: Array<unknown>;
        /**
         * Maximum records per page.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /** Start index accepted by 1688. */
        startIndex?: number;
        /** 1688 login ID. */
        loginId?: string;
      };
      output: {
        /** Return value returned by 1688. */
        returnValue?: Array<Record<string, unknown>>;
        /** Successed returned by 1688. */
        successed?: boolean;
        [key: string]: unknown;
      };
    };
    /** List the seller's authorized brands for the specified leaf categories. */
    "1688.list_authorized_brands": {
      input: {
        /** Leaf cat ids accepted by 1688. */
        leafCatIds: Array<number | string>;
      };
      output: {
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Code returned by 1688. */
        code?: string;
        /** Buyer message, at most 500 characters when creating an order. */
        message?: string;
        /** Result returned by 1688. */
        result?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get in-sale refunds for an order from the buyer's perspective. */
    "1688.list_buyer_order_refunds": {
      input: {
        /** Order ID. */
        orderId: string;
        /** Refund query status: 1=active, 3=successfully refunded. */
        queryType: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Ext error message returned by 1688. */
        extErrorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** List the authorized buyer's orders; use order details for logistics and invoices. */
    "1688.list_buyer_orders": {
      input: {
        /** Biz types accepted by 1688. */
        bizTypes?: Array<string>;
        /** Create end time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        createEndTime?: string;
        /** Create start time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        createStartTime?: string;
        /** Is his accepted by 1688. */
        isHis?: boolean;
        /** Modify end time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        modifyEndTime?: string;
        /** Modify start time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        modifyStartTime?: string;
        /** Order status: success, cancel, waitbuyerpay, waitsellersend or waitbuyerreceive. */
        orderStatus?: string;
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum records per page.
         * @minimum 1
         */
        pageSize?: number;
        /** Refund status: waitselleragree, refundsuccess, refundclose, waitbuyermodify, waitbuyersend or waitsellerreceive. */
        refundStatus?: string;
        /** Seller member id accepted by 1688. */
        sellerMemberId?: string;
        /** Seller login id accepted by 1688. */
        sellerLoginId?: string;
        /** Seller rate status accepted by 1688. */
        sellerRateStatus?: number;
        /** Upstream trade/payment type. For order creation use a tradeModeNameList value from preview_order; omitting it lets 1688 choose an available method. */
        tradeType?: string;
        /** Product name accepted by 1688. */
        productName?: string;
        /** Need buyer address and phone accepted by 1688. */
        needBuyerAddressAndPhone?: boolean;
        /** Need memo info accepted by 1688. */
        needMemoInfo?: boolean;
        /** External order ID used for idempotency and subsequent order lookup. */
        outOrderId?: string;
        /** Need invoicing setting accepted by 1688. */
        needInvoicingSetting?: boolean;
        /** Order ids accepted by 1688. */
        orderIds?: Array<number | string>;
      };
      output: {
        /** Result returned by 1688. */
        result?: Array<Record<string, unknown>>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Total record returned by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        totalRecord?: number | string;
        [key: string]: unknown;
      };
    };
    /** List refund operation history from the buyer's perspective. */
    "1688.list_buyer_refund_operations": {
      input: {
        /** Refund dispute ID. */
        refundId: string;
        /** Page number, starting at 1. */
        pageNo: string;
        /** Maximum records per page. */
        pageSize: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Ext error message returned by 1688. */
        extErrorMessage?: string;
        /** Upstream error code, when present. */
        errorCode?: string;
        [key: string]: unknown;
      };
    };
    /** List all logistics companies. */
    "1688.list_carriers": {
      input: Record<string, never>;
      output: {
        /** Result returned by 1688. */
        result?: Array<Record<string, unknown>>;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Ext error message returned by 1688. */
        extErrorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** List order tags available for display. */
    "1688.list_display_order_tags": {
      input: Record<string, never>;
      output: {
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Upstream error code, when present. */
        errorCode?: number;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Result returned by 1688. */
        result?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List expert-selection products or products facing removal for failing performance criteria. */
    "1688.list_expert_products": {
      input: {
        /**
         * Maximum records per page.
         * @minimum 1
         */
        pageSize: number;
        /** Page index. */
        pageIndex: number;
        /** Filter accepted by 1688. */
        filter?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List the application's service orders expiring around the specified date. */
    "1688.list_expiring_app_orders": {
      input: {
        /** Gmt service end accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        gmtServiceEnd: string;
        /** 1688 member ID. */
        memberId?: string;
        /** Service statuses: B=before service, S=active, P=suspended, E=closed, C=void. */
        bizStatusList?: Array<unknown>;
        /**
         * Maximum records per page.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /** Start index accepted by 1688. */
        startIndex?: number;
        /** 1688 login ID. */
        loginId?: string;
      };
      output: {
        /** Return value returned by 1688. */
        returnValue?: Array<Record<string, unknown>>;
        /** Successed returned by 1688. */
        successed?: boolean;
        [key: string]: unknown;
      };
    };
    /** List freight templates; freight descriptions and seller-paid template 1 are not returned. */
    "1688.list_freight_templates": {
      input: {
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
        /** Category ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        categoryId?: number | string;
        /** Address id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        addressId?: number | string;
      };
      output: {
        /** Freight templates returned by 1688. */
        freightTemplates?: Array<Record<string, unknown>>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMsg?: string;
        [key: string]: unknown;
      };
    };
    /** List seller-side invoice applications by page. */
    "1688.list_invoice_applications": {
      input: {
        /** Input accepted by 1688. */
        input: {
          /** Service statuses: B=before service, S=active, P=suspended, E=closed, C=void. */
          bizStatusList?: Array<string>;
          /** Fuzzy invoice title accepted by 1688. */
          fuzzyInvoiceTitle?: string;
          /** Is red invoice accepted by 1688. */
          isRedInvoice?: boolean;
          /** Order ID. */
          orderId?: string;
          /** Out biz id accepted by 1688. */
          outBizId?: string;
          /** Page number, starting at 1. */
          page: number;
          /** Maximum records per page. */
          pageSize: number;
          /** Create mill time start accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          createMillTimeStart?: number | string;
          /** Create mill time end accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          createMillTimeEnd?: number | string;
          /** Modify mill time start accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          modifyMillTimeStart?: number | string;
          /** Modify mill time end accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          modifyMillTimeEnd?: number | string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List orders through the deprecated internal business-assistant API; prefer list_seller_orders for new integrations. */
    "1688.list_legacy_orders": {
      input: {
        /**
         * Maximum records per page.
         * @minimum 1
         */
        pageSize: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        page: number;
        /** Modify start time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        modifyStartTime: string;
        /** Modify end time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        modifyEndTime: string;
        /** Need invoice info accepted by 1688. */
        needInvoiceInfo?: boolean;
        /** Need memo info accepted by 1688. */
        needMemoInfo?: boolean;
      };
      output: {
        /** Order list result returned by 1688. */
        orderListResult?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List logistics monitoring exceptions. */
    "1688.list_logistics_exceptions": {
      input: {
        /** Arg0 accepted by 1688. */
        arg0: {
          /** Event date end accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          eventDateEnd: number | string;
          /** Event date start accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          eventDateStart: number | string;
          /** Exception code accepted by 1688. */
          exceptionCode: string;
          /** Offer ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
          offerId: number | string;
          /** Order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
          orderId: number | string;
          /** Page number, starting at 1. */
          pageNo: number;
          /** Maximum records per page. */
          pageSize: number;
          /** Sub exception code accepted by 1688. */
          subExceptionCode: string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List carriers supported for seller-arranged shipping. */
    "1688.list_offline_carriers": {
      input: Record<string, never>;
      output: {
        /** Result returned by 1688. */
        result?: Array<Record<string, unknown>>;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Ext error message returned by 1688. */
        extErrorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** List invoices associated with a trade order through the seller-view endpoint. */
    "1688.list_order_invoices": {
      input: {
        /** Input accepted by 1688. */
        input: {
          /** Order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
          orderId: number | string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List photos in an album. */
    "1688.list_photos": {
      input: {
        /** Album id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        albumID?: number | string;
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * Maximum records per page.
         * @minimum 1
         * @maximum 30
         */
        pageSize?: number;
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
      };
      output: {
        /** Photo infos returned by 1688. */
        photoInfos?: Array<Record<string, unknown>>;
        /** Count returned by 1688. */
        count?: number;
        /** Current page returned by 1688. */
        currentPage?: number;
        /** Maximum records per page. */
        pageSize?: number;
        /** Upstream error message, when present. */
        errorMsg?: string;
        [key: string]: unknown;
      };
    };
    /** List potential expert-selection products or products removed from expert selection. */
    "1688.list_potential_expert_products": {
      input: {
        /**
         * Maximum records per page.
         * @minimum 1
         */
        pageSize: number;
        /** Page index. */
        pageIndex: number;
        /** Filter accepted by 1688. */
        filter?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Find suppliers related to the buyer through purchases or follows; dedicated API permission is required. */
    "1688.list_related_suppliers": {
      input: {
        /** Relation time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        relationTime?: string;
        /** Page number. */
        pageNum?: number;
        /**
         * Maximum records per page.
         * @minimum 1
         */
        pageSize?: number;
        /** Seller login id accepted by 1688. */
        sellerLoginId?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Array<Record<string, unknown>>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Page number. */
        pageNum?: number;
        /** Maximum records per page. */
        pageSize?: number;
        /** Total records returned by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        totalRecords?: number | string;
        [key: string]: unknown;
      };
    };
    /** List order tags available for search filtering. */
    "1688.list_search_order_tags": {
      input: Record<string, never>;
      output: {
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Code returned by 1688. */
        code?: number;
        /** Buyer message, at most 500 characters when creating an order. */
        message?: string;
        /** Result returned by 1688. */
        result?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get in-sale refunds for an order from the seller's perspective. */
    "1688.list_seller_order_refunds": {
      input: {
        /** Order ID. */
        orderId: string;
        /** Refund query status: 1=active, 3=successfully refunded. */
        queryType: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Ext error message returned by 1688. */
        extErrorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** List seller-side orders in the encrypted-data scenario; details provide logistics and invoices. */
    "1688.list_seller_orders": {
      input: {
        /** Create start time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        createStartTime?: string;
        /** Create end time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        createEndTime?: string;
        /** Modify start time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        modifyStartTime?: string;
        /** Modify end time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        modifyEndTime?: string;
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum records per page.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
        /** Order status: success, cancel, waitbuyerpay, waitsellersend or waitbuyerreceive. */
        orderStatus?: string;
        /** Refund status: waitselleragree, refundsuccess, refundclose, waitbuyermodify, waitbuyersend or waitsellerreceive. */
        refundStatus?: string;
        /** Buyer member id accepted by 1688. */
        buyerMemberId?: string;
        /** Buyer login id accepted by 1688. */
        buyerLoginId?: string;
        /** Upstream trade/payment type. For order creation use a tradeModeNameList value from preview_order; omitting it lets 1688 choose an available method. */
        tradeType?: string;
        /** Biz types accepted by 1688. */
        bizTypes?: Array<string>;
        /** Is his accepted by 1688. */
        isHis?: boolean;
        /** Product name accepted by 1688. */
        productName?: string;
        /** Need buyer address and phone accepted by 1688. */
        needBuyerAddressAndPhone?: boolean;
        /** Need memo info accepted by 1688. */
        needMemoInfo?: boolean;
        /** Tousu status accepted by 1688. */
        tousuStatus?: boolean;
        /** Buyer rate status accepted by 1688. */
        buyerRateStatus?: number;
        /** Seller rate status accepted by 1688. */
        sellerRateStatus?: number;
        /** Need check send accepted by 1688. */
        needCheckSend?: boolean;
        /** Need out channel accepted by 1688. */
        needOutChannel?: boolean;
        /** Need send goods overdue risk accepted by 1688. */
        needSendGoodsOverdueRisk?: boolean;
        /** Need deliver goods overdue risk accepted by 1688. */
        needDeliverGoodsOverdueRisk?: boolean;
        /** Need official logistic order accepted by 1688. */
        needOfficialLogisticOrder?: boolean;
        /** Need tg official pick up order accepted by 1688. */
        needTgOfficialPickUpOrder?: boolean;
      };
      output: {
        /** Result returned by 1688. */
        result?: Array<Record<string, unknown>>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Total record returned by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        totalRecord?: number | string;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Ret codes returned by 1688. */
        retCodes?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** List the authorized seller's products. Use ID sorting when traversing all products; simple products are excluded. */
    "1688.list_seller_products": {
      input: {
        /** Signs accepted by 1688. */
        signs?: Array<string>;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @default 1
         */
        pageNo?: number;
        /**
         * Maximum records per page.
         * @minimum 1
         * @maximum 20
         * @default 20
         */
        pageSize?: number;
        /** Product statuses: published, expired, TBD, deleted, new, modified or member expired. */
        statusList?: Array<string>;
        /** Category ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        categoryId?: number | string;
        /** Start modify time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        startModifyTime?: string;
        /** End modify time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        endModifyTime?: string;
        /** Subject key accepted by 1688. */
        subjectKey?: string;
        /** Cargo number accepted by 1688. */
        cargoNumber?: string;
        /** Product IDs. */
        productIds?: Array<number | string>;
        /** Minimum star rating, from 0 to 5; must not exceed endStar. */
        beginStar?: number;
        /** Maximum star rating, from 0 to 5; must not be below beginStar. */
        endStar?: number;
        /** Group ids accepted by 1688. */
        groupIds?: string;
        /** Start publish time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        startPublishTime?: string;
        /** End publish time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        endPublishTime?: string;
        /** Start expired time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        startExpiredTime?: string;
        /** End expired time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        endExpiredTime?: string;
        /** Price start accepted by 1688. */
        priceStart?: number;
        /** Price end accepted by 1688. */
        priceEnd?: number;
        /** Sort field: CREATE_DATE, POST_DATE, MODIFY_DATE, APPROVED_DATE, EXPIRE_DATE, STATUS, ID, GROUP_ID, PRICE or SALE_QUANTITY. Use ID to traverse all products. */
        orderByCondition?: string;
        /** Sort direction: ASC or DESC. */
        orderByType?: string;
        /** Support online trade accepted by 1688. */
        supportOnlineTrade?: boolean;
        /** Private offer accepted by 1688. */
        privateOffer?: boolean;
        /** Need detail accepted by 1688. */
        needDetail?: boolean;
        /** Need freight accepted by 1688. */
        needFreight?: boolean;
        /** Need user category info accepted by 1688. */
        needUserCategoryInfo?: boolean;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Buyer message, at most 500 characters when creating an order. */
        message?: string;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Code returned by 1688. */
        code?: string;
        [key: string]: unknown;
      };
    };
    /** List seller-side refunds by order or filters; data may be delayed. */
    "1688.list_seller_refunds": {
      input: {
        /** Order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        orderId?: number | string;
        /** Apply start time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        applyStartTime?: string;
        /** Apply end time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        applyEndTime?: string;
        /** Refund status set accepted by 1688. */
        refundStatusSet?: Array<string>;
        /** Buyer member id accepted by 1688. */
        buyerMemberId?: string;
        /** Buyer login id accepted by 1688. */
        buyerLoginId?: string;
        /**
         * Page number, starting at 0.
         * @minimum 0
         */
        currentPageNum?: number;
        /**
         * Maximum records per page.
         * @minimum 1
         */
        pageSize?: number;
        /** Logistics no accepted by 1688. */
        logisticsNo?: string;
        /** Modify start time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        modifyStartTime?: string;
        /** Modify end time accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        modifyEndTime?: string;
        /** Dipsute type accepted by 1688. */
        dipsuteType?: number;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Ext error message returned by 1688. */
        extErrorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** List the authorized user's shipping addresses. */
    "1688.list_shipping_addresses": {
      input: Record<string, never>;
      output: {
        /** Result returned by 1688. */
        result?: Array<Record<string, unknown>>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMsg?: string;
        [key: string]: unknown;
      };
    };
    /** List service-market subscription orders. */
    "1688.list_subscription_orders": {
      input: {
        /** Start index accepted by 1688. */
        startIndex?: number;
        /** Gmt create accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        gmtCreate: string;
        /** Ali id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        aliId?: number | string;
        /**
         * Maximum records per page.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /** Service statuses: B=before service, S=active, P=suspended, E=closed, C=void. */
        bizStatusList?: Array<string>;
      };
      output: {
        /** Isv order item dto returned by 1688. */
        isvOrderItemDto?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List supply products by product, audit, bidding and supply-status filters. */
    "1688.list_supply_products": {
      input: {
        /** Supply product id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        supplyProductId?: number | string;
        /** Offer ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        offerId?: number | string;
        /** 1688 member ID. */
        memberId?: string;
        /**
         * Maximum records per page.
         * @minimum 1
         */
        pageSize?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        pageNo?: number;
        /** Bid status accepted by 1688. */
        bidStatus?: string;
        /** Audit status accepted by 1688. */
        auditStatus?: string;
        /** Status accepted by 1688. */
        status?: string;
        /** Sign time accepted by 1688. */
        signTime?: Array<string>;
        /** Category ID. */
        categoryId?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List Tao Da Dian carriers. */
    "1688.list_tdd_carriers": {
      input: Record<string, never>;
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List Tao Da Dian orders. */
    "1688.list_tdd_orders": {
      input: {
        /** Param accepted by 1688. */
        param: {
          /** Auction id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          auctionId?: number | string;
          /** Auction title accepted by 1688. */
          auctionTitle?: string;
          /** Biz order id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          bizOrderId?: number | string;
          /** Biz order status accepted by 1688. */
          bizOrderStatus?: string;
          /** Consign time start accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          consignTimeStart?: number | string;
          /** Consign time end accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          consignTimeEnd?: number | string;
          /** Create time start accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          createTimeStart?: number | string;
          /** Create time end accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          createTimeEnd?: number | string;
          /** Pay time start accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          payTimeStart?: number | string;
          /** Pay time end accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          payTimeEnd?: number | string;
          /** Page index. */
          pageIndex: number;
          /** Maximum records per page. */
          pageSize: number;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List Tao Da Dian seller shipping addresses. */
    "1688.list_tdd_shipping_addresses": {
      input: Record<string, never>;
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List the authorized user's seller-defined product categories. */
    "1688.list_user_categories": {
      input: Record<string, never>;
      output: {
        /** Cate list returned by 1688. */
        cateList?: Array<Record<string, unknown>>;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMsg?: string;
        [key: string]: unknown;
      };
    };
    /** List videos in the authorized user's video center. */
    "1688.list_videos": {
      input: {
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum records per page.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List electronic waybill print templates. */
    "1688.list_waybill_templates": {
      input: Record<string, never>;
      output: {
        /** Code returned by 1688. */
        code?: string;
        /** Buyer message, at most 500 characters when creating an order. */
        message?: string;
        /** Template result returned by 1688. */
        templateResult?: Array<Record<string, unknown>>;
        /** Ret codes returned by 1688. */
        retCodes?: string;
        /** Sub code returned by 1688. */
        subCode?: string;
        /** Sub message returned by 1688. */
        subMessage?: string;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Resolve region codes from an address. */
    "1688.parse_address_code": {
      input: {
        /** Address info accepted by 1688. */
        addressInfo: string;
        /** Address level accepted by 1688. */
        addressLevel?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Apply an incremental product edit using the category publishing schema. */
    "1688.patch_product": {
      input: {
        /** Product category ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        catId?: number | string;
        /** Business scenario accepted by this endpoint. */
        scene?: string;
        /** Offer ID. */
        offerId: string;
        /** Product-schema data. Supply a JSON object or its encoded string using the current publishing schema. */
        dataBody: string | Record<string, unknown>;
        /** Biz param accepted by 1688. */
        bizParam?: string;
      };
      output: {
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Buyer message, at most 500 characters when creating an order. */
        message?: string;
        /** Code returned by 1688. */
        code?: string;
        /** Result returned by 1688. */
        result?: string;
        [key: string]: unknown;
      };
    };
    /** Preview pricing, promotions, stock and purchasing eligibility for products from one supplier. */
    "1688.preview_order": {
      input: {
        /** Receiving address. Supply region names and a street address of at most 200 characters. */
        addressParam: {
          /** Address id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          addressId?: number | string;
          /** Recipient full name. */
          fullName: string;
          /** Mobile phone number. */
          mobile?: string;
          /** Landline phone number. */
          phone?: string;
          /** Postal code. */
          postCode?: string;
          /** City name. */
          cityText: string;
          /** Province name. */
          provinceText: string;
          /** District name. */
          areaText: string;
          /** Town or subdistrict name. */
          townText?: string;
          /** Street address. */
          address: string;
          /** District code accepted by 1688. */
          districtCode?: string;
        };
        /** Products and quantities from the same supplier. */
        cargoParamList: Array<{
          /** Offer ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
          offerId: number | string;
          /** 1688 product specification ID. */
          specId: string;
          /** Product quantity. */
          quantity: number;
          /** Open offer id accepted by 1688. */
          openOfferId?: string;
          /** Out member id accepted by 1688. */
          outMemberId?: string;
          /** Biz fen xiao out sub order info accepted by 1688. */
          bizFenXiaoOutSubOrderInfo?: Array<{
            /** Out sub order id accepted by 1688. */
            outSubOrderId?: string;
            /** Out sku id accepted by 1688. */
            outSkuId?: string;
            /** Out sub gmv accepted by 1688. */
            outSubGmv?: number;
            /** Out sub qty accepted by 1688. */
            outSubQty?: number;
            /** Out sub order pay time accepted by 1688. */
            outSubOrderPayTime?: string;
            /** Out sub order latest delivery time accepted by 1688. */
            outSubOrderLatestDeliveryTime?: string;
            /** Out sub gmv discount accepted by 1688. */
            outSubGmvDiscount?: number;
            /** Out sub gmv post accepted by 1688. */
            outSubGmvPost?: number;
            /** Out sub gmv receive accepted by 1688. */
            outSubGmvReceive?: number;
          }>;
        }>;
        /** Invoice information. */
        invoiceParam?: {
          /** Invoice type accepted by 1688. */
          invoiceType: number;
          /** Province name. */
          provinceText: string;
          /** City name. */
          cityText: string;
          /** District name. */
          areaText: string;
          /** Town or subdistrict name. */
          townText: string;
          /** Postal code. */
          postCode: string;
          /** Street address. */
          address: string;
          /** Recipient full name. */
          fullName: string;
          /** Landline phone number. */
          phone: string;
          /** Mobile phone number. */
          mobile: string;
          /** Company name accepted by 1688. */
          companyName: string;
          /** Taxpayer identifier accepted by 1688. */
          taxpayerIdentifier: string;
          /** Bank and account accepted by 1688. */
          bankAndAccount: string;
          /** Local invoice id accepted by 1688. */
          localInvoiceId: string;
        };
        /** Ordering flow, such as general, fenxiao, saleproxy, paired, repurchase, boutiquefenxiao or boutiquepifa. Flow affects prices and buyer protection. */
        flow?: string;
        /** Instance id accepted by 1688. */
        instanceId?: string;
        /** Encrypt out order info accepted by 1688. */
        encryptOutOrderInfo?: {
          /** Encrypt order accepted by 1688. */
          encryptOrder: boolean;
          /** Out platform order no accepted by 1688. */
          outPlatformOrderNo: string;
          /** Out platform supply order no accepted by 1688. */
          outPlatformSupplyOrderNo?: string;
          /** Out platform code accepted by 1688. */
          outPlatformCode: string;
          /** Out platform appkey accepted by 1688. */
          outPlatformAppkey: string;
          /** Out shop id accepted by 1688. */
          outShopId?: string;
          /** Out shop name accepted by 1688. */
          outShopName?: string;
          /** Out origin address accepted by 1688. */
          outOriginAddress?: {
            /** Province accepted by 1688. */
            province: {
              /** Code accepted by 1688. */
              code: string;
              /** Name accepted by 1688. */
              name: string;
            };
            /** City accepted by 1688. */
            city: {
              /** Code accepted by 1688. */
              code: string;
              /** Name accepted by 1688. */
              name: string;
            };
            /** Area accepted by 1688. */
            area: {
              /** Code accepted by 1688. */
              code: string;
              /** Name accepted by 1688. */
              name: string;
            };
            /** Town accepted by 1688. */
            town?: {
              /** Code accepted by 1688. */
              code: string;
              /** Name accepted by 1688. */
              name: string;
            };
            /** Street address. */
            address?: string;
            /** Postal code. */
            postCode?: string;
          };
          /** OAID or CAID is required; only orders obtained through 1688 Open Platform are supported. */
          oaid?: string;
          /** Out patform extra info accepted by 1688. */
          outPatformExtraInfo?: string;
          /** Encrypt receiver name accepted by 1688. */
          encryptReceiverName?: string;
          /** Encrypt receiver mobile accepted by 1688. */
          encryptReceiverMobile?: string;
          /** Encrypt receiver address accepted by 1688. */
          encryptReceiverAddress?: string;
          /** Out platform sub code accepted by 1688. */
          outPlatformSubCode?: string;
        };
        /** Proxy settle record id accepted by 1688. */
        proxySettleRecordId?: string;
        /** Inventory mode accepted by 1688. */
        inventoryMode?: string;
        /** External order ID used for idempotency and subsequent order lookup. */
        outOrderId?: string;
        /** Pickup service accepted by 1688. */
        pickupService?: string;
        /** Cross border logistics solution id accepted by 1688. */
        crossBorderLogisticsSolutionId?: string;
        /** Use border logistics solution accepted by 1688. */
        useBorderLogisticsSolution?: boolean;
        /** Isv biz type accepted by 1688. */
        isvBizType?: string;
      };
      output: {
        /** Order preview resuslt returned by 1688. */
        orderPreviewResuslt?: Array<Record<string, unknown>>;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMsg?: string;
        /** Post fee by desc offer list returned by 1688. */
        postFeeByDescOfferList?: Array<number | string>;
        /** Consign offer list returned by 1688. */
        consignOfferList?: Array<number | string>;
        /** Unsupported cross border pay offer list returned by 1688. */
        unsupportedCrossBorderPayOfferList?: Array<number | string>;
        /** Ext pair list returned by 1688. */
        extPairList?: Array<Record<string, unknown>>;
        /** Multi order price info returned by 1688. */
        multiOrderPriceInfo?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get pickup-order, carton or product label print data for AliExpress JIT. */
    "1688.print_ae_pickup_labels": {
      input: {
        /** Req accepted by 1688. */
        req: {
          /** Preview accepted by 1688. */
          preview: boolean;
          /** Order ID. */
          orderId?: string;
          /** Pick up order no list accepted by 1688. */
          pickUpOrderNoList?: string;
          /** Print type accepted by 1688. */
          printType: string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Query publishing suggestions such as brands, categories and titles using the schema query type. */
    "1688.query_product_publishing_data": {
      input: {
        /** Query type returned by the product publishing schema. */
        optType: string;
        /** Publishing query data. Supply a JSON object or its encoded string; pageSize must not exceed 20. */
        dataJson: string | Record<string, unknown>;
      };
      output: {
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Biz code returned by 1688. */
        bizCode?: string;
        /** Biz msg returned by 1688. */
        bizMsg?: string;
        /** Business data returned by 1688. */
        bizData?: string;
        [key: string]: unknown;
      };
    };
    /** Submit seller-to-buyer ratings for at most ten orders; ratings below four stars require a comment. */
    "1688.rate_orders": {
      input: {
        /** Orders accepted by 1688. */
        orders: Record<string, unknown>;
      };
      output: {
        /** Failed order returned by 1688. */
        failedOrder?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Recommend logistics companies for a receiving location. */
    "1688.recommend_carriers": {
      input: {
        /** Param accepted by 1688. */
        param: {
          /** From area code accepted by 1688. */
          fromAreaCode: string;
          /** Send goods accepted by 1688. */
          sendGoods: Array<{
            /** Send good entries accepted by 1688. */
            sendGoodEntries: Array<{
              /** Source entry id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
              sourceEntryId: number | string;
            }>;
            /** Source id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
            sourceId: number | string;
          }>;
          /** To area code accepted by 1688. */
          toAreaCode: string;
          /** From area name accepted by 1688. */
          fromAreaName: string;
          /** To area name accepted by 1688. */
          toAreaName: string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Redeem a goods-receipt verification code as the seller. */
    "1688.redeem_receiving_code": {
      input: {
        /** Api order id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        apiOrderId: number | string;
        /** Api receiving codes accepted by 1688. */
        apiReceivingCodes: string;
        /** Api scene accepted by 1688. */
        apiScene: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Remove up to 50 product memberships from a seller-defined category without deleting the products. */
    "1688.remove_products_from_category": {
      input: {
        /** Offer ids accepted by 1688. */
        offerIds: string;
        /** Category ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        categoryId: number | string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Republish offline products, subject to the seller's daily publishing quota and category restrictions. */
    "1688.republish_products": {
      input: {
        /** Product IDs. */
        productIds: Array<number | string>;
      };
      output: {
        /** Result returned by 1688. */
        result?: Array<Record<string, unknown>>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Sub error code returned by 1688. */
        subErrorCode?: string;
        /** Sub error message returned by 1688. */
        subErrorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Request a goods-receipt verification code as the seller. */
    "1688.request_receiving_code": {
      input: {
        /** Api order id accepted by 1688. */
        apiOrderId: string;
        /** Api logistics id accepted by 1688. */
        apiLogisticsId?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Resolve an OpenUID solely for a user-initiated Wangwang launch. Automated bulk decryption or displaying plaintext for other purposes is prohibited by 1688. */
    "1688.resolve_wangwang_nickname": {
      input: {
        /** Encrypted 1688 user identifier. */
        openUid: string;
      };
      output: {
        /** Wangwang nick returned by 1688. */
        wangwangNick?: string;
        [key: string]: unknown;
      };
    };
    /** Retry a failed seller invoice submission. */
    "1688.retry_invoice": {
      input: {
        /** Input accepted by 1688. */
        input: {
          /** Order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
          orderId: number | string;
          /** Out biz id accepted by 1688. */
          outBizId: string;
          /** Invoice no accepted by 1688. */
          invoiceNo?: string;
          /** Upload out biz id accepted by 1688. */
          uploadOutBizId?: string;
          /** Red invoice accepted by 1688. */
          redInvoice: boolean;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Save standard customization services for the specified products. */
    "1688.save_product_customization": {
      input: {
        /** Offer ids accepted by 1688. */
        offerIds: Array<number | string>;
        /** Value ids accepted by 1688. */
        valueIds: Array<number | string>;
        /** Source accepted by 1688. */
        source: string;
      };
      output: Record<string, unknown>;
    };
    /** Save the seller's customization service values. */
    "1688.save_seller_customization_values": {
      input: {
        /** Cate param accepted by 1688. */
        cateParam: {
          /** Cate level1 id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          cateLevel1Id: number | string;
          /** Cate level2 id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          cateLevel2Id: number | string;
          /** Cate level3 id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          cateLevel3Id: number | string;
        };
        /** Pv details accepted by 1688. */
        pvDetails: string;
      };
      output: Record<string, unknown>;
    };
    /** Search leaf publishing categories by keyword. */
    "1688.search_categories": {
      input: {
        /** Keyword used to search leaf categories. */
        keyword: string;
      };
      output: {
        /** Products returned by 1688. */
        products?: Array<Record<string, unknown>>;
        /** Upstream error message, when present. */
        errorMsg?: string;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Whether the upstream operation succeeded. */
        success?: string;
        [key: string]: unknown;
      };
    };
    /** Search domestic distribution products by keyword and filters. */
    "1688.search_distribution_products": {
      input: {
        /** Param accepted by 1688. */
        param: {
          /** Category ids accepted by 1688. */
          categoryIds?: Array<string>;
          /** Keywords accepted by 1688. */
          keywords?: string;
          /** Page number. Use a decimal string for IDs outside the JavaScript safe integer range. */
          pageNum?: number | string;
          /** Maximum records per page. Use a decimal string for IDs outside the JavaScript safe integer range. */
          pageSize?: number | string;
          /** Price end accepted by 1688. */
          priceEnd?: string;
          /** Price start accepted by 1688. */
          priceStart?: string;
          /** Quantity begin accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          quantityBegin?: number | string;
          /** Filter accepted by 1688. */
          filter?: Array<string>;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Enable or disable the display of seller-defined product categories. */
    "1688.set_user_category_enabled": {
      input: {
        /** on enables seller-defined category display; off disables it. */
        switchType: string;
      };
      output: {
        /** Is success returned by 1688. */
        isSuccess?: boolean;
        [key: string]: unknown;
      };
    };
    /** Report whether the seller has enabled or terminated downstream electronic waybill service for a channel. */
    "1688.set_waybill_enabled": {
      input: {
        /** Channel accepted by 1688. */
        channel: string;
        /** Y if electronic waybills are enabled; N if service has been terminated. */
        ebillOpenStatus: string;
        /** Wei xin seller account accepted by 1688. */
        weiXinSellerAccount?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Request official logistics pickup for whole orders; merged and repeated partial shipments are unsupported. */
    "1688.ship_order_official": {
      input: {
        /** Send goods accepted by 1688. */
        sendGoods: Array<{
          /** Source id accepted by 1688. */
          sourceId: string;
          /** Send good entries accepted by 1688. */
          sendGoodEntries?: Array<{
            /** Source entry id accepted by 1688. */
            sourceEntryId: string;
            /** Amount accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
            amount?: number | string;
            /** Weight accepted by 1688. */
            weight?: number;
          }>;
        }>;
        /** Remarks accepted by 1688. */
        remarks?: string;
        /** Gmt send accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        gmtSend?: string;
        /** Package count accepted by 1688. */
        packageCount?: number;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Ext error message returned by 1688. */
        extErrorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Ship orders using a carrier arranged by the seller, including supported merged or line-item shipments. */
    "1688.ship_order_offline": {
      input: {
        /** Multi package accepted by 1688. */
        multiPackage?: boolean;
        /** Send goods accepted by 1688. */
        sendGoods: Array<{
          /** Source id accepted by 1688. */
          sourceId: string;
          /** Send good entries accepted by 1688. */
          sendGoodEntries: Array<{
            /** Source entry id accepted by 1688. */
            sourceEntryId: string;
            /** Amount accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
            amount: number | string;
            /** Weight accepted by 1688. */
            weight: number;
            /** Shipment details as JSON or an encoded JSON string. noLogisticsCondition: 1=other carrier, 2=freight/price adjustment, 3=seller delivery, 4=buyer pickup, 5=other. Reasons 1/3 require noLogisticsName and noLogisticsTel; 2 requires noLogisticsBillNo; 5 requires remarks. */
            extBody?: string;
          }>;
        }>;
        /** Remarks accepted by 1688. */
        remarks?: string;
        /** Gmt send accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        gmtSend?: string;
        /** Shipment details as JSON or an encoded JSON string. noLogisticsCondition: 1=other carrier, 2=freight/price adjustment, 3=seller delivery, 4=buyer pickup, 5=other. Reasons 1/3 require noLogisticsName and noLogisticsTel; 2 requires noLogisticsBillNo; 5 requires remarks. */
        extBody?: string | Record<string, unknown>;
        /** Ext param accepted by 1688. */
        extParam?: string | Record<string, unknown>;
        /** Receiver info accepted by 1688. */
        receiverInfo?: {
          /** Province code accepted by 1688. */
          provinceCode: string;
          /** City code accepted by 1688. */
          cityCode: string;
          /** Area code accepted by 1688. */
          areaCode: string;
          /** Town code accepted by 1688. */
          townCode: string;
          /** Province accepted by 1688. */
          province: string;
          /** City accepted by 1688. */
          city: string;
          /** Area accepted by 1688. */
          area: string;
          /** Town accepted by 1688. */
          town: string;
          /** Street address. */
          address: string;
          /** Recipient full name. */
          fullName: string;
          /** Corp name accepted by 1688. */
          corpName: string;
          /** Post accepted by 1688. */
          post: string;
          /** Landline phone number. */
          phone: string;
          /** Mobile phone number. */
          mobile: string;
          /** Warehouse accepted by 1688. */
          warehouse: string;
          /** Code type accepted by 1688. */
          codeType: string;
        };
        /** Is encrypt order send accepted by 1688. */
        isEncryptOrderSend?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Ext error message returned by 1688. */
        extErrorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Mark supported orders or order lines shipped without logistics, providing the applicable reason and evidence. */
    "1688.ship_order_without_logistics": {
      input: {
        /** Send goods accepted by 1688. */
        sendGoods: Array<{
          /** Source id accepted by 1688. */
          sourceId: string;
          /** Send good entries accepted by 1688. */
          sendGoodEntries: Array<{
            /** Source entry id accepted by 1688. */
            sourceEntryId: string;
            /** Amount accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
            amount: number | string;
            /** Weight accepted by 1688. */
            weight: number;
            /** Shipment details as JSON or an encoded JSON string. noLogisticsCondition: 1=other carrier, 2=freight/price adjustment, 3=seller delivery, 4=buyer pickup, 5=other. Reasons 1/3 require noLogisticsName and noLogisticsTel; 2 requires noLogisticsBillNo; 5 requires remarks. */
            extBody?: string;
          }>;
        }>;
        /** Remarks accepted by 1688. */
        remarks?: string;
        /** Gmt send accepted by 1688. Use the 1688 timestamp format yyyyMMddHHmmssSSSZ, for example 20261014120000000+0800. */
        gmtSend?: string;
        /** Shipment details as JSON or an encoded JSON string. noLogisticsCondition: 1=other carrier, 2=freight/price adjustment, 3=seller delivery, 4=buyer pickup, 5=other. Reasons 1/3 require noLogisticsName and noLogisticsTel; 2 requires noLogisticsBillNo; 5 requires remarks. */
        extBody: string | Record<string, unknown>;
        /** Ext param accepted by 1688. */
        extParam?: string | Record<string, unknown>;
        /** Receiver info accepted by 1688. */
        receiverInfo?: {
          /** Province code accepted by 1688. */
          provinceCode: string;
          /** City code accepted by 1688. */
          cityCode: string;
          /** Area code accepted by 1688. */
          areaCode: string;
          /** Town code accepted by 1688. */
          townCode: string;
          /** Province accepted by 1688. */
          province: string;
          /** City accepted by 1688. */
          city: string;
          /** Area accepted by 1688. */
          area: string;
          /** Town accepted by 1688. */
          town: string;
          /** Street address. */
          address: string;
          /** Recipient full name. */
          fullName: string;
          /** Corp name accepted by 1688. */
          corpName: string;
          /** Post accepted by 1688. */
          post: string;
          /** Landline phone number. */
          phone: string;
          /** Mobile phone number. */
          mobile: string;
          /** Warehouse accepted by 1688. */
          warehouse: string;
          /** Code type accepted by 1688. */
          codeType: string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Ext error message returned by 1688. */
        extErrorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Ship a Tao Da Dian order using seller-arranged logistics. */
    "1688.ship_tdd_order": {
      input: {
        /** Tdd consign outer param accepted by 1688. */
        tddConsignOuterParam: {
          /** Biz order id accepted by 1688. */
          bizOrderId: string;
          /** Consign pkgs accepted by 1688. */
          consignPkgs: Array<{
            /** Company code accepted by 1688. */
            companyCode: string;
            /** Consign goods accepted by 1688. */
            consignGoods: Array<{
              /** Biz sub order id accepted by 1688. */
              bizSubOrderId: string;
              /** Product quantity. */
              quantity: number;
            }>;
            /** Mail no accepted by 1688. */
            mailNo: string;
          }>;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Submit the replacement shipment tracking number for an exchange dispute. */
    "1688.submit_exchange_tracking": {
      input: {
        /** Input accepted by 1688. */
        input: {
          /** Refund dispute ID. */
          refundId: string;
          /** Replace freight bill accepted by 1688. */
          replaceFreightBill: string;
          /** Replace logistics company no accepted by 1688. */
          replaceLogisticsCompanyNo: string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Submit a seller's blue invoice. */
    "1688.submit_invoice": {
      input: {
        /** Input accepted by 1688. */
        input: {
          /** Order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
          orderId: number | string;
          /** Apply out biz id accepted by 1688. */
          applyOutBizId?: string;
          /** Invoice file name accepted by 1688. */
          invoiceFileName: string;
          /** Invoice file type accepted by 1688. */
          invoiceFileType: string;
          /** Out biz id accepted by 1688. */
          outBizId: string;
          /**
           * Public invoice file URL; Connector downloads and base64-encodes the file, up to 50 MiB.
           * @format uri
           */
          fileUrl: string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Submit a seller's red invoice. */
    "1688.submit_red_invoice": {
      input: {
        /** Input accepted by 1688. */
        input: {
          /** Order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
          orderId: number | string;
          /** Invoice file name accepted by 1688. */
          invoiceFileName: string;
          /** Invoice file type accepted by 1688. */
          invoiceFileType: string;
          /** Red out biz id accepted by 1688. */
          redOutBizId: string;
          /** Related blue invoice id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          relatedBlueInvoiceId?: number | string;
          /** Related blue invoice no accepted by 1688. */
          relatedBlueInvoiceNo?: string;
          /** Apply out biz id accepted by 1688. */
          applyOutBizId?: string;
          /** Seller modify red accepted by 1688. */
          sellerModifyRed?: boolean;
          /**
           * Public invoice file URL; Connector downloads and base64-encodes the file, up to 50 MiB.
           * @format uri
           */
          fileUrl: string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Submit the tracking number for a reshipment. */
    "1688.submit_reshipping_tracking": {
      input: {
        /** Input accepted by 1688. */
        input: {
          /** Description accepted by 1688. */
          description?: string;
          /** Dispute type accepted by 1688. */
          disputeType?: number;
          /** Freight bill accepted by 1688. */
          freightBill: string;
          /** Logistics company id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          logisticsCompanyId: number | string;
          /** Logistics company no accepted by 1688. */
          logisticsCompanyNo: string;
          /** Refund dispute ID. */
          refundId: string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Update the authorized user's photo album and optional access password. */
    "1688.update_album": {
      input: {
        /** Album info accepted by 1688. */
        albumInfo: {
          /** Album id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          albumID: number | string;
          /** Name accepted by 1688. */
          name: string;
          /** Description accepted by 1688. */
          description: string;
          /** Album visibility: 0=private, 1=public, 2=password-protected. Public/password access requires a shop. */
          authority: number;
          /** Image count accepted by 1688. */
          imageCount: number;
        };
        /** Album access password. For a new password-protected album, supply 4 to 16 non-Chinese characters. */
        password?: string;
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Update a product's buyer-protection services; category and seller requirements still apply. */
    "1688.update_buyer_protection": {
      input: {
        /** Offer ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        offerId: number | string;
        /** Sub category id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        subCategoryId: number | string;
        /** Guard service accepted by 1688. */
        guardService?: Array<string>;
        /** Group service accepted by 1688. */
        groupService?: Array<{
          /** Group service code accepted by 1688. */
          groupServiceCode: string;
          /** Service code accepted by 1688. */
          serviceCode: Array<string>;
        }>;
        /** Scenes pts offer tag group param accepted by 1688. */
        scenesPtsOfferTagGroupParam?: Array<{
          /** Offer type accepted by 1688. */
          offerType: string;
          /** Pts offer tag groups accepted by 1688. */
          ptsOfferTagGroups: Array<{
            /** Group id accepted by 1688. */
            groupId: string;
            /** Tag mode accepted by 1688. */
            tagMode: string;
            /** Pts offer step params accepted by 1688. */
            ptsOfferStepParams: Array<{
              /** Selected start quantity accepted by 1688. */
              selectedStartQuantity: number;
              /** Selected end quantity accepted by 1688. */
              selectedEndQuantity: number;
              /** Service code accepted by 1688. */
              serviceCode: string;
            }>;
          }>;
        }>;
      };
      output: {
        /** Result returned by 1688. */
        result?: boolean;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Code returned by 1688. */
        code?: string;
        /** Buyer message, at most 500 characters when creating an order. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Replace the authorized buyer's or seller's order memo. */
    "1688.update_order_memo": {
      input: {
        /** Order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        orderId: number | string;
        /** Order memo; replaces the previous memo. */
        memo: string;
        /** Memo icon: 1=red, 2=blue, 3=green, 4=yellow. */
        remarkIcon: string;
      };
      output: {
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMsg?: string;
        [key: string]: unknown;
      };
    };
    /** Update shipping and line discounts relative to original order prices, replacing existing discounts. */
    "1688.update_order_price": {
      input: {
        /** Order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
        orderId: number | string;
        /** Replacement shipping charge in fen (1/100 CNY). Use a decimal string for IDs outside the JavaScript safe integer range. */
        carriage: number | string;
        /** JSON-encoded line-price adjustments in fen, relative to original prices. Positive raises prices; negative lowers them. Omit closed order lines. */
        entryDiscounts: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: boolean;
        /** Result code returned by 1688. */
        resultCode?: string;
        /** Result msg returned by 1688. */
        resultMsg?: string;
        [key: string]: unknown;
      };
    };
    /** Update an order's receiving address as the seller. */
    "1688.update_order_recipient": {
      input: {
        /** Param accepted by 1688. */
        param: {
          /** Order ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
          orderId: number | string;
          /** Receive address accepted by 1688. */
          receiveAddress: {
            /** Street address. */
            address: string;
            /** Address id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
            addressId: number | string;
            /** Area code accepted by 1688. */
            areaCode: string;
            /** District name. */
            areaText: string;
            /** City code accepted by 1688. */
            cityCode: string;
            /** City name. */
            cityText: string;
            /** District code accepted by 1688. */
            districtCode: string;
            /** Recipient full name. */
            fullName: string;
            /** Mobile phone number. */
            mobile: string;
            /** Landline phone number. */
            phone: string;
            /** Postal code. */
            postCode: string;
            /** Province code accepted by 1688. */
            provinceCode: string;
            /** Province name. */
            provinceText: string;
            /** Town code accepted by 1688. */
            townCode: string;
            /** Town or subdistrict name. */
            townText: string;
          };
          /** Encrypt out order info accepted by 1688. */
          encryptOutOrderInfo?: {
            /** Encrypt order accepted by 1688. */
            encryptOrder: boolean;
            /** Encrypt receiver address accepted by 1688. */
            encryptReceiverAddress: string;
            /** Encrypt receiver mobile accepted by 1688. */
            encryptReceiverMobile: string;
            /** Encrypt receiver name accepted by 1688. */
            encryptReceiverName: string;
            /** OAID or CAID is required; only orders obtained through 1688 Open Platform are supported. */
            oaid: string;
            /** Out origin address accepted by 1688. */
            outOriginAddress: {
              /** Street address. */
              address: string;
              /** Area accepted by 1688. */
              area: {
                /** Code accepted by 1688. */
                code: string;
                /** Name accepted by 1688. */
                name: string;
              };
              /** City accepted by 1688. */
              city: {
                /** Code accepted by 1688. */
                code: string;
                /** Name accepted by 1688. */
                name: string;
              };
              /** Postal code. */
              postCode: string;
              /** Province accepted by 1688. */
              province: {
                /** Code accepted by 1688. */
                code: string;
                /** Name accepted by 1688. */
                name: string;
              };
              /** Town accepted by 1688. */
              town: {
                /** Code accepted by 1688. */
                code: string;
                /** Name accepted by 1688. */
                name: string;
              };
            };
            /** Out patform extra info accepted by 1688. */
            outPatformExtraInfo: string;
            /** Out platform appkey accepted by 1688. */
            outPlatformAppkey: string;
            /** Out platform code accepted by 1688. */
            outPlatformCode: string;
            /** Out platform order no accepted by 1688. */
            outPlatformOrderNo: string;
            /** Out platform sub code accepted by 1688. */
            outPlatformSubCode: string;
            /** Out platform supply order no accepted by 1688. */
            outPlatformSupplyOrderNo: string;
            /** Out shop id accepted by 1688. */
            outShopId: string;
            /** Out shop name accepted by 1688. */
            outShopName: string;
            /** Out supplier id accepted by 1688. */
            outSupplierId: string;
          };
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Update photo information. */
    "1688.update_photo": {
      input: {
        /** Image info accepted by 1688. */
        imageInfo: {
          /** Image id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          imageId: number | string;
          /** Name accepted by 1688. */
          name: string;
          /** Description accepted by 1688. */
          description: string;
        };
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Update product stock incrementally or absolutely; the upstream default is incremental. */
    "1688.update_product_stock": {
      input: {
        /** Product stock change accepted by 1688. */
        productStockChange: Array<Record<string, unknown>>;
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
        /** Whether to change stock incrementally. Defaults to true upstream; false replaces stock quantities. */
        increaceModify?: boolean;
      };
      output: {
        /** Result returned by 1688. */
        result?: Array<Record<string, unknown>>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMessage?: string;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Update a product's quick-return stock. */
    "1688.update_quick_return_stock": {
      input: {
        /** Param accepted by 1688. */
        param: {
          /** Offer ID. Use a decimal string for IDs outside the JavaScript safe integer range. */
          offerId: number | string;
          /** Product amount change accepted by 1688. */
          productAmountChange?: number;
          /** Sku stocks accepted by 1688. */
          skuStocks?: Array<{
            /** Sku id accepted by 1688. */
            skuId: string;
            /** Stock change accepted by 1688. */
            stockChange: number;
          }>;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Update SKU stock for a supply product. */
    "1688.update_supply_stock": {
      input: {
        /** Supply product id accepted by 1688. */
        supplyProductId: string;
        /** Sku param list accepted by 1688. */
        skuParamList: Array<{
          /** C sku id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
          cSkuId: number | string;
          /** Product quantity. Use a decimal string for IDs outside the JavaScript safe integer range. */
          quantity: number | string;
        }>;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Update a video-center video's title and description. */
    "1688.update_video": {
      input: {
        /** Video id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        videoId: number | string;
        /** Name accepted by 1688. */
        name: string;
        /** Description accepted by 1688. */
        description: string;
      };
      output: {
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Code returned by 1688. */
        code?: string;
        /** Buyer message, at most 500 characters when creating an order. */
        message?: string;
        /** Result returned by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        result?: number | string;
        [key: string]: unknown;
      };
    };
    /** Update an electronic waybill. */
    "1688.update_waybill": {
      input: {
        /** Waybill cloud print update request accepted by 1688. */
        waybillCloudPrintUpdateRequest: {
          /** Cp code accepted by 1688. */
          cpCode: string;
          /** Logistics services accepted by 1688. */
          logisticsServices?: string;
          /** Object id accepted by 1688. */
          objectId?: string;
          /** Package info accepted by 1688. */
          packageInfo?: {
            /** Items accepted by 1688. */
            items?: Array<{
              /** Count accepted by 1688. */
              count: number;
              /** Name accepted by 1688. */
              name: string;
              /** Object id accepted by 1688. */
              objectId: string;
            }>;
            /** Volume accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
            volume?: number | string;
            /** Weight accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
            weight?: number | string;
          };
          /** Recipient accepted by 1688. */
          recipient?: {
            /** Street address. */
            address?: {
              /** City accepted by 1688. */
              city?: string;
              /** Detail accepted by 1688. */
              detail?: string;
              /** District accepted by 1688. */
              district?: string;
              /** Province accepted by 1688. */
              province?: string;
              /** Town accepted by 1688. */
              town?: string;
            };
            /** Encrypted recipient address identifier. */
            caid?: string;
            /** Extra info accepted by 1688. */
            extraInfo?: string;
            /** Mobile phone number. */
            mobile?: string;
            /** Name accepted by 1688. */
            name?: string;
            /** Object id accepted by 1688. */
            objectId?: string;
            /** Landline phone number. */
            phone?: string;
          };
          /** Sender accepted by 1688. */
          sender?: {
            /** Street address. */
            address?: {
              /** City accepted by 1688. */
              city?: string;
              /** Detail accepted by 1688. */
              detail?: string;
              /** District accepted by 1688. */
              district?: string;
              /** Province accepted by 1688. */
              province?: string;
              /** Town accepted by 1688. */
              town?: string;
            };
            /** Encrypted recipient address identifier. */
            caid?: string;
            /** Extra info accepted by 1688. */
            extraInfo?: string;
            /** Mobile phone number. */
            mobile?: string;
            /** Name accepted by 1688. */
            name?: string;
            /** Object id accepted by 1688. */
            objectId?: string;
            /** Landline phone number. */
            phone?: string;
          };
          /** Template url accepted by 1688. */
          templateURL?: string;
          /** Waybill code accepted by 1688. */
          waybillCode: string;
        };
        /** Client info dto accepted by 1688. */
        clientInfoDTO: {
          /** Description accepted by 1688. */
          description?: string;
          /** Object id accepted by 1688. */
          objectId?: string;
          /** Operator id accepted by 1688. */
          operatorId?: string;
        };
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Upload a customization-service image by passing the base64-encoded image URL to 1688. */
    "1688.upload_customization_image": {
      input: {
        /** Type accepted by 1688. */
        type: string;
        /**
         * Public image URL; the URL text is base64-encoded according to the upstream contract.
         * @format uri
         */
        fileUrl: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Upload a photo of at most 2 MB from a public URL. Supported formats: jpg, jpeg, gif, bmp and png; PNG transparency is not preserved by 1688. */
    "1688.upload_photo": {
      input: {
        /** Album id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        albumID: number | string;
        /**
         * Name accepted by 1688.
         * @maxLength 30
         */
        name: string;
        /**
         * Description accepted by 1688.
         * @maxLength 2000
         */
        description?: string;
        /** Draw txt accepted by 1688. */
        drawTxt?: boolean;
        /**
         * Marketplace site. Defaults to 1688; use alibaba only where the endpoint supports the international marketplace.
         * @default "1688"
         */
        webSite?: string;
        /**
         * Public URL of the file to upload. Connector downloads it and submits the upstream representation.
         * @format uri
         */
        fileUrl: string;
      };
      output: {
        /** Image returned by 1688. */
        image?: Record<string, unknown>;
        /** Upstream error code, when present. */
        errorCode?: string;
        /** Upstream error message, when present. */
        errorMsg?: string;
        [key: string]: unknown;
      };
    };
    /** Upload a shipping voucher from a public file URL. */
    "1688.upload_shipping_voucher": {
      input: {
        /** Api order id accepted by 1688. Use a decimal string for IDs outside the JavaScript safe integer range. */
        apiOrderId: number | string;
        /** Api file type accepted by 1688. */
        apiFileType: string;
        /**
         * Public URL of the file to upload. Connector downloads it and submits the upstream representation. Maximum 50 MiB.
         * @format uri
         */
        fileUrl: string;
      };
      output: {
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Upload a video of at most 50 MB to the video center using a public file URL. */
    "1688.upload_video": {
      input: {
        /** Video filename including its extension. */
        fileName: string;
        /** Public HTTPS video URL. The video must not exceed 50 MB. */
        fileUrl: string;
        /** Description accepted by 1688. */
        description?: string;
        /** Whether to display this video as the shop announcement. */
        isShopAnnounce?: boolean;
        /** Whether this is a product-explanation video; offerId is then required. */
        isDemandVideo?: boolean;
        /** Offer ID. */
        offerId?: string;
      };
      output: {
        /** Code returned by 1688. */
        code?: string;
        /** Buyer message, at most 500 characters when creating an order. */
        message?: string;
        /** Whether the upstream operation succeeded. */
        success?: boolean;
        /** Result returned by 1688. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
