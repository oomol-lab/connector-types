import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new Short.io link on one of the authenticated domains. */
    "short_io.create_link": {
      input: {
        /**
         * Domain hostname that should own the new short link.
         * @minLength 1
         */
        domain: string;
        /**
         * Original destination URL to shorten.
         * @format uri
         */
        originalURL: string;
        /**
         * Optional custom path for the short link.
         * @minLength 1
         */
        path?: string;
        /**
         * Optional title for the short link.
         * @minLength 1
         */
        title?: string;
        /** Whether duplicate links to the same originalURL should be allowed. */
        allowDuplicates?: boolean;
      };
      output: {
        /** Unique identifier of the link. */
        id: string;
        /** String form of the Short.io link identifier. */
        idString?: string;
        /** Domain hostname used by the short link. */
        domain?: string;
        /** Numeric domain identifier associated with the short link. */
        DomainId?: number;
        /** Path segment of the short link. */
        path?: string;
        /** Optional title assigned to the short link. */
        title?: string;
        /** Tags assigned to the short link. */
        tags?: Array<string>;
        /** Original destination URL. */
        originalURL: string;
        /** Non-secure short URL returned by Short.io. */
        shortURL: string;
        /** Secure HTTPS short URL returned by Short.io. */
        secureShortURL: string;
        /** Whether the link is archived. */
        archived?: boolean;
        /** Whether cloaking is enabled for the link. */
        cloaking?: boolean;
        /** Whether the link resolves over HTTPS. */
        secure?: boolean;
        /** Total clicks recorded for the link, when present. */
        clicks?: number;
        /** Timestamp when the link was created. */
        createdAt: string;
        /** Timestamp when the link was last updated, when present. */
        updatedAt?: string;
        /** Timestamp when the link expires, when present. */
        expiresAt?: string;
        /** UTM source parameter applied to the link, when present. */
        utmSource?: string;
        /** UTM medium parameter applied to the link, when present. */
        utmMedium?: string;
        /** UTM campaign parameter applied to the link, when present. */
        utmCampaign?: string;
        /** UTM content parameter applied to the link, when present. */
        utmContent?: string;
        /** UTM term parameter applied to the link, when present. */
        utmTerm?: string;
        [key: string]: unknown;
      };
    };
    /** Delete a Short.io link by link ID. */
    "short_io.delete_link": {
      input: {
        /**
         * The unique identifier of the Short.io link.
         * @minLength 1
         */
        linkId: string;
      };
      output: {
        /** Whether the delete operation succeeded. */
        success: boolean;
        /** Identifier of the deleted Short.io link. */
        idString: string;
      };
    };
    /** Get Short.io domain details by domain ID. */
    "short_io.get_domain": {
      input: {
        /**
         * The unique identifier of the Short.io domain.
         * @exclusiveMinimum 0
         */
        domainId: number;
      };
      output: {
        /**
         * The unique identifier of the Short.io domain.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Hostname of the Short.io domain. */
        hostname: string;
        /** Current configuration state of the domain. */
        state?: string;
        /** Optional title assigned to the domain. */
        title?: string;
        /** Short link generation mode configured for the domain. */
        linkType?: string;
        /** Team identifier associated with the domain, when present. */
        TeamId?: number;
        /** DNS provider configured for the domain, when present. */
        provider?: string;
        /** Timestamp when the domain was created, when present. */
        createdAt?: string;
        /** Timestamp when the domain was last updated, when present. */
        updatedAt?: string;
        [key: string]: unknown;
      };
    };
    /** Get Short.io link details by link ID. */
    "short_io.get_link": {
      input: {
        /**
         * The unique identifier of the Short.io link.
         * @minLength 1
         */
        linkId: string;
      };
      output: {
        /** Unique identifier of the link. */
        id: string;
        /** String form of the Short.io link identifier. */
        idString?: string;
        /** Domain hostname used by the short link. */
        domain?: string;
        /** Numeric domain identifier associated with the short link. */
        DomainId?: number;
        /** Path segment of the short link. */
        path?: string;
        /** Optional title assigned to the short link. */
        title?: string;
        /** Tags assigned to the short link. */
        tags?: Array<string>;
        /** Original destination URL. */
        originalURL: string;
        /** Non-secure short URL returned by Short.io. */
        shortURL: string;
        /** Secure HTTPS short URL returned by Short.io. */
        secureShortURL: string;
        /** Whether the link is archived. */
        archived?: boolean;
        /** Whether cloaking is enabled for the link. */
        cloaking?: boolean;
        /** Whether the link resolves over HTTPS. */
        secure?: boolean;
        /** Total clicks recorded for the link, when present. */
        clicks?: number;
        /** Timestamp when the link was created. */
        createdAt: string;
        /** Timestamp when the link was last updated, when present. */
        updatedAt?: string;
        /** Timestamp when the link expires, when present. */
        expiresAt?: string;
        /** UTM source parameter applied to the link, when present. */
        utmSource?: string;
        /** UTM medium parameter applied to the link, when present. */
        utmMedium?: string;
        /** UTM campaign parameter applied to the link, when present. */
        utmCampaign?: string;
        /** UTM content parameter applied to the link, when present. */
        utmContent?: string;
        /** UTM term parameter applied to the link, when present. */
        utmTerm?: string;
        [key: string]: unknown;
      };
    };
    /** Get click statistics for a Short.io link. */
    "short_io.get_link_statistics": {
      input: {
        /**
         * The unique identifier of the Short.io link.
         * @minLength 1
         */
        linkId: string;
        /** Time interval used when reading link statistics. */
        period?: "custom" | "today" | "yesterday" | "total" | "week" | "month" | "lastmonth" | "last7" | "last30";
        /**
         * Timezone used by the statistics API.
         * @minLength 1
         */
        tz?: string;
        /** Chart granularity used when reading link statistics. */
        clicksChartInterval?: "hour" | "day" | "week" | "month";
        /** Whether top breakdown sections should be skipped. */
        skipTops?: boolean;
        /**
         * Custom interval start date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startDate?: string;
        /**
         * Custom interval end date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        endDate?: string;
      };
      output: {
        /** Total clicks counted in the selected interval. */
        totalClicks: number;
        /** Human clicks counted in the selected interval, when present. */
        humanClicks?: number;
        /** Chart data returned by the statistics API, when present. */
        chart?: {
          /** Chart datasets returned by Short.io. */
          datasets: Array<{
            /** Series data points for the current chart dataset. */
            data: Array<{
              /** Timestamp of the chart data point. */
              x: string;
              /** Click count at the given timestamp. */
              y: number;
            }>;
          }>;
        };
        /** Interval metadata returned by the statistics API, when present. */
        interval?: {
          /** Start timestamp of the current interval, when present. */
          startDate?: string;
          /** End timestamp of the current interval, when present. */
          endDate?: string;
          /** Start timestamp of the previous interval, when present. */
          prevStartDate?: string;
          /** End timestamp of the previous interval, when present. */
          prevEndDate?: string;
          [key: string]: unknown;
        };
        /** Top breakdown objects returned by the statistics API, when present. */
        tops?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List domains available to the authenticated Short.io API key. */
    "short_io.list_domains": {
      input: Record<string, never>;
      output: {
        /** Domains returned by Short.io. */
        domains: Array<{
          /**
           * The unique identifier of the Short.io domain.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Hostname of the Short.io domain. */
          hostname: string;
          /** Current configuration state of the domain. */
          state?: string;
          /** Optional title assigned to the domain. */
          title?: string;
          /** Short link generation mode configured for the domain. */
          linkType?: string;
          /** Team identifier associated with the domain, when present. */
          TeamId?: number;
          /** DNS provider configured for the domain, when present. */
          provider?: string;
          /** Timestamp when the domain was created, when present. */
          createdAt?: string;
          /** Timestamp when the domain was last updated, when present. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List links for a Short.io domain with optional pagination and sort order. */
    "short_io.list_links": {
      input: {
        /**
         * The unique identifier of the Short.io domain.
         * @exclusiveMinimum 0
         */
        domainId: number;
        /**
         * Maximum number of links to return.
         * @minimum 1
         * @maximum 150
         */
        limit?: number;
        /**
         * Pagination token returned by a previous Short.io response.
         * @minLength 1
         */
        pageToken?: string;
        /** Sort order for link creation time. */
        dateSortOrder?: "asc" | "desc";
      };
      output: {
        /** Links returned by Short.io. */
        links: Array<{
          /** Unique identifier of the link. */
          id: string;
          /** String form of the Short.io link identifier. */
          idString?: string;
          /** Domain hostname used by the short link. */
          domain?: string;
          /** Numeric domain identifier associated with the short link. */
          DomainId?: number;
          /** Path segment of the short link. */
          path?: string;
          /** Optional title assigned to the short link. */
          title?: string;
          /** Tags assigned to the short link. */
          tags?: Array<string>;
          /** Original destination URL. */
          originalURL: string;
          /** Non-secure short URL returned by Short.io. */
          shortURL: string;
          /** Secure HTTPS short URL returned by Short.io. */
          secureShortURL: string;
          /** Whether the link is archived. */
          archived?: boolean;
          /** Whether cloaking is enabled for the link. */
          cloaking?: boolean;
          /** Whether the link resolves over HTTPS. */
          secure?: boolean;
          /** Total clicks recorded for the link, when present. */
          clicks?: number;
          /** Timestamp when the link was created. */
          createdAt: string;
          /** Timestamp when the link was last updated, when present. */
          updatedAt?: string;
          /** Timestamp when the link expires, when present. */
          expiresAt?: string;
          /** UTM source parameter applied to the link, when present. */
          utmSource?: string;
          /** UTM medium parameter applied to the link, when present. */
          utmMedium?: string;
          /** UTM campaign parameter applied to the link, when present. */
          utmCampaign?: string;
          /** UTM content parameter applied to the link, when present. */
          utmContent?: string;
          /** UTM term parameter applied to the link, when present. */
          utmTerm?: string;
          [key: string]: unknown;
        }>;
        /** Total number of links that match the current filter. */
        total: number;
      };
    };
    /** Update an existing Short.io link by link ID. */
    "short_io.update_link": {
      input: {
        /**
         * The unique identifier of the Short.io link.
         * @minLength 1
         */
        linkId: string;
        /**
         * Updated destination URL for the short link.
         * @format uri
         */
        originalURL?: string;
        /**
         * Updated path segment for the short link.
         * @minLength 1
         */
        path?: string;
        /**
         * Updated title for the short link.
         * @minLength 1
         */
        title?: string;
        /**
         * Updated tags to assign to the short link.
         * @minItems 1
         */
        tags?: Array<string>;
        /** Whether the short link should be archived. */
        archived?: boolean;
        /** Whether cloaking should be enabled for the short link. */
        cloaking?: boolean;
        /** Expiration timestamp to assign to the short link. */
        expiresAt?: string;
        /** Updated HTTP redirect status code for the short link. */
        redirectType?: 301 | 302 | 307 | 308;
      };
      output: {
        /** Unique identifier of the link. */
        id: string;
        /** String form of the Short.io link identifier. */
        idString?: string;
        /** Domain hostname used by the short link. */
        domain?: string;
        /** Numeric domain identifier associated with the short link. */
        DomainId?: number;
        /** Path segment of the short link. */
        path?: string;
        /** Optional title assigned to the short link. */
        title?: string;
        /** Tags assigned to the short link. */
        tags?: Array<string>;
        /** Original destination URL. */
        originalURL: string;
        /** Non-secure short URL returned by Short.io. */
        shortURL: string;
        /** Secure HTTPS short URL returned by Short.io. */
        secureShortURL: string;
        /** Whether the link is archived. */
        archived?: boolean;
        /** Whether cloaking is enabled for the link. */
        cloaking?: boolean;
        /** Whether the link resolves over HTTPS. */
        secure?: boolean;
        /** Total clicks recorded for the link, when present. */
        clicks?: number;
        /** Timestamp when the link was created. */
        createdAt: string;
        /** Timestamp when the link was last updated, when present. */
        updatedAt?: string;
        /** Timestamp when the link expires, when present. */
        expiresAt?: string;
        /** UTM source parameter applied to the link, when present. */
        utmSource?: string;
        /** UTM medium parameter applied to the link, when present. */
        utmMedium?: string;
        /** UTM campaign parameter applied to the link, when present. */
        utmCampaign?: string;
        /** UTM content parameter applied to the link, when present. */
        utmContent?: string;
        /** UTM term parameter applied to the link, when present. */
        utmTerm?: string;
        [key: string]: unknown;
      };
    };
  }
}
