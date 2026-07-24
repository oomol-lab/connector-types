import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate citation totals, self-citation-adjusted metrics, yearly counts, and h-index for a Web of Science query. */
    "web_of_science_expanded.get_citation_report": {
      input: {
        /**
         * The Web of Science advanced query to analyze.
         * @minLength 1
         */
        query: string;
        /** The Web of Science database to search. WOS searches the Core Collection and WOK searches all entitled databases. Defaults to WOS. */
        database?: "WOS" | "BCI" | "BIOABS" | "BIOSIS" | "CABI" | "CCC" | "CSCD" | "DCI" | "DIIDW" | "FSTA" | "GRANTS" | "INSPEC" | "MEDLINE" | "PPRN" | "PQDT" | "RC" | "SCIELO" | "WOK" | "ZOOREC";
        /**
         * The search language code. WOS supports en, while entitled regional databases may support other languages.
         * @minLength 1
         */
        language?: string;
        /**
         * The collection and edition expression, such as WOS+SCI, with multiple editions separated by commas.
         * @minLength 1
         */
        edition?: string;
        /**
         * The publication date range in YYYY-MM-DD+YYYY-MM-DD form.
         * @minLength 1
         */
        publishTimeSpan?: string;
        /**
         * The symbolic database load time span, such as 5D, 30W, 10M, or 8Y.
         * @minLength 1
         */
        loadTimeSpan?: string;
        /**
         * The record creation date range in YYYY-MM-DD+YYYY-MM-DD form.
         * @minLength 1
         */
        createdTimeSpan?: string;
        /**
         * The record modification date range in YYYY-MM-DD+YYYY-MM-DD form.
         * @minLength 1
         */
        modifiedTimeSpan?: string;
        /**
         * The times-cited modification date range in YYYY-MM-DD+YYYY-MM-DD form.
         * @minLength 1
         */
        timesCitedModifiedTimeSpan?: string;
        /**
         * The collection levels to include in the citation report. Defaults to WOS.
         * @minItems 1
         * @maxItems 2
         */
        reportLevels?: Array<"WOS" | "AllDB">;
        /**
         * The first citing year to include, from 1900 onward.
         * @minimum 1900
         */
        startYear?: number;
        /**
         * The last citing year to include, from 1900 onward.
         * @minimum 1900
         */
        endYear?: number;
      };
      output: {
        /** Metadata for the query used to generate the report. */
        queryMetadata: {
          /** The temporary Web of Science query identifier. */
          queryId: string;
          /** The number of records searched when available. */
          recordsSearched: number | null;
          /** The number of matching records when available. */
          recordsFound: number | null;
        };
        /** The citation reports returned for the requested levels. */
        reports: Array<{
          /** The collection level represented by this report. */
          reportLevel: string | null;
          /** The total times-cited value when available. */
          timesCited: number | null;
          /** The times-cited value excluding self-citations when available. */
          timesCitedSansSelf: number | null;
          /** The number of citing items excluding self-citations when available. */
          citingItemsSansSelf: number | null;
          /** The de-duplicated times-cited value when available. */
          dedupedTimesCited: number | null;
          /** The average citations per item when available. */
          averagePerItem: number | null;
          /** The average citations per year when available. */
          averagePerYear: number | null;
          /** The h-index for the query result when available. */
          hIndex: number | null;
          /** The citation counts grouped by citing year when available. */
          citingYears: Record<string, unknown> | null;
          /** The raw citation report entry. */
          raw: Record<string, unknown>;
        }>;
        /** The raw query and citation report responses. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one or more Web of Science Expanded records by UID with short, full, or custom field detail. */
    "web_of_science_expanded.get_documents": {
      input: {
        /**
         * The Web of Science UIDs to retrieve in one request.
         * @minItems 1
         */
        uids: Array<string>;
        /** The Web of Science database to search. WOS searches the Core Collection and WOK searches all entitled databases. Defaults to WOS. */
        database?: "WOS" | "BCI" | "BIOABS" | "BIOSIS" | "CABI" | "CCC" | "CSCD" | "DCI" | "DIIDW" | "FSTA" | "GRANTS" | "INSPEC" | "MEDLINE" | "PPRN" | "PQDT" | "RC" | "SCIELO" | "WOK" | "ZOOREC";
        /** The request language. This endpoint supports only en for English. */
        language?: "en";
        /** The record detail level. Short records do not count against the Expanded API Full Record quota. Defaults to short. */
        recordDetail?: "short" | "full";
        /**
         * The official Web of Science record fields to return. Supplying fields uses custom field selection instead of short or full records.
         * @minItems 1
         */
        fields?: Array<string>;
        /** Whether to include Web of Science gateway links in each record. */
        includeLinks?: boolean;
        /** Whether to request highlighted matching terms in the records. */
        highlight?: boolean;
      };
      output: {
        /** Query and pagination metadata. */
        metadata: {
          /** The temporary Web of Science query identifier when available. */
          queryId: string | null;
          /** The number of records searched when available. */
          recordsSearched: number | null;
          /** The total number of matching records when available. */
          recordsFound: number | null;
          /** The one-based index of the first returned record. */
          firstRecord: number;
          /** The requested maximum number of returned records. */
          limit: number;
          /** The firstRecord value for the next page, or null when no next page is known. */
          nextFirstRecord: number | null;
        };
        /** The requested Web of Science documents that were found. */
        documents: Array<{
          /** The Web of Science unique identifier. */
          uid: string;
          /** The document title when available. */
          title: string | null;
          /** The publication or source title when available. */
          sourceTitle: string | null;
          /** The publication year when available. */
          publicationYear: number | null;
          /** The document types assigned by Web of Science. */
          documentTypes: Array<string>;
          /** The normalized document authors. */
          authors: Array<{
            /** The author's display name when available. */
            displayName: string | null;
            /** The author's first name when available. */
            firstName: string | null;
            /** The author's last name when available. */
            lastName: string | null;
            /** The author's Web of Science ResearcherID when available. */
            researcherId: string | null;
            /** The author's ORCID identifier when available. */
            orcidId: string | null;
          }>;
          /** The normalized DOI and other document identifiers. */
          identifiers: Array<{
            /** The identifier type when available. */
            type: string | null;
            /** The identifier value when available. */
            value: string | null;
          }>;
          /** The Web of Science Core Collection times-cited count when available. */
          timesCited: number | null;
          /** The raw Expanded API document record. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Expanded API record response. */
        raw: Record<string, unknown>;
      };
    };
    /** List the bibliographic references cited by a Web of Science document. */
    "web_of_science_expanded.list_cited_references": {
      input: {
        /**
         * The source Web of Science UID.
         * @minLength 1
         */
        uid: string;
        /** The Web of Science database to search. WOS searches the Core Collection and WOK searches all entitled databases. Defaults to WOS. */
        database?: "WOS" | "BCI" | "BIOABS" | "BIOSIS" | "CABI" | "CCC" | "CSCD" | "DCI" | "DIIDW" | "FSTA" | "GRANTS" | "INSPEC" | "MEDLINE" | "PPRN" | "PQDT" | "RC" | "SCIELO" | "WOK" | "ZOOREC";
        /** The request language. This endpoint supports only en for English. */
        language?: "en";
        /**
         * The maximum number of records to return, from 0 to 100.
         * @minimum 0
         * @maximum 100
         */
        limit?: number;
        /**
         * The one-based index of the first record to return, up to 100000.
         * @minimum 1
         * @maximum 100000
         */
        firstRecord?: number;
        /**
         * The official Web of Science sort expression.
         * @minLength 1
         */
        sortField?: string;
        /** Whether to request highlighted matching terms in the references. */
        highlight?: boolean;
      };
      output: {
        /** Query and pagination metadata. */
        metadata: {
          /** The temporary Web of Science query identifier when available. */
          queryId: string | null;
          /** The number of records searched when available. */
          recordsSearched: number | null;
          /** The total number of matching records when available. */
          recordsFound: number | null;
          /** The one-based index of the first returned record. */
          firstRecord: number;
          /** The requested maximum number of returned records. */
          limit: number;
          /** The firstRecord value for the next page, or null when no next page is known. */
          nextFirstRecord: number | null;
        };
        /** The references cited by the source document. */
        references: Array<{
          /** The matched Web of Science UID when the reference is indexed. */
          uid: string | null;
          /** The cited author text when available. */
          citedAuthor: string | null;
          /** The cited document title when available. */
          citedTitle: string | null;
          /** The cited publication or work when available. */
          citedWork: string | null;
          /** The cited publication year when available. */
          year: number | null;
          /** The cited page when available. */
          page: number | null;
          /** The cited DOI when available. */
          doi: string | null;
          /** The cited reference's times-cited count when available. */
          timesCited: number | null;
          /** The raw cited reference returned by Web of Science. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Expanded API cited-references response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Web of Science documents that cite a source document. */
    "web_of_science_expanded.list_citing_documents": {
      input: {
        /**
         * The source Web of Science UID.
         * @minLength 1
         */
        uid: string;
        /** The Web of Science database to search. WOS searches the Core Collection and WOK searches all entitled databases. Defaults to WOS. */
        database?: "WOS" | "BCI" | "BIOABS" | "BIOSIS" | "CABI" | "CCC" | "CSCD" | "DCI" | "DIIDW" | "FSTA" | "GRANTS" | "INSPEC" | "MEDLINE" | "PPRN" | "PQDT" | "RC" | "SCIELO" | "WOK" | "ZOOREC";
        /** The request language. This endpoint supports only en for English. */
        language?: "en";
        /**
         * The maximum number of records to return, from 0 to 100.
         * @minimum 0
         * @maximum 100
         */
        limit?: number;
        /**
         * The one-based index of the first record to return, up to 100000.
         * @minimum 1
         * @maximum 100000
         */
        firstRecord?: number;
        /**
         * The official Web of Science sort expression.
         * @minLength 1
         */
        sortField?: string;
        /**
         * The collection and edition expression, such as WOS+SCI, with multiple editions separated by commas.
         * @minLength 1
         */
        edition?: string;
        /**
         * The publication date range in YYYY-MM-DD+YYYY-MM-DD form.
         * @minLength 1
         */
        publishTimeSpan?: string;
        /**
         * The record modification date range in YYYY-MM-DD+YYYY-MM-DD form.
         * @minLength 1
         */
        modifiedTimeSpan?: string;
        /**
         * The times-cited modification date range in YYYY-MM-DD+YYYY-MM-DD form.
         * @minLength 1
         */
        timesCitedModifiedTimeSpan?: string;
        /** The record detail level. Short records do not count against the Expanded API Full Record quota. Defaults to short. */
        recordDetail?: "short" | "full";
        /**
         * The official Web of Science record fields to return. Supplying fields uses custom field selection instead of short or full records.
         * @minItems 1
         */
        fields?: Array<string>;
        /** Whether to include Web of Science gateway links in each record. */
        includeLinks?: boolean;
        /** Whether to request highlighted matching terms in the records. */
        highlight?: boolean;
      };
      output: {
        /** Query and pagination metadata. */
        metadata: {
          /** The temporary Web of Science query identifier when available. */
          queryId: string | null;
          /** The number of records searched when available. */
          recordsSearched: number | null;
          /** The total number of matching records when available. */
          recordsFound: number | null;
          /** The one-based index of the first returned record. */
          firstRecord: number;
          /** The requested maximum number of returned records. */
          limit: number;
          /** The firstRecord value for the next page, or null when no next page is known. */
          nextFirstRecord: number | null;
        };
        /** The documents that cite the source document. */
        documents: Array<{
          /** The Web of Science unique identifier. */
          uid: string;
          /** The document title when available. */
          title: string | null;
          /** The publication or source title when available. */
          sourceTitle: string | null;
          /** The publication year when available. */
          publicationYear: number | null;
          /** The document types assigned by Web of Science. */
          documentTypes: Array<string>;
          /** The normalized document authors. */
          authors: Array<{
            /** The author's display name when available. */
            displayName: string | null;
            /** The author's first name when available. */
            firstName: string | null;
            /** The author's last name when available. */
            lastName: string | null;
            /** The author's Web of Science ResearcherID when available. */
            researcherId: string | null;
            /** The author's ORCID identifier when available. */
            orcidId: string | null;
          }>;
          /** The normalized DOI and other document identifiers. */
          identifiers: Array<{
            /** The identifier type when available. */
            type: string | null;
            /** The identifier value when available. */
            value: string | null;
          }>;
          /** The Web of Science Core Collection times-cited count when available. */
          timesCited: number | null;
          /** The raw Expanded API document record. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Expanded API citing response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Web of Science documents related through shared cited references. */
    "web_of_science_expanded.list_related_documents": {
      input: {
        /**
         * The source Web of Science UID.
         * @minLength 1
         */
        uid: string;
        /** The Web of Science database to search. WOS searches the Core Collection and WOK searches all entitled databases. Defaults to WOS. */
        database?: "WOS" | "BCI" | "BIOABS" | "BIOSIS" | "CABI" | "CCC" | "CSCD" | "DCI" | "DIIDW" | "FSTA" | "GRANTS" | "INSPEC" | "MEDLINE" | "PPRN" | "PQDT" | "RC" | "SCIELO" | "WOK" | "ZOOREC";
        /** The request language. This endpoint supports only en for English. */
        language?: "en";
        /**
         * The maximum number of records to return, from 0 to 100.
         * @minimum 0
         * @maximum 100
         */
        limit?: number;
        /**
         * The one-based index of the first record to return, up to 100000.
         * @minimum 1
         * @maximum 100000
         */
        firstRecord?: number;
        /**
         * The official Web of Science sort expression.
         * @minLength 1
         */
        sortField?: string;
        /**
         * The collection and edition expression, such as WOS+SCI, with multiple editions separated by commas.
         * @minLength 1
         */
        edition?: string;
        /**
         * The publication date range in YYYY-MM-DD+YYYY-MM-DD form.
         * @minLength 1
         */
        publishTimeSpan?: string;
        /**
         * The record modification date range in YYYY-MM-DD+YYYY-MM-DD form.
         * @minLength 1
         */
        modifiedTimeSpan?: string;
        /**
         * The times-cited modification date range in YYYY-MM-DD+YYYY-MM-DD form.
         * @minLength 1
         */
        timesCitedModifiedTimeSpan?: string;
        /** The record detail level. Short records do not count against the Expanded API Full Record quota. Defaults to short. */
        recordDetail?: "short" | "full";
        /**
         * The official Web of Science record fields to return. Supplying fields uses custom field selection instead of short or full records.
         * @minItems 1
         */
        fields?: Array<string>;
        /** Whether to include Web of Science gateway links in each record. */
        includeLinks?: boolean;
        /** Whether to request highlighted matching terms in the records. */
        highlight?: boolean;
      };
      output: {
        /** Query and pagination metadata. */
        metadata: {
          /** The temporary Web of Science query identifier when available. */
          queryId: string | null;
          /** The number of records searched when available. */
          recordsSearched: number | null;
          /** The total number of matching records when available. */
          recordsFound: number | null;
          /** The one-based index of the first returned record. */
          firstRecord: number;
          /** The requested maximum number of returned records. */
          limit: number;
          /** The firstRecord value for the next page, or null when no next page is known. */
          nextFirstRecord: number | null;
        };
        /** The documents related to the source document. */
        documents: Array<{
          /** The Web of Science unique identifier. */
          uid: string;
          /** The document title when available. */
          title: string | null;
          /** The publication or source title when available. */
          sourceTitle: string | null;
          /** The publication year when available. */
          publicationYear: number | null;
          /** The document types assigned by Web of Science. */
          documentTypes: Array<string>;
          /** The normalized document authors. */
          authors: Array<{
            /** The author's display name when available. */
            displayName: string | null;
            /** The author's first name when available. */
            firstName: string | null;
            /** The author's last name when available. */
            lastName: string | null;
            /** The author's Web of Science ResearcherID when available. */
            researcherId: string | null;
            /** The author's ORCID identifier when available. */
            orcidId: string | null;
          }>;
          /** The normalized DOI and other document identifiers. */
          identifiers: Array<{
            /** The identifier type when available. */
            type: string | null;
            /** The identifier value when available. */
            value: string | null;
          }>;
          /** The Web of Science Core Collection times-cited count when available. */
          timesCited: number | null;
          /** The raw Expanded API document record. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Expanded API related-records response. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Web of Science Expanded records with advanced queries, quota-aware detail selection, filters, sorting, and pagination. */
    "web_of_science_expanded.search_documents": {
      input: {
        /**
         * The Web of Science advanced query, such as TS=(machine learning) or DO=10.1000/example.
         * @minLength 1
         */
        query: string;
        /** The Web of Science database to search. WOS searches the Core Collection and WOK searches all entitled databases. Defaults to WOS. */
        database?: "WOS" | "BCI" | "BIOABS" | "BIOSIS" | "CABI" | "CCC" | "CSCD" | "DCI" | "DIIDW" | "FSTA" | "GRANTS" | "INSPEC" | "MEDLINE" | "PPRN" | "PQDT" | "RC" | "SCIELO" | "WOK" | "ZOOREC";
        /**
         * The search language code. WOS supports en, while entitled regional databases may support other languages.
         * @minLength 1
         */
        language?: string;
        /**
         * The maximum number of records to return, from 0 to 100.
         * @minimum 0
         * @maximum 100
         */
        limit?: number;
        /**
         * The one-based index of the first record to return, up to 100000.
         * @minimum 1
         * @maximum 100000
         */
        firstRecord?: number;
        /**
         * The official sort expression, such as PY+D for publication year descending or TC+D for times cited descending.
         * @minLength 1
         */
        sortField?: string;
        /**
         * The collection and edition expression, such as WOS+SCI, with multiple editions separated by commas.
         * @minLength 1
         */
        edition?: string;
        /**
         * The publication date range in YYYY-MM-DD+YYYY-MM-DD form.
         * @minLength 1
         */
        publishTimeSpan?: string;
        /**
         * The symbolic database load time span, such as 5D, 30W, 10M, or 8Y.
         * @minLength 1
         */
        loadTimeSpan?: string;
        /**
         * The record creation date range in YYYY-MM-DD+YYYY-MM-DD form.
         * @minLength 1
         */
        createdTimeSpan?: string;
        /**
         * The record modification date range in YYYY-MM-DD+YYYY-MM-DD form.
         * @minLength 1
         */
        modifiedTimeSpan?: string;
        /**
         * The times-cited modification date range in YYYY-MM-DD+YYYY-MM-DD form.
         * @minLength 1
         */
        timesCitedModifiedTimeSpan?: string;
        /** The record detail level. Short records do not count against the Expanded API Full Record quota. Defaults to short. */
        recordDetail?: "short" | "full";
        /**
         * The official Web of Science record fields to return. Supplying fields uses custom field selection instead of short or full records.
         * @minItems 1
         */
        fields?: Array<string>;
        /** Whether to include Web of Science gateway links in each record. */
        includeLinks?: boolean;
        /** Whether to request highlighted matching terms in the records. */
        highlight?: boolean;
      };
      output: {
        /** Query and pagination metadata. */
        metadata: {
          /** The temporary Web of Science query identifier when available. */
          queryId: string | null;
          /** The number of records searched when available. */
          recordsSearched: number | null;
          /** The total number of matching records when available. */
          recordsFound: number | null;
          /** The one-based index of the first returned record. */
          firstRecord: number;
          /** The requested maximum number of returned records. */
          limit: number;
          /** The firstRecord value for the next page, or null when no next page is known. */
          nextFirstRecord: number | null;
        };
        /** The matching Web of Science documents. */
        documents: Array<{
          /** The Web of Science unique identifier. */
          uid: string;
          /** The document title when available. */
          title: string | null;
          /** The publication or source title when available. */
          sourceTitle: string | null;
          /** The publication year when available. */
          publicationYear: number | null;
          /** The document types assigned by Web of Science. */
          documentTypes: Array<string>;
          /** The normalized document authors. */
          authors: Array<{
            /** The author's display name when available. */
            displayName: string | null;
            /** The author's first name when available. */
            firstName: string | null;
            /** The author's last name when available. */
            lastName: string | null;
            /** The author's Web of Science ResearcherID when available. */
            researcherId: string | null;
            /** The author's ORCID identifier when available. */
            orcidId: string | null;
          }>;
          /** The normalized DOI and other document identifiers. */
          identifiers: Array<{
            /** The identifier type when available. */
            type: string | null;
            /** The identifier value when available. */
            value: string | null;
          }>;
          /** The Web of Science Core Collection times-cited count when available. */
          timesCited: number | null;
          /** The raw Expanded API document record. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Expanded API search response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
