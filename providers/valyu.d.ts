import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search web, academic, financial, and proprietary data sources with Valyu. */
    "valyu.search": {
      input: {
        /**
         * The search query to execute.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of search results to return.
         * @minimum 1
         * @maximum 20
         */
        max_num_results?: number;
        /** Controls which data sources are searched. */
        search_type?: "all" | "web" | "proprietary" | "news";
        /**
         * The maximum budget in CPM for this request.
         * @exclusiveMinimum 0
         */
        max_price?: number;
        /**
         * The minimum relevance score for returned results.
         * @minimum 0
         * @maximum 1
         */
        relevance_threshold?: number;
        /**
         * Sources to include in the search.
         * @minItems 1
         */
        included_sources?: Array<string>;
        /**
         * Sources to exclude from the search.
         * @minItems 1
         */
        excluded_sources?: Array<string>;
        /** Bias values by domain or URL path. */
        source_biases?: Record<string, number> | null;
        /**
         * Natural language instructions to help rank results.
         * @maxLength 500
         */
        instructions?: string;
        /** Whether this request originates from an AI tool call. */
        is_tool_call?: boolean;
        /** The maximum content length per result. */
        response_length?: "short" | "medium" | "large" | "max" | number;
        /**
         * Only return results published on or after this date.
         * @format date
         */
        start_date?: string;
        /**
         * Only return results published on or before this date.
         * @format date
         */
        end_date?: string;
        /** The ISO 3166-1 alpha-2 country code for geo-targeted web results. */
        country_code?: "ALL" | "AR" | "AU" | "AT" | "BE" | "BR" | "CA" | "CL" | "DK" | "FI" | "FR" | "DE" | "HK" | "IN" | "ID" | "IT" | "JP" | "KR" | "MY" | "MX" | "NL" | "NZ" | "NO" | "CN" | "PL" | "PT" | "PH" | "RU" | "SA" | "ZA" | "ES" | "SE" | "CH" | "TW" | "TR" | "GB" | "US";
        /** Whether to bypass LLM query rewriting and reranking for lower latency. */
        fast_mode?: boolean;
        /** Whether to return only URLs without full content extraction. */
        url_only?: boolean;
      };
      output: {
        /** Whether the search completed successfully. */
        success: boolean;
        /** An error or warning message returned by Valyu. */
        error: string | null;
        /** The Valyu transaction ID for tracking and support. */
        tx_id: string;
        /** The original query as submitted. */
        query: string;
        /** Search results ordered by relevance. */
        results: Array<{
          /** The unique identifier for this result. */
          id: string;
          /** The title of the source document. */
          title: string;
          /**
           * The URL of the source document.
           * @format uri
           */
          url: string;
          /** The extracted result content. */
          content: string | Array<Record<string, unknown>> | Record<string, unknown>;
          /** A short description or meta summary of the result. */
          description?: string | null;
          /** The Valyu source identifier for the result. */
          source: string;
          /** The cost in USD for this individual result. */
          price: number;
          /** The character count of the content field. */
          length: number;
          /** Image URLs associated with this result. */
          image_url?: string | Record<string, string> | null;
          /**
           * The relevance score from reranking.
           * @minimum 0
           * @maximum 1
           */
          relevance_score?: number;
          /** The format of the content field. */
          data_type: "unstructured" | "structured";
          /** The classification of the source. */
          source_type: "website" | "forum" | "paper" | "data" | "report" | "health_data" | "clinical_trial" | "drug_label" | "grants";
          /** The publication date in YYYY-MM-DD format, if known. */
          publication_date?: string;
          /** The DOI identifier for academic results. */
          doi?: string;
          /** Citation text for academic results. */
          citation?: string;
          /** The citation count for academic results. */
          citation_count?: number;
          /** Author names for academic results. */
          authors?: Array<string>;
          /** References text for academic results. */
          references?: string;
          /** A JSON object passed through from Valyu. */
          metadata?: Record<string, unknown>;
          /** A JSON object passed through from Valyu. */
          raw: Record<string, unknown>;
        }>;
        /** The count of search results broken down by source type. */
        results_by_source: {
          /** The number of web results. */
          web?: number;
          /** The number of proprietary results. */
          proprietary?: number;
          [key: string]: number | undefined;
        };
        /** The total cost charged for this search in USD. */
        total_deduction_dollars: number;
        /** The total number of characters across returned results. */
        total_characters: number;
        /** Warning messages returned by Valyu. */
        warnings?: Array<string>;
        /** A JSON object passed through from Valyu. */
        raw: Record<string, unknown>;
      };
    };
  }
}
