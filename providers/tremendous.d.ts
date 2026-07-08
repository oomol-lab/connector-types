import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Tremendous reward order with an optional external ID for idempotent retries. */
    "tremendous.create_order": {
      input: {
        /**
         * A customer-supplied idempotency reference for this order.
         * @minLength 1
         */
        externalId?: string;
        /**
         * The Tremendous funding source ID used to pay for the order. Use balance to use the Tremendous balance.
         * @minLength 1
         */
        fundingSourceId: string;
        /**
         * The Tremendous campaign ID that defines the reward experience.
         * @minLength 1
         */
        campaignId?: string;
        /**
         * Product IDs that the recipient can choose from. This overrides campaign products when provided.
         * @minItems 1
         */
        products?: Array<string>;
        /** The monetary value of the Tremendous reward. */
        value: {
          /** The amount of the reward. */
          denomination: number;
          /**
           * The ISO 4217 currency code for the reward.
           * @minLength 1
           */
          currency_code?: string;
        };
        /** Details of the Tremendous reward recipient. */
        recipient: {
          /**
           * The recipient name.
           * @minLength 1
           */
          name?: string;
          /**
           * The recipient email address.
           * @format email
           */
          email?: string;
          /**
           * The recipient phone number, including country code for non-US numbers.
           * @minLength 1
           */
          phone?: string;
        };
        /**
         * The reward delivery date. Tremendous ignores time values if a date-time is sent.
         * @format date
         */
        deliverAt?: string;
        /** Custom fields to attach to the reward. */
        customFields?: Array<{
          /**
           * The Tremendous custom field ID.
           * @minLength 1
           */
          id: string;
          /** The custom field value. */
          value: string;
        }>;
        /**
         * The ISO 639-1 language code for the redemption experience.
         * @minLength 1
         */
        language?: string;
        /** Details on how Tremendous should deliver the reward. */
        delivery?: {
          /** How Tremendous should deliver the reward. */
          method: "EMAIL" | "LINK" | "PHONE";
          /** Customizable Tremendous reward delivery metadata. */
          meta?: {
            /** The sender name used in the delivery. */
            sender_name?: string;
            /** The subject line used for email delivery. */
            subject_line?: string;
            /** The message shown in the delivery and reward landing page. */
            message?: string;
            [key: string]: unknown;
          };
        };
      };
      output: {
        /** A Tremendous order object. */
        order: Record<string, unknown>;
        /** Raw Tremendous create order response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Generate a redemption link for an existing Tremendous reward. */
    "tremendous.generate_reward_link": {
      input: {
        /**
         * The Tremendous reward ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Tremendous reward object. */
        reward: Record<string, unknown>;
        /** Raw Tremendous generate reward link response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Tremendous campaign by ID. */
    "tremendous.get_campaign": {
      input: {
        /**
         * The Tremendous campaign ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Tremendous campaign object. */
        campaign: Record<string, unknown>;
        /** Raw Tremendous campaign response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Tremendous funding source by ID, including the special BALANCE value. */
    "tremendous.get_funding_source": {
      input: {
        /**
         * The Tremendous funding source ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Tremendous funding source object. */
        fundingSource: Record<string, unknown>;
        /** Raw Tremendous funding source response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Tremendous order by ID or external ID. */
    "tremendous.get_order": {
      input: {
        /**
         * The Tremendous order or external order ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Tremendous order object. */
        order: Record<string, unknown>;
        /** Raw Tremendous order response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Tremendous product by ID. */
    "tremendous.get_product": {
      input: {
        /**
         * The Tremendous product ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Tremendous product object. */
        product: Record<string, unknown>;
        /** Raw Tremendous product response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Tremendous reward by ID. */
    "tremendous.get_reward": {
      input: {
        /**
         * The Tremendous reward ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Tremendous reward object. */
        reward: Record<string, unknown>;
        /** Raw Tremendous reward response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Tremendous campaigns in the current organization. */
    "tremendous.list_campaigns": {
      input: Record<string, never>;
      output: {
        /** The Tremendous campaigns available to this API key. */
        campaigns: Array<Record<string, unknown>>;
        /** Raw Tremendous list campaigns response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List funding sources in the current Tremendous organization. */
    "tremendous.list_funding_sources": {
      input: Record<string, never>;
      output: {
        /** The Tremendous funding sources available to this API key. */
        fundingSources: Array<Record<string, unknown>>;
        /** Raw Tremendous list funding sources response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Tremendous orders with optional pagination and order filters. */
    "tremendous.list_orders": {
      input: {
        /**
         * The zero-based Tremendous result offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of Tremendous records to return. Tremendous caps list pages at 500.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * Only return orders for this Tremendous campaign ID.
         * @minLength 1
         */
        campaignId?: string;
        /**
         * Only return orders with this customer-supplied external ID.
         * @minLength 1
         */
        externalId?: string;
        /**
         * Only return orders created at or after this ISO 8601 timestamp.
         * @format date-time
         */
        createdAtGte?: string;
        /**
         * Only return orders created at or before this ISO 8601 timestamp.
         * @format date-time
         */
        createdAtLte?: string;
      };
      output: {
        /** The Tremendous orders matching the request. */
        orders: Array<Record<string, unknown>>;
        /** The total number of Tremendous orders across all pages. */
        totalCount: number;
        /** Raw Tremendous list orders response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List the Tremendous organization tied to the current API key. */
    "tremendous.list_organizations": {
      input: Record<string, never>;
      output: {
        /** The Tremendous organizations visible to this API key. */
        organizations: Array<Record<string, unknown>>;
        /** Raw Tremendous list organizations response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Tremendous products with optional country, currency, and subcategory filters. */
    "tremendous.list_products": {
      input: {
        /**
         * Comma-separated Alpha-2 country codes used to filter available products.
         * @minLength 1
         */
        country?: string;
        /**
         * Comma-separated ISO 4217 currency codes used to filter available products.
         * @minLength 1
         */
        currency?: string;
        /**
         * Comma-separated Tremendous product subcategories used to filter products.
         * @minLength 1
         */
        subcategory?: string;
      };
      output: {
        /** The Tremendous products matching the request. */
        products: Array<Record<string, unknown>>;
        /** Raw Tremendous list products response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Tremendous rewards with optional offset pagination. */
    "tremendous.list_rewards": {
      input: {
        /**
         * The zero-based Tremendous result offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of Tremendous records to return. Tremendous caps list pages at 500.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
      };
      output: {
        /** The Tremendous rewards matching the request. */
        rewards: Array<Record<string, unknown>>;
        /** The total number of Tremendous rewards across all pages. */
        totalCount: number;
        /** Raw Tremendous list rewards response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
