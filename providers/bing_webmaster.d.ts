import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Block a page or directory, including cache-only and full-removal modes. */
    "bing_webmaster.add_blocked_url": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /** The URL block record. Preserve returned metadata when removing an existing block. */
        blockedUrl: {
          /** The URL reported by Bing. */
          Url: string;
          /** Blocked entity: 0 page, 1 directory. */
          EntityType: 0 | 1;
          /** Removal request: 0 cached copy only, 1 full removal. */
          RequestType: 0 | 1;
          /** The date string in the upstream WCF /Date(milliseconds-offset)/ format. */
          Date?: string;
          /** Days until the block expires, as supplied by Bing. */
          DaysToExpire?: number;
        };
      };
      output: {
        /** Whether Bing accepted the operation. */
        success: boolean;
      };
    };
    /** Add a page connected to the site. */
    "bing_webmaster.add_connected_page": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * The connected page URL supplied to Bing as masterUrl.
         * @format uri
         */
        masterUrl: string;
      };
      output: {
        /** Whether Bing accepted the operation. */
        success: boolean;
      };
    };
    /** Set country or region targeting for a URL scope. */
    "bing_webmaster.add_country_region_settings": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /** Country or region targeting settings. */
        settings: {
          /** The URL reported by Bing. */
          Url: string;
          /** The two-letter ISO country code. */
          TwoLetterIsoCountryCode: string;
          /** Target scope: 0 page, 1 directory, 2 domain, 3 subdomain. */
          Type: 0 | 1 | 2 | 3;
          /** The date string in the upstream WCF /Date(milliseconds-offset)/ format. */
          Date?: string;
        };
      };
      output: {
        /** Whether Bing accepted the operation. */
        success: boolean;
      };
    };
    /** Block a deep link for a search URL and market. */
    "bing_webmaster.add_deep_link_block": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * The Bing market identifier, such as en-US.
         * @minLength 1
         */
        market: string;
        /** The search URL supplied to Bing. */
        searchUrl: string;
        /** The deep link URL to block. */
        deepLinkUrl: string;
      };
      output: {
        /** Whether Bing accepted the operation. */
        success: boolean;
      };
    };
    /** Add a URL normalization parameter. */
    "bing_webmaster.add_query_parameter": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * The URL parameter name; Bing permits unreserved characters and colon.
         * @minLength 1
         */
        queryParameter: string;
      };
      output: {
        /** Whether Bing accepted the operation. */
        success: boolean;
      };
    };
    /** Add a site to the account. Ownership must be verified separately. */
    "bing_webmaster.add_site": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
      };
      output: {
        /** Whether Bing accepted the operation. */
        success: boolean;
      };
    };
    /** Delegate site access to a user with administrator, read-only or read-write permissions. */
    "bing_webmaster.add_site_roles": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * The site URL whose access is delegated.
         * @format uri
         */
        delegatedUrl: string;
        /**
         * The email of the delegated user.
         * @format email
         */
        userEmail: string;
        /**
         * The site authentication code used for delegation.
         * @minLength 1
         */
        authenticationCode: string;
        /** Whether to grant administrator access. */
        isAdministrator: boolean;
        /** Whether to grant read-only access. */
        isReadOnly: boolean;
      };
      output: {
        /** Whether Bing accepted the operation. */
        success: boolean;
      };
    };
    /** Get the remaining content submission quota. */
    "bing_webmaster.get_content_submission_quota": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
      };
      output: {
        /** The remaining content submission quota. Additional Bing fields are preserved. */
        quota: {
          /** The remaining daily submission quota. */
          DailyQuota?: number;
          /** The remaining monthly submission quota. */
          MonthlyQuota?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List URLs with crawl issues. Resolved issues may take several days to disappear. */
    "bing_webmaster.get_crawl_issues": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
      };
      output: {
        /** The records returned by Bing. */
        issues: Array<{
          /** The affected page URL. */
          Url?: string;
          /** The HTTP response code. */
          HttpCode?: number;
          /** The Bing CrawlIssues flags bitmask. */
          Issues?: number;
          /** The number of inbound links. */
          InLinks?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Read the current crawl settings. */
    "bing_webmaster.get_crawl_settings": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
      };
      output: {
        /** The current crawl settings. */
        settings: {
          /** Hourly crawl rates, in the upstream order. */
          CrawlRate?: Array<number>;
          /** Whether AJAX crawling is enabled, as exposed by the endpoint example. */
          AjaxEnabled?: boolean;
          /** Whether crawl boost is available. */
          CrawlBoostAvailable?: boolean;
          /** Whether crawl boost is enabled. */
          CrawlBoostEnabled?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Get daily crawl statistics for the last six months. */
    "bing_webmaster.get_crawl_stats": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
      };
      output: {
        /** The records returned by Bing. */
        stats: Array<{
          /** The upstream date string, typically /Date(milliseconds-offset)/ in WCF JSON format. */
          Date?: string;
          /** Responses with other HTTP codes. */
          AllOtherCodes?: number;
          /** URLs blocked by robots.txt. */
          BlockedByRobotsTxt?: number;
          /** Responses with 2xx codes. */
          Code2xx?: number;
          /** Responses with HTTP 301. */
          Code301?: number;
          /** Responses with HTTP 302. */
          Code302?: number;
          /** Responses with 4xx codes. */
          Code4xx?: number;
          /** Responses with 5xx codes. */
          Code5xx?: number;
          /** URLs reported to contain malware. */
          ContainsMalware?: number;
          /** The number of crawl errors. */
          CrawlErrors?: number;
          /** The number of crawled pages. */
          CrawledPages?: number;
          /** The number of indexed pages. */
          InIndex?: number;
          /** The number of inbound links. */
          InLinks?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Read the document, headers and status of a fetched URL. */
    "bing_webmaster.get_fetched_url_details": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * The fetched page URL.
         * @format uri
         */
        url: string;
      };
      output: {
        /** Details of a fetched URL. */
        details: {
          /** The date string in the upstream WCF /Date(milliseconds-offset)/ format. */
          Date?: string;
          /** The fetched document returned by Bing. */
          Document?: string;
          /** The fetched response headers returned by Bing. */
          Headers?: string;
          /** The upstream fetch status string; no undocumented terminal states are inferred. */
          Status?: string;
          /** The URL reported by Bing. */
          Url?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get historical keyword statistics for a country and language. */
    "bing_webmaster.get_keyword_stats": {
      input: {
        /**
         * The keyword to research.
         * @minLength 1
         */
        q: string;
        /** The country code used by Bing keyword research. */
        country: string;
        /** The language code used by Bing keyword research. */
        language: string;
      };
      output: {
        /** The records returned by Bing. */
        stats: Array<{
          /** Broad-match keyword impressions. */
          BroadImpressions?: number;
          /** Keyword impressions. */
          Impressions?: number;
          /** The date string in the upstream WCF /Date(milliseconds-offset)/ format. */
          Date?: string;
          /** The keyword text. */
          Query?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get search queries and traffic for a specific page. */
    "bing_webmaster.get_page_query_stats": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * The page URL.
         * @format uri
         */
        page: string;
      };
      output: {
        /** The records returned by Bing. */
        stats: Array<{
          /** The upstream date string, typically /Date(milliseconds-offset)/ in WCF JSON format. */
          Date?: string;
          /** The number of clicks. */
          Clicks?: number;
          /** The number of impressions. */
          Impressions?: number;
          /** The average position of clicked results. */
          AvgClickPosition?: number;
          /** The average position of displayed results. */
          AvgImpressionPosition?: number;
          /** The search query, or the page URL for page statistics. */
          Query?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get traffic and position statistics for top pages. The Query field contains the page URL. */
    "bing_webmaster.get_page_stats": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
      };
      output: {
        /** The records returned by Bing. */
        stats: Array<{
          /** The upstream date string, typically /Date(milliseconds-offset)/ in WCF JSON format. */
          Date?: string;
          /** The number of clicks. */
          Clicks?: number;
          /** The number of impressions. */
          Impressions?: number;
          /** The average position of clicked results. */
          AvgClickPosition?: number;
          /** The average position of displayed results. */
          AvgImpressionPosition?: number;
          /** The search query, or the page URL for page statistics. */
          Query?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get detailed statistics for a search query and page. */
    "bing_webmaster.get_query_page_detail_stats": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * The search query.
         * @minLength 1
         */
        query: string;
        /**
         * The page URL.
         * @format uri
         */
        page: string;
      };
      output: {
        /** The records returned by Bing. */
        stats: Array<{
          /** The number of clicks. */
          Clicks?: number;
          /** The number of impressions. */
          Impressions?: number;
          /** The date string in the upstream WCF /Date(milliseconds-offset)/ format. */
          Date?: string;
          /** The search result position. */
          Position?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get page statistics for a search query. */
    "bing_webmaster.get_query_page_stats": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * The search query.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** The records returned by Bing. */
        stats: Array<{
          /** The upstream date string, typically /Date(milliseconds-offset)/ in WCF JSON format. */
          Date?: string;
          /** The number of clicks. */
          Clicks?: number;
          /** The number of impressions. */
          Impressions?: number;
          /** The average position of clicked results. */
          AvgClickPosition?: number;
          /** The average position of displayed results. */
          AvgImpressionPosition?: number;
          /** The search query, or the page URL for page statistics. */
          Query?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get traffic and position statistics for top search queries. Bing updates this report weekly. */
    "bing_webmaster.get_query_stats": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
      };
      output: {
        /** The records returned by Bing. */
        stats: Array<{
          /** The upstream date string, typically /Date(milliseconds-offset)/ in WCF JSON format. */
          Date?: string;
          /** The number of clicks. */
          Clicks?: number;
          /** The number of impressions. */
          Impressions?: number;
          /** The average position of clicked results. */
          AvgClickPosition?: number;
          /** The average position of displayed results. */
          AvgImpressionPosition?: number;
          /** The search query, or the page URL for page statistics. */
          Query?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get traffic statistics for a search query. */
    "bing_webmaster.get_query_traffic_stats": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * The search query.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** The records returned by Bing. */
        stats: Array<{
          /** The upstream date string, typically /Date(milliseconds-offset)/ in WCF JSON format. */
          Date?: string;
          /** The number of clicks. */
          Clicks?: number;
          /** The number of impressions. */
          Impressions?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get daily site impressions and clicks across Bing search verticals. */
    "bing_webmaster.get_rank_and_traffic_stats": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
      };
      output: {
        /** The records returned by Bing. */
        stats: Array<{
          /** The upstream date string, typically /Date(milliseconds-offset)/ in WCF JSON format. */
          Date?: string;
          /** The number of clicks. */
          Clicks?: number;
          /** The number of impressions. */
          Impressions?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List feed details within a sitemap index. */
    "bing_webmaster.get_sitemap_details": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * The sitemap index URL.
         * @format uri
         */
        feedUrl: string;
      };
      output: {
        /** The records returned by Bing. */
        sitemaps: Array<{
          /** The sitemap or feed URL. */
          Url?: string;
          /** Whether the feed is compressed. */
          Compressed?: boolean;
          /** The feed file size in bytes. */
          FileSize?: number;
          /** The upstream date string, typically /Date(milliseconds-offset)/ in WCF JSON format. */
          LastCrawled?: string;
          /** The upstream date string, typically /Date(milliseconds-offset)/ in WCF JSON format. */
          Submitted?: string;
          /** The feed processing status. */
          Status?: string;
          /** The feed format reported by Bing. */
          Type?: string;
          /** The number of URLs in the feed. */
          UrlCount?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get index and crawl information for a page or directory. */
    "bing_webmaster.get_url_info": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * A Bing URL or directory identifier, including values such as example.com or domain:example.com.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Index information for a URL or directory. */
        info: {
          /** The URL reported by Bing. */
          Url?: string;
          /** The number of anchors. */
          AnchorCount?: number;
          /** The date string in the upstream WCF /Date(milliseconds-offset)/ format. */
          DiscoveryDate?: string;
          /** The document size reported by Bing. */
          DocumentSize?: number;
          /** The HTTP status reported by Bing. */
          HttpStatus?: number;
          /** Whether this entry represents a page. */
          IsPage?: boolean;
          /** The date string in the upstream WCF /Date(milliseconds-offset)/ format. */
          LastCrawledDate?: string;
          /** The number of child URLs. */
          TotalChildUrlCount?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get the remaining URL submission quota before submitting URLs. */
    "bing_webmaster.get_url_submission_quota": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
      };
      output: {
        /** The remaining URL submission quota. Additional Bing fields are preserved. */
        quota: {
          /** The remaining daily submission quota. */
          DailyQuota?: number;
          /** The remaining monthly submission quota. */
          MonthlyQuota?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get traffic information for a page or directory. */
    "bing_webmaster.get_url_traffic_info": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * A Bing URL or directory identifier, including values such as example.com or domain:example.com.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** Traffic information for a URL or directory. */
        traffic: {
          /** The URL reported by Bing. */
          Url?: string;
          /** The number of clicks. */
          Clicks?: number;
          /** The number of impressions. */
          Impressions?: number;
          /** Whether this entry represents a page. */
          IsPage?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** List blocked pages and directories. */
    "bing_webmaster.list_blocked_urls": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
      };
      output: {
        /** The records returned by Bing. */
        blocks: Array<{
          /** The URL reported by Bing. */
          Url?: string;
          /** Blocked entity: 0 page, 1 directory. */
          EntityType?: 0 | 1;
          /** Removal request: 0 cached copy only, 1 full removal. */
          RequestType?: 0 | 1;
          /** The date string in the upstream WCF /Date(milliseconds-offset)/ format. */
          Date?: string;
          /** Days until the block expires, as supplied by Bing. */
          DaysToExpire?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List child URLs with filters. This read operation uses POST. */
    "bing_webmaster.list_child_url_info": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * A Bing URL or directory identifier, including values such as example.com or domain:example.com.
         * @minLength 1
         */
        url: string;
        /**
         * Zero-based result page. Request successive pages until no records remain.
         * @minimum 0
         */
        page: number;
        /** Filters for URLs in a directory. Omitted flags use the upstream default. */
        filterProperties: {
          /** Crawl date filter: 0 any, 1 last week, 2 last two weeks, 4 last three weeks. */
          CrawlDateFilter?: 0 | 1 | 2 | 4;
          /** Discovery date filter: 0 any, 1 last week, 2 last month. */
          DiscoveredDateFilter?: 0 | 1 | 2;
          /**
           * Document flags bitmask: 0 any, 1 blocked by robots.txt, 2 malware. Flags may be combined.
           * @minimum 0
           * @maximum 3
           */
          DocFlagsFilters?: number;
          /**
           * HTTP code flags bitmask: 1 2xx, 2 3xx, 4 301, 8 302, 16 4xx, 32 5xx, 64 other; 0 means any.
           * @minimum 0
           * @maximum 127
           */
          HttpCodeFilters?: number;
        };
      };
      output: {
        /** The records returned by Bing. */
        urls: Array<{
          /** The URL reported by Bing. */
          Url?: string;
          /** The number of anchors. */
          AnchorCount?: number;
          /** The date string in the upstream WCF /Date(milliseconds-offset)/ format. */
          DiscoveryDate?: string;
          /** The document size reported by Bing. */
          DocumentSize?: number;
          /** The HTTP status reported by Bing. */
          HttpStatus?: number;
          /** Whether this entry represents a page. */
          IsPage?: boolean;
          /** The date string in the upstream WCF /Date(milliseconds-offset)/ format. */
          LastCrawledDate?: string;
          /** The number of child URLs. */
          TotalChildUrlCount?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List traffic information for child URLs. */
    "bing_webmaster.list_child_url_traffic_info": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * A Bing URL or directory identifier, including values such as example.com or domain:example.com.
         * @minLength 1
         */
        url: string;
        /**
         * Zero-based result page. Request successive pages until no records remain.
         * @minimum 0
         */
        page: number;
      };
      output: {
        /** The records returned by Bing. */
        urls: Array<{
          /** The URL reported by Bing. */
          Url?: string;
          /** The number of clicks. */
          Clicks?: number;
          /** The number of impressions. */
          Impressions?: number;
          /** Whether this entry represents a page. */
          IsPage?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List pages connected to the site. */
    "bing_webmaster.list_connected_pages": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
      };
      output: {
        /** The records returned by Bing. */
        pages: Array<Record<string, unknown>>;
      };
    };
    /** List country and region targeting settings. */
    "bing_webmaster.list_country_region_settings": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
      };
      output: {
        /** The records returned by Bing. */
        settings: Array<{
          /** The URL reported by Bing. */
          Url?: string;
          /** The two-letter ISO country code. */
          TwoLetterIsoCountryCode?: string;
          /** Target scope: 0 page, 1 directory, 2 domain, 3 subdomain. */
          Type?: 0 | 1 | 2 | 3;
          /** The date string in the upstream WCF /Date(milliseconds-offset)/ format. */
          Date?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List deep link blocking rules. */
    "bing_webmaster.list_deep_link_blocks": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
      };
      output: {
        /** The records returned by Bing. */
        blocks: Array<Record<string, unknown>>;
      };
    };
    /** List URL fetch records, including fetched and expired flags. */
    "bing_webmaster.list_fetched_urls": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
      };
      output: {
        /** The records returned by Bing. */
        urls: Array<{
          /** The date string in the upstream WCF /Date(milliseconds-offset)/ format. */
          Date?: string;
          /** Whether this fetch entry has expired. */
          Expired?: boolean;
          /** Whether the URL has been fetched. */
          Fetched?: boolean;
          /** The URL reported by Bing. */
          Url?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List page inbound link counts with pagination. */
    "bing_webmaster.list_link_counts": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * Zero-based result page. Request successive pages until no records remain.
         * @minimum 0
         */
        page: number;
      };
      output: {
        /** A page of inbound link counts. */
        links: {
          /** The page link counts. */
          Links?: Array<{
            /** The number of inbound links. */
            Count?: number;
            /** The URL reported by Bing. */
            Url?: string;
            [key: string]: unknown;
          }>;
          /** The total number of result pages. */
          TotalPages?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List active page preview blocks. */
    "bing_webmaster.list_page_preview_blocks": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
      };
      output: {
        /** The records returned by Bing. */
        blocks: Array<Record<string, unknown>>;
      };
    };
    /** List URL query parameter normalization rules. */
    "bing_webmaster.list_query_parameters": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
      };
      output: {
        /** The records returned by Bing. */
        parameters: Array<{
          /** The date string in the upstream WCF /Date(milliseconds-offset)/ format. */
          Date?: string;
          /** Whether this normalization rule is enabled. */
          IsEnabled?: boolean;
          /** The URL query parameter name. */
          Parameter?: string;
          /** The rule source reported by Bing. */
          Source?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List site move records. */
    "bing_webmaster.list_site_moves": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
      };
      output: {
        /** The records returned by Bing. */
        moves: Array<{
          /** The source URL of the site move. */
          SourceUrl?: string;
          /** The destination URL of the site move. */
          TargetUrl?: string;
          /** Move scope: 0 domain, 1 host, 2 directory. */
          MoveScope?: 0 | 1 | 2;
          /** Move type: 0 local, 1 global. */
          MoveType?: 0 | 1;
          /** The date string in the upstream WCF /Date(milliseconds-offset)/ format. */
          Date?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List delegated site roles, optionally including subdomains. */
    "bing_webmaster.list_site_roles": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /** Whether to include roles for all subdomains. */
        includeAllSubdomains: boolean;
      };
      output: {
        /** The records returned by Bing. */
        roles: Array<{
          /** The date string in the upstream WCF /Date(milliseconds-offset)/ format. */
          Date?: string;
          /** The delegated site verification code. */
          DelegatedCode?: string;
          /** The owner email of the delegated verification code. */
          DelegatedCodeOwnerEmail?: string;
          /** The delegating user email. */
          DelegatorEmail?: string;
          /** The user receiving site access. */
          Email?: string;
          /** Whether the delegated access has expired. */
          Expired?: boolean;
          /** User role: 0 administrator, 1 read-only, 2 read-write. */
          Role?: 0 | 1 | 2;
          /** The URL reported by Bing. */
          Site?: string;
          /** The site used for ownership verification. */
          VerificationSite?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List top-level sitemaps and feeds registered for a site. */
    "bing_webmaster.list_sitemaps": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
      };
      output: {
        /** The records returned by Bing. */
        sitemaps: Array<{
          /** The sitemap or feed URL. */
          Url?: string;
          /** Whether the feed is compressed. */
          Compressed?: boolean;
          /** The feed file size in bytes. */
          FileSize?: number;
          /** The upstream date string, typically /Date(milliseconds-offset)/ in WCF JSON format. */
          LastCrawled?: string;
          /** The upstream date string, typically /Date(milliseconds-offset)/ in WCF JSON format. */
          Submitted?: string;
          /** The feed processing status. */
          Status?: string;
          /** The feed format reported by Bing. */
          Type?: string;
          /** The number of URLs in the feed. */
          UrlCount?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the sites registered in the Bing Webmaster account, including unverified sites. */
    "bing_webmaster.list_sites": {
      input: Record<string, never>;
      output: {
        /** The records returned by Bing. */
        sites: Array<{
          /** The registered site URL. */
          Url?: string;
          /** Whether ownership of the site is verified. */
          IsVerified?: boolean;
          /** The site ownership verification code. */
          AuthenticationCode?: string;
          /** The DNS record used to verify site ownership. */
          DnsVerificationCode?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List inbound links and anchor text for a page. */
    "bing_webmaster.list_url_links": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * The page URL whose inbound links are requested.
         * @format uri
         */
        link: string;
        /**
         * Zero-based result page. Request successive pages until no records remain.
         * @minimum 0
         */
        page: number;
      };
      output: {
        /** A page of inbound link details. */
        links: {
          /** The inbound links. */
          Details?: Array<{
            /** The anchor text of the inbound link. */
            AnchorText?: string;
            /** The URL reported by Bing. */
            Url?: string;
            [key: string]: unknown;
          }>;
          /** The total number of result pages. */
          TotalPages?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Remove an existing page or directory block. */
    "bing_webmaster.remove_blocked_url": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /** The URL block record. Preserve returned metadata when removing an existing block. */
        blockedUrl: {
          /** The URL reported by Bing. */
          Url: string;
          /** Blocked entity: 0 page, 1 directory. */
          EntityType: 0 | 1;
          /** Removal request: 0 cached copy only, 1 full removal. */
          RequestType: 0 | 1;
          /** The date string in the upstream WCF /Date(milliseconds-offset)/ format. */
          Date?: string;
          /** Days until the block expires, as supplied by Bing. */
          DaysToExpire?: number;
        };
      };
      output: {
        /** Whether Bing accepted the operation. */
        success: boolean;
      };
    };
    /** Remove country or region targeting settings. */
    "bing_webmaster.remove_country_region_settings": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /** Country or region targeting settings. */
        settings: {
          /** The URL reported by Bing. */
          Url: string;
          /** The two-letter ISO country code. */
          TwoLetterIsoCountryCode: string;
          /** Target scope: 0 page, 1 directory, 2 domain, 3 subdomain. */
          Type: 0 | 1 | 2 | 3;
          /** The date string in the upstream WCF /Date(milliseconds-offset)/ format. */
          Date?: string;
        };
      };
      output: {
        /** Whether Bing accepted the operation. */
        success: boolean;
      };
    };
    /** Remove a deep link blocking rule. */
    "bing_webmaster.remove_deep_link_block": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * The Bing market identifier, such as en-US.
         * @minLength 1
         */
        market: string;
        /** The search URL supplied to Bing. */
        searchUrl: string;
        /** The deep link URL whose block is removed. */
        deepLinkUrl: string;
      };
      output: {
        /** Whether Bing accepted the operation. */
        success: boolean;
      };
    };
    /** Remove a page preview block. */
    "bing_webmaster.remove_page_preview_block": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * The page URL.
         * @format uri
         */
        url: string;
      };
      output: {
        /** Whether Bing accepted the operation. */
        success: boolean;
      };
    };
    /** Remove a URL normalization parameter. */
    "bing_webmaster.remove_query_parameter": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * The URL parameter name.
         * @minLength 1
         */
        queryParameter: string;
      };
      output: {
        /** Whether Bing accepted the operation. */
        success: boolean;
      };
    };
    /** Remove a site from the account. */
    "bing_webmaster.remove_site": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
      };
      output: {
        /** Whether Bing accepted the operation. */
        success: boolean;
      };
    };
    /** Remove a delegated site role. */
    "bing_webmaster.remove_site_role": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /** The site role record to remove, obtained from list_site_roles. */
        siteRole: {
          /** The date string in the upstream WCF /Date(milliseconds-offset)/ format. */
          Date?: string;
          /** The delegated site verification code. */
          DelegatedCode: string;
          /** The owner email of the delegated verification code. */
          DelegatedCodeOwnerEmail?: string;
          /** The delegating user email. */
          DelegatorEmail?: string;
          /** The user receiving site access. */
          Email: string;
          /** Whether the delegated access has expired. */
          Expired?: boolean;
          /** User role: 0 administrator, 1 read-only, 2 read-write. */
          Role: 0 | 1 | 2;
          /** The URL reported by Bing. */
          Site: string;
          /** The site used for ownership verification. */
          VerificationSite: string;
        };
      };
      output: {
        /** Whether Bing accepted the operation. */
        success: boolean;
      };
    };
    /** Remove a registered sitemap or feed. */
    "bing_webmaster.remove_sitemap": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * The sitemap or feed URL to remove.
         * @format uri
         */
        feedUrl: string;
      };
      output: {
        /** Whether Bing accepted the operation. */
        success: boolean;
      };
    };
    /** Save crawl settings for a site, replacing supplied settings. */
    "bing_webmaster.save_crawl_settings": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /** Crawl settings to save. Read current settings first to avoid overwriting unintended values. */
        crawlSettings: {
          /** Hourly crawl rates, in the upstream order. */
          CrawlRate: Array<number>;
          /** Whether AJAX crawling is enabled, as exposed by the endpoint example. */
          AjaxEnabled?: boolean;
          /** Whether crawl boost is available. */
          CrawlBoostAvailable?: boolean;
          /** Whether crawl boost is enabled. */
          CrawlBoostEnabled?: boolean;
        };
      };
      output: {
        /** Whether Bing accepted the operation. */
        success: boolean;
      };
    };
    /** Enable or disable a URL normalization parameter. */
    "bing_webmaster.set_query_parameter_enabled": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * The URL parameter name.
         * @minLength 1
         */
        queryParameter: string;
        /** Whether to enable this parameter rule. */
        isEnabled: boolean;
      };
      output: {
        /** Whether Bing accepted the operation. */
        success: boolean;
      };
    };
    /** Submit a site move between source and destination URLs. */
    "bing_webmaster.submit_site_move": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /** Settings for a site move. */
        settings: {
          /** The source URL of the site move. */
          SourceUrl: string;
          /** The destination URL of the site move. */
          TargetUrl: string;
          /** Move scope: 0 domain, 1 host, 2 directory. */
          MoveScope: 0 | 1 | 2;
          /** Move type: 0 local, 1 global. */
          MoveType: 0 | 1;
          /** The date string in the upstream WCF /Date(milliseconds-offset)/ format. */
          Date?: string;
        };
      };
      output: {
        /** Whether Bing accepted the operation. */
        success: boolean;
      };
    };
    /** Submit a sitemap, RSS 2.0, Atom 0.3, Atom 1.0, or text feed URL to Bing. */
    "bing_webmaster.submit_sitemap": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * The sitemap or feed URL for Bing to fetch.
         * @format uri
         */
        feedUrl: string;
      };
      output: {
        /** Whether Bing accepted the submission. This does not guarantee indexing. */
        submitted: boolean;
      };
    };
    /** Submit one URL to Bing for crawling, subject to the available submission quota. */
    "bing_webmaster.submit_url": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * The page URL to submit.
         * @format uri
         */
        url: string;
      };
      output: {
        /** Whether Bing accepted the submission. This does not guarantee indexing. */
        submitted: boolean;
      };
    };
    /** Submit up to 500 URLs to Bing in one request, subject to the available submission quota. */
    "bing_webmaster.submit_url_batch": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
        /**
         * Between 1 and 500 page URLs to submit.
         * @minItems 1
         * @maxItems 500
         */
        urlList: Array<string>;
      };
      output: {
        /** Whether Bing accepted the submission. This does not guarantee indexing. */
        submitted: boolean;
      };
    };
    /** Attempt to verify site ownership and return whether verification succeeded. */
    "bing_webmaster.verify_site": {
      input: {
        /**
         * The exact site URL registered in Bing Webmaster Tools, including its scheme.
         * @format uri
         */
        siteUrl: string;
      };
      output: {
        /** Whether Bing verified ownership of the site. */
        verified: boolean;
      };
    };
  }
}
