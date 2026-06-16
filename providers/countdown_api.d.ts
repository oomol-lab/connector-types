import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get eBay autocomplete suggestions for a search term through Countdown API. */
    "countdown_api.autocomplete": {
      input: {
        /**
         * The eBay search term to query.
         * @minLength 1
         */
        search_term: string;
        /**
         * The eBay domain to query, such as ebay.com, ebay.co.uk, or ebay.de.
         * @minLength 1
         */
        ebay_domain: string;
      };
      output: {
        /** The Countdown API response payload returned by the action. */
        data: Record<string, unknown>;
        /** Error if any occurred during the action execution. */
        error?: string;
        /** Whether the action execution was successful. */
        successful: boolean;
      };
    };
    /** Retrieve Countdown API account usage, quota, and platform status details. */
    "countdown_api.get_account": {
      input: Record<string, never>;
      output: {
        /** The Countdown API response payload returned by the action. */
        data: Record<string, unknown>;
        /** Error if any occurred during the action execution. */
        error?: string;
        /** Whether the action execution was successful. */
        successful: boolean;
      };
    };
    /** Retrieve eBay product details by product ID through Countdown API. */
    "countdown_api.get_product": {
      input: {
        /**
         * The eBay EPID product ID to retrieve.
         * @minLength 1
         */
        epid?: string;
        /**
         * The GTIN, ISBN, UPC, or EAN code to convert to an eBay EPID.
         * @minLength 1
         */
        gtin?: string;
        /**
         * The eBay page URL to retrieve through Countdown API.
         * @format uri
         */
        ebay_url?: string;
        /**
         * The eBay domain to query, such as ebay.com, ebay.co.uk, or ebay.de.
         * @minLength 1
         */
        ebay_domain?: string;
        /** Whether to force a fresh GTIN to EPID lookup. */
        skip_gtin_cache?: boolean;
        /** Whether to include product parts compatibility details when supported. */
        include_parts_compatibility?: boolean;
        /**
         * The customer country location to use for eBay retrieval.
         * @minLength 1
         */
        customer_location?: string;
        /**
         * The customer ZIP or postal code to use for eBay retrieval.
         * @minLength 1
         */
        customer_zipcode?: string;
        /**
         * A comma-separated list of response field paths.
         * @minLength 1
         */
        include_fields?: string;
        /**
         * A comma-separated list of response field paths.
         * @minLength 1
         */
        exclude_fields?: string;
      };
      output: {
        /** The Countdown API response payload returned by the action. */
        data: Record<string, unknown>;
        /** Error if any occurred during the action execution. */
        error?: string;
        /** Whether the action execution was successful. */
        successful: boolean;
      };
    };
    /** Search eBay products through Countdown API with optional filters. */
    "countdown_api.search_products": {
      input: {
        /**
         * The eBay search term to query.
         * @minLength 1
         */
        search_term?: string;
        /**
         * The eBay page URL to retrieve through Countdown API.
         * @format uri
         */
        ebay_url?: string;
        /**
         * The eBay domain to query, such as ebay.com, ebay.co.uk, or ebay.de.
         * @minLength 1
         */
        ebay_domain?: string;
        /**
         * The result page number to request, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum result page number to retrieve when supported.
         * @minimum 1
         */
        max_page?: number;
        /**
         * The eBay category ID used to narrow the search.
         * @minLength 1
         */
        category_id?: string;
        /** The eBay listing type filter to apply. */
        listing_type?: "all" | "buy it now" | "auction" | "accepts offers";
        /** The eBay item condition filter to apply. */
        condition?: "all" | "new" | "used" | "open box" | "manufacturer refurbished" | "seller refurbished" | "parts or not working" | "not specified";
        /** The Countdown API sort option for product search results. */
        sort_by?: "best match" | "price high to low" | "price low to high" | "price high to low plus postage" | "price low to high plus postage" | "newly listed" | "ending soonest";
        /** The number of search results to request. Valid values are 60, 120, or 240. */
        num?: number;
        /**
         * Comma-separated eBay search facets, such as brand=sandisk,format=microsd.
         * @minLength 1
         */
        facets?: string;
        /** Whether to filter search results to sold items. */
        sold_items?: boolean;
        /** Whether to filter search results to completed items. */
        completed_items?: boolean;
        /** Whether to filter search results to authorized seller items. */
        authorized_sellers?: boolean;
        /** Whether to filter search results to returns accepted items. */
        returns_accepted?: boolean;
        /** Whether to filter search results to free return items. */
        free_returns?: boolean;
        /** Whether to filter search results to authenticity verified items. */
        authenticity_verified?: boolean;
        /** Whether to filter search results to deals and savings items. */
        deals_and_savings?: boolean;
        /** Whether to filter search results to sale items. */
        sale_items?: boolean;
        /** Whether to include results beneath eBay's results matching fewer words banner. */
        allow_rewritten_results?: boolean;
        /**
         * The customer country location to use for eBay retrieval.
         * @minLength 1
         */
        customer_location?: string;
        /**
         * The customer ZIP or postal code to use for eBay retrieval.
         * @minLength 1
         */
        customer_zipcode?: string;
        /**
         * A comma-separated list of response field paths.
         * @minLength 1
         */
        include_fields?: string;
        /**
         * A comma-separated list of response field paths.
         * @minLength 1
         */
        exclude_fields?: string;
      };
      output: {
        /** The Countdown API response payload returned by the action. */
        data: Record<string, unknown>;
        /** Error if any occurred during the action execution. */
        error?: string;
        /** Whether the action execution was successful. */
        successful: boolean;
      };
    };
  }
}
