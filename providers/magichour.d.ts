import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** AI Clothes Changer. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_ai_clothes_changer": {
      input: {
        /** Give your image a custom name for easy identification. */
        name?: string;
        /** Provide the assets for clothes changer */
        assets: {
          /**
           * The image with the person. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          person_file_path: string;
          /**
           * The image of the outfit. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          garment_file_path: string;
          /**
           * Type of clothing item to swap. If not provided, swaps the entire outfit.
           * * `upper_body` - for shirts/jackets
           * * `lower_body` - for pants/skirts
           * * `dresses` - for entire outfit (deprecated, use `entire_outfit` instead)
           * * `entire_outfit` - for entire outfit
           */
          garment_type?: "entire_outfit" | "upper_body" | "lower_body" | "dresses";
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
         *
         * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** AI Face Editor. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_ai_face_editor": {
      input: {
        /** Give your image a custom name for easy identification. */
        name?: string;
        /** Provide the assets for face editor */
        assets: {
          /**
           * This is the image whose face will be edited. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          image_file_path: string;
          [key: string]: unknown;
        };
        /** Face editing parameters */
        style: {
          /** Enhance face features */
          enhance_face?: boolean;
          /**
           * Eyebrow direction (-100 to 100), in increments of 5
           * @minimum -100
           * @maximum 100
           */
          eyebrow_direction?: number;
          /**
           * Horizontal eye gaze (-100 to 100), in increments of 5
           * @minimum -100
           * @maximum 100
           */
          eye_gaze_horizontal?: number;
          /**
           * Vertical eye gaze (-100 to 100), in increments of 5
           * @minimum -100
           * @maximum 100
           */
          eye_gaze_vertical?: number;
          /**
           * Eye open ratio (-100 to 100), in increments of 5
           * @minimum -100
           * @maximum 100
           */
          eye_open_ratio?: number;
          /**
           * Lip open ratio (-100 to 100), in increments of 5
           * @minimum -100
           * @maximum 100
           */
          lip_open_ratio?: number;
          /**
           * Head roll (-100 to 100), in increments of 5
           * @minimum -100
           * @maximum 100
           */
          head_roll?: number;
          /**
           * Mouth grim (-100 to 100), in increments of 5
           * @minimum -100
           * @maximum 100
           */
          mouth_grim?: number;
          /**
           * Mouth pout (-100 to 100), in increments of 5
           * @minimum -100
           * @maximum 100
           */
          mouth_pout?: number;
          /**
           * Mouth purse (-100 to 100), in increments of 5
           * @minimum -100
           * @maximum 100
           */
          mouth_purse?: number;
          /**
           * Mouth smile (-100 to 100), in increments of 5
           * @minimum -100
           * @maximum 100
           */
          mouth_smile?: number;
          /**
           * Horizontal mouth position (-100 to 100), in increments of 5
           * @minimum -100
           * @maximum 100
           */
          mouth_position_horizontal?: number;
          /**
           * Vertical mouth position (-100 to 100), in increments of 5
           * @minimum -100
           * @maximum 100
           */
          mouth_position_vertical?: number;
          /**
           * Head pitch (-100 to 100), in increments of 5
           * @minimum -100
           * @maximum 100
           */
          head_pitch?: number;
          /**
           * Head yaw (-100 to 100), in increments of 5
           * @minimum -100
           * @maximum 100
           */
          head_yaw?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
         *
         * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** AI GIF Generator. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_ai_gif_generator": {
      input: {
        /** Give your gif a custom name for easy identification. */
        name?: string;
        /** Style. */
        style: {
          /**
           * The prompt used for the GIF.
           * @minLength 1
           * @maxLength 500
           */
          prompt: string;
          [key: string]: unknown;
        };
        /** The output file format for the generated animation. */
        output_format?: "gif" | "mp4" | "webm";
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
         *
         * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** AI Headshot Generator. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_ai_headshot_generator": {
      input: {
        /** Give your image a custom name for easy identification. */
        name?: string;
        /** Style. */
        style?: {
          /** Prompt used to guide the style of your headshot. We recommend omitting the prompt unless you want to customize your headshot. You can visit [AI headshot generator](https://magichour.ai/create/ai-headshot-generator) to view an example of a good prompt used for our 'Professional' style. */
          prompt?: string;
          [key: string]: unknown;
        };
        /** Provide the assets for headshot photo */
        assets: {
          /**
           * The image used to generate the headshot. This image must contain one detectable face. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          image_file_path: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
         *
         * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** AI Image Editor. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_ai_image_editor": {
      input: {
        /** Give your image a custom name for easy identification. */
        name?: string;
        /** Number of images to generate. Maximum varies by model. Defaults to 1 if not specified. */
        image_count?: 1 | 4 | 9 | 16;
        /**
         * The AI model to use for image editing. Each model has different capabilities and costs.
         *
         * **Models:**
         * - `default` - Use the model we recommend, which will change over time. This is recommended unless you need a specific model. This is the default behavior.
         * - `flux-2-klein` - from 5 credits/image
         *   - Supported resolutions: 640px, 1k, 2k
         *   - Available for tiers: free, creator, pro, business
         *   - Max additional input images: 5
         * - `gpt-image-2` - from 50 credits/image
         *   - Supported resolutions: 640px, 1k, 2k, 4k
         *   - Available for tiers: creator, pro, business
         *   - Max additional input images: 9
         * - `gpt-image-2.5-flare` - from 100 credits/image
         *   - Supported resolutions: 640px, 1k, 2k, 4k
         *   - Available for tiers: creator, pro, business
         *   - Max additional input images: 9
         * - `krea-2` - from 10 credits/image
         *   - Supported resolutions: 640px, 1k
         *   - Available for tiers: free, creator, pro, business
         *   - Max additional input images: 1
         * - `nano-banana` - from 50 credits/image
         *   - Supported resolutions: 640px, 1k
         *   - Available for tiers: creator, pro, business
         *   - Max additional input images: 9
         * - `nano-banana-2` - from 100 credits/image
         *   - Supported resolutions: 640px, 1k, 2k, 4k
         *   - Available for tiers: creator, pro, business
         *   - Max additional input images: 9
         * - `nano-banana-2-lite` - from 50 credits/image
         *   - Supported resolutions: 640px, 1k
         *   - Available for tiers: creator, pro, business
         *   - Max additional input images: 9
         * - `nano-banana-2.1` - from 50 credits/image
         *   - Supported resolutions: 640px, 1k, 2k, 4k
         *   - Available for tiers: creator, pro, business
         *   - Max additional input images: 9
         * - `nano-banana-pro` - from 150 credits/image
         *   - Supported resolutions: 1k, 2k, 4k
         *   - Available for tiers: creator, pro, business
         *   - Max additional input images: 9
         * - `qwen-edit` - from 10 credits/image
         *   - Supported resolutions: 640px, 1k, 2k
         *   - Available for tiers: free, creator, pro, business
         *   - Max additional input images: 2
         * - `qwen-image-2.1` - from 10 credits/image
         *   - Supported resolutions: 640px, 1k, 2k
         *   - Available for tiers: free, creator, pro, business
         *   - Max additional input images: 2
         * - `seedream-v4` - from 40 credits/image
         *   - Supported resolutions: 640px, 1k, 2k, 4k
         *   - Available for tiers: creator, pro, business
         *   - Max additional input images: 9
         * - `seedream-v4.5` - from 50 credits/image
         *   - Supported resolutions: 640px, 1k, 2k, 4k
         *   - Available for tiers: creator, pro, business
         *   - Max additional input images: 9
         * - `seedream-v5-pro` - from 75 credits/image
         *   - Supported resolutions: 640px, 1k, 2k
         *   - Available for tiers: creator, pro, business
         *   - Max additional input images: 9
         *
         */
        model?: "default" | "qwen-image-2.1" | "gpt-image-2" | "nano-banana-2" | "flux-2-klein" | "nano-banana-pro" | "seedream-v5-pro" | "seedream-v4.5" | "nano-banana-2.1" | "qwen-edit" | "nano-banana-2-lite" | "krea-2" | "gpt-image-2.5-flare" | "seedream-v4" | "nano-banana";
        /** The aspect ratio of the output image(s). If not specified, defaults to `auto`. */
        aspect_ratio?: "auto" | "16:9" | "9:16" | "4:3" | "3:2" | "1:1" | "4:5" | "2:3";
        /**
         * Maximum resolution (longest edge) for the output image.
         *
         * **Options:**
         * - `640px` — up to 640px
         * - `1k` — up to 1024px
         * - `2k` — up to 2048px
         * - `4k` — up to 4096px
         * - `auto` — **Deprecated.** Mapped server-side from your subscription tier to the best matching resolution the model supports
         *
         * **Per-model support:**
         * - `flux-2-klein` - 640px, 1k, 2k
         * - `gpt-image-2` - 640px, 1k, 2k, 4k
         * - `gpt-image-2.5-flare` - 640px, 1k, 2k, 4k
         * - `krea-2` - 640px, 1k
         * - `nano-banana` - 640px, 1k
         * - `nano-banana-2` - 640px, 1k, 2k, 4k
         * - `nano-banana-2-lite` - 640px, 1k
         * - `nano-banana-2.1` - 640px, 1k, 2k, 4k
         * - `nano-banana-pro` - 1k, 2k, 4k
         * - `qwen-edit` - 640px, 1k, 2k
         * - `qwen-image-2.1` - 640px, 1k, 2k
         * - `seedream-v4` - 640px, 1k, 2k, 4k
         * - `seedream-v4.5` - 640px, 1k, 2k, 4k
         * - `seedream-v5-pro` - 640px, 1k, 2k
         *
         * Note: Resolution availability depends on the model and your subscription tier.
         */
        resolution?: "auto" | "640px" | "1k" | "2k" | "4k";
        /** Style. */
        style: {
          /**
           * The prompt used to edit the image.
           * @minLength 1
           * @maxLength 15000
           */
          prompt: string;
          [key: string]: unknown;
        };
        /** Provide the assets for image edit */
        assets: {
          /**
           * The image(s) used in the edit, maximum of 10 images. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @maxItems 10
           */
          image_file_paths?: Array<string>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
         *
         * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** AI Image Generator. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_ai_image_generator": {
      input: {
        /** Give your image a custom name for easy identification. */
        name?: string;
        /**
         * Number of images to generate. Maximum varies by model.
         * @minimum 1
         * @maximum 16
         */
        image_count: number;
        /**
         * The AI model to use for image generation. Each model has different capabilities and costs.
         *
         * **Models:**
         * - `default` - Use the model we recommend, which will change over time. This is recommended unless you need a specific model. This is the default behavior.
         * - `flux-2-klein` - from 5 credits/image
         *   - Supported resolutions: 640px, 1k, 2k
         *   - Available for tiers: free, creator, pro, business
         *   - Image count allowed: 1
         * - `flux-schnell` - from 5 credits/image
         *   - Supported resolutions: 640px, 1k, 2k
         *   - Available for tiers: free, creator, pro, business
         *   - Image count allowed: 1, 2, 3, 4
         * - `gpt-image-2` - from 50 credits/image
         *   - Supported resolutions: 640px, 1k, 2k, 4k
         *   - Available for tiers: creator, pro, business
         *   - Image count allowed: 1, 2, 3, 4
         * - `gpt-image-2.5-flare` - from 100 credits/image
         *   - Supported resolutions: 640px, 1k, 2k, 4k
         *   - Available for tiers: creator, pro, business
         *   - Image count allowed: 1, 2, 3, 4
         * - `krea-2` - from 10 credits/image
         *   - Supported resolutions: 640px, 1k
         *   - Available for tiers: free, creator, pro, business
         *   - Image count allowed: 1
         * - `nano-banana` - from 50 credits/image
         *   - Supported resolutions: 640px, 1k
         *   - Available for tiers: creator, pro, business
         *   - Image count allowed: 1, 2, 3, 4
         * - `nano-banana-2` - from 100 credits/image
         *   - Supported resolutions: 640px, 1k, 2k, 4k
         *   - Available for tiers: creator, pro, business
         *   - Image count allowed: 1, 4, 9, 16
         * - `nano-banana-2-lite` - from 50 credits/image
         *   - Supported resolutions: 640px, 1k
         *   - Available for tiers: creator, pro, business
         *   - Image count allowed: 1, 2, 3, 4
         * - `nano-banana-2.1` - from 50 credits/image
         *   - Supported resolutions: 640px, 1k, 2k, 4k
         *   - Available for tiers: creator, pro, business
         *   - Image count allowed: 1, 4, 9, 16
         * - `nano-banana-pro` - from 150 credits/image
         *   - Supported resolutions: 1k, 2k, 4k
         *   - Available for tiers: creator, pro, business
         *   - Image count allowed: 1, 4, 9, 16
         * - `qwen-image-2.1` - from 10 credits/image
         *   - Supported resolutions: 640px, 1k, 2k
         *   - Available for tiers: free, creator, pro, business
         *   - Image count allowed: 1, 2, 3, 4
         * - `seedream-v4` - from 40 credits/image
         *   - Supported resolutions: 640px, 1k, 2k, 4k
         *   - Available for tiers: creator, pro, business
         *   - Image count allowed: 1, 2, 3, 4
         * - `seedream-v5-pro` - from 75 credits/image
         *   - Supported resolutions: 640px, 1k, 2k
         *   - Available for tiers: creator, pro, business
         *   - Image count allowed: 1, 2, 3, 4
         * - `z-image-turbo` - from 5 credits/image
         *   - Supported resolutions: 640px, 1k, 2k
         *   - Available for tiers: free, creator, pro, business
         *   - Image count allowed: 1, 2, 3, 4
         *
         * **Deprecated Enum Values:**
         * - `seedream` - Use `seedream-v4` instead.
         *
         */
        model?: "default" | "z-image-turbo" | "gpt-image-2" | "qwen-image-2.1" | "flux-2-klein" | "nano-banana-2" | "nano-banana-2.1" | "nano-banana-pro" | "krea-2" | "seedream-v5-pro" | "nano-banana-2-lite" | "gpt-image-2.5-flare" | "seedream-v4" | "nano-banana" | "flux-schnell" | "seedream";
        /** The aspect ratio of the output image(s). If not specified, defaults to `1:1` (square). */
        aspect_ratio?: "1:1" | "16:9" | "9:16";
        /**
         * Maximum resolution (longest edge) for the output image.
         *
         * **Options:**
         * - `640px` — up to 640px
         * - `1k` — up to 1024px
         * - `2k` — up to 2048px
         * - `4k` — up to 4096px
         * - `auto` — **Deprecated.** Mapped server-side from your subscription tier to the best matching resolution the model supports
         *
         * **Per-model support:**
         * - `flux-2-klein` - 640px, 1k, 2k
         * - `flux-schnell` - 640px, 1k, 2k
         * - `gpt-image-2` - 640px, 1k, 2k, 4k
         * - `gpt-image-2.5-flare` - 640px, 1k, 2k, 4k
         * - `krea-2` - 640px, 1k
         * - `nano-banana` - 640px, 1k
         * - `nano-banana-2` - 640px, 1k, 2k, 4k
         * - `nano-banana-2-lite` - 640px, 1k
         * - `nano-banana-2.1` - 640px, 1k, 2k, 4k
         * - `nano-banana-pro` - 1k, 2k, 4k
         * - `qwen-image-2.1` - 640px, 1k, 2k
         * - `seedream-v4` - 640px, 1k, 2k, 4k
         * - `seedream-v5-pro` - 640px, 1k, 2k
         * - `z-image-turbo` - 640px, 1k, 2k
         *
         * Note: Resolution availability depends on the model and your subscription tier.
         */
        resolution?: "auto" | "640px" | "1k" | "2k" | "4k";
        /** The art style to use for image generation. */
        style: {
          /**
           * The prompt used for the image(s).
           * @minLength 1
           */
          prompt: string;
          /** The art style to use for image generation. Defaults to 'general' if not provided. */
          tool?: "ai-anime-generator" | "ai-art-generator" | "ai-background-generator" | "ai-character-generator" | "ai-face-generator" | "ai-fashion-generator" | "ai-icon-generator" | "ai-illustration-generator" | "ai-interior-design-generator" | "ai-landscape-generator" | "ai-logo-generator" | "ai-manga-generator" | "ai-outfit-generator" | "ai-pattern-generator" | "ai-photo-generator" | "ai-sketch-generator" | "ai-tattoo-generator" | "album-cover-generator" | "animated-characters-generator" | "architecture-generator" | "book-cover-generator" | "comic-book-generator" | "dark-fantasy-ai" | "disney-ai-generator" | "dnd-ai-art-generator" | "emoji-generator" | "fantasy-map-generator" | "graffiti-generator" | "movie-poster-generator" | "optical-illusion-generator" | "pokemon-generator" | "south-park-character-generator" | "superhero-generator" | "thumbnail-maker" | "general";
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
         *
         * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** AI Image Upscaler. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_ai_image_upscaler": {
      input: {
        /** Give your image a custom name for easy identification. */
        name?: string;
        /**
         * How much to scale the image. Must be either 2 or 4.
         *
         * Note: 4x upscale is only available on Creator, Pro, or Business tier.
         */
        scale_factor: number;
        /** Style settings for the upscale. Use `mode` (`"preserve"`, `"balanced"`, or `"creative"`). Defaults to `"balanced"`. */
        style?: {
          /** The upscaling mode. `"preserve"` uses the fast pro pipeline (1× credit multiplier). `"balanced"` and `"creative"` use the creative pipeline (2× credit multiplier). `"pro"` is deprecated and maps to `"preserve"`. Defaults to `"balanced"`. */
          mode?: "pro" | "preserve" | "balanced" | "creative";
          /** A prompt to guide the final image. Only used when mode is `creative`. */
          prompt?: string;
          [key: string]: unknown;
        };
        /** Provide the assets for upscaling */
        assets: {
          /**
           * The image to upscale. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           * . The maximum input image size is 4096x4096px.
           * @minLength 1
           */
          image_file_path: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
         *
         * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** AI Meme Generator. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_ai_meme_generator": {
      input: {
        /** The name of the meme. */
        name?: string;
        /** Style. */
        style: {
          /**
           * The topic of the meme.
           * @minLength 1
           * @maxLength 200
           */
          topic: string;
          /** To use our templates, pass in one of the enum values. */
          template: "Random" | "Drake Hotline Bling" | "Galaxy Brain" | "Two Buttons" | "Gru's Plan" | "Tuxedo Winnie The Pooh" | "Is This a Pigeon" | "Panik Kalm Panik" | "Disappointed Guy" | "Waiting Skeleton" | "Bike Fall" | "Change My Mind" | "Side Eyeing Chloe" | "Woman Yelling at a Cat" | "Success Kid" | "One Does Not Simply" | "Bad Luck Brian" | "Futurama Fry" | "Ancient Aliens" | "Disaster Girl" | "Hide the Pain Harold" | "Distracted Boyfriend" | "Left Exit 12 Off Ramp" | "Running Away Balloon" | "Batman Slapping Robin" | "UNO Draw 25" | "Mocking SpongeBob" | "Boardroom Meeting Suggestion" | "X, X Everywhere" | "Buff Doge vs Cheems" | "Bernie Once Again Asking" | "Roll Safe Think About It" | "Blank Nut Button" | "Epic Handshake" | "Sad Pablo Escobar" | "Inhaling Seagull" | "Surprised Pikachu" | "Always Has Been" | "Scroll of Truth" | "Marked Safe From" | "Y'all Got Any More of That" | "Monkey Puppet" | "Oprah You Get A" | "They're the Same Picture" | "I Bet He's Thinking About Other Women" | "Evil Kermit" | "This Is Fine" | "This Is Where I'd Put My Trophy" | "Anakin Padme Four Panel" | "Who Killed Hannibal" | "Clown Applying Makeup" | "Trade Offer" | "Laughing Leo" | "Sleeping Shaq" | "Megamind Peeking" | "Grandma Finds the Internet" | "Doge" | "American Chopper Argument" | "First World Problems" | "Grumpy Cat" | "SpongeBob Ight Imma Head Out" | "But That's None of My Business" | "Creepy Condescending Wonka" | "Captain Picard Facepalm" | "Hard to Swallow Pills" | "Bell Curve" | "Absolute Cinema" | "You Guys Are Getting Paid" | "Types of Headaches" | "Mother Ignoring Kid Drowning in a Pool" | "Flex Tape" | "Spiderman Pointing at Spiderman" | "Charlie Conspiracy" | "Pawn Stars Best I Can Do" | "0 Days Without" | "Squidward Window" | "Where Monkey" | "Soldier Protecting Sleeping Child" | "They Don't Know" | "Spiderman Triple" | "Two Guys on a Bus" | "Imagination SpongeBob" | "All My Homies Hate" | "You Know I'm Something of a Scientist Myself" | "Anime Girl Hiding from Terminator" | "A Train Hitting a School Bus" | "AJ Styles and Undertaker" | "Three-Headed Dragon" | "Grant Gustin Over Grave" | "Whisper and Goosebumps" | "Scooby Doo Mask Reveal" | "Domino Effect" | "Two Paths" | "I'm the Captain Now" | "Say the Line Bart" | "Star Wars Yoda" | "Grim Reaper Knocking Door" | "Yo Dawg Heard You" | "Gus Fring We Are Not the Same" | "C'mon Do Something" | "Leonardo DiCaprio Cheers";
          /** Whether to search the web for meme content. */
          searchWeb?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
         *
         * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** AI Music Generator. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_ai_music_generator": {
      input: {
        /** Give your audio a custom name for easy identification. */
        name?: string;
        /**
         * Requested track duration in seconds, from 15 to 300. Determines credits charged.
         * @minimum 15
         * @maximum 300
         */
        duration: number;
        /** Style. */
        style: {
          /**
           * Describe the song, including genre, mood, and instruments.
           * @minLength 1
           */
          prompt: string;
          /** Generate music without vocals. When true, lyrics is ignored. */
          instrumental?: boolean;
          /** Custom lyrics. Omit or leave blank for AI-generated lyrics when instrumental is false. */
          lyrics?: string;
        };
      };
      output: {
        /** Unique ID of the audio. Use it with the [Get audio Project API](https://docs.magichour.ai/api-reference/audio-projects/get-audio-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the audio. We charge credits right when the request is made.
         *
         * If an error occurred while generating the audio, credits will be refunded and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** AI QR Code Generator. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_ai_qr_code_generator": {
      input: {
        /** Give your image a custom name for easy identification. */
        name?: string;
        /** The content of the QR code. */
        content: string;
        /** Style. */
        style: {
          /** To use our templates, pass in one of Watercolor, Cyberpunk City, Ink Landscape, Interior Painting, Japanese Street, Mech, Minecraft, Picasso Painting, Game Map, Spaceship, Chinese Painting, Winter Village, or pass any custom art style. */
          art_style: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
         *
         * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** AI Talking Photo. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_ai_talking_photo": {
      input: {
        /** Give your video a custom name for easy identification. */
        name?: string;
        /**
         * The start time of the input audio in seconds. Maximum clip length depends on style.generation_mode: realistic 300s, prompted 45s.
         * @minimum 0
         */
        start_seconds: number;
        /**
         * The end time of the input audio in seconds. Maximum clip length depends on style.generation_mode: realistic 300s, prompted 45s.
         * @minimum 0.1
         */
        end_seconds: number;
        /** Provide the assets for creating a talking photo */
        assets: {
          /**
           * The source image to animate. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          image_file_path: string;
          /**
           * The audio file to sync with the image. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          audio_file_path: string;
          [key: string]: unknown;
        };
        /** Attributes used to dictate the style of the output */
        style?: {
          /**
           * Controls overall motion style.
           * * `realistic` - Maintains likeness well, high quality, and reliable.
           * * `prompted` - Slightly lower likeness; allows option to prompt scene.
           *
           * **Deprecated values (maintained for backward compatibility):**
           * * `pro` - Deprecated: use `realistic`
           * * `standard` - Deprecated: use `prompted`
           * * `stable` - Deprecated: use `realistic`
           * * `expressive` - Deprecated: use `prompted`
           */
          generation_mode?: "realistic" | "prompted" | "pro" | "standard" | "stable" | "expressive";
          /**
           * A text prompt to guide the generation. Only applicable when generation_mode is `prompted`.
           * This field is ignored for other modes.
           */
          prompt?: string;
          [key: string]: unknown;
        };
        /** Output preset. Overrides `max_resolution`. Defaults to 480p in prompted mode; realistic mode uses the mapped plan maximum. */
        resolution?: "480p" | "720p";
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
         *
         * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** AI UGC Ad Generator. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_ai_ugc_ad": {
      input: {
        /** Assets. */
        assets: {
          /**
           * Prepared image to animate. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          image_file_path: string;
        };
        /**
         * The words the actor should speak. Character limits apply after trimming:
         * * kling-3.0: 2500 characters.
         * * ltx-2.5: 1804 characters.
         * * veo3.1: 2500 characters.
         * LTX's dialogue wrapper counts toward its model prompt limit.
         * @minLength 1
         */
        script: string;
        /**
         * Video duration in seconds. Supported values by model:
         * * kling-3.0: 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 seconds.
         * * ltx-2.5: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60 seconds.
         * * veo3.1: 4, 6, 8, 15, 22, 29, 36, 43, 50, 57, 64, 71, 78, 85, 92, 99, 106, 113, 120, 127, 134, 141 seconds.
         * Free plans are limited to 5 seconds unless a credit pack has been purchased.
         * @minimum 1
         */
        end_seconds: number;
        /** Defaults to kling-3.0 on paid plans and ltx-2.5 on free plans. */
        model?: "kling-3.0" | "ltx-2.5" | "veo3.1";
        /** Defaults to 720p on paid plans and 480p on free plans. Unsupported model/resolution combinations and resolutions unavailable for your plan are rejected. */
        resolution?: "480p" | "720p" | "1080p";
      };
      output: {
        /** Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
         *
         * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** AI Video Editor. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_ai_video_editor": {
      input: {
        /** Give your video a custom name for easy identification. */
        name?: string;
        /**
         * Start time of your clip (seconds). Must be ≥ 0.
         * @minimum 0
         */
        start_seconds?: number;
        /**
         * End time of your clip in seconds. Must be greater than `start_seconds`. Minimum duration depends on model: `gemini-omni-1.1`: 3s, LTX 2.5: 0.5s. Maximum duration depends on model: `gemini-omni-1.1`: 10s, LTX 2.5: 20s.
         * @minimum 0.1
         */
        end_seconds: number;
        /** Editing model. Defaults to LTX 2.5 for free tier and `gemini-omni-1.1` for paid. `gemini-omni` is deprecated; use `gemini-omni-1.1` instead. */
        model?: "gemini-omni-1.1" | "gemini-omni" | "ltx-2.5" | "ltx-2.3";
        /** Output resolution. Defaults to `480p` for free tier and `720p` for paid. `gemini-omni-1.1` and deprecated `gemini-omni` support 720p and 1080p; LTX 2.5 supports 480p, 720p, and 1080p. */
        resolution?: "480p" | "720p" | "1080p";
        /** Style. */
        style: {
          /**
           * The prompt used to edit the video.
           * @minLength 1
           */
          prompt: string;
          [key: string]: unknown;
        };
        /** Provide the assets for video editing. */
        assets: {
          /**
           * The video to edit. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          video_file_path: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
         *
         * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** AI Video Translator. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_ai_video_translator": {
      input: {
        /** Give your video a custom name for easy identification. */
        name?: string;
        /**
         * Start time of your clip (seconds). Must be ≥ 0.
         * @minimum 0
         */
        start_seconds?: number;
        /**
         * End time of your clip (seconds). Must be greater than start_seconds. The clip must be 1-30 seconds long.
         * @minimum 0.1
         */
        end_seconds: number;
        /** Language to translate the video's speech into. */
        target_language: "English" | "Chinese (Simplified)" | "Hindi" | "Spanish" | "Arabic" | "French" | "Afrikaans" | "Bengali" | "Bulgarian" | "Catalan" | "Croatian" | "Czech" | "Danish" | "Dutch" | "Estonian" | "Finnish" | "German" | "Greek" | "Gujarati" | "Hebrew" | "Hungarian" | "Indonesian" | "Italian" | "Japanese" | "Kannada" | "Kazakh" | "Korean" | "Latvian" | "Lithuanian" | "Malay" | "Malayalam" | "Marathi" | "Norwegian" | "Persian" | "Polish" | "Portuguese" | "Punjabi" | "Romanian" | "Russian" | "Serbian" | "Slovak" | "Slovenian" | "Swahili" | "Swedish" | "Tamil" | "Telugu" | "Thai" | "Chinese (Traditional)" | "Turkish" | "Ukrainian" | "Urdu" | "Vietnamese" | "Welsh";
        /** Output video resolution. Defaults to 480p. 720p and 1080p require a paid plan. */
        resolution?: "480p" | "720p" | "1080p";
        /** Source video for the translation job. */
        assets: {
          /**
           * Source video containing the speech to translate. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          video_file_path: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
         *
         * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** AI Video Upscaler. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_ai_video_upscaler": {
      input: {
        /** Give your video a custom name for easy identification. */
        name?: string;
        /**
         * Start time of your clip (seconds). Must be ≥ 0.
         * @minimum 0
         */
        start_seconds?: number;
        /**
         * End time of your clip (seconds). Must be greater than start_seconds.
         * @minimum 0.1
         */
        end_seconds: number;
        /** Output resolution. `720p` and `1080p` set the output's short side, `2k` and `4k` its long side; the aspect ratio is kept. Requires a paid plan. */
        resolution: "720p" | "1080p" | "2k" | "4k";
        /** Source video for the upscale job. */
        assets: {
          /**
           * Video to upscale. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          video_file_path: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
         *
         * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** AI Voice Cloner. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_ai_voice_cloner": {
      input: {
        /** Give your audio a custom name for easy identification. */
        name?: string;
        /** Provide the assets for voice cloning. */
        assets: {
          /**
           * The audio used to clone the voice. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          audio_file_path: string;
          [key: string]: unknown;
        };
        /** Style. */
        style: {
          /**
           * Text used to generate speech from the cloned voice. The character limit is 1000 characters.
           * @minLength 1
           * @maxLength 1000
           */
          prompt: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the audio. Use it with the [Get audio Project API](https://docs.magichour.ai/api-reference/audio-projects/get-audio-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the audio. We charge credits right when the request is made.
         *
         * If an error occurred while generating the audio, credits will be refunded and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** AI Voice Generator. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_ai_voice_generator": {
      input: {
        /** Give your audio a custom name for easy identification. */
        name?: string;
        /** The content used to generate speech. */
        style: {
          /**
           * Text used to generate speech. The character limit is 1000 characters.
           * @minLength 1
           */
          prompt: string;
          /** The voice used to generate speech. Select a value from the supported voice names. */
          voice_name: "Elon Musk" | "Mark Zuckerberg" | "Joe Rogan" | "Barack Obama" | "Morgan Freeman" | "Kanye West" | "Donald Trump" | "Joe Biden" | "Kim Kardashian" | "Taylor Swift" | "James Earl Jones" | "Samuel L. Jackson" | "Jeff Goldblum" | "David Attenborough" | "Sean Connery" | "Cillian Murphy" | "Anne Hathaway" | "Julia Roberts" | "Natalie Portman" | "Steve Carell" | "Amy Poehler" | "Stephen Colbert" | "Jimmy Fallon" | "David Letterman" | "Alex Trebek" | "Katy Perry" | "Prince" | "Kevin Bacon" | "Tom Hiddleston" | "Adam Driver" | "Alan Rickman" | "Alexz Johnson" | "Ana Gasteyer" | "Andrew Rannells" | "Arden Cho" | "Bear Grylls" | "Ben McKenzie" | "Ben Stiller" | "Ben Whishaw" | "Billie Joe Armstrong" | "Bingbing Li" | "Booboo Stewart" | "Bradley Steven Perry" | "Bruno Mars" | "Caity Lotz" | "Cameron Boyce" | "Candice Accola" | "Carrie Underwood" | "Casey Affleck" | "Caterina Scorsone" | "Cedric the Entertainer" | "Chace Crawford" | "Chadwick Boseman" | "Charlie Day" | "Chris Hemsworth" | "Chris Martin" | "Christopher Mintz-Plasse" | "Dan Fogler" | "Dan Stevens" | "Daniel Dae Kim" | "Danielle Panabaker" | "Dave Bautista" | "David Schwimmer" | "Denis Leary" | "Derek Mears" | "Diego Luna" | "Donald Glover" | "Donnie Yen" | "Doutzen Kroes" | "Dove Cameron" | "Dr. Dre" | "Drake Bell" | "Elle Fanning" | "Ernie Hudson" | "Fergie" | "Forest Whitaker" | "Francia Raisa" | "Freddie Highmore" | "Gillian Jacobs" | "Gina Carano" | "Ginnifer Goodwin" | "Gordon Ramsay" | "Guy Pearce" | "Gwendoline Christie" | "Hailee Steinfeld" | "Howie Mandel" | "Hugh Jackman" | "Hugh Laurie" | "J. K. Simmons" | "Jack Black" | "Jared Leto" | "Jennifer Carpenter" | "Kesha" | "Kris Jenner" | "Kristen Bell" | "Lorde" | "Matt Smith" | "Marilyn Monroe" | "Charlie Chaplin" | "Albert Einstein" | "Abraham Lincoln" | "John F. Kennedy" | "Lucille Ball" | "A.R. Rahman" | "Aamir Khan" | "Ajay Devgn" | "Akshay Kumar" | "Alain Delon" | "Alan Alda" | "Alan Cumming" | "Amitabh Bachchan" | "Ang Lee" | "Ansel Elgort" | "Anthony Anderson" | "Anthony Mackie" | "Armie Hammer" | "Asa Butterfield" | "B.J. Novak" | "Barbara Eden" | "Betty White" | "Bill Nighy" | "Bill Pullman" | "Blake Shelton" | "Bonnie Wright" | "Brad Paisley" | "Brendan Gleeson" | "Brian Cox" | "Bruno Ganz" | "Burt Reynolds" | "Carrie Fisher" | "Charles Dance" | "Chiwetel Ejiofor" | "Chris Pine" | "Christina Hendricks" | "Christina Ricci" | "Cyndi Lauper" | "Dakota Fanning" | "Damian Lewis" | "Dan Aykroyd" | "Daniel Craig" | "David Oyelowo" | "David Tennant" | "Diane Keaton" | "Diane Kruger" | "Dick Van Dyke" | "Domhnall Gleeson" | "Dominic Cooper" | "Donald Sutherland" | "Drew Carey" | "Eartha Kitt" | "Eddie Izzard" | "Edward Asner" | "Eli Roth" | "Elisabeth Moss" | "Ellen Burstyn" | "Emile Hirsch" | "Ezra Miller" | "Felicity Jones" | "Fiona Shaw" | "Florence Henderson" | "Freida Pinto" | "Geena Davis" | "Gemma Arterton" | "Geri Halliwell" | "Glenn Close" | "Gloria Steinem" | "Greta Gerwig" | "Gugu Mbatha-Raw" | "Hans Zimmer" | "Harry Connick Jr." | "Harvey Keitel" | "Helena Bonham Carter" | "Henry Cavill" | "Hilary Swank" | "Hugh Bonneville" | "Idina Menzel" | "Imelda Staunton" | "Ingrid Bergman" | "Irrfan Khan" | "Isla Fisher" | "Iwan Rheon" | "Jack Lemmon" | "Janet Jackson" | "Jason Bateman" | "Jason Segel" | "Jennifer Coolidge" | "Johnny Galecki" | "Jon Favreau" | "Joseph Gordon-Levitt" | "Josh Brolin" | "Josh Gad" | "Josh Groban" | "Julia Louis-Dreyfus" | "Kristen Stewart" | "Kristen Wiig" | "Rooney Mara" | "Caitriona Balfe" | "J.J. Abrams" | "Zoe Saldana" | "SpongeBob SquarePants" | "Patrick Star" | "Squidward Tentacles" | "Homer Simpson" | "Bart Simpson" | "Peter Griffin" | "Stewie Griffin" | "Eric Cartman" | "Rick Sanchez" | "Bugs Bunny" | "Mickey Mouse" | "Donald Duck" | "Shrek" | "Donkey (Shrek)" | "Elsa (Frozen)" | "Woody (Toy Story)" | "Buzz Lightyear" | "Scooby-Doo" | "Shaggy Rogers" | "Bender (Futurama)" | "Optimus Prime" | "Batman (Animated)" | "The Joker (Animated)" | "Darth Vader" | "Yoda" | "Gollum Smeagol" | "Gandalf" | "Winnie the Pooh" | "Kermit the Frog" | "Elmo" | "SpiderMan (Tom Holland ver.)" | "Mario" | "Luigi" | "Sonic the Hedgehog" | "Naruto Uzumaki" | "Goku" | "Vegeta" | "Light Yagami" | "Luffy (One Piece)" | "Edward Elric" | "Eren Jaeger" | "Levi Ackerman" | "Tanjiro Kamado" | "All Might" | "GLaDOS" | "Master Chief" | "Kratos" | "Arthur Morgan" | "Geralt of Rivia" | "Dwayne 'The Rock' Johnson" | "LeBron James" | "Shaquille O'Neal" | "Conor McGregor" | "Mike Tyson" | "Kobe Bryant" | "Floyd Mayweather" | "Cristiano Ronaldo" | "Lionel Messi" | "Serena Williams" | "Tom Brady" | "Stephen Curry" | "John Cena" | "Hulk Hogan" | "Stone Cold Steve Austin" | "The Undertaker" | "Nate Diaz" | "Charles Barkley" | "Shannon Sharpe" | "Drake" | "Rihanna" | "Eminem" | "Snoop Dogg" | "Jay-Z" | "Ed Sheeran" | "Billie Eilish" | "Ariana Grande" | "Adele" | "Post Malone" | "Travis Scott" | "Nicki Minaj" | "Cardi B" | "Doja Cat" | "Bad Bunny" | "Justin Bieber" | "Sabrina Carpenter" | "Chappell Roan" | "Dua Lipa" | "The Weeknd" | "Miley Cyrus" | "Lady Gaga" | "Kendrick Lamar" | "Ozzy Osbourne" | "Freddie Mercury" | "Elvis Presley" | "Bob Marley" | "Frank Sinatra" | "MrBeast" | "PewDiePie" | "Kai Cenat" | "IShowSpeed" | "Markiplier" | "Jacksepticeye" | "KSI" | "Logan Paul" | "Jake Paul" | "Dream (Minecraft)" | "Corpse Husband" | "xQc" | "Pokimane" | "Valkyrae" | "Ninja" | "Joe Scott" | "Linus (LTT)" | "Ryan Reynolds" | "Tom Hanks" | "Robert Downey Jr." | "Will Smith" | "Denzel Washington" | "Leonardo DiCaprio" | "Brad Pitt" | "Keanu Reeves" | "Nicolas Cage" | "Al Pacino" | "Robert De Niro" | "Arnold Schwarzenegger" | "Sylvester Stallone" | "Vin Diesel" | "Jason Statham" | "Tom Cruise" | "Johnny Depp" | "Scarlett Johansson" | "Angelina Jolie" | "Jennifer Aniston" | "Emma Watson" | "Margot Robbie" | "Sydney Sweeney" | "Zendaya" | "Timothee Chalamet" | "Pedro Pascal" | "Oscar Isaac" | "Benedict Cumberbatch" | "Ian McKellen" | "Patrick Stewart" | "Christopher Walken" | "Matthew McConaughey" | "Harrison Ford" | "Mark Wahlberg" | "Owen Wilson" | "Seth Rogen" | "Kevin Hart" | "Adam Sandler" | "Jim Carrey" | "Eddie Murphy" | "Robin Williams" | "Will Ferrell" | "Melissa McCarthy" | "Awkwafina" | "Jason Momoa" | "Idris Elba" | "Tom Hardy" | "Michael B. Jordan" | "Austin Butler" | "Glen Powell" | "Paul Giamatti" | "Bryan Cranston" | "Bob Odenkirk" | "Vladimir Putin" | "Queen Elizabeth II" | "Winston Churchill" | "Martin Luther King Jr." | "Kamala Harris" | "Bernie Sanders" | "Alexandria Ocasio-Cortez" | "Narendra Modi" | "Oprah Winfrey" | "Ellen DeGeneres" | "Dr. Phil" | "Steve Harvey" | "Trevor Noah" | "John Oliver" | "James Corden" | "Ryan Seacrest" | "Howard Stern" | "Conan O'Brien" | "Seth Meyers" | "Bill Nye" | "Neil deGrasse Tyson" | "Guy Fieri" | "Dave Chappelle" | "Chris Rock" | "Jerry Seinfeld" | "Ali Wong" | "John Mulaney" | "Hasan Minhaj" | "Nikki Glaser" | "Matt Rife" | "Gabriel Iglesias" | "Bo Burnham" | "Jeff Bezos" | "Bill Gates" | "Steve Jobs" | "Tim Cook" | "Sam Altman" | "Jensen Huang" | "Gilbert Gottfried" | "James May" | "Jeremy Clarkson" | "Richard Hammond" | "Bob Ross" | "Anthony Bourdain" | "David Goggins" | "Jordan Peterson" | "Joe Pesci" | "Danny DeVito" | "Seth MacFarlane" | "Patrick Warburton" | "Keith David" | "Mark Hamill" | "Liam Neeson" | "Antonio Banderas" | "Sofia Vergara" | "Penelope Cruz" | "Gal Gadot" | "Cate Blanchett" | "Viola Davis" | "Meryl Streep" | "Sandra Bullock" | "Reese Witherspoon" | "Salma Hayek" | "Lupita Nyong'o" | "Florence Pugh" | "Jenna Ortega" | "Ana de Armas" | "Jacob Elordi" | "Barry White" | "Dolly Parton" | "Willie Nelson" | "Lil Wayne" | "50 Cent" | "Ice Cube" | "Tupac Shakur" | "Notorious B.I.G." | "David Bowie" | "Michael Jackson" | "Whitney Houston" | "Amy Winehouse" | "SZA" | "Tyler, The Creator" | "Thanos" | "Tony Stark" | "Captain Jack Sparrow" | "Walter White" | "Tommy Shelby" | "Michael Scott" | "Dwight Schrute" | "Bowser" | "Usain Bolt" | "Tyson Fury" | "Dana White" | "Pat McAfee" | "Giannis Antetokounmpo" | "Lex Fridman" | "Ben Shapiro" | "Tucker Carlson" | "Martha Stewart" | "Gordon Lightfoot" | "Lizzo" | "Megan Thee Stallion" | "Ice Spice" | "21 Savage" | "Metro Boomin" | "Jack Harlow" | "Peso Pluma" | "BTS Jungkook" | "Quentin Tarantino" | "Werner Herzog" | "Anderson Cooper" | "Rachel Maddow" | "Mahatma Gandhi" | "Muhammad Ali" | "Princess Diana" | "Nelson Mandela" | "Steve Irwin" | "Morty Smith" | "Andrew Huberman" | "Willem Dafoe" | "Mike Rowe" | "Terminator" | "Deadpool" | "Plankton" | "Mr. Krabs" | "Picard" | "Ludwig" | "Emma Chamberlain" | "Casey Neistat" | "Marques Brownlee" | "Technoblade" | "Shroud" | "Charli D'Amelio" | "Khaby Lame" | "Adin Ross" | "Trainwreckstv" | "Hasan Piker" | "Joey Diaz" | "Theo Von" | "Andrew Schulz" | "Bert Kreischer" | "Tom Segura" | "Shane Gillis" | "Joe List" | "Bobby Lee" | "Chris Williamson" | "Destiny" | "Ethan Klein" | "Hila Klein" | "Olivia Rodrigo" | "Gracie Abrams" | "Benson Boone" | "Noah Kahan" | "Zach Bryan" | "Morgan Wallen" | "Luke Combs" | "Chris Stapleton" | "Rauw Alejandro" | "Karol G" | "Feid" | "J Balvin" | "Central Cee" | "Dave (rapper)" | "Stormzy" | "Gunna" | "Future" | "Lil Baby" | "Playboi Carti" | "Don Toliver" | "Lana Del Rey" | "Halsey" | "Charli XCX" | "Tate McRae" | "Conan Gray" | "Troye Sivan" | "Harry Styles" | "Niall Horan" | "Shawn Mendes" | "John Legend" | "Sam Smith" | "Roman Reigns" | "Cody Rhodes" | "Seth Rollins" | "CM Punk" | "Randy Orton" | "Triple H" | "Ric Flair" | "Khabib Nurmagomedov" | "Jon Jones" | "Israel Adesanya" | "Alex Pereira" | "Jorge Masvidal" | "Patrick Mahomes" | "Travis Kelce" | "Aaron Rodgers" | "Kyrie Irving" | "Kevin Durant" | "Luka Doncic" | "Nikola Jokic" | "Simone Biles" | "Novak Djokovic" | "Rafael Nadal" | "Roger Federer" | "Max Verstappen" | "Lewis Hamilton" | "Mark Rober" | "Naval Ravikant" | "Peter Attia" | "Gary Vaynerchuk" | "Alex Hormozi" | "Grant Cardone" | "JD Vance" | "Nancy Pelosi" | "Ron DeSantis" | "Volodymyr Zelenskyy" | "Xi Jinping" | "Justin Trudeau" | "Emmanuel Macron" | "Boris Johnson" | "Rishi Sunak" | "Keir Starmer" | "Tom Holland" | "Anya Taylor-Joy" | "Barry Keoghan" | "Paul Mescal" | "Rachel Zegler" | "Millie Bobby Brown" | "Finn Wolfhard" | "Noah Schnapp" | "Ke Huy Quan" | "Ayo Edebiri" | "Jeremy Allen White" | "Cloud Strife" | "Sephiroth" | "Solid Snake" | "Nathan Drake" | "Joel Miller" | "Ellie Williams" | "Duke Nukem" | "Lara Croft" | "Link (Zelda)" | "Samus Aran" | "Kirby" | "Pikachu" | "Ash Ketchum" | "Agent 47" | "Vergil (DMC)" | "Dante (DMC)" | "Ryu (Street Fighter)" | "Chun-Li" | "Scorpion (Mortal Kombat)" | "Sub-Zero" | "Steve (Minecraft)" | "Herobrine" | "Cortana" | "Aloy" | "Ezio Auditore" | "Altair" | "BJ Blazkowicz" | "Doom Slayer" | "Handsome Jack" | "Tracer (Overwatch)" | "Genji (Overwatch)" | "Reaper (Overwatch)" | "Jinx (Arcane)" | "Vi (Arcane)" | "Nezuko Kamado" | "Zenitsu Agatsuma" | "Gojo Satoru" | "Itadori Yuji" | "Denji (Chainsaw Man)" | "Power (Chainsaw Man)" | "Zoro (One Piece)" | "Nami (One Piece)" | "Sasuke Uchiha" | "Kakashi Hatake" | "Itachi Uchiha" | "Spike Spiegel" | "L (Death Note)" | "Saitama (One Punch Man)" | "Deku (My Hero Academia)" | "Bakugo Katsuki" | "Captain America (MCU)" | "Thor (MCU)" | "Loki (MCU)" | "Wolverine" | "Groot" | "Rocket Raccoon" | "Venom" | "The Mandalorian" | "Baby Yoda (Grogu)" | "Tony Montana (Scarface)" | "John Wick" | "James Bond (Craig era)" | "Ferris Bueller" | "Tyler Durden" | "The Dude (Big Lebowski)" | "Forrest Gump" | "Willy Wonka" | "Freddy Krueger" | "Jason Voorhees" | "Michael Myers" | "Pennywise" | "Hannibal Lecter" | "Family Guy Quagmire" | "Lois Griffin" | "Marge Simpson" | "Lisa Simpson" | "Ned Flanders" | "Krusty the Clown" | "Mr. Burns" | "Timmy Turner" | "Dexter (Dexter's Lab)" | "Johnny Bravo" | "Courage the Cowardly Dog" | "Finn the Human" | "Jake the Dog" | "Rick Grimes" | "Negan (Walking Dead)" | "Jesse Pinkman" | "Saul Goodman" | "Tony Soprano" | "Jim Halpert" | "Ron Swanson" | "Barney Stinson" | "Sheldon Cooper" | "Jon Snow" | "Tyrion Lannister" | "Daenerys Targaryen" | "Arya Stark" | "Homelander" | "Billy Butcher" | "Airrack" | "Zach King" | "Dude Perfect Tyler" | "Colleen Ballinger" | "David Dobrik" | "James Charles" | "NikkieTutorials" | "Jeffree Star" | "Danny Duncan" | "FaZe Rug" | "SSSniperWolf" | "Vegetta777" | "Rubius" | "Ibai Llanos" | "Fuerza Regida" | "Grupo Frontera" | "Bizarrap" | "Anitta" | "Rosalia" | "Maluma" | "Ozuna" | "Manuel Turizo" | "Camilo" | "Sam Fender" | "Hozier" | "Fred again" | "GloRilla" | "Sexyy Red" | "Flo Milli" | "Latto" | "Coi Leray" | "Ja Morant" | "Anthony Edwards" | "Victor Wembanyama" | "Caitlin Clark" | "Angel Reese" | "Sha'Carri Richardson" | "Erling Haaland" | "Kylian Mbappe" | "Jude Bellingham" | "Neymar" | "Vinicius Junior" | "Shohei Ohtani" | "Connor McDavid" | "Sidney Crosby" | "Steven Crowder" | "Candace Owens" | "Charlie Kirk" | "Matt Walsh" | "Tim Dillon" | "Whitney Cummings" | "Sam Harris" | "Malcolm Gladwell" | "Simon Sinek" | "Mel Robbins" | "Jocko Willink" | "Emma Stone" | "Ryan Gosling" | "Bradley Cooper" | "Christian Bale" | "Joaquin Phoenix" | "Mahershala Ali" | "Jamie Foxx" | "Regina King" | "Taraji P. Henson" | "Octavia Spencer" | "John Boyega" | "Daisy Ridley" | "Jonathan Majors" | "Simu Liu" | "Constance Wu" | "Henry Golding" | "Dev Patel" | "Riz Ahmed" | "Mindy Kaling" | "Aubrey Plaza" | "Aziz Ansari" | "Randall Park" | "Rainbow Dash" | "Twilight Sparkle" | "Gumball Watterson" | "Rigby (Regular Show)" | "Mordecai (Regular Show)" | "Steven Universe" | "Garnet (Steven Universe)" | "Aang (Avatar)" | "Zuko (Avatar)" | "Aretha Franklin" | "Stevie Wonder" | "Ray Charles" | "Johnny Cash" | "Jimi Hendrix" | "Janis Joplin" | "Kurt Cobain" | "Freddie Prinze" | "Selena Gomez" | "Justin Timberlake" | "Usher" | "Chris Brown" | "A$AP Rocky" | "RM (BTS)" | "V (BTS)" | "Jimin" | "Lisa (Blackpink)" | "Jennie (Blackpink)" | "Rose (Blackpink)" | "Calvin Harris" | "David Guetta" | "Marshmello" | "Skrillex" | "Diplo" | "Zedd" | "Jimmy Kimmel" | "Graham Norton" | "Bill Maher" | "Sean Hannity" | "Wolf Blitzer" | "Lester Holt" | "Satya Nadella" | "Sundar Pichai" | "Warren Buffett" | "Sheryl Sandberg" | "Marc Andreessen" | "Peter Thiel" | "Stephen Hawking" | "Carl Sagan" | "Richard Feynman" | "Jane Goodall" | "Franklin D. Roosevelt" | "Ronald Reagan" | "Margaret Thatcher" | "King Charles III" | "Prince Harry" | "Prince William" | "Stephen King" | "J.K. Rowling" | "George R.R. Martin" | "Neil Gaiman" | "Malcolm X" | "Jamie Oliver" | "Tiger Woods" | "Venus Williams" | "David Beckham" | "Michael Phelps" | "Peyton Manning" | "Virat Kohli" | "Sachin Tendulkar" | "MS Dhoni" | "The Rock" | "Rey Mysterio" | "Bray Wyatt" | "Kevin Owens" | "H3H3" | "Philip DeFranco" | "Jenna Marbles" | "Shane Dawson" | "Liza Koshy" | "Lilly Singh" | "Rhett and Link" | "Danny Gonzalez" | "Drew Gooden" | "Cody Ko" | "Kurtis Conner" | "Trisha Paytas" | "Tana Mongeau" | "Jaclyn Hill" | "Bretman Rock" | "Safiya Nygaard" | "Shah Rukh Khan" | "Salman Khan" | "Priyanka Chopra" | "Deepika Padukone" | "Jennifer Lawrence" | "Chris Evans" | "Daniel Radcliffe" | "Rupert Grint" | "Anthony Hopkins" | "Jack Nicholson" | "Clint Eastwood" | "Obi-Wan Kenobi" | "Luke Skywalker" | "Han Solo" | "Princess Leia" | "Emperor Palpatine" | "Kylo Ren" | "C-3PO" | "Frodo Baggins" | "Aragorn" | "Legolas" | "Samwise Gamgee" | "Harry Potter" | "Hermione Granger" | "Ron Weasley" | "Albus Dumbledore" | "Severus Snape" | "Voldemort" | "Hagrid" | "Belle (Beauty and the Beast)" | "Ariel (Little Mermaid)" | "Cinderella" | "Snow White" | "Mulan" | "Rapunzel (Tangled)" | "Fiona (Shrek)" | "Ross Geller" | "Chandler Bing" | "Joey Tribbiani" | "Monica Geller" | "Rachel Green" | "Phoebe Buffay" | "George Costanza" | "Kramer (Seinfeld)" | "Elaine Benes" | "Carlton Banks" | "Hinata Hyuga" | "Ichigo Kurosaki" | "Yoshi" | "Spyro" | "Ryu Hayabusa" | "Leon Kennedy" | "Chris Redfield" | "Jill Valentine" | "Ada Wong" | "Big Boss (MGS)" | "Raiden (MGS)" | "Commander Shepard" | "Garrus Vakarian" | "V (Cyberpunk)" | "Johnny Silverhand" | "Valorant Jett" | "League of Legends Ahri" | "Yasuo (LoL)" | "Superman" | "Wonder Woman" | "Harley Quinn" | "Black Panther" | "Doctor Strange" | "Hulk" | "Black Widow" | "Nick Fury" | "Ant-Man" | "Don Draper" | "Walter Bishop (Fringe)" | "Frank Underwood" | "Dexter Morgan" | "Sherlock Holmes" | "Dr. House" | "Michael Corleone" | "Vito Corleone" | "Daffy Duck" | "Porky Pig" | "Tweety Bird" | "Sylvester the Cat" | "Fred Flintstone" | "Barney Rubble" | "George Jetson" | "Popeye" | "Skip Bayless" | "Stephen A Smith" | "Colin Cowherd" | "Ricky Gervais" | "Bill Burr" | "Sebastian Maniscalco" | "Trevor Wallace" | "Iliza Shlesinger" | "Bruce Springsteen" | "Eric Clapton" | "Mick Jagger" | "Paul McCartney" | "John Lennon" | "Elton John" | "Billy Joel" | "Fleetwood Mac Stevie Nicks" | "Sia" | "Demi Lovato" | "Camila Cabello" | "Enrique Iglesias" | "Ricky Martin" | "Faze Clan Banks" | "Tfue" | "Timthetatman" | "DrLupo" | "CouRage" | "Sykkuno" | "Disguised Toast" | "Fuslie" | "Jerma985" | "Vinesauce Vinny" | "Northernlion" | "Moistcr1tikal" | "Asmongold" | "Mizkif" | "Esfand" | "Quin69" | "Summit1g" | "Sodapoppin" | "Forsen" | "Pestily" | "Joe Budden" | "Charlamagne Tha God" | "Angela Yee" | "Big Boy" | "Zane Lowe" | "Rich Eisen" | "Bill Simmons" | "Dan Le Batard" | "Slash (musician)" | "James Hetfield" | "Dave Grohl" | "Chris Cornell" | "Axl Rose" | "Robert Plant" | "Jon Bon Jovi" | "Chester Bennington" | "Corey Taylor" | "Fernando Alonso" | "Charles Leclerc" | "Daniel Ricciardo" | "Valentino Rossi" | "Marc Marquez" | "Travis Pastrana" | "Tony Hawk" | "Rohit Sharma" | "Babar Azam" | "Ben Stokes" | "Joe Root" | "Anthony Joshua" | "Canelo Alvarez" | "Ronda Rousey" | "Amanda Nunes" | "Bruce Willis" | "Chris Pratt" | "Charlize Theron" | "Nicole Kidman" | "Amy Adams" | "Jamie Lee Curtis" | "Gary Oldman" | "Mark Ruffalo" | "Jeremy Renner" | "Chris Tucker" | "Jonah Hill" | "Ranveer Singh" | "Alia Bhatt" | "Hrithik Roshan" | "Lee Min Ho" | "Song Joong Ki" | "Park Seo Joon" | "Kylie Jenner" | "Khloe Kardashian" | "Paris Hilton" | "Neil Armstrong" | "Buzz Aldrin" | "Yuri Gagarin" | "Killua Zoldyck" | "Gon Freecss" | "Meliodas" | "Natsu Dragneel" | "Lucy Heartfilia" | "Erza Scarlet" | "Inuyasha" | "Kagome Higurashi" | "Yusuke Urameshi" | "Vash the Stampede" | "Alucard (Hellsing)" | "Guts (Berserk)" | "Griffith (Berserk)" | "Reigen Arataka" | "Mob (Mob Psycho 100)" | "Anya Forger" | "Loid Forger" | "Yor Forger" | "Pit (Kid Icarus)" | "Marth (Fire Emblem)" | "Ike (Fire Emblem)" | "Sora (Kingdom Hearts)" | "Riku (Kingdom Hearts)" | "Sam Porter Bridges" | "Big Smoke (GTA)" | "CJ (GTA San Andreas)" | "Niko Bellic" | "Trevor Philips" | "Michael De Santa" | "Franklin Clinton" | "Marcus Fenix" | "Isaac Clarke" | "Ellie (Borderlands)" | "Lilith (Borderlands)" | "Claptrap" | "Widowmaker (Overwatch)" | "Mercy (Overwatch)" | "Reinhardt (Overwatch)" | "Phineas Flynn" | "Doofenshmirtz" | "Blossom (PPG)" | "Bubbles (PPG)" | "Buttercup (PPG)" | "Mojo Jojo" | "Ben Tennyson" | "Danny Phantom" | "Invader Zim" | "GIR (Invader Zim)" | "Sandy Cheeks" | "Ellen Ripley" | "Sarah Connor" | "Indiana Jones" | "Austin Powers" | "Inspector Clouseau" | "Gru (Despicable Me)" | "Alvin (Chipmunks)" | "Megatron" | "Chucky" | "Ghostface (Scream)" | "The Grinch" | "Jack Skellington" | "Jayson Tatum" | "Devin Booker" | "Damian Lillard" | "James Harden" | "Russell Westbrook" | "Joel Embiid" | "Justin Jefferson" | "Josh Allen" | "Joe Burrow" | "Micah Parsons" | "Myles Garrett" | "CeeDee Lamb" | "Burna Boy" | "Wizkid" | "Davido" | "Tems" | "Magnus Carlsen" | "Hikaru Nakamura" | "MrBallen" | "Ned Fulmer" | "Zach Kornfeld" | "Eugene Lee Yang" | "Alton Brown" | "Andrew Rea" | "Steve-O" | "Johnny Knoxville" | "Bam Margera" | "Russell Brand" | "Piers Morgan" | "Douglas Murray" | "Dave Rubin" | "Michael Knowles" | "Vivek Ramaswamy" | "Marjorie Taylor Greene" | "Mitch McConnell" | "Mike Pence" | "Hillary Clinton" | "Bill Clinton" | "George W Bush" | "George H W Bush" | "Jimmy Carter" | "Angela Merkel" | "Tara Strong" | "Tom Kenny" | "Nolan North" | "Troy Baker" | "Jennifer Hale" | "Steve Blum" | "Cersei Lannister" | "Jaime Lannister" | "Sansa Stark" | "Bran Stark" | "The Hound" | "Melisandre" | "Varys" | "Petyr Baelish" | "Ned Stark" | "Gus Fring" | "Mike Ehrmantraut" | "Hank Schrader" | "Skyler White" | "Joy (Inside Out)" | "Sadness (Inside Out)" | "Anger (Inside Out)" | "Mirabel (Encanto)" | "Bruno (Encanto)" | "Remy (Ratatouille)" | "Lightning McQueen" | "Mater (Cars)" | "Wreck-It Ralph" | "Vanellope von Schweetz" | "PointCrow" | "Ranboo" | "Wilbur Soot" | "Tubbo" | "GeorgeNotFound" | "Sapnap" | "Quackity" | "Karl Jacobs" | "Norman Bates" | "Anton Chigurh" | "Patrick Bateman" | "Travis Bickle" | "Rocky Balboa" | "Rambo" | "Maximus (Gladiator)" | "William Wallace" | "King Leonidas" | "Leslie Knope" | "Tom Haverford" | "April Ludgate" | "Andy Dwyer" | "Kevin Malone" | "Creed Bratton" | "Stanley Hudson" | "Toby Flenderson" | "Angela Martin" | "Summer Smith" | "Beth Smith" | "Jerry Smith" | "BoJack Horseman" | "Todd Chavez" | "Princess Carolyn" | "Diane Nguyen" | "Big Mouth Nick" | "Maury (Big Mouth)" | "Archer (Sterling)" | "Lana Kane" | "Malory Archer" | "Fry (Futurama)" | "Leela (Futurama)" | "Professor Farnsworth" | "Zapp Brannigan" | "Beavis" | "Butt-Head" | "King of the Hill Hank Hill" | "Bobby Hill" | "Dale Gribble" | "Stan Marsh" | "Kyle Broflovski" | "Randy Marsh" | "Towelie" | "Butters Stotch" | "Mr. Garrison" | "Chef (South Park)" | "Ike Broflovski" | "Wendy Testaburger" | "PC Principal" | "Jimmy Valmer" | "Michelle Obama" | "Al Gore" | "Desmond Tutu" | "Anthony Fauci" | "Greta Thunberg" | "Malala Yousafzai" | "Grimes" | "Jafar (Aladdin)" | "Ursula (Little Mermaid)" | "Iago (Aladdin parrot)" | "Zazu (Lion King)" | "Yzma (Emperor's New Groove)" | "Kronk (Emperor's New Groove)" | "Discord (My Little Pony)" | "Skeletor (He-Man)" | "Captain Hook (Peter Pan)" | "Sebastian (Little Mermaid)" | "HAL 9000" | "Mushu (Mulan)" | "Lumiere (Beauty and the Beast)" | "Cogsworth (Beauty and the Beast)" | "Scuttle (Little Mermaid)" | "Rafiki (Lion King)" | "Kristoff (Frozen)" | "Hans (Frozen)" | "Merlin (Sword in the Stone)";
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the audio. Use it with the [Get audio Project API](https://docs.magichour.ai/api-reference/audio-projects/get-audio-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the audio. We charge credits right when the request is made.
         *
         * If an error occurred while generating the audio, credits will be refunded and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** Animation. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_animation": {
      input: {
        /** Give your video a custom name for easy identification. */
        name?: string;
        /**
         * The desire output video frame rate
         * @minimum 1
         */
        fps: number;
        /**
         * This value determines the duration of the output video.
         * @minimum 0.1
         */
        end_seconds: number;
        /**
         * The height of the final output video. The maximum height depends on your subscription. Please refer to our [pricing page](https://magichour.ai/pricing) for more details
         * @minimum 64
         */
        height: number;
        /**
         * The width of the final output video. The maximum width depends on your subscription. Please refer to our [pricing page](https://magichour.ai/pricing) for more details
         * @minimum 64
         */
        width: number;
        /** Defines the style of the output video */
        style: {
          /** The art style used to create the output video */
          art_style: "Custom" | "Painterly Illustration" | "Vibrant Matte Illustration" | "Traditional Watercolor" | "Cyberpunk" | "Ink and Watercolor Portrait" | "Intricate Abstract Lines Portrait" | "3D Render" | "Old School Comic" | "Bold Colored Illustration" | "Synthwave" | "Minimal Cold Futurism" | "Futuristic Anime" | "Cinematic Miyazaki" | "Studio Ghibli Film Still" | "Soft Delicate Matte Portrait" | "Cinematic Landscape" | "Landscape Painting" | "Photograph" | "Jackson Pollock" | "Cubist" | "Abstract Minimalist" | "Impressionism" | "Van Gogh" | "Woodcut" | "Oil Painting" | "Vintage Japanese Anime" | "Pixar" | "Cosmic" | "Pixel Art" | "Fantasy" | "Arcane" | "Sin City" | "Double Exposure" | "Painted Cityscape" | "90s Streets" | "Overgrown" | "Postapocalyptic" | "Spooky" | "Miniatures" | "Low Poly" | "Art Deco" | "Inkpunk" | "Dark Graphic Illustration" | "Dark Watercolor" | "Faded Illustration" | "Directed by AI";
          /** Describe custom art style. This field is required if `art_style` is `Custom` */
          art_style_custom?: string;
          /** The camera effect used to create the output video */
          camera_effect: "Simple Zoom Out" | "Simple Zoom In" | "Bounce Out" | "Spin Bounce" | "Rolling Bounces" | "Rise and Climb" | "Dramatic Zoom In" | "Dramatic Zoom Out" | "Sway Out" | "Boost Zoom In" | "Boost Zoom Out" | "Heartbeat" | "Bounce in Place" | "Earthquake Bounce" | "Slice Bounce" | "Bounce In And Out" | "Jump" | "Road Trip" | "Traverse" | "Rubber Band" | "Rodeo" | "Accelerate" | "Speed of Light" | "Drift Spin" | "Vertigo" | "Cog in the Machine" | "Quadrant" | "Tron" | "Pusher" | "Roll In" | "Hesitate In" | "Zoom In - Audio Sync" | "Pulse - Audio Sync" | "Aggressive Zoom In - Audio Sync" | "Roll In - Audio Sync" | "Zoom Out - Audio Sync" | "Aggressive Zoom Out - Audio Sync" | "Sway Out - Audio Sync" | "Bounce and Spin - Audio Sync" | "Zoom In and Spin - Audio Sync" | "Vertigo - Audio Sync" | "Bounce Out - Audio Sync" | "Earthquake Bounce - Audio Sync" | "Pusher - Audio Sync" | "Evolve - Audio Sync" | "Devolve - Audio Sync" | "Slideshow" | "Pan Left" | "Pan Right" | "Tilt Up" | "Tilt Down" | "Directed by AI";
          /**
           *
           * * `custom` - Use your own prompt for the video.
           * * `use_lyrics` - Use the lyrics of the audio to create the prompt. If this option is selected, then `assets.audio_source` must be `file` or `youtube`.
           * * `ai_choose` - Let AI write the prompt. If this option is selected, then `assets.audio_source` must be `file` or `youtube`.
           */
          prompt_type: "custom" | "use_lyrics" | "ai_choose";
          /** The prompt used for the video. Prompt is required if `prompt_type` is `custom`. Otherwise this value is ignored */
          prompt?: string;
          /**
           * Change determines how quickly the video's content changes across frames.
           * * Higher = more rapid transitions.
           * * Lower = more stable visual experience.
           * @minimum 1
           * @maximum 10
           */
          transition_speed: number;
          [key: string]: unknown;
        };
        /** Provide the assets for animation. */
        assets: {
          /** Optionally add an audio source if you'd like to incorporate audio into your video */
          audio_source: "none" | "file" | "youtube";
          /**
           * The path of the input audio. This field is required if `audio_source` is `file`. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          audio_file_path?: string;
          /**
           * Using a youtube video as the input source. This field is required if `audio_source` is `youtube`
           * @minLength 1
           * @format uri
           */
          youtube_url?: string;
          /**
           * An initial image to use a the first frame of the video. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          image_file_path?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
         *
         * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** Audio-to-Video. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_audio_to_video": {
      input: {
        /** Give your video a custom name for easy identification. */
        name?: string;
        /**
         * Start time of your clip (seconds). Must be ≥ 0.
         * @minimum 0
         */
        start_seconds?: number;
        /**
         * End time of your clip (seconds). Must be greater than start_seconds.
         * @minimum 0.1
         */
        end_seconds: number;
        /** Output video resolution. Defaults to `720p` on paid tiers and `480p` on free tiers. */
        resolution?: "480p" | "720p" | "1080p";
        /** Provide the audio file and an optional reference image. */
        assets: {
          /**
           * The path of the audio file. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          audio_file_path: string;
          /**
           * Reference image for the initial frame of the video. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          image_file_path?: string;
          [key: string]: unknown;
        };
        /** Attributes used to dictate the style of the output */
        style?: {
          /** Prompt to guide the visual style of the video. */
          prompt?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
         *
         * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** Auto Subtitle Generator. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_auto_subtitle_generator": {
      input: {
        /** Give your video a custom name for easy identification. */
        name?: string;
        /**
         * Start time of your clip (seconds). Must be ≥ 0.
         * @minimum 0
         */
        start_seconds: number;
        /**
         * End time of your clip (seconds). Must be greater than start_seconds.
         * @minimum 0.1
         */
        end_seconds: number;
        /** Provide the assets for auto subtitle generator */
        assets: {
          /**
           * This is the video used to add subtitles. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          video_file_path: string;
          [key: string]: unknown;
        };
        /**
         * Style of the subtitle. At least one of `.style.template` or `.style.custom_config` must be provided.
         * * If only `.style.template` is provided, default values for the template will be used.
         * * If both are provided, the fields in `.style.custom_config` will be used to overwrite the fields in `.style.template`.
         * * If only `.style.custom_config` is provided, then all fields in `.style.custom_config` will be used.
         *
         * To use custom config only, the following `custom_config` params are required:
         * * `.style.custom_config.font`
         * * `.style.custom_config.text_color`
         * * `.style.custom_config.vertical_position`
         * * `.style.custom_config.horizontal_position`
         *
         */
        style: {
          /** Preset subtitle templates. Please visit https://magichour.ai/create/auto-subtitle-generator to see the style of the existing templates. */
          template?: "karaoke" | "cinematic" | "minimalist" | "highlight";
          /** Custom subtitle configuration. */
          custom_config?: {
            /**
             * Font name from Google Fonts. Not all fonts support all languages or character sets.
             * We recommend verifying language support and appearance directly on https://fonts.google.com before use.
             */
            font?: string;
            /** Font size in pixels. If not provided, the font size is automatically calculated based on the video resolution. */
            font_size?: number;
            /** Font style (e.g., normal, italic, bold) */
            font_style?: string;
            /** Primary text color in hex format */
            text_color?: string;
            /** Color used to highlight the current spoken text */
            highlighted_text_color?: string;
            /** Stroke (outline) color of the text */
            stroke_color?: string;
            /** Width of the text stroke in pixels. If `stroke_color` is provided, but `stroke_width` is not, the `stroke_width` will be calculated automatically based on the font size. */
            stroke_width?: number;
            /** Vertical alignment of the text (e.g., top, center, bottom) */
            vertical_position?: string;
            /** Horizontal alignment of the text (e.g., left, center, right) */
            horizontal_position?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
         *
         * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** Body Swap. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_body_swap": {
      input: {
        /** Give your image a custom name for easy identification. */
        name?: string;
        /** Output resolution. Determines credits charged for the run. */
        resolution: "640px" | "1k" | "2k" | "4k";
        /** Person image and scene image for body swap */
        assets: {
          /**
           * Image of the person to place into the scene. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          person_file_path: string;
          /**
           * Original scene image (background). This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          scene_file_path: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
         *
         * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** Character Replace. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_character_replace": {
      input: {
        /** Give your video a custom name for easy identification. */
        name?: string;
        /**
         * Start time of your clip (seconds). Must be ≥ 0.
         * @minimum 0
         */
        start_seconds?: number;
        /**
         * End time of your clip (seconds). Must be greater than start_seconds.
         * @minimum 0.1
         */
        end_seconds: number;
        /**
         * Model to use. Defaults to `wan-animate`.
         *
         * * **`wan-animate`**: 480p, 720p. Supports `points` subject selection.
         * * **`kling-3.0`**: 720p, 1080p. Clips of 3–10 seconds in `replace` mode or 3–30 seconds in `animate` mode. Picks the main person automatically, so `points` are rejected.
         */
        model?: "wan-animate" | "kling-3.0";
        /** Output video resolution. Must be supported by `model`. Defaults to the lowest resolution available on your plan for that model. */
        resolution?: "480p" | "720p" | "1080p";
        /** Source video and reference character image for the job. */
        assets: {
          /**
           * Source video containing the subject to replace or animate. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          video_file_path: string;
          /**
           * Reference character image used as the replacement or animation target. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          image_file_path: string;
          [key: string]: unknown;
        };
        /** Optional style controls for replace vs animate mode and subject selection. */
        style?: {
          /** Processing mode. `replace` swaps the detected subject with your reference character. `animate` transfers motion from the video onto your character image. */
          mode?: "replace" | "animate";
          /** How to locate the subject in the source video. `auto` detects a person automatically. `point` uses your `points` to mark the subject and is supported by `wan-animate`. Defaults to `auto`. */
          selection_mode?: "auto" | "point";
          /** On-frame markers for manual subject selection. Required when `selection_mode` is `point`. Ignored when `selection_mode` is `auto` or omitted. Rejected for models without subject selection (supported by `wan-animate`). */
          points?: Array<{
            /**
             * Horizontal pixel coordinate in the source video frame at `time_seconds`, measured from the left edge.
             * @minimum 0
             */
            position_x: number;
            /**
             * Vertical pixel coordinate in the source video frame at `time_seconds`, measured from the top edge.
             * @minimum 0
             */
            position_y: number;
            /**
             * Timestamp on the source video timeline in seconds. Uses the same clock as `start_seconds` and `end_seconds`.
             * @minimum 0
             */
            time_seconds: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
         *
         * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** Face Detection. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_face_detection": {
      input: {
        /**
         * Confidence threshold for filtering detected faces.
         * * Higher values (e.g., 0.9) include only faces detected with high certainty, reducing false positives.
         * * Lower values (e.g., 0.3) include more faces, but may increase the chance of incorrect detections.
         * @minimum 0
         * @maximum 1
         */
        confidence_score?: 0 | 0.05 | 0.1 | 0.15 | 0.2 | 0.25 | 0.3 | 0.35 | 0.4 | 0.45 | 0.5 | 0.55 | 0.6 | 0.65 | 0.7 | 0.75 | 0.8 | 0.85 | 0.9 | 0.95 | 1;
        /** Provide the assets for face detection */
        assets: {
          /**
           * This is the image or video where the face will be detected. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           */
          target_file_path: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** The id of the task. Use this value in the [get face detection details API](https://docs.magichour.ai/api-reference/files/get-face-detection-details) to get the details of the face detection task. */
        id: string;
        /** The credits charged for the task. */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** Face Swap Video. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_face_swap": {
      input: {
        /** Give your video a custom name for easy identification. */
        name?: string;
        /**
         * Start time of your clip (seconds). Must be ≥ 0.
         * @minimum 0
         */
        start_seconds: number;
        /**
         * End time of your clip (seconds). Must be greater than start_seconds.
         * @minimum 0.1
         */
        end_seconds: number;
        /** Style of the face swap video. */
        style?: {
          /**
           * * `v1` - May preserve skin detail and texture better, but weaker identity preservation.
           * * `v2` - Faster, sharper, better handling of hair and glasses. stronger identity preservation.
           * * `default` - Use the version we recommend, which will change over time. This is recommended unless you need a specific earlier version. This is the default behavior.
           */
          version?: "v1" | "v2" | "default";
          [key: string]: unknown;
        };
        /** Provide the assets for face swap. For video, The `video_source` field determines whether `video_file_path` or `youtube_url` field is used */
        assets: {
          /**
           * Choose how to swap faces:
           * - **all-faces** (recommended) — swap all detected faces using one source image (`source_file_path` required)
           * - **individual-faces** — specify exact mappings using `face_mappings`
           */
          face_swap_mode?: "all-faces" | "individual-faces";
          /**
           * The path of the input image with the face to be swapped.  The value is required if `face_swap_mode` is `all-faces`.
           *
           * This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           */
          image_file_path?: string;
          /**
           * This is the array of face mappings used for multiple face swap. The value is required if `face_swap_mode` is `individual-faces`.
           * @maxItems 5
           */
          face_mappings?: Array<{
            /**
             * The face detected from the image in `target_file_path`. The file name is in the format of `<face_frame>-<face_index>.png`. This value is corresponds to the response in the [face detection API](https://docs.magichour.ai/api-reference/files/get-face-detection-details).
             *
             * * The face_frame is the frame number of the face in the target image. For images, the frame number is always 0.
             * * The face_index is the index of the face in the target image, starting from 0 going left to right.
             */
            original_face: string;
            /**
             * The face image that will be used to replace the face in the `original_face`. This value is either
             * - a direct URL to the video file
             * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
             *
             * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
             *
             */
            new_face: string;
            [key: string]: unknown;
          }>;
          /** Choose your video source. */
          video_source: "file" | "youtube";
          /**
           * Your video file. Required if `video_source` is `file`. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           */
          video_file_path?: string;
          /**
           * YouTube URL (required if `video_source` is `youtube`).
           * @format uri
           */
          youtube_url?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
         *
         * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** Face Swap Photo. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_face_swap_photo": {
      input: {
        /** Give your image a custom name for easy identification. */
        name?: string;
        /** Provide the assets for face swap photo */
        assets: {
          /**
           * Choose how to swap faces:
           * - **all-faces** (recommended) — swap all detected faces using one source image (`source_file_path` required)
           * - **individual-faces** — specify exact mappings using `face_mappings`
           */
          face_swap_mode?: "all-faces" | "individual-faces";
          /**
           * This is the image from which the face is extracted. The value is required if `face_swap_mode` is `all-faces`.
           *
           * This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          source_file_path?: string;
          /**
           * This is the array of face mappings used for multiple face swap. The value is required if `face_swap_mode` is `individual-faces`.
           * @maxItems 5
           */
          face_mappings?: Array<{
            /**
             * The face detected from the image in `target_file_path`. The file name is in the format of `<face_frame>-<face_index>.png`. This value is corresponds to the response in the [face detection API](https://docs.magichour.ai/api-reference/files/get-face-detection-details).
             *
             * * The face_frame is the frame number of the face in the target image. For images, the frame number is always 0.
             * * The face_index is the index of the face in the target image, starting from 0 going left to right.
             */
            original_face: string;
            /**
             * The face image that will be used to replace the face in the `original_face`. This value is either
             * - a direct URL to the video file
             * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
             *
             * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
             *
             */
            new_face: string;
            [key: string]: unknown;
          }>;
          /**
           * This is the image where the face from the source image will be placed. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          target_file_path: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
         *
         * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** Head Swap. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_head_swap": {
      input: {
        /** Give your image a custom name for easy identification. */
        name?: string;
        /** Constrains the larger dimension (height or width) of the output. Omit to use the maximum allowed for your plan (capped at 2048px). Values above your plan maximum are clamped down to your plan's maximum. */
        max_resolution?: number;
        /** Provide the body and head images for head swap */
        assets: {
          /**
           * Image that receives the swapped head. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          body_file_path: string;
          /**
           * Image of the head to place on the body. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          head_file_path: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
         *
         * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** Image Background Remover. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_image_background_remover": {
      input: {
        /** Give your image a custom name for easy identification. */
        name?: string;
        /** Provide the assets for background removal */
        assets: {
          /**
           * The image to remove the background. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           */
          image_file_path: string;
          /**
           * The image used as the new background for the image_file_path. This image will be resized to match the image in image_file_path. Please make sure the resolution between the images are similar.
           *
           * This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           */
          background_image_file_path?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
         *
         * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** Image-to-Video. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_image_to_video": {
      input: {
        /** Give your video a custom name for easy identification. */
        name?: string;
        /**
         * The total duration of the output video in seconds. Supported durations depend on the chosen model:
         *
         * * **`gemini-omni-1.1`**: any integer from 3 to 10
         * * **`kling-2.6`**: 5, 10
         * * **`kling-3.0`**: any integer from 3 to 15
         * * **`ltx-2.5`**: any integer from 1 to 60
         * * **`minimax-h3`**: any integer from 1 to 30
         * * **`seedance-1.5`**: any integer from 4 to 12
         * * **`seedance-2.0`**: any integer from 4 to 15
         * * **`seedance-2.0-fast`**: any integer from 4 to 15
         * * **`seedance-2.0-mini`**: any integer from 4 to 15
         * * **`seedance-2.5`**: any integer from 4 to 30
         * * **`veo3.1`**: 4, 6, 8, 16, 24, 32, 40, 48, 56
         * * **`veo3.1-lite`**: 4, 6, 8, 16, 24, 32, 40, 48, 56
         * * **`wan-2.2`**: 3, 4, 5, 6, 7, 8, 9, 10, 15
         * * **`wan-3.0`**: 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30
         *
         * @minimum 1
         * @maximum 60
         */
        end_seconds: number;
        /**
         * The AI model to use for video generation.
         *
         * * `default`: uses our currently recommended model for general use. For paid tiers, defaults to `kling-3.0`. For free tiers, it defaults to `ltx-2.5`.
         * * `gemini-omni-1.1`: Best for precise short clips, first/last frames, and high-resolution output.
         * * `kling-2.6`: Best for action, motion blur, and controlled camera moves.
         * * `kling-3.0`: Best for cinematic stories, references, and optional audio.
         * * `ltx-2.5`: Fastest for general scenes, long clips, audio, and rapid iteration.
         * * `minimax-h3`: Great for reference-driven clips with native audio and longer durations.
         * * `seedance-1.5`: Best for smooth, consistent motion with an end frame.
         * * `seedance-2.0`: Best for reference-led clips with precise subject control.
         * * `seedance-2.0-fast`: Fast reference-led clips with consistent motion and audio.
         * * `seedance-2.0-mini`: Faster reference-led clips with consistent motion and audio.
         * * `seedance-2.5`: Best for premium realism, detail, and natural motion.
         * * `veo3.1`: Best for romantic interactions and expressive action, with realistic detail.
         * * `veo3.1-lite`: Balanced realism and audio at a lower cost than Veo 3.1.
         * * `wan-2.2`: Best for physical motion, action, and camera movement.
         * * `wan-3.0`: High-quality video with native audio, long clips, and end-frame control.
         *
         * If you specify the deprecated model value that includes the `-audio` suffix, this will be the same as included `audio` as `true`.
         */
        model?: "default" | "minimax-h3" | "kling-3.0" | "ltx-2.5" | "wan-2.2" | "seedance-2.5" | "wan-3.0" | "seedance-2.0-mini" | "veo3.1" | "veo3.1-lite" | "seedance-2.0" | "kling-2.6" | "gemini-omni-1.1" | "seedance-2.0-fast" | "seedance-1.5" | "sora-2" | "ltx-2.3" | "ltx-2" | "kling-2.5" | "kling-1.6" | "seedance" | "kling-2.5-audio" | "veo3.1-audio";
        /**
         * Controls the output video resolution. Defaults to `720p` on paid tiers and `480p` on free tiers.
         *
         * * **`gemini-omni-1.1`**: Supports 360p, 720p, 1080p, 4k.
         * * **`kling-2.6`**: Supports 720p, 1080p.
         * * **`kling-3.0`**: Supports 720p, 1080p, 4k.
         * * **`ltx-2.5`**: Supports 480p, 720p, 1080p.
         * * **`minimax-h3`**: Supports 480p, 720p, 1080p.
         * * **`seedance-1.5`**: Supports 480p, 720p, 1080p.
         * * **`seedance-2.0`**: Supports 480p, 720p, 1080p, 4k.
         * * **`seedance-2.0-fast`**: Supports 480p, 720p.
         * * **`seedance-2.0-mini`**: Supports 480p, 720p.
         * * **`seedance-2.5`**: Supports 480p, 720p, 1080p.
         * * **`veo3.1`**: Supports 720p, 1080p.
         * * **`veo3.1-lite`**: Supports 720p, 1080p.
         * * **`wan-2.2`**: Supports 480p, 720p, 1080p.
         * * **`wan-3.0`**: Supports 480p, 720p, 1080p.
         *
         */
        resolution?: "360p" | "480p" | "720p" | "1080p" | "4k";
        /**
         * Whether to include audio in the video. Defaults to `false` if not specified.
         *
         * Audio support varies by model:
         * * **`gemini-omni-1.1`**: Not supported
         * * **`kling-2.6`**: Not supported
         * * **`kling-3.0`**: Toggle-able: audio adds extra credits when enabled
         * * **`ltx-2.5`**: Toggle-able: no additional credits for audio
         * * **`minimax-h3`**: Toggle-able: no additional credits for audio
         * * **`seedance-1.5`**: Toggle-able: audio adds extra credits when enabled
         * * **`seedance-2.0`**: Toggle-able: no additional credits for audio
         * * **`seedance-2.0-fast`**: Toggle-able: no additional credits for audio
         * * **`seedance-2.0-mini`**: Toggle-able: no additional credits for audio
         * * **`seedance-2.5`**: Toggle-able: no additional credits for audio
         * * **`veo3.1`**: Toggle-able: audio adds extra credits when enabled
         * * **`veo3.1-lite`**: Toggle-able: audio adds extra credits when enabled
         * * **`wan-2.2`**: Not supported
         * * **`wan-3.0`**: Toggle-able: no additional credits for audio
         *
         */
        audio?: boolean;
        /** Attributed used to dictate the style of the output */
        style?: {
          /** The prompt used for the video. */
          prompt?: string;
          [key: string]: unknown;
        };
        /** Provide the assets for image-to-video. */
        assets: {
          /**
           * The path of the image file. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          image_file_path: string;
          /**
           * The image to use as the last frame of the video.
           *
           * * **`gemini-omni-1.1`**: Supports 360p, 720p, 1080p, 4k.
           * * **`kling-2.6`**: Supports 1080p.
           * * **`kling-3.0`**: Supports 720p, 1080p, 4k.
           * * **`ltx-2.5`**: Supports 480p, 720p, 1080p.
           * * **`minimax-h3`**: Supports 480p, 720p, 1080p.
           * * **`seedance-1.5`**: Supports 480p, 720p, 1080p.
           * * **`seedance-2.0`**: Supports 480p, 720p, 1080p, 4k.
           * * **`seedance-2.0-fast`**: Supports 480p, 720p.
           * * **`seedance-2.0-mini`**: Supports 480p, 720p.
           * * **`seedance-2.5`**: Supports 480p, 720p, 1080p.
           * * **`veo3.1`**: Supports 720p, 1080p. Requires a duration of 8 seconds or less.
           * * **`veo3.1-lite`**: Supports 720p, 1080p. Requires a duration of 8 seconds or less.
           * * **`wan-2.2`**: Not supported
           * * **`wan-3.0`**: Supports 480p, 720p, 1080p.
           *
           * @minLength 1
           */
          end_image_file_path?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
         *
         * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** Lip Sync. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_lip_sync": {
      input: {
        /** Give your video a custom name for easy identification. */
        name?: string;
        /**
         * Start time of your clip (seconds). Must be ≥ 0.
         * @minimum 0
         */
        start_seconds: number;
        /**
         * End time of your clip (seconds). Must be greater than start_seconds.
         * @minimum 0.1
         */
        end_seconds: number;
        /**
         * Defines the maximum FPS (frames per second) for the output video. If the input video's FPS is lower than this limit, the output video will retain the input FPS. This is useful for reducing unnecessary frame usage in scenarios where high FPS is not required.
         * @minimum 1
         */
        max_fps_limit?: number;
        /** Provide the assets for lip-sync. For video, The `video_source` field determines whether `video_file_path` or `youtube_url` field is used */
        assets: {
          /**
           * The path of the audio file. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          audio_file_path: string;
          /** Choose your video source. */
          video_source: "file" | "youtube";
          /**
           * Your video file. Required if `video_source` is `file`. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           */
          video_file_path?: string;
          /**
           * YouTube URL (required if `video_source` is `youtube`).
           * @format uri
           */
          youtube_url?: string;
          [key: string]: unknown;
        };
        /** Attributes used to dictate the style of the output */
        style?: {
          /**
           * A specific version of our lip sync system, optimized for different needs.
           * * `lite` -  Fast lip sync - best for simple videos. Costs 1 credit per frame of video.
           * * `standard` -  Natural, accurate lip sync - best for most creators. Requires visible mouth movement in the opening seconds of the input video. Costs 1 credit per frame of video.
           * * `pro` -  Premium fidelity with enhanced detail - best for professionals. Requires visible mouth movement in the opening seconds of the input video. Costs 2 credits per frame of video.
           *
           * If your source is a still image, including a still image saved as a static video, use [AI Talking Photo](https://docs.magichour.ai/api-reference/video-projects/ai-talking-photo) with the original image and your audio instead.
           *
           * Note: `pro` is only available for users on Creator, Pro, and Business tiers.
           *
           */
          generation_mode?: "lite" | "standard" | "pro";
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
         *
         * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** Photo Colorizer. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_photo_colorizer": {
      input: {
        /** Give your image a custom name for easy identification. */
        name?: string;
        /** Provide the assets for photo colorization */
        assets: {
          /**
           * The image used to generate the colorized image. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           * @minLength 1
           */
          image_file_path: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
         *
         * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** Text-to-Video. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_text_to_video": {
      input: {
        /** Give your video a custom name for easy identification. */
        name?: string;
        /**
         * The total duration of the output video in seconds. Supported durations depend on the chosen model:
         *
         * * **`gemini-omni-1.1`**: any integer from 3 to 10
         * * **`kling-2.6`**: 5, 10
         * * **`kling-3.0`**: any integer from 3 to 15
         * * **`ltx-2.5`**: any integer from 1 to 60
         * * **`minimax-h3`**: any integer from 1 to 30
         * * **`seedance-1.5`**: any integer from 4 to 12
         * * **`seedance-2.0`**: any integer from 4 to 15
         * * **`seedance-2.0-fast`**: any integer from 4 to 15
         * * **`seedance-2.0-mini`**: any integer from 4 to 15
         * * **`seedance-2.5`**: any integer from 4 to 30
         * * **`veo3.1`**: 4, 6, 8, 16, 24, 32, 40, 48, 56
         * * **`veo3.1-lite`**: 4, 6, 8, 16, 24, 32, 40, 48, 56
         * * **`wan-2.2`**: 3, 4, 5, 6, 7, 8, 9, 10, 15
         * * **`wan-3.0`**: 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30
         *
         * @minimum 1
         * @maximum 60
         */
        end_seconds: number;
        /**
         * Provide `aspect_ratio` to set the video’s aspect ratio. Determines the aspect ratio of the output video.
         *
         * * **`gemini-omni-1.1`**: Supports 16:9, 9:16.
         * * **`kling-2.6`**: Supports 9:16, 16:9, 1:1.
         * * **`kling-3.0`**: Supports 9:16, 16:9, 1:1.
         * * **`ltx-2.5`**: Supports 9:16, 16:9, 1:1.
         * * **`minimax-h3`**: Supports 16:9, 9:16, 1:1.
         * * **`seedance-1.5`**: Supports 9:16, 16:9, 1:1.
         * * **`seedance-2.0`**: Supports 9:16, 16:9, 1:1.
         * * **`seedance-2.0-fast`**: Supports 9:16, 16:9, 1:1.
         * * **`seedance-2.0-mini`**: Supports 9:16, 16:9, 1:1.
         * * **`seedance-2.5`**: Supports 9:16, 16:9, 1:1.
         * * **`veo3.1`**: Supports 9:16, 16:9.
         * * **`veo3.1-lite`**: Supports 9:16, 16:9.
         * * **`wan-2.2`**: Supports 9:16, 16:9, 1:1.
         * * **`wan-3.0`**: Supports 16:9, 9:16, 1:1.
         *
         */
        aspect_ratio?: "16:9" | "9:16" | "1:1";
        /**
         * Controls the output video resolution. Defaults to `720p` on paid tiers and `480p` on free tiers.
         *
         * * **`gemini-omni-1.1`**: Supports 360p, 720p, 1080p, 4k.
         * * **`kling-2.6`**: Supports 720p, 1080p.
         * * **`kling-3.0`**: Supports 720p, 1080p, 4k.
         * * **`ltx-2.5`**: Supports 480p, 720p, 1080p.
         * * **`minimax-h3`**: Supports 480p, 720p, 1080p.
         * * **`seedance-1.5`**: Supports 480p, 720p, 1080p.
         * * **`seedance-2.0`**: Supports 480p, 720p, 1080p, 4k.
         * * **`seedance-2.0-fast`**: Supports 480p, 720p.
         * * **`seedance-2.0-mini`**: Supports 480p, 720p.
         * * **`seedance-2.5`**: Supports 480p, 720p, 1080p.
         * * **`veo3.1`**: Supports 720p, 1080p.
         * * **`veo3.1-lite`**: Supports 720p, 1080p.
         * * **`wan-2.2`**: Supports 480p, 720p, 1080p.
         * * **`wan-3.0`**: Supports 480p, 720p, 1080p.
         *
         */
        resolution?: "360p" | "480p" | "720p" | "1080p" | "4k";
        /**
         * The AI model to use for video generation.
         *
         * * `default`: uses our currently recommended model for general use. For paid tiers, defaults to `kling-3.0`. For free tiers, it defaults to `ltx-2.5`.
         * * `gemini-omni-1.1`: Best for precise short clips, first/last frames, and high-resolution output.
         * * `kling-2.6`: Best for action, motion blur, and controlled camera moves.
         * * `kling-3.0`: Best for cinematic stories, references, and optional audio.
         * * `ltx-2.5`: Fastest for general scenes, long clips, audio, and rapid iteration.
         * * `minimax-h3`: Great for reference-driven clips with native audio and longer durations.
         * * `seedance-1.5`: Best for smooth, consistent motion with an end frame.
         * * `seedance-2.0`: Best for reference-led clips with precise subject control.
         * * `seedance-2.0-fast`: Fast reference-led clips with consistent motion and audio.
         * * `seedance-2.0-mini`: Faster reference-led clips with consistent motion and audio.
         * * `seedance-2.5`: Best for premium realism, detail, and natural motion.
         * * `veo3.1`: Best for romantic interactions and expressive action, with realistic detail.
         * * `veo3.1-lite`: Balanced realism and audio at a lower cost than Veo 3.1.
         * * `wan-2.2`: Best for physical motion, action, and camera movement.
         * * `wan-3.0`: High-quality video with native audio, long clips, and end-frame control.
         *
         * If you specify the deprecated model value that includes the `-audio` suffix, this will be the same as included `audio` as `true`.
         */
        model?: "default" | "minimax-h3" | "kling-3.0" | "ltx-2.5" | "wan-2.2" | "seedance-2.5" | "wan-3.0" | "seedance-2.0-mini" | "veo3.1" | "veo3.1-lite" | "seedance-2.0" | "kling-2.6" | "gemini-omni-1.1" | "seedance-2.0-fast" | "seedance-1.5" | "sora-2" | "ltx-2.3" | "ltx-2" | "kling-2.5" | "kling-1.6" | "seedance" | "kling-2.5-audio" | "veo3.1-audio";
        /**
         * Whether to include audio in the video. Defaults to `false` if not specified.
         *
         * Audio support varies by model:
         * * **`gemini-omni-1.1`**: Not supported
         * * **`kling-2.6`**: Not supported
         * * **`kling-3.0`**: Toggle-able: audio adds extra credits when enabled
         * * **`ltx-2.5`**: Toggle-able: no additional credits for audio
         * * **`minimax-h3`**: Toggle-able: no additional credits for audio
         * * **`seedance-1.5`**: Toggle-able: audio adds extra credits when enabled
         * * **`seedance-2.0`**: Toggle-able: no additional credits for audio
         * * **`seedance-2.0-fast`**: Toggle-able: no additional credits for audio
         * * **`seedance-2.0-mini`**: Toggle-able: no additional credits for audio
         * * **`seedance-2.5`**: Toggle-able: no additional credits for audio
         * * **`veo3.1`**: Toggle-able: audio adds extra credits when enabled
         * * **`veo3.1-lite`**: Toggle-able: audio adds extra credits when enabled
         * * **`wan-2.2`**: Not supported
         * * **`wan-3.0`**: Toggle-able: no additional credits for audio
         *
         */
        audio?: boolean;
        /** Style. */
        style: {
          /**
           * The prompt used for the video.
           * @minLength 1
           * @maxLength 20000
           */
          prompt: string;
          [key: string]: unknown;
        };
        /**
         * Reference media for video generation. Name references without @ and refer to them as @name in style.prompt. Maximum 10 references total.
         *
         * Supported models and reference media:
         * * **`gemini-omni-1.1`**: Supports images, videos. Up to 13 references.
         * * **`kling-3.0`**: Supports images, videos.
         * * **`minimax-h3`**: Supports images, videos, audio.
         * * **`seedance-2.0`**: Supports images, videos, audio.
         * * **`seedance-2.0-fast`**: Supports images, videos, audio.
         * * **`seedance-2.0-mini`**: Supports images, videos, audio.
         * * **`seedance-2.5`**: Supports images, videos, audio.
         * * **`veo3.1`**: Supports images. Up to 3 references. Requires `end_seconds` of 8.
         * * **`wan-3.0`**: Supports images, videos, audio.
         * @minItems 1
         * @maxItems 10
         */
        references?: Array<{
          /**
           * Name.
           * @pattern ^[A-Za-z][\w-]*$
           */
          name: string;
          /**
           * File path.
           * @minLength 1
           */
          file_path: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
         *
         * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** Video-to-Video. Submit the asynchronous task and use the linked result action to retrieve completion and downloads. */
    "magichour.create_video_to_video": {
      input: {
        /** Give your video a custom name for easy identification. */
        name?: string;
        /**
         * Start time of your clip (seconds). Must be ≥ 0.
         * @minimum 0
         */
        start_seconds: number;
        /**
         * End time of your clip (seconds). Must be greater than start_seconds.
         * @minimum 0.1
         */
        end_seconds: number;
        /**
         * Determines whether the resulting video will have the same frame per second as the original video, or half.
         * * `FULL` - the result video will have the same FPS as the input video
         * * `HALF` - the result video will have half the FPS as the input video
         */
        fps_resolution?: "FULL" | "HALF";
        /** Style. */
        style: {
          /** Art style. */
          art_style: "Minecraft" | "Watercolor" | "Pixel" | "Retro Sci-Fi" | "Lego" | "Origami" | "Ghost" | "Sub-Zero" | "Studio Ghibli" | "Comic" | "Impressionism" | "Master Chief" | "Solid Snake" | "Street Fighter" | "Hologram" | "GTA" | "Clay" | "Mystique" | "Dragonball Z" | "Mario" | "Samurai" | "Spartan" | "Boba Fett" | "3D Render" | "Airbender" | "Android" | "Anime Warrior" | "Armored Knight" | "Assassin's Creed" | "Avatar" | "Black Spiderman" | "Bold Anime" | "Celestial Skin" | "Chinese Swordsmen" | "Cyberpunk" | "Cypher" | "Dark Fantasy" | "Future Bot" | "Futuristic Fantasy" | "Ghibli Anime" | "Gundam" | "Illustration" | "Ink" | "Ink Poster" | "Jinx" | "Knight" | "Link" | "Marble" | "Mech" | "Naruto" | "Neon Dream" | "No Art Style" | "Oil Painting" | "On Fire" | "Painterly Anime" | "Pixar" | "Power Armor" | "Power Ranger" | "Radiant Anime" | "Realistic Anime" | "Realistic Pixar" | "Retro Anime" | "Samurai Bot" | "Sharp Anime" | "Soft Anime" | "Starfield" | "The Void" | "Tomb Raider" | "Underwater" | "Van Gogh" | "Viking" | "Western Anime" | "Wu Kong" | "Wuxia Anime" | "Zelda";
          /**
           * * `v1` - more detail, closer prompt adherence, and frame-by-frame previews.
           * * `v2` - faster, more consistent, and less noisy.
           * * `default` - use the selected art style's default version. Some art styles default to v3, which is unavailable through this API. For `Studio Ghibli`, explicitly set `version` to `v2` to use its supported preset.
           */
          version?: "v1" | "v2" | "default";
          /**
           * * `default` - Use the default recommended prompt for the art style.
           * * `custom` - Only use the prompt passed in the API. Note: for v1, lora prompt will still be auto added to apply the art style properly.
           * * `append_default` - Add the default recommended prompt to the end of the prompt passed in the API.
           */
          prompt_type?: "default" | "custom" | "append_default";
          /** The prompt used for the video. Prompt is required if `prompt_type` is `custom` or `append_default`. If `prompt_type` is `default`, then the `prompt` value passed will be ignored. */
          prompt?: string | null;
          /**
           * * `Dreamshaper` - a good all-around model that works for both animations as well as realism.
           * * `Absolute Reality` - better at realism, but you'll often get similar results with Dreamshaper as well.
           * * `Flat 2D Anime` - best for a flat illustration style that's common in most anime.
           * * `default` - use the default recommended model for the selected art style.
           */
          model?: "Dreamshaper" | "Absolute Reality" | "Flat 2D Anime" | "Soft Anime" | "Kaywaii" | "Western Anime" | "3D Anime" | "default";
          [key: string]: unknown;
        };
        /** Provide the assets for video-to-video. For video, The `video_source` field determines whether `video_file_path` or `youtube_url` field is used */
        assets: {
          /** Choose your video source. */
          video_source: "file" | "youtube";
          /**
           * Your video file. Required if `video_source` is `file`. This value is either
           * - a direct URL to the video file
           * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
           *
           * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
           *
           */
          video_file_path?: string;
          /**
           * YouTube URL (required if `video_source` is `youtube`).
           * @format uri
           */
          youtube_url?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads. */
        id: string;
        /**
         * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
         *
         * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
         */
        credits_charged: number;
        [key: string]: unknown;
      };
    };
    /** Delete audio. */
    "magichour.delete_audio_projects": {
      input: {
        /** Unique ID of the audio project. This value is returned by all of the POST APIs that create an audio. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the project was deleted. */
        deleted: boolean;
        [key: string]: unknown;
      };
    };
    /** Delete image. */
    "magichour.delete_image_projects": {
      input: {
        /** Unique ID of the image project. This value is returned by all of the POST APIs that create an image. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the project was deleted. */
        deleted: boolean;
        [key: string]: unknown;
      };
    };
    /** Delete video. */
    "magichour.delete_video_projects": {
      input: {
        /** Unique ID of the video project. This value is returned by all of the POST APIs that create a video. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the project was deleted. */
        deleted: boolean;
        [key: string]: unknown;
      };
    };
    /** Get account details. */
    "magichour.get_account": {
      input: Record<string, unknown>;
      output: {
        /** Unique ID of the account that owns the API key. */
        id: string;
        /** Email address of the account. */
        email: string | null;
        /** Subscription tier in effect for the account. `free` if there is no active subscription, including while a subscription is `past_due`. */
        tier: "free" | "creator" | "pro" | "business";
        /**
         * Credits currently available to spend. Includes subscription credits and any purchased credit packs.
         * @minimum 0
         */
        credits: number;
        /**
         * Details of the account's subscription plan. `null` if the account has no subscription, e.g. a free account, an account that only purchased credit packs, or an account on usage-based API pricing.
         *
         * Reflects the plan currently configured on the subscription. If a plan change is scheduled, `tier` stays on the current plan until the next payment succeeds, so `tier` and `name` can briefly disagree.
         */
        subscription: {
          /** Name of the current subscription plan, e.g. `Creator`, `Pro`, `Pro Plus`, `Business`. `null` if the plan cannot be determined. Use `tier` for a machine-readable value. */
          name: string | null;
          /**
           * Status of the subscription.
           * - `active`: payments are up to date.
           * - `past_due`: the latest payment failed. `tier` is `free` until payment succeeds. The subscription is canceled if payment keeps failing.
           */
          status: "active" | "past_due";
          /** Price. */
          price: {
            /**
             * Price charged per billing interval, in the smallest unit of the currency (e.g. 4900 is $49.00 for `usd`). Discounts are not applied.
             * @minimum 0
             */
            amount: number;
            /** Three-letter ISO 4217 currency code, lowercase. */
            currency: string;
            [key: string]: unknown;
          };
          /** Discount applied to the subscription. `null` if no discount is applied. */
          discount: {
            /** Percentage taken off `price.amount` each billing interval. `null` if the discount is a fixed amount. */
            percent_off: number | null;
            /** Fixed amount taken off `price.amount` each billing interval, in the smallest unit of the currency. `null` if the discount is a percentage. */
            amount_off: number | null;
            [key: string]: unknown;
          } | null;
          /** How often the subscription is billed. `null` if unknown. */
          billing_interval: "month" | "year" | null;
          /**
           * End of the current billing period, in ISO 8601 format. The subscription renews at this time, or ends if `cancel_at_period_end` is `true`.
           * @format date-time
           */
          current_period_end: string | null;
          /** Whether the subscription is scheduled to end at `current_period_end` instead of renewing. The subscription stays usable until then. */
          cancel_at_period_end: boolean;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Get audio details. */
    "magichour.get_audio_projects": {
      input: {
        /** Unique ID of the audio project. This value is returned by all of the POST APIs that create an audio. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the audio. Use it with the [Get audio Project API](https://docs.magichour.ai/api-reference/audio-projects/get-audio-details) to fetch status and downloads. */
        id: string;
        /** The name of the audio. */
        name: string | null;
        /**
         * The status of the audio.
         *
         * - `draft` - the project was created but has not been submitted for rendering
         * - `queued` - the job is waiting for an available server
         * - `rendering` - the job is being processed; the `audio.started` webhook event fires when rendering begins
         * - `complete` - the job finished successfully; fires `audio.completed`
         * - `error` - the job failed during processing; fires `audio.errored`
         * - `canceled` - the job was manually canceled (for example from the Magic Hour web app)
         *
         * **Note:** `rendering`, `complete`, and `error` have matching webhook events; `canceled` does not - a canceled job emits no webhook event, so poll this endpoint to detect cancellation.
         */
        status: "draft" | "queued" | "rendering" | "complete" | "error" | "canceled";
        /** The type of the audio project. Possible values are AUDIO_TRANSLATOR, VOICE_GENERATOR, VOICE_CHANGER, VOICE_CLONER, VIDEO_TO_AUDIO, MUSIC_GENERATOR, SOUND_EFFECT_GENERATOR */
        type: string;
        /**
         * Created at.
         * @format date-time
         */
        created_at: string;
        /** Whether this resource is active. If false, it is deleted. */
        enabled: boolean;
        /**
         * The amount of credits deducted from your account to generate the audio. We charge credits right when the request is made.
         *
         * If an error occurred while generating the audio, credits will be refunded and this field will be updated to include the refund.
         */
        credits_charged: number;
        /** Downloads. */
        downloads: Array<{
          /**
           * Url.
           * @format uri
           */
          url: string;
          /**
           * Expires at.
           * @format date-time
           */
          expires_at: string;
          [key: string]: unknown;
        }>;
        /** The error reported while rendering the project. */
        error: {
          /** Details on the reason why a failure happened. */
          message: string;
          /** An error code to indicate why a failure happened. */
          code: string;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Get face detection details. */
    "magichour.get_face_detection": {
      input: {
        /** The id of the task. This value is returned by the [face detection API](https://docs.magichour.ai/api-reference/files/face-detection#response-id). */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** The id of the task. This value is returned by the [face detection API](https://docs.magichour.ai/api-reference/files/face-detection#response-id). */
        id: string;
        /** The credits charged for the task. */
        credits_charged: number;
        /** The status of the detection. */
        status: "queued" | "rendering" | "complete" | "error";
        /** The faces detected in the image or video. The list is populated as faces are detected. */
        faces: Array<{
          /** The path to the face image. This should be used in face swap photo/video API calls as `.assets.face_mappings.original_face` */
          path: string;
          /** The url to the face image. This is used to render the image in your applications. */
          url: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get image details. */
    "magichour.get_image_projects": {
      input: {
        /** Unique ID of the image project. This value is returned by all of the POST APIs that create an image. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads. */
        id: string;
        /** The name of the image. */
        name: string | null;
        /**
         * The status of the image.
         *
         * - `draft` - the project was created but has not been submitted for rendering
         * - `queued` - the job is waiting for an available server
         * - `rendering` - the job is being processed; the `image.started` webhook event fires when rendering begins
         * - `complete` - the job finished successfully; fires `image.completed`
         * - `error` - the job failed during processing; fires `image.errored`
         * - `canceled` - the job was manually canceled (for example from the Magic Hour web app)
         *
         * **Note:** `rendering`, `complete`, and `error` have matching webhook events; `canceled` does not - a canceled job emits no webhook event, so poll this endpoint to detect cancellation.
         */
        status: "draft" | "queued" | "rendering" | "complete" | "error" | "canceled";
        /** The type of the image project. Possible values are FACE_EDITOR, AI_IMAGE_EDITOR, GENERATIVE_FILL, AI_SELFIE, AI_HEADSHOT, AI_INFLUENCER, AI_IMAGE, AI_MEME, CLOTHES_CHANGER, BACKGROUND_REMOVER, FACE_SWAP, IMAGE_UPSCALER, IMAGE_ENHANCER, AI_GIF, QR_CODE, PHOTO_EDITOR, PHOTO_COLORIZER, IMAGE_COLOR_GRADER, HEAD_SWAP, BODY_SWAP, STORYBOARD, IMAGE_EXPANDER */
        type: string;
        /**
         * Created at.
         * @format date-time
         */
        created_at: string;
        /** Whether this resource is active. If false, it is deleted. */
        enabled: boolean;
        /**
         * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
         *
         * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
         */
        credits_charged: number;
        /** Downloads. */
        downloads: Array<{
          /**
           * Url.
           * @format uri
           */
          url: string;
          /**
           * Expires at.
           * @format date-time
           */
          expires_at: string;
          [key: string]: unknown;
        }>;
        /** The error reported while rendering the project. */
        error: {
          /** Details on the reason why a failure happened. */
          message: string;
          /** An error code to indicate why a failure happened. */
          code: string;
          [key: string]: unknown;
        } | null;
        /** Number of images generated */
        image_count: number;
        [key: string]: unknown;
      };
    };
    /** Get video details. */
    "magichour.get_video_projects": {
      input: {
        /** Unique ID of the video project. This value is returned by all of the POST APIs that create a video. */
        id: string;
        [key: string]: unknown;
      };
      output: {
        /** Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads. */
        id: string;
        /** The name of the video. */
        name: string | null;
        /**
         * The status of the video.
         *
         * - `draft` - the project was created but has not been submitted for rendering
         * - `queued` - the job is waiting for an available server
         * - `rendering` - the job is being processed; the `video.started` webhook event fires when rendering begins
         * - `complete` - the job finished successfully; fires `video.completed`
         * - `error` - the job failed during processing; fires `video.errored`
         * - `canceled` - the job was manually canceled (for example from the Magic Hour web app)
         *
         * **Note:** `rendering`, `complete`, and `error` have matching webhook events; `canceled` does not - a canceled job emits no webhook event, so poll this endpoint to detect cancellation.
         */
        status: "draft" | "queued" | "rendering" | "complete" | "error" | "canceled";
        /** The type of the video project. Possible values are ANIMATION, AUTO_SUBTITLE, VIDEO_TO_VIDEO, FACE_SWAP, TEXT_TO_VIDEO, IMAGE_TO_VIDEO, LIP_SYNC, TALKING_PHOTO, AVATAR, VIDEO_UPSCALER, VIDEO_EDITOR, CHARACTER_REPLACE, VIDEO_COLORIZER, VIDEO_WATERMARK_REMOVER, VIDEO_COLOR_GRADER, VIDEO_TRANSLATOR, MUSIC_VIDEO, EXTEND, AUDIO_TO_VIDEO, VIDEO_EXPANDER, UGC_AD */
        type: string;
        /**
         * Created at.
         * @format date-time
         */
        created_at: string;
        /** Whether this resource is active. If false, it is deleted. */
        enabled: boolean;
        /**
         * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
         *
         * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
         */
        credits_charged: number;
        /** Downloads. */
        downloads: Array<{
          /**
           * Url.
           * @format uri
           */
          url: string;
          /**
           * Expires at.
           * @format date-time
           */
          expires_at: string;
          [key: string]: unknown;
        }>;
        /** The error reported while rendering the project. */
        error: {
          /** Details on the reason why a failure happened. */
          message: string;
          /** An error code to indicate why a failure happened. */
          code: string;
          [key: string]: unknown;
        } | null;
        /** The width of the final output video. A value of -1 indicates the width can be ignored. */
        width: number;
        /** The height of the final output video. A value of -1 indicates the height can be ignored. */
        height: number;
        /**
         * Start time of your clip (seconds). Must be ≥ 0.
         * @minimum 0
         */
        start_seconds: number;
        /**
         * End time of your clip (seconds). Must be greater than start_seconds.
         * @minimum 0.1
         */
        end_seconds: number;
        /** Frame rate of the video. If the status is not 'complete', the frame rate is an estimate and will be adjusted when the video completes. */
        fps: number;
        [key: string]: unknown;
      };
    };
    /** List saved items. */
    "magichour.list_saved_items": {
      input: {
        /** Only return saved items of this type. */
        type?: "character" | "reference" | "voice" | "moodboard" | "brand_kit";
        /**
         * Maximum number of saved items to return. Defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor from the previous response's next_cursor.
         * @minLength 1
         */
        cursor?: string;
        [key: string]: unknown;
      };
      output: {
        /** Items. */
        items: Array<{
          /** Unique ID of the saved item. */
          id: string;
          /** Saved item type. */
          type: "character" | "reference" | "voice" | "moodboard" | "brand_kit";
          /** User-provided name of the saved item. */
          name: string | null;
          /** Assets. */
          assets: Array<{
            /** Durable asset path. Pass it to a compatible API asset field without uploading it again. */
            file_path: string;
            /** Media type of the asset. */
            media_kind: "IMAGE" | "VIDEO" | "AUDIO";
            /** Whether this asset is the saved item's primary asset. */
            is_primary: boolean;
            /**
             * Signed URL for previewing or downloading the asset. Expires after 24 hours.
             * @format uri
             */
            url: string;
            /**
             * When the signed URL expires. The saved asset and file_path do not expire.
             * @format date-time
             */
            url_expires_at: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page, or null when there are no more saved items. */
        next_cursor: string | null;
        [key: string]: unknown;
      };
    };
    /** Upload an asset from a public URL to Magic Hour storage and return its reusable file_path. Maximum 20 MiB; larger hosted files can be passed directly to generation actions. */
    "magichour.upload_asset": {
      input: {
        /**
         * Public URL of the source file, at most 20 MiB. Downloaded by Connector.
         * @format uri
         */
        fileUrl: string;
        /** Asset media type. */
        type: "image" | "video" | "audio";
        /**
         * File extension without a leading dot, such as png, mp4 or mp3.
         * @pattern ^[a-z0-9]+$
         */
        extension: string;
      };
      output: {
        /** Reusable Magic Hour asset path for compatible generation inputs. */
        file_path: string;
        [key: string]: unknown;
      };
    };
  }
}
