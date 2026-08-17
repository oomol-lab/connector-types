import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the public ORCID record for a researcher by ORCID iD. */
    "orcid.get_record": {
      input: {
        /**
         * The ORCID iD in the canonical 0000-0000-0000-0000 format.
         * @minLength 1
         */
        orcidId: string;
      };
      output: {
        /**
         * The ORCID iD in the canonical 0000-0000-0000-0000 format.
         * @minLength 1
         */
        orcidId: string;
        /** The researcher's public display name. */
        name: string | null;
        /** The raw ORCID API object. */
        record: Record<string, unknown>;
      };
    };
    /** Get the public works summary for a researcher by ORCID iD. */
    "orcid.get_works": {
      input: {
        /**
         * The ORCID iD in the canonical 0000-0000-0000-0000 format.
         * @minLength 1
         */
        orcidId: string;
      };
      output: {
        /**
         * The ORCID iD in the canonical 0000-0000-0000-0000 format.
         * @minLength 1
         */
        orcidId: string;
        /** The work groups returned by ORCID. */
        works: Array<Record<string, unknown>>;
        /** The raw ORCID API object. */
        raw: Record<string, unknown>;
      };
    };
    /** Search public ORCID records with ORCID's Solr query syntax. */
    "orcid.search_records": {
      input: {
        /**
         * A Solr query, such as family-name:Sanchez or affiliation-org-name:Example University.
         * @minLength 1
         */
        query: string;
        /**
         * The zero-based result offset within the first 10,000 results.
         * @minimum 0
         * @maximum 9999
         */
        start?: number;
        /**
         * The number of results to return, up to 1000.
         * @minimum 1
         * @maximum 1000
         */
        rows?: number;
      };
      output: {
        /** The total number of matching public records. */
        total: number;
        /** The zero-based result offset used for this page. */
        start: number;
        /** The requested page size. */
        rows: number;
        /** The expanded public ORCID search results. */
        results: Array<Record<string, unknown>>;
      };
    };
  }
}
