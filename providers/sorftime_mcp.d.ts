import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Inspect one 1688 product using its ID from ali1688_search_products. */
    "sorftime_mcp.ali1688_get_product": {
      input: {
        /**
         * Product identifier returned by the platform's product search.
         * @minLength 1
         * @pattern \S
         */
        productId: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Browse 1688 categories. Omit parentId for the top levels, then pass a returned category ID to explore its children. */
    "sorftime_mcp.ali1688_list_categories": {
      input: {
        /**
         * Parent category identifier. Omit to start at the top of the category tree.
         * @minLength 1
         * @pattern \S
         */
        parentId?: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Search 1688 products by name to find sourcing suppliers and procurement prices. */
    "sorftime_mcp.ali1688_search_products": {
      input: {
        /**
         * Product name or search phrase.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * Page number starting at 1. Omit for the first page; page sizes are determined by Sorftime.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Expand an Amazon keyword into related and long-tail search terms. */
    "sorftime_mcp.amazon_find_related_keywords": {
      input: {
        /** Amazon keyword marketplace region. GB denotes the United Kingdom. */
        site: "US" | "GB" | "DE" | "FR" | "CA" | "JP" | "ES" | "IT" | "MX" | "AE" | "AU" | "BR" | "SA";
        /**
         * Keyword to research.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
        /**
         * Page number starting at 1. Omit for the first page; page sizes are determined by Sorftime.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Research an Amazon category market using a category ID from amazon_list_categories. */
    "sorftime_mcp.amazon_get_category_report": {
      input: {
        /** Amazon marketplace region. GB denotes the United Kingdom. */
        site: "US" | "GB" | "DE" | "FR" | "IN" | "CA" | "JP" | "ES" | "IT" | "MX" | "AE" | "AU" | "BR" | "SA";
        /**
         * Category identifier returned by the platform's category tree; use a leaf category for reports.
         * @minLength 1
         * @pattern \S
         */
        categoryId: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Inspect demand for a specific Amazon keyword. */
    "sorftime_mcp.amazon_get_keyword": {
      input: {
        /** Amazon keyword marketplace region. GB denotes the United Kingdom. */
        site: "US" | "GB" | "DE" | "FR" | "CA" | "JP" | "ES" | "IT" | "MX" | "AE" | "AU" | "BR" | "SA";
        /**
         * Keyword to research.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Inspect one Amazon product using its ID from amazon_search_products. */
    "sorftime_mcp.amazon_get_product": {
      input: {
        /** Amazon marketplace region. GB denotes the United Kingdom. */
        site: "US" | "GB" | "DE" | "FR" | "IN" | "CA" | "JP" | "ES" | "IT" | "MX" | "AE" | "AU" | "BR" | "SA";
        /**
         * Amazon ASIN returned by amazon_search_products.
         * @minLength 1
         * @pattern \S
         */
        productId: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Inspect historical Amazon product performance. Select one metric. */
    "sorftime_mcp.amazon_get_product_trend": {
      input: {
        /** Amazon marketplace region. GB denotes the United Kingdom. */
        site: "US" | "GB" | "DE" | "FR" | "IN" | "CA" | "JP" | "ES" | "IT" | "MX" | "AE" | "AU" | "BR" | "SA";
        /**
         * Amazon ASIN returned by amazon_search_products.
         * @minLength 1
         * @pattern \S
         */
        productId: string;
        /** Historical metric to query. */
        metric: "sales_volume" | "sales_amount" | "price" | "rank" | "subcategory_rank";
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Browse Amazon categories. Omit parentId for the top levels, then pass a returned category ID to explore its children. */
    "sorftime_mcp.amazon_list_categories": {
      input: {
        /** Amazon marketplace region. GB denotes the United Kingdom. */
        site: "US" | "GB" | "DE" | "FR" | "IN" | "CA" | "JP" | "ES" | "IT" | "MX" | "AE" | "AU" | "BR" | "SA";
        /**
         * Parent category identifier. Omit to start at the top of the category tree.
         * @minLength 1
         * @pattern \S
         */
        parentId?: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Discover Amazon keywords ranked by weekly search volume. Supports optional rank and search-volume bounds. */
    "sorftime_mcp.amazon_list_keywords": {
      input: {
        /** Amazon keyword marketplace region. GB denotes the United Kingdom. */
        site: "US" | "GB" | "DE" | "FR" | "CA" | "JP" | "ES" | "IT" | "MX" | "AE" | "AU" | "BR" | "SA";
        /**
         * Page number starting at 1. Omit for the first page; page sizes are determined by Sorftime.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Minimum weekly search-volume rank, inclusive.
         * @exclusiveMinimum 0
         */
        minRank?: number;
        /**
         * Maximum weekly search-volume rank, inclusive.
         * @exclusiveMinimum 0
         */
        maxRank?: number;
        /**
         * Minimum monthly search volume, inclusive.
         * @minimum 0
         */
        minSearchVolume?: number;
        /**
         * Maximum monthly search volume, inclusive.
         * @minimum 0
         */
        maxSearchVolume?: number;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Find Amazon products by name. */
    "sorftime_mcp.amazon_search_products": {
      input: {
        /** Amazon marketplace region. GB denotes the United Kingdom. */
        site: "US" | "GB" | "DE" | "FR" | "IN" | "CA" | "JP" | "ES" | "IT" | "MX" | "AE" | "AU" | "BR" | "SA";
        /**
         * Product name or search phrase.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * Page number starting at 1. Omit for the first page; page sizes are determined by Sorftime.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Run a tool from list_tools with its required arguments. Supports research queries and changes to favorites, including deletion. Credit cost depends on the tool. */
    "sorftime_mcp.call_tool": {
      input: {
        /**
         * Exact tool name returned by list_tools.
         * @minLength 1
         * @pattern \S
         */
        toolName: string;
        /** Arguments matching the selected tool's live inputSchema. Omit for a tool with no arguments. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** Structured MCP content when available, otherwise the complete MCP content envelope. */
        result: unknown;
      };
    };
    /** List all tools available to your Sorftime MCP account with their descriptions and argument schemas. */
    "sorftime_mcp.list_tools": {
      input: Record<string, never>;
      output: {
        /** Available tools and their current contracts. */
        tools: Array<{
          /**
           * Exact tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** Tool description supplied by Sorftime. */
          description?: string;
          /** Live JSON Schema for this tool's arguments. */
          inputSchema: Record<string, unknown>;
          /** Optional upstream behavior hints; these are not guarantees of safety. */
          annotations?: Record<string, unknown>;
        }>;
      };
    };
    /** Inspect one Shopee product using its ID from shopee_search_products. */
    "sorftime_mcp.shopee_get_product": {
      input: {
        /** Shopee marketplace region. */
        site: "VN" | "ID" | "SG" | "TH" | "MY" | "TW" | "PH" | "BR";
        /**
         * Product identifier returned by the platform's product search.
         * @minLength 1
         * @pattern \S
         */
        productId: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Inspect historical Shopee product performance. Returns available dimensions together. Ranges beyond one year cost 10 credits. */
    "sorftime_mcp.shopee_get_product_trend": {
      input: {
        /** Shopee marketplace region. */
        site: "VN" | "ID" | "SG" | "TH" | "MY" | "TW" | "PH" | "BR";
        /**
         * Product identifier returned by the platform's product search.
         * @minLength 1
         * @pattern \S
         */
        productId: string;
        /**
         * Start of the historical range. Omit for the provider's default range.
         * @format date
         */
        startDate?: string;
        /**
         * End of the historical range. Omit for the latest available data.
         * @format date
         */
        endDate?: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Browse Shopee categories. Omit parentId for the top levels, then pass a returned category ID to explore its children. */
    "sorftime_mcp.shopee_list_categories": {
      input: {
        /** Shopee marketplace region. */
        site: "VN" | "ID" | "SG" | "TH" | "MY" | "TW" | "PH" | "BR";
        /**
         * Parent category identifier. Omit to start at the top of the category tree.
         * @minLength 1
         * @pattern \S
         */
        parentId?: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Find best-selling products in a Shopee category. Optionally query historical natural-week snapshots for leaf categories. */
    "sorftime_mcp.shopee_list_category_products": {
      input: {
        /** Shopee marketplace region. */
        site: "VN" | "ID" | "SG" | "TH" | "MY" | "TW" | "PH" | "BR";
        /**
         * Category identifier returned by the platform's category tree; use a leaf category for reports.
         * @minLength 1
         * @pattern \S
         */
        categoryId: string;
        /**
         * Page number starting at 1. Omit for the first page; page sizes are determined by Sorftime.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Date within the historical natural week; supported only for leaf categories.
         * @format date
         */
        date?: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Discover Shopee keywords ranked by monthly search volume. Supports optional rank and search-volume bounds. */
    "sorftime_mcp.shopee_list_keywords": {
      input: {
        /** Shopee marketplace region. */
        site: "VN" | "ID" | "SG" | "TH" | "MY" | "TW" | "PH" | "BR";
        /**
         * Page number starting at 1. Omit for the first page; page sizes are determined by Sorftime.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Narrow the trending list to this keyword.
         * @minLength 1
         * @pattern \S
         */
        query?: string;
        /**
         * Minimum monthly search rank, inclusive.
         * @exclusiveMinimum 0
         */
        minRank?: number;
        /**
         * Maximum monthly search rank, inclusive.
         * @exclusiveMinimum 0
         */
        maxRank?: number;
        /**
         * Minimum monthly search volume, inclusive.
         * @minimum 0
         */
        minSearchVolume?: number;
        /**
         * Maximum monthly search volume, inclusive.
         * @minimum 0
         */
        maxSearchVolume?: number;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Find Shopee products by name. */
    "sorftime_mcp.shopee_search_products": {
      input: {
        /** Shopee marketplace region. */
        site: "VN" | "ID" | "SG" | "TH" | "MY" | "TW" | "PH" | "BR";
        /**
         * Product name or search phrase.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * Page number starting at 1. Omit for the first page; page sizes are determined by Sorftime.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Inspect one Temu product using its ID from temu_search_products. */
    "sorftime_mcp.temu_get_product": {
      input: {
        /** Temu marketplace region. */
        site: "US" | "EU";
        /**
         * Product identifier returned by the platform's product search.
         * @minLength 1
         * @pattern \S
         */
        productId: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Inspect historical Temu product performance. Returns available dimensions together. Ranges beyond one year cost 10 credits. */
    "sorftime_mcp.temu_get_product_trend": {
      input: {
        /** Temu marketplace region. */
        site: "US" | "EU";
        /**
         * Product identifier returned by the platform's product search.
         * @minLength 1
         * @pattern \S
         */
        productId: string;
        /**
         * Start of the historical range. Omit for the provider's default range.
         * @format date
         */
        startDate?: string;
        /**
         * End of the historical range. Omit for the latest available data.
         * @format date
         */
        endDate?: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Browse Temu categories. Omit parentId for the top levels, then pass a returned category ID to explore its children. */
    "sorftime_mcp.temu_list_categories": {
      input: {
        /** Temu marketplace region. */
        site: "US" | "EU";
        /**
         * Parent category identifier. Omit to start at the top of the category tree.
         * @minLength 1
         * @pattern \S
         */
        parentId?: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Find best-selling products in a Temu category. */
    "sorftime_mcp.temu_list_category_products": {
      input: {
        /** Temu marketplace region. */
        site: "US" | "EU";
        /**
         * Category identifier returned by the platform's category tree; use a leaf category for reports.
         * @minLength 1
         * @pattern \S
         */
        categoryId: string;
        /**
         * Page number starting at 1. Omit for the first page; page sizes are determined by Sorftime.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Find Temu products by name. */
    "sorftime_mcp.temu_search_products": {
      input: {
        /** Temu marketplace region. */
        site: "US" | "EU";
        /**
         * Product name or search phrase.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * Page number starting at 1. Omit for the first page; page sizes are determined by Sorftime.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Research a TikTok category market using a category ID from tiktok_list_categories. */
    "sorftime_mcp.tiktok_get_category_report": {
      input: {
        /** TikTok marketplace region. GB denotes the United Kingdom. */
        site: "US" | "MY" | "PH" | "VN" | "TH" | "ID" | "GB" | "JP";
        /**
         * Category identifier returned by the platform's category tree; use a leaf category for reports.
         * @minLength 1
         * @pattern \S
         */
        categoryId: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Inspect one TikTok product using its ID from tiktok_search_products. */
    "sorftime_mcp.tiktok_get_product": {
      input: {
        /** TikTok marketplace region. GB denotes the United Kingdom. */
        site: "US" | "MY" | "PH" | "VN" | "TH" | "ID" | "GB" | "JP";
        /**
         * Product identifier returned by the platform's product search.
         * @minLength 1
         * @pattern \S
         */
        productId: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Inspect historical TikTok product performance. Returns available dimensions together. */
    "sorftime_mcp.tiktok_get_product_trend": {
      input: {
        /** TikTok marketplace region. GB denotes the United Kingdom. */
        site: "US" | "MY" | "PH" | "VN" | "TH" | "ID" | "GB" | "JP";
        /**
         * Product identifier returned by the platform's product search.
         * @minLength 1
         * @pattern \S
         */
        productId: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Browse TikTok categories. Omit parentId for the top levels, then pass a returned category ID to explore its children. */
    "sorftime_mcp.tiktok_list_categories": {
      input: {
        /** TikTok marketplace region. GB denotes the United Kingdom. */
        site: "US" | "MY" | "PH" | "VN" | "TH" | "ID" | "GB" | "JP";
        /**
         * Parent category identifier. Omit to start at the top of the category tree.
         * @minLength 1
         * @pattern \S
         */
        parentId?: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Find TikTok products by name. */
    "sorftime_mcp.tiktok_search_products": {
      input: {
        /** TikTok marketplace region. GB denotes the United Kingdom. */
        site: "US" | "MY" | "PH" | "VN" | "TH" | "ID" | "GB" | "JP";
        /**
         * Product name or search phrase. For all_words/any_word modes, separate keywords with commas.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * Page number starting at 1. Omit for the first page; page sizes are determined by Sorftime.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** TikTok product title matching mode; defaults to semantic search. */
        match?: "semantic" | "all_words" | "any_word" | "exact";
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Expand a Walmart US keyword into related and long-tail search terms. */
    "sorftime_mcp.walmart_find_related_keywords": {
      input: {
        /**
         * Keyword to research.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
        /**
         * Page number starting at 1. Omit for the first page; page sizes are determined by Sorftime.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Research a Walmart US category market using a category ID from walmart_list_categories. */
    "sorftime_mcp.walmart_get_category_report": {
      input: {
        /**
         * Category identifier returned by the platform's category tree; use a leaf category for reports.
         * @minLength 1
         * @pattern \S
         */
        categoryId: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Inspect demand for a specific Walmart US keyword. */
    "sorftime_mcp.walmart_get_keyword": {
      input: {
        /**
         * Keyword to research.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Inspect one Walmart US product using its ID from walmart_search_products. */
    "sorftime_mcp.walmart_get_product": {
      input: {
        /**
         * Product identifier returned by the platform's product search.
         * @minLength 1
         * @pattern \S
         */
        productId: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Inspect historical Walmart US product performance. Select one metric. */
    "sorftime_mcp.walmart_get_product_trend": {
      input: {
        /**
         * Product identifier returned by the platform's product search.
         * @minLength 1
         * @pattern \S
         */
        productId: string;
        /** Historical metric to query. */
        metric: "sales_volume" | "sales_amount" | "price" | "rank" | "reviews" | "rating";
        /**
         * Start of the historical range. Omit for the provider's default range.
         * @format date
         */
        startDate?: string;
        /**
         * End of the historical range. Omit for the latest available data.
         * @format date
         */
        endDate?: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Browse Walmart US categories. Omit parentId for the top levels, then pass a returned category ID to explore its children. */
    "sorftime_mcp.walmart_list_categories": {
      input: {
        /**
         * Parent category identifier. Omit to start at the top of the category tree.
         * @minLength 1
         * @pattern \S
         */
        parentId?: string;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Discover Walmart US keywords ranked by monthly search volume. Requires minRank and maxRank. */
    "sorftime_mcp.walmart_list_keywords": {
      input: {
        /**
         * Page number starting at 1. Omit for the first page; page sizes are determined by Sorftime.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Minimum monthly search rank, inclusive.
         * @exclusiveMinimum 0
         */
        minRank: number;
        /**
         * Maximum monthly search rank, inclusive.
         * @exclusiveMinimum 0
         */
        maxRank: number;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
    /** Find Walmart US products by name. */
    "sorftime_mcp.walmart_search_products": {
      input: {
        /**
         * Product name or search phrase.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * Page number starting at 1. Omit for the first page; page sizes are determined by Sorftime.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Decoded research result. Product and category fields remain provider-defined; plain text and non-text content are preserved when returned. */
        data: unknown;
        /** Sorftime's field documentation, including units and sentinel values, or null when absent. */
        fieldDescriptions: unknown;
        /** Additional response fields supplied by Sorftime. */
        metadata: Record<string, unknown>;
      };
    };
  }
}
