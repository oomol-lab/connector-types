import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Find related Amazon keywords from a seed keyword through Sorftime. Consumes five Sorftime requests. */
    "sorftime.extend_keywords": {
      input: {
        /** Amazon marketplace domain code supported by this keyword endpoint. Defaults to 1 (US). */
        domain?: 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
        /**
         * Seed Amazon keyword used to find related keywords.
         * @minLength 1
         */
        keyword: string;
        /**
         * One-based result page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * Number of keyword results per page. Defaults to 20.
         * @minimum 20
         * @maximum 200
         */
        page_size?: number;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get up to two years of US Amazon rankings for an ASIN and keyword through Sorftime. Returns 200 records per page and consumes two Sorftime requests. */
    "sorftime.get_asin_keyword_rankings": {
      input: {
        /**
         * Amazon keyword to query.
         * @minLength 1
         */
        keyword: string;
        /**
         * A single Amazon ASIN.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
        /**
         * Ranking history range start date in YYYY-MM-DD format.
         * @format date
         */
        query_start?: string;
        /**
         * Ranking history range end date in YYYY-MM-DD format.
         * @format date
         */
        query_end?: string;
        /**
         * One-based result page number. Defaults to 1.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get current or historical Sorftime estimated sales for one Amazon ASIN. Consumes one Sorftime request. */
    "sorftime.get_asin_sales_history": {
      input: {
        /**
         * Amazon marketplace domain code: 1=US, 2=UK, 3=DE, 4=FR, 5=IN, 6=CA, 7=JP, 8=ES, 9=IT, 10=MX, 11=AE, 12=AU, 13=BR, or 14=SA. Defaults to 1 (US).
         * @minimum 1
         * @maximum 14
         */
        domain?: number;
        /**
         * A single Amazon ASIN.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
        /**
         * One-based result page number. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Sales history range start date in YYYY-MM-DD format.
         * @format date
         */
        query_start_date?: string;
        /**
         * Sales history range end date in YYYY-MM-DD format. Requires query_start_date.
         * @format date
         */
        query_end_date?: string;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get the current or historical Amazon Best Seller Top 100 products for a category through Sorftime. Consumes five requests; historical lookup costs ten requests per three-day block. */
    "sorftime.get_category_best_sellers": {
      input: {
        /**
         * Amazon marketplace domain code: 1=US, 2=UK, 3=DE, 4=FR, 5=IN, 6=CA, 7=JP, 8=ES, 9=IT, 10=MX, 11=AE, 12=AU, 13=BR, or 14=SA. Defaults to 1 (US).
         * @minimum 1
         * @maximum 14
         */
        domain?: number;
        /**
         * Amazon category NodeId.
         * @minLength 1
         */
        node_id: string;
        /**
         * Historical range start date in YYYY-MM-DD format. Historical ranges must span 3 to 40 days.
         * @format date
         */
        query_start?: string;
        /**
         * Historical range end date in YYYY-MM-DD format. Historical data is available through two days before today.
         * @format date
         */
        query_date?: string;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get up to two years of a selected Sorftime Amazon category market trend. Consumes five Sorftime requests. */
    "sorftime.get_category_trend": {
      input: {
        /**
         * Amazon marketplace domain code: 1=US, 2=UK, 3=DE, 4=FR, 5=IN, 6=CA, 7=JP, 8=ES, 9=IT, 10=MX, 11=AE, 12=AU, 13=BR, or 14=SA. Defaults to 1 (US).
         * @minimum 1
         * @maximum 14
         */
        domain?: number;
        /**
         * Amazon category NodeId.
         * @minLength 1
         */
        node_id: string;
        /**
         * Sorftime category trend metric index from 0 through 39, such as 0 for sales, 1 for brand count, or 2 for seller count.
         * @minimum 0
         * @maximum 39
         */
        trend_index: number;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get the current Sorftime credit balance. Consumes one Sorftime request. */
    "sorftime.get_credit_balance": {
      input: Record<string, never>;
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get Sorftime Amazon keyword details including search volume, conversion, competition, and CPC trends. Consumes one Sorftime request. */
    "sorftime.get_keyword_details": {
      input: {
        /** Amazon marketplace domain code supported by this keyword endpoint. Defaults to 1 (US). */
        domain?: 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
        /**
         * Amazon keyword to query.
         * @minLength 1
         */
        keyword: string;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** List products ranked for an Amazon keyword through Sorftime. Returns 200 products per page and consumes five Sorftime requests. */
    "sorftime.get_keyword_product_rankings": {
      input: {
        /** Amazon marketplace domain code supported by this keyword endpoint. Defaults to 1 (US). */
        domain?: 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
        /**
         * Amazon keyword to query.
         * @minLength 1
         */
        keyword: string;
        /**
         * Month in YYYY-MM format.
         * @minLength 1
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        month?: string;
        /**
         * One-based result page number. Defaults to 1.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get monthly Amazon search-result trends for a keyword through Sorftime. Consumes ten Sorftime requests. */
    "sorftime.get_keyword_search_result_trend": {
      input: {
        /** Amazon marketplace domain code supported by the keyword search-result trend endpoint. Defaults to 1 (US). */
        domain?: 1 | 2 | 3 | 6 | 7 | 8 | 10 | 11 | 12 | 13 | 14;
        /**
         * Amazon keyword to query.
         * @minLength 1
         */
        keyword: string;
        /**
         * Month in YYYY-MM format.
         * @minLength 1
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        query_start?: string;
        /**
         * Month in YYYY-MM format.
         * @minLength 1
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        query_end?: string;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get Amazon products appearing in organic or advertising search results for a keyword through Sorftime. Consumes five Sorftime requests. */
    "sorftime.get_keyword_search_results": {
      input: {
        /** Amazon marketplace domain code supported by this keyword endpoint. Defaults to 1 (US). */
        domain?: 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
        /**
         * Amazon keyword to query.
         * @minLength 1
         */
        keyword: string;
        /** Search-result placement filter. Sorftime defaults to organic results. */
        position_type?: "all" | "organic" | "ad";
        /**
         * One-based result page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * Number of keyword results per page. Defaults to 20.
         * @minimum 20
         * @maximum 200
         */
        page_size?: number;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get Sorftime Amazon product details for one ASIN, optionally including price, rank, sales, and other historical trends. Consumes one request, or two for trend ranges longer than 15 days. */
    "sorftime.get_product_details": {
      input: {
        /**
         * Amazon marketplace domain code: 1=US, 2=UK, 3=DE, 4=FR, 5=IN, 6=CA, 7=JP, 8=ES, 9=IT, 10=MX, 11=AE, 12=AU, 13=BR, or 14=SA. Defaults to 1 (US).
         * @minimum 1
         * @maximum 14
         */
        domain?: number;
        /**
         * A single Amazon ASIN.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
        /**
         * Trend inclusion mode: 1 includes trend data and 2 excludes it. Sorftime defaults to 1.
         * @minimum 1
         * @maximum 2
         */
        trend?: number;
        /**
         * Start date for trend data in YYYY-MM-DD format. Requests longer than 15 days consume two requests.
         * @format date
         */
        query_trend_start_date?: string;
        /**
         * End date for trend data in YYYY-MM-DD format. Requires query_trend_start_date.
         * @format date
         */
        query_trend_end_date?: string;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get Sorftime's Amazon customer review summary for one ASIN. Consumes one Sorftime request. */
    "sorftime.get_product_review_summary": {
      input: {
        /**
         * Amazon marketplace domain code: 1=US, 2=UK, 3=DE, 4=FR, 5=IN, 6=CA, 7=JP, 8=ES, 9=IT, 10=MX, 11=AE, 12=AU, 13=BR, or 14=SA. Defaults to 1 (US).
         * @minimum 1
         * @maximum 14
         */
        domain?: number;
        /**
         * A single Amazon ASIN.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** List Amazon product variations through Sorftime, optionally including variation sales. Consumes one request, or two when sales are included. */
    "sorftime.get_product_variations": {
      input: {
        /**
         * Amazon marketplace domain code: 1=US, 2=UK, 3=DE, 4=FR, 5=IN, 6=CA, 7=JP, 8=ES, 9=IT, 10=MX, 11=AE, 12=AU, 13=BR, or 14=SA. Defaults to 1 (US).
         * @minimum 1
         * @maximum 14
         */
        domain?: number;
        /**
         * A single Amazon ASIN.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
        /**
         * One-based result page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /** Whether to include variation sales volume. Enabling it increases the cost from one to two requests. */
        include_sales_volume?: boolean;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** Get Sorftime monthly request purchases and consumption history without consuming a request. */
    "sorftime.get_request_usage": {
      input: Record<string, never>;
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** List Sorftime Amazon products in a category ordered by monthly sales. Returns 100 products per page and consumes five Sorftime requests. */
    "sorftime.list_category_products": {
      input: {
        /**
         * Amazon marketplace domain code: 1=US, 2=UK, 3=DE, 4=FR, 5=IN, 6=CA, 7=JP, 8=ES, 9=IT, 10=MX, 11=AE, 12=AU, 13=BR, or 14=SA. Defaults to 1 (US).
         * @minimum 1
         * @maximum 14
         */
        domain?: number;
        /**
         * Amazon category NodeId.
         * @minLength 1
         */
        node_id: string;
        /**
         * One-based result page number. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum category rank range to include.
         * @exclusiveMinimum 0
         */
        range?: number;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** List paginated Sorftime credit usage records for Amazon, Shopee, or Walmart. Consumes one Sorftime request. */
    "sorftime.list_credit_usage": {
      input: {
        /** Platform whose credit usage should be returned. Defaults to Amazon. */
        platform?: "amazon" | "shopee" | "walmart";
        /**
         * Credit usage range start date in YYYY-MM-DD format. Requires query_end_date.
         * @format date
         */
        query_start_date?: string;
        /**
         * Credit usage range end date in YYYY-MM-DD format. Requires query_start_date.
         * @format date
         */
        query_end_date?: string;
        /**
         * One-based result page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * Number of credit usage records per page. Defaults to 20.
         * @minimum 1
         * @maximum 200
         */
        page_size?: number;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** List Sorftime Amazon product review records with rating and verified-purchase filters. Returns 100 records per page and consumes five Sorftime requests. */
    "sorftime.list_product_reviews": {
      input: {
        /**
         * Amazon marketplace domain code: 1=US, 2=UK, 3=DE, 4=FR, 5=IN, 6=CA, 7=JP, 8=ES, 9=IT, 10=MX, 11=AE, 12=AU, 13=BR, or 14=SA. Defaults to 1 (US).
         * @minimum 1
         * @maximum 14
         */
        domain?: number;
        /**
         * A single Amazon ASIN.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
        /**
         * Earliest review date in YYYY-MM-DD format.
         * @format date
         */
        query_start_date?: string;
        /**
         * One-based result page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * Review sentiment or star filters. Values 1 through 5 select stars, 10 selects negative reviews, and 11 selects positive reviews.
         * @minItems 1
         */
        stars?: Array<1 | 2 | 3 | 4 | 5 | 10 | 11>;
        /** Whether to return only verified-purchase reviews. */
        verified_purchase_only?: boolean;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** Find Amazon keywords that exposed an ASIN in the first three search-result pages during the last 30 days through Sorftime. Consumes one Sorftime request. */
    "sorftime.reverse_lookup_asin_keywords": {
      input: {
        /** Amazon marketplace domain code supported by this keyword endpoint. Defaults to 1 (US). */
        domain?: 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
        /**
         * A single Amazon ASIN.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
        /**
         * One-based result page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * Number of keyword results per page. Defaults to 20.
         * @minimum 20
         * @maximum 200
         */
        page_size?: number;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** Find Amazon keywords associated with a leaf category through Sorftime. Consumes one Sorftime request. */
    "sorftime.reverse_lookup_category_keywords": {
      input: {
        /** Amazon marketplace domain code supported by this keyword endpoint. Defaults to 1 (US). */
        domain?: 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
        /**
         * Amazon leaf-category NodeId.
         * @minLength 1
         */
        node_id: string;
        /**
         * One-based result page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * Number of keyword results per page. Defaults to 20.
         * @minimum 20
         * @maximum 200
         */
        page_size?: number;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Amazon category markets by natural-language name through Sorftime and return matching NodeIds. Consumes one Sorftime request. */
    "sorftime.search_categories_by_name": {
      input: {
        /**
         * Amazon marketplace domain code: 1=US, 2=UK, 3=DE, 4=FR, 5=IN, 6=CA, 7=JP, 8=ES, 9=IT, 10=MX, 11=AE, 12=AU, 13=BR, or 14=SA. Defaults to 1 (US).
         * @minimum 1
         * @maximum 14
         */
        domain?: number;
        /**
         * Category name or phrase to search for.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search and filter the Sorftime Amazon keyword database. Consumes five Sorftime requests. */
    "sorftime.search_keywords": {
      input: {
        /** Amazon marketplace domain code supported by this keyword endpoint. Defaults to 1 (US). */
        domain?: 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
        /**
         * Keyword text to search for.
         * @minLength 1
         */
        keyword: string;
        /**
         * Amazon category NodeIds used to narrow the keyword search.
         * @minItems 1
         */
        node_ids?: Array<string>;
        /**
         * Sorftime keyword rank range with one or two values.
         * @minItems 1
         * @maxItems 2
         */
        rank_condition?: Array<string>;
        /**
         * Sorftime keyword search-volume range with one or two values.
         * @minItems 1
         * @maxItems 2
         */
        search_volume_condition?: Array<string>;
        /**
         * Sorftime weekly rank-change range followed by sort direction 1 for rising or 2 for falling.
         * @minItems 3
         * @maxItems 3
         */
        weekly_rank_change_condition?: [string, string, "1" | "2"];
        /**
         * Historical query selector formatted as 1,YYYY-MM-DD for weekly data or 2,YYYY-MM for monthly data.
         * @minLength 1
         */
        history?: string;
        /**
         * One-based result page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * Number of keyword results per page. Defaults to 20.
         * @minimum 20
         * @maximum 200
         */
        page_size?: number;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search and filter the Sorftime Amazon product database. Returns up to 100 products per page and consumes five Sorftime requests. */
    "sorftime.search_products": {
      input: {
        /**
         * Amazon marketplace domain code: 1=US, 2=UK, 3=DE, 4=FR, 5=IN, 6=CA, 7=JP, 8=ES, 9=IT, 10=MX, 11=AE, 12=AU, 13=BR, or 14=SA. Defaults to 1 (US).
         * @minimum 1
         * @maximum 14
         */
        domain?: number;
        /**
         * Month in YYYY-MM format.
         * @minLength 1
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        query_month?: string;
        /**
         * One-based result page number. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * A single Amazon ASIN.
         * @minLength 10
         * @maxLength 10
         */
        asin?: string;
        /**
         * Amazon category NodeId.
         * @minLength 1
         */
        node_id?: string;
        /**
         * Product brand name.
         * @minLength 1
         */
        brand?: string;
        /**
         * Seller display name.
         * @minLength 1
         */
        seller_name?: string;
        /**
         * Amazon seller identifier.
         * @minLength 1
         */
        seller_id?: string;
        /**
         * Keyword that should match the product.
         * @minLength 1
         */
        keyword?: string;
        /**
         * Product attribute name to match.
         * @minLength 1
         */
        attribute_name?: string;
        /**
         * Peak-selling calendar months from 1 through 12.
         * @minItems 1
         * @maxItems 12
         */
        peak_selling_months?: Array<number>;
        /**
         * Sorftime shipping type filter.
         * @minLength 1
         */
        shipping_type?: string;
        /** Minimum product price. */
        price_min?: number;
        /** Maximum product price. */
        price_max?: number;
        /**
         * Minimum estimated monthly sales volume.
         * @minimum 0
         */
        monthly_sales_min?: number;
        /**
         * Maximum estimated monthly sales volume.
         * @minimum 0
         */
        monthly_sales_max?: number;
        /**
         * Earliest product listing date in YYYY-MM-DD format.
         * @format date
         */
        listed_from?: string;
        /**
         * Latest product listing date in YYYY-MM-DD format.
         * @format date
         */
        listed_to?: string;
        /**
         * Minimum product rating.
         * @minimum 0
         * @maximum 5
         */
        rating_min?: number;
        /**
         * Maximum product rating.
         * @minimum 0
         * @maximum 5
         */
        rating_max?: number;
        /**
         * Minimum product review count.
         * @minimum 0
         */
        reviews_min?: number;
        /**
         * Maximum product review count.
         * @minimum 0
         */
        reviews_max?: number;
        /**
         * Minimum subcategory rank.
         * @minimum 0
         */
        subcategory_rank_min?: number;
        /**
         * Maximum subcategory rank.
         * @minimum 0
         */
        subcategory_rank_max?: number;
        /**
         * Minimum variation count.
         * @minimum 0
         */
        variation_count_min?: number;
        /**
         * Maximum variation count.
         * @minimum 0
         */
        variation_count_max?: number;
        /**
         * Minimum category rank.
         * @minimum 0
         */
        category_rank_min?: number;
        /**
         * Maximum category rank.
         * @minimum 0
         */
        category_rank_max?: number;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Amazon products by name through Sorftime and return product research results. Consumes two Sorftime requests. */
    "sorftime.search_products_by_name": {
      input: {
        /**
         * Amazon marketplace domain code: 1=US, 2=UK, 3=DE, 4=FR, 5=IN, 6=CA, 7=JP, 8=ES, 9=IT, 10=MX, 11=AE, 12=AU, 13=BR, or 14=SA. Defaults to 1 (US).
         * @minimum 1
         * @maximum 14
         */
        domain?: number;
        /**
         * Product name or phrase to search for.
         * @minLength 1
         */
        name: string;
        /**
         * One-based result page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
      };
      output: {
        /**
         * Number of API requests remaining for the account.
         * @minimum 0
         */
        RequestLeft: number;
        /**
         * Number of requests consumed by this call.
         * @minimum 0
         */
        RequestConsumed: number;
        /** Sorftime business status code. Zero indicates success. */
        Code: 0;
        /** Sorftime status message, or null when none is returned. */
        Message: string | null;
        /** Endpoint-specific structured data returned by Sorftime. */
        Data: unknown;
        [key: string]: unknown;
      };
    };
  }
}
