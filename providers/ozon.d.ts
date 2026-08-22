import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Ozon FBS or rFBS posting by posting number. */
    "ozon.get_fbs_posting": {
      input: {
        /**
         * The Ozon posting number.
         * @minLength 1
         */
        posting_number: string;
        /** Additional posting data to include. */
        with?: {
          /** Whether to include analytics data. */
          analytics_data?: boolean;
          /** Whether to include posting barcodes. */
          barcodes?: boolean;
          /** Whether to include financial data. */
          financial_data?: boolean;
          /** Whether to include legal information. */
          legal_info?: boolean;
          /** Whether to include product exemplar data. */
          product_exemplars?: boolean;
          /** Whether to include related posting numbers. */
          related_postings?: boolean;
          /** Whether Ozon should transliterate returned values. */
          translit?: boolean;
        };
      };
      output: {
        /** The Ozon result payload. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve detailed Ozon product information by offer, product, or SKU identifiers. */
    "ozon.get_product_info": {
      input: {
        /**
         * Seller-defined offer identifiers to retrieve.
         * @minItems 1
         * @maxItems 1000
         */
        offer_id?: Array<string>;
        /**
         * Ozon product identifiers to retrieve.
         * @minItems 1
         * @maxItems 1000
         */
        product_id?: Array<string>;
        /**
         * Ozon SKUs to retrieve.
         * @minItems 1
         * @maxItems 1000
         */
        sku?: Array<string>;
      };
      output: {
        /** The returned Ozon resources. */
        items?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Retrieve information about the authenticated Ozon seller account. */
    "ozon.get_seller_info": {
      input: Record<string, never>;
      output: {
        /** The seller company information. */
        company?: Record<string, unknown>;
        /** The seller ratings. */
        ratings?: Array<Record<string, unknown>>;
        /** The seller subscription information. */
        subscription?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List Ozon FBS and rFBS postings for a date range. */
    "ozon.list_fbs_postings": {
      input: {
        /** Filters Ozon FBS and rFBS postings. */
        filter: {
          /**
           * The inclusive beginning of the posting period in ISO 8601 format.
           * @format date-time
           */
          since: string;
          /**
           * The inclusive end of the posting period in ISO 8601 format.
           * @format date-time
           */
          to: string;
          /**
           * Delivery method identifiers to include.
           * @minItems 1
           * @maxItems 1000
           */
          delivery_method_ids?: Array<string>;
          /** Integration processing flows to include. */
          integration_type_flow?: Array<string>;
          /** Whether to include only traceable Belarus products. */
          is_blr_traceable?: boolean;
          /**
           * The Ozon order identifier.
           * @minimum 1
           */
          order_id?: number;
          /**
           * Order numbers to include.
           * @minItems 1
           * @maxItems 100
           */
          order_numbers?: Array<string>;
          /**
           * Delivery provider identifiers to include.
           * @minItems 1
           * @maxItems 1000
           */
          provider_ids?: Array<string>;
          /**
           * Posting statuses to include.
           * @minItems 1
           */
          statuses?: Array<string>;
          /**
           * Warehouse identifiers to include.
           * @minItems 1
           * @maxItems 1000
           */
          warehouse_ids?: Array<string>;
        };
        /**
         * The maximum number of postings to return.
         * @minimum 1
         * @maximum 100
         */
        limit: number;
        /** The cursor returned by the previous page. */
        cursor?: string;
        /** The posting sort direction. */
        sort_dir?: "ASC" | "DESC";
        /** Whether Ozon should transliterate returned addresses. */
        translit?: boolean;
        /** Additional posting data to include. */
        with?: {
          /** Whether to include analytics data. */
          analytics_data?: boolean;
          /** Whether to include posting barcodes. */
          barcodes?: boolean;
          /** Whether to include financial data. */
          financial_data?: boolean;
          /** Whether to include legal information. */
          legal_info?: boolean;
        };
      };
      output: {
        /** The cursor for the next page. */
        cursor?: string;
        /** Whether more postings are available. */
        has_next?: boolean;
        /** The returned Ozon postings. */
        postings?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List prices for products in the authenticated Ozon seller account. */
    "ozon.list_product_prices": {
      input: {
        /** Filters Ozon products by identifiers or visibility. */
        filter: {
          /**
           * Seller-defined offer identifiers to include.
           * @minItems 1
           * @maxItems 1000
           */
          offer_id?: Array<string>;
          /**
           * Ozon product identifiers to include.
           * @minItems 1
           * @maxItems 1000
           */
          product_id?: Array<string>;
          /** The Ozon product visibility filter. */
          visibility?: "ALL" | "VISIBLE" | "INVISIBLE" | "EMPTY_STOCK" | "NOT_MODERATED" | "MODERATED" | "DISABLED" | "STATE_FAILED" | "READY_TO_SUPPLY" | "VALIDATION_STATE_PENDING" | "VALIDATION_STATE_FAIL" | "VALIDATION_STATE_SUCCESS" | "TO_SUPPLY" | "IN_SALE" | "REMOVED_FROM_SALE" | "OVERPRICED" | "CRITICALLY_OVERPRICED" | "EMPTY_BARCODE" | "BARCODE_EXISTS" | "QUARANTINE" | "ARCHIVED" | "OVERPRICED_WITH_STOCK" | "PARTIAL_APPROVED" | "AUTO_ARCHIVED" | "MANUAL_ARCHIVED" | "SEASONAL_AUTO_ARCHIVED" | "VISIBLE_WITH_FBO_STOCK";
        };
        /**
         * The maximum number of products to return.
         * @minimum 1
         * @maximum 1000
         */
        limit: number;
        /** The cursor returned by the previous page. */
        cursor?: string;
      };
      output: {
        /** The returned Ozon resources. */
        items?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List stock quantities for products in the authenticated Ozon seller account. */
    "ozon.list_product_stocks": {
      input: {
        /** Filters Ozon products by identifiers or visibility. */
        filter: {
          /**
           * Seller-defined offer identifiers to include.
           * @minItems 1
           * @maxItems 1000
           */
          offer_id?: Array<string>;
          /**
           * Ozon product identifiers to include.
           * @minItems 1
           * @maxItems 1000
           */
          product_id?: Array<string>;
          /** The Ozon stock visibility filter. */
          visibility?: "ALL" | "VISIBLE" | "INVISIBLE" | "EMPTY_STOCK" | "NOT_MODERATED" | "MODERATED" | "DISABLED" | "STATE_FAILED" | "READY_TO_SUPPLY" | "VALIDATION_STATE_PENDING" | "VALIDATION_STATE_FAIL" | "VALIDATION_STATE_SUCCESS" | "TO_SUPPLY" | "IN_SALE" | "REMOVED_FROM_SALE" | "OVERPRICED" | "CRITICALLY_OVERPRICED" | "EMPTY_BARCODE" | "BARCODE_EXISTS" | "QUARANTINE" | "ARCHIVED" | "OVERPRICED_WITH_STOCK" | "PARTIAL_APPROVED" | "AUTO_ARCHIVED" | "MANUAL_ARCHIVED" | "SEASONAL_AUTO_ARCHIVED" | "VISIBLE_WITH_FBO_STOCK" | "BANNED";
        };
        /**
         * The maximum number of products to return.
         * @minimum 1
         * @maximum 1000
         */
        limit: number;
        /** The cursor returned by the previous page. */
        cursor?: string;
      };
      output: {
        /** The returned Ozon resources. */
        items?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List products in the authenticated Ozon seller account. */
    "ozon.list_products": {
      input: {
        /** Filters Ozon products by identifiers, SKUs, or visibility. */
        filter?: {
          /**
           * Seller-defined offer identifiers to include.
           * @minItems 1
           * @maxItems 1000
           */
          offer_id?: Array<string>;
          /**
           * Ozon product identifiers to include.
           * @minItems 1
           * @maxItems 1000
           */
          product_id?: Array<string>;
          /**
           * Ozon SKUs to include.
           * @minItems 1
           * @maxItems 1000
           */
          skus?: Array<string>;
          /** The Ozon product visibility filter. */
          visibility?: "ALL" | "VISIBLE" | "INVISIBLE" | "EMPTY_STOCK" | "NOT_MODERATED" | "MODERATED" | "DISABLED" | "STATE_FAILED" | "READY_TO_SUPPLY" | "VALIDATION_STATE_PENDING" | "VALIDATION_STATE_FAIL" | "VALIDATION_STATE_SUCCESS" | "TO_SUPPLY" | "IN_SALE" | "REMOVED_FROM_SALE" | "OVERPRICED" | "CRITICALLY_OVERPRICED" | "EMPTY_BARCODE" | "BARCODE_EXISTS" | "QUARANTINE" | "ARCHIVED" | "OVERPRICED_WITH_STOCK" | "PARTIAL_APPROVED" | "AUTO_ARCHIVED" | "MANUAL_ARCHIVED" | "SEASONAL_AUTO_ARCHIVED" | "VISIBLE_WITH_FBO_STOCK";
        };
        /** The last_id cursor returned by the previous page. */
        last_id?: string;
        /**
         * The maximum number of products to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The Ozon result payload. */
        result?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
