import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Look up OpenPageRank scores for one or more domains and return normalized rank metadata. */
    "openpagerank.get_page_rank": {
      input: {
        /**
         * The list of domains to query in one request.
         * @minItems 1
         * @maxItems 100
         */
        domains: Array<string>;
      };
      output: {
        /** The overall HTTP-style status code returned by OpenPageRank. */
        statusCode: number;
        /** The per-domain lookup results returned by OpenPageRank. */
        results: Array<{
          /** The domain that was queried. */
          domain: string;
          /** The HTTP-style status code returned for this domain. */
          statusCode: number;
          /** The error message returned for this domain. */
          error: string;
          /** The integer Page Rank score returned by OpenPageRank. */
          pageRankInteger: number;
          /** The decimal Page Rank score returned by OpenPageRank. */
          pageRankDecimal: number;
          /** The rank returned by OpenPageRank, or null when unavailable. */
          rank: string | null;
        }>;
      };
    };
  }
}
