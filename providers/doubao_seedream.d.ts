import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate or edit one image, or split one image into a background and up to 99 transparent layers with Seedream 5.5 (16 with Pro or Flash). */
    "doubao_seedream.generate_image": {
      input: {
        /**
         * Flash prioritizes speed, Pro prioritizes quality, and 5.5 supports transparent generation and layer OCR.
         * @default "doubao-seedream-5-0-flash-260915"
         */
        model?: "doubao-seedream-5-0-flash-260915" | "doubao-seedream-5-0-pro-260628" | "doubao-seedream-5-5-261028";
        /**
         * Generation or editing instructions; optional for automatic layer decomposition. Coordinates and marks can identify editing regions.
         * @minLength 1
         * @maxLength 1000
         */
        prompt?: string;
        /**
         * Public URLs or data URLs for up to ten references; layer decomposition requires exactly one image.
         * @minItems 1
         * @maxItems 10
         */
        images?: Array<string>;
        /** Output size; defaults to 2K for generation and auto for layer decomposition. */
        size?: "1K" | "1.5K" | "2K" | "auto" | {
          /**
           * The output width in pixels.
           * @minimum 1
           */
          width: number;
          /**
           * The output height in pixels.
           * @minimum 1
           */
          height: number;
        };
        /** Split one input image into a background and up to 99 layers with 5.5 or 16 with Pro or Flash. The prompt is optional. */
        layerDecomposition?: boolean;
        /**
         * Maximum total outputs for 5.5 layer decomposition, including the background (default 30).
         * @minimum 2
         * @maximum 100
         */
        maxImages?: number;
        /** Return rich-text OCR for recognized text layers in 5.5 layer decomposition. */
        textRecognition?: boolean;
        /** Omit for layer decomposition. Transparent PNG generation accepts zero to ten references with 5.5. Pro and Flash require one reference with an alpha channel. */
        background?: "opaque" | "transparent";
        /** Output format; in layer decomposition this controls the background only, foreground layers are always PNG. */
        outputFormat?: "png" | "jpeg";
        /** Prompt optimization mode; fast is only supported by Seedream Pro. */
        optimizePromptMode?: "standard" | "fast";
        /**
         * Whether generated images include a watermark.
         * @default true
         */
        watermark?: boolean;
      };
      output: {
        /**
         * The model reported by Seedream.
         * @minLength 1
         */
        model: string;
        /** The response creation Unix timestamp in seconds. */
        createdAt: number;
        /** Generated images or decomposed layers. */
        images: Array<{
          /**
           * The temporary generated image URL.
           * @minLength 1
           */
          url: string;
          /**
           * The generated image dimensions as WIDTHxHEIGHT.
           * @minLength 1
           */
          size: string;
          /** The returned image format. */
          outputFormat?: "png" | "jpeg";
          /** Whether the image background is transparent. */
          background?: "opaque" | "transparent";
          /**
           * Layer stacking order; zero identifies the background.
           * @minimum 0
           * @maximum 99
           */
          zIndex?: number;
          /** Layer placement on the background canvas. */
          boundingBox?: {
            /**
             * Absolute bounding box as left, top, right, bottom in pixels.
             * @minItems 4
             * @maxItems 4
             */
            absolute: Array<number>;
            /**
             * Normalized bounding box as left, top, right, bottom on a 0 to 1000 scale.
             * @minItems 4
             * @maxItems 4
             */
            normalized: Array<number>;
          };
          /** Rich-text OCR with line positions and styled text runs from Ark. */
          textRecognition?: Record<string, unknown>;
          /** The layer name. */
          name?: string;
          /** The layer content description. */
          description?: string;
        }>;
        /** Image usage reported by Seedream; billing applies model and size multipliers. */
        usage: {
          /**
           * The actual number of output images, including the background and layers.
           * @minimum 0
           */
          generatedImages: number;
          /**
           * The number of input reference images.
           * @minimum 0
           */
          inputImages?: number;
          /**
           * The output token count.
           * @minimum 0
           */
          outputTokens?: number;
          /**
           * The total token count.
           * @minimum 0
           */
          totalTokens?: number;
        };
      };
    };
  }
}
