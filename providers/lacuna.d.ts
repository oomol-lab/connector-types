import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a source-linked Lacuna research context for an author. */
    "lacuna.get_author_context": {
      input: {
        /**
         * A Lacuna author ID or Lacuna author URL.
         * @minLength 1
         */
        authorIdOrUrl: string;
        /** The Lacuna response view. */
        view?: "context" | "full";
        /** Whether to include similar researchers in the author context. */
        includeNeighbors?: boolean;
      };
      output: {
        /** The Lacuna entity type. */
        type?: "paper" | "cluster" | "direction" | "author" | "institution" | "venue" | "hypothesis";
        /** The Lacuna entity identifier. */
        id?: string | number;
        /** The stable Lacuna context key. */
        context_key?: string;
        /** The entity title when present. */
        title?: string;
        /** The entity name when present. */
        name?: string;
        /**
         * The canonical Lacuna page URL for the entity.
         * @format uri
         */
        url?: string;
        /**
         * The Lacuna Markdown page URL when present.
         * @format uri
         */
        markdown_url?: string;
        /** The source-linked Lacuna summary in Markdown when present. */
        summary_markdown?: string;
        /** The source-linked Lacuna author profile in Markdown when present. */
        profile_markdown?: string;
        /**
         * The normalized Lacuna author identifier.
         * @minLength 1
         */
        author_id: string;
        /** A compact set of the author's papers when present. */
        papers?: Array<{
          /**
           * The Lacuna paper artifact identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The canonical Lacuna page URL for the entity.
           * @format uri
           */
          url: string;
          /** The paper title. */
          title: string;
          /** The publication year. */
          year?: number;
          /** The publication venue when present. */
          venue?: string;
          /** The compact author names or author objects returned for the paper. */
          authors?: Array<string | Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get a Lacuna research direction by numeric ID or Lacuna direction URL. */
    "lacuna.get_direction": {
      input: {
        /** A Lacuna research direction identifier or URL. */
        directionIdOrUrl: number | string;
        /** The Lacuna response view. */
        view?: "context" | "full";
      };
      output: {
        /** The Lacuna entity type. */
        type?: "paper" | "cluster" | "direction" | "author" | "institution" | "venue" | "hypothesis";
        /** The Lacuna entity identifier. */
        id?: string | number;
        /** The stable Lacuna context key. */
        context_key?: string;
        /** The entity title when present. */
        title?: string;
        /** The entity name when present. */
        name?: string;
        /**
         * The canonical Lacuna page URL for the entity.
         * @format uri
         */
        url?: string;
        /**
         * The Lacuna Markdown page URL when present.
         * @format uri
         */
        markdown_url?: string;
        /** The source-linked Lacuna summary in Markdown when present. */
        summary_markdown?: string;
        /** The source-linked Lacuna author profile in Markdown when present. */
        profile_markdown?: string;
        /**
         * The normalized Lacuna research direction identifier.
         * @exclusiveMinimum 0
         */
        cluster_id: number;
        /** A compact set of papers in the direction when present. */
        papers?: Array<{
          /**
           * The Lacuna paper artifact identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The canonical Lacuna page URL for the entity.
           * @format uri
           */
          url: string;
          /** The paper title. */
          title: string;
          /** The publication year. */
          year?: number;
          /** The publication venue when present. */
          venue?: string;
          /** The compact author names or author objects returned for the paper. */
          authors?: Array<string | Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List papers attached to a Lacuna research direction. */
    "lacuna.get_direction_papers": {
      input: {
        /** A Lacuna research direction identifier or URL. */
        directionIdOrUrl: number | string;
        /**
         * The one-based page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of papers to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The per-paper response view. */
        view?: "compact" | "full";
      };
      output: {
        /**
         * The normalized Lacuna research direction identifier.
         * @exclusiveMinimum 0
         */
        cluster_id: number;
        /** The papers attached to the research direction. */
        papers: Array<{
          /**
           * The Lacuna paper artifact identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The canonical Lacuna page URL for the entity.
           * @format uri
           */
          url: string;
          /** The paper title. */
          title: string;
          /** The publication year. */
          year?: number;
          /** The publication venue when present. */
          venue?: string;
          /** The compact author names or author objects returned for the paper. */
          authors?: Array<string | Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /**
         * The returned one-based page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The returned page size.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The total number of papers in the direction.
         * @minimum 0
         */
        total?: number;
        /** Whether another page is available. */
        has_more?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get a generated Lacuna research hypothesis by ID or Lacuna hypothesis URL. */
    "lacuna.get_hypothesis": {
      input: {
        /**
         * A Lacuna hypothesis ID or Lacuna hypothesis URL.
         * @minLength 1
         */
        hypothesisIdOrUrl: string;
        /** The Lacuna response view. */
        view?: "context" | "full";
      };
      output: {
        /** The Lacuna entity type. */
        type?: "paper" | "cluster" | "direction" | "author" | "institution" | "venue" | "hypothesis";
        /** The Lacuna entity identifier. */
        id?: string | number;
        /** The stable Lacuna context key. */
        context_key?: string;
        /** The entity title when present. */
        title?: string;
        /** The entity name when present. */
        name?: string;
        /**
         * The canonical Lacuna page URL for the entity.
         * @format uri
         */
        url?: string;
        /**
         * The Lacuna Markdown page URL when present.
         * @format uri
         */
        markdown_url?: string;
        /** The source-linked Lacuna summary in Markdown when present. */
        summary_markdown?: string;
        /** The source-linked Lacuna author profile in Markdown when present. */
        profile_markdown?: string;
        /**
         * The normalized Lacuna hypothesis identifier.
         * @minLength 1
         */
        hypothesis_id: string;
        [key: string]: unknown;
      };
    };
    /** Get a Lacuna paper by artifact ID or Lacuna paper URL. */
    "lacuna.get_paper": {
      input: {
        /**
         * A Lacuna paper artifact ID or Lacuna paper URL.
         * @minLength 1
         */
        paperIdOrUrl: string;
        /** The paper response view. */
        view?: "context" | "full" | "preview" | "blog" | "figures" | "concepts" | "neighbors";
        /**
         * The maximum number of figures in the context view.
         * @minimum 0
         */
        figureLimit?: number;
      };
      output: {
        /** The Lacuna entity type. */
        type?: "paper" | "cluster" | "direction" | "author" | "institution" | "venue" | "hypothesis";
        /** The Lacuna entity identifier. */
        id?: string | number;
        /** The stable Lacuna context key. */
        context_key?: string;
        /** The entity title when present. */
        title?: string;
        /** The entity name when present. */
        name?: string;
        /**
         * The canonical Lacuna page URL for the entity.
         * @format uri
         */
        url?: string;
        /**
         * The Lacuna Markdown page URL when present.
         * @format uri
         */
        markdown_url?: string;
        /** The source-linked Lacuna summary in Markdown when present. */
        summary_markdown?: string;
        /** The source-linked Lacuna author profile in Markdown when present. */
        profile_markdown?: string;
        /**
         * The normalized Lacuna paper artifact identifier.
         * @minLength 1
         */
        artifact_id: string;
        [key: string]: unknown;
      };
    };
    /** Search Lacuna's machine-learning research map for papers, research directions, authors, venues, institutions, or generated hypotheses. */
    "lacuna.search": {
      input: {
        /**
         * The research query.
         * @minLength 1
         */
        query: string;
        /** The entity type to search, including official aliases. */
        searchType?: "all" | "paper" | "papers" | "cluster" | "clusters" | "direction" | "directions" | "author" | "authors" | "institution" | "institutions" | "venue" | "venues" | "hypothesis" | "hypotheses" | "proposal" | "proposals";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * An inclusive publication date bound in YYYY, YYYY-MM, or YYYY-MM-DD format.
         * @pattern ^(?!0000)\d{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12]\d|3[01]))?)?$
         */
        dateFrom?: string;
        /**
         * An inclusive publication date bound in YYYY, YYYY-MM, or YYYY-MM-DD format.
         * @pattern ^(?!0000)\d{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12]\d|3[01]))?)?$
         */
        dateTo?: string;
        /**
         * A venue name or key used to filter paper results.
         * @minLength 1
         */
        venue?: string;
        /** The result ordering. */
        sort?: "relevance" | "year_desc" | "year_asc";
        /** The Lacuna ranking profile. */
        rankingProfile?: "default" | "lexical" | "semantic" | "bm25" | "bm25_title_abstract";
        /**
         * Optional comma-separated lexical fields with optional weights, such as title^4,abstract. Each field must exist on the searched type: title (paper, cluster, venue, hypothesis), abstract/summary/concepts (paper), name (author, institution, venue), top_names (cluster, hypothesis), venue (paper, venue).
         * @minLength 1
         */
        fields?: string;
      };
      output: {
        /** The normalized search query. */
        query: string;
        /** The normalized entity type applied by Lacuna. */
        type_filter?: "all" | "paper" | "cluster" | "author" | "institution" | "venue" | "hypothesis";
        /**
         * The total number of matching Lacuna entities.
         * @minimum 0
         */
        total_results: number;
        /** The matching Lacuna entities. */
        results: Array<{
          /** The Lacuna entity type. */
          type: "paper" | "cluster" | "direction" | "author" | "institution" | "venue" | "hypothesis";
          /**
           * The Lacuna entity identifier.
           * @minLength 1
           */
          id: string;
          /** The relevance score reported by Lacuna. */
          score: number;
          /**
           * The canonical Lacuna page URL for the entity.
           * @format uri
           */
          url: string;
          /** The paper, direction, venue, or hypothesis title when present. */
          title?: string;
          /** The author or institution name when present. */
          name?: string;
          /** The publication year when present. */
          year?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
