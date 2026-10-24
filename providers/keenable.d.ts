import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read a webpage from Keenable's index or live source as Markdown, optionally extracting content with an instruction. */
    "keenable.fetch": {
      input: {
        /**
         * The webpage URL for Keenable to retrieve.
         * @format uri
         */
        url: string;
        /**
         * Maximum returned content characters; defaults to 50000. A truncation notice may extend beyond this limit.
         * @minimum 1
         */
        max_chars?: number;
        /** Fetch from the live source instead of the index. Defaults to false; use true for pages outside the index. */
        live?: boolean;
        /**
         * Extraction instruction. When supplied, content contains the instruction result instead of the full page.
         * @maxLength 2000
         */
        prompt?: string;
      };
      output: {
        /** Fetched URL, which may differ after redirects. */
        url: string;
        /** Page Markdown, or the extraction instruction result. */
        content: string;
        /** Page title, when available. */
        title?: string;
        /** Page description, when available. */
        description?: string;
        /** Page author, when available. */
        author?: string;
        /** Publication time; official sources describe Unix seconds or an ISO timestamp. */
        published_at?: number | string;
        [key: string]: unknown;
      };
    };
    /** Search the web with Keenable, including site, publication date, indexing date, and point-in-time filters. */
    "keenable.search": {
      input: {
        /** The search query. */
        query: string;
        /** Search mode: pro for deeper retrieval (default), or realtime for faster results. */
        mode?: "pro" | "realtime";
        /** Restrict results to a specific domain, such as techcrunch.com. */
        site?: string;
        /** Include pages indexed at or after this time. Accepts YYYY-MM-DD, an ISO 8601 timestamp, or a relative delta such as 7d, 30min, 2h, 1mo, or 1y. Dates cover the whole UTC day; relative deltas use query_time when supplied. */
        acquired_after?: string;
        /** Include pages indexed at or before this time. Accepts YYYY-MM-DD, an ISO 8601 timestamp, or a relative delta such as 7d, 30min, 2h, 1mo, or 1y. Dates cover the whole UTC day; relative deltas use query_time when supplied. */
        acquired_before?: string;
        /** Include pages published at or after this time. Accepts YYYY-MM-DD, an ISO 8601 timestamp, or a relative delta such as 7d, 30min, 2h, 1mo, or 1y. Dates cover the whole UTC day; relative deltas use query_time when supplied. */
        published_after?: string;
        /** Include pages published at or before this time. Accepts YYYY-MM-DD, an ISO 8601 timestamp, or a relative delta such as 7d, 30min, 2h, 1mo, or 1y. Dates cover the whole UTC day; relative deltas use query_time when supplied. */
        published_before?: string;
        /** Search the index as it stood at this timestamp or date. A date resolves to midnight UTC. Relative date filters are calculated from this time. */
        query_time?: string;
        /**
         * Maximum snippet length in characters; omitted uses the upstream default.
         * @minimum 180
         * @maximum 10000
         */
        snippet_max_length?: number;
        /**
         * Maximum number of results; defaults to 10.
         * @minimum 1
         * @maximum 50
         */
        max_results?: number;
      };
      output: {
        /** The searched query. */
        query: string;
        /** The search mode used. */
        mode: string;
        /** Ranked web results. */
        results: Array<{
          /** Page title. */
          title: string;
          /** Page URL. */
          url: string;
          /** Page description. */
          description: string;
          /** Relevant page excerpt, when available. */
          snippet?: string;
          /** Publication time as an ISO 8601 timestamp, when available. */
          published_at?: string;
          /** Indexing time as an ISO 8601 timestamp, when available. */
          acquired_at?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
