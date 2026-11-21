import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get details of up to 50 TikTok Shop orders using API 202507, including payment, items and fulfillment information. */
    "tiktok_shop.get_orders": {
      input: {
        /**
         * Shop cipher returned by list_authorized_shops. Select the intended shop explicitly.
         * @minLength 1
         */
        shop_cipher: string;
        /**
         * Order IDs to retrieve.
         * @minItems 1
         * @maxItems 50
         */
        ids: Array<string>;
      };
      output: {
        /** Requested orders. */
        orders: Array<{
          /** Order ID. */
          id?: string;
          /** Order status. */
          status?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get a TikTok Shop product, including SKU inventory, prices and audit details. Select either the draft or under-review version when needed. */
    "tiktok_shop.get_product": {
      input: {
        /**
         * Shop cipher returned by list_authorized_shops. Select the intended shop explicitly.
         * @minLength 1
         */
        shop_cipher: string;
        /**
         * TikTok Shop resource ID.
         * @minLength 1
         */
        product_id: string;
        /** BCP-47 locale for category information. Defaults to the shop locale. */
        locale?: string;
        /** Retrieve the version under review instead of the live snapshot. Mutually exclusive with return_draft_version. */
        return_under_review_version?: boolean;
        /** Retrieve the draft version. Mutually exclusive with return_under_review_version; supported for DRAFT, ACTIVATE, SELLER_DEACTIVATED and PLATFORM_DEACTIVATED products. */
        return_draft_version?: boolean;
        /** Additional product information to include. */
        query_options?: Array<"GET_PRODUCT_DETAIL_URL">;
      };
      output: {
        /** TikTok Shop product, including upstream SKU, inventory, pricing and audit fields. */
        product: {
          /** Product ID. */
          id?: string;
          /** Product title. */
          title?: string;
          /** Product status. */
          status?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List the seller's authorized TikTok Shop stores and their shop ciphers for subsequent product and order calls. */
    "tiktok_shop.list_authorized_shops": {
      input: Record<string, never>;
      output: {
        /** Shops authorized for this app. */
        shops: Array<{
          /**
           * TikTok Shop resource ID.
           * @minLength 1
           */
          id?: string;
          /** Shop name. */
          name?: string;
          /**
           * Shop cipher returned by list_authorized_shops. Select the intended shop explicitly.
           * @minLength 1
           */
          cipher?: string;
          /** Shop market code. */
          region?: string;
          /** Seller type. */
          seller_type?: string;
          /** Shop code. */
          code?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search TikTok Shop orders by creation or update time, status, buyer and warehouse, with cursor pagination. */
    "tiktok_shop.search_orders": {
      input: {
        /**
         * Shop cipher returned by list_authorized_shops. Select the intended shop explicitly.
         * @minLength 1
         */
        shop_cipher: string;
        /**
         * Number of results per page. Defaults to 20.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        page_size?: number;
        /** Opaque next_page_token from the previous response. Omit for the first page. */
        page_token?: string;
        /** Sort direction. Defaults to DESC. */
        sort_order?: "ASC" | "DESC";
        /** Sort field. Defaults to create_time. */
        sort_field?: "create_time" | "update_time";
        /** Filter by order status. */
        order_status?: "UNPAID" | "ON_HOLD" | "AWAITING_SHIPMENT" | "PARTIALLY_SHIPPING" | "AWAITING_COLLECTION" | "IN_TRANSIT" | "DELIVERED" | "COMPLETED" | "CANCELLED";
        /** Inclusive creation time lower bound, in Unix seconds. */
        create_time_ge?: number;
        /** Exclusive creation time upper bound, in Unix seconds. */
        create_time_lt?: number;
        /** Inclusive update time lower bound, in Unix seconds. Ongoing refreshes may return newer updates. */
        update_time_ge?: number;
        /** Exclusive update time upper bound, in Unix seconds. Ongoing refreshes may return newer updates. */
        update_time_lt?: number;
        /** Delivery method; in-store pickup is available only in SEA markets. */
        shipping_type?: "TIKTOK" | "SELLER" | "TIKTOK_DIGITAL" | "IN-STORE PICKUP";
        /**
         * Filter by buyer user ID.
         * @minLength 1
         */
        buyer_user_id?: string;
        /** Filter by whether the buyer requested cancellation. */
        is_buyer_request_cancel?: boolean;
        /**
         * Pickup or sales warehouse IDs; requires multi-warehouse support.
         * @maxItems 100
         */
        warehouse_ids?: Array<string>;
      };
      output: {
        /** Matching orders. */
        orders: Array<{
          /** Order ID. */
          id?: string;
          /** Order status. */
          status?: string;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page; absent or empty when no further page is available. */
        next_page_token?: string;
        /** Total number of matching records reported by TikTok Shop. */
        total_count?: number;
        [key: string]: unknown;
      };
    };
    /** Search TikTok Shop products using API 202502, with status, SKU, time, audit and listing filters. Use get_product for complete details. */
    "tiktok_shop.search_products": {
      input: {
        /**
         * Shop cipher returned by list_authorized_shops. Select the intended shop explicitly.
         * @minLength 1
         */
        shop_cipher: string;
        /**
         * Number of results per page. Defaults to 20.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        page_size?: number;
        /** Opaque next_page_token from the previous response. Omit for the first page. */
        page_token?: string;
        /** Product base-version status; does not select post-live drafts. Defaults to ALL. */
        status?: "ALL" | "DRAFT" | "PENDING" | "FAILED" | "ACTIVATE" | "SELLER_DEACTIVATED" | "PLATFORM_DEACTIVATED" | "FREEZE" | "DELETED";
        /** Filter by seller SKU codes. */
        seller_skus?: Array<string>;
        /**
         * Filter by up to 10 SKU IDs.
         * @maxItems 10
         */
        sku_ids?: Array<string>;
        /** Inclusive creation time lower bound, in Unix seconds. */
        create_time_ge?: number;
        /** Inclusive creation time upper bound, in Unix seconds. */
        create_time_le?: number;
        /** Inclusive update time lower bound, in Unix seconds. */
        update_time_ge?: number;
        /** Inclusive update time upper bound, in Unix seconds. */
        update_time_le?: number;
        /** Category tree version: v2 for US, v1 for other markets. Omit to include both. */
        category_version?: "v1" | "v2";
        /** Listing quality tiers; available for the US market. */
        listing_quality_tiers?: Array<"POOR" | "FAIR" | "GOOD" | "EXCELLENT">;
        /** Listing platforms for migrated Tokopedia sellers. Requires a status other than ALL; both values select products listed on both platforms. */
        listing_platforms?: Array<"TOKOPEDIA" | "TIKTOK_SHOP">;
        /** TikTok Shop audit statuses of base versions or post-live edits. */
        audit_status?: Array<"AUDITING" | "FAILED" | "APPROVED">;
        /** Subscribe and Save eligibility or configuration filter. */
        sns_filter?: "CONFIGURED" | "ELIGIBLE";
        /** Return only draft versions. Supported with ALL, DRAFT, ACTIVATE, SELLER_DEACTIVATED or PLATFORM_DEACTIVATED status. */
        return_draft_version?: boolean;
        /** BCP-47 locale for category information. Defaults to the shop locale. */
        locale?: string;
        /** Include LIVE_QUICK products alongside normal products. Defaults to false. */
        include_live_quick_products?: boolean;
      };
      output: {
        /** Matching products. */
        products: Array<{
          /** Product ID. */
          id?: string;
          /** Product title. */
          title?: string;
          /** Product status. */
          status?: string;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page; absent or empty when no further page is available. */
        next_page_token?: string;
        /** Total number of matching records reported by TikTok Shop. */
        total_count?: number;
        [key: string]: unknown;
      };
    };
  }
}
