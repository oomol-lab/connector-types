import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a concise short answer from Wolfram|Alpha. */
    "wolfram_alpha_api.get_short_answer": {
      input: {
        /**
         * Natural-language query or mathematical expression sent to Wolfram|Alpha.
         * @minLength 1
         */
        query: string;
        /** Measurement system requested by Wolfram|Alpha for unit-sensitive answers. */
        units?: "metric" | "imperial";
        /**
         * Maximum processing time in seconds accepted by Wolfram|Alpha.
         * @minimum 1
         */
        timeout?: number;
      };
      output: {
        /** Original query sent to the short answer endpoint. */
        query: string;
        /** Short textual answer returned by Wolfram|Alpha. */
        answer: string;
      };
    };
    /** Get a spoken-style single-sentence result from Wolfram|Alpha. */
    "wolfram_alpha_api.get_spoken_result": {
      input: {
        /**
         * Natural-language query or mathematical expression sent to Wolfram|Alpha.
         * @minLength 1
         */
        query: string;
        /** Measurement system requested by Wolfram|Alpha for unit-sensitive answers. */
        units?: "metric" | "imperial";
        /**
         * Maximum processing time in seconds accepted by Wolfram|Alpha.
         * @minimum 1
         */
        timeout?: number;
      };
      output: {
        /** Original query sent to the spoken result endpoint. */
        query: string;
        /** Spoken-style text returned by Wolfram|Alpha. */
        result: string;
      };
    };
    /** Validate whether Wolfram|Alpha can interpret a query. */
    "wolfram_alpha_api.validate_query": {
      input: {
        /**
         * Natural-language query or mathematical expression sent to Wolfram|Alpha.
         * @minLength 1
         */
        query: string;
        /**
         * Recognizer mode. Use default for general queries or voice for spoken phrasing.
         * @default "default"
         */
        mode?: "default" | "voice";
      };
      output: {
        /** Original query sent to the recognizer endpoint. */
        query: string;
        /** Recognizer mode used for the query validation request. */
        mode: "default" | "voice";
        /** Whether Wolfram|Alpha accepted the query. */
        accepted: boolean;
        /** Recognized Wolfram|Alpha domain for the query, when available. */
        domain: string | null;
        /** Recognizer timing value returned by Wolfram|Alpha in milliseconds. */
        timingMs: number | null;
        /** Recognizer significance score returned by Wolfram|Alpha, when available. */
        resultSignificanceScore: number | null;
        /** Suggested spelling correction returned by Wolfram|Alpha, when available. */
        spellingCorrection: string | null;
        /** Summary box path returned by Wolfram|Alpha, when available. */
        summaryBoxPath: string | null;
      };
    };
  }
}
