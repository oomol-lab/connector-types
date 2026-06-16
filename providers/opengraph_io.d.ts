import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Capture a webpage screenshot through the OpenGraph.io Screenshot endpoint with configurable viewport, delay, and element selection. */
    "opengraph_io.capture_screenshot": {
      input: {
        /**
         * The page URL to capture as an image.
         * @format uri
         */
        url: string;
        /** The output image format. */
        format?: "jpeg" | "png" | "webp";
        /**
         * The image quality from 10 to 80.
         * @minimum 10
         * @maximum 80
         */
        quality?: number;
        /** Whether cached screenshots may be returned when available. */
        cacheOk?: boolean;
        /** An optional CSS selector that limits the capture to a specific element. */
        selector?: string;
        /** Whether the page should be rendered with a dark color-scheme preference. */
        darkMode?: boolean;
        /** Whether the entire scrollable page should be captured. */
        fullPage?: boolean;
        /** Whether a proxy should be used for the request. */
        useProxy?: boolean;
        /** A viewport size preset. */
        dimensions?: "xs" | "sm" | "md" | "lg";
        /**
         * The delay in milliseconds before taking the screenshot.
         * @minimum 0
         * @maximum 10000
         */
        captureDelay?: number;
        /** Comma-separated CSS selectors for elements that should be hidden. */
        excludeSelectors?: string;
        /**
         * The navigation timeout in milliseconds.
         * @minimum 1000
         * @maximum 60000
         */
        navigationTimeout?: number;
        /** Whether known cookie consent banners should be blocked. */
        blockCookieBanner?: boolean;
      };
      output: {
        /**
         * The URL of the generated screenshot image.
         * @format uri
         */
        screenshotUrl: string;
        /** The dimensions of the captured screenshot. */
        dimensions: {
          /** The screenshot width in pixels. */
          width: number;
          /** The screenshot height in pixels. */
          height: number;
          [key: string]: unknown;
        };
        /** Information about the upstream request performed by OpenGraph.io. */
        requestInfo?: {
          /** The host that responded to the request. */
          host?: string;
          /** The number of redirects followed while fetching the URL. */
          redirects?: number;
          /** The HTTP response code returned upstream. */
          responseCode?: number;
          /** The upstream response Content-Type header when available. */
          responseContentType?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Extract Open Graph, Twitter Card, oEmbed, and inferred metadata for a site through the OpenGraph.io Site endpoint. */
    "opengraph_io.extract_site": {
      input: {
        /**
         * The site URL to inspect.
         * @format uri
         */
        site: string;
        /** Whether cached results may be returned when available. */
        cacheOk?: boolean;
        /** Whether the page should be rendered in a browser before extraction. */
        fullRender?: boolean;
        /** Whether a proxy should be used for the request. */
        useProxy?: boolean;
        /** Whether a residential proxy should be used when available. */
        usePremium?: boolean;
        /** Whether a mobile-grade proxy should be used when available. */
        useSuperior?: boolean;
        /** Whether AI-enhanced metadata extraction should be enabled. */
        useAi?: boolean;
        /**
         * The maximum accepted cache age in seconds.
         * @minimum 0
         */
        maxCacheAge?: number;
        /** The Accept-Language header value sent to the target site. */
        acceptLang?: string;
        /** Whether OpenGraph.io may automatically decide whether to use a proxy. */
        autoProxy?: boolean;
        /** Whether OpenGraph.io may automatically decide whether full rendering is needed. */
        autoRender?: boolean;
        /** Whether OpenGraph.io should retry with fallback transport strategies. */
        retry?: boolean;
        /**
         * The maximum number of retry attempts.
         * @minimum 0
         */
        maxRetries?: number;
        /** Whether retries may escalate to more expensive fallback strategies. */
        retryEscalate?: boolean;
        /** The ISO 3166-1 alpha-2 country code to use for proxy egress. */
        proxyCountry?: string;
      };
      output: {
        /** The combined metadata inferred from Open Graph, Twitter Card, and HTML signals. */
        hybridGraph?: Record<string, unknown>;
        /** The raw Open Graph fields returned by OpenGraph.io. */
        openGraph?: Record<string, unknown>;
        /** The raw Twitter Card fields returned by OpenGraph.io. */
        twitterCard?: Record<string, unknown>;
        /** Metadata inferred from ordinary HTML when explicit social tags are missing. */
        htmlInferred?: Record<string, unknown>;
        /** The oEmbed payload returned for the page. */
        oEmbed?: Record<string, unknown>;
        /** The final URL that OpenGraph.io resolved after redirects. */
        requestUrl?: string;
        /** Information about the upstream request performed by OpenGraph.io. */
        requestInfo?: {
          /** The host that responded to the request. */
          host?: string;
          /** The number of redirects followed while fetching the URL. */
          redirects?: number;
          /** The HTTP response code returned upstream. */
          responseCode?: number;
          /** The upstream response Content-Type header when available. */
          responseContentType?: string;
          [key: string]: unknown;
        };
        /** Whether the result came from cache. */
        cached?: boolean;
        createdAt?: string | null;
        /** Retry information returned by OpenGraph.io. */
        retryInfo?: Record<string, unknown>;
        /** AI safety metadata returned by OpenGraph.io. */
        aiSafety?: Record<string, unknown>;
        /** The domain extracted from the requested URL. */
        domain?: string;
        /** Additional tag-level extraction results when returned by the API. */
        tags?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Retrieve a site's metadata through the OpenGraph.io Site endpoint with cache, proxy, render, and retry controls. */
    "opengraph_io.scrape_site": {
      input: {
        /**
         * The site URL to inspect.
         * @format uri
         */
        site: string;
        /** Whether cached results may be returned when available. */
        cacheOk?: boolean;
        /** Whether the page should be rendered in a browser before extraction. */
        fullRender?: boolean;
        /** Whether a proxy should be used for the request. */
        useProxy?: boolean;
        /** Whether a residential proxy should be used when available. */
        usePremium?: boolean;
        /** Whether a mobile-grade proxy should be used when available. */
        useSuperior?: boolean;
        /** Whether AI-enhanced metadata extraction should be enabled. */
        useAi?: boolean;
        /**
         * The maximum accepted cache age in seconds.
         * @minimum 0
         */
        maxCacheAge?: number;
        /** The Accept-Language header value sent to the target site. */
        acceptLang?: string;
        /** Whether OpenGraph.io may automatically decide whether to use a proxy. */
        autoProxy?: boolean;
        /** Whether OpenGraph.io may automatically decide whether full rendering is needed. */
        autoRender?: boolean;
        /** Whether OpenGraph.io should retry with fallback transport strategies. */
        retry?: boolean;
        /**
         * The maximum number of retry attempts.
         * @minimum 0
         */
        maxRetries?: number;
        /** Whether retries may escalate to more expensive fallback strategies. */
        retryEscalate?: boolean;
        /** The ISO 3166-1 alpha-2 country code to use for proxy egress. */
        proxyCountry?: string;
        /** A reserved compatibility flag. The current official Site endpoint does not expose a separate scrape mode, so this value is ignored. */
        scrape?: boolean;
      };
      output: {
        /** The combined metadata inferred from Open Graph, Twitter Card, and HTML signals. */
        hybridGraph?: Record<string, unknown>;
        /** The raw Open Graph fields returned by OpenGraph.io. */
        openGraph?: Record<string, unknown>;
        /** The raw Twitter Card fields returned by OpenGraph.io. */
        twitterCard?: Record<string, unknown>;
        /** Metadata inferred from ordinary HTML when explicit social tags are missing. */
        htmlInferred?: Record<string, unknown>;
        /** The oEmbed payload returned for the page. */
        oEmbed?: Record<string, unknown>;
        /** The final URL that OpenGraph.io resolved after redirects. */
        requestUrl?: string;
        /** Information about the upstream request performed by OpenGraph.io. */
        requestInfo?: {
          /** The host that responded to the request. */
          host?: string;
          /** The number of redirects followed while fetching the URL. */
          redirects?: number;
          /** The HTTP response code returned upstream. */
          responseCode?: number;
          /** The upstream response Content-Type header when available. */
          responseContentType?: string;
          [key: string]: unknown;
        };
        /** Whether the result came from cache. */
        cached?: boolean;
        createdAt?: string | null;
        /** Retry information returned by OpenGraph.io. */
        retryInfo?: Record<string, unknown>;
        /** AI safety metadata returned by OpenGraph.io. */
        aiSafety?: Record<string, unknown>;
        /** The domain extracted from the requested URL. */
        domain?: string;
        /** Additional tag-level extraction results when returned by the API. */
        tags?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Fetch the raw HTML for a page through the OpenGraph.io Scrape endpoint with optional render and proxy controls. */
    "opengraph_io.scrape_url": {
      input: {
        /**
         * The page URL to scrape for raw HTML.
         * @format uri
         */
        url: string;
        /** Whether cached results may be returned when available. */
        cacheOk?: boolean;
        /** Whether the page should be rendered in a browser before scraping. */
        fullRender?: boolean;
        /** Whether a proxy should be used for the request. */
        useProxy?: boolean;
        /** Whether a residential proxy should be used when available. */
        usePremium?: boolean;
        /** Whether a mobile-grade proxy should be used when available. */
        useSuperior?: boolean;
        /** The Accept-Language header value sent to the target site. */
        acceptLang?: string;
        /** Whether OpenGraph.io may automatically decide whether to use a proxy. */
        autoProxy?: boolean;
        /** Whether OpenGraph.io may automatically decide whether full rendering is needed. */
        autoRender?: boolean;
        /** Whether OpenGraph.io should retry with fallback transport strategies. */
        retry?: boolean;
      };
      output: {
        /** The raw HTML content returned for the page. */
        htmlContent: string;
        /** Information about the upstream request performed by OpenGraph.io. */
        requestInfo?: {
          /** The host that responded to the request. */
          host?: string;
          /** The number of redirects followed while fetching the URL. */
          redirects?: number;
          /** The HTTP response code returned upstream. */
          responseCode?: number;
          /** The upstream response Content-Type header when available. */
          responseContentType?: string;
          [key: string]: unknown;
        };
        /** Retry information returned by OpenGraph.io. */
        retryInfo?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
