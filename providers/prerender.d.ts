import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Submit a sitemap XML URL to Prerender so it can discover and cache new URLs from that sitemap. */
    "prerender.add_sitemap": {
      input: {
        /**
         * The sitemap XML URL to submit to Prerender.
         * @format uri
         */
        url: string;
      };
      output: {
        /** Whether Prerender accepted the request. */
        accepted: boolean;
        /** The raw Prerender response payload when one was returned. */
        raw: unknown;
      };
    };
    /** Queue a Prerender cache clear request for URLs matching a wildcard query pattern. */
    "prerender.clear_cache": {
      input: {
        /**
         * The wildcard query used to match cached URLs to clear, such as https://example.com%.
         * @minLength 1
         * @pattern \S
         */
        query: string;
      };
      output: {
        /** The cache clear job state reported by Prerender. */
        status: "queued" | "in_progress";
        /** The raw Prerender response payload when one was returned. */
        raw: unknown;
      };
    };
    /** Check whether a Prerender cache clear job is currently running for the authenticated account. */
    "prerender.get_cache_clear_status": {
      input: Record<string, never>;
      output: {
        /** The current cache clear job state reported by Prerender. */
        status: "idle" | "in_progress";
        /** The raw Prerender response payload when one was returned. */
        raw: unknown;
      };
    };
    /** Queue one or more URLs for first-time caching or recaching with the Prerender recache API. */
    "prerender.recache_urls": {
      input: {
        /**
         * The public URLs to cache or recache.
         * @minItems 1
         */
        urls: Array<string>;
        /** The Prerender adaptive cache type to target. */
        adaptiveType?: "mobile" | "desktop";
      };
      output: {
        /** Whether Prerender accepted the request. */
        accepted: boolean;
        /** The raw Prerender response payload when one was returned. */
        raw: unknown;
      };
    };
  }
}
