import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Web of Science document by its accession number (UID). */
    "web_of_science.get_document": {
      input: {
        /**
         * The Web of Science accession number, such as WOS:000267144200002.
         * @minLength 1
         */
        uid: string;
        /** The record detail level. Full records are returned when this field is omitted or set to full. */
        detail?: "full" | "short";
      };
      output: {
        /** A normalized Web of Science document record. */
        document: {
          /** The Web of Science unique identifier. */
          uid: string;
          /** The document title when available. */
          title: string | null;
          /** The normalized document types. */
          types: Array<string>;
          /** The source document types. */
          sourceTypes: Array<string>;
          /** The Web of Science source metadata when available. */
          source: Record<string, unknown> | null;
          /** The contributor and author metadata when available. */
          names: Record<string, unknown> | null;
          /** The Web of Science product links when available. */
          links: Record<string, unknown> | null;
          /** The times-cited entries returned by Web of Science. */
          citations: Array<Record<string, unknown>>;
          /** The DOI, ISSN, ISBN, PubMed, and related identifiers when available. */
          identifiers: Record<string, unknown> | null;
          /** The document keyword metadata when available. */
          keywords: Record<string, unknown> | null;
          /** The raw document object returned by Web of Science. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Web of Science journal by its journal identifier. */
    "web_of_science.get_journal": {
      input: {
        /**
         * The Web of Science journal identifier returned by search_journals.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Web of Science journal record. */
        journal: {
          /** The Web of Science journal identifier when available. */
          id: string | null;
          /** The journal's full name when available. */
          name: string | null;
          /** The Journal Citation Reports abbreviation when available. */
          jcrTitle: string | null;
          /** The ISO journal title when available. */
          isoTitle: string | null;
          /** The journal ISSN when available. */
          issn: string | null;
          /** The journal electronic ISSN when available. */
          eIssn: string | null;
          /** The previous ISSNs associated with the journal. */
          previousIssn: Array<string>;
          /** The Web of Science product links for the journal. */
          links: Array<Record<string, unknown>>;
          /** The raw journal object returned by Web of Science. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Search Web of Science documents with Starter API advanced queries, filters, sorting, and pagination. */
    "web_of_science.search_documents": {
      input: {
        /**
         * The Web of Science advanced query, such as TS=(machine learning) or DO=10.1000/example.
         * @minLength 1
         */
        query: string;
        /** The Web of Science database abbreviation to search. Defaults to WOS. */
        database?: "BCI" | "BIOABS" | "BIOSIS" | "CCC" | "DIIDW" | "DRCI" | "MEDLINE" | "PPRN" | "RC" | "WOK" | "WOS" | "ZOOREC";
        /**
         * The maximum number of records to return on this page.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * The one-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The sort expression, such as PY+D for publication year descending or TC+D for times cited descending.
         * @minLength 1
         */
        sortField?: string;
        /**
         * The record modification date range in YYYY-MM-DD+YYYY-MM-DD form.
         * @minLength 1
         */
        modifiedTimeSpan?: string;
        /**
         * The publication date range in YYYY-MM-DD+YYYY-MM-DD form.
         * @minLength 1
         */
        publishTimeSpan?: string;
        /**
         * The times-cited modification date range in YYYY-MM-DD+YYYY-MM-DD form.
         * @minLength 1
         */
        timesCitedModifiedTimeSpan?: string;
        /** The record detail level. Full records are returned when this field is omitted or set to full. */
        detail?: "full" | "short";
        /**
         * The collection and edition expression, such as WOS+SCI, with multiple editions separated by commas.
         * @minLength 1
         */
        edition?: string;
      };
      output: {
        /** Pagination metadata returned by Web of Science. */
        metadata: {
          /** The total number of matching records when available. */
          total: number | null;
          /** The one-based page number when available. */
          page: number | null;
          /** The maximum number of records on the page when available. */
          limit: number | null;
        };
        /** The matching Web of Science documents. */
        documents: Array<{
          /** The Web of Science unique identifier. */
          uid: string;
          /** The document title when available. */
          title: string | null;
          /** The normalized document types. */
          types: Array<string>;
          /** The source document types. */
          sourceTypes: Array<string>;
          /** The Web of Science source metadata when available. */
          source: Record<string, unknown> | null;
          /** The contributor and author metadata when available. */
          names: Record<string, unknown> | null;
          /** The Web of Science product links when available. */
          links: Record<string, unknown> | null;
          /** The times-cited entries returned by Web of Science. */
          citations: Array<Record<string, unknown>>;
          /** The DOI, ISSN, ISBN, PubMed, and related identifiers when available. */
          identifiers: Record<string, unknown> | null;
          /** The document keyword metadata when available. */
          keywords: Record<string, unknown> | null;
          /** The raw document object returned by Web of Science. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Web of Science list response. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Web of Science journals, optionally by ISSN. */
    "web_of_science.search_journals": {
      input: {
        /**
         * The print, electronic, or previous ISSN to search for.
         * @minLength 1
         */
        issn?: string;
      };
      output: {
        /** Pagination metadata returned by Web of Science. */
        metadata: {
          /** The total number of matching records when available. */
          total: number | null;
          /** The one-based page number when available. */
          page: number | null;
          /** The maximum number of records on the page when available. */
          limit: number | null;
        };
        /** The matching Web of Science journals. */
        journals: Array<{
          /** The Web of Science journal identifier when available. */
          id: string | null;
          /** The journal's full name when available. */
          name: string | null;
          /** The Journal Citation Reports abbreviation when available. */
          jcrTitle: string | null;
          /** The ISO journal title when available. */
          isoTitle: string | null;
          /** The journal ISSN when available. */
          issn: string | null;
          /** The journal electronic ISSN when available. */
          eIssn: string | null;
          /** The previous ISSNs associated with the journal. */
          previousIssn: Array<string>;
          /** The Web of Science product links for the journal. */
          links: Array<Record<string, unknown>>;
          /** The raw journal object returned by Web of Science. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Web of Science journal list response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
