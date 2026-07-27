import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an asynchronous Gamma generation from text input. */
    "gamma.create_generation": {
      input: {
        /**
         * The text and image URLs Gamma should use for generation.
         * @minLength 1
         */
        inputText: string;
        /**
         * Additional instructions or context for the Gamma generation.
         * @maxLength 5000
         */
        additionalInstructions?: string;
        /** How Gamma should interpret the input text. */
        textMode: "generate" | "condense" | "preserve";
        /** The output format Gamma should generate. */
        format?: "presentation" | "document" | "social" | "webpage";
        /**
         * The target number of cards Gamma should generate.
         * @minimum 1
         * @maximum 75
         */
        numCards?: number;
        /** How Gamma should split the input across cards. */
        cardSplit?: "auto" | "inputTextBreaks";
        /**
         * The Gamma theme ID returned by the List Themes API or copied from the Gamma app.
         * @minLength 1
         */
        themeId?: string;
        /** Text generation settings forwarded to Gamma. */
        textOptions?: {
          /** How much text Gamma should generate for each card. */
          amount?: "brief" | "medium" | "detailed" | "extensive";
          /**
           * The desired tone for generated text.
           * @minLength 1
           */
          tone?: string;
          /**
           * The intended audience for the generated text.
           * @minLength 1
           */
          audience?: string;
          /**
           * The language Gamma should use in the generated text.
           * @minLength 1
           */
          language?: string;
          [key: string]: unknown;
        };
        /** Image generation settings forwarded to Gamma. */
        imageOptions?: {
          /** Where Gamma should source images from for the generation. */
          source?: "aiGenerated" | "pictographic" | "pexels" | "giphy" | "webAllImages" | "webFreeToUse" | "webFreeToUseCommercially" | "themeAccent" | "placeholder" | "noImages";
          /**
           * The image model Gamma should use for AI-generated images.
           * @minLength 1
           */
          model?: string;
          /**
           * The image style prompt Gamma should use.
           * @minLength 1
           */
          style?: string;
          /**
           * A named style preset Gamma should apply to AI-generated images.
           * @minLength 1
           */
          stylePreset?: string;
          [key: string]: unknown;
        };
        /** Card layout settings forwarded to Gamma. */
        cardOptions?: {
          /** The card or page dimensions Gamma should use for this generation. */
          dimensions?: "fluid" | "16x9" | "4x3" | "1x1" | "4x5" | "9x16" | "letter" | "a4" | "pageless";
          /** Header and footer settings for Gamma cards. */
          headerFooter?: {
            /** The content shown in the top-left. */
            topLeft?: {
              /** The header or footer content type. */
              type: "text";
              /** The text shown in the header or footer. */
              value: string;
            } | {
              /** The header or footer content type. */
              type: "image";
              /** Whether Gamma should use the theme logo or a custom image URL. */
              source: "themeLogo" | "custom";
              /**
               * The image URL used when `source` is `custom`.
               * @format uri
               */
              src?: string | null;
              /** The image size Gamma should use in the header or footer. */
              size?: "sm" | "md" | "lg" | "xl" | null;
            } | {
              /** The header or footer content type. */
              type: "cardNumber";
            };
            /** The content shown in the top-center. */
            topCenter?: {
              /** The header or footer content type. */
              type: "text";
              /** The text shown in the header or footer. */
              value: string;
            } | {
              /** The header or footer content type. */
              type: "image";
              /** Whether Gamma should use the theme logo or a custom image URL. */
              source: "themeLogo" | "custom";
              /**
               * The image URL used when `source` is `custom`.
               * @format uri
               */
              src?: string | null;
              /** The image size Gamma should use in the header or footer. */
              size?: "sm" | "md" | "lg" | "xl" | null;
            } | {
              /** The header or footer content type. */
              type: "cardNumber";
            };
            /** The content shown in the top-right. */
            topRight?: {
              /** The header or footer content type. */
              type: "text";
              /** The text shown in the header or footer. */
              value: string;
            } | {
              /** The header or footer content type. */
              type: "image";
              /** Whether Gamma should use the theme logo or a custom image URL. */
              source: "themeLogo" | "custom";
              /**
               * The image URL used when `source` is `custom`.
               * @format uri
               */
              src?: string | null;
              /** The image size Gamma should use in the header or footer. */
              size?: "sm" | "md" | "lg" | "xl" | null;
            } | {
              /** The header or footer content type. */
              type: "cardNumber";
            };
            /** The content shown in the bottom-left. */
            bottomLeft?: {
              /** The header or footer content type. */
              type: "text";
              /** The text shown in the header or footer. */
              value: string;
            } | {
              /** The header or footer content type. */
              type: "image";
              /** Whether Gamma should use the theme logo or a custom image URL. */
              source: "themeLogo" | "custom";
              /**
               * The image URL used when `source` is `custom`.
               * @format uri
               */
              src?: string | null;
              /** The image size Gamma should use in the header or footer. */
              size?: "sm" | "md" | "lg" | "xl" | null;
            } | {
              /** The header or footer content type. */
              type: "cardNumber";
            };
            /** The content shown in the bottom-center. */
            bottomCenter?: {
              /** The header or footer content type. */
              type: "text";
              /** The text shown in the header or footer. */
              value: string;
            } | {
              /** The header or footer content type. */
              type: "image";
              /** Whether Gamma should use the theme logo or a custom image URL. */
              source: "themeLogo" | "custom";
              /**
               * The image URL used when `source` is `custom`.
               * @format uri
               */
              src?: string | null;
              /** The image size Gamma should use in the header or footer. */
              size?: "sm" | "md" | "lg" | "xl" | null;
            } | {
              /** The header or footer content type. */
              type: "cardNumber";
            };
            /** The content shown in the bottom-right. */
            bottomRight?: {
              /** The header or footer content type. */
              type: "text";
              /** The text shown in the header or footer. */
              value: string;
            } | {
              /** The header or footer content type. */
              type: "image";
              /** Whether Gamma should use the theme logo or a custom image URL. */
              source: "themeLogo" | "custom";
              /**
               * The image URL used when `source` is `custom`.
               * @format uri
               */
              src?: string | null;
              /** The image size Gamma should use in the header or footer. */
              size?: "sm" | "md" | "lg" | "xl" | null;
            } | {
              /** The header or footer content type. */
              type: "cardNumber";
            };
            /** Whether Gamma hides the header and footer on the first card. */
            hideFromFirstCard?: boolean;
            /** Whether Gamma hides the header and footer on the last card. */
            hideFromLastCard?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Sharing and access settings forwarded to Gamma. */
        sharingOptions?: {
          /** The access level Gamma should grant to workspace members. */
          workspaceAccess?: "noAccess" | "view" | "comment" | "edit" | "fullAccess";
          /** The access level Gamma should grant to users outside the workspace. */
          externalAccess?: "noAccess" | "view" | "comment" | "edit";
          /** The email recipients Gamma should notify after generation. */
          emailOptions?: {
            /**
             * The email recipients Gamma should share the result with.
             * @minItems 1
             */
            recipients: Array<string>;
            /** The access level Gamma should grant to shared email recipients. */
            access: "view" | "comment" | "edit" | "fullAccess";
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /**
         * The folder IDs where Gamma should place the generated content.
         * @minItems 1
         * @maxItems 10
         */
        folderIds?: Array<string>;
        /** The export format Gamma should prepare when generation completes. */
        exportAs?: "pdf" | "pptx" | "png";
      };
      output: {
        /** The Gamma generation job that was created. */
        generation: {
          /** The Gamma generation job identifier. */
          generationId: string;
          /** The current status of the Gamma generation. */
          status?: "pending" | "completed" | "failed";
          /** The Gamma document ID returned when available. */
          gammaId?: string;
          /**
           * The Gamma document URL returned when complete.
           * @format uri
           */
          gammaUrl?: string;
          /**
           * The temporary export download URL returned when complete.
           * @format uri
           */
          exportUrl?: string;
          /** Warnings Gamma returned because some generation settings were ignored. */
          warnings?: string;
          /** The error payload Gamma returned for a failed generation. */
          error?: {
            /** The error message Gamma returned for a failed generation. */
            message: string;
            /** The HTTP-like status code Gamma returned for a failed generation. */
            statusCode: number;
          };
          /** Credit usage information returned for the generation. */
          credits?: {
            /** The number of credits deducted for this generation. */
            deducted: number;
            /** The number of credits remaining after this generation. */
            remaining: number;
          };
        };
      };
    };
    /** Create a Gamma generation from text input and keep polling until it completes, fails, or times out. */
    "gamma.create_generation_and_wait": {
      input: {
        /**
         * The text and image URLs Gamma should use for generation.
         * @minLength 1
         */
        inputText: string;
        /**
         * Additional instructions or context for the Gamma generation.
         * @maxLength 5000
         */
        additionalInstructions?: string;
        /** How Gamma should interpret the input text. */
        textMode: "generate" | "condense" | "preserve";
        /** The output format Gamma should generate. */
        format?: "presentation" | "document" | "social" | "webpage";
        /**
         * The target number of cards Gamma should generate.
         * @minimum 1
         * @maximum 75
         */
        numCards?: number;
        /** How Gamma should split the input across cards. */
        cardSplit?: "auto" | "inputTextBreaks";
        /**
         * The Gamma theme ID returned by the List Themes API or copied from the Gamma app.
         * @minLength 1
         */
        themeId?: string;
        /** Text generation settings forwarded to Gamma. */
        textOptions?: {
          /** How much text Gamma should generate for each card. */
          amount?: "brief" | "medium" | "detailed" | "extensive";
          /**
           * The desired tone for generated text.
           * @minLength 1
           */
          tone?: string;
          /**
           * The intended audience for the generated text.
           * @minLength 1
           */
          audience?: string;
          /**
           * The language Gamma should use in the generated text.
           * @minLength 1
           */
          language?: string;
          [key: string]: unknown;
        };
        /** Image generation settings forwarded to Gamma. */
        imageOptions?: {
          /** Where Gamma should source images from for the generation. */
          source?: "aiGenerated" | "pictographic" | "pexels" | "giphy" | "webAllImages" | "webFreeToUse" | "webFreeToUseCommercially" | "themeAccent" | "placeholder" | "noImages";
          /**
           * The image model Gamma should use for AI-generated images.
           * @minLength 1
           */
          model?: string;
          /**
           * The image style prompt Gamma should use.
           * @minLength 1
           */
          style?: string;
          /**
           * A named style preset Gamma should apply to AI-generated images.
           * @minLength 1
           */
          stylePreset?: string;
          [key: string]: unknown;
        };
        /** Card layout settings forwarded to Gamma. */
        cardOptions?: {
          /** The card or page dimensions Gamma should use for this generation. */
          dimensions?: "fluid" | "16x9" | "4x3" | "1x1" | "4x5" | "9x16" | "letter" | "a4" | "pageless";
          /** Header and footer settings for Gamma cards. */
          headerFooter?: {
            /** The content shown in the top-left. */
            topLeft?: {
              /** The header or footer content type. */
              type: "text";
              /** The text shown in the header or footer. */
              value: string;
            } | {
              /** The header or footer content type. */
              type: "image";
              /** Whether Gamma should use the theme logo or a custom image URL. */
              source: "themeLogo" | "custom";
              /**
               * The image URL used when `source` is `custom`.
               * @format uri
               */
              src?: string | null;
              /** The image size Gamma should use in the header or footer. */
              size?: "sm" | "md" | "lg" | "xl" | null;
            } | {
              /** The header or footer content type. */
              type: "cardNumber";
            };
            /** The content shown in the top-center. */
            topCenter?: {
              /** The header or footer content type. */
              type: "text";
              /** The text shown in the header or footer. */
              value: string;
            } | {
              /** The header or footer content type. */
              type: "image";
              /** Whether Gamma should use the theme logo or a custom image URL. */
              source: "themeLogo" | "custom";
              /**
               * The image URL used when `source` is `custom`.
               * @format uri
               */
              src?: string | null;
              /** The image size Gamma should use in the header or footer. */
              size?: "sm" | "md" | "lg" | "xl" | null;
            } | {
              /** The header or footer content type. */
              type: "cardNumber";
            };
            /** The content shown in the top-right. */
            topRight?: {
              /** The header or footer content type. */
              type: "text";
              /** The text shown in the header or footer. */
              value: string;
            } | {
              /** The header or footer content type. */
              type: "image";
              /** Whether Gamma should use the theme logo or a custom image URL. */
              source: "themeLogo" | "custom";
              /**
               * The image URL used when `source` is `custom`.
               * @format uri
               */
              src?: string | null;
              /** The image size Gamma should use in the header or footer. */
              size?: "sm" | "md" | "lg" | "xl" | null;
            } | {
              /** The header or footer content type. */
              type: "cardNumber";
            };
            /** The content shown in the bottom-left. */
            bottomLeft?: {
              /** The header or footer content type. */
              type: "text";
              /** The text shown in the header or footer. */
              value: string;
            } | {
              /** The header or footer content type. */
              type: "image";
              /** Whether Gamma should use the theme logo or a custom image URL. */
              source: "themeLogo" | "custom";
              /**
               * The image URL used when `source` is `custom`.
               * @format uri
               */
              src?: string | null;
              /** The image size Gamma should use in the header or footer. */
              size?: "sm" | "md" | "lg" | "xl" | null;
            } | {
              /** The header or footer content type. */
              type: "cardNumber";
            };
            /** The content shown in the bottom-center. */
            bottomCenter?: {
              /** The header or footer content type. */
              type: "text";
              /** The text shown in the header or footer. */
              value: string;
            } | {
              /** The header or footer content type. */
              type: "image";
              /** Whether Gamma should use the theme logo or a custom image URL. */
              source: "themeLogo" | "custom";
              /**
               * The image URL used when `source` is `custom`.
               * @format uri
               */
              src?: string | null;
              /** The image size Gamma should use in the header or footer. */
              size?: "sm" | "md" | "lg" | "xl" | null;
            } | {
              /** The header or footer content type. */
              type: "cardNumber";
            };
            /** The content shown in the bottom-right. */
            bottomRight?: {
              /** The header or footer content type. */
              type: "text";
              /** The text shown in the header or footer. */
              value: string;
            } | {
              /** The header or footer content type. */
              type: "image";
              /** Whether Gamma should use the theme logo or a custom image URL. */
              source: "themeLogo" | "custom";
              /**
               * The image URL used when `source` is `custom`.
               * @format uri
               */
              src?: string | null;
              /** The image size Gamma should use in the header or footer. */
              size?: "sm" | "md" | "lg" | "xl" | null;
            } | {
              /** The header or footer content type. */
              type: "cardNumber";
            };
            /** Whether Gamma hides the header and footer on the first card. */
            hideFromFirstCard?: boolean;
            /** Whether Gamma hides the header and footer on the last card. */
            hideFromLastCard?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Sharing and access settings forwarded to Gamma. */
        sharingOptions?: {
          /** The access level Gamma should grant to workspace members. */
          workspaceAccess?: "noAccess" | "view" | "comment" | "edit" | "fullAccess";
          /** The access level Gamma should grant to users outside the workspace. */
          externalAccess?: "noAccess" | "view" | "comment" | "edit";
          /** The email recipients Gamma should notify after generation. */
          emailOptions?: {
            /**
             * The email recipients Gamma should share the result with.
             * @minItems 1
             */
            recipients: Array<string>;
            /** The access level Gamma should grant to shared email recipients. */
            access: "view" | "comment" | "edit" | "fullAccess";
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /**
         * The folder IDs where Gamma should place the generated content.
         * @minItems 1
         * @maxItems 10
         */
        folderIds?: Array<string>;
        /** The export format Gamma should prepare when generation completes. */
        exportAs?: "pdf" | "pptx" | "png";
        /**
         * The maximum number of seconds to wait before returning a timed-out result.
         * @minimum 0
         */
        timeoutSeconds?: number;
        /**
         * The number of seconds to wait between polling attempts.
         * @minimum 0
         */
        pollIntervalSeconds?: number;
      };
      output: {
        /** The latest Gamma generation returned by polling. */
        generation: {
          /** The Gamma generation job identifier. */
          generationId: string;
          /** The current status of the Gamma generation. */
          status?: "pending" | "completed" | "failed";
          /** The Gamma document ID returned when available. */
          gammaId?: string;
          /**
           * The Gamma document URL returned when complete.
           * @format uri
           */
          gammaUrl?: string;
          /**
           * The temporary export download URL returned when complete.
           * @format uri
           */
          exportUrl?: string;
          /** Warnings Gamma returned because some generation settings were ignored. */
          warnings?: string;
          /** The error payload Gamma returned for a failed generation. */
          error?: {
            /** The error message Gamma returned for a failed generation. */
            message: string;
            /** The HTTP-like status code Gamma returned for a failed generation. */
            statusCode: number;
          };
          /** Credit usage information returned for the generation. */
          credits?: {
            /** The number of credits deducted for this generation. */
            deducted: number;
            /** The number of credits remaining after this generation. */
            remaining: number;
          };
        };
        /** Whether the polling loop stopped because the timeout was reached. */
        timedOut: boolean;
      };
    };
    /** Create an asynchronous Gamma generation from an existing Gamma template. */
    "gamma.create_generation_from_template": {
      input: {
        /**
         * The prompt Gamma should use to adapt the template.
         * @minLength 1
         */
        prompt: string;
        /**
         * The Gamma template identifier to use as the base template.
         * @minLength 1
         */
        gammaId: string;
        /**
         * The Gamma theme ID returned by the List Themes API or copied from the Gamma app.
         * @minLength 1
         */
        themeId?: string;
        /** Image generation settings forwarded to Gamma. */
        imageOptions?: {
          /** Where Gamma should source images from for the generation. */
          source?: "aiGenerated" | "pictographic" | "pexels" | "giphy" | "webAllImages" | "webFreeToUse" | "webFreeToUseCommercially" | "themeAccent" | "placeholder" | "noImages";
          /**
           * The image model Gamma should use for AI-generated images.
           * @minLength 1
           */
          model?: string;
          /**
           * The image style prompt Gamma should use.
           * @minLength 1
           */
          style?: string;
          /**
           * A named style preset Gamma should apply to AI-generated images.
           * @minLength 1
           */
          stylePreset?: string;
          [key: string]: unknown;
        };
        /** Sharing and access settings forwarded to Gamma. */
        sharingOptions?: {
          /** The access level Gamma should grant to workspace members. */
          workspaceAccess?: "noAccess" | "view" | "comment" | "edit" | "fullAccess";
          /** The access level Gamma should grant to users outside the workspace. */
          externalAccess?: "noAccess" | "view" | "comment" | "edit";
          /** The email recipients Gamma should notify after generation. */
          emailOptions?: {
            /**
             * The email recipients Gamma should share the result with.
             * @minItems 1
             */
            recipients: Array<string>;
            /** The access level Gamma should grant to shared email recipients. */
            access: "view" | "comment" | "edit" | "fullAccess";
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /**
         * The folder IDs where Gamma should place the generated content.
         * @minItems 1
         * @maxItems 10
         */
        folderIds?: Array<string>;
        /** The export format Gamma should prepare when generation completes. */
        exportAs?: "pdf" | "pptx" | "png";
      };
      output: {
        /** The Gamma generation job that was created. */
        generation: {
          /** The Gamma generation job identifier. */
          generationId: string;
          /** The current status of the Gamma generation. */
          status?: "pending" | "completed" | "failed";
          /** The Gamma document ID returned when available. */
          gammaId?: string;
          /**
           * The Gamma document URL returned when complete.
           * @format uri
           */
          gammaUrl?: string;
          /**
           * The temporary export download URL returned when complete.
           * @format uri
           */
          exportUrl?: string;
          /** Warnings Gamma returned because some generation settings were ignored. */
          warnings?: string;
          /** The error payload Gamma returned for a failed generation. */
          error?: {
            /** The error message Gamma returned for a failed generation. */
            message: string;
            /** The HTTP-like status code Gamma returned for a failed generation. */
            statusCode: number;
          };
          /** Credit usage information returned for the generation. */
          credits?: {
            /** The number of credits deducted for this generation. */
            deducted: number;
            /** The number of credits remaining after this generation. */
            remaining: number;
          };
        };
      };
    };
    /** Create a Gamma generation from a template and keep polling until it completes, fails, or times out. */
    "gamma.create_generation_from_template_and_wait": {
      input: {
        /**
         * The prompt Gamma should use to adapt the template.
         * @minLength 1
         */
        prompt: string;
        /**
         * The Gamma template identifier to use as the base template.
         * @minLength 1
         */
        gammaId: string;
        /**
         * The Gamma theme ID returned by the List Themes API or copied from the Gamma app.
         * @minLength 1
         */
        themeId?: string;
        /** Image generation settings forwarded to Gamma. */
        imageOptions?: {
          /** Where Gamma should source images from for the generation. */
          source?: "aiGenerated" | "pictographic" | "pexels" | "giphy" | "webAllImages" | "webFreeToUse" | "webFreeToUseCommercially" | "themeAccent" | "placeholder" | "noImages";
          /**
           * The image model Gamma should use for AI-generated images.
           * @minLength 1
           */
          model?: string;
          /**
           * The image style prompt Gamma should use.
           * @minLength 1
           */
          style?: string;
          /**
           * A named style preset Gamma should apply to AI-generated images.
           * @minLength 1
           */
          stylePreset?: string;
          [key: string]: unknown;
        };
        /** Sharing and access settings forwarded to Gamma. */
        sharingOptions?: {
          /** The access level Gamma should grant to workspace members. */
          workspaceAccess?: "noAccess" | "view" | "comment" | "edit" | "fullAccess";
          /** The access level Gamma should grant to users outside the workspace. */
          externalAccess?: "noAccess" | "view" | "comment" | "edit";
          /** The email recipients Gamma should notify after generation. */
          emailOptions?: {
            /**
             * The email recipients Gamma should share the result with.
             * @minItems 1
             */
            recipients: Array<string>;
            /** The access level Gamma should grant to shared email recipients. */
            access: "view" | "comment" | "edit" | "fullAccess";
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /**
         * The folder IDs where Gamma should place the generated content.
         * @minItems 1
         * @maxItems 10
         */
        folderIds?: Array<string>;
        /** The export format Gamma should prepare when generation completes. */
        exportAs?: "pdf" | "pptx" | "png";
        /**
         * The maximum number of seconds to wait before returning a timed-out result.
         * @minimum 0
         */
        timeoutSeconds?: number;
        /**
         * The number of seconds to wait between polling attempts.
         * @minimum 0
         */
        pollIntervalSeconds?: number;
      };
      output: {
        /** The latest Gamma generation returned by polling. */
        generation: {
          /** The Gamma generation job identifier. */
          generationId: string;
          /** The current status of the Gamma generation. */
          status?: "pending" | "completed" | "failed";
          /** The Gamma document ID returned when available. */
          gammaId?: string;
          /**
           * The Gamma document URL returned when complete.
           * @format uri
           */
          gammaUrl?: string;
          /**
           * The temporary export download URL returned when complete.
           * @format uri
           */
          exportUrl?: string;
          /** Warnings Gamma returned because some generation settings were ignored. */
          warnings?: string;
          /** The error payload Gamma returned for a failed generation. */
          error?: {
            /** The error message Gamma returned for a failed generation. */
            message: string;
            /** The HTTP-like status code Gamma returned for a failed generation. */
            statusCode: number;
          };
          /** Credit usage information returned for the generation. */
          credits?: {
            /** The number of credits deducted for this generation. */
            deducted: number;
            /** The number of credits remaining after this generation. */
            remaining: number;
          };
        };
        /** Whether the polling loop stopped because the timeout was reached. */
        timedOut: boolean;
      };
    };
    /** Get the status and result URLs for a specific Gamma generation job. */
    "gamma.get_generation": {
      input: {
        /**
         * The Gamma generation job identifier.
         * @minLength 1
         */
        generationId: string;
      };
      output: {
        /** The Gamma generation returned by the API. */
        generation: {
          /** The Gamma generation job identifier. */
          generationId: string;
          /** The current status of the Gamma generation. */
          status?: "pending" | "completed" | "failed";
          /** The Gamma document ID returned when available. */
          gammaId?: string;
          /**
           * The Gamma document URL returned when complete.
           * @format uri
           */
          gammaUrl?: string;
          /**
           * The temporary export download URL returned when complete.
           * @format uri
           */
          exportUrl?: string;
          /** Warnings Gamma returned because some generation settings were ignored. */
          warnings?: string;
          /** The error payload Gamma returned for a failed generation. */
          error?: {
            /** The error message Gamma returned for a failed generation. */
            message: string;
            /** The HTTP-like status code Gamma returned for a failed generation. */
            statusCode: number;
          };
          /** Credit usage information returned for the generation. */
          credits?: {
            /** The number of credits deducted for this generation. */
            deducted: number;
            /** The number of credits remaining after this generation. */
            remaining: number;
          };
        };
      };
    };
    /** List the Gamma folders available in the current workspace. */
    "gamma.list_folders": {
      input: {
        /**
         * An optional search query for filtering folders by name.
         * @minLength 1
         */
        query?: string;
        /**
         * The maximum number of folders Gamma should return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * The cursor for loading the next page of folders.
         * @minLength 1
         */
        after?: string;
      };
      output: {
        /** The Gamma folders returned by the API. */
        folders: Array<{
          /** The Gamma folder identifier. */
          id: string;
          /** The display name of the Gamma folder. */
          name: string;
        }>;
        /** The pagination metadata returned by Gamma. */
        pageInfo: {
          /** Whether more pages are available from Gamma. */
          hasMore: boolean;
          /** The cursor value to pass as `after` when requesting the next page. */
          nextCursor: string | null;
        };
      };
    };
    /** List the Gamma themes available in the current workspace. */
    "gamma.list_themes": {
      input: {
        /**
         * An optional search query for filtering themes by name.
         * @minLength 1
         */
        query?: string;
        /**
         * The maximum number of themes Gamma should return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * The cursor for loading the next page of themes.
         * @minLength 1
         */
        after?: string;
      };
      output: {
        /** The Gamma themes returned by the API. */
        themes: Array<{
          /** The Gamma theme identifier. */
          id: string;
          /** The display name of the Gamma theme. */
          name: string;
          /** The theme type returned by Gamma. */
          type: string;
          /** The descriptive tone keywords associated with the theme. */
          toneKeywords?: Array<string>;
          /** The descriptive color keywords associated with the theme. */
          colorKeywords?: Array<string>;
        }>;
        /** The pagination metadata returned by Gamma. */
        pageInfo: {
          /** Whether more pages are available from Gamma. */
          hasMore: boolean;
          /** The cursor value to pass as `after` when requesting the next page. */
          nextCursor: string | null;
        };
      };
    };
    /** Poll a Gamma generation job until it completes, fails, or the polling timeout is reached. */
    "gamma.wait_for_generation": {
      input: {
        /**
         * The Gamma generation job identifier.
         * @minLength 1
         */
        generationId: string;
        /**
         * The maximum number of seconds to wait before returning a timed-out result.
         * @minimum 0
         */
        timeoutSeconds?: number;
        /**
         * The number of seconds to wait between polling attempts.
         * @minimum 0
         */
        pollIntervalSeconds?: number;
      };
      output: {
        /** The latest Gamma generation returned by polling. */
        generation: {
          /** The Gamma generation job identifier. */
          generationId: string;
          /** The current status of the Gamma generation. */
          status?: "pending" | "completed" | "failed";
          /** The Gamma document ID returned when available. */
          gammaId?: string;
          /**
           * The Gamma document URL returned when complete.
           * @format uri
           */
          gammaUrl?: string;
          /**
           * The temporary export download URL returned when complete.
           * @format uri
           */
          exportUrl?: string;
          /** Warnings Gamma returned because some generation settings were ignored. */
          warnings?: string;
          /** The error payload Gamma returned for a failed generation. */
          error?: {
            /** The error message Gamma returned for a failed generation. */
            message: string;
            /** The HTTP-like status code Gamma returned for a failed generation. */
            statusCode: number;
          };
          /** Credit usage information returned for the generation. */
          credits?: {
            /** The number of credits deducted for this generation. */
            deducted: number;
            /** The number of credits remaining after this generation. */
            remaining: number;
          };
        };
        /** Whether the polling loop stopped because the timeout was reached. */
        timedOut: boolean;
      };
    };
  }
}
