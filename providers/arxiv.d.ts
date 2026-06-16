import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one arXiv paper by arXiv identifier. */
    "arxiv.get_paper": {
      input: {
        /**
         * The arXiv identifier to fetch, such as 2301.00001 or 2301.00001v1.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether arXiv returned a paper for the requested identifier. */
        found: boolean;
        /** A normalized arXiv paper. */
        paper: {
          /** The versioned arXiv identifier, such as 2301.00001v1. */
          id: string;
          /** The arXiv identifier without the version suffix. */
          baseId: string;
          /** The arXiv version number when present. */
          version: number | null;
          /** The paper title. */
          title: string;
          /** The paper abstract text. */
          summary: string;
          /**
           * The paper publication timestamp from arXiv.
           * @format date-time
           */
          publishedAt: string;
          /**
           * The paper update timestamp from arXiv.
           * @format date-time
           */
          updatedAt: string;
          /** The paper authors. */
          authors: Array<string>;
          /** The arXiv category terms assigned to the paper. */
          categories: Array<string>;
          /** The primary arXiv category term. */
          primaryCategory: string | null;
          /**
           * The arXiv abstract page URL.
           * @format uri
           */
          abstractUrl: string;
          /**
           * The arXiv PDF URL when arXiv provides one.
           * @format uri
           */
          pdfUrl: string | null;
          /** The DOI returned by arXiv when present. */
          doi: string | null;
          /** The journal reference returned by arXiv when present. */
          journalRef: string | null;
          /** The author comment returned by arXiv when present. */
          comment: string | null;
        } | null;
      };
    };
    /** Get multiple arXiv papers by arXiv identifiers. */
    "arxiv.get_papers": {
      input: {
        /**
         * The arXiv identifiers to fetch.
         * @minItems 1
         * @maxItems 100
         */
        ids: Array<string>;
        /**
         * The maximum number of papers to return.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
      };
      output: {
        /** The total number of results reported by arXiv. */
        totalResults: number;
        /** The zero-based start index reported by arXiv. */
        startIndex: number;
        /** The result page size reported by arXiv. */
        itemsPerPage: number;
        /** The normalized arXiv papers returned by the query. */
        papers: Array<{
          /** The versioned arXiv identifier, such as 2301.00001v1. */
          id: string;
          /** The arXiv identifier without the version suffix. */
          baseId: string;
          /** The arXiv version number when present. */
          version: number | null;
          /** The paper title. */
          title: string;
          /** The paper abstract text. */
          summary: string;
          /**
           * The paper publication timestamp from arXiv.
           * @format date-time
           */
          publishedAt: string;
          /**
           * The paper update timestamp from arXiv.
           * @format date-time
           */
          updatedAt: string;
          /** The paper authors. */
          authors: Array<string>;
          /** The arXiv category terms assigned to the paper. */
          categories: Array<string>;
          /** The primary arXiv category term. */
          primaryCategory: string | null;
          /**
           * The arXiv abstract page URL.
           * @format uri
           */
          abstractUrl: string;
          /**
           * The arXiv PDF URL when arXiv provides one.
           * @format uri
           */
          pdfUrl: string | null;
          /** The DOI returned by arXiv when present. */
          doi: string | null;
          /** The journal reference returned by arXiv when present. */
          journalRef: string | null;
          /** The author comment returned by arXiv when present. */
          comment: string | null;
        }>;
      };
    };
    /** List recent arXiv papers for one category sorted by submission date. */
    "arxiv.list_recent_papers": {
      input: {
        /**
         * The arXiv category term to query, such as cs.AI, cs.LG, math.CO, or physics.optics.
         * @minLength 1
         */
        category: string;
        /**
         * The zero-based result offset to request.
         * @minimum 0
         * @maximum 30000
         */
        start?: number;
        /**
         * The maximum number of papers to return.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The arXiv sort direction. */
        sortOrder?: "ascending" | "descending";
      };
      output: {
        /** The total number of results reported by arXiv. */
        totalResults: number;
        /** The zero-based start index reported by arXiv. */
        startIndex: number;
        /** The result page size reported by arXiv. */
        itemsPerPage: number;
        /** The normalized arXiv papers returned by the query. */
        papers: Array<{
          /** The versioned arXiv identifier, such as 2301.00001v1. */
          id: string;
          /** The arXiv identifier without the version suffix. */
          baseId: string;
          /** The arXiv version number when present. */
          version: number | null;
          /** The paper title. */
          title: string;
          /** The paper abstract text. */
          summary: string;
          /**
           * The paper publication timestamp from arXiv.
           * @format date-time
           */
          publishedAt: string;
          /**
           * The paper update timestamp from arXiv.
           * @format date-time
           */
          updatedAt: string;
          /** The paper authors. */
          authors: Array<string>;
          /** The arXiv category terms assigned to the paper. */
          categories: Array<string>;
          /** The primary arXiv category term. */
          primaryCategory: string | null;
          /**
           * The arXiv abstract page URL.
           * @format uri
           */
          abstractUrl: string;
          /**
           * The arXiv PDF URL when arXiv provides one.
           * @format uri
           */
          pdfUrl: string | null;
          /** The DOI returned by arXiv when present. */
          doi: string | null;
          /** The journal reference returned by arXiv when present. */
          journalRef: string | null;
          /** The author comment returned by arXiv when present. */
          comment: string | null;
        }>;
      };
    };
    /** Search arXiv papers by abstract text. */
    "arxiv.search_by_abstract": {
      input: {
        /**
         * The text to search for in arXiv abstract fields.
         * @minLength 1
         */
        abstractQuery: string;
        /**
         * The zero-based result offset to request.
         * @minimum 0
         * @maximum 30000
         */
        start?: number;
        /**
         * The maximum number of papers to return.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The arXiv sort field. */
        sortBy?: "relevance" | "lastUpdatedDate" | "submittedDate";
        /** The arXiv sort direction. */
        sortOrder?: "ascending" | "descending";
      };
      output: {
        /** The total number of results reported by arXiv. */
        totalResults: number;
        /** The zero-based start index reported by arXiv. */
        startIndex: number;
        /** The result page size reported by arXiv. */
        itemsPerPage: number;
        /** The normalized arXiv papers returned by the query. */
        papers: Array<{
          /** The versioned arXiv identifier, such as 2301.00001v1. */
          id: string;
          /** The arXiv identifier without the version suffix. */
          baseId: string;
          /** The arXiv version number when present. */
          version: number | null;
          /** The paper title. */
          title: string;
          /** The paper abstract text. */
          summary: string;
          /**
           * The paper publication timestamp from arXiv.
           * @format date-time
           */
          publishedAt: string;
          /**
           * The paper update timestamp from arXiv.
           * @format date-time
           */
          updatedAt: string;
          /** The paper authors. */
          authors: Array<string>;
          /** The arXiv category terms assigned to the paper. */
          categories: Array<string>;
          /** The primary arXiv category term. */
          primaryCategory: string | null;
          /**
           * The arXiv abstract page URL.
           * @format uri
           */
          abstractUrl: string;
          /**
           * The arXiv PDF URL when arXiv provides one.
           * @format uri
           */
          pdfUrl: string | null;
          /** The DOI returned by arXiv when present. */
          doi: string | null;
          /** The journal reference returned by arXiv when present. */
          journalRef: string | null;
          /** The author comment returned by arXiv when present. */
          comment: string | null;
        }>;
      };
    };
    /** Search arXiv papers by combining optional all-field, author, title, abstract, and category filters. */
    "arxiv.search_by_all_fields": {
      input: {
        /**
         * The text to search for across all arXiv fields.
         * @minLength 1
         */
        query?: string;
        /**
         * The author name to search for in arXiv author fields.
         * @minLength 1
         */
        author?: string;
        /**
         * The title text to search for in arXiv title fields.
         * @minLength 1
         */
        title?: string;
        /**
         * The text to search for in arXiv abstract fields.
         * @minLength 1
         */
        abstractQuery?: string;
        /**
         * The arXiv category term to query, such as cs.AI, cs.LG, math.CO, or physics.optics.
         * @minLength 1
         */
        category?: string;
        /**
         * The zero-based result offset to request.
         * @minimum 0
         * @maximum 30000
         */
        start?: number;
        /**
         * The maximum number of papers to return.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The arXiv sort field. */
        sortBy?: "relevance" | "lastUpdatedDate" | "submittedDate";
        /** The arXiv sort direction. */
        sortOrder?: "ascending" | "descending";
      };
      output: {
        /** The total number of results reported by arXiv. */
        totalResults: number;
        /** The zero-based start index reported by arXiv. */
        startIndex: number;
        /** The result page size reported by arXiv. */
        itemsPerPage: number;
        /** The normalized arXiv papers returned by the query. */
        papers: Array<{
          /** The versioned arXiv identifier, such as 2301.00001v1. */
          id: string;
          /** The arXiv identifier without the version suffix. */
          baseId: string;
          /** The arXiv version number when present. */
          version: number | null;
          /** The paper title. */
          title: string;
          /** The paper abstract text. */
          summary: string;
          /**
           * The paper publication timestamp from arXiv.
           * @format date-time
           */
          publishedAt: string;
          /**
           * The paper update timestamp from arXiv.
           * @format date-time
           */
          updatedAt: string;
          /** The paper authors. */
          authors: Array<string>;
          /** The arXiv category terms assigned to the paper. */
          categories: Array<string>;
          /** The primary arXiv category term. */
          primaryCategory: string | null;
          /**
           * The arXiv abstract page URL.
           * @format uri
           */
          abstractUrl: string;
          /**
           * The arXiv PDF URL when arXiv provides one.
           * @format uri
           */
          pdfUrl: string | null;
          /** The DOI returned by arXiv when present. */
          doi: string | null;
          /** The journal reference returned by arXiv when present. */
          journalRef: string | null;
          /** The author comment returned by arXiv when present. */
          comment: string | null;
        }>;
      };
    };
    /** Search arXiv papers by author name. */
    "arxiv.search_by_author": {
      input: {
        /**
         * The author name to search for in arXiv author fields.
         * @minLength 1
         */
        author: string;
        /**
         * The zero-based result offset to request.
         * @minimum 0
         * @maximum 30000
         */
        start?: number;
        /**
         * The maximum number of papers to return.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The arXiv sort field. */
        sortBy?: "relevance" | "lastUpdatedDate" | "submittedDate";
        /** The arXiv sort direction. */
        sortOrder?: "ascending" | "descending";
      };
      output: {
        /** The total number of results reported by arXiv. */
        totalResults: number;
        /** The zero-based start index reported by arXiv. */
        startIndex: number;
        /** The result page size reported by arXiv. */
        itemsPerPage: number;
        /** The normalized arXiv papers returned by the query. */
        papers: Array<{
          /** The versioned arXiv identifier, such as 2301.00001v1. */
          id: string;
          /** The arXiv identifier without the version suffix. */
          baseId: string;
          /** The arXiv version number when present. */
          version: number | null;
          /** The paper title. */
          title: string;
          /** The paper abstract text. */
          summary: string;
          /**
           * The paper publication timestamp from arXiv.
           * @format date-time
           */
          publishedAt: string;
          /**
           * The paper update timestamp from arXiv.
           * @format date-time
           */
          updatedAt: string;
          /** The paper authors. */
          authors: Array<string>;
          /** The arXiv category terms assigned to the paper. */
          categories: Array<string>;
          /** The primary arXiv category term. */
          primaryCategory: string | null;
          /**
           * The arXiv abstract page URL.
           * @format uri
           */
          abstractUrl: string;
          /**
           * The arXiv PDF URL when arXiv provides one.
           * @format uri
           */
          pdfUrl: string | null;
          /** The DOI returned by arXiv when present. */
          doi: string | null;
          /** The journal reference returned by arXiv when present. */
          journalRef: string | null;
          /** The author comment returned by arXiv when present. */
          comment: string | null;
        }>;
      };
    };
    /** Search arXiv papers by title text. */
    "arxiv.search_by_title": {
      input: {
        /**
         * The title text to search for in arXiv title fields.
         * @minLength 1
         */
        title: string;
        /**
         * The zero-based result offset to request.
         * @minimum 0
         * @maximum 30000
         */
        start?: number;
        /**
         * The maximum number of papers to return.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The arXiv sort field. */
        sortBy?: "relevance" | "lastUpdatedDate" | "submittedDate";
        /** The arXiv sort direction. */
        sortOrder?: "ascending" | "descending";
      };
      output: {
        /** The total number of results reported by arXiv. */
        totalResults: number;
        /** The zero-based start index reported by arXiv. */
        startIndex: number;
        /** The result page size reported by arXiv. */
        itemsPerPage: number;
        /** The normalized arXiv papers returned by the query. */
        papers: Array<{
          /** The versioned arXiv identifier, such as 2301.00001v1. */
          id: string;
          /** The arXiv identifier without the version suffix. */
          baseId: string;
          /** The arXiv version number when present. */
          version: number | null;
          /** The paper title. */
          title: string;
          /** The paper abstract text. */
          summary: string;
          /**
           * The paper publication timestamp from arXiv.
           * @format date-time
           */
          publishedAt: string;
          /**
           * The paper update timestamp from arXiv.
           * @format date-time
           */
          updatedAt: string;
          /** The paper authors. */
          authors: Array<string>;
          /** The arXiv category terms assigned to the paper. */
          categories: Array<string>;
          /** The primary arXiv category term. */
          primaryCategory: string | null;
          /**
           * The arXiv abstract page URL.
           * @format uri
           */
          abstractUrl: string;
          /**
           * The arXiv PDF URL when arXiv provides one.
           * @format uri
           */
          pdfUrl: string | null;
          /** The DOI returned by arXiv when present. */
          doi: string | null;
          /** The journal reference returned by arXiv when present. */
          journalRef: string | null;
          /** The author comment returned by arXiv when present. */
          comment: string | null;
        }>;
      };
    };
    /** Search arXiv papers using the official arXiv API query syntax. */
    "arxiv.search_papers": {
      input: {
        /**
         * The arXiv search query, using the official query syntax such as all:graphene or au:del_maestro.
         * @minLength 1
         */
        query: string;
        /**
         * The zero-based result offset to request.
         * @minimum 0
         * @maximum 30000
         */
        start?: number;
        /**
         * The maximum number of papers to return.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The arXiv sort field. */
        sortBy?: "relevance" | "lastUpdatedDate" | "submittedDate";
        /** The arXiv sort direction. */
        sortOrder?: "ascending" | "descending";
      };
      output: {
        /** The total number of results reported by arXiv. */
        totalResults: number;
        /** The zero-based start index reported by arXiv. */
        startIndex: number;
        /** The result page size reported by arXiv. */
        itemsPerPage: number;
        /** The normalized arXiv papers returned by the query. */
        papers: Array<{
          /** The versioned arXiv identifier, such as 2301.00001v1. */
          id: string;
          /** The arXiv identifier without the version suffix. */
          baseId: string;
          /** The arXiv version number when present. */
          version: number | null;
          /** The paper title. */
          title: string;
          /** The paper abstract text. */
          summary: string;
          /**
           * The paper publication timestamp from arXiv.
           * @format date-time
           */
          publishedAt: string;
          /**
           * The paper update timestamp from arXiv.
           * @format date-time
           */
          updatedAt: string;
          /** The paper authors. */
          authors: Array<string>;
          /** The arXiv category terms assigned to the paper. */
          categories: Array<string>;
          /** The primary arXiv category term. */
          primaryCategory: string | null;
          /**
           * The arXiv abstract page URL.
           * @format uri
           */
          abstractUrl: string;
          /**
           * The arXiv PDF URL when arXiv provides one.
           * @format uri
           */
          pdfUrl: string | null;
          /** The DOI returned by arXiv when present. */
          doi: string | null;
          /** The journal reference returned by arXiv when present. */
          journalRef: string | null;
          /** The author comment returned by arXiv when present. */
          comment: string | null;
        }>;
      };
    };
  }
}
