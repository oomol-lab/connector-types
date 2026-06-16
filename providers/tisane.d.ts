import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Analyze text with Tisane for problematic content, sentiment, entities, topics, and other linguistic features. */
    "tisane.analyze_text": {
      input: {
        /**
         * The IETF language tag used by Tisane, such as en or zh-CN.
         * @minLength 1
         */
        language: string;
        /**
         * The UTF-8 text content to send to Tisane.
         * @minLength 1
         */
        content: string;
        /** Optional Tisane settings forwarded to the endpoint. Use official Tisane configuration keys. */
        settings?: Record<string, unknown>;
      };
      output: {
        /** The input text echoed by Tisane. */
        text: string;
        /** The detected or analyzed language code when Tisane returns it. */
        language: string | null;
        /** The topics returned by Tisane as strings or detailed topic objects. */
        topics: Array<string | Record<string, unknown>>;
        /** The raw objects returned by Tisane. */
        abuse: Array<Record<string, unknown>>;
        /** The raw objects returned by Tisane. */
        sentenceList: Array<Record<string, unknown>>;
        /** The raw objects returned by Tisane. */
        entitiesSummary: Array<Record<string, unknown>>;
        /** The raw objects returned by Tisane. */
        sentimentExpressions: Array<Record<string, unknown>>;
        /** The raw object returned by Tisane. */
        memory: Record<string, unknown> | null;
        /** The raw object returned by Tisane. */
        raw: Record<string, unknown>;
      };
    };
    /** Calculate the semantic similarity between two text fragments, either in one language or across languages. */
    "tisane.calculate_similarity": {
      input: {
        /**
         * The IETF language tag used by Tisane, such as en or zh-CN.
         * @minLength 1
         */
        language1: string;
        /**
         * The first UTF-8 text fragment to compare.
         * @minLength 1
         */
        content1: string;
        /**
         * The IETF language tag used by Tisane, such as en or zh-CN.
         * @minLength 1
         */
        language2: string;
        /**
         * The second UTF-8 text fragment to compare.
         * @minLength 1
         */
        content2: string;
        /** Optional Tisane settings forwarded to the endpoint. Use official Tisane configuration keys. */
        settings?: Record<string, unknown>;
      };
      output: {
        /**
         * The semantic similarity score between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        similarity: number;
      };
    };
    /** Compare two compound person entities with Tisane and return whether they are the same or different. */
    "tisane.compare_entities": {
      input: {
        /**
         * The IETF language tag used by Tisane, such as en or zh-CN.
         * @minLength 1
         */
        language1: string;
        /**
         * The first person entity text to compare.
         * @minLength 1
         */
        entity1: string;
        /**
         * The IETF language tag used by Tisane, such as en or zh-CN.
         * @minLength 1
         */
        language2: string;
        /**
         * The second person entity text to compare.
         * @minLength 1
         */
        entity2: string;
        /** The entity type to compare. Tisane currently supports person. */
        type: "person";
      };
      output: {
        /** The comparison result returned by Tisane. */
        result: "no_single_entity" | "same" | "different";
        /** The difference categories returned by Tisane when entities differ. */
        differences?: Array<string>;
        /** The raw object returned by Tisane. */
        raw: Record<string, unknown>;
      };
    };
    /** Detect the language segments used in a text fragment with optional language hints and delimiter settings. */
    "tisane.detect_language": {
      input: {
        /**
         * The UTF-8 text content to send to Tisane.
         * @minLength 1
         */
        content: string;
        /**
         * Optional vertical-bar-delimited language hints, such as en|ru|he.
         * @minLength 1
         */
        languages?: string;
        /**
         * Optional delimiter expression used by Tisane to segment the text.
         * @minLength 1
         */
        delimiter?: string;
      };
      output: {
        /** The detected language segments. */
        languages: Array<{
          /** The character offset where this language segment starts. */
          offset: number | null;
          /** The length of this language segment. */
          length: number | null;
          /** The detected language code for this segment. */
          language: string;
          /** The confidence score returned by Tisane. */
          score: number | null;
          /** The raw object returned by Tisane. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Tisane. */
        raw: Record<string, unknown>;
      };
    };
    /** Remove markup such as HTML, CSS, JavaScript, or JSON from UTF-8 text and return plain decoded text. */
    "tisane.extract_text": {
      input: {
        /**
         * The UTF-8 markup content to clean up.
         * @minLength 1
         */
        content: string;
      };
      output: {
        /** The extracted plain text. */
        text: string;
      };
    };
    /** List the languages currently supported by Tisane. */
    "tisane.list_supported_languages": {
      input: Record<string, never>;
      output: {
        /** The languages supported by Tisane. */
        languages: Array<{
          /** The IETF language tag supported by Tisane. */
          isoCode: string;
          /** The native language name. */
          name: string;
          /** The English language name. */
          englishName: string;
          /** The native encoding reported by Tisane. */
          nativeEncoding: string | null;
          /** The recommended display font reported by Tisane. */
          fontFace: string | null;
          /** Whether the language uses a Latin script. */
          latin: boolean | null;
          /** Whether the language is written right-to-left. */
          rightToLeft: boolean | null;
          /** The raw object returned by Tisane. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Translate text between languages with Tisane, or paraphrase text when source and target languages match. */
    "tisane.transform_text": {
      input: {
        /**
         * The source IETF language tag. Use * or a vertical-bar-delimited list to ask Tisane to auto-detect.
         * @minLength 1
         */
        from: string;
        /**
         * The target IETF language tag.
         * @minLength 1
         */
        to: string;
        /**
         * The UTF-8 text content to send to Tisane.
         * @minLength 1
         */
        content: string;
        /** Optional Tisane settings forwarded to the endpoint. Use official Tisane configuration keys. */
        settings?: Record<string, unknown>;
      };
      output: {
        /** The translated or paraphrased text. */
        text: string;
      };
    };
  }
}
