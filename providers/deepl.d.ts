import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch the current DeepL API usage and quota counters for the connected API key. */
    "deepl.get_usage": {
      input: Record<string, never>;
      output: {
        /** The DeepL usage payload returned by the API. */
        usage: {
          /** The total billed character count for the current billing period. */
          character_count?: number;
          /** The billed character limit for the current billing period. */
          character_limit?: number;
          /** The billed character count attributed to the current API key. */
          api_key_character_count?: number;
          /** The billed character limit attributed to the current API key. */
          api_key_character_limit?: number;
          /** The total billed document count for the current billing period. */
          document_count?: number;
          /** The billed document limit for the current billing period. */
          document_limit?: number;
          /** The billed document count attributed to the current API key. */
          api_key_document_count?: number;
          /** The billed document limit attributed to the current API key. */
          api_key_document_limit?: number;
          /** The billed team document count for the current billing period. */
          team_document_count?: number;
          /** The billed team document limit for the current billing period. */
          team_document_limit?: number;
          /**
           * The start timestamp of the current billing period.
           * @format date-time
           */
          start_time?: string;
          /**
           * The end timestamp of the current billing period.
           * @format date-time
           */
          end_time?: string;
          /** Per-product DeepL usage breakdown entries. */
          products?: Array<{
            /**
             * The DeepL product family identifier.
             * @minLength 1
             */
            product_type?: string;
            /** The character count attributed to the current API key for this product. */
            api_key_character_count?: number;
            /** The document count attributed to the current API key for this product. */
            api_key_document_count?: number;
            /** The total billed character count for this product. */
            character_count?: number;
            /** The total billed document count for this product. */
            document_count?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** List the DeepL source or target languages currently supported by the translation API. */
    "deepl.list_supported_languages": {
      input: {
        /**
         * Whether to list source or target languages.
         * @default "source"
         */
        type?: "source" | "target";
      };
      output: {
        /** The DeepL language family returned by the API. */
        type: "source" | "target";
        /** The supported DeepL languages returned by the API. */
        languages: Array<{
          /**
           * The DeepL language code.
           * @minLength 1
           */
          language: string;
          /**
           * The human-readable DeepL language name.
           * @minLength 1
           */
          name: string;
          /** Whether this target language supports the formality parameter. */
          supports_formality?: boolean;
        }>;
      };
    };
    /** Translate one or more text items with DeepL and return the normalized translation results. */
    "deepl.translate_text": {
      input: {
        /**
         * The text items to translate in a single DeepL request.
         * @minItems 1
         */
        texts: Array<string>;
        /**
         * The target language code for the translation.
         * @minLength 1
         */
        target_lang: string;
        /**
         * The source language code to force upstream.
         * @minLength 1
         */
        source_lang?: string;
        /** Optional context that guides translation without being translated itself. */
        context?: string;
        /** The DeepL formality preference for supported target languages. */
        formality?: "default" | "more" | "less" | "prefer_more" | "prefer_less";
        /** The DeepL sentence splitting mode. */
        split_sentences?: "0" | "1" | "nonewlines";
        /** Whether DeepL should preserve the original input formatting. */
        preserve_formatting?: boolean;
        /** Whether DeepL should include billed_characters in the translation response. */
        show_billed_characters?: boolean;
      };
      output: {
        /** The translated text results returned by DeepL. */
        translations: Array<{
          /**
           * The source language detected by DeepL.
           * @minLength 1
           */
          detected_source_language?: string;
          /** The translated text returned by DeepL. */
          text: string;
          /** The billed character count for this translation, when requested. */
          billed_characters?: number;
          /**
           * The DeepL translation model used for this result.
           * @minLength 1
           */
          model_type_used?: string;
        }>;
      };
    };
  }
}
