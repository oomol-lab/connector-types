import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search an Amazon marketplace and get products with ASIN, title, price, rating and review count. */
    "piloterr.amazon_search": {
      input: {
        /**
         * Keyword or phrase to search for (e.g., "playstation 5").
         * @minLength 1
         */
        query: string;
        /**
         * Amazon domain extension of the marketplace (e.g., "com", "fr", "co.uk"; defaults to "com").
         * @minLength 1
         */
        marketplace?: string;
        /**
         * Page of results, starting at 1.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Products found on Amazon */
        products: Array<{
          /** ASIN of the product. */
          asin?: string | null;
          /** Title of the product. */
          title?: string | null;
          /** URL of the product page. */
          url?: string | null;
          /** Price shown in the results. */
          price?: number | null;
          /** List price before discount, when shown. */
          real_price?: number | null;
          /** Average rating out of 5. */
          rating?: number | null;
          /** Number of reviews. */
          reviews_count?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get a company's Crunchbase profile by name, permalink or URL, or by website domain: description, size, categories, locations, investors and products. */
    "piloterr.crunchbase_company": {
      input: Record<string, unknown>;
      output: {
        /** Name of the company. */
        name?: string | null;
        /** Crunchbase permalink of the company. */
        permalink?: string | null;
        /** Short description. */
        headline?: string | null;
        /** Full description. */
        description?: string | null;
        /** Website of the company. */
        website?: string | null;
        /** URL of the company logo. */
        logo?: string | null;
        /** Company type, such as for profit. */
        company_type?: string | null;
        /** Employee count range. */
        employee_count?: string | null;
        /** Founding date. */
        founded?: string | null;
        /** Phone number of the company. */
        phone_number?: string | null;
        /** Contact email of the company. */
        contact_email?: string | null;
        /** Growth and heat returned by Piloterr. */
        growth_and_heat?: {
          /** Crunchbase heat score. */
          heat_score?: number | null;
          /** Crunchbase growth score. */
          growth_score?: number | null;
          [key: string]: unknown;
        };
        /** Other names of the company. */
        aliases?: Array<string>;
        /** Crunchbase tags, such as unicorn. */
        tags?: Array<string>;
        /** Industry categories. */
        categories?: Array<{
          /** Name of the category. */
          name?: string | null;
          /** Crunchbase permalink of the category. */
          permalink?: string | null;
          [key: string]: unknown;
        }>;
        /** Headquarters location, from city to continent. */
        location?: Array<{
          /** Name of the place. */
          name?: string | null;
          /** Type of place, such as city or country. */
          type?: string | null;
          [key: string]: unknown;
        }>;
        /** Investors of the company. */
        investors_list?: Array<{
          /** Investor identifier returned by Piloterr. */
          investor_identifier?: {
            /** Name of the investor. */
            value?: string | null;
            /** Crunchbase permalink of the investor. */
            permalink?: string | null;
            [key: string]: unknown;
          };
          /** Funding round identifier returned by Piloterr. */
          funding_round_identifier?: {
            /** Funding round the investor took part in. */
            value?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Products of the company. */
        product?: Array<{
          /** Name of the product. */
          name?: string | null;
          /** Description of the product. */
          description?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Detect the technologies a website runs, such as its CMS, frameworks, analytics, CDN and hosting. */
    "piloterr.detect_technologies": {
      input: {
        /**
         * URL of the page (e.g., "https://example.com").
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Technologies detected on the website. */
        technologies?: Array<{
          /** Name of the technology. */
          name?: string | null;
          /** Identifier of the technology. */
          slug?: string | null;
          /** Version, when it can be detected. */
          version?: string | null;
          /** Website of the technology. */
          website?: string | null;
          /** What the technology does. */
          description?: string | null;
          /** Confidence of the detection, from 0 to 100. */
          confidence?: number | null;
          /** Categories of the technology. */
          categories?: Array<{
            /** Name of the category, such as CDN or CMS. */
            name?: string | null;
            /** Identifier of the category. */
            slug?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get an eBay listing by item ID or URL, with its price, condition, availability, seller, shipping and item specifics. */
    "piloterr.ebay_get_listing": {
      input: {
        /**
         * eBay item ID or listing URL (e.g., "257758922911").
         * @minLength 1
         */
        item: string;
      };
      output: {
        /** eBay item ID. */
        item_id?: string | null;
        /** Title of the listing. */
        title?: string | null;
        /** URL of the listing. */
        url?: string | null;
        /** Price of the listing. */
        price?: number | null;
        /** ISO 4217 code of the price. */
        currency?: string | null;
        /** Price as eBay displays it. */
        price_display?: string | null;
        /** Condition of the item, such as New or Used. */
        condition?: string | null;
        /** Seller's description of the condition. */
        condition_description?: string | null;
        /** Availability, such as InStock or OutOfStock. */
        availability?: string | null;
        /** Whether the listing can be bought now. */
        is_buy_it_now?: boolean | null;
        /** Whether the seller accepts best offers. */
        is_best_offer?: boolean | null;
        /** Number of people watching the listing. */
        watchers?: number | null;
        /** URL of the main image. */
        image_url?: string | null;
        /** Seller of the listing. */
        seller?: {
          /** Name of the seller. */
          name?: string | null;
          /** Feedback count of the seller. */
          feedback?: string | null;
          /** Share of positive feedback, in percent. */
          positive_feedback_percent?: number | null;
          [key: string]: unknown;
        };
        /** Shipping returned by Piloterr. */
        shipping?: {
          /** Shipping summary. */
          summary?: string | null;
          [key: string]: unknown;
        };
        /** Returns returned by Piloterr. */
        returns?: {
          /** Returns policy summary. */
          summary?: string | null;
          [key: string]: unknown;
        };
        /** Item specifics. */
        specifications?: Array<{
          /** Name of the specific. */
          name?: string | null;
          /** Value of the specific. */
          value?: string | null;
          [key: string]: unknown;
        }>;
        /** Accepted payment methods. */
        payment_methods?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Search eBay listings by keyword or search URL and get their price, condition, buying format, shipping and seller. */
    "piloterr.ebay_search": {
      input: {
        /**
         * Keyword on ebay.com, or a search URL on a supported eBay site (e.g., "laptop").
         * @minLength 1
         */
        query: string;
        /**
         * Page of results, starting at 1.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Listings found on eBay. */
        results?: Array<{
          /** Position of the listing on the page. */
          position?: number | null;
          /** eBay item ID. */
          item_id?: string | null;
          /** Title of the listing. */
          title?: string | null;
          /** Subtitle of the listing. */
          subtitle?: string | null;
          /** URL of the listing. */
          url?: string | null;
          /** Price of the listing. */
          price?: number | null;
          /** ISO 4217 code of the price. */
          currency?: string | null;
          /** Price as eBay displays it. */
          price_display?: string | null;
          /** Condition of the item. */
          condition?: string | null;
          /** Buying format, such as Buy It Now or Auction. */
          buying_format?: string | null;
          /** Shipping cost or summary. */
          shipping?: string | null;
          /** URL of the main image. */
          image_url?: string | null;
          /** Seller of the listing. */
          seller?: {
            /** Name of the seller. */
            name?: string | null;
            /** Feedback count of the seller. */
            feedback?: string | null;
            /** Share of positive feedback, in percent. */
            positive_feedback_percent?: number | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Pagination returned by Piloterr. */
        pagination?: {
          /** URL of the next page of results. */
          next?: string | null;
          /** Current page. */
          page?: number | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Fetch a public web page over fast HTTP, without running JavaScript, and get its HTML. */
    "piloterr.fetch_html": {
      input: {
        /**
         * URL of the page (e.g., "https://example.com").
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** HTML of the page. */
        html: string;
      };
    };
    /** Search Google and get organic results with their position, title, link and snippet, and the estimated total. */
    "piloterr.google_search": {
      input: {
        /**
         * Search query (e.g., "best electric cars").
         * @minLength 1
         */
        query: string;
        /**
         * Two-letter country code to search from (e.g., "us").
         * @minLength 1
         */
        country?: string;
        /**
         * Two-letter language code of the results (e.g., "en").
         * @minLength 1
         */
        language?: string;
        /**
         * City or region to search from (e.g., "Paris, France").
         * @minLength 1
         */
        location?: string;
        /**
         * Page of results, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page (e.g., 10).
         * @minimum 1
         */
        numResults?: number;
      };
      output: {
        /** Organic results. */
        organic_results?: Array<{
          /** Position of the result on the page. */
          position?: number | null;
          /** Title of the result. */
          title?: string | null;
          /** URL of the result. */
          link?: string | null;
          /** Domain of the result. */
          domain?: string | null;
          /** Link as Google displays it. */
          displayed_link?: string | null;
          /** Source or site name. */
          source?: string | null;
          /** Snippet shown under the title. */
          snippet?: string | null;
          [key: string]: unknown;
        }>;
        /** Search information returned by Piloterr. */
        search_information?: {
          /** Estimated total number of results. */
          total_results?: number | null;
          [key: string]: unknown;
        };
        /** Pagination returned by Piloterr. */
        pagination?: {
          /** Whether another page of results exists. */
          has_next_page?: boolean | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a LinkedIn company's profile by page URL, slug or ID, or by website domain: industry, size, headquarters, specialties and followers. */
    "piloterr.linkedin_company": {
      input: Record<string, unknown>;
      output: {
        /** Name of the company. */
        company_name?: string | null;
        /** LinkedIn ID of the company. */
        company_id?: number | null;
        /** URL of the LinkedIn page. */
        company_url?: string | null;
        /** Tagline of the company. */
        tagline?: string | null;
        /** About text of the company. */
        description?: string | null;
        /** Website of the company. */
        website?: string | null;
        /** Industry of the company. */
        industry?: string | null;
        /** Year the company was founded. */
        founded?: number | null;
        /** Number of employees on LinkedIn. */
        staff_count?: number | null;
        /** Company size range. */
        staff_range?: string | null;
        /** Number of LinkedIn followers. */
        follower_count?: number | null;
        /** URL of the company logo. */
        logo_url?: string | null;
        /** Specialties of the company. */
        specialities?: Array<string>;
        /** Office addresses. */
        locations?: Array<string>;
        /** Headquarters address. */
        headquarter?: {
          /** Street address. */
          line1?: string | null;
          /** City. */
          city?: string | null;
          /** Postal code. */
          postal_code?: string | null;
          /** Country code. */
          country?: string | null;
          [key: string]: unknown;
        };
        /** Similar companies LinkedIn suggests. */
        similar_companies?: Array<{
          /** Name of the company. */
          company_name?: string | null;
          /** URL of its LinkedIn page. */
          company_url?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Render a JavaScript-heavy page in a headless browser and get the HTML after rendering. */
    "piloterr.render_html": {
      input: {
        /**
         * URL of the page (e.g., "https://example.com").
         * @minLength 1
         */
        url: string;
        /**
         * Seconds to wait after the page loads before reading the HTML (defaults to 0).
         * @minimum 0
         * @maximum 30
         */
        waitInSeconds?: number;
        /**
         * CSS or XPath selector to wait for before reading the HTML.
         * @minLength 1
         */
        waitFor?: string;
        /**
         * Maximum page-load time in seconds (defaults to 30).
         * @minimum 1
         */
        timeout?: number;
        /** Block ad requests while rendering. */
        blockAds?: boolean;
      };
      output: {
        /** HTML of the page after rendering. */
        html: string;
      };
    };
    /** Capture a public web page as a PNG, JPEG, WebP image or a PDF, by viewport, full page or CSS selector, and store it as a file. */
    "piloterr.screenshot": {
      input: {
        /**
         * URL of the page (e.g., "https://example.com").
         * @minLength 1
         */
        url: string;
        /** Output format: png, jpeg, webp or pdf (defaults to "png"). */
        format?: "png" | "jpeg" | "webp" | "pdf";
        /** Capture the entire page instead of the visible viewport. */
        fullPage?: boolean;
        /** Device to emulate (e.g., "iphone_14_pro"). */
        device?: "iphone_14_pro" | "iphone_14_pro_max" | "iphone_13_pro_max" | "iphone_13_mini" | "iphone_12" | "iphone_x" | "ipad" | "pixel_7_pro" | "pixel_6a" | "pixel_5" | "galaxy_s23_ultra" | "galaxy_s23" | "galaxy_s8" | "galaxy_fold4" | "huawei_mate_50_pro" | "huawei_p60_pro" | "redmi_note_12_pro" | "redmi_note_11";
        /**
         * CSS selector of one element to capture (e.g., "#pricing").
         * @minLength 1
         */
        selector?: string;
        /**
         * Width of the browser viewport in pixels (defaults to 1280).
         * @minimum 1
         */
        viewportWidth?: number;
        /**
         * Height of the browser viewport in pixels (defaults to 1024).
         * @minimum 1
         */
        viewportHeight?: number;
        /**
         * Seconds to wait before capturing (defaults to 0).
         * @minimum 0
         * @maximum 10
         */
        delay?: number;
        /**
         * Comma-separated CSS selectors to remove before capturing.
         * @minLength 1
         */
        removeSelectors?: string;
        /**
         * CSS selector to wait for before capturing.
         * @minLength 1
         */
        waitForSelector?: string;
        /** Scroll the full page to load lazy content before capturing. */
        fullPageScroll?: boolean;
        /**
         * Time spent scrolling before a full-page capture in milliseconds (defaults to 400).
         * @minimum 0
         */
        fullPageScrollDuration?: number;
        /** Remove ads before capturing. */
        removeAds?: boolean;
      };
      output: {
        /** The screenshot uploaded to file transit. */
        file: {
          /**
           * The URL used to download the screenshot.
           * @format uri
           */
          transitUrl: string;
          /**
           * The screenshot size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /**
           * The screenshot filename.
           * @minLength 1
           */
          name: string;
          /**
           * The screenshot MIME type, such as image/png or application/pdf.
           * @minLength 1
           */
          mimeType: string;
        };
      };
    };
    /** Get a Zillow home from its homedetails URL: address, price, Zestimate, status, size, rooms, year built and photos. */
    "piloterr.zillow_property": {
      input: {
        /**
         * Full Zillow homedetails URL (e.g., "https://www.zillow.com/homedetails/20-Kyle-Ct-Staten-Island-NY-10312/32361983_zpid/").
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Zillow property ID. */
        zpid?: number | null;
        /** Address returned by Piloterr. */
        address?: {
          /** Street address. */
          street_address?: string | null;
          [key: string]: unknown;
        };
        /** City. */
        city?: string | null;
        /** State. */
        state?: string | null;
        /** ZIP code. */
        zipcode?: string | null;
        /** County. */
        county?: string | null;
        /** Listing or last sale price. */
        price?: number | null;
        /** ISO 4217 code of the prices. */
        currency?: string | null;
        /** Zillow's estimated market value. */
        zestimate?: number | null;
        /** Status, such as FOR_SALE or RECENTLY_SOLD. */
        home_status?: string | null;
        /** Home type, such as SINGLE_FAMILY. */
        home_type?: string | null;
        /** Number of bedrooms. */
        bedrooms?: number | null;
        /** Number of bathrooms. */
        bathrooms?: number | null;
        /** Living area in square feet. */
        living_area?: number | null;
        /** Lot size in square feet. */
        lot_size?: number | null;
        /** Year the home was built. */
        year_built?: number | null;
        /** Reso facts returned by Piloterr. */
        reso_facts?: {
          /** Price per square foot. */
          price_per_square_foot?: number | null;
          [key: string]: unknown;
        };
        /** Listing description. */
        description?: string | null;
        /** Latitude. */
        latitude?: number | null;
        /** Longitude. */
        longitude?: number | null;
        /** Photos of the home. */
        photos?: Array<{
          /** URL of the photo. */
          url?: string | null;
          /** Width of the photo in pixels. */
          width?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
