import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search Airbnb stays by destination and dates. */
    "litescrape.airbnb_search": {
      input: {
        /**
         * Destination, address, or landmark.
         * @maxLength 500
         */
        q?: string | null;
        /** North,east,south,west map coordinates. */
        map_bounds?: string | null;
        /** Airbnb localization domain. */
        airbnb_domain?: string;
        /** Currency code for returned prices. */
        currency?: string | null;
        /**
         * Check-in date in YYYY-MM-DD format.
         * @format date
         */
        check_in_date?: string | null;
        /**
         * Check-out date, later than check-in.
         * @format date
         */
        check_out_date?: string | null;
        /**
         * Number of guests aged 13 or above.
         * @minimum 0
         */
        adults?: number | null;
        /**
         * Number of guests aged 2 to 12.
         * @minimum 0
         */
        children?: number | null;
        /**
         * Number of guests under 2.
         * @minimum 0
         */
        infants?: number | null;
        /**
         * Number of pets.
         * @minimum 0
         */
        pets?: number | null;
        /** Type of place. */
        room_type?: "entire_home" | "private_room" | null;
        /**
         * Minimum total trip price including fees.
         * @minimum 0
         */
        min_price?: number | null;
        /**
         * Maximum total trip price including fees.
         * @minimum 0
         */
        max_price?: number | null;
        /**
         * Minimum bedrooms.
         * @minimum 0
         */
        bedrooms?: number | null;
        /**
         * Minimum beds.
         * @minimum 0
         */
        beds?: number | null;
        /**
         * Minimum bathrooms.
         * @minimum 0
         */
        bathrooms?: number | null;
        /** Comma-separated property types. */
        property_types?: string | null;
        /** Comma-separated required amenities. */
        amenities?: string | null;
        /** Comma-separated accessibility features. */
        accessibility_features?: string | null;
        /** Comma-separated host language codes. */
        host_languages?: string | null;
        /** Require instant booking. */
        instant_book?: boolean;
        /** Require self check-in. */
        self_check_in?: boolean;
        /** Only Guest favorites. */
        guest_favorite?: boolean;
        /** Only Airbnb Luxe places. */
        luxe?: boolean;
        /**
         * Results page, from 1 to 15.
         * @minimum 1
         * @maximum 15
         */
        page?: number;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** organic results value. */
        organic_results?: Array<Record<string, unknown>>;
        /** pagination value. */
        pagination?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get an AliExpress product's details and price. This upstream API is Alpha. */
    "litescrape.aliexpress_product": {
      input: {
        /**
         * Public HTTPS product URL on this retailer's site.
         * @minLength 1
         * @maxLength 4096
         */
        url: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** product value. */
        product?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search AliExpress products with prices. This upstream API is Alpha. */
    "litescrape.aliexpress_search": {
      input: {
        /**
         * Product keywords to search for.
         * @minLength 1
         * @maxLength 500
         */
        query: string;
        /**
         * One-based result page.
         * @minimum 1
         * @maximum 100
         */
        page?: number;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** products value. */
        products?: Array<Record<string, unknown>>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get Amazon search suggestions for a prefix and department. This upstream API is Alpha. */
    "litescrape.amazon_autocomplete": {
      input: {
        /** Amazon storefront hostname. */
        amazon_domain?: string;
        /**
         * Partial search text to complete.
         * @minLength 1
         */
        k: string;
        /**
         * Department alias used to narrow suggestions; aps searches all departments.
         * @minLength 1
         * @pattern ^[a-zA-Z0-9_-]+$
         */
        amazon_department?: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** suggestions value. */
        suggestions?: Array<Record<string, unknown>> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get the featured reviews for an Amazon product. This upstream API is Alpha. */
    "litescrape.amazon_featured_reviews": {
      input: {
        /**
         * Ten-character product ASIN in the selected Amazon storefront.
         *
         * Amazon chooses review order. Sorting, star filters and verified-purchase filters are not supported.
         * @pattern ^[A-Z0-9]{10}$
         */
        asin: string;
        /**
         * Amazon storefront hostname. Omit for amazon.com. Supported on 23 storefronts; amazon.cn is not supported.
         *
         * Use an ASIN available in the selected storefront. Featured reviews can include international reviews. If featured reviews are unavailable, the request returns a failure rather than an empty review list.
         */
        amazon_domain?: "amazon.ae" | "amazon.ca" | "amazon.co.jp" | "amazon.co.uk" | "amazon.co.za" | "amazon.com" | "amazon.com.au" | "amazon.com.be" | "amazon.com.br" | "amazon.com.mx" | "amazon.com.tr" | "amazon.de" | "amazon.eg" | "amazon.es" | "amazon.fr" | "amazon.ie" | "amazon.in" | "amazon.it" | "amazon.nl" | "amazon.pl" | "amazon.sa" | "amazon.se" | "amazon.sg" | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** source value. */
        source?: "amazon.ae" | "amazon.ca" | "amazon.co.jp" | "amazon.co.uk" | "amazon.co.za" | "amazon.com" | "amazon.com.au" | "amazon.com.be" | "amazon.com.br" | "amazon.com.mx" | "amazon.com.tr" | "amazon.de" | "amazon.eg" | "amazon.es" | "amazon.fr" | "amazon.ie" | "amazon.in" | "amazon.it" | "amazon.nl" | "amazon.pl" | "amazon.sa" | "amazon.se" | "amazon.sg";
        /** asin value. */
        asin?: string;
        /** view value. */
        view?: "featured";
        /** coverage value. */
        coverage?: "featured";
        /** reviews value. */
        reviews?: Array<Record<string, unknown>>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get Amazon reviews that include photos or videos. This upstream API is Alpha. */
    "litescrape.amazon_media_reviews": {
      input: {
        /**
         * Ten-character product ASIN in the selected Amazon storefront. Required for the first page.
         * @pattern ^[A-Z0-9]{10}$
         */
        asin?: string | null;
        /**
         * Amazon storefront hostname. Omit for amazon.com. Supported on 23 storefronts; amazon.cn is not supported. Send page_token alone on continuation.
         *
         * Use an ASIN available in the selected storefront. Only reviews containing the selected media are returned. Review availability varies by storefront, product and request.
         */
        amazon_domain?: "amazon.ae" | "amazon.ca" | "amazon.co.jp" | "amazon.co.uk" | "amazon.co.za" | "amazon.com" | "amazon.com.au" | "amazon.com.be" | "amazon.com.br" | "amazon.com.mx" | "amazon.com.tr" | "amazon.de" | "amazon.eg" | "amazon.es" | "amazon.fr" | "amazon.ie" | "amazon.in" | "amazon.it" | "amazon.nl" | "amazon.pl" | "amazon.sa" | "amazon.se" | "amazon.sg" | null;
        /**
         * Media filter: media (default) for images and videos, images, or videos. Only reviews containing the selected media are returned.
         *
         * Amazon chooses review order. Sorting, star filters and verified-purchase filters are not supported.
         */
        view?: "media" | "images" | "videos" | null;
        /**
         * Opaque continuation from pagination.next_page_token. Send it alone to fetch the next media-review page.
         *
         * Pages can repeat a review when its media spans pages. Deduplicate by review id. If media reviews are unavailable, the request returns a failure rather than an empty review list.
         * @minLength 5
         * @maxLength 8196
         * @pattern ^ar1\.[A-Za-z0-9_-]+$
         */
        page_token?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** source value. */
        source?: "amazon.ae" | "amazon.ca" | "amazon.co.jp" | "amazon.co.uk" | "amazon.co.za" | "amazon.com" | "amazon.com.au" | "amazon.com.be" | "amazon.com.br" | "amazon.com.mx" | "amazon.com.tr" | "amazon.de" | "amazon.eg" | "amazon.es" | "amazon.fr" | "amazon.ie" | "amazon.in" | "amazon.it" | "amazon.nl" | "amazon.pl" | "amazon.sa" | "amazon.se" | "amazon.sg";
        /** asin value. */
        asin?: string;
        /** view value. */
        view?: "media" | "images" | "videos";
        /** coverage value. */
        coverage?: "reviews_with_media";
        /** reviews value. */
        reviews?: Array<Record<string, unknown>>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get an Amazon product page, with optional seller offers. This upstream API is Alpha. */
    "litescrape.amazon_product": {
      input: {
        /** Amazon storefront hostname. */
        amazon_domain?: string;
        /**
         * Storefront locale, such as en_US or ja_JP.
         * @pattern ^[a-z]{2}_[A-Z]{2}$
         */
        language?: string | null;
        /**
         * Postal code used to determine delivery eligibility.
         * @minLength 1
         * @maxLength 32
         */
        delivery_zip?: string | null;
        /**
         * Two-letter destination country code.
         * @pattern ^[A-Z]{2}$
         */
        shipping_location?: string | null;
        /**
         * Ten-character Amazon product identifier.
         * @pattern ^[A-Z0-9]{10}$
         */
        asin: string;
        /** Fetch additional seller offers for this item. */
        other_sellers?: boolean;
        /** Fetch every page exposed by related-product carousels. */
        all_related_products?: boolean;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** product results value. */
        product_results?: Record<string, unknown> | null;
        /** about item value. */
        about_item?: Array<string> | null;
        /** product details value. */
        product_details?: Record<string, unknown> | null;
        /** related products value. */
        related_products?: Array<Record<string, unknown>> | null;
        /** other sellers value. */
        other_sellers?: Array<Record<string, unknown>> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Amazon products. This upstream API is Alpha. */
    "litescrape.amazon_search": {
      input: {
        /** Amazon storefront hostname. */
        amazon_domain?: string;
        /**
         * Storefront locale, such as en_US or ja_JP.
         * @pattern ^[a-z]{2}_[A-Z]{2}$
         */
        language?: string | null;
        /**
         * Postal code used to determine delivery eligibility.
         * @minLength 1
         * @maxLength 32
         */
        delivery_zip?: string | null;
        /**
         * Two-letter destination country code.
         * @pattern ^[A-Z]{2}$
         */
        shipping_location?: string | null;
        /**
         * Search words. Supply either k or node.
         * @minLength 1
         */
        k?: string | null;
        /**
         * Browse category ID. Supply either node or k.
         * @pattern ^[0-9]+$
         */
        node?: string | null;
        /** Ordering for the product listings. */
        s?: "relevanceblender" | "price-asc-rank" | "price-desc-rank" | "review-rank" | "date-desc-rank" | "exact-aware-popularity-rank";
        /** Comma-separated Amazon filter tokens, such as n:16318031,p_72:1248897011. */
        rh?: string | null;
        /** Keep results tied to the original spelling of the query. */
        dc?: boolean;
        /**
         * Result page to retrieve, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** search information value. */
        search_information?: Record<string, unknown> | null;
        /** organic results value. */
        organic_results?: Array<Record<string, unknown>> | null;
        /** product ads value. */
        product_ads?: Array<Record<string, unknown>> | null;
        /** pagination value. */
        pagination?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get an Apartments.com property by URL. This upstream API is Alpha. */
    "litescrape.apartments_property": {
      input: {
        /**
         * Apartments.com property URL ending in its seven-character listing ID, without query parameters.
         *
         * Alpha: availability may vary by location or property. Returns available fields for the requested property. Prices may represent a rental range. Bedroom-specific rents and total-monthly-price labels are preserved when present.
         * @maxLength 2048
         */
        url: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** property value. */
        property?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Apartments.com listings from a search URL. This upstream API is Alpha. */
    "litescrape.apartments_search": {
      input: {
        /**
         * Apartments.com location search URL, including any price, bedroom, amenity or page filters.
         *
         * Alpha: availability may vary by location or property. Use the site URL to set filters or select a page. Follow pagination.next when present. Page links and total counts are included when available. Prices may represent a rental range. Bedroom-specific rents and total-monthly-price labels are preserved when present.
         * @maxLength 4096
         */
        url: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** properties value. */
        properties?: Array<Record<string, unknown>>;
        /** search information value. */
        search_information?: Record<string, unknown>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get an App Store app's details, ratings and version history. */
    "litescrape.apple_app_store_product": {
      input: {
        /**
         * Two-letter Apple storefront country. UK is accepted as an alias for GB.
         * @pattern ^[a-zA-Z]{2}$
         */
        country?: string;
        /**
         * Positive decimal Apple app identifier, up to 20 digits.
         * @pattern ^[1-9][0-9]{0,19}$
         */
        product_id: string;
        /** App product type. Only app is supported. */
        type?: "app";
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** age rating value. */
        age_rating?: string | null;
        /** description value. */
        description?: string | null;
        /** developer value. */
        developer?: Record<string, unknown> | null;
        /** featured in value. */
        featured_in?: Array<Record<string, unknown>> | null;
        /** id value. */
        id?: string | null;
        /** in app purchases value. */
        in_app_purchases?: string | null;
        /** information value. */
        information?: Record<string, unknown> | null;
        /** ipad screenshots value. */
        ipad_screenshots?: Array<string> | null;
        /** iphone screenshots value. */
        iphone_screenshots?: Array<string> | null;
        /** logo value. */
        logo?: string | null;
        /** more by this developer value. */
        more_by_this_developer?: Record<string, unknown> | null;
        /** price value. */
        price?: string | null;
        /** privacy value. */
        privacy?: Record<string, unknown> | null;
        /** rating value. */
        rating?: number | null;
        /** rating count value. */
        rating_count?: string | null;
        /** ratings and reviews value. */
        ratings_and_reviews?: Record<string, unknown> | null;
        /** snippet value. */
        snippet?: string | null;
        /** title value. */
        title?: string | null;
        /** version history value. */
        version_history?: Array<Record<string, unknown>> | null;
        /** you may also like value. */
        you_may_also_like?: Record<string, unknown> | null;
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get reviews for an App Store app. */
    "litescrape.apple_app_store_reviews": {
      input: {
        /**
         * Two-letter Apple storefront country. UK is accepted as an alias for GB.
         * @pattern ^[a-zA-Z]{2}$
         */
        country?: string;
        /**
         * Positive decimal Apple app identifier, up to 20 digits.
         * @pattern ^[1-9][0-9]{0,19}$
         */
        product_id: string;
        /** mostrecent or mosthelpful. Apple's Mac storefront always returns newest first. */
        sort?: "mostrecent" | "mosthelpful";
        /**
         * One-based page number, from 1 through 2,147,483,647. Exhausted pages return an empty review list.
         * @minimum 1
         * @maximum 2147483647
         */
        page?: number;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** reviews value. */
        reviews?: Array<Record<string, unknown>> | null;
        /** search information value. */
        search_information?: Record<string, unknown> | null;
        /** raises value. */
        raises?: Record<string, unknown> | null;
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search the App Store for iPhone, iPad and Mac apps. */
    "litescrape.apple_app_store_search": {
      input: {
        /**
         * Two-letter Apple storefront country. UK is accepted as an alias for GB.
         * @pattern ^[a-zA-Z]{2}$
         */
        country?: string;
        /**
         * Search term with 1 to 2,048 UTF-8 bytes of printable text, and at most 4,096 bytes after URL encoding.
         * @minLength 1
         * @maxLength 2048
         */
        term: string;
        /**
         * Language-region code, such as en-us or fr-fr.
         * @pattern ^[a-zA-Z]{2,3}-[a-zA-Z]{2}$
         */
        lang?: string;
        /**
         * Maximum results after filtering, from 1 through 200.
         * @minimum 1
         * @maximum 200
         */
        num?: number;
        /** Exclude explicit results when true. */
        disallow_explicit?: boolean;
        /** Use developer to match developer names, ignoring case. */
        property?: "developer" | null;
        /**
         * Filter results by a native genre identifier, from 1 through 2,147,483,647.
         * @minimum 1
         * @maximum 2147483647
         */
        category_id?: number | null;
        /** mobile for iPhone apps, tablet for iPad apps, or desktop for Mac apps. */
        device?: "mobile" | "tablet" | "desktop";
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** organic results value. */
        organic_results?: Array<Record<string, unknown>> | null;
        /** search information value. */
        search_information?: Record<string, unknown> | null;
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Apple Maps places. */
    "litescrape.apple_maps_places": {
      input: {
        /**
         * One or more Apple Maps unique place identifiers.
         *
         * Separate multiple identifiers with commas. Accepted batch size: 1 through 50 unsigned 64-bit decimal IDs. Example: 4372355869446211302.
         */
        muid: string;
        /**
         * Controls Apple Maps language and regional formatting.
         *
         * Examples: en-US, fr-FR, ja-JP, and zh-TW.
         */
        locale?: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** place results value. */
        place_results?: Array<Record<string, unknown>> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get Apple ratings and reviews for an Apple Maps place. */
    "litescrape.apple_maps_reviews": {
      input: {
        /** Exactly one unsigned 64-bit decimal Apple Maps MUID. */
        muid: string;
        /** Apple Maps language and regional formatting. */
        locale?: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** search information value. */
        search_information?: Record<string, unknown> | null;
        /** place info value. */
        place_info?: Record<string, unknown> | null;
        /** reviews value. */
        reviews?: Array<Record<string, unknown>> | null;
        /** ratings value. */
        ratings?: Record<string, unknown> | null;
        /** rating summary value. */
        rating_summary?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search jobs on a company's Ashby job board. */
    "litescrape.ashby_search": {
      input: {
        /**
         * Case-insensitive phrase in title or description.
         * @minLength 1
         * @maxLength 512
         */
        q?: string | null;
        /**
         * One-based results page. Use next_page from the response to continue.
         * @minimum 1
         */
        page?: number;
        /**
         * Employer board name from jobs.ashbyhq.com/{board}, for example ashby.
         * @pattern ^[A-Za-z0-9][A-Za-z0-9_-]{0,127}$
         */
        board: string;
        /**
         * Case-insensitive phrase in primary or secondary locations.
         * @minLength 1
         * @maxLength 512
         */
        location?: string | null;
        /**
         * Case-insensitive department name.
         * @minLength 1
         * @maxLength 512
         */
        department?: string | null;
        /**
         * Exact team name, case-insensitive.
         * @minLength 1
         * @maxLength 512
         */
        team?: string | null;
        /** Employer's workplace type. */
        workplace_type?: "OnSite" | "Remote" | "Hybrid" | null;
        /**
         * Country from a primary or secondary postal address, for example USA. Exact case-insensitive match.
         * @minLength 1
         * @maxLength 512
         */
        country?: string | null;
        /**
         * State or province from a primary or secondary postal address. Exact case-insensitive match.
         * @minLength 1
         * @maxLength 512
         */
        region?: string | null;
        /**
         * City from a primary or secondary postal address. All supplied address filters must match the same address.
         * @minLength 1
         * @maxLength 512
         */
        city?: string | null;
        /** True selects remote jobs. False selects non-remote jobs. */
        remote?: boolean | null;
        /** Employment type. */
        employment_type?: "FullTime" | "PartTime" | "Intern" | "Contract" | "Temporary" | null;
        /**
         * Results per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Include published compensation tiers and salary ranges. */
        include_compensation?: boolean;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** jobs results value. */
        jobs_results?: Array<Record<string, unknown>>;
        /** search information value. */
        search_information?: Record<string, unknown>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /** litescrape pagination value. */
        litescrape_pagination?: Record<string, unknown>;
        /** available filters value. */
        available_filters?: Array<Record<string, unknown>> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get Baidu search results as JSON. */
    "litescrape.baidu_search": {
      input: {
        /**
         * Required search text, trimmed to 1 through 500 characters. Unicode queries are supported. Control characters are rejected.
         * @minLength 1
         * @maxLength 500
         */
        q: string;
        /**
         * Zero-based result offset from 0 through 750, not a page number. Use pagination.next_pn or litescrape_pagination.next to continue.
         * @minimum 0
         * @maximum 750
         */
        pn?: number;
        /** Requested result count: 10, 20, or 50. Defaults to 10. Baidu can return fewer web results when a page includes other result modules. */
        rn?: 10 | 20 | 50;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** organic results value. */
        organic_results?: Array<Record<string, unknown>>;
        /** search information value. */
        search_information?: Record<string, unknown>;
        /** related searches value. */
        related_searches?: Array<Record<string, unknown>> | null;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /** litescrape pagination value. */
        litescrape_pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Best Buy product's details, price and availability. This upstream API is Alpha. */
    "litescrape.bestbuy_product": {
      input: {
        /**
         * Public HTTPS product URL on this retailer's site.
         * @minLength 1
         * @maxLength 4096
         */
        url: string;
        /**
         * Retailer's store ID. Selects the store catalog, pricing or availability where the retailer exposes it.
         * @minLength 1
         * @maxLength 8
         * @pattern ^[0-9]{1,8}$
         */
        store_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** product value. */
        product?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Best Buy products with prices and availability. This upstream API is Alpha. */
    "litescrape.bestbuy_search": {
      input: {
        /**
         * Product keywords to search for.
         * @minLength 1
         * @maxLength 500
         */
        query: string;
        /**
         * One-based result page.
         * @minimum 1
         * @maximum 100
         */
        page?: number;
        /**
         * Retailer's store ID. Selects the store catalog, pricing or availability where the retailer exposes it.
         * @minLength 1
         * @maxLength 8
         * @pattern ^[0-9]{1,8}$
         */
        store_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** products value. */
        products?: Array<Record<string, unknown>>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Bing Images with size, color, date and license filters. */
    "litescrape.bing_images": {
      input: {
        /**
         * Image search query, from 1 through 2,048 characters after trimming. Control characters are rejected.
         * @minLength 1
         * @maxLength 2048
         */
        q: string;
        /**
         * One-based Bing result offset, from 1 through 10,000.
         *
         * Prefer litescrape_pagination.next when returned. Bing may reorder or repeat images between requests.
         * @minimum 1
         * @maximum 10000
         */
        first?: number;
        /**
         * Maximum images to return, from 1 through 100. Defaults to 35.
         *
         * Bing may return fewer images. Follow the pagination link to retrieve another batch.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /**
         * Optional language-country market, such as en-US. Cannot be combined with cc.
         * @pattern ^[a-zA-Z]{2}-[a-zA-Z]{2}$
         */
        mkt?: string | null;
        /**
         * Optional two-letter country code. Cannot be combined with mkt.
         * @pattern ^[a-zA-Z]{2}$
         */
        cc?: string | null;
        /**
         * Bing content filter: off, moderate, or strict. Case-insensitive; defaults to moderate.
         *
         * Bing may enforce stricter filtering for some markets.
         */
        safeSearch?: "off" | "moderate" | "strict";
        /** Bing image size bucket: small, medium, large or wallpaper (extra large). */
        imagesize?: "small" | "medium" | "large" | "wallpaper" | null;
        /** Photographs, clipart, line drawings, animated GIFs or images with transparent backgrounds. */
        photo?: "photo" | "clipart" | "linedrawing" | "animatedgif" | "transparent" | null;
        /** Filter to square, wide or tall images. */
        aspect?: "square" | "wide" | "tall" | null;
        /** Use color for any color, bw for black and white, or a dominant color: FGcls_RED, FGcls_ORANGE, FGcls_YELLOW, FGcls_GREEN, FGcls_TEAL, FGcls_BLUE, FGcls_PURPLE, FGcls_PINK, FGcls_BROWN, FGcls_BLACK, FGcls_GRAY or FGcls_WHITE. */
        color2?: "color" | "bw" | "FGcls_RED" | "FGcls_ORANGE" | "FGcls_YELLOW" | "FGcls_GREEN" | "FGcls_TEAL" | "FGcls_BLUE" | "FGcls_PURPLE" | "FGcls_PINK" | "FGcls_BROWN" | "FGcls_BLACK" | "FGcls_GRAY" | "FGcls_WHITE" | null;
        /** Use face for just faces or portrait for head-and-shoulders images. */
        face?: "face" | "portrait" | null;
        /** Bing date filter: lt1440 (past 24 hours), lt10080 (past week), lt43200 (past month) or lt525600 (past year). */
        age?: "lt1440" | "lt10080" | "lt43200" | "lt525600" | null;
        /**
         * Use creativecommons for all Creative Commons results, L1 for public domain, or native license categories L2 through L7. Bing also supports grouped categories.
         *
         * L2_L3_L4_L5_L6_L7: free to share and use. L2_L3_L4: free to share and use commercially. L2_L3_L5_L6: free to modify, share and use. L2_L3: free to modify, share and use commercially. Bing classifies usage rights; confirm the license on the source page before reusing an image.
         */
        license?: "L1" | "L2" | "L3" | "L4" | "L5" | "L6" | "L7" | "L2_L3" | "L2_L3_L4" | "L2_L3_L5_L6" | "L2_L3_L4_L5_L6_L7" | "creativecommons" | null;
        /**
         * Optional native Bing Images qft filter expression, up to 2,048 characters without control characters.
         *
         * Named image filters override the same category in qft and preserve unrelated categories. Without named filters, qft is passed through unchanged. Filter matching and availability are controlled by Bing.
         * @maxLength 2048
         */
        qft?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** images results value. */
        images_results?: Array<Record<string, unknown>>;
        /** pagination value. */
        pagination?: Record<string, unknown> | null;
        /** litescrape pagination value. */
        litescrape_pagination?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Bing Maps places, or get one place by ID. */
    "litescrape.bing_maps": {
      input: {
        /** Search query; required unless place_id is supplied. */
        q?: string | null;
        /** Native Bing Maps entity identifier for a detail lookup. */
        place_id?: string | null;
        /** Optional map center in latitude~longitude form. */
        cp?: string | null;
        /** Bing Maps interface language, such as en-US. */
        setlang?: string | null;
        /** Listing offset from 0 through 10,000. */
        first?: number;
        /** Number of listings from 1 through 30. */
        count?: number;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** local results value. */
        local_results?: Array<Record<string, unknown>> | null;
        /** place results value. */
        place_results?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Bing Shopping product's details using its product token. */
    "litescrape.bing_product": {
      input: {
        /**
         * Product token returned in shopping_results by the Bing Shopping API. Copy the complete token into this request; tokens from other providers are not interchangeable.
         * @minLength 1
         * @maxLength 24000
         */
        product_token: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** product results value. */
        product_results?: Record<string, unknown>;
        /** buying options value. */
        buying_options?: Array<Record<string, unknown>> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get Bing web search results. */
    "litescrape.bing_search": {
      input: {
        /**
         * Bing search query after trimming.
         *
         * Accepted length: 1 through 2,048 characters. Control characters are rejected. Bing query syntax such as quoted phrases and exclusions remains available.
         */
        q: string;
        /** Selects the Bing web-search engine. */
        engine?: "bing";
        /**
         * Named city-level origin used to localize the Bing request.
         *
         * Maximum length: 256 characters. Control characters are rejected.
         */
        location?: string | null;
        /**
         * Latitude from -90 through 90.
         *
         * May be supplied independently or with lon.
         */
        lat?: number | null;
        /**
         * Longitude from -180 through 180.
         *
         * May be supplied independently or with lat.
         */
        lon?: number | null;
        /**
         * Case-insensitive Bing language-country market token.
         *
         * Format: two-letter language and country, such as en-US. Cannot be combined with cc.
         */
        mkt?: string | null;
        /**
         * Case-insensitive two-letter country of origin.
         *
         * Format: US or GB. Cannot be combined with mkt.
         */
        cc?: string | null;
        /**
         * One-based native offset for organic results.
         *
         * Range: 1 through 9,007,199,254,740,991. Prefer litescrape_pagination.next when it is returned.
         */
        first?: number;
        /** Bing adult-content policy; values are case-insensitive. */
        safeSearch?: "off" | "moderate" | "strict";
        /**
         * Native Bing display or date filter expression.
         *
         * Maximum length: 8,192 characters. Control characters are rejected.
         */
        filters?: string | null;
        /** Selects desktop, tablet, or mobile result behavior. */
        device?: "desktop" | "tablet" | "mobile";
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** ads value. */
        ads?: Array<Record<string, unknown>> | null;
        /** inline videos value. */
        inline_videos?: Record<string, unknown> | null;
        /** litescrape pagination value. */
        litescrape_pagination?: Record<string, unknown> | null;
        /** organic results value. */
        organic_results?: Array<Record<string, unknown>> | null;
        /** pagination value. */
        pagination?: Record<string, unknown> | null;
        /** related searches value. */
        related_searches?: Array<Record<string, unknown>> | null;
        /** search information value. */
        search_information?: Record<string, unknown> | null;
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** knowledge graph value. */
        knowledge_graph?: Record<string, unknown> | null;
        /** knowledge graph list value. */
        knowledge_graph_list?: Array<Record<string, unknown>> | null;
        /** answer box value. */
        answer_box?: Record<string, unknown> | null;
        /** answer box list value. */
        answer_box_list?: Array<Record<string, unknown>> | null;
        /** carousel results value. */
        carousel_results?: Record<string, unknown> | null;
        /** copilot answer value. */
        copilot_answer?: Record<string, unknown> | null;
        /** coupons results value. */
        coupons_results?: Record<string, unknown> | null;
        /** events results value. */
        events_results?: Record<string, unknown> | null;
        /** inline images value. */
        inline_images?: Record<string, unknown> | null;
        /** inline shopping results value. */
        inline_shopping_results?: Array<Record<string, unknown>> | null;
        /** local map value. */
        local_map?: Record<string, unknown> | null;
        /** local results value. */
        local_results?: Record<string, unknown> | null;
        /** recipes results value. */
        recipes_results?: Record<string, unknown> | null;
        /** related questions value. */
        related_questions?: Array<Record<string, unknown>> | null;
        /** short videos value. */
        short_videos?: Array<Record<string, unknown>> | null;
        /** top shopping results value. */
        top_shopping_results?: Record<string, unknown> | null;
        /** top stories value. */
        top_stories?: Record<string, unknown> | null;
        /** top stories link value. */
        top_stories_link?: string | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Bing Shopping products. */
    "litescrape.bing_shopping": {
      input: {
        /**
         * Product search query, up to 2,048 characters with no control characters.
         * @minLength 1
         * @maxLength 2048
         */
        q: string;
        /**
         * Case-insensitive language-country market code, such as en-US. Supply either mkt or cc.
         * @pattern ^[A-Za-z]{2}-[A-Za-z]{2}$
         */
        mkt?: string | null;
        /**
         * Two-letter country code, such as us or gb. Supply either cc or mkt.
         * @pattern ^[A-Za-z]{2}$
         */
        cc?: string | null;
        /**
         * Nonnegative shopping result offset. For example, efirst=10 starts at the tenth shopping result.
         * @minimum 0
         */
        efirst?: number | null;
        /**
         * Bing Shopping filter expression, up to 6,000 characters. Copy filters from a Bing Shopping URL.
         * @maxLength 6000
         */
        filters?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** shopping results value. */
        shopping_results?: Array<Record<string, unknown>>;
        /** related searches value. */
        related_searches?: Array<Record<string, unknown>> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get Brave AI answers with citations. */
    "litescrape.brave_ai_mode": {
      input: {
        /**
         * City or postal code from the location catalog, such as Berlin, Germany or Austin, Texas, United States.
         *
         * Qualify ambiguous names with a state or country. Unknown locations fail; lat and lon take precedence when supplied together. On follow-ups, a supplied location replaces inherited coordinates. Send location: null in JSON to clear an inherited location. Resolved coordinates are returned in search_parameters.
         * @minLength 1
         * @maxLength 256
         */
        location?: string | null;
        /**
         * Latitude from -90 to 90. Supply with lon; explicit coordinates take precedence over location.
         * @minimum -90
         * @maximum 90
         */
        lat?: number | null;
        /**
         * Longitude from -180 to 180. Supply with lat.
         * @minimum -180
         * @maximum 180
         */
        lon?: number | null;
        /**
         * Two-letter country preference, or all for all regions. Brave determines regional availability.
         * @pattern ^(?:[a-z]{2}|all)$
         */
        country?: string;
        /**
         * Search language preference such as en, de or de-de. Brave also considers the language of your question when generating its answer.
         * @pattern ^[a-z]{2}(?:-[a-z]{2})?$
         */
        language?: string;
        /** Adult-content filtering preference: off, moderate or strict. */
        safeSearch?: "off" | "moderate" | "strict";
        /** Unit preference: us for US customary units or metric for metric units. */
        units_of_measurement?: "us" | "metric";
        /**
         * Question for Brave AI Mode. Required for both a new conversation and each follow-up.
         * @minLength 1
         * @maxLength 2048
         */
        q: string;
        /**
         * Token from the previous response. Send with a new q to continue that conversation.
         *
         * Omitted preferences carry over from the token; supplied preferences override them. Use the latest token returned by each successful response. Treat this token as a conversation credential and keep it private. Prefer JSON POST for follow-ups. Tokens expire after one hour and require the same API key and endpoint; omit the token to start again.
         * @minLength 1
         * @maxLength 4096
         * @pattern ^ct2_[A-Za-z0-9_-]{100,}$
         */
        continuation_token?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** answer value. */
        answer?: string;
        /** text blocks value. */
        text_blocks?: Array<Record<string, unknown>>;
        /** references value. */
        references?: Array<Record<string, unknown>>;
        /** follow up questions value. */
        follow_up_questions?: Array<string>;
        /** continuation token value. */
        continuation_token?: string;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get Brave web search results. */
    "litescrape.brave_search": {
      input: {
        /**
         * Search text. Brave query operators are supported; Brave may relax them when there are few matches.
         * @minLength 1
         * @maxLength 2048
         */
        q: string;
        /**
         * Zero-based page number, not a result offset. Follow litescrape_pagination.next when present.
         *
         * Results per page depend on Brave. Organic positions start at 1 within each page.
         * @minimum 0
         * @maximum 9
         */
        offset?: number;
        /**
         * Two-letter country preference, or all for all regions. Brave determines regional availability.
         * @pattern ^(?:[a-z]{2}|all)$
         */
        country?: string;
        /**
         * Interface language preference such as en-us or de-de. This does not restrict result languages.
         * @pattern ^[a-z]{2}(?:-[a-z]{2})?$
         */
        ui_lang?: string;
        /** Adult-content filtering preference. */
        safesearch?: "off" | "moderate" | "strict";
        /** Optional date window: pd for past day, pw for past week, pm for past month, py for past year. */
        tf?: "pd" | "pw" | "pm" | "py" | null;
        /** Allow Brave to correct the query spelling. */
        spellcheck?: boolean;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** organic results value. */
        organic_results?: Array<Record<string, unknown>>;
        /** search information value. */
        search_information?: Record<string, unknown>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /** litescrape pagination value. */
        litescrape_pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Text completions through Microsoft Copilot. This upstream API is Alpha. */
    "litescrape.copilot_chat_completions": {
      input: {
        /**
         * Text messages ending in a user message; at most 32,000 characters in total. Roles do not grant instruction priority.
         *
         * Each request starts a fresh conversation. Send prior messages again to include context. Supplied roles do not grant instruction priority.
         * @minItems 1
         * @maxItems 32
         */
        messages: Array<{
          /** Role in the supplied text transcript. */
          role: "system" | "user" | "assistant";
          /**
           * Nonblank text. Images, tool calls and other content parts are unsupported.
           * @minLength 1
           * @maxLength 32000
           */
          content: string;
        }>;
        /** Service identifier. Microsoft chooses the underlying model. */
        model?: "copilot";
        /**
         * Only a complete JSON response is supported; stream must be false.
         *
         * Streaming, tools, images, sampling settings and token usage are not supported.
         */
        stream?: false;
        /**
         * Two-letter country or territory code, normalized to uppercase. Sets Copilot's answer and search location to a representative populated place. Omit to use Copilot's default location.
         *
         * Supports the 213 country and territory codes listed in the parameter schema.
         */
        country?: "AE" | "AF" | "AI" | "AL" | "AM" | "AO" | "AR" | "AS" | "AT" | "AU" | "AW" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CV" | "CW" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GE" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GQ" | "GR" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IQ" | "IS" | "IT" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MD" | "ME" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PR" | "PS" | "PT" | "PW" | "PY" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SY" | "SZ" | "TD" | "TG" | "TH" | "TJ" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "US" | "UY" | "UZ" | "VE" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW" | null;
        /**
         * US postal state code (50 states or DC), normalized to uppercase. Requires country=US. Sets Copilot's location to the state capital.
         *
         * Requires country=US. Supports all 50 states and DC. Uses the state capital as the representative location for local answers and searches.
         */
        state?: "AK" | "AL" | "AR" | "AZ" | "CA" | "CO" | "CT" | "DC" | "DE" | "FL" | "GA" | "HI" | "IA" | "ID" | "IL" | "IN" | "KS" | "KY" | "LA" | "MA" | "MD" | "ME" | "MI" | "MN" | "MO" | "MS" | "MT" | "NC" | "ND" | "NE" | "NH" | "NJ" | "NM" | "NV" | "NY" | "OH" | "OK" | "OR" | "PA" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VA" | "VT" | "WA" | "WI" | "WV" | "WY" | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** id value. */
        id?: string;
        /** object value. */
        object?: "chat.completion";
        /** created value. */
        created?: number;
        /** model value. */
        model?: "copilot";
        /** choices value. */
        choices?: Array<Record<string, unknown>>;
        /** citations value. */
        citations?: Array<Record<string, unknown>>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Create a credit-purchase checkout URL. Payment completes only after opening and completing checkout. */
    "litescrape.create_checkout": {
      input: {
        /** Website return path. */
        return_path?: "/" | "/try/google-search";
      };
      output: Record<string, unknown>;
    };
    /** Disable automatic credit charges. */
    "litescrape.disable_auto_top_up": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Search DuckDuckGo Maps places within a map area. */
    "litescrape.duckduckgo_maps": {
      input: {
        /** Required place or category query, up to 500 characters. */
        q: string;
        /** Viewport rectangle as top,left,bottom,right. */
        bbox?: string | null;
        /** Viewport center latitude; requires lon. */
        lat?: number | null;
        /** Viewport center longitude; requires lat. */
        lon?: number | null;
        /** Exclude results outside the requested bounds. */
        strict_bbox?: boolean;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** local results value. */
        local_results?: Array<Record<string, unknown>> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get DuckDuckGo web search results. */
    "litescrape.duckduckgo_search": {
      input: {
        /** Required search text, up to 500 characters. */
        q: string;
        /** DuckDuckGo region and language token, such as us-en. */
        kl?: string | null;
        /** DuckDuckGo safe-search level. */
        safe?: "1" | "-1" | "-2";
        /** Date window: d, w, m, y, or YYYY-MM-DD..YYYY-MM-DD. */
        df?: string | null;
        /** Enable DuckDuckGo query assistance; mutually exclusive with m. */
        search_assist?: boolean;
        /** Result offset from 0 through 10,000. */
        start?: number;
        /** Requested result count from 1 through 50; mutually exclusive with search_assist. */
        m?: number;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** organic results value. */
        organic_results?: Array<Record<string, unknown>> | null;
        /** search information value. */
        search_information?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get an eBay listing by item ID. */
    "litescrape.ebay_product": {
      input: {
        /** eBay marketplace hostname. */
        ebay_domain?: "ebay.com" | "ebay.co.uk" | "ebay.ca" | "ebay.com.au" | "ebay.de" | "ebay.fr" | "ebay.it" | "ebay.es" | "ebay.at" | "ebay.be" | "ebay.ch" | "ebay.ie" | "ebay.nl" | "ebay.com.hk" | "ebay.com.my" | "ebay.pl" | "ebay.com.sg";
        /**
         * 12-digit eBay listing ID from search results or an /itm/ URL.
         * @pattern ^[0-9]{12}$
         */
        product_id: string;
        /** Country code for eBay's localized interface, e.g. US, JP, CA. */
        locale?: string | null;
        /**
         * Interface language override; requires locale and ebay.com.
         * @maxLength 12
         * @pattern ^[a-z]{2,3}(?:-[A-Za-z]{2,4})?$
         */
        lang?: string | null;
        /** Two-letter destination country code for shipping calculations. */
        shipping_country?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** product results value. */
        product_results?: Record<string, unknown>;
        /** seller results value. */
        seller_results?: Record<string, unknown> | null;
        /** related products value. */
        related_products?: Array<Record<string, unknown>> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search eBay listings by keyword or category. */
    "litescrape.ebay_search": {
      input: {
        /** eBay marketplace hostname. */
        ebay_domain?: "ebay.com" | "ebay.co.uk" | "ebay.ca" | "ebay.com.au" | "ebay.de" | "ebay.fr" | "ebay.it" | "ebay.es" | "ebay.at" | "ebay.be" | "ebay.ch" | "ebay.ie" | "ebay.nl" | "ebay.com.hk" | "ebay.com.my" | "ebay.pl" | "ebay.com.sg";
        /**
         * Search keywords. Required unless category_id is supplied.
         * @minLength 1
         * @maxLength 500
         */
        _nkw?: string | null;
        /**
         * eBay category ID.
         * @minimum 1
         * @maximum 2147483647
         */
        category_id?: number | null;
        /**
         * Result page, starting at 1.
         * @minimum 1
         * @maximum 2147483647
         */
        _pgn?: number;
        /** Requested results per page. eBay may adjust the page size. */
        _ipg?: 25 | 50 | 100 | 200;
        /** Sort: 12 best match, 1 ending soonest, 10 newly listed, 7 nearest, 15/16 total price ascending/descending, 2/3 item price ascending/descending, 18/19 condition new/used first. Availability depends on marketplace. */
        _sop?: 1 | 2 | 3 | 7 | 10 | 12 | 15 | 16 | 18 | 19;
        /**
         * Minimum item price.
         * @minimum 0
         */
        _udlo?: number | null;
        /**
         * Maximum item price.
         * @minimum 0
         */
        _udhi?: number | null;
        /** Auction, Buy It Now (BIN), or accepts offers (BO). */
        buying_format?: "Auction" | "BIN" | "BO" | null;
        /**
         * Condition IDs joined with |, such as 1000|3000.
         * @pattern ^[0-9]{1,4}(\|[0-9]{1,4}){0,9}$
         */
        LH_ItemCondition?: string | null;
        /**
         * Destination postal code used by eBay for shipping estimates.
         * @minLength 1
         * @maxLength 20
         */
        _stpos?: string | null;
        /** eBay item-location country ID, e.g. 1 US, 2 Canada, 3 UK. */
        _salic?: number | null;
        /** Exclude automatic spelling corrections. */
        _blrs?: "spell_auto_correct" | null;
        /**
         * Comma-separated filters: FR, RPA, AS, Savings, SaleItems, Lots, Charity, AV, FS, LPickup.
         * @maxLength 100
         */
        show_only?: string | null;
        /**
         * Comma-separated eBay seller usernames.
         * @maxLength 1000
         */
        _sasl?: string | null;
        /** Include (1) or exclude (2) the sellers in _sasl. */
        _saslop?: 1 | 2;
        /**
         * eBay aspect filters as key=value pairs joined with &, with multiple values joined by |. Percent-encoded names are accepted.
         * @maxLength 4000
         */
        popular_filters?: string | null;
        /** Result layout. */
        _dmd?: "Grid" | "List" | null;
        /** Item location relative to the marketplace. */
        LH_PrefLoc?: "Domestic" | "Regional" | "Worldwide" | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** search information value. */
        search_information?: Record<string, unknown>;
        /** organic results value. */
        organic_results?: Array<Record<string, unknown>>;
        /** categories value. */
        categories?: Array<Record<string, unknown>> | null;
        /** related searches value. */
        related_searches?: Array<Record<string, unknown>> | null;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /** litescrape pagination value. */
        litescrape_pagination?: Record<string, unknown> | null;
        /** deals value. */
        deals?: Record<string, unknown> | null;
        /** inline categories value. */
        inline_categories?: Array<Record<string, unknown>> | null;
        /** inline results value. */
        inline_results?: Array<Record<string, unknown>> | null;
        /** popular filters value. */
        popular_filters?: Array<Record<string, unknown>> | null;
        /** related items value. */
        related_items?: Array<Record<string, unknown>> | null;
        /** review highlights value. */
        review_highlights?: Array<Record<string, unknown>> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get an eBay seller's profile and listings. */
    "litescrape.ebay_seller": {
      input: {
        /** eBay marketplace hostname. */
        ebay_domain?: "ebay.com" | "ebay.co.uk" | "ebay.ca" | "ebay.com.au" | "ebay.de" | "ebay.fr" | "ebay.it" | "ebay.es" | "ebay.at" | "ebay.be" | "ebay.ch" | "ebay.ie" | "ebay.nl" | "ebay.com.hk" | "ebay.com.my" | "ebay.pl" | "ebay.com.sg";
        /**
         * Seller username for type=user, or the store URL slug for type=store.
         * @pattern ^[A-Za-z0-9][A-Za-z0-9_.*-]{0,99}$
         */
        seller_id: string;
        /** Public seller profile type. */
        type: "user" | "store";
        /**
         * Result page, starting at 1.
         * @minimum 1
         * @maximum 2147483647
         */
        _pgn?: number;
        /** Products per page. */
        _ipg?: 24 | 48 | 72;
        /** Sort: 12 best match, 1 ending soonest, 7 nearest, 10 newly listed, 15/16 total price ascending/descending. */
        _sop?: 1 | 7 | 10 | 12 | 15 | 16;
        /** All listings (0), Buy It Now (1), or auctions (2). */
        buying_format?: 0 | 1 | 2;
        /**
         * Condition IDs joined with |: 3 new, 4 used, 10 unspecified.
         * @maxLength 20
         * @pattern ^(?:3|4|10)(?:\|(?:3|4|10))*$
         */
        LH_ItemCondition?: string | null;
        /** Only products with free shipping. */
        free_shipping?: boolean;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** seller results value. */
        seller_results?: Record<string, unknown>;
        /** product results value. */
        product_results?: Array<Record<string, unknown>>;
        /** featured categories value. */
        featured_categories?: Array<Record<string, unknown>> | null;
        /** about value. */
        about?: Record<string, unknown> | null;
        /** feedback value. */
        feedback?: Record<string, unknown> | null;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /** litescrape pagination value. */
        litescrape_pagination?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get an Etsy listing's details and price. This upstream API is Alpha. */
    "litescrape.etsy_product": {
      input: {
        /**
         * Public HTTPS product URL on this retailer's site.
         * @minLength 1
         * @maxLength 4096
         */
        url: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** product value. */
        product?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Etsy listings with prices. This upstream API is Alpha. */
    "litescrape.etsy_search": {
      input: {
        /**
         * Product keywords to search for.
         * @minLength 1
         * @maxLength 500
         */
        query: string;
        /**
         * One-based result page.
         * @minimum 1
         * @maximum 100
         */
        page?: number;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** products value. */
        products?: Array<Record<string, unknown>>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Eventbrite events by location and keyword. */
    "litescrape.eventbrite_search": {
      input: {
        /**
         * Eventbrite location slug, such as tx--austin, ny--new-york, or online.
         * @maxLength 150
         * @pattern ^[a-z0-9]+(?:-[a-z0-9]+|--[a-z0-9]+)*$
         */
        location?: string;
        /**
         * Search keywords, such as music or python workshops.
         * @minLength 1
         * @maxLength 200
         * @pattern ^\S+(?: \S+)*$
         */
        q?: string;
        /**
         * Results page, starting at 1.
         * @minimum 1
         * @maximum 100
         */
        page?: number;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** organic results value. */
        organic_results?: Array<Record<string, unknown>>;
        /** promoted results value. */
        promoted_results?: Array<Record<string, unknown>>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get public Facebook posts for a hashtag. This upstream API is Alpha. */
    "litescrape.facebook_hashtag_posts": {
      input: {
        /**
         * Hashtag made of letters, digits or underscores, with an optional leading #.
         * @pattern ^#?[A-Za-z0-9_]{1,100}$
         */
        tag: string;
        /**
         * Maximum posts per response; fewer may be available.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /**
         * Token from pagination.continuation_token in the preceding response. Keep the same hashtag; limit may change. Tokens can expire.
         * @minLength 1
         * @maxLength 32768
         */
        continuation_token?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Public page URL associated with these results. */
        source_url?: string;
        /** Whether this response starts the feed or continues it. */
        coverage?: "initial" | "continuation";
        /** Whether some results or fields could not be returned. */
        incomplete?: boolean;
        /** posts value. */
        posts?: Array<Record<string, unknown>>;
        /** Whether more posts can be requested and the token to continue. */
        pagination?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Browse or search Facebook Marketplace listings by city. This upstream API is Alpha. */
    "litescrape.facebook_marketplace_browse": {
      input: {
        /**
         * Maximum listings per response; fewer may be available.
         * @minimum 1
         * @maximum 26
         */
        limit?: number;
        /**
         * Marketplace city slug or numeric city ID, such as austin or london. Required for keyword search and radius filtering.
         * @pattern ^[A-Za-z0-9][A-Za-z0-9._-]{0,99}$
         */
        location?: string | null;
        /**
         * Listing search keywords. Supply location to keep the search geography fixed.
         * @minLength 1
         * @maxLength 200
         * @pattern ^\S(?:.*\S)?$
         */
        query?: string | null;
        /**
         * Search radius in kilometers, from 1 to 500. Requires location; defaults to 65 km when omitted. Shipped or promoted listings may fall outside this radius.
         * @minimum 1
         * @maximum 500
         */
        radius_km?: number | null;
        /**
         * Minimum listing price in local currency units. Requires query and location.
         * @minimum 0
         * @maximum 10000000
         */
        min_price?: number | null;
        /**
         * Maximum listing price in local currency units, at least min_price. Requires query and location.
         * @minimum 0
         * @maximum 10000000
         */
        max_price?: number | null;
        /** Search ordering: lowest price, highest price or newest listings. Requires query and location. */
        sort_by?: "price_ascend" | "price_descend" | "creation_time_descend" | null;
        /** Item condition for keyword search. Requires query and location. */
        condition?: "new" | "used_like_new" | "used_good" | "used_fair" | null;
        /**
         * Restrict keyword search to recent listings, from 1 to 30 days. Requires query and location.
         * @minimum 1
         * @maximum 30
         */
        days_since_listed?: number | null;
        /**
         * Token from pagination.continuation_token in the preceding response. Repeat the same query, location and filters; limit may change. Keyword search only. Later requests may fail or be rate limited.
         * @minLength 1
         * @maxLength 32768
         * @pattern ^m1\.[A-Za-z0-9_-]+$
         */
        continuation_token?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Public page URL associated with these results. */
        source_url?: string;
        /** Whether this response contains initial results or continues an earlier request. */
        coverage?: "initial" | "continuation";
        /** Whether some results or fields could not be returned. */
        incomplete?: boolean;
        /** listings value. */
        listings?: Array<Record<string, unknown>>;
        /** Filters, location and radius applied to the search. */
        applied_filters?: Record<string, unknown> | null;
        /** Continuation state for keyword search. Further results may be unavailable or rate limited. */
        pagination?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get recent public posts from a Facebook Page. This upstream API is Alpha. */
    "litescrape.facebook_page_posts": {
      input: {
        /**
         * Public page handle without a URL, such as NASA.
         * @pattern ^[A-Za-z0-9][A-Za-z0-9._-]{0,99}$
         */
        handle: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Public page URL associated with these results. */
        source_url?: string;
        /** This response contains the initial results only. */
        coverage?: "initial";
        /** Whether some results or fields could not be returned. */
        incomplete?: boolean;
        /** posts value. */
        posts?: Array<Record<string, unknown>>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a public Facebook post by its URL. This upstream API is Alpha. */
    "litescrape.facebook_post": {
      input: {
        /**
         * Public www.facebook.com post permalink containing a page and post identifier.
         * @maxLength 400
         * @pattern ^https://www\.facebook\.com/[A-Za-z0-9][A-Za-z0-9._-]*\/posts/(?:[0-9]+|pfbid[A-Za-z0-9]+)/?$
         */
        url: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** source url value. */
        source_url?: string;
        /** post value. */
        post?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a public Facebook reel by its URL. This upstream API is Alpha. */
    "litescrape.facebook_reel": {
      input: {
        /**
         * Public reel address in the form https://www.facebook.com/reel/123456789/.
         * @maxLength 150
         * @pattern ^https://www\.facebook\.com/reel/[0-9]{1,30}/?$
         */
        url: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** source url value. */
        source_url?: string;
        /** reel value. */
        reel?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search public Facebook Pages by name. This upstream API is Alpha. */
    "litescrape.facebook_search_pages": {
      input: {
        /**
         * Page name or phrase to look up.
         * @minLength 1
         * @maxLength 200
         * @pattern ^\S(?:.*\S)?$
         */
        query: string;
        /**
         * Maximum Page suggestions per response; fewer may be available.
         * @minimum 1
         * @maximum 15
         */
        limit?: number;
        /**
         * Two-letter country preference for Page suggestions, such as US, GB or CA. Does not restrict a Page's location.
         * @pattern ^[A-Z]{2}$
         */
        country?: string;
        /** Ad category for Page suggestions: all ads or political and issue ads. */
        ad_type?: "ALL" | "POLITICAL_AND_ISSUE_ADS";
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** source url value. */
        source_url?: string;
        /** source value. */
        source?: "page_suggestions";
        /** pages value. */
        pages?: Array<Record<string, unknown>>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search public Facebook profiles by name. This upstream API is Alpha. */
    "litescrape.facebook_search_profiles": {
      input: {
        /**
         * Name to search for.
         * @minLength 1
         * @maxLength 200
         * @pattern ^\S(?:.*\S)?$
         */
        query: string;
        /**
         * Maximum profiles per response; fewer may be available.
         * @minimum 1
         * @maximum 12
         */
        limit?: number;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Public page URL associated with these results. */
        source_url?: string;
        /** This response contains the initial results only. */
        coverage?: "initial";
        /** Whether some results or fields could not be returned. */
        incomplete?: boolean;
        /** profiles value. */
        profiles?: Array<Record<string, unknown>>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Find relevant data tools or retrieve their input schemas by name. */
    "litescrape.find_tools": {
      input: Record<string, unknown>;
      output: {
        /** Tools ordered by relevance or requested name. */
        tools?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Read automatic top-up settings. */
    "litescrape.get_auto_top_up": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Read email bonus eligibility and claim status; this does not claim the bonus. */
    "litescrape.get_email_bonus": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Read asynchronous job state and its retained response. Failed jobs return their original status_code and error response. */
    "litescrape.get_job": {
      input: {
        /**
         * Job ID.
         * @pattern ^[0-9a-f]{32}$
         */
        job_id: string;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Read key status, balance, concurrency and retention settings without a paid search. */
    "litescrape.get_key_status": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Read account usage for a time range and timezone. */
    "litescrape.get_usage": {
      input: {
        /** Reporting window. */
        range?: "24h" | "7d" | "30d" | "90d";
        /** IANA timezone; defaults to UTC upstream. */
        tz?: string;
      };
      output: Record<string, unknown>;
    };
    /** Search Glassdoor jobs by keyword and location, with salary, seniority and remote filters. */
    "litescrape.glassdoor_search": {
      input: {
        /**
         * Job title, keywords or company. Omit to browse using only location and filters.
         * @minLength 1
         * @maxLength 512
         */
        q?: string | null;
        /**
         * One-based results page. Use next_page from the response to continue.
         * @minimum 1
         */
        page?: number;
        /**
         * Free-text city, state, country or postal code. Use location_id and location_type for an exact location instead.
         * @minLength 1
         * @maxLength 512
         */
        location?: string | null;
        /**
         * Copy next_page_token with its next_page and the same search parameters to continue.
         * @minLength 1
         * @maxLength 32768
         * @pattern ^[A-Za-z0-9+/=_-]+$
         */
        page_token?: string | null;
        /**
         * Glassdoor location ID, for example 1132348 for New York. Omit for nationwide search.
         * @minimum 1
         */
        location_id?: number | null;
        /** Location type: C city, S state, N country. Required with location_id. */
        location_type?: "C" | "S" | "N" | null;
        /**
         * Restrict the free-text location to this two-letter country, for example GB for London, England. Requires location.
         * @pattern ^[A-Z]{2}$
         */
        location_country?: string | null;
        /**
         * Distance in miles; 0 means the exact location. Defaults to 25.
         * @minimum 0
         * @maximum 100
         */
        radius?: number | null;
        /** Employment type. Use job_types to select multiple types. */
        job_type?: "fulltime" | "parttime" | "contract" | "temporary" | "internship" | "permanent" | null;
        /**
         * Employment attribute codes as a JSON array, for example ["CF3CP","NJXCK"]. Mutually exclusive with job_type. Codes are returned by include_filters.
         * @minItems 1
         * @maxItems 100
         */
        job_types?: Array<string> | null;
        /**
         * Maximum posting age in days.
         * @minimum 1
         * @maximum 30
         */
        from_age?: number | null;
        /**
         * Minimum annual salary in the search location's currency.
         * @minimum 0
         */
        salary_min?: number | null;
        /**
         * Maximum annual salary in the search location's currency.
         * @minimum 0
         */
        salary_max?: number | null;
        /** True selects work-from-home or remote jobs. False includes all workplace types. */
        remote?: boolean | null;
        /** True selects Easy Apply jobs. False includes all application types. */
        easy_apply?: boolean | null;
        /** Seniority filter. */
        seniority?: "internship" | "entrylevel" | "midseniorlevel" | "director" | "executive" | null;
        /**
         * Glassdoor employer ID; include_filters returns matching employer IDs.
         * @minimum 1
         */
        company_id?: number | null;
        /**
         * Employer size categories as a JSON array: 1 tiny, 2 small, 3 medium, 4 large, 5 huge.
         * @minItems 1
         * @maxItems 100
         */
        company_sizes?: Array<number> | null;
        /**
         * Glassdoor industry ID; available values depend on the search and are returned by include_filters.
         * @minimum 1
         */
        industry_id?: number | null;
        /**
         * Glassdoor occupation category, such as 1007 Engineering. See include_filters.
         * @minimum 1
         */
        occupation_id?: number | null;
        /**
         * Refine the search to a city ID from include_filters.
         * @minimum 1
         */
        city_id?: number | null;
        /**
         * Minimum employer rating.
         * @minimum 0
         * @maximum 5
         */
        min_rating?: number | null;
        /** Relevance, oldest first, or newest first. */
        sort?: "relevance" | "date_asc" | "date_desc" | null;
        /** Return available filters, values, counts and employer names in available_filters. */
        include_filters?: boolean;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** jobs results value. */
        jobs_results?: Array<Record<string, unknown>>;
        /** search information value. */
        search_information?: Record<string, unknown>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /** litescrape pagination value. */
        litescrape_pagination?: Record<string, unknown>;
        /** available filters value. */
        available_filters?: Array<Record<string, unknown>> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get the ads shown on a Google search results page. This upstream API is Alpha. */
    "litescrape.google_ads": {
      input: {
        /** Google Ads search query, up to 2,048 characters with no controls. */
        q: string;
        /**
         * Human-readable location where the ad search originates, up to 63 UTF-8 bytes once Google-encoded.
         *
         * Example: Austin, Texas, United States.
         */
        location: string;
        /** Google interface and result language, such as en, en-GB, or de. */
        hl?: string;
        /** Google adult-content filtering. */
        safe?: "active" | "off" | null;
        /** Google spelling auto-correction control. Set 1 to exclude corrected queries. */
        nfpr?: "0" | "1" | null;
        /** Google returns its real layout for the selected device. */
        device?: "desktop" | "tablet" | "mobile";
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** search information value. */
        search_information?: Record<string, unknown> | null;
        /** dmca messages value. */
        dmca_messages?: Record<string, unknown> | null;
        /** find results on value. */
        find_results_on?: Array<Record<string, unknown>> | null;
        /** latest posts value. */
        latest_posts?: Array<Record<string, unknown>> | null;
        /** organic results value. */
        organic_results?: Array<Record<string, unknown>> | null;
        /** ads value. */
        ads?: Array<Record<string, unknown>> | null;
        /** ai overview value. */
        ai_overview?: Record<string, unknown> | null;
        /** answer box value. */
        answer_box?: Record<string, unknown> | null;
        /** knowledge graph value. */
        knowledge_graph?: Record<string, unknown> | null;
        /** local map value. */
        local_map?: Record<string, unknown> | null;
        /** local results value. */
        local_results?: Record<string, unknown> | null;
        /** pagination value. */
        pagination?: Record<string, unknown> | null;
        /** related questions value. */
        related_questions?: Array<Record<string, unknown>> | null;
        /** related searches value. */
        related_searches?: Array<Record<string, unknown>> | null;
        /** ask ai mode value. */
        ask_ai_mode?: Array<Record<string, unknown>> | null;
        /** available on value. */
        available_on?: Array<Record<string, unknown>> | null;
        /** broaden searches value. */
        broaden_searches?: Array<Record<string, unknown>> | null;
        /** complementary results value. */
        complementary_results?: Array<Record<string, unknown>> | null;
        /** discover more places value. */
        discover_more_places?: Array<Record<string, unknown>> | null;
        /** discussions and forums value. */
        discussions_and_forums?: Array<Record<string, unknown>> | null;
        /** episode guide value. */
        episode_guide?: Array<Record<string, unknown>> | null;
        /** events results value. */
        events_results?: Array<Record<string, unknown>> | null;
        /** filters value. */
        filters?: Array<Record<string, unknown>> | null;
        /** flight result value. */
        flight_result?: Record<string, unknown> | null;
        /** immersive products value. */
        immersive_products?: Array<Record<string, unknown>> | null;
        /** inline images value. */
        inline_images?: Array<Record<string, unknown>> | null;
        /** inline videos value. */
        inline_videos?: Array<Record<string, unknown>> | null;
        /** jobs results value. */
        jobs_results?: Record<string, unknown> | null;
        /** news results value. */
        news_results?: Array<Record<string, unknown>> | null;
        /** perspectives value. */
        perspectives?: Array<Record<string, unknown>> | null;
        /** places sites value. */
        places_sites?: Array<Record<string, unknown>> | null;
        /** recipes results value. */
        recipes_results?: Array<Record<string, unknown>> | null;
        /** refine by value. */
        refine_by?: Array<Record<string, unknown>> | null;
        /** related brands value. */
        related_brands?: Array<Record<string, unknown>> | null;
        /** related categories value. */
        related_categories?: Array<Record<string, unknown>> | null;
        /** scholarly articles value. */
        scholarly_articles?: Record<string, unknown> | null;
        /** shopping results value. */
        shopping_results?: Array<Record<string, unknown>> | null;
        /** categorized shopping results value. */
        categorized_shopping_results?: Array<Record<string, unknown>> | null;
        /** short videos value. */
        short_videos?: Array<Record<string, unknown>> | null;
        /** sports results value. */
        sports_results?: Record<string, unknown> | null;
        /** top sights value. */
        top_sights?: Record<string, unknown> | null;
        /** top stories value. */
        top_stories?: Array<Record<string, unknown>> | Record<string, unknown> | null;
        /** video results value. */
        video_results?: Array<Record<string, unknown>> | null;
        /** finance results value. */
        finance_results?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get Google AI Mode answers with cited sources. */
    "litescrape.google_ai_mode": {
      input: {
        /** The question to ask Google AI Mode, up to 2,048 characters with no controls. */
        q: string;
        /** Named search origin, up to 512 characters and 63 UTF-8 bytes once Google-encoded. Conflicts with uule. */
        location?: string | null;
        /** Canonical Google location token, up to 2,048 characters. Conflicts with location. */
        uule?: string | null;
        /** Validated first-party Google domain the request is served from. */
        google_domain?: string;
        /** Two-letter country localization, normalized to lowercase. */
        gl?: string | null;
        /** Language code such as en, en-GB, or de. */
        hl?: string;
        /** Google returns its real layout for the selected device. */
        device?: "desktop" | "tablet" | "mobile";
        /** Return a subsequent_request_token so this answer can be followed up. */
        continuable?: boolean;
        /** Continue a conversation from a previous continuable response. Requires a new question, and cannot be combined with image_url. Expires after 30 minutes. */
        subsequent_request_token?: string | null;
        /** Public http or https image to include in the prompt, up to 2,048 characters and 20 MB. Google Lens receives the image; the answer still comes from AI Mode. */
        image_url?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** references value. */
        references?: Array<Record<string, unknown>> | null;
        /** text blocks value. */
        text_blocks?: Array<Record<string, unknown>> | null;
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** subsequent request token value. */
        subsequent_request_token?: string | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get Google's AI Overview for a query, with cited sources. */
    "litescrape.google_ai_overview": {
      input: {
        /**
         * Google Search query, up to 2,048 characters.
         *
         * Required unless ludocid or kgmid is supplied.
         * @maxLength 2048
         */
        q?: string | null;
        /**
         * Human-readable city-level location encoded to UULE by Litescrape.
         *
         * Conflicts with uule and lat/lon.
         * @maxLength 512
         */
        location?: string | null;
        /**
         * Pre-encoded Google location value.
         *
         * Conflicts with location and lat/lon.
         * @maxLength 2048
         */
        uule?: string | null;
        /**
         * Latitude from -90 through 90.
         *
         * Requires lon and conflicts with location and uule.
         * @minimum -90
         * @maximum 90
         */
        lat?: number | null;
        /**
         * Longitude from -180 through 180.
         *
         * Requires lat and conflicts with location and uule.
         * @minimum -180
         * @maximum 180
         */
        lon?: number | null;
        /**
         * Decimal search-bias radius in meters.
         *
         * Requires location or lat/lon. Desktop: 1–199; tablet/mobile: 1–1,000.
         * @minimum 1
         * @maximum 1000
         */
        radius?: number | null;
        /**
         * Google local CID used to search for one entity.
         * @maxLength 128
         * @pattern ^\d+$
         */
        ludocid?: string | null;
        /**
         * Opaque Knowledge Graph or local-pack signature.
         * @maxLength 4096
         */
        lsig?: string | null;
        /**
         * Google Knowledge Graph machine ID, such as /m/0k8z.
         * @maxLength 512
         */
        kgmid?: string | null;
        /**
         * Opaque cached Google search context.
         * @maxLength 4096
         */
        si?: string | null;
        /**
         * Google layout or expansion control.
         * @maxLength 4096
         */
        ibp?: string | null;
        /**
         * Opaque Google filter token.
         * @maxLength 4096
         */
        uds?: string | null;
        /** Google result color presentation. */
        color_scheme?: "light" | "dark" | null;
        /** Results use google.com. Use gl, hl, cr, lr or geography for localization. */
        google_domain?: string;
        /**
         * Lowercase two-letter country localization code.
         * @pattern ^[a-z]{2}$
         */
        gl?: string | null;
        /**
         * Google interface and result language code.
         * @pattern ^[a-z]{2,3}(?:-[A-Za-z]{2,8})?$
         */
        hl?: string;
        /**
         * One or more countryXX restrictions joined with |.
         * @pattern ^country[A-Z]{2}(?:\|country[A-Z]{2})*$
         */
        cr?: string | null;
        /**
         * One or more lang_xx restrictions joined with |.
         * @pattern ^lang_[a-z]{2,3}(?:\|lang_[a-z]{2,3})*$
         */
        lr?: string | null;
        /**
         * Google native date or search filter string.
         * @maxLength 4096
         */
        tbs?: string | null;
        /** Google adult-content filtering. */
        safe?: "active" | "off" | null;
        /** Google auto-correction control. */
        nfpr?: "0" | "1" | null;
        /** Google similar-result filtering control. */
        filter?: "0" | "1" | null;
        /** Google personalization control; 0 asks for non-personalized results. */
        pws?: "0" | "1" | null;
        /** Google personalization peek flag, forwarded unchanged. */
        peek_pws?: "0" | "1" | null;
        /** Google vertical: lcl, vid, nws, shop, or pts. For image searches, use /api/google/images. */
        tbm?: "lcl" | "vid" | "nws" | "shop" | "pts" | null;
        /**
         * Non-negative Google result offset.
         * @minimum 0
         */
        start?: number;
        /**
         * Best-effort first-page result count, 1 to 10.
         * @minimum 1
         * @maximum 10
         */
        num?: number | null;
        /** Request device profile and radius bound. */
        device?: "desktop" | "tablet" | "mobile";
        /**
         * Original query associated with an autocomplete selection.
         * @maxLength 2048
         */
        oq?: string | null;
        /**
         * Google gs_lp value associated with an autocomplete selection.
         * @maxLength 4096
         */
        gs_lp?: string | null;
        /**
         * Google client identifier such as gws-wiz-serp.
         * @maxLength 64
         * @pattern ^[A-Za-z0-9._-]+$
         */
        sclient?: string | null;
        /**
         * Includes or excludes as_sitesearch.
         *
         * Requires as_sitesearch.
         */
        as_dt?: "i" | "e" | null;
        /**
         * Exact phrase query.
         * @maxLength 2048
         */
        as_epq?: string | null;
        /**
         * Excluded phrase query.
         * @maxLength 2048
         */
        as_eq?: string | null;
        /**
         * Require results that link to this URL.
         * @maxLength 4096
         */
        as_lq?: string | null;
        /**
         * Inclusive range lower bound.
         *
         * Requires as_nhi.
         * @minimum 0
         */
        as_nlo?: number | null;
        /**
         * Inclusive range upper bound.
         *
         * Requires as_nlo.
         * @minimum 0
         */
        as_nhi?: number | null;
        /**
         * Any-of search terms.
         * @maxLength 2048
         */
        as_oq?: string | null;
        /**
         * Additional all-of search terms.
         * @maxLength 2048
         */
        as_q?: string | null;
        /**
         * Quick range d, w, m, or y with an optional positive count.
         * @pattern ^[dwmy](?:[1-9][0-9]*)?$
         */
        as_qdr?: string | null;
        /**
         * Find pages related to this URL.
         * @maxLength 4096
         */
        as_rq?: string | null;
        /**
         * Site hostname to include or exclude.
         * @maxLength 253
         */
        as_sitesearch?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** search information value. */
        search_information?: Record<string, unknown> | null;
        /** dmca messages value. */
        dmca_messages?: Record<string, unknown> | null;
        /** find results on value. */
        find_results_on?: Array<Record<string, unknown>> | null;
        /** latest posts value. */
        latest_posts?: Array<Record<string, unknown>> | null;
        /** organic results value. */
        organic_results?: Array<Record<string, unknown>> | null;
        /** ads value. */
        ads?: Array<Record<string, unknown>> | null;
        /** ai overview value. */
        ai_overview?: Record<string, unknown> | null;
        /** answer box value. */
        answer_box?: Record<string, unknown> | null;
        /** knowledge graph value. */
        knowledge_graph?: Record<string, unknown> | null;
        /** local map value. */
        local_map?: Record<string, unknown> | null;
        /** local results value. */
        local_results?: Record<string, unknown> | null;
        /** pagination value. */
        pagination?: Record<string, unknown> | null;
        /** related questions value. */
        related_questions?: Array<Record<string, unknown>> | null;
        /** related searches value. */
        related_searches?: Array<Record<string, unknown>> | null;
        /** ask ai mode value. */
        ask_ai_mode?: Array<Record<string, unknown>> | null;
        /** available on value. */
        available_on?: Array<Record<string, unknown>> | null;
        /** broaden searches value. */
        broaden_searches?: Array<Record<string, unknown>> | null;
        /** complementary results value. */
        complementary_results?: Array<Record<string, unknown>> | null;
        /** discover more places value. */
        discover_more_places?: Array<Record<string, unknown>> | null;
        /** discussions and forums value. */
        discussions_and_forums?: Array<Record<string, unknown>> | null;
        /** episode guide value. */
        episode_guide?: Array<Record<string, unknown>> | null;
        /** events results value. */
        events_results?: Array<Record<string, unknown>> | null;
        /** filters value. */
        filters?: Array<Record<string, unknown>> | null;
        /** flight result value. */
        flight_result?: Record<string, unknown> | null;
        /** immersive products value. */
        immersive_products?: Array<Record<string, unknown>> | null;
        /** inline images value. */
        inline_images?: Array<Record<string, unknown>> | null;
        /** inline videos value. */
        inline_videos?: Array<Record<string, unknown>> | null;
        /** jobs results value. */
        jobs_results?: Record<string, unknown> | null;
        /** news results value. */
        news_results?: Array<Record<string, unknown>> | null;
        /** perspectives value. */
        perspectives?: Array<Record<string, unknown>> | null;
        /** places sites value. */
        places_sites?: Array<Record<string, unknown>> | null;
        /** recipes results value. */
        recipes_results?: Array<Record<string, unknown>> | null;
        /** refine by value. */
        refine_by?: Array<Record<string, unknown>> | null;
        /** related brands value. */
        related_brands?: Array<Record<string, unknown>> | null;
        /** related categories value. */
        related_categories?: Array<Record<string, unknown>> | null;
        /** scholarly articles value. */
        scholarly_articles?: Record<string, unknown> | null;
        /** shopping results value. */
        shopping_results?: Array<Record<string, unknown>> | null;
        /** categorized shopping results value. */
        categorized_shopping_results?: Array<Record<string, unknown>> | null;
        /** short videos value. */
        short_videos?: Array<Record<string, unknown>> | null;
        /** sports results value. */
        sports_results?: Record<string, unknown> | null;
        /** top sights value. */
        top_sights?: Record<string, unknown> | null;
        /** top stories value. */
        top_stories?: Array<Record<string, unknown>> | Record<string, unknown> | null;
        /** video results value. */
        video_results?: Array<Record<string, unknown>> | null;
        /** finance results value. */
        finance_results?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get reviews written by a Google Maps contributor. */
    "litescrape.google_contributor_reviews": {
      input: {
        /** Required 10 to 32 digit ID from a Google Maps contributor URL. */
        contributor_id: string;
        /** Review and interface language such as en, en-US, or fr. */
        hl?: string;
        /** Two-letter country localization. */
        gl?: string;
        /** Review count from 1 through the anonymous source maximum of 200. */
        limit?: number;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** search information value. */
        search_information?: Record<string, unknown> | null;
        /** contributor value. */
        contributor?: Record<string, unknown> | null;
        /** reviews value. */
        reviews?: Array<Record<string, unknown>> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a completed text reply from Gemini. */
    "litescrape.google_gemini": {
      input: {
        /**
         * Text prompt for a new or continued Gemini conversation, up to 32,000 characters.
         *
         * Text only. Use subsequent_request_token to continue a conversation. Uploads, Google account cookies and model selection are not accepted.
         * @minLength 1
         * @maxLength 32000
         */
        prompt: string;
        /**
         * Gemini web interface language code. Defaults to en; request a reply language in the prompt.
         * @pattern ^[a-zA-Z]{2,3}(?:-[a-zA-Z]{2,4})?$
         */
        hl?: string;
        /**
         * Return a subsequent_request_token for continuing this conversation. Defaults to false.
         *
         * Set to true on the first request and on each follow-up that needs another token.
         */
        continuable?: boolean;
        /**
         * Token from the previous reply. Send it with your next prompt using the same API key.
         *
         * Use the newest token for each follow-up. Tokens expire one hour after they are issued; an upstream conversation can become unavailable sooner. Treat tokens as sensitive. Invalid, expired or unavailable continuations fail without starting a new conversation and are not billed.
         * @minLength 1
         * @maxLength 32768
         */
        subsequent_request_token?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /**
         * Gemini's completed text reply, preserving Markdown formatting.
         * @minLength 1
         */
        text?: string;
        /** Continuation token returned when continuable is true. Use the newest token for each follow-up; tokens expire after one hour. */
        subsequent_request_token?: string | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Google Images. */
    "litescrape.google_images": {
      input: {
        /**
         * Image search query, up to 2,048 characters.
         * @minLength 1
         * @maxLength 2048
         */
        q: string;
        /**
         * Language of the Google Images interface.
         * @pattern ^[a-z]{2,3}(?:-[A-Za-z]{2,8})?$
         */
        hl?: string;
        /**
         * Two-letter country code used to localize results.
         * @pattern ^[a-z]{2}$
         */
        gl?: string | null;
        /** Set active to filter explicit images, or off to disable SafeSearch. */
        safe?: "active" | "off" | null;
        /**
         * Google image filters, such as isz:l for large images, itp:photo for photographs, or ic:trans for transparent images.
         * @maxLength 4096
         */
        tbs?: string | null;
        /**
         * Google's page offset. For the next page, use pagination.next_start from the response and keep the same query and filters. This offset is independent of num and the number of returned images.
         * @minimum 0
         * @maximum 1000
         */
        start?: number;
        /**
         * Maximum number of images returned from this page, from 1 to 100. This limits the parsed response; Google may supply fewer images.
         * @minimum 1
         * @maximum 100
         */
        num?: number;
        /** Device profile used for the image search. */
        device?: "desktop" | "tablet" | "mobile";
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** images results value. */
        images_results?: Array<Record<string, unknown>>;
        /** pagination value. */
        pagination?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Google Jobs listings by query and location. */
    "litescrape.google_jobs": {
      input: {
        /**
         * Job search query, for example software engineer jobs in New York.
         * @minLength 1
         * @maxLength 512
         */
        q: string;
        /**
         * One-based results page. Use next_page from the response to continue.
         * @minimum 1
         */
        page?: number;
        /**
         * Copy next_page_token with next_page and the same query to fetch the next batch directly.
         * @minLength 1
         * @maxLength 32768
         * @pattern ^[A-Za-z0-9+/=_-]+$
         */
        page_token?: string | null;
        /**
         * Google interface language, for example en, de, fr, es or pt-BR.
         * @pattern ^[a-z]{2,3}(?:-[A-Za-z]{2,8})?$
         */
        hl?: string;
        /**
         * Two-letter country code.
         * @pattern ^[a-z]{2}$
         */
        gl?: string;
        /**
         * Canonical Google location, such as London,England,United Kingdom. Use one of location, uule or lat/lon.
         * @minLength 1
         * @maxLength 512
         */
        location?: string | null;
        /**
         * Explicit Google UULE location value. Mutually exclusive with location and coordinates.
         * @minLength 1
         * @maxLength 2048
         */
        uule?: string | null;
        /**
         * Latitude of the search origin. Requires lon.
         * @minimum -90
         * @maximum 90
         */
        lat?: number | null;
        /**
         * Longitude of the search origin. Requires lat.
         * @minimum -180
         * @maximum 180
         */
        lon?: number | null;
        /**
         * Coordinate accuracy radius in meters, requiring lat/lon. This locates the search origin; it is not a job-distance filter.
         * @minimum 1
         * @maximum 199
         */
        radius?: number | null;
        /**
         * Opaque Google refinement value returned in available_filters. Copy its q and uds together; filter choices vary by query and market.
         * @minLength 1
         * @maxLength 16384
         */
        uds?: string | null;
        /**
         * Google search refinement string, for example qdr:w for the past week. Keep it unchanged through pagination.
         * @minLength 1
         * @maxLength 2048
         */
        tbs?: string | null;
        /** Return available Google Jobs filters with the q and uds parameters needed to apply each one. */
        include_filters?: boolean;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** jobs results value. */
        jobs_results?: Array<Record<string, unknown>>;
        /** search information value. */
        search_information?: Record<string, unknown>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /** litescrape pagination value. */
        litescrape_pagination?: Record<string, unknown>;
        /** available filters value. */
        available_filters?: Array<Record<string, unknown>> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get Google local results for a query and location. */
    "litescrape.google_local": {
      input: {
        /** Google Local query, up to 2,048 characters with no controls. */
        q: string;
        /**
         * Human-readable location, up to 512 characters.
         *
         * Cannot be combined with uule.
         */
        location?: string | null;
        /**
         * Canonical Google named-location token, up to 2,048 characters.
         *
         * Cannot be combined with location.
         */
        uule?: string | null;
        /**
         * Validated Google domain.
         *
         * Examples: google.com, google.co.uk, google.fr.
         */
        google_domain?: string;
        /** Country localization normalized to lowercase. */
        gl?: string | null;
        /** Google interface and result language. */
        hl?: string;
        /** Google local CID, up to 128 digits. */
        ludocid?: string | null;
        /** Google compatibility token forwarded unchanged; the provider may leave ranking unchanged. */
        tbs?: string | null;
        /** Local-result offset through 10,000; source-exhausted offsets above 1,000 return empty. */
        start?: number;
        /** Compatibility value over device-invariant Maps data. */
        device?: "desktop" | "tablet" | "mobile";
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** local results value. */
        local_results?: Array<Record<string, unknown>> | null;
        /** pagination value. */
        pagination?: Record<string, unknown> | null;
        /** ads results value. */
        ads_results?: Array<Record<string, unknown>> | null;
        /** discover more places value. */
        discover_more_places?: Array<Record<string, unknown>> | null;
        /** local map value. */
        local_map?: Record<string, unknown> | null;
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** litescrape pagination value. */
        litescrape_pagination?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Google Maps places, or get one place by ID. */
    "litescrape.google_maps": {
      input: {
        /**
         * The business, category, address, or natural-language query to search. Required when type is search.
         *
         * Examples: coffee shops in Austin, dentist near Denver
         */
        q?: string | null;
        /**
         * A complete viewport containing latitude, longitude, and either zoom or radius.
         *
         * Format: @lat,lon,14z or @lat,lon,5000m
         */
        ll?: string | null;
        /**
         * A named geographic location resolved by the API. Cannot be combined with ll or lat/lon.
         *
         * Requires z or m.
         */
        location?: string | null;
        /** Latitude for a coordinate-based viewport. Must be supplied with lon and either z or m. */
        lat?: string | number | null;
        /** Longitude for a coordinate-based viewport. Must be supplied with lat and either z or m. */
        lon?: string | number | null;
        /**
         * Google Maps zoom level for location or lat/lon geography.
         *
         * Accepted range: 3 through 30. Cannot be combined with m.
         */
        z?: string | number | null;
        /**
         * Search radius in meters for location or lat/lon geography.
         *
         * Accepted range: 1 through 15,028,132. Cannot be combined with z.
         */
        m?: string | number | null;
        /**
         * Uses the supplied geography as a nearby-search scope.
         *
         * Requires ll, location, or a lat/lon pair.
         */
        nearby?: boolean | null;
        /**
         * A Google Maps protobuf parameter sequence for search filters or an exact place.
         *
         * Maximum length: 8,192 characters. Exact-place data requires type=place.
         */
        data?: string | null;
        /**
         * A Google place identifier used to resolve one exact place or request live foot traffic.
         *
         * Cannot be combined with data_cid or exact-place data on the primary Maps endpoint. It is the only required parameter on /api/google/maps/popular-times. Every response is fetched live; places without published data return popular_times: null.
         */
        place_id?: string | null;
        /**
         * A decimal Google CID used to resolve one exact place.
         *
         * Cannot be combined with place_id or exact-place data.
         */
        data_cid?: string | number | null;
        /**
         * Chooses a result search or an exact place response. Required for query and filter searches.
         *
         * Use place when sending an exact-place data sequence.
         */
        type?: "search" | "place" | null;
        /**
         * Language used for Google Maps labels and returned text.
         *
         * Examples: en, es, fr, de
         */
        hl?: string | null;
        /**
         * Two-letter country code used for regional result localization.
         *
         * Examples: us, gb, ca, au
         */
        gl?: string | null;
        /**
         * Validated Google domain used for the request.
         *
         * Examples: google.com, google.co.uk, google.ca
         */
        google_domain?: string | null;
        /**
         * Native Maps result offset: 0, 20, 40, and so on. Each request returns up to 20 places and each successful request costs one credit.
         *
         * Use pagination.next when it is present instead of constructing the next request manually.
         */
        start?: string | number | null;
        /**
         * Minimum price level for returned places.
         *
         * Must be non-negative and cannot exceed max_price.
         */
        min_price?: string | number | null;
        /**
         * Maximum price level for returned places.
         *
         * Must be non-negative and cannot be lower than min_price.
         */
        max_price?: string | number | null;
        /**
         * Preferred minimum Google rating.
         *
         * Google treats this as a relevance preference.
         */
        min_rating?: string | number | null;
        /**
         * Filters by the current open state.
         *
         * Cannot be combined with open_on_day or open_at_hour.
         */
        open_state?: "now" | "24h" | null;
        /** Filters for places open on a specific day. */
        open_on_day?: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun" | null;
        /**
         * Filters for places open at a specific hour using 24-hour time.
         *
         * Accepted range: 0 through 23. Requires open_on_day.
         */
        open_at_hour?: string | number | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** search information value. */
        search_information?: Record<string, unknown> | null;
        /** local results value. */
        local_results?: Array<Record<string, unknown>> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get the place, contributor, and date of a Maps photo. */
    "litescrape.google_maps_photo_meta": {
      input: {
        /** Required Google Maps photo ID. Follow photo_meta_link from a Maps place response. */
        data_id: string;
        /** Google interface and result language. */
        hl?: string | null;
        /** Two-letter country localization code. */
        gl?: string | null;
        /** A Google domain such as google.com or google.co.uk. */
        google_domain?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** user value. */
        user?: Record<string, unknown> | null;
        /** location value. */
        location?: Record<string, unknown> | null;
        /** date value. */
        date?: string | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** See how busy a place is right now. */
    "litescrape.google_maps_popular_times": {
      input: {
        /** Required Google Place ID. Every response is fetched live. */
        place_id: string;
        /** Google interface and result language. */
        hl?: string | null;
        /** Two-letter country localization code. */
        gl?: string | null;
        /** A Google domain such as google.com or google.co.uk. */
        google_domain?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** place value. */
        place?: Record<string, unknown> | null;
        /** popular times value. */
        popular_times?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Read the posts published by a business. */
    "litescrape.google_maps_posts": {
      input: {
        /** Required hexadecimal Maps feature ID. Follow posts_link from a Maps place response. */
        data_id: string;
        /** Google interface and result language. */
        hl?: string | null;
        /** Two-letter country localization code. */
        gl?: string | null;
        /** A Google domain such as google.com or google.co.uk. */
        google_domain?: string | null;
        /** Continue a posts response with its opaque token. */
        next_page_token?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** posts value. */
        posts?: Array<Record<string, unknown>> | null;
        /** pagination value. */
        pagination?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search and browse Google Play apps. */
    "litescrape.google_play_apps": {
      input: {
        /**
         * Storefront language, such as en, de, or zh-TW. Maximum 32 characters.
         * @maxLength 32
         * @pattern ^[a-zA-Z]{2,3}(?:[-_][a-zA-Z0-9]{2,8}){0,3}$
         */
        hl?: string;
        /**
         * Two-letter country code.
         * @pattern ^[a-zA-Z]{2}$
         */
        gl?: string;
        /**
         * Optional query with 1 to 2,048 UTF-8 bytes of printable text. Excludes category. Omit it to browse the storefront. On the games endpoint, q uses shared Android app search; omit q or choose games_category to browse games.
         * @minLength 1
         * @maxLength 2048
         */
        q?: string | null;
        /**
         * Chart identifier such as topselling_free, topselling_paid, or topgrossing. Excludes q and all pagination selectors. Apps and games charts require phone or an omitted store_device.
         * @minLength 1
         * @maxLength 128
         * @pattern ^[a-zA-Z0-9_-]+$
         */
        chart?: string | null;
        /**
         * Use the returned next_page_token with the same parameters. Excludes chart, section_page_token, and see_more_token.
         * @minLength 1
         * @maxLength 65536
         * @pattern ^[a-zA-Z0-9_=+/:.-]+$
         */
        next_page_token?: string | null;
        /**
         * Continue one result group using its returned token and the same parameters. Excludes the other pagination selectors and chart.
         * @minLength 1
         * @maxLength 65536
         * @pattern ^[a-zA-Z0-9_=+/:.-]+$
         */
        section_page_token?: string | null;
        /**
         * Open a result collection using its returned token and the same parameters. Excludes the other pagination selectors and chart.
         * @minLength 1
         * @maxLength 65536
         * @pattern ^[a-zA-Z0-9_=+/:.-]+$
         */
        see_more_token?: string | null;
        /**
         * Native app category identifier, such as MEDICAL. Excludes q and an explicit store_device.
         * @minLength 1
         * @maxLength 128
         * @pattern ^[a-zA-Z0-9_-]+$
         */
        apps_category?: string | null;
        /** Omit for the default phone storefront. An explicit selection excludes q and category. */
        store_device?: "phone" | "tablet" | "tv" | "chromebook" | "watch" | "car" | null;
        /** Children's age range. Requires apps_category=FAMILY. */
        age?: "AGE_RANGE1" | "AGE_RANGE2" | "AGE_RANGE3" | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** organic results value. */
        organic_results?: Array<Record<string, unknown>> | null;
        /**  page token value. */
        _page_token?: string | null;
        /** charts value. */
        charts?: Array<Record<string, unknown>> | null;
        /** items highlight value. */
        items_highlight?: Array<Array<Record<string, unknown>>> | null;
        /** app highlight value. */
        app_highlight?: Record<string, unknown> | null;
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search and browse Google Play ebooks and audiobooks. */
    "litescrape.google_play_books": {
      input: {
        /**
         * Storefront language, such as en, de, or zh-TW. Maximum 32 characters.
         * @maxLength 32
         * @pattern ^[a-zA-Z]{2,3}(?:[-_][a-zA-Z0-9]{2,8}){0,3}$
         */
        hl?: string;
        /**
         * Two-letter country code.
         * @pattern ^[a-zA-Z]{2}$
         */
        gl?: string;
        /**
         * Optional query with 1 to 2,048 UTF-8 bytes of printable text. Excludes category. Omit it to browse the storefront. On the games endpoint, q uses shared Android app search; omit q or choose games_category to browse games.
         * @minLength 1
         * @maxLength 2048
         */
        q?: string | null;
        /**
         * Chart identifier such as topselling_free, topselling_paid, or topgrossing. Excludes q and all pagination selectors. Apps and games charts require phone or an omitted store_device.
         * @minLength 1
         * @maxLength 128
         * @pattern ^[a-zA-Z0-9_-]+$
         */
        chart?: string | null;
        /**
         * Use the returned next_page_token with the same parameters. Excludes chart, section_page_token, and see_more_token.
         * @minLength 1
         * @maxLength 65536
         * @pattern ^[a-zA-Z0-9_=+/:.-]+$
         */
        next_page_token?: string | null;
        /**
         * Continue one result group using its returned token and the same parameters. Excludes the other pagination selectors and chart.
         * @minLength 1
         * @maxLength 65536
         * @pattern ^[a-zA-Z0-9_=+/:.-]+$
         */
        section_page_token?: string | null;
        /**
         * Open a result collection using its returned token and the same parameters. Excludes the other pagination selectors and chart.
         * @minLength 1
         * @maxLength 65536
         * @pattern ^[a-zA-Z0-9_=+/:.-]+$
         */
        see_more_token?: string | null;
        /**
         * Native book category identifier, such as coll_1689 for children's books. Excludes q.
         * @minLength 1
         * @maxLength 128
         * @pattern ^[a-zA-Z0-9_-]+$
         */
        books_category?: string | null;
        /** Children's age range. Requires books_category=coll_1689. */
        age?: "AGE_RANGE1" | "AGE_RANGE2" | "AGE_RANGE3" | null;
        /**
         * 1 for free books or 2 for paid books. Requires q.
         * @minimum 1
         * @maximum 2
         */
        price?: number | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Browse Google Play games by category and chart. */
    "litescrape.google_play_games": {
      input: {
        /**
         * Storefront language, such as en, de, or zh-TW. Maximum 32 characters.
         * @maxLength 32
         * @pattern ^[a-zA-Z]{2,3}(?:[-_][a-zA-Z0-9]{2,8}){0,3}$
         */
        hl?: string;
        /**
         * Two-letter country code.
         * @pattern ^[a-zA-Z]{2}$
         */
        gl?: string;
        /**
         * Optional query with 1 to 2,048 UTF-8 bytes of printable text. Excludes category. Omit it to browse the storefront. On the games endpoint, q uses shared Android app search; omit q or choose games_category to browse games.
         * @minLength 1
         * @maxLength 2048
         */
        q?: string | null;
        /**
         * Chart identifier such as topselling_free, topselling_paid, or topgrossing. Excludes q and all pagination selectors. Apps and games charts require phone or an omitted store_device.
         * @minLength 1
         * @maxLength 128
         * @pattern ^[a-zA-Z0-9_-]+$
         */
        chart?: string | null;
        /**
         * Use the returned next_page_token with the same parameters. Excludes chart, section_page_token, and see_more_token.
         * @minLength 1
         * @maxLength 65536
         * @pattern ^[a-zA-Z0-9_=+/:.-]+$
         */
        next_page_token?: string | null;
        /**
         * Continue one result group using its returned token and the same parameters. Excludes the other pagination selectors and chart.
         * @minLength 1
         * @maxLength 65536
         * @pattern ^[a-zA-Z0-9_=+/:.-]+$
         */
        section_page_token?: string | null;
        /**
         * Open a result collection using its returned token and the same parameters. Excludes the other pagination selectors and chart.
         * @minLength 1
         * @maxLength 65536
         * @pattern ^[a-zA-Z0-9_=+/:.-]+$
         */
        see_more_token?: string | null;
        /**
         * Native game category identifier, such as GAME_PUZZLE. Excludes q and an explicit store_device.
         * @minLength 1
         * @maxLength 128
         * @pattern ^[a-zA-Z0-9_-]+$
         */
        games_category?: string | null;
        /** Omit for the default phone storefront. An explicit selection excludes q and category. */
        store_device?: "phone" | "tablet" | "tv" | "chromebook" | "watch" | "windows" | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search and browse Google Play movies and TV shows. */
    "litescrape.google_play_movies": {
      input: {
        /**
         * Storefront language, such as en, de, or zh-TW. Maximum 32 characters.
         * @maxLength 32
         * @pattern ^[a-zA-Z]{2,3}(?:[-_][a-zA-Z0-9]{2,8}){0,3}$
         */
        hl?: string;
        /**
         * Two-letter country code.
         * @pattern ^[a-zA-Z]{2}$
         */
        gl?: string;
        /**
         * Optional query with 1 to 2,048 UTF-8 bytes of printable text. Excludes category. Omit it to browse the storefront. On the games endpoint, q uses shared Android app search; omit q or choose games_category to browse games.
         * @minLength 1
         * @maxLength 2048
         */
        q?: string | null;
        /**
         * Chart identifier such as topselling_free, topselling_paid, or topgrossing. Excludes q and all pagination selectors. Apps and games charts require phone or an omitted store_device.
         * @minLength 1
         * @maxLength 128
         * @pattern ^[a-zA-Z0-9_-]+$
         */
        chart?: string | null;
        /**
         * Use the returned next_page_token with the same parameters. Excludes chart, section_page_token, and see_more_token.
         * @minLength 1
         * @maxLength 65536
         * @pattern ^[a-zA-Z0-9_=+/:.-]+$
         */
        next_page_token?: string | null;
        /**
         * Continue one result group using its returned token and the same parameters. Excludes the other pagination selectors and chart.
         * @minLength 1
         * @maxLength 65536
         * @pattern ^[a-zA-Z0-9_=+/:.-]+$
         */
        section_page_token?: string | null;
        /**
         * Open a result collection using its returned token and the same parameters. Excludes the other pagination selectors and chart.
         * @minLength 1
         * @maxLength 65536
         * @pattern ^[a-zA-Z0-9_=+/:.-]+$
         */
        see_more_token?: string | null;
        /**
         * Native movie category identifier, such as FAMILY for family movies. Excludes q.
         * @minLength 1
         * @maxLength 128
         * @pattern ^[a-zA-Z0-9_-]+$
         */
        movies_category?: string | null;
        /** Children's age range. Requires movies_category=FAMILY. */
        age?: "AGE_RANGE1" | "AGE_RANGE2" | "AGE_RANGE3" | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Google Play app, book, movie or show by ID. */
    "litescrape.google_play_product": {
      input: {
        /**
         * Storefront language, such as en, de, or zh-TW. Maximum 32 characters.
         * @maxLength 32
         * @pattern ^[a-zA-Z]{2,3}(?:[-_][a-zA-Z0-9]{2,8}){0,3}$
         */
        hl?: string;
        /**
         * Two-letter country code.
         * @pattern ^[a-zA-Z]{2}$
         */
        gl?: string;
        /**
         * Native Google Play product identifier, with 1 to 512 letters, digits, underscores, dots, or hyphens.
         * @minLength 1
         * @maxLength 512
         * @pattern ^[a-zA-Z0-9_.-]+$
         */
        product_id: string;
        /** Product catalog containing this identifier. */
        store?: "apps" | "books" | "audiobooks" | "movies" | "tv";
        /**
         * Native season identifier, such as tvseason-OVPad1njPzI.P. Requires store=tv.
         * @minLength 1
         * @maxLength 512
         * @pattern ^[a-zA-Z0-9_.-]+$
         */
        season_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** about this app value. */
        about_this_app?: Record<string, unknown> | null;
        /** badges value. */
        badges?: Array<Record<string, unknown>> | null;
        /** categories value. */
        categories?: Array<Record<string, unknown>> | null;
        /** data safety value. */
        data_safety?: Array<Record<string, unknown>> | null;
        /** developer contact value. */
        developer_contact?: Record<string, unknown> | null;
        /** media value. */
        media?: Record<string, unknown> | null;
        /** permissions value. */
        permissions?: Array<Record<string, unknown>> | null;
        /** product info value. */
        product_info?: Record<string, unknown> | null;
        /** ratings value. */
        ratings?: Array<Record<string, unknown>> | null;
        /** released on value. */
        released_on?: string | null;
        /** reviews value. */
        reviews?: Array<Record<string, unknown>> | null;
        /** similar results value. */
        similar_results?: Array<Record<string, unknown>> | null;
        /** updated on value. */
        updated_on?: string | null;
        /** what s new value. */
        what_s_new?: Record<string, unknown> | null;
        /** about the author value. */
        about_the_author?: Record<string, unknown> | null;
        /** about this audiobook value. */
        about_this_audiobook?: Record<string, unknown> | null;
        /** information value. */
        information?: Array<Record<string, unknown>> | null;
        /** listening information value. */
        listening_information?: Array<Record<string, unknown>> | null;
        /** about this ebook value. */
        about_this_ebook?: Record<string, unknown> | null;
        /** reading information value. */
        reading_information?: Array<Record<string, unknown>> | null;
        /** about this movie value. */
        about_this_movie?: Record<string, unknown> | null;
        /** cast value. */
        cast?: Array<Record<string, unknown>> | null;
        /** directors value. */
        directors?: Array<Record<string, unknown>> | null;
        /** producers value. */
        producers?: Array<Record<string, unknown>> | null;
        /** writers value. */
        writers?: Array<Record<string, unknown>> | null;
        /** about this show value. */
        about_this_show?: Record<string, unknown> | null;
        /** episodes value. */
        episodes?: Record<string, unknown> | null;
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get reviews for a Google Play app. */
    "litescrape.google_play_reviews": {
      input: {
        /**
         * Storefront language, such as en, de, or zh-TW. Maximum 32 characters.
         * @maxLength 32
         * @pattern ^[a-zA-Z]{2,3}(?:[-_][a-zA-Z0-9]{2,8}){0,3}$
         */
        hl?: string;
        /**
         * Two-letter country code.
         * @pattern ^[a-zA-Z]{2}$
         */
        gl?: string;
        /**
         * Native Google Play product identifier, with 1 to 512 letters, digits, underscores, dots, or hyphens.
         * @minLength 1
         * @maxLength 512
         * @pattern ^[a-zA-Z0-9_.-]+$
         */
        product_id: string;
        /** Product catalog containing this identifier. */
        store?: "apps" | "books" | "audiobooks" | "movies" | "tv";
        /** Platform associated with the reviews. */
        platform?: "phone" | "tablet" | "watch" | "chromebook" | "tv";
        /**
         * Only reviews with this rating, from 1 through 5.
         * @minimum 1
         * @maximum 5
         */
        rating?: number | null;
        /**
         * 1 for relevant, 2 for newest, or 3 for rating.
         * @minimum 1
         * @maximum 3
         */
        sort_by?: number;
        /**
         * Number of reviews, from 1 through 199.
         * @minimum 1
         * @maximum 199
         */
        num?: number;
        /**
         * Returned review continuation. Preserve product, store, language, country, platform, rating, sort order, and count.
         * @minLength 1
         * @maxLength 65536
         * @pattern ^[a-zA-Z0-9_=+/:.-]+$
         */
        next_page_token?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** reviews value. */
        reviews?: Array<Record<string, unknown>> | null;
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get reviews for a Google Maps place. */
    "litescrape.google_reviews": {
      input: {
        /**
         * Hexadecimal Google Maps feature identifier.
         *
         * Format: 0x123:0x456 Exactly one of data_id or place_id is required.
         */
        data_id?: string | null;
        /**
         * Google place identifier for the business whose reviews should be returned.
         *
         * Exactly one of place_id or data_id is required.
         */
        place_id?: string | null;
        /** Language used for returned review labels and place context. */
        hl?: string | null;
        /** Lowercase two-letter country code used for regional localization. */
        gl?: string | null;
        /** Controls the order of returned reviews. */
        sort_by?: "qualityScore" | "newestFirst" | "ratingHigh" | "ratingLow" | null;
        /**
         * Returns reviews associated with a topic ID from the topics response group.
         *
         * Cannot be combined with query.
         */
        topic_id?: string | null;
        /**
         * Returns reviews matching a free-text query.
         *
         * Cannot be combined with topic_id.
         */
        query?: string | null;
        /**
         * Requested number of unique reviews to return.
         *
         * Initial unfiltered requests accept 1 through 100; the default remains eight. Requests return one response with up to the requested number of available reviews. Filtered and continuation requests accept 1 through 20.
         */
        num?: number | string | null;
        /**
         * Opaque continuation token from pagination.next_page_token.
         *
         * Pass the token back unchanged. Continuation requests default to ten reviews unless num is provided.
         */
        next_page_token?: string | null;
        /** Includes additional review-provider icon and scale metadata when available. */
        source_metadata?: string | boolean | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** place info value. */
        place_info?: Record<string, unknown> | null;
        /** reviews value. */
        reviews?: Array<Record<string, unknown>> | null;
        /** topics value. */
        topics?: Array<Record<string, unknown>> | null;
        /** source summaries value. */
        source_summaries?: Array<Record<string, unknown>> | null;
        /** pagination value. */
        pagination?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get Google search results, including the AI Overview and People also ask. */
    "litescrape.google_search": {
      input: {
        /**
         * Opaque token from pagination.next_page_token. Send it alone to fetch the next page with the original search parameters.
         *
         * Prefer page_token to repeating the same search with start=10, start=20, or another offset. Send the token as soon as possible and no later than 5 minutes after receiving it. Available for ordinary Google Search, including fast mode; not available for tbm verticals. search_metadata.continuation is followed for a direct request. If Google omits a required link or the deadline expires, the request fails without billing.
         * @maxLength 32768
         */
        page_token?: string | null;
        /**
         * Google Search query, up to 2,048 characters.
         *
         * Required unless ludocid, kgmid, or page_token is supplied.
         * @maxLength 2048
         */
        q?: string | null;
        /**
         * Return organic results only, skipping AI Overview and all other result groups.
         *
         * Keeps search metadata and parameters. Omits cross-module position_absolute.
         */
        fast_mode?: boolean;
        /**
         * Human-readable city-level location encoded to UULE by Litescrape.
         *
         * Conflicts with uule and lat/lon.
         * @maxLength 512
         */
        location?: string | null;
        /**
         * Pre-encoded Google location value.
         *
         * Conflicts with location and lat/lon.
         * @maxLength 2048
         */
        uule?: string | null;
        /**
         * Latitude from -90 through 90.
         *
         * Requires lon and conflicts with location and uule.
         * @minimum -90
         * @maximum 90
         */
        lat?: number | null;
        /**
         * Longitude from -180 through 180.
         *
         * Requires lat and conflicts with location and uule.
         * @minimum -180
         * @maximum 180
         */
        lon?: number | null;
        /**
         * Decimal search-bias radius in meters.
         *
         * Requires location or lat/lon. Desktop: 1–199; tablet/mobile: 1–1,000.
         * @minimum 1
         * @maximum 1000
         */
        radius?: number | null;
        /**
         * Google local CID used to search for one entity.
         * @maxLength 128
         * @pattern ^\d+$
         */
        ludocid?: string | null;
        /**
         * Opaque Knowledge Graph or local-pack signature.
         * @maxLength 4096
         */
        lsig?: string | null;
        /**
         * Google Knowledge Graph machine ID, such as /m/0k8z.
         * @maxLength 512
         */
        kgmid?: string | null;
        /**
         * Opaque cached Google search context.
         * @maxLength 4096
         */
        si?: string | null;
        /**
         * Google layout or expansion control.
         * @maxLength 4096
         */
        ibp?: string | null;
        /**
         * Opaque Google filter token.
         * @maxLength 4096
         */
        uds?: string | null;
        /** Google result color presentation. */
        color_scheme?: "light" | "dark" | null;
        /** Results use google.com. Use gl, hl, cr, lr or geography for localization. */
        google_domain?: string;
        /**
         * Lowercase two-letter country localization code.
         * @pattern ^[a-z]{2}$
         */
        gl?: string | null;
        /**
         * Google interface and result language code.
         * @pattern ^[a-z]{2,3}(?:-[A-Za-z]{2,8})?$
         */
        hl?: string;
        /**
         * One or more countryXX restrictions joined with |.
         * @pattern ^country[A-Z]{2}(?:\|country[A-Z]{2})*$
         */
        cr?: string | null;
        /**
         * One or more lang_xx restrictions joined with |.
         * @pattern ^lang_[a-z]{2,3}(?:\|lang_[a-z]{2,3})*$
         */
        lr?: string | null;
        /**
         * Google native date or search filter string.
         * @maxLength 4096
         */
        tbs?: string | null;
        /** Google adult-content filtering. */
        safe?: "active" | "off" | null;
        /** Google auto-correction control. */
        nfpr?: "0" | "1" | null;
        /** Google similar-result filtering control. */
        filter?: "0" | "1" | null;
        /** Google personalization control; 0 asks for non-personalized results. */
        pws?: "0" | "1" | null;
        /** Google personalization peek flag, forwarded unchanged. */
        peek_pws?: "0" | "1" | null;
        /** Google vertical: lcl, vid, nws, shop, or pts. For image searches, use /api/google/images. */
        tbm?: "lcl" | "vid" | "nws" | "shop" | "pts" | null;
        /**
         * Non-negative Google result offset.
         *
         * Prefer page_token to repeating the same search with start=10, start=20, or another offset.
         * @minimum 0
         */
        start?: number;
        /**
         * Best-effort first-page result count, 1 to 10.
         * @minimum 1
         * @maximum 10
         */
        num?: number | null;
        /** Request device profile and radius bound. */
        device?: "desktop" | "tablet" | "mobile";
        /**
         * Original query associated with an autocomplete selection.
         * @maxLength 2048
         */
        oq?: string | null;
        /**
         * Google gs_lp value associated with an autocomplete selection.
         * @maxLength 4096
         */
        gs_lp?: string | null;
        /**
         * Google client identifier such as gws-wiz-serp.
         * @maxLength 64
         * @pattern ^[A-Za-z0-9._-]+$
         */
        sclient?: string | null;
        /**
         * Includes or excludes as_sitesearch.
         *
         * Requires as_sitesearch.
         */
        as_dt?: "i" | "e" | null;
        /**
         * Exact phrase query.
         * @maxLength 2048
         */
        as_epq?: string | null;
        /**
         * Excluded phrase query.
         * @maxLength 2048
         */
        as_eq?: string | null;
        /**
         * Require results that link to this URL.
         * @maxLength 4096
         */
        as_lq?: string | null;
        /**
         * Inclusive range lower bound.
         *
         * Requires as_nhi.
         * @minimum 0
         */
        as_nlo?: number | null;
        /**
         * Inclusive range upper bound.
         *
         * Requires as_nlo.
         * @minimum 0
         */
        as_nhi?: number | null;
        /**
         * Any-of search terms.
         * @maxLength 2048
         */
        as_oq?: string | null;
        /**
         * Additional all-of search terms.
         * @maxLength 2048
         */
        as_q?: string | null;
        /**
         * Quick range d, w, m, or y with an optional positive count.
         * @pattern ^[dwmy](?:[1-9][0-9]*)?$
         */
        as_qdr?: string | null;
        /**
         * Find pages related to this URL.
         * @maxLength 4096
         */
        as_rq?: string | null;
        /**
         * Site hostname to include or exclude.
         * @maxLength 253
         */
        as_sitesearch?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** search information value. */
        search_information?: Record<string, unknown> | null;
        /** dmca messages value. */
        dmca_messages?: Record<string, unknown> | null;
        /** find results on value. */
        find_results_on?: Array<Record<string, unknown>> | null;
        /** latest posts value. */
        latest_posts?: Array<Record<string, unknown>> | null;
        /** organic results value. */
        organic_results?: Array<Record<string, unknown>> | null;
        /** ads value. */
        ads?: Array<Record<string, unknown>> | null;
        /** ai overview value. */
        ai_overview?: Record<string, unknown> | null;
        /** answer box value. */
        answer_box?: Record<string, unknown> | null;
        /** knowledge graph value. */
        knowledge_graph?: Record<string, unknown> | null;
        /** local map value. */
        local_map?: Record<string, unknown> | null;
        /** local results value. */
        local_results?: Record<string, unknown> | null;
        /** pagination value. */
        pagination?: Record<string, unknown> | null;
        /** related questions value. */
        related_questions?: Array<Record<string, unknown>> | null;
        /** related searches value. */
        related_searches?: Array<Record<string, unknown>> | null;
        /** ask ai mode value. */
        ask_ai_mode?: Array<Record<string, unknown>> | null;
        /** available on value. */
        available_on?: Array<Record<string, unknown>> | null;
        /** broaden searches value. */
        broaden_searches?: Array<Record<string, unknown>> | null;
        /** complementary results value. */
        complementary_results?: Array<Record<string, unknown>> | null;
        /** discover more places value. */
        discover_more_places?: Array<Record<string, unknown>> | null;
        /** discussions and forums value. */
        discussions_and_forums?: Array<Record<string, unknown>> | null;
        /** episode guide value. */
        episode_guide?: Array<Record<string, unknown>> | null;
        /** events results value. */
        events_results?: Array<Record<string, unknown>> | null;
        /** filters value. */
        filters?: Array<Record<string, unknown>> | null;
        /** flight result value. */
        flight_result?: Record<string, unknown> | null;
        /** immersive products value. */
        immersive_products?: Array<Record<string, unknown>> | null;
        /** inline images value. */
        inline_images?: Array<Record<string, unknown>> | null;
        /** inline videos value. */
        inline_videos?: Array<Record<string, unknown>> | null;
        /** jobs results value. */
        jobs_results?: Record<string, unknown> | null;
        /** news results value. */
        news_results?: Array<Record<string, unknown>> | null;
        /** perspectives value. */
        perspectives?: Array<Record<string, unknown>> | null;
        /** places sites value. */
        places_sites?: Array<Record<string, unknown>> | null;
        /** recipes results value. */
        recipes_results?: Array<Record<string, unknown>> | null;
        /** refine by value. */
        refine_by?: Array<Record<string, unknown>> | null;
        /** related brands value. */
        related_brands?: Array<Record<string, unknown>> | null;
        /** related categories value. */
        related_categories?: Array<Record<string, unknown>> | null;
        /** scholarly articles value. */
        scholarly_articles?: Record<string, unknown> | null;
        /** shopping results value. */
        shopping_results?: Array<Record<string, unknown>> | null;
        /** categorized shopping results value. */
        categorized_shopping_results?: Array<Record<string, unknown>> | null;
        /** short videos value. */
        short_videos?: Array<Record<string, unknown>> | null;
        /** sports results value. */
        sports_results?: Record<string, unknown> | null;
        /** top sights value. */
        top_sights?: Record<string, unknown> | null;
        /** top stories value. */
        top_stories?: Array<Record<string, unknown>> | Record<string, unknown> | null;
        /** video results value. */
        video_results?: Array<Record<string, unknown>> | null;
        /** finance results value. */
        finance_results?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Google Shopping products. */
    "litescrape.google_shopping": {
      input: {
        /** Product query, up to 2,048 characters with no controls. Optional when a shoprs token is supplied. */
        q?: string | null;
        /** Named search origin, up to 512 characters and 63 UTF-8 bytes once encoded. Conflicts with uule. */
        location?: string | null;
        /** Canonical Google location token, up to 2,048 characters. Conflicts with location. */
        uule?: string | null;
        /** Validated first-party Google domain. */
        google_domain?: string;
        /** Two-letter country code, normalized to lowercase. */
        gl?: string | null;
        /** Language code such as en, en-GB, or de. */
        hl?: string | null;
        /** Google returns its real layout for the selected device. */
        device?: "desktop" | "tablet" | "mobile";
        /** Google refinement token from a previous response, up to 4,096 characters. An explicit refinement replaces the one it carries. */
        shoprs?: string | null;
        /** Lower price bound, 0 through 1,000,000,000. Excludes the other refinements. */
        min_price?: number | null;
        /** Upper price bound, at or above min_price. Excludes the other refinements. */
        max_price?: number | null;
        /** Price low to high, price high to low, rating high to low, or Google’s default relevance. Combines with one refinement. */
        sort_by?: "" | "1" | "2" | "3" | "4" | null;
        /** Only products with free shipping. Excludes the other refinements. */
        free_shipping?: boolean;
        /** Only products Google marks as on sale. Excludes the other refinements. */
        on_sale?: boolean;
        /** Only products from small businesses. Excludes the other refinements. */
        small_business?: boolean;
        /** Result offset from 0 through 1,000. */
        start?: number | null;
        /** 1 through 100. Responses are capped to this count and transparently consume Google’s fixed 40-product pages when needed. */
        num?: number | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** inline shopping results value. */
        inline_shopping_results?: Array<Record<string, unknown>> | null;
        /** search information value. */
        search_information?: Record<string, unknown> | null;
        /** product result value. */
        product_result?: Record<string, unknown> | null;
        /** shopping results value. */
        shopping_results?: Array<Record<string, unknown>> | null;
        /** categorized shopping results value. */
        categorized_shopping_results?: Array<Record<string, unknown>> | null;
        /** carousel filters value. */
        carousel_filters?: Array<Record<string, unknown>> | null;
        /** filters value. */
        filters?: Array<Record<string, unknown>> | null;
        /** offers value. */
        offers?: Array<Record<string, unknown>> | null;
        /** product reviews value. */
        product_reviews?: Array<Record<string, unknown>> | null;
        /** related products value. */
        related_products?: Array<Record<string, unknown>> | null;
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get direct merchant URLs for Google Shopping offers. */
    "litescrape.google_shopping_merchant_urls": {
      input: {
        /**
         * Send 1–100 headline offers. Each item requires merchant and headline_offer_docid from Shopping Search.
         * @minItems 1
         * @maxItems 100
         */
        products: Array<{
          /**
           * Optional product ID for correlation; not used for lookup.
           * @pattern ^[0-9]{1,20}$
           */
          gpcid?: string | null;
          /**
           * Exact offer ID from Shopping Search; required.
           * @pattern ^[0-9]{1,20}$
           */
          headline_offer_docid: string;
          /**
           * Copy source from Shopping Search; required for grouping offer lookups.
           * @minLength 1
           * @maxLength 200
           */
          merchant: string;
        }>;
        /**
         * Use the same country code as the original Shopping Search. Defaults to us.
         * @pattern ^[a-zA-Z]{2}$
         */
        gl?: string;
        /**
         * Use the same language code as the original Shopping Search. Defaults to en.
         * @pattern ^[a-zA-Z]{2,3}(?:-[a-zA-Z]{2,4})?$
         */
        hl?: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** results value. */
        results?: Array<Record<string, unknown>>;
        /** summary value. */
        summary?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get every merchant offer for a Google Shopping product. */
    "litescrape.google_shopping_product": {
      input: {
        /** The search term this product was found with, up to 2,048 characters. Google resolves the product viewer against it as well as the identifiers. */
        q?: string | null;
        /** Named search origin, up to 512 characters and 63 UTF-8 bytes once encoded. Conflicts with uule. */
        location?: string | null;
        /** Canonical Google location token, up to 2,048 characters. Conflicts with location. */
        uule?: string | null;
        /** Validated first-party Google domain. */
        google_domain?: string;
        /** Two-letter country code, normalized to lowercase. */
        gl?: string | null;
        /** Language code such as en, en-GB, or de. */
        hl?: string | null;
        /** Google returns its real layout for the selected device. */
        device?: "desktop" | "tablet" | "mobile";
        /**
         * Product cluster ID from a shopping result, 1 to 20 decimal digits. Optional when a prds token is supplied.
         *
         * Every Shopping result with a gpcid includes a ready-made litescrape_product_link.
         */
        gpcid?: string | null;
        /** Headline merchant offer document ID from the same shopping result, 1 to 20 decimal digits. Goes with gpcid rather than prds. */
        headline_offer_docid?: string | null;
        /** Image document ID from the same shopping result, 1 to 20 decimal digits. Goes with gpcid rather than prds. */
        image_docid?: string | null;
        /** Google product selector token from a previous response, up to 2,048 characters. Conflicts with gpcid and the identifiers above. */
        prds?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** inline shopping results value. */
        inline_shopping_results?: Array<Record<string, unknown>> | null;
        /** search information value. */
        search_information?: Record<string, unknown> | null;
        /** product result value. */
        product_result?: Record<string, unknown> | null;
        /** shopping results value. */
        shopping_results?: Array<Record<string, unknown>> | null;
        /** categorized shopping results value. */
        categorized_shopping_results?: Array<Record<string, unknown>> | null;
        /** carousel filters value. */
        carousel_filters?: Array<Record<string, unknown>> | null;
        /** filters value. */
        filters?: Array<Record<string, unknown>> | null;
        /** offers value. */
        offers?: Array<Record<string, unknown>> | null;
        /** product reviews value. */
        product_reviews?: Array<Record<string, unknown>> | null;
        /** related products value. */
        related_products?: Array<Record<string, unknown>> | null;
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Home Depot product's details, price and availability. This upstream API is Alpha. */
    "litescrape.homedepot_product": {
      input: {
        /**
         * Public HTTPS product URL on this retailer's site.
         * @minLength 1
         * @maxLength 4096
         */
        url: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** product value. */
        product?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Home Depot products with prices and availability. This upstream API is Alpha. */
    "litescrape.homedepot_search": {
      input: {
        /**
         * Product keywords to search for.
         * @minLength 1
         * @maxLength 500
         */
        query: string;
        /**
         * Only the first result page is currently supported.
         * @minimum 1
         * @maximum 1
         */
        page?: number;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** products value. */
        products?: Array<Record<string, unknown>>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Homes.com property by URL. This upstream API is Alpha. */
    "litescrape.homes_property": {
      input: {
        /**
         * Homes.com property URL under /property/, without query parameters.
         *
         * Alpha: availability may vary by location or property. Returns available property facts, descriptions, coordinates, agents and photos. Price history is not available from this route. Returns available fields for the requested property.
         * @maxLength 2048
         */
        url: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** property value. */
        property?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Homes.com listings from a search URL. This upstream API is Alpha. */
    "litescrape.homes_search": {
      input: {
        /**
         * Homes.com location search URL, including sale, rental, price, property-type or page filters.
         *
         * Alpha: availability may vary by location or property. Use the site URL to set filters or select a page. Follow pagination.next when present. Page links and total counts are included when available.
         * @maxLength 4096
         */
        url: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** properties value. */
        properties?: Array<Record<string, unknown>>;
        /** search information value. */
        search_information?: Record<string, unknown>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get an IKEA product's details, price and availability. This upstream API is Alpha. */
    "litescrape.ikea_product": {
      input: {
        /**
         * Public HTTPS product URL on this retailer's site.
         * @minLength 1
         * @maxLength 4096
         */
        url: string;
        /**
         * Retailer's store ID. Selects the store catalog, pricing or availability where the retailer exposes it.
         * @minLength 1
         * @maxLength 8
         * @pattern ^[0-9]{1,8}$
         */
        store_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** product value. */
        product?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search IKEA products with prices and availability. This upstream API is Alpha. */
    "litescrape.ikea_search": {
      input: {
        /**
         * Product keywords to search for.
         * @minLength 1
         * @maxLength 500
         */
        query: string;
        /**
         * One-based result page.
         * @minimum 1
         * @maximum 100
         */
        page?: number;
        /**
         * Retailer's store ID. Selects the store catalog, pricing or availability where the retailer exposes it.
         * @minLength 1
         * @maxLength 8
         * @pattern ^[0-9]{1,8}$
         */
        store_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** products value. */
        products?: Array<Record<string, unknown>>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Indeed jobs by keyword and location, with salary, experience and remote filters. */
    "litescrape.indeed_search": {
      input: {
        /**
         * Job title, keywords, company or Indeed query syntax. Omit to browse using only location and filters.
         * @minLength 1
         * @maxLength 512
         */
        q?: string | null;
        /**
         * One-based results page. Use next_page from the response to continue.
         * @minimum 1
         */
        page?: number;
        /**
         * Continuation token from next_page_token. Use it with next_page and unchanged search parameters.
         * @minLength 1
         * @maxLength 32768
         * @pattern ^[A-Za-z0-9+/=_-]+$
         */
        page_token?: string | null;
        /**
         * City, state, ZIP code, or Remote.
         * @minLength 1
         * @maxLength 512
         */
        location?: string | null;
        /**
         * Search radius in radius_unit units; 0 means exact location.
         * @minimum 0
         * @maximum 100
         */
        radius?: number;
        /** Distance unit for the location radius. */
        radius_unit?: "miles" | "kilometers";
        /**
         * Two-letter Indeed market, for example US, CA, GB, DE or AU.
         * @pattern ^[A-Z]{2}$
         */
        country?: string;
        /**
         * Indeed locale, such as fr-CA or de-DE. Defaults to en-{country}; set the language for non-English searches.
         * @pattern ^[a-z]{2,3}-[A-Z]{2}$
         */
        locale?: string | null;
        /**
         * Jobs requested per page. Results may contain fewer jobs; use next_page_token to continue.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Result ordering. */
        sort?: "relevance" | "date";
        /**
         * Maximum age in days since the job appeared on Indeed.
         * @minimum 1
         */
        fromage?: number | null;
        /** Employment type filter. */
        job_type?: "fulltime" | "parttime" | "contract" | "temporary" | "internship" | "permanent" | "temp_to_hire" | "freelance" | null;
        /** Filter for remote or hybrid jobs. */
        workplace?: "remote" | "hybrid" | null;
        /** Require Indeed Apply. */
        easy_apply?: boolean;
        /** Education level filter. */
        education?: "high_school" | "associate" | "bachelor" | "master" | "doctoral" | null;
        /** Require jobs marked No Experience Required. */
        no_experience?: boolean;
        /** Filter for entry, mid or senior level jobs. */
        experience_level?: "entry" | "mid" | "senior" | null;
        /**
         * Minimum annualized base salary in the market's currency.
         * @minimum 0
         */
        salary_min?: number | null;
        /**
         * Maximum annualized base salary in the market's currency.
         * @minimum 0
         */
        salary_max?: number | null;
        /**
         * Minimum required experience in months.
         * @minimum 0
         */
        experience_months_min?: number | null;
        /**
         * Maximum required experience in months.
         * @minimum 0
         */
        experience_months_max?: number | null;
        /**
         * Language of the job posting, independent of the response locale.
         * @pattern ^[a-z]{2,3}$
         */
        job_language?: string | null;
        /**
         * Encoded Indeed employer keys as a JSON array. Names are not keys; company names can be searched in q using company:name.
         * @minItems 1
         * @maxItems 100
         */
        employer_keys?: Array<string> | null;
        /**
         * Require all of these Indeed attribute codes (JSON array), covering skills, benefits, shifts, licenses, clearances and employment types. Codes and labels are included on returned jobs.
         * @minItems 1
         * @maxItems 100
         */
        attribute_keys?: Array<string> | null;
        /**
         * Require any of these Indeed attribute codes (JSON array), combined with all other supplied filters.
         * @minItems 1
         * @maxItems 100
         */
        any_attribute_keys?: Array<string> | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** jobs results value. */
        jobs_results?: Array<Record<string, unknown>>;
        /** search information value. */
        search_information?: Record<string, unknown>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /** litescrape pagination value. */
        litescrape_pagination?: Record<string, unknown>;
        /** available filters value. */
        available_filters?: Array<Record<string, unknown>> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve public Instagram embed data. This upstream API is Alpha. */
    "litescrape.instagram_embed": {
      input: {
        /**
         * Instagram username without @.
         * @pattern ^[A-Za-z0-9_.]{1,30}$
         */
        handle: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** query value. */
        query?: string | null;
        /** title value. */
        title?: string | null;
        /** total media count value. */
        total_media_count?: number | null;
        /** description value. */
        description?: Record<string, unknown> | null;
        /** suggested terms value. */
        suggested_terms?: Array<string> | null;
        /** posts value. */
        posts?: Array<unknown> | null;
        /** sections value. */
        sections?: Array<unknown> | null;
        /** data value. */
        data?: Record<string, unknown> | null;
        /** items value. */
        items?: Array<unknown> | null;
        /** next max id value. */
        next_max_id?: string | null;
        /** cursor value. */
        cursor?: string | null;
        /** has more value. */
        has_more?: boolean | null;
        /** handle value. */
        handle?: string | null;
        /** media count value. */
        media_count?: number | null;
        /** is estimated value. */
        is_estimated?: boolean | null;
        /** html value. */
        html?: string | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve public Instagram post data. This upstream API is Alpha. */
    "litescrape.instagram_post": {
      input: {
        /** HTTPS Instagram post, reel or TV URL. */
        url: string;
        /** Return compact media details. */
        trim?: boolean;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** query value. */
        query?: string | null;
        /** title value. */
        title?: string | null;
        /** total media count value. */
        total_media_count?: number | null;
        /** description value. */
        description?: Record<string, unknown> | null;
        /** suggested terms value. */
        suggested_terms?: Array<string> | null;
        /** posts value. */
        posts?: Array<unknown> | null;
        /** sections value. */
        sections?: Array<unknown> | null;
        /** data value. */
        data?: Record<string, unknown> | null;
        /** items value. */
        items?: Array<unknown> | null;
        /** next max id value. */
        next_max_id?: string | null;
        /** cursor value. */
        cursor?: string | null;
        /** has more value. */
        has_more?: boolean | null;
        /** handle value. */
        handle?: string | null;
        /** media count value. */
        media_count?: number | null;
        /** is estimated value. */
        is_estimated?: boolean | null;
        /** html value. */
        html?: string | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve public Instagram posts data. This upstream API is Alpha. */
    "litescrape.instagram_posts": {
      input: {
        /**
         * Instagram username without @.
         * @pattern ^[A-Za-z0-9_.]{1,30}$
         */
        handle: string;
        /** Return a compact profile containing public identity and counts. */
        trim?: boolean;
        /**
         * next_max_id from the previous page.
         * @minLength 1
         * @maxLength 8192
         */
        next_max_id?: string | null;
        /**
         * Maximum number of posts requested from Instagram.
         * @minimum 1
         * @maximum 50
         */
        num?: number;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** query value. */
        query?: string | null;
        /** title value. */
        title?: string | null;
        /** total media count value. */
        total_media_count?: number | null;
        /** description value. */
        description?: Record<string, unknown> | null;
        /** suggested terms value. */
        suggested_terms?: Array<string> | null;
        /** posts value. */
        posts?: Array<unknown> | null;
        /** sections value. */
        sections?: Array<unknown> | null;
        /** data value. */
        data?: Record<string, unknown> | null;
        /** items value. */
        items?: Array<unknown> | null;
        /** next max id value. */
        next_max_id?: string | null;
        /** cursor value. */
        cursor?: string | null;
        /** has more value. */
        has_more?: boolean | null;
        /** handle value. */
        handle?: string | null;
        /** media count value. */
        media_count?: number | null;
        /** is estimated value. */
        is_estimated?: boolean | null;
        /** html value. */
        html?: string | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve public Instagram profile data. This upstream API is Alpha. */
    "litescrape.instagram_profile": {
      input: {
        /**
         * Instagram username without @.
         * @pattern ^[A-Za-z0-9_.]{1,30}$
         */
        handle: string;
        /** Return a compact profile containing public identity and counts. */
        trim?: boolean;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** query value. */
        query?: string | null;
        /** title value. */
        title?: string | null;
        /** total media count value. */
        total_media_count?: number | null;
        /** description value. */
        description?: Record<string, unknown> | null;
        /** suggested terms value. */
        suggested_terms?: Array<string> | null;
        /** posts value. */
        posts?: Array<unknown> | null;
        /** sections value. */
        sections?: Array<unknown> | null;
        /** data value. */
        data?: Record<string, unknown> | null;
        /** items value. */
        items?: Array<unknown> | null;
        /** next max id value. */
        next_max_id?: string | null;
        /** cursor value. */
        cursor?: string | null;
        /** has more value. */
        has_more?: boolean | null;
        /** handle value. */
        handle?: string | null;
        /** media count value. */
        media_count?: number | null;
        /** is estimated value. */
        is_estimated?: boolean | null;
        /** html value. */
        html?: string | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve public Instagram profile post count data. This upstream API is Alpha. */
    "litescrape.instagram_profile_post_count": {
      input: {
        /**
         * Instagram username without @.
         * @pattern ^[A-Za-z0-9_.]{1,30}$
         */
        handle: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** query value. */
        query?: string | null;
        /** title value. */
        title?: string | null;
        /** total media count value. */
        total_media_count?: number | null;
        /** description value. */
        description?: Record<string, unknown> | null;
        /** suggested terms value. */
        suggested_terms?: Array<string> | null;
        /** posts value. */
        posts?: Array<unknown> | null;
        /** sections value. */
        sections?: Array<unknown> | null;
        /** data value. */
        data?: Record<string, unknown> | null;
        /** items value. */
        items?: Array<unknown> | null;
        /** next max id value. */
        next_max_id?: string | null;
        /** cursor value. */
        cursor?: string | null;
        /** has more value. */
        has_more?: boolean | null;
        /** handle value. */
        handle?: string | null;
        /** media count value. */
        media_count?: number | null;
        /** is estimated value. */
        is_estimated?: boolean | null;
        /** html value. */
        html?: string | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get popular Instagram posts for a search topic. This upstream API is Alpha. */
    "litescrape.instagram_search_popular": {
      input: {
        /**
         * Popular topic text or URL slug; spaces become hyphens.
         * @minLength 1
         * @maxLength 200
         */
        query: string;
        /**
         * Opaque cursor returned by search-popular for the same query.
         * @minLength 1
         * @maxLength 8192
         */
        cursor?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** query value. */
        query?: string | null;
        /** title value. */
        title?: string | null;
        /** total media count value. */
        total_media_count?: number | null;
        /** description value. */
        description?: Record<string, unknown> | null;
        /** suggested terms value. */
        suggested_terms?: Array<string> | null;
        /** posts value. */
        posts?: Array<unknown> | null;
        /** sections value. */
        sections?: Array<unknown> | null;
        /** data value. */
        data?: Record<string, unknown> | null;
        /** items value. */
        items?: Array<unknown> | null;
        /** next max id value. */
        next_max_id?: string | null;
        /** cursor value. */
        cursor?: string | null;
        /** has more value. */
        has_more?: boolean | null;
        /** handle value. */
        handle?: string | null;
        /** media count value. */
        media_count?: number | null;
        /** is estimated value. */
        is_estimated?: boolean | null;
        /** html value. */
        html?: string | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Kroger product's details, price and availability. This upstream API is Alpha. */
    "litescrape.kroger_product": {
      input: {
        /**
         * Public HTTPS product URL on this retailer's site.
         * @minLength 1
         * @maxLength 4096
         */
        url: string;
        /**
         * Retailer's store ID. Selects the store catalog, pricing or availability where the retailer exposes it.
         * @minLength 1
         * @maxLength 8
         * @pattern ^[0-9]{1,8}$
         */
        store_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** product value. */
        product?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Kroger products with prices and availability. This upstream API is Alpha. */
    "litescrape.kroger_search": {
      input: {
        /**
         * Product keywords to search for.
         * @minLength 1
         * @maxLength 500
         */
        query: string;
        /**
         * Only the first result page is currently supported.
         * @minimum 1
         * @maximum 1
         */
        page?: number;
        /**
         * Retailer's store ID. Selects the store catalog, pricing or availability where the retailer exposes it.
         * @minLength 1
         * @maxLength 8
         * @pattern ^[0-9]{1,8}$
         */
        store_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** products value. */
        products?: Array<Record<string, unknown>>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Levels.fyi jobs by company, location, level and pay. */
    "litescrape.levels_search": {
      input: {
        /**
         * Job title, keywords or company; omit to browse.
         * @minLength 1
         * @maxLength 512
         */
        q?: string | null;
        /**
         * One-based results page. Use next_page from the response to continue.
         * @minimum 1
         */
        page?: number;
        /**
         * Company slug, such as google.
         * @pattern ^[a-z0-9][a-z0-9-]{0,127}$
         */
        company?: string | null;
        /**
         * Levels.fyi location slug, such as united-states; not a free-text city name.
         * @pattern ^[a-z0-9][a-z0-9-]{0,127}$
         */
        location?: string | null;
        /** Result ordering. */
        sort?: "relevance" | "date_published" | "total_compensation";
        /**
         * Companies per page; jobs are grouped by company.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /**
         * Maximum matching jobs included for each company.
         * @minimum 1
         * @maximum 15
         */
        jobs_per_company?: number;
        /**
         * Company slugs as a JSON array; mutually exclusive with company. A single company advances jobs instead of company groups.
         * @minItems 1
         * @maxItems 100
         */
        companies?: Array<string> | null;
        /**
         * City, state or country slugs as a JSON array, such as ["united-states","canada"]. Mutually exclusive with location.
         * @minItems 1
         * @maxItems 100
         */
        locations?: Array<string> | null;
        /**
         * Job-family slugs as a JSON array, such as ["software-engineer"].
         * @minItems 1
         * @maxItems 100
         */
        job_families?: Array<string> | null;
        /**
         * Standard seniority levels as a JSON array.
         * @minItems 1
         * @maxItems 100
         */
        levels?: Array<"internship" | "entry" | "mid_staff" | "principal" | "manager" | "director" | "executive"> | null;
        /**
         * Employment types as a JSON array.
         * @minItems 1
         * @maxItems 100
         */
        employment_types?: Array<"full_time" | "part_time" | "contract" | "temporary" | "internship" | "volunteer" | "other"> | null;
        /**
         * Work arrangements as a JSON array.
         * @minItems 1
         * @maxItems 100
         */
        work_arrangements?: Array<"remote" | "office" | "hybrid"> | null;
        /**
         * Minimum annual base compensation in USD.
         * @minimum 0
         */
        min_base_compensation?: number | null;
        /**
         * Minimum median annual total compensation in USD; may include Levels.fyi estimates.
         * @minimum 0
         */
        min_total_compensation?: number | null;
        /**
         * Company types as a JSON array.
         * @minItems 1
         * @maxItems 100
         */
        company_types?: Array<"private" | "public" | "nonprofit" | "government" | "education" | "delisted"> | null;
        /**
         * Company sizes as a JSON array: seed 1–50, early 51–200, mid 201–1,000, large 1,001–10,000, enterprise 10,001+ employees.
         * @minItems 1
         * @maxItems 100
         */
        company_sizes?: Array<"seed" | "early" | "mid" | "large" | "enterprise"> | null;
        /**
         * Company valuation ranges in USD as a JSON array of [minimum, maximum] pairs.
         * @minItems 1
         * @maxItems 100
         */
        company_valuations?: Array<Array<number>> | null;
        /**
         * Benefit IDs as a JSON array, for example 58 remote work, 4 retirement plan, 35 paid time off, 22 health insurance.
         * @minItems 1
         * @maxItems 100
         */
        perk_ids?: Array<number> | null;
        /**
         * Maximum posting age in posted_within_unit units.
         * @minimum 1
         */
        posted_within?: number | null;
        /** Unit for posted_within. */
        posted_within_unit?: "days" | "weeks" | "months";
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** jobs results value. */
        jobs_results?: Array<Record<string, unknown>>;
        /** search information value. */
        search_information?: Record<string, unknown>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /** litescrape pagination value. */
        litescrape_pagination?: Record<string, unknown>;
        /** available filters value. */
        available_filters?: Array<Record<string, unknown>> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get Naver AI Briefing answers with citations. */
    "litescrape.naver_ai_overview": {
      input: {
        /**
         * Query for an AI Briefing; excludes page_token.
         * @minLength 1
         * @maxLength 4096
         */
        query?: string | null;
        /**
         * Business AI Briefing continuation from ai_briefing.page_token; excludes query.
         * @minLength 1
         * @maxLength 2048
         */
        page_token?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** markdown value. */
        markdown?: string | null;
        /** text blocks value. */
        text_blocks?: Array<Record<string, unknown>>;
        /** references value. */
        references?: Array<Record<string, unknown>>;
        /** media value. */
        media?: Array<Record<string, unknown>>;
        /** related questions value. */
        related_questions?: Array<Record<string, unknown>> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Naver web, news, video and image results. */
    "litescrape.naver_search": {
      input: {
        /**
         * Search query, including Naver search operators.
         * @minLength 1
         * @maxLength 4096
         */
        query: string;
        /**
         * Result offset; takes precedence over page.
         * @minimum 0
         */
        start?: number | null;
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        page?: number | null;
        /**
         * Image result limit; defaults to 50 for images.
         * @minimum 1
         * @maximum 100
         */
        num?: number | null;
        /** Search type: nexearch (general search), web, video, news, or image. */
        where?: "nexearch" | "web" | "video" | "news" | "image";
        /** News: 0 relevance (default), 1 latest, 2 oldest. Other types: r relevance (default), dd latest. */
        sort_by?: "r" | "dd" | "0" | "1" | "2" | null;
        /** Time window: all, 1h, 1d, 1w, 1m, 3m, 6m, 1y, or fromYYYYMMDDtoYYYYMMDD. News also accepts 2h, 3h, 4h, 5h, and 6h. */
        period?: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** organic results value. */
        organic_results?: Array<Record<string, unknown>> | null;
        /** news results value. */
        news_results?: Array<Record<string, unknown>> | null;
        /** video results value. */
        video_results?: Array<Record<string, unknown>> | null;
        /** images results value. */
        images_results?: Array<Record<string, unknown>> | null;
        /** ads results value. */
        ads_results?: Array<Record<string, unknown>> | null;
        /** post results value. */
        post_results?: Array<Record<string, unknown>> | null;
        /** shopping results value. */
        shopping_results?: Array<Record<string, unknown>> | null;
        /** booking results value. */
        booking_results?: Array<Record<string, unknown>> | null;
        /** dictionary results value. */
        dictionary_results?: Array<Record<string, unknown>> | null;
        /** knowledge graph value. */
        knowledge_graph?: Record<string, unknown> | null;
        /** related searches value. */
        related_searches?: Array<Record<string, unknown>> | null;
        /** related results value. */
        related_results?: Array<Record<string, unknown>> | null;
        /** ai briefing value. */
        ai_briefing?: Record<string, unknown> | null;
        /** pagination value. */
        pagination?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Realtor.com property by URL. This upstream API is Alpha. */
    "litescrape.realtor_property": {
      input: {
        /**
         * Realtor.com property URL under /realestateandhomes-detail/, without query parameters.
         *
         * Alpha: availability may vary by location or property. Returns available fields for the requested property.
         * @maxLength 2048
         */
        url: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** property value. */
        property?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Realtor.com listings from a search URL. This upstream API is Alpha. */
    "litescrape.realtor_search": {
      input: {
        /**
         * Listings per results page, from 1 to 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Realtor.com city_STATE or ZIP search URL under /realestateandhomes-search/ or /apartments/.
         *
         * Alpha: availability may vary by location or property. Supported URL filters: price, beds, baths, sqft, type-single-family-home, show-recently-sold and pg-1 through pg-100. Unsupported filters and query parameters are rejected. Follow pagination.next when present. Bedroom filters require whole numbers.
         * @maxLength 4096
         */
        url: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** properties value. */
        properties?: Array<Record<string, unknown>>;
        /** search information value. */
        search_information?: Record<string, unknown>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Redfin property by listing URL. */
    "litescrape.redfin_property": {
      input: {
        /**
         * Redfin property URL ending in /home/<property_id>.
         * @maxLength 2048
         */
        url: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** property value. */
        property?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Redfin homes for sale or recently sold. */
    "litescrape.redfin_search": {
      input: {
        /**
         * Minimum listing price in US dollars.
         * @minimum 0
         */
        min_price?: number | null;
        /**
         * Maximum listing price in US dollars.
         * @minimum 0
         */
        max_price?: number | null;
        /**
         * Minimum number of bedrooms.
         * @minimum 0
         * @maximum 20
         */
        min_beds?: number | null;
        /**
         * Maximum number of bedrooms.
         * @minimum 0
         * @maximum 20
         */
        max_beds?: number | null;
        /**
         * Minimum number of bathrooms.
         * @minimum 0
         * @maximum 20
         */
        min_baths?: number | null;
        /**
         * Minimum interior area in square feet.
         * @minimum 0
         */
        min_sqft?: number | null;
        /**
         * Maximum interior area in square feet.
         * @minimum 0
         */
        max_sqft?: number | null;
        /**
         * Redfin city, ZIP, county or neighborhood search URL. Existing URL filters are retained unless overridden.
         *
         * Supply one location: a region URL, region_id with region_type, or map_bounds.
         * @maxLength 2048
         */
        url?: string | null;
        /**
         * Redfin region identifier; requires region_type.
         * @exclusiveMinimum 0
         */
        region_id?: number | null;
        /**
         * Region kind: 1 neighborhood, 2 ZIP region, 5 county, 6 city, 11 state.
         *
         * A ZIP region identifier differs from the ZIP code. Use a Redfin ZIP search URL if the region identifier is unknown.
         */
        region_type?: 1 | 2 | 5 | 6 | 11 | null;
        /** Map rectangle as north,east,south,west. */
        map_bounds?: string | null;
        /** Listing status. Defaults to for_sale when no URL is supplied. */
        status?: "for_sale" | "sold" | null;
        /**
         * Sold listings from the last N days; requires status=sold. Defaults to 180 for sold searches.
         * @minimum 1
         * @maximum 365
         */
        sold_within_days?: number | null;
        /** Restrict results to one property type. */
        property_type?: "house" | "condo" | "townhouse" | "multi_family" | "land" | "other" | "manufactured" | "co_op" | null;
        /** Result ordering. Defaults to recommended when no URL is supplied. */
        sort?: "recommended" | "newest" | "price_asc" | "price_desc" | "sqft" | null;
        /**
         * Maximum homes returned. Narrow the region or map bounds when results reach this limit.
         *
         * The response does not advertise pagination or a total count. If search_information.possibly_truncated is true, narrow the location or filters.
         * @minimum 1
         * @maximum 350
         */
        limit?: number;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** properties value. */
        properties?: Array<Record<string, unknown>>;
        /** search information value. */
        search_information?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Replace the API key and immediately invalidate the current key. Save the returned key and reconnect before making another request. */
    "litescrape.rotate_key": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Enable or disable zero data retention. Enabling it deletes completed batch results and disables new asynchronous jobs and screenshots. Active batch jobs must finish first. */
    "litescrape.set_zero_data_retention": {
      input: {
        /** Whether zero data retention is enabled. */
        zdr_enabled: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Create a checkout URL to authorize automatic top-ups. Complete card authorization at the returned URL. */
    "litescrape.setup_auto_top_up": {
      input: {
        /**
         * Remaining calls threshold; must be below calls purchased by one top-up.
         * @minimum 1
         */
        threshold_units: number;
        /**
         * Top-up amount in US cents.
         * @minimum 1000
         * @maximum 100000
         */
        top_up_cents: number;
        /**
         * UTC calendar-month limit in US cents; must cover one top-up.
         * @maximum 1000000
         */
        monthly_limit_cents: number;
        /** Explicit consent to configure automatic top-ups. */
        consent: true;
      };
      output: Record<string, unknown>;
    };
    /** Get a Sprouts product's details, price and availability. This upstream API is Alpha. */
    "litescrape.sprouts_product": {
      input: {
        /**
         * Public HTTPS product URL on this retailer's site.
         * @minLength 1
         * @maxLength 4096
         */
        url: string;
        /**
         * Sprouts store location ID, such as 17650. Selects that store's in-store catalog.
         * @minLength 1
         * @maxLength 8
         * @pattern ^[0-9]{1,8}$
         */
        store_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** product value. */
        product?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Sprouts products with prices and availability. This upstream API is Alpha. */
    "litescrape.sprouts_search": {
      input: {
        /**
         * Product keywords to search for.
         * @minLength 1
         * @maxLength 500
         */
        query: string;
        /**
         * One-based result page.
         * @minimum 1
         * @maximum 100
         */
        page?: number;
        /**
         * Sprouts store location ID, such as 17650. Selects that store's in-store catalog.
         * @minLength 1
         * @maxLength 8
         * @pattern ^[0-9]{1,8}$
         */
        store_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** products value. */
        products?: Array<Record<string, unknown>>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Airbnb stays by destination and dates. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_airbnb_search": {
      input: {
        /** Airbnb Search asynchronous parameters. */
        body: {
          /**
           * Destination, address, or landmark.
           * @maxLength 500
           */
          q?: string;
          /** North,east,south,west map coordinates. */
          map_bounds?: string;
          /** Airbnb localization domain. */
          airbnb_domain?: string;
          /** Currency code for returned prices. */
          currency?: string;
          /**
           * Check-in date in YYYY-MM-DD format.
           * @format date
           */
          check_in_date?: string;
          /**
           * Check-out date, later than check-in.
           * @format date
           */
          check_out_date?: string;
          /**
           * Number of guests aged 13 or above.
           * @minimum 0
           */
          adults?: number;
          /**
           * Number of guests aged 2 to 12.
           * @minimum 0
           */
          children?: number;
          /**
           * Number of guests under 2.
           * @minimum 0
           */
          infants?: number;
          /**
           * Number of pets.
           * @minimum 0
           */
          pets?: number;
          /** Type of place. */
          room_type?: "entire_home" | "private_room";
          /**
           * Minimum total trip price including fees.
           * @minimum 0
           */
          min_price?: number;
          /**
           * Maximum total trip price including fees.
           * @minimum 0
           */
          max_price?: number;
          /**
           * Minimum bedrooms.
           * @minimum 0
           */
          bedrooms?: number;
          /**
           * Minimum beds.
           * @minimum 0
           */
          beds?: number;
          /**
           * Minimum bathrooms.
           * @minimum 0
           */
          bathrooms?: number;
          /** Comma-separated property types. */
          property_types?: string;
          /** Comma-separated required amenities. */
          amenities?: string;
          /** Comma-separated accessibility features. */
          accessibility_features?: string;
          /** Comma-separated host language codes. */
          host_languages?: string;
          /** Require instant booking. */
          instant_book?: boolean;
          /** Require self check-in. */
          self_check_in?: boolean;
          /** Only Guest favorites. */
          guest_favorite?: boolean;
          /** Only Airbnb Luxe places. */
          luxe?: boolean;
          /**
           * Results page, from 1 to 15.
           * @minimum 1
           * @maximum 15
           */
          page?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get an AliExpress product's details and price. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_aliexpress_product": {
      input: {
        /** AliExpress Product asynchronous parameters. */
        body: {
          /**
           * Public HTTPS product URL on this retailer's site.
           * @minLength 1
           * @maxLength 4096
           */
          url: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search AliExpress products with prices. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_aliexpress_search": {
      input: {
        /** AliExpress Search asynchronous parameters. */
        body: {
          /**
           * Product keywords to search for.
           * @minLength 1
           * @maxLength 500
           */
          query: string;
          /**
           * One-based result page.
           * @minimum 1
           * @maximum 100
           */
          page?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get Amazon search suggestions for a prefix and department. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_amazon_autocomplete": {
      input: {
        /** Amazon Autocomplete asynchronous parameters. */
        body: {
          /** Amazon storefront hostname. */
          amazon_domain?: string;
          /**
           * Partial search text to complete.
           * @minLength 1
           */
          k: string;
          /**
           * Department alias used to narrow suggestions; aps searches all departments.
           * @minLength 1
           * @pattern ^[a-zA-Z0-9_-]+$
           */
          amazon_department?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get the featured reviews for an Amazon product. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_amazon_featured_reviews": {
      input: {
        /** Amazon Featured Reviews asynchronous parameters. */
        body: {
          /**
           * Ten-character product ASIN in the selected Amazon storefront.
           *
           * Amazon chooses review order. Sorting, star filters and verified-purchase filters are not supported.
           * @pattern ^[A-Z0-9]{10}$
           */
          asin: string;
          /**
           * Amazon storefront hostname. Omit for amazon.com. Supported on 23 storefronts; amazon.cn is not supported.
           *
           * Use an ASIN available in the selected storefront. Featured reviews can include international reviews. If featured reviews are unavailable, the request returns a failure rather than an empty review list.
           */
          amazon_domain?: "amazon.ae" | "amazon.ca" | "amazon.co.jp" | "amazon.co.uk" | "amazon.co.za" | "amazon.com" | "amazon.com.au" | "amazon.com.be" | "amazon.com.br" | "amazon.com.mx" | "amazon.com.tr" | "amazon.de" | "amazon.eg" | "amazon.es" | "amazon.fr" | "amazon.ie" | "amazon.in" | "amazon.it" | "amazon.nl" | "amazon.pl" | "amazon.sa" | "amazon.se" | "amazon.sg";
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get Amazon reviews that include photos or videos. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_amazon_media_reviews": {
      input: {
        /** Amazon Media Reviews asynchronous parameters. */
        body: {
          /**
           * Ten-character product ASIN in the selected Amazon storefront. Required for the first page.
           * @pattern ^[A-Z0-9]{10}$
           */
          asin?: string;
          /**
           * Amazon storefront hostname. Omit for amazon.com. Supported on 23 storefronts; amazon.cn is not supported. Send page_token alone on continuation.
           *
           * Use an ASIN available in the selected storefront. Only reviews containing the selected media are returned. Review availability varies by storefront, product and request.
           */
          amazon_domain?: "amazon.ae" | "amazon.ca" | "amazon.co.jp" | "amazon.co.uk" | "amazon.co.za" | "amazon.com" | "amazon.com.au" | "amazon.com.be" | "amazon.com.br" | "amazon.com.mx" | "amazon.com.tr" | "amazon.de" | "amazon.eg" | "amazon.es" | "amazon.fr" | "amazon.ie" | "amazon.in" | "amazon.it" | "amazon.nl" | "amazon.pl" | "amazon.sa" | "amazon.se" | "amazon.sg";
          /**
           * Media filter: media (default) for images and videos, images, or videos. Only reviews containing the selected media are returned.
           *
           * Amazon chooses review order. Sorting, star filters and verified-purchase filters are not supported.
           */
          view?: "media" | "images" | "videos";
          /**
           * Opaque continuation from pagination.next_page_token. Send it alone to fetch the next media-review page.
           *
           * Pages can repeat a review when its media spans pages. Deduplicate by review id. If media reviews are unavailable, the request returns a failure rather than an empty review list.
           * @minLength 5
           * @maxLength 8196
           * @pattern ^ar1\.[A-Za-z0-9_-]+$
           */
          page_token?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get an Amazon product page, with optional seller offers. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_amazon_product": {
      input: {
        /** Amazon Product asynchronous parameters. */
        body: {
          /** Amazon storefront hostname. */
          amazon_domain?: string;
          /**
           * Storefront locale, such as en_US or ja_JP.
           * @pattern ^[a-z]{2}_[A-Z]{2}$
           */
          language?: string;
          /**
           * Postal code used to determine delivery eligibility.
           * @minLength 1
           * @maxLength 32
           */
          delivery_zip?: string;
          /**
           * Two-letter destination country code.
           * @pattern ^[A-Z]{2}$
           */
          shipping_location?: string;
          /**
           * Ten-character Amazon product identifier.
           * @pattern ^[A-Z0-9]{10}$
           */
          asin: string;
          /** Fetch additional seller offers for this item. */
          other_sellers?: boolean;
          /** Fetch every page exposed by related-product carousels. */
          all_related_products?: boolean;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Amazon products. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_amazon_search": {
      input: {
        /** Amazon Search asynchronous parameters. */
        body: {
          /** Amazon storefront hostname. */
          amazon_domain?: string;
          /**
           * Storefront locale, such as en_US or ja_JP.
           * @pattern ^[a-z]{2}_[A-Z]{2}$
           */
          language?: string;
          /**
           * Postal code used to determine delivery eligibility.
           * @minLength 1
           * @maxLength 32
           */
          delivery_zip?: string;
          /**
           * Two-letter destination country code.
           * @pattern ^[A-Z]{2}$
           */
          shipping_location?: string;
          /**
           * Search words. Supply either k or node.
           * @minLength 1
           */
          k?: string;
          /**
           * Browse category ID. Supply either node or k.
           * @pattern ^[0-9]+$
           */
          node?: string;
          /** Ordering for the product listings. */
          s?: "relevanceblender" | "price-asc-rank" | "price-desc-rank" | "review-rank" | "date-desc-rank" | "exact-aware-popularity-rank";
          /** Comma-separated Amazon filter tokens, such as n:16318031,p_72:1248897011. */
          rh?: string;
          /** Keep results tied to the original spelling of the query. */
          dc?: boolean;
          /**
           * Result page to retrieve, starting at 1.
           * @minimum 1
           */
          page?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get an Apartments.com property by URL. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_apartments_property": {
      input: {
        /** Apartments.com Property asynchronous parameters. */
        body: {
          /**
           * Apartments.com property URL ending in its seven-character listing ID, without query parameters.
           *
           * Alpha: availability may vary by location or property. Returns available fields for the requested property. Prices may represent a rental range. Bedroom-specific rents and total-monthly-price labels are preserved when present.
           * @maxLength 2048
           */
          url: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Apartments.com listings from a search URL. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_apartments_search": {
      input: {
        /** Apartments.com Search asynchronous parameters. */
        body: {
          /**
           * Apartments.com location search URL, including any price, bedroom, amenity or page filters.
           *
           * Alpha: availability may vary by location or property. Use the site URL to set filters or select a page. Follow pagination.next when present. Page links and total counts are included when available. Prices may represent a rental range. Bedroom-specific rents and total-monthly-price labels are preserved when present.
           * @maxLength 4096
           */
          url: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get an App Store app's details, ratings and version history. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_apple_app_store_product": {
      input: {
        /** Apple App Store Product asynchronous parameters. */
        body: {
          /**
           * Two-letter Apple storefront country. UK is accepted as an alias for GB.
           * @pattern ^[a-zA-Z]{2}$
           */
          country?: string;
          /**
           * Positive decimal Apple app identifier, up to 20 digits.
           * @pattern ^[1-9][0-9]{0,19}$
           */
          product_id: string;
          /** App product type. Only app is supported. */
          type?: "app";
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get reviews for an App Store app. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_apple_app_store_reviews": {
      input: {
        /** Apple App Store Reviews asynchronous parameters. */
        body: {
          /**
           * Two-letter Apple storefront country. UK is accepted as an alias for GB.
           * @pattern ^[a-zA-Z]{2}$
           */
          country?: string;
          /**
           * Positive decimal Apple app identifier, up to 20 digits.
           * @pattern ^[1-9][0-9]{0,19}$
           */
          product_id: string;
          /** mostrecent or mosthelpful. Apple's Mac storefront always returns newest first. */
          sort?: "mostrecent" | "mosthelpful";
          /**
           * One-based page number, from 1 through 2,147,483,647. Exhausted pages return an empty review list.
           * @minimum 1
           * @maximum 2147483647
           */
          page?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search the App Store for iPhone, iPad and Mac apps. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_apple_app_store_search": {
      input: {
        /** Apple App Store Search asynchronous parameters. */
        body: {
          /**
           * Two-letter Apple storefront country. UK is accepted as an alias for GB.
           * @pattern ^[a-zA-Z]{2}$
           */
          country?: string;
          /**
           * Search term with 1 to 2,048 UTF-8 bytes of printable text, and at most 4,096 bytes after URL encoding.
           * @minLength 1
           * @maxLength 2048
           */
          term: string;
          /**
           * Language-region code, such as en-us or fr-fr.
           * @pattern ^[a-zA-Z]{2,3}-[a-zA-Z]{2}$
           */
          lang?: string;
          /**
           * Maximum results after filtering, from 1 through 200.
           * @minimum 1
           * @maximum 200
           */
          num?: number;
          /** Exclude explicit results when true. */
          disallow_explicit?: boolean;
          /** Use developer to match developer names, ignoring case. */
          property?: "developer";
          /**
           * Filter results by a native genre identifier, from 1 through 2,147,483,647.
           * @minimum 1
           * @maximum 2147483647
           */
          category_id?: number;
          /** mobile for iPhone apps, tablet for iPad apps, or desktop for Mac apps. */
          device?: "mobile" | "tablet" | "desktop";
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Apple Maps places. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_apple_maps_places": {
      input: {
        /** Apple Maps Places asynchronous parameters. */
        body: {
          /**
           * One or more Apple Maps unique place identifiers.
           *
           * Separate multiple identifiers with commas. Accepted batch size: 1 through 50 unsigned 64-bit decimal IDs. Example: 4372355869446211302.
           */
          muid: string;
          /**
           * Controls Apple Maps language and regional formatting.
           *
           * Examples: en-US, fr-FR, ja-JP, and zh-TW.
           */
          locale?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get Apple ratings and reviews for an Apple Maps place. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_apple_maps_reviews": {
      input: {
        /** Apple Maps Reviews asynchronous parameters. */
        body: {
          /** Exactly one unsigned 64-bit decimal Apple Maps MUID. */
          muid: string;
          /** Apple Maps language and regional formatting. */
          locale?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search jobs on a company's Ashby job board. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_ashby_search": {
      input: {
        /** Jobs by Ashby Search asynchronous parameters. */
        body: {
          /**
           * Case-insensitive phrase in title or description.
           * @minLength 1
           * @maxLength 512
           */
          q?: string;
          /**
           * One-based results page. Use next_page from the response to continue.
           * @minimum 1
           */
          page?: number;
          /**
           * Employer board name from jobs.ashbyhq.com/{board}, for example ashby.
           * @pattern ^[A-Za-z0-9][A-Za-z0-9_-]{0,127}$
           */
          board: string;
          /**
           * Case-insensitive phrase in primary or secondary locations.
           * @minLength 1
           * @maxLength 512
           */
          location?: string;
          /**
           * Case-insensitive department name.
           * @minLength 1
           * @maxLength 512
           */
          department?: string;
          /**
           * Exact team name, case-insensitive.
           * @minLength 1
           * @maxLength 512
           */
          team?: string;
          /** Employer's workplace type. */
          workplace_type?: "OnSite" | "Remote" | "Hybrid";
          /**
           * Country from a primary or secondary postal address, for example USA. Exact case-insensitive match.
           * @minLength 1
           * @maxLength 512
           */
          country?: string;
          /**
           * State or province from a primary or secondary postal address. Exact case-insensitive match.
           * @minLength 1
           * @maxLength 512
           */
          region?: string;
          /**
           * City from a primary or secondary postal address. All supplied address filters must match the same address.
           * @minLength 1
           * @maxLength 512
           */
          city?: string;
          /** True selects remote jobs. False selects non-remote jobs. */
          remote?: boolean;
          /** Employment type. */
          employment_type?: "FullTime" | "PartTime" | "Intern" | "Contract" | "Temporary";
          /**
           * Results per page.
           * @minimum 1
           * @maximum 100
           */
          limit?: number;
          /** Include published compensation tiers and salary ranges. */
          include_compensation?: boolean;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get Baidu search results as JSON. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_baidu_search": {
      input: {
        /** Baidu Search asynchronous parameters. */
        body: {
          /**
           * Required search text, trimmed to 1 through 500 characters. Unicode queries are supported. Control characters are rejected.
           * @minLength 1
           * @maxLength 500
           */
          q: string;
          /**
           * Zero-based result offset from 0 through 750, not a page number. Use pagination.next_pn or litescrape_pagination.next to continue.
           * @minimum 0
           * @maximum 750
           */
          pn?: number;
          /** Requested result count: 10, 20, or 50. Defaults to 10. Baidu can return fewer web results when a page includes other result modules. */
          rn?: 10 | 20 | 50;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a Best Buy product's details, price and availability. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_bestbuy_product": {
      input: {
        /** Best Buy Product asynchronous parameters. */
        body: {
          /**
           * Public HTTPS product URL on this retailer's site.
           * @minLength 1
           * @maxLength 4096
           */
          url: string;
          /**
           * Retailer's store ID. Selects the store catalog, pricing or availability where the retailer exposes it.
           * @minLength 1
           * @maxLength 8
           * @pattern ^[0-9]{1,8}$
           */
          store_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Best Buy products with prices and availability. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_bestbuy_search": {
      input: {
        /** Best Buy Search asynchronous parameters. */
        body: {
          /**
           * Product keywords to search for.
           * @minLength 1
           * @maxLength 500
           */
          query: string;
          /**
           * One-based result page.
           * @minimum 1
           * @maximum 100
           */
          page?: number;
          /**
           * Retailer's store ID. Selects the store catalog, pricing or availability where the retailer exposes it.
           * @minLength 1
           * @maxLength 8
           * @pattern ^[0-9]{1,8}$
           */
          store_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Bing Images with size, color, date and license filters. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_bing_images": {
      input: {
        /** Bing Images asynchronous parameters. */
        body: {
          /**
           * Image search query, from 1 through 2,048 characters after trimming. Control characters are rejected.
           * @minLength 1
           * @maxLength 2048
           */
          q: string;
          /**
           * One-based Bing result offset, from 1 through 10,000.
           *
           * Prefer litescrape_pagination.next when returned. Bing may reorder or repeat images between requests.
           * @minimum 1
           * @maximum 10000
           */
          first?: number;
          /**
           * Maximum images to return, from 1 through 100. Defaults to 35.
           *
           * Bing may return fewer images. Follow the pagination link to retrieve another batch.
           * @minimum 1
           * @maximum 100
           */
          count?: number;
          /**
           * Optional language-country market, such as en-US. Cannot be combined with cc.
           * @pattern ^[a-zA-Z]{2}-[a-zA-Z]{2}$
           */
          mkt?: string;
          /**
           * Optional two-letter country code. Cannot be combined with mkt.
           * @pattern ^[a-zA-Z]{2}$
           */
          cc?: string;
          /**
           * Bing content filter: off, moderate, or strict. Case-insensitive; defaults to moderate.
           *
           * Bing may enforce stricter filtering for some markets.
           */
          safeSearch?: "off" | "moderate" | "strict";
          /** Bing image size bucket: small, medium, large or wallpaper (extra large). */
          imagesize?: "small" | "medium" | "large" | "wallpaper";
          /** Photographs, clipart, line drawings, animated GIFs or images with transparent backgrounds. */
          photo?: "photo" | "clipart" | "linedrawing" | "animatedgif" | "transparent";
          /** Filter to square, wide or tall images. */
          aspect?: "square" | "wide" | "tall";
          /** Use color for any color, bw for black and white, or a dominant color: FGcls_RED, FGcls_ORANGE, FGcls_YELLOW, FGcls_GREEN, FGcls_TEAL, FGcls_BLUE, FGcls_PURPLE, FGcls_PINK, FGcls_BROWN, FGcls_BLACK, FGcls_GRAY or FGcls_WHITE. */
          color2?: "color" | "bw" | "FGcls_RED" | "FGcls_ORANGE" | "FGcls_YELLOW" | "FGcls_GREEN" | "FGcls_TEAL" | "FGcls_BLUE" | "FGcls_PURPLE" | "FGcls_PINK" | "FGcls_BROWN" | "FGcls_BLACK" | "FGcls_GRAY" | "FGcls_WHITE";
          /** Use face for just faces or portrait for head-and-shoulders images. */
          face?: "face" | "portrait";
          /** Bing date filter: lt1440 (past 24 hours), lt10080 (past week), lt43200 (past month) or lt525600 (past year). */
          age?: "lt1440" | "lt10080" | "lt43200" | "lt525600";
          /**
           * Use creativecommons for all Creative Commons results, L1 for public domain, or native license categories L2 through L7. Bing also supports grouped categories.
           *
           * L2_L3_L4_L5_L6_L7: free to share and use. L2_L3_L4: free to share and use commercially. L2_L3_L5_L6: free to modify, share and use. L2_L3: free to modify, share and use commercially. Bing classifies usage rights; confirm the license on the source page before reusing an image.
           */
          license?: "L1" | "L2" | "L3" | "L4" | "L5" | "L6" | "L7" | "L2_L3" | "L2_L3_L4" | "L2_L3_L5_L6" | "L2_L3_L4_L5_L6_L7" | "creativecommons";
          /**
           * Optional native Bing Images qft filter expression, up to 2,048 characters without control characters.
           *
           * Named image filters override the same category in qft and preserve unrelated categories. Without named filters, qft is passed through unchanged. Filter matching and availability are controlled by Bing.
           * @maxLength 2048
           */
          qft?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Bing Maps places, or get one place by ID. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_bing_maps": {
      input: {
        /** Bing Maps asynchronous parameters. */
        body: {
          /** Search query; required unless place_id is supplied. */
          q?: string;
          /** Native Bing Maps entity identifier for a detail lookup. */
          place_id?: string;
          /** Optional map center in latitude~longitude form. */
          cp?: string;
          /** Bing Maps interface language, such as en-US. */
          setlang?: string;
          /** Listing offset from 0 through 10,000. */
          first?: number;
          /** Number of listings from 1 through 30. */
          count?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a Bing Shopping product's details using its product token. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_bing_product": {
      input: {
        /** Bing Product asynchronous parameters. */
        body: {
          /**
           * Product token returned in shopping_results by the Bing Shopping API. Copy the complete token into this request; tokens from other providers are not interchangeable.
           * @minLength 1
           * @maxLength 24000
           */
          product_token: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get Bing web search results. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_bing_search": {
      input: {
        /** Bing Search asynchronous parameters. */
        body: {
          /**
           * Bing search query after trimming.
           *
           * Accepted length: 1 through 2,048 characters. Control characters are rejected. Bing query syntax such as quoted phrases and exclusions remains available.
           */
          q: string;
          /** Selects the Bing web-search engine. */
          engine?: "bing";
          /**
           * Named city-level origin used to localize the Bing request.
           *
           * Maximum length: 256 characters. Control characters are rejected.
           */
          location?: string;
          /**
           * Latitude from -90 through 90.
           *
           * May be supplied independently or with lon.
           */
          lat?: number;
          /**
           * Longitude from -180 through 180.
           *
           * May be supplied independently or with lat.
           */
          lon?: number;
          /**
           * Case-insensitive Bing language-country market token.
           *
           * Format: two-letter language and country, such as en-US. Cannot be combined with cc.
           */
          mkt?: string;
          /**
           * Case-insensitive two-letter country of origin.
           *
           * Format: US or GB. Cannot be combined with mkt.
           */
          cc?: string;
          /**
           * One-based native offset for organic results.
           *
           * Range: 1 through 9,007,199,254,740,991. Prefer litescrape_pagination.next when it is returned.
           */
          first?: number;
          /** Bing adult-content policy; values are case-insensitive. */
          safeSearch?: "off" | "moderate" | "strict";
          /**
           * Native Bing display or date filter expression.
           *
           * Maximum length: 8,192 characters. Control characters are rejected.
           */
          filters?: string;
          /** Selects desktop, tablet, or mobile result behavior. */
          device?: "desktop" | "tablet" | "mobile";
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Bing Shopping products. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_bing_shopping": {
      input: {
        /** Bing Shopping asynchronous parameters. */
        body: {
          /**
           * Product search query, up to 2,048 characters with no control characters.
           * @minLength 1
           * @maxLength 2048
           */
          q: string;
          /**
           * Case-insensitive language-country market code, such as en-US. Supply either mkt or cc.
           * @pattern ^[A-Za-z]{2}-[A-Za-z]{2}$
           */
          mkt?: string;
          /**
           * Two-letter country code, such as us or gb. Supply either cc or mkt.
           * @pattern ^[A-Za-z]{2}$
           */
          cc?: string;
          /**
           * Nonnegative shopping result offset. For example, efirst=10 starts at the tenth shopping result.
           * @minimum 0
           */
          efirst?: number;
          /**
           * Bing Shopping filter expression, up to 6,000 characters. Copy filters from a Bing Shopping URL.
           * @maxLength 6000
           */
          filters?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get Brave AI answers with citations. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_brave_ai_mode": {
      input: {
        /** Brave AI Mode asynchronous parameters. */
        body: {
          /**
           * City or postal code from the location catalog, such as Berlin, Germany or Austin, Texas, United States.
           *
           * Qualify ambiguous names with a state or country. Unknown locations fail; lat and lon take precedence when supplied together. On follow-ups, a supplied location replaces inherited coordinates. Send location: null in JSON to clear an inherited location. Resolved coordinates are returned in search_parameters.
           * @minLength 1
           * @maxLength 256
           */
          location?: string;
          /**
           * Latitude from -90 to 90. Supply with lon; explicit coordinates take precedence over location.
           * @minimum -90
           * @maximum 90
           */
          lat?: number;
          /**
           * Longitude from -180 to 180. Supply with lat.
           * @minimum -180
           * @maximum 180
           */
          lon?: number;
          /**
           * Two-letter country preference, or all for all regions. Brave determines regional availability.
           * @pattern ^(?:[a-z]{2}|all)$
           */
          country?: string;
          /**
           * Search language preference such as en, de or de-de. Brave also considers the language of your question when generating its answer.
           * @pattern ^[a-z]{2}(?:-[a-z]{2})?$
           */
          language?: string;
          /** Adult-content filtering preference: off, moderate or strict. */
          safeSearch?: "off" | "moderate" | "strict";
          /** Unit preference: us for US customary units or metric for metric units. */
          units_of_measurement?: "us" | "metric";
          /**
           * Question for Brave AI Mode. Required for both a new conversation and each follow-up.
           * @minLength 1
           * @maxLength 2048
           */
          q: string;
          /**
           * Token from the previous response. Send with a new q to continue that conversation.
           *
           * Omitted preferences carry over from the token; supplied preferences override them. Use the latest token returned by each successful response. Treat this token as a conversation credential and keep it private. Prefer JSON POST for follow-ups. Tokens expire after one hour and require the same API key and endpoint; omit the token to start again.
           * @minLength 1
           * @maxLength 4096
           * @pattern ^ct2_[A-Za-z0-9_-]{100,}$
           */
          continuation_token?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get Brave web search results. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_brave_search": {
      input: {
        /** Brave Search asynchronous parameters. */
        body: {
          /**
           * Search text. Brave query operators are supported; Brave may relax them when there are few matches.
           * @minLength 1
           * @maxLength 2048
           */
          q: string;
          /**
           * Zero-based page number, not a result offset. Follow litescrape_pagination.next when present.
           *
           * Results per page depend on Brave. Organic positions start at 1 within each page.
           * @minimum 0
           * @maximum 9
           */
          offset?: number;
          /**
           * Two-letter country preference, or all for all regions. Brave determines regional availability.
           * @pattern ^(?:[a-z]{2}|all)$
           */
          country?: string;
          /**
           * Interface language preference such as en-us or de-de. This does not restrict result languages.
           * @pattern ^[a-z]{2}(?:-[a-z]{2})?$
           */
          ui_lang?: string;
          /** Adult-content filtering preference. */
          safesearch?: "off" | "moderate" | "strict";
          /** Optional date window: pd for past day, pw for past week, pm for past month, py for past year. */
          tf?: "pd" | "pw" | "pm" | "py";
          /** Allow Brave to correct the query spelling. */
          spellcheck?: boolean;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Text completions through Microsoft Copilot. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_copilot_chat_completions": {
      input: {
        /** Microsoft Copilot Chat Completions asynchronous parameters. */
        body: {
          /**
           * Text messages ending in a user message; at most 32,000 characters in total. Roles do not grant instruction priority.
           *
           * Each request starts a fresh conversation. Send prior messages again to include context. Supplied roles do not grant instruction priority.
           * @minItems 1
           * @maxItems 32
           */
          messages: Array<{
            /** Role in the supplied text transcript. */
            role: "system" | "user" | "assistant";
            /**
             * Nonblank text. Images, tool calls and other content parts are unsupported.
             * @minLength 1
             * @maxLength 32000
             */
            content: string;
          }>;
          /** Service identifier. Microsoft chooses the underlying model. */
          model?: "copilot";
          /**
           * Only a complete JSON response is supported; stream must be false.
           *
           * Streaming, tools, images, sampling settings and token usage are not supported.
           */
          stream?: false;
          /**
           * Two-letter country or territory code, normalized to uppercase. Sets Copilot's answer and search location to a representative populated place. Omit to use Copilot's default location.
           *
           * Supports the 213 country and territory codes listed in the parameter schema.
           */
          country?: "AE" | "AF" | "AI" | "AL" | "AM" | "AO" | "AR" | "AS" | "AT" | "AU" | "AW" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CV" | "CW" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GE" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GQ" | "GR" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IQ" | "IS" | "IT" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MD" | "ME" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PR" | "PS" | "PT" | "PW" | "PY" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SY" | "SZ" | "TD" | "TG" | "TH" | "TJ" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "US" | "UY" | "UZ" | "VE" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW" | null;
          /**
           * US postal state code (50 states or DC), normalized to uppercase. Requires country=US. Sets Copilot's location to the state capital.
           *
           * Requires country=US. Supports all 50 states and DC. Uses the state capital as the representative location for local answers and searches.
           */
          state?: "AK" | "AL" | "AR" | "AZ" | "CA" | "CO" | "CT" | "DC" | "DE" | "FL" | "GA" | "HI" | "IA" | "ID" | "IL" | "IN" | "KS" | "KY" | "LA" | "MA" | "MD" | "ME" | "MI" | "MN" | "MO" | "MS" | "MT" | "NC" | "ND" | "NE" | "NH" | "NJ" | "NM" | "NV" | "NY" | "OH" | "OK" | "OR" | "PA" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VA" | "VT" | "WA" | "WI" | "WV" | "WY" | null;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search DuckDuckGo Maps places within a map area. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_duckduckgo_maps": {
      input: {
        /** DuckDuckGo Maps asynchronous parameters. */
        body: {
          /** Required place or category query, up to 500 characters. */
          q: string;
          /** Viewport rectangle as top,left,bottom,right. */
          bbox?: string;
          /** Viewport center latitude; requires lon. */
          lat?: number;
          /** Viewport center longitude; requires lat. */
          lon?: number;
          /** Exclude results outside the requested bounds. */
          strict_bbox?: boolean;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get DuckDuckGo web search results. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_duckduckgo_search": {
      input: {
        /** DuckDuckGo Search asynchronous parameters. */
        body: {
          /** Required search text, up to 500 characters. */
          q: string;
          /** DuckDuckGo region and language token, such as us-en. */
          kl?: string;
          /** DuckDuckGo safe-search level. */
          safe?: "1" | "-1" | "-2";
          /** Date window: d, w, m, y, or YYYY-MM-DD..YYYY-MM-DD. */
          df?: string;
          /** Enable DuckDuckGo query assistance; mutually exclusive with m. */
          search_assist?: boolean;
          /** Result offset from 0 through 10,000. */
          start?: number;
          /** Requested result count from 1 through 50; mutually exclusive with search_assist. */
          m?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get an eBay listing by item ID. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_ebay_product": {
      input: {
        /** eBay Product asynchronous parameters. */
        body: {
          /** eBay marketplace hostname. */
          ebay_domain?: "ebay.com" | "ebay.co.uk" | "ebay.ca" | "ebay.com.au" | "ebay.de" | "ebay.fr" | "ebay.it" | "ebay.es" | "ebay.at" | "ebay.be" | "ebay.ch" | "ebay.ie" | "ebay.nl" | "ebay.com.hk" | "ebay.com.my" | "ebay.pl" | "ebay.com.sg";
          /**
           * 12-digit eBay listing ID from search results or an /itm/ URL.
           * @pattern ^[0-9]{12}$
           */
          product_id: string;
          /** Country code for eBay's localized interface, e.g. US, JP, CA. */
          locale?: string;
          /**
           * Interface language override; requires locale and ebay.com.
           * @maxLength 12
           * @pattern ^[a-z]{2,3}(?:-[A-Za-z]{2,4})?$
           */
          lang?: string;
          /** Two-letter destination country code for shipping calculations. */
          shipping_country?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search eBay listings by keyword or category. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_ebay_search": {
      input: {
        /** eBay Search asynchronous parameters. */
        body: {
          /** eBay marketplace hostname. */
          ebay_domain?: "ebay.com" | "ebay.co.uk" | "ebay.ca" | "ebay.com.au" | "ebay.de" | "ebay.fr" | "ebay.it" | "ebay.es" | "ebay.at" | "ebay.be" | "ebay.ch" | "ebay.ie" | "ebay.nl" | "ebay.com.hk" | "ebay.com.my" | "ebay.pl" | "ebay.com.sg";
          /**
           * Search keywords. Required unless category_id is supplied.
           * @minLength 1
           * @maxLength 500
           */
          _nkw?: string;
          /**
           * eBay category ID.
           * @minimum 1
           * @maximum 2147483647
           */
          category_id?: number;
          /**
           * Result page, starting at 1.
           * @minimum 1
           * @maximum 2147483647
           */
          _pgn?: number;
          /** Requested results per page. eBay may adjust the page size. */
          _ipg?: 25 | 50 | 100 | 200;
          /** Sort: 12 best match, 1 ending soonest, 10 newly listed, 7 nearest, 15/16 total price ascending/descending, 2/3 item price ascending/descending, 18/19 condition new/used first. Availability depends on marketplace. */
          _sop?: 1 | 2 | 3 | 7 | 10 | 12 | 15 | 16 | 18 | 19;
          /**
           * Minimum item price.
           * @minimum 0
           */
          _udlo?: number;
          /**
           * Maximum item price.
           * @minimum 0
           */
          _udhi?: number;
          /** Auction, Buy It Now (BIN), or accepts offers (BO). */
          buying_format?: "Auction" | "BIN" | "BO";
          /**
           * Condition IDs joined with |, such as 1000|3000.
           * @pattern ^[0-9]{1,4}(\|[0-9]{1,4}){0,9}$
           */
          LH_ItemCondition?: string;
          /**
           * Destination postal code used by eBay for shipping estimates.
           * @minLength 1
           * @maxLength 20
           */
          _stpos?: string;
          /** eBay item-location country ID, e.g. 1 US, 2 Canada, 3 UK. */
          _salic?: number;
          /** Exclude automatic spelling corrections. */
          _blrs?: "spell_auto_correct";
          /**
           * Comma-separated filters: FR, RPA, AS, Savings, SaleItems, Lots, Charity, AV, FS, LPickup.
           * @maxLength 100
           */
          show_only?: string;
          /**
           * Comma-separated eBay seller usernames.
           * @maxLength 1000
           */
          _sasl?: string;
          /** Include (1) or exclude (2) the sellers in _sasl. */
          _saslop?: 1 | 2;
          /**
           * eBay aspect filters as key=value pairs joined with &, with multiple values joined by |. Percent-encoded names are accepted.
           * @maxLength 4000
           */
          popular_filters?: string;
          /** Result layout. */
          _dmd?: "Grid" | "List";
          /** Item location relative to the marketplace. */
          LH_PrefLoc?: "Domestic" | "Regional" | "Worldwide";
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get an eBay seller's profile and listings. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_ebay_seller": {
      input: {
        /** eBay Seller asynchronous parameters. */
        body: {
          /** eBay marketplace hostname. */
          ebay_domain?: "ebay.com" | "ebay.co.uk" | "ebay.ca" | "ebay.com.au" | "ebay.de" | "ebay.fr" | "ebay.it" | "ebay.es" | "ebay.at" | "ebay.be" | "ebay.ch" | "ebay.ie" | "ebay.nl" | "ebay.com.hk" | "ebay.com.my" | "ebay.pl" | "ebay.com.sg";
          /**
           * Seller username for type=user, or the store URL slug for type=store.
           * @pattern ^[A-Za-z0-9][A-Za-z0-9_.*-]{0,99}$
           */
          seller_id: string;
          /** Public seller profile type. */
          type: "user" | "store";
          /**
           * Result page, starting at 1.
           * @minimum 1
           * @maximum 2147483647
           */
          _pgn?: number;
          /** Products per page. */
          _ipg?: 24 | 48 | 72;
          /** Sort: 12 best match, 1 ending soonest, 7 nearest, 10 newly listed, 15/16 total price ascending/descending. */
          _sop?: 1 | 7 | 10 | 12 | 15 | 16;
          /** All listings (0), Buy It Now (1), or auctions (2). */
          buying_format?: 0 | 1 | 2;
          /**
           * Condition IDs joined with |: 3 new, 4 used, 10 unspecified.
           * @maxLength 20
           * @pattern ^(?:3|4|10)(?:\|(?:3|4|10))*$
           */
          LH_ItemCondition?: string;
          /** Only products with free shipping. */
          free_shipping?: boolean;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get an Etsy listing's details and price. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_etsy_product": {
      input: {
        /** Etsy Product asynchronous parameters. */
        body: {
          /**
           * Public HTTPS product URL on this retailer's site.
           * @minLength 1
           * @maxLength 4096
           */
          url: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Etsy listings with prices. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_etsy_search": {
      input: {
        /** Etsy Search asynchronous parameters. */
        body: {
          /**
           * Product keywords to search for.
           * @minLength 1
           * @maxLength 500
           */
          query: string;
          /**
           * One-based result page.
           * @minimum 1
           * @maximum 100
           */
          page?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Eventbrite events by location and keyword. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_eventbrite_search": {
      input: {
        /** Eventbrite Search asynchronous parameters. */
        body: {
          /**
           * Eventbrite location slug, such as tx--austin, ny--new-york, or online.
           * @maxLength 150
           * @pattern ^[a-z0-9]+(?:-[a-z0-9]+|--[a-z0-9]+)*$
           */
          location?: string;
          /**
           * Search keywords, such as music or python workshops.
           * @minLength 1
           * @maxLength 200
           * @pattern ^\S+(?: \S+)*$
           */
          q?: string;
          /**
           * Results page, starting at 1.
           * @minimum 1
           * @maximum 100
           */
          page?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get public Facebook posts for a hashtag. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_facebook_hashtag_posts": {
      input: {
        /** Facebook Hashtag Posts asynchronous parameters. */
        body: {
          /**
           * Hashtag made of letters, digits or underscores, with an optional leading #.
           * @pattern ^#?[A-Za-z0-9_]{1,100}$
           */
          tag: string;
          /**
           * Maximum posts per response; fewer may be available.
           * @minimum 1
           * @maximum 20
           */
          limit?: number;
          /**
           * Token from pagination.continuation_token in the preceding response. Keep the same hashtag; limit may change. Tokens can expire.
           * @minLength 1
           * @maxLength 32768
           */
          continuation_token?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Browse or search Facebook Marketplace listings by city. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_facebook_marketplace_browse": {
      input: {
        /** Facebook Marketplace Browse asynchronous parameters. */
        body: {
          /**
           * Maximum listings per response; fewer may be available.
           * @minimum 1
           * @maximum 26
           */
          limit?: number;
          /**
           * Marketplace city slug or numeric city ID, such as austin or london. Required for keyword search and radius filtering.
           * @pattern ^[A-Za-z0-9][A-Za-z0-9._-]{0,99}$
           */
          location?: string;
          /**
           * Listing search keywords. Supply location to keep the search geography fixed.
           * @minLength 1
           * @maxLength 200
           * @pattern ^\S(?:.*\S)?$
           */
          query?: string;
          /**
           * Search radius in kilometers, from 1 to 500. Requires location; defaults to 65 km when omitted. Shipped or promoted listings may fall outside this radius.
           * @minimum 1
           * @maximum 500
           */
          radius_km?: number;
          /**
           * Minimum listing price in local currency units. Requires query and location.
           * @minimum 0
           * @maximum 10000000
           */
          min_price?: number;
          /**
           * Maximum listing price in local currency units, at least min_price. Requires query and location.
           * @minimum 0
           * @maximum 10000000
           */
          max_price?: number;
          /** Search ordering: lowest price, highest price or newest listings. Requires query and location. */
          sort_by?: "price_ascend" | "price_descend" | "creation_time_descend";
          /** Item condition for keyword search. Requires query and location. */
          condition?: "new" | "used_like_new" | "used_good" | "used_fair";
          /**
           * Restrict keyword search to recent listings, from 1 to 30 days. Requires query and location.
           * @minimum 1
           * @maximum 30
           */
          days_since_listed?: number;
          /**
           * Token from pagination.continuation_token in the preceding response. Repeat the same query, location and filters; limit may change. Keyword search only. Later requests may fail or be rate limited.
           * @minLength 1
           * @maxLength 32768
           * @pattern ^m1\.[A-Za-z0-9_-]+$
           */
          continuation_token?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get recent public posts from a Facebook Page. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_facebook_page_posts": {
      input: {
        /** Facebook Page Posts asynchronous parameters. */
        body: {
          /**
           * Public page handle without a URL, such as NASA.
           * @pattern ^[A-Za-z0-9][A-Za-z0-9._-]{0,99}$
           */
          handle: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a public Facebook post by its URL. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_facebook_post": {
      input: {
        /** Facebook Post Details asynchronous parameters. */
        body: {
          /**
           * Public www.facebook.com post permalink containing a page and post identifier.
           * @maxLength 400
           * @pattern ^https://www\.facebook\.com/[A-Za-z0-9][A-Za-z0-9._-]*\/posts/(?:[0-9]+|pfbid[A-Za-z0-9]+)/?$
           */
          url: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a public Facebook reel by its URL. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_facebook_reel": {
      input: {
        /** Facebook Reel Details asynchronous parameters. */
        body: {
          /**
           * Public reel address in the form https://www.facebook.com/reel/123456789/.
           * @maxLength 150
           * @pattern ^https://www\.facebook\.com/reel/[0-9]{1,30}/?$
           */
          url: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search public Facebook Pages by name. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_facebook_search_pages": {
      input: {
        /** Facebook Search Pages asynchronous parameters. */
        body: {
          /**
           * Page name or phrase to look up.
           * @minLength 1
           * @maxLength 200
           * @pattern ^\S(?:.*\S)?$
           */
          query: string;
          /**
           * Maximum Page suggestions per response; fewer may be available.
           * @minimum 1
           * @maximum 15
           */
          limit?: number;
          /**
           * Two-letter country preference for Page suggestions, such as US, GB or CA. Does not restrict a Page's location.
           * @pattern ^[A-Z]{2}$
           */
          country?: string;
          /** Ad category for Page suggestions: all ads or political and issue ads. */
          ad_type?: "ALL" | "POLITICAL_AND_ISSUE_ADS";
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search public Facebook profiles by name. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_facebook_search_profiles": {
      input: {
        /** Facebook Search Profiles asynchronous parameters. */
        body: {
          /**
           * Name to search for.
           * @minLength 1
           * @maxLength 200
           * @pattern ^\S(?:.*\S)?$
           */
          query: string;
          /**
           * Maximum profiles per response; fewer may be available.
           * @minimum 1
           * @maximum 12
           */
          limit?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit an explicitly requested rating about a previous result. Each feedback token expires after seven days and accepts one rating. */
    "litescrape.submit_feedback": {
      input: {
        /**
         * Token from the feedback URL.
         * @minLength 1
         * @maxLength 2048
         */
        token: string;
        /**
         * Result rating from 1 to 5.
         * @minimum 1
         * @maximum 5
         */
        rating: number;
        /**
         * Evaluation without secrets or personal data.
         * @minLength 1
         * @maxLength 4000
         */
        comment: string;
        /**
         * Optional agent or model name.
         * @minLength 1
         * @maxLength 120
         */
        agent?: string | null;
      };
      output: Record<string, unknown>;
    };
    /** Submit asynchronously: Search Glassdoor jobs by keyword and location, with salary, seniority and remote filters. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_glassdoor_search": {
      input: {
        /** Glassdoor Search asynchronous parameters. */
        body: {
          /**
           * Job title, keywords or company. Omit to browse using only location and filters.
           * @minLength 1
           * @maxLength 512
           */
          q?: string;
          /**
           * One-based results page. Use next_page from the response to continue.
           * @minimum 1
           */
          page?: number;
          /**
           * Free-text city, state, country or postal code. Use location_id and location_type for an exact location instead.
           * @minLength 1
           * @maxLength 512
           */
          location?: string;
          /**
           * Copy next_page_token with its next_page and the same search parameters to continue.
           * @minLength 1
           * @maxLength 32768
           * @pattern ^[A-Za-z0-9+/=_-]+$
           */
          page_token?: string;
          /**
           * Glassdoor location ID, for example 1132348 for New York. Omit for nationwide search.
           * @minimum 1
           */
          location_id?: number;
          /** Location type: C city, S state, N country. Required with location_id. */
          location_type?: "C" | "S" | "N";
          /**
           * Restrict the free-text location to this two-letter country, for example GB for London, England. Requires location.
           * @pattern ^[A-Z]{2}$
           */
          location_country?: string;
          /**
           * Distance in miles; 0 means the exact location. Defaults to 25.
           * @minimum 0
           * @maximum 100
           */
          radius?: number;
          /** Employment type. Use job_types to select multiple types. */
          job_type?: "fulltime" | "parttime" | "contract" | "temporary" | "internship" | "permanent";
          /**
           * Employment attribute codes as a JSON array, for example ["CF3CP","NJXCK"]. Mutually exclusive with job_type. Codes are returned by include_filters.
           * @minItems 1
           * @maxItems 100
           */
          job_types?: Array<string>;
          /**
           * Maximum posting age in days.
           * @minimum 1
           * @maximum 30
           */
          from_age?: number;
          /**
           * Minimum annual salary in the search location's currency.
           * @minimum 0
           */
          salary_min?: number;
          /**
           * Maximum annual salary in the search location's currency.
           * @minimum 0
           */
          salary_max?: number;
          /** True selects work-from-home or remote jobs. False includes all workplace types. */
          remote?: boolean;
          /** True selects Easy Apply jobs. False includes all application types. */
          easy_apply?: boolean;
          /** Seniority filter. */
          seniority?: "internship" | "entrylevel" | "midseniorlevel" | "director" | "executive";
          /**
           * Glassdoor employer ID; include_filters returns matching employer IDs.
           * @minimum 1
           */
          company_id?: number;
          /**
           * Employer size categories as a JSON array: 1 tiny, 2 small, 3 medium, 4 large, 5 huge.
           * @minItems 1
           * @maxItems 100
           */
          company_sizes?: Array<number>;
          /**
           * Glassdoor industry ID; available values depend on the search and are returned by include_filters.
           * @minimum 1
           */
          industry_id?: number;
          /**
           * Glassdoor occupation category, such as 1007 Engineering. See include_filters.
           * @minimum 1
           */
          occupation_id?: number;
          /**
           * Refine the search to a city ID from include_filters.
           * @minimum 1
           */
          city_id?: number;
          /**
           * Minimum employer rating.
           * @minimum 0
           * @maximum 5
           */
          min_rating?: number;
          /** Relevance, oldest first, or newest first. */
          sort?: "relevance" | "date_asc" | "date_desc";
          /** Return available filters, values, counts and employer names in available_filters. */
          include_filters?: boolean;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get the ads shown on a Google search results page. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_ads": {
      input: {
        /** Google Ads asynchronous parameters. */
        body: {
          /** Google Ads search query, up to 2,048 characters with no controls. */
          q: string;
          /**
           * Human-readable location where the ad search originates, up to 63 UTF-8 bytes once Google-encoded.
           *
           * Example: Austin, Texas, United States.
           */
          location: string;
          /** Google interface and result language, such as en, en-GB, or de. */
          hl?: string;
          /** Google adult-content filtering. */
          safe?: "active" | "off";
          /** Google spelling auto-correction control. Set 1 to exclude corrected queries. */
          nfpr?: "0" | "1";
          /** Google returns its real layout for the selected device. */
          device?: "desktop" | "tablet" | "mobile";
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get Google AI Mode answers with cited sources. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_ai_mode": {
      input: {
        /** Google AI Mode asynchronous parameters. */
        body: {
          /** The question to ask Google AI Mode, up to 2,048 characters with no controls. */
          q: string;
          /** Named search origin, up to 512 characters and 63 UTF-8 bytes once Google-encoded. Conflicts with uule. */
          location?: string;
          /** Canonical Google location token, up to 2,048 characters. Conflicts with location. */
          uule?: string;
          /** Validated first-party Google domain the request is served from. */
          google_domain?: string;
          /** Two-letter country localization, normalized to lowercase. */
          gl?: string;
          /** Language code such as en, en-GB, or de. */
          hl?: string;
          /** Google returns its real layout for the selected device. */
          device?: "desktop" | "tablet" | "mobile";
          /** Return a subsequent_request_token so this answer can be followed up. */
          continuable?: boolean;
          /** Continue a conversation from a previous continuable response. Requires a new question, and cannot be combined with image_url. Expires after 30 minutes. */
          subsequent_request_token?: string;
          /** Public http or https image to include in the prompt, up to 2,048 characters and 20 MB. Google Lens receives the image; the answer still comes from AI Mode. */
          image_url?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get Google's AI Overview for a query, with cited sources. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_ai_overview": {
      input: {
        /** Google AI Overview asynchronous parameters. */
        body: {
          /**
           * Google Search query, up to 2,048 characters.
           *
           * Required unless ludocid or kgmid is supplied.
           * @maxLength 2048
           */
          q?: string;
          /**
           * Human-readable city-level location encoded to UULE by Litescrape.
           *
           * Conflicts with uule and lat/lon.
           * @maxLength 512
           */
          location?: string;
          /**
           * Pre-encoded Google location value.
           *
           * Conflicts with location and lat/lon.
           * @maxLength 2048
           */
          uule?: string;
          /**
           * Latitude from -90 through 90.
           *
           * Requires lon and conflicts with location and uule.
           * @minimum -90
           * @maximum 90
           */
          lat?: number;
          /**
           * Longitude from -180 through 180.
           *
           * Requires lat and conflicts with location and uule.
           * @minimum -180
           * @maximum 180
           */
          lon?: number;
          /**
           * Decimal search-bias radius in meters.
           *
           * Requires location or lat/lon. Desktop: 1–199; tablet/mobile: 1–1,000.
           * @minimum 1
           * @maximum 1000
           */
          radius?: number;
          /**
           * Google local CID used to search for one entity.
           * @maxLength 128
           * @pattern ^\d+$
           */
          ludocid?: string;
          /**
           * Opaque Knowledge Graph or local-pack signature.
           * @maxLength 4096
           */
          lsig?: string;
          /**
           * Google Knowledge Graph machine ID, such as /m/0k8z.
           * @maxLength 512
           */
          kgmid?: string;
          /**
           * Opaque cached Google search context.
           * @maxLength 4096
           */
          si?: string;
          /**
           * Google layout or expansion control.
           * @maxLength 4096
           */
          ibp?: string;
          /**
           * Opaque Google filter token.
           * @maxLength 4096
           */
          uds?: string;
          /** Google result color presentation. */
          color_scheme?: "light" | "dark";
          /** Results use google.com. Use gl, hl, cr, lr or geography for localization. */
          google_domain?: string;
          /**
           * Lowercase two-letter country localization code.
           * @pattern ^[a-z]{2}$
           */
          gl?: string;
          /**
           * Google interface and result language code.
           * @pattern ^[a-z]{2,3}(?:-[A-Za-z]{2,8})?$
           */
          hl?: string;
          /**
           * One or more countryXX restrictions joined with |.
           * @pattern ^country[A-Z]{2}(?:\|country[A-Z]{2})*$
           */
          cr?: string;
          /**
           * One or more lang_xx restrictions joined with |.
           * @pattern ^lang_[a-z]{2,3}(?:\|lang_[a-z]{2,3})*$
           */
          lr?: string;
          /**
           * Google native date or search filter string.
           * @maxLength 4096
           */
          tbs?: string;
          /** Google adult-content filtering. */
          safe?: "active" | "off";
          /** Google auto-correction control. */
          nfpr?: "0" | "1";
          /** Google similar-result filtering control. */
          filter?: "0" | "1";
          /** Google personalization control; 0 asks for non-personalized results. */
          pws?: "0" | "1";
          /** Google personalization peek flag, forwarded unchanged. */
          peek_pws?: "0" | "1";
          /** Google vertical: lcl, vid, nws, shop, or pts. For image searches, use /api/google/images. */
          tbm?: "lcl" | "vid" | "nws" | "shop" | "pts";
          /**
           * Non-negative Google result offset.
           * @minimum 0
           */
          start?: number;
          /**
           * Best-effort first-page result count, 1 to 10.
           * @minimum 1
           * @maximum 10
           */
          num?: number;
          /** Request device profile and radius bound. */
          device?: "desktop" | "tablet" | "mobile";
          /**
           * Original query associated with an autocomplete selection.
           * @maxLength 2048
           */
          oq?: string;
          /**
           * Google gs_lp value associated with an autocomplete selection.
           * @maxLength 4096
           */
          gs_lp?: string;
          /**
           * Google client identifier such as gws-wiz-serp.
           * @maxLength 64
           * @pattern ^[A-Za-z0-9._-]+$
           */
          sclient?: string;
          /**
           * Includes or excludes as_sitesearch.
           *
           * Requires as_sitesearch.
           */
          as_dt?: "i" | "e";
          /**
           * Exact phrase query.
           * @maxLength 2048
           */
          as_epq?: string;
          /**
           * Excluded phrase query.
           * @maxLength 2048
           */
          as_eq?: string;
          /**
           * Require results that link to this URL.
           * @maxLength 4096
           */
          as_lq?: string;
          /**
           * Inclusive range lower bound.
           *
           * Requires as_nhi.
           * @minimum 0
           */
          as_nlo?: number;
          /**
           * Inclusive range upper bound.
           *
           * Requires as_nlo.
           * @minimum 0
           */
          as_nhi?: number;
          /**
           * Any-of search terms.
           * @maxLength 2048
           */
          as_oq?: string;
          /**
           * Additional all-of search terms.
           * @maxLength 2048
           */
          as_q?: string;
          /**
           * Quick range d, w, m, or y with an optional positive count.
           * @pattern ^[dwmy](?:[1-9][0-9]*)?$
           */
          as_qdr?: string;
          /**
           * Find pages related to this URL.
           * @maxLength 4096
           */
          as_rq?: string;
          /**
           * Site hostname to include or exclude.
           * @maxLength 253
           */
          as_sitesearch?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get reviews written by a Google Maps contributor. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_contributor_reviews": {
      input: {
        /** Google Contributor Reviews asynchronous parameters. */
        body: {
          /** Required 10 to 32 digit ID from a Google Maps contributor URL. */
          contributor_id: string;
          /** Review and interface language such as en, en-US, or fr. */
          hl?: string;
          /** Two-letter country localization. */
          gl?: string;
          /** Review count from 1 through the anonymous source maximum of 200. */
          limit?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a completed text reply from Gemini. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_gemini": {
      input: {
        /** Gemini Chat asynchronous parameters. */
        body: {
          /**
           * Text prompt for a new or continued Gemini conversation, up to 32,000 characters.
           *
           * Text only. Use subsequent_request_token to continue a conversation. Uploads, Google account cookies and model selection are not accepted.
           * @minLength 1
           * @maxLength 32000
           */
          prompt: string;
          /**
           * Gemini web interface language code. Defaults to en; request a reply language in the prompt.
           * @pattern ^[a-zA-Z]{2,3}(?:-[a-zA-Z]{2,4})?$
           */
          hl?: string;
          /**
           * Return a subsequent_request_token for continuing this conversation. Defaults to false.
           *
           * Set to true on the first request and on each follow-up that needs another token.
           */
          continuable?: boolean;
          /**
           * Token from the previous reply. Send it with your next prompt using the same API key.
           *
           * Use the newest token for each follow-up. Tokens expire one hour after they are issued; an upstream conversation can become unavailable sooner. Treat tokens as sensitive. Invalid, expired or unavailable continuations fail without starting a new conversation and are not billed.
           * @minLength 1
           * @maxLength 32768
           */
          subsequent_request_token?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Google Images. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_images": {
      input: {
        /** Google Images asynchronous parameters. */
        body: {
          /**
           * Image search query, up to 2,048 characters.
           * @minLength 1
           * @maxLength 2048
           */
          q: string;
          /**
           * Language of the Google Images interface.
           * @pattern ^[a-z]{2,3}(?:-[A-Za-z]{2,8})?$
           */
          hl?: string;
          /**
           * Two-letter country code used to localize results.
           * @pattern ^[a-z]{2}$
           */
          gl?: string;
          /** Set active to filter explicit images, or off to disable SafeSearch. */
          safe?: "active" | "off";
          /**
           * Google image filters, such as isz:l for large images, itp:photo for photographs, or ic:trans for transparent images.
           * @maxLength 4096
           */
          tbs?: string;
          /**
           * Google's page offset. For the next page, use pagination.next_start from the response and keep the same query and filters. This offset is independent of num and the number of returned images.
           * @minimum 0
           * @maximum 1000
           */
          start?: number;
          /**
           * Maximum number of images returned from this page, from 1 to 100. This limits the parsed response; Google may supply fewer images.
           * @minimum 1
           * @maximum 100
           */
          num?: number;
          /** Device profile used for the image search. */
          device?: "desktop" | "tablet" | "mobile";
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Google Jobs listings by query and location. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_jobs": {
      input: {
        /** Google Jobs asynchronous parameters. */
        body: {
          /**
           * Job search query, for example software engineer jobs in New York.
           * @minLength 1
           * @maxLength 512
           */
          q: string;
          /**
           * One-based results page. Use next_page from the response to continue.
           * @minimum 1
           */
          page?: number;
          /**
           * Copy next_page_token with next_page and the same query to fetch the next batch directly.
           * @minLength 1
           * @maxLength 32768
           * @pattern ^[A-Za-z0-9+/=_-]+$
           */
          page_token?: string;
          /**
           * Google interface language, for example en, de, fr, es or pt-BR.
           * @pattern ^[a-z]{2,3}(?:-[A-Za-z]{2,8})?$
           */
          hl?: string;
          /**
           * Two-letter country code.
           * @pattern ^[a-z]{2}$
           */
          gl?: string;
          /**
           * Canonical Google location, such as London,England,United Kingdom. Use one of location, uule or lat/lon.
           * @minLength 1
           * @maxLength 512
           */
          location?: string;
          /**
           * Explicit Google UULE location value. Mutually exclusive with location and coordinates.
           * @minLength 1
           * @maxLength 2048
           */
          uule?: string;
          /**
           * Latitude of the search origin. Requires lon.
           * @minimum -90
           * @maximum 90
           */
          lat?: number;
          /**
           * Longitude of the search origin. Requires lat.
           * @minimum -180
           * @maximum 180
           */
          lon?: number;
          /**
           * Coordinate accuracy radius in meters, requiring lat/lon. This locates the search origin; it is not a job-distance filter.
           * @minimum 1
           * @maximum 199
           */
          radius?: number;
          /**
           * Opaque Google refinement value returned in available_filters. Copy its q and uds together; filter choices vary by query and market.
           * @minLength 1
           * @maxLength 16384
           */
          uds?: string;
          /**
           * Google search refinement string, for example qdr:w for the past week. Keep it unchanged through pagination.
           * @minLength 1
           * @maxLength 2048
           */
          tbs?: string;
          /** Return available Google Jobs filters with the q and uds parameters needed to apply each one. */
          include_filters?: boolean;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get Google local results for a query and location. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_local": {
      input: {
        /** Google Local asynchronous parameters. */
        body: {
          /** Google Local query, up to 2,048 characters with no controls. */
          q: string;
          /**
           * Human-readable location, up to 512 characters.
           *
           * Cannot be combined with uule.
           */
          location?: string;
          /**
           * Canonical Google named-location token, up to 2,048 characters.
           *
           * Cannot be combined with location.
           */
          uule?: string;
          /**
           * Validated Google domain.
           *
           * Examples: google.com, google.co.uk, google.fr.
           */
          google_domain?: string;
          /** Country localization normalized to lowercase. */
          gl?: string;
          /** Google interface and result language. */
          hl?: string;
          /** Google local CID, up to 128 digits. */
          ludocid?: string;
          /** Google compatibility token forwarded unchanged; the provider may leave ranking unchanged. */
          tbs?: string;
          /** Local-result offset through 10,000; source-exhausted offsets above 1,000 return empty. */
          start?: number;
          /** Compatibility value over device-invariant Maps data. */
          device?: "desktop" | "tablet" | "mobile";
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Google Maps places, or get one place by ID. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_maps": {
      input: {
        /** Google Maps asynchronous parameters. */
        body: {
          /**
           * The business, category, address, or natural-language query to search. Required when type is search.
           *
           * Examples: coffee shops in Austin, dentist near Denver
           */
          q?: string;
          /**
           * A complete viewport containing latitude, longitude, and either zoom or radius.
           *
           * Format: @lat,lon,14z or @lat,lon,5000m
           */
          ll?: string;
          /**
           * A named geographic location resolved by the API. Cannot be combined with ll or lat/lon.
           *
           * Requires z or m.
           */
          location?: string;
          /** Latitude for a coordinate-based viewport. Must be supplied with lon and either z or m. */
          lat?: string | number;
          /** Longitude for a coordinate-based viewport. Must be supplied with lat and either z or m. */
          lon?: string | number;
          /**
           * Google Maps zoom level for location or lat/lon geography.
           *
           * Accepted range: 3 through 30. Cannot be combined with m.
           */
          z?: string | number;
          /**
           * Search radius in meters for location or lat/lon geography.
           *
           * Accepted range: 1 through 15,028,132. Cannot be combined with z.
           */
          m?: string | number;
          /**
           * Uses the supplied geography as a nearby-search scope.
           *
           * Requires ll, location, or a lat/lon pair.
           */
          nearby?: boolean;
          /**
           * A Google Maps protobuf parameter sequence for search filters or an exact place.
           *
           * Maximum length: 8,192 characters. Exact-place data requires type=place.
           */
          data?: string;
          /**
           * A Google place identifier used to resolve one exact place or request live foot traffic.
           *
           * Cannot be combined with data_cid or exact-place data on the primary Maps endpoint. It is the only required parameter on /api/google/maps/popular-times. Every response is fetched live; places without published data return popular_times: null.
           */
          place_id?: string;
          /**
           * A decimal Google CID used to resolve one exact place.
           *
           * Cannot be combined with place_id or exact-place data.
           */
          data_cid?: string | number;
          /**
           * Chooses a result search or an exact place response. Required for query and filter searches.
           *
           * Use place when sending an exact-place data sequence.
           */
          type?: "search" | "place";
          /**
           * Language used for Google Maps labels and returned text.
           *
           * Examples: en, es, fr, de
           */
          hl?: string;
          /**
           * Two-letter country code used for regional result localization.
           *
           * Examples: us, gb, ca, au
           */
          gl?: string;
          /**
           * Validated Google domain used for the request.
           *
           * Examples: google.com, google.co.uk, google.ca
           */
          google_domain?: string;
          /**
           * Native Maps result offset: 0, 20, 40, and so on. Each request returns up to 20 places and each successful request costs one credit.
           *
           * Use pagination.next when it is present instead of constructing the next request manually.
           */
          start?: string | number;
          /**
           * Minimum price level for returned places.
           *
           * Must be non-negative and cannot exceed max_price.
           */
          min_price?: string | number;
          /**
           * Maximum price level for returned places.
           *
           * Must be non-negative and cannot be lower than min_price.
           */
          max_price?: string | number;
          /**
           * Preferred minimum Google rating.
           *
           * Google treats this as a relevance preference.
           */
          min_rating?: string | number;
          /**
           * Filters by the current open state.
           *
           * Cannot be combined with open_on_day or open_at_hour.
           */
          open_state?: "now" | "24h";
          /** Filters for places open on a specific day. */
          open_on_day?: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
          /**
           * Filters for places open at a specific hour using 24-hour time.
           *
           * Accepted range: 0 through 23. Requires open_on_day.
           */
          open_at_hour?: string | number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get the place, contributor, and date of a Maps photo. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_maps_photo_meta": {
      input: {
        /** Google Maps Photo Metadata asynchronous parameters. */
        body: {
          /** Required Google Maps photo ID. Follow photo_meta_link from a Maps place response. */
          data_id: string;
          /** Google interface and result language. */
          hl?: string;
          /** Two-letter country localization code. */
          gl?: string;
          /** A Google domain such as google.com or google.co.uk. */
          google_domain?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: See how busy a place is right now. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_maps_popular_times": {
      input: {
        /** Google Maps Popular Times asynchronous parameters. */
        body: {
          /** Required Google Place ID. Every response is fetched live. */
          place_id: string;
          /** Google interface and result language. */
          hl?: string;
          /** Two-letter country localization code. */
          gl?: string;
          /** A Google domain such as google.com or google.co.uk. */
          google_domain?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Read the posts published by a business. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_maps_posts": {
      input: {
        /** Google Maps Posts asynchronous parameters. */
        body: {
          /** Required hexadecimal Maps feature ID. Follow posts_link from a Maps place response. */
          data_id: string;
          /** Google interface and result language. */
          hl?: string;
          /** Two-letter country localization code. */
          gl?: string;
          /** A Google domain such as google.com or google.co.uk. */
          google_domain?: string;
          /** Continue a posts response with its opaque token. */
          next_page_token?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search and browse Google Play apps. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_play_apps": {
      input: {
        /** Google Play Apps asynchronous parameters. */
        body: {
          /**
           * Storefront language, such as en, de, or zh-TW. Maximum 32 characters.
           * @maxLength 32
           * @pattern ^[a-zA-Z]{2,3}(?:[-_][a-zA-Z0-9]{2,8}){0,3}$
           */
          hl?: string;
          /**
           * Two-letter country code.
           * @pattern ^[a-zA-Z]{2}$
           */
          gl?: string;
          /**
           * Optional query with 1 to 2,048 UTF-8 bytes of printable text. Excludes category. Omit it to browse the storefront. On the games endpoint, q uses shared Android app search; omit q or choose games_category to browse games.
           * @minLength 1
           * @maxLength 2048
           */
          q?: string;
          /**
           * Chart identifier such as topselling_free, topselling_paid, or topgrossing. Excludes q and all pagination selectors. Apps and games charts require phone or an omitted store_device.
           * @minLength 1
           * @maxLength 128
           * @pattern ^[a-zA-Z0-9_-]+$
           */
          chart?: string;
          /**
           * Use the returned next_page_token with the same parameters. Excludes chart, section_page_token, and see_more_token.
           * @minLength 1
           * @maxLength 65536
           * @pattern ^[a-zA-Z0-9_=+/:.-]+$
           */
          next_page_token?: string;
          /**
           * Continue one result group using its returned token and the same parameters. Excludes the other pagination selectors and chart.
           * @minLength 1
           * @maxLength 65536
           * @pattern ^[a-zA-Z0-9_=+/:.-]+$
           */
          section_page_token?: string;
          /**
           * Open a result collection using its returned token and the same parameters. Excludes the other pagination selectors and chart.
           * @minLength 1
           * @maxLength 65536
           * @pattern ^[a-zA-Z0-9_=+/:.-]+$
           */
          see_more_token?: string;
          /**
           * Native app category identifier, such as MEDICAL. Excludes q and an explicit store_device.
           * @minLength 1
           * @maxLength 128
           * @pattern ^[a-zA-Z0-9_-]+$
           */
          apps_category?: string;
          /** Omit for the default phone storefront. An explicit selection excludes q and category. */
          store_device?: "phone" | "tablet" | "tv" | "chromebook" | "watch" | "car";
          /** Children's age range. Requires apps_category=FAMILY. */
          age?: "AGE_RANGE1" | "AGE_RANGE2" | "AGE_RANGE3";
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search and browse Google Play ebooks and audiobooks. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_play_books": {
      input: {
        /** Google Play Books asynchronous parameters. */
        body: {
          /**
           * Storefront language, such as en, de, or zh-TW. Maximum 32 characters.
           * @maxLength 32
           * @pattern ^[a-zA-Z]{2,3}(?:[-_][a-zA-Z0-9]{2,8}){0,3}$
           */
          hl?: string;
          /**
           * Two-letter country code.
           * @pattern ^[a-zA-Z]{2}$
           */
          gl?: string;
          /**
           * Optional query with 1 to 2,048 UTF-8 bytes of printable text. Excludes category. Omit it to browse the storefront. On the games endpoint, q uses shared Android app search; omit q or choose games_category to browse games.
           * @minLength 1
           * @maxLength 2048
           */
          q?: string;
          /**
           * Chart identifier such as topselling_free, topselling_paid, or topgrossing. Excludes q and all pagination selectors. Apps and games charts require phone or an omitted store_device.
           * @minLength 1
           * @maxLength 128
           * @pattern ^[a-zA-Z0-9_-]+$
           */
          chart?: string;
          /**
           * Use the returned next_page_token with the same parameters. Excludes chart, section_page_token, and see_more_token.
           * @minLength 1
           * @maxLength 65536
           * @pattern ^[a-zA-Z0-9_=+/:.-]+$
           */
          next_page_token?: string;
          /**
           * Continue one result group using its returned token and the same parameters. Excludes the other pagination selectors and chart.
           * @minLength 1
           * @maxLength 65536
           * @pattern ^[a-zA-Z0-9_=+/:.-]+$
           */
          section_page_token?: string;
          /**
           * Open a result collection using its returned token and the same parameters. Excludes the other pagination selectors and chart.
           * @minLength 1
           * @maxLength 65536
           * @pattern ^[a-zA-Z0-9_=+/:.-]+$
           */
          see_more_token?: string;
          /**
           * Native book category identifier, such as coll_1689 for children's books. Excludes q.
           * @minLength 1
           * @maxLength 128
           * @pattern ^[a-zA-Z0-9_-]+$
           */
          books_category?: string;
          /** Children's age range. Requires books_category=coll_1689. */
          age?: "AGE_RANGE1" | "AGE_RANGE2" | "AGE_RANGE3";
          /**
           * 1 for free books or 2 for paid books. Requires q.
           * @minimum 1
           * @maximum 2
           */
          price?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Browse Google Play games by category and chart. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_play_games": {
      input: {
        /** Google Play Games asynchronous parameters. */
        body: {
          /**
           * Storefront language, such as en, de, or zh-TW. Maximum 32 characters.
           * @maxLength 32
           * @pattern ^[a-zA-Z]{2,3}(?:[-_][a-zA-Z0-9]{2,8}){0,3}$
           */
          hl?: string;
          /**
           * Two-letter country code.
           * @pattern ^[a-zA-Z]{2}$
           */
          gl?: string;
          /**
           * Optional query with 1 to 2,048 UTF-8 bytes of printable text. Excludes category. Omit it to browse the storefront. On the games endpoint, q uses shared Android app search; omit q or choose games_category to browse games.
           * @minLength 1
           * @maxLength 2048
           */
          q?: string;
          /**
           * Chart identifier such as topselling_free, topselling_paid, or topgrossing. Excludes q and all pagination selectors. Apps and games charts require phone or an omitted store_device.
           * @minLength 1
           * @maxLength 128
           * @pattern ^[a-zA-Z0-9_-]+$
           */
          chart?: string;
          /**
           * Use the returned next_page_token with the same parameters. Excludes chart, section_page_token, and see_more_token.
           * @minLength 1
           * @maxLength 65536
           * @pattern ^[a-zA-Z0-9_=+/:.-]+$
           */
          next_page_token?: string;
          /**
           * Continue one result group using its returned token and the same parameters. Excludes the other pagination selectors and chart.
           * @minLength 1
           * @maxLength 65536
           * @pattern ^[a-zA-Z0-9_=+/:.-]+$
           */
          section_page_token?: string;
          /**
           * Open a result collection using its returned token and the same parameters. Excludes the other pagination selectors and chart.
           * @minLength 1
           * @maxLength 65536
           * @pattern ^[a-zA-Z0-9_=+/:.-]+$
           */
          see_more_token?: string;
          /**
           * Native game category identifier, such as GAME_PUZZLE. Excludes q and an explicit store_device.
           * @minLength 1
           * @maxLength 128
           * @pattern ^[a-zA-Z0-9_-]+$
           */
          games_category?: string;
          /** Omit for the default phone storefront. An explicit selection excludes q and category. */
          store_device?: "phone" | "tablet" | "tv" | "chromebook" | "watch" | "windows";
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search and browse Google Play movies and TV shows. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_play_movies": {
      input: {
        /** Google Play Movies asynchronous parameters. */
        body: {
          /**
           * Storefront language, such as en, de, or zh-TW. Maximum 32 characters.
           * @maxLength 32
           * @pattern ^[a-zA-Z]{2,3}(?:[-_][a-zA-Z0-9]{2,8}){0,3}$
           */
          hl?: string;
          /**
           * Two-letter country code.
           * @pattern ^[a-zA-Z]{2}$
           */
          gl?: string;
          /**
           * Optional query with 1 to 2,048 UTF-8 bytes of printable text. Excludes category. Omit it to browse the storefront. On the games endpoint, q uses shared Android app search; omit q or choose games_category to browse games.
           * @minLength 1
           * @maxLength 2048
           */
          q?: string;
          /**
           * Chart identifier such as topselling_free, topselling_paid, or topgrossing. Excludes q and all pagination selectors. Apps and games charts require phone or an omitted store_device.
           * @minLength 1
           * @maxLength 128
           * @pattern ^[a-zA-Z0-9_-]+$
           */
          chart?: string;
          /**
           * Use the returned next_page_token with the same parameters. Excludes chart, section_page_token, and see_more_token.
           * @minLength 1
           * @maxLength 65536
           * @pattern ^[a-zA-Z0-9_=+/:.-]+$
           */
          next_page_token?: string;
          /**
           * Continue one result group using its returned token and the same parameters. Excludes the other pagination selectors and chart.
           * @minLength 1
           * @maxLength 65536
           * @pattern ^[a-zA-Z0-9_=+/:.-]+$
           */
          section_page_token?: string;
          /**
           * Open a result collection using its returned token and the same parameters. Excludes the other pagination selectors and chart.
           * @minLength 1
           * @maxLength 65536
           * @pattern ^[a-zA-Z0-9_=+/:.-]+$
           */
          see_more_token?: string;
          /**
           * Native movie category identifier, such as FAMILY for family movies. Excludes q.
           * @minLength 1
           * @maxLength 128
           * @pattern ^[a-zA-Z0-9_-]+$
           */
          movies_category?: string;
          /** Children's age range. Requires movies_category=FAMILY. */
          age?: "AGE_RANGE1" | "AGE_RANGE2" | "AGE_RANGE3";
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a Google Play app, book, movie or show by ID. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_play_product": {
      input: {
        /** Google Play Product asynchronous parameters. */
        body: {
          /**
           * Storefront language, such as en, de, or zh-TW. Maximum 32 characters.
           * @maxLength 32
           * @pattern ^[a-zA-Z]{2,3}(?:[-_][a-zA-Z0-9]{2,8}){0,3}$
           */
          hl?: string;
          /**
           * Two-letter country code.
           * @pattern ^[a-zA-Z]{2}$
           */
          gl?: string;
          /**
           * Native Google Play product identifier, with 1 to 512 letters, digits, underscores, dots, or hyphens.
           * @minLength 1
           * @maxLength 512
           * @pattern ^[a-zA-Z0-9_.-]+$
           */
          product_id: string;
          /** Product catalog containing this identifier. */
          store?: "apps" | "books" | "audiobooks" | "movies" | "tv";
          /**
           * Native season identifier, such as tvseason-OVPad1njPzI.P. Requires store=tv.
           * @minLength 1
           * @maxLength 512
           * @pattern ^[a-zA-Z0-9_.-]+$
           */
          season_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get reviews for a Google Play app. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_play_reviews": {
      input: {
        /** Google Play Reviews asynchronous parameters. */
        body: {
          /**
           * Storefront language, such as en, de, or zh-TW. Maximum 32 characters.
           * @maxLength 32
           * @pattern ^[a-zA-Z]{2,3}(?:[-_][a-zA-Z0-9]{2,8}){0,3}$
           */
          hl?: string;
          /**
           * Two-letter country code.
           * @pattern ^[a-zA-Z]{2}$
           */
          gl?: string;
          /**
           * Native Google Play product identifier, with 1 to 512 letters, digits, underscores, dots, or hyphens.
           * @minLength 1
           * @maxLength 512
           * @pattern ^[a-zA-Z0-9_.-]+$
           */
          product_id: string;
          /** Product catalog containing this identifier. */
          store?: "apps" | "books" | "audiobooks" | "movies" | "tv";
          /** Platform associated with the reviews. */
          platform?: "phone" | "tablet" | "watch" | "chromebook" | "tv";
          /**
           * Only reviews with this rating, from 1 through 5.
           * @minimum 1
           * @maximum 5
           */
          rating?: number;
          /**
           * 1 for relevant, 2 for newest, or 3 for rating.
           * @minimum 1
           * @maximum 3
           */
          sort_by?: number;
          /**
           * Number of reviews, from 1 through 199.
           * @minimum 1
           * @maximum 199
           */
          num?: number;
          /**
           * Returned review continuation. Preserve product, store, language, country, platform, rating, sort order, and count.
           * @minLength 1
           * @maxLength 65536
           * @pattern ^[a-zA-Z0-9_=+/:.-]+$
           */
          next_page_token?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get reviews for a Google Maps place. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_reviews": {
      input: {
        /** Google Maps Reviews asynchronous parameters. */
        body: {
          /**
           * Hexadecimal Google Maps feature identifier.
           *
           * Format: 0x123:0x456 Exactly one of data_id or place_id is required.
           */
          data_id?: string;
          /**
           * Google place identifier for the business whose reviews should be returned.
           *
           * Exactly one of place_id or data_id is required.
           */
          place_id?: string;
          /** Language used for returned review labels and place context. */
          hl?: string;
          /** Lowercase two-letter country code used for regional localization. */
          gl?: string;
          /** Controls the order of returned reviews. */
          sort_by?: "qualityScore" | "newestFirst" | "ratingHigh" | "ratingLow";
          /**
           * Returns reviews associated with a topic ID from the topics response group.
           *
           * Cannot be combined with query.
           */
          topic_id?: string;
          /**
           * Returns reviews matching a free-text query.
           *
           * Cannot be combined with topic_id.
           */
          query?: string;
          /**
           * Requested number of unique reviews to return.
           *
           * Initial unfiltered requests accept 1 through 100; the default remains eight. Requests return one response with up to the requested number of available reviews. Filtered and continuation requests accept 1 through 20.
           */
          num?: number | string;
          /**
           * Opaque continuation token from pagination.next_page_token.
           *
           * Pass the token back unchanged. Continuation requests default to ten reviews unless num is provided.
           */
          next_page_token?: string;
          /** Includes additional review-provider icon and scale metadata when available. */
          source_metadata?: string | boolean;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get Google search results, including the AI Overview and People also ask. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_search": {
      input: {
        /** Google Search asynchronous parameters. */
        body: {
          /**
           * Opaque token from pagination.next_page_token. Send it alone to fetch the next page with the original search parameters.
           *
           * Prefer page_token to repeating the same search with start=10, start=20, or another offset. Send the token as soon as possible and no later than 5 minutes after receiving it. Available for ordinary Google Search, including fast mode; not available for tbm verticals. search_metadata.continuation is followed for a direct request. If Google omits a required link or the deadline expires, the request fails without billing.
           * @maxLength 32768
           */
          page_token?: string;
          /**
           * Google Search query, up to 2,048 characters.
           *
           * Required unless ludocid, kgmid, or page_token is supplied.
           * @maxLength 2048
           */
          q?: string;
          /**
           * Return organic results only, skipping AI Overview and all other result groups.
           *
           * Keeps search metadata and parameters. Omits cross-module position_absolute.
           */
          fast_mode?: boolean;
          /**
           * Human-readable city-level location encoded to UULE by Litescrape.
           *
           * Conflicts with uule and lat/lon.
           * @maxLength 512
           */
          location?: string;
          /**
           * Pre-encoded Google location value.
           *
           * Conflicts with location and lat/lon.
           * @maxLength 2048
           */
          uule?: string;
          /**
           * Latitude from -90 through 90.
           *
           * Requires lon and conflicts with location and uule.
           * @minimum -90
           * @maximum 90
           */
          lat?: number;
          /**
           * Longitude from -180 through 180.
           *
           * Requires lat and conflicts with location and uule.
           * @minimum -180
           * @maximum 180
           */
          lon?: number;
          /**
           * Decimal search-bias radius in meters.
           *
           * Requires location or lat/lon. Desktop: 1–199; tablet/mobile: 1–1,000.
           * @minimum 1
           * @maximum 1000
           */
          radius?: number;
          /**
           * Google local CID used to search for one entity.
           * @maxLength 128
           * @pattern ^\d+$
           */
          ludocid?: string;
          /**
           * Opaque Knowledge Graph or local-pack signature.
           * @maxLength 4096
           */
          lsig?: string;
          /**
           * Google Knowledge Graph machine ID, such as /m/0k8z.
           * @maxLength 512
           */
          kgmid?: string;
          /**
           * Opaque cached Google search context.
           * @maxLength 4096
           */
          si?: string;
          /**
           * Google layout or expansion control.
           * @maxLength 4096
           */
          ibp?: string;
          /**
           * Opaque Google filter token.
           * @maxLength 4096
           */
          uds?: string;
          /** Google result color presentation. */
          color_scheme?: "light" | "dark";
          /** Results use google.com. Use gl, hl, cr, lr or geography for localization. */
          google_domain?: string;
          /**
           * Lowercase two-letter country localization code.
           * @pattern ^[a-z]{2}$
           */
          gl?: string;
          /**
           * Google interface and result language code.
           * @pattern ^[a-z]{2,3}(?:-[A-Za-z]{2,8})?$
           */
          hl?: string;
          /**
           * One or more countryXX restrictions joined with |.
           * @pattern ^country[A-Z]{2}(?:\|country[A-Z]{2})*$
           */
          cr?: string;
          /**
           * One or more lang_xx restrictions joined with |.
           * @pattern ^lang_[a-z]{2,3}(?:\|lang_[a-z]{2,3})*$
           */
          lr?: string;
          /**
           * Google native date or search filter string.
           * @maxLength 4096
           */
          tbs?: string;
          /** Google adult-content filtering. */
          safe?: "active" | "off";
          /** Google auto-correction control. */
          nfpr?: "0" | "1";
          /** Google similar-result filtering control. */
          filter?: "0" | "1";
          /** Google personalization control; 0 asks for non-personalized results. */
          pws?: "0" | "1";
          /** Google personalization peek flag, forwarded unchanged. */
          peek_pws?: "0" | "1";
          /** Google vertical: lcl, vid, nws, shop, or pts. For image searches, use /api/google/images. */
          tbm?: "lcl" | "vid" | "nws" | "shop" | "pts";
          /**
           * Non-negative Google result offset.
           *
           * Prefer page_token to repeating the same search with start=10, start=20, or another offset.
           * @minimum 0
           */
          start?: number;
          /**
           * Best-effort first-page result count, 1 to 10.
           * @minimum 1
           * @maximum 10
           */
          num?: number;
          /** Request device profile and radius bound. */
          device?: "desktop" | "tablet" | "mobile";
          /**
           * Original query associated with an autocomplete selection.
           * @maxLength 2048
           */
          oq?: string;
          /**
           * Google gs_lp value associated with an autocomplete selection.
           * @maxLength 4096
           */
          gs_lp?: string;
          /**
           * Google client identifier such as gws-wiz-serp.
           * @maxLength 64
           * @pattern ^[A-Za-z0-9._-]+$
           */
          sclient?: string;
          /**
           * Includes or excludes as_sitesearch.
           *
           * Requires as_sitesearch.
           */
          as_dt?: "i" | "e";
          /**
           * Exact phrase query.
           * @maxLength 2048
           */
          as_epq?: string;
          /**
           * Excluded phrase query.
           * @maxLength 2048
           */
          as_eq?: string;
          /**
           * Require results that link to this URL.
           * @maxLength 4096
           */
          as_lq?: string;
          /**
           * Inclusive range lower bound.
           *
           * Requires as_nhi.
           * @minimum 0
           */
          as_nlo?: number;
          /**
           * Inclusive range upper bound.
           *
           * Requires as_nlo.
           * @minimum 0
           */
          as_nhi?: number;
          /**
           * Any-of search terms.
           * @maxLength 2048
           */
          as_oq?: string;
          /**
           * Additional all-of search terms.
           * @maxLength 2048
           */
          as_q?: string;
          /**
           * Quick range d, w, m, or y with an optional positive count.
           * @pattern ^[dwmy](?:[1-9][0-9]*)?$
           */
          as_qdr?: string;
          /**
           * Find pages related to this URL.
           * @maxLength 4096
           */
          as_rq?: string;
          /**
           * Site hostname to include or exclude.
           * @maxLength 253
           */
          as_sitesearch?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Google Shopping products. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_shopping": {
      input: {
        /** Google Shopping asynchronous parameters. */
        body: {
          /** Product query, up to 2,048 characters with no controls. Optional when a shoprs token is supplied. */
          q?: string;
          /** Named search origin, up to 512 characters and 63 UTF-8 bytes once encoded. Conflicts with uule. */
          location?: string;
          /** Canonical Google location token, up to 2,048 characters. Conflicts with location. */
          uule?: string;
          /** Validated first-party Google domain. */
          google_domain?: string;
          /** Two-letter country code, normalized to lowercase. */
          gl?: string;
          /** Language code such as en, en-GB, or de. */
          hl?: string;
          /** Google returns its real layout for the selected device. */
          device?: "desktop" | "tablet" | "mobile";
          /** Google refinement token from a previous response, up to 4,096 characters. An explicit refinement replaces the one it carries. */
          shoprs?: string;
          /** Lower price bound, 0 through 1,000,000,000. Excludes the other refinements. */
          min_price?: number;
          /** Upper price bound, at or above min_price. Excludes the other refinements. */
          max_price?: number;
          /** Price low to high, price high to low, rating high to low, or Google’s default relevance. Combines with one refinement. */
          sort_by?: "" | "1" | "2" | "3" | "4";
          /** Only products with free shipping. Excludes the other refinements. */
          free_shipping?: boolean;
          /** Only products Google marks as on sale. Excludes the other refinements. */
          on_sale?: boolean;
          /** Only products from small businesses. Excludes the other refinements. */
          small_business?: boolean;
          /** Result offset from 0 through 1,000. */
          start?: number;
          /** 1 through 100. Responses are capped to this count and transparently consume Google’s fixed 40-product pages when needed. */
          num?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get direct merchant URLs for Google Shopping offers. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_shopping_merchant_urls": {
      input: {
        /** Google Shopping Merchant URLs asynchronous parameters. */
        body: {
          /**
           * Send 1–100 headline offers. Each item requires merchant and headline_offer_docid from Shopping Search.
           * @minItems 1
           * @maxItems 100
           */
          products: Array<{
            /**
             * Optional product ID for correlation; not used for lookup.
             * @pattern ^[0-9]{1,20}$
             */
            gpcid?: string | null;
            /**
             * Exact offer ID from Shopping Search; required.
             * @pattern ^[0-9]{1,20}$
             */
            headline_offer_docid: string;
            /**
             * Copy source from Shopping Search; required for grouping offer lookups.
             * @minLength 1
             * @maxLength 200
             */
            merchant: string;
          }>;
          /**
           * Use the same country code as the original Shopping Search. Defaults to us.
           * @pattern ^[a-zA-Z]{2}$
           */
          gl?: string;
          /**
           * Use the same language code as the original Shopping Search. Defaults to en.
           * @pattern ^[a-zA-Z]{2,3}(?:-[a-zA-Z]{2,4})?$
           */
          hl?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get every merchant offer for a Google Shopping product. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_google_shopping_product": {
      input: {
        /** Google Shopping Product asynchronous parameters. */
        body: {
          /** The search term this product was found with, up to 2,048 characters. Google resolves the product viewer against it as well as the identifiers. */
          q?: string;
          /** Named search origin, up to 512 characters and 63 UTF-8 bytes once encoded. Conflicts with uule. */
          location?: string;
          /** Canonical Google location token, up to 2,048 characters. Conflicts with location. */
          uule?: string;
          /** Validated first-party Google domain. */
          google_domain?: string;
          /** Two-letter country code, normalized to lowercase. */
          gl?: string;
          /** Language code such as en, en-GB, or de. */
          hl?: string;
          /** Google returns its real layout for the selected device. */
          device?: "desktop" | "tablet" | "mobile";
          /**
           * Product cluster ID from a shopping result, 1 to 20 decimal digits. Optional when a prds token is supplied.
           *
           * Every Shopping result with a gpcid includes a ready-made litescrape_product_link.
           */
          gpcid?: string;
          /** Headline merchant offer document ID from the same shopping result, 1 to 20 decimal digits. Goes with gpcid rather than prds. */
          headline_offer_docid?: string;
          /** Image document ID from the same shopping result, 1 to 20 decimal digits. Goes with gpcid rather than prds. */
          image_docid?: string;
          /** Google product selector token from a previous response, up to 2,048 characters. Conflicts with gpcid and the identifiers above. */
          prds?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a Home Depot product's details, price and availability. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_homedepot_product": {
      input: {
        /** Home Depot Product asynchronous parameters. */
        body: {
          /**
           * Public HTTPS product URL on this retailer's site.
           * @minLength 1
           * @maxLength 4096
           */
          url: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Home Depot products with prices and availability. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_homedepot_search": {
      input: {
        /** Home Depot Search asynchronous parameters. */
        body: {
          /**
           * Product keywords to search for.
           * @minLength 1
           * @maxLength 500
           */
          query: string;
          /**
           * Only the first result page is currently supported.
           * @minimum 1
           * @maximum 1
           */
          page?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a Homes.com property by URL. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_homes_property": {
      input: {
        /** Homes.com Property asynchronous parameters. */
        body: {
          /**
           * Homes.com property URL under /property/, without query parameters.
           *
           * Alpha: availability may vary by location or property. Returns available property facts, descriptions, coordinates, agents and photos. Price history is not available from this route. Returns available fields for the requested property.
           * @maxLength 2048
           */
          url: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Homes.com listings from a search URL. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_homes_search": {
      input: {
        /** Homes.com Search asynchronous parameters. */
        body: {
          /**
           * Homes.com location search URL, including sale, rental, price, property-type or page filters.
           *
           * Alpha: availability may vary by location or property. Use the site URL to set filters or select a page. Follow pagination.next when present. Page links and total counts are included when available.
           * @maxLength 4096
           */
          url: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get an IKEA product's details, price and availability. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_ikea_product": {
      input: {
        /** IKEA Product asynchronous parameters. */
        body: {
          /**
           * Public HTTPS product URL on this retailer's site.
           * @minLength 1
           * @maxLength 4096
           */
          url: string;
          /**
           * Retailer's store ID. Selects the store catalog, pricing or availability where the retailer exposes it.
           * @minLength 1
           * @maxLength 8
           * @pattern ^[0-9]{1,8}$
           */
          store_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search IKEA products with prices and availability. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_ikea_search": {
      input: {
        /** IKEA Search asynchronous parameters. */
        body: {
          /**
           * Product keywords to search for.
           * @minLength 1
           * @maxLength 500
           */
          query: string;
          /**
           * One-based result page.
           * @minimum 1
           * @maximum 100
           */
          page?: number;
          /**
           * Retailer's store ID. Selects the store catalog, pricing or availability where the retailer exposes it.
           * @minLength 1
           * @maxLength 8
           * @pattern ^[0-9]{1,8}$
           */
          store_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Indeed jobs by keyword and location, with salary, experience and remote filters. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_indeed_search": {
      input: {
        /** Indeed Search asynchronous parameters. */
        body: {
          /**
           * Job title, keywords, company or Indeed query syntax. Omit to browse using only location and filters.
           * @minLength 1
           * @maxLength 512
           */
          q?: string;
          /**
           * One-based results page. Use next_page from the response to continue.
           * @minimum 1
           */
          page?: number;
          /**
           * Continuation token from next_page_token. Use it with next_page and unchanged search parameters.
           * @minLength 1
           * @maxLength 32768
           * @pattern ^[A-Za-z0-9+/=_-]+$
           */
          page_token?: string;
          /**
           * City, state, ZIP code, or Remote.
           * @minLength 1
           * @maxLength 512
           */
          location?: string;
          /**
           * Search radius in radius_unit units; 0 means exact location.
           * @minimum 0
           * @maximum 100
           */
          radius?: number;
          /** Distance unit for the location radius. */
          radius_unit?: "miles" | "kilometers";
          /**
           * Two-letter Indeed market, for example US, CA, GB, DE or AU.
           * @pattern ^[A-Z]{2}$
           */
          country?: string;
          /**
           * Indeed locale, such as fr-CA or de-DE. Defaults to en-{country}; set the language for non-English searches.
           * @pattern ^[a-z]{2,3}-[A-Z]{2}$
           */
          locale?: string;
          /**
           * Jobs requested per page. Results may contain fewer jobs; use next_page_token to continue.
           * @minimum 1
           * @maximum 100
           */
          limit?: number;
          /** Result ordering. */
          sort?: "relevance" | "date";
          /**
           * Maximum age in days since the job appeared on Indeed.
           * @minimum 1
           */
          fromage?: number;
          /** Employment type filter. */
          job_type?: "fulltime" | "parttime" | "contract" | "temporary" | "internship" | "permanent" | "temp_to_hire" | "freelance";
          /** Filter for remote or hybrid jobs. */
          workplace?: "remote" | "hybrid";
          /** Require Indeed Apply. */
          easy_apply?: boolean;
          /** Education level filter. */
          education?: "high_school" | "associate" | "bachelor" | "master" | "doctoral";
          /** Require jobs marked No Experience Required. */
          no_experience?: boolean;
          /** Filter for entry, mid or senior level jobs. */
          experience_level?: "entry" | "mid" | "senior";
          /**
           * Minimum annualized base salary in the market's currency.
           * @minimum 0
           */
          salary_min?: number;
          /**
           * Maximum annualized base salary in the market's currency.
           * @minimum 0
           */
          salary_max?: number;
          /**
           * Minimum required experience in months.
           * @minimum 0
           */
          experience_months_min?: number;
          /**
           * Maximum required experience in months.
           * @minimum 0
           */
          experience_months_max?: number;
          /**
           * Language of the job posting, independent of the response locale.
           * @pattern ^[a-z]{2,3}$
           */
          job_language?: string;
          /**
           * Encoded Indeed employer keys as a JSON array. Names are not keys; company names can be searched in q using company:name.
           * @minItems 1
           * @maxItems 100
           */
          employer_keys?: Array<string>;
          /**
           * Require all of these Indeed attribute codes (JSON array), covering skills, benefits, shifts, licenses, clearances and employment types. Codes and labels are included on returned jobs.
           * @minItems 1
           * @maxItems 100
           */
          attribute_keys?: Array<string>;
          /**
           * Require any of these Indeed attribute codes (JSON array), combined with all other supplied filters.
           * @minItems 1
           * @maxItems 100
           */
          any_attribute_keys?: Array<string>;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Retrieve public Instagram embed data. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_instagram_embed": {
      input: {
        /** Instagram Embed asynchronous parameters. */
        body: {
          /**
           * Instagram username without @.
           * @pattern ^[A-Za-z0-9_.]{1,30}$
           */
          handle: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Retrieve public Instagram post data. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_instagram_post": {
      input: {
        /** Instagram Post asynchronous parameters. */
        body: {
          /** HTTPS Instagram post, reel or TV URL. */
          url: string;
          /** Return compact media details. */
          trim?: boolean;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Retrieve public Instagram posts data. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_instagram_posts": {
      input: {
        /** Instagram Posts asynchronous parameters. */
        body: {
          /**
           * Instagram username without @.
           * @pattern ^[A-Za-z0-9_.]{1,30}$
           */
          handle: string;
          /** Return a compact profile containing public identity and counts. */
          trim?: boolean;
          /**
           * next_max_id from the previous page.
           * @minLength 1
           * @maxLength 8192
           */
          next_max_id?: string;
          /**
           * Maximum number of posts requested from Instagram.
           * @minimum 1
           * @maximum 50
           */
          num?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Retrieve public Instagram profile data. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_instagram_profile": {
      input: {
        /** Instagram Profile asynchronous parameters. */
        body: {
          /**
           * Instagram username without @.
           * @pattern ^[A-Za-z0-9_.]{1,30}$
           */
          handle: string;
          /** Return a compact profile containing public identity and counts. */
          trim?: boolean;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Retrieve public Instagram profile post count data. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_instagram_profile_post_count": {
      input: {
        /** Instagram Profile Post Count asynchronous parameters. */
        body: {
          /**
           * Instagram username without @.
           * @pattern ^[A-Za-z0-9_.]{1,30}$
           */
          handle: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get popular Instagram posts for a search topic. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_instagram_search_popular": {
      input: {
        /** Instagram Search Popular asynchronous parameters. */
        body: {
          /**
           * Popular topic text or URL slug; spaces become hyphens.
           * @minLength 1
           * @maxLength 200
           */
          query: string;
          /**
           * Opaque cursor returned by search-popular for the same query.
           * @minLength 1
           * @maxLength 8192
           */
          cursor?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a Kroger product's details, price and availability. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_kroger_product": {
      input: {
        /** Kroger Product asynchronous parameters. */
        body: {
          /**
           * Public HTTPS product URL on this retailer's site.
           * @minLength 1
           * @maxLength 4096
           */
          url: string;
          /**
           * Retailer's store ID. Selects the store catalog, pricing or availability where the retailer exposes it.
           * @minLength 1
           * @maxLength 8
           * @pattern ^[0-9]{1,8}$
           */
          store_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Kroger products with prices and availability. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_kroger_search": {
      input: {
        /** Kroger Search asynchronous parameters. */
        body: {
          /**
           * Product keywords to search for.
           * @minLength 1
           * @maxLength 500
           */
          query: string;
          /**
           * Only the first result page is currently supported.
           * @minimum 1
           * @maximum 1
           */
          page?: number;
          /**
           * Retailer's store ID. Selects the store catalog, pricing or availability where the retailer exposes it.
           * @minLength 1
           * @maxLength 8
           * @pattern ^[0-9]{1,8}$
           */
          store_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Levels.fyi jobs by company, location, level and pay. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_levels_search": {
      input: {
        /** Levels.fyi Search asynchronous parameters. */
        body: {
          /**
           * Job title, keywords or company; omit to browse.
           * @minLength 1
           * @maxLength 512
           */
          q?: string;
          /**
           * One-based results page. Use next_page from the response to continue.
           * @minimum 1
           */
          page?: number;
          /**
           * Company slug, such as google.
           * @pattern ^[a-z0-9][a-z0-9-]{0,127}$
           */
          company?: string;
          /**
           * Levels.fyi location slug, such as united-states; not a free-text city name.
           * @pattern ^[a-z0-9][a-z0-9-]{0,127}$
           */
          location?: string;
          /** Result ordering. */
          sort?: "relevance" | "date_published" | "total_compensation";
          /**
           * Companies per page; jobs are grouped by company.
           * @minimum 1
           * @maximum 20
           */
          limit?: number;
          /**
           * Maximum matching jobs included for each company.
           * @minimum 1
           * @maximum 15
           */
          jobs_per_company?: number;
          /**
           * Company slugs as a JSON array; mutually exclusive with company. A single company advances jobs instead of company groups.
           * @minItems 1
           * @maxItems 100
           */
          companies?: Array<string>;
          /**
           * City, state or country slugs as a JSON array, such as ["united-states","canada"]. Mutually exclusive with location.
           * @minItems 1
           * @maxItems 100
           */
          locations?: Array<string>;
          /**
           * Job-family slugs as a JSON array, such as ["software-engineer"].
           * @minItems 1
           * @maxItems 100
           */
          job_families?: Array<string>;
          /**
           * Standard seniority levels as a JSON array.
           * @minItems 1
           * @maxItems 100
           */
          levels?: Array<"internship" | "entry" | "mid_staff" | "principal" | "manager" | "director" | "executive">;
          /**
           * Employment types as a JSON array.
           * @minItems 1
           * @maxItems 100
           */
          employment_types?: Array<"full_time" | "part_time" | "contract" | "temporary" | "internship" | "volunteer" | "other">;
          /**
           * Work arrangements as a JSON array.
           * @minItems 1
           * @maxItems 100
           */
          work_arrangements?: Array<"remote" | "office" | "hybrid">;
          /**
           * Minimum annual base compensation in USD.
           * @minimum 0
           */
          min_base_compensation?: number;
          /**
           * Minimum median annual total compensation in USD; may include Levels.fyi estimates.
           * @minimum 0
           */
          min_total_compensation?: number;
          /**
           * Company types as a JSON array.
           * @minItems 1
           * @maxItems 100
           */
          company_types?: Array<"private" | "public" | "nonprofit" | "government" | "education" | "delisted">;
          /**
           * Company sizes as a JSON array: seed 1–50, early 51–200, mid 201–1,000, large 1,001–10,000, enterprise 10,001+ employees.
           * @minItems 1
           * @maxItems 100
           */
          company_sizes?: Array<"seed" | "early" | "mid" | "large" | "enterprise">;
          /**
           * Company valuation ranges in USD as a JSON array of [minimum, maximum] pairs.
           * @minItems 1
           * @maxItems 100
           */
          company_valuations?: Array<Array<number>>;
          /**
           * Benefit IDs as a JSON array, for example 58 remote work, 4 retirement plan, 35 paid time off, 22 health insurance.
           * @minItems 1
           * @maxItems 100
           */
          perk_ids?: Array<number>;
          /**
           * Maximum posting age in posted_within_unit units.
           * @minimum 1
           */
          posted_within?: number;
          /** Unit for posted_within. */
          posted_within_unit?: "days" | "weeks" | "months";
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get Naver AI Briefing answers with citations. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_naver_ai_overview": {
      input: {
        /** Naver AI Overview asynchronous parameters. */
        body: {
          /**
           * Query for an AI Briefing; excludes page_token.
           * @minLength 1
           * @maxLength 4096
           */
          query?: string;
          /**
           * Business AI Briefing continuation from ai_briefing.page_token; excludes query.
           * @minLength 1
           * @maxLength 2048
           */
          page_token?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Naver web, news, video and image results. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_naver_search": {
      input: {
        /** Naver Search asynchronous parameters. */
        body: {
          /**
           * Search query, including Naver search operators.
           * @minLength 1
           * @maxLength 4096
           */
          query: string;
          /**
           * Result offset; takes precedence over page.
           * @minimum 0
           */
          start?: number;
          /**
           * Page number, starting at 1.
           * @minimum 1
           */
          page?: number;
          /**
           * Image result limit; defaults to 50 for images.
           * @minimum 1
           * @maximum 100
           */
          num?: number;
          /** Search type: nexearch (general search), web, video, news, or image. */
          where?: "nexearch" | "web" | "video" | "news" | "image";
          /** News: 0 relevance (default), 1 latest, 2 oldest. Other types: r relevance (default), dd latest. */
          sort_by?: "r" | "dd" | "0" | "1" | "2";
          /** Time window: all, 1h, 1d, 1w, 1m, 3m, 6m, 1y, or fromYYYYMMDDtoYYYYMMDD. News also accepts 2h, 3h, 4h, 5h, and 6h. */
          period?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a Realtor.com property by URL. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_realtor_property": {
      input: {
        /** Realtor.com Property asynchronous parameters. */
        body: {
          /**
           * Realtor.com property URL under /realestateandhomes-detail/, without query parameters.
           *
           * Alpha: availability may vary by location or property. Returns available fields for the requested property.
           * @maxLength 2048
           */
          url: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Realtor.com listings from a search URL. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_realtor_search": {
      input: {
        /** Realtor.com Search asynchronous parameters. */
        body: {
          /**
           * Listings per results page, from 1 to 200.
           * @minimum 1
           * @maximum 200
           */
          limit?: number;
          /**
           * Realtor.com city_STATE or ZIP search URL under /realestateandhomes-search/ or /apartments/.
           *
           * Alpha: availability may vary by location or property. Supported URL filters: price, beds, baths, sqft, type-single-family-home, show-recently-sold and pg-1 through pg-100. Unsupported filters and query parameters are rejected. Follow pagination.next when present. Bedroom filters require whole numbers.
           * @maxLength 4096
           */
          url: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a Redfin property by listing URL. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_redfin_property": {
      input: {
        /** Redfin Property asynchronous parameters. */
        body: {
          /**
           * Redfin property URL ending in /home/<property_id>.
           * @maxLength 2048
           */
          url: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Redfin homes for sale or recently sold. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_redfin_search": {
      input: {
        /** Redfin Search asynchronous parameters. */
        body: {
          /**
           * Minimum listing price in US dollars.
           * @minimum 0
           */
          min_price?: number;
          /**
           * Maximum listing price in US dollars.
           * @minimum 0
           */
          max_price?: number;
          /**
           * Minimum number of bedrooms.
           * @minimum 0
           * @maximum 20
           */
          min_beds?: number;
          /**
           * Maximum number of bedrooms.
           * @minimum 0
           * @maximum 20
           */
          max_beds?: number;
          /**
           * Minimum number of bathrooms.
           * @minimum 0
           * @maximum 20
           */
          min_baths?: number;
          /**
           * Minimum interior area in square feet.
           * @minimum 0
           */
          min_sqft?: number;
          /**
           * Maximum interior area in square feet.
           * @minimum 0
           */
          max_sqft?: number;
          /**
           * Redfin city, ZIP, county or neighborhood search URL. Existing URL filters are retained unless overridden.
           *
           * Supply one location: a region URL, region_id with region_type, or map_bounds.
           * @maxLength 2048
           */
          url?: string;
          /**
           * Redfin region identifier; requires region_type.
           * @exclusiveMinimum 0
           */
          region_id?: number;
          /**
           * Region kind: 1 neighborhood, 2 ZIP region, 5 county, 6 city, 11 state.
           *
           * A ZIP region identifier differs from the ZIP code. Use a Redfin ZIP search URL if the region identifier is unknown.
           */
          region_type?: 1 | 2 | 5 | 6 | 11;
          /** Map rectangle as north,east,south,west. */
          map_bounds?: string;
          /** Listing status. Defaults to for_sale when no URL is supplied. */
          status?: "for_sale" | "sold";
          /**
           * Sold listings from the last N days; requires status=sold. Defaults to 180 for sold searches.
           * @minimum 1
           * @maximum 365
           */
          sold_within_days?: number;
          /** Restrict results to one property type. */
          property_type?: "house" | "condo" | "townhouse" | "multi_family" | "land" | "other" | "manufactured" | "co_op";
          /** Result ordering. Defaults to recommended when no URL is supplied. */
          sort?: "recommended" | "newest" | "price_asc" | "price_desc" | "sqft";
          /**
           * Maximum homes returned. Narrow the region or map bounds when results reach this limit.
           *
           * The response does not advertise pagination or a total count. If search_information.possibly_truncated is true, narrow the location or filters.
           * @minimum 1
           * @maximum 350
           */
          limit?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a Sprouts product's details, price and availability. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_sprouts_product": {
      input: {
        /** Sprouts Product asynchronous parameters. */
        body: {
          /**
           * Public HTTPS product URL on this retailer's site.
           * @minLength 1
           * @maxLength 4096
           */
          url: string;
          /**
           * Sprouts store location ID, such as 17650. Selects that store's in-store catalog.
           * @minLength 1
           * @maxLength 8
           * @pattern ^[0-9]{1,8}$
           */
          store_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Sprouts products with prices and availability. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_sprouts_search": {
      input: {
        /** Sprouts Search asynchronous parameters. */
        body: {
          /**
           * Product keywords to search for.
           * @minLength 1
           * @maxLength 500
           */
          query: string;
          /**
           * One-based result page.
           * @minimum 1
           * @maximum 100
           */
          page?: number;
          /**
           * Sprouts store location ID, such as 17650. Selects that store's in-store catalog.
           * @minLength 1
           * @maxLength 8
           * @pattern ^[0-9]{1,8}$
           */
          store_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a product sold by the US retailer Target, with its details, price and availability. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_target_product": {
      input: {
        /** Target Product asynchronous parameters. */
        body: {
          /**
           * Public HTTPS product URL on this retailer's site.
           * @minLength 1
           * @maxLength 4096
           */
          url: string;
          /**
           * Retailer's store ID. Selects the store catalog, pricing or availability where the retailer exposes it.
           * @minLength 1
           * @maxLength 8
           * @pattern ^[0-9]{1,8}$
           */
          store_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search products sold by the US retailer Target, with prices and availability. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_target_search": {
      input: {
        /** Target Search asynchronous parameters. */
        body: {
          /**
           * Product keywords to search for.
           * @minLength 1
           * @maxLength 500
           */
          query: string;
          /**
           * One-based result page.
           * @minimum 1
           * @maximum 100
           */
          page?: number;
          /**
           * Retailer's store ID. Selects the store catalog, pricing or availability where the retailer exposes it.
           * @minLength 1
           * @maxLength 8
           * @pattern ^[0-9]{1,8}$
           */
          store_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Page through posts saved in a public TikTok collection. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tiktok_collection_videos": {
      input: {
        /** TikTok Collection Videos asynchronous parameters. */
        body: {
          /** Upstream pagination cursor from the preceding response; 0 starts a new feed. */
          cursor?: string | number;
          /**
           * Requested page size, between 1 and 35.
           * @minimum 1
           * @maximum 35
           */
          count?: number;
          /**
           * Public TikTok collection URL; supply this or collection_id.
           * @maxLength 2048
           */
          url?: string;
          /**
           * Numeric public saved-collection ID; supply this or url.
           * @pattern ^[0-9]{1,25}$
           */
          collection_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Page through replies to a TikTok comment. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tiktok_comment_replies": {
      input: {
        /** TikTok Comment Replies asynchronous parameters. */
        body: {
          /** Upstream pagination cursor from the preceding response; 0 starts a new feed. */
          cursor?: string | number;
          /**
           * Requested page size, between 1 and 35.
           * @minimum 1
           * @maximum 35
           */
          count?: number;
          /**
           * TikTok video, photo/slideshow or vm/vt short-link URL.
           * @maxLength 2048
           */
          url?: string;
          /**
           * TikTok post ID; supply this or url.
           * @pattern ^[0-9]{1,25}$
           */
          video_id?: string;
          /**
           * ID of the parent TikTok comment; obtain cid from the comments endpoint.
           * @pattern ^[0-9]{1,25}$
           */
          comment_id: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Page through public comments on a TikTok post. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tiktok_comments": {
      input: {
        /** TikTok Comments asynchronous parameters. */
        body: {
          /** Upstream pagination cursor from the preceding response; 0 starts a new feed. */
          cursor?: string | number;
          /**
           * Requested page size, between 1 and 35.
           * @minimum 1
           * @maximum 35
           */
          count?: number;
          /**
           * TikTok video, photo/slideshow or vm/vt short-link URL.
           * @maxLength 2048
           */
          url?: string;
          /**
           * TikTok post ID; supply this or url.
           * @pattern ^[0-9]{1,25}$
           */
          video_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Page through public followers of a TikTok user. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tiktok_followers": {
      input: {
        /** TikTok Followers asynchronous parameters. */
        body: {
          /** Upstream pagination cursor from the preceding response; 0 starts a new feed. */
          cursor?: string | number;
          /**
           * Requested page size, between 1 and 35.
           * @minimum 1
           * @maximum 35
           */
          count?: number;
          /**
           * Public TikTok handle, with or without @; supply this or user_id.
           * @pattern ^@?[A-Za-z0-9_.]{1,24}$
           */
          handle?: string;
          /**
           * Numeric TikTok user ID; supply this or handle.
           * @pattern ^[0-9]{1,25}$
           */
          user_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Page through the public accounts a TikTok user follows. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tiktok_following": {
      input: {
        /** TikTok Following asynchronous parameters. */
        body: {
          /** Upstream pagination cursor from the preceding response; 0 starts a new feed. */
          cursor?: string | number;
          /**
           * Requested page size, between 1 and 35.
           * @minimum 1
           * @maximum 35
           */
          count?: number;
          /**
           * Public TikTok handle, with or without @; supply this or user_id.
           * @pattern ^@?[A-Za-z0-9_.]{1,24}$
           */
          handle?: string;
          /**
           * Numeric TikTok user ID; supply this or handle.
           * @pattern ^[0-9]{1,25}$
           */
          user_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a TikTok live room's status and metrics. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tiktok_live": {
      input: {
        /** TikTok Live Room asynchronous parameters. */
        body: {
          /**
           * Numeric TikTok live-room ID, obtainable from user-live.
           * @pattern ^[0-9]{1,25}$
           */
          room_id: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get public TikTok profile fields and statistics by handle or numeric user ID. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tiktok_profile": {
      input: {
        /** TikTok Profile asynchronous parameters. */
        body: {
          /**
           * Public TikTok handle, with or without @; supply this or user_id.
           * @pattern ^@?[A-Za-z0-9_.]{1,24}$
           */
          handle?: string;
          /**
           * Numeric TikTok user ID; supply this or handle.
           * @pattern ^[0-9]{1,25}$
           */
          user_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Page through posts from a public TikTok profile by handle or numeric user ID. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tiktok_profile_videos": {
      input: {
        /** TikTok Profile Videos asynchronous parameters. */
        body: {
          /** Upstream pagination cursor from the preceding response; 0 starts a new feed. */
          cursor?: string | number;
          /**
           * Requested page size, between 1 and 35.
           * @minimum 1
           * @maximum 35
           */
          count?: number;
          /**
           * Public TikTok handle, with or without @; supply this or user_id.
           * @pattern ^@?[A-Za-z0-9_.]{1,24}$
           */
          handle?: string;
          /**
           * Numeric TikTok user ID; supply this or handle.
           * @pattern ^[0-9]{1,25}$
           */
          user_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Resolve a public hashtag and page through its posts. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tiktok_search_hashtag": {
      input: {
        /** TikTok Search Hashtag asynchronous parameters. */
        body: {
          /** Upstream pagination cursor from the preceding response; 0 starts a new feed. */
          cursor?: string | number;
          /**
           * Requested page size, between 1 and 35.
           * @minimum 1
           * @maximum 35
           */
          count?: number;
          /**
           * TikTok hashtag name, with or without the leading #.
           * @minLength 1
           * @maxLength 100
           * @pattern ^#?[^\s#/&?=]+$
           */
          hashtag: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search public TikTok posts by keyword with pagination and search-session IDs. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tiktok_search_keyword": {
      input: {
        /** TikTok Search Keyword asynchronous parameters. */
        body: {
          /** Upstream pagination cursor from the preceding response; 0 starts a new feed. */
          cursor?: string | number;
          /**
           * Requested page size, between 1 and 35.
           * @minimum 1
           * @maximum 35
           */
          count?: number;
          /**
           * TikTok video search query.
           * @minLength 1
           * @maxLength 500
           */
          query: string;
          /**
           * Upstream search session ID from the preceding page, when supplied.
           * @pattern ^[A-Za-z0-9_-]{1,128}$
           */
          search_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get public TikTok autocomplete suggestions in order. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tiktok_search_suggestions": {
      input: {
        /** TikTok Search Suggestions asynchronous parameters. */
        body: {
          /**
           * Search text for TikTok autocomplete suggestions.
           * @minLength 1
           * @maxLength 500
           */
          query: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get TikTok's top search results. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tiktok_search_top": {
      input: {
        /** TikTok Search Top asynchronous parameters. */
        body: {
          /** Upstream pagination cursor from the preceding response; 0 starts a new feed. */
          cursor?: string | number;
          /**
           * Requested page size, between 1 and 35.
           * @minimum 1
           * @maximum 35
           */
          count?: number;
          /**
           * TikTok video search query.
           * @minLength 1
           * @maxLength 500
           */
          query: string;
          /**
           * Upstream search session ID from the preceding page, when supplied.
           * @pattern ^[A-Za-z0-9_-]{1,128}$
           */
          search_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a TikTok sound's details and usage count. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tiktok_song": {
      input: {
        /** TikTok Song asynchronous parameters. */
        body: {
          /**
           * TikTok music clip ID, the numeric suffix of a /music/ URL.
           * @pattern ^[0-9]{1,25}$
           */
          clip_id: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Page through TikTok posts that use a sound. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tiktok_song_videos": {
      input: {
        /** TikTok Song Videos asynchronous parameters. */
        body: {
          /** Upstream pagination cursor from the preceding response; 0 starts a new feed. */
          cursor?: string | number;
          /**
           * Requested page size, between 1 and 35.
           * @minimum 1
           * @maximum 35
           */
          count?: number;
          /**
           * Numeric TikTok music clip ID, the suffix of a /music/ URL.
           * @pattern ^[0-9]{1,25}$
           */
          clip_id: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get public TikTok captions with timed segments. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tiktok_transcript": {
      input: {
        /** TikTok Transcript asynchronous parameters. */
        body: {
          /**
           * TikTok video, photo/slideshow or vm/vt short-link URL.
           * @maxLength 2048
           */
          url?: string;
          /**
           * TikTok post ID; supply this or url.
           * @pattern ^[0-9]{1,25}$
           */
          video_id?: string;
          /**
           * Caption language code, for example eng-US. Defaults to the first available track.
           * @pattern ^[A-Za-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$
           */
          language?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get TikTok's trending feed. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tiktok_trending_feed": {
      input: {
        /** TikTok Trending Feed asynchronous parameters. */
        body: {
          /**
           * Requested number of recommended posts, between 1 and 35.
           * @minimum 1
           * @maximum 35
           */
          count?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a TikTok user's live status and room metadata. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tiktok_user_live": {
      input: {
        /** TikTok User Live asynchronous parameters. */
        body: {
          /**
           * Public TikTok handle, with or without the leading @.
           * @pattern ^@?[A-Za-z0-9_.]{1,24}$
           */
          handle: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a TikTok video or photo post with its media and metrics. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tiktok_video": {
      input: {
        /** TikTok Video asynchronous parameters. */
        body: {
          /**
           * TikTok video, photo/slideshow or vm/vt short-link URL.
           * @maxLength 2048
           */
          url?: string;
          /**
           * TikTok post ID; supply this or url.
           * @pattern ^[0-9]{1,25}$
           */
          video_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a Tripadvisor place by ID. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tripadvisor_place": {
      input: {
        /** Tripadvisor Place asynchronous parameters. */
        body: {
          /** Required positive Tripadvisor place identifier. */
          place_id: number;
          /** Supported localized Tripadvisor hostname. */
          tripadvisor_domain?: string;
          /** Language or language-COUNTRY code. */
          locale?: string;
          /** Three-letter ISO currency for price fields. */
          currency?: string;
          /** Optional positive parent geography identifier. */
          geo_id?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get reviews for a Tripadvisor place. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tripadvisor_reviews": {
      input: {
        /** Tripadvisor Reviews asynchronous parameters. */
        body: {
          /** Required positive Tripadvisor place identifier. */
          place_id: number;
          /** Supported localized Tripadvisor hostname. */
          tripadvisor_domain?: string;
          /** Language or language-COUNTRY code. */
          locale?: string;
          /** Review offset from 0 through 10,000. */
          start?: number;
          /** Review count from 1 through 50. */
          num?: number;
          /** Chronological or machine-ranked ordering. */
          sort_by?: "recent" | "relevance";
          /** Request Tripadvisor machine translation. */
          translate?: boolean;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Tripadvisor hotels, restaurants and attractions. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_tripadvisor_search": {
      input: {
        /** Tripadvisor Search asynchronous parameters. */
        body: {
          /** Required search text, up to 500 characters. */
          q: string;
          /** Supported localized Tripadvisor hostname. */
          tripadvisor_domain?: string;
          /** Language or language-COUNTRY code. */
          locale?: string;
          /** Optional positive Tripadvisor geography identifier. */
          geo_id?: number;
          /** Optional search-center latitude; requires lon. */
          lat?: number;
          /** Optional search-center longitude; requires lat. */
          lon?: number;
          /** Result entity type. */
          place_type?: "all" | "accommodation" | "attraction" | "attraction_product" | "eatery" | "geo";
          /** Result offset from 0 through 10,000. */
          start?: number;
          /** Result count from 1 through 30. */
          num?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a Walmart product's details, price and availability. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_walmart_product": {
      input: {
        /** Walmart Product asynchronous parameters. */
        body: {
          /**
           * Public HTTPS product URL on this retailer's site.
           * @minLength 1
           * @maxLength 4096
           */
          url: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Walmart products with prices and availability. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_walmart_search": {
      input: {
        /** Walmart Search asynchronous parameters. */
        body: {
          /**
           * Product keywords to search for.
           * @minLength 1
           * @maxLength 500
           */
          query: string;
          /**
           * One-based result page.
           * @minimum 1
           * @maximum 100
           */
          page?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a Wayfair product's details, price and availability. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_wayfair_product": {
      input: {
        /** Wayfair Product asynchronous parameters. */
        body: {
          /**
           * Public HTTPS product URL on this retailer's site.
           * @minLength 1
           * @maxLength 4096
           */
          url: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Wayfair products with prices and availability. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_wayfair_search": {
      input: {
        /** Wayfair Search asynchronous parameters. */
        body: {
          /**
           * Product keywords to search for.
           * @minLength 1
           * @maxLength 500
           */
          query: string;
          /**
           * One-based result page.
           * @minimum 1
           * @maximum 100
           */
          page?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a web page as Markdown, HTML or plain text. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_web_fetch": {
      input: {
        /** Fetch asynchronous parameters. */
        body: {
          /**
           * Public HTTP(S) URL to capture, 1-8,192 characters. Include http:// or https://; bare domains are rejected. The host must be public, on port 80 or 443, without embedded credentials.
           * @minLength 1
           * @maxLength 8192
           */
          url: string;
          /** Remove modal and cookie-banner overlays from the page. */
          remove_overlay?: boolean | null;
          /** Drop display:none elements from the page. */
          detach_invisibles?: boolean | null;
          /** CSS selector to wait for after navigation, 1-2,048 characters. POST also accepts a list of 1-16 selectors. */
          wait_for_selector?: string | Array<string> | null;
          /**
           * POST only. 1-100 cookies in Set-Cookie syntax (name=value; Path=/; Domain=...), one line each, up to 4,096 characters.
           * @minItems 1
           * @maxItems 100
           */
          set_cookies?: Array<string> | null;
          /**
           * User-Agent for the page request, 1-1,024 characters without control characters. Defaults to the browser's own.
           * @minLength 1
           * @maxLength 1024
           */
          user_agent?: string | null;
          /**
           * POST only. 1-8 scripts (source, or a URL to a script), up to 8,192 characters each, run in the main frame.
           * @minItems 1
           * @maxItems 8
           */
          inject_page_script?: Array<string> | null;
          /**
           * POST only. 1-8 scripts (source, or a URL to a script), up to 8,192 characters each, run in every frame.
           * @minItems 1
           * @maxItems 8
           */
          inject_frame_script?: Array<string> | null;
          /**
           * Seconds from 1 through 180 for page loading and browser operations. Cannot extend the total request budget set by timeout.
           * @minimum 1
           * @maximum 180
           */
          page_timeout?: number | null;
          /**
           * Browser locale as a language tag, 2-64 characters. Defaults to the browser's own.
           * @minLength 2
           * @maxLength 64
           * @pattern ^[A-Za-z]{2,8}(?:-[A-Za-z0-9]{1,8})*$
           */
          locale?: string | null;
          /**
           * HTTP(S) URL sent as the Referer.
           * @minLength 1
           * @maxLength 8192
           */
          referer?: string | null;
          /**
           * Expected origin HTTP status, 100-599. A different status is rejected; otherwise a rendered error page is a successful capture.
           * @minimum 100
           * @maximum 599
           */
          assert_status_code?: number | null;
          /** POST only. Browser viewport; width and height are required. Default: 1280 x 1280. */
          viewport?: {
            /**
             * Viewport width in CSS pixels, 1-4,096. Required.
             * @minimum 1
             * @maximum 4096
             */
            width: number;
            /**
             * Viewport height in CSS pixels, 1-4,096. Required.
             * @minimum 1
             * @maximum 4096
             */
            height: number;
            /**
             * Device pixel ratio, greater than 0 and at most 4.
             * @maximum 4
             * @exclusiveMinimum 0
             */
            device_scale_factor?: number | null;
            /** Emulate a mobile device. */
            is_mobile?: boolean | null;
            /** Use landscape orientation. */
            is_landscape?: boolean | null;
            /** Emulate touch support. */
            has_touch?: boolean | null;
          } | null;
          /**
           * User agent, 1-256 characters, to check against the site's robots.txt; disallowed URLs are rejected.
           * @minLength 1
           * @maxLength 256
           */
          robots_txt?: string | null;
          /** Page readiness condition to reach before responding. */
          respond_timing?: "html" | "visible-content" | "mutation-idle" | "resource-idle" | "media-idle" | "network-idle" | null;
          /**
           * Output format: content (default; main content as Markdown, or the whole page when extraction keeps too little), markdown (whole page as Markdown), html, text, frontmatter (content plus front matter), or a '+' combination such as markdown+frontmatter. For screenshots use /api/web/screenshot.
           * @minLength 3
           * @maxLength 64
           */
          respond_with?: string | null;
          /** true, false or all: add a links list to the response. */
          with_links_summary?: boolean | "all" | null;
          /** Add an images list to the response. */
          with_images_summary?: boolean | null;
          /** Images to keep: all (default), alt (alt text only) or none. */
          retain_images?: "none" | "all" | "alt" | null;
          /** Links to keep: all (default), text (link text only), none, or gpt-oss (citation format with a links summary). */
          retain_links?: "none" | "all" | "text" | "gpt-oss" | null;
          /** How video, audio and embedded video appear: none, text, link (default), image or html. */
          retain_media?: "none" | "text" | "link" | "image" | "html" | null;
          /** Option preset. Fills only the options the request leaves unset. */
          preset?: "reader" | "index" | "research" | "agent" | "spider" | null;
          /** true, false or table: disable GitHub-flavored Markdown, or only its tables. */
          no_gfm?: boolean | "table" | null;
          /** CSS selector to extract, 1-2,048 characters; POST also accepts a list of 1-16 selectors. Implies waiting for the selector. Match-all selectors are rejected. */
          target_selector?: string | Array<string> | null;
          /** CSS selector removed before extraction, 1-2,048 characters; POST also accepts a list of 1-16 selectors. */
          remove_selector?: string | Array<string> | null;
          /** Keep inline data: images in Markdown. */
          keep_img_data_url?: boolean | null;
          /** true, false or quoted: include iframe content before extraction. */
          with_iframe?: boolean | "quoted" | null;
          /** Include open shadow DOM content before extraction. */
          with_shadow_dom?: boolean | null;
          /** auto (default; lightweight HTTP first, a browser when needed), browser, or curl (no JavaScript). */
          engine?: "auto" | "browser" | "curl" | null;
          /**
           * Integer 1-10,000,000. Reject the page when its token count exceeds the budget.
           * @minimum 1
           * @maximum 10000000
           */
          token_budget?: number | null;
          /** POST only. Markdown formatting options. */
          markdown?: {
            /** Markdown heading style: setext (underlined) or atx (# prefixed). */
            heading_style?: "setext" | "atx" | null;
            /**
             * Markdown used for horizontal rules, 1-128 characters.
             * @minLength 1
             * @maxLength 128
             */
            hr?: string | null;
            /** Marker for bulleted list items. */
            bullet_list_marker?: "-" | "+" | "*" | null;
            /** Delimiter for emphasis. */
            em_delimiter?: "_" | "*" | null;
            /** Delimiter for strong emphasis. */
            strong_delimiter?: "__" | "**" | null;
            /** How links are written: inlined, referenced (reference-style) or discarded. */
            link_style?: "inlined" | "referenced" | "discarded" | null;
            /** Reference format when link_style is referenced. */
            link_reference_style?: "full" | "collapsed" | "shortcut" | "discarded" | null;
          } | null;
          /** true, h1-h5, structured or s1-s5: split the Markdown and return chunks. */
          markdown_chunking?: "true" | "h1" | "h2" | "h3" | "h4" | "h5" | "structured" | "s1" | "s2" | "s3" | "s4" | "s5" | null;
          /**
           * Integer 500-10,000,000. Trim content to this many tokens.
           * @minimum 500
           * @maximum 10000000
           */
          max_tokens?: number | null;
          /** Resolve relative links against the requested URL (initial, default) or the final URL after redirects (final). */
          base?: "initial" | "final" | null;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Take a screenshot of a web page. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_web_screenshot": {
      input: {
        /** Screenshot asynchronous parameters. */
        body: {
          /**
           * Public HTTP(S) URL to capture, 1-8,192 characters. Include http:// or https://; bare domains are rejected. The host must be public, on port 80 or 443, without embedded credentials.
           * @minLength 1
           * @maxLength 8192
           */
          url: string;
          /** Remove modal and cookie-banner overlays from the page. */
          remove_overlay?: boolean | null;
          /** Drop display:none elements from the page. */
          detach_invisibles?: boolean | null;
          /** CSS selector to wait for after navigation, 1-2,048 characters. POST also accepts a list of 1-16 selectors. */
          wait_for_selector?: string | Array<string> | null;
          /**
           * POST only. 1-100 cookies in Set-Cookie syntax (name=value; Path=/; Domain=...), one line each, up to 4,096 characters.
           * @minItems 1
           * @maxItems 100
           */
          set_cookies?: Array<string> | null;
          /**
           * User-Agent for the page request, 1-1,024 characters without control characters. Defaults to the browser's own.
           * @minLength 1
           * @maxLength 1024
           */
          user_agent?: string | null;
          /**
           * POST only. 1-8 scripts (source, or a URL to a script), up to 8,192 characters each, run in the main frame.
           * @minItems 1
           * @maxItems 8
           */
          inject_page_script?: Array<string> | null;
          /**
           * POST only. 1-8 scripts (source, or a URL to a script), up to 8,192 characters each, run in every frame.
           * @minItems 1
           * @maxItems 8
           */
          inject_frame_script?: Array<string> | null;
          /**
           * Seconds from 1 through 180 for page loading and browser operations. Cannot extend the total request budget set by timeout.
           * @minimum 1
           * @maximum 180
           */
          page_timeout?: number | null;
          /**
           * Browser locale as a language tag, 2-64 characters. Defaults to the browser's own.
           * @minLength 2
           * @maxLength 64
           * @pattern ^[A-Za-z]{2,8}(?:-[A-Za-z0-9]{1,8})*$
           */
          locale?: string | null;
          /**
           * HTTP(S) URL sent as the Referer.
           * @minLength 1
           * @maxLength 8192
           */
          referer?: string | null;
          /**
           * Expected origin HTTP status, 100-599. A different status is rejected; otherwise a rendered error page is a successful capture.
           * @minimum 100
           * @maximum 599
           */
          assert_status_code?: number | null;
          /** POST only. Browser viewport; width and height are required. Default: 1280 x 1280. */
          viewport?: {
            /**
             * Viewport width in CSS pixels, 1-4,096. Required.
             * @minimum 1
             * @maximum 4096
             */
            width: number;
            /**
             * Viewport height in CSS pixels, 1-4,096. Required.
             * @minimum 1
             * @maximum 4096
             */
            height: number;
            /**
             * Device pixel ratio, greater than 0 and at most 4.
             * @maximum 4
             * @exclusiveMinimum 0
             */
            device_scale_factor?: number | null;
            /** Emulate a mobile device. */
            is_mobile?: boolean | null;
            /** Use landscape orientation. */
            is_landscape?: boolean | null;
            /** Emulate touch support. */
            has_touch?: boolean | null;
          } | null;
          /**
           * User agent, 1-256 characters, to check against the site's robots.txt; disallowed URLs are rejected.
           * @minLength 1
           * @maxLength 256
           */
          robots_txt?: string | null;
          /** Page readiness condition to reach before responding. */
          respond_timing?: "html" | "visible-content" | "mutation-idle" | "resource-idle" | "media-idle" | "network-idle" | null;
          /** Capture the full page when true. The default, false, captures the viewport. */
          full_page?: boolean;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a Whole Foods product's details, price and availability. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_wholefoods_product": {
      input: {
        /** Whole Foods Product asynchronous parameters. */
        body: {
          /**
           * Public HTTPS product URL on this retailer's site.
           * @minLength 1
           * @maxLength 4096
           */
          url: string;
          /**
           * Retailer's store ID. Selects the store catalog, pricing or availability where the retailer exposes it.
           * @minLength 1
           * @maxLength 8
           * @pattern ^[0-9]{1,8}$
           */
          store_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Whole Foods products with prices and availability. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_wholefoods_search": {
      input: {
        /** Whole Foods Search asynchronous parameters. */
        body: {
          /**
           * Product keywords to search for.
           * @minLength 1
           * @maxLength 500
           */
          query: string;
          /**
           * One-based result page.
           * @minimum 1
           * @maximum 100
           */
          page?: number;
          /**
           * Retailer's store ID. Selects the store catalog, pricing or availability where the retailer exposes it.
           * @minLength 1
           * @maxLength 8
           * @pattern ^[0-9]{1,8}$
           */
          store_id?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get X community details, including its creator, member count and rules. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_x_community": {
      input: {
        /** X Community asynchronous parameters. */
        body: {
          /**
           * Numeric X community ID as a string.
           * @pattern ^[1-9][0-9]{0,19}$
           */
          community_id: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get posts from an X community, including authors, engagement and media. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_x_community_posts": {
      input: {
        /** X Community Posts asynchronous parameters. */
        body: {
          /**
           * Numeric X community ID as a string, from its /i/communities/ URL.
           * @pattern ^[1-9][0-9]{0,19}$
           */
          community_id: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get an X post with its text, author, engagement counts and media. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_x_post": {
      input: {
        /** X Post asynchronous parameters. */
        body: {
          /**
           * Numeric X post ID as a string, taken from its /status/ URL.
           * @pattern ^[1-9][0-9]{0,19}$
           */
          post_id: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a public X profile, including its bio, follower counts and profile images. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_x_profile": {
      input: {
        /** X Profile asynchronous parameters. */
        body: {
          /**
           * X username, with or without a leading @. Profile URLs are not accepted.
           * @pattern ^[A-Za-z0-9_]{1,15}$
           */
          username: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get posts from an X user. This upstream API is Alpha. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_x_user_posts": {
      input: {
        /** X User Posts asynchronous parameters. */
        body: {
          /**
           * X username, with or without a leading @. Profile URLs are not accepted.
           * @pattern ^[A-Za-z0-9_]{1,15}$
           */
          username: string;
          /**
           * Continuation cursor returned for the same username.
           * @minLength 1
           * @maxLength 4096
           * @pattern ^[A-Za-z0-9_+/=-]+$
           */
          cursor?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Yahoo Images. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_yahoo_images": {
      input: {
        /** Yahoo Images asynchronous parameters. */
        body: {
          /**
           * Text or search operators to send to Yahoo.
           * @minLength 1
           * @maxLength 2000
           */
          p: string;
          /** Yahoo regional search host, for example fr.search.yahoo.com. A regional prefix such as fr is also accepted. */
          yahoo_domain?: string;
          /**
           * One-based starting result. Web pages usually advance by 10; image pages usually advance by 60.
           * @minimum 1
           * @maximum 10001
           */
          b?: number;
          /** Device profile used for the Yahoo result page. */
          device?: "desktop" | "tablet" | "mobile";
          /** Image size category; wallpaper selects extra-large images. */
          imgsz?: "small" | "medium" | "large" | "wallpaper";
          /** Select color images, monochrome images (bw), or a dominant color. */
          imgc?: "color" | "bw" | "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "purple" | "pink" | "brown" | "black" | "gray" | "white";
          /** Image style or format to include. */
          imgty?: "photo" | "clipart" | "linedrawing" | "gif" | "transparent";
          /** Image shape: square, landscape (wide), or portrait (tall). */
          imga?: "square" | "wide" | "tall";
          /** People filter: faces, head-and-shoulders portraits, or images without people. */
          imgf?: "face" | "portrait" | "nonportrait";
          /** Limit images to a recent day, week, month, or year. */
          imgt?: "day" | "week" | "month" | "year";
          /** Usage-rights category: Creative Commons (cc), public domain (pd), sharing (fsu), commercial sharing (fsuc), modification (fmsu), or commercial modification (fmsuc). */
          imgl?: "cc" | "pd" | "fsu" | "fsuc" | "fmsu" | "fmsuc";
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get Yahoo web search results. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_yahoo_search": {
      input: {
        /** Yahoo Search asynchronous parameters. */
        body: {
          /**
           * Text or search operators to send to Yahoo.
           * @minLength 1
           * @maxLength 2000
           */
          p: string;
          /** Yahoo regional search host, for example fr.search.yahoo.com. A regional prefix such as fr is also accepted. */
          yahoo_domain?: string;
          /**
           * One-based starting result. Web pages usually advance by 10; image pages usually advance by 60.
           * @minimum 1
           * @maximum 10001
           */
          b?: number;
          /** Device profile used for the Yahoo result page. */
          device?: "desktop" | "tablet" | "mobile";
          /**
           * Country code for regional results, such as us or uk.
           * @pattern ^[a-z]{2}$
           */
          vc?: string;
          /**
           * Restrict matches to a language, such as lang_fr, lang_zh_chs, or lang_zh_cht. Enables Yahoo's language filter.
           * @pattern ^lang_(?:[a-z]{2}|zh_chs|zh_cht)$
           */
          vl?: string;
          /** Adult-content filtering: r for strict, i for moderate, p for unfiltered. */
          vm?: "r" | "i" | "p";
          /**
           * Comma-separated domain suffixes to search, such as .com,.org.
           * @maxLength 500
           */
          vs?: string;
          /**
           * Document format to match, such as pdf, txt, or all formats.
           * @maxLength 80
           */
          vf?: string;
          /**
           * Yahoo display token controlling result module placement and expansion.
           * @maxLength 1000
           */
          fr2?: string;
          /**
           * Yahoo related-topic destination token, passed through as a string.
           * @maxLength 4096
           */
          d?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Yandex Images, including reverse image search. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_yandex_images": {
      input: {
        /** Yandex Images asynchronous parameters. */
        body: {
          /** Yandex domain to search. */
          yandex_domain?: "yandex.com" | "yandex.ru" | "yandex.by" | "yandex.kz" | "yandex.uz" | "yandex.com.tr";
          /** Safe search: 0 off, 1 moderate, 2 strict. */
          family_mode?: 0 | 1 | 2;
          /**
           * Page number, starting at zero.
           * @minimum 0
           */
          p?: number;
          /**
           * Image search query; optional when url is provided.
           * @minLength 1
           */
          text?: string;
          /**
           * Exact image width; requires height.
           * @exclusiveMinimum 0
           */
          width?: number;
          /**
           * Exact image height; requires width.
           * @exclusiveMinimum 0
           */
          height?: number;
          /** Image file type. */
          file_type?: "jpg" | "png" | "gifan";
          /** Image color filter. */
          color?: "color" | "gray" | "red" | "orange" | "yellow" | "cyan" | "green" | "blue" | "violet" | "white" | "black";
          /** Image orientation. */
          orientation?: "horizontal" | "vertical" | "square";
          /** Image content type. */
          image_type?: "photo" | "clipart" | "lineart" | "demotivator" | "face";
          /** Limit images to this source website. */
          site?: string;
          /** Only images appearing in the last seven days. */
          recent?: boolean;
          /** Image URL for reverse image search. */
          url?: string;
          /** Crop coordinates: left;top;right;bottom, each between 0 and 1. */
          crop?: string;
          /** Yandex uploaded image section ID; cannot be combined with crop. */
          crop_id?: string;
          /** Reverse image search tab. */
          tab?: "about" | "similar";
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get Yandex web search results. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_yandex_search": {
      input: {
        /** Yandex Search asynchronous parameters. */
        body: {
          /** Yandex domain to search. */
          yandex_domain?: "yandex.com" | "yandex.ru" | "yandex.by" | "yandex.kz" | "yandex.uz" | "yandex.com.tr";
          /** Safe search: 0 off, 1 moderate, 2 strict. */
          family_mode?: 0 | 1 | 2;
          /**
           * Page number, starting at zero.
           * @minimum 0
           */
          p?: number;
          /**
           * Search query, including Yandex query operators.
           * @minLength 1
           * @maxLength 400
           */
          text: string;
          /** Search language code; defaults to en on yandex.com. */
          lang?: string;
          /**
           * Country or region ID; defaults to the selected domain's region.
           * @minimum 0
           */
          lr?: number;
          /** Automatically correct spelling. */
          fix_typo?: boolean;
          /**
           * Maximum result groups per page.
           * @minimum 1
           */
          groups_on_page?: number;
          /** Sort results by relevance or date. */
          sort_mode?: "relevance" | "date";
          /** Time period for results. */
          period?: "all" | "day" | "last_two_weeks" | "month";
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a Yelp business's details and menu. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_yelp_place": {
      input: {
        /** Yelp Place asynchronous parameters. */
        body: {
          /** Required Yelp encoded business ID or business alias. */
          place_id: string;
          /** Supported localized Yelp hostname. */
          yelp_domain?: string;
          /** Include business alert information when available. */
          business_alert?: boolean;
          /** Fetch the full menu when available; otherwise return place details with an explanation. */
          full_menu?: boolean;
          /** Select a named menu when more than one is available. Requires full_menu=true. */
          menu_name?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get reviews for a Yelp business. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_yelp_reviews": {
      input: {
        /** Yelp Reviews asynchronous parameters. */
        body: {
          /** Required encoded Yelp business identifier. */
          place_id: string;
          /** Supported localized Yelp hostname. */
          yelp_domain?: string;
          /** Review language such as en or fr-FR. */
          hl?: string;
          /** Search review text for these terms. */
          q?: string;
          /** Yelp review ordering. */
          sortby?: "relevance_desc" | "date_desc" | "date_asc" | "rating_desc" | "rating_asc" | "elites_desc";
          /** Comma-separated ratings from 1 through 5. */
          rating?: string;
          /** Fetch reviews that Yelp does not recommend. */
          not_recommended?: boolean;
          /** Offset within not-recommended reviews. Requires not_recommended=true. */
          not_recommended_start?: number;
          /** Review offset from 0 through 10,000. */
          start?: number;
          /** Review count from 1 through 49. */
          num?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Yelp businesses by location and category. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_yelp_search": {
      input: {
        /** Yelp Search asynchronous parameters. */
        body: {
          /** Business name, category, or search terms. */
          find_desc?: string;
          /** Required Yelp search location. */
          find_loc: string;
          /** Supported Yelp hostname. Results use the language of the selected domain. */
          yelp_domain?: string;
          /** Optional Yelp-native map bounds token. */
          l?: string;
          /** Yelp category identifier containing letters, numbers, _ or -. */
          cflt?: string;
          /** Native Yelp ordering. */
          sortby?: "recommended" | "rating" | "review_count";
          /** Yelp-native comma-separated attribute filters. */
          attrs?: string;
          /** Result offset from 0 through 10,000. */
          start?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a YouTube channel's profile, videos, Shorts, playlists and posts. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_youtube_channel": {
      input: {
        /** YouTube Channel asynchronous parameters. */
        body: {
          /**
           * Channel handle (with or without @) or a UC channel ID. Required on the first page; omit with next_page_token.
           *
           * Required on the first page. Use a handle such as @veritasium or a UC channel ID; full URLs are not accepted.
           * @minLength 1
           * @maxLength 100
           */
          channel_id?: string;
          /**
           * Channel content tab. Defaults to videos. Omit when using search_query or next_page_token. Not every channel offers every tab.
           *
           * A channel without the requested tab returns an empty content group with search_information.tab_available set to false.
           */
          tab?: "videos" | "shorts" | "streams" | "podcasts" | "playlists" | "posts";
          /**
           * videos, shorts and streams accept latest, popular or oldest; playlists accept dd (newest playlist) or lad (last video added). Omit with podcasts, posts, search_query or next_page_token.
           *
           * Videos, Shorts and streams default to latest. Playlists default to dd. Sorting uses the choices offered by YouTube.
           */
          sort?: "latest" | "popular" | "oldest" | "dd" | "lad";
          /**
           * Search within this channel for matching videos and playlists. Cannot be combined with tab or sort. Omit with next_page_token.
           *
           * Omit tab and sort when searching. Matching videos and playlists appear in search_results.
           * @minLength 1
           * @maxLength 2048
           */
          search_query?: string;
          /**
           * Interface language, such as en or pt-BR. Defaults to en. Omit with next_page_token.
           * @pattern ^[a-zA-Z]{2,3}(?:-[a-zA-Z0-9]{2,8}){0,2}$
           */
          hl?: string;
          /**
           * Two-letter country code. Defaults to US. Omit with next_page_token.
           * @pattern ^[A-Za-z]{2}$
           */
          gl?: string;
          /**
           * Include additional public channel details, such as country, join date, total views and links. Defaults to false. Omit with next_page_token.
           *
           * Channel profile data is returned on the first page. about=true includes additional public details. Continuation pages return content only.
           */
          about?: boolean;
          /**
           * Opaque pagination.next_page_token from this endpoint. Send it alone to continue the channel feed with its original settings. Tokens expire after one hour.
           *
           * Send next_page_token alone. The token preserves the channel, selected tab or search, sorting and locale. Use POST for long tokens. Stop when pagination.next_page_token is absent.
           * @minLength 1
           * @maxLength 32768
           * @pattern ^ct2_[A-Za-z0-9_-]{100,}$
           */
          next_page_token?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search YouTube videos, channels, playlists and Shorts. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_youtube_search": {
      input: {
        /** YouTube Search asynchronous parameters. */
        body: {
          /**
           * Result type. Omit for mixed results. Movies appear in video_results.
           *
           * Channels and playlists cannot use upload_date, duration or features. Shorts cannot use duration. Movies cannot use live, subtitles, creative_commons or 3d features.
           */
          type?: "video" | "shorts" | "channel" | "playlist" | "movie";
          /** Limit results by upload date. */
          upload_date?: "today" | "this_week" | "this_month" | "this_year";
          /** Video duration: under 3 minutes, 3–20 minutes, or over 20 minutes. */
          duration?: "under_3_min" | "between_3_and_20_min" | "over_20_min";
          /**
           * Comma-separated features: live, 4k, hd, subtitles, creative_commons, 360, vr180, 3d, hdr, location. Combined features must all match.
           * @minLength 1
           * @maxLength 160
           */
          features?: string;
          /**
           * YouTube ranking: relevance (default) or popularity. Popularity is not a strict numerical view-count sort.
           *
           * Uses YouTube's current ranking choices. The removed upload-date/rating sorts and last-hour upload filter are not supported named values.
           */
          sort_by?: "relevance" | "popularity";
          /**
           * Search query. Required for the first page; omit with page_token.
           *
           * Required on the first page.
           * @minLength 1
           * @maxLength 2048
           */
          q?: string;
          /**
           * YouTube interface language, such as en or pt-BR. Defaults to en. Omit with page_token.
           * @pattern ^[a-zA-Z]{2,3}(?:-[a-zA-Z0-9]{2,8}){0,2}$
           */
          hl?: string;
          /**
           * Two-letter country code. Defaults to US. Omit with page_token.
           * @pattern ^[A-Za-z]{2}$
           */
          gl?: string;
          /**
           * Advanced YouTube filter token from a results URL. Use either sp or named filters, never both. Omit with page_token.
           *
           * Use either sp or named filters, never both. Raw or once-URL-encoded values from a YouTube results URL are accepted.
           * @minLength 1
           * @maxLength 2048
           * @pattern ^[a-zA-Z0-9_+/=%-]+$
           */
          sp?: string;
          /**
           * Opaque next_page_token from the preceding response. Send it alone to continue the same search; tokens expire after one hour.
           *
           * Send page_token alone, without query, locale or filter parameters. It preserves all filters. Use POST for long tokens. Pagination ends when pagination.next_page_token is absent.
           * @minLength 1
           * @maxLength 32768
           * @pattern ^ct2_[A-Za-z0-9_-]{100,}$
           */
          page_token?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get Zillow region and address suggestions. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_zillow_locations": {
      input: {
        /** Zillow Locations asynchronous parameters. */
        body: {
          /**
           * City, ZIP code, neighborhood or street address. Required on the first page; omit with page_token.
           * @minLength 1
           * @maxLength 200
           */
          q?: string;
          /**
           * Find regions or addresses. Defaults to regions; omit with page_token.
           *
           * Region suggestions include Zillow region IDs. Address suggestions return names; this route does not return property ZPIDs or coordinates.
           */
          type?: "regions" | "addresses";
          /**
           * Suggestions per page, from 1 to 100. Defaults to 10; omit with page_token.
           *
           * Follow pagination.next or send pagination.next_page_token as page_token. Each lookup supports up to 1,000 suggestions; if pagination.possibly_truncated is true, refine q.
           * @minimum 1
           * @maximum 100
           */
          limit?: number;
          /**
           * Opaque next_page_token from the preceding response. Send it alone to continue the same lookup.
           *
           * Continue the same query, suggestion type and page size without repeating previously returned suggestions. If pagination.next is null while has_more is true, send page_token through POST JSON.
           * @minLength 1
           * @maxLength 32768
           */
          page_token?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Get a Zillow property by ID or URL. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_zillow_property": {
      input: {
        /** Zillow Property asynchronous parameters. */
        body: {
          /**
           * Zillow property identifier. Supply zpid or url.
           * @exclusiveMinimum 0
           */
          zpid?: number;
          /**
           * Zillow homedetails URL. Supply url or zpid.
           *
           * Supply exactly one of url or zpid. Apartment building URLs are not property-detail URLs.
           * @maxLength 2048
           */
          url?: string;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search Zillow homes for sale, for rent or recently sold. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_zillow_search": {
      input: {
        /** Zillow Search asynchronous parameters. */
        body: {
          /**
           * Minimum listing price in US dollars.
           *
           * For rental searches, prices are monthly rent in US dollars.
           * @minimum 0
           */
          min_price?: number;
          /**
           * Maximum listing price in US dollars.
           * @minimum 0
           */
          max_price?: number;
          /**
           * Minimum number of bedrooms.
           * @minimum 0
           * @maximum 20
           */
          min_beds?: number;
          /**
           * Maximum number of bedrooms.
           * @minimum 0
           * @maximum 20
           */
          max_beds?: number;
          /**
           * Minimum number of bathrooms.
           * @minimum 0
           * @maximum 20
           */
          min_baths?: number;
          /**
           * Minimum interior area in square feet.
           * @minimum 0
           */
          min_sqft?: number;
          /**
           * Maximum interior area in square feet.
           * @minimum 0
           */
          max_sqft?: number;
          /**
           * City, ZIP code, neighborhood or address. Supply q or map_bounds.
           *
           * Supply exactly one of q or map_bounds.
           * @minLength 1
           * @maxLength 200
           */
          q?: string;
          /** Map rectangle as north,east,south,west. */
          map_bounds?: string;
          /** Listing status. */
          status?: "for_sale" | "for_rent" | "sold";
          /** Restrict results to one property type. */
          property_type?: "house" | "condo" | "townhouse" | "multi_family" | "land" | "manufactured" | "apartment";
          /** Order of matching listings. */
          sort?: "recommended" | "newest" | "price_asc" | "price_desc" | "beds" | "sqft";
          /**
           * Result page, starting at 1; Zillow caps searches at 20 pages.
           *
           * Follow pagination.next for another page. A search exposes at most 20 pages.
           * @minimum 1
           * @maximum 20
           */
          page?: number;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit asynchronously: Search ZipRecruiter jobs in the US and Canada by keyword and location. Reuse idempotencyKey for retries. Results expire after 24 hours; zero data retention accounts cannot submit or poll retained jobs. */
    "litescrape.submit_ziprecruiter_search": {
      input: {
        /** ZipRecruiter Search asynchronous parameters. */
        body: {
          /**
           * Job title, keywords, or company to search for.
           * @minLength 1
           * @maxLength 512
           */
          q: string;
          /**
           * One-based results page. Use next_page from the response to continue.
           * @minimum 1
           */
          page?: number;
          /**
           * City and state or ZIP code, for example New York, NY.
           * @minLength 1
           * @maxLength 512
           */
          location: string;
          /**
           * Search radius in miles. Use 5000 for any distance.
           * @minimum 0
           * @maximum 5000
           */
          radius?: number;
          /**
           * Maximum posting age in days.
           * @minimum 1
           */
          days?: number;
          /**
           * Employment types as a JSON array.
           * @minItems 1
           * @maxItems 100
           */
          employment_types?: Array<"full_time" | "part_time" | "contract" | "contract_to_hire" | "temporary" | "as_needed" | "other">;
          /** On-site, remote-only, or hybrid jobs. */
          location_type?: "no_remote" | "only_remote" | "hybrid";
          /**
           * Lower bound for the job's maximum annualized pay, in the location's currency.
           * @minimum 0
           */
          salary_min?: number;
          /**
           * Upper bound for the job's maximum annualized pay.
           * @minimum 0
           */
          salary_max?: number;
          /** Experience/seniority class. */
          experience_level?: "no_experience" | "junior" | "mid" | "senior";
          /** Require ZipRecruiter's quick application. */
          easy_apply?: boolean;
          /**
           * Execution budget in seconds for each attempt. Queue and retry backoff time do not consume it. Supply once, in the JSON body or query string.
           * @maximum 90
           * @exclusiveMinimum 0
           */
          timeout?: number;
        };
        /**
         * Optional retry identity; generated when omitted.
         * @minLength 16
         * @maxLength 128
         */
        idempotencyKey?: string;
        /**
         * Optional compatibility batch ID; does not change billing.
         * @minLength 16
         * @maxLength 128
         */
        batchId?: string;
        /**
         * Optional compatibility batch size; does not change billing.
         * @minimum 0
         * @maximum 1000000000
         */
        batchSize?: number;
      };
      output: {
        /** Job ID used to poll for the result. */
        job_id?: string;
        /** Job state; queued includes retry backoff. */
        state?: "queued" | "running" | "succeeded" | "failed" | "expired";
        /** Final scraper HTTP status, or null before completion. */
        status_code?: number | null;
        /** Retained scraper result or error; screenshots use a file URL. */
        response?: Record<string, unknown> | null;
        /** Submission time. */
        created_at?: string;
        /** Completion time, or null before completion. */
        completed_at?: string | null;
        /** Expiry time, 24 hours after completion. */
        expires_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a product sold by the US retailer Target, with its details, price and availability. This upstream API is Alpha. */
    "litescrape.target_product": {
      input: {
        /**
         * Public HTTPS product URL on this retailer's site.
         * @minLength 1
         * @maxLength 4096
         */
        url: string;
        /**
         * Retailer's store ID. Selects the store catalog, pricing or availability where the retailer exposes it.
         * @minLength 1
         * @maxLength 8
         * @pattern ^[0-9]{1,8}$
         */
        store_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** product value. */
        product?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search products sold by the US retailer Target, with prices and availability. This upstream API is Alpha. */
    "litescrape.target_search": {
      input: {
        /**
         * Product keywords to search for.
         * @minLength 1
         * @maxLength 500
         */
        query: string;
        /**
         * One-based result page.
         * @minimum 1
         * @maximum 100
         */
        page?: number;
        /**
         * Retailer's store ID. Selects the store catalog, pricing or availability where the retailer exposes it.
         * @minLength 1
         * @maxLength 8
         * @pattern ^[0-9]{1,8}$
         */
        store_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** products value. */
        products?: Array<Record<string, unknown>>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Page through posts saved in a public TikTok collection. This upstream API is Alpha. */
    "litescrape.tiktok_collection_videos": {
      input: {
        /** Upstream pagination cursor from the preceding response; 0 starts a new feed. */
        cursor?: string | number;
        /**
         * Requested page size, between 1 and 35.
         * @minimum 1
         * @maximum 35
         */
        count?: number;
        /**
         * Public TikTok collection URL; supply this or collection_id.
         * @maxLength 2048
         */
        url?: string | null;
        /**
         * Numeric public saved-collection ID; supply this or url.
         * @pattern ^[0-9]{1,25}$
         */
        collection_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Whether TikTok reports additional results for this list. */
        has_more?: boolean;
        /** Upstream cursor for the next page; pass it unchanged to the same endpoint. */
        cursor?: string | null;
        /** Total reported by TikTok when supplied, which may differ from globally available results. */
        total?: number | null;
        /** Public post metadata in upstream order, preserving upstream field names. */
        items?: Array<Record<string, unknown>>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Page through replies to a TikTok comment. This upstream API is Alpha. */
    "litescrape.tiktok_comment_replies": {
      input: {
        /** Upstream pagination cursor from the preceding response; 0 starts a new feed. */
        cursor?: string | number;
        /**
         * Requested page size, between 1 and 35.
         * @minimum 1
         * @maximum 35
         */
        count?: number;
        /**
         * TikTok video, photo/slideshow or vm/vt short-link URL.
         * @maxLength 2048
         */
        url?: string | null;
        /**
         * TikTok post ID; supply this or url.
         * @pattern ^[0-9]{1,25}$
         */
        video_id?: string | null;
        /**
         * ID of the parent TikTok comment; obtain cid from the comments endpoint.
         * @pattern ^[0-9]{1,25}$
         */
        comment_id: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Whether TikTok reports additional results for this list. */
        has_more?: boolean;
        /** Upstream cursor for the next page; pass it unchanged to the same endpoint. */
        cursor?: string | null;
        /** Total reported by TikTok when supplied, which may differ from globally available results. */
        total?: number | null;
        /** Public comments or replies in upstream order. */
        comments?: Array<Record<string, unknown>>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Page through public comments on a TikTok post. This upstream API is Alpha. */
    "litescrape.tiktok_comments": {
      input: {
        /** Upstream pagination cursor from the preceding response; 0 starts a new feed. */
        cursor?: string | number;
        /**
         * Requested page size, between 1 and 35.
         * @minimum 1
         * @maximum 35
         */
        count?: number;
        /**
         * TikTok video, photo/slideshow or vm/vt short-link URL.
         * @maxLength 2048
         */
        url?: string | null;
        /**
         * TikTok post ID; supply this or url.
         * @pattern ^[0-9]{1,25}$
         */
        video_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Whether TikTok reports additional results for this list. */
        has_more?: boolean;
        /** Upstream cursor for the next page; pass it unchanged to the same endpoint. */
        cursor?: string | null;
        /** Total reported by TikTok when supplied, which may differ from globally available results. */
        total?: number | null;
        /** Public comments or replies in upstream order. */
        comments?: Array<Record<string, unknown>>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Page through public followers of a TikTok user. This upstream API is Alpha. */
    "litescrape.tiktok_followers": {
      input: {
        /** Upstream pagination cursor from the preceding response; 0 starts a new feed. */
        cursor?: string | number;
        /**
         * Requested page size, between 1 and 35.
         * @minimum 1
         * @maximum 35
         */
        count?: number;
        /**
         * Public TikTok handle, with or without @; supply this or user_id.
         * @pattern ^@?[A-Za-z0-9_.]{1,24}$
         */
        handle?: string | null;
        /**
         * Numeric TikTok user ID; supply this or handle.
         * @pattern ^[0-9]{1,25}$
         */
        user_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Whether TikTok reports additional results for this list. */
        has_more?: boolean;
        /** Upstream cursor for the next page; pass it unchanged to the same endpoint. */
        cursor?: string | null;
        /** Total reported by TikTok when supplied, which may differ from globally available results. */
        total?: number | null;
        /** Public user and statistics records in upstream order. */
        users?: Array<Record<string, unknown>>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Page through the public accounts a TikTok user follows. This upstream API is Alpha. */
    "litescrape.tiktok_following": {
      input: {
        /** Upstream pagination cursor from the preceding response; 0 starts a new feed. */
        cursor?: string | number;
        /**
         * Requested page size, between 1 and 35.
         * @minimum 1
         * @maximum 35
         */
        count?: number;
        /**
         * Public TikTok handle, with or without @; supply this or user_id.
         * @pattern ^@?[A-Za-z0-9_.]{1,24}$
         */
        handle?: string | null;
        /**
         * Numeric TikTok user ID; supply this or handle.
         * @pattern ^[0-9]{1,25}$
         */
        user_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Whether TikTok reports additional results for this list. */
        has_more?: boolean;
        /** Upstream cursor for the next page; pass it unchanged to the same endpoint. */
        cursor?: string | null;
        /** Total reported by TikTok when supplied, which may differ from globally available results. */
        total?: number | null;
        /** Public user and statistics records in upstream order. */
        users?: Array<Record<string, unknown>>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a TikTok live room's status and metrics. This upstream API is Alpha. */
    "litescrape.tiktok_live": {
      input: {
        /**
         * Numeric TikTok live-room ID, obtainable from user-live.
         * @pattern ^[0-9]{1,25}$
         */
        room_id: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Public room data including status, owner, metrics and stream metadata. */
        room?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get public TikTok profile fields and statistics by handle or numeric user ID. This upstream API is Alpha. */
    "litescrape.tiktok_profile": {
      input: {
        /**
         * Public TikTok handle, with or without @; supply this or user_id.
         * @pattern ^@?[A-Za-z0-9_.]{1,24}$
         */
        handle?: string | null;
        /**
         * Numeric TikTok user ID; supply this or handle.
         * @pattern ^[0-9]{1,25}$
         */
        user_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** TikTok's public user fields, preserving upstream names. */
        user?: Record<string, unknown>;
        /** Public follower, following, heart and video counts. */
        stats?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Page through posts from a public TikTok profile by handle or numeric user ID. This upstream API is Alpha. */
    "litescrape.tiktok_profile_videos": {
      input: {
        /** Upstream pagination cursor from the preceding response; 0 starts a new feed. */
        cursor?: string | number;
        /**
         * Requested page size, between 1 and 35.
         * @minimum 1
         * @maximum 35
         */
        count?: number;
        /**
         * Public TikTok handle, with or without @; supply this or user_id.
         * @pattern ^@?[A-Za-z0-9_.]{1,24}$
         */
        handle?: string | null;
        /**
         * Numeric TikTok user ID; supply this or handle.
         * @pattern ^[0-9]{1,25}$
         */
        user_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Whether TikTok reports additional results for this list. */
        has_more?: boolean;
        /** Upstream cursor for the next page; pass it unchanged to the same endpoint. */
        cursor?: string | null;
        /** Total reported by TikTok when supplied, which may differ from globally available results. */
        total?: number | null;
        /** Public post metadata in upstream order, preserving upstream field names. */
        items?: Array<Record<string, unknown>>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Resolve a public hashtag and page through its posts. This upstream API is Alpha. */
    "litescrape.tiktok_search_hashtag": {
      input: {
        /** Upstream pagination cursor from the preceding response; 0 starts a new feed. */
        cursor?: string | number;
        /**
         * Requested page size, between 1 and 35.
         * @minimum 1
         * @maximum 35
         */
        count?: number;
        /**
         * TikTok hashtag name, with or without the leading #.
         * @minLength 1
         * @maxLength 100
         * @pattern ^#?[^\s#/&?=]+$
         */
        hashtag: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Whether TikTok reports additional results for this list. */
        has_more?: boolean;
        /** Upstream cursor for the next page; pass it unchanged to the same endpoint. */
        cursor?: string | null;
        /** Total reported by TikTok when supplied, which may differ from globally available results. */
        total?: number | null;
        /** Public post metadata in upstream order, preserving upstream field names. */
        items?: Array<Record<string, unknown>>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search public TikTok posts by keyword with pagination and search-session IDs. This upstream API is Alpha. */
    "litescrape.tiktok_search_keyword": {
      input: {
        /** Upstream pagination cursor from the preceding response; 0 starts a new feed. */
        cursor?: string | number;
        /**
         * Requested page size, between 1 and 35.
         * @minimum 1
         * @maximum 35
         */
        count?: number;
        /**
         * TikTok video search query.
         * @minLength 1
         * @maxLength 500
         */
        query: string;
        /**
         * Upstream search session ID from the preceding page, when supplied.
         * @pattern ^[A-Za-z0-9_-]{1,128}$
         */
        search_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Whether TikTok reports additional results for this list. */
        has_more?: boolean;
        /** Upstream cursor for the next page; pass it unchanged to the same endpoint. */
        cursor?: string | null;
        /** Total reported by TikTok when supplied, which may differ from globally available results. */
        total?: number | null;
        /** Public post metadata in upstream order, preserving upstream field names. */
        items?: Array<Record<string, unknown>>;
        /** Upstream search session ID to send with the next cursor when present. */
        search_id?: string | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get public TikTok autocomplete suggestions in order. This upstream API is Alpha. */
    "litescrape.tiktok_search_suggestions": {
      input: {
        /**
         * Search text for TikTok autocomplete suggestions.
         * @minLength 1
         * @maxLength 500
         */
        query: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Suggestion records in TikTok's returned order. */
        suggestions?: Array<Record<string, unknown>>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get TikTok's top search results. This upstream API is Alpha. */
    "litescrape.tiktok_search_top": {
      input: {
        /** Upstream pagination cursor from the preceding response; 0 starts a new feed. */
        cursor?: string | number;
        /**
         * Requested page size, between 1 and 35.
         * @minimum 1
         * @maximum 35
         */
        count?: number;
        /**
         * TikTok video search query.
         * @minLength 1
         * @maxLength 500
         */
        query: string;
        /**
         * Upstream search session ID from the preceding page, when supplied.
         * @pattern ^[A-Za-z0-9_-]{1,128}$
         */
        search_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Whether TikTok reports additional results for this list. */
        has_more?: boolean;
        /** Upstream cursor for the next page; pass it unchanged to the same endpoint. */
        cursor?: string | null;
        /** Total reported by TikTok when supplied, which may differ from globally available results. */
        total?: number | null;
        /** Top-search result wrappers in upstream order, including each record's type and content. */
        results?: Array<Record<string, unknown>>;
        /** Upstream search session ID to send with the next cursor when present. */
        search_id?: string | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a TikTok sound's details and usage count. This upstream API is Alpha. */
    "litescrape.tiktok_song": {
      input: {
        /**
         * TikTok music clip ID, the numeric suffix of a /music/ URL.
         * @pattern ^[0-9]{1,25}$
         */
        clip_id: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Public music embed details, including clip ID, artist, cover and usage count when available. */
        music?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Page through TikTok posts that use a sound. This upstream API is Alpha. */
    "litescrape.tiktok_song_videos": {
      input: {
        /** Upstream pagination cursor from the preceding response; 0 starts a new feed. */
        cursor?: string | number;
        /**
         * Requested page size, between 1 and 35.
         * @minimum 1
         * @maximum 35
         */
        count?: number;
        /**
         * Numeric TikTok music clip ID, the suffix of a /music/ URL.
         * @pattern ^[0-9]{1,25}$
         */
        clip_id: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Whether TikTok reports additional results for this list. */
        has_more?: boolean;
        /** Upstream cursor for the next page; pass it unchanged to the same endpoint. */
        cursor?: string | null;
        /** Total reported by TikTok when supplied, which may differ from globally available results. */
        total?: number | null;
        /** Public post metadata in upstream order, preserving upstream field names. */
        items?: Array<Record<string, unknown>>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get public TikTok captions with timed segments. This upstream API is Alpha. */
    "litescrape.tiktok_transcript": {
      input: {
        /**
         * TikTok video, photo/slideshow or vm/vt short-link URL.
         * @maxLength 2048
         */
        url?: string | null;
        /**
         * TikTok post ID; supply this or url.
         * @pattern ^[0-9]{1,25}$
         */
        video_id?: string | null;
        /**
         * Caption language code, for example eng-US. Defaults to the first available track.
         * @pattern ^[A-Za-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$
         */
        language?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Language code of the selected upstream subtitle track. */
        language?: string;
        /** Caption text joined in track order. */
        text?: string;
        /** Timed caption cues in upstream order. */
        segments?: Array<Record<string, unknown>>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get TikTok's trending feed. This upstream API is Alpha. */
    "litescrape.tiktok_trending_feed": {
      input: {
        /**
         * Requested number of recommended posts, between 1 and 35.
         * @minimum 1
         * @maximum 35
         */
        count?: number;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Whether TikTok reports additional results for this list. */
        has_more?: boolean;
        /** Upstream cursor for the next page; pass it unchanged to the same endpoint. */
        cursor?: string | null;
        /** Total reported by TikTok when supplied, which may differ from globally available results. */
        total?: number | null;
        /** Public post metadata in upstream order, preserving upstream field names. */
        items?: Array<Record<string, unknown>>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a TikTok user's live status and room metadata. This upstream API is Alpha. */
    "litescrape.tiktok_user_live": {
      input: {
        /**
         * Public TikTok handle, with or without the leading @.
         * @pattern ^@?[A-Za-z0-9_.]{1,24}$
         */
        handle: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Whether TikTok reports the room as currently broadcasting (status 2). */
        is_live?: boolean;
        /** Public user details from the live page. */
        user?: Record<string, unknown>;
        /** Room metadata when TikTok supplies it. */
        room?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a TikTok video or photo post with its media and metrics. This upstream API is Alpha. */
    "litescrape.tiktok_video": {
      input: {
        /**
         * TikTok video, photo/slideshow or vm/vt short-link URL.
         * @maxLength 2048
         */
        url?: string | null;
        /**
         * TikTok post ID; supply this or url.
         * @pattern ^[0-9]{1,25}$
         */
        video_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Full public post metadata, including author, media and metrics. */
        item?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Tripadvisor place by ID. */
    "litescrape.tripadvisor_place": {
      input: {
        /** Required positive Tripadvisor place identifier. */
        place_id: number;
        /** Supported localized Tripadvisor hostname. */
        tripadvisor_domain?: string;
        /** Language or language-COUNTRY code. */
        locale?: string;
        /** Three-letter ISO currency for price fields. */
        currency?: string;
        /** Optional positive parent geography identifier. */
        geo_id?: number | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** place results value. */
        place_results?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get reviews for a Tripadvisor place. */
    "litescrape.tripadvisor_reviews": {
      input: {
        /** Required positive Tripadvisor place identifier. */
        place_id: number;
        /** Supported localized Tripadvisor hostname. */
        tripadvisor_domain?: string;
        /** Language or language-COUNTRY code. */
        locale?: string;
        /** Review offset from 0 through 10,000. */
        start?: number;
        /** Review count from 1 through 50. */
        num?: number;
        /** Chronological or machine-ranked ordering. */
        sort_by?: "recent" | "relevance";
        /** Request Tripadvisor machine translation. */
        translate?: boolean;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** search information value. */
        search_information?: Record<string, unknown> | null;
        /** sort value. */
        sort?: Record<string, unknown> | null;
        /** reviews value. */
        reviews?: Array<Record<string, unknown>> | null;
        /** pagination value. */
        pagination?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Tripadvisor hotels, restaurants and attractions. */
    "litescrape.tripadvisor_search": {
      input: {
        /** Required search text, up to 500 characters. */
        q: string;
        /** Supported localized Tripadvisor hostname. */
        tripadvisor_domain?: string;
        /** Language or language-COUNTRY code. */
        locale?: string;
        /** Optional positive Tripadvisor geography identifier. */
        geo_id?: number | null;
        /** Optional search-center latitude; requires lon. */
        lat?: number | null;
        /** Optional search-center longitude; requires lat. */
        lon?: number | null;
        /** Result entity type. */
        place_type?: "all" | "accommodation" | "attraction" | "attraction_product" | "eatery" | "geo";
        /** Result offset from 0 through 10,000. */
        start?: number;
        /** Result count from 1 through 30. */
        num?: number;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** search information value. */
        search_information?: Record<string, unknown> | null;
        /** search results value. */
        search_results?: Array<Record<string, unknown>> | null;
        /** map previews value. */
        map_previews?: Array<Record<string, unknown>> | null;
        /** pagination value. */
        pagination?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Walmart product's details, price and availability. This upstream API is Alpha. */
    "litescrape.walmart_product": {
      input: {
        /**
         * Public HTTPS product URL on this retailer's site.
         * @minLength 1
         * @maxLength 4096
         */
        url: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** product value. */
        product?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Walmart products with prices and availability. This upstream API is Alpha. */
    "litescrape.walmart_search": {
      input: {
        /**
         * Product keywords to search for.
         * @minLength 1
         * @maxLength 500
         */
        query: string;
        /**
         * One-based result page.
         * @minimum 1
         * @maximum 100
         */
        page?: number;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** products value. */
        products?: Array<Record<string, unknown>>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Wayfair product's details, price and availability. This upstream API is Alpha. */
    "litescrape.wayfair_product": {
      input: {
        /**
         * Public HTTPS product URL on this retailer's site.
         * @minLength 1
         * @maxLength 4096
         */
        url: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** product value. */
        product?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Wayfair products with prices and availability. This upstream API is Alpha. */
    "litescrape.wayfair_search": {
      input: {
        /**
         * Product keywords to search for.
         * @minLength 1
         * @maxLength 500
         */
        query: string;
        /**
         * One-based result page.
         * @minimum 1
         * @maximum 100
         */
        page?: number;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** products value. */
        products?: Array<Record<string, unknown>>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a web page as Markdown, HTML or plain text. This upstream API is Alpha. */
    "litescrape.web_fetch": {
      input: {
        /**
         * Public HTTP(S) URL to capture, 1-8,192 characters. Include http:// or https://; bare domains are rejected. The host must be public, on port 80 or 443, without embedded credentials.
         * @minLength 1
         * @maxLength 8192
         */
        url: string;
        /** Remove modal and cookie-banner overlays from the page. */
        remove_overlay?: boolean | null;
        /** Drop display:none elements from the page. */
        detach_invisibles?: boolean | null;
        /** CSS selector to wait for after navigation, 1-2,048 characters. POST also accepts a list of 1-16 selectors. */
        wait_for_selector?: string | Array<string> | null;
        /**
         * POST only. 1-100 cookies in Set-Cookie syntax (name=value; Path=/; Domain=...), one line each, up to 4,096 characters.
         * @minItems 1
         * @maxItems 100
         */
        set_cookies?: Array<string> | null;
        /**
         * User-Agent for the page request, 1-1,024 characters without control characters. Defaults to the browser's own.
         * @minLength 1
         * @maxLength 1024
         */
        user_agent?: string | null;
        /**
         * POST only. 1-8 scripts (source, or a URL to a script), up to 8,192 characters each, run in the main frame.
         * @minItems 1
         * @maxItems 8
         */
        inject_page_script?: Array<string> | null;
        /**
         * POST only. 1-8 scripts (source, or a URL to a script), up to 8,192 characters each, run in every frame.
         * @minItems 1
         * @maxItems 8
         */
        inject_frame_script?: Array<string> | null;
        /**
         * Seconds from 1 through 180 for page loading and browser operations. Cannot extend the total request budget set by timeout.
         * @minimum 1
         * @maximum 180
         */
        page_timeout?: number | null;
        /**
         * Browser locale as a language tag, 2-64 characters. Defaults to the browser's own.
         * @minLength 2
         * @maxLength 64
         * @pattern ^[A-Za-z]{2,8}(?:-[A-Za-z0-9]{1,8})*$
         */
        locale?: string | null;
        /**
         * HTTP(S) URL sent as the Referer.
         * @minLength 1
         * @maxLength 8192
         */
        referer?: string | null;
        /**
         * Expected origin HTTP status, 100-599. A different status is rejected; otherwise a rendered error page is a successful capture.
         * @minimum 100
         * @maximum 599
         */
        assert_status_code?: number | null;
        /** POST only. Browser viewport; width and height are required. Default: 1280 x 1280. */
        viewport?: {
          /**
           * Viewport width in CSS pixels, 1-4,096. Required.
           * @minimum 1
           * @maximum 4096
           */
          width: number;
          /**
           * Viewport height in CSS pixels, 1-4,096. Required.
           * @minimum 1
           * @maximum 4096
           */
          height: number;
          /**
           * Device pixel ratio, greater than 0 and at most 4.
           * @maximum 4
           * @exclusiveMinimum 0
           */
          device_scale_factor?: number | null;
          /** Emulate a mobile device. */
          is_mobile?: boolean | null;
          /** Use landscape orientation. */
          is_landscape?: boolean | null;
          /** Emulate touch support. */
          has_touch?: boolean | null;
        } | null;
        /**
         * User agent, 1-256 characters, to check against the site's robots.txt; disallowed URLs are rejected.
         * @minLength 1
         * @maxLength 256
         */
        robots_txt?: string | null;
        /** Page readiness condition to reach before responding. */
        respond_timing?: "html" | "visible-content" | "mutation-idle" | "resource-idle" | "media-idle" | "network-idle" | null;
        /**
         * Output format: content (default; main content as Markdown, or the whole page when extraction keeps too little), markdown (whole page as Markdown), html, text, frontmatter (content plus front matter), or a '+' combination such as markdown+frontmatter. For screenshots use /api/web/screenshot.
         * @minLength 3
         * @maxLength 64
         */
        respond_with?: string | null;
        /** true, false or all: add a links list to the response. */
        with_links_summary?: boolean | "all" | null;
        /** Add an images list to the response. */
        with_images_summary?: boolean | null;
        /** Images to keep: all (default), alt (alt text only) or none. */
        retain_images?: "none" | "all" | "alt" | null;
        /** Links to keep: all (default), text (link text only), none, or gpt-oss (citation format with a links summary). */
        retain_links?: "none" | "all" | "text" | "gpt-oss" | null;
        /** How video, audio and embedded video appear: none, text, link (default), image or html. */
        retain_media?: "none" | "text" | "link" | "image" | "html" | null;
        /** Option preset. Fills only the options the request leaves unset. */
        preset?: "reader" | "index" | "research" | "agent" | "spider" | null;
        /** true, false or table: disable GitHub-flavored Markdown, or only its tables. */
        no_gfm?: boolean | "table" | null;
        /** CSS selector to extract, 1-2,048 characters; POST also accepts a list of 1-16 selectors. Implies waiting for the selector. Match-all selectors are rejected. */
        target_selector?: string | Array<string> | null;
        /** CSS selector removed before extraction, 1-2,048 characters; POST also accepts a list of 1-16 selectors. */
        remove_selector?: string | Array<string> | null;
        /** Keep inline data: images in Markdown. */
        keep_img_data_url?: boolean | null;
        /** true, false or quoted: include iframe content before extraction. */
        with_iframe?: boolean | "quoted" | null;
        /** Include open shadow DOM content before extraction. */
        with_shadow_dom?: boolean | null;
        /** auto (default; lightweight HTTP first, a browser when needed), browser, or curl (no JavaScript). */
        engine?: "auto" | "browser" | "curl" | null;
        /**
         * Integer 1-10,000,000. Reject the page when its token count exceeds the budget.
         * @minimum 1
         * @maximum 10000000
         */
        token_budget?: number | null;
        /** POST only. Markdown formatting options. */
        markdown?: {
          /** Markdown heading style: setext (underlined) or atx (# prefixed). */
          heading_style?: "setext" | "atx" | null;
          /**
           * Markdown used for horizontal rules, 1-128 characters.
           * @minLength 1
           * @maxLength 128
           */
          hr?: string | null;
          /** Marker for bulleted list items. */
          bullet_list_marker?: "-" | "+" | "*" | null;
          /** Delimiter for emphasis. */
          em_delimiter?: "_" | "*" | null;
          /** Delimiter for strong emphasis. */
          strong_delimiter?: "__" | "**" | null;
          /** How links are written: inlined, referenced (reference-style) or discarded. */
          link_style?: "inlined" | "referenced" | "discarded" | null;
          /** Reference format when link_style is referenced. */
          link_reference_style?: "full" | "collapsed" | "shortcut" | "discarded" | null;
        } | null;
        /** true, h1-h5, structured or s1-s5: split the Markdown and return chunks. */
        markdown_chunking?: "true" | "h1" | "h2" | "h3" | "h4" | "h5" | "structured" | "s1" | "s2" | "s3" | "s4" | "s5" | null;
        /**
         * Integer 500-10,000,000. Trim content to this many tokens.
         * @minimum 500
         * @maximum 10000000
         */
        max_tokens?: number | null;
        /** Resolve relative links against the requested URL (initial, default) or the final URL after redirects (final). */
        base?: "initial" | "final" | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** url value. */
        url?: string;
        /** title value. */
        title?: string | null;
        /** description value. */
        description?: string | null;
        /** content value. */
        content?: string | null;
        /** html value. */
        html?: string | null;
        /** text value. */
        text?: string | null;
        /** markdown value. */
        markdown?: string | null;
        /** published time value. */
        published_time?: string | null;
        /** num pages value. */
        num_pages?: number | null;
        /** warning value. */
        warning?: string | null;
        /** images value. */
        images?: Record<string, unknown> | Array<unknown> | null;
        /** links value. */
        links?: Record<string, unknown> | Array<unknown> | null;
        /** usage value. */
        usage?: Record<string, unknown> | null;
        /** metadata value. */
        metadata?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Take a screenshot of a web page. This upstream API is Alpha. */
    "litescrape.web_screenshot": {
      input: {
        /**
         * Public HTTP(S) URL to capture, 1-8,192 characters. Include http:// or https://; bare domains are rejected. The host must be public, on port 80 or 443, without embedded credentials.
         * @minLength 1
         * @maxLength 8192
         */
        url: string;
        /** Remove modal and cookie-banner overlays from the page. */
        remove_overlay?: boolean | null;
        /** Drop display:none elements from the page. */
        detach_invisibles?: boolean | null;
        /** CSS selector to wait for after navigation, 1-2,048 characters. POST also accepts a list of 1-16 selectors. */
        wait_for_selector?: string | Array<string> | null;
        /**
         * POST only. 1-100 cookies in Set-Cookie syntax (name=value; Path=/; Domain=...), one line each, up to 4,096 characters.
         * @minItems 1
         * @maxItems 100
         */
        set_cookies?: Array<string> | null;
        /**
         * User-Agent for the page request, 1-1,024 characters without control characters. Defaults to the browser's own.
         * @minLength 1
         * @maxLength 1024
         */
        user_agent?: string | null;
        /**
         * POST only. 1-8 scripts (source, or a URL to a script), up to 8,192 characters each, run in the main frame.
         * @minItems 1
         * @maxItems 8
         */
        inject_page_script?: Array<string> | null;
        /**
         * POST only. 1-8 scripts (source, or a URL to a script), up to 8,192 characters each, run in every frame.
         * @minItems 1
         * @maxItems 8
         */
        inject_frame_script?: Array<string> | null;
        /**
         * Seconds from 1 through 180 for page loading and browser operations. Cannot extend the total request budget set by timeout.
         * @minimum 1
         * @maximum 180
         */
        page_timeout?: number | null;
        /**
         * Browser locale as a language tag, 2-64 characters. Defaults to the browser's own.
         * @minLength 2
         * @maxLength 64
         * @pattern ^[A-Za-z]{2,8}(?:-[A-Za-z0-9]{1,8})*$
         */
        locale?: string | null;
        /**
         * HTTP(S) URL sent as the Referer.
         * @minLength 1
         * @maxLength 8192
         */
        referer?: string | null;
        /**
         * Expected origin HTTP status, 100-599. A different status is rejected; otherwise a rendered error page is a successful capture.
         * @minimum 100
         * @maximum 599
         */
        assert_status_code?: number | null;
        /** POST only. Browser viewport; width and height are required. Default: 1280 x 1280. */
        viewport?: {
          /**
           * Viewport width in CSS pixels, 1-4,096. Required.
           * @minimum 1
           * @maximum 4096
           */
          width: number;
          /**
           * Viewport height in CSS pixels, 1-4,096. Required.
           * @minimum 1
           * @maximum 4096
           */
          height: number;
          /**
           * Device pixel ratio, greater than 0 and at most 4.
           * @maximum 4
           * @exclusiveMinimum 0
           */
          device_scale_factor?: number | null;
          /** Emulate a mobile device. */
          is_mobile?: boolean | null;
          /** Use landscape orientation. */
          is_landscape?: boolean | null;
          /** Emulate touch support. */
          has_touch?: boolean | null;
        } | null;
        /**
         * User agent, 1-256 characters, to check against the site's robots.txt; disallowed URLs are rejected.
         * @minLength 1
         * @maxLength 256
         */
        robots_txt?: string | null;
        /** Page readiness condition to reach before responding. */
        respond_timing?: "html" | "visible-content" | "mutation-idle" | "resource-idle" | "media-idle" | "network-idle" | null;
        /** Capture the full page when true. The default, false, captures the viewport. */
        full_page?: boolean;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Captured page URL. */
        url?: string;
        /** Page title. */
        title?: string | null;
        /** Page description. */
        description?: string | null;
        /** Whether the full page was captured. */
        full_page?: boolean;
        /** Hosted screenshot file. */
        screenshot?: {
          /** Download URL. */
          url: string;
          /** File media type. */
          mimeType: "image/png";
        };
        [key: string]: unknown;
      };
    };
    /** Get a Whole Foods product's details, price and availability. This upstream API is Alpha. */
    "litescrape.wholefoods_product": {
      input: {
        /**
         * Public HTTPS product URL on this retailer's site.
         * @minLength 1
         * @maxLength 4096
         */
        url: string;
        /**
         * Retailer's store ID. Selects the store catalog, pricing or availability where the retailer exposes it.
         * @minLength 1
         * @maxLength 8
         * @pattern ^[0-9]{1,8}$
         */
        store_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** product value. */
        product?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Whole Foods products with prices and availability. This upstream API is Alpha. */
    "litescrape.wholefoods_search": {
      input: {
        /**
         * Product keywords to search for.
         * @minLength 1
         * @maxLength 500
         */
        query: string;
        /**
         * One-based result page.
         * @minimum 1
         * @maximum 100
         */
        page?: number;
        /**
         * Retailer's store ID. Selects the store catalog, pricing or availability where the retailer exposes it.
         * @minLength 1
         * @maxLength 8
         * @pattern ^[0-9]{1,8}$
         */
        store_id?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** products value. */
        products?: Array<Record<string, unknown>>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get X community details, including its creator, member count and rules. This upstream API is Alpha. */
    "litescrape.x_community": {
      input: {
        /**
         * Numeric X community ID as a string.
         * @pattern ^[1-9][0-9]{0,19}$
         */
        community_id: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** community value. */
        community?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get posts from an X community, including authors, engagement and media. This upstream API is Alpha. */
    "litescrape.x_community_posts": {
      input: {
        /**
         * Numeric X community ID as a string, from its /i/communities/ URL.
         * @pattern ^[1-9][0-9]{0,19}$
         */
        community_id: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** community id value. */
        community_id?: string;
        /** posts value. */
        posts?: Array<Record<string, unknown>>;
        /** X's ranked public preview; no chronological ordering or pagination. */
        order?: "ranked";
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get an X post with its text, author, engagement counts and media. This upstream API is Alpha. */
    "litescrape.x_post": {
      input: {
        /**
         * Numeric X post ID as a string, taken from its /status/ URL.
         * @pattern ^[1-9][0-9]{0,19}$
         */
        post_id: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** post value. */
        post?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a public X profile, including its bio, follower counts and profile images. This upstream API is Alpha. */
    "litescrape.x_profile": {
      input: {
        /**
         * X username, with or without a leading @. Profile URLs are not accepted.
         * @pattern ^[A-Za-z0-9_]{1,15}$
         */
        username: string;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** profile value. */
        profile?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get posts from an X user. This upstream API is Alpha. */
    "litescrape.x_user_posts": {
      input: {
        /**
         * X username, with or without a leading @. Profile URLs are not accepted.
         * @pattern ^[A-Za-z0-9_]{1,15}$
         */
        username: string;
        /**
         * Continuation cursor returned for the same username.
         * @minLength 1
         * @maxLength 4096
         * @pattern ^[A-Za-z0-9_+/=-]+$
         */
        cursor?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** posts value. */
        posts?: Array<Record<string, unknown>>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Yahoo Images. */
    "litescrape.yahoo_images": {
      input: {
        /**
         * Text or search operators to send to Yahoo.
         * @minLength 1
         * @maxLength 2000
         */
        p: string;
        /** Yahoo regional search host, for example fr.search.yahoo.com. A regional prefix such as fr is also accepted. */
        yahoo_domain?: string;
        /**
         * One-based starting result. Web pages usually advance by 10; image pages usually advance by 60.
         * @minimum 1
         * @maximum 10001
         */
        b?: number;
        /** Device profile used for the Yahoo result page. */
        device?: "desktop" | "tablet" | "mobile";
        /** Image size category; wallpaper selects extra-large images. */
        imgsz?: "small" | "medium" | "large" | "wallpaper" | null;
        /** Select color images, monochrome images (bw), or a dominant color. */
        imgc?: "color" | "bw" | "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "purple" | "pink" | "brown" | "black" | "gray" | "white" | null;
        /** Image style or format to include. */
        imgty?: "photo" | "clipart" | "linedrawing" | "gif" | "transparent" | null;
        /** Image shape: square, landscape (wide), or portrait (tall). */
        imga?: "square" | "wide" | "tall" | null;
        /** People filter: faces, head-and-shoulders portraits, or images without people. */
        imgf?: "face" | "portrait" | "nonportrait" | null;
        /** Limit images to a recent day, week, month, or year. */
        imgt?: "day" | "week" | "month" | "year" | null;
        /** Usage-rights category: Creative Commons (cc), public domain (pd), sharing (fsu), commercial sharing (fsuc), modification (fmsu), or commercial modification (fmsuc). */
        imgl?: "cc" | "pd" | "fsu" | "fsuc" | "fmsu" | "fmsuc" | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** images results value. */
        images_results?: Array<Record<string, unknown>>;
        /** related searches value. */
        related_searches?: Array<Record<string, unknown>> | null;
        /** pagination value. */
        pagination?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get Yahoo web search results. */
    "litescrape.yahoo_search": {
      input: {
        /**
         * Text or search operators to send to Yahoo.
         * @minLength 1
         * @maxLength 2000
         */
        p: string;
        /** Yahoo regional search host, for example fr.search.yahoo.com. A regional prefix such as fr is also accepted. */
        yahoo_domain?: string;
        /**
         * One-based starting result. Web pages usually advance by 10; image pages usually advance by 60.
         * @minimum 1
         * @maximum 10001
         */
        b?: number;
        /** Device profile used for the Yahoo result page. */
        device?: "desktop" | "tablet" | "mobile";
        /**
         * Country code for regional results, such as us or uk.
         * @pattern ^[a-z]{2}$
         */
        vc?: string | null;
        /**
         * Restrict matches to a language, such as lang_fr, lang_zh_chs, or lang_zh_cht. Enables Yahoo's language filter.
         * @pattern ^lang_(?:[a-z]{2}|zh_chs|zh_cht)$
         */
        vl?: string | null;
        /** Adult-content filtering: r for strict, i for moderate, p for unfiltered. */
        vm?: "r" | "i" | "p" | null;
        /**
         * Comma-separated domain suffixes to search, such as .com,.org.
         * @maxLength 500
         */
        vs?: string | null;
        /**
         * Document format to match, such as pdf, txt, or all formats.
         * @maxLength 80
         */
        vf?: string | null;
        /**
         * Yahoo display token controlling result module placement and expansion.
         * @maxLength 1000
         */
        fr2?: string | null;
        /**
         * Yahoo related-topic destination token, passed through as a string.
         * @maxLength 4096
         */
        d?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** organic results value. */
        organic_results?: Array<Record<string, unknown>>;
        /** ads results value. */
        ads_results?: Array<Record<string, unknown>> | null;
        /** related searches value. */
        related_searches?: Array<Record<string, unknown>> | null;
        /** pagination value. */
        pagination?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Yandex Images, including reverse image search. */
    "litescrape.yandex_images": {
      input: {
        /** Yandex domain to search. */
        yandex_domain?: "yandex.com" | "yandex.ru" | "yandex.by" | "yandex.kz" | "yandex.uz" | "yandex.com.tr";
        /** Safe search: 0 off, 1 moderate, 2 strict. */
        family_mode?: 0 | 1 | 2;
        /**
         * Page number, starting at zero.
         * @minimum 0
         */
        p?: number;
        /**
         * Image search query; optional when url is provided.
         * @minLength 1
         */
        text?: string | null;
        /**
         * Exact image width; requires height.
         * @exclusiveMinimum 0
         */
        width?: number | null;
        /**
         * Exact image height; requires width.
         * @exclusiveMinimum 0
         */
        height?: number | null;
        /** Image file type. */
        file_type?: "jpg" | "png" | "gifan" | null;
        /** Image color filter. */
        color?: "color" | "gray" | "red" | "orange" | "yellow" | "cyan" | "green" | "blue" | "violet" | "white" | "black" | null;
        /** Image orientation. */
        orientation?: "horizontal" | "vertical" | "square" | null;
        /** Image content type. */
        image_type?: "photo" | "clipart" | "lineart" | "demotivator" | "face" | null;
        /** Limit images to this source website. */
        site?: string | null;
        /** Only images appearing in the last seven days. */
        recent?: boolean;
        /** Image URL for reverse image search. */
        url?: string | null;
        /** Crop coordinates: left;top;right;bottom, each between 0 and 1. */
        crop?: string | null;
        /** Yandex uploaded image section ID; cannot be combined with crop. */
        crop_id?: string | null;
        /** Reverse image search tab. */
        tab?: "about" | "similar" | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** search information value. */
        search_information?: Record<string, unknown> | null;
        /** organic results value. */
        organic_results?: Array<Record<string, unknown>> | null;
        /** ads value. */
        ads?: Array<Record<string, unknown>> | null;
        /** images results value. */
        images_results?: Array<Record<string, unknown>> | null;
        /** suggested searches value. */
        suggested_searches?: Array<Record<string, unknown>> | null;
        /** image results value. */
        image_results?: Record<string, unknown> | null;
        /** similar images value. */
        similar_images?: Array<Record<string, unknown>> | null;
        /** sites value. */
        sites?: Array<Record<string, unknown>> | null;
        /** image sizes value. */
        image_sizes?: Array<Record<string, unknown>> | null;
        /** pagination value. */
        pagination?: Record<string, unknown> | null;
        /** litescrape pagination value. */
        litescrape_pagination?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get Yandex web search results. */
    "litescrape.yandex_search": {
      input: {
        /** Yandex domain to search. */
        yandex_domain?: "yandex.com" | "yandex.ru" | "yandex.by" | "yandex.kz" | "yandex.uz" | "yandex.com.tr";
        /** Safe search: 0 off, 1 moderate, 2 strict. */
        family_mode?: 0 | 1 | 2;
        /**
         * Page number, starting at zero.
         * @minimum 0
         */
        p?: number;
        /**
         * Search query, including Yandex query operators.
         * @minLength 1
         * @maxLength 400
         */
        text: string;
        /** Search language code; defaults to en on yandex.com. */
        lang?: string | null;
        /**
         * Country or region ID; defaults to the selected domain's region.
         * @minimum 0
         */
        lr?: number | null;
        /** Automatically correct spelling. */
        fix_typo?: boolean;
        /**
         * Maximum result groups per page.
         * @minimum 1
         */
        groups_on_page?: number;
        /** Sort results by relevance or date. */
        sort_mode?: "relevance" | "date";
        /** Time period for results. */
        period?: "all" | "day" | "last_two_weeks" | "month";
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** search information value. */
        search_information?: Record<string, unknown> | null;
        /** organic results value. */
        organic_results?: Array<Record<string, unknown>> | null;
        /** ads value. */
        ads?: Array<Record<string, unknown>> | null;
        /** images results value. */
        images_results?: Array<Record<string, unknown>> | null;
        /** suggested searches value. */
        suggested_searches?: Array<Record<string, unknown>> | null;
        /** image results value. */
        image_results?: Record<string, unknown> | null;
        /** similar images value. */
        similar_images?: Array<Record<string, unknown>> | null;
        /** sites value. */
        sites?: Array<Record<string, unknown>> | null;
        /** image sizes value. */
        image_sizes?: Array<Record<string, unknown>> | null;
        /** pagination value. */
        pagination?: Record<string, unknown> | null;
        /** litescrape pagination value. */
        litescrape_pagination?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Yelp business's details and menu. */
    "litescrape.yelp_place": {
      input: {
        /** Required Yelp encoded business ID or business alias. */
        place_id: string;
        /** Supported localized Yelp hostname. */
        yelp_domain?: string;
        /** Include business alert information when available. */
        business_alert?: boolean;
        /** Fetch the full menu when available; otherwise return place details with an explanation. */
        full_menu?: boolean;
        /** Select a named menu when more than one is available. Requires full_menu=true. */
        menu_name?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** search information value. */
        search_information?: Record<string, unknown> | null;
        /** place results value. */
        place_results?: Record<string, unknown> | null;
        /** full menu results value. */
        full_menu_results?: Record<string, unknown> | null;
        /** error value. */
        error?: string | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get reviews for a Yelp business. */
    "litescrape.yelp_reviews": {
      input: {
        /** Required encoded Yelp business identifier. */
        place_id: string;
        /** Supported localized Yelp hostname. */
        yelp_domain?: string;
        /** Review language such as en or fr-FR. */
        hl?: string;
        /** Search review text for these terms. */
        q?: string | null;
        /** Yelp review ordering. */
        sortby?: "relevance_desc" | "date_desc" | "date_asc" | "rating_desc" | "rating_asc" | "elites_desc";
        /** Comma-separated ratings from 1 through 5. */
        rating?: string | null;
        /** Fetch reviews that Yelp does not recommend. */
        not_recommended?: boolean;
        /** Offset within not-recommended reviews. Requires not_recommended=true. */
        not_recommended_start?: number | null;
        /** Review offset from 0 through 10,000. */
        start?: number;
        /** Review count from 1 through 49. */
        num?: number;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** search information value. */
        search_information?: Record<string, unknown> | null;
        /** review languages value. */
        review_languages?: Array<Record<string, unknown>> | null;
        /** reviews value. */
        reviews?: Array<Record<string, unknown>> | null;
        /** pagination value. */
        pagination?: Record<string, unknown> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Yelp businesses by location and category. */
    "litescrape.yelp_search": {
      input: {
        /** Business name, category, or search terms. */
        find_desc?: string | null;
        /** Required Yelp search location. */
        find_loc: string;
        /** Supported Yelp hostname. Results use the language of the selected domain. */
        yelp_domain?: string;
        /** Optional Yelp-native map bounds token. */
        l?: string | null;
        /** Yelp category identifier containing letters, numbers, _ or -. */
        cflt?: string | null;
        /** Native Yelp ordering. */
        sortby?: "recommended" | "rating" | "review_count";
        /** Yelp-native comma-separated attribute filters. */
        attrs?: string | null;
        /** Result offset from 0 through 10,000. */
        start?: number;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown> | null;
        /** search parameters value. */
        search_parameters?: Record<string, unknown> | null;
        /** search information value. */
        search_information?: Record<string, unknown> | null;
        /** filters value. */
        filters?: Record<string, unknown> | null;
        /** ads results value. */
        ads_results?: Array<Record<string, unknown>> | null;
        /** organic results value. */
        organic_results?: Array<Record<string, unknown>> | null;
        /** pagination value. */
        pagination?: Record<string, unknown> | null;
        /** litescrape pagination value. */
        litescrape_pagination?: Record<string, unknown> | null;
        /** related links value. */
        related_links?: Array<Record<string, unknown>> | null;
        /** faqs value. */
        faqs?: Array<Record<string, unknown>> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a YouTube channel's profile, videos, Shorts, playlists and posts. */
    "litescrape.youtube_channel": {
      input: {
        /**
         * Channel handle (with or without @) or a UC channel ID. Required on the first page; omit with next_page_token.
         *
         * Required on the first page. Use a handle such as @veritasium or a UC channel ID; full URLs are not accepted.
         * @minLength 1
         * @maxLength 100
         */
        channel_id?: string | null;
        /**
         * Channel content tab. Defaults to videos. Omit when using search_query or next_page_token. Not every channel offers every tab.
         *
         * A channel without the requested tab returns an empty content group with search_information.tab_available set to false.
         */
        tab?: "videos" | "shorts" | "streams" | "podcasts" | "playlists" | "posts" | null;
        /**
         * videos, shorts and streams accept latest, popular or oldest; playlists accept dd (newest playlist) or lad (last video added). Omit with podcasts, posts, search_query or next_page_token.
         *
         * Videos, Shorts and streams default to latest. Playlists default to dd. Sorting uses the choices offered by YouTube.
         */
        sort?: "latest" | "popular" | "oldest" | "dd" | "lad" | null;
        /**
         * Search within this channel for matching videos and playlists. Cannot be combined with tab or sort. Omit with next_page_token.
         *
         * Omit tab and sort when searching. Matching videos and playlists appear in search_results.
         * @minLength 1
         * @maxLength 2048
         */
        search_query?: string | null;
        /**
         * Interface language, such as en or pt-BR. Defaults to en. Omit with next_page_token.
         * @pattern ^[a-zA-Z]{2,3}(?:-[a-zA-Z0-9]{2,8}){0,2}$
         */
        hl?: string | null;
        /**
         * Two-letter country code. Defaults to US. Omit with next_page_token.
         * @pattern ^[A-Za-z]{2}$
         */
        gl?: string | null;
        /**
         * Include additional public channel details, such as country, join date, total views and links. Defaults to false. Omit with next_page_token.
         *
         * Channel profile data is returned on the first page. about=true includes additional public details. Continuation pages return content only.
         */
        about?: boolean | null;
        /**
         * Opaque pagination.next_page_token from this endpoint. Send it alone to continue the channel feed with its original settings. Tokens expire after one hour.
         *
         * Send next_page_token alone. The token preserves the channel, selected tab or search, sorting and locale. Use POST for long tokens. Stop when pagination.next_page_token is absent.
         * @minLength 1
         * @maxLength 32768
         * @pattern ^ct2_[A-Za-z0-9_-]{100,}$
         */
        next_page_token?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** search information value. */
        search_information?: Record<string, unknown>;
        /** channel results value. */
        channel_results?: Record<string, unknown> | null;
        /** videos results value. */
        videos_results?: Array<Record<string, unknown>> | null;
        /** shorts results value. */
        shorts_results?: Array<Record<string, unknown>> | null;
        /** streams results value. */
        streams_results?: Array<Record<string, unknown>> | null;
        /** podcasts results value. */
        podcasts_results?: Array<Record<string, unknown>> | null;
        /** playlists results value. */
        playlists_results?: Array<Record<string, unknown>> | null;
        /** posts results value. */
        posts_results?: Array<Record<string, unknown>> | null;
        /** search results value. */
        search_results?: Array<Record<string, unknown>> | null;
        /** filters value. */
        filters?: Array<Record<string, unknown>> | null;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search YouTube videos, channels, playlists and Shorts. */
    "litescrape.youtube_search": {
      input: {
        /**
         * Result type. Omit for mixed results. Movies appear in video_results.
         *
         * Channels and playlists cannot use upload_date, duration or features. Shorts cannot use duration. Movies cannot use live, subtitles, creative_commons or 3d features.
         */
        type?: "video" | "shorts" | "channel" | "playlist" | "movie" | null;
        /** Limit results by upload date. */
        upload_date?: "today" | "this_week" | "this_month" | "this_year" | null;
        /** Video duration: under 3 minutes, 3–20 minutes, or over 20 minutes. */
        duration?: "under_3_min" | "between_3_and_20_min" | "over_20_min" | null;
        /**
         * Comma-separated features: live, 4k, hd, subtitles, creative_commons, 360, vr180, 3d, hdr, location. Combined features must all match.
         * @minLength 1
         * @maxLength 160
         */
        features?: string | null;
        /**
         * YouTube ranking: relevance (default) or popularity. Popularity is not a strict numerical view-count sort.
         *
         * Uses YouTube's current ranking choices. The removed upload-date/rating sorts and last-hour upload filter are not supported named values.
         */
        sort_by?: "relevance" | "popularity" | null;
        /**
         * Search query. Required for the first page; omit with page_token.
         *
         * Required on the first page.
         * @minLength 1
         * @maxLength 2048
         */
        q?: string | null;
        /**
         * YouTube interface language, such as en or pt-BR. Defaults to en. Omit with page_token.
         * @pattern ^[a-zA-Z]{2,3}(?:-[a-zA-Z0-9]{2,8}){0,2}$
         */
        hl?: string | null;
        /**
         * Two-letter country code. Defaults to US. Omit with page_token.
         * @pattern ^[A-Za-z]{2}$
         */
        gl?: string | null;
        /**
         * Advanced YouTube filter token from a results URL. Use either sp or named filters, never both. Omit with page_token.
         *
         * Use either sp or named filters, never both. Raw or once-URL-encoded values from a YouTube results URL are accepted.
         * @minLength 1
         * @maxLength 2048
         * @pattern ^[a-zA-Z0-9_+/=%-]+$
         */
        sp?: string | null;
        /**
         * Opaque next_page_token from the preceding response. Send it alone to continue the same search; tokens expire after one hour.
         *
         * Send page_token alone, without query, locale or filter parameters. It preserves all filters. Use POST for long tokens. Pagination ends when pagination.next_page_token is absent.
         * @minLength 1
         * @maxLength 32768
         * @pattern ^ct2_[A-Za-z0-9_-]{100,}$
         */
        page_token?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** search information value. */
        search_information?: Record<string, unknown>;
        /** video results value. */
        video_results?: Array<Record<string, unknown>>;
        /** channel results value. */
        channel_results?: Array<Record<string, unknown>>;
        /** playlist results value. */
        playlist_results?: Array<Record<string, unknown>>;
        /** shorts results value. */
        shorts_results?: Array<Record<string, unknown>>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get Zillow region and address suggestions. */
    "litescrape.zillow_locations": {
      input: {
        /**
         * City, ZIP code, neighborhood or street address. Required on the first page; omit with page_token.
         * @minLength 1
         * @maxLength 200
         */
        q?: string | null;
        /**
         * Find regions or addresses. Defaults to regions; omit with page_token.
         *
         * Region suggestions include Zillow region IDs. Address suggestions return names; this route does not return property ZPIDs or coordinates.
         */
        type?: "regions" | "addresses" | null;
        /**
         * Suggestions per page, from 1 to 100. Defaults to 10; omit with page_token.
         *
         * Follow pagination.next or send pagination.next_page_token as page_token. Each lookup supports up to 1,000 suggestions; if pagination.possibly_truncated is true, refine q.
         * @minimum 1
         * @maximum 100
         */
        limit?: number | null;
        /**
         * Opaque next_page_token from the preceding response. Send it alone to continue the same lookup.
         *
         * Continue the same query, suggestion type and page size without repeating previously returned suggestions. If pagination.next is null while has_more is true, send page_token through POST JSON.
         * @minLength 1
         * @maxLength 32768
         */
        page_token?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** locations value. */
        locations?: Array<Record<string, unknown>>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Zillow property by ID or URL. */
    "litescrape.zillow_property": {
      input: {
        /**
         * Zillow property identifier. Supply zpid or url.
         * @exclusiveMinimum 0
         */
        zpid?: number | null;
        /**
         * Zillow homedetails URL. Supply url or zpid.
         *
         * Supply exactly one of url or zpid. Apartment building URLs are not property-detail URLs.
         * @maxLength 2048
         */
        url?: string | null;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** property value. */
        property?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search Zillow homes for sale, for rent or recently sold. */
    "litescrape.zillow_search": {
      input: {
        /**
         * Minimum listing price in US dollars.
         *
         * For rental searches, prices are monthly rent in US dollars.
         * @minimum 0
         */
        min_price?: number | null;
        /**
         * Maximum listing price in US dollars.
         * @minimum 0
         */
        max_price?: number | null;
        /**
         * Minimum number of bedrooms.
         * @minimum 0
         * @maximum 20
         */
        min_beds?: number | null;
        /**
         * Maximum number of bedrooms.
         * @minimum 0
         * @maximum 20
         */
        max_beds?: number | null;
        /**
         * Minimum number of bathrooms.
         * @minimum 0
         * @maximum 20
         */
        min_baths?: number | null;
        /**
         * Minimum interior area in square feet.
         * @minimum 0
         */
        min_sqft?: number | null;
        /**
         * Maximum interior area in square feet.
         * @minimum 0
         */
        max_sqft?: number | null;
        /**
         * City, ZIP code, neighborhood or address. Supply q or map_bounds.
         *
         * Supply exactly one of q or map_bounds.
         * @minLength 1
         * @maxLength 200
         */
        q?: string | null;
        /** Map rectangle as north,east,south,west. */
        map_bounds?: string | null;
        /** Listing status. */
        status?: "for_sale" | "for_rent" | "sold";
        /** Restrict results to one property type. */
        property_type?: "house" | "condo" | "townhouse" | "multi_family" | "land" | "manufactured" | "apartment" | null;
        /** Order of matching listings. */
        sort?: "recommended" | "newest" | "price_asc" | "price_desc" | "beds" | "sqft";
        /**
         * Result page, starting at 1; Zillow caps searches at 20 pages.
         *
         * Follow pagination.next for another page. A search exposes at most 20 pages.
         * @minimum 1
         * @maximum 20
         */
        page?: number;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** properties value. */
        properties?: Array<Record<string, unknown>>;
        /** search information value. */
        search_information?: Record<string, unknown>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
    /** Search ZipRecruiter jobs in the US and Canada by keyword and location. */
    "litescrape.ziprecruiter_search": {
      input: {
        /**
         * Job title, keywords, or company to search for.
         * @minLength 1
         * @maxLength 512
         */
        q: string;
        /**
         * One-based results page. Use next_page from the response to continue.
         * @minimum 1
         */
        page?: number;
        /**
         * City and state or ZIP code, for example New York, NY.
         * @minLength 1
         * @maxLength 512
         */
        location: string;
        /**
         * Search radius in miles. Use 5000 for any distance.
         * @minimum 0
         * @maximum 5000
         */
        radius?: number | null;
        /**
         * Maximum posting age in days.
         * @minimum 1
         */
        days?: number | null;
        /**
         * Employment types as a JSON array.
         * @minItems 1
         * @maxItems 100
         */
        employment_types?: Array<"full_time" | "part_time" | "contract" | "contract_to_hire" | "temporary" | "as_needed" | "other"> | null;
        /** On-site, remote-only, or hybrid jobs. */
        location_type?: "no_remote" | "only_remote" | "hybrid" | null;
        /**
         * Lower bound for the job's maximum annualized pay, in the location's currency.
         * @minimum 0
         */
        salary_min?: number | null;
        /**
         * Upper bound for the job's maximum annualized pay.
         * @minimum 0
         */
        salary_max?: number | null;
        /** Experience/seniority class. */
        experience_level?: "no_experience" | "junior" | "mid" | "senior" | null;
        /** Require ZipRecruiter's quick application. */
        easy_apply?: boolean;
        /**
         * Upstream execution budget in seconds, excluding queue time.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** search metadata value. */
        search_metadata?: Record<string, unknown>;
        /** search parameters value. */
        search_parameters?: Record<string, unknown>;
        /** jobs results value. */
        jobs_results?: Array<Record<string, unknown>>;
        /** search information value. */
        search_information?: Record<string, unknown>;
        /** pagination value. */
        pagination?: Record<string, unknown>;
        /** litescrape pagination value. */
        litescrape_pagination?: Record<string, unknown>;
        /** available filters value. */
        available_filters?: Array<Record<string, unknown>> | null;
        /**
         * Optional URL for submitting feedback about this result.
         * @format uri
         */
        submit_feedback_for_this_response_here?: string;
        [key: string]: unknown;
      };
    };
  }
}
