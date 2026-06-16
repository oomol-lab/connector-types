import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Suggest Semantic Scholar paper query completions. */
    "semantic_scholar.autocomplete_papers": {
      input: {
        /**
         * The plain-text search query. Semantic Scholar does not support special query syntax.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The autocomplete suggestions returned by Semantic Scholar. */
        completions: Array<Record<string, unknown>>;
        /** The raw Semantic Scholar response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Bulk-search Semantic Scholar papers and page through large result sets with tokens. */
    "semantic_scholar.bulk_search_papers": {
      input: {
        /**
         * The plain-text search query. Semantic Scholar does not support special query syntax.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * A comma-separated list of Semantic Scholar fields to return, using dot notation for nested fields when needed.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The continuation token returned by Semantic Scholar.
         * @minLength 1
         * @pattern \S
         */
        token?: string;
        /**
         * The publication year or inclusive year range, such as 2019, 2016-2020, 2010-, or -2015.
         * @minLength 1
         * @pattern \S
         */
        year?: string;
        /**
         * A comma-separated list of publication venues to filter by, using full names or abbreviations.
         * @minLength 1
         * @pattern \S
         */
        venue?: string;
        /**
         * A comma-separated list of fields of study to filter by.
         * @minLength 1
         * @pattern \S
         */
        fieldsOfStudy?: string;
        /**
         * A comma-separated list of publication types to filter by, such as Review, JournalArticle, or Conference.
         * @minLength 1
         * @pattern \S
         */
        publicationTypes?: string;
        /**
         * The publication date or year filter, such as 2019, 2020-06, 2016-03-05:2020-06-06, 1981-08-25:, or :2015-01.
         * @minLength 1
         * @pattern \S
         */
        publicationDateOrYear?: string;
        /**
         * The minimum number of citations a paper must have.
         * @minimum 0
         */
        minCitationCount?: number;
        /** Whether to restrict results to papers with a public PDF available. */
        openAccessPdf?: boolean;
      };
      output: {
        /** The total result count when Semantic Scholar returns it. */
        total: number | null;
        /** The returned result offset when Semantic Scholar returns it. */
        offset: number | null;
        /** The next offset when Semantic Scholar returns it. */
        next: number | null;
        /** The continuation token when Semantic Scholar returns it. */
        token: string | null;
        /** The papers returned by Semantic Scholar. */
        papers: Array<Record<string, unknown>>;
        /** The raw Semantic Scholar response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get details for a Semantic Scholar author. */
    "semantic_scholar.get_author": {
      input: {
        /**
         * The Semantic Scholar author ID.
         * @minLength 1
         * @pattern \S
         */
        authorId: string;
        /**
         * A comma-separated list of Semantic Scholar fields to return, using dot notation for nested fields when needed.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
      };
      output: {
        /** The author object returned by Semantic Scholar. */
        author: Record<string, unknown>;
      };
    };
    /** List papers written by a Semantic Scholar author. */
    "semantic_scholar.get_author_papers": {
      input: {
        /**
         * The Semantic Scholar author ID.
         * @minLength 1
         * @pattern \S
         */
        authorId: string;
        /**
         * A comma-separated list of Semantic Scholar fields to return, using dot notation for nested fields when needed.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The total result count when Semantic Scholar returns it. */
        total: number | null;
        /** The returned result offset when Semantic Scholar returns it. */
        offset: number | null;
        /** The next offset when Semantic Scholar returns it. */
        next: number | null;
        /** The continuation token when Semantic Scholar returns it. */
        token: string | null;
        /** The papers returned by Semantic Scholar. */
        papers: Array<Record<string, unknown>>;
        /** The raw Semantic Scholar response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get details for multiple Semantic Scholar authors at once. */
    "semantic_scholar.get_authors": {
      input: {
        /**
         * The author IDs to request.
         * @minItems 1
         * @maxItems 1000
         */
        authorIds: Array<string>;
        /**
         * A comma-separated list of Semantic Scholar fields to return, using dot notation for nested fields when needed.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
      };
      output: {
        /** The authors returned in the same order as the requested IDs. */
        authors: Array<Record<string, unknown> | null>;
      };
    };
    /** Get details for a Semantic Scholar paper by paper ID or external identifier. */
    "semantic_scholar.get_paper": {
      input: {
        /**
         * The Semantic Scholar paper ID, CorpusId, DOI:<doi>, ARXIV:<id>, MAG:<id>, ACL:<id>, PMID:<id>, or PMCID:<id>.
         * @minLength 1
         * @pattern \S
         */
        paperId: string;
        /**
         * A comma-separated list of Semantic Scholar fields to return, using dot notation for nested fields when needed.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
      };
      output: {
        /** The paper object returned by Semantic Scholar. */
        paper: Record<string, unknown>;
      };
    };
    /** List authors for a Semantic Scholar paper. */
    "semantic_scholar.get_paper_authors": {
      input: {
        /**
         * The Semantic Scholar paper ID, CorpusId, DOI:<doi>, ARXIV:<id>, MAG:<id>, ACL:<id>, PMID:<id>, or PMCID:<id>.
         * @minLength 1
         * @pattern \S
         */
        paperId: string;
        /**
         * A comma-separated list of Semantic Scholar fields to return, using dot notation for nested fields when needed.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The total result count when Semantic Scholar returns it. */
        total: number | null;
        /** The returned result offset when Semantic Scholar returns it. */
        offset: number | null;
        /** The next offset when Semantic Scholar returns it. */
        next: number | null;
        /** The authors returned by Semantic Scholar. */
        authors: Array<Record<string, unknown>>;
        /** The raw Semantic Scholar response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List papers that cite a Semantic Scholar paper. */
    "semantic_scholar.get_paper_citations": {
      input: {
        /**
         * The Semantic Scholar paper ID, CorpusId, DOI:<doi>, ARXIV:<id>, MAG:<id>, ACL:<id>, PMID:<id>, or PMCID:<id>.
         * @minLength 1
         * @pattern \S
         */
        paperId: string;
        /**
         * A comma-separated list of Semantic Scholar fields to return, using dot notation for nested fields when needed.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The total edge count when Semantic Scholar returns it. */
        total: number | null;
        /** The returned result offset when Semantic Scholar returns it. */
        offset: number | null;
        /** The next offset when Semantic Scholar returns it. */
        next: number | null;
        /** The citation or reference edges returned by Semantic Scholar. */
        data: Array<Record<string, unknown>>;
        /** The raw Semantic Scholar response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List papers referenced by a Semantic Scholar paper. */
    "semantic_scholar.get_paper_references": {
      input: {
        /**
         * The Semantic Scholar paper ID, CorpusId, DOI:<doi>, ARXIV:<id>, MAG:<id>, ACL:<id>, PMID:<id>, or PMCID:<id>.
         * @minLength 1
         * @pattern \S
         */
        paperId: string;
        /**
         * A comma-separated list of Semantic Scholar fields to return, using dot notation for nested fields when needed.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The total edge count when Semantic Scholar returns it. */
        total: number | null;
        /** The returned result offset when Semantic Scholar returns it. */
        offset: number | null;
        /** The next offset when Semantic Scholar returns it. */
        next: number | null;
        /** The citation or reference edges returned by Semantic Scholar. */
        data: Array<Record<string, unknown>>;
        /** The raw Semantic Scholar response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get details for multiple Semantic Scholar papers at once. */
    "semantic_scholar.get_papers": {
      input: {
        /**
         * The paper IDs to request.
         * @minItems 1
         * @maxItems 500
         */
        paperIds: Array<string>;
        /**
         * A comma-separated list of Semantic Scholar fields to return, using dot notation for nested fields when needed.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
      };
      output: {
        /** The papers returned in the same order as the requested IDs. */
        papers: Array<Record<string, unknown> | null>;
      };
    };
    /** Find the best Semantic Scholar paper match for a paper title. */
    "semantic_scholar.match_paper_title": {
      input: {
        /**
         * The plain-text search query. Semantic Scholar does not support special query syntax.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * A comma-separated list of Semantic Scholar fields to return, using dot notation for nested fields when needed.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
      };
      output: {
        /** The paper object returned by Semantic Scholar. */
        paper: Record<string, unknown> | null;
        /** The raw Semantic Scholar response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get recommended Semantic Scholar papers for one positive example paper. */
    "semantic_scholar.recommend_for_paper": {
      input: {
        /**
         * The Semantic Scholar paper ID, CorpusId, DOI:<doi>, ARXIV:<id>, MAG:<id>, ACL:<id>, PMID:<id>, or PMCID:<id>.
         * @minLength 1
         * @pattern \S
         */
        paperId: string;
        /**
         * A comma-separated list of Semantic Scholar fields to return, using dot notation for nested fields when needed.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
        /**
         * The maximum number of recommendations to return.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
      };
      output: {
        /** The total result count when Semantic Scholar returns it. */
        total: number | null;
        /** The returned result offset when Semantic Scholar returns it. */
        offset: number | null;
        /** The next offset when Semantic Scholar returns it. */
        next: number | null;
        /** The continuation token when Semantic Scholar returns it. */
        token: string | null;
        /** The papers returned by Semantic Scholar. */
        papers: Array<Record<string, unknown>>;
        /** The raw Semantic Scholar response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get recommended Semantic Scholar papers from positive and optional negative examples. */
    "semantic_scholar.recommend_papers": {
      input: {
        /**
         * The paper IDs that represent positive examples.
         * @minItems 1
         * @maxItems 500
         */
        positivePaperIds: Array<string>;
        /**
         * The paper IDs that represent negative examples.
         * @minItems 1
         * @maxItems 500
         */
        negativePaperIds?: Array<string>;
        /**
         * A comma-separated list of Semantic Scholar fields to return, using dot notation for nested fields when needed.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
        /**
         * The maximum number of recommendations to return.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
      };
      output: {
        /** The total result count when Semantic Scholar returns it. */
        total: number | null;
        /** The returned result offset when Semantic Scholar returns it. */
        offset: number | null;
        /** The next offset when Semantic Scholar returns it. */
        next: number | null;
        /** The continuation token when Semantic Scholar returns it. */
        token: string | null;
        /** The papers returned by Semantic Scholar. */
        papers: Array<Record<string, unknown>>;
        /** The raw Semantic Scholar response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Semantic Scholar authors by name. */
    "semantic_scholar.search_authors": {
      input: {
        /**
         * The plain-text search query. Semantic Scholar does not support special query syntax.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * A comma-separated list of Semantic Scholar fields to return, using dot notation for nested fields when needed.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The total result count when Semantic Scholar returns it. */
        total: number | null;
        /** The returned result offset when Semantic Scholar returns it. */
        offset: number | null;
        /** The next offset when Semantic Scholar returns it. */
        next: number | null;
        /** The authors returned by Semantic Scholar. */
        authors: Array<Record<string, unknown>>;
        /** The raw Semantic Scholar response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Semantic Scholar papers by relevance with optional publication filters. */
    "semantic_scholar.search_papers": {
      input: {
        /**
         * The plain-text search query. Semantic Scholar does not support special query syntax.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * A comma-separated list of Semantic Scholar fields to return, using dot notation for nested fields when needed.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The publication year or inclusive year range, such as 2019, 2016-2020, 2010-, or -2015.
         * @minLength 1
         * @pattern \S
         */
        year?: string;
        /**
         * A comma-separated list of publication venues to filter by, using full names or abbreviations.
         * @minLength 1
         * @pattern \S
         */
        venue?: string;
        /**
         * A comma-separated list of fields of study to filter by.
         * @minLength 1
         * @pattern \S
         */
        fieldsOfStudy?: string;
        /**
         * A comma-separated list of publication types to filter by, such as Review, JournalArticle, or Conference.
         * @minLength 1
         * @pattern \S
         */
        publicationTypes?: string;
        /**
         * The publication date or year filter, such as 2019, 2020-06, 2016-03-05:2020-06-06, 1981-08-25:, or :2015-01.
         * @minLength 1
         * @pattern \S
         */
        publicationDateOrYear?: string;
        /**
         * The minimum number of citations a paper must have.
         * @minimum 0
         */
        minCitationCount?: number;
        /** Whether to restrict results to papers with a public PDF available. */
        openAccessPdf?: boolean;
      };
      output: {
        /** The total result count when Semantic Scholar returns it. */
        total: number | null;
        /** The returned result offset when Semantic Scholar returns it. */
        offset: number | null;
        /** The next offset when Semantic Scholar returns it. */
        next: number | null;
        /** The continuation token when Semantic Scholar returns it. */
        token: string | null;
        /** The papers returned by Semantic Scholar. */
        papers: Array<Record<string, unknown>>;
        /** The raw Semantic Scholar response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search text snippets in Semantic Scholar papers. */
    "semantic_scholar.search_snippets": {
      input: {
        /**
         * The plain-text search query. Semantic Scholar does not support special query syntax.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The total result count when Semantic Scholar returns it. */
        total: number | null;
        /** The returned result offset when Semantic Scholar returns it. */
        offset: number | null;
        /** The next offset when Semantic Scholar returns it. */
        next: number | null;
        /** The snippets returned by Semantic Scholar. */
        snippets: Array<Record<string, unknown>>;
        /** The raw Semantic Scholar response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
