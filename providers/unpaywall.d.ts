import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve Unpaywall open-access metadata for one DOI. */
    "unpaywall.get_doi": {
      input: {
        /**
         * The DOI identifier to retrieve, with or without a https://doi.org prefix.
         * @minLength 1
         */
        doi: string;
      };
      output: {
        /** An Unpaywall DOI object. Additional fields may be added by Unpaywall over time. */
        record: Record<string, unknown>;
      };
    };
    /** Search Unpaywall articles by title text. */
    "unpaywall.search_articles": {
      input: {
        /**
         * The title text to search for.
         * @minLength 1
         */
        query: string;
        /**
         * The one-based result page to retrieve. Each page contains up to 50 results.
         * @minimum 1
         */
        page?: number;
        /** Whether to return only articles that Unpaywall identifies as open access. */
        isOa?: boolean;
      };
      output: {
        /** The one-based page requested from Unpaywall. */
        page: number;
        /** The search duration in seconds reported by Unpaywall. */
        elapsedSeconds: number;
        /** The article search results returned for this page. */
        results: Array<Record<string, unknown>>;
      };
    };
  }
}
