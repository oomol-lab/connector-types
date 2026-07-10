import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Detect the language of a single text string with confidence scores. */
    "detect_language.detect_text": {
      input: {
        /**
         * The UTF-8 text to detect.
         * @minLength 1
         * @pattern \S
         */
        text: string;
      };
      output: {
        /** Language candidates ordered by confidence. */
        detections: Array<{
          /** The detected ISO language code. */
          language: string;
          /**
           * The confidence score between 0 and 1.
           * @minimum 0
           * @maximum 1
           */
          score: number;
        }>;
      };
    };
    /** Detect languages for multiple text strings in one batch request. */
    "detect_language.detect_texts": {
      input: {
        /**
         * The UTF-8 texts to detect, preserving output order.
         * @minItems 1
         */
        texts: Array<string>;
      };
      output: {
        /** Language candidate arrays ordered to match the input texts. */
        results: Array<Array<{
          /** The detected ISO language code. */
          language: string;
          /**
           * The confidence score between 0 and 1.
           * @minimum 0
           * @maximum 1
           */
          score: number;
        }>>;
      };
    };
    /** Get the current Detect Language account usage, limits, plan, and status. */
    "detect_language.get_account_status": {
      input: Record<string, never>;
      output: {
        /** The UTC date reported by Detect Language. */
        date: string;
        /** The number of requests sent today. */
        requests: number;
        /** The number of text bytes sent today. */
        bytes: number;
        /** The Detect Language plan code. */
        plan: string;
        /** The plan expiration date when one is set. */
        planExpires: string | null;
        /** The daily request limit. */
        dailyRequestsLimit: number;
        /** The daily text-byte limit. */
        dailyBytesLimit: number;
        /** The Detect Language account status. */
        status: string;
      };
    };
    /** List languages supported by Detect Language. */
    "detect_language.list_languages": {
      input: Record<string, never>;
      output: {
        /** The supported languages returned by Detect Language. */
        languages: Array<{
          /** The ISO language code. */
          code: string;
          /** The display name of the language. */
          name: string;
        }>;
      };
    };
  }
}
