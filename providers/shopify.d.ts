import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add products to a manual collection. Requires write_products. */
    "shopify.add_collection_products": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
        /** Shopify GraphQL global IDs. */
        productIds: Array<string>;
      };
      output: {
        /** The Shopify resource returned by the operation. */
        collection?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Add tags to a supported resource. Requires the write scope for that resource. */
    "shopify.add_tags": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
        /** Text values to send to Shopify. */
        tags: Array<string>;
      };
      output: {
        /** The Shopify resource returned by the operation. */
        node?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Apply incremental Shopify inventory quantity changes with required idempotency and explicit compare-and-swap values. */
    "shopify.adjust_inventory_quantities": {
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
    /** Request cancellation of a bulk operation; poll its status until cancellation completes. */
    "shopify.cancel_bulk_operation": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Shopify resource returned by the operation. */
        bulkOperation?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Cancel an order, optionally refunding payments, restocking, and notifying the customer. Requires write_orders and order cancellation permission. */
    "shopify.cancel_order": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        orderId: string;
        /** Whether to enable this option. */
        restock: boolean;
        /** The cancellation reason. */
        reason: "CUSTOMER" | "DECLINED" | "FRAUD" | "INVENTORY" | "OTHER" | "STAFF";
        /** Whether to enable this option. */
        refund?: boolean;
        /** Shopify OrderCancelRefundMethodInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/OrderCancelRefundMethodInput. */
        refundMethod?: Record<string, unknown>;
        /** Whether to enable this option. */
        notifyCustomer?: boolean;
        /** The text value to send to Shopify. */
        staffNote?: string | null;
      };
      output: {
        /** The asynchronous order cancellation result. */
        jobResult?: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** Whether the cancellation job has finished; inspect status to determine success. */
          done: boolean;
          /** The order cancellation status. */
          status: "STARTED" | "SUCCEEDED" | "FAILED";
          /** Shopify business validation errors. */
          errors: Array<{
            /** Text values to send to Shopify. */
            field?: Array<string> | null;
            /** The text value to send to Shopify. */
            message: string;
            /** The text value to send to Shopify. */
            code?: string | null;
            [key: string]: unknown;
          }>;
          /** The Shopify resource returned by the operation. */
          order: Record<string, unknown> | null;
          [key: string]: unknown;
        } | null;
        /** Shopify business validation errors. */
        orderCancelUserErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Archive an order. Requires write_orders. */
    "shopify.close_order": {
      input: {
        /** The resource to operate on. */
        input: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
        };
      };
      output: {
        /** The Shopify resource returned by the operation. */
        order?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Complete a draft order, creating an order and recording the selected payment state. Requires write_draft_orders. */
    "shopify.complete_draft_order": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
        /** Whether to enable this option. */
        paymentPending?: boolean;
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        paymentGatewayId?: string;
        /** The text value to send to Shopify. */
        sourceName?: string;
      };
      output: {
        /** The Shopify resource returned by the operation. */
        draftOrder?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Count Shopify REST articles in a blog with optional filters. */
    "shopify.count_articles": {
      input: {
        /**
         * The Shopify blog ID.
         * @minimum 1
         */
        blog_id: number;
        /** The Shopify publication status filter. */
        published_status?: "published" | "unpublished" | "any";
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        created_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        created_at_max?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        updated_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        updated_at_max?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        published_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        published_at_max?: string;
      };
      output: {
        /**
         * The count returned by Shopify REST Admin.
         * @minimum 0
         */
        count: number;
      };
    };
    /** Count Shopify REST blogs in the connected shop. */
    "shopify.count_blogs": {
      input: Record<string, never>;
      output: {
        /**
         * The count returned by Shopify REST Admin.
         * @minimum 0
         */
        count: number;
      };
    };
    /** Count Shopify REST pages with optional filters. */
    "shopify.count_pages": {
      input: {
        /**
         * Count pages with this exact Shopify page title.
         * @minLength 1
         */
        title?: string;
        /** The Shopify publication status filter. */
        published_status?: "published" | "unpublished" | "any";
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        created_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        created_at_max?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        updated_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        updated_at_max?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        published_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        published_at_max?: string;
      };
      output: {
        /**
         * The count returned by Shopify REST Admin.
         * @minimum 0
         */
        count: number;
      };
    };
    /** Create a blog article. Requires write_content or write_online_store_pages. */
    "shopify.create_article": {
      input: {
        /** Shopify ArticleCreateInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/ArticleCreateInput. */
        article: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          blogId?: string | null;
          /** The text value to send to Shopify. */
          title: string | null;
          /** The text value to send to Shopify. */
          handle?: string | null;
          /** The text value to send to Shopify. */
          body?: string | null;
          /** The text value to send to Shopify. */
          summary?: string | null;
          /** Text values to send to Shopify. */
          tags?: Array<string> | null;
          /** Shopify AuthorInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/AuthorInput. */
          author: {
            /** The text value to send to Shopify. */
            name: string;
            [key: string]: unknown;
          } | null;
          /** Whether to enable this option. */
          isPublished?: boolean | null;
          /** The text value to send to Shopify. */
          publishDate?: string | null;
          /**
           * Entries accepted by Shopify MetafieldInput.
           * @maxItems 250
           */
          metafields?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            namespace?: string | null;
            /** The text value to send to Shopify. */
            key?: string | null;
            /** The text value to send to Shopify. */
            type?: string | null;
            /** The text value to send to Shopify. */
            value?: string | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
        /** Shopify ArticleBlogInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/ArticleBlogInput. */
        blog?: {
          /** The text value to send to Shopify. */
          title?: string | null;
          [key: string]: unknown;
        };
      };
      output: {
        /** The Shopify resource returned by the operation. */
        article?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create a blog. Requires write_content or write_online_store_pages. */
    "shopify.create_blog": {
      input: {
        /** Shopify BlogCreateInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/BlogCreateInput. */
        blog: {
          /** The text value to send to Shopify. */
          title: string | null;
          /** The text value to send to Shopify. */
          handle?: string | null;
          /** The text value to send to Shopify. */
          commentPolicy?: string | null;
          /** The text value to send to Shopify. */
          templateSuffix?: string | null;
          /**
           * Entries accepted by Shopify MetafieldInput.
           * @maxItems 250
           */
          metafields?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            namespace?: string | null;
            /** The text value to send to Shopify. */
            key?: string | null;
            /** The text value to send to Shopify. */
            type?: string | null;
            /** The text value to send to Shopify. */
            value?: string | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
      };
      output: {
        /** The Shopify resource returned by the operation. */
        blog?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create a manual or automated collection. Supply collection or the legacy input argument. Requires write_products; unavailable on Starter and Retail plans. */
    "shopify.create_collection": {
      input: {
        /** Shopify CollectionCreateInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/CollectionCreateInput. */
        collection?: {
          /** The text value to send to Shopify. */
          title: string;
          /** The text value to send to Shopify. */
          handle?: string | null;
          /** The text value to send to Shopify. */
          descriptionHtml?: string | null;
          /** The text value to send to Shopify. */
          templateSuffix?: string | null;
          /** The text value to send to Shopify. */
          sortOrder?: string | null;
          /** Shopify ImageInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/ImageInput. */
          image?: {
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            src?: string | null;
            /** The text value to send to Shopify. */
            altText?: string | null;
            [key: string]: unknown;
          } | null;
          /**
           * Entries accepted by Shopify MetafieldInput.
           * @maxItems 250
           */
          metafields?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            namespace?: string | null;
            /** The text value to send to Shopify. */
            key?: string | null;
            /** The text value to send to Shopify. */
            type?: string | null;
            /** The text value to send to Shopify. */
            value?: string | null;
            [key: string]: unknown;
          }> | null;
          /**
           * Entries accepted by Shopify CollectionCreateSourceTargetInput.
           * @maxItems 250
           */
          sources?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        };
        /** Shopify CollectionInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/CollectionInput. */
        input?: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id?: string | null;
          /** The text value to send to Shopify. */
          title?: string | null;
          /** The text value to send to Shopify. */
          handle?: string | null;
          /** The text value to send to Shopify. */
          descriptionHtml?: string | null;
          /** Shopify GraphQL global IDs. */
          products?: Array<string> | null;
          /** Shopify CollectionRuleSetInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/CollectionRuleSetInput. */
          ruleSet?: {
            /** Whether to enable this option. */
            appliedDisjunctively: boolean;
            /**
             * Entries accepted by Shopify CollectionRuleInput.
             * @maxItems 250
             */
            rules: Array<{
              /** The text value to send to Shopify. */
              column: string;
              /** The text value to send to Shopify. */
              relation: string;
              /** The text value to send to Shopify. */
              condition: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          } | null;
          /** Shopify ImageInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/ImageInput. */
          image?: {
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            src?: string | null;
            /** The text value to send to Shopify. */
            altText?: string | null;
            [key: string]: unknown;
          } | null;
          /**
           * Entries accepted by Shopify MetafieldInput.
           * @maxItems 250
           */
          metafields?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            namespace?: string | null;
            /** The text value to send to Shopify. */
            key?: string | null;
            /** The text value to send to Shopify. */
            type?: string | null;
            /** The text value to send to Shopify. */
            value?: string | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
      };
      output: {
        /** The Shopify resource returned by the operation. */
        collection?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create a customer with contact details and addresses. Requires write_customers and applicable protected customer data access. */
    "shopify.create_customer": {
      input: {
        /** Shopify CustomerInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/CustomerInput. */
        input: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id?: string | null;
          /** The text value to send to Shopify. */
          firstName?: string | null;
          /** The text value to send to Shopify. */
          lastName?: string | null;
          /** The text value to send to Shopify. */
          email?: string | null;
          /** The text value to send to Shopify. */
          phone?: string | null;
          /** The text value to send to Shopify. */
          note?: string | null;
          /** Text values to send to Shopify. */
          tags?: Array<string> | null;
          /** Whether to enable this option. */
          taxExempt?: boolean | null;
          /** Customer mailing addresses. */
          addresses?: Array<{
            /** The text value to send to Shopify. */
            firstName?: string | null;
            /** The text value to send to Shopify. */
            lastName?: string | null;
            /** The text value to send to Shopify. */
            company?: string | null;
            /** The text value to send to Shopify. */
            address1?: string | null;
            /** The text value to send to Shopify. */
            address2?: string | null;
            /** The text value to send to Shopify. */
            city?: string | null;
            /** The text value to send to Shopify. */
            country?: string | null;
            /** The text value to send to Shopify. */
            province?: string | null;
            /** The text value to send to Shopify. */
            zip?: string | null;
            /** The text value to send to Shopify. */
            phone?: string | null;
            [key: string]: unknown;
          }> | null;
          /**
           * Entries accepted by Shopify MetafieldInput.
           * @maxItems 250
           */
          metafields?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            namespace?: string | null;
            /** The text value to send to Shopify. */
            key?: string | null;
            /** The text value to send to Shopify. */
            type?: string | null;
            /** The text value to send to Shopify. */
            value?: string | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
      };
      output: {
        /** The Shopify resource returned by the operation. */
        customer?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Add a customer address. Requires write_customers. */
    "shopify.create_customer_address": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        customerId: string;
        /** Shopify MailingAddressInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/MailingAddressInput. */
        address: {
          /** The text value to send to Shopify. */
          firstName?: string | null;
          /** The text value to send to Shopify. */
          lastName?: string | null;
          /** The text value to send to Shopify. */
          company?: string | null;
          /** The text value to send to Shopify. */
          address1?: string | null;
          /** The text value to send to Shopify. */
          address2?: string | null;
          /** The text value to send to Shopify. */
          city?: string | null;
          /** The text value to send to Shopify. */
          country?: string | null;
          /** The text value to send to Shopify. */
          province?: string | null;
          /** The text value to send to Shopify. */
          zip?: string | null;
          /** The text value to send to Shopify. */
          phone?: string | null;
          [key: string]: unknown;
        };
        /** Whether to enable this option. */
        setAsDefault?: boolean;
      };
      output: {
        /** The Shopify resource returned by the operation. */
        address?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create a draft order with line items, customer details, discounts, and shipping. Requires write_draft_orders. */
    "shopify.create_draft_order": {
      input: {
        /** Shopify DraftOrderInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/DraftOrderInput. */
        input: {
          /** The text value to send to Shopify. */
          email?: string | null;
          /** The text value to send to Shopify. */
          phone?: string | null;
          /** The text value to send to Shopify. */
          note?: string | null;
          /** Text values to send to Shopify. */
          tags?: Array<string> | null;
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          customerId?: string | null;
          /** Shopify MailingAddressInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/MailingAddressInput. */
          shippingAddress?: {
            /** The text value to send to Shopify. */
            firstName?: string | null;
            /** The text value to send to Shopify. */
            lastName?: string | null;
            /** The text value to send to Shopify. */
            company?: string | null;
            /** The text value to send to Shopify. */
            address1?: string | null;
            /** The text value to send to Shopify. */
            address2?: string | null;
            /** The text value to send to Shopify. */
            city?: string | null;
            /** The text value to send to Shopify. */
            country?: string | null;
            /** The text value to send to Shopify. */
            province?: string | null;
            /** The text value to send to Shopify. */
            zip?: string | null;
            /** The text value to send to Shopify. */
            phone?: string | null;
            [key: string]: unknown;
          } | null;
          /** Shopify MailingAddressInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/MailingAddressInput. */
          billingAddress?: {
            /** The text value to send to Shopify. */
            firstName?: string | null;
            /** The text value to send to Shopify. */
            lastName?: string | null;
            /** The text value to send to Shopify. */
            company?: string | null;
            /** The text value to send to Shopify. */
            address1?: string | null;
            /** The text value to send to Shopify. */
            address2?: string | null;
            /** The text value to send to Shopify. */
            city?: string | null;
            /** The text value to send to Shopify. */
            country?: string | null;
            /** The text value to send to Shopify. */
            province?: string | null;
            /** The text value to send to Shopify. */
            zip?: string | null;
            /** The text value to send to Shopify. */
            phone?: string | null;
            [key: string]: unknown;
          } | null;
          /**
           * Entries accepted by Shopify DraftOrderLineItemInput.
           * @maxItems 250
           */
          lineItems?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            variantId?: string | null;
            /** The text value to send to Shopify. */
            title?: string | null;
            /**
             * The line item quantity.
             * @minimum 1
             */
            quantity: number;
            /** A decimal monetary amount in the applicable currency. */
            originalUnitPrice?: string | null;
            /**
             * Entries accepted by Shopify AttributeInput.
             * @maxItems 250
             */
            customAttributes?: Array<{
              /** The text value to send to Shopify. */
              key: string;
              /** The text value to send to Shopify. */
              value: string;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          }> | null;
          /** A Shopify checkout session token. This value is sensitive. */
          sessionToken?: string | null;
          /** Whether to enable this option. */
          taxExempt?: boolean | null;
          /** Whether to enable this option. */
          useCustomerDefaultAddress?: boolean | null;
          /**
           * Entries accepted by Shopify MetafieldInput.
           * @maxItems 250
           */
          metafields?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            namespace?: string | null;
            /** The text value to send to Shopify. */
            key?: string | null;
            /** The text value to send to Shopify. */
            type?: string | null;
            /** The text value to send to Shopify. */
            value?: string | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
      };
      output: {
        /** The Shopify resource returned by the operation. */
        draftOrder?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create files from externally hosted URLs. Poll each returned file ID for processing completion. Requires write_files. */
    "shopify.create_files": {
      input: {
        /**
         * Entries accepted by Shopify FileCreateInput.
         * @maxItems 250
         */
        files: Array<{
          /** The text value to send to Shopify. */
          originalSource: string;
          /** The text value to send to Shopify. */
          alt?: string | null;
          /** The text value to send to Shopify. */
          contentType?: string | null;
          /** The text value to send to Shopify. */
          filename?: string | null;
          /** The text value to send to Shopify. */
          duplicateResolutionMode?: string | null;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** Created files and their processing states. */
        files?: Array<Record<string, unknown>>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create a Shopify fulfillment for one or more fulfillment orders with optional tracking and customer notification. */
    "shopify.create_fulfillment": {
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
    /** Create a metaobject for an existing definition. Requires write_metaobjects. */
    "shopify.create_metaobject": {
      input: {
        /** Shopify MetaobjectCreateInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/MetaobjectCreateInput. */
        metaobject: {
          /** The text value to send to Shopify. */
          type: string | null;
          /** The text value to send to Shopify. */
          handle?: string | null;
          /**
           * Entries accepted by Shopify MetaobjectFieldInput.
           * @maxItems 250
           */
          fields?: Array<{
            /** The text value to send to Shopify. */
            key: string;
            /** The text value to send to Shopify. */
            value: string;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
      };
      output: {
        /** The Shopify resource returned by the operation. */
        metaobject?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create an online store page. Requires write_content or write_online_store_pages. */
    "shopify.create_page": {
      input: {
        /** Shopify PageCreateInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/PageCreateInput. */
        page: {
          /** The text value to send to Shopify. */
          title: string | null;
          /** The text value to send to Shopify. */
          handle?: string | null;
          /** The text value to send to Shopify. */
          body?: string | null;
          /** Whether to enable this option. */
          isPublished?: boolean | null;
          /** The text value to send to Shopify. */
          publishDate?: string | null;
          /** The text value to send to Shopify. */
          templateSuffix?: string | null;
          /**
           * Entries accepted by Shopify MetafieldInput.
           * @maxItems 250
           */
          metafields?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            namespace?: string | null;
            /** The text value to send to Shopify. */
            key?: string | null;
            /** The text value to send to Shopify. */
            type?: string | null;
            /** The text value to send to Shopify. */
            value?: string | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
      };
      output: {
        /** The Shopify resource returned by the operation. */
        page?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create one Shopify product with typed product attributes and optional media sources. */
    "shopify.create_product": {
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
    /** Create product variants with option values, inventory, prices, and media. Requires write_products. */
    "shopify.create_product_variants": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        productId: string;
        /**
         * Entries accepted by Shopify ProductVariantsBulkInput.
         * @maxItems 250
         */
        variants: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id?: string | null;
          /** A decimal monetary amount in the applicable currency. */
          price?: string | null;
          /** A decimal monetary amount in the applicable currency. */
          compareAtPrice?: string | null;
          /** The text value to send to Shopify. */
          barcode?: string | null;
          /** Whether to enable this option. */
          taxable?: boolean | null;
          /** How to handle sales when inventory is exhausted. */
          inventoryPolicy?: "DENY" | "CONTINUE" | null;
          /** Shopify InventoryItemInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/InventoryItemInput. */
          inventoryItem?: {
            /** The text value to send to Shopify. */
            sku?: string | null;
            /** Whether to enable this option. */
            tracked?: boolean | null;
            /** A decimal monetary amount in the applicable currency. */
            cost?: string | null;
            [key: string]: unknown;
          } | null;
          /**
           * Entries accepted by Shopify VariantOptionValueInput.
           * @maxItems 250
           */
          optionValues?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            name?: string | null;
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            optionId?: string | null;
            /** The text value to send to Shopify. */
            optionName?: string | null;
            [key: string]: unknown;
          }> | null;
          /**
           * Entries accepted by Shopify InventoryLevelInput.
           * @maxItems 250
           */
          inventoryQuantities?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            locationId: string;
            /** Available inventory quantity. */
            availableQuantity: number;
            [key: string]: unknown;
          }> | null;
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          mediaId?: string | null;
          /** Text values to send to Shopify. */
          mediaSrc?: Array<string> | null;
          /**
           * Entries accepted by Shopify MetafieldInput.
           * @maxItems 250
           */
          metafields?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            namespace?: string | null;
            /** The text value to send to Shopify. */
            key?: string | null;
            /** The text value to send to Shopify. */
            type?: string | null;
            /** The text value to send to Shopify. */
            value?: string | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
        /**
         * Entries accepted by Shopify CreateMediaInput.
         * @maxItems 250
         */
        media?: Array<{
          /** The text value to send to Shopify. */
          originalSource: string;
          /** The text value to send to Shopify. */
          mediaContentType: string;
          /** The text value to send to Shopify. */
          alt?: string | null;
          [key: string]: unknown;
        }>;
        /** How to handle the standalone variant. */
        strategy?: "DEFAULT" | "PRESERVE_STANDALONE_VARIANT" | "REMOVE_STANDALONE_VARIANT";
      };
      output: {
        /** Created product variants. */
        productVariants?: Array<Record<string, unknown>>;
        /** The Shopify resource returned by the operation. */
        product?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Refund order line items, shipping, and transactions. Reuse the same idempotencyKey when retrying the same refund. Requires write_orders. */
    "shopify.create_refund": {
      input: {
        /**
         * A stable, unique key for this refund, reused on retries.
         * @minLength 1
         */
        idempotencyKey: string;
        /** Shopify RefundInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/RefundInput. */
        input: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          orderId: string;
          /** The text value to send to Shopify. */
          note?: string | null;
          /** Whether to enable this option. */
          notify?: boolean | null;
          /** The text value to send to Shopify. */
          currency?: string | null;
          /**
           * Entries accepted by Shopify RefundLineItemInput.
           * @maxItems 250
           */
          refundLineItems?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            lineItemId: string;
            /** The quantity to refund. */
            quantity: number;
            /** The text value to send to Shopify. */
            restockType?: string | null;
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            locationId?: string | null;
            [key: string]: unknown;
          }> | null;
          /**
           * Entries accepted by Shopify OrderTransactionInput.
           * @maxItems 250
           */
          transactions?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            orderId?: string | null;
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            parentId?: string | null;
            /** A decimal monetary amount in the applicable currency. */
            amount?: string | null;
            /** The text value to send to Shopify. */
            kind?: string | null;
            /** The text value to send to Shopify. */
            gateway?: string | null;
            [key: string]: unknown;
          }> | null;
          /** Shopify ShippingRefundInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/ShippingRefundInput. */
          shipping?: {
            /** A decimal monetary amount in the applicable currency. */
            amount?: string | null;
            /** Whether to enable this option. */
            fullRefund?: boolean | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        };
      };
      output: {
        /** The Shopify resource returned by the operation. */
        refund?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Delete a blog article. Requires write_content or write_online_store_pages. */
    "shopify.delete_article": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        deletedArticleId?: string | null;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Delete a blog and its articles. Requires write_content or write_online_store_pages. */
    "shopify.delete_blog": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        deletedBlogId?: string | null;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Delete a collection without deleting its products. Requires write_products. */
    "shopify.delete_collection": {
      input: {
        /** The resource to operate on. */
        input: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
        };
      };
      output: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        deletedCollectionId?: string | null;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Delete a customer when Shopify's business rules permit it. Requires write_customers. */
    "shopify.delete_customer": {
      input: {
        /** The resource to operate on. */
        input: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
        };
      };
      output: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        deletedCustomerId?: string | null;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Delete a customer address. Requires write_customers. */
    "shopify.delete_customer_address": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        customerId: string;
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        addressId: string;
      };
      output: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        deletedAddressId?: string | null;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Delete a draft order. Requires write_draft_orders. */
    "shopify.delete_draft_order": {
      input: {
        /** The resource to operate on. */
        input: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
        };
      };
      output: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        deletedId?: string | null;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Delete files from the shop. Requires write_files. */
    "shopify.delete_files": {
      input: {
        /** Shopify GraphQL global IDs. */
        fileIds: Array<string>;
      };
      output: {
        /** Shopify GraphQL global IDs. */
        deletedFileIds?: Array<string>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Delete metafields identified by owner, namespace, and key. Requires write access to their owners. */
    "shopify.delete_metafields": {
      input: {
        /**
         * Entries accepted by Shopify MetafieldIdentifierInput.
         * @maxItems 250
         */
        metafields: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          ownerId: string;
          /** The text value to send to Shopify. */
          namespace: string;
          /** The text value to send to Shopify. */
          key: string;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** Deleted metafield identifiers. */
        deletedMetafields?: Array<Record<string, unknown>>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Delete a metaobject. Requires write_metaobjects. */
    "shopify.delete_metaobject": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        deletedId?: string | null;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Delete an online store page. Requires write_content or write_online_store_pages. */
    "shopify.delete_page": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        deletedPageId?: string | null;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Delete a product. Requires write_products and product deletion permission. */
    "shopify.delete_product": {
      input: {
        /** The resource to operate on. */
        input: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
        };
        /** Whether to enable this option. */
        synchronous?: boolean;
      };
      output: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        deletedProductId?: string | null;
        /** An asynchronous product operation. */
        productDeleteOperation?: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The text value to send to Shopify. */
          status: string;
          /** Shopify business validation errors. */
          userErrors?: Array<{
            /** Text values to send to Shopify. */
            field?: Array<string> | null;
            /** The text value to send to Shopify. */
            message: string;
            /** The text value to send to Shopify. */
            code?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        } | null;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Delete product variants. Requires write_products. */
    "shopify.delete_product_variants": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        productId: string;
        /** Shopify GraphQL global IDs. */
        variantsIds: Array<string>;
      };
      output: {
        /** The Shopify resource returned by the operation. */
        product?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Download a completed or partial Shopify bulk JSONL result and upload it to connector transit storage. */
    "shopify.download_bulk_result": {
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
    /** Duplicate a product, optionally including images and translations. Requires write_products. */
    "shopify.duplicate_product": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        productId: string;
        /** The text value to send to Shopify. */
        newTitle: string;
        /** The new product status. */
        newStatus?: "ACTIVE" | "ARCHIVED" | "DRAFT" | "UNLISTED";
        /** Whether to enable this option. */
        includeImages?: boolean;
        /** Whether to enable this option. */
        includeTranslations?: boolean;
        /** Whether to enable this option. */
        synchronous?: boolean;
      };
      output: {
        /** The Shopify resource returned by the operation. */
        newProduct?: Record<string, unknown>;
        /** An asynchronous product operation. */
        productDuplicateOperation?: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The text value to send to Shopify. */
          status: string;
          /** Shopify business validation errors. */
          userErrors?: Array<{
            /** Text values to send to Shopify. */
            field?: Array<string> | null;
            /** The text value to send to Shopify. */
            message: string;
            /** The text value to send to Shopify. */
            code?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        } | null;
        /** A Shopify background job. */
        imageJob?: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** Whether to enable this option. */
          done: boolean;
          [key: string]: unknown;
        } | null;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Execute a JSON-friendly Shopify Admin GraphQL query or mutation against the connected shop. */
    "shopify.execute_graphql": {
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
    /** Retrieve one Shopify REST article by blog ID and article ID. */
    "shopify.get_article": {
      input: {
        /**
         * The Shopify blog ID.
         * @minimum 1
         */
        blog_id: number;
        /**
         * The Shopify article ID.
         * @minimum 1
         */
        article_id: number;
      };
      output: {
        /** A Shopify REST article object. */
        article: {
          /**
           * The Shopify article ID.
           * @minimum 1
           */
          id: number;
          /**
           * The Shopify blog ID that owns the article.
           * @minimum 1
           */
          blog_id: number;
          /** The article title. */
          title: string;
          /** The article handle. */
          handle: string;
          /** The article body HTML returned by Shopify. */
          body_html: string | null;
          /** The article summary HTML returned by Shopify. */
          summary_html: string | null;
          /** The article author returned by Shopify. */
          author: string | null;
          /** The comma-separated article tags returned by Shopify. */
          tags: string | null;
          /** The article publication timestamp, or null when hidden. */
          published_at: string | null;
          /** The Liquid template suffix used by the article. */
          template_suffix: string | null;
          /** The article creation timestamp returned by Shopify. */
          created_at: string | null;
          /** The article update timestamp returned by Shopify. */
          updated_at: string | null;
          /** The article image object returned by Shopify. */
          image?: Record<string, unknown> | null;
          /** The Shopify Admin GraphQL ID for the article. */
          admin_graphql_api_id: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Shopify REST blog by numeric ID. */
    "shopify.get_blog": {
      input: {
        /**
         * The Shopify blog ID.
         * @minimum 1
         */
        blog_id: number;
      };
      output: {
        /** A Shopify REST blog object. */
        blog: {
          /**
           * The Shopify blog ID.
           * @minimum 1
           */
          id: number;
          /** The blog title. */
          title: string;
          /** The blog handle. */
          handle: string;
          /** The blog comment policy returned by Shopify. */
          commentable: string | null;
          /** The comma-separated tags from the 200 most recent articles. */
          tags: string | null;
          /** The Liquid template suffix used by the blog. */
          template_suffix: string | null;
          /** The FeedBurner identifier when configured. */
          feedburner: string | null;
          /** The FeedBurner URL when configured. */
          feedburner_location: string | null;
          /** The blog creation timestamp returned by Shopify. */
          created_at: string | null;
          /** The blog update timestamp returned by Shopify. */
          updated_at: string | null;
          /** The Shopify Admin GraphQL ID for the blog. */
          admin_graphql_api_id: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Shopify bulk operation by ID for progress polling and result URL discovery. */
    "shopify.get_bulk_operation": {
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
    "shopify.get_collection": {
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
    "shopify.get_customer": {
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
    /** Get a draft order and its invoice URL. Requires read_draft_orders. */
    "shopify.get_draft_order": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Shopify resource returned by the operation. */
        draftOrder?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
    /** Get a file's processing state, errors, and available download URL. Requires read_files. */
    "shopify.get_file": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The file and its processing state. */
        node?: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id?: string;
          /** The text value to send to Shopify. */
          fileStatus?: string;
          /** Shopify business validation errors. */
          fileErrors?: Array<{
            /** Text values to send to Shopify. */
            field?: Array<string> | null;
            /** The text value to send to Shopify. */
            message: string;
            /** The text value to send to Shopify. */
            code?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Shopify fulfillment order with independently paginated line items. */
    "shopify.get_fulfillment_order": {
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
    "shopify.get_inventory_item": {
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
    "shopify.get_inventory_quantities": {
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
    /** Check whether a Shopify background job has completed. */
    "shopify.get_job": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Shopify background job. */
        job?: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** Whether to enable this option. */
          done: boolean;
          /** The normalized job status derived from Shopify's done field. */
          status?: "RUNNING" | "COMPLETED";
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Shopify location by GraphQL global ID. */
    "shopify.get_location": {
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
    /** Get a metaobject and its fields. Requires read_metaobjects. */
    "shopify.get_metaobject": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Shopify resource returned by the operation. */
        metaobject?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Shopify order by GraphQL global ID. */
    "shopify.get_order": {
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
    /** Poll an order cancellation and return its success or failure status and errors. Requires read_orders and order cancellation permission. */
    "shopify.get_order_cancel_result": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The asynchronous order cancellation result. */
        jobResult?: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** Whether the cancellation job has finished; inspect status to determine success. */
          done: boolean;
          /** The order cancellation status. */
          status: "STARTED" | "SUCCEEDED" | "FAILED";
          /** Shopify business validation errors. */
          errors: Array<{
            /** Text values to send to Shopify. */
            field?: Array<string> | null;
            /** The text value to send to Shopify. */
            message: string;
            /** The text value to send to Shopify. */
            code?: string | null;
            [key: string]: unknown;
          }>;
          /** The Shopify resource returned by the operation. */
          order: Record<string, unknown> | null;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Shopify REST page by numeric ID. */
    "shopify.get_page": {
      input: {
        /**
         * The Shopify page ID.
         * @minimum 1
         */
        page_id: number;
      };
      output: {
        /** A Shopify REST page object. */
        page: {
          /**
           * The Shopify page ID.
           * @minimum 1
           */
          id: number;
          /** The page title. */
          title: string;
          /** The page handle. */
          handle: string;
          /** The page body HTML returned by Shopify. */
          body_html: string | null;
          /** The page author returned by Shopify. */
          author: string | null;
          /** The page publication timestamp, or null when hidden. */
          published_at: string | null;
          /** The Liquid template suffix used by the page. */
          template_suffix: string | null;
          /** The page creation timestamp returned by Shopify. */
          created_at: string | null;
          /** The page update timestamp returned by Shopify. */
          updated_at: string | null;
          /** The Shopify Admin GraphQL ID for the page. */
          admin_graphql_api_id: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Shopify product by GraphQL global ID. */
    "shopify.get_product": {
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
    /** Poll a product deletion or duplication operation. Requires read_products. */
    "shopify.get_product_operation": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** An asynchronous product operation. */
        productOperation?: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The text value to send to Shopify. */
          status: string;
          /** Shopify business validation errors. */
          userErrors?: Array<{
            /** Text values to send to Shopify. */
            field?: Array<string> | null;
            /** The text value to send to Shopify. */
            message: string;
            /** The text value to send to Shopify. */
            code?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve basic shop information for the connected Shopify Admin token. */
    "shopify.get_shop": {
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
    /** List Shopify REST article authors across the connected shop. */
    "shopify.list_article_authors": {
      input: Record<string, never>;
      output: {
        /** Article authors returned by Shopify. */
        authors: Array<string>;
      };
    };
    /** List Shopify REST article tags across all articles in the connected shop. */
    "shopify.list_article_tags": {
      input: {
        /**
         * The maximum number of records to return. Shopify REST supports values from 1 to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /** Whether Shopify should order tags by popularity. */
        popular?: boolean;
      };
      output: {
        /** Article tags returned by Shopify. */
        tags: Array<string>;
      };
    };
    /** List Shopify REST articles in a blog with optional filters and pagination. */
    "shopify.list_articles": {
      input: {
        /**
         * The Shopify blog ID.
         * @minimum 1
         */
        blog_id: number;
        /**
         * Filter articles by author.
         * @minLength 1
         */
        author?: string;
        /**
         * Retrieve an article with this Shopify article handle.
         * @minLength 1
         */
        handle?: string;
        /**
         * Filter articles by tag.
         * @minLength 1
         */
        tag?: string;
        /** The Shopify publication status filter. */
        published_status?: "published" | "unpublished" | "any";
        /**
         * Return records with Shopify numeric IDs greater than this value.
         * @minimum 1
         */
        since_id?: number;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        created_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        created_at_max?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        updated_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        updated_at_max?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        published_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        published_at_max?: string;
        /**
         * The maximum number of records to return. Shopify REST supports values from 1 to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The opaque Shopify REST page_info cursor from a previous response pagination value.
         * @minLength 1
         */
        page_info?: string;
      };
      output: {
        /** Articles returned by Shopify. */
        articles: Array<{
          /**
           * The Shopify article ID.
           * @minimum 1
           */
          id: number;
          /**
           * The Shopify blog ID that owns the article.
           * @minimum 1
           */
          blog_id: number;
          /** The article title. */
          title: string;
          /** The article handle. */
          handle: string;
          /** The article body HTML returned by Shopify. */
          body_html: string | null;
          /** The article summary HTML returned by Shopify. */
          summary_html: string | null;
          /** The article author returned by Shopify. */
          author: string | null;
          /** The comma-separated article tags returned by Shopify. */
          tags: string | null;
          /** The article publication timestamp, or null when hidden. */
          published_at: string | null;
          /** The Liquid template suffix used by the article. */
          template_suffix: string | null;
          /** The article creation timestamp returned by Shopify. */
          created_at: string | null;
          /** The article update timestamp returned by Shopify. */
          updated_at: string | null;
          /** The article image object returned by Shopify. */
          image?: Record<string, unknown> | null;
          /** The Shopify Admin GraphQL ID for the article. */
          admin_graphql_api_id: string | null;
          [key: string]: unknown;
        }>;
        /** Shopify REST Link-header pagination cursors. */
        pagination: {
          /** The page_info cursor for the next page when Shopify returned one. */
          nextPageInfo: string | null;
          /** The page_info cursor for the previous page when Shopify returned one. */
          previousPageInfo: string | null;
        };
        /** The raw object returned by Shopify REST Admin. */
        raw: Record<string, unknown>;
      };
    };
    /** List Shopify REST article tags for one blog. */
    "shopify.list_blog_article_tags": {
      input: {
        /**
         * The Shopify blog ID.
         * @minimum 1
         */
        blog_id: number;
        /**
         * The maximum number of records to return. Shopify REST supports values from 1 to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /** Whether Shopify should order tags by popularity. */
        popular?: boolean;
      };
      output: {
        /** Article tags returned by Shopify. */
        tags: Array<string>;
      };
    };
    /** List Shopify REST blogs with optional handle filtering and pagination. */
    "shopify.list_blogs": {
      input: {
        /**
         * Filter blogs by Shopify blog handle.
         * @minLength 1
         */
        handle?: string;
        /**
         * Return records with Shopify numeric IDs greater than this value.
         * @minimum 1
         */
        since_id?: number;
        /**
         * The maximum number of records to return. Shopify REST supports values from 1 to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The opaque Shopify REST page_info cursor from a previous response pagination value.
         * @minLength 1
         */
        page_info?: string;
      };
      output: {
        /** Blogs returned by Shopify. */
        blogs: Array<{
          /**
           * The Shopify blog ID.
           * @minimum 1
           */
          id: number;
          /** The blog title. */
          title: string;
          /** The blog handle. */
          handle: string;
          /** The blog comment policy returned by Shopify. */
          commentable: string | null;
          /** The comma-separated tags from the 200 most recent articles. */
          tags: string | null;
          /** The Liquid template suffix used by the blog. */
          template_suffix: string | null;
          /** The FeedBurner identifier when configured. */
          feedburner: string | null;
          /** The FeedBurner URL when configured. */
          feedburner_location: string | null;
          /** The blog creation timestamp returned by Shopify. */
          created_at: string | null;
          /** The blog update timestamp returned by Shopify. */
          updated_at: string | null;
          /** The Shopify Admin GraphQL ID for the blog. */
          admin_graphql_api_id: string | null;
          [key: string]: unknown;
        }>;
        /** Shopify REST Link-header pagination cursors. */
        pagination: {
          /** The page_info cursor for the next page when Shopify returned one. */
          nextPageInfo: string | null;
          /** The page_info cursor for the previous page when Shopify returned one. */
          previousPageInfo: string | null;
        };
        /** The raw object returned by Shopify REST Admin. */
        raw: Record<string, unknown>;
      };
    };
    /** Search bulk operations and their result URLs. */
    "shopify.list_bulk_operations": {
      input: {
        /**
         * The number of records after the cursor; defaults to 50 unless last is supplied.
         * @minimum 1
         * @maximum 250
         */
        first?: number;
        /** Return records after this cursor. */
        after?: string;
        /**
         * The number of records before the cursor.
         * @minimum 1
         * @maximum 250
         */
        last?: number;
        /** Return records before this cursor. */
        before?: string;
        /** Reverse the result order. */
        reverse?: boolean;
        /** A Shopify search expression. */
        query?: string;
        /** The Shopify sort key for this resource. */
        sortKey?: string;
      };
      output: {
        /** Matching bulk operations. */
        bulkOperations?: {
          /** Matching Shopify resources. */
          nodes?: Array<Record<string, unknown>>;
          /** Cursor pagination metadata. */
          pageInfo?: {
            /** Whether to enable this option. */
            hasNextPage?: boolean;
            /** Whether to enable this option. */
            hasPreviousPage?: boolean;
            /** The text value to send to Shopify. */
            startCursor?: string | null;
            /** The text value to send to Shopify. */
            endCursor?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Shopify collections with optional search query and cursor pagination. */
    "shopify.list_collections": {
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
    "shopify.list_customers": {
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
    /** Search draft orders with cursor pagination. Requires read_draft_orders. */
    "shopify.list_draft_orders": {
      input: {
        /**
         * The number of records after the cursor; defaults to 50 unless last is supplied.
         * @minimum 1
         * @maximum 250
         */
        first?: number;
        /** Return records after this cursor. */
        after?: string;
        /**
         * The number of records before the cursor.
         * @minimum 1
         * @maximum 250
         */
        last?: number;
        /** Return records before this cursor. */
        before?: string;
        /** Reverse the result order. */
        reverse?: boolean;
        /** A Shopify search expression. */
        query?: string;
        /** The Shopify sort key for this resource. */
        sortKey?: string;
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        savedSearchId?: string;
      };
      output: {
        /** Matching draft orders. */
        draftOrders?: {
          /** Matching Shopify resources. */
          nodes?: Array<Record<string, unknown>>;
          /** Cursor pagination metadata. */
          pageInfo?: {
            /** Whether to enable this option. */
            hasNextPage?: boolean;
            /** Whether to enable this option. */
            hasPreviousPage?: boolean;
            /** The text value to send to Shopify. */
            startCursor?: string | null;
            /** The text value to send to Shopify. */
            endCursor?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search files and their processing states. Requires read_files. */
    "shopify.list_files": {
      input: {
        /**
         * The number of records after the cursor; defaults to 50 unless last is supplied.
         * @minimum 1
         * @maximum 250
         */
        first?: number;
        /** Return records after this cursor. */
        after?: string;
        /**
         * The number of records before the cursor.
         * @minimum 1
         * @maximum 250
         */
        last?: number;
        /** Return records before this cursor. */
        before?: string;
        /** Reverse the result order. */
        reverse?: boolean;
        /** A Shopify search expression. */
        query?: string;
        /** The Shopify sort key for this resource. */
        sortKey?: string;
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        savedSearchId?: string;
      };
      output: {
        /** Matching files. */
        files?: {
          /** Matching Shopify resources. */
          nodes?: Array<Record<string, unknown>>;
          /** Cursor pagination metadata. */
          pageInfo?: {
            /** Whether to enable this option. */
            hasNextPage?: boolean;
            /** Whether to enable this option. */
            hasPreviousPage?: boolean;
            /** The text value to send to Shopify. */
            startCursor?: string | null;
            /** The text value to send to Shopify. */
            endCursor?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Shopify inventory items with optional search query and cursor pagination. */
    "shopify.list_inventory_items": {
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
    "shopify.list_locations": {
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
    /** Search metaobjects of a definition type. Requires read_metaobjects. */
    "shopify.list_metaobjects": {
      input: {
        /**
         * The number of records after the cursor; defaults to 50 unless last is supplied.
         * @minimum 1
         * @maximum 250
         */
        first?: number;
        /** Return records after this cursor. */
        after?: string;
        /**
         * The number of records before the cursor.
         * @minimum 1
         * @maximum 250
         */
        last?: number;
        /** Return records before this cursor. */
        before?: string;
        /** Reverse the result order. */
        reverse?: boolean;
        /** A Shopify search expression. */
        query?: string;
        /** The Shopify sort key for this resource. */
        sortKey?: string;
        /** The text value to send to Shopify. */
        type: string;
      };
      output: {
        /** Matching metaobjects. */
        metaobjects?: {
          /** Matching Shopify resources. */
          nodes?: Array<Record<string, unknown>>;
          /** Cursor pagination metadata. */
          pageInfo?: {
            /** Whether to enable this option. */
            hasNextPage?: boolean;
            /** Whether to enable this option. */
            hasPreviousPage?: boolean;
            /** The text value to send to Shopify. */
            startCursor?: string | null;
            /** The text value to send to Shopify. */
            endCursor?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List fulfillment orders and fulfillable line items for one Shopify order. */
    "shopify.list_order_fulfillment_orders": {
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
         * @default 10
         */
        first?: number;
        /**
         * The number of line items per fulfillment order. Use get_fulfillment_order to fetch subsequent line-item pages.
         * @minimum 1
         * @maximum 250
         * @default 10
         */
        lineItemsFirst?: number;
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
    "shopify.list_orders": {
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
    /** List Shopify REST pages with optional filters and pagination. */
    "shopify.list_pages": {
      input: {
        /**
         * Retrieve pages with this exact Shopify page title.
         * @minLength 1
         */
        title?: string;
        /**
         * Retrieve pages with this Shopify page handle.
         * @minLength 1
         */
        handle?: string;
        /** The Shopify publication status filter. */
        published_status?: "published" | "unpublished" | "any";
        /**
         * Return records with Shopify numeric IDs greater than this value.
         * @minimum 1
         */
        since_id?: number;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        created_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        created_at_max?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        updated_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        updated_at_max?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        published_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        published_at_max?: string;
        /**
         * The maximum number of records to return. Shopify REST supports values from 1 to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The opaque Shopify REST page_info cursor from a previous response pagination value.
         * @minLength 1
         */
        page_info?: string;
      };
      output: {
        /** Pages returned by Shopify. */
        pages: Array<{
          /**
           * The Shopify page ID.
           * @minimum 1
           */
          id: number;
          /** The page title. */
          title: string;
          /** The page handle. */
          handle: string;
          /** The page body HTML returned by Shopify. */
          body_html: string | null;
          /** The page author returned by Shopify. */
          author: string | null;
          /** The page publication timestamp, or null when hidden. */
          published_at: string | null;
          /** The Liquid template suffix used by the page. */
          template_suffix: string | null;
          /** The page creation timestamp returned by Shopify. */
          created_at: string | null;
          /** The page update timestamp returned by Shopify. */
          updated_at: string | null;
          /** The Shopify Admin GraphQL ID for the page. */
          admin_graphql_api_id: string | null;
          [key: string]: unknown;
        }>;
        /** Shopify REST Link-header pagination cursors. */
        pagination: {
          /** The page_info cursor for the next page when Shopify returned one. */
          nextPageInfo: string | null;
          /** The page_info cursor for the previous page when Shopify returned one. */
          previousPageInfo: string | null;
        };
        /** The raw object returned by Shopify REST Admin. */
        raw: Record<string, unknown>;
      };
    };
    /** List Shopify product variants with optional search query and cursor pagination. */
    "shopify.list_product_variants": {
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
    "shopify.list_products": {
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
    /** List publications available to the app. Requires read_publications. */
    "shopify.list_publications": {
      input: {
        /**
         * The number of records after the cursor; defaults to 50 unless last is supplied.
         * @minimum 1
         * @maximum 250
         */
        first?: number;
        /** Return records after this cursor. */
        after?: string;
        /**
         * The number of records before the cursor.
         * @minimum 1
         * @maximum 250
         */
        last?: number;
        /** Return records before this cursor. */
        before?: string;
        /** Reverse the result order. */
        reverse?: boolean;
        /** The text value to send to Shopify. */
        catalogType?: string;
      };
      output: {
        /** Matching publications. */
        publications?: {
          /** Matching Shopify resources. */
          nodes?: Array<Record<string, unknown>>;
          /** Cursor pagination metadata. */
          pageInfo?: {
            /** Whether to enable this option. */
            hasNextPage?: boolean;
            /** Whether to enable this option. */
            hasPreviousPage?: boolean;
            /** The text value to send to Shopify. */
            startCursor?: string | null;
            /** The text value to send to Shopify. */
            endCursor?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Record payment for an order; this does not charge a payment method. Requires write_orders. */
    "shopify.mark_order_paid": {
      input: {
        /** The resource to operate on. */
        input: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
        };
      };
      output: {
        /** The Shopify resource returned by the operation. */
        order?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Reopen an archived order. Requires write_orders. */
    "shopify.open_order": {
      input: {
        /** The resource to operate on. */
        input: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
        };
      };
      output: {
        /** The Shopify resource returned by the operation. */
        order?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Publish a resource to publications. Requires write_publications. */
    "shopify.publish_resource": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
        /**
         * Entries accepted by Shopify PublicationInput.
         * @maxItems 250
         */
        input: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          publicationId: string;
          /** The text value to send to Shopify. */
          publishDate?: string | null;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The Shopify resource returned by the operation. */
        publishable?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Remove products from a manual collection and return a background job. Requires write_products. */
    "shopify.remove_collection_products": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
        /** Shopify GraphQL global IDs. */
        productIds: Array<string>;
      };
      output: {
        /** A Shopify background job. */
        job?: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** Whether to enable this option. */
          done: boolean;
          [key: string]: unknown;
        };
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Remove tags from a supported resource. Requires the write scope for that resource. */
    "shopify.remove_tags": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
        /** Text values to send to Shopify. */
        tags: Array<string>;
      };
      output: {
        /** The Shopify resource returned by the operation. */
        node?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Send the draft order invoice email. Requires write_draft_orders. */
    "shopify.send_draft_order_invoice": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
        /** Shopify EmailInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/EmailInput. */
        email?: {
          /** The text value to send to Shopify. */
          to?: string | null;
          /** The text value to send to Shopify. */
          from?: string | null;
          /** Text values to send to Shopify. */
          bcc?: Array<string> | null;
          /** The text value to send to Shopify. */
          subject?: string | null;
          /** The text value to send to Shopify. */
          customMessage?: string | null;
          [key: string]: unknown;
        };
      };
      output: {
        /** The Shopify resource returned by the operation. */
        draftOrder?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Send an invoice email for an order. Requires write_orders. */
    "shopify.send_order_invoice": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
        /** Shopify EmailInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/EmailInput. */
        email?: {
          /** The text value to send to Shopify. */
          to?: string | null;
          /** The text value to send to Shopify. */
          from?: string | null;
          /** Text values to send to Shopify. */
          bcc?: Array<string> | null;
          /** The text value to send to Shopify. */
          subject?: string | null;
          /** The text value to send to Shopify. */
          customMessage?: string | null;
          [key: string]: unknown;
        };
      };
      output: {
        /** The Shopify resource returned by the operation. */
        order?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Select the customer's default address. Requires write_customers. */
    "shopify.set_default_customer_address": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        customerId: string;
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        addressId: string;
      };
      output: {
        /** The Shopify resource returned by the operation. */
        customer?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Set absolute Shopify inventory quantities with required idempotency and explicit compare-and-swap values. */
    "shopify.set_inventory_quantities": {
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
    /** Set metafields atomically, optionally using compareDigest for optimistic concurrency. Requires write access to the owning resources. */
    "shopify.set_metafields": {
      input: {
        /**
         * Metafields to set atomically.
         * @maxItems 25
         */
        metafields: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          ownerId: string;
          /** The text value to send to Shopify. */
          namespace?: string | null;
          /** The text value to send to Shopify. */
          key: string;
          /** The text value to send to Shopify. */
          type?: string | null;
          /** The text value to send to Shopify. */
          value: string;
          /** The text value to send to Shopify. */
          compareDigest?: string | null;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** Updated metafields. */
        metafields?: Array<Record<string, unknown>>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Submit a Shopify Admin GraphQL bulk query and return an operation ID for asynchronous polling. */
    "shopify.submit_bulk_query": {
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
    /** Unpublish a resource from publications. Requires write_publications. */
    "shopify.unpublish_resource": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
        /**
         * Entries accepted by Shopify PublicationInput.
         * @maxItems 250
         */
        input: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          publicationId: string;
          /** The text value to send to Shopify. */
          publishDate?: string | null;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The Shopify resource returned by the operation. */
        publishable?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Update a blog article. Requires write_content or write_online_store_pages. */
    "shopify.update_article": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
        /** Shopify ArticleCreateInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/ArticleCreateInput. */
        article: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          blogId?: string | null;
          /** The text value to send to Shopify. */
          title?: string | null;
          /** The text value to send to Shopify. */
          handle?: string | null;
          /** The text value to send to Shopify. */
          body?: string | null;
          /** The text value to send to Shopify. */
          summary?: string | null;
          /** Text values to send to Shopify. */
          tags?: Array<string> | null;
          /** Shopify AuthorInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/AuthorInput. */
          author?: {
            /** The text value to send to Shopify. */
            name: string;
            [key: string]: unknown;
          } | null;
          /** Whether to enable this option. */
          isPublished?: boolean | null;
          /** The text value to send to Shopify. */
          publishDate?: string | null;
          /**
           * Entries accepted by Shopify MetafieldInput.
           * @maxItems 250
           */
          metafields?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            namespace?: string | null;
            /** The text value to send to Shopify. */
            key?: string | null;
            /** The text value to send to Shopify. */
            type?: string | null;
            /** The text value to send to Shopify. */
            value?: string | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
        /** Shopify ArticleBlogInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/ArticleBlogInput. */
        blog?: {
          /** The text value to send to Shopify. */
          title?: string | null;
          [key: string]: unknown;
        };
      };
      output: {
        /** The Shopify resource returned by the operation. */
        article?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Update a blog. Requires write_content or write_online_store_pages. */
    "shopify.update_blog": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
        /** Shopify BlogCreateInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/BlogCreateInput. */
        blog: {
          /** The text value to send to Shopify. */
          title?: string | null;
          /** The text value to send to Shopify. */
          handle?: string | null;
          /** The text value to send to Shopify. */
          commentPolicy?: string | null;
          /** The text value to send to Shopify. */
          templateSuffix?: string | null;
          /**
           * Entries accepted by Shopify MetafieldInput.
           * @maxItems 250
           */
          metafields?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            namespace?: string | null;
            /** The text value to send to Shopify. */
            key?: string | null;
            /** The text value to send to Shopify. */
            type?: string | null;
            /** The text value to send to Shopify. */
            value?: string | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
      };
      output: {
        /** The Shopify resource returned by the operation. */
        blog?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Update a collection and its rules. Supply collection or the legacy input argument. Requires write_products. */
    "shopify.update_collection": {
      input: {
        /** Shopify CollectionUpdateInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/CollectionUpdateInput. */
        collection?: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id?: string | null;
          /** The text value to send to Shopify. */
          title?: string | null;
          /** The text value to send to Shopify. */
          handle?: string | null;
          /** The text value to send to Shopify. */
          descriptionHtml?: string | null;
          /** The text value to send to Shopify. */
          templateSuffix?: string | null;
          /** The text value to send to Shopify. */
          sortOrder?: string | null;
          /** Shopify ImageInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/ImageInput. */
          image?: {
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            src?: string | null;
            /** The text value to send to Shopify. */
            altText?: string | null;
            [key: string]: unknown;
          } | null;
          /**
           * Entries accepted by Shopify MetafieldInput.
           * @maxItems 250
           */
          metafields?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            namespace?: string | null;
            /** The text value to send to Shopify. */
            key?: string | null;
            /** The text value to send to Shopify. */
            type?: string | null;
            /** The text value to send to Shopify. */
            value?: string | null;
            [key: string]: unknown;
          }> | null;
          /** Shopify GraphQL global IDs. */
          sourcesToDelete?: Array<string> | null;
          /**
           * Entries accepted by Shopify CollectionCreateSourceTargetInput.
           * @maxItems 250
           */
          sourcesToCreate?: Array<Record<string, unknown>> | null;
          /**
           * Entries accepted by Shopify CollectionUpdateSourceTargetInput.
           * @maxItems 250
           */
          sourcesToUpdate?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        };
        /** Shopify CollectionInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/CollectionInput. */
        input?: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id?: string | null;
          /** The text value to send to Shopify. */
          title?: string | null;
          /** The text value to send to Shopify. */
          handle?: string | null;
          /** The text value to send to Shopify. */
          descriptionHtml?: string | null;
          /** Shopify GraphQL global IDs. */
          products?: Array<string> | null;
          /** Shopify CollectionRuleSetInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/CollectionRuleSetInput. */
          ruleSet?: {
            /** Whether to enable this option. */
            appliedDisjunctively: boolean;
            /**
             * Entries accepted by Shopify CollectionRuleInput.
             * @maxItems 250
             */
            rules: Array<{
              /** The text value to send to Shopify. */
              column: string;
              /** The text value to send to Shopify. */
              relation: string;
              /** The text value to send to Shopify. */
              condition: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          } | null;
          /** Shopify ImageInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/ImageInput. */
          image?: {
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            src?: string | null;
            /** The text value to send to Shopify. */
            altText?: string | null;
            [key: string]: unknown;
          } | null;
          /**
           * Entries accepted by Shopify MetafieldInput.
           * @maxItems 250
           */
          metafields?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            namespace?: string | null;
            /** The text value to send to Shopify. */
            key?: string | null;
            /** The text value to send to Shopify. */
            type?: string | null;
            /** The text value to send to Shopify. */
            value?: string | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
      };
      output: {
        /** The Shopify resource returned by the operation. */
        collection?: Record<string, unknown>;
        /** A Shopify background job. */
        job?: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** Whether to enable this option. */
          done: boolean;
          [key: string]: unknown;
        } | null;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Update a customer identified by input.id. Requires write_customers. */
    "shopify.update_customer": {
      input: {
        /** Shopify CustomerInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/CustomerInput. */
        input: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string | null;
          /** The text value to send to Shopify. */
          firstName?: string | null;
          /** The text value to send to Shopify. */
          lastName?: string | null;
          /** The text value to send to Shopify. */
          email?: string | null;
          /** The text value to send to Shopify. */
          phone?: string | null;
          /** The text value to send to Shopify. */
          note?: string | null;
          /** Text values to send to Shopify. */
          tags?: Array<string> | null;
          /** Whether to enable this option. */
          taxExempt?: boolean | null;
          /** Customer mailing addresses. */
          addresses?: Array<{
            /** The text value to send to Shopify. */
            firstName?: string | null;
            /** The text value to send to Shopify. */
            lastName?: string | null;
            /** The text value to send to Shopify. */
            company?: string | null;
            /** The text value to send to Shopify. */
            address1?: string | null;
            /** The text value to send to Shopify. */
            address2?: string | null;
            /** The text value to send to Shopify. */
            city?: string | null;
            /** The text value to send to Shopify. */
            country?: string | null;
            /** The text value to send to Shopify. */
            province?: string | null;
            /** The text value to send to Shopify. */
            zip?: string | null;
            /** The text value to send to Shopify. */
            phone?: string | null;
            [key: string]: unknown;
          }> | null;
          /**
           * Entries accepted by Shopify MetafieldInput.
           * @maxItems 250
           */
          metafields?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            namespace?: string | null;
            /** The text value to send to Shopify. */
            key?: string | null;
            /** The text value to send to Shopify. */
            type?: string | null;
            /** The text value to send to Shopify. */
            value?: string | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
      };
      output: {
        /** The Shopify resource returned by the operation. */
        customer?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Update a customer address. Requires write_customers. */
    "shopify.update_customer_address": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        customerId: string;
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        addressId: string;
        /** Shopify MailingAddressInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/MailingAddressInput. */
        address: {
          /** The text value to send to Shopify. */
          firstName?: string | null;
          /** The text value to send to Shopify. */
          lastName?: string | null;
          /** The text value to send to Shopify. */
          company?: string | null;
          /** The text value to send to Shopify. */
          address1?: string | null;
          /** The text value to send to Shopify. */
          address2?: string | null;
          /** The text value to send to Shopify. */
          city?: string | null;
          /** The text value to send to Shopify. */
          country?: string | null;
          /** The text value to send to Shopify. */
          province?: string | null;
          /** The text value to send to Shopify. */
          zip?: string | null;
          /** The text value to send to Shopify. */
          phone?: string | null;
          [key: string]: unknown;
        };
        /** Whether to enable this option. */
        setAsDefault?: boolean;
      };
      output: {
        /** The Shopify resource returned by the operation. */
        address?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Update a draft order. Requires write_draft_orders. */
    "shopify.update_draft_order": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
        /** Shopify DraftOrderInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/DraftOrderInput. */
        input: {
          /** The text value to send to Shopify. */
          email?: string | null;
          /** The text value to send to Shopify. */
          phone?: string | null;
          /** The text value to send to Shopify. */
          note?: string | null;
          /** Text values to send to Shopify. */
          tags?: Array<string> | null;
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          customerId?: string | null;
          /** Shopify MailingAddressInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/MailingAddressInput. */
          shippingAddress?: {
            /** The text value to send to Shopify. */
            firstName?: string | null;
            /** The text value to send to Shopify. */
            lastName?: string | null;
            /** The text value to send to Shopify. */
            company?: string | null;
            /** The text value to send to Shopify. */
            address1?: string | null;
            /** The text value to send to Shopify. */
            address2?: string | null;
            /** The text value to send to Shopify. */
            city?: string | null;
            /** The text value to send to Shopify. */
            country?: string | null;
            /** The text value to send to Shopify. */
            province?: string | null;
            /** The text value to send to Shopify. */
            zip?: string | null;
            /** The text value to send to Shopify. */
            phone?: string | null;
            [key: string]: unknown;
          } | null;
          /** Shopify MailingAddressInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/MailingAddressInput. */
          billingAddress?: {
            /** The text value to send to Shopify. */
            firstName?: string | null;
            /** The text value to send to Shopify. */
            lastName?: string | null;
            /** The text value to send to Shopify. */
            company?: string | null;
            /** The text value to send to Shopify. */
            address1?: string | null;
            /** The text value to send to Shopify. */
            address2?: string | null;
            /** The text value to send to Shopify. */
            city?: string | null;
            /** The text value to send to Shopify. */
            country?: string | null;
            /** The text value to send to Shopify. */
            province?: string | null;
            /** The text value to send to Shopify. */
            zip?: string | null;
            /** The text value to send to Shopify. */
            phone?: string | null;
            [key: string]: unknown;
          } | null;
          /**
           * Entries accepted by Shopify DraftOrderLineItemInput.
           * @maxItems 250
           */
          lineItems?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            variantId?: string | null;
            /** The text value to send to Shopify. */
            title?: string | null;
            /**
             * The line item quantity.
             * @minimum 1
             */
            quantity: number;
            /** A decimal monetary amount in the applicable currency. */
            originalUnitPrice?: string | null;
            /**
             * Entries accepted by Shopify AttributeInput.
             * @maxItems 250
             */
            customAttributes?: Array<{
              /** The text value to send to Shopify. */
              key: string;
              /** The text value to send to Shopify. */
              value: string;
              [key: string]: unknown;
            }> | null;
            [key: string]: unknown;
          }> | null;
          /** A Shopify checkout session token. This value is sensitive. */
          sessionToken?: string | null;
          /** Whether to enable this option. */
          taxExempt?: boolean | null;
          /** Whether to enable this option. */
          useCustomerDefaultAddress?: boolean | null;
          /**
           * Entries accepted by Shopify MetafieldInput.
           * @maxItems 250
           */
          metafields?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            namespace?: string | null;
            /** The text value to send to Shopify. */
            key?: string | null;
            /** The text value to send to Shopify. */
            type?: string | null;
            /** The text value to send to Shopify. */
            value?: string | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
      };
      output: {
        /** The Shopify resource returned by the operation. */
        draftOrder?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Update a metaobject. Requires write_metaobjects. */
    "shopify.update_metaobject": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
        /** Shopify MetaobjectUpdateInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/MetaobjectUpdateInput. */
        metaobject: {
          /** The text value to send to Shopify. */
          handle?: string | null;
          /**
           * Entries accepted by Shopify MetaobjectFieldInput.
           * @maxItems 250
           */
          fields?: Array<{
            /** The text value to send to Shopify. */
            key: string;
            /** The text value to send to Shopify. */
            value: string;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
      };
      output: {
        /** The Shopify resource returned by the operation. */
        metaobject?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Update an online store page. Requires write_content or write_online_store_pages. */
    "shopify.update_page": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
        /** Shopify PageCreateInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/PageCreateInput. */
        page: {
          /** The text value to send to Shopify. */
          title?: string | null;
          /** The text value to send to Shopify. */
          handle?: string | null;
          /** The text value to send to Shopify. */
          body?: string | null;
          /** Whether to enable this option. */
          isPublished?: boolean | null;
          /** The text value to send to Shopify. */
          publishDate?: string | null;
          /** The text value to send to Shopify. */
          templateSuffix?: string | null;
          /**
           * Entries accepted by Shopify MetafieldInput.
           * @maxItems 250
           */
          metafields?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            namespace?: string | null;
            /** The text value to send to Shopify. */
            key?: string | null;
            /** The text value to send to Shopify. */
            type?: string | null;
            /** The text value to send to Shopify. */
            value?: string | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
      };
      output: {
        /** The Shopify resource returned by the operation. */
        page?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Update one Shopify product by GraphQL global ID with typed attributes and optional new media. */
    "shopify.update_product": {
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
    /** Update product variants. When allowPartialUpdates is true, return successful variants together with errors. Requires write_products. */
    "shopify.update_product_variants": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        productId: string;
        /**
         * Entries accepted by Shopify ProductVariantsBulkInput.
         * @maxItems 250
         */
        variants: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id?: string | null;
          /** A decimal monetary amount in the applicable currency. */
          price?: string | null;
          /** A decimal monetary amount in the applicable currency. */
          compareAtPrice?: string | null;
          /** The text value to send to Shopify. */
          barcode?: string | null;
          /** Whether to enable this option. */
          taxable?: boolean | null;
          /** How to handle sales when inventory is exhausted. */
          inventoryPolicy?: "DENY" | "CONTINUE" | null;
          /** Shopify InventoryItemInput. Additional official fields are accepted; see https://shopify.dev/docs/api/admin-graphql/2026-10/input-objects/InventoryItemInput. */
          inventoryItem?: {
            /** The text value to send to Shopify. */
            sku?: string | null;
            /** Whether to enable this option. */
            tracked?: boolean | null;
            /** A decimal monetary amount in the applicable currency. */
            cost?: string | null;
            [key: string]: unknown;
          } | null;
          /**
           * Entries accepted by Shopify VariantOptionValueInput.
           * @maxItems 250
           */
          optionValues?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            name?: string | null;
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            optionId?: string | null;
            /** The text value to send to Shopify. */
            optionName?: string | null;
            [key: string]: unknown;
          }> | null;
          /**
           * Entries accepted by Shopify InventoryLevelInput.
           * @maxItems 250
           */
          inventoryQuantities?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            locationId: string;
            /** Available inventory quantity. */
            availableQuantity: number;
            [key: string]: unknown;
          }> | null;
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          mediaId?: string | null;
          /** Text values to send to Shopify. */
          mediaSrc?: Array<string> | null;
          /**
           * Entries accepted by Shopify MetafieldInput.
           * @maxItems 250
           */
          metafields?: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id?: string | null;
            /** The text value to send to Shopify. */
            namespace?: string | null;
            /** The text value to send to Shopify. */
            key?: string | null;
            /** The text value to send to Shopify. */
            type?: string | null;
            /** The text value to send to Shopify. */
            value?: string | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
        /**
         * Entries accepted by Shopify CreateMediaInput.
         * @maxItems 250
         */
        media?: Array<{
          /** The text value to send to Shopify. */
          originalSource: string;
          /** The text value to send to Shopify. */
          mediaContentType: string;
          /** The text value to send to Shopify. */
          alt?: string | null;
          [key: string]: unknown;
        }>;
        /** Whether to enable this option. */
        allowPartialUpdates?: boolean;
      };
      output: {
        /** Updated product variants. */
        productVariants?: Array<Record<string, unknown>>;
        /** The Shopify resource returned by the operation. */
        product?: Record<string, unknown>;
        /** Shopify business validation errors. */
        userErrors?: Array<{
          /** Text values to send to Shopify. */
          field?: Array<string> | null;
          /** The text value to send to Shopify. */
          message: string;
          /** The text value to send to Shopify. */
          code?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
