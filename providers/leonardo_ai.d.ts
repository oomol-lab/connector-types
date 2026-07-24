import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Leonardo.Ai image, video, audio, or 3D generation job using JSON model parameters. */
    "leonardo_ai.create_generation": {
      input: {
        /**
         * The Leonardo.Ai production model identifier, such as phoenix-v1.0.
         * @minLength 1
         */
        model: string;
        /** The model-specific generation parameters accepted by Leonardo.Ai. */
        parameters: Record<string, unknown>;
        /** Whether generated assets should appear in the Leonardo.Ai community feed. */
        public?: boolean;
      };
      output: {
        /**
         * The Leonardo.Ai generation job identifier.
         * @minLength 1
         */
        generationId: string;
        /** A Leonardo.Ai integer value. */
        apiCreditCost: number | null;
        /** A Leonardo.Ai API object. */
        raw: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve a Leonardo.Ai generation job status and normalized generated image URLs. */
    "leonardo_ai.get_generation": {
      input: {
        /**
         * The Leonardo.Ai generation job identifier.
         * @minLength 1
         */
        generationId: string;
      };
      output: {
        /** A Leonardo.Ai API object. */
        generation: Record<string, unknown>;
        /** A Leonardo.Ai string value. */
        status: string | null;
        /** The generated images normalized from the Leonardo.Ai response. */
        images: Array<{
          /** A Leonardo.Ai string value. */
          id?: string | null;
          /** A Leonardo.Ai string value. */
          url?: string | null;
          /** A Leonardo.Ai boolean value. */
          nsfw?: boolean | null;
          /** A Leonardo.Ai boolean value. */
          public?: boolean | null;
          /** A Leonardo.Ai API object. */
          raw: Record<string, unknown>;
        }>;
        /** A Leonardo.Ai API object. */
        raw: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List Leonardo.Ai production API models and their model-specific parameter schemas. */
    "leonardo_ai.list_models": {
      input: Record<string, never>;
      output: {
        /** The production API models returned by Leonardo.Ai. */
        models: Array<Record<string, unknown>>;
        /** A Leonardo.Ai API object. */
        raw: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
