import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch the HTML response for one target URL through the Scrapingdog Web Scraping API. */
    "scrapingdog.fetch_html": {
      input: {
        /**
         * The decoded target URL to scrape.
         * @format uri
         */
        url: string;
        /** Whether Scrapingdog should render JavaScript for the target page. */
        dynamic?: boolean;
      };
      output: {
        /** The HTML or text content returned by Scrapingdog. */
        html: string;
        /** The HTTP status code returned by Scrapingdog. */
        statusCode: number;
        /** The response content type returned by Scrapingdog. */
        contentType?: string;
      };
    };
    /** Retrieve Scrapingdog account usage and credit information for the API key. */
    "scrapingdog.get_account_usage": {
      input: Record<string, never>;
      output: {
        /** The JSON object returned by Scrapingdog for this request. */
        usage: Record<string, unknown>;
      };
    };
    /** Retrieve details for one Google Maps place through Scrapingdog. */
    "scrapingdog.google_maps_place": {
      input: {
        /**
         * The Google Maps data ID for a place.
         * @minLength 1
         */
        dataId?: string;
        /**
         * The Google Maps place ID.
         * @minLength 1
         */
        placeId?: string;
        /**
         * The two-letter country code for localized place details.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /** The Google Maps place request type. */
        type?: "place";
      };
      output: {
        /** The JSON object returned by Scrapingdog for this request. */
        data: Record<string, unknown>;
      };
    };
    /** Run a Google Maps Search request through Scrapingdog. */
    "scrapingdog.google_maps_search": {
      input: {
        /**
         * The Google Maps search query.
         * @minLength 1
         */
        query: string;
        /**
         * The GPS coordinate origin used by Google Maps, such as @40.745,-74,15z.
         * @minLength 1
         */
        ll?: string;
        /**
         * The Google domain to use for Google Maps results.
         * @minLength 1
         */
        domain?: string;
        /**
         * The language code for localized Google Maps results.
         * @minLength 1
         */
        language?: string;
        /**
         * The two-letter country code for localized Google Maps results.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /**
         * The Google Maps Search page number, starting at 0.
         * @minimum 0
         */
        page?: number;
      };
      output: {
        /** The JSON object returned by Scrapingdog for this request. */
        data: Record<string, unknown>;
      };
    };
    /** Run a Google Scholar search request through Scrapingdog. */
    "scrapingdog.google_scholar_search": {
      input: {
        /**
         * The Google Scholar search query.
         * @minLength 1
         */
        query: string;
        /** Whether Scrapingdog should return raw Google Scholar HTML. */
        html?: boolean;
        /**
         * The two-letter country code for localized Scholar results.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /**
         * The language code for localized Google Scholar results.
         * @minLength 1
         */
        language?: string;
        /**
         * The Google Scholar language restriction value, such as lang_en.
         * @minLength 1
         */
        lr?: string;
        /**
         * The Google Scholar cited-by article ID.
         * @minLength 1
         */
        cites?: string;
        /**
         * The Google Scholar article cluster ID.
         * @minLength 1
         */
        cluster?: string;
        /**
         * The starting publication year filter.
         * @minLength 1
         */
        asYlo?: string;
        /**
         * The ending publication year filter.
         * @minLength 1
         */
        asYhi?: string;
        /**
         * The Google Scholar search type or patent/case law filter.
         * @minLength 1
         */
        asSdt?: string;
        /** The Google Scholar safe search setting. */
        safe?: "active" | "off";
        /** Whether to enable Google's similar and omitted result filters. */
        filter?: boolean;
        /** Whether citations should be excluded from Scholar results. */
        asVis?: boolean;
        /** Whether only review articles should be returned. */
        asRr?: boolean;
        /**
         * The Google Scholar page number, starting at 0.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of Google Scholar results to request.
         * @exclusiveMinimum 0
         */
        results?: number;
      };
      output: {
        /** The JSON object returned by Scrapingdog for this request. */
        data: Record<string, unknown>;
      };
    };
    /** Run a Google Search request through Scrapingdog and return parsed results. */
    "scrapingdog.google_search": {
      input: {
        /**
         * The Google search query.
         * @minLength 1
         */
        query: string;
        /**
         * The Google domain to use, such as google.com or google.co.uk.
         * @minLength 1
         */
        domain?: string;
        /**
         * The two-letter country code used for localized results.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /**
         * The Google country restriction filter, such as countryUS.
         * @minLength 1
         */
        cr?: string;
        /**
         * The encoded Google location parameter.
         * @minLength 1
         */
        uule?: string;
        /**
         * The origin location for the Google search.
         * @minLength 1
         */
        location?: string;
        /**
         * The Google language code for result localization.
         * @minLength 1
         */
        language?: string;
        /**
         * The Google language restriction value, such as lang_en.
         * @minLength 1
         */
        lr?: string;
        /**
         * The Google Business listing ID to extract.
         * @minLength 1
         */
        ludocid?: string;
        /**
         * The Google lsig parameter used for some knowledge graph views.
         * @minLength 1
         */
        lsig?: string;
        /**
         * The Google Knowledge Graph ID to scrape.
         * @minLength 1
         */
        kgmid?: string;
        /**
         * The cached Google search parameter string.
         * @minLength 1
         */
        si?: string;
        /**
         * The Google layout expansion parameter.
         * @minLength 1
         */
        ibp?: string;
        /**
         * The Google filtering string.
         * @minLength 1
         */
        uds?: string;
        /**
         * The advanced Google search filter string.
         * @minLength 1
         */
        tbs?: string;
        /** The Google safe search setting. */
        safe?: "active" | "off";
        /** Whether to exclude results for an auto-corrected query. */
        nfpr?: boolean;
        /** Whether to enable Google's similar and omitted result filters. */
        filter?: boolean;
        /**
         * The Google Search page number, starting at 0.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of Google Search results to request.
         * @exclusiveMinimum 0
         */
        results?: number;
        /** Whether to request Scrapingdog advanced Google Search parsing. */
        advanceSearch?: boolean;
        /** Whether to request mobile Google Search results. */
        mobSearch?: boolean;
        /** Whether Scrapingdog should return full Google result page HTML. */
        html?: boolean;
      };
      output: {
        /** The JSON object returned by Scrapingdog for this request. */
        data: Record<string, unknown>;
      };
    };
  }
}
