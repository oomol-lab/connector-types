import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check listing copy for AI readability and compliance signals without submitting lead contact details. */
    "listinggood.ai_readiness_check": {
      input: {
        /**
         * Listing title, bullets and description as plain text.
         * @minLength 1
         */
        text: string;
        /**
         * Marketplace code, such as US or DE. Defaults to US.
         * @minLength 1
         */
        marketplace?: string;
        /** Report language. Defaults to en. */
        lang?: "en" | "zh";
      };
      output: {
        /** The upstream JSON result, including provider-defined fields. */
        result: Record<string, unknown>;
      };
    };
    /** Run a quick pre-publication check for risky listing terms and category issues. */
    "listinggood.compliance_check": {
      input: {
        /**
         * Listing copy to check.
         * @minLength 1
         */
        text: string;
        /** Optional category hint, such as electronics or apparel. */
        category?: string;
        /** Report language. Defaults to en. */
        lang?: "en" | "zh";
      };
      output: {
        /** The upstream JSON result, including provider-defined fields. */
        result: Record<string, unknown>;
      };
    };
    /** Expand a short product description into structured fields for listing generation. */
    "listinggood.fill_from_sentence": {
      input: {
        /**
         * Product description containing 4 to 1000 characters.
         * @minLength 4
         * @maxLength 1000
         */
        sentence: string;
        /** Report language. Defaults to en. */
        lang?: "en" | "zh";
      };
      output: {
        /** The upstream JSON result, including provider-defined fields. */
        result: Record<string, unknown>;
      };
    };
    /** Submit a text-based listing generation task for explicitly selected marketplaces. Uses account credits and saves generated copy in ListingGood; does not publish to Amazon. */
    "listinggood.generate_listing": {
      input: {
        /**
         * Product name; the upstream field is named cn_name.
         * @minLength 1
         */
        cn_name: string;
        /**
         * Product SKU.
         * @minLength 1
         */
        sku: string;
        /**
         * Marketplace codes to generate for. Select explicitly to avoid generating for every marketplace.
         * @minItems 1
         */
        marketplaces: Array<string>;
        /** Product category name. */
        category?: string;
        /** ListingGood category code, when known. */
        category_code?: string;
        /** Product brand. */
        brand?: string;
        /** Intended audience or gender. */
        gender?: string;
        /** Product price, optionally including the currency. */
        price?: string;
        /** Main product material. */
        material_main?: string;
        /** Lining material. */
        material_lining?: string;
        /** Available sizes. */
        sizes?: string;
        /** Available colors. */
        colors?: string;
        /** Intended seasons. */
        season?: string;
        /** Intended occasions. */
        occasion?: string;
        /** Target search keywords. */
        keywords?: string;
        /** Additional factual product details. */
        note?: string;
        /** Product differentiators. */
        diff?: string;
        /** Factual product selling points. */
        selling_points?: Array<string>;
        /** Report language. Defaults to en. */
        lang?: "en" | "zh";
      };
      output: {
        /**
         * Task identifier for get_task.
         * @minLength 1
         */
        task_id: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a ListingGood task and its generated result, preserving upstream status and metadata. */
    "listinggood.get_task": {
      input: {
        /**
         * Task identifier returned by generate_listing.
         * @minLength 1
         */
        task_id: string;
      };
      output: {
        /** Normalized task state. */
        status: "pending" | "succeeded" | "failed";
        /** Upstream task with status, progress, message, result or error. */
        task: Record<string, unknown>;
      };
    };
  }
}
