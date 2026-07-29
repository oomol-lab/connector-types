import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Apply a controlled combination of Photoroom product-image edits to an imageUrl, upload the binary result to connector transit storage, and return resultUrl. This action is for composed ecommerce edits rather than simple background removal; outputs that use relighting, text removal, or beautification should be reviewed by a human before publishing. */
    "photoroom.edit_product_image": {
      input: {
        /**
         * The publicly reachable source product image URL that Photoroom should edit.
         * @minLength 1
         * @format uri
         */
        imageUrl: string;
        /** The background treatment applied to the product image. */
        background: {
          /** The background strategy. */
          type: "keep";
          /** The blur style applied to the retained background. */
          blurMode?: "gaussian" | "bokeh";
          /**
           * The background blur radius above 0 and up to 0.05.
           * @maximum 0.05
           * @exclusiveMinimum 0
           */
          blurRadius?: number;
        } | {
          /** The background strategy. */
          type: "color";
          /**
           * A hexadecimal color without a leading hash, such as FFFFFF or FF0000EE, or a supported color name.
           * @minLength 1
           */
          color: string;
        } | {
          /** The background strategy. */
          type: "image";
          /**
           * The publicly reachable URL of the replacement background image.
           * @minLength 1
           * @format uri
           */
          imageUrl: string;
          /** How the replacement background should fit the output canvas. */
          scaling?: "fit" | "fill";
        } | {
          /** The background strategy. */
          type: "ai";
          /**
           * A description of the product scene to generate around the existing subject.
           * @minLength 1
           */
          prompt: string;
          /**
           * A fixed generation seed for producing similar backgrounds from the same prompt.
           * @exclusiveMinimum 0
           */
          seed?: number;
          /** Whether Photoroom should automatically expand a short background prompt. */
          expandPromptMode?: "ai.auto" | "ai.never";
        };
        /** The current Photoroom AI shadow style generated around the detected product subject. */
        shadowStyle?: "auto" | "soft" | "hard";
        /** The relighting mode. Preserve hue and saturation when product color accuracy matters. */
        lightingMode?: "ai.auto" | "ai.preserve-hue-and-saturation";
        /** The class of text to remove. This can change product details and requires human review. */
        textRemovalMode?: "ai.artificial" | "ai.natural" | "ai.all";
        /** The product-specific AI beautification mode. This can alter the subject and requires human review. */
        beautifyMode?: "ai.auto" | "ai.food" | "ai.car";
        /**
         * A fixed seed for producing similar beautification results. Requires beautifyMode.
         * @exclusiveMinimum 0
         */
        beautifySeed?: number;
        /** A colored outline drawn around the detected product subject. */
        outline?: {
          /**
           * A hexadecimal color without a leading hash or a supported color name.
           * @minLength 1
           */
          color: string;
          /**
           * The outline width as a ratio of the result image size.
           * @minimum 0
           * @maximum 0.1
           */
          width?: number;
          /**
           * The outline blur radius as a ratio of the result image size.
           * @minimum 0
           * @maximum 0.025
           */
          blurRadius?: number;
        };
        /** Output canvas sizing and subject positioning controls. */
        canvas?: {
          /**
           * The output canvas width in pixels. Provide height with this field.
           * @exclusiveMinimum 0
           */
          width?: number;
          /**
           * The output canvas height in pixels. Provide width with this field.
           * @exclusiveMinimum 0
           */
          height?: number;
          /**
           * The fractional padding on every side of the subject, from 0 up to but excluding 0.5.
           * @minimum 0
           * @exclusiveMaximum 0.5
           */
          padding?: number;
          /** Whether the subject should fit or fill the available canvas. */
          scaling?: "fit" | "fill";
          /** The horizontal subject alignment. */
          horizontalAlignment?: "left" | "center" | "right";
          /** The vertical subject alignment. */
          verticalAlignment?: "top" | "center" | "bottom";
        };
        /** The encoded format of the edited result image. */
        outputFormat?: "png" | "jpeg" | "webp";
        /**
         * The output pixel density in dots per inch.
         * @minimum 72
         * @maximum 1200
         */
        outputDpi?: number;
      };
      output: {
        /**
         * The public transit URL used to download the edited image.
         * @format uri
         */
        resultUrl: string;
        /**
         * The generated filename stored in transit.
         * @minLength 1
         */
        fileName: string;
        /** The MIME type detected from the edited image bytes. */
        contentType: "image/png" | "image/jpeg" | "image/webp";
        /**
         * The edited image size in bytes.
         * @minimum 0
         */
        contentLength: number;
        /** Whether selected AI edits can alter product appearance or text and should be reviewed before publishing. */
        humanReviewRecommended: boolean;
      };
    };
  }
}
