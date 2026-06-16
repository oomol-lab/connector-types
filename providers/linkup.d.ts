import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch one webpage with Linkup and return markdown plus optional raw HTML and images. */
    "linkup.fetch_webpage": {
      input: {
        /**
         * The webpage URL to fetch.
         * @format uri
         */
        url: string;
        /** Whether Linkup should include the raw HTML in the response. */
        includeRawHtml?: boolean;
        /** Whether Linkup should include extracted images in the response. */
        extractImages?: boolean;
        /** Whether Linkup should render the webpage JavaScript before extraction. */
        renderJs?: boolean;
      };
      output: {
        /** The clean markdown extracted from the webpage. */
        markdown: string;
        /** The raw HTML returned by Linkup. */
        rawHtml?: string;
        /** The images extracted from the webpage. */
        images?: Array<{
          /**
           * The image URL.
           * @format uri
           */
          url: string;
          /** The alt text of the image. */
          alt?: string;
        }>;
      };
    };
    /** Get the current Linkup credits balance for the connected API key. */
    "linkup.get_credits_balance": {
      input: Record<string, never>;
      output: {
        /** The remaining Linkup credits balance. */
        balance: number;
      };
    };
    /** Search the web with Linkup and return a sourced natural-language answer. */
    "linkup.search_answer": {
      input: {
        /**
         * The natural-language query sent to Linkup.
         * @minLength 1
         */
        q: string;
        /** The Linkup search depth to execute. */
        depth: "deep" | "standard" | "fast";
        /**
         * The maximum number of search results to return.
         * @minimum 1
         */
        maxResults?: number;
        /** Whether Linkup should include images in the search results. */
        includeImages?: boolean;
        /**
         * Only include results from these domains.
         * @maxItems 100
         */
        includeDomains?: Array<string>;
        /** Exclude results from these domains. */
        excludeDomains?: Array<string>;
        /**
         * A calendar date in YYYY-MM-DD format.
         * @format date
         */
        fromDate?: string;
        /**
         * A calendar date in YYYY-MM-DD format.
         * @format date
         */
        toDate?: string;
        /** Whether Linkup should include inline citations in the answer. */
        includeInlineCitations?: boolean;
      };
      output: {
        /** The answer returned by Linkup. */
        answer: string;
        /** The sources cited in the answer. */
        sources: Array<{
          /** The title or name of the source. */
          name: string;
          /**
           * The source URL.
           * @format uri
           */
          url: string;
          /** The source snippet used in the answer. */
          snippet: string;
          /** The favicon URL, if available. */
          favicon?: string | "" | null;
        }>;
      };
    };
    /** Search the web with Linkup and return raw grounded search results. */
    "linkup.search_results": {
      input: {
        /**
         * The natural-language query sent to Linkup.
         * @minLength 1
         */
        q: string;
        /** The Linkup search depth to execute. */
        depth: "deep" | "standard" | "fast";
        /**
         * The maximum number of search results to return.
         * @minimum 1
         */
        maxResults?: number;
        /** Whether Linkup should include images in the search results. */
        includeImages?: boolean;
        /**
         * Only include results from these domains.
         * @maxItems 100
         */
        includeDomains?: Array<string>;
        /** Exclude results from these domains. */
        excludeDomains?: Array<string>;
        /**
         * A calendar date in YYYY-MM-DD format.
         * @format date
         */
        fromDate?: string;
        /**
         * A calendar date in YYYY-MM-DD format.
         * @format date
         */
        toDate?: string;
      };
      output: {
        /** The ordered search results returned by Linkup. */
        results: Array<{
          /** The result title. */
          name: string;
          /**
           * The canonical result URL.
           * @format uri
           */
          url: string;
          /** The extracted text content for the result. */
          content: string;
          /** The favicon URL, if available. */
          favicon?: string | "" | null;
          /** The result type. */
          type: "text";
        } | {
          /** The image result title. */
          name: string;
          /**
           * The image result URL.
           * @format uri
           */
          url: string;
          /** The result type. */
          type: "image";
        }>;
      };
    };
    /** Search the web with Linkup and return data normalized to the provided JSON schema. */
    "linkup.search_structured_data": {
      input: {
        /**
         * The natural-language query sent to Linkup.
         * @minLength 1
         */
        q: string;
        /** The Linkup search depth to execute. */
        depth: "deep" | "standard" | "fast";
        /**
         * The maximum number of search results to return.
         * @minimum 1
         */
        maxResults?: number;
        /** Whether Linkup should include images in the search results. */
        includeImages?: boolean;
        /**
         * Only include results from these domains.
         * @maxItems 100
         */
        includeDomains?: Array<string>;
        /** Exclude results from these domains. */
        excludeDomains?: Array<string>;
        /**
         * A calendar date in YYYY-MM-DD format.
         * @format date
         */
        fromDate?: string;
        /**
         * A calendar date in YYYY-MM-DD format.
         * @format date
         */
        toDate?: string;
        /**
         * The JSON schema string that defines the structured response shape.
         * @minLength 1
         */
        structuredOutputSchema: string;
        /** Whether Linkup should include sources alongside the structured data. */
        includeSources?: boolean;
      };
      output: {
        /** The structured data returned by Linkup. */
        data: Record<string, unknown>;
        /** The sources returned alongside the structured data. */
        sources?: Array<{
          /** The result title. */
          name: string;
          /**
           * The canonical result URL.
           * @format uri
           */
          url: string;
          /** The extracted text content for the result. */
          content: string;
          /** The favicon URL, if available. */
          favicon?: string | "" | null;
          /** The result type. */
          type: "text";
        } | {
          /** The image result title. */
          name: string;
          /**
           * The image result URL.
           * @format uri
           */
          url: string;
          /** The result type. */
          type: "image";
        }>;
      };
    };
  }
}
