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
    /** Remove an image background synchronously with Leonardo.Ai. Returns image URLs or Base64 without polling; moderated outputs may be empty. Requires a Leonardo API key. */
    "leonardo_ai.remove_background": {
      input: {
        /** Background removal parameters. */
        parameters: {
          /** Source and optional replacement background. */
          guidances: {
            /**
             * Exactly one image reference.
             * @minItems 1
             * @maxItems 1
             */
            image_reference: Array<{
              /** The source image. */
              image: {
                /** Image source type. */
                type: "URL";
                /**
                 * HTTPS image URL or Base64 image data URL.
                 * @format uri
                 */
                url: string;
              } | {
                /** Image source type. */
                type: "BASE64";
                /**
                 * Base64 image bytes without a data URL prefix.
                 * @minLength 1
                 */
                data: string;
              } | {
                /** Image source type. */
                type: "UPLOADED" | "GENERATED" | "VARIATION";
                /**
                 * Leonardo image identifier.
                 * @minLength 1
                 */
                id: string;
              };
              /** Guidance order. */
              order?: number;
            }>;
            /**
             * Exactly one image reference.
             * @minItems 1
             * @maxItems 1
             */
            background_image_reference?: Array<{
              /** The source image. */
              image: {
                /** Image source type. */
                type: "URL";
                /**
                 * HTTPS image URL or Base64 image data URL.
                 * @format uri
                 */
                url: string;
              } | {
                /** Image source type. */
                type: "BASE64";
                /**
                 * Base64 image bytes without a data URL prefix.
                 * @minLength 1
                 */
                data: string;
              } | {
                /** Image source type. */
                type: "UPLOADED" | "GENERATED" | "VARIATION";
                /**
                 * Leonardo image identifier.
                 * @minLength 1
                 */
                id: string;
              };
              /** Guidance order. */
              order?: number;
            }>;
          };
          /** Number of outputs; must be 1. */
          quantity?: 1;
          /** Output resolution tier. PNG is limited to 10 megapixels. */
          size?: "auto" | "preview" | "full" | "50MP";
          /** Output image format. */
          format?: "png" | "jpg" | "webp";
          /** Foreground type hint. */
          type?: "auto" | "person" | "product" | "car" | "animal" | "graphic" | "transportation" | "other";
          /** Subject classification detail. */
          type_level?: "none" | "1" | "2" | "latest";
          /** Cutout image or alpha mask. */
          channels?: "rgba" | "alpha";
          /**
           * Replacement background color.
           * @minLength 1
           */
          bg_color?: string;
          /** Crop to the subject. */
          crop?: boolean;
          /**
           * Crop margin in pixels or percentages.
           * @minLength 1
           */
          crop_margin?: string;
          /**
           * Subject position, such as center or 50% 50%.
           * @minLength 1
           */
          position?: string;
          /**
           * Detection region as x1 y1 x2 y2 in pixels or percentages.
           * @minLength 1
           */
          roi?: string;
          /**
           * Subject scale: original or 10% through 100%.
           * @minLength 1
           */
          scale?: string;
          /** Preserve partially transparent areas. */
          semitransparency?: boolean;
          /** Artificial shadow style. */
          shadow_type?: "none" | "drop" | "3d" | "car";
          /**
           * Shadow opacity percentage.
           * @minimum 0
           * @maximum 100
           */
          shadow_opacity?: number;
        };
        /**
         * Avoid saving images to the Leonardo library; result URLs expire after 30 minutes. Defaults to true.
         * @default true
         */
        ephemeral?: boolean;
        /**
         * Publish saved results. Ignored when ephemeral is true. Defaults to false.
         * @default false
         */
        public?: boolean;
        /** Return dataB64 instead of a URL. Large outputs may exceed the upstream inline response limit. */
        base64?: boolean;
      };
      output: {
        /**
         * Synchronous generation identifier.
         * @minLength 1
         */
        id: string;
        /** Generated images; empty when all outputs are moderated. */
        results: Array<{
          /**
           * Result image URL; expires after 30 minutes for ephemeral results.
           * @format uri
           */
          url?: string;
          /**
           * Base64 output when base64 was requested.
           * @minLength 1
           */
          dataB64?: string;
          /**
           * Image media type.
           * @minLength 1
           */
          contentType: string;
          /**
           * Output width in pixels.
           * @minimum 1
           */
          width?: number;
          /**
           * Output height in pixels.
           * @minimum 1
           */
          height?: number;
          [key: string]: unknown;
        }>;
        /**
         * Number of outputs withheld by moderation.
         * @minimum 0
         */
        blockedCount?: number;
        /** Reported generation charge. */
        cost?: {
          /** Charge amount. */
          amount: string;
          /** Charge unit. */
          unit: "CREDITS" | "DOLLARS";
        };
        [key: string]: unknown;
      };
    };
  }
}
