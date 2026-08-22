import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Analyze the sentiment expressed by plain text with Dandelion. */
    "dandelion.analyze_sentiment": {
      input: {
        /**
         * The plain text to analyze.
         * @minLength 1
         * @pattern \S
         */
        text: string;
        /**
         * The ISO 639-1 language code. Omit it to let Dandelion detect the language.
         * @minLength 1
         * @pattern \S
         */
        language?: string;
      };
      output: {
        /** The response generation timestamp returned by Dandelion. */
        timestamp: string;
        /** The processing time in milliseconds returned by Dandelion. */
        time: number;
        /** The ISO 639-1 language code used for the analysis. */
        lang: string;
        /** The language detection confidence from 0 to 1 when Dandelion detects it. */
        langConfidence?: number;
        /** The detected sentiment. */
        sentiment: {
          /** The sentiment score from -1 to 1. */
          score: number;
          /** The sentiment classification. */
          type: "positive" | "neutral" | "negative";
        };
      };
    };
    /** Compare the semantic similarity of two plain texts with Dandelion. */
    "dandelion.compare_text_similarity": {
      input: {
        /**
         * The first plain text to compare.
         * @minLength 1
         * @pattern \S
         */
        firstText: string;
        /**
         * The second plain text to compare.
         * @minLength 1
         * @pattern \S
         */
        secondText: string;
        /**
         * The ISO 639-1 language code. Omit it to let Dandelion detect the language.
         * @minLength 1
         * @pattern \S
         */
        language?: string;
        /** Whether to compare the texts as bags of words instead of preserving word order. */
        bagOfWords?: boolean;
      };
      output: {
        /** The response generation timestamp returned by Dandelion. */
        timestamp: string;
        /** The processing time in milliseconds returned by Dandelion. */
        time: number;
        /** The ISO 639-1 language code used for the analysis. */
        lang: string;
        /** The language detection confidence from 0 to 1 when Dandelion detects it. */
        langConfidence?: number;
        /** The semantic similarity score from 0 to 1. */
        similarity: number;
      };
    };
    /** Detect the languages present in plain text with Dandelion. */
    "dandelion.detect_language": {
      input: {
        /**
         * The plain text to analyze.
         * @minLength 1
         * @pattern \S
         */
        text: string;
        /** Whether Dandelion should remove URLs, email addresses, hashtags, and mentions before detection. */
        clean?: boolean;
      };
      output: {
        /** The response generation timestamp returned by Dandelion. */
        timestamp: string;
        /** The processing time in milliseconds returned by Dandelion. */
        time: number;
        /** The detected languages ordered by confidence. */
        detectedLanguages: Array<{
          /** The detected ISO 639-1 language code. */
          language: string;
          /** The detection confidence. */
          confidence: number;
        }>;
      };
    };
    /** Extract linked entities and their positions from plain text with Dandelion. */
    "dandelion.extract_entities": {
      input: {
        /**
         * The plain text to analyze.
         * @minLength 1
         * @pattern \S
         */
        text: string;
        /**
         * The ISO 639-1 language code. Omit it to let Dandelion detect the language.
         * @minLength 1
         * @pattern \S
         */
        language?: string;
        /**
         * The minimum entity confidence from 0 to 1.
         * @minimum 0
         * @maximum 1
         */
        minimumConfidence?: number;
        /**
         * The maximum number of top entities to include in addition to annotations.
         * @minimum 1
         */
        maximumEntities?: number;
        /**
         * The optional entity detail groups to include.
         * @minItems 1
         */
        include?: Array<"types" | "abstract" | "categories" | "image" | "lod" | "alternate_labels">;
        /** The two-letter country code used to improve entity disambiguation. */
        country?: string;
      };
      output: {
        /** The response generation timestamp returned by Dandelion. */
        timestamp: string;
        /** The processing time in milliseconds returned by Dandelion. */
        time: number;
        /** The ISO 639-1 language code used for the analysis. */
        lang: string;
        /** The language detection confidence from 0 to 1 when Dandelion detects it. */
        langConfidence?: number;
        /** The entities found in the text. */
        annotations: Array<{
          /** The linked Wikipedia entity identifier. */
          id?: number;
          /** The linked entity title. */
          title?: string;
          /** The linked entity URI. */
          uri?: string;
          /** The entity label returned by Dandelion. */
          label?: string;
          /** The entity annotation confidence. */
          confidence?: number;
          /** The matching text span. */
          spot?: string;
          /** The zero-based start offset of the matching span. */
          start?: number;
          /** The exclusive end offset of the matching span. */
          end?: number;
          [key: string]: unknown;
        }>;
        /** The highest-ranked entities when maximumEntities was requested. */
        topEntities?: Array<{
          /** The linked Wikipedia entity identifier. */
          id: number;
          /** The linked entity URI. */
          uri: string;
          /** The entity importance score within this text. */
          score: number;
        }>;
      };
    };
  }
}
