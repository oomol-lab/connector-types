import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Bannerbear image synchronously from a template and return the generated media URLs. */
    "bannerbear.create_image_sync": {
      input: {
        /**
         * The template UID to use.
         * @minLength 1
         */
        template: string;
        /**
         * Template layer modifications to apply.
         * @minItems 1
         */
        modifications: Array<{
          /**
           * The name of the template layer to modify.
           * @minLength 1
           */
          name: string;
          /** Replacement text for a text layer. */
          text?: string;
          /** Color in hex format, such as #FF0000. */
          color?: string;
          /** Background color in hex format, such as #FF0000. */
          background?: string;
          /** Background border color in hex format, such as #FF0000. */
          background_border_color?: string;
          /** The font family to use for a text layer. */
          font_family?: string;
          /** Horizontal text alignment. */
          text_align_h?: "left" | "center" | "right";
          /** Vertical text alignment. */
          text_align_v?: "top" | "center" | "bottom";
          /** The secondary font family to use for a text layer. */
          font_family_2?: string;
          /** The secondary font color in hex format. */
          color_2?: string;
          /**
           * Public image URL to use for an image layer.
           * @format uri
           */
          image_url?: string;
          /** The Bannerbear image effect to apply. */
          effect?: string;
          /** Horizontal image anchor point. */
          anchor_x?: "left" | "center" | "right";
          /** Vertical image anchor point. */
          anchor_y?: "top" | "center" | "bottom";
          /** Image fill mode. */
          fill_type?: "fill" | "fit";
          /** Whether to disable face detection for this image layer. */
          disable_face_detect?: boolean;
          /** Whether to disable smart crop for this image layer. */
          disable_smart_crop?: boolean;
          /** Comma-delimited chart data values for chart layers. */
          chart_data?: string;
          /**
           * Star rating value from 0 to 100.
           * @minimum 0
           * @maximum 100
           */
          rating?: number;
          /** QR code target URL or text. */
          target?: string;
          /** Text to encode as a bar code. */
          bar_code_data?: string;
          /**
           * Gradient colors, such as #000 and #FFF.
           * @minItems 1
           */
          gradient?: Array<string>;
          /** Layer shadow setting, such as 5px 5px 0 #000. */
          shadow?: string;
          [key: string]: unknown;
        }>;
        /** Whether to render a transparent PNG. */
        transparent?: boolean;
        /** Whether to also render a PDF. */
        render_pdf?: boolean;
        /** Custom metadata to store with the generated image. */
        metadata?: string;
        /**
         * The Bannerbear project UID. Required when using a Full Access Master API Key.
         * @minLength 1
         */
        project_id?: string;
      };
      output: {
        /** One Bannerbear image. */
        image: {
          /** The unique image UID. */
          uid?: string;
          /** The current image status, such as pending, completed, or failed. */
          status?: string;
          /**
           * The API URL for this image.
           * @format uri
           */
          self?: string;
          /**
           * The generated media URL.
           * @format uri
           */
          image_url?: string | null;
          /**
           * The generated media URL.
           * @format uri
           */
          pdf_url?: string | null;
          /** The template UID used to create the image. */
          template?: string;
          /** The rendered image width in pixels. */
          width?: number;
          /** The rendered image height in pixels. */
          height?: number;
          /** Custom metadata stored with the image. */
          metadata?: string | null;
          /** The image creation timestamp. */
          created_at?: string;
          /** Whether PDF rendering was requested. */
          render_pdf?: boolean;
          /** Whether transparent background rendering was requested. */
          transparent?: boolean;
          /**
           * The webhook URL notified on completion.
           * @format uri
           */
          webhook_url?: string | null;
          /** The HTTP status code returned by the webhook endpoint. */
          webhook_response_code?: number | null;
          /** The modifications applied to the template. */
          modifications?: Array<{
            /** The layer name. */
            name?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Verify a Bannerbear API key and return the project it is scoped to. */
    "bannerbear.get_auth": {
      input: {
        /**
         * The Bannerbear project UID. Required when using a Full Access Master API Key.
         * @minLength 1
         */
        project_id?: string;
      };
      output: {
        /** The authentication status message. */
        message: string;
        /** The Bannerbear project name. */
        project: string;
      };
    };
    /** Retrieve one Bannerbear image by UID. */
    "bannerbear.get_image": {
      input: {
        /**
         * The Bannerbear resource UID.
         * @minLength 1
         */
        uid: string;
        /**
         * The Bannerbear project UID. Required when using a Full Access Master API Key.
         * @minLength 1
         */
        project_id?: string;
      };
      output: {
        /** One Bannerbear image. */
        image: {
          /** The unique image UID. */
          uid?: string;
          /** The current image status, such as pending, completed, or failed. */
          status?: string;
          /**
           * The API URL for this image.
           * @format uri
           */
          self?: string;
          /**
           * The generated media URL.
           * @format uri
           */
          image_url?: string | null;
          /**
           * The generated media URL.
           * @format uri
           */
          pdf_url?: string | null;
          /** The template UID used to create the image. */
          template?: string;
          /** The rendered image width in pixels. */
          width?: number;
          /** The rendered image height in pixels. */
          height?: number;
          /** Custom metadata stored with the image. */
          metadata?: string | null;
          /** The image creation timestamp. */
          created_at?: string;
          /** Whether PDF rendering was requested. */
          render_pdf?: boolean;
          /** Whether transparent background rendering was requested. */
          transparent?: boolean;
          /**
           * The webhook URL notified on completion.
           * @format uri
           */
          webhook_url?: string | null;
          /** The HTTP status code returned by the webhook endpoint. */
          webhook_response_code?: number | null;
          /** The modifications applied to the template. */
          modifications?: Array<{
            /** The layer name. */
            name?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Bannerbear template by UID. */
    "bannerbear.get_template": {
      input: {
        /**
         * The Bannerbear resource UID.
         * @minLength 1
         */
        uid: string;
        /** Whether to include current layer defaults. */
        extended?: boolean;
        /**
         * The Bannerbear project UID. Required when using a Full Access Master API Key.
         * @minLength 1
         */
        project_id?: string;
      };
      output: {
        /** One Bannerbear template. */
        template: {
          /** The unique template UID. */
          uid?: string;
          /** The template name. */
          name?: string;
          /**
           * The API URL for this template.
           * @format uri
           */
          self?: string;
          /** The template width in pixels. */
          width?: number;
          /** The template height in pixels. */
          height?: number;
          /** Tags assigned to this template. */
          tags?: Array<string>;
          /** Custom metadata stored with the template. */
          metadata?: string | null;
          /**
           * The template preview image URL.
           * @format uri
           */
          preview_url?: string | null;
          /** The template creation timestamp. */
          created_at?: string;
          /** The template update timestamp. */
          updated_at?: string;
          /** Available layer modifications for this template. */
          available_modifications?: Array<{
            /** The layer name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Current layer defaults returned when extended=true. */
          current_defaults?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List Bannerbear templates in the connected project. */
    "bannerbear.list_templates": {
      input: {
        /**
         * The page of results to retrieve. Bannerbear returns 25 items per page.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of templates to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Filter templates by tag.
         * @minLength 1
         */
        tag?: string;
        /**
         * Filter templates by partial name match.
         * @minLength 1
         */
        name?: string;
        /** Whether to include current layer defaults. */
        extended?: boolean;
        /**
         * The Bannerbear project UID. Required when using a Full Access Master API Key.
         * @minLength 1
         */
        project_id?: string;
      };
      output: {
        /** Templates returned by Bannerbear. */
        templates: Array<{
          /** The unique template UID. */
          uid?: string;
          /** The template name. */
          name?: string;
          /**
           * The API URL for this template.
           * @format uri
           */
          self?: string;
          /** The template width in pixels. */
          width?: number;
          /** The template height in pixels. */
          height?: number;
          /** Tags assigned to this template. */
          tags?: Array<string>;
          /** Custom metadata stored with the template. */
          metadata?: string | null;
          /**
           * The template preview image URL.
           * @format uri
           */
          preview_url?: string | null;
          /** The template creation timestamp. */
          created_at?: string;
          /** The template update timestamp. */
          updated_at?: string;
          /** Available layer modifications for this template. */
          available_modifications?: Array<{
            /** The layer name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Current layer defaults returned when extended=true. */
          current_defaults?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
