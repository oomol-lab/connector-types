import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate one image from a single-page template or multiple images from a multipage template and return hosted URLs. */
    "dynapictures.generate_images": {
      input: {
        /**
         * The DynaPictures template UID.
         * @minLength 1
         */
        templateId: string;
        /** The generated image format. */
        format?: "png" | "jpeg" | "webp" | "avif";
        /** Custom metadata to store with each generated image. */
        metadata?: string;
        /**
         * Layer overrides for a single-page template.
         * @minItems 1
         */
        params?: Array<{
          /**
           * The template layer name to customize.
           * @minLength 1
           */
          name: string;
          /** The replacement text for a text layer. */
          text?: string;
          /** The text or label color. */
          color?: string;
          /** The layer background color. */
          backgroundColor?: string;
          /** The layer border color. */
          borderColor?: string;
          /** The layer border width, such as 1px. */
          borderWidth?: string;
          /** The layer border radius, such as 5px or 50%. */
          borderRadius?: string;
          /**
           * The publicly reachable image URL for an image layer.
           * @format uri
           */
          imageUrl?: string;
          /** The image fitting or positioning mode. */
          imagePosition?: "cro" | "ai_face" | "cov" | "align";
          /** The horizontal alignment used with align mode. */
          imageAlignH?: "left" | "center" | "right" | "full";
          /** The vertical alignment used with align mode. */
          imageAlignV?: "top" | "center" | "bottom" | "full";
          /** A CSS filter value applied to an image layer. */
          imageEffect?: string;
          /**
           * The layer opacity from 0 for transparent to 1 for opaque.
           * @minimum 0
           * @maximum 1
           */
          opacity?: number;
          /**
           * The prompt for a per-request AI image layer.
           * @minLength 1
           */
          prompt?: string;
          /**
           * The publicly reachable source photo for an AI image layer.
           * @format uri
           */
          sourceImage?: string;
          /**
           * Named reference images used by an AI image layer.
           * @maxItems 6
           */
          referenceImages?: Array<{
            /**
             * The name referenced in the AI prompt inside square brackets.
             * @minLength 1
             */
            name: string;
            /**
             * The publicly reachable reference image URL.
             * @format uri
             */
            url: string;
          }>;
          /** The chart series color. */
          chartColor?: string;
          /** The chart axis label color. */
          chartLabelColor?: string;
          /** The chart labels shown on the horizontal axis. */
          chartDataLabels?: Array<string>;
          /** The numeric data series rendered by a chart layer. */
          chartDataValues?: Array<number>;
          /**
           * The progress value for a gauge or progress bar.
           * @minimum 0
           */
          value?: number;
          /**
           * The maximum value for a radial tick gauge.
           * @exclusiveMinimum 0
           */
          maxValue?: number;
          /** The filled tick color for a radial tick gauge. */
          activeColor?: string;
          /** The empty tick color for a radial tick gauge. */
          inactiveColor?: string;
          /** The background ring color for a simple gauge. */
          circleColor?: string;
          /** The filled progress color for a gauge or progress bar. */
          progressColor?: string;
          /** The value label color for a simple gauge. */
          textColor?: string;
          /** The unfilled track color for a line progress bar. */
          remainingColor?: string;
          /** The line progress bar label text. */
          label?: string;
          /** The horizontal alignment of a progress bar label. */
          labelAlign?: "left" | "center" | "right";
          [key: string]: unknown;
        }>;
        /**
         * Page and layer overrides for a multipage template.
         * @minItems 1
         */
        pages?: Array<{
          /**
           * The zero-based template page index to customize.
           * @minimum 0
           */
          index: number;
          /**
           * The layer overrides for this page.
           * @minItems 1
           */
          layers: Array<{
            /**
             * The template layer name to customize.
             * @minLength 1
             */
            name: string;
            /** The replacement text for a text layer. */
            text?: string;
            /** The text or label color. */
            color?: string;
            /** The layer background color. */
            backgroundColor?: string;
            /** The layer border color. */
            borderColor?: string;
            /** The layer border width, such as 1px. */
            borderWidth?: string;
            /** The layer border radius, such as 5px or 50%. */
            borderRadius?: string;
            /**
             * The publicly reachable image URL for an image layer.
             * @format uri
             */
            imageUrl?: string;
            /** The image fitting or positioning mode. */
            imagePosition?: "cro" | "ai_face" | "cov" | "align";
            /** The horizontal alignment used with align mode. */
            imageAlignH?: "left" | "center" | "right" | "full";
            /** The vertical alignment used with align mode. */
            imageAlignV?: "top" | "center" | "bottom" | "full";
            /** A CSS filter value applied to an image layer. */
            imageEffect?: string;
            /**
             * The layer opacity from 0 for transparent to 1 for opaque.
             * @minimum 0
             * @maximum 1
             */
            opacity?: number;
            /**
             * The prompt for a per-request AI image layer.
             * @minLength 1
             */
            prompt?: string;
            /**
             * The publicly reachable source photo for an AI image layer.
             * @format uri
             */
            sourceImage?: string;
            /**
             * Named reference images used by an AI image layer.
             * @maxItems 6
             */
            referenceImages?: Array<{
              /**
               * The name referenced in the AI prompt inside square brackets.
               * @minLength 1
               */
              name: string;
              /**
               * The publicly reachable reference image URL.
               * @format uri
               */
              url: string;
            }>;
            /** The chart series color. */
            chartColor?: string;
            /** The chart axis label color. */
            chartLabelColor?: string;
            /** The chart labels shown on the horizontal axis. */
            chartDataLabels?: Array<string>;
            /** The numeric data series rendered by a chart layer. */
            chartDataValues?: Array<number>;
            /**
             * The progress value for a gauge or progress bar.
             * @minimum 0
             */
            value?: number;
            /**
             * The maximum value for a radial tick gauge.
             * @exclusiveMinimum 0
             */
            maxValue?: number;
            /** The filled tick color for a radial tick gauge. */
            activeColor?: string;
            /** The empty tick color for a radial tick gauge. */
            inactiveColor?: string;
            /** The background ring color for a simple gauge. */
            circleColor?: string;
            /** The filled progress color for a gauge or progress bar. */
            progressColor?: string;
            /** The value label color for a simple gauge. */
            textColor?: string;
            /** The unfilled track color for a line progress bar. */
            remainingColor?: string;
            /** The line progress bar label text. */
            label?: string;
            /** The horizontal alignment of a progress bar label. */
            labelAlign?: "left" | "center" | "right";
            [key: string]: unknown;
          }>;
        }>;
      };
      output: {
        /**
         * The DynaPictures template UID.
         * @minLength 1
         */
        templateId: string;
        /** The template name when returned for a multipage generation. */
        templateName: string | null;
        /**
         * The generated images.
         * @minItems 1
         */
        images: Array<{
          /** The unique generated image identifier. */
          id: string;
          /**
           * The hosted generated image URL.
           * @format uri
           */
          imageUrl: string;
          /**
           * The hosted generated image thumbnail URL.
           * @format uri
           */
          thumbnailUrl: string;
          /**
           * The hosted high-density thumbnail URL when returned for a single-page template.
           * @format uri
           */
          retinaThumbnailUrl: string | null;
          /** The custom metadata stored with the generated image. */
          metadata: string | null;
          /** The generated image width in pixels. */
          width: number;
          /** The generated image height in pixels. */
          height: number;
          /**
           * The source page index for a multipage template result.
           * @minimum 0
           */
          pageIndex: number | null;
          /** The raw object returned by DynaPictures. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by DynaPictures. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one DynaPictures template and its customizable layers by UID. */
    "dynapictures.get_template": {
      input: {
        /**
         * The DynaPictures template UID.
         * @minLength 1
         */
        templateId: string;
      };
      output: {
        /** A normalized DynaPictures template. */
        template: {
          /** The unique template UID. */
          id: string;
          /** The template name. */
          name: string;
          /**
           * The template thumbnail URL.
           * @format uri
           */
          thumbnail: string;
          /**
           * The template creation timestamp.
           * @format date-time
           */
          dateCreated: string;
          /**
           * The template update timestamp.
           * @format date-time
           */
          dateUpdated: string;
          /** The layers available in the template. */
          layers: Array<{
            /** The layer type. */
            type?: string;
            /** The layer name used in generation overrides. */
            name?: string;
            /** The layer width as returned by DynaPictures. */
            width?: number | string;
            /** The layer height as returned by DynaPictures. */
            height?: number | string;
            /** The current text value for a text layer. */
            text?: string | null;
            [key: string]: unknown;
          }>;
          /** The raw object returned by DynaPictures. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List DynaPictures templates that are ready for API generation and have Sync to Zapier enabled. */
    "dynapictures.list_templates": {
      input: Record<string, never>;
      output: {
        /** Templates returned by DynaPictures. */
        templates: Array<{
          /** The unique template UID. */
          id: string;
          /** The template name. */
          name: string;
          /**
           * The template thumbnail URL.
           * @format uri
           */
          thumbnail: string;
          /**
           * The template creation timestamp.
           * @format date-time
           */
          dateCreated: string;
          /**
           * The template update timestamp.
           * @format date-time
           */
          dateUpdated: string;
          /** The layers available in the template. */
          layers: Array<{
            /** The layer type. */
            type?: string;
            /** The layer name used in generation overrides. */
            name?: string;
            /** The layer width as returned by DynaPictures. */
            width?: number | string;
            /** The layer height as returned by DynaPictures. */
            height?: number | string;
            /** The current text value for a text layer. */
            text?: string | null;
            [key: string]: unknown;
          }>;
          /** The raw object returned by DynaPictures. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
