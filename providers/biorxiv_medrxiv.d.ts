import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get monthly or yearly bioRxiv content submission statistics. */
    "biorxiv_medrxiv.get_content_statistics": {
      input: {
        /** The reporting interval. */
        interval: "monthly" | "yearly";
      };
      output: {
        /** The content statistics rows. */
        statistics: Array<Record<string, unknown>>;
      };
    };
    /** Get all versions of one bioRxiv or medRxiv preprint by DOI. */
    "biorxiv_medrxiv.get_preprint": {
      input: {
        /** The preprint server to query. */
        server: "biorxiv" | "medrxiv";
        /**
         * The preprint DOI, such as 10.1101/339747.
         * @minLength 1
         */
        doi: string;
      };
      output: {
        /** Whether the API returned at least one version. */
        found: boolean;
        /** All returned versions of the preprint. */
        preprints: Array<{
          /** The preprint DOI. */
          doi: string;
          /** The preprint title. */
          title: string;
          /** The semicolon-separated author list. */
          authors?: string;
          /** The corresponding author name. */
          author_corresponding?: string;
          /** The corresponding author institution. */
          author_corresponding_institution?: string;
          /**
           * A date in YYYY-MM-DD format.
           * @format date
           */
          date: string;
          /** The preprint version number. */
          version: string;
          /** The submission type reported by the server. */
          type?: string;
          /** The license code reported by the server. */
          license?: string;
          /** The subject category. */
          category?: string;
          /** The URL of the JATS XML source. */
          jatsxml?: string;
          /** The preprint abstract. */
          abstract?: string;
          /** The funding metadata returned by the server. */
          funder?: unknown;
          /** The published DOI, or NA when none is reported. */
          published?: string;
          /** The display name of the source preprint server. */
          server?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get monthly or yearly usage statistics for bioRxiv or medRxiv. */
    "biorxiv_medrxiv.get_usage_statistics": {
      input: {
        /** The preprint server to query. */
        server: "biorxiv" | "medrxiv";
        /** The reporting interval. */
        interval: "monthly" | "yearly";
      };
      output: {
        /** The usage statistics rows. */
        statistics: Array<Record<string, unknown>>;
      };
    };
    /** List bioRxiv or medRxiv preprint versions posted within a date range. */
    "biorxiv_medrxiv.list_preprints": {
      input: {
        /** The preprint server to query. */
        server: "biorxiv" | "medrxiv";
        /**
         * A date in YYYY-MM-DD format.
         * @format date
         */
        startDate: string;
        /**
         * A date in YYYY-MM-DD format.
         * @format date
         */
        endDate: string;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        cursor?: number;
        /**
         * An optional subject category filter.
         * @minLength 1
         */
        category?: string;
      };
      output: {
        /** The zero-based offset reported for this page. */
        cursor: number;
        /** The number of records returned on this page. */
        count: number;
        /** The total number of matching records when reported. */
        total: number | null;
        /** The preprint versions on this page. */
        preprints: Array<{
          /** The preprint DOI. */
          doi: string;
          /** The preprint title. */
          title: string;
          /** The semicolon-separated author list. */
          authors?: string;
          /** The corresponding author name. */
          author_corresponding?: string;
          /** The corresponding author institution. */
          author_corresponding_institution?: string;
          /**
           * A date in YYYY-MM-DD format.
           * @format date
           */
          date: string;
          /** The preprint version number. */
          version: string;
          /** The submission type reported by the server. */
          type?: string;
          /** The license code reported by the server. */
          license?: string;
          /** The subject category. */
          category?: string;
          /** The URL of the JATS XML source. */
          jatsxml?: string;
          /** The preprint abstract. */
          abstract?: string;
          /** The funding metadata returned by the server. */
          funder?: unknown;
          /** The published DOI, or NA when none is reported. */
          published?: string;
          /** The display name of the source preprint server. */
          server?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List bioRxiv preprints linked to journal publications within a date range. */
    "biorxiv_medrxiv.list_published_articles": {
      input: {
        /**
         * A date in YYYY-MM-DD format.
         * @format date
         */
        startDate: string;
        /**
         * A date in YYYY-MM-DD format.
         * @format date
         */
        endDate: string;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        cursor?: number;
      };
      output: {
        /** The zero-based offset reported for this page. */
        cursor: number;
        /** The number of records returned on this page. */
        count: number;
        /** The total number of matching records when reported. */
        total: number | null;
        /** The publication mappings on this page. */
        publications: Array<{
          /** The bioRxiv preprint DOI. */
          biorxiv_doi: string;
          /** The journal article DOI. */
          published_doi?: string;
          /** The preprint title. */
          preprint_title?: string;
          /** The preprint subject category. */
          preprint_category?: string;
          /**
           * A date in YYYY-MM-DD format.
           * @format date
           */
          preprint_date?: string;
          /**
           * A date in YYYY-MM-DD format.
           * @format date
           */
          published_date?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List published bioRxiv papers for a publisher DOI prefix and date range. */
    "biorxiv_medrxiv.list_publisher_articles": {
      input: {
        /**
         * A date in YYYY-MM-DD format.
         * @format date
         */
        startDate: string;
        /**
         * A date in YYYY-MM-DD format.
         * @format date
         */
        endDate: string;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        cursor?: number;
        /**
         * The publisher DOI prefix, such as 10.15252.
         * @minLength 1
         */
        publisherPrefix: string;
      };
      output: {
        /** The zero-based offset reported for this page. */
        cursor: number;
        /** The number of records returned on this page. */
        count: number;
        /** The total number of matching records when reported. */
        total: number | null;
        /** The publication mappings on this page. */
        publications: Array<{
          /** The bioRxiv preprint DOI. */
          biorxiv_doi: string;
          /** The journal article DOI. */
          published_doi?: string;
          /** The preprint title. */
          preprint_title?: string;
          /** The preprint subject category. */
          preprint_category?: string;
          /**
           * A date in YYYY-MM-DD format.
           * @format date
           */
          preprint_date?: string;
          /**
           * A date in YYYY-MM-DD format.
           * @format date
           */
          published_date?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
