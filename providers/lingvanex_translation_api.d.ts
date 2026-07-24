import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Detect the language of one text value or a list of text values. */
    "lingvanex_translation_api.detect_language": {
      input: {
        /** The text values to inspect with Lingvanex. */
        q: string | Array<string>;
      };
      output: {
        /** Detection candidate groups corresponding to each input text value. */
        detections: Array<Array<{
          /** The detected language code. */
          language: string;
          /** The deprecated Lingvanex reliability flag when returned. */
          isReliable: boolean | null;
          /** The deprecated Lingvanex confidence value when returned. */
          confidence: number | null;
          /** The raw object returned by Lingvanex. */
          raw: Record<string, unknown>;
        }>>;
        /** The raw object returned by Lingvanex. */
        raw: Record<string, unknown>;
      };
    };
    /** List languages supported by the Lingvanex Translation API. */
    "lingvanex_translation_api.list_languages": {
      input: {
        /**
         * The language code used to localize returned language names.
         * @minLength 1
         */
        target?: string;
        /**
         * The optional translation model passed to Lingvanex.
         * @minLength 1
         */
        model?: string;
      };
      output: {
        /** The languages supported by Lingvanex. */
        languages: Array<{
          /** The supported language code. */
          language: string;
          /** The localized language name when a target language was requested. */
          name: string | null;
          /** The raw object returned by Lingvanex. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Lingvanex. */
        raw: Record<string, unknown>;
      };
    };
    /** Translate one text value or a bounded list of text values with Lingvanex. */
    "lingvanex_translation_api.translate_text": {
      input: {
        /** The text values to translate with Lingvanex. */
        q: string | Array<string>;
        /**
         * The target language code for the translation.
         * @minLength 1
         */
        target: string;
        /**
         * The source language code. Lingvanex detects the source language when omitted.
         * @minLength 1
         */
        source?: string;
        /** The source text format. */
        format?: "html" | "text";
        /**
         * The optional translation model passed to Lingvanex.
         * @minLength 1
         */
        model?: string;
      };
      output: {
        /** The translations returned by Lingvanex. */
        translations: Array<{
          /** The translated text. */
          translatedText: string;
          /** The detected source language when source was not provided. */
          detectedSourceLanguage: string | null;
          /** The translation model when returned by Lingvanex. */
          model: string | null;
          /** The raw object returned by Lingvanex. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Lingvanex. */
        raw: Record<string, unknown>;
      };
    };
  }
}
