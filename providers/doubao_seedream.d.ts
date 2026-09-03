import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate or edit one or more images with Doubao Seedream. */
    "doubao_seedream.generate_image": {
      input: {
        /**
         * The Doubao Seedream Model ID or Endpoint ID used for image generation.
         * @minLength 1
         * @default "doubao-seedream-5-0-260128"
         * @example "doubao-seedream-5-0-260128"
         */
        model?: string;
        /**
         * The image generation or editing prompt.
         * @minLength 1
         * @maxLength 1000
         */
        prompt: string;
        /**
         * Public image URLs or data URLs used as references for image editing or fusion.
         * @maxItems 10
         */
        images?: Array<string>;
        /**
         * The standard resolution or custom pixel dimensions for generated images.
         * @default "2K"
         */
        size?: "2K" | "3K" | "4K" | {
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
        /**
         * The maximum number of images to generate. Use 1 for a single image.
         * @minimum 1
         * @maximum 15
         * @default 1
         */
        maxImages?: number;
        /**
         * Whether generated images include a watermark.
         * @default true
         */
        watermark?: boolean;
      };
      output: {
        /**
         * The model reported by Doubao Seedream.
         * @minLength 1
         */
        model: string;
        /** The response creation Unix timestamp in seconds. */
        createdAt: number;
        /** The generated images. */
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
        }>;
        /** Image generation usage reported by Doubao Seedream. */
        usage: {
          /**
           * The number of generated images.
           * @minimum 0
           */
          generatedImages: number;
          /**
           * The output token count.
           * @minimum 0
           */
          outputTokens: number;
          /**
           * The total token count.
           * @minimum 0
           */
          totalTokens: number;
        };
      };
    };
  }
}
