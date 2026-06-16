import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Templated render from one template with optional shared layer overrides and image or PDF output settings. */
    "templated.create_render": {
      input: {
        /**
         * Template ID to render.
         * @minLength 1
         */
        templateId: string;
        /** Output format for the render. */
        format?: "jpg" | "png" | "webp" | "pdf";
        /** Whether the background should be transparent for PNG renders. */
        transparent?: boolean;
        /** Whether PDF output should be flattened. */
        flatten?: boolean;
        /** Whether PDF output should use CMYK color mode. */
        cmyk?: boolean;
        /**
         * Optional custom name for the render.
         * @minLength 1
         */
        name?: string;
        /**
         * Optional background color override.
         * @minLength 1
         */
        background?: string;
        /**
         * Optional custom render width in pixels.
         * @minimum 100
         * @maximum 5000
         */
        width?: number;
        /**
         * Optional custom render height in pixels.
         * @minimum 100
         * @maximum 5000
         */
        height?: number;
        /**
         * Optional render scale factor.
         * @minimum 0.1
         * @maximum 2
         */
        scale?: number;
        /**
         * Optional external identifier for the render.
         * @minLength 1
         */
        externalId?: string;
        /** Whether the render should be created asynchronously. */
        async?: boolean;
        /**
         * Optional webhook URL that receives the final Render object.
         * @format uri
         */
        webhookUrl?: string;
        /** Shared layer overrides applied to the template render. */
        layers?: Record<string, {
            /**
             * Replacement text for the layer.
             * @minLength 1
             */
            text?: string;
            /**
             * Replacement image URL for an image layer.
             * @format uri
             */
            image_url?: string;
            /**
             * Primary color override such as `#FF0000`.
             * @minLength 1
             */
            color?: string;
            /**
             * Secondary text color override.
             * @minLength 1
             */
            color_2?: string;
            /**
             * Background color override.
             * @minLength 1
             */
            background?: string;
            /**
             * Primary font family override.
             * @minLength 1
             */
            font_family?: string;
            /**
             * Secondary font family override.
             * @minLength 1
             */
            font_family_2?: string;
            /**
             * Font size override such as `24px` or `12pt`.
             * @minLength 1
             */
            font_size?: string;
            /**
             * Font weight override.
             * @minLength 1
             */
            font_weight?: string;
            /**
             * Letter spacing override.
             * @minLength 1
             */
            letter_spacing?: string;
            /**
             * Line height override.
             * @minLength 1
             */
            line_height?: string;
            /** Text stroke width in pixels. */
            text_stroke_width?: number;
            /**
             * Text stroke color override.
             * @minLength 1
             */
            text_stroke_color?: string;
            /**
             * Text highlight color override.
             * @minLength 1
             */
            text_highlight_color?: string;
            /**
             * Horizontal padding in pixels.
             * @exclusiveMinimum 0
             */
            padding_x?: number;
            /**
             * Vertical padding in pixels.
             * @exclusiveMinimum 0
             */
            padding_y?: number;
            /**
             * Horizontal text alignment override.
             * @minLength 1
             */
            horizontal_align?: string;
            /**
             * Vertical text alignment override.
             * @minLength 1
             */
            vertical_align?: string;
            /**
             * Auto-fit mode such as `width` or `height`.
             * @minLength 1
             */
            autofit?: string;
            /**
             * Border width in pixels.
             * @minimum 0
             */
            border_width?: number;
            /**
             * Border color override.
             * @minLength 1
             */
            border_color?: string;
            /**
             * Border radius override.
             * @minLength 1
             */
            border_radius?: string;
            /**
             * Border style override.
             * @minLength 1
             */
            border_style?: string;
            /** Custom dash length for dashed borders. */
            dash_length?: number;
            /** Custom gap length for dashed borders. */
            dash_gap?: number;
            /**
             * Fill color or gradient override.
             * @minLength 1
             */
            fill?: string;
            /**
             * Stroke color override.
             * @minLength 1
             */
            stroke?: string;
            /** Whether vector content keeps its aspect ratio. */
            preserve_ratio?: boolean;
            /** Whether the layer should be hidden. */
            hide?: boolean;
            /**
             * Layer opacity between 0 and 1.
             * @minimum 0
             * @maximum 1
             */
            opacity?: number;
            /**
             * Clickable URL applied to PDF renders.
             * @format uri
             */
            link?: string;
            /** Layer X position in pixels. */
            x?: number;
            /** Layer Y position in pixels. */
            y?: number;
            /** Layer rotation in degrees. */
            rotation?: number;
            /**
             * Layer width in pixels.
             * @exclusiveMinimum 0
             */
            width?: number;
            /**
             * Layer height in pixels.
             * @exclusiveMinimum 0
             */
            height?: number;
            /** Whether the layer is flipped horizontally. */
            flip_x?: boolean;
            /** Whether the layer is flipped vertically. */
            flip_y?: boolean;
            /**
             * Image object-fit override.
             * @minLength 1
             */
            object_fit?: string;
            /**
             * Image object-position override.
             * @minLength 1
             */
            object_position?: string;
            /**
             * Crop X percentage.
             * @minimum 0
             * @maximum 100
             */
            crop_x?: number;
            /**
             * Crop Y percentage.
             * @minimum 0
             * @maximum 100
             */
            crop_y?: number;
            /**
             * Crop width percentage.
             * @minimum 0
             * @maximum 100
             */
            crop_width?: number;
            /**
             * Crop height percentage.
             * @minimum 0
             * @maximum 100
             */
            crop_height?: number;
            /**
             * CSS filter override for image layers.
             * @minLength 1
             */
            filter?: string;
            /**
             * Barcode format override.
             * @minLength 1
             */
            barcode_format?: string;
            /** Rating value for a star-rating layer. */
            rating?: number;
            /**
             * Custom HTML content override.
             * @minLength 1
             */
            html?: string;
            [key: string]: unknown;
          }>;
      };
      output: {
        /** Render objects returned by Templated after normalization. */
        renders: Array<{
          /** Unique identifier of the render. */
          id: string;
          /** URL of the rendered asset. */
          url?: string | null;
          /** Rendered width in pixels. */
          width?: number | null;
          /** Rendered height in pixels. */
          height?: number | null;
          /** Render name. */
          name?: string | null;
          /** Current render status reported by Templated. */
          status?: "PENDING" | "COMPLETED" | "FAILED";
          /** Output format of the render. */
          format?: string | null;
          /** Template identifier used to generate the render. */
          templateId?: string | null;
          /** Template name used to generate the render. */
          templateName?: string | null;
          /** Timestamp when the render was created. */
          createdAt?: string | null;
          /** External identifier associated with the render. */
          externalId?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Delete a Templated render by its render ID. */
    "templated.delete_render": {
      input: {
        /**
         * The render ID.
         * @minLength 1
         */
        renderId: string;
      };
      output: {
        /** Whether the render delete request succeeded. */
        deleted: boolean;
        /** Identifier of the deleted render. */
        renderId: string;
      };
    };
    /** Get the current Templated account associated with the API key. */
    "templated.get_account": {
      input: Record<string, never>;
      output: {
        /** Current Templated account. */
        account: {
          /** Unique identifier of the Templated account. */
          id: string;
          /** Display name of the Templated account. */
          name: string;
          /** Email address associated with the Templated account. */
          email: string;
          /** Current Templated plan name when available. */
          plan?: string | null;
          /** Whether generated renders include the Templated watermark. */
          watermark?: boolean;
          /** Timestamp when the account was created. */
          createdAt?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a single Templated render by its render ID. */
    "templated.get_render": {
      input: {
        /**
         * The render ID.
         * @minLength 1
         */
        renderId: string;
      };
      output: {
        /** Render returned by Templated. */
        render: {
          /** Unique identifier of the render. */
          id: string;
          /** URL of the rendered asset. */
          url?: string | null;
          /** Rendered width in pixels. */
          width?: number | null;
          /** Rendered height in pixels. */
          height?: number | null;
          /** Render name. */
          name?: string | null;
          /** Current render status reported by Templated. */
          status?: "PENDING" | "COMPLETED" | "FAILED";
          /** Output format of the render. */
          format?: string | null;
          /** Template identifier used to generate the render. */
          templateId?: string | null;
          /** Template name used to generate the render. */
          templateName?: string | null;
          /** Timestamp when the render was created. */
          createdAt?: string | null;
          /** External identifier associated with the render. */
          externalId?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a single Templated template by its template ID. */
    "templated.get_template": {
      input: {
        /**
         * The template ID.
         * @minLength 1
         */
        templateId: string;
        /** Whether to include template layers in the response. */
        includeLayers?: boolean;
        /** Whether to include template pages in the response. */
        includePages?: boolean;
      };
      output: {
        /** Template returned by Templated. */
        template: {
          /** Unique identifier of the template. */
          id: string;
          /** Template name. */
          name: string;
          /** Template description. */
          description?: string | null;
          /** Template width in pixels. */
          width?: number | null;
          /** Template height in pixels. */
          height?: number | null;
          /** Template thumbnail URL. */
          thumbnail?: string | null;
          /** Template background color. */
          background?: string | null;
          /** Number of editable layers in the template. */
          layersCount?: number | null;
          /** Folder identifier that contains the template. */
          folderId?: string | null;
          /** External identifier associated with the template. */
          externalId?: string | null;
          /** User who owns the template. */
          user?: {
            /** Unique identifier of the Templated user. */
            id: string;
            /** Display name of the Templated user. */
            name: string;
            [key: string]: unknown;
          } | null;
          /** Template layers returned when `includeLayers` is enabled. */
          layers?: Array<unknown>;
          /** Template pages returned when `includePages` is enabled. */
          pages?: Array<unknown>;
          /** Template tags returned by Templated when available. */
          tags?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** List all renders owned by the current Templated account. */
    "templated.list_renders": {
      input: Record<string, never>;
      output: {
        /** Renders returned by Templated. */
        renders: Array<{
          /** Unique identifier of the render. */
          id: string;
          /** URL of the rendered asset. */
          url?: string | null;
          /** Rendered width in pixels. */
          width?: number | null;
          /** Rendered height in pixels. */
          height?: number | null;
          /** Render name. */
          name?: string | null;
          /** Current render status reported by Templated. */
          status?: "PENDING" | "COMPLETED" | "FAILED";
          /** Output format of the render. */
          format?: string | null;
          /** Template identifier used to generate the render. */
          templateId?: string | null;
          /** Template name used to generate the render. */
          templateName?: string | null;
          /** Timestamp when the render was created. */
          createdAt?: string | null;
          /** External identifier associated with the render. */
          externalId?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Templated templates with optional filters for name, dimensions, and tags. */
    "templated.list_templates": {
      input: {
        /**
         * Optional template name filter.
         * @minLength 1
         */
        query?: string;
        /**
         * Zero-based page number for pagination.
         * @minimum 0
         */
        page?: number;
        /**
         * Maximum number of templates to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Filter templates by width in pixels.
         * @exclusiveMinimum 0
         */
        width?: number;
        /**
         * Filter templates by height in pixels.
         * @exclusiveMinimum 0
         */
        height?: number;
        /**
         * Filter templates by tags. Joined into a comma-separated `tags` query value.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * Filter templates by external identifier.
         * @minLength 1
         */
        externalId?: string;
        /** Whether to include template layers in the response. */
        includeLayers?: boolean;
        /** Whether to include template pages in the response. */
        includePages?: boolean;
      };
      output: {
        /** Templates returned by Templated. */
        templates: Array<{
          /** Unique identifier of the template. */
          id: string;
          /** Template name. */
          name: string;
          /** Template description. */
          description?: string | null;
          /** Template width in pixels. */
          width?: number | null;
          /** Template height in pixels. */
          height?: number | null;
          /** Template thumbnail URL. */
          thumbnail?: string | null;
          /** Template background color. */
          background?: string | null;
          /** Number of editable layers in the template. */
          layersCount?: number | null;
          /** Folder identifier that contains the template. */
          folderId?: string | null;
          /** External identifier associated with the template. */
          externalId?: string | null;
          /** User who owns the template. */
          user?: {
            /** Unique identifier of the Templated user. */
            id: string;
            /** Display name of the Templated user. */
            name: string;
            [key: string]: unknown;
          } | null;
          /** Template layers returned when `includeLayers` is enabled. */
          layers?: Array<unknown>;
          /** Template pages returned when `includePages` is enabled. */
          pages?: Array<unknown>;
          /** Template tags returned by Templated when available. */
          tags?: Array<string>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
