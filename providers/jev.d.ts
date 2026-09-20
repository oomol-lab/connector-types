import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Evaluate text or structured JSON state against typed Noul, Choice, and Score questions with Jev. */
    "jev.evaluate": {
      input: {
        /** Text or structured JSON context for Jev to evaluate. Nested values must be strings, numbers, booleans, null, arrays, or objects. */
        state: unknown;
        /** Named questions to evaluate against the shared state. */
        questions: Record<string, {
            /** The Jev question type. */
            type: "noul";
            /** Text or structured JSON context for Jev to evaluate. Nested values must be strings, numbers, booleans, null, arrays, or objects. */
            instructions: unknown;
            /** Optional criteria describing the true and false outcomes. */
            criteria?: {
              /** Natural-language criteria expressed as text or structured JSON values. */
              true: unknown;
              /** Natural-language criteria expressed as text or structured JSON values. */
              false: unknown;
            } | null;
          } | {
            /** The Jev question type. */
            type: "choice";
            /** Text or structured JSON context for Jev to evaluate. Nested values must be strings, numbers, booleans, null, arrays, or objects. */
            instructions: unknown;
            /** Candidate choice names mapped to natural-language criteria. */
            criteria: Record<string, unknown>;
          } | {
            /** The Jev question type. */
            type: "score";
            /** Text or structured JSON context for Jev to evaluate. Nested values must be strings, numbers, booleans, null, arrays, or objects. */
            instructions: unknown;
            /**
             * Ordered score-level descriptions from the lowest to the highest level.
             * @minItems 2
             */
            criteria: Array<unknown>;
          }>;
      };
      output: {
        /**
         * The versioned Jev model that produced the answers.
         * @minLength 1
         */
        model: string;
        /** Calibrated answers keyed by the input question names. */
        answers: Record<string, {
            /** The Jev answer type. */
            type: "noul";
            /**
             * A calibrated probability from 0 to 1.
             * @minimum 0
             * @maximum 1
             */
            noul: number;
          } | {
            /** The Jev answer type. */
            type: "choice";
            /** The selected choice name. */
            choice: string;
            /**
             * A calibrated probability from 0 to 1.
             * @minimum 0
             * @maximum 1
             */
            confidence: number;
            /** Probabilities keyed by choice name. */
            probabilities: Record<string, number>;
          } | {
            /** The Jev answer type. */
            type: "score";
            /** The continuous score over the ordered criteria levels. */
            score: number;
            /**
             * A calibrated probability from 0 to 1.
             * @minimum 0
             * @maximum 1
             */
            confidence: number;
            /** Score indices mapped to their criteria descriptions. */
            legend: Record<string, string>;
            /** Probabilities keyed by score index. */
            probabilities: Record<string, number>;
          }>;
        /** Token usage reported by Jev. */
        usage: {
          /**
           * The number of input tokens processed.
           * @minimum 0
           */
          input_tokens: number;
          /**
           * The number of output tokens generated.
           * @minimum 0
           */
          output_tokens: number;
        };
      };
    };
  }
}
