import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Apply incremental Shopify inventory quantity changes with required idempotency and explicit compare-and-swap values. */
    "shopify_admin.adjust_inventory_quantities": {
      input: {
        /**
         * A caller-stable idempotency key reused when retrying the same inventory adjustment.
         * @minLength 1
         */
        idempotencyKey: string;
        /**
         * The inventory quantity state to adjust.
         * @minLength 1
         */
        name: string;
        /** The Shopify reason for changing inventory quantities. */
        reason: "correction" | "cycle_count_available" | "damaged" | "movement_created" | "movement_updated" | "movement_received" | "movement_canceled" | "other" | "promotion" | "quality_control" | "received" | "reservation_created" | "reservation_deleted" | "reservation_updated" | "restock" | "safety_stock" | "shrinkage";
        /**
         * A URI identifying the business reason or source document for the adjustment group.
         * @minLength 1
         */
        referenceDocumentUri?: string;
        /**
         * Incremental inventory quantity changes to apply.
         * @minItems 1
         */
        changes: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          inventoryItemId: string;
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          locationId: string;
          /** The amount by which Shopify should change the inventory quantity. */
          delta: number;
          /** The expected current quantity for compare-and-swap, or null to explicitly skip the check. */
          changeFromQuantity: number | null;
          /**
           * A non-Shopify URI identifying the exact inventory transaction or ledger entry.
           * @minLength 1
           */
          ledgerDocumentUri?: string;
        }>;
      };
      output: {
        /** A normalized Shopify inventory adjustment group. */
        inventoryAdjustmentGroup: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The timestamp when Shopify created the adjustment group. */
          createdAt: string;
          /** The reason for the inventory changes. */
          reason: string;
          /** The audit trail reference URI when returned by Shopify. */
          referenceDocumentUri: string | null;
          /** Inventory changes made by the operation. */
          changes: Array<{
            /** The inventory quantity state that changed. */
            name: string;
            /** The amount by which the inventory quantity changed. */
            delta: number;
            /** The resulting quantity after the change when returned by Shopify. */
            quantityAfterChange: number | null;
            /** The raw object returned by Shopify Admin GraphQL. */
            raw: Record<string, unknown>;
          }>;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a Shopify fulfillment for one or more fulfillment orders with optional tracking and customer notification. */
    "shopify_admin.create_fulfillment": {
      input: {
        /** The fulfillment orders, notification preference, origin address, and tracking information. */
        fulfillment: {
          /**
           * Fulfillment orders and optional line item subsets to fulfill.
           * @minItems 1
           */
          lineItemsByFulfillmentOrder: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            fulfillmentOrderId: string;
            /**
             * The fulfillment order line items to fulfill; omit this field to fulfill all line items.
             * @minItems 1
             * @maxItems 512
             */
            fulfillmentOrderLineItems?: Array<{
              /**
               * A Shopify GraphQL global ID.
               * @minLength 1
               */
              id: string;
              /**
               * The quantity of this fulfillment order line item to fulfill.
               * @exclusiveMinimum 0
               */
              quantity: number;
            }>;
          }>;
          /** Whether Shopify should notify the customer about the fulfillment. */
          notifyCustomer?: boolean;
          /** The full origin address used for fulfillment tax calculations. */
          originAddress?: {
            /**
             * The country code of the fulfillment location.
             * @minLength 1
             */
            countryCode: string;
            /** The first street address line. */
            address1?: string;
            /** The second street address line. */
            address2?: string;
            /** The city of the fulfillment location. */
            city?: string;
            /** The province or state code of the fulfillment location. */
            provinceCode?: string;
            /** The postal code of the fulfillment location. */
            zip?: string;
          };
          /** Tracking information for the fulfillment. */
          trackingInfo?: {
            /** The tracking company name, using Shopify's exact capitalization. */
            company?: string;
            /**
             * The single tracking number.
             * @minLength 1
             */
            number?: string;
            /**
             * One or more tracking numbers for a multi-package fulfillment.
             * @minItems 1
             */
            numbers?: Array<string>;
            /**
             * The URL for the single tracking number.
             * @format uri
             */
            url?: string;
            /**
             * Tracking URLs corresponding by position to the tracking numbers.
             * @minItems 1
             */
            urls?: Array<string>;
          };
        };
        /** An optional message for the fulfillment request. */
        message?: string;
      };
      output: {
        /** A normalized Shopify fulfillment. */
        fulfillment: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The merchant-facing fulfillment name. */
          name: string;
          /** The Shopify fulfillment status. */
          status: "CANCELLED" | "ERROR" | "FAILURE" | "SUCCESS" | "OPEN" | "PENDING";
          /** The total fulfilled line item quantity. */
          totalQuantity: number;
          /** The fulfillment creation timestamp. */
          createdAt: string;
          /** The fulfilled order ID. */
          orderId: string;
          /** The merchant-facing fulfilled order name. */
          orderName: string;
          /** Tracking information returned for the fulfillment. */
          trackingInfo: Array<{
            /** The tracking company when returned by Shopify. */
            company: string | null;
            /** The tracking number when returned by Shopify. */
            number: string | null;
            /**
             * The tracking URL when returned by Shopify.
             * @format uri
             */
            url: string | null;
            /** The raw object returned by Shopify Admin GraphQL. */
            raw: Record<string, unknown>;
          }>;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create one Shopify product with typed product attributes and optional media sources. */
    "shopify_admin.create_product": {
      input: {
        /** The typed Shopify ProductCreateInput fields supported by this action. */
        product: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          category?: string;
          /** Product feature ownership claimed by the connected Shopify app. */
          claimOwnership?: {
            /** Whether the app claims ownership of bundle configuration for this product. */
            bundles?: boolean;
          };
          /** Collection IDs to associate with the new product. */
          collectionsToJoin?: Array<string>;
          /** The product role in a combined listing. */
          combinedListingRole?: "CHILD" | "PARENT";
          /** The product description with HTML tags. */
          descriptionHtml?: string;
          /** Whether the product is a gift card. */
          giftCard?: boolean;
          /** The theme template suffix for a gift card product. */
          giftCardTemplateSuffix?: string;
          /**
           * The unique human-readable product URL handle.
           * @minLength 1
           */
          handle?: string;
          /** Metafields to associate with the product. */
          metafields?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string;
            /**
             * The metafield namespace.
             * @minLength 1
             */
            namespace?: string;
            /**
             * The metafield key.
             * @minLength 1
             */
            key?: string;
            /**
             * The Shopify metafield type.
             * @minLength 1
             */
            type?: string;
            /** The metafield value encoded as a string. */
            value?: string;
          }>;
          /**
           * Product options and values for the initial product variant.
           * @maxItems 3
           */
          productOptions?: Array<{
            /**
             * The product option name.
             * @minLength 1
             */
            name?: string;
            /** The product option position. */
            position?: number;
            /** A metafield definition linked to a product option. */
            linkedMetafield?: {
              /**
               * The namespace of the linked metafield definition.
               * @minLength 1
               */
              namespace: string;
              /**
               * The key of the linked metafield definition.
               * @minLength 1
               */
              key: string;
              /** The linked metafield values used to populate the product option. */
              values?: Array<string>;
            };
            /**
             * Values associated with this product option.
             * @minItems 1
             */
            values?: Array<{
              /**
               * The product option value name.
               * @minLength 1
               */
              name?: string;
              /** The metafield value linked to this option value. */
              linkedMetafieldValue?: string;
            }>;
          }>;
          /** The merchant-defined product type. */
          productType?: string;
          /** Whether the product can only be purchased with a selling plan. */
          requiresSellingPlan?: boolean;
          /** Search engine optimization fields for the product. */
          seo?: {
            /** The SEO title. */
            title?: string;
            /** The SEO description. */
            description?: string;
          };
          /** The Shopify product status. */
          status?: "ACTIVE" | "ARCHIVED" | "DRAFT" | "UNLISTED";
          /** Searchable product tags. */
          tags?: Array<string>;
          /** The theme template suffix for the product. */
          templateSuffix?: string;
          /** The product title displayed to customers. */
          title?: string;
          /** The product vendor name. */
          vendor?: string;
        };
        /** Media sources to add to the new product. */
        media?: Array<{
          /** The Shopify media content type. */
          mediaContentType: "EXTERNAL_VIDEO" | "IMAGE" | "MODEL_3D" | "VIDEO";
          /**
           * The external source URL or Shopify staged upload URL for the media.
           * @minLength 1
           */
          originalSource: string;
          /** Alternative text for the media. */
          alt?: string;
        }>;
      };
      output: {
        /** A normalized Shopify product detail. */
        product: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The product title. */
          title: string;
          /** The product handle when returned by Shopify. */
          handle: string | null;
          /** The product status when returned by Shopify. */
          status: string | null;
          /** The product vendor when returned by Shopify. */
          vendor: string | null;
          /** The product type when returned by Shopify. */
          productType: string | null;
          /** The product HTML description when returned by Shopify. */
          descriptionHtml: string | null;
          /** The product creation timestamp when returned by Shopify. */
          createdAt: string | null;
          /** The product update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /**
           * The online store product URL when returned by Shopify.
           * @format uri
           */
          onlineStoreUrl: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Download a completed or partial Shopify bulk JSONL result and upload it to connector transit storage. */
    "shopify_admin.download_bulk_result": {
      input: {
        /**
         * The expiring Shopify bulk operation URL or partialDataUrl.
         * @format uri
         */
        url: string;
        /**
         * An optional file name for the transit object.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /** A Shopify bulk JSONL result uploaded to connector transit storage. */
        file: {
          /** The file name used in transit storage. */
          name: string;
          /** The MIME type used in transit storage. */
          mimetype: string;
          /**
           * The transit URL for downloading the JSONL result.
           * @format uri
           */
          s3url: string;
        };
      };
    };
    /** Execute a JSON-friendly Shopify Admin GraphQL query or mutation against the connected shop. */
    "shopify_admin.execute_graphql": {
      input: {
        /**
         * The GraphQL document to execute.
         * @minLength 1
         */
        query: string;
        /** GraphQL variables keyed by variable name. */
        variables?: Record<string, unknown>;
      };
      output: {
        /** The raw object returned by Shopify Admin GraphQL. */
        data: Record<string, unknown>;
        /** The raw object returned by Shopify Admin GraphQL. */
        extensions?: Record<string, unknown>;
      };
    };
    /** Retrieve one Shopify bulk operation by ID for progress polling and result URL discovery. */
    "shopify_admin.get_bulk_operation": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Shopify bulk operation. */
        operation: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The Shopify bulk operation status. */
          status: "CANCELED" | "CANCELING" | "COMPLETED" | "CREATED" | "EXPIRED" | "FAILED" | "RUNNING";
          /** The Shopify bulk operation type. */
          type: "MUTATION" | "QUERY";
          /** The bulk operation creation timestamp. */
          createdAt: string;
          /** The successful completion timestamp when returned by Shopify. */
          completedAt: string | null;
          /** The Shopify bulk operation failure error code. */
          errorCode: "ACCESS_DENIED" | "INTERNAL_SERVER_ERROR" | "TIMEOUT" | null;
          /** The running object count encoded as an unsigned 64-bit integer string. */
          objectCount: string;
          /** The running root object count encoded as an unsigned 64-bit integer string. */
          rootObjectCount: string;
          /** The result file size in bytes encoded as an unsigned 64-bit integer string. */
          fileSize: string | null;
          /**
           * The completed JSONL result URL when returned by Shopify.
           * @format uri
           */
          url: string | null;
          /**
           * The partial JSONL result URL for a failed operation when returned by Shopify.
           * @format uri
           */
          partialDataUrl: string | null;
          /** The GraphQL query executed by the bulk operation. */
          query: string;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Retrieve one Shopify collection by GraphQL global ID. */
    "shopify_admin.get_collection": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Shopify collection detail. */
        collection: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The collection title. */
          title: string;
          /** The collection handle. */
          handle: string;
          /** The plain-text collection description. */
          description: string;
          /** The HTML collection description. */
          descriptionHtml: string;
          /** The collection update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /**
           * The collection image URL when returned by Shopify.
           * @format uri
           */
          imageUrl: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Retrieve one Shopify customer by GraphQL global ID. */
    "shopify_admin.get_customer": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Shopify customer detail. */
        customer: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The customer display name. */
          displayName: string;
          /** The customer first name when returned by Shopify. */
          firstName: string | null;
          /** The customer last name when returned by Shopify. */
          lastName: string | null;
          /** The customer email address when returned by Shopify. */
          email: string | null;
          /** The customer phone number when returned by Shopify. */
          phone: string | null;
          /** The customer account state when returned by Shopify. */
          state: string | null;
          /** Customer tags returned by Shopify. */
          tags: Array<string>;
          /** The customer's lifetime order count encoded as an unsigned 64-bit integer string. */
          numberOfOrders: string | null;
          /** The customer's lifetime amount spent when returned. */
          amountSpent: string | null;
          /** The currency code for the customer's lifetime amount spent when returned. */
          amountSpentCurrencyCode: string | null;
          /** The customer creation timestamp when returned by Shopify. */
          createdAt: string | null;
          /** The customer update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Retrieve one Shopify fulfillment order with independently paginated line items. */
    "shopify_admin.get_fulfillment_order": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
        /**
         * The first number of records to return.
         * @minimum 1
         * @maximum 250
         * @default 50
         */
        lineItemsFirst?: number;
        /**
         * A Shopify GraphQL pagination cursor.
         * @minLength 1
         */
        lineItemsAfter?: string;
      };
      output: {
        /** A normalized Shopify fulfillment order. */
        fulfillmentOrder: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          orderId: string;
          /** The merchant-facing order name. */
          orderName: string;
          /** The fulfillment order status. */
          status: string;
          /** The fulfillment request status. */
          requestStatus: string;
          /** The assigned Shopify location ID when returned by Shopify. */
          assignedLocationId: string | null;
          /** The assigned fulfillment location name. */
          assignedLocationName: string;
          /** Actions currently supported by the fulfillment order. */
          supportedActions: Array<{
            /** The Shopify fulfillment order action. */
            action: string;
            /**
             * The external URL for an EXTERNAL action when returned by Shopify.
             * @format uri
             */
            externalUrl: string | null;
          }>;
          /** Fulfillment order line items returned by Shopify. */
          lineItems: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id: string;
            /** The total quantity included in the fulfillment order. */
            totalQuantity: number;
            /** The quantity that remains to be fulfilled. */
            remainingQuantity: number;
            /** The inventory item ID associated with the line item when returned by Shopify. */
            inventoryItemId: string | null;
            /** The variant SKU when returned by Shopify. */
            sku: string | null;
            /** The product title. */
            productTitle: string;
            /** The variant title when returned by Shopify. */
            variantTitle: string | null;
            /** Whether the line item requires physical shipping. */
            requiresShipping: boolean;
            /** The raw object returned by Shopify Admin GraphQL. */
            raw: Record<string, unknown>;
          }>;
          /** Shopify GraphQL pagination metadata. */
          lineItemsPageInfo: {
            /** Whether another page exists after this page. */
            hasNextPage: boolean;
            /** Whether another page exists before this page. */
            hasPreviousPage: boolean;
            /**
             * A Shopify GraphQL pagination cursor.
             * @minLength 1
             */
            startCursor: string | null;
            /**
             * A Shopify GraphQL pagination cursor.
             * @minLength 1
             */
            endCursor: string | null;
          };
          /** The fulfillment order update timestamp. */
          updatedAt: string;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          cursor: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Retrieve one Shopify inventory item by GraphQL global ID. */
    "shopify_admin.get_inventory_item": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Shopify inventory item detail. */
        inventoryItem: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The inventory item SKU when returned by Shopify. */
          sku: string | null;
          /** Whether Shopify tracks inventory levels for this item. */
          tracked: boolean;
          /** Whether this inventory item requires shipping. */
          requiresShipping: boolean;
          /** The ISO country code of origin when returned by Shopify. */
          countryCodeOfOrigin: string | null;
          /** The harmonized system code when returned by Shopify. */
          harmonizedSystemCode: string | null;
          /** The inventory item creation timestamp when returned. */
          createdAt: string | null;
          /** The inventory item update timestamp when returned. */
          updatedAt: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Retrieve selected inventory quantity states for one Shopify inventory item at one location. */
    "shopify_admin.get_inventory_quantities": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        inventoryItemId: string;
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        locationId: string;
        /**
         * Inventory quantity state names to retrieve.
         * @minItems 1
         * @default ["available","on_hand"]
         */
        names?: Array<string>;
        /** Whether Shopify should return the inventory level when it is inactive. */
        includeInactive?: boolean;
      };
      output: {
        /** A normalized Shopify inventory level for one item at one location. */
        inventoryLevel: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** Whether the inventory level is active. */
          isActive: boolean;
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          inventoryItemId: string;
          /** The inventory item SKU when returned by Shopify. */
          inventoryItemSku: string | null;
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          locationId: string;
          /** The location name. */
          locationName: string;
          /** The requested inventory quantity states returned by Shopify. */
          quantities: Array<{
            /** The inventory quantity state name. */
            name: string;
            /** The quantity recorded for this state. */
            quantity: number;
          }>;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Retrieve one Shopify location by GraphQL global ID. */
    "shopify_admin.get_location": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Shopify location detail. */
        location: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The location name. */
          name: string;
          /** Whether the location is active. */
          isActive: boolean;
          /** Whether this location can fulfill online orders. */
          fulfillsOnlineOrders: boolean;
          /** The first address line when returned by Shopify. */
          address1: string | null;
          /** The location city when returned by Shopify. */
          city: string | null;
          /** The location province or state when returned by Shopify. */
          province: string | null;
          /** The location country when returned by Shopify. */
          country: string | null;
          /** The location postal code when returned by Shopify. */
          zip: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Retrieve one Shopify order by GraphQL global ID. */
    "shopify_admin.get_order": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Shopify order detail. */
        order: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The merchant-facing Shopify order name. */
          name: string;
          /** The order email address when returned by Shopify. */
          email: string | null;
          /** The order phone number when returned by Shopify. */
          phone: string | null;
          /** The display financial status returned by Shopify. */
          displayFinancialStatus: string | null;
          /** The display fulfillment status returned by Shopify. */
          displayFulfillmentStatus: string | null;
          /** The order currency code returned by Shopify. */
          currencyCode: string | null;
          /** The current order total amount in shop currency when returned. */
          totalAmount: string | null;
          /** The current order total currency code in shop currency when returned. */
          totalCurrencyCode: string | null;
          /** The customer ID associated with the order when returned. */
          customerId: string | null;
          /** The display name of the customer associated with the order when returned. */
          customerDisplayName: string | null;
          /** The order creation timestamp when returned by Shopify. */
          createdAt: string | null;
          /** The order update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Retrieve one Shopify product by GraphQL global ID. */
    "shopify_admin.get_product": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Shopify product detail. */
        product: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The product title. */
          title: string;
          /** The product handle when returned by Shopify. */
          handle: string | null;
          /** The product status when returned by Shopify. */
          status: string | null;
          /** The product vendor when returned by Shopify. */
          vendor: string | null;
          /** The product type when returned by Shopify. */
          productType: string | null;
          /** The product HTML description when returned by Shopify. */
          descriptionHtml: string | null;
          /** The product creation timestamp when returned by Shopify. */
          createdAt: string | null;
          /** The product update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /**
           * The online store product URL when returned by Shopify.
           * @format uri
           */
          onlineStoreUrl: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Retrieve basic shop information for the connected Shopify Admin token. */
    "shopify_admin.get_shop": {
      input: Record<string, never>;
      output: {
        /** A normalized Shopify shop. */
        shop: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The shop display name. */
          name: string;
          /** The canonical myshopify.com domain for the shop. */
          myshopifyDomain: string;
          /**
           * The shop primary domain URL when returned by Shopify.
           * @format uri
           */
          primaryDomainUrl: string | null;
          /** The shop primary domain host when returned by Shopify. */
          primaryDomainHost: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Shopify collections with optional search query and cursor pagination. */
    "shopify_admin.list_collections": {
      input: {
        /**
         * The first number of records to return.
         * @minimum 1
         * @maximum 250
         * @default 50
         */
        first?: number;
        /**
         * A Shopify GraphQL pagination cursor.
         * @minLength 1
         */
        after?: string;
        /**
         * A Shopify Admin API search query string.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Collections returned by Shopify. */
        collections: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The collection title. */
          title: string;
          /** The collection handle. */
          handle: string;
          /** The plain-text collection description. */
          description: string;
          /** The HTML collection description. */
          descriptionHtml: string;
          /** The collection update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /**
           * The collection image URL when returned by Shopify.
           * @format uri
           */
          imageUrl: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          cursor: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        }>;
        /** Shopify GraphQL pagination metadata. */
        pageInfo: {
          /** Whether another page exists after this page. */
          hasNextPage: boolean;
          /** Whether another page exists before this page. */
          hasPreviousPage: boolean;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          startCursor: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          endCursor: string | null;
        };
      };
    };
    /** List Shopify customers with optional search query and cursor pagination. */
    "shopify_admin.list_customers": {
      input: {
        /**
         * The first number of records to return.
         * @minimum 1
         * @maximum 250
         * @default 50
         */
        first?: number;
        /**
         * A Shopify GraphQL pagination cursor.
         * @minLength 1
         */
        after?: string;
        /**
         * A Shopify Admin API search query string.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Customers returned by Shopify. */
        customers: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The customer display name. */
          displayName: string;
          /** The customer first name when returned by Shopify. */
          firstName: string | null;
          /** The customer last name when returned by Shopify. */
          lastName: string | null;
          /** The customer email address when returned by Shopify. */
          email: string | null;
          /** The customer phone number when returned by Shopify. */
          phone: string | null;
          /** The customer account state when returned by Shopify. */
          state: string | null;
          /** Customer tags returned by Shopify. */
          tags: Array<string>;
          /** The customer's lifetime order count encoded as an unsigned 64-bit integer string. */
          numberOfOrders: string | null;
          /** The customer's lifetime amount spent when returned. */
          amountSpent: string | null;
          /** The currency code for the customer's lifetime amount spent when returned. */
          amountSpentCurrencyCode: string | null;
          /** The customer creation timestamp when returned by Shopify. */
          createdAt: string | null;
          /** The customer update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          cursor: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        }>;
        /** Shopify GraphQL pagination metadata. */
        pageInfo: {
          /** Whether another page exists after this page. */
          hasNextPage: boolean;
          /** Whether another page exists before this page. */
          hasPreviousPage: boolean;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          startCursor: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          endCursor: string | null;
        };
      };
    };
    /** List Shopify inventory items with optional search query and cursor pagination. */
    "shopify_admin.list_inventory_items": {
      input: {
        /**
         * The first number of records to return.
         * @minimum 1
         * @maximum 250
         * @default 50
         */
        first?: number;
        /**
         * A Shopify GraphQL pagination cursor.
         * @minLength 1
         */
        after?: string;
        /**
         * A Shopify Admin API search query string.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Inventory items returned by Shopify. */
        inventoryItems: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The inventory item SKU when returned by Shopify. */
          sku: string | null;
          /** Whether Shopify tracks inventory levels for this item. */
          tracked: boolean;
          /** Whether this inventory item requires shipping. */
          requiresShipping: boolean;
          /** The ISO country code of origin when returned by Shopify. */
          countryCodeOfOrigin: string | null;
          /** The harmonized system code when returned by Shopify. */
          harmonizedSystemCode: string | null;
          /** The inventory item creation timestamp when returned. */
          createdAt: string | null;
          /** The inventory item update timestamp when returned. */
          updatedAt: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          cursor: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        }>;
        /** Shopify GraphQL pagination metadata. */
        pageInfo: {
          /** Whether another page exists after this page. */
          hasNextPage: boolean;
          /** Whether another page exists before this page. */
          hasPreviousPage: boolean;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          startCursor: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          endCursor: string | null;
        };
      };
    };
    /** List Shopify inventory locations with optional filters and cursor pagination. */
    "shopify_admin.list_locations": {
      input: {
        /**
         * The first number of records to return.
         * @minimum 1
         * @maximum 250
         * @default 50
         */
        first?: number;
        /**
         * A Shopify GraphQL pagination cursor.
         * @minLength 1
         */
        after?: string;
        /**
         * A Shopify Admin API search query string.
         * @minLength 1
         */
        query?: string;
        /** Whether to include deactivated locations. */
        includeInactive?: boolean;
        /** Whether to include legacy fulfillment service locations. */
        includeLegacy?: boolean;
      };
      output: {
        /** Locations returned by Shopify. */
        locations: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The location name. */
          name: string;
          /** Whether the location is active. */
          isActive: boolean;
          /** Whether this location can fulfill online orders. */
          fulfillsOnlineOrders: boolean;
          /** The first address line when returned by Shopify. */
          address1: string | null;
          /** The location city when returned by Shopify. */
          city: string | null;
          /** The location province or state when returned by Shopify. */
          province: string | null;
          /** The location country when returned by Shopify. */
          country: string | null;
          /** The location postal code when returned by Shopify. */
          zip: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          cursor: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        }>;
        /** Shopify GraphQL pagination metadata. */
        pageInfo: {
          /** Whether another page exists after this page. */
          hasNextPage: boolean;
          /** Whether another page exists before this page. */
          hasPreviousPage: boolean;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          startCursor: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          endCursor: string | null;
        };
      };
    };
    /** List fulfillment orders and fulfillable line items for one Shopify order. */
    "shopify_admin.list_order_fulfillment_orders": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        orderId: string;
        /**
         * The first number of records to return.
         * @minimum 1
         * @maximum 250
         * @default 50
         */
        first?: number;
        /**
         * A Shopify GraphQL pagination cursor.
         * @minLength 1
         */
        after?: string;
        /** Whether to exclude fulfillment orders that Shopify normally hides from merchants. */
        displayable?: boolean;
      };
      output: {
        /** An order and its normalized fulfillment orders. */
        order: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The merchant-facing Shopify order name. */
          name: string;
          /** Fulfillment orders associated with the order. */
          fulfillmentOrders: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id: string;
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            orderId: string;
            /** The merchant-facing order name. */
            orderName: string;
            /** The fulfillment order status. */
            status: string;
            /** The fulfillment request status. */
            requestStatus: string;
            /** The assigned Shopify location ID when returned by Shopify. */
            assignedLocationId: string | null;
            /** The assigned fulfillment location name. */
            assignedLocationName: string;
            /** Actions currently supported by the fulfillment order. */
            supportedActions: Array<{
              /** The Shopify fulfillment order action. */
              action: string;
              /**
               * The external URL for an EXTERNAL action when returned by Shopify.
               * @format uri
               */
              externalUrl: string | null;
            }>;
            /** Fulfillment order line items returned by Shopify. */
            lineItems: Array<{
              /**
               * A Shopify GraphQL global ID.
               * @minLength 1
               */
              id: string;
              /** The total quantity included in the fulfillment order. */
              totalQuantity: number;
              /** The quantity that remains to be fulfilled. */
              remainingQuantity: number;
              /** The inventory item ID associated with the line item when returned by Shopify. */
              inventoryItemId: string | null;
              /** The variant SKU when returned by Shopify. */
              sku: string | null;
              /** The product title. */
              productTitle: string;
              /** The variant title when returned by Shopify. */
              variantTitle: string | null;
              /** Whether the line item requires physical shipping. */
              requiresShipping: boolean;
              /** The raw object returned by Shopify Admin GraphQL. */
              raw: Record<string, unknown>;
            }>;
            /** Shopify GraphQL pagination metadata. */
            lineItemsPageInfo: {
              /** Whether another page exists after this page. */
              hasNextPage: boolean;
              /** Whether another page exists before this page. */
              hasPreviousPage: boolean;
              /**
               * A Shopify GraphQL pagination cursor.
               * @minLength 1
               */
              startCursor: string | null;
              /**
               * A Shopify GraphQL pagination cursor.
               * @minLength 1
               */
              endCursor: string | null;
            };
            /** The fulfillment order update timestamp. */
            updatedAt: string;
            /**
             * A Shopify GraphQL pagination cursor.
             * @minLength 1
             */
            cursor: string | null;
            /** The raw object returned by Shopify Admin GraphQL. */
            raw: Record<string, unknown>;
          }>;
          /** Shopify GraphQL pagination metadata. */
          pageInfo: {
            /** Whether another page exists after this page. */
            hasNextPage: boolean;
            /** Whether another page exists before this page. */
            hasPreviousPage: boolean;
            /**
             * A Shopify GraphQL pagination cursor.
             * @minLength 1
             */
            startCursor: string | null;
            /**
             * A Shopify GraphQL pagination cursor.
             * @minLength 1
             */
            endCursor: string | null;
          };
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** List Shopify orders with optional search query and cursor pagination. */
    "shopify_admin.list_orders": {
      input: {
        /**
         * The first number of records to return.
         * @minimum 1
         * @maximum 250
         * @default 50
         */
        first?: number;
        /**
         * A Shopify GraphQL pagination cursor.
         * @minLength 1
         */
        after?: string;
        /**
         * A Shopify Admin API search query string.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Orders returned by Shopify. */
        orders: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The merchant-facing Shopify order name. */
          name: string;
          /** The order email address when returned by Shopify. */
          email: string | null;
          /** The order phone number when returned by Shopify. */
          phone: string | null;
          /** The display financial status returned by Shopify. */
          displayFinancialStatus: string | null;
          /** The display fulfillment status returned by Shopify. */
          displayFulfillmentStatus: string | null;
          /** The order currency code returned by Shopify. */
          currencyCode: string | null;
          /** The current order total amount in shop currency when returned. */
          totalAmount: string | null;
          /** The current order total currency code in shop currency when returned. */
          totalCurrencyCode: string | null;
          /** The customer ID associated with the order when returned. */
          customerId: string | null;
          /** The display name of the customer associated with the order when returned. */
          customerDisplayName: string | null;
          /** The order creation timestamp when returned by Shopify. */
          createdAt: string | null;
          /** The order update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          cursor: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        }>;
        /** Shopify GraphQL pagination metadata. */
        pageInfo: {
          /** Whether another page exists after this page. */
          hasNextPage: boolean;
          /** Whether another page exists before this page. */
          hasPreviousPage: boolean;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          startCursor: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          endCursor: string | null;
        };
      };
    };
    /** List Shopify product variants with optional search query and cursor pagination. */
    "shopify_admin.list_product_variants": {
      input: {
        /**
         * The first number of records to return.
         * @minimum 1
         * @maximum 250
         * @default 50
         */
        first?: number;
        /**
         * A Shopify GraphQL pagination cursor.
         * @minLength 1
         */
        after?: string;
        /**
         * A Shopify Admin API search query string.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Product variants returned by Shopify. */
        variants: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The variant title. */
          title: string;
          /** The variant SKU when returned by Shopify. */
          sku: string | null;
          /** The variant price as a decimal string when returned by Shopify. */
          price: string | null;
          /** The tracked inventory quantity when returned by Shopify. */
          inventoryQuantity: number | null;
          /** The inventory item ID associated with the variant when returned by Shopify. */
          inventoryItemId: string | null;
          /** The parent product ID when returned by Shopify. */
          productId: string | null;
          /** The parent product title when returned by Shopify. */
          productTitle: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          cursor: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        }>;
        /** Shopify GraphQL pagination metadata. */
        pageInfo: {
          /** Whether another page exists after this page. */
          hasNextPage: boolean;
          /** Whether another page exists before this page. */
          hasPreviousPage: boolean;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          startCursor: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          endCursor: string | null;
        };
      };
    };
    /** List Shopify products with optional search query and cursor pagination. */
    "shopify_admin.list_products": {
      input: {
        /**
         * The first number of records to return.
         * @minimum 1
         * @maximum 250
         * @default 50
         */
        first?: number;
        /**
         * A Shopify GraphQL pagination cursor.
         * @minLength 1
         */
        after?: string;
        /**
         * A Shopify Admin API search query string.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Products returned by Shopify. */
        products: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The product title. */
          title: string;
          /** The product handle when returned by Shopify. */
          handle: string | null;
          /** The product status when returned by Shopify. */
          status: string | null;
          /** The product vendor when returned by Shopify. */
          vendor: string | null;
          /** The product type when returned by Shopify. */
          productType: string | null;
          /** The product creation timestamp when returned by Shopify. */
          createdAt: string | null;
          /** The product update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /**
           * The online store product URL when returned by Shopify.
           * @format uri
           */
          onlineStoreUrl: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          cursor: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        }>;
        /** Shopify GraphQL pagination metadata. */
        pageInfo: {
          /** Whether another page exists after this page. */
          hasNextPage: boolean;
          /** Whether another page exists before this page. */
          hasPreviousPage: boolean;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          startCursor: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          endCursor: string | null;
        };
      };
    };
    /** Set absolute Shopify inventory quantities with required idempotency and explicit compare-and-swap values. */
    "shopify_admin.set_inventory_quantities": {
      input: {
        /**
         * A caller-stable idempotency key reused when retrying the same inventory write.
         * @minLength 1
         */
        idempotencyKey: string;
        /** The inventory quantity state to set. */
        name: "available" | "on_hand";
        /** The Shopify reason for changing inventory quantities. */
        reason: "correction" | "cycle_count_available" | "damaged" | "movement_created" | "movement_updated" | "movement_received" | "movement_canceled" | "other" | "promotion" | "quality_control" | "received" | "reservation_created" | "reservation_deleted" | "reservation_updated" | "restock" | "safety_stock" | "shrinkage";
        /**
         * A URI identifying the source document or system event for the inventory audit trail.
         * @minLength 1
         */
        referenceDocumentUri?: string;
        /**
         * Absolute inventory quantities to set.
         * @minItems 1
         */
        quantities: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          inventoryItemId: string;
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          locationId: string;
          /** The absolute quantity to set. */
          quantity: number;
          /** The expected current quantity for compare-and-swap, or null to explicitly skip the check. */
          changeFromQuantity: number | null;
        }>;
      };
      output: {
        /** A normalized Shopify inventory adjustment group. */
        inventoryAdjustmentGroup: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The timestamp when Shopify created the adjustment group. */
          createdAt: string;
          /** The reason for the inventory changes. */
          reason: string;
          /** The audit trail reference URI when returned by Shopify. */
          referenceDocumentUri: string | null;
          /** Inventory changes made by the operation. */
          changes: Array<{
            /** The inventory quantity state that changed. */
            name: string;
            /** The amount by which the inventory quantity changed. */
            delta: number;
            /** The resulting quantity after the change when returned by Shopify. */
            quantityAfterChange: number | null;
            /** The raw object returned by Shopify Admin GraphQL. */
            raw: Record<string, unknown>;
          }>;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Submit a Shopify Admin GraphQL bulk query and return an operation ID for asynchronous polling. */
    "shopify_admin.submit_bulk_query": {
      input: {
        /**
         * The bulk GraphQL query document containing at least one supported connection.
         * @minLength 1
         */
        query: string;
        /**
         * Whether Shopify should group child objects under parents in JSONL; grouping is slower.
         * @default false
         */
        groupObjects?: boolean;
      };
      output: {
        /** A normalized Shopify bulk operation. */
        operation: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The Shopify bulk operation status. */
          status: "CANCELED" | "CANCELING" | "COMPLETED" | "CREATED" | "EXPIRED" | "FAILED" | "RUNNING";
          /** The Shopify bulk operation type. */
          type: "MUTATION" | "QUERY";
          /** The bulk operation creation timestamp. */
          createdAt: string;
          /** The successful completion timestamp when returned by Shopify. */
          completedAt: string | null;
          /** The Shopify bulk operation failure error code. */
          errorCode: "ACCESS_DENIED" | "INTERNAL_SERVER_ERROR" | "TIMEOUT" | null;
          /** The running object count encoded as an unsigned 64-bit integer string. */
          objectCount: string;
          /** The running root object count encoded as an unsigned 64-bit integer string. */
          rootObjectCount: string;
          /** The result file size in bytes encoded as an unsigned 64-bit integer string. */
          fileSize: string | null;
          /**
           * The completed JSONL result URL when returned by Shopify.
           * @format uri
           */
          url: string | null;
          /**
           * The partial JSONL result URL for a failed operation when returned by Shopify.
           * @format uri
           */
          partialDataUrl: string | null;
          /** The GraphQL query executed by the bulk operation. */
          query: string;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Update one Shopify product by GraphQL global ID with typed attributes and optional new media. */
    "shopify_admin.update_product": {
      input: {
        /** The typed Shopify ProductUpdateInput fields supported by this action. */
        product: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          category?: string;
          /** Collection IDs to associate with the product. */
          collectionsToJoin?: Array<string>;
          /** Collection IDs to disassociate from the product. */
          collectionsToLeave?: Array<string>;
          /** Whether to delete metafields whose constraints conflict with the updated category. */
          deleteConflictingConstrainedMetafields?: boolean;
          /** The product description with HTML tags. */
          descriptionHtml?: string;
          /** The theme template suffix for a gift card product. */
          giftCardTemplateSuffix?: string;
          /**
           * The unique human-readable product URL handle.
           * @minLength 1
           */
          handle?: string;
          /** Metafields to create or update on the product. */
          metafields?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string;
            /**
             * The metafield namespace.
             * @minLength 1
             */
            namespace?: string;
            /**
             * The metafield key.
             * @minLength 1
             */
            key?: string;
            /**
             * The Shopify metafield type.
             * @minLength 1
             */
            type?: string;
            /** The metafield value encoded as a string. */
            value?: string;
          }>;
          /** The merchant-defined product type. */
          productType?: string;
          /** Whether Shopify should redirect the previous handle to the new handle. */
          redirectNewHandle?: boolean;
          /** Whether the product can only be purchased with a selling plan. */
          requiresSellingPlan?: boolean;
          /** Search engine optimization fields for the product. */
          seo?: {
            /** The SEO title. */
            title?: string;
            /** The SEO description. */
            description?: string;
          };
          /** The Shopify product status. */
          status?: "ACTIVE" | "ARCHIVED" | "DRAFT" | "UNLISTED";
          /** The complete replacement list of searchable product tags. */
          tags?: Array<string>;
          /** The theme template suffix for the product. */
          templateSuffix?: string;
          /** The product title displayed to customers. */
          title?: string;
          /** The product vendor name. */
          vendor?: string;
        };
        /** New media sources to add to the product. */
        media?: Array<{
          /** The Shopify media content type. */
          mediaContentType: "EXTERNAL_VIDEO" | "IMAGE" | "MODEL_3D" | "VIDEO";
          /**
           * The external source URL or Shopify staged upload URL for the media.
           * @minLength 1
           */
          originalSource: string;
          /** Alternative text for the media. */
          alt?: string;
        }>;
      };
      output: {
        /** A normalized Shopify product detail. */
        product: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The product title. */
          title: string;
          /** The product handle when returned by Shopify. */
          handle: string | null;
          /** The product status when returned by Shopify. */
          status: string | null;
          /** The product vendor when returned by Shopify. */
          vendor: string | null;
          /** The product type when returned by Shopify. */
          productType: string | null;
          /** The product HTML description when returned by Shopify. */
          descriptionHtml: string | null;
          /** The product creation timestamp when returned by Shopify. */
          createdAt: string | null;
          /** The product update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /**
           * The online store product URL when returned by Shopify.
           * @format uri
           */
          onlineStoreUrl: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
