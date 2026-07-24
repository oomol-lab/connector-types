import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the available credits for the connected Spider Cloud account. */
    "spider.get_credits": {
      input: Record<string, never>;
      output: {
        /** The JSON payload returned by Spider Cloud. */
        data: unknown;
      };
    };
    /** Extract links from one public URL with Spider Cloud. */
    "spider.get_links": {
      input: {
        /**
         * The public URL whose links Spider Cloud should extract.
         * @format uri
         */
        url: string;
        /** The retrieval engine Spider Cloud should use. */
        request?: "http" | "browser" | "chrome" | "smart";
        /** Whether Spider Cloud should respect the target site's robots rules. */
        respect_robots?: boolean;
        /** Whether Spider Cloud may use a cached response. */
        cache?: boolean;
        /**
         * The upstream page request timeout in milliseconds.
         * @minimum 1
         */
        request_timeout?: number;
      };
      output: {
        /** The JSON payload returned by Spider Cloud. */
        data: unknown;
      };
    };
    /** Scrape one public URL with Spider Cloud and return its JSON response. */
    "spider.scrape": {
      input: {
        /**
         * The public URL Spider Cloud should scrape.
         * @format uri
         */
        url: string;
        /** The retrieval engine Spider Cloud should use. */
        request?: "http" | "browser" | "chrome" | "smart";
        /** The JSON-compatible page content format to return. */
        return_format?: "raw" | "text" | "html2text" | "markdown" | "commonmark" | "xml" | "empty";
        /** Whether Spider Cloud should apply readability processing. */
        readability?: boolean;
        /** Whether Spider Cloud should include page metadata. */
        metadata?: boolean;
        /** Whether Spider Cloud should include links found on the page. */
        return_page_links?: boolean;
        /** Whether Spider Cloud should keep only main-page content. */
        filter_output_main_only?: boolean;
        /** Whether Spider Cloud should respect the target site's robots rules. */
        respect_robots?: boolean;
        /** Whether Spider Cloud may use a cached response. */
        cache?: boolean;
        /**
         * The upstream page request timeout in milliseconds.
         * @minimum 1
         */
        request_timeout?: number;
        /**
         * The delay in milliseconds before Spider Cloud captures page content.
         * @minimum 0
         */
        delay?: number;
      };
      output: {
        /** The JSON payload returned by Spider Cloud. */
        data: unknown;
      };
    };
    /** Search the web with Spider Cloud and optionally fetch result-page content. */
    "spider.search": {
      input: {
        /**
         * The web search query.
         * @minLength 1
         */
        search: string;
        /**
         * The maximum number of search results to retrieve.
         * @minimum 1
         */
        search_limit?: number;
        /** Whether Spider Cloud should fetch content from each search result. */
        fetch_page_content?: boolean;
        /**
         * The location name used to localize search results.
         * @minLength 1
         */
        location?: string;
        /**
         * The country code used to localize search results.
         * @minLength 2
         */
        country?: string;
        /**
         * The language code used to localize search results.
         * @minLength 2
         */
        language?: string;
        /**
         * The 1-indexed search result page to retrieve.
         * @minimum 1
         */
        page?: number;
        /** The retrieval engine Spider Cloud should use. */
        request?: "http" | "browser" | "chrome" | "smart";
        /** The JSON-compatible page content format to return. */
        return_format?: "raw" | "text" | "html2text" | "markdown" | "commonmark" | "xml" | "empty";
      };
      output: {
        /** The JSON payload returned by Spider Cloud. */
        data: unknown;
      };
    };
  }
}
