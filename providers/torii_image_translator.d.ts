import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Extract structured OCR text, geometry, orientation, colors, and confidence data from a public image with Torii. */
    "torii_image_translator.extract_text": {
      input: {
        /**
         * A public HTTP or HTTPS URL for the JPG, PNG, or WebP image to analyze, no larger than 50 MB.
         * @maxLength 2048
         * @format uri
         */
        imageUrl: string;
      };
      output: {
        /** The paragraphs detected by Torii OCR. */
        paragraphs: Array<{
          /** The text recognized in the paragraph. */
          text?: string;
          /** The paragraph polygon represented by coordinate pairs. */
          polygon?: Array<Array<number>>;
          /** The estimated median paragraph font size in pixels. */
          fontsize?: number;
          /** The paragraph rotation angle in degrees. */
          angle?: number;
          /** The paragraph text alignment. */
          alignment?: string;
          /** The paragraph text flow direction. */
          direction?: string;
          /**
           * The detected paragraph background color in BGR order.
           * @minItems 3
           * @maxItems 3
           */
          bg_color?: [number, number, number];
          /**
           * The detected paragraph text color in BGR order.
           * @minItems 3
           * @maxItems 3
           */
          text_color?: [number, number, number];
          /**
           * The detected paragraph stroke color in BGR order.
           * @minItems 3
           * @maxItems 3
           */
          stroke_color?: [number, number, number];
          /** Whether Torii detected a dominant paragraph background color. */
          has_dominant_bg_color?: boolean;
          /** The paragraph OCR confidence from 0 to 1. */
          confidence?: number;
          /** Whether Torii filtered the paragraph as noise or reading aid text. */
          removed?: boolean;
          /** The detected paragraph language and confidence. */
          language_details?: Record<string, unknown>;
          /** The detailed OCR lines within the paragraph. */
          lines?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /**
         * The Torii credit balance remaining after the request, when returned by the API.
         * @minimum 0
         */
        creditsRemaining?: number;
      };
    };
    /** Retrieve the credit balance remaining for the connected Torii API key. */
    "torii_image_translator.get_credits": {
      input: Record<string, never>;
      output: {
        /**
         * The Torii credit balance remaining after the request, when returned by the API.
         * @minimum 0
         */
        credits: number;
      };
    };
    /** Remove masked text or objects from a public image with Torii inpainting and return the cleaned PNG through transit storage. */
    "torii_image_translator.inpaint_image": {
      input: {
        /**
         * A public HTTP or HTTPS URL for the source JPG, PNG, or WebP image, no larger than 50 MB.
         * @maxLength 2048
         * @format uri
         */
        imageUrl: string;
        /**
         * A public HTTP or HTTPS URL for a mask image whose white areas should be removed and filled.
         * @maxLength 2048
         * @format uri
         */
        maskUrl: string;
      };
      output: {
        /** A PNG image uploaded to connector transit storage. */
        image: {
          /**
           * The generated image filename.
           * @minLength 1
           */
          name: string;
          /** The generated image MIME type. */
          mimeType: "image/png";
          /**
           * The transit URL for downloading the generated image.
           * @format uri
           */
          url: string;
          /**
           * The generated image size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
        /**
         * The Torii credit balance remaining after the request, when returned by the API.
         * @minimum 0
         */
        creditsRemaining?: number;
      };
    };
    /** Translate text in a manga, comic, or other public image with Torii, remove the source text, re-typeset the translation, and return the downloadable translated image. */
    "torii_image_translator.translate_image": {
      input: {
        /**
         * A public HTTP or HTTPS URL for the source JPG, PNG, or WebP image, no larger than 50 MB.
         * @maxLength 2048
         * @format uri
         */
        imageUrl: string;
        /**
         * The target language code, such as en, ja, ko, zh-cn for Simplified Chinese, or zh-tw for Traditional Chinese.
         * @minLength 1
         * @maxLength 32
         */
        targetLanguage: string;
        /**
         * The Torii translation model identifier. Defaults to gemini-3.1-flash-lite. Current examples include deepseek, gpt-5.6-luna, grok-4.20, kimi-k2.5, gpt-5.4, gemini-3-flash, claude-sonnet-4.6, and gemini-3.7-flash.
         * @minLength 1
         * @maxLength 100
         */
        translator?: string;
        /**
         * The Torii font identifier. Defaults to noto, which supports Chinese and the full advertised language set. Other current examples include wildwords, badcomic, mashanzheng, komika, bangers, shonen, and heroika.
         * @minLength 1
         * @maxLength 100
         */
        font?: string;
        /** The translated text alignment. Defaults to auto. */
        textAlign?: "auto" | "left" | "center" | "right";
        /** Whether to disable the detected text outline when rendering the translation. Defaults to false. */
        strokeDisabled?: boolean;
        /**
         * The minimum rendered font size. Defaults to 6.
         * @minimum 6
         * @maximum 100
         */
        minFontSize?: number;
        /** Whether to translate only text detected inside speech bubbles, plus long high-confidence text. Defaults to false. */
        bubblesOnly?: boolean;
        /**
         * Additional translation instructions, terminology, character guidance, or style requirements.
         * @maxLength 1000
         */
        customPrompt?: string;
        /**
         * Story, character, event, and dialogue context used to keep a translation consistent. Pass None to start a Torii context chain, then reuse the returned context for later pages.
         * @maxLength 10000
         */
        context?: string;
      };
      output: {
        /** A PNG image uploaded to connector transit storage. */
        translatedImage: {
          /**
           * The generated image filename.
           * @minLength 1
           */
          name: string;
          /** The generated image MIME type. */
          mimeType: "image/png";
          /**
           * The transit URL for downloading the generated image.
           * @format uri
           */
          url: string;
          /**
           * The generated image size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
        /** The translated text regions and rendering metadata returned by Torii. */
        textRegions: Array<{
          /** The horizontal center coordinate of the translated text region. */
          x?: number;
          /** The vertical center coordinate of the translated text region. */
          y?: number;
          /** The translated text region width in pixels. */
          width?: number;
          /** The translated text region height in pixels. */
          height?: number;
          /** The translated text rendered in the region. */
          text?: string;
          /** The original text detected in the region. */
          originalText?: string;
          /** The translated text alignment. */
          textAlign?: string;
          /** The translated text fill color. */
          fillColor?: string;
          /** The translated text stroke color. */
          strokeColor?: string;
          /** The translated text outline width in pixels. */
          lineWidth?: number;
          /** The CSS font value used to render the translated text. */
          font?: string;
          /** Whether Torii added a background behind the translated text. */
          addFontBackground?: boolean;
          /** Whether Torii added a custom border around the translated text. */
          addFontBorder?: boolean;
          /** The hexadecimal background color used when a text background is enabled. */
          addBackgroundColor?: string;
          /** The translated text block rotation in radians. */
          rotation?: number;
          /** The translated text block rotation in degrees. */
          angle?: number;
          /** The translated text layout orientation. */
          layout?: string;
          /** The translated text reading direction. */
          textDir?: string;
          [key: string]: unknown;
        }>;
        /** The updated Torii translation context for continuing with later pages. */
        context?: string;
        /**
         * The Torii credit balance remaining after the request, when returned by the API.
         * @minimum 0
         */
        creditsRemaining?: number;
      };
    };
    /** Render translated text boxes over a pre-cleaned public image with Torii and return the typeset PNG through transit storage. */
    "torii_image_translator.typeset_image": {
      input: {
        /**
         * A public HTTP or HTTPS URL for the pre-cleaned JPG, PNG, or WebP image, no larger than 50 MB.
         * @maxLength 2048
         * @format uri
         */
        imageUrl: string;
        /**
         * The translated text boxes to render.
         * @minItems 1
         * @maxItems 500
         */
        textBoxes: Array<{
          /** The top-left horizontal coordinate in pixels. */
          x?: number;
          /** The top-left vertical coordinate in pixels. */
          y?: number;
          /**
           * The text box width in pixels.
           * @exclusiveMinimum 0
           */
          width?: number;
          /**
           * The text box height in pixels.
           * @exclusiveMinimum 0
           */
          height?: number;
          /**
           * Four points describing an oriented text region.
           * @minItems 4
           * @maxItems 4
           */
          polygon?: [[number, number], [number, number], [number, number], [number, number]];
          /**
           * The text to render.
           * @minLength 1
           * @maxLength 5000
           */
          text: string;
          /** The horizontal text alignment. */
          alignment: "left" | "center" | "right";
          /**
           * The text fill color as a hexadecimal color value.
           * @minLength 1
           */
          textColor: string;
          /**
           * The text outline color as a hexadecimal color value.
           * @minLength 1
           */
          strokeColor: string;
          /** The rendered text direction. */
          direction?: "left_to_right" | "top_to_bottom";
          /** The text rotation angle in degrees. */
          angle?: number;
          /**
           * The language code used for direction-aware rendering, such as ja or zh.
           * @minLength 1
           * @maxLength 32
           */
          sourceLanguage?: string;
          /**
           * The font size for this text box in pixels.
           * @exclusiveMinimum 0
           */
          fontSize?: number;
        }>;
        /**
         * The Torii font identifier. Defaults to noto, which supports Chinese and the full advertised language set. Other current examples include wildwords, badcomic, mashanzheng, komika, bangers, shonen, and heroika.
         * @minLength 1
         * @maxLength 100
         */
        font?: string;
        /**
         * The minimum rendered font size. Defaults to 12.
         * @minimum 1
         * @maximum 100
         */
        minFontSize?: number;
        /** Whether to disable text outlines for all rendered text boxes. Defaults to false. */
        strokeDisabled?: boolean;
      };
      output: {
        /** A PNG image uploaded to connector transit storage. */
        image: {
          /**
           * The generated image filename.
           * @minLength 1
           */
          name: string;
          /** The generated image MIME type. */
          mimeType: "image/png";
          /**
           * The transit URL for downloading the generated image.
           * @format uri
           */
          url: string;
          /**
           * The generated image size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
        /**
         * The Torii credit balance remaining after the request, when returned by the API.
         * @minimum 0
         */
        creditsRemaining?: number;
      };
    };
  }
}
