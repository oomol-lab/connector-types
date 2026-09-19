import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Evaluate text or structured JSON with TypeSafe Choice, Score, and Noul questions. */
    "typesafe_ai.evaluate": {
      input: {
        /** Text or structured JSON state for TypeSafe to evaluate. */
        state: string | Record<string, unknown> | Array<unknown>;
        /**
         * The TypeSafe model ID or alias to use. Defaults to jev-latest.
         * @minLength 1
         * @pattern \S
         */
        model?: string;
        /** Named questions evaluated independently against the shared state. */
        questions: Record<string, {
            /** The TypeSafe question type. */
            type: "noul";
            /** Text or structured JSON content, or null when the API permits no description. */
            instructions?: string | Record<string, unknown> | Array<unknown> | null;
            /** Optional descriptions of the true and false outcomes. */
            criteria?: {
              /** Text or structured JSON content, or null when the API permits no description. */
              true?: string | Record<string, unknown> | Array<unknown> | null;
              /** Text or structured JSON content, or null when the API permits no description. */
              false?: string | Record<string, unknown> | Array<unknown> | null;
            } | null;
          } | {
            /** The TypeSafe question type. */
            type: "choice";
            /** Text or structured JSON content, or null when the API permits no description. */
            instructions: string | Record<string, unknown> | Array<unknown> | null;
            /** Candidate option names mapped to optional descriptions. */
            criteria: Record<string, string | Record<string, unknown> | Array<unknown> | null>;
          } | {
            /** The TypeSafe question type. */
            type: "score";
            /** Text or structured JSON content, or null when the API permits no description. */
            instructions: string | Record<string, unknown> | Array<unknown> | null;
            /**
             * Ordered rubric levels from the lowest to the highest score.
             * @minItems 2
             * @maxItems 10
             */
            criteria: Array<string | Record<string, unknown> | Array<unknown> | null>;
          }>;
      };
      output: {
        /**
         * The versioned TypeSafe model that produced the answers.
         * @minLength 1
         */
        model: string;
        /** Typed answers keyed by the input question names. */
        answers: Record<string, {
            /** The TypeSafe answer type. */
            type: "noul";
            /**
             * A probability from 0 to 1.
             * @minimum 0
             * @maximum 1
             */
            noul: number;
          } | {
            /** The TypeSafe answer type. */
            type: "choice";
            /** The selected option name. */
            choice: string;
            /**
             * A probability from 0 to 1.
             * @minimum 0
             * @maximum 1
             */
            confidence: number;
            /** Probabilities keyed by option name. */
            probabilities: Record<string, number>;
          } | {
            /** The TypeSafe answer type. */
            type: "score";
            /** The probability-weighted score across the rubric levels. */
            score: number;
            /**
             * A probability from 0 to 1.
             * @minimum 0
             * @maximum 1
             */
            confidence: number;
            /** Score indices mapped to their rubric descriptions. */
            legend: Record<string, string | Record<string, unknown> | Array<unknown> | null>;
            /** Probabilities keyed by score index. */
            probabilities: Record<string, number>;
          }>;
        /** Token usage reported by TypeSafe. */
        usage: {
          /**
           * The number of input tokens processed.
           * @minimum 0
           */
          input_tokens: number;
          /**
           * The number of output tokens reported.
           * @minimum 0
           */
          output_tokens: number;
        };
      };
    };
    /** List the TypeSafe models available to the connected account. */
    "typesafe_ai.list_models": {
      input: Record<string, never>;
      output: {
        /** The available TypeSafe models and aliases. */
        models: Array<{
          /**
           * The model ID or alias accepted by the evaluation endpoint.
           * @minLength 1
           */
          name: string;
          /** A description of the model's intended use. */
          description: string;
          /** The release date reported by TypeSafe. */
          releaseDate: string;
        }>;
      };
    };
  }
}
