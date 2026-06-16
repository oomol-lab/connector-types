import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the JSON result for a completed urlscan.io scan. */
    "urlscan.get_result": {
      input: {
        /**
         * Unique scan UUID to retrieve.
         * @format uuid
         */
        uuid: string;
      };
      output: {
        /**
         * Unique scan UUID used for the lookup.
         * @format uuid
         */
        uuid: string;
        /** A raw JSON object returned by urlscan.io. */
        result: Record<string, unknown>;
      };
    };
    /** Search urlscan.io scans with the documented search query syntax. */
    "urlscan.search_scans": {
      input: {
        /**
         * Search query using urlscan.io search syntax, for example "domain:example.com".
         * @minLength 1
         */
        query?: string;
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 10000
         */
        size?: number;
        /** Pagination cursor from the sort values of the last result in the previous page. */
        searchAfter?: string | Array<string | number>;
      };
      output: {
        /** Raw JSON objects returned by urlscan.io. */
        results: Array<Record<string, unknown>>;
        /**
         * Total matching scan count reported by urlscan.io.
         * @minimum 0
         */
        total?: number;
        /** Whether urlscan.io reports that older results are available. */
        hasMore?: boolean;
        /** Sort values from a urlscan.io search result. */
        nextSearchAfter?: Array<string | number>;
        /** A raw JSON object returned by urlscan.io. */
        raw?: Record<string, unknown>;
      };
    };
    /** Submit a URL to urlscan.io for scanning. */
    "urlscan.submit_scan": {
      input: {
        /**
         * URL to submit for scanning.
         * @format uri
         */
        url: string;
        /** Visibility level for the submitted scan. */
        visibility?: "public" | "unlisted" | "private";
        /**
         * User-defined tags to annotate the scan.
         * @minItems 1
         * @maxItems 10
         */
        tags?: Array<string>;
        /**
         * Custom User-Agent string to use for the scan.
         * @minLength 1
         */
        customagent?: string;
        /**
         * Custom HTTP referer to use for the scan.
         * @minLength 1
         */
        referer?: string;
        /** Whether to disable URL reclassification when urlscan.io detects potential PII. */
        overrideSafety?: boolean;
        /**
         * Two-letter ISO-3166-1 alpha-2 country code for the scan location.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
      };
      output: {
        /**
         * Submission status message returned by urlscan.io.
         * @minLength 1
         */
        message: string;
        /**
         * Unique scan UUID assigned by urlscan.io.
         * @format uuid
         */
        uuid: string;
        /**
         * Browser result URL for the submitted scan.
         * @format uri
         */
        resultUrl: string;
        /**
         * Result API URL for the submitted scan.
         * @format uri
         */
        apiUrl: string;
        /**
         * Visibility level applied to the submitted scan.
         * @minLength 1
         */
        visibility: string;
        /**
         * URL submitted for scanning.
         * @format uri
         */
        url: string;
        /**
         * Country code used for the scan.
         * @minLength 1
         */
        country?: string;
        /** A raw JSON object returned by urlscan.io. */
        options?: Record<string, unknown>;
      };
    };
  }
}
