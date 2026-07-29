import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate an image from a TemplateFox image template and return a signed download URL. */
    "templatefox.create_image": {
      input: {
        /**
         * The 12-character TemplateFox template ID.
         * @minLength 12
         * @maxLength 12
         */
        templateId: string;
        /**
         * Layer modifications to apply before rendering.
         * @maxItems 100
         */
        modifications?: Array<{
          /**
           * Layer name to modify.
           * @minLength 1
           * @maxLength 200
           */
          name: string;
          /**
           * Replacement text for the layer.
           * @maxLength 10000
           */
          text?: string;
          /**
           * Replacement image URL for the layer.
           * @maxLength 2000
           * @format uri
           */
          imageUrl?: string;
          /**
           * CSS text color applied to the layer.
           * @maxLength 100
           */
          color?: string;
          /**
           * CSS background color applied to the layer.
           * @maxLength 100
           */
          background?: string;
          /** Whether the layer should be hidden. */
          hidden?: boolean;
        }>;
        /** Template data keyed by TemplateFox variable names. */
        data?: Record<string, unknown>;
        /** Generated image format. */
        format?: "png" | "jpeg" | "webp";
        /**
         * Output width in pixels.
         * @minimum 100
         * @maximum 4000
         */
        width?: number;
        /**
         * JPEG or WebP compression quality from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        quality?: number;
        /**
         * Signed URL expiration in seconds.
         * @minimum 60
         * @maximum 604800
         */
        expiration?: number;
        /**
         * Custom output filename without the file extension.
         * @minLength 1
         * @maxLength 100
         */
        filename?: string;
        /**
         * Template version tag or version number. When omitted, TemplateFox uses the current draft.
         * @minLength 1
         * @maxLength 50
         */
        version?: string;
      };
      output: {
        /**
         * Signed URL to download the generated image.
         * @format uri
         */
        url: string;
        /** Filename of the generated image. */
        filename: string;
        /** Remaining TemplateFox credits after the request. */
        creditsRemaining: number;
        /** Seconds until the signed URL expires. */
        expiresIn: number;
        /** Non-fatal warnings returned by TemplateFox. */
        warnings: Array<string> | null;
      };
    };
    /** Generate a PDF from a TemplateFox template and return a signed download URL. */
    "templatefox.create_pdf": {
      input: {
        /**
         * The 12-character TemplateFox template ID.
         * @minLength 12
         * @maxLength 12
         */
        templateId: string;
        /** Template data keyed by TemplateFox variable names. */
        data: Record<string, unknown>;
        /**
         * Signed URL expiration in seconds.
         * @minimum 60
         * @maximum 604800
         */
        expiration?: number;
        /**
         * Custom output filename without the file extension.
         * @minLength 1
         * @maxLength 100
         */
        filename?: string;
        /** PDF standards-compliant output variant. */
        pdfVariant?: "pdf/a-1b" | "pdf/a-2b" | "pdf/a-3b";
        /**
         * Template version tag or version number. When omitted, TemplateFox uses the current draft.
         * @minLength 1
         * @maxLength 50
         */
        version?: string;
      };
      output: {
        /**
         * Signed URL to download the generated PDF.
         * @format uri
         */
        url: string;
        /** Filename of the generated PDF. */
        filename: string;
        /** Remaining TemplateFox credits after the request. */
        creditsRemaining: number;
        /** Seconds until the signed URL expires. */
        expiresIn: number;
      };
    };
    /** Extract selected pages from a PDF URL with TemplateFox and return a signed download URL. */
    "templatefox.extract_pdf_pages": {
      input: {
        /**
         * Public HTTPS URL for TemplateFox to download the PDF.
         * @format uri
         */
        pdfUrl: string;
        /**
         * 1-indexed page selection such as `1-3, 5, 7-9`.
         * @minLength 1
         */
        pages: string;
        /**
         * Signed URL expiration in seconds.
         * @minimum 60
         * @maximum 604800
         */
        expiration?: number;
        /**
         * Custom output filename without the file extension.
         * @minLength 1
         * @maxLength 100
         */
        filename?: string;
      };
      output: {
        /**
         * Signed URL to download the generated PDF.
         * @format uri
         */
        url: string;
        /** Filename of the generated PDF. */
        filename: string;
        /** Remaining TemplateFox credits after the request. */
        creditsRemaining: number;
        /** Seconds until the signed URL expires. */
        expiresIn: number;
      };
    };
    /** Get TemplateFox account information including remaining credits. */
    "templatefox.get_account": {
      input: Record<string, never>;
      output: {
        /** TemplateFox account information. */
        account: {
          /** Remaining TemplateFox credits. */
          credits: number;
          /** Account email address returned by TemplateFox. */
          email: string | null;
        };
      };
    };
    /** Get dynamic field definitions for a TemplateFox template. */
    "templatefox.get_template_fields": {
      input: {
        /**
         * The 12-character TemplateFox template ID.
         * @minLength 12
         * @maxLength 12
         */
        templateId: string;
      };
      output: {
        /** Template fields. */
        fields: Array<{
          /** Template field key. */
          key: string;
          /** Template field label. */
          label: string;
          /** Template field type. */
          type: string;
          /** Whether the field is required. */
          required: boolean;
          /** Help text returned by TemplateFox. */
          helpText: string | null;
          /** Nested field spec for array fields. */
          spec: Array<{
            /** Nested field name. */
            name: string;
            /** Nested field label. */
            label: string;
            /** Nested field type. */
            type: string;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List TemplateFox templates visible to the API key. */
    "templatefox.list_templates": {
      input: {
        /** Filter templates by product kind. */
        kind?: "pdf" | "image";
      };
      output: {
        /** Templates visible to the API key. */
        templates: Array<{
          /** Template ID. */
          id: string;
          /** Template name. */
          name: string;
          /** Template kind. */
          kind: "pdf" | "image" | null;
          /** Template creation timestamp. */
          createdAt: string | null;
          /** Template update timestamp. */
          updatedAt: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Merge multiple PDF URLs with TemplateFox and return a signed download URL for the result. */
    "templatefox.merge_pdfs": {
      input: {
        /**
         * Ordered PDF URLs to merge.
         * @minItems 2
         */
        pdfUrls: Array<string>;
        /**
         * Signed URL expiration in seconds.
         * @minimum 60
         * @maximum 604800
         */
        expiration?: number;
        /**
         * Custom output filename without the file extension.
         * @minLength 1
         * @maxLength 100
         */
        filename?: string;
      };
      output: {
        /**
         * Signed URL to download the generated PDF.
         * @format uri
         */
        url: string;
        /** Filename of the generated PDF. */
        filename: string;
        /** Remaining TemplateFox credits after the request. */
        creditsRemaining: number;
        /** Seconds until the signed URL expires. */
        expiresIn: number;
      };
    };
    /** Rotate all pages or selected pages in a PDF URL with TemplateFox and return a signed download URL. */
    "templatefox.rotate_pdf": {
      input: {
        /**
         * Public HTTPS URL for TemplateFox to download the PDF.
         * @format uri
         */
        pdfUrl: string;
        /** Rotation in degrees applied to every page. */
        rotation?: number;
        /** Per-page rotations keyed by 1-indexed page number. */
        pageRotations?: Record<string, number>;
        /**
         * Signed URL expiration in seconds.
         * @minimum 60
         * @maximum 604800
         */
        expiration?: number;
        /**
         * Custom output filename without the file extension.
         * @minLength 1
         * @maxLength 100
         */
        filename?: string;
      };
      output: {
        /**
         * Signed URL to download the generated PDF.
         * @format uri
         */
        url: string;
        /** Filename of the generated PDF. */
        filename: string;
        /** Remaining TemplateFox credits after the request. */
        creditsRemaining: number;
        /** Seconds until the signed URL expires. */
        expiresIn: number;
      };
    };
  }
}
