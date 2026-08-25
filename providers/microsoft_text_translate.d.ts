import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Identify sentence boundaries in one or more text strings. */
    "microsoft_text_translate.break_sentences": {
      input: {
        /**
         * The text strings to process in request order.
         * @minItems 1
         * @maxItems 100
         */
        texts: Array<string>;
        /**
         * A BCP 47 language code supported by Azure Translator.
         * @minLength 1
         */
        language?: string;
        /**
         * A script code supported by Azure Translator.
         * @minLength 1
         */
        script?: string;
      };
      output: {
        /** The results in the same order as the input text strings. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Detect the language of one or more text strings. */
    "microsoft_text_translate.detect_language": {
      input: {
        /**
         * The text strings to process in request order.
         * @minItems 1
         * @maxItems 100
         */
        texts: Array<string>;
      };
      output: {
        /** The results in the same order as the input text strings. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Get examples showing source and translated dictionary terms in context. */
    "microsoft_text_translate.dictionary_examples": {
      input: {
        /**
         * The source and translated term pairs to find examples for.
         * @minItems 1
         * @maxItems 10
         */
        entries: Array<{
          /**
           * The source-language word or phrase.
           * @minLength 1
           * @maxLength 100
           */
          sourceText: string;
          /**
           * The translated word or phrase.
           * @minLength 1
           * @maxLength 100
           */
          translationText: string;
        }>;
        /**
         * A BCP 47 language code supported by Azure Translator.
         * @minLength 1
         */
        from: string;
        /**
         * A BCP 47 language code supported by Azure Translator.
         * @minLength 1
         */
        to: string;
      };
      output: {
        /** The results in the same order as the input text strings. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Look up alternative translations for words and short idiomatic phrases. */
    "microsoft_text_translate.dictionary_lookup": {
      input: {
        /**
         * The text strings to process in request order.
         * @minItems 1
         * @maxItems 10
         */
        texts: Array<string>;
        /**
         * A BCP 47 language code supported by Azure Translator.
         * @minLength 1
         */
        from: string;
        /**
         * A BCP 47 language code supported by Azure Translator.
         * @minLength 1
         */
        to: string;
      };
      output: {
        /** The results in the same order as the input text strings. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Get the languages and scripts currently supported by Azure Translator. */
    "microsoft_text_translate.get_languages": {
      input: {
        /**
         * The language capability groups to return.
         * @minItems 1
         */
        scopes?: Array<"translation" | "transliteration" | "dictionary">;
        /**
         * A BCP 47 language code supported by Azure Translator.
         * @minLength 1
         */
        acceptLanguage?: string;
      };
      output: {
        /** The capability groups keyed by language code as returned by Azure Translator. */
        languages: Record<string, unknown>;
      };
    };
    /** Translate one or more text strings into one or more target languages. */
    "microsoft_text_translate.translate_text": {
      input: {
        /**
         * The text strings to process in request order.
         * @minItems 1
         * @maxItems 25
         */
        texts: Array<string>;
        /**
         * The target language codes.
         * @minItems 1
         */
        to: Array<string>;
        /**
         * A BCP 47 language code supported by Azure Translator.
         * @minLength 1
         */
        from?: string;
        /** Whether the source text is plain text or HTML. */
        textType?: "plain" | "html";
        /**
         * The category ID of a Custom Translator system.
         * @minLength 1
         */
        category?: string;
        /** How profanity should be handled in translated text. */
        profanityAction?: "NoAction" | "Marked" | "Deleted";
        /** How marked profanity should be represented. */
        profanityMarker?: "Asterisk" | "Tag";
        /**
         * A script code supported by Azure Translator.
         * @minLength 1
         */
        fromScript?: string;
        /**
         * The target scripts corresponding to the target languages.
         * @minItems 1
         */
        toScript?: Array<string>;
        /** Whether to include source-to-target alignment data. */
        includeAlignment?: boolean;
        /** Whether to include source and translated sentence length data. */
        includeSentenceLength?: boolean;
      };
      output: {
        /** The results in the same order as the input text strings. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Convert text from one supported script into another script. */
    "microsoft_text_translate.transliterate_text": {
      input: {
        /**
         * The text strings to process in request order.
         * @minItems 1
         * @maxItems 10
         */
        texts: Array<string>;
        /**
         * A BCP 47 language code supported by Azure Translator.
         * @minLength 1
         */
        language: string;
        /**
         * A script code supported by Azure Translator.
         * @minLength 1
         */
        fromScript: string;
        /**
         * A script code supported by Azure Translator.
         * @minLength 1
         */
        toScript: string;
      };
      output: {
        /** The results in the same order as the input text strings. */
        results: Array<Record<string, unknown>>;
      };
    };
  }
}
