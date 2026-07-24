import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Scopus abstract record by a documented document identifier. */
    "scopus.get_abstract": {
      input: {
        /** The identifier namespace used by the supplied value. */
        identifierType: "scopus_id" | "doi" | "eid" | "pii" | "pubmed_id" | "pui";
        /**
         * The document identifier in the selected namespace.
         * @minLength 1
         * @pattern \S
         */
        identifier: string;
        /** The Abstract Retrieval response view. */
        view?: "META" | "META_ABS" | "FULL" | "REF" | "ENTITLED";
        /**
         * A comma-separated list of official Elsevier response fields. Supplying fields overrides the selected view.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        referenceStart?: number;
        /**
         * The maximum number of reference records to return, subject to the selected endpoint and view limits.
         * @exclusiveMinimum 0
         */
        referenceCount?: number;
      };
      output: {
        /** One raw Scopus record returned by Elsevier. */
        record: Record<string, unknown>;
        /** The Scopus quota metadata returned in response headers. */
        quota: {
          /**
           * The weekly request quota when Elsevier returns it.
           * @minimum 0
           */
          limit: number | null;
          /**
           * The remaining requests in the current quota window.
           * @minimum 0
           */
          remaining: number | null;
          /**
           * The ISO 8601 time when the current quota window resets.
           * @format date-time
           */
          resetAt: string | null;
        };
        /** The raw JSON response returned by Elsevier. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Scopus affiliation profile data by affiliation ID or EID. */
    "scopus.get_affiliation": {
      input: {
        /** The identifier namespace used by the supplied value. */
        identifierType: "affiliation_id" | "eid";
        /**
         * The affiliation identifier in the selected namespace.
         * @minLength 1
         * @pattern \S
         */
        identifier: string;
        /** The Affiliation Retrieval response view. */
        view?: "LIGHT" | "STANDARD" | "DOCUMENTS" | "AUTHORS" | "ENTITLED";
        /**
         * A comma-separated list of official Elsevier response fields. Supplying fields overrides the selected view.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        referenceStart?: number;
        /**
         * The maximum number of reference records to return, subject to the selected endpoint and view limits.
         * @exclusiveMinimum 0
         */
        referenceCount?: number;
      };
      output: {
        /** The affiliation profiles returned by Scopus. */
        profiles: Array<Record<string, unknown>>;
        /** The Scopus quota metadata returned in response headers. */
        quota: {
          /**
           * The weekly request quota when Elsevier returns it.
           * @minimum 0
           */
          limit: number | null;
          /**
           * The remaining requests in the current quota window.
           * @minimum 0
           */
          remaining: number | null;
          /**
           * The ISO 8601 time when the current quota window resets.
           * @format date-time
           */
          resetAt: string | null;
        };
        /** The raw JSON response returned by Elsevier. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Scopus author profile data by author ID, EID, or ORCID. */
    "scopus.get_author": {
      input: {
        /** The identifier namespace used by the supplied value. */
        identifierType: "author_id" | "eid" | "orcid";
        /**
         * The author identifier in the selected namespace.
         * @minLength 1
         * @pattern \S
         */
        identifier: string;
        /** The Author Retrieval response view. */
        view?: "LIGHT" | "STANDARD" | "ENHANCED" | "METRICS" | "DOCUMENTS" | "ENTITLED" | "ORCID" | "ORCID_BIO" | "ORCID_WORKS";
        /**
         * A comma-separated list of official Elsevier response fields. Supplying fields overrides the selected view.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
        /** Whether Elsevier should substitute a superseded author profile with its current alias. */
        resolveAliases?: boolean;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        referenceStart?: number;
        /**
         * The maximum number of reference records to return, subject to the selected endpoint and view limits.
         * @exclusiveMinimum 0
         */
        referenceCount?: number;
      };
      output: {
        /** The author profiles returned by Scopus. */
        profiles: Array<Record<string, unknown>>;
        /** The Scopus quota metadata returned in response headers. */
        quota: {
          /**
           * The weekly request quota when Elsevier returns it.
           * @minimum 0
           */
          limit: number | null;
          /**
           * The remaining requests in the current quota window.
           * @minimum 0
           */
          remaining: number | null;
          /**
           * The ISO 8601 time when the current quota window resets.
           * @format date-time
           */
          resetAt: string | null;
        };
        /** The raw JSON response returned by Elsevier. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Scopus affiliation profiles with the official Boolean query syntax and return one normalized result page. */
    "scopus.search_affiliations": {
      input: {
        /**
         * The official Scopus Affiliation Search query, such as AFFIL(University of Oxford).
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * A comma-separated list of official Elsevier response fields. Supplying fields overrides the selected view.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        start?: number;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 200
         */
        count?: number;
        /**
         * An official Elsevier sort expression. Prefix a field with + or - and separate up to three fields with commas.
         * @minLength 1
         * @pattern \S
         */
        sort?: string;
        /**
         * An official Elsevier facet expression, including optional bucket dimensions in parentheses.
         * @minLength 1
         * @pattern \S
         */
        facets?: string;
      };
      output: {
        /**
         * The total number of matching records.
         * @minimum 0
         */
        totalResults: number | null;
        /**
         * The zero-based offset of this result page.
         * @minimum 0
         */
        startIndex: number | null;
        /**
         * The number of records in this result page.
         * @minimum 0
         */
        itemsPerPage: number | null;
        /** The raw Scopus result records in this page. */
        entries: Array<Record<string, unknown>>;
        /** The raw facet buckets returned for this search. */
        facets: Array<Record<string, unknown>>;
        /** The navigation links returned for this search. */
        links: Array<Record<string, unknown>>;
        /** The Scopus quota metadata returned in response headers. */
        quota: {
          /**
           * The weekly request quota when Elsevier returns it.
           * @minimum 0
           */
          limit: number | null;
          /**
           * The remaining requests in the current quota window.
           * @minimum 0
           */
          remaining: number | null;
          /**
           * The ISO 8601 time when the current quota window resets.
           * @format date-time
           */
          resetAt: string | null;
        };
        /** The raw JSON response returned by Elsevier. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Scopus author profiles with the official Boolean query syntax and return one normalized result page. */
    "scopus.search_authors": {
      input: {
        /**
         * The official Scopus Author Search query, such as AUTHLASTNAME(Smith) AND AFFIL(University).
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * A comma-separated list of official Elsevier response fields. Supplying fields overrides the selected view.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        start?: number;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 200
         */
        count?: number;
        /**
         * An official Elsevier sort expression. Prefix a field with + or - and separate up to three fields with commas.
         * @minLength 1
         * @pattern \S
         */
        sort?: string;
        /**
         * An official Elsevier facet expression, including optional bucket dimensions in parentheses.
         * @minLength 1
         * @pattern \S
         */
        facets?: string;
        /** Whether Elsevier should substitute superseded author identifiers with their current aliases. */
        resolveAliases?: boolean;
      };
      output: {
        /**
         * The total number of matching records.
         * @minimum 0
         */
        totalResults: number | null;
        /**
         * The zero-based offset of this result page.
         * @minimum 0
         */
        startIndex: number | null;
        /**
         * The number of records in this result page.
         * @minimum 0
         */
        itemsPerPage: number | null;
        /** The raw Scopus result records in this page. */
        entries: Array<Record<string, unknown>>;
        /** The raw facet buckets returned for this search. */
        facets: Array<Record<string, unknown>>;
        /** The navigation links returned for this search. */
        links: Array<Record<string, unknown>>;
        /** The Scopus quota metadata returned in response headers. */
        quota: {
          /**
           * The weekly request quota when Elsevier returns it.
           * @minimum 0
           */
          limit: number | null;
          /**
           * The remaining requests in the current quota window.
           * @minimum 0
           */
          remaining: number | null;
          /**
           * The ISO 8601 time when the current quota window resets.
           * @format date-time
           */
          resetAt: string | null;
        };
        /** The raw JSON response returned by Elsevier. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Scopus documents with the official Boolean query syntax and return one normalized result page. */
    "scopus.search_documents": {
      input: {
        /**
         * The official Scopus Boolean query, such as TITLE-ABS-KEY(machine learning) AND PUBYEAR > 2020.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /** The Scopus Search response view. */
        view?: "STANDARD" | "COMPLETE";
        /**
         * A comma-separated list of official Elsevier response fields. Supplying fields overrides the selected view.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        start?: number;
        /**
         * The maximum number of results. STANDARD supports up to 200; COMPLETE supports up to 25.
         * @minimum 1
         * @maximum 200
         */
        count?: number;
        /**
         * An official Elsevier sort expression. Prefix a field with + or - and separate up to three fields with commas.
         * @minLength 1
         * @pattern \S
         */
        sort?: string;
        /**
         * The publication year or inclusive year range, such as 2024 or 2020-2024.
         * @minLength 1
         * @pattern \S
         */
        dateRange?: string;
        /**
         * A Scopus subject-area abbreviation such as COMP, MEDI, or SOCI.
         * @minLength 1
         * @pattern \S
         */
        subjectArea?: string;
        /** The Scopus content category to search. */
        content?: "core" | "dummy" | "all";
        /**
         * An official Elsevier facet expression, including optional bucket dimensions in parentheses.
         * @minLength 1
         * @pattern \S
         */
        facets?: string;
      };
      output: {
        /**
         * The total number of matching records.
         * @minimum 0
         */
        totalResults: number | null;
        /**
         * The zero-based offset of this result page.
         * @minimum 0
         */
        startIndex: number | null;
        /**
         * The number of records in this result page.
         * @minimum 0
         */
        itemsPerPage: number | null;
        /** The raw Scopus result records in this page. */
        entries: Array<Record<string, unknown>>;
        /** The raw facet buckets returned for this search. */
        facets: Array<Record<string, unknown>>;
        /** The navigation links returned for this search. */
        links: Array<Record<string, unknown>>;
        /** The Scopus quota metadata returned in response headers. */
        quota: {
          /**
           * The weekly request quota when Elsevier returns it.
           * @minimum 0
           */
          limit: number | null;
          /**
           * The remaining requests in the current quota window.
           * @minimum 0
           */
          remaining: number | null;
          /**
           * The ISO 8601 time when the current quota window resets.
           * @format date-time
           */
          resetAt: string | null;
        };
        /** The raw JSON response returned by Elsevier. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Scopus serial sources by title, ISSN, publisher, subject, content type, or open-access status. */
    "scopus.search_sources": {
      input: {
        /**
         * A partial or complete serial source title.
         * @minLength 1
         * @pattern \S
         */
        title?: string;
        /**
         * An ISSN identifying a serial source.
         * @minLength 1
         * @pattern \S
         */
        issn?: string;
        /**
         * A partial publisher name.
         * @minLength 1
         * @pattern \S
         */
        publisher?: string;
        /**
         * A Scopus subject-area abbreviation such as COMP, MEDI, or SOCI.
         * @minLength 1
         * @pattern \S
         */
        subjectArea?: string;
        /**
         * A Scopus subject-area code.
         * @minLength 1
         * @pattern \S
         */
        subjectCode?: string;
        /** The serial source content type. */
        contentType?: "tradejournal" | "journal" | "conferenceproceeding" | "bookseries";
        /** The serial source open-access filter. */
        openAccess?: "all" | "full" | "partial" | "none";
        /**
         * The publication year or inclusive year range, such as 2024 or 2020-2024.
         * @minLength 1
         * @pattern \S
         */
        dateRange?: string;
        /** The Serial Title response view. */
        view?: "STANDARD" | "ENHANCED" | "CITESCORE";
        /**
         * A comma-separated list of official Elsevier response fields. Supplying fields overrides the selected view.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        start?: number;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 200
         */
        count?: number;
      };
      output: {
        /**
         * The total number of matching records.
         * @minimum 0
         */
        totalResults: number | null;
        /**
         * The zero-based offset of this result page.
         * @minimum 0
         */
        startIndex: number | null;
        /**
         * The number of records in this result page.
         * @minimum 0
         */
        itemsPerPage: number | null;
        /** The raw Scopus result records in this page. */
        entries: Array<Record<string, unknown>>;
        /** The raw facet buckets returned for this search. */
        facets: Array<Record<string, unknown>>;
        /** The navigation links returned for this search. */
        links: Array<Record<string, unknown>>;
        /** The Scopus quota metadata returned in response headers. */
        quota: {
          /**
           * The weekly request quota when Elsevier returns it.
           * @minimum 0
           */
          limit: number | null;
          /**
           * The remaining requests in the current quota window.
           * @minimum 0
           */
          remaining: number | null;
          /**
           * The ISO 8601 time when the current quota window resets.
           * @format date-time
           */
          resetAt: string | null;
        };
        /** The raw JSON response returned by Elsevier. */
        raw: Record<string, unknown>;
      };
    };
  }
}
