import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current Umami user for the configured API token. */
    "umami.get_current_user": {
      input: Record<string, never>;
      output: {
        /** Umami user profile. */
        user: {
          /** User ID. */
          id?: string;
          /** Username. */
          username?: string;
          /** User role. */
          role?: string;
          /** Whether the user has administrator privileges. */
          isAdmin?: boolean;
          [key: string]: unknown;
        };
        /** Raw Umami response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get grouped Umami website metrics such as URLs, referrers, browsers, or countries. */
    "umami.get_metrics": {
      input: {
        /** The Umami website ID. */
        websiteId: string;
        /**
         * Start timestamp in milliseconds since the Unix epoch.
         * @minimum 0
         */
        startAt: number;
        /**
         * End timestamp in milliseconds since the Unix epoch.
         * @minimum 0
         */
        endAt: number;
        /** IANA timezone name used by Umami for date grouping. */
        timezone: string;
        /** URL path filter for the query. */
        url?: string;
        /** Referrer filter for the query. */
        referrer?: string;
        /** Page title filter for the query. */
        title?: string;
        /** Host filter for the query. */
        host?: string;
        /** Operating system filter for the query. */
        os?: string;
        /** Browser filter for the query. */
        browser?: string;
        /** Device filter for the query. */
        device?: string;
        /** Country filter for the query. */
        country?: string;
        /** Region filter for the query. */
        region?: string;
        /** City filter for the query. */
        city?: string;
        /** Website metric dimension to return. */
        type: "url" | "referrer" | "browser" | "os" | "device" | "country" | "region" | "city" | "language" | "event";
        /**
         * Maximum number of metric rows to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Metric rows returned by Umami. */
        metrics: Array<{
          /** Metric dimension value returned by Umami. */
          x?: unknown;
          /** Metric count returned by Umami. */
          y?: number;
          [key: string]: unknown;
        }>;
        /** Raw Umami response array. */
        raw: Array<unknown>;
      };
    };
    /** Get Umami pageview and session timeseries for a website. */
    "umami.get_pageviews": {
      input: {
        /** The Umami website ID. */
        websiteId: string;
        /**
         * Start timestamp in milliseconds since the Unix epoch.
         * @minimum 0
         */
        startAt: number;
        /**
         * End timestamp in milliseconds since the Unix epoch.
         * @minimum 0
         */
        endAt: number;
        /** IANA timezone name used by Umami for date grouping. */
        timezone: string;
        /** URL path filter for the query. */
        url?: string;
        /** Referrer filter for the query. */
        referrer?: string;
        /** Page title filter for the query. */
        title?: string;
        /** Host filter for the query. */
        host?: string;
        /** Operating system filter for the query. */
        os?: string;
        /** Browser filter for the query. */
        browser?: string;
        /** Device filter for the query. */
        device?: string;
        /** Country filter for the query. */
        country?: string;
        /** Region filter for the query. */
        region?: string;
        /** City filter for the query. */
        city?: string;
        /** Time unit used for timeseries grouping. */
        unit?: "hour" | "day" | "month" | "year";
      };
      output: {
        /** Raw Umami response payload. */
        pageviews: Record<string, unknown>;
        /** Raw Umami response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get realtime active visitor data for an Umami website. */
    "umami.get_realtime": {
      input: {
        /** The Umami website ID. */
        websiteId: string;
      };
      output: {
        /** Raw Umami response payload. */
        realtime: Record<string, unknown>;
        /** Raw Umami response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get metadata for a single Umami website. */
    "umami.get_website": {
      input: {
        /** The Umami website ID. */
        websiteId: string;
      };
      output: {
        /** Umami website. */
        website: {
          /** Website ID. */
          id?: string;
          /** Website name. */
          name?: string;
          /** Website domain. */
          domain?: string;
          /** Public share ID when sharing is enabled. */
          shareId?: string | null;
          [key: string]: unknown;
        };
        /** Raw Umami response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get aggregate pageview, visitor, visit, bounce, and time statistics for a website. */
    "umami.get_website_stats": {
      input: {
        /** The Umami website ID. */
        websiteId: string;
        /**
         * Start timestamp in milliseconds since the Unix epoch.
         * @minimum 0
         */
        startAt: number;
        /**
         * End timestamp in milliseconds since the Unix epoch.
         * @minimum 0
         */
        endAt: number;
        /** IANA timezone name used by Umami for date grouping. */
        timezone: string;
        /** URL path filter for the query. */
        url?: string;
        /** Referrer filter for the query. */
        referrer?: string;
        /** Page title filter for the query. */
        title?: string;
        /** Host filter for the query. */
        host?: string;
        /** Operating system filter for the query. */
        os?: string;
        /** Browser filter for the query. */
        browser?: string;
        /** Device filter for the query. */
        device?: string;
        /** Country filter for the query. */
        country?: string;
        /** Region filter for the query. */
        region?: string;
        /** City filter for the query. */
        city?: string;
      };
      output: {
        /** Umami website statistics. */
        stats: {
          /** Pageview count or comparison object returned by Umami. */
          pageviews?: unknown;
          /** Visitor count or comparison object returned by Umami. */
          visitors?: unknown;
          /** Visit count or comparison object returned by Umami. */
          visits?: unknown;
          /** Bounce count or comparison object returned by Umami. */
          bounces?: unknown;
          /** Total time count or comparison object returned by Umami. */
          totaltime?: unknown;
          [key: string]: unknown;
        };
        /** Raw Umami response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List tracked Umami events for a website within a time range. */
    "umami.list_events": {
      input: {
        /** The Umami website ID. */
        websiteId: string;
        /**
         * Start timestamp in milliseconds since the Unix epoch.
         * @minimum 0
         */
        startAt: number;
        /**
         * End timestamp in milliseconds since the Unix epoch.
         * @minimum 0
         */
        endAt: number;
        /** IANA timezone name used by Umami for date grouping. */
        timezone: string;
        /** URL path filter for the query. */
        url?: string;
        /** Referrer filter for the query. */
        referrer?: string;
        /** Page title filter for the query. */
        title?: string;
        /** Host filter for the query. */
        host?: string;
        /** Operating system filter for the query. */
        os?: string;
        /** Browser filter for the query. */
        browser?: string;
        /** Device filter for the query. */
        device?: string;
        /** Country filter for the query. */
        country?: string;
        /** Region filter for the query. */
        region?: string;
        /** City filter for the query. */
        city?: string;
        /** Search query filter for the endpoint. */
        query?: string;
        /**
         * One-based page number for paginated Umami endpoints.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of items to return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Events returned by Umami. */
        events: Array<{
          /** Event ID. */
          id?: string;
          /** Website ID. */
          websiteId?: string;
          /** Session ID. */
          sessionId?: string;
          /** Event name. */
          eventName?: string;
          /** URL path associated with the event. */
          urlPath?: string;
          /** Event creation timestamp returned by Umami. */
          createdAt?: string;
          [key: string]: unknown;
        }>;
        /**
         * Total number of events matching the query.
         * @minimum 0
         */
        count: number;
        /**
         * Current page number.
         * @exclusiveMinimum 0
         */
        page: number;
        /**
         * Page size used by Umami.
         * @exclusiveMinimum 0
         */
        pageSize: number;
        /** Raw Umami event list response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Umami websites available to the configured API token. */
    "umami.list_websites": {
      input: {
        /** Search query filter for the endpoint. */
        query?: string;
        /**
         * One-based page number for paginated Umami endpoints.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of items to return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** Websites returned by Umami. */
        websites: Array<{
          /** Website ID. */
          id?: string;
          /** Website name. */
          name?: string;
          /** Website domain. */
          domain?: string;
          /** Public share ID when sharing is enabled. */
          shareId?: string | null;
          [key: string]: unknown;
        }>;
        /**
         * Total number of websites matching the query.
         * @minimum 0
         */
        count: number;
        /**
         * Current page number.
         * @exclusiveMinimum 0
         */
        page: number;
        /**
         * Page size used by Umami.
         * @exclusiveMinimum 0
         */
        pageSize: number;
        /** Paginated Umami websites response. */
        raw: {
          /** Websites returned by Umami. */
          data?: Array<{
            /** Website ID. */
            id?: string;
            /** Website name. */
            name?: string;
            /** Website domain. */
            domain?: string;
            /** Public share ID when sharing is enabled. */
            shareId?: string | null;
            [key: string]: unknown;
          }>;
          /**
           * Total number of websites matching the query.
           * @minimum 0
           */
          count?: number;
          /**
           * Current page number.
           * @exclusiveMinimum 0
           */
          page?: number;
          /**
           * Page size used by Umami.
           * @exclusiveMinimum 0
           */
          pageSize?: number;
          [key: string]: unknown;
        };
      };
    };
  }
}
