import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete the seller's listing for one Amazon marketplace. The returned submission status indicates whether Amazon accepted the deletion for processing. */
    "amazon_sp_api.delete_listings_item": {
      input: {
        /**
         * Seller ID. Defaults to the seller authorized by this connection.
         * @minLength 1
         */
        sellerId?: string;
        /**
         * The seller-provided listing SKU, including any special characters.
         * @minLength 1
         */
        sku: string;
        /**
         * The single Amazon marketplace ID for this request.
         * @minItems 1
         * @maxItems 1
         */
        marketplaceIds: Array<string>;
        /** Locale for issue messages, such as en_US. Defaults to the marketplace language. */
        issueLocale?: string;
      };
      output: {
        /** The seller-provided listing SKU. */
        sku: string;
        /** Submission status: ACCEPTED, INVALID, or VALID for a successful validation preview. */
        status: string;
        /** The submission identifier assigned by Amazon. */
        submissionId: string;
        /** Issues found while accepting or validating the submission. */
        issues?: Array<Record<string, unknown>>;
        /** Catalog identifiers returned for validation previews when requested. */
        identifiers?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Retrieve an Amazon catalog item by ASIN with selected datasets for the requested marketplaces. */
    "amazon_sp_api.get_catalog_item": {
      input: {
        /**
         * The Amazon Standard Identification Number to retrieve.
         * @minLength 1
         */
        asin: string;
        /**
         * Amazon marketplace IDs in the connected region.
         * @minItems 1
         */
        marketplaceIds: Array<string>;
        /** Catalog datasets to return. Amazon defaults to summaries; vendorDetails requires vendor access. */
        includedData?: Array<"attributes" | "classifications" | "dimensions" | "identifiers" | "images" | "productTypes" | "relationships" | "salesRanks" | "summaries" | "vendorDetails">;
        /** Locale for localized item summaries. Defaults to the marketplace locale. */
        locale?: string;
      };
      output: {
        /** The Amazon Standard Identification Number. */
        asin: string;
        /** Product-type-specific item attributes. */
        attributes?: Record<string, unknown>;
        /** Browse classifications by marketplace. */
        classifications?: Array<Record<string, unknown>>;
        /** Item dimensions by marketplace. */
        dimensions?: Array<Record<string, unknown>>;
        /** Item identifiers by marketplace. */
        identifiers?: Array<Record<string, unknown>>;
        /** Item images by marketplace. */
        images?: Array<Record<string, unknown>>;
        /** Product types by marketplace. */
        productTypes?: Array<Record<string, unknown>>;
        /** Item relationships by marketplace. */
        relationships?: Array<Record<string, unknown>>;
        /** Sales ranks by marketplace. */
        salesRanks?: Array<Record<string, unknown>>;
        /** Item summaries by marketplace. */
        summaries?: Array<Record<string, unknown>>;
        /** Vendor details by marketplace. */
        vendorDetails?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Read FBA inventory summaries for one marketplace. For changed inventory, retain startDateTime when paging and reuse nextToken within 30 seconds. Inbound quantity changes are not detected by the incremental filter. */
    "amazon_sp_api.get_inventory_summaries": {
      input: {
        /**
         * The single Amazon marketplace ID for this request.
         * @minItems 1
         * @maxItems 1
         */
        marketplaceIds: Array<string>;
        /** Include additional inventory quantities and details. Amazon defaults to false. */
        details?: boolean;
        /**
         * Return changes since this time, no earlier than 18 months ago. Overrides sellerSkus and sellerSku; retain when paging.
         * @format date-time
         */
        startDateTime?: string;
        /**
         * Filter up to 50 seller SKUs. Ignored when startDateTime is provided; takes precedence over sellerSku.
         * @maxItems 50
         */
        sellerSkus?: Array<string>;
        /** Filter one seller SKU, including SKUs containing commas. Ignored when startDateTime or sellerSkus is supplied. */
        sellerSku?: string;
        /** Next-page token from pagination.nextToken. Expires 30 seconds after creation. */
        nextToken?: string;
      };
      output: {
        /** Inventory aggregation result. */
        payload: {
          /** Inventory aggregation marketplace. */
          granularity: {
            /** Inventory aggregation type, Marketplace. */
            granularityType?: string;
            /** Marketplace used for aggregation. */
            granularityId?: string;
            [key: string]: unknown;
          };
          /** Inventory summaries for this page. */
          inventorySummaries: Array<{
            /** The Amazon Standard Identification Number. */
            asin?: string;
            /** The Amazon fulfillment network SKU. */
            fnSku?: string;
            /** The seller SKU. */
            sellerSku?: string;
            /** Item condition. */
            condition?: string;
            /** Available, reserved, inbound, and other inventory quantities. */
            inventoryDetails?: Record<string, unknown>;
            /** Last inventory update time. */
            lastUpdatedTime?: string;
            /** Localized product title. */
            productName?: string;
            /** Total units in inbound shipments or Amazon fulfillment centers. */
            totalQuantity?: number;
            /** Seller-enrolled stores applying to this SKU. */
            stores?: Array<string>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Pagination for inventory results. */
        pagination?: {
          /** Next-page token; expires after 30 seconds. */
          nextToken?: string;
          [key: string]: unknown;
        };
        /** Errors returned by Amazon. */
        errors?: Array<{
          /** Amazon error code. */
          code?: string;
          /** Amazon error message. */
          message?: string;
          /** Additional error details. */
          details?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve a seller listing, including selected attributes, offers, live availability, and processing issues. */
    "amazon_sp_api.get_listings_item": {
      input: {
        /**
         * Seller ID. Defaults to the seller authorized by this connection.
         * @minLength 1
         */
        sellerId?: string;
        /**
         * The seller-provided listing SKU, including any special characters.
         * @minLength 1
         */
        sku: string;
        /**
         * Amazon marketplace IDs in the connected region.
         * @minItems 1
         */
        marketplaceIds: Array<string>;
        /** Locale for issue messages, such as en_US. Defaults to the marketplace language. */
        issueLocale?: string;
        /** Listing datasets to return. Amazon defaults to summaries. */
        includedData?: Array<"summaries" | "attributes" | "issues" | "offers" | "fulfillmentAvailability" | "procurement" | "relationships" | "productTypes">;
      };
      output: {
        /** The seller-provided listing SKU. */
        sku: string;
        /** Listing summaries by marketplace. */
        summaries?: Array<Record<string, unknown>>;
        /** Latest submitted product-type-specific listing attributes. */
        attributes?: Record<string, unknown>;
        /** Listing processing issues. */
        issues?: Array<Record<string, unknown>>;
        /** Current listing offers. */
        offers?: Array<Record<string, unknown>>;
        /** Live fulfillment availability for this listing. */
        fulfillmentAvailability?: Array<Record<string, unknown>>;
        /** Vendor procurement information. */
        procurement?: Array<Record<string, unknown>>;
        /** Listing relationships by marketplace. */
        relationships?: Array<Record<string, unknown>>;
        /** Listing product types by marketplace. */
        productTypes?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List the connected seller's Amazon marketplaces and participation status in the connected region. */
    "amazon_sp_api.list_marketplace_participations": {
      input: Record<string, never>;
      output: {
        /** Marketplaces and seller participation details. */
        payload: Array<{
          /** Marketplace identity, country, language, and currency. */
          marketplace?: Record<string, unknown>;
          /** Participation and listing-suspension status. */
          participation?: Record<string, unknown>;
          /** Seller store name displayed in this marketplace. */
          storeName?: string;
          [key: string]: unknown;
        }>;
        /** Errors returned by Amazon. */
        errors?: Array<{
          /** Amazon error code. */
          code?: string;
          /** Amazon error message. */
          message?: string;
          /** Additional error details. */
          details?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Partially update listing attributes with add, replace, merge, or delete operations. Deleting attribute instances requires selector values. VALIDATION_PREVIEW checks without saving; ACCEPTED submissions may still develop processing issues. */
    "amazon_sp_api.patch_listings_item": {
      input: (unknown);
      output: {
        /** The seller-provided listing SKU. */
        sku: string;
        /** Submission status: ACCEPTED, INVALID, or VALID for a successful validation preview. */
        status: string;
        /** The submission identifier assigned by Amazon. */
        submissionId: string;
        /** Issues found while accepting or validating the submission. */
        issues?: Array<Record<string, unknown>>;
        /** Catalog identifiers returned for validation previews when requested. */
        identifiers?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Create or fully update a seller listing. Omitted existing attributes may be removed; use patch_listings_item for partial edits. VALIDATION_PREVIEW checks the submission without saving it. */
    "amazon_sp_api.put_listings_item": {
      input: (unknown);
      output: {
        /** The seller-provided listing SKU. */
        sku: string;
        /** Submission status: ACCEPTED, INVALID, or VALID for a successful validation preview. */
        status: string;
        /** The submission identifier assigned by Amazon. */
        submissionId: string;
        /** Issues found while accepting or validating the submission. */
        issues?: Array<Record<string, unknown>>;
        /** Catalog identifiers returned for validation previews when requested. */
        identifiers?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Search the Amazon catalog by product identifiers or keywords. Search pagination exposes at most 1,000 matching ASINs. */
    "amazon_sp_api.search_catalog_items": {
      input: (unknown) & (unknown) & (unknown) & (unknown);
      output: {
        /** Total matches for identifier queries; estimated matches for keyword queries. */
        numberOfResults: number;
        /** Catalog items on this page. */
        items: Array<{
          /** The Amazon Standard Identification Number. */
          asin: string;
          /** Product-type-specific item attributes. */
          attributes?: Record<string, unknown>;
          /** Browse classifications by marketplace. */
          classifications?: Array<Record<string, unknown>>;
          /** Item dimensions by marketplace. */
          dimensions?: Array<Record<string, unknown>>;
          /** Item identifiers by marketplace. */
          identifiers?: Array<Record<string, unknown>>;
          /** Item images by marketplace. */
          images?: Array<Record<string, unknown>>;
          /** Product types by marketplace. */
          productTypes?: Array<Record<string, unknown>>;
          /** Item relationships by marketplace. */
          relationships?: Array<Record<string, unknown>>;
          /** Sales ranks by marketplace. */
          salesRanks?: Array<Record<string, unknown>>;
          /** Item summaries by marketplace. */
          summaries?: Array<Record<string, unknown>>;
          /** Vendor details by marketplace. */
          vendorDetails?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Tokens for subsequent result pages. */
        pagination?: {
          /** Token for the next page; absent on the last page. */
          nextToken?: string;
          /** Token for the previous page when available. */
          previousToken?: string;
          [key: string]: unknown;
        };
        /** Brand and classification refinements for keyword searches. */
        refinements?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Search the seller's listings by identifiers, relationships, dates, status, or issue severity. Pagination exposes at most 1,000 matching SKUs. */
    "amazon_sp_api.search_listings_items": {
      input: (unknown) & (unknown) & (unknown);
      output: {
        /** Total matching listings, although pagination exposes at most 1,000. */
        numberOfResults: number;
        /** Listings on this page. */
        items: Array<{
          /** The seller-provided listing SKU. */
          sku: string;
          /** Listing summaries by marketplace. */
          summaries?: Array<Record<string, unknown>>;
          /** Latest submitted product-type-specific listing attributes. */
          attributes?: Record<string, unknown>;
          /** Listing processing issues. */
          issues?: Array<Record<string, unknown>>;
          /** Current listing offers. */
          offers?: Array<Record<string, unknown>>;
          /** Live fulfillment availability for this listing. */
          fulfillmentAvailability?: Array<Record<string, unknown>>;
          /** Vendor procurement information. */
          procurement?: Array<Record<string, unknown>>;
          /** Listing relationships by marketplace. */
          relationships?: Array<Record<string, unknown>>;
          /** Listing product types by marketplace. */
          productTypes?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Tokens for subsequent result pages. */
        pagination?: {
          /** Token for the next page; absent on the last page. */
          nextToken?: string;
          /** Token for the previous page when available. */
          previousToken?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
