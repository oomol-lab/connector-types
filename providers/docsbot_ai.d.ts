import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch the full reconstructed document text for a DocsBot search result file ID. */
    "docsbot_ai.fetch_document": {
      input: {
        /**
         * The DocsBot team ID.
         * @minLength 1
         */
        teamId: string;
        /**
         * The DocsBot bot ID.
         * @minLength 1
         */
        botId: string;
        /**
         * The DocsBot file ID returned by semantic_search.
         * @minLength 1
         */
        fileId: string;
      };
      output: {
        /** A normalized DocsBot query source. */
        document: {
          /** The source title returned by DocsBot. */
          title: string | null;
          /** The source URL returned by DocsBot. */
          url: string | null;
          /** The file ID that can be used with fetch_document. */
          fileId: string | null;
          /** The PDF page number for the source when returned by DocsBot. */
          page: number | null;
          /** The raw text content returned by DocsBot. */
          content: string;
          /** The raw DocsBot query source object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get a DocsBot bot by team and bot ID. */
    "docsbot_ai.get_bot": {
      input: {
        /**
         * The DocsBot team ID.
         * @minLength 1
         */
        teamId: string;
        /**
         * The DocsBot bot ID.
         * @minLength 1
         */
        botId: string;
      };
      output: {
        /** A normalized DocsBot bot. */
        bot: {
          /** The DocsBot bot ID. */
          id: string;
          /** The DocsBot bot name. */
          name: string;
          /** The DocsBot bot description when returned by DocsBot. */
          description: string | null;
          /** The DocsBot bot privacy such as public or private. */
          privacy: string | null;
          /** The DocsBot bot status such as ready, pending, indexing, or processing. */
          status: string | null;
          /** The DocsBot model configured for the bot when returned. */
          model: string | null;
          /** The bot creation timestamp when returned by DocsBot. */
          createdAt: string | null;
          /** The AI credits used by this DocsBot resource in the current billing period. */
          questionCount: number | null;
          /** The number of pages crawled by this DocsBot resource. */
          pageCount: number | null;
          /** The number of sources crawled by this DocsBot resource. */
          sourceCount: number | null;
          /** The number of chunks crawled by this DocsBot resource. */
          chunkCount: number | null;
          /** The raw DocsBot bot object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get a DocsBot team by ID. */
    "docsbot_ai.get_team": {
      input: {
        /**
         * The DocsBot team ID.
         * @minLength 1
         */
        teamId: string;
      };
      output: {
        /** A normalized DocsBot team. */
        team: {
          /** The DocsBot team ID. */
          id: string;
          /** The DocsBot team name. */
          name: string;
          /** The team creation timestamp when returned by DocsBot. */
          createdAt: string | null;
          /** The DocsBot team status such as ready or pending. */
          status: string | null;
          /** The number of bots in the team when returned by DocsBot. */
          botCount: number | null;
          /** The AI credits used by this DocsBot resource in the current billing period. */
          questionCount: number | null;
          /** The number of pages crawled by this DocsBot resource. */
          pageCount: number | null;
          /** The number of sources crawled by this DocsBot resource. */
          sourceCount: number | null;
          /** The number of chunks crawled by this DocsBot resource. */
          chunkCount: number | null;
          /** The raw DocsBot team object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List DocsBot bots in a team. */
    "docsbot_ai.list_bots": {
      input: {
        /**
         * The DocsBot team ID.
         * @minLength 1
         */
        teamId: string;
      };
      output: {
        /** The DocsBot bots returned by the API. */
        bots: Array<{
          /** The DocsBot bot ID. */
          id: string;
          /** The DocsBot bot name. */
          name: string;
          /** The DocsBot bot description when returned by DocsBot. */
          description: string | null;
          /** The DocsBot bot privacy such as public or private. */
          privacy: string | null;
          /** The DocsBot bot status such as ready, pending, indexing, or processing. */
          status: string | null;
          /** The DocsBot model configured for the bot when returned. */
          model: string | null;
          /** The bot creation timestamp when returned by DocsBot. */
          createdAt: string | null;
          /** The AI credits used by this DocsBot resource in the current billing period. */
          questionCount: number | null;
          /** The number of pages crawled by this DocsBot resource. */
          pageCount: number | null;
          /** The number of sources crawled by this DocsBot resource. */
          sourceCount: number | null;
          /** The number of chunks crawled by this DocsBot resource. */
          chunkCount: number | null;
          /** The raw DocsBot bot object returned by the API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List DocsBot teams visible to the API key user. */
    "docsbot_ai.list_teams": {
      input: Record<string, never>;
      output: {
        /** The DocsBot teams returned by the API. */
        teams: Array<{
          /** The DocsBot team ID. */
          id: string;
          /** The DocsBot team name. */
          name: string;
          /** The team creation timestamp when returned by DocsBot. */
          createdAt: string | null;
          /** The DocsBot team status such as ready or pending. */
          status: string | null;
          /** The number of bots in the team when returned by DocsBot. */
          botCount: number | null;
          /** The AI credits used by this DocsBot resource in the current billing period. */
          questionCount: number | null;
          /** The number of pages crawled by this DocsBot resource. */
          pageCount: number | null;
          /** The number of sources crawled by this DocsBot resource. */
          sourceCount: number | null;
          /** The number of chunks crawled by this DocsBot resource. */
          chunkCount: number | null;
          /** The raw DocsBot team object returned by the API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Search a DocsBot bot's trained source chunks by natural-language query. */
    "docsbot_ai.semantic_search": {
      input: {
        /**
         * The DocsBot team ID.
         * @minLength 1
         */
        teamId: string;
        /**
         * The DocsBot bot ID.
         * @minLength 1
         */
        botId: string;
        /**
         * The natural-language search query.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of chunks to return.
         * @minimum 1
         */
        top_k?: number | null;
        /** Whether to apply autocut grouping, or the number of groups to return. */
        autocut?: boolean | number;
        /**
         * Hybrid balance where 0 is keyword search and 1 is semantic search.
         * @minimum 0
         * @maximum 1
         */
        alpha?: number | null;
        /** Whether DocsBot should apply bot glossary rewrites to the query. */
        use_glossary?: boolean;
        /** DocsBot source tags used to filter retrieval results. */
        tags?: Array<string> | null;
        /** Whether untagged chunks should be included when tags are supplied. */
        include_untagged?: boolean;
      };
      output: {
        /** The DocsBot query sources returned by semantic search. */
        results: Array<{
          /** The source title returned by DocsBot. */
          title: string | null;
          /** The source URL returned by DocsBot. */
          url: string | null;
          /** The file ID that can be used with fetch_document. */
          fileId: string | null;
          /** The PDF page number for the source when returned by DocsBot. */
          page: number | null;
          /** The raw text content returned by DocsBot. */
          content: string;
          /** The raw DocsBot query source object returned by the API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
