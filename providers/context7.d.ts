import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve relevant Context7 documentation and code snippets for a library. */
    "context7.get_documentation_context": {
      input: {
        /**
         * The Context7 library ID, such as /vercel/next.js.
         * @minLength 1
         * @maxLength 500
         * @pattern ^/[^/]+/[^/]+([/@][^/]+)?$
         */
        libraryId: string;
        /**
         * The original question or task used to rank results by relevance.
         * @minLength 1
         * @maxLength 500
         */
        query: string;
        /** Whether to skip LLM reranking and return faster vector-search results. */
        fast?: boolean;
      };
      output: {
        /** The relevant code snippets. */
        codeSnippets: Array<{
          /** The title of the code snippet. */
          codeTitle: string;
          /** A description of what the code snippet demonstrates. */
          codeDescription: string;
          /** The primary programming language of the snippet. */
          codeLanguage: string;
          /** The token count of the snippet. */
          codeTokens: number;
          /** The source URL or identifier for the code snippet. */
          codeId: string;
          /** The title of the documentation page. */
          pageTitle: string;
          /** The code examples included in the snippet. */
          codeList: Array<{
            /** The programming language of the example. */
            language: string;
            /** The example source code. */
            code: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The relevant documentation text snippets. */
        infoSnippets: Array<{
          /** The documentation content. */
          content: string;
          /** The token count of the documentation content. */
          contentTokens: number;
          /** The source page URL or identifier. */
          pageId?: string;
          /** The documentation navigation breadcrumb. */
          breadcrumb?: string;
          [key: string]: unknown;
        }>;
        /** Optional rules associated with the library or teamspace. */
        rules?: {
          /** Global team rules. */
          global?: Array<string>;
          /** Rules defined by the library owner. */
          libraryOwn?: Array<string>;
          /** Team rules for the library. */
          libraryTeam?: Array<string>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search Context7 for libraries ranked against a question or task. */
    "context7.search_libraries": {
      input: {
        /**
         * The library name to search for.
         * @minLength 1
         * @maxLength 500
         */
        libraryName: string;
        /**
         * The original question or task used to rank results by relevance.
         * @minLength 1
         * @maxLength 500
         */
        query: string;
        /** Whether to skip LLM reranking and return faster vector-search results. */
        fast?: boolean;
      };
      output: {
        /** The matching libraries ranked by relevance. */
        results: Array<{
          /** The Context7 library ID. */
          id?: string;
          /** The display name of the library. */
          title?: string;
          /** A short description of the library. */
          description?: string;
          /** The source branch tracked by Context7. */
          branch?: string;
          /**
           * The date and time when the library was last updated.
           * @format date-time
           */
          lastUpdateDate?: string;
          /** The current Context7 processing state. */
          state?: "finalized" | "initial" | "processing" | "error" | "delete";
          /** The total number of documentation tokens. */
          totalTokens?: number;
          /** The total number of documentation snippets. */
          totalSnippets?: number;
          /** The GitHub star count when available. */
          stars?: number;
          /**
           * The source reputation score from 0 to 10.
           * @minimum 0
           * @maximum 10
           */
          trustScore?: number;
          /**
           * The documentation quality score from 0 to 100.
           * @minimum 0
           * @maximum 100
           */
          benchmarkScore?: number;
          /** The available library version tags. */
          versions?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Whether teamspace public-library access settings filtered the results. */
        searchFilterApplied: boolean;
        [key: string]: unknown;
      };
    };
  }
}
