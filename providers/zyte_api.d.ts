import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Extract article data from one public URL with Zyte API. */
    "zyte_api.extract_article": {
      input: {
        /**
         * The absolute URL to extract data from with Zyte API.
         * @maxLength 8192
         * @format uri
         */
        url: string;
        /** The IP type Zyte API should use for the request. */
        ipType?: "datacenter" | "residential";
        /** The source Zyte API should use for automatic extraction. */
        extractFrom?: "browserHtml" | "browserHtmlOnly" | "httpResponseBody";
      };
      output: {
        /** The URL Zyte API extracted data from. It may differ from the input URL. */
        url: string;
        /** The HTTP status code retrieved from the target page. */
        statusCode?: number;
        /** The article data returned by Zyte API. */
        article: Record<string, unknown>;
      };
    };
    /** Extract generic page content data from one public URL with Zyte API. */
    "zyte_api.extract_page_content": {
      input: {
        /**
         * The absolute URL to extract data from with Zyte API.
         * @maxLength 8192
         * @format uri
         */
        url: string;
        /** The IP type Zyte API should use for the request. */
        ipType?: "datacenter" | "residential";
        /** The source Zyte API should use for automatic extraction. */
        extractFrom?: "browserHtml" | "browserHtmlOnly" | "httpResponseBody";
      };
      output: {
        /** The URL Zyte API extracted data from. It may differ from the input URL. */
        url: string;
        /** The HTTP status code retrieved from the target page. */
        statusCode?: number;
        /** The page content data returned by Zyte API. */
        pageContent: Record<string, unknown>;
      };
    };
    /** Extract product data from one public URL with Zyte API. */
    "zyte_api.extract_product": {
      input: {
        /**
         * The absolute URL to extract data from with Zyte API.
         * @maxLength 8192
         * @format uri
         */
        url: string;
        /** The IP type Zyte API should use for the request. */
        ipType?: "datacenter" | "residential";
        /** The source Zyte API should use for automatic extraction. */
        extractFrom?: "browserHtml" | "browserHtmlOnly" | "httpResponseBody";
      };
      output: {
        /** The URL Zyte API extracted data from. It may differ from the input URL. */
        url: string;
        /** The HTTP status code retrieved from the target page. */
        statusCode?: number;
        /** The product data returned by Zyte API. */
        product: Record<string, unknown>;
      };
    };
    /** Fetch browser-rendered HTML for one public URL with Zyte API. */
    "zyte_api.fetch_browser_html": {
      input: {
        /**
         * The absolute URL to extract data from with Zyte API.
         * @maxLength 8192
         * @format uri
         */
        url: string;
        /** The IP type Zyte API should use for the request. */
        ipType?: "datacenter" | "residential";
      };
      output: {
        /** The URL Zyte API extracted data from. It may differ from the input URL. */
        url: string;
        /** The HTTP status code retrieved from the target page. */
        statusCode?: number;
        /** The browser-rendered HTML returned by Zyte API. */
        browserHtml: string;
      };
    };
  }
}
