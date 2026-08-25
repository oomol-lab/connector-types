import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Translate text in a public image with ImageTranslate.AI, preserve the selected layout style, and return a rendered PNG up to 50 MB through transit storage. ImageTranslate.AI may charge before Connector can reject an oversized rendered result. */
    "imagetranslate_ai.translate_image": {
      input: {
        /**
         * A public HTTP or HTTPS URL for a JPG, PNG, or WebP image no larger than 20 MB.
         * @maxLength 2048
         * @format uri
         */
        imageUrl: string;
        /**
         * The source language as an ISO 639-1 or BCP-47 code, or auto for detection. Defaults to auto.
         * @minLength 1
         * @maxLength 32
         */
        sourceLanguage?: string;
        /**
         * The target language as an ISO 639-1 or BCP-47 code, such as en, ja, ko, zh-cn, or zh-tw.
         * @minLength 1
         * @maxLength 32
         */
        targetLanguage: string;
        /** The layout mode: manga preserves comic text layout and strokes; general uses standard rendering; e-commerce preserves layout without strokes; light-novel overlays translated text. Defaults to general. */
        mode?: "general" | "manga" | "e-commerce" | "light-novel";
        /** The AI translation model. Defaults to grok. */
        translator?: "grok" | "gemini" | "deepseek" | "kimi" | "chatgpt" | "claude";
        /**
         * Additional translation instructions, terminology, character context, or style guidance.
         * @maxLength 1000
         */
        customPrompt?: string;
        /**
         * A caller-generated UUID that must be reused when retrying the same translation after a timeout to avoid duplicate credit charges.
         * @format uuid
         */
        idempotencyKey: string;
      };
      output: {
        /**
         * The ImageTranslate.AI record ID to include when contacting provider support.
         * @minLength 1
         */
        recordId: string;
        /**
         * The advanced-credit balance remaining after this translation.
         * @minimum 0
         */
        remainingCredit: number;
        /** The translated PNG, no larger than 50 MB, uploaded to connector transit storage. */
        file: {
          /**
           * The generated translated image filename.
           * @minLength 1
           */
          name: string;
          /** The MIME type of the translated image. */
          mimeType: "image/png";
          /**
           * The transit URL for downloading the translated image.
           * @format uri
           */
          url: string;
          /**
           * The translated image size in bytes, up to 50 MB.
           * @minimum 0
           */
          sizeBytes: number;
        };
      };
    };
  }
}
