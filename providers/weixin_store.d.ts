import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Accept a buyer's after-sale request. Accepting a return needs a merchant address id from list_addresses; acceptType chooses between accepting the return (1) and accepting the refund (2), and is chosen automatically when omitted. */
    "weixin_store.accept_aftersale": {
      input: {
        /**
         * The after_sale_order_id to accept.
         * @minLength 1
         */
        afterSaleOrderId: string;
        /**
         * The merchant return address id from list_addresses; inspect candidates with get_address. Required when accepting a return.
         * @minLength 1
         */
        addressId?: string;
        /** 1 = accept the return (return-and-refund or exchange), 2 = accept the refund. Chosen automatically from the after-sale order's state when omitted. */
        acceptType?: 1 | 2;
      };
      output: Record<string, unknown>;
    };
    /** Create a product. All image fields must be WeChat-hosted URLs from upload_image. By default the product is saved as a draft; pass listing 1 to submit it for review and list it directly. Nested objects and arrays keep their WeChat snake_case fields as documented per field. */
    "weixin_store.add_product": {
      input: {
        /**
         * The product title, at most 60 characters.
         * @minLength 1
         * @maxLength 60
         */
        title: string;
        /**
         * The product head images: 3 to 9 image URLs returned by upload_image.
         * @minItems 3
         * @maxItems 9
         */
        headImgs: Array<string>;
        /**
         * The multi-level category path of the product, ordered down to a leaf category.
         * @minItems 1
         */
        catsV2: Array<{
          /** A category id from list_categories. WeChat documents cat_id as a number on some endpoints and a string on others; both forms are accepted. */
          cat_id?: number | string;
          [key: string]: unknown;
        }>;
        /** The delivery method: 0 = express delivery, 1 = virtual goods delivered to a phone number, 3 = virtual goods delivered to an account chosen by the buyer. */
        deliverMethod: 0 | 1 | 3;
        /**
         * The account types buyers may receive virtual goods through: 1 = WeChat openid, 2 = QQ, 3 = phone number, 4 = email. Required when deliverMethod is 3.
         * @minItems 1
         */
        deliverAcctType?: Array<1 | 2 | 3 | 4>;
        /** The after-sale services of the product in WeChat snake_case: seven_day_return and freight_insurance, each 0 or 1. */
        extraService?: Record<string, unknown>;
        /**
         * The SKUs of the product, between 1 and 500.
         * @minItems 1
         * @maxItems 500
         */
        skus: Array<Record<string, unknown>>;
        /**
         * The merchant-side product id, for joining with an external system.
         * @minLength 1
         */
        outProductId?: string;
        /** The product detail description in WeChat snake_case: imgs (image URLs from upload_image) and desc (text). */
        descInfo?: Record<string, unknown>;
        /** The product attributes required by its category. */
        attrs?: Array<Record<string, unknown>>;
        /**
         * The brand_id from list_valid_brands. Pass 2100000000 for a brandless product; required when the category limits brands.
         * @exclusiveMinimum 0
         */
        brandId?: number;
        /** The express settings in WeChat snake_case: template_id (a freight template id from list_freight_templates; inspect one with get_freight_template) and weight. */
        expressInfo?: Record<string, unknown>;
        /** Pass 1 to submit the product for review and list it directly instead of saving a draft. */
        listing?: 1;
        /**
         * The after-sale description shown to buyers.
         * @minLength 1
         */
        aftersaleDesc?: string;
        /** The purchase-limit settings in WeChat snake_case, passed through unchanged. */
        limitedInfo?: Record<string, unknown>;
        /** The size chart in WeChat snake_case, passed through unchanged. */
        sizeChart?: Record<string, unknown>;
      };
      output: {
        /** The creation result. */
        data?: {
          /** The id of the created product. */
          product_id?: string;
          /** The creation time, formatted as YYYY-MM-DD hh:mm:ss. */
          create_time?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Apply for permission to sell in a leaf category using the new category tree and certificate groups. Returns an audit id; check the audit and effective permission before publishing products. */
    "weixin_store.apply_category": {
      input: {
        /** The new category application, using WeChat field names. */
        categoryInfo: {
          /**
           * The category path from root to leaf, using cat_id values from list_categories.
           * @minItems 1
           */
          cats_v2: Array<{
            /** One category id in the path. */
            cat_id: number | string;
          }>;
          /** One selected license for each required certificate group from list_categories; empty when no licenses are required. */
          license_group_list: Array<{
            /** The required certificate group id. */
            license_group_id: number | string;
            /** The selected license. */
            license: {
              /** One permitted license id in the group. */
              license_id: number | string;
              /** Qualification image file ids from upload_qualification_image. */
              file_id_list: Array<string>;
              /** The required license fields for this certificate. */
              license_field_list: Array<{
                /**
                 * The license field key.
                 * @minLength 1
                 */
                key: string;
                /**
                 * The license field value.
                 * @minLength 1
                 */
                value: string;
              }>;
            };
          }>;
          /**
           * Approved brand ids, required when get_category reports attr.is_limit_brand=true.
           * @minItems 1
           */
          brand_list?: Array<{
            /** An approved brand id from list_valid_brands. */
            brand_id: number | string;
          }>;
          [key: string]: unknown;
        };
      };
      output: {
        /**
         * The audit id to pass to get_category_application.
         * @exclusiveMinimum 0
         */
        audit_id?: number;
        [key: string]: unknown;
      };
    };
    /** Permanently delete a product by product_id. A product under review cannot be deleted. This cannot be undone. */
    "weixin_store.delete_product": {
      input: {
        /** The product_id returned by add_product or list_products. WeChat documents it as a number in some responses and a string in others; both forms are accepted. */
        productId: string | number;
      };
      output: Record<string, unknown>;
    };
    /** Take a listed product off the shelf. */
    "weixin_store.delisting_product": {
      input: {
        /** The product_id returned by add_product or list_products. WeChat documents it as a number in some responses and a string in others; both forms are accepted. */
        productId: string | number;
      };
      output: Record<string, unknown>;
    };
    /** Get one merchant address by address_id, including its contact, region, and send/recv flags. Accepting an after-sale return needs one of these address ids. */
    "weixin_store.get_address": {
      input: {
        /**
         * The address_id returned by list_addresses.
         * @minLength 1
         */
        addressId: string;
      };
      output: {
        /** The address, with its send/recv flags and the address_info object (user_name, tel_number, province_name, city_name, county_name, detail_info, postal_code, national_code, house_number, lat, lng). */
        address_detail?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get one after-sale order by its id, including its status, type, products, and refund details. */
    "weixin_store.get_aftersale_order": {
      input: {
        /**
         * The after_sale_order_id returned by list_aftersale_orders.
         * @minLength 1
         */
        afterSaleOrderId: string;
      };
      output: {
        /** The after-sale order, with status, type (REFUND, RETURN, EXCHANGE, or RESHIP), order_id, product_info, refund_info, return_info, and reason_text. */
        after_sale_order?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the publishing rules of one leaf category: required product and sale attributes, brand restrictions, deposit, and qualifications. */
    "weixin_store.get_category": {
      input: {
        /** The id of a leaf category from list_categories. */
        catId: number | string;
      };
      output: {
        /** The category identity, with cat_id and name. */
        info?: Record<string, unknown>;
        /** The category attributes: brand requirements, deposit, product_attr_list and sale_attr_list publishing attributes, and more. */
        attr?: Record<string, unknown>;
        /** The qualifications required to publish in this category. */
        product_qua_list?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get the status and any rejection reason of a category application by audit id. */
    "weixin_store.get_category_application": {
      input: {
        /**
         * The audit_id returned by apply_category.
         * @exclusiveMinimum 0
         */
        auditId: number;
      };
      output: {
        /** The audit status and submitted materials. */
        info?: {
          /**
           * The audit id.
           * @exclusiveMinimum 0
           */
          audit_id?: number;
          /**
           * The leaf category id.
           * @exclusiveMinimum 0
           */
          cat_id?: number;
          /** 1 = in review, 2 = rejected, 3 = approved, 4 = canceled. */
          status?: number;
          /** The rejection reason, when rejected. */
          audit_reason?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the category's product attribute, sale attribute, qualification, price, and other publishing rules for the chosen release mode. */
    "weixin_store.get_category_product_rule": {
      input: {
        /** The leaf category id. */
        catId: number | string;
        /** 0 = normal, 1 = simplified. */
        releaseMode: 0 | 1;
        /** An approved brand id when publishing a branded product. */
        brandId?: number | string;
      };
      output: {
        /** Product attribute requirements. */
        product_attr_list?: Array<Record<string, unknown>>;
        /** SKU attribute requirements. */
        sale_attr_list?: Array<Record<string, unknown>>;
        /** Product qualification requirements. */
        product_qua_list?: Array<Record<string, unknown>>;
        /** The lowest allowed sale price, in cents. */
        floor_price?: number;
        [key: string]: unknown;
      };
    };
    /** Read historical Compass product click and transaction data. T+1 only: date must be yesterday or earlier in Asia/Shanghai. Monetary values and counts retain upstream string units. */
    "weixin_store.get_compass_product_data": {
      input: {
        /**
         * A valid historical date as YYYYMMDD, yesterday or earlier in Asia/Shanghai.
         * @pattern ^[0-9]{8}$
         * @example "20240520"
         */
        date: string;
        /** The product id, no greater than JavaScript's maximum safe integer. */
        productId: number | string;
      };
      output: {
        /** The product and historical metrics. */
        product_info?: {
          /** The product id. */
          product_id?: string;
          /** The product image URL. */
          head_img_url?: string;
          /** The title. */
          title?: string;
          /** The price in fen, as an upstream string. */
          price?: string;
          /** The first-level category id. */
          first_category_id?: string;
          /** The second-level category id. */
          second_category_id?: string;
          /** The third-level category id. */
          third_category_id?: string;
          /** Raw Compass metrics; monetary values are in fen and ratios can be null. */
          data?: {
            /** Unique product click visitors. */
            product_click_uv?: string;
            /** Product clicks. */
            product_click_cnt?: string;
            /** Paid GMV in fen. */
            pay_gmv?: string;
            /** Paid orders. */
            pay_cnt?: string;
            /** Paying users. */
            pay_uv?: string;
            /** Paid product quantity. */
            pay_product_cnt?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get one freight template by template_id, including its valuation type, shipping method, sender address, and freight rules. Freight templates bind to products through expressInfo on add_product. */
    "weixin_store.get_freight_template": {
      input: {
        /**
         * The template_id returned by list_freight_templates.
         * @minLength 1
         */
        templateId: string;
      };
      output: {
        /** The freight template, with name, valuation_type, shipping_method, delivery_type, send_time, the sender address_info, and its freight rules. */
        freight_template?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Read an existing alliance plan's activation, eligibility and commission. The returned item.type uses legacy values 1/2/3; do not reuse it as request type 100/300. */
    "weixin_store.get_league_plan": {
      input: {
        /** 100 = all talents, 300 = specified talents. These endpoints do not support filtered audience type 200. */
        type: 100 | 300;
        /** The existing product id; must be a safe positive integer. */
        productId: number | string;
        /** The existing promotion plan id; must be a safe positive integer. */
        promotionPlanId?: number | string;
      };
      output: {
        /** The existing plan. */
        item?: {
          /** A value matching one supported schema. */
          product_id?: number | string;
          /** Legacy response type: 1 ordinary, 2 targeted, 3 exclusive; not request audience type. */
          type?: number;
          /** 1 active, 2 delisted, 4 deleted, 5 ineligible, 7 product delisted, 8 expired, 9 banned, 10 pending activation. */
          status?: number;
          /** Commission percentage, 0–90; not the 0–1000000 talent-data scale. */
          ratio?: number;
          /** Upstream plan identity, timing and talent information. */
          exclusive_info?: Record<string, unknown>;
          /** Upstream restriction flags. */
          ext_info?: Record<string, unknown>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Read a known alliance talent's profile, sales metrics and blacklist status. Supply exactly one talent identifier, not a nickname. */
    "weixin_store.get_league_promoter": {
      input: Record<string, unknown>;
      output: {
        /** The talent profile and metrics. */
        talent?: {
          /** Talent identity. */
          base_talent_info?: {
            /** The talent appid. */
            talent_appid?: string;
            /** The nickname. */
            nickname?: string;
            /** The avatar URL. */
            head_img?: string;
            [key: string]: unknown;
          };
          /** Upstream sales and window metrics. */
          data?: {
            /** Lifetime sales GMV, in upstream units. */
            total_sale_gmv?: number;
            /** 30-day sales GMV, in upstream units. */
            sale_gmv_30d?: number;
            /** Lifetime orders. */
            total_order_num?: number;
            /** 30-day orders. */
            order_num_30d?: number;
            /** Products sold in 30 days. */
            sale_product_num_30d?: number;
            /** Products in the talent window. */
            window_product_num?: number;
            [key: string]: unknown;
          };
          /** Talent features. */
          feature_info?: {
            /** The upstream level, 0 through 5. */
            level?: number;
            /** Whether the talent is blacklisted. */
            is_blacklisted?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get one order by order_id, including its products, payment, price, and delivery details. Buyer address fields are masked. */
    "weixin_store.get_order": {
      input: {
        /** The order_id returned by list_orders. WeChat documents it as a number in some endpoints and a string in others; both forms are accepted. */
        orderId: string | number;
      };
      output: {
        /** The order, with status, order_detail (product_infos, pay_info, price_info, delivery_info, ext_info), and aftersale_detail. */
        order?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get one product by product_id. Products keep a draft and an online copy; dataType selects which. */
    "weixin_store.get_product": {
      input: {
        /** The product_id returned by add_product or list_products. WeChat documents it as a number in some responses and a string in others; both forms are accepted. */
        productId: string | number;
        /**
         * Which copy to read: 1 = the online product (default), 2 = the draft, 3 = both.
         * @maximum 3
         * @exclusiveMinimum 0
         */
        dataType?: number;
      };
      output: {
        /** The product, with its skus, category path, attrs, and audit state. */
        product?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Read store-wide product listing policy switches. This is not a historical delisting-reason log and does not change any policy. */
    "weixin_store.get_product_audit_strategy": {
      input: Record<string, never>;
      output: {
        /** Each switch is 1 enabled or 2 disabled. */
        audit_strategy?: {
          /** List with erroneous product information hidden. */
          hide_err_field_flag?: number;
          /** Allow similar products. */
          hit_duplicated_flag?: number;
          /** Allow products matching low-risk rules. */
          hit_low_risk_rule_flag?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Read restricted sales scenes for 1 to 50 products, including alliance and talent-window restrictions. This does not change product status. Merchant quota: 100 calls per minute. */
    "weixin_store.get_product_restricted_info": {
      input: {
        /**
         * Product ids, each no greater than JavaScript's maximum safe integer.
         * @minItems 1
         * @maxItems 50
         */
        productIds: Array<number | string>;
      };
      output: {
        /** The restriction response data. */
        data?: {
          /** Restrictions per product. */
          restricted_info_list?: Array<{
            /** The product id, returned as a number or numeric string. */
            product_id?: number | string;
            /** Restricted scenes and policy sources. */
            scene_info?: Array<{
              /** 1 live, 2 short video, 3 store home/talent window, 4 search, 5 ads, 6 orders/cards, 7 alliance, 8 recommendation, 9 selling, 10 invalid-product hiding. */
              scene?: number;
              /** 1 low-risk policy, 2 similar-product policy, 3 hidden-image policy, 4 trial category, 5 window hiding, 6 minimal mode, 7 selling restriction, 8 inventory restriction. */
              source?: number;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the basic information of the connected WeChat Store: name, avatar, subject type, and status. */
    "weixin_store.get_shop_info": {
      input: Record<string, never>;
      output: {
        /** The shop's basic information. */
        info?: {
          /** The shop name. */
          nickname?: string;
          /** The shop avatar URL. */
          headimg_url?: string;
          /** The shop subject type, e.g. 企业 or 个体工商户. */
          subject_type?: string;
          /** The shop status: opening, open_finished, closing, or close_finished. */
          status?: string;
          /** The shop's original id. */
          username?: string;
          /** The shop opening time as a Unix timestamp. */
          open_timestamp?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Invite one known talent to cooperate with the shop. This sends an external invitation: obtain approval for the exact recipient first. Supply promoterId or the deprecated finderId, never infer promoterId from talent_appid. Do not retry blindly after a timeout; WeChat rejects duplicate invitations within 24 hours and already-cooperating talents. */
    "weixin_store.invite_league_promoter": {
      input: Record<string, unknown>;
      output: Record<string, unknown>;
    };
    /** List the merchant address ids of the store. After-sale returns need one of these address ids when accepting a return. */
    "weixin_store.list_addresses": {
      input: {
        /**
         * The zero-based offset of the first address to return. Defaults to 0.
         * @minimum 0
         * @default 0
         */
        offset?: number;
        /**
         * The number of addresses to return. Defaults to 10.
         * @exclusiveMinimum 0
         * @default 10
         */
        limit?: number;
      };
      output: {
        /** The address ids in this page. */
        address_id_list?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** List the after-sale order ids of the store, paginated by cursor. At least one time range pair is required, as Unix timestamps in seconds spanning at most 24 hours. */
    "weixin_store.list_aftersale_orders": {
      input: {
        /**
         * The start of the after-sale creation time range, as a Unix timestamp in seconds.
         * @exclusiveMinimum 0
         */
        createTimeStart?: number;
        /**
         * The end of the after-sale creation time range, as a Unix timestamp in seconds.
         * @exclusiveMinimum 0
         */
        createTimeEnd?: number;
        /**
         * The start of the after-sale update time range, as a Unix timestamp in seconds.
         * @exclusiveMinimum 0
         */
        updateTimeStart?: number;
        /**
         * The end of the after-sale update time range, as a Unix timestamp in seconds.
         * @exclusiveMinimum 0
         */
        updateTimeEnd?: number;
        /**
         * The pagination cursor returned by the previous call. Omit for the first page.
         * @minLength 1
         */
        nextKey?: string;
      };
      output: {
        /** The after-sale order ids in this page. */
        after_sale_order_id_list?: Array<string>;
        /** Whether more after-sale orders follow this page. */
        has_more?: boolean;
        /** The pagination cursor for the next page. */
        next_key?: string;
        [key: string]: unknown;
      };
    };
    /** Get the full category tree of the store, including the qualifications each category requires. Use the leaf cat_id values from cats_v2 for add_product and get_category. */
    "weixin_store.list_categories": {
      input: Record<string, never>;
      output: {
        /** The legacy three-level category tree. */
        cats?: Array<Record<string, unknown>>;
        /** The multi-level category tree whose nodes carry a leaf flag; use the leaf cat_id values for add_product and get_category. */
        cats_v2?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List the store's category permissions. Filter to status 1 to find categories currently allowed for sale. */
    "weixin_store.list_category_permissions": {
      input: {
        /** 1 = effective, 2 = expired; omit for both. */
        status?: 1 | 2;
      };
      output: {
        /** The category permissions. */
        list?: Array<{
          /**
           * The leaf category id.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** 1 = effective, 2 = expired. */
          status?: number;
          /** Why an expired permission is no longer effective. */
          uneffective_reason?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the delivery companies the store can ship with, including each company's delivery_id. */
    "weixin_store.list_delivery_companies": {
      input: {
        /**
         * Whether to return only companies that support electronic waybills. Defaults to false.
         * @default false
         */
        ewaybillOnly?: boolean;
      };
      output: {
        /** The supported delivery companies. */
        company_list?: Array<{
          /** The delivery company id to pass to send_delivery, e.g. SF, ZTO, YTO, JD, EMS, or OTHER. */
          delivery_id?: string;
          /** The delivery company name. */
          delivery_name?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the freight template ids of the store. */
    "weixin_store.list_freight_templates": {
      input: {
        /**
         * The zero-based offset of the first template to return. Defaults to 0.
         * @minimum 0
         * @default 0
         */
        offset?: number;
        /**
         * The number of templates to return. Defaults to 10.
         * @exclusiveMinimum 0
         * @default 10
         */
        limit?: number;
      };
      output: {
        /** The freight template ids in this page. */
        template_id_list?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** List existing alliance products and eligibility status. Pagination is bounded by pageSize multiplied by pageIndex <= 5000; no undocumented cursor is sent. */
    "weixin_store.list_league_products": {
      input: {
        /**
         * The 1-based page index.
         * @exclusiveMinimum 0
         * @default 1
         */
        pageIndex?: number;
        /**
         * Page size, at most 100.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 20
         */
        pageSize?: number;
        /** The existing product id; must be a safe positive integer. */
        productId?: number | string;
        /** Request the total count. */
        needTotalNum?: boolean;
      };
      output: {
        /** Products and eligibility. */
        items?: Array<{
          /** The product id, returned as a number or numeric string. */
          product_id?: number | string;
          /** 1 active, 2 delisted, 4 deleted, 5 ineligible, 7 product delisted, 8 expired, 9 banned, 10 pending activation. */
          status?: number;
          [key: string]: unknown;
        }>;
        /** Whether more products exist. */
        has_more?: boolean;
        /** Total products when requested. */
        total_num?: number;
        [key: string]: unknown;
      };
    };
    /** Read a known cooperating talent's current window products or products sold in the last 30 days. This does not discover new talents or add products to a window. */
    "weixin_store.list_league_promoter_products": {
      input: {
        /**
         * The cooperating talent appid.
         * @minLength 1
         */
        talentAppid: string;
        /** 1 = products with sales in the last 30 days, 2 = current window products. */
        dataType: 1 | 2;
        /**
         * The 1-based page index.
         * @exclusiveMinimum 0
         * @default 1
         */
        pageIndex?: number;
        /**
         * Page size, at most 20.
         * @maximum 20
         * @exclusiveMinimum 0
         * @default 20
         */
        pageSize?: number;
      };
      output: {
        /** Total matching products. */
        total_num?: number;
        /** Whether another page exists. */
        continue_flag?: boolean;
        /** Product data. */
        list?: Array<{
          /** The product id. */
          spu_id?: number;
          /** Sales metrics. */
          product_data?: {
            /** Lifetime sales GMV, in upstream units. */
            total_sale_gmv?: number;
            /** 30-day sales GMV, in upstream units. */
            sale_gmv_30d?: number;
            /** Lifetime orders. */
            total_order_num?: number;
            /** 30-day orders. */
            order_num_30d?: number;
            [key: string]: unknown;
          };
          /** Commission information; read only. */
          talent_commission_info?: {
            /** 1 ordinary, 2 targeted, 3 exclusive. */
            commission_type?: number;
            /** Commission ratio on the upstream 0–1000000 scale; 1000000 means 100%. */
            ratio?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the connected merchant's alliance talents. This is not a platform-wide talent search; follow continue_flag to paginate. */
    "weixin_store.list_league_promoters": {
      input: {
        /**
         * The 1-based page index.
         * @exclusiveMinimum 0
         * @default 1
         */
        pageIndex?: number;
        /**
         * The number of talents per page, at most 20.
         * @maximum 20
         * @exclusiveMinimum 0
         * @default 20
         */
        pageSize?: number;
      };
      output: {
        /** The total number of talents. */
        total_num?: number;
        /** Whether another page is available. */
        continue_flag?: boolean;
        /** The talents in this page. */
        list?: Array<{
          /** The talent appid used by get_league_promoter. */
          talent_appid?: string;
          /** The talent nickname; not a lookup identifier. */
          nickname?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the order ids of the store, paginated by cursor. At least one time range is required, as a pair of Unix timestamps in seconds spanning at most 7 days. */
    "weixin_store.list_orders": {
      input: {
        /**
         * The start of the order creation time range, as a Unix timestamp in seconds.
         * @exclusiveMinimum 0
         */
        createTimeStart?: number;
        /**
         * The end of the order creation time range, as a Unix timestamp in seconds.
         * @exclusiveMinimum 0
         */
        createTimeEnd?: number;
        /**
         * The start of the order update time range, as a Unix timestamp in seconds.
         * @exclusiveMinimum 0
         */
        updateTimeStart?: number;
        /**
         * The end of the order update time range, as a Unix timestamp in seconds.
         * @exclusiveMinimum 0
         */
        updateTimeEnd?: number;
        /** Filter by order status: 10 = pending payment, 12 = pending gift receipt, 13 = pending group buy, 20 = pending shipment, 21 = partially shipped, 30 = shipped, 100 = completed, 250 = cancelled. */
        status?: 10 | 12 | 13 | 20 | 21 | 30 | 100 | 250;
        /**
         * Filter by the buyer's openid.
         * @minLength 1
         */
        openid?: string;
        /**
         * The number of orders per page, at most 100.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The pagination cursor returned by the previous call. Omit for the first page.
         * @minLength 1
         */
        nextKey?: string;
      };
      output: {
        /** The order ids in this page. */
        order_id_list?: Array<string>;
        /** The pagination cursor for the next page. */
        next_key?: string;
        /** Whether more orders follow this page. */
        has_more?: boolean;
        [key: string]: unknown;
      };
    };
    /** List an existing product's alliance promotion plan identifiers before inspecting or changing a specific plan. Filtered audience type 200 is supported by this list only, not get_league_plan or update_league_plan. */
    "weixin_store.list_product_promotion_plans": {
      input: {
        /** The existing product id; must be a safe positive integer. */
        productId: number | string;
        /** 100 all, 200 filtered, 300 specified talents. */
        promotionPlanType?: 100 | 200 | 300;
        /**
         * The 1-based page index.
         * @exclusiveMinimum 0
         * @default 1
         */
        pageIndex?: number;
        /**
         * Page size, at most 20.
         * @maximum 20
         * @exclusiveMinimum 0
         * @default 20
         */
        pageSize?: number;
      };
      output: {
        /** Total matching records. */
        total_num?: number;
        /** Whether another page exists. */
        continue_flag?: boolean;
        /** Existing plan identifiers. */
        list?: Array<{
          /** The plan id. */
          promotion_plan_id?: number | null;
          /** 100 all, 200 filtered, 300 specified talents. */
          promotion_plan_type?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Read talents related to one existing product promotion plan and their promotion relationship status. This is not platform-wide discovery and does not prove that a product is in a talent's window. */
    "weixin_store.list_product_promotion_talents": {
      input: {
        /** The existing product id; must be a safe positive integer. */
        productId: number | string;
        /** The existing promotion plan id; must be a safe positive integer. */
        promotionPlanId: number | string;
        /**
         * Optional talent appid filter.
         * @minLength 1
         */
        talentAppid?: string;
        /**
         * The 1-based page index.
         * @exclusiveMinimum 0
         * @default 1
         */
        pageIndex?: number;
        /**
         * Page size, at most 10.
         * @maximum 10
         * @exclusiveMinimum 0
         * @default 10
         */
        pageSize?: number;
      };
      output: {
        /** Total matching records. */
        total_num?: number;
        /** Whether another page exists. */
        continue_flag?: boolean;
        /** Related talents. */
        list?: Array<{
          /** Talent identity. */
          base_talent_info?: {
            /** The nickname. */
            nickname?: string;
            /** The avatar URL. */
            head_img?: string;
            /** The talent appid. */
            talent_appid?: string;
            [key: string]: unknown;
          };
          /** Read-only commission terms. */
          commission_info?: {
            /** The plan id. */
            promotion_plan_id?: number;
            /** The plan type. */
            promotion_plan_type?: number;
            /** Upstream scale: 1000000 means 100%; not the 0–90 percentage scale of update_league_plan. */
            ratio?: number;
            [key: string]: unknown;
          };
          /** 1 promoting, 4 removed, 10 blacklisted. */
          talent_relation_status?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the product ids of the store, paginated by cursor. */
    "weixin_store.list_products": {
      input: {
        /** Filter by product status: 0 = initial, 5 = listed, 11 = delisted, 6 = recycled. Omit to list every status except drafts and recycled products. */
        status?: 0 | 5 | 11 | 6;
        /**
         * The number of products per page, at most 30. Defaults to 10.
         * @maximum 30
         * @exclusiveMinimum 0
         * @default 10
         */
        pageSize?: number;
        /**
         * The pagination cursor returned by the previous call. Omit for the first page.
         * @minLength 1
         */
        nextKey?: string;
      };
      output: {
        /** The product ids in this page. */
        product_ids?: Array<string>;
        /** The pagination cursor for the next page. */
        next_key?: string;
        /** The total number of products matching the filter. */
        total_num?: number;
        [key: string]: unknown;
      };
    };
    /** List the brand qualifications currently in effect for the store, paginated by cursor. Use a returned brand_id when adding a product in a brand-restricted category. */
    "weixin_store.list_valid_brands": {
      input: {
        /**
         * The number of brands per page, at most 50. Defaults to 10.
         * @maximum 50
         * @exclusiveMinimum 0
         * @default 10
         */
        pageSize?: number;
        /**
         * The pagination cursor returned by the previous call. Omit for the first page.
         * @minLength 1
         */
        nextKey?: string;
      };
      output: {
        /** The effective brand qualifications of the shop. */
        brands?: Array<Record<string, unknown>>;
        /** The total number of effective brand qualifications. */
        total_num?: number;
        /** The pagination cursor; an empty value means the last page. */
        next_key?: string;
        [key: string]: unknown;
      };
    };
    /** Submit a product for review and list it once approved. */
    "weixin_store.listing_product": {
      input: {
        /** The product_id returned by add_product or list_products. WeChat documents it as a number in some responses and a string in others; both forms are accepted. */
        productId: string | number;
      };
      output: Record<string, unknown>;
    };
    /** Check whether the store may publish in a leaf category, including category permission, deposit, freight insurance, and store restrictions. Omit catId for store-wide checks only. */
    "weixin_store.precheck_product_category": {
      input: {
        /** The leaf category id to check; omit for a store-wide check. */
        catId?: number | string;
      };
      output: {
        /** Whether the store may publish in the category. */
        all_pass?: boolean;
        /** Reasons publishing is blocked. */
        fail_reasons?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Reject a buyer's after-sale request with a reason. */
    "weixin_store.reject_aftersale": {
      input: {
        /**
         * The after_sale_order_id to reject.
         * @minLength 1
         */
        afterSaleOrderId: string;
        /**
         * The rejection reason type, from the reason enum of the after-sale order.
         * @exclusiveMinimum 0
         */
        rejectReasonType: number;
        /**
         * A custom rejection description; a default description is used when omitted.
         * @minLength 1
         */
        rejectReason?: string;
      };
      output: Record<string, unknown>;
    };
    /** Ship an order, in one or more packages. Each package either ships by express with a waybill (deliverType 1, needs waybillId and deliveryId from list_delivery_companies, or OTHER when the company is not listed) or delivers virtual goods without logistics (deliverType 3, only for orders whose products use the phone-number delivery method). */
    "weixin_store.send_delivery": {
      input: {
        /** The order_id returned by list_orders. WeChat documents it as a number in some endpoints and a string in others; both forms are accepted. */
        orderId: string | number;
        /**
         * The packages to ship for this order.
         * @minItems 1
         */
        deliveries: Array<{
          /** 1 = ship by express with a waybill, 3 = virtual goods without logistics. */
          deliverType: 1 | 3;
          /**
           * The waybill number. Required when deliverType is 1.
           * @minLength 1
           */
          waybillId?: string;
          /**
           * The delivery company id from list_delivery_companies, or OTHER. Required when deliverType is 1.
           * @minLength 1
           */
          deliveryId?: string;
          /**
           * The products in this package.
           * @minItems 1
           */
          productInfos: Array<{
            /**
             * The product_id of the shipped product.
             * @minLength 1
             */
            productId: string;
            /**
             * The sku_id of the shipped product.
             * @minLength 1
             */
            skuId: string;
            /**
             * The shipped quantity.
             * @exclusiveMinimum 0
             */
            productCnt: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
      output: Record<string, unknown>;
    };
    /** Change one existing alliance promotion plan: edit commission and activate (1), delist (2), or activate (4). Obtain approval for the exact plan and change first; activation or commission changes can incur commission spending. Read the plan before and after; no automatic fallback, audience changes, new plan creation or deletion is provided. */
    "weixin_store.update_league_plan": {
      input: {
        /** 100 = all talents, 300 = specified talents. These endpoints do not support filtered audience type 200. */
        type: 100 | 300;
        /** The existing product id; must be a safe positive integer. */
        productId: number | string;
        /** The existing promotion plan id; must be a safe positive integer. */
        promotionPlanId: number | string;
        /** Edit commission and activate. */
        operateType: 1;
        /**
         * Commission percentage, 0–90 (not the 0–1000000 read scale).
         * @minimum 0
         * @maximum 90
         */
        ratio: number;
      } | {
        /** 100 = all talents, 300 = specified talents. These endpoints do not support filtered audience type 200. */
        type: 100 | 300;
        /** The existing product id; must be a safe positive integer. */
        productId: number | string;
        /** The existing promotion plan id; must be a safe positive integer. */
        promotionPlanId: number | string;
        /** 2 = delist, 4 = activate. No commission fields accepted. */
        operateType: 2 | 4;
      };
      output: {
        /** The updated plan id. */
        promotion_plan_id?: number;
        /** Talents that failed to update; a nonempty list means partial failure. */
        fail_talent_appids?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Replace the merchant note of one order, optionally with a tag color. */
    "weixin_store.update_order_merchant_notes": {
      input: {
        /** The order_id returned by list_orders. WeChat documents it as a number in some endpoints and a string in others; both forms are accepted. */
        orderId: string | number;
        /**
         * The merchant note to set on the order.
         * @minLength 1
         */
        merchantNotes: string;
        /**
         * The note tag color: 0 = gray, 1 = red, 2 = orange, 3 = green, 4 = blue.
         * @minimum 0
         * @maximum 4
         */
        tagColor?: number;
      };
      output: Record<string, unknown>;
    };
    /** Replace a product's editable data. This is a full overwrite: every field of add_product applies, SKUs that carry an existing sku_id are updated, SKUs without one are added, and previously existing SKUs missing from the list are deleted. */
    "weixin_store.update_product": {
      input: {
        /** The product_id returned by add_product or list_products. WeChat documents it as a number in some responses and a string in others; both forms are accepted. */
        productId: string | number;
        /**
         * The product title, at most 60 characters.
         * @minLength 1
         * @maxLength 60
         */
        title: string;
        /**
         * The product head images: 3 to 9 image URLs returned by upload_image.
         * @minItems 3
         * @maxItems 9
         */
        headImgs: Array<string>;
        /**
         * The multi-level category path of the product, ordered down to a leaf category.
         * @minItems 1
         */
        catsV2: Array<{
          /** A category id from list_categories. WeChat documents cat_id as a number on some endpoints and a string on others; both forms are accepted. */
          cat_id?: number | string;
          [key: string]: unknown;
        }>;
        /** The delivery method: 0 = express delivery, 1 = virtual goods delivered to a phone number, 3 = virtual goods delivered to an account chosen by the buyer. */
        deliverMethod: 0 | 1 | 3;
        /**
         * The account types buyers may receive virtual goods through: 1 = WeChat openid, 2 = QQ, 3 = phone number, 4 = email. Required when deliverMethod is 3.
         * @minItems 1
         */
        deliverAcctType?: Array<1 | 2 | 3 | 4>;
        /** The after-sale services of the product in WeChat snake_case: seven_day_return and freight_insurance, each 0 or 1. */
        extraService?: Record<string, unknown>;
        /**
         * The SKUs of the product, between 1 and 500.
         * @minItems 1
         * @maxItems 500
         */
        skus: Array<Record<string, unknown>>;
        /**
         * The merchant-side product id, for joining with an external system.
         * @minLength 1
         */
        outProductId?: string;
        /** The product detail description in WeChat snake_case: imgs (image URLs from upload_image) and desc (text). */
        descInfo?: Record<string, unknown>;
        /** The product attributes required by its category. */
        attrs?: Array<Record<string, unknown>>;
        /**
         * The brand_id from list_valid_brands. Pass 2100000000 for a brandless product; required when the category limits brands.
         * @exclusiveMinimum 0
         */
        brandId?: number;
        /** The express settings in WeChat snake_case: template_id (a freight template id from list_freight_templates; inspect one with get_freight_template) and weight. */
        expressInfo?: Record<string, unknown>;
        /** Pass 1 to submit the product for review and list it directly instead of saving a draft. */
        listing?: 1;
        /**
         * The after-sale description shown to buyers.
         * @minLength 1
         */
        aftersaleDesc?: string;
        /** The purchase-limit settings in WeChat snake_case, passed through unchanged. */
        limitedInfo?: Record<string, unknown>;
        /** The size chart in WeChat snake_case, passed through unchanged. */
        sizeChart?: Record<string, unknown>;
      };
      output: {
        /** The update result. */
        data?: {
          /** The id of the updated product. */
          product_id?: string;
          /** The update time, formatted as YYYY-MM-DD hh:mm:ss. */
          update_time?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Update the stock of a product's SKUs. This does not consume the product review quota. */
    "weixin_store.update_product_stock": {
      input: {
        /** The product_id returned by add_product or list_products. WeChat documents it as a number in some responses and a string in others; both forms are accepted. */
        productId: string | number;
        /**
         * The SKU stock updates in WeChat snake_case: [{sku_id, stock_num}].
         * @minItems 1
         */
        skus: Array<Record<string, unknown>>;
      };
      output: Record<string, unknown>;
    };
    /** Ask WeChat to fetch and host a public image URL for use in product image fields. At most 10 MB per image. */
    "weixin_store.upload_image": {
      input: {
        /**
         * A publicly accessible image URL that WeChat fetches and re-hosts.
         * @format uri
         */
        imageUrl: string;
      };
      output: {
        /** The uploaded image file descriptors. */
        pic_file?: {
          /** The WeChat-hosted image URL (mmecimage.cn) accepted by every product image field. */
          img_url?: string;
          /** The media_id of the uploaded image. */
          media_id?: string;
          /** The pay_media_id of the uploaded image. */
          pay_media_id?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Upload a qualification image (up to 2 MB) and return the file_id required for category and brand applications. Product images from upload_image cannot be used here. */
    "weixin_store.upload_qualification_image": {
      input: {
        /**
         * A public URL of the qualification image, at most 2 MB.
         * @format uri
         */
        fileUrl: string;
      };
      output: {
        /** The uploaded file reference. */
        data?: {
          /**
           * The file id to use in a category or brand qualification application.
           * @minLength 1
           */
          file_id?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
