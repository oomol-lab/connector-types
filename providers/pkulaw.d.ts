import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a current PKULaw legal data tool with JSON arguments after checking its live schema. */
    "pkulaw.call_tool": {
      input: {
        /** The PKULaw MCP service to inspect or call. */
        serverId: "law-aggregate" | "law-keyword" | "law-semantic" | "case-keyword" | "case-semantic" | "case-number" | "law-recognition" | "fatiao" | "doc-link" | "citation-validator";
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
    /** Retrieve the authoritative text of a specific provision by law title and article number. */
    "pkulaw.get_law_article": {
      input: {
        /**
         * The Chinese title of the law or regulation.
         * @minLength 1
         * @pattern \S
         */
        title: string;
        /**
         * The article number written in Chinese, such as 第一千零七十七条.
         * @minLength 1
         * @pattern \S
         */
        number: string;
      };
      output: {
        /** A result record returned by PKULaw. */
        article: Record<string, unknown>;
      };
    };
    /** Discover the current legal research tools and live input schemas exposed by one PKULaw MCP service. */
    "pkulaw.list_tools": {
      input: {
        /** The PKULaw MCP service to inspect or call. */
        serverId: "law-aggregate" | "law-keyword" | "law-semantic" | "case-keyword" | "case-semantic" | "case-number" | "law-recognition" | "fatiao" | "doc-link" | "citation-validator";
      };
      output: {
        /** The PKULaw MCP service to inspect or call. */
        serverId: "law-aggregate" | "law-keyword" | "law-semantic" | "case-keyword" | "case-semantic" | "case-number" | "law-recognition" | "fatiao" | "doc-link" | "citation-validator";
        /** The official display name of the selected PKULaw MCP service. */
        displayName: string;
        /** Tools currently exposed by the selected PKULaw service. */
        tools: Array<{
          /**
           * The exact PKULaw MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current tool description supplied by PKULaw MCP. */
          description?: string;
          /** MCP hints supplied by PKULaw about a tool's behavior. */
          annotations?: {
            /** A human-readable title for the tool. */
            title?: string;
            /** Whether the tool is expected not to modify data. */
            readOnlyHint?: boolean;
            /** Whether the tool may perform destructive operations. */
            destructiveHint?: boolean;
            /** Whether repeated calls with the same arguments are expected to be idempotent. */
            idempotentHint?: boolean;
            /** Whether the tool may interact with entities outside PKULaw. */
            openWorldHint?: boolean;
            [key: string]: unknown;
          };
          /** The current JSON Schema for the tool arguments, supplied by PKULaw MCP. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
    /** Search detailed PKULaw judicial case records by title or full-text keywords, including judgment facts and reasoning. */
    "pkulaw.search_case_documents": {
      input: {
        /**
         * A keyword to match against document titles.
         * @minLength 1
         * @pattern \S
         */
        title?: string;
        /**
         * A keyword or phrase to match against document text.
         * @minLength 1
         * @pattern \S
         */
        fulltext?: string;
      };
      output: {
        /** Matching detailed judicial case records. */
        cases: Array<Record<string, unknown>>;
      };
    };
    /** Search authoritative PKULaw judicial cases using a natural-language fact pattern. */
    "pkulaw.search_cases": {
      input: {
        /**
         * A natural-language fact pattern or legal issue in Chinese.
         * @minLength 1
         * @pattern \S
         */
        text: string;
      };
      output: {
        /** Matching judicial case records, ordered by relevance. */
        cases: Array<Record<string, unknown>>;
      };
    };
    /** Search authoritative PKULaw provisions using a natural-language legal question or fact pattern. */
    "pkulaw.search_law_articles": {
      input: {
        /**
         * A natural-language legal question or fact pattern in Chinese.
         * @minLength 1
         * @pattern \S
         */
        query: string;
      };
      output: {
        /** Matching legal provision records, ordered by relevance. */
        articles: Array<Record<string, unknown>>;
      };
    };
    /** Search PKULaw laws and regulations by title or full-text keywords, including source metadata and validity information. */
    "pkulaw.search_laws": {
      input: {
        /**
         * A keyword to match against document titles.
         * @minLength 1
         * @pattern \S
         */
        title?: string;
        /**
         * A keyword or phrase to match against document text.
         * @minLength 1
         * @pattern \S
         */
        fulltext?: string;
      };
      output: {
        /** Matching law and regulation records. */
        laws: Array<Record<string, unknown>>;
      };
    };
  }
}
