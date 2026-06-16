import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a TinyURL short link for a destination URL. */
    "tinyurl.create_short_url": {
      input: {
        /**
         * The full URL to shorten, including the http:// or https:// protocol.
         * @format uri
         */
        url: string;
        /**
         * A custom alias for the short URL. It must be unique for the selected domain.
         * @minLength 1
         */
        alias?: string;
        /**
         * The domain to use when TinyURL creates the short link.
         * @minLength 1
         */
        domain?: string;
        /**
         * Tags to associate with the created TinyURL.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * The ISO 8601 timestamp when the created TinyURL should expire.
         * @format date-time
         */
        expires_at?: string;
      };
      output: {
        /**
         * The TinyURL short link that was created.
         * @format uri
         */
        tiny_url: string;
        /** The alias used by the created TinyURL. */
        alias: string;
        /** The domain used by the created TinyURL. */
        domain?: string;
        /**
         * The original destination URL.
         * @format uri
         */
        url?: string;
        /** The tags associated with the created TinyURL. */
        tags?: Array<string>;
        /**
         * The ISO 8601 expiration timestamp returned by TinyURL.
         * @format date-time
         */
        expires_at?: string;
        /**
         * The ISO 8601 creation timestamp returned by TinyURL.
         * @format date-time
         */
        created_at?: string;
      };
    };
    /** List TinyURLs from the TinyURL account by availability status. */
    "tinyurl.list_urls": {
      input: {
        /** Whether to list available TinyURLs or archived TinyURLs. */
        type: "available" | "archived";
        /**
         * The 1-based page number of the TinyURL results to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of TinyURLs to fetch per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The TinyURL response code. */
        code?: number;
        /** The TinyURLs returned for the selected page. */
        data: Array<{
          /**
           * The TinyURL short link.
           * @format uri
           */
          tiny_url: string;
          /** The alias used by the TinyURL. */
          alias: string;
          /** The domain used by the TinyURL. */
          domain: string;
          /**
           * The original destination URL, when returned by TinyURL.
           * @format uri
           */
          url?: string;
          /** Whether the TinyURL is archived. */
          archived: boolean;
          /**
           * The ISO 8601 creation timestamp of the TinyURL.
           * @format date-time
           */
          created_at: string;
        }>;
        /** The current TinyURL results page, when returned by TinyURL. */
        page?: number;
        /** The number of TinyURLs returned per page, when returned by TinyURL. */
        limit?: number;
        /** The total number of TinyURLs matching the selected type, when returned by TinyURL. */
        total?: number;
      };
    };
  }
}
