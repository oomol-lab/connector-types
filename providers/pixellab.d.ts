import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate synchronous PixelLab animation frames from a reference character image and per-frame skeleton keypoints. */
    "pixellab.animate_with_skeleton": {
      input: {
        /** Output frame dimensions in pixels. */
        imageSize: {
          /**
           * Output frame width from 16 to 256 pixels.
           * @minimum 16
           * @maximum 256
           */
          width: number;
          /**
           * Output frame height from 16 to 256 pixels.
           * @minimum 16
           * @maximum 256
           */
          height: number;
        };
        /**
         * The PNG or JPEG character image whose appearance should be preserved. Provide a public PNG or JPEG URL.
         * @format uri
         */
        referenceImage: string;
        /**
         * Skeleton keypoints for each animation frame, in playback order.
         * @minItems 1
         */
        skeletonKeypoints: Array<Array<{
          /** Horizontal point coordinate. */
          x: number;
          /** Vertical point coordinate. */
          y: number;
          /** PixelLab skeleton joint label. */
          label: "NOSE" | "NECK" | "RIGHT SHOULDER" | "RIGHT ELBOW" | "RIGHT ARM" | "LEFT SHOULDER" | "LEFT ELBOW" | "LEFT ARM" | "RIGHT HIP" | "RIGHT KNEE" | "RIGHT LEG" | "LEFT HIP" | "LEFT KNEE" | "LEFT LEG" | "RIGHT EYE" | "LEFT EYE" | "RIGHT EAR" | "LEFT EAR";
          /**
           * Layer order used when skeleton joints overlap.
           * @default 0
           */
          zIndex?: number;
        }>>;
        /**
         * How closely to follow the reference image and skeleton keypoints.
         * @minimum 1
         * @maximum 20
         * @default 4
         */
        guidanceScale?: number;
        /**
         * Camera view angle.
         * @default "side"
         */
        view?: "side" | "low top-down" | "high top-down";
        /**
         * Direction the character faces.
         * @default "east"
         */
        direction?: "north" | "north-east" | "east" | "south-east" | "south" | "south-west" | "west" | "north-west";
        /**
         * Whether to generate an isometric view.
         * @default false
         */
        isometric?: boolean;
        /**
         * Whether to use oblique projection.
         * @default false
         */
        obliqueProjection?: boolean;
        /**
         * Seed used to make generation reproducible.
         * @minimum 0
         */
        seed?: number;
      };
      output: {
        /** Generated animation frames in playback order. */
        frames: Array<{
          /**
           * The public URL used to download the generated image.
           * @format uri
           */
          transitUrl: string;
          /**
           * The generated image size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /**
           * The generated image filename.
           * @minLength 1
           */
          name: string;
          /**
           * The generated image MIME type.
           * @minLength 1
           */
          mimeType: string;
        }>;
        /**
         * The number of generated animation frames.
         * @minimum 0
         */
        frameCount: number;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Generate four animation frames synchronously with PixelLab's original text animation model. */
    "pixellab.animate_with_text_legacy": {
      input: {
        /** Animation output dimensions. */
        imageSize: {
          /**
           * Image width from 16 to 256 pixels.
           * @minimum 16
           * @maximum 256
           */
          width: number;
          /**
           * Image height from 16 to 256 pixels.
           * @minimum 16
           * @maximum 256
           */
          height: number;
        };
        /**
         * Description of the character.
         * @minLength 1
         */
        description: string;
        /**
         * Description of the action to animate.
         * @minLength 1
         */
        action: string;
        /**
         * The PNG or JPEG character reference image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        referenceImage: string;
        /**
         * How closely to follow the text description.
         * @minimum 1
         * @maximum 20
         * @default 8
         */
        textGuidanceScale?: number;
        /**
         * How closely to follow the reference image.
         * @minimum 1
         * @maximum 20
         * @default 1.4
         */
        imageGuidanceScale?: number;
        /**
         * Length of the conceptual animation; the model returns four frames.
         * @minimum 2
         * @maximum 20
         * @default 4
         */
        frameCount?: number;
        /**
         * Starting index in the conceptual animation.
         * @minimum 0
         * @maximum 20
         * @default 0
         */
        startFrameIndex?: number;
        /** Camera view angle. */
        view?: "side" | "low top-down" | "high top-down";
        /** Direction the subject faces. */
        direction?: "north" | "north-east" | "east" | "south-east" | "south" | "south-west" | "west" | "north-west";
        /**
         * Optional PNG or JPEG palette image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        colorImage?: string;
        /**
         * Seed for reproducible generation. Use 0 for random.
         * @default 0
         */
        seed?: number;
      };
      output: {
        /** Generated animation frames in playback order. */
        frames: Array<{
          /**
           * The public URL used to download the generated image.
           * @format uri
           */
          transitUrl: string;
          /**
           * The generated image size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /**
           * The generated image filename.
           * @minLength 1
           */
          name: string;
          /**
           * The generated image MIME type.
           * @minLength 1
           */
          mimeType: string;
        }>;
        /**
         * Number of generated frames.
         * @minimum 0
         */
        frameCount: number;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Convert a PNG or JPEG image to pixel art synchronously. */
    "pixellab.convert_to_pixel_art": {
      input: {
        /**
         * The PNG or JPEG source image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        image: string;
        /** Source image dimensions. */
        imageSize: {
          /**
           * Image width from 16 to 1280 pixels.
           * @minimum 16
           * @maximum 1280
           */
          width: number;
          /**
           * Image height from 16 to 1280 pixels.
           * @minimum 16
           * @maximum 1280
           */
          height: number;
        };
        /** Pixel-art output dimensions. */
        outputSize: {
          /**
           * Image width from 16 to 320 pixels.
           * @minimum 16
           * @maximum 320
           */
          width: number;
          /**
           * Image height from 16 to 320 pixels.
           * @minimum 16
           * @maximum 320
           */
          height: number;
        };
        /**
         * How closely to follow the pixel-art style.
         * @minimum 1
         * @maximum 20
         * @default 8
         */
        textGuidanceScale?: number;
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
      };
      output: {
        /** A generated image stored in OOMOL file transit. */
        image: {
          /**
           * The public URL used to download the generated image.
           * @format uri
           */
          transitUrl: string;
          /**
           * The generated image size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /**
           * The generated image filename.
           * @minLength 1
           */
          name: string;
          /**
           * The generated image MIME type.
           * @minLength 1
           */
          mimeType: string;
        };
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Generate one pixel-art image synchronously with the PixelLab Pixen model. */
    "pixellab.create_pixen_image": {
      input: {
        /**
         * Description of the image to generate.
         * @minLength 1
         */
        description: string;
        /** Pixen output dimensions. Width and height must be divisible by 4. */
        imageSize: {
          /**
           * Image width from 16 to 768 pixels.
           * @minimum 16
           * @maximum 768
           */
          width: number;
          /**
           * Image height from 16 to 768 pixels.
           * @minimum 16
           * @maximum 768
           */
          height: number;
        };
        /** Pixel-art outline style. */
        outline?: "single color black outline" | "single color outline" | "selective outline" | "lineless";
        /**
         * Pixel-art detail level.
         * @default "highly detailed"
         */
        detail?: "low detail" | "medium detail" | "highly detailed";
        /** Camera view angle. */
        view?: "side" | "low top-down" | "high top-down";
        /** Direction the subject faces. */
        direction?: "north" | "north-east" | "east" | "south-east" | "south" | "south-west" | "west" | "north-west";
        /**
         * Whether to generate a transparent background.
         * @default false
         */
        noBackground?: boolean;
        /**
         * Background removal mode. Complex mode is slower but handles detailed edges better.
         * @default "remove_simple_background"
         */
        backgroundRemovalTask?: "remove_simple_background" | "remove_complex_background";
        /** Seed for reproducible generation. */
        seed?: number;
        /**
         * Whether PixelLab should enhance the prompt first.
         * @default false
         */
        enhancePrompt?: boolean;
      };
      output: {
        /** A generated image stored in OOMOL file transit. */
        image: {
          /**
           * The public URL used to download the generated image.
           * @format uri
           */
          transitUrl: string;
          /**
           * The generated image size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /**
           * The generated image filename.
           * @minLength 1
           */
          name: string;
          /**
           * The generated image MIME type.
           * @minLength 1
           */
          mimeType: string;
        };
        /**
         * The expanded prompt when enhancement was requested.
         * @minLength 1
         */
        enhancedPrompt?: string;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
        /** PixelLab usage charged for the operation. */
        enhanceUsage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Generate one pixel-art image synchronously with the PixelLab Pixflux model. */
    "pixellab.create_pixflux_image": {
      input: {
        /**
         * Description of the image to generate.
         * @minLength 1
         */
        description: string;
        /** Pixflux output dimensions. */
        imageSize: {
          /**
           * Image width from 16 to 400 pixels.
           * @minimum 16
           * @maximum 400
           */
          width: number;
          /**
           * Image height from 16 to 400 pixels.
           * @minimum 16
           * @maximum 400
           */
          height: number;
        };
        /**
         * How closely to follow the text description.
         * @minimum 1
         * @maximum 20
         * @default 8
         */
        textGuidanceScale?: number;
        /** Pixel-art outline style. */
        outline?: "single color black outline" | "single color outline" | "selective outline" | "lineless";
        /** Pixel-art shading style. */
        shading?: "flat shading" | "basic shading" | "medium shading" | "detailed shading" | "highly detailed shading";
        /** Pixel-art detail level. */
        detail?: "low detail" | "medium detail" | "highly detailed";
        /** Camera view angle. */
        view?: "side" | "low top-down" | "high top-down";
        /** Direction the subject faces. */
        direction?: "north" | "north-east" | "east" | "south-east" | "south" | "south-west" | "west" | "north-west";
        /**
         * Whether to generate an isometric view.
         * @default false
         */
        isometric?: boolean;
        /**
         * Whether to generate a transparent background.
         * @default false
         */
        noBackground?: boolean;
        /**
         * Background removal mode. Complex mode is slower but handles detailed edges better.
         * @default "remove_simple_background"
         */
        backgroundRemovalTask?: "remove_simple_background" | "remove_complex_background";
        /**
         * Optional PNG or JPEG initial image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        initImage?: string;
        /**
         * Strength of the initial image influence.
         * @minimum 1
         * @maximum 999
         * @default 300
         */
        initImageStrength?: number;
        /**
         * Optional PNG or JPEG palette image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        colorImage?: string;
        /** Seed for reproducible generation. */
        seed?: number;
      };
      output: {
        /** A generated image stored in OOMOL file transit. */
        image: {
          /**
           * The public URL used to download the generated image.
           * @format uri
           */
          transitUrl: string;
          /**
           * The generated image size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /**
           * The generated image filename.
           * @minLength 1
           */
          name: string;
          /**
           * The generated image MIME type.
           * @minLength 1
           */
          mimeType: string;
        };
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Delete a persisted PixelLab character and its associated animations. */
    "pixellab.delete_character": {
      input: {
        /**
         * The PixelLab character identifier to delete.
         * @minLength 1
         */
        characterId: string;
      };
      output: {
        /** Whether the character was deleted. */
        success: boolean;
        /**
         * Deleted character identifier.
         * @minLength 1
         */
        characterId?: string;
        /**
         * Number of files deleted.
         * @minimum 0
         */
        filesDeleted?: number;
        /**
         * Number of animations deleted.
         * @minimum 0
         */
        animationsDeleted?: number;
        /**
         * Deletion error when unsuccessful.
         * @minLength 1
         */
        error?: string;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Delete one persisted PixelLab object. */
    "pixellab.delete_object": {
      input: {
        /**
         * The PixelLab object identifier to delete.
         * @minLength 1
         */
        objectId: string;
      };
      output: {
        /** Whether the object was deleted. */
        success: boolean;
        /**
         * Deleted object identifier.
         * @minLength 1
         */
        objectId?: string;
        /**
         * Deletion error when unsuccessful.
         * @minLength 1
         */
        error?: string;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Delete one saved PixelLab UI asset. */
    "pixellab.delete_ui_asset": {
      input: {
        /**
         * The PixelLab UI asset identifier to delete.
         * @format uuid
         */
        uiAssetId: string;
      };
      output: {
        /** Whether PixelLab deleted the UI asset. */
        success: boolean;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Discard all candidate frames for a one-direction object awaiting review. */
    "pixellab.dismiss_object_review": {
      input: {
        /**
         * Review-status PixelLab object identifier.
         * @minLength 1
         */
        objectId: string;
      };
      output: {
        /** Whether the review candidates were dismissed. */
        dismissed: boolean;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Export one persisted PixelLab character as a ZIP transit file. */
    "pixellab.download_character_zip": {
      input: {
        /**
         * The PixelLab character identifier to export.
         * @minLength 1
         */
        characterId: string;
      };
      output: {
        /** A generated image stored in OOMOL file transit. */
        file: {
          /**
           * The public URL used to download the generated image.
           * @format uri
           */
          transitUrl: string;
          /**
           * The generated image size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /**
           * The generated image filename.
           * @minLength 1
           */
          name: string;
          /**
           * The generated image MIME type.
           * @minLength 1
           */
          mimeType: string;
        };
      };
    };
    /** Expand a motion description using the visible content of one or two animation frames. */
    "pixellab.enhance_animation_prompt": {
      input: {
        /**
         * The PNG or JPEG first animation frame. Provide a public PNG or JPEG URL.
         * @format uri
         */
        firstFrame: string;
        /**
         * Optional PNG or JPEG final frame for interpolation guidance. Provide a public PNG or JPEG URL.
         * @format uri
         */
        lastFrame?: string;
        /**
         * Motion description to enhance.
         * @minLength 1
         * @maxLength 500
         */
        action: string;
      };
      output: {
        /**
         * The model-ready prompt returned by PixelLab.
         * @minLength 1
         */
        enhancedPrompt: string;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Expand a short description into a model-ready PixelLab v3 character prompt. */
    "pixellab.enhance_character_prompt": {
      input: {
        /**
         * Character description to enhance.
         * @minLength 1
         * @maxLength 2000
         */
        description: string;
        /** Character frame dimensions. */
        imageSize: {
          /**
           * Image width from 32 to 256 pixels.
           * @minimum 32
           * @maximum 256
           */
          width: number;
          /**
           * Image height from 32 to 256 pixels.
           * @minimum 32
           * @maximum 256
           */
          height: number;
        };
        /**
         * Camera view or tilt.
         * @default "low top-down"
         */
        view?: "low top-down" | "high top-down" | "side";
        /**
         * Optional outline style guidance.
         * @minLength 1
         */
        outline?: string;
        /**
         * Optional detail level guidance.
         * @minLength 1
         */
        detail?: string;
      };
      output: {
        /**
         * The model-ready prompt returned by PixelLab.
         * @minLength 1
         */
        enhancedPrompt: string;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Expand a short description into a model-ready PixelLab Pixen image prompt. */
    "pixellab.enhance_pixen_prompt": {
      input: {
        /**
         * Image description to enhance.
         * @minLength 1
         * @maxLength 2000
         */
        description: string;
        /** Pixen output dimensions. Width and height must be divisible by 4. */
        imageSize: {
          /**
           * Image width from 16 to 768 pixels.
           * @minimum 16
           * @maximum 768
           */
          width: number;
          /**
           * Image height from 16 to 768 pixels.
           * @minimum 16
           * @maximum 768
           */
          height: number;
        };
        /** Pixel-art outline style. */
        outline?: "single color black outline" | "single color outline" | "selective outline" | "lineless";
        /**
         * Pixel-art detail level.
         * @default "highly detailed"
         */
        detail?: "low detail" | "medium detail" | "highly detailed";
        /** Camera view angle. */
        view?: "side" | "low top-down" | "high top-down";
        /** Direction the subject faces. */
        direction?: "north" | "north-east" | "east" | "south-east" | "south" | "south-west" | "west" | "north-west";
        /**
         * Whether the prompt should omit a scene background.
         * @default false
         */
        noBackground?: boolean;
      };
      output: {
        /**
         * The model-ready prompt returned by PixelLab.
         * @minLength 1
         */
        enhancedPrompt: string;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Estimate PixelLab skeleton keypoints from a PNG or JPEG character image. */
    "pixellab.estimate_skeleton": {
      input: {
        /**
         * The PNG or JPEG character image from which to estimate skeleton keypoints. Provide a public PNG or JPEG URL.
         * @format uri
         */
        image: string;
      };
      output: {
        /** Skeleton keypoints estimated from the character image. */
        keypoints: Array<{
          /** Horizontal point coordinate. */
          x: number;
          /** Vertical point coordinate. */
          y: number;
          /** PixelLab skeleton joint label. */
          label: "NOSE" | "NECK" | "RIGHT SHOULDER" | "RIGHT ELBOW" | "RIGHT ARM" | "LEFT SHOULDER" | "LEFT ELBOW" | "LEFT ARM" | "RIGHT HIP" | "RIGHT KNEE" | "RIGHT LEG" | "LEFT HIP" | "LEFT KNEE" | "LEFT LEG" | "RIGHT EYE" | "LEFT EYE" | "RIGHT EAR" | "LEFT EAR";
          /**
           * Layer order used when skeleton joints overlap.
           * @default 0
           */
          zIndex: number;
        }>;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Poll a PixelLab background animation job and store completed image frames in OOMOL file transit. */
    "pixellab.get_background_job": {
      input: {
        /**
         * The PixelLab background job identifier returned when the animation started.
         * @minLength 1
         */
        jobId: string;
      };
      output: {
        /**
         * The PixelLab background job identifier.
         * @minLength 1
         */
        jobId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /**
         * When PixelLab created the background job.
         * @format date-time
         */
        createdAt: string;
        /** Generated images in provider order. */
        images: Array<{
          /**
           * The public URL used to download the generated image.
           * @format uri
           */
          transitUrl: string;
          /**
           * The generated image size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /**
           * The generated image filename.
           * @minLength 1
           */
          name: string;
          /**
           * The generated image MIME type.
           * @minLength 1
           */
          mimeType: string;
        }>;
        /**
         * The number of completed generated images.
         * @minimum 0
         */
        imageCount?: number;
        /** Non-image result metadata returned by the completed background job. */
        result?: Record<string, unknown>;
        /**
         * The PixelLab failure message when the job failed.
         * @minLength 1
         */
        error?: string;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Retrieve the current PixelLab USD credit and subscription generation balances. */
    "pixellab.get_balance": {
      input: Record<string, never>;
      output: {
        /** Remaining PixelLab USD credits. */
        creditsUsd: number;
        /**
         * Current subscription status.
         * @minLength 1
         */
        subscriptionStatus: string;
        /**
         * Current subscription plan name.
         * @minLength 1
         */
        subscriptionPlan?: string;
        /** Remaining subscription generations in this billing period. */
        generationsRemaining: number;
        /** Total subscription generations in this billing period. */
        generationsTotal: number;
      };
    };
    /** Retrieve one persisted PixelLab character with rotations and animations. */
    "pixellab.get_character": {
      input: {
        /**
         * The PixelLab character identifier.
         * @minLength 1
         */
        characterId: string;
      };
      output: {
        /** A persisted PixelLab character. */
        character: {
          /**
           * Character identifier.
           * @minLength 1
           */
          id: string;
          /**
           * Character name.
           * @minLength 1
           */
          name: string;
          /**
           * Character creation prompt.
           * @minLength 1
           */
          prompt: string;
          /** Character sprite dimensions. */
          size: {
            /** Sprite width in pixels. */
            width: number;
            /** Sprite height in pixels. */
            height: number;
          };
          /** Number of directional rotations. */
          directions: number;
          /**
           * When the character was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * Number of stored character animations.
           * @minimum 0
           */
          animationCount: number;
          /**
           * Template used to create the character.
           * @minLength 1
           */
          templateId: string;
          /**
           * Camera view used for the character.
           * @minLength 1
           */
          view?: string;
          /**
           * Public character preview URL.
           * @format uri
           */
          previewUrl?: string;
          /** User-defined character tags. */
          tags?: Array<string>;
          /**
           * Identifier grouping sibling character states.
           * @minLength 1
           */
          groupId?: string;
          /** Rotation image URLs keyed by direction. */
          rotationUrls?: Record<string, string | null>;
          /** Stored animation metadata. */
          animations?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one persisted PixelLab object with rotations, review frames, and animations. */
    "pixellab.get_object": {
      input: {
        /**
         * The PixelLab object identifier.
         * @minLength 1
         */
        objectId: string;
      };
      output: {
        /** A persisted PixelLab object. */
        object: {
          /**
           * Object identifier.
           * @minLength 1
           */
          id: string;
          /**
           * Friendly object name.
           * @minLength 1
           */
          name?: string;
          /**
           * Prompt used to create the object.
           * @minLength 1
           */
          prompt: string;
          /** Object sprite dimensions. */
          size: {
            /**
             * Sprite width in pixels.
             * @minimum 1
             */
            width: number;
            /**
             * Sprite height in pixels.
             * @minimum 1
             */
            height: number;
          };
          /** Number of object directions. */
          directions: number;
          /**
           * When the object was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * Camera view used for the object.
           * @minLength 1
           */
          view?: string;
          /**
           * Public object preview URL.
           * @format uri
           */
          previewUrl?: string;
          /** Rotation image URLs keyed by direction. */
          rotationUrls?: Record<string, string | null>;
          /** Stored image URLs keyed by provider field. */
          storageUrls?: Record<string, string>;
          /** Candidate image URLs while the object awaits review. */
          frameUrls?: Array<string>;
          /** Style settings used during generation. */
          styleSettings?: Record<string, unknown>;
          /** User-defined object tags. */
          tags?: Array<string>;
          /**
           * Current object status.
           * @minLength 1
           */
          status?: string;
          /**
           * Identifier grouping sibling object states.
           * @minLength 1
           */
          groupId?: string;
          /** Current generation progress percentage. */
          progressPercent?: number;
          /** Estimated seconds remaining. */
          etaSeconds?: number;
          /** Stored object animation groups. */
          animations?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one saved PixelLab UI asset and its generation status. */
    "pixellab.get_ui_asset": {
      input: {
        /**
         * The PixelLab UI asset identifier.
         * @format uuid
         */
        uiAssetId: string;
      };
      output: {
        /** A saved PixelLab UI asset. */
        asset: {
          /**
           * UI asset identifier.
           * @minLength 1
           */
          id: string;
          /**
           * Friendly UI asset name.
           * @minLength 1
           */
          name?: string;
          /**
           * Prompt used to generate the asset.
           * @minLength 1
           */
          prompt: string;
          /** UI asset dimensions. */
          size: {
            /** Image width in pixels. */
            width: number;
            /** Image height in pixels. */
            height: number;
          };
          /**
           * Public image URL when generation is complete.
           * @format uri
           */
          imageUrl?: string;
          /**
           * Current UI asset status.
           * @minLength 1
           */
          status?: string;
          /**
           * When the UI asset was created.
           * @format date-time
           */
          createdAt: string;
          /** Current generation progress percentage. */
          progressPercent?: number;
          /** Estimated seconds remaining. */
          etaSeconds?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Inpaint a masked area synchronously with PixelLab's original image model. */
    "pixellab.inpaint_image_legacy": {
      input: {
        /**
         * Description of what to generate in the masked area.
         * @minLength 1
         */
        description: string;
        /** Image dimensions. */
        imageSize: {
          /**
           * Image width from 16 to 200 pixels.
           * @minimum 16
           * @maximum 200
           */
          width: number;
          /**
           * Image height from 16 to 200 pixels.
           * @minimum 16
           * @maximum 200
           */
          height: number;
        };
        /**
         * The PNG or JPEG image to edit. Provide a public PNG or JPEG URL.
         * @format uri
         */
        inpaintingImage: string;
        /**
         * A mask where white is generated and black is preserved. Provide a public PNG or JPEG URL.
         * @format uri
         */
        maskImage: string;
        /**
         * How closely to follow the description.
         * @minimum 1
         * @maximum 10
         * @default 3
         */
        textGuidanceScale?: number;
        /** Pixel-art outline style. */
        outline?: "single color black outline" | "single color outline" | "selective outline" | "lineless";
        /** Pixel-art shading style. */
        shading?: "flat shading" | "basic shading" | "medium shading" | "detailed shading" | "highly detailed shading";
        /** Pixel-art detail level. */
        detail?: "low detail" | "medium detail" | "highly detailed";
        /** Camera view angle. */
        view?: "side" | "low top-down" | "high top-down";
        /** Direction the subject faces. */
        direction?: "north" | "north-east" | "east" | "south-east" | "south" | "south-west" | "west" | "north-west";
        /**
         * Whether to generate an isometric view.
         * @default false
         */
        isometric?: boolean;
        /**
         * Whether to use oblique projection.
         * @default false
         */
        obliqueProjection?: boolean;
        /**
         * Whether to generate a transparent background.
         * @default false
         */
        noBackground?: boolean;
        /**
         * Optional PNG or JPEG initial image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        initImage?: string;
        /**
         * Strength of the initial image influence.
         * @minimum 1
         * @maximum 999
         * @default 300
         */
        initImageStrength?: number;
        /**
         * Optional PNG or JPEG palette image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        colorImage?: string;
        /** Seed for reproducible generation. */
        seed?: number;
      };
      output: {
        /** A generated image stored in OOMOL file transit. */
        image: {
          /**
           * The public URL used to download the generated image.
           * @format uri
           */
          transitUrl: string;
          /**
           * The generated image size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /**
           * The generated image filename.
           * @minLength 1
           */
          name: string;
          /**
           * The generated image MIME type.
           * @minLength 1
           */
          mimeType: string;
        };
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** List persisted PixelLab characters with offset pagination. */
    "pixellab.list_characters": {
      input: {
        /**
         * Maximum characters to return.
         * @minimum 1
         * @maximum 100
         * @default 50
         */
        limit?: number;
        /**
         * Number of characters to skip.
         * @minimum 0
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** Persisted PixelLab characters. */
        characters: Array<{
          /**
           * Character identifier.
           * @minLength 1
           */
          id: string;
          /**
           * Character name.
           * @minLength 1
           */
          name: string;
          /**
           * Character creation prompt.
           * @minLength 1
           */
          prompt: string;
          /** Character sprite dimensions. */
          size: {
            /** Sprite width in pixels. */
            width: number;
            /** Sprite height in pixels. */
            height: number;
          };
          /** Number of directional rotations. */
          directions: number;
          /**
           * When the character was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * Number of stored character animations.
           * @minimum 0
           */
          animationCount: number;
          /**
           * Template used to create the character.
           * @minLength 1
           */
          templateId: string;
          /**
           * Camera view used for the character.
           * @minLength 1
           */
          view?: string;
          /**
           * Public character preview URL.
           * @format uri
           */
          previewUrl?: string;
          /** User-defined character tags. */
          tags?: Array<string>;
          /**
           * Identifier grouping sibling character states.
           * @minLength 1
           */
          groupId?: string;
          /** Rotation image URLs keyed by direction. */
          rotationUrls?: Record<string, string | null>;
          /** Stored animation metadata. */
          animations?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /**
         * Total persisted characters.
         * @minimum 0
         */
        total: number;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** List persisted PixelLab objects with offset pagination. */
    "pixellab.list_objects": {
      input: {
        /**
         * Maximum objects to return.
         * @minimum 1
         * @maximum 100
         * @default 50
         */
        limit?: number;
        /**
         * Number of objects to skip.
         * @minimum 0
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** Persisted PixelLab objects. */
        objects: Array<{
          /**
           * Object identifier.
           * @minLength 1
           */
          id: string;
          /**
           * Friendly object name.
           * @minLength 1
           */
          name?: string;
          /**
           * Prompt used to create the object.
           * @minLength 1
           */
          prompt: string;
          /** Object sprite dimensions. */
          size: {
            /**
             * Sprite width in pixels.
             * @minimum 1
             */
            width: number;
            /**
             * Sprite height in pixels.
             * @minimum 1
             */
            height: number;
          };
          /** Number of object directions. */
          directions: number;
          /**
           * When the object was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * Camera view used for the object.
           * @minLength 1
           */
          view?: string;
          /**
           * Public object preview URL.
           * @format uri
           */
          previewUrl?: string;
          /** Rotation image URLs keyed by direction. */
          rotationUrls?: Record<string, string | null>;
          /** Stored image URLs keyed by provider field. */
          storageUrls?: Record<string, string>;
          /** Candidate image URLs while the object awaits review. */
          frameUrls?: Array<string>;
          /** Style settings used during generation. */
          styleSettings?: Record<string, unknown>;
          /** User-defined object tags. */
          tags?: Array<string>;
          /**
           * Current object status.
           * @minLength 1
           */
          status?: string;
          /**
           * Identifier grouping sibling object states.
           * @minLength 1
           */
          groupId?: string;
          /** Current generation progress percentage. */
          progressPercent?: number;
          /** Estimated seconds remaining. */
          etaSeconds?: number;
          /** Stored object animation groups. */
          animations?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /**
         * Total persisted objects.
         * @minimum 0
         */
        total: number;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** List saved PixelLab UI assets with offset pagination. */
    "pixellab.list_ui_assets": {
      input: {
        /**
         * Maximum assets to return.
         * @minimum 1
         * @maximum 100
         * @default 50
         */
        limit?: number;
        /**
         * Number of assets to skip.
         * @minimum 0
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** Saved UI assets. */
        assets: Array<{
          /**
           * UI asset identifier.
           * @minLength 1
           */
          id: string;
          /**
           * Friendly UI asset name.
           * @minLength 1
           */
          name?: string;
          /**
           * Prompt used to generate the asset.
           * @minLength 1
           */
          prompt: string;
          /** UI asset dimensions. */
          size: {
            /** Image width in pixels. */
            width: number;
            /** Image height in pixels. */
            height: number;
          };
          /**
           * Public image URL when generation is complete.
           * @format uri
           */
          imageUrl?: string;
          /**
           * Current UI asset status.
           * @minLength 1
           */
          status?: string;
          /**
           * When the UI asset was created.
           * @format date-time
           */
          createdAt: string;
          /** Current generation progress percentage. */
          progressPercent?: number;
          /** Estimated seconds remaining. */
          etaSeconds?: number;
          [key: string]: unknown;
        }>;
        /**
         * Total saved UI assets.
         * @minimum 0
         */
        total: number;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Remove a pixel-art image background synchronously and return a transparent PNG. */
    "pixellab.remove_background": {
      input: {
        /**
         * The PNG or JPEG source image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        image: string;
        /** Source image dimensions. */
        imageSize: {
          /**
           * Image width from 1 to 400 pixels.
           * @minimum 1
           * @maximum 400
           */
          width: number;
          /**
           * Image height from 1 to 400 pixels.
           * @minimum 1
           * @maximum 400
           */
          height: number;
        };
        /**
         * Background removal mode. Complex mode is slower but handles detailed edges better.
         * @default "remove_simple_background"
         */
        backgroundRemovalTask?: "remove_simple_background" | "remove_complex_background";
        /**
         * Optional description of the foreground object.
         * @maxLength 500
         */
        text?: string;
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
      };
      output: {
        /** A generated image stored in OOMOL file transit. */
        image: {
          /**
           * The public URL used to download the generated image.
           * @format uri
           */
          transitUrl: string;
          /**
           * The generated image size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /**
           * The generated image filename.
           * @minLength 1
           */
          name: string;
          /**
           * The generated image MIME type.
           * @minLength 1
           */
          mimeType: string;
        };
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Resize pixel art synchronously while preserving its pixel-art appearance. */
    "pixellab.resize_image": {
      input: {
        /**
         * Description of the depicted character or object.
         * @minLength 1
         * @maxLength 2000
         */
        description: string;
        /**
         * The PNG or JPEG pixel-art image to resize. Provide a public PNG or JPEG URL.
         * @format uri
         */
        referenceImage: string;
        /** Pixel-art image dimensions. */
        referenceImageSize: {
          /**
           * Image width from 16 to 200 pixels.
           * @minimum 16
           * @maximum 200
           */
          width: number;
          /**
           * Image height from 16 to 200 pixels.
           * @minimum 16
           * @maximum 200
           */
          height: number;
        };
        /** Pixel-art image dimensions. */
        targetSize: {
          /**
           * Image width from 16 to 200 pixels.
           * @minimum 16
           * @maximum 200
           */
          width: number;
          /**
           * Image height from 16 to 200 pixels.
           * @minimum 16
           * @maximum 200
           */
          height: number;
        };
        /** Camera view angle. */
        view?: "side" | "low top-down" | "high top-down";
        /** Direction the subject faces. */
        direction?: "north" | "north-east" | "east" | "south-east" | "south" | "south-west" | "west" | "north-west";
        /**
         * Whether the image uses isometric perspective.
         * @default false
         */
        isometric?: boolean;
        /**
         * Whether the image uses oblique projection.
         * @default false
         */
        obliqueProjection?: boolean;
        /**
         * Whether to remove the output background.
         * @default false
         */
        noBackground?: boolean;
        /**
         * Optional PNG or JPEG palette image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        colorImage?: string;
        /**
         * Optional PNG or JPEG initial output guide. Provide a public PNG or JPEG URL.
         * @format uri
         */
        initImage?: string;
        /**
         * Strength of the initial image influence.
         * @minimum 0
         * @maximum 999
         * @default 150
         */
        initImageStrength?: number;
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
      };
      output: {
        /** A generated image stored in OOMOL file transit. */
        image: {
          /**
           * The public URL used to download the generated image.
           * @format uri
           */
          transitUrl: string;
          /**
           * The generated image size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /**
           * The generated image filename.
           * @minLength 1
           */
          name: string;
          /**
           * The generated image MIME type.
           * @minLength 1
           */
          mimeType: string;
        };
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Rotate or tilt a pixel-art character or object synchronously. */
    "pixellab.rotate_image": {
      input: {
        /** Image dimensions. */
        imageSize: {
          /**
           * Image width from 16 to 200 pixels.
           * @minimum 16
           * @maximum 200
           */
          width: number;
          /**
           * Image height from 16 to 200 pixels.
           * @minimum 16
           * @maximum 200
           */
          height: number;
        };
        /**
         * The PNG or JPEG reference image to rotate. Provide a public PNG or JPEG URL.
         * @format uri
         */
        fromImage: string;
        /**
         * How closely to follow the source image.
         * @minimum 1
         * @maximum 20
         * @default 3
         */
        imageGuidanceScale?: number;
        /**
         * Tilt change in degrees.
         * @minimum -90
         * @maximum 90
         */
        viewChange?: number;
        /**
         * Direction change in degrees.
         * @minimum -180
         * @maximum 180
         */
        directionChange?: number;
        /** Camera view angle. */
        fromView?: "side" | "low top-down" | "high top-down";
        /** Camera view angle. */
        toView?: "side" | "low top-down" | "high top-down";
        /** Direction the subject faces. */
        fromDirection?: "north" | "north-east" | "east" | "south-east" | "south" | "south-west" | "west" | "north-west";
        /** Direction the subject faces. */
        toDirection?: "north" | "north-east" | "east" | "south-east" | "south" | "south-west" | "west" | "north-west";
        /**
         * Whether to generate an isometric view.
         * @default false
         */
        isometric?: boolean;
        /**
         * Whether to use oblique projection.
         * @default false
         */
        obliqueProjection?: boolean;
        /**
         * Optional PNG or JPEG initial image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        initImage?: string;
        /**
         * Strength of the initial image influence.
         * @minimum 1
         * @maximum 999
         * @default 300
         */
        initImageStrength?: number;
        /**
         * Optional black-and-white inpainting mask. Provide a public PNG or JPEG URL.
         * @format uri
         */
        maskImage?: string;
        /**
         * Optional PNG or JPEG palette image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        colorImage?: string;
        /** Seed for reproducible generation. */
        seed?: number;
      };
      output: {
        /** A generated image stored in OOMOL file transit. */
        image: {
          /**
           * The public URL used to download the generated image.
           * @format uri
           */
          transitUrl: string;
          /**
           * The generated image size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /**
           * The generated image filename.
           * @minLength 1
           */
          name: string;
          /**
           * The generated image MIME type.
           * @minLength 1
           */
          mimeType: string;
        };
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Keep selected candidate frames from a one-direction object review as individual objects. */
    "pixellab.select_object_frames": {
      input: {
        /**
         * Review-status PixelLab object identifier.
         * @minLength 1
         */
        objectId: string;
        /**
         * Zero-based candidate frame indices to keep.
         * @minItems 1
         */
        indices: Array<number>;
        /**
         * Optional tag applied to every created object.
         * @minLength 1
         */
        commonTag?: string;
      };
      output: {
        /** Identifiers of objects created from the selected frames. */
        createdObjectIds: Array<string>;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Submit one or more directional animation jobs for an existing PixelLab object. */
    "pixellab.start_animate_object": {
      input: {
        /**
         * Existing PixelLab object identifier.
         * @minLength 1
         */
        objectId: string;
        /**
         * Animation model. v3 is the recommended default.
         * @default "v3"
         */
        mode?: "pro" | "v3";
        /**
         * Motion to animate. May be omitted when extending an existing group.
         * @minLength 1
         * @maxLength 1000
         */
        animationDescription?: string;
        /** Directions to animate for an eight-direction object. */
        directions?: Array<"north" | "north-east" | "east" | "south-east" | "south" | "south-west" | "west" | "north-west">;
        /**
         * Existing animation group to extend with additional directions.
         * @format uuid
         */
        animationGroupId?: string;
        /**
         * Friendly animation name used in exports.
         * @minLength 1
         */
        displayName?: string;
        /**
         * Frames per direction. In v3 mode this must be even and between 4 and 16.
         * @minimum 1
         */
        frameCount?: number;
        /**
         * Whether to regenerate directions already present in the animation group.
         * @default false
         */
        replaceExisting?: boolean;
        /**
         * Custom starting pose for one direction in v3 mode. Provide a public PNG or JPEG URL.
         * @format uri
         */
        customStartFrame?: string;
        /**
         * Interpolation target pose for one direction in v3 mode. Provide a public PNG or JPEG URL.
         * @format uri
         */
        endFrame?: string;
        /**
         * Whether to store the input reference as frame zero in v3 mode.
         * @default true
         */
        keepFirstFrame?: boolean;
        /**
         * Whether to expand animationDescription before v3 generation.
         * @default false
         */
        enhancePrompt?: boolean;
      };
      output: {
        /**
         * Animation group identifier used to add more directions later.
         * @format uuid
         */
        animationGroupId: string;
        /** Animation model used. */
        mode: "pro" | "v3";
        /**
         * Frames generated for each submitted direction.
         * @minimum 1
         */
        frameCount: number;
        /**
         * Friendly animation name.
         * @minLength 1
         */
        displayName?: string;
        /**
         * Motion description used for generation.
         * @minLength 1
         */
        description: string;
        /**
         * Animated object identifier.
         * @minLength 1
         */
        objectId: string;
        /** Per-direction background job submissions. */
        submissions: Array<{
          /**
           * Direction being animated.
           * @minLength 1
           */
          direction: string;
          /** Submission status. */
          status: "queued" | "rate_limited";
          /**
           * Background job identifier when the direction was queued.
           * @minLength 1
           */
          jobId?: string;
          /**
           * Stored animation identifier when available.
           * @minLength 1
           */
          animationId?: string;
        }>;
        /**
         * Expanded motion description when prompt enhancement was requested.
         * @minLength 1
         */
        enhancedPrompt?: string;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
        /** PixelLab usage charged for the operation. */
        enhanceUsage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start Pro conversion of a PNG or JPEG image to automatically scaled pixel art. */
    "pixellab.start_convert_to_pixel_art_pro": {
      input: {
        /**
         * The PNG or JPEG source image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        image: string;
        /**
         * Optional pixel-art style instructions.
         * @minLength 1
         * @maxLength 2000
         */
        description?: string;
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
      };
      output: {
        /**
         * The background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start creation of a persisted PixelLab character with four directional rotations. */
    "pixellab.start_create_character_4_directions": {
      input: {
        /**
         * Character description and display prompt.
         * @minLength 1
         * @maxLength 2000
         */
        description: string;
        /** Character generation dimensions. */
        imageSize: {
          /**
           * Image width from 16 to 128 pixels.
           * @minimum 16
           * @maximum 128
           */
          width: number;
          /**
           * Image height from 16 to 128 pixels.
           * @minimum 16
           * @maximum 128
           */
          height: number;
        };
        /**
         * How closely to follow the character description.
         * @minimum 1
         * @maximum 20
         * @default 8
         */
        textGuidanceScale?: number;
        /** Pixel-art outline style. */
        outline?: "single color black outline" | "single color outline" | "selective outline" | "lineless";
        /** Pixel-art shading style. */
        shading?: "flat shading" | "basic shading" | "medium shading" | "detailed shading" | "highly detailed shading";
        /** Pixel-art detail level. */
        detail?: "low detail" | "medium detail" | "highly detailed";
        /**
         * Character camera view.
         * @default "low top-down"
         */
        view?: "low top-down" | "high top-down" | "side";
        /**
         * Whether to generate an isometric character.
         * @default false
         */
        isometric?: boolean;
        /**
         * Optional PNG or JPEG palette image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        colorImage?: string;
        /**
         * Whether to force colors from colorImage.
         * @default false
         */
        forceColors?: boolean;
        /**
         * Body template identifier, such as mannequin, bear, cat, dog, horse, or lion.
         * @minLength 1
         */
        templateId?: string;
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
      };
      output: {
        /**
         * Background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /**
         * Character identifier available immediately.
         * @minLength 1
         */
        characterId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /**
         * Enhanced character prompt when requested.
         * @minLength 1
         */
        enhancedPrompt?: string;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
        /** PixelLab usage charged for the operation. */
        enhanceUsage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start creation of a persisted PixelLab character with eight directional rotations. */
    "pixellab.start_create_character_8_directions": {
      input: {
        /**
         * Character description and display prompt.
         * @minLength 1
         * @maxLength 2000
         */
        description: string;
        /** Character generation dimensions. */
        imageSize: {
          /**
           * Image width from 16 to 128 pixels.
           * @minimum 16
           * @maximum 128
           */
          width: number;
          /**
           * Image height from 16 to 128 pixels.
           * @minimum 16
           * @maximum 128
           */
          height: number;
        };
        /**
         * Standard template generation or higher-quality Pro generation.
         * @default "standard"
         */
        mode?: "standard" | "pro";
        /**
         * How closely to follow the character description.
         * @minimum 1
         * @maximum 20
         * @default 8
         */
        textGuidanceScale?: number;
        /** Pixel-art outline style. */
        outline?: "single color black outline" | "single color outline" | "selective outline" | "lineless";
        /** Pixel-art shading style. */
        shading?: "flat shading" | "basic shading" | "medium shading" | "detailed shading" | "highly detailed shading";
        /** Pixel-art detail level. */
        detail?: "low detail" | "medium detail" | "highly detailed";
        /**
         * Character camera view.
         * @default "low top-down"
         */
        view?: "low top-down" | "high top-down" | "side";
        /**
         * Whether to generate an isometric character.
         * @default false
         */
        isometric?: boolean;
        /**
         * Optional PNG or JPEG palette image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        colorImage?: string;
        /**
         * Whether to force colors from colorImage.
         * @default false
         */
        forceColors?: boolean;
        /**
         * Body template identifier, such as mannequin, bear, cat, dog, horse, or lion.
         * @minLength 1
         */
        templateId?: string;
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
      };
      output: {
        /**
         * Background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /**
         * Character identifier available immediately.
         * @minLength 1
         */
        characterId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /**
         * Enhanced character prompt when requested.
         * @minLength 1
         */
        enhancedPrompt?: string;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
        /** PixelLab usage charged for the operation. */
        enhanceUsage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start one or more background jobs that add an animation to a persisted character. */
    "pixellab.start_create_character_animation": {
      input: {
        /**
         * Existing PixelLab character identifier.
         * @minLength 1
         */
        characterId: string;
        /**
         * Friendly name for the animation.
         * @minLength 1
         */
        animationName?: string;
        /**
         * Optional character description override.
         * @minLength 1
         * @maxLength 2000
         */
        description?: string;
        /**
         * Description of the custom action to animate.
         * @minLength 1
         */
        actionDescription?: string;
        /** Animation mode. */
        mode?: "template" | "v3" | "pro";
        /**
         * Template animation identifier for template mode.
         * @minLength 1
         */
        templateAnimationId?: string;
        /**
         * Number of v3 animation frames; must be even.
         * @minimum 4
         * @maximum 16
         * @default 8
         */
        frameCount?: number;
        /**
         * Optional custom start frame for single-direction v3 mode. Provide a public PNG or JPEG URL.
         * @format uri
         */
        customStartFrame?: string;
        /**
         * Optional interpolation target frame for single-direction v3 mode. Provide a public PNG or JPEG URL.
         * @format uri
         */
        endFrame?: string;
        /**
         * Whether to store the reference as frame zero.
         * @default true
         */
        keepFirstFrame?: boolean;
        /**
         * Directions to animate.
         * @minItems 1
         */
        directions?: Array<string>;
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
        /**
         * Whether to enhance a v3 action prompt first.
         * @default false
         */
        enhancePrompt?: boolean;
      };
      output: {
        /** Background job identifiers, one per direction. */
        jobIds: Array<string>;
        /** Directions being animated. */
        directions: Array<string>;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /**
         * Enhanced action description when requested.
         * @minLength 1
         */
        enhancedPrompt?: string;
        /** PixelLab usage charged for the operation. */
        enhanceUsage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start Pro creation of a persisted eight-direction PixelLab character. */
    "pixellab.start_create_character_pro": {
      input: {
        /**
         * Description of the character to generate.
         * @minLength 1
         * @maxLength 2000
         */
        description: string;
        /** Pro character frame dimensions. */
        imageSize: {
          /**
           * Image width from 32 to 168 pixels.
           * @minimum 32
           * @maximum 168
           */
          width: number;
          /**
           * Image height from 32 to 168 pixels.
           * @minimum 32
           * @maximum 168
           */
          height: number;
        };
        /**
         * How PixelLab should use the supplied images.
         * @default "create_with_style"
         */
        method?: "create_with_style" | "create_from_concept" | "rotate_character";
        /**
         * Character camera view.
         * @default "low top-down"
         */
        view?: "low top-down" | "high top-down" | "side";
        /**
         * Body template identifier.
         * @minLength 1
         */
        templateId?: string;
        /**
         * Optional concept image, up to 1024 by 1024 pixels. Provide a public PNG or JPEG URL.
         * @format uri
         */
        conceptImage?: string;
        /**
         * Optional style or character reference image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        referenceImage?: string;
        /**
         * Additional style guidance.
         * @maxLength 2000
         */
        styleDescription?: string;
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
        /**
         * Whether to generate transparent frames.
         * @default true
         */
        noBackground?: boolean;
      };
      output: {
        /**
         * Background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /**
         * Character identifier available immediately.
         * @minLength 1
         */
        characterId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /**
         * Enhanced character prompt when requested.
         * @minLength 1
         */
        enhancedPrompt?: string;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
        /** PixelLab usage charged for the operation. */
        enhanceUsage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start creation of an edited state for an existing persisted character. */
    "pixellab.start_create_character_state": {
      input: {
        /**
         * Existing PixelLab character identifier.
         * @minLength 1
         */
        characterId: string;
        /**
         * Description of the new character state.
         * @minLength 1
         * @maxLength 1000
         */
        editDescription: string;
        /**
         * Whether to generate transparent frames.
         * @default true
         */
        noBackground?: boolean;
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
        /**
         * Whether to preserve the source character palette.
         * @default false
         */
        useColorPaletteFromReference?: boolean;
      };
      output: {
        /**
         * Background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /**
         * Character identifier available immediately.
         * @minLength 1
         */
        characterId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /**
         * Enhanced character prompt when requested.
         * @minLength 1
         */
        enhancedPrompt?: string;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
        /** PixelLab usage charged for the operation. */
        enhanceUsage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start v3 creation or rotation of a persisted eight-direction PixelLab character. */
    "pixellab.start_create_character_v3": {
      input: {
        /**
         * Character description and default display name.
         * @minLength 1
         * @maxLength 2000
         */
        description: string;
        /**
         * Optional south-facing reference image, up to 256 by 256 pixels. Provide a public PNG or JPEG URL.
         * @format uri
         */
        referenceImage?: string;
        /** Character frame dimensions. */
        imageSize?: {
          /**
           * Image width from 32 to 256 pixels.
           * @minimum 32
           * @maximum 256
           */
          width: number;
          /**
           * Image height from 32 to 256 pixels.
           * @minimum 32
           * @maximum 256
           */
          height: number;
        };
        /**
         * Character camera view.
         * @default "low top-down"
         */
        view?: "low top-down" | "high top-down" | "side";
        /**
         * Body template identifier.
         * @minLength 1
         */
        templateId?: string;
        /**
         * Friendly character name.
         * @minLength 1
         */
        name?: string;
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
        /**
         * Whether to generate transparent frames.
         * @default true
         */
        noBackground?: boolean;
        /**
         * Outline guidance for from-scratch mode.
         * @minLength 1
         */
        outline?: string;
        /**
         * Detail guidance for from-scratch mode.
         * @minLength 1
         */
        detail?: string;
        /**
         * Whether to enhance the prompt first.
         * @default false
         */
        enhancePrompt?: boolean;
      };
      output: {
        /**
         * Background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /**
         * Character identifier available immediately.
         * @minLength 1
         */
        characterId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /**
         * Enhanced character prompt when requested.
         * @minLength 1
         */
        enhancedPrompt?: string;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
        /** PixelLab usage charged for the operation. */
        enhanceUsage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start creation of a persisted one-direction PixelLab object. */
    "pixellab.start_create_object_1_direction": {
      input: {
        /**
         * Description of the object or object set to generate.
         * @minLength 1
         * @maxLength 2000
         */
        description: string;
        /**
         * Square output size. Smaller sizes can produce several candidates for review.
         * @minimum 32
         * @maximum 256
         */
        size?: number;
        /**
         * Object camera view.
         * @default "top-down"
         */
        view?: "top-down" | "sidescroller";
        /** PNG or JPEG style references. Their dimensions determine output size, so omit size when using them. */
        styleImages?: Array<string>;
        /** Descriptions for individual candidates in a multi-object result. */
        itemDescriptions?: Array<string>;
      };
      output: {
        /**
         * Background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /**
         * Object identifier available immediately.
         * @minLength 1
         */
        objectId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /**
         * Number of candidate object frames being generated.
         * @minimum 1
         */
        candidateFrameCount: number;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start creation of a persisted PixelLab object with eight directional rotations. */
    "pixellab.start_create_object_8_directions": {
      input: {
        /**
         * Description of the object to generate.
         * @minLength 1
         * @maxLength 2000
         */
        description: string;
        /**
         * Square output size when no image reference is supplied.
         * @minimum 32
         * @maximum 168
         */
        size?: number;
        /**
         * Object camera view.
         * @default "low top-down"
         */
        view?: "low top-down" | "high top-down" | "side";
        /**
         * Exact object image to rotate into eight directions. Provide a public PNG or JPEG URL.
         * @format uri
         */
        referenceImage?: string;
        /**
         * Style image for a newly generated eight-direction object. Provide a public PNG or JPEG URL.
         * @format uri
         */
        styleImage?: string;
      };
      output: {
        /**
         * Background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /**
         * Object identifier available immediately.
         * @minLength 1
         */
        objectId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start creation of an edited state for an existing PixelLab object. */
    "pixellab.start_create_object_state": {
      input: {
        /**
         * Existing PixelLab object identifier.
         * @minLength 1
         */
        objectId: string;
        /**
         * Description of the new object state.
         * @minLength 1
         * @maxLength 1000
         */
        editDescription: string;
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
      };
      output: {
        /**
         * Background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /**
         * Object identifier available immediately.
         * @minLength 1
         */
        objectId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start creation of a saved PixelLab Pro UI panel asset. */
    "pixellab.start_create_ui_asset": {
      input: {
        /**
         * Style description for the UI panel.
         * @minLength 1
         * @maxLength 2000
         */
        description: string;
        /** UI panel dimensions. */
        imageSize?: {
          /**
           * Width from 192 to 688 pixels.
           * @minimum 192
           * @maximum 688
           * @default 256
           */
          width?: number;
          /**
           * Height from 192 to 688 pixels.
           * @minimum 192
           * @maximum 688
           * @default 256
           */
          height?: number;
        };
        /** Custom shapes placed on the virtual UI canvas. */
        pieces?: Array<{
          /**
           * Unique piece identifier.
           * @minLength 1
           */
          id: string;
          kind: "rounded_rect";
          /** Optional piece label. */
          label?: string;
          /** Left coordinate in the virtual canvas. */
          x: number;
          /** Top coordinate in the virtual canvas. */
          y: number;
          /** Rectangle width in the virtual canvas. */
          w: number;
          /** Rectangle height in the virtual canvas. */
          h: number;
          /**
           * Corner radius.
           * @default 0
           */
          radius?: number;
        } | {
          /**
           * Unique piece identifier.
           * @minLength 1
           */
          id: string;
          kind: "circle";
          /** Optional piece label. */
          label?: string;
          /** Center X coordinate in the virtual canvas. */
          x: number;
          /** Center Y coordinate in the virtual canvas. */
          y: number;
          /** Circle radius. */
          r: number;
        } | {
          /**
           * Unique piece identifier.
           * @minLength 1
           */
          id: string;
          kind: "polygon";
          /** Optional piece label. */
          label?: string;
          /** Center X coordinate in the virtual canvas. */
          x: number;
          /** Center Y coordinate in the virtual canvas. */
          y: number;
          /** Polygon radius. */
          r: number;
          /**
           * Number of polygon sides.
           * @minimum 3
           */
          sides: number;
          /**
           * Starting angle in radians.
           * @default 0
           */
          phase?: number;
        }>;
        /** Named UI elements to scaffold automatically. */
        elements?: Array<"button" | "icon_button" | "toolbar" | "tab" | "panel" | "window" | "health_bar" | "avatar" | "triangle" | "pentagon" | "hexagon" | "octagon">;
        /**
         * Optional PNG or JPEG style reference image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        styleImage?: string;
        /**
         * Optional palette specification.
         * @maxLength 200
         */
        colorPalette?: string;
        /**
         * Whether to remove the panel background.
         * @default true
         */
        noBackground?: boolean;
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
        /**
         * Friendly name for the saved UI asset.
         * @minLength 1
         */
        name?: string;
        /**
         * Optional PixelLab project identifier.
         * @minLength 1
         */
        projectId?: string;
      };
      output: {
        /**
         * Background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /**
         * UI asset identifier available immediately.
         * @minLength 1
         */
        uiAssetId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start a consistent Pro text-guided edit across animation frames. */
    "pixellab.start_edit_animation": {
      input: {
        /**
         * Edit instructions applied to every frame.
         * @minLength 1
         * @maxLength 2000
         */
        description: string;
        /**
         * Animation frames to edit.
         * @minItems 2
         * @maxItems 16
         */
        frames: Array<{
          /**
           * The PNG or JPEG animation frame. Provide a public PNG or JPEG URL.
           * @format uri
           */
          file: string;
          /**
           * Frame width from 1 to 512 pixels.
           * @minimum 1
           * @maximum 512
           */
          width: number;
          /**
           * Frame height from 1 to 512 pixels.
           * @minimum 1
           * @maximum 512
           */
          height: number;
        }>;
        /** Animation output dimensions. */
        imageSize: {
          /**
           * Image width from 16 to 256 pixels.
           * @minimum 16
           * @maximum 256
           */
          width: number;
          /**
           * Image height from 16 to 256 pixels.
           * @minimum 16
           * @maximum 256
           */
          height: number;
        };
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
        /**
         * Whether to remove frame backgrounds.
         * @default false
         */
        noBackground?: boolean;
      };
      output: {
        /**
         * The background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start PixelLab's original text-guided image editing operation. */
    "pixellab.start_edit_image_legacy": {
      input: {
        /**
         * The PNG or JPEG image to edit. Provide a public PNG or JPEG URL.
         * @format uri
         */
        image: string;
        /** Image dimensions. */
        imageSize: {
          /**
           * Image width from 16 to 400 pixels.
           * @minimum 16
           * @maximum 400
           */
          width: number;
          /**
           * Image height from 16 to 400 pixels.
           * @minimum 16
           * @maximum 400
           */
          height: number;
        };
        /**
         * Description of the edit to apply.
         * @minLength 1
         * @maxLength 500
         */
        description: string;
        /**
         * Target canvas width from 16 to 400 pixels.
         * @minimum 16
         * @maximum 400
         */
        width: number;
        /**
         * Target canvas height from 16 to 400 pixels.
         * @minimum 16
         * @maximum 400
         */
        height: number;
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
        /**
         * Whether to generate a transparent background.
         * @default true
         */
        noBackground?: boolean;
        /**
         * How closely to follow the edit description.
         * @minimum 1
         * @maximum 10
         * @default 8
         */
        textGuidanceScale?: number;
        /**
         * Optional color reference image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        colorImage?: string;
      };
      output: {
        /**
         * The background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start a consistent Pro edit across one or more pixel-art images. */
    "pixellab.start_edit_images": {
      input: {
        /**
         * Whether to guide the edit with text or a reference image.
         * @default "edit_with_text"
         */
        method?: "edit_with_text" | "edit_with_reference";
        /**
         * Images to edit consistently.
         * @minItems 1
         * @maxItems 16
         */
        editImages: Array<{
          /**
           * The PNG or JPEG image file. Provide a public PNG or JPEG URL.
           * @format uri
           */
          file: string;
          /**
           * Image width from 1 to 512 pixels.
           * @minimum 1
           * @maximum 512
           */
          width: number;
          /**
           * Image height from 1 to 512 pixels.
           * @minimum 1
           * @maximum 512
           */
          height: number;
        }>;
        /** Edited image output dimensions. */
        imageSize: {
          /**
           * Image width from 32 to 512 pixels.
           * @minimum 32
           * @maximum 512
           */
          width: number;
          /**
           * Image height from 32 to 512 pixels.
           * @minimum 32
           * @maximum 512
           */
          height: number;
        };
        /**
         * Edit instructions required by edit_with_text.
         * @minLength 1
         * @maxLength 2000
         */
        description?: string;
        /** A PNG or JPEG transit image up to 512 by 512 pixels. */
        referenceImage?: {
          /**
           * The PNG or JPEG image file. Provide a public PNG or JPEG URL.
           * @format uri
           */
          file: string;
          /**
           * Image width from 1 to 512 pixels.
           * @minimum 1
           * @maximum 512
           */
          width: number;
          /**
           * Image height from 1 to 512 pixels.
           * @minimum 1
           * @maximum 512
           */
          height: number;
        };
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
        /**
         * Whether to remove edited image backgrounds.
         * @default false
         */
        noBackground?: boolean;
      };
      output: {
        /**
         * The background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start Pro text-to-pixel-art generation with optional subject and style reference images. */
    "pixellab.start_generate_image": {
      input: {
        /**
         * Description of the image to generate.
         * @minLength 1
         * @maxLength 2000
         */
        description: string;
        /** Generated image dimensions. */
        imageSize: {
          /**
           * Image width from 16 to 792 pixels.
           * @minimum 16
           * @maximum 792
           */
          width: number;
          /**
           * Image height from 16 to 688 pixels.
           * @minimum 16
           * @maximum 688
           */
          height: number;
        };
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
        /**
         * Whether to remove the image background.
         * @default true
         */
        noBackground?: boolean;
        /**
         * Subject reference images, up to four.
         * @minItems 1
         * @maxItems 4
         */
        referenceImages?: Array<{
          /**
           * The PNG or JPEG reference image. Provide a public PNG or JPEG URL.
           * @format uri
           */
          file: string;
          /**
           * Reference image width in pixels.
           * @minimum 1
           */
          width: number;
          /**
           * Reference image height in pixels.
           * @minimum 1
           */
          height: number;
          /**
           * Optional instructions for how to use this reference.
           * @maxLength 500
           */
          usageDescription?: string;
        }>;
        /** A subject reference image and instructions for how PixelLab should use it. */
        styleImage?: {
          /**
           * The PNG or JPEG reference image. Provide a public PNG or JPEG URL.
           * @format uri
           */
          file: string;
          /**
           * Reference image width in pixels.
           * @minimum 1
           */
          width: number;
          /**
           * Reference image height in pixels.
           * @minimum 1
           */
          height: number;
          /**
           * Optional instructions for how to use this reference.
           * @maxLength 500
           */
          usageDescription?: string;
        };
        /** Features to copy from the style image. */
        styleOptions?: {
          /**
           * Whether to copy the color palette.
           * @default true
           */
          colorPalette?: boolean;
          /**
           * Whether to copy the outline style.
           * @default true
           */
          outline?: boolean;
          /**
           * Whether to copy the detail level.
           * @default true
           */
          detail?: boolean;
          /**
           * Whether to copy the shading style.
           * @default true
           */
          shading?: boolean;
        };
      };
      output: {
        /**
         * The background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start generation of eight directional rotations from one reference character frame. */
    "pixellab.start_generate_rotations": {
      input: {
        /**
         * The PNG or JPEG reference frame, up to 256 by 256 pixels. Provide a public PNG or JPEG URL.
         * @format uri
         */
        firstFrame: string;
        /** Whether to remove generated frame backgrounds. */
        noBackground?: boolean;
        /**
         * Seed for reproducible generation. Use 0 for random.
         * @minimum 0
         * @default 0
         */
        seed?: number;
      };
      output: {
        /**
         * The background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start Pro generation of eight directional rotations using a reference, style, or concept image. */
    "pixellab.start_generate_rotations_pro": {
      input: {
        /**
         * Rotation generation method.
         * @default "rotate_character"
         */
        method?: "rotate_character" | "create_with_style" | "create_from_concept";
        /** Rotation frame dimensions. */
        imageSize: {
          /**
           * Image width from 32 to 168 pixels.
           * @minimum 32
           * @maximum 168
           */
          width: number;
          /**
           * Image height from 32 to 168 pixels.
           * @minimum 32
           * @maximum 168
           */
          height: number;
        };
        /** A rotation reference image with its dimensions. */
        referenceImage?: {
          /**
           * The PNG or JPEG reference image. Provide a public PNG or JPEG URL.
           * @format uri
           */
          file: string;
          /**
           * Reference width from 1 to 1024 pixels.
           * @minimum 1
           * @maximum 1024
           */
          width: number;
          /**
           * Reference height from 1 to 1024 pixels.
           * @minimum 1
           * @maximum 1024
           */
          height: number;
        };
        /** A rotation reference image with its dimensions. */
        conceptImage?: {
          /**
           * The PNG or JPEG reference image. Provide a public PNG or JPEG URL.
           * @format uri
           */
          file: string;
          /**
           * Reference width from 1 to 1024 pixels.
           * @minimum 1
           * @maximum 1024
           */
          width: number;
          /**
           * Reference height from 1 to 1024 pixels.
           * @minimum 1
           * @maximum 1024
           */
          height: number;
        };
        /**
         * Description of the character or object.
         * @maxLength 2000
         */
        description?: string;
        /**
         * Description of the desired visual style.
         * @maxLength 500
         */
        styleDescription?: string;
        /**
         * Camera perspective.
         * @default "low top-down"
         */
        view?: "low top-down" | "high top-down" | "side";
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
        /**
         * Whether to remove image backgrounds.
         * @default true
         */
        noBackground?: boolean;
      };
      output: {
        /**
         * The background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start Pro generation of a pixel-art game UI element. */
    "pixellab.start_generate_ui": {
      input: {
        /**
         * Description of the UI element to generate.
         * @minLength 1
         * @maxLength 2000
         */
        description: string;
        /** Generated UI image dimensions. */
        imageSize?: {
          /**
           * Image width from 16 to 792 pixels.
           * @minimum 16
           * @maximum 792
           * @default 256
           */
          width?: number;
          /**
           * Image height from 16 to 688 pixels.
           * @minimum 16
           * @maximum 688
           * @default 256
           */
          height?: number;
        };
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
        /**
         * Whether to remove the UI element background.
         * @default true
         */
        noBackground?: boolean;
        /** A PNG or JPEG transit image with its pixel dimensions. */
        conceptImage?: {
          /**
           * The PNG or JPEG image file. Provide a public PNG or JPEG URL.
           * @format uri
           */
          file: string;
          /**
           * Image width in pixels.
           * @minimum 1
           */
          width: number;
          /**
           * Image height in pixels.
           * @minimum 1
           */
          height: number;
        };
        /**
         * Optional color palette specification.
         * @maxLength 200
         */
        colorPalette?: string;
      };
      output: {
        /**
         * The background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start Pro pixel-art generation that matches one to four supplied style images. */
    "pixellab.start_generate_with_style": {
      input: {
        /**
         * Style reference images to match.
         * @minItems 1
         * @maxItems 4
         */
        styleImages: Array<{
          /**
           * The PNG or JPEG image file. Provide a public PNG or JPEG URL.
           * @format uri
           */
          file: string;
          /**
           * Image width from 1 to 512 pixels.
           * @minimum 1
           * @maximum 512
           */
          width: number;
          /**
           * Image height from 1 to 512 pixels.
           * @minimum 1
           * @maximum 512
           */
          height: number;
        }>;
        /**
         * Description of what to generate.
         * @minLength 1
         * @maxLength 2000
         */
        description: string;
        /** Generated image dimensions. */
        imageSize: {
          /**
           * Image width from 16 to 512 pixels.
           * @minimum 16
           * @maximum 512
           */
          width: number;
          /**
           * Image height from 16 to 512 pixels.
           * @minimum 16
           * @maximum 512
           */
          height: number;
        };
        /**
         * Optional description of the style to match.
         * @maxLength 500
         */
        styleDescription?: string;
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
        /**
         * Whether to remove the image background.
         * @default true
         */
        noBackground?: boolean;
      };
      output: {
        /**
         * The background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start Pro mask-guided inpainting of a pixel-art image. */
    "pixellab.start_inpaint": {
      input: {
        /**
         * Description of what to generate in the masked area.
         * @minLength 1
         * @maxLength 2000
         */
        description: string;
        /**
         * The PNG or JPEG image to edit. Provide a public PNG or JPEG URL.
         * @format uri
         */
        image: string;
        /**
         * A PNG or JPEG mask where white is generated and black is preserved. Provide a public PNG or JPEG URL.
         * @format uri
         */
        maskImage: string;
        /** Inpainting image dimensions. */
        imageSize: {
          /**
           * Image width from 32 to 512 pixels.
           * @minimum 32
           * @maximum 512
           */
          width: number;
          /**
           * Image height from 32 to 512 pixels.
           * @minimum 32
           * @maximum 512
           */
          height: number;
        };
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
        /**
         * Whether to remove the generated background.
         * @default false
         */
        noBackground?: boolean;
        /**
         * Whether to crop generated content to the mask boundary.
         * @default true
         */
        cropToMask?: boolean;
      };
      output: {
        /**
         * The background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start Pro interpolation between two pixel-art keyframes. */
    "pixellab.start_interpolation": {
      input: {
        /** An animation frame with its source dimensions. */
        startImage: {
          /**
           * The PNG or JPEG animation frame. Provide a public PNG or JPEG URL.
           * @format uri
           */
          file: string;
          /**
           * Frame width from 1 to 512 pixels.
           * @minimum 1
           * @maximum 512
           */
          width: number;
          /**
           * Frame height from 1 to 512 pixels.
           * @minimum 1
           * @maximum 512
           */
          height: number;
        };
        /** An animation frame with its source dimensions. */
        endImage: {
          /**
           * The PNG or JPEG animation frame. Provide a public PNG or JPEG URL.
           * @format uri
           */
          file: string;
          /**
           * Frame width from 1 to 512 pixels.
           * @minimum 1
           * @maximum 512
           */
          width: number;
          /**
           * Frame height from 1 to 512 pixels.
           * @minimum 1
           * @maximum 512
           */
          height: number;
        };
        /**
         * Description of the transition between keyframes.
         * @minLength 1
         * @maxLength 500
         */
        action: string;
        /** Animation output dimensions. */
        imageSize: {
          /**
           * Image width from 32 to 256 pixels.
           * @minimum 32
           * @maximum 256
           */
          width: number;
          /**
           * Image height from 32 to 256 pixels.
           * @minimum 32
           * @maximum 256
           */
          height: number;
        };
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
        /**
         * Whether to remove frame backgrounds.
         * @default true
         */
        noBackground?: boolean;
      };
      output: {
        /**
         * The background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start asynchronous Pixflux pixel-art image generation. */
    "pixellab.start_pixflux_background": {
      input: {
        /**
         * Description of the image to generate.
         * @minLength 1
         */
        description: string;
        /** Pixflux output dimensions. */
        imageSize: {
          /**
           * Image width from 16 to 400 pixels.
           * @minimum 16
           * @maximum 400
           */
          width: number;
          /**
           * Image height from 16 to 400 pixels.
           * @minimum 16
           * @maximum 400
           */
          height: number;
        };
        /**
         * How closely to follow the text description.
         * @minimum 1
         * @maximum 20
         * @default 8
         */
        textGuidanceScale?: number;
        /** Pixel-art outline style. */
        outline?: "single color black outline" | "single color outline" | "selective outline" | "lineless";
        /** Pixel-art shading style. */
        shading?: "flat shading" | "basic shading" | "medium shading" | "detailed shading" | "highly detailed shading";
        /** Pixel-art detail level. */
        detail?: "low detail" | "medium detail" | "highly detailed";
        /** Camera view angle. */
        view?: "side" | "low top-down" | "high top-down";
        /** Direction the subject faces. */
        direction?: "north" | "north-east" | "east" | "south-east" | "south" | "south-west" | "west" | "north-west";
        /**
         * Whether to generate an isometric view.
         * @default false
         */
        isometric?: boolean;
        /**
         * Whether to generate a transparent background.
         * @default false
         */
        noBackground?: boolean;
        /**
         * Background removal mode. Complex mode is slower but handles detailed edges better.
         * @default "remove_simple_background"
         */
        backgroundRemovalTask?: "remove_simple_background" | "remove_complex_background";
        /**
         * Optional PNG or JPEG initial image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        initImage?: string;
        /**
         * Strength of the initial image influence.
         * @minimum 1
         * @maximum 999
         * @default 300
         */
        initImageStrength?: number;
        /**
         * Optional PNG or JPEG palette image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        colorImage?: string;
        /** Seed for reproducible generation. */
        seed?: number;
      };
      output: {
        /**
         * The background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start Pro conversion between a bust portrait and a full-body character sprite. */
    "pixellab.start_portrait_character_conversion": {
      input: {
        /**
         * Direction of the conversion.
         * @default "portrait_to_character"
         */
        direction?: "portrait_to_character" | "character_to_portrait";
        /**
         * The PNG or JPEG portrait or character image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        image: string;
        /**
         * Character camera view.
         * @default "low top-down"
         */
        view?: "low top-down" | "high top-down" | "side";
        /**
         * Output sprite size in pixels.
         * @default 64
         */
        resultSize?: 16 | 32 | 48 | 64 | 128 | 160;
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
      };
      output: {
        /**
         * The background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start an asynchronous PixelLab animation from a first frame and a text description of the character motion. */
    "pixellab.start_text_animation": {
      input: {
        /**
         * The PNG or JPEG first frame to animate, up to 256 by 256 pixels. Provide a public PNG or JPEG URL.
         * @format uri
         */
        firstFrame: string;
        /**
         * The motion to animate, such as walking, jumping, or attacking.
         * @minLength 1
         * @maxLength 1000
         */
        action: string;
        /**
         * An optional PNG or JPEG final frame used to guide interpolation, up to 256 by 256 pixels. Provide a public PNG or JPEG URL.
         * @format uri
         */
        lastFrame?: string;
        /**
         * Number of frames to generate. The value must be even.
         * @minimum 4
         * @maximum 16
         * @default 8
         */
        frameCount?: number;
        /**
         * Seed for reproducible generation. Use 0 for a random seed.
         * @minimum 0
         * @default 0
         */
        seed?: number;
        /** Whether PixelLab should remove the background from generated frames. */
        noBackground?: boolean;
        /**
         * Whether PixelLab should expand the action into a richer motion description.
         * @default false
         */
        enhancePrompt?: boolean;
      };
      output: {
        /**
         * The background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /**
         * The expanded motion description when prompt enhancement was requested.
         * @minLength 1
         */
        enhancedPrompt?: string;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
        /** PixelLab usage charged for the operation. */
        enhanceUsage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start Pro text-guided animation from a reference character image. */
    "pixellab.start_text_animation_pro": {
      input: {
        /**
         * The PNG or JPEG character reference image. Provide a public PNG or JPEG URL.
         * @format uri
         */
        referenceImage: string;
        /** Animation output dimensions. */
        referenceImageSize: {
          /**
           * Image width from 32 to 256 pixels.
           * @minimum 32
           * @maximum 256
           */
          width: number;
          /**
           * Image height from 32 to 256 pixels.
           * @minimum 32
           * @maximum 256
           */
          height: number;
        };
        /**
         * Description of the action to animate.
         * @minLength 1
         * @maxLength 500
         */
        action: string;
        /** Animation output dimensions. */
        imageSize: {
          /**
           * Image width from 32 to 256 pixels.
           * @minimum 32
           * @maximum 256
           */
          width: number;
          /**
           * Image height from 32 to 256 pixels.
           * @minimum 32
           * @maximum 256
           */
          height: number;
        };
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
        /**
         * Whether to remove frame backgrounds.
         * @default true
         */
        noBackground?: boolean;
        /**
         * Character camera view.
         * @default "none"
         */
        view?: "none" | "low top-down" | "high top-down" | "side";
        /**
         * Direction the character faces.
         * @default "none"
         */
        direction?: "none" | "south" | "east" | "west" | "north" | "south-east" | "south-west" | "north-east" | "north-west";
      };
      output: {
        /**
         * The background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Start Pro transfer of an outfit or appearance across animation frames. */
    "pixellab.start_transfer_outfit": {
      input: {
        /** An animation frame with its source dimensions. */
        referenceImage: {
          /**
           * The PNG or JPEG animation frame. Provide a public PNG or JPEG URL.
           * @format uri
           */
          file: string;
          /**
           * Frame width from 1 to 512 pixels.
           * @minimum 1
           * @maximum 512
           */
          width: number;
          /**
           * Frame height from 1 to 512 pixels.
           * @minimum 1
           * @maximum 512
           */
          height: number;
        };
        /**
         * Animation frames that should receive the outfit.
         * @minItems 2
         * @maxItems 16
         */
        frames: Array<{
          /**
           * The PNG or JPEG animation frame. Provide a public PNG or JPEG URL.
           * @format uri
           */
          file: string;
          /**
           * Frame width from 1 to 512 pixels.
           * @minimum 1
           * @maximum 512
           */
          width: number;
          /**
           * Frame height from 1 to 512 pixels.
           * @minimum 1
           * @maximum 512
           */
          height: number;
        }>;
        /** Animation output dimensions. */
        imageSize: {
          /**
           * Image width from 32 to 256 pixels.
           * @minimum 32
           * @maximum 256
           */
          width: number;
          /**
           * Image height from 32 to 256 pixels.
           * @minimum 32
           * @maximum 256
           */
          height: number;
        };
        /**
         * Seed for reproducible generation.
         * @minimum 0
         */
        seed?: number;
        /**
         * Whether to remove frame backgrounds.
         * @default false
         */
        noBackground?: boolean;
        /**
         * Optional view, direction, or transfer guidance.
         * @maxLength 2000
         */
        additionalInstructions?: string;
      };
      output: {
        /**
         * The background job identifier used for polling.
         * @minLength 1
         */
        jobId: string;
        /** The current PixelLab background job status. */
        status: "queued" | "processing" | "completed" | "failed";
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Replace the user-defined tags on a persisted PixelLab character. */
    "pixellab.update_character_tags": {
      input: {
        /**
         * The PixelLab character identifier.
         * @minLength 1
         */
        characterId: string;
        /**
         * Replacement character tags, up to 20.
         * @maxItems 20
         */
        tags: Array<string>;
      };
      output: {
        /** Updated character tags. */
        tags: Array<string>;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
    /** Replace the user-defined tags on a persisted PixelLab object. */
    "pixellab.update_object_tags": {
      input: {
        /**
         * The PixelLab object identifier.
         * @minLength 1
         */
        objectId: string;
        /**
         * Replacement object tags, up to 20.
         * @maxItems 20
         */
        tags: Array<string>;
      };
      output: {
        /** Updated object tags. */
        tags: Array<string>;
        /** PixelLab usage charged for the operation. */
        usage?: {
          /** The unit used for this charge. */
          type: "usd" | "generations";
          /** The amount charged in US dollars. */
          usd?: number;
          /** The number of subscription generations charged. */
          generations?: number;
        };
      };
    };
  }
}
