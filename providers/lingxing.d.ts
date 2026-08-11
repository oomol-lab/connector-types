import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Analyze aggregated Sponsored Products and Sponsored Brands keyword metrics. */
    "lingxing.analyze_ad_keywords": {
      input: {
        /**
         * The Amazon advertising profile ID.
         * @minLength 1
         */
        profileId?: string;
        /**
         * The Lingxing seller store ID.
         * @exclusiveMinimum 0
         */
        sellerId?: number;
        /**
         * Amazon ASINs used to find related ad groups, up to 10.
         * @minItems 1
         * @maxItems 10
         */
        asins?: Array<string>;
        /**
         * Merchant SKUs used to find related ad groups, up to 10.
         * @minItems 1
         * @maxItems 10
         */
        mskus?: Array<string>;
        /**
         * Advertising campaign IDs to include.
         * @minItems 1
         */
        campaignIds?: Array<string>;
        /**
         * Advertising ad group IDs to include.
         * @minItems 1
         */
        adGroupIds?: Array<string>;
        /**
         * The inclusive report start date, with a maximum span of 31 days.
         * @format date
         */
        startDate: string;
        /**
         * The inclusive report end date, with a maximum span of 31 days.
         * @format date
         */
        endDate: string;
        /** The sponsored advertising type. */
        sponsoredType?: "sp" | "sb";
        /**
         * Sort rules, in priority order, up to three.
         * @minItems 1
         * @maxItems 3
         */
        order?: Array<{
          /**
           * The metric field to sort by.
           * @minLength 1
           */
          column: string;
          /** The sort direction. */
          sort: "asc" | "desc";
        }>;
        /**
         * The one-based page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum records to return per page.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The paginated records returned by Lingxing. */
        data: {
          /** The records in this page. */
          list?: Array<Record<string, unknown>>;
          /** The total number of matching records. */
          total?: number;
          [key: string]: unknown;
        };
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** Analyze aggregated Sponsored Products and Sponsored Brands search-term metrics. */
    "lingxing.analyze_ad_search_terms": {
      input: {
        /**
         * The Amazon advertising profile ID.
         * @minLength 1
         */
        profileId?: string;
        /**
         * The Lingxing seller store ID.
         * @exclusiveMinimum 0
         */
        sellerId?: number;
        /**
         * Amazon ASINs used to find related ad groups, up to 10.
         * @minItems 1
         * @maxItems 10
         */
        asins?: Array<string>;
        /**
         * Merchant SKUs used to find related ad groups, up to 10.
         * @minItems 1
         * @maxItems 10
         */
        mskus?: Array<string>;
        /**
         * Advertising campaign IDs to include.
         * @minItems 1
         */
        campaignIds?: Array<string>;
        /**
         * Advertising ad group IDs to include.
         * @minItems 1
         */
        adGroupIds?: Array<string>;
        /**
         * The inclusive report start date, with a maximum span of 31 days.
         * @format date
         */
        startDate: string;
        /**
         * The inclusive report end date, with a maximum span of 31 days.
         * @format date
         */
        endDate: string;
        /** The sponsored advertising type. */
        sponsoredType?: "sp" | "sb";
        /**
         * Sort rules, in priority order, up to three.
         * @minItems 1
         * @maxItems 3
         */
        order?: Array<{
          /**
           * The metric field to sort by.
           * @minLength 1
           */
          column: string;
          /** The sort direction. */
          sort: "asc" | "desc";
        }>;
        /**
         * The one-based page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum records to return per page.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The paginated records returned by Lingxing. */
        data: {
          /** The records in this page. */
          list?: Array<Record<string, unknown>>;
          /** The total number of matching records. */
          total?: number;
          [key: string]: unknown;
        };
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** Get details for up to 50 Lingxing FBA shipment orders in one request. */
    "lingxing.batch_get_fba_shipments": {
      input: {
        /**
         * Lingxing FBA shipment order numbers, up to 50.
         * @minItems 1
         * @maxItems 50
         */
        shipmentNumbers: Array<string>;
        /** Whether to return deleted shipment orders. */
        returnDeleted?: boolean;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The matching FBA shipment orders. */
        data: Array<{
          /** The Lingxing FBA shipment record identifier. */
          id?: number;
          /** The Lingxing FBA shipment order number. */
          shipment_sn?: string;
          /** The Lingxing FBA shipment status code. */
          status?: number;
          /** The Lingxing warehouse identifier. */
          wid?: number;
          /** The Lingxing warehouse name. */
          wname?: string;
          /** The shipment time returned by Lingxing. */
          shipment_time?: string;
          /** The shipment creation time returned by Lingxing. */
          gmt_create?: string;
          /** The shipment modification time returned by Lingxing. */
          gmt_modified?: string;
          /** The product lines included in the shipment. */
          items?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** Get details for up to 100 Lingxing local products by IDs, SKUs, or SKU identifiers. */
    "lingxing.batch_get_products": {
      input: {
        /**
         * Lingxing local product IDs, up to 100.
         * @minItems 1
         * @maxItems 100
         */
        productIds?: Array<string>;
        /**
         * Local product SKUs, up to 100.
         * @minItems 1
         * @maxItems 100
         */
        skus?: Array<string>;
        /**
         * Local product SKU identifiers, up to 100.
         * @minItems 1
         * @maxItems 100
         */
        skuIdentifiers?: Array<string>;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The matching local product records. */
        data: Array<{
          /** The Lingxing local product identifier. */
          id?: number;
          /** The local product SKU. */
          sku?: string;
          /** The local product SKU identifier. */
          sku_identifier?: string;
          /** The local product name. */
          product_name?: string;
          /** The primary product image URL. */
          pic_url?: string;
          /** The product status code. */
          status?: number;
          /** The human-readable product status. */
          status_text?: string;
          /** Whether the product is enabled in Lingxing. */
          open_status?: number;
          /** Whether this is a combination product. */
          is_combo?: number;
          /** The product category identifier. */
          cid?: number;
          /** The product category name. */
          category_name?: string;
          /** The product brand identifier. */
          bid?: number;
          /** The product brand name. */
          brand_name?: string;
          /** The product creation timestamp in seconds. */
          create_time?: number;
          /** The product update timestamp in seconds. */
          update_time?: number;
          [key: string]: unknown;
        }>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** Get one Lingxing FBA shipment order by shipment order number. */
    "lingxing.get_fba_shipment": {
      input: {
        /**
         * The Lingxing FBA shipment order number.
         * @minLength 1
         */
        shipmentNumber: string;
        /** Whether to return a deleted shipment order. */
        returnDeleted?: boolean;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** An FBA shipment record returned by Lingxing. */
        data: {
          /** The Lingxing FBA shipment record identifier. */
          id?: number;
          /** The Lingxing FBA shipment order number. */
          shipment_sn?: string;
          /** The Lingxing FBA shipment status code. */
          status?: number;
          /** The Lingxing warehouse identifier. */
          wid?: number;
          /** The Lingxing warehouse name. */
          wname?: string;
          /** The shipment time returned by Lingxing. */
          shipment_time?: string;
          /** The shipment creation time returned by Lingxing. */
          gmt_create?: string;
          /** The shipment modification time returned by Lingxing. */
          gmt_modified?: string;
          /** The product lines included in the shipment. */
          items?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** Get the processing result for an asynchronous FBA shipment creation request. */
    "lingxing.get_fba_shipment_creation_result": {
      input: {
        /**
         * The request flag supplied when creating the shipment.
         * @minLength 1
         */
        requestFlag: string;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The matching creation process records in reverse creation order. */
        data: Array<{
          /** The request flag supplied when the shipment was created. */
          request_flag?: string;
          /** The Lingxing creation endpoint that processed the request. */
          request_url?: string;
          /** The endpoint-specific creation result returned by Lingxing. */
          process_result?: unknown;
          /** The processing message returned by Lingxing. */
          process_msg?: string;
          /** The processing status: 0 processing, 1 succeeded, or 2 failed. */
          process_status?: number;
          /** The created shipment order number, or an empty string after failure. */
          order_sn?: string;
          /** The time at which Lingxing received the creation request. */
          gmt_create?: string;
          /** The time at which Lingxing last updated the creation result. */
          gmt_modified?: string;
          [key: string]: unknown;
        }>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** Get one local product from Lingxing by product ID, SKU, or SKU identifier. */
    "lingxing.get_product": {
      input: {
        /**
         * The Lingxing local product identifier.
         * @exclusiveMinimum 0
         */
        id?: number;
        /**
         * The local product SKU.
         * @minLength 1
         */
        sku?: string;
        /**
         * The local product SKU identifier.
         * @minLength 1
         */
        skuIdentifier?: string;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** A local product record returned by Lingxing. */
        data: {
          /** The Lingxing local product identifier. */
          id?: number;
          /** The local product SKU. */
          sku?: string;
          /** The local product SKU identifier. */
          sku_identifier?: string;
          /** The local product name. */
          product_name?: string;
          /** The primary product image URL. */
          pic_url?: string;
          /** The product status code. */
          status?: number;
          /** The human-readable product status. */
          status_text?: string;
          /** Whether the product is enabled in Lingxing. */
          open_status?: number;
          /** Whether this is a combination product. */
          is_combo?: number;
          /** The product category identifier. */
          cid?: number;
          /** The product category name. */
          category_name?: string;
          /** The product brand identifier. */
          bid?: number;
          /** The product brand name. */
          brand_name?: string;
          /** The product creation timestamp in seconds. */
          create_time?: number;
          /** The product update timestamp in seconds. */
          update_time?: number;
          [key: string]: unknown;
        };
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List all ERP user accounts enabled for the Lingxing enterprise. */
    "lingxing.list_accounts": {
      input: Record<string, never>;
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The endpoint-specific data returned by Lingxing. */
        data: unknown;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List DSP, seller, or vendor advertising accounts authorized in Lingxing. */
    "lingxing.list_ad_accounts": {
      input: {
        /** The advertising account type. */
        accountType: "dsp" | "seller" | "vendor";
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of advertising accounts to return.
         * @exclusiveMinimum 0
         */
        length?: number;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The records returned by Lingxing. */
        data: Array<Record<string, unknown>>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List Amazon competitor products monitored in Lingxing. */
    "lingxing.list_competitor_monitors": {
      input: {
        /**
         * Competitor levels to include: 1 A, 2 B, 3 C, or 4 D.
         * @minItems 1
         */
        levels?: Array<1 | 2 | 3 | 4>;
        /**
         * The inclusive update-date lower bound.
         * @format date
         */
        updatedAfter?: string;
        /**
         * The inclusive update-date upper bound.
         * @format date
         */
        updatedBefore?: string;
        /**
         * Amazon ASINs to find, up to 200.
         * @minItems 1
         * @maxItems 200
         */
        asins?: Array<string>;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of competitor records to return.
         * @minimum 1
         * @maximum 200
         */
        length?: number;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The records returned by Lingxing. */
        data: Array<Record<string, unknown>>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List all Amazon concept stores configured in the Lingxing ERP account. */
    "lingxing.list_concept_sellers": {
      input: Record<string, never>;
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The endpoint-specific data returned by Lingxing. */
        data: unknown;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List the Lingxing ERP exchange rates for a calendar month. */
    "lingxing.list_currencies": {
      input: {
        /**
         * The exchange-rate month in YYYY-MM format.
         * @pattern ^\d{4}-(0[1-9]|1[0-2])$
         */
        date: string;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The endpoint-specific data returned by Lingxing. */
        data: unknown;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List current Lingxing FBA inventory with product, store, stock-state, and advanced search filters. */
    "lingxing.list_fba_inventory": {
      input: {
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The number of inventory rows to return, from 20 through 200.
         * @minimum 20
         * @maximum 200
         */
        length?: number;
        /** The FBA inventory field to search. */
        searchField?: "sku" | "product_name" | "seller_sku" | "fnsku" | "asin" | "parent_asin" | "spu" | "spu_name";
        /**
         * The value to find in the selected inventory field.
         * @minLength 1
         */
        searchValue?: string;
        /**
         * The Lingxing product category ID.
         * @minLength 1
         */
        categoryId?: string;
        /**
         * Lingxing seller store IDs to include.
         * @minItems 1
         */
        sellerIds?: Array<number>;
        /**
         * The Lingxing product brand ID.
         * @minLength 1
         */
        brandId?: string;
        /**
         * The Lingxing product attribute to include.
         * @minLength 1
         */
        attribute?: string;
        /**
         * ERP user IDs assigned as Listing principals.
         * @minItems 1
         */
        listingPrincipalIds?: Array<number>;
        /** The Listing status: 0 stopped or 1 active. */
        listingStatus?: 0 | 1;
        /**
         * Advanced inventory search conditions combined by Lingxing.
         * @minItems 1
         */
        advancedSearches?: Array<{
          /** The FBA inventory field to search. */
          searchField: "sku" | "product_name" | "seller_sku" | "fnsku" | "asin" | "parent_asin" | "spu" | "spu_name";
          /**
           * Values matched with OR semantics.
           * @minItems 1
           */
          searchValues: Array<string>;
        }>;
        /** The fulfillment channel. */
        fulfillmentChannel?: "FBA" | "FBM";
        /** Whether rows with zero inventory should be hidden. */
        hideZeroStock?: boolean;
        /** Whether rows should be merged by parent ASIN. */
        mergeParentAsin?: boolean;
        /** Whether deleted Listings should be included. */
        includeDeletedListings?: boolean;
        /** Whether European shared warehouses should include per-store quantities. */
        includeSharedWarehouseBreakdown?: boolean;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The records returned by Lingxing. */
        data: Array<Record<string, unknown>>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List first-mile carriers available for Lingxing FBA shipment logistics. */
    "lingxing.list_fba_shipment_carriers": {
      input: {
        /** The first-mile transport mode. */
        vehicleType?: "Sea" | "Express" | "Aviation";
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The matching first-mile carriers. */
        data: Array<{
          /** The Lingxing carrier code. */
          shippers?: string;
          /** The carrier name. */
          name?: string;
          /** The carrier tracking homepage URL. */
          home_page?: string;
          [key: string]: unknown;
        }>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List additional first-mile logistics fee types for Lingxing FBA shipments. */
    "lingxing.list_fba_shipment_fee_types": {
      input: Record<string, never>;
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The available additional fee types. */
        data: Array<{
          /** The Lingxing additional fee type identifier. */
          fee_type_id?: string;
          /** The additional fee type name. */
          name?: string;
          /** The additional fee type remark. */
          remark?: string;
          /** The fee type creation time returned by Lingxing. */
          created_at?: string;
          [key: string]: unknown;
        }>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List Lingxing FBA shipment orders with pagination and operational filters. */
    "lingxing.list_fba_shipments": {
      input: {
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset: number;
        /**
         * The maximum number of shipment orders to return.
         * @exclusiveMinimum 0
         */
        length: number;
        /** The SKU, shipment order number, or Amazon shipment ID to find. */
        searchValue?: string;
        /** The Lingxing field used to search for shipments. */
        searchField?: "sku" | "shipment_sn" | "shipment_id";
        /**
         * Lingxing seller store IDs to include.
         * @minItems 1
         */
        sellerIds?: Array<number>;
        /**
         * Lingxing marketplace IDs to include.
         * @minItems 1
         */
        marketplaceIds?: Array<number>;
        /**
         * Lingxing warehouse IDs to include.
         * @minItems 1
         */
        warehouseIds?: Array<number>;
        /**
         * Lingxing logistics type IDs to include.
         * @minItems 1
         */
        logisticsTypeIds?: Array<number>;
        /** The shipment status: -1 pending allocation, 0 pending shipment, 1 shipped, 3 voided, or 4 deleted. */
        status?: -1 | 0 | 1 | 3 | 4;
        /** Whether the picking list has been printed. */
        printStatus?: "0" | "1";
        /** Whether picking has been completed. */
        pickStatus?: "0" | "1";
        /** The date filter type: 0 shipment, 1 arrival, 2 creation date, 3 precise creation time, or 4 update time. */
        timeType?: 0 | 1 | 2 | 3 | 4;
        /** The inclusive beginning of the selected date or time range. */
        startDate?: string;
        /** The inclusive end of the selected date or time range. */
        endDate?: string;
        /** The deletion filter: 0 excludes deleted records, 1 returns deleted records, or 2 returns all records. */
        deleteStatus?: 0 | 1 | 2;
        /**
         * Exact shipment searches to apply.
         * @minItems 1
         */
        preciseSearches?: Array<{
          /** The Lingxing field used to search for shipments. */
          searchField: "sku" | "shipment_sn" | "shipment_id";
          /**
           * The exact values to find.
           * @minItems 1
           */
          searchValues: Array<string>;
        }>;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The paginated FBA shipment result. */
        data: {
          /** The FBA shipment orders in this page. */
          list?: Array<{
            /** The Lingxing FBA shipment record identifier. */
            id?: number;
            /** The Lingxing FBA shipment order number. */
            shipment_sn?: string;
            /** The Lingxing FBA shipment status code. */
            status?: number;
            /** The Lingxing warehouse identifier. */
            wid?: number;
            /** The Lingxing warehouse name. */
            wname?: string;
            /** The shipment time returned by Lingxing. */
            shipment_time?: string;
            /** The shipment creation time returned by Lingxing. */
            gmt_create?: string;
            /** The shipment modification time returned by Lingxing. */
            gmt_modified?: string;
            /** The product lines included in the shipment. */
            items?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          }>;
          /** The total number of matching FBA shipment orders. */
          total?: number;
          [key: string]: unknown;
        };
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List monitored Amazon keyword rankings in Lingxing. */
    "lingxing.list_keyword_rankings": {
      input: {
        /**
         * The Lingxing marketplace ID.
         * @exclusiveMinimum 0
         */
        marketplaceId?: number;
        /**
         * The inclusive ranking start date.
         * @format date
         */
        startDate?: string;
        /**
         * The inclusive ranking end date.
         * @format date
         */
        endDate?: string;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset: number;
        /**
         * The maximum number of keyword rankings to return.
         * @minimum 1
         * @maximum 2000
         */
        length: number;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The records returned by Lingxing. */
        data: Array<Record<string, unknown>>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List Amazon Listings in Lingxing with store, pairing, update-time, and product filters. */
    "lingxing.list_listings": {
      input: {
        /**
         * Lingxing seller store IDs to include.
         * @minItems 1
         */
        sellerIds: Array<number>;
        /** The pairing status: 1 paired or 2 unpaired. */
        pairingStatus?: 1 | 2;
        /** Whether deleted Listings should be returned. */
        includeDeleted?: boolean;
        /**
         * The inclusive pairing update start time in Beijing time, formatted YYYY-MM-DD HH:mm:ss.
         * @minLength 1
         */
        pairingUpdatedAfter?: string;
        /**
         * The inclusive pairing update end time in Beijing time, formatted YYYY-MM-DD HH:mm:ss.
         * @minLength 1
         */
        pairingUpdatedBefore?: string;
        /**
         * The inclusive All Listing report update start time in UTC, formatted YYYY-MM-DD HH:mm:ss.
         * @minLength 1
         */
        listingUpdatedAfter?: string;
        /**
         * The inclusive All Listing report update end time in UTC, formatted YYYY-MM-DD HH:mm:ss.
         * @minLength 1
         */
        listingUpdatedBefore?: string;
        /** The Listing field to search. */
        searchField?: "seller_sku" | "asin" | "sku";
        /**
         * Listing values to find, up to 10.
         * @minItems 1
         * @maxItems 10
         */
        searchValues?: Array<string>;
        /** Whether the Listing search should use exact matching. */
        exactSearch?: boolean;
        /** The product store type: 1 standard store or 2 low-price store. */
        storeType?: 1 | 2;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of Listings to return.
         * @minimum 1
         * @maximum 1000
         */
        length?: number;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The records returned by Lingxing. */
        data: Array<Record<string, unknown>>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List all Amazon marketplaces configured in the Lingxing ERP account. */
    "lingxing.list_marketplaces": {
      input: Record<string, never>;
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The endpoint-specific data returned by Lingxing. */
        data: unknown;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List Lingxing profit-report rows aggregated by merchant SKU. */
    "lingxing.list_msku_profit": {
      input: {
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of MSKU profit rows to return.
         * @minimum 1
         * @maximum 10000
         */
        length?: number;
        /**
         * Lingxing marketplace IDs to include.
         * @minItems 1
         */
        marketplaceIds?: Array<number>;
        /**
         * Lingxing seller store IDs to include.
         * @minItems 1
         */
        sellerIds?: Array<number>;
        /** Whether the report should aggregate by month instead of day. */
        monthly?: boolean;
        /**
         * The inclusive settlement start date, formatted YYYY-MM-DD or YYYY-MM for monthly reports.
         * @minLength 1
         */
        startDate: string;
        /**
         * The inclusive settlement end date, formatted YYYY-MM-DD or YYYY-MM for monthly reports.
         * @minLength 1
         */
        endDate: string;
        /** The MSKU profit field to search. */
        searchField?: "seller_sku";
        /**
         * Merchant SKUs to find.
         * @minItems 1
         */
        searchValues?: Array<string>;
        /**
         * The report currency code, or omit it for source currencies.
         * @minLength 1
         */
        currencyCode?: string;
        /** Whether rows should be summarized by merchant SKU. */
        summarizeByMsku?: boolean;
        /** The settlement transaction status. */
        orderStatus?: "Deferred" | "Disbursed" | "DisbursedAndPreSettled" | "All";
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The paginated records returned by Lingxing. */
        data: {
          /** The records in this page. */
          records?: Array<Record<string, unknown>>;
          /** The total number of matching records. */
          total?: number;
          [key: string]: unknown;
        };
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List Lingxing order-profit rows aggregated by merchant SKU. */
    "lingxing.list_order_profit": {
      input: {
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of order-profit rows to return.
         * @minimum 1
         * @maximum 5000
         */
        length?: number;
        /**
         * Lingxing seller store IDs to include.
         * @minItems 1
         */
        sellerIds?: Array<number>;
        /**
         * The inclusive query start date or timestamp, formatted YYYY-MM-DD or YYYY-MM-DD HH:mm:ss.
         * @minLength 1
         */
        startDate: string;
        /**
         * The inclusive query end date or timestamp, formatted YYYY-MM-DD or YYYY-MM-DD HH:mm:ss.
         * @minLength 1
         */
        endDate: string;
        /** The order-profit field to search. */
        searchField?: "seller_sku" | "asin" | "local_name" | "local_sku";
        /**
         * Order-profit values to find.
         * @minItems 1
         */
        searchValues?: Array<string>;
        /** The report currency, or omit it for source currencies. */
        currencyCode?: "CNY" | "USD" | "EUR" | "JPY" | "AUD" | "CAD" | "MXN" | "GBP" | "INR" | "AED" | "SGD" | "SAR" | "BRL" | "SEK" | "PLN" | "TRY" | "HKD";
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The records returned by Lingxing. */
        data: Array<Record<string, unknown>>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List Amazon product performance aggregated by ASIN, parent ASIN, MSKU, or local SKU. */
    "lingxing.list_product_performance": {
      input: {
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset: number;
        /**
         * The maximum number of product-performance rows to return.
         * @minimum 1
         * @maximum 10000
         */
        length: number;
        /** A product-performance metric supported by Lingxing. */
        sortField: "volume" | "order_items" | "amount" | "volume_chain_ratio" | "order_chain_ratio" | "amount_chain_ratio" | "b2b_volume" | "b2b_order_items" | "promotion_volume" | "promotion_amount" | "promotion_order_items" | "promotion_discount" | "avg_volume";
        /** The sort direction. */
        sortOrder: "asc" | "desc";
        /** The product field to search. */
        searchField?: "asin" | "parent_asin" | "msku" | "local_sku" | "item_name";
        /**
         * Product values to find, up to 50.
         * @minItems 1
         * @maxItems 50
         */
        searchValues?: Array<string>;
        /**
         * The Lingxing marketplace ID.
         * @exclusiveMinimum 0
         */
        marketplaceId?: number;
        /**
         * Lingxing seller store IDs to include, up to 200.
         * @minItems 1
         * @maxItems 200
         */
        sellerIds: Array<number>;
        /**
         * The inclusive performance start date, with a maximum span of 92 days.
         * @format date
         */
        startDate: string;
        /**
         * The inclusive performance end date, with a maximum span of 92 days.
         * @format date
         */
        endDate: string;
        /**
         * Numeric product-performance filters.
         * @minItems 1
         */
        metricFilters?: Array<{
          /** A product-performance metric supported by Lingxing. */
          field: "volume" | "order_items" | "amount" | "volume_chain_ratio" | "order_chain_ratio" | "amount_chain_ratio" | "b2b_volume" | "b2b_order_items" | "promotion_volume" | "promotion_amount" | "promotion_order_items" | "promotion_discount" | "avg_volume";
          /** The comparison value or inclusive range lower bound. */
          fromValue: number;
          /** The inclusive range upper bound. */
          toValue?: number;
          /** The comparison operator. */
          operator: "range" | "gt" | "lt" | "ge" | "le" | "eq";
        }>;
        /** The dimension used for the summary row. */
        summaryField: "asin" | "parent_asin" | "msku" | "sku";
        /** The report currency, or omit it for source currencies. */
        currencyCode?: "USD" | "CNY";
        /** Whether only active products should be returned. */
        onlyActiveProducts?: boolean;
        /** The refund accounting basis: 0 refund occurrence date or 1 order date. */
        refundAccounting?: 0 | 1;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The paginated records returned by Lingxing. */
        data: {
          /** The records in this page. */
          list?: Array<Record<string, unknown>>;
          /** The total number of matching records. */
          total?: number;
          [key: string]: unknown;
        };
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List local products in Lingxing with pagination, timestamp ranges, and SKU filters. */
    "lingxing.list_products": {
      input: {
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of products to return.
         * @minimum 1
         * @maximum 1000
         */
        length?: number;
        /**
         * The inclusive product update-time lower bound as a Unix timestamp in seconds.
         * @minimum 0
         */
        updateTimeStart?: number;
        /**
         * The exclusive product update-time upper bound as a Unix timestamp in seconds.
         * @minimum 0
         */
        updateTimeEnd?: number;
        /**
         * The inclusive product creation-time lower bound as a Unix timestamp in seconds.
         * @minimum 0
         */
        createTimeStart?: number;
        /**
         * The exclusive product creation-time upper bound as a Unix timestamp in seconds.
         * @minimum 0
         */
        createTimeEnd?: number;
        /**
         * Local product SKUs to include.
         * @minItems 1
         */
        skus?: Array<string>;
        /**
         * Local product SKU identifiers to include.
         * @minItems 1
         */
        skuIdentifiers?: Array<string>;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The local products in this page. */
        data: Array<{
          /** The Lingxing local product identifier. */
          id?: number;
          /** The local product SKU. */
          sku?: string;
          /** The local product SKU identifier. */
          sku_identifier?: string;
          /** The local product name. */
          product_name?: string;
          /** The primary product image URL. */
          pic_url?: string;
          /** The product status code. */
          status?: number;
          /** The human-readable product status. */
          status_text?: string;
          /** Whether the product is enabled in Lingxing. */
          open_status?: number;
          /** Whether this is a combination product. */
          is_combo?: number;
          /** The product category identifier. */
          cid?: number;
          /** The product category name. */
          category_name?: string;
          /** The product brand identifier. */
          bid?: number;
          /** The product brand name. */
          brand_name?: string;
          /** The product creation timestamp in seconds. */
          create_time?: number;
          /** The product update timestamp in seconds. */
          update_time?: number;
          [key: string]: unknown;
        }>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List Sponsored Brands ad group performance for one report date. */
    "lingxing.list_sb_ad_group_reports": {
      input: {
        /**
         * The Lingxing seller store ID.
         * @exclusiveMinimum 0
         */
        sellerId?: number;
        /**
         * The Amazon advertising profile ID for a vendor account.
         * @minLength 1
         */
        profileId?: string;
        /**
         * The report date.
         * @format date
         */
        reportDate: string;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of report records to return.
         * @exclusiveMinimum 0
         */
        length?: number;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The records returned by Lingxing. */
        data: Array<Record<string, unknown>>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List Sponsored Brands campaign performance for one report date. */
    "lingxing.list_sb_campaign_reports": {
      input: {
        /**
         * The Lingxing seller store ID.
         * @exclusiveMinimum 0
         */
        sellerId?: number;
        /**
         * The Amazon advertising profile ID for a vendor account.
         * @minLength 1
         */
        profileId?: string;
        /**
         * The report date.
         * @format date
         */
        reportDate: string;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of report records to return.
         * @exclusiveMinimum 0
         */
        length?: number;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The records returned by Lingxing. */
        data: Array<Record<string, unknown>>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List Sponsored Brands advertising creative performance for one report date. */
    "lingxing.list_sb_product_ad_reports": {
      input: {
        /**
         * The Lingxing seller store ID.
         * @exclusiveMinimum 0
         */
        sellerId?: number;
        /**
         * The Amazon advertising profile ID for a vendor account.
         * @minLength 1
         */
        profileId?: string;
        /**
         * The report date.
         * @format date
         */
        reportDate: string;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of report records to return.
         * @exclusiveMinimum 0
         */
        length?: number;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The records returned by Lingxing. */
        data: Array<Record<string, unknown>>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List Sponsored Brands targeting performance for one report date. */
    "lingxing.list_sb_target_reports": {
      input: {
        /**
         * The Lingxing seller store ID.
         * @exclusiveMinimum 0
         */
        sellerId?: number;
        /**
         * The Amazon advertising profile ID for a vendor account.
         * @minLength 1
         */
        profileId?: string;
        /**
         * The report date.
         * @format date
         */
        reportDate: string;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of report records to return.
         * @exclusiveMinimum 0
         */
        length?: number;
        /** The sponsored advertising type. */
        sponsoredType: "ALL";
        /** The targeting type. */
        targetType: "keyword" | "producttarget" | "ALL";
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The records returned by Lingxing. */
        data: Array<Record<string, unknown>>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List Sponsored Display ad group performance for one report date. */
    "lingxing.list_sd_ad_group_reports": {
      input: {
        /**
         * The Lingxing seller store ID.
         * @exclusiveMinimum 0
         */
        sellerId?: number;
        /**
         * The Amazon advertising profile ID for a vendor account.
         * @minLength 1
         */
        profileId?: string;
        /**
         * The report date.
         * @format date
         */
        reportDate: string;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of report records to return.
         * @exclusiveMinimum 0
         */
        length?: number;
        /** Whether to include metrics for the complete attribution window. */
        includeFullAttribution?: boolean;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The records returned by Lingxing. */
        data: Array<Record<string, unknown>>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List Sponsored Display campaign performance for one report date. */
    "lingxing.list_sd_campaign_reports": {
      input: {
        /**
         * The Lingxing seller store ID.
         * @exclusiveMinimum 0
         */
        sellerId?: number;
        /**
         * The Amazon advertising profile ID for a vendor account.
         * @minLength 1
         */
        profileId?: string;
        /**
         * The report date.
         * @format date
         */
        reportDate: string;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of report records to return.
         * @exclusiveMinimum 0
         */
        length?: number;
        /** Whether to include metrics for the complete attribution window. */
        includeFullAttribution?: boolean;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The records returned by Lingxing. */
        data: Array<Record<string, unknown>>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List Sponsored Display advertised-product performance for one report date. */
    "lingxing.list_sd_product_ad_reports": {
      input: {
        /**
         * The Lingxing seller store ID.
         * @exclusiveMinimum 0
         */
        sellerId?: number;
        /**
         * The Amazon advertising profile ID for a vendor account.
         * @minLength 1
         */
        profileId?: string;
        /**
         * The report date.
         * @format date
         */
        reportDate: string;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of report records to return.
         * @exclusiveMinimum 0
         */
        length?: number;
        /** Whether to include metrics for the complete attribution window. */
        includeFullAttribution?: boolean;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The records returned by Lingxing. */
        data: Array<Record<string, unknown>>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List Sponsored Display targeting performance for one report date. */
    "lingxing.list_sd_target_reports": {
      input: {
        /**
         * The Lingxing seller store ID.
         * @exclusiveMinimum 0
         */
        sellerId?: number;
        /**
         * The Amazon advertising profile ID for a vendor account.
         * @minLength 1
         */
        profileId?: string;
        /**
         * The report date.
         * @format date
         */
        reportDate: string;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of report records to return.
         * @exclusiveMinimum 0
         */
        length?: number;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The records returned by Lingxing. */
        data: Array<Record<string, unknown>>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List all Amazon seller stores authorized in the Lingxing ERP account. */
    "lingxing.list_sellers": {
      input: Record<string, never>;
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The endpoint-specific data returned by Lingxing. */
        data: unknown;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List Sponsored Products ad group performance for one report date. */
    "lingxing.list_sp_ad_group_reports": {
      input: {
        /**
         * The Lingxing seller store ID.
         * @exclusiveMinimum 0
         */
        sellerId?: number;
        /**
         * The Amazon advertising profile ID for a vendor account.
         * @minLength 1
         */
        profileId?: string;
        /**
         * The report date.
         * @format date
         */
        reportDate: string;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of report records to return.
         * @exclusiveMinimum 0
         */
        length?: number;
        /** Whether to include metrics for the complete attribution window. */
        includeFullAttribution?: boolean;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The records returned by Lingxing. */
        data: Array<Record<string, unknown>>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List Sponsored Products campaign performance for one report date. */
    "lingxing.list_sp_campaign_reports": {
      input: {
        /**
         * The Lingxing seller store ID.
         * @exclusiveMinimum 0
         */
        sellerId?: number;
        /**
         * The Amazon advertising profile ID for a vendor account.
         * @minLength 1
         */
        profileId?: string;
        /**
         * The report date.
         * @format date
         */
        reportDate: string;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of report records to return.
         * @exclusiveMinimum 0
         */
        length?: number;
        /** Whether to include metrics for the complete attribution window. */
        includeFullAttribution?: boolean;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The records returned by Lingxing. */
        data: Array<Record<string, unknown>>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List Sponsored Products advertised-product performance for one report date. */
    "lingxing.list_sp_product_ad_reports": {
      input: {
        /**
         * The Lingxing seller store ID.
         * @exclusiveMinimum 0
         */
        sellerId?: number;
        /**
         * The Amazon advertising profile ID for a vendor account.
         * @minLength 1
         */
        profileId?: string;
        /**
         * The report date.
         * @format date
         */
        reportDate: string;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of report records to return.
         * @exclusiveMinimum 0
         */
        length?: number;
        /** Whether to include metrics for the complete attribution window. */
        includeFullAttribution?: boolean;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The records returned by Lingxing. */
        data: Array<Record<string, unknown>>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List Sponsored Products targeting performance for one report date. */
    "lingxing.list_sp_target_reports": {
      input: {
        /**
         * The Lingxing seller store ID.
         * @exclusiveMinimum 0
         */
        sellerId?: number;
        /**
         * The Amazon advertising profile ID for a vendor account.
         * @minLength 1
         */
        profileId?: string;
        /**
         * The report date.
         * @format date
         */
        reportDate: string;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of report records to return.
         * @exclusiveMinimum 0
         */
        length?: number;
        /** Whether to include metrics for the complete attribution window. */
        includeFullAttribution?: boolean;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The records returned by Lingxing. */
        data: Array<Record<string, unknown>>;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List standardized state and province codes for a country. */
    "lingxing.list_states": {
      input: {
        /**
         * A two-letter country code.
         * @minLength 2
         * @maxLength 2
         * @pattern ^[A-Za-z]{2}$
         */
        countryCode: string;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The endpoint-specific data returned by Lingxing. */
        data: unknown;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
    /** List states and provinces for an Amazon country configured in Lingxing. */
    "lingxing.list_world_states": {
      input: {
        /**
         * A two-letter country code.
         * @minLength 2
         * @maxLength 2
         * @pattern ^[A-Za-z]{2}$
         */
        countryCode: string;
      };
      output: {
        /** The Lingxing response code; zero indicates success. */
        code: number;
        /** The response message returned by Lingxing. */
        message?: string;
        /** The response message returned by Lingxing. */
        msg?: string;
        /** Validation or processing errors returned by Lingxing. */
        error_details?: Array<unknown>;
        /** The Lingxing request identifier. */
        request_id?: string;
        /** The Lingxing trace identifier. */
        trace_id?: string;
        /** The time at which Lingxing produced the response. */
        response_time?: string;
        /** The endpoint-specific data returned by Lingxing. */
        data: unknown;
        /** The total number of records when provided by the endpoint. */
        total?: number;
      };
    };
  }
}
