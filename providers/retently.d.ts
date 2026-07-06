import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Retently account identity, plan, survey credit, and usage counters for the authenticated API key. */
    "retently.get_account_status": {
      input: Record<string, never>;
      output: {
        /** The raw object returned by Retently. */
        account: Record<string, unknown> | null;
        /** The raw object returned by Retently. */
        plan: Record<string, unknown> | null;
        /** The raw object returned by Retently. */
        usage: Record<string, unknown> | null;
        /** The raw object returned by Retently. */
        cache: Record<string, unknown> | null;
        /** The raw object returned by Retently. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Retently customer by customer ID. */
    "retently.get_customer": {
      input: {
        /**
         * The Retently customer ID.
         * @minLength 1
         */
        customerId: string;
      };
      output: {
        /** The raw object returned by Retently. */
        customer: Record<string, unknown> | null;
        /** The raw object returned by Retently. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Retently feedback response by feedback ID. */
    "retently.get_feedback": {
      input: {
        /**
         * The Retently feedback ID.
         * @minLength 1
         */
        feedbackId: string;
      };
      output: {
        /** The raw object returned by Retently. */
        feedback: Record<string, unknown> | null;
        /** The raw object returned by Retently. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Retently survey template by template ID, including survey questions when Retently returns them. */
    "retently.get_template": {
      input: {
        /**
         * The Retently template ID.
         * @minLength 1
         */
        templateId: string;
      };
      output: {
        /** The raw object returned by Retently. */
        template: Record<string, unknown> | null;
        /** The raw object returned by Retently. */
        raw: Record<string, unknown>;
      };
    };
    /** List Retently survey campaigns. */
    "retently.list_campaigns": {
      input: Record<string, never>;
      output: {
        /** The campaigns returned by Retently. */
        campaigns: Array<Record<string, unknown>>;
        /** The raw object returned by Retently. */
        raw: Record<string, unknown>;
      };
    };
    /** List Retently customers with optional email, pagination, sorting, date range, and attribute filters. */
    "retently.list_customers": {
      input: {
        /**
         * Find a customer by email address.
         * @format email
         */
        email?: string;
        /**
         * The current page number. Retently defaults to page 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of items to return. Retently allows up to 1,000.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The Retently sort option. Prefix the field with '-' for descending order.
         * @minLength 1
         */
        sort?: string;
        /**
         * The date boundary as an ISO timestamp or UNIX timestamp accepted by Retently.
         * @minLength 1
         */
        startDate?: string;
        /**
         * The date boundary as an ISO timestamp or UNIX timestamp accepted by Retently.
         * @minLength 1
         */
        endDate?: string;
        /**
         * Retently customer property filters.
         * @minItems 1
         */
        attributes?: Array<{
          /**
           * The Retently customer property name to filter by.
           * @minLength 1
           */
          name: string;
          /**
           * The Retently filter operator, such as equal or not_equal.
           * @minLength 1
           */
          op: string;
          /**
           * The Retently customer property value to compare.
           * @minLength 1
           */
          value: string;
        }>;
        /** How Retently should combine multiple attribute filters. */
        match?: "all" | "any";
      };
      output: {
        /** The customers returned by Retently. */
        customers: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Retently when present. */
        pagination: {
          /** The current page number returned by Retently. */
          page: number | null;
          /** The total number of pages returned by Retently. */
          pages: number | null;
          /** The page size returned by Retently. */
          limit: number | null;
          /** The Retently sort value returned in the response. */
          sort: string | null;
          /** The total number of matching records returned by Retently. */
          total: number | null;
        };
        /** The raw object returned by Retently. */
        raw: Record<string, unknown>;
      };
    };
    /** List Retently survey feedback responses with optional customer, campaign, pagination, date, and attribute filters. */
    "retently.list_feedback": {
      input: {
        /**
         * Search feedback responses by customer email address.
         * @format email
         */
        email?: string;
        /**
         * Search feedback responses by Retently customer ID.
         * @minLength 1
         */
        customerId?: string;
        /**
         * Filter feedback responses by Retently campaign ID.
         * @minLength 1
         */
        campaignId?: string;
        /**
         * The current page number. Retently defaults to page 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of items to return. Retently allows up to 1,000.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The Retently sort option. Prefix the field with '-' for descending order.
         * @minLength 1
         */
        sort?: string;
        /**
         * The date boundary as an ISO timestamp or UNIX timestamp accepted by Retently.
         * @minLength 1
         */
        startDate?: string;
        /**
         * The date boundary as an ISO timestamp or UNIX timestamp accepted by Retently.
         * @minLength 1
         */
        endDate?: string;
        /**
         * Retently customer property filters.
         * @minItems 1
         */
        attributes?: Array<{
          /**
           * The Retently customer property name to filter by.
           * @minLength 1
           */
          name: string;
          /**
           * The Retently filter operator, such as equal or not_equal.
           * @minLength 1
           */
          op: string;
          /**
           * The Retently customer property value to compare.
           * @minLength 1
           */
          value: string;
        }>;
        /** How Retently should combine multiple attribute filters. */
        match?: "all" | "any";
      };
      output: {
        /** The feedback responses returned by Retently. */
        feedback: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Retently when present. */
        pagination: {
          /** The current page number returned by Retently. */
          page: number | null;
          /** The total number of pages returned by Retently. */
          pages: number | null;
          /** The page size returned by Retently. */
          limit: number | null;
          /** The Retently sort value returned in the response. */
          sort: string | null;
          /** The total number of matching records returned by Retently. */
          total: number | null;
        };
        /** The raw object returned by Retently. */
        raw: Record<string, unknown>;
      };
    };
    /** List Retently survey templates. */
    "retently.list_templates": {
      input: Record<string, never>;
      output: {
        /** The survey templates returned by Retently. */
        templates: Array<Record<string, unknown>>;
        /** The raw object returned by Retently. */
        raw: Record<string, unknown>;
      };
    };
    /** Create or update Retently customers in bulk, including tags, properties, and fields to unset. */
    "retently.upsert_customers": {
      input: {
        /**
         * Retently customers to create or update.
         * @minItems 1
         * @maxItems 1000
         */
        subscribers: Array<{
          /**
           * The customer's email address.
           * @format email
           */
          email: string;
          /**
           * The customer's first name.
           * @minLength 1
           */
          first_name?: string;
          /**
           * The customer's last name.
           * @minLength 1
           */
          last_name?: string;
          /**
           * The customer's company name.
           * @minLength 1
           */
          company?: string;
          /**
           * Retently tags to assign to the customer.
           * @minItems 1
           */
          tags?: Array<string>;
          /**
           * Retently customer properties to create or update.
           * @minItems 1
           */
          properties?: Array<{
            /**
             * The display label for the Retently customer property.
             * @minLength 1
             */
            label: string;
            /** The Retently customer property type. */
            type: "string" | "date" | "integer" | "collection" | "boolean";
            /** The value to store for this Retently customer property. */
            value: unknown;
            /**
             * The internal Retently customer property name.
             * @minLength 1
             */
            name?: string;
          }>;
          /**
           * Retently property names or labels to remove from the customer.
           * @minItems 1
           */
          unset_properties?: Array<string>;
          /**
           * Retently tag names to remove from the customer.
           * @minItems 1
           */
          unset_tags?: Array<string>;
        }>;
      };
      output: {
        /** The customers returned by Retently. */
        customers: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Retently when present. */
        pagination: {
          /** The current page number returned by Retently. */
          page: number | null;
          /** The total number of pages returned by Retently. */
          pages: number | null;
          /** The page size returned by Retently. */
          limit: number | null;
          /** The Retently sort value returned in the response. */
          sort: string | null;
          /** The total number of matching records returned by Retently. */
          total: number | null;
        };
        /** The raw object returned by Retently. */
        raw: Record<string, unknown>;
      };
    };
  }
}
