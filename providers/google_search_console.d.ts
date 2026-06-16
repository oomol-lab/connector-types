import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a property to the connected account's Search Console site set. */
    "google_search_console.add_site": {
      input: {
        /**
         * The site URL exactly as Search Console stores it, such as https://www.example.com/ or sc-domain:example.com.
         * @minLength 1
         */
        siteUrl: string;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: true;
      };
    };
    /** Remove a property from the connected account's Search Console site set. */
    "google_search_console.delete_site": {
      input: {
        /**
         * The site URL exactly as Search Console stores it, such as https://www.example.com/ or sc-domain:example.com.
         * @minLength 1
         */
        siteUrl: string;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: true;
      };
    };
    /** Delete a sitemap from a Search Console property. */
    "google_search_console.delete_sitemap": {
      input: {
        /**
         * The site URL exactly as Search Console stores it, such as https://www.example.com/ or sc-domain:example.com.
         * @minLength 1
         */
        siteUrl: string;
        /**
         * The full sitemap URL to inspect, submit, or delete.
         * @minLength 1
         */
        feedpath: string;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: true;
      };
    };
    /** Fetch one Search Console property and the current account permission level. */
    "google_search_console.get_site": {
      input: {
        /**
         * The site URL exactly as Search Console stores it, such as https://www.example.com/ or sc-domain:example.com.
         * @minLength 1
         */
        siteUrl: string;
      };
      output: {
        /** A Search Console property entry. */
        site: {
          /** The Search Console property URL. */
          siteUrl: string;
          /** The current account's permission level for this property. */
          permissionLevel: string;
        };
      };
    };
    /** Fetch one Search Console sitemap by property URL and sitemap URL. */
    "google_search_console.get_sitemap": {
      input: {
        /**
         * The site URL exactly as Search Console stores it, such as https://www.example.com/ or sc-domain:example.com.
         * @minLength 1
         */
        siteUrl: string;
        /**
         * The full sitemap URL to inspect, submit, or delete.
         * @minLength 1
         */
        feedpath: string;
      };
      output: {
        /** A Search Console sitemap resource. */
        sitemap: {
          /** The full sitemap URL. */
          path: string;
          /** When this sitemap was last submitted. */
          lastSubmitted: string | null;
          /** Whether this sitemap is pending processing. */
          isPending: boolean | null;
          /** Whether this sitemap is a sitemap index. */
          isSitemapsIndex: boolean | null;
          /** The sitemap type reported by Search Console. */
          type: string | null;
          /** When Google last downloaded this sitemap. */
          lastDownloaded: string | null;
          /** Warning count reported for this sitemap. */
          warnings: string | null;
          /** Error count reported for this sitemap. */
          errors: string | null;
          /** Content counts reported for this sitemap. */
          contents: Array<{
            /** The sitemap content type. */
            type: string | null;
            /** The number of submitted URLs for this content type. */
            submitted: string | null;
            /** The number of indexed URLs for this content type. */
            indexed: string | null;
          }>;
        };
      };
    };
    /** Inspect the indexed status of a URL under a Search Console property using Google's URL Inspection API. */
    "google_search_console.inspect_url": {
      input: {
        /**
         * The site URL exactly as Search Console stores it, such as https://www.example.com/ or sc-domain:example.com.
         * @minLength 1
         */
        siteUrl: string;
        /**
         * The fully qualified URL to inspect. It must be under the property specified by siteUrl.
         * @minLength 1
         */
        inspectionUrl: string;
        /**
         * An optional IETF BCP-47 language code for translated issue messages, such as en-US or de-CH.
         * @minLength 1
         */
        languageCode?: string;
      };
      output: {
        /** The URL inspection result returned by Google, including index status, AMP, mobile usability, and rich results fields when present. */
        inspectionResult: Record<string, unknown>;
      };
    };
    /** List sitemaps submitted for a Search Console property. */
    "google_search_console.list_sitemaps": {
      input: {
        /**
         * The site URL exactly as Search Console stores it, such as https://www.example.com/ or sc-domain:example.com.
         * @minLength 1
         */
        siteUrl: string;
        /**
         * Restrict results to a sitemap index URL.
         * @minLength 1
         */
        sitemapIndex?: string;
      };
      output: {
        /** Sitemaps returned by Search Console. */
        sitemaps: Array<{
          /** The full sitemap URL. */
          path: string;
          /** When this sitemap was last submitted. */
          lastSubmitted: string | null;
          /** Whether this sitemap is pending processing. */
          isPending: boolean | null;
          /** Whether this sitemap is a sitemap index. */
          isSitemapsIndex: boolean | null;
          /** The sitemap type reported by Search Console. */
          type: string | null;
          /** When Google last downloaded this sitemap. */
          lastDownloaded: string | null;
          /** Warning count reported for this sitemap. */
          warnings: string | null;
          /** Error count reported for this sitemap. */
          errors: string | null;
          /** Content counts reported for this sitemap. */
          contents: Array<{
            /** The sitemap content type. */
            type: string | null;
            /** The number of submitted URLs for this content type. */
            submitted: string | null;
            /** The number of indexed URLs for this content type. */
            indexed: string | null;
          }>;
        }>;
      };
    };
    /** List Search Console properties visible to the connected Google account. */
    "google_search_console.list_sites": {
      input: Record<string, never>;
      output: {
        /** Search Console properties returned by the API. */
        sites: Array<{
          /** The Search Console property URL. */
          siteUrl: string;
          /** The current account's permission level for this property. */
          permissionLevel: string;
        }>;
      };
    };
    /** Query Search Console performance data for a property across dates, dimensions, filters, and search types. */
    "google_search_console.query_search_analytics": {
      input: {
        /**
         * The site URL exactly as Search Console stores it, such as https://www.example.com/ or sc-domain:example.com.
         * @minLength 1
         */
        siteUrl: string;
        /**
         * The inclusive start date for the query in YYYY-MM-DD format.
         * @format date
         */
        startDate: string;
        /**
         * The inclusive end date for the query in YYYY-MM-DD format.
         * @format date
         */
        endDate: string;
        /** Dimensions used to group result rows. */
        dimensions?: Array<"date" | "hour" | "query" | "page" | "country" | "device" | "searchAppearance">;
        /** The Google search type to query. */
        type?: "web" | "image" | "video" | "news" | "discover" | "googleNews";
        /** Dimension filter groups applied to the query. */
        dimensionFilterGroups?: Array<{
          /** How filters in the group are combined. */
          groupType?: "and";
          /** Filters applied within this group. */
          filters: Array<{
            /** A Search Analytics dimension to filter by. */
            dimension: "date" | "hour" | "query" | "page" | "country" | "device" | "searchAppearance";
            /** The filter operator to apply to the dimension. */
            operator: "contains" | "equals" | "notContains" | "notEquals" | "includingRegex" | "excludingRegex";
            /**
             * The expression to match against the selected dimension.
             * @minLength 1
             */
            expression: string;
          }>;
        }>;
        /** How Search Console aggregates query results. */
        aggregationType?: "auto" | "byNewsShowcasePanel" | "byPage" | "byProperty";
        /**
         * Maximum rows to return. Search Console accepts up to 25,000.
         * @minimum 1
         * @maximum 25000
         */
        rowLimit?: number;
        /**
         * Zero-based first row offset for pagination.
         * @minimum 0
         */
        startRow?: number;
        /** Whether to include fresh or final-only data. */
        dataState?: "final" | "all" | "hourly_all";
      };
      output: {
        /** Rows returned by Search Console. */
        rows: Array<{
          /** Dimension values for this row, in the same order as the requested dimensions. */
          keys: Array<string>;
          /** Click count for this row. */
          clicks: number;
          /** Impression count for this row. */
          impressions: number;
          /** Click-through rate for this row. */
          ctr: number;
          /** Average position for this row. */
          position: number;
        }>;
        /** The aggregation type used in the response when Search Console returns one. */
        responseAggregationType: string | null;
        /** Metadata returned with Search Analytics data. */
        metadata: {
          /** The first date with incomplete data when Search Console reports one. */
          firstIncompleteDate: string | null;
          /** The first hour with incomplete hourly data when Search Console reports one. */
          firstIncompleteHour: string | null;
        };
      };
    };
    /** Submit a sitemap URL for a Search Console property. */
    "google_search_console.submit_sitemap": {
      input: {
        /**
         * The site URL exactly as Search Console stores it, such as https://www.example.com/ or sc-domain:example.com.
         * @minLength 1
         */
        siteUrl: string;
        /**
         * The full sitemap URL to inspect, submit, or delete.
         * @minLength 1
         */
        feedpath: string;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: true;
      };
    };
  }
}
