import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check text for profanity with JigsawStack and return detected occurrences. */
    "jigsawstack.check_profanity": {
      input: {
        /**
         * The text to check for profanity.
         * @minLength 1
         */
        text: string;
        /**
         * The character or string to replace profanity with.
         * @minLength 1
         */
        censorReplacement?: string;
      };
      output: {
        /** Whether JigsawStack marked the request as successful. */
        success: boolean;
        /** The JigsawStack request log identifier when returned. */
        logId: string | null;
        /** JigsawStack usage information for the API call. */
        usage: {
          /** The number of input tokens processed. */
          input_tokens?: number;
          /** The number of output tokens generated. */
          output_tokens?: number;
          /** The number of tokens processed during inference time. */
          inference_time_tokens?: number;
          /** The total number of tokens used by the request. */
          total_tokens?: number;
          [key: string]: unknown;
        } | null;
        /** The raw JigsawStack response object. */
        raw: Record<string, unknown>;
        /** The message returned by JigsawStack. */
        message: string | null;
        /** The text with profanity replaced. */
        cleanText: string | null;
        /** Profanities found in the text. */
        profanities: Array<{
          /** The profane word that was detected. */
          profanity?: string | null;
          /** The starting position of the profanity in the original text. */
          startIndex?: number;
          /** The ending position of the profanity in the original text. */
          endIndex?: number;
          [key: string]: unknown;
        }>;
        /** Whether profanity was found in the text. */
        profanitiesFound: boolean | null;
      };
    };
    /** Check whether one string or an array of strings is spam with JigsawStack. */
    "jigsawstack.check_spam": {
      input: {
        /** The text to check for spam. */
        text: string | Array<string>;
      };
      output: {
        /** Whether JigsawStack marked the request as successful. */
        success: boolean;
        /** The JigsawStack request log identifier when returned. */
        logId: string | null;
        /** JigsawStack usage information for the API call. */
        usage: {
          /** The number of input tokens processed. */
          input_tokens?: number;
          /** The number of output tokens generated. */
          output_tokens?: number;
          /** The number of tokens processed during inference time. */
          inference_time_tokens?: number;
          /** The total number of tokens used by the request. */
          total_tokens?: number;
          [key: string]: unknown;
        } | null;
        /** The raw JigsawStack response object. */
        raw: Record<string, unknown>;
        /** The spam check result for one or more input texts. */
        check: {
          /** Whether the text is spam. */
          is_spam?: boolean;
          /** The spam score returned by JigsawStack. */
          score?: number;
          [key: string]: unknown;
        } | Array<{
          /** Whether the text is spam. */
          is_spam?: boolean;
          /** The spam score returned by JigsawStack. */
          score?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get JigsawStack search suggestions for a query prefix. */
    "jigsawstack.get_search_suggestions": {
      input: {
        /**
         * The query prefix to get suggestions for, up to 200 characters.
         * @minLength 1
         * @maxLength 200
         */
        query: string;
      };
      output: {
        /** Whether JigsawStack marked the request as successful. */
        success: boolean;
        /** The JigsawStack request log identifier when returned. */
        logId: string | null;
        /** JigsawStack usage information for the API call. */
        usage: {
          /** The number of input tokens processed. */
          input_tokens?: number;
          /** The number of output tokens generated. */
          output_tokens?: number;
          /** The number of tokens processed during inference time. */
          inference_time_tokens?: number;
          /** The total number of tokens used by the request. */
          total_tokens?: number;
          [key: string]: unknown;
        } | null;
        /** The raw JigsawStack response object. */
        raw: Record<string, unknown>;
        /** Search suggestions returned by JigsawStack. */
        suggestions: Array<string>;
      };
    };
    /** Search the web with JigsawStack AI Search and return normalized result data. */
    "jigsawstack.search_web": {
      input: {
        /**
         * The search query. JigsawStack accepts up to 400 characters.
         * @minLength 1
         * @maxLength 400
         */
        query: string;
        /** Whether to include an AI-generated overview in the search results. */
        aiOverview?: boolean;
        /** The safe-search level to apply. */
        safeSearch?: "moderate" | "strict" | "off";
        /** Whether JigsawStack should spell-check the query. */
        spellCheck?: boolean;
        /**
         * URLs to restrict the search results to.
         * @minItems 1
         */
        byoUrls?: Array<string>;
        /**
         * The ISO country code for geo-aware search.
         * @minLength 1
         */
        countryCode?: string;
        /** Whether JigsawStack should automatically scrape result URLs. */
        autoScrape?: boolean;
        /**
         * The maximum number of search results to return.
         * @exclusiveMinimum 0
         */
        maxResults?: number;
      };
      output: {
        /** Whether JigsawStack marked the request as successful. */
        success: boolean;
        /** The JigsawStack request log identifier when returned. */
        logId: string | null;
        /** JigsawStack usage information for the API call. */
        usage: {
          /** The number of input tokens processed. */
          input_tokens?: number;
          /** The number of output tokens generated. */
          output_tokens?: number;
          /** The number of tokens processed during inference time. */
          inference_time_tokens?: number;
          /** The total number of tokens used by the request. */
          total_tokens?: number;
          [key: string]: unknown;
        } | null;
        /** The raw JigsawStack response object. */
        raw: Record<string, unknown>;
        /** The processed search query returned by JigsawStack. */
        query: string | null;
        /** The AI-generated overview when requested. */
        aiOverview: string | null;
        /** Whether JigsawStack spell-corrected the query. */
        spellFixed: boolean | null;
        /** Whether the search results passed the safe-search setting. */
        isSafe: boolean | null;
        /** The web search results returned by JigsawStack. */
        results: Array<{
          /** The search result title. */
          title?: string;
          /**
           * The search result URL.
           * @format uri
           */
          url?: string;
          /** The search result description. */
          description?: string;
          /** The result content as text or a structured content object. */
          content?: string | Record<string, unknown>;
          /** Whether this result passed the safe-search setting. */
          is_safe?: boolean;
          /** The website name returned by JigsawStack. */
          site_name?: string;
          /** The website long name returned by JigsawStack. */
          site_long_name?: string;
          /** The indexed or published age returned by JigsawStack. */
          age?: string;
          /** The result language code. */
          language?: string;
          /**
           * The result favicon URL.
           * @format uri
           */
          favicon?: string;
          /** Relevant result snippets returned by JigsawStack. */
          snippets?: Array<string>;
          /** Related result metadata returned by JigsawStack. */
          related_index?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Links extracted from the search results. */
        links: Array<string>;
        /** Image URLs found in the search results. */
        imageUrls: Array<string>;
        /** Geographic search results returned by JigsawStack. */
        geoResults: Array<Record<string, unknown>>;
      };
    };
    /** Summarize text or a provider-accessible PDF document with JigsawStack. */
    "jigsawstack.summarize_text": {
      input: {
        /**
         * The text content to summarize, up to 300000 characters.
         * @minLength 1
         * @maxLength 300000
         */
        text?: string;
        /**
         * A provider-accessible PDF document URL for JigsawStack to summarize.
         * @format uri
         */
        url?: string;
        /**
         * A JigsawStack file-store key for a stored PDF document.
         * @minLength 1
         */
        fileStoreKey?: string;
        /** The summary format to return. */
        type?: "text" | "points";
        /**
         * The maximum number of bullet points to generate.
         * @minimum 1
         * @maximum 100
         */
        maxPoints?: number;
        /**
         * The maximum number of characters in the summary.
         * @exclusiveMinimum 0
         */
        maxCharacters?: number;
      };
      output: {
        /** Whether JigsawStack marked the request as successful. */
        success: boolean;
        /** The JigsawStack request log identifier when returned. */
        logId: string | null;
        /** JigsawStack usage information for the API call. */
        usage: {
          /** The number of input tokens processed. */
          input_tokens?: number;
          /** The number of output tokens generated. */
          output_tokens?: number;
          /** The number of tokens processed during inference time. */
          inference_time_tokens?: number;
          /** The total number of tokens used by the request. */
          total_tokens?: number;
          [key: string]: unknown;
        } | null;
        /** The raw JigsawStack response object. */
        raw: Record<string, unknown>;
        /** The summary returned by JigsawStack. */
        summary: string | Array<string>;
      };
    };
    /** Translate one string or an array of strings with JigsawStack. */
    "jigsawstack.translate_text": {
      input: {
        /** One text string or an array of text strings. */
        text: string | Array<string>;
        /**
         * The target language code.
         * @minLength 1
         */
        targetLanguage: string;
        /**
         * The source language code. Omit this to let JigsawStack auto-detect it.
         * @minLength 1
         */
        currentLanguage?: string;
      };
      output: {
        /** Whether JigsawStack marked the request as successful. */
        success: boolean;
        /** The JigsawStack request log identifier when returned. */
        logId: string | null;
        /** JigsawStack usage information for the API call. */
        usage: {
          /** The number of input tokens processed. */
          input_tokens?: number;
          /** The number of output tokens generated. */
          output_tokens?: number;
          /** The number of tokens processed during inference time. */
          inference_time_tokens?: number;
          /** The total number of tokens used by the request. */
          total_tokens?: number;
          [key: string]: unknown;
        } | null;
        /** The raw JigsawStack response object. */
        raw: Record<string, unknown>;
        /** The translated text. The shape matches the input text shape. */
        translatedText: string | Array<string>;
      };
    };
  }
}
