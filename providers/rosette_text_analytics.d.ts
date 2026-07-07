import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Analyze document sentiment and entity sentiment with Rosette Text Analytics. */
    "rosette_text_analytics.analyze_sentiment": {
      input: {
        /**
         * Text content to analyze.
         * @minLength 1
         */
        content?: string;
        /**
         * A URI that Rosette Text Analytics can fetch and analyze. This is mutually exclusive with content.
         * @format uri
         */
        contentUri?: string;
        /** ISO 639 language code for the input document when Rosette needs a language hint. */
        language?: string;
        /** Optional Rosette endpoint options forwarded to the API. Use official option names for the selected action. */
        options?: Record<string, unknown>;
      };
      output: {
        /** One label and score returned by Rosette Text Analytics. */
        document: {
          /** The label returned by Rosette. */
          label: string | null;
          /** The label confidence score returned by Rosette. */
          confidence: number | null;
          /** The raw object returned by Rosette Text Analytics. */
          raw: Record<string, unknown>;
        } | null;
        /** The entities with sentiment context returned by Rosette. */
        entities: Array<{
          /** The entity type returned by Rosette. */
          type: string | null;
          /** The entity mention text returned by Rosette. */
          mention: string | null;
          /** The normalized entity text returned by Rosette. */
          normalized: string | null;
          /** The mention count returned by Rosette. */
          count: number | null;
          /** The entity identifier returned by Rosette. */
          entityId: string | null;
          /** The entity confidence score returned by Rosette. */
          confidence: number | null;
          /** The entity linking confidence score returned by Rosette. */
          linkingConfidence: number | null;
          /** The entity salience score returned by Rosette. */
          salience: number | null;
          /** The mention offsets returned by Rosette. */
          mentionOffsets: Array<{
            /** The starting character offset for the mention. */
            startOffset?: number;
            /** The ending character offset for the mention. */
            endOffset?: number;
            [key: string]: unknown;
          }>;
          /** The raw object returned by Rosette Text Analytics. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Rosette Text Analytics. */
        raw: Record<string, unknown>;
      };
    };
    /** Extract named entities such as people, organizations, locations, dates, and emails. */
    "rosette_text_analytics.extract_entities": {
      input: {
        /**
         * Text content to analyze.
         * @minLength 1
         */
        content?: string;
        /**
         * A URI that Rosette Text Analytics can fetch and analyze. This is mutually exclusive with content.
         * @format uri
         */
        contentUri?: string;
        /** ISO 639 language code for the input document when Rosette needs a language hint. */
        language?: string;
        /** Optional Rosette endpoint options forwarded to the API. Use official option names for the selected action. */
        options?: Record<string, unknown>;
      };
      output: {
        /** The entities extracted from the document. */
        entitiesResponse: Array<{
          /** The entity type returned by Rosette. */
          type: string | null;
          /** The entity mention text returned by Rosette. */
          mention: string | null;
          /** The normalized entity text returned by Rosette. */
          normalized: string | null;
          /** The mention count returned by Rosette. */
          count: number | null;
          /** The entity identifier returned by Rosette. */
          entityId: string | null;
          /** The entity confidence score returned by Rosette. */
          confidence: number | null;
          /** The entity linking confidence score returned by Rosette. */
          linkingConfidence: number | null;
          /** The entity salience score returned by Rosette. */
          salience: number | null;
          /** The mention offsets returned by Rosette. */
          mentionOffsets: Array<{
            /** The starting character offset for the mention. */
            startOffset?: number;
            /** The ending character offset for the mention. */
            endOffset?: number;
            [key: string]: unknown;
          }>;
          /** The raw object returned by Rosette Text Analytics. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Rosette Text Analytics. */
        raw: Record<string, unknown>;
      };
    };
    /** Identify contextual content categories for a text document. */
    "rosette_text_analytics.identify_categories": {
      input: {
        /**
         * Text content to analyze.
         * @minLength 1
         */
        content?: string;
        /**
         * A URI that Rosette Text Analytics can fetch and analyze. This is mutually exclusive with content.
         * @format uri
         */
        contentUri?: string;
        /** ISO 639 language code for the input document when Rosette needs a language hint. */
        language?: string;
        /** Optional Rosette endpoint options forwarded to the API. Use official option names for the selected action. */
        options?: Record<string, unknown>;
      };
      output: {
        /** The contextual categories identified by Rosette. */
        categories: Array<{
          /** The category label returned by Rosette. */
          label: string | null;
          /** The category confidence score returned by Rosette. */
          confidence: number | null;
          /** The raw category score returned by Rosette. */
          score: number | null;
          /** The raw object returned by Rosette Text Analytics. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Rosette Text Analytics. */
        raw: Record<string, unknown>;
      };
    };
    /** Identify the language or languages of a text document with Rosette Text Analytics. */
    "rosette_text_analytics.identify_language": {
      input: {
        /**
         * Text content to analyze.
         * @minLength 1
         */
        content?: string;
        /**
         * A URI that Rosette Text Analytics can fetch and analyze. This is mutually exclusive with content.
         * @format uri
         */
        contentUri?: string;
        /** ISO 639 language code for the input document when Rosette needs a language hint. */
        language?: string;
        /** Optional Rosette endpoint options forwarded to the API. Use official option names for the selected action. */
        options?: Record<string, unknown>;
      };
      output: {
        /** The detected languages in descending confidence order. */
        languageDetections: Array<{
          /** The three-letter ISO 639-3 language code detected by Rosette. */
          language: string;
          /** The detection confidence score returned by Rosette. */
          confidence: number | null;
          /** The raw object returned by Rosette Text Analytics. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Rosette Text Analytics. */
        raw: Record<string, unknown>;
      };
    };
    /** Identify word, number, affix, and punctuation tokens in a text document. */
    "rosette_text_analytics.identify_tokens": {
      input: {
        /**
         * Text content to analyze.
         * @minLength 1
         */
        content?: string;
        /**
         * A URI that Rosette Text Analytics can fetch and analyze. This is mutually exclusive with content.
         * @format uri
         */
        contentUri?: string;
        /** ISO 639 language code for the input document when Rosette needs a language hint. */
        language?: string;
        /** Optional Rosette endpoint options forwarded to the API. Use official option names for the selected action. */
        options?: Record<string, unknown>;
      };
      output: {
        /** The tokens returned by Rosette. */
        tokens: Array<string>;
        /** The raw object returned by Rosette Text Analytics. */
        raw: Record<string, unknown>;
      };
    };
  }
}
