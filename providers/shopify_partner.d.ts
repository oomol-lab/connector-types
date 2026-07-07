import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Execute a JSON-friendly Shopify Partner GraphQL query or mutation against the connected organization. */
    "shopify_partner.execute_graphql": {
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
        /** The raw Shopify Partner GraphQL object. */
        data: Record<string, unknown>;
        /** The raw Shopify Partner GraphQL object. */
        extensions?: Record<string, unknown>;
      };
    };
    /** Retrieve one Shopify Partner app by GraphQL global ID. */
    "shopify_partner.get_app": {
      input: {
        /**
         * A Shopify Partner GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Shopify Partner app. */
        app: {
          /**
           * A Shopify Partner GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The Shopify app name. */
          name: string;
          /** The Shopify app API key identifier. */
          apiKey: string;
          /** The raw Shopify Partner GraphQL object. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** List app events for a Shopify Partner app. */
    "shopify_partner.list_app_events": {
      input: {
        /**
         * A Shopify Partner GraphQL global ID.
         * @minLength 1
         */
        appId: string;
        /**
         * The number of records to return.
         * @minimum 1
         * @maximum 100
         * @default 50
         */
        first?: number;
        /**
         * A Shopify Partner GraphQL pagination cursor.
         * @minLength 1
         */
        after?: string;
        /**
         * A Shopify Partner GraphQL global ID.
         * @minLength 1
         */
        chargeId?: string;
        /**
         * A Shopify Partner ISO 8601 timestamp.
         * @format date-time
         */
        occurredAtMin?: string;
        /**
         * A Shopify Partner ISO 8601 timestamp.
         * @format date-time
         */
        occurredAtMax?: string;
        /**
         * A Shopify Partner GraphQL global ID.
         * @minLength 1
         */
        shopId?: string;
        /** App event types to include. */
        types?: Array<"CREDIT_APPLIED" | "CREDIT_FAILED" | "CREDIT_PENDING" | "ONE_TIME_CHARGE_ACCEPTED" | "ONE_TIME_CHARGE_ACTIVATED" | "ONE_TIME_CHARGE_DECLINED" | "ONE_TIME_CHARGE_EXPIRED" | "RELATIONSHIP_DEACTIVATED" | "RELATIONSHIP_INSTALLED" | "RELATIONSHIP_REACTIVATED" | "RELATIONSHIP_UNINSTALLED" | "SUBSCRIPTION_APPROACHING_CAPPED_AMOUNT" | "SUBSCRIPTION_CAPPED_AMOUNT_UPDATED" | "SUBSCRIPTION_CHARGE_ACCEPTED" | "SUBSCRIPTION_CHARGE_ACTIVATED" | "SUBSCRIPTION_CHARGE_CANCELED" | "SUBSCRIPTION_CHARGE_DECLINED" | "SUBSCRIPTION_CHARGE_EXPIRED" | "SUBSCRIPTION_CHARGE_FROZEN" | "SUBSCRIPTION_CHARGE_UNFROZEN" | "USAGE_CHARGE_APPLIED">;
      };
      output: {
        /** A Shopify Partner app. */
        app: {
          /**
           * A Shopify Partner GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The Shopify app name. */
          name: string;
          /** The Shopify app API key identifier. */
          apiKey: string;
          /** The raw Shopify Partner GraphQL object. */
          raw: Record<string, unknown>;
        } | null;
        /** The returned Shopify Partner app events. */
        events: Array<{
          /** A Shopify Partner app event type. */
          type: "CREDIT_APPLIED" | "CREDIT_FAILED" | "CREDIT_PENDING" | "ONE_TIME_CHARGE_ACCEPTED" | "ONE_TIME_CHARGE_ACTIVATED" | "ONE_TIME_CHARGE_DECLINED" | "ONE_TIME_CHARGE_EXPIRED" | "RELATIONSHIP_DEACTIVATED" | "RELATIONSHIP_INSTALLED" | "RELATIONSHIP_REACTIVATED" | "RELATIONSHIP_UNINSTALLED" | "SUBSCRIPTION_APPROACHING_CAPPED_AMOUNT" | "SUBSCRIPTION_CAPPED_AMOUNT_UPDATED" | "SUBSCRIPTION_CHARGE_ACCEPTED" | "SUBSCRIPTION_CHARGE_ACTIVATED" | "SUBSCRIPTION_CHARGE_CANCELED" | "SUBSCRIPTION_CHARGE_DECLINED" | "SUBSCRIPTION_CHARGE_EXPIRED" | "SUBSCRIPTION_CHARGE_FROZEN" | "SUBSCRIPTION_CHARGE_UNFROZEN" | "USAGE_CHARGE_APPLIED";
          /**
           * A Shopify Partner ISO 8601 timestamp.
           * @format date-time
           */
          occurredAt: string;
          /** A Shopify Partner app. */
          app: {
            /**
             * A Shopify Partner GraphQL global ID.
             * @minLength 1
             */
            id: string;
            /** The Shopify app name. */
            name: string;
            /** The Shopify app API key identifier. */
            apiKey: string;
            /** The raw Shopify Partner GraphQL object. */
            raw: Record<string, unknown>;
          };
          /** A Shopify Partner shop reference. */
          shop: {
            /**
             * A Shopify Partner GraphQL global ID.
             * @minLength 1
             */
            id: string;
            /** The Shopify shop name. */
            name: string;
            /** The shop myshopify.com domain. */
            myshopifyDomain: string;
          };
          /**
           * A Shopify Partner GraphQL pagination cursor.
           * @minLength 1
           */
          cursor?: string | null;
          /** The raw Shopify Partner GraphQL object. */
          raw: Record<string, unknown>;
        }>;
        /** Shopify Partner pagination information. */
        pageInfo: {
          /** Whether more pages exist after the current page. */
          hasNextPage: boolean;
          /** Whether pages exist before the current page. */
          hasPreviousPage: boolean;
        };
      };
    };
    /** List historical Shopify Partner events for the authenticated organization. */
    "shopify_partner.list_partner_events": {
      input: {
        /**
         * The number of records to return.
         * @minimum 1
         * @maximum 100
         * @default 50
         */
        first?: number;
        /**
         * A Shopify Partner GraphQL pagination cursor.
         * @minLength 1
         */
        after?: string;
        /** Filter criteria for Shopify Partner historical events. */
        filter?: {
          /** Historical event types to include. */
          eventTypes?: Array<"CHARGE_ONE_TIME" | "CHARGE_RECURRING" | "CHARGE_USAGE" | "CREDIT_APPLIED" | "CREDIT_FAILED" | "CREDIT_PENDING" | "EARNING_ADJUSTMENT" | "EARNING_CHARGE_ONE_TIME" | "EARNING_CHARGE_RECURRING" | "EARNING_CHARGE_USAGE" | "EARNING_CREDIT" | "EARNING_REFUND" | "RELATIONSHIP_DEACTIVATED" | "RELATIONSHIP_INSTALLED" | "RELATIONSHIP_REACTIVATED" | "RELATIONSHIP_UNINSTALLED" | "SUBSCRIPTION_CANCELED" | "SUBSCRIPTION_CANCELLATION_SCHEDULED" | "SUBSCRIPTION_CREATED" | "SUBSCRIPTION_FROZEN" | "SUBSCRIPTION_UNFROZEN" | "SUBSCRIPTION_UPDATED">;
          /**
           * A Shopify Partner ISO 8601 timestamp.
           * @format date-time
           */
          occurredAtMin?: string;
          /**
           * A Shopify Partner ISO 8601 timestamp.
           * @format date-time
           */
          occurredAtMax?: string;
          /**
           * A Shopify Partner GraphQL global ID.
           * @minLength 1
           */
          shopId?: string;
          /**
           * A Shopify Partner GraphQL global ID.
           * @minLength 1
           */
          subjectId?: string;
          /** The Shopify Partner event subject type. */
          subjectType?: "APP" | "THEME";
        };
        /** The order for Shopify Partner event results. */
        orderBy?: "OCCURRED_AT_ASC" | "OCCURRED_AT_DESC";
      };
      output: {
        /** The returned Shopify Partner events. */
        events: Array<{
          /**
           * A Shopify Partner GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** A Shopify Partner historical event type. */
          eventType: "CHARGE_ONE_TIME" | "CHARGE_RECURRING" | "CHARGE_USAGE" | "CREDIT_APPLIED" | "CREDIT_FAILED" | "CREDIT_PENDING" | "EARNING_ADJUSTMENT" | "EARNING_CHARGE_ONE_TIME" | "EARNING_CHARGE_RECURRING" | "EARNING_CHARGE_USAGE" | "EARNING_CREDIT" | "EARNING_REFUND" | "RELATIONSHIP_DEACTIVATED" | "RELATIONSHIP_INSTALLED" | "RELATIONSHIP_REACTIVATED" | "RELATIONSHIP_UNINSTALLED" | "SUBSCRIPTION_CANCELED" | "SUBSCRIPTION_CANCELLATION_SCHEDULED" | "SUBSCRIPTION_CREATED" | "SUBSCRIPTION_FROZEN" | "SUBSCRIPTION_UNFROZEN" | "SUBSCRIPTION_UPDATED";
          /**
           * A Shopify Partner ISO 8601 timestamp.
           * @format date-time
           */
          occurredAt: string;
          /** A Shopify Partner shop reference. */
          shop: {
            /**
             * A Shopify Partner GraphQL global ID.
             * @minLength 1
             */
            id: string;
            /** The Shopify shop name. */
            name: string;
            /** The shop myshopify.com domain. */
            myshopifyDomain: string;
          } | null;
          /** The GraphQL typename for the event subject when returned. */
          subjectType?: string | null;
          /** The subject ID when returned by Shopify. */
          subjectId?: string | null;
          /** The subject name when returned by Shopify. */
          subjectName?: string | null;
          /**
           * A Shopify Partner GraphQL pagination cursor.
           * @minLength 1
           */
          cursor: string | null;
          /** The raw Shopify Partner GraphQL object. */
          raw: Record<string, unknown>;
        }>;
        /** Shopify Partner historical event pagination information. */
        pageInfo: {
          /** Whether more historical event pages exist after the current page. */
          hasNextPage: boolean;
          /** Whether historical event pages exist before the current page. */
          hasPreviousPage: boolean;
          /**
           * A Shopify Partner GraphQL pagination cursor.
           * @minLength 1
           */
          startCursor: string | null;
          /**
           * A Shopify Partner GraphQL pagination cursor.
           * @minLength 1
           */
          endCursor: string | null;
        };
      };
    };
    /** List transactions that impact Shopify Partner earnings. */
    "shopify_partner.list_transactions": {
      input: {
        /**
         * The number of records to return.
         * @minimum 1
         * @maximum 100
         * @default 50
         */
        first?: number;
        /**
         * A Shopify Partner GraphQL pagination cursor.
         * @minLength 1
         */
        after?: string;
        /**
         * A Shopify Partner GraphQL global ID.
         * @minLength 1
         */
        appId?: string;
        /**
         * A Shopify Partner ISO 8601 timestamp.
         * @format date-time
         */
        createdAtMin?: string;
        /**
         * A Shopify Partner ISO 8601 timestamp.
         * @format date-time
         */
        createdAtMax?: string;
        /**
         * A myshopify.com domain used to filter transactions.
         * @minLength 1
         */
        myshopifyDomain?: string;
        /**
         * A Shopify Partner GraphQL global ID.
         * @minLength 1
         */
        shopId?: string;
        /** Transaction types to include. */
        types?: Array<"APP_ONE_TIME_SALE" | "APP_SALE_ADJUSTMENT" | "APP_SALE_CREDIT" | "APP_SUBSCRIPTION_SALE" | "APP_USAGE_SALE" | "LEGACY" | "REFERRAL" | "REFERRAL_ADJUSTMENT" | "SERVICE_SALE" | "SERVICE_SALE_ADJUSTMENT" | "TAX" | "THEME_SALE" | "THEME_SALE_ADJUSTMENT">;
      };
      output: {
        /** The returned Shopify Partner transactions. */
        transactions: Array<{
          /**
           * A Shopify Partner GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /**
           * A Shopify Partner ISO 8601 timestamp.
           * @format date-time
           */
          createdAt: string;
          /** The GraphQL typename for the transaction subtype. */
          type?: string | null;
          /**
           * A Shopify Partner GraphQL pagination cursor.
           * @minLength 1
           */
          cursor: string | null;
          /** The raw Shopify Partner GraphQL object. */
          raw: Record<string, unknown>;
        }>;
        /** Shopify Partner pagination information. */
        pageInfo: {
          /** Whether more pages exist after the current page. */
          hasNextPage: boolean;
          /** Whether pages exist before the current page. */
          hasPreviousPage: boolean;
        };
      };
    };
  }
}
