import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get FinerWorks price breakdowns for one to fifty product codes or inventory SKUs. */
    "finerworks.get_prices": {
      input: {
        /**
         * One to fifty products to price.
         * @minItems 1
         * @maxItems 50
         */
        products: Array<{
          /**
           * The quantity of this product to price.
           * @minimum 1
           */
          product_qty: number;
          /**
           * The FinerWorks product code or virtual inventory SKU.
           * @minLength 1
           */
          product_sku: string;
        }>;
        /** An optional delegated account key for authorized FinerWorks accounts. */
        account_key?: string;
      };
      output: {
        /** Price breakdowns for the requested products. */
        prices: Array<Record<string, unknown>>;
        /** The status details returned by FinerWorks for the request. */
        status: Record<string, unknown>;
      };
    };
    /** List FinerWorks print media types and their compatible product and style information. */
    "finerworks.list_media_types": {
      input: {
        /** Optional IDs used to filter the returned catalog entries. */
        ids?: Array<number>;
        /** The optional FinerWorks site ID. The upstream default is 2. */
        site_id?: number;
      };
      output: {
        /** The matching media types. */
        media_types: Array<Record<string, unknown>>;
        /** The status details returned by FinerWorks for the request. */
        status: Record<string, unknown>;
      };
    };
    /** List FinerWorks print product types, optionally filtered by product type IDs. */
    "finerworks.list_product_types": {
      input: {
        /** Optional IDs used to filter the returned catalog entries. */
        ids?: Array<number>;
      };
      output: {
        /** The matching product types. */
        product_types: Array<Record<string, unknown>>;
        /** The status details returned by FinerWorks for the request. */
        status: Record<string, unknown>;
      };
    };
    /** List FinerWorks print style types, sizing constraints, and framing options. */
    "finerworks.list_style_types": {
      input: {
        /** Optional IDs used to filter the returned catalog entries. */
        ids?: Array<number>;
      };
      output: {
        /** The matching style types. */
        style_types: Array<Record<string, unknown>>;
        /** The status details returned by FinerWorks for the request. */
        status: Record<string, unknown>;
      };
    };
  }
}
