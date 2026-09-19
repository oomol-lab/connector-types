import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search across Baixiao's databases by title, author, journal, publisher, publication period, document type, and language. */
    "baixiao.advanced_search": {
      input: {
        /** A fuzzy title query. */
        title?: string;
        /** An exact author name, matched case-insensitively where supported. */
        author?: string;
        /** An exact journal name, matched case-insensitively where supported. */
        journal?: string;
        /** An exact publisher name, matched case-insensitively where supported. */
        publisher?: string;
        /** One publication year to match. */
        year?: number;
        /** The earliest publication year to include. */
        year_from?: number;
        /** The latest publication year to include. */
        year_to?: number;
        /** The document type to include. */
        doc_type?: string;
        /** The result language filter. */
        language?: string;
        /**
         * The maximum number of works to return. Defaults to 20.
         * @default 20
         */
        limit?: number;
      };
      output: Record<string, unknown>;
    };
    /** Call a current Baixiao MCP tool with JSON arguments after inspecting its live schema and behavior annotations with list_tools. */
    "baixiao.call_tool": {
      input: {
        /**
         * The exact tool name returned by list_tools.
         * @minLength 1
         */
        toolName: string;
        /** JSON arguments matching the inputSchema returned for the selected tool. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Traverse the works that cite a paper or the references cited by that paper for literature-review expansion. */
    "baixiao.citation_graph": {
      input: {
        /** A DOI or the external_id returned by a previous Baixiao search. */
        paper_id: string;
        /**
         * The citation-graph direction. Defaults to cited_by.
         * @default "cited_by"
         */
        direction?: "cited_by" | "references";
        /**
         * The maximum number of related works to return. Defaults to 20.
         * @default 20
         */
        limit?: number;
      };
      output: Record<string, unknown>;
    };
    /** Search Baixiao's curated humanities and social-science corpus, especially for Chinese-language scholarship and Chinese authors. */
    "baixiao.corpus_search": {
      input: {
        /** The literature or research question to search for. */
        query: string;
        /** Baixiao collection IDs used to restrict the search. */
        collection_ids?: Array<string>;
        /**
         * The maximum number of documents to return. Defaults to 15.
         * @default 15
         */
        page_size?: number;
      };
      output: Record<string, unknown>;
    };
    /** Search Baixiao's international academic coverage for English-language papers and citable metadata. */
    "baixiao.external_search": {
      input: {
        /** The international literature query. */
        query: string;
        /**
         * The maximum number of papers to return. Defaults to 15.
         * @default 15
         */
        limit?: number;
        /** The earliest publication year to include. */
        from_year?: number;
        /** The latest publication year to include. */
        to_year?: number;
      };
      output: Record<string, unknown>;
    };
    /** Complete a partial or messy citation into clean publication metadata and return alternate matches. */
    "baixiao.fetch_metadata": {
      input: {
        /** The partial citation, rough title, or author-year-title text. */
        query: string;
        /** The publication year used to disambiguate matches. */
        year?: number;
        /**
         * The maximum number of candidate matches to return. Defaults to 5.
         * @default 5
         */
        top?: number;
      };
      output: Record<string, unknown>;
    };
    /** Complete multiple partial references into clean publication metadata in one request. */
    "baixiao.fetch_metadata_batch": {
      input: {
        /** Partial references to resolve. */
        queries: Array<string>;
        /**
         * The maximum number of parallel lookups performed by Baixiao. Defaults to 8.
         * @default 8
         */
        max_concurrency?: number;
      };
      output: Record<string, unknown>;
    };
    /** Suggest potential peer reviewers by ranking authors of topic-matching works while excluding manuscript authors when requested. */
    "baixiao.find_reviewers": {
      input: {
        /** Topic keywords used to rank relevant records. */
        keywords: Array<string>;
        /** The result language filter. */
        language?: string;
        /** Manuscript authors to exclude from reviewer suggestions. */
        exclude_authors?: Array<string>;
        /**
         * The maximum number of reviewers to return. Defaults to 15.
         * @default 15
         */
        top?: number;
        /**
         * The number of deterministic keyword-expansion rounds. Defaults to 2.
         * @default 2
         */
        rounds?: number;
      };
      output: Record<string, unknown>;
    };
    /** Get a short-lived PDF download link for an available document in Baixiao's public corpus; a successful lookup consumes the connected account's credits. */
    "baixiao.get_pdf": {
      input: {
        /** The external_id returned by a Baixiao corpus or advanced search result. */
        identifier: string;
      };
      output: Record<string, unknown>;
    };
    /** Search Baixiao's awarded research projects by topic, investigator, institution, geography, funder, program, discipline, outcome, or year. */
    "baixiao.grants_award_search": {
      input: {
        /** Topic terms found in project titles or descriptions. */
        query?: string;
        /** The principal investigator or project leader. */
        person?: string;
        /** The host or investigator institution. */
        institution?: string;
        /** A mainland China region associated with the investigator. */
        region?: string;
        /** A funding-body name or Baixiao funder ID. */
        funder?: string;
        /** The funding program or project category. */
        program?: string;
        /** The academic discipline. */
        discipline?: string;
        /** The completion or outcome grade. */
        outcome_grade?: string;
        /** The earliest award year to include. */
        year_from?: number;
        /** The latest award year to include. */
        year_to?: number;
        /** The geographic data sources to search. */
        sources?: Array<"cn" | "nih" | "nsf" | "hk" | "eu">;
        /**
         * The maximum number of project records to return. Defaults to 10.
         * @default 10
         */
        limit?: number;
      };
      output: Record<string, unknown>;
    };
    /** Search Baixiao's research funding calls by topic, geography, funder, status, deadline, year, and minimum award amount. */
    "baixiao.grants_cfp_search": {
      input: {
        /** Topic terms without generic funding or application words. */
        query?: string;
        /** A mainland China province or national for nationwide calls. */
        region?: string;
        /** A funding-body name or Baixiao funder ID. */
        funder?: string;
        /** The application status to include. */
        status?: "open" | "closed" | "unknown";
        /**
         * The earliest application deadline in YYYY-MM-DD format.
         * @format date
         */
        deadline_from?: string;
        /**
         * The latest application deadline in YYYY-MM-DD format.
         * @format date
         */
        deadline_to?: string;
        /** The earliest notice publication year to include. */
        year_from?: number;
        /** The latest notice publication year to include. */
        year_to?: number;
        /** The minimum parsed single-project award amount in yuan. */
        amount_min?: number;
        /** The geographic data sources to search. */
        sources?: Array<"cn" | "nih" | "nsf" | "hk" | "eu">;
        /**
         * The maximum number of calls to return. Defaults to 10.
         * @default 10
         */
        limit?: number;
      };
      output: Record<string, unknown>;
    };
    /** Search Baixiao's Hong Kong RGC funded-project collection by free text and award period. */
    "baixiao.hk_grants_search": {
      input: {
        /** A short free-text query for a topic, principal investigator, institution, or funding scheme. */
        query?: string;
        /** One award year to match. */
        year?: number;
        /** The earliest award year to include. */
        year_from?: number;
        /** The latest award year to include. */
        year_to?: number;
        /**
         * The maximum number of projects to return, up to 50. Defaults to 5.
         * @maximum 50
         * @default 5
         */
        limit?: number;
      };
      output: Record<string, unknown>;
    };
    /** Recommend publication venues for a manuscript by ranking journals with topic-matching works in Baixiao's databases. */
    "baixiao.journal_fit": {
      input: {
        /** Topic keywords used to rank relevant records. */
        keywords: Array<string>;
        /** The result language, or omit it for automatic detection. */
        language?: "zh" | "en";
        /**
         * The maximum number of journals to return. Defaults to 10.
         * @default 10
         */
        top?: number;
        /**
         * The number of deterministic keyword-expansion rounds. Defaults to 2.
         * @default 2
         */
        rounds?: number;
      };
      output: Record<string, unknown>;
    };
    /** List the connected user's available Baixiao knowledge bases and their collection IDs for later searches. */
    "baixiao.list_my_kbs": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Discover the current Baixiao literature, knowledge-base, policy, and research-funding MCP tools with their live input schemas and behavior annotations. */
    "baixiao.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools currently exposed by the Baixiao MCP service. */
        tools: Array<{
          /**
           * The exact Baixiao MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current tool description supplied by Baixiao MCP. */
          description?: string;
          /** MCP behavior hints supplied by Baixiao for the tool. */
          annotations?: {
            /** A human-readable title for the tool. */
            title?: string;
            /** Whether the tool is expected not to modify data. */
            readOnlyHint?: boolean;
            /** Whether the tool may perform destructive operations. */
            destructiveHint?: boolean;
            /** Whether repeated calls with the same arguments are expected to be idempotent. */
            idempotentHint?: boolean;
            /** Whether the tool may interact with entities outside Baixiao. */
            openWorldHint?: boolean;
            [key: string]: unknown;
          };
          /** The current JSON Schema for the tool arguments, supplied by Baixiao MCP. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
    /** Search the connected user's personal, team, teaching, and subscribed Baixiao knowledge bases. */
    "baixiao.my_kb_search": {
      input: {
        /** The query to search across the connected user's knowledge bases. */
        query: string;
        /** Baixiao collection IDs used to restrict the search. */
        collection_ids?: Array<string>;
        /**
         * The maximum number of results to return. Defaults to 15.
         * @default 15
         */
        limit?: number;
      };
      output: Record<string, unknown>;
    };
    /** Search Baixiao's central and local Chinese government policy collection by text, issuer, author, period, or document type. */
    "baixiao.policy_search": {
      input: {
        /** A free-text policy topic or phrase. */
        query?: string;
        /** The document author. */
        author?: string;
        /** The issuing government body. */
        issuer?: string;
        /** One publication year to match. */
        year?: number;
        /** The earliest publication year to include. */
        year_from?: number;
        /** The latest publication year to include. */
        year_to?: number;
        /** The policy document type to include. */
        doc_type?: string;
        /**
         * The maximum number of policies to return. Defaults to 15.
         * @default 15
         */
        limit?: number;
      };
      output: Record<string, unknown>;
    };
    /** Look up one reference across Baixiao's databases and report its match status, best candidate, confidence, and metadata warnings. */
    "baixiao.verify_reference": {
      input: {
        /** The title of the work to verify. */
        title: string;
        /** The expected publication year. */
        year?: number;
        /** The expected journal or publication venue. */
        journal?: string;
        /** The expected DOI, with or without the DOI prefix. */
        doi?: string;
        /** The expected authors. */
        authors?: Array<string>;
        /** The result language, or omit it for automatic detection. */
        language?: "zh" | "en";
        /**
         * Whether the reference is a book.
         * @default false
         */
        is_book?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Batch-check a bibliography across Baixiao's databases and return per-reference match results with aggregate counts. */
    "baixiao.verify_references": {
      input: {
        /** References to verify. */
        references: Array<{
          /** The work title, recommended when no DOI is available. */
          title?: string;
          /** The publication year. */
          year?: number;
          /** The journal or publication venue. */
          journal?: string;
          /** The DOI, with or without the DOI prefix. */
          doi?: string;
          /** The known authors. */
          authors?: Array<string>;
          /** The result language, or omit it for automatic detection. */
          language?: "zh" | "en";
          /** Whether the reference is a book. */
          is_book?: boolean;
          [key: string]: unknown;
        }>;
        /**
         * The maximum number of parallel lookups performed by Baixiao. Defaults to 8.
         * @default 8
         */
        max_concurrency?: number;
      };
      output: Record<string, unknown>;
    };
    /** Search Baixiao's New Thought collection of key theoretical and ideological texts by topic, author, period, or document type. */
    "baixiao.xi_thought_search": {
      input: {
        /** A free-text topic or phrase. */
        query?: string;
        /** The document author. */
        author?: string;
        /** One publication year to match. */
        year?: number;
        /** The earliest publication year to include. */
        year_from?: number;
        /** The latest publication year to include. */
        year_to?: number;
        /** The document type to include. */
        doc_type?: string;
        /**
         * The maximum number of texts to return. Defaults to 15.
         * @default 15
         */
        limit?: number;
      };
      output: Record<string, unknown>;
    };
  }
}
