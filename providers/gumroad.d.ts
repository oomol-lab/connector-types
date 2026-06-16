import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the authenticated Gumroad user. */
    "gumroad.get_current_user": {
      input: Record<string, never>;
      output: {
        /** Whether Gumroad reported that the request succeeded. */
        success: boolean;
        /** Raw object returned by Gumroad. */
        user: Record<string, unknown>;
      };
    };
    /** Retrieve one Gumroad product by ID. */
    "gumroad.get_product": {
      input: {
        /**
         * Gumroad resource ID.
         * @minLength 1
         */
        productId: string;
      };
      output: {
        /** Whether Gumroad reported that the request succeeded. */
        success: boolean;
        /** Raw object returned by Gumroad. */
        product: Record<string, unknown>;
      };
    };
    /** Retrieve one Gumroad sale by ID. */
    "gumroad.get_sale": {
      input: {
        /**
         * Gumroad resource ID.
         * @minLength 1
         */
        saleId: string;
      };
      output: {
        /** Whether Gumroad reported that the request succeeded. */
        success: boolean;
        /** Raw object returned by Gumroad. */
        sale: Record<string, unknown>;
      };
    };
    /** List active subscribers for one Gumroad product. */
    "gumroad.list_product_subscribers": {
      input: {
        /**
         * Gumroad resource ID.
         * @minLength 1
         */
        productId: string;
        /**
         * Subscriber email address to filter by.
         * @minLength 1
         */
        email?: string;
        /** Whether Gumroad should limit the response to a paginated page. */
        paginated?: boolean;
        /**
         * Page key returned by a previous subscriber list response.
         * @minLength 1
         */
        pageKey?: string;
      };
      output: {
        /** Whether Gumroad reported that the request succeeded. */
        success: boolean;
        /** Subscribers returned by Gumroad. */
        subscribers: Array<Record<string, unknown>>;
        /** URL for the next subscribers page when returned. */
        next_page_url: string | null;
        /** Page key to pass to the next list_product_subscribers request. */
        next_page_key: string | null;
      };
    };
    /** List products owned by the authenticated Gumroad user. */
    "gumroad.list_products": {
      input: Record<string, never>;
      output: {
        /** Whether Gumroad reported that the request succeeded. */
        success: boolean;
        /** Products returned by Gumroad. */
        products: Array<Record<string, unknown>>;
      };
    };
    /** List successful Gumroad sales with optional filters and pagination. */
    "gumroad.list_sales": {
      input: {
        /**
         * Date filter in YYYY-MM-DD format.
         * @minLength 1
         */
        after?: string;
        /**
         * Date filter in YYYY-MM-DD format.
         * @minLength 1
         */
        before?: string;
        /**
         * Gumroad resource ID.
         * @minLength 1
         */
        productId?: string;
        /**
         * Buyer email address to filter sales by.
         * @minLength 1
         */
        email?: string;
        /**
         * Gumroad order ID to filter sales by.
         * @minLength 1
         */
        orderId?: string;
        /**
         * Customer name to filter sales by.
         * @minLength 1
         */
        name?: string;
        /**
         * License key to filter sales by.
         * @minLength 1
         */
        licenseKey?: string;
        /**
         * Page key returned by a previous list_sales response.
         * @minLength 1
         */
        pageKey?: string;
      };
      output: {
        /** Whether Gumroad reported that the request succeeded. */
        success: boolean;
        /** Sales returned by Gumroad. */
        sales: Array<Record<string, unknown>>;
        /** URL for the next sales page when returned. */
        next_page_url: string | null;
        /** Page key to pass to the next list_sales request. */
        next_page_key: string | null;
      };
    };
    /** Mark a Gumroad sale as shipped, optionally including a tracking URL. */
    "gumroad.mark_sale_as_shipped": {
      input: {
        /**
         * Gumroad resource ID.
         * @minLength 1
         */
        saleId: string;
        /**
         * Tracking URL to attach to the shipment.
         * @minLength 1
         * @format uri
         */
        trackingUrl?: string;
      };
      output: {
        /** Whether Gumroad reported that the request succeeded. */
        success: boolean;
        /** Raw object returned by Gumroad. */
        sale: Record<string, unknown>;
      };
    };
    /** Refund a Gumroad sale, optionally as a partial refund in cents. */
    "gumroad.refund_sale": {
      input: {
        /**
         * Gumroad resource ID.
         * @minLength 1
         */
        saleId: string;
        /**
         * Partial refund amount in the sale currency's smallest unit.
         * @minimum 1
         */
        amountCents?: number;
      };
      output: {
        /** Whether Gumroad reported that the request succeeded. */
        success: boolean;
        /** Raw object returned by Gumroad. */
        sale: Record<string, unknown>;
      };
    };
    /** Resend a Gumroad sale receipt to the buyer. */
    "gumroad.resend_sale_receipt": {
      input: {
        /**
         * Gumroad resource ID.
         * @minLength 1
         */
        saleId: string;
      };
      output: {
        /** Whether Gumroad reported that the request succeeded. */
        success: boolean;
      };
    };
  }
}
