import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve click analytics for a Cuttly short URL. */
    "cutt_ly.get_link_analytics": {
      input: {
        /**
         * The shortened URL to inspect in Cuttly analytics.
         * @format uri
         */
        shortUrl: string;
        /**
         * Inclusive start date in YYYY-MM-DD format for the analytics query.
         * @format date
         */
        dateFrom?: string;
        /**
         * Inclusive end date in YYYY-MM-DD format for the analytics query.
         * @format date
         */
        dateTo?: string;
      };
      output: {
        /**
         * The shortened URL returned by the analytics API.
         * @format uri
         */
        shortUrl: string;
        /**
         * The original destination URL.
         * @format uri
         */
        url: string;
        /** Title of the shortened URL, when available. */
        title?: string;
        /** Date string returned by Cuttly for when the short URL was created. */
        createdAt?: string;
        /**
         * Total number of successful clicks reported by Cuttly.
         * @minimum 0
         */
        totalClicks: number;
        /**
         * Number of clicks attributed to Facebook.
         * @minimum 0
         */
        facebookClicks: number;
        /**
         * Number of clicks attributed to Twitter/X.
         * @minimum 0
         */
        twitterClicks: number;
        /**
         * Number of clicks attributed to LinkedIn.
         * @minimum 0
         */
        linkedinClicks: number;
        /**
         * Number of clicks attributed to all other sources.
         * @minimum 0
         */
        otherClicks: number;
        /**
         * Number of clicks attributed to bots.
         * @minimum 0
         */
        botClicks: number;
        /** Clicks grouped by referrer domain returned by Cuttly. */
        referrers: Array<{
          /** Referrer domain returned by Cuttly. */
          domain: string;
          /**
           * Number of clicks attributed to this referrer.
           * @minimum 0
           */
          clicks: number;
        }>;
        /** Clicks grouped by country code returned by Cuttly. */
        countries: Array<{
          /** Breakdown tag returned by Cuttly. */
          tag: string;
          /**
           * Number of clicks attributed to this breakdown entry.
           * @minimum 0
           */
          clicks: number;
        }>;
        /** Clicks grouped by device type returned by Cuttly. */
        deviceTypes: Array<{
          /** Breakdown tag returned by Cuttly. */
          tag: string;
          /**
           * Number of clicks attributed to this breakdown entry.
           * @minimum 0
           */
          clicks: number;
        }>;
        /** Clicks grouped by operating system returned by Cuttly. */
        operatingSystems: Array<{
          /** Breakdown tag returned by Cuttly. */
          tag: string;
          /**
           * Number of clicks attributed to this breakdown entry.
           * @minimum 0
           */
          clicks: number;
        }>;
        /** Clicks grouped by browser returned by Cuttly. */
        browsers: Array<{
          /** Breakdown tag returned by Cuttly. */
          tag: string;
          /**
           * Number of clicks attributed to this breakdown entry.
           * @minimum 0
           */
          clicks: number;
        }>;
        /** Clicks grouped by device brand returned by Cuttly. */
        brands: Array<{
          /** Breakdown tag returned by Cuttly. */
          tag: string;
          /**
           * Number of clicks attributed to this breakdown entry.
           * @minimum 0
           */
          clicks: number;
        }>;
        /** Clicks grouped by device language returned by Cuttly. */
        languages: Array<{
          /** Breakdown tag returned by Cuttly. */
          tag: string;
          /**
           * Number of clicks attributed to this breakdown entry.
           * @minimum 0
           */
          clicks: number;
        }>;
        /** Clicks grouped by bot name returned by Cuttly. */
        bots: Array<{
          /** Bot name returned by Cuttly. */
          name: string;
          /**
           * Number of clicks attributed to this bot.
           * @minimum 0
           */
          clicks: number;
        }>;
      };
    };
    /** Create a short URL with the Cuttly Regular API. */
    "cutt_ly.shorten_url": {
      input: {
        /**
         * The destination URL to shorten.
         * @format uri
         */
        url: string;
        /**
         * Preferred custom alias for the shortened URL.
         * @minLength 1
         */
        alias?: string;
        /** Whether to use the account's active branded domain instead of the default cutt.ly domain. */
        useCustomDomain?: boolean;
        /** Whether to skip fetching the destination page title for faster responses. */
        disableTitle?: boolean;
        /** Whether to enable public click statistics for the created short URL. */
        publicStats?: boolean;
      };
      output: {
        /**
         * The shortened URL created by Cuttly.
         * @format uri
         */
        shortUrl: string;
        /**
         * The original destination URL.
         * @format uri
         */
        url: string;
        /** The destination page title returned by Cuttly, when available. */
        title?: string;
        /** Date string returned by Cuttly for when the short URL was created. */
        createdAt?: string;
      };
    };
  }
}
