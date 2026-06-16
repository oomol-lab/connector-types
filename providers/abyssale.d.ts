import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create or retrieve the dynamic image URL for an Abyssale design. */
    "abyssale.create_dynamic_image_url": {
      input: {
        /**
         * The unique identifier of the design.
         * @format uuid
         */
        designId: string;
        /** Whether API rate limiting should be enabled for the image. */
        enableRateLimit?: boolean;
        /** Whether production mode should be enabled for the image. */
        enableProductionMode?: boolean;
      };
      output: {
        /** The dynamic image identifier when returned by Abyssale. */
        id: string | null;
        /**
         * The dynamic image URL.
         * @format uri
         */
        url: string | null;
        /** The raw response object returned by Abyssale. */
        raw: Record<string, unknown>;
      };
    };
    /** Create an Abyssale project to organize templates and generated images. */
    "abyssale.create_project": {
      input: {
        /**
         * The project name.
         * @minLength 2
         * @maxLength 100
         */
        name: string;
      };
      output: {
        /** A normalized Abyssale project. */
        project: {
          /** The unique identifier of the project. */
          id: string | null;
          /** The display name of the project. */
          name: string | null;
          /** The project creation timestamp in seconds since epoch. */
          createdAt: number | null;
          /** The raw response object returned by Abyssale. */
          raw: Record<string, unknown>;
        };
        /** The raw response object returned by Abyssale. */
        raw: Record<string, unknown>;
      };
    };
    /** Generate one Abyssale image from a design using JSON element overrides and return the generated file metadata. */
    "abyssale.generate_banner": {
      input: {
        /**
         * The unique identifier of the design.
         * @format uuid
         */
        designId: string;
        /** Abyssale element overrides keyed by layer name and forwarded to the generation endpoint. */
        elements: Record<string, unknown>;
        /**
         * The format ID to generate when the design contains multiple formats.
         * @minLength 1
         */
        templateFormatName?: string;
        /**
         * The percentage of compression to apply.
         * @minimum 1
         * @maximum 100
         */
        fileCompressionLevel?: number;
      };
      output: {
        /** A normalized Abyssale generated file. */
        banner: {
          /** The unique identifier of the generated file. */
          id: string | null;
          /**
           * The public URL of the generated file.
           * @format uri
           */
          url: string | null;
          /** The generated file type when returned by Abyssale. */
          fileType: string | null;
          /** The file creation timestamp in seconds since epoch. */
          createdAt: number | null;
          /** The raw response object returned by Abyssale. */
          raw: Record<string, unknown>;
        };
        /** The raw response object returned by Abyssale. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve metadata for an Abyssale generated file. */
    "abyssale.get_banner": {
      input: {
        /**
         * The unique identifier of the generated file.
         * @format uuid
         */
        bannerId: string;
      };
      output: {
        /** A normalized Abyssale generated file. */
        banner: {
          /** The unique identifier of the generated file. */
          id: string | null;
          /**
           * The public URL of the generated file.
           * @format uri
           */
          url: string | null;
          /** The generated file type when returned by Abyssale. */
          fileType: string | null;
          /** The file creation timestamp in seconds since epoch. */
          createdAt: number | null;
          /** The raw response object returned by Abyssale. */
          raw: Record<string, unknown>;
        };
        /** The raw response object returned by Abyssale. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve Abyssale design details including formats, elements, and variables. */
    "abyssale.get_design": {
      input: {
        /**
         * The unique identifier of the design.
         * @format uuid
         */
        designId: string;
      };
      output: {
        /** A normalized Abyssale design summary. */
        design: {
          /** The unique identifier of the design. */
          id: string | null;
          /** The display name of the design. */
          name: string | null;
          /** The Abyssale design type. */
          type: "static" | "animated" | "printer" | "printer_multipage" | null;
          /**
           * The preview image URL of the first design format.
           * @format uri
           */
          previewUrl: string | null;
          /** The design creation timestamp in seconds since epoch. */
          createdAt: number | null;
          /** The design update timestamp in seconds since epoch. */
          updatedAt: number | null;
          /** The raw response object returned by Abyssale. */
          raw: Record<string, unknown>;
        };
        /** Formats available in the design. */
        formats: Array<Record<string, unknown>>;
        /** Customizable elements in the design. */
        elements: Array<Record<string, unknown>>;
        /** Variables used within text layers of the design. */
        variables: Record<string, unknown>;
        /** The raw response object returned by Abyssale. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve detailed information for one Abyssale design format. */
    "abyssale.get_design_format": {
      input: {
        /**
         * The unique identifier of the design.
         * @format uuid
         */
        designId: string;
        /**
         * The format name or UID.
         * @minLength 1
         */
        formatSpecifier: string;
      };
      output: {
        /** A normalized Abyssale design format. */
        format: {
          /** The format identifier. */
          id: string | null;
          /** The unique identifier of the format instance. */
          uid: string | null;
          /** The width of the format. */
          width: number | null;
          /** The height of the format. */
          height: number | null;
          /** The unit used by width and height. */
          unit: string | null;
          /**
           * The preview image URL for this format.
           * @format uri
           */
          previewUrl: string | null;
          /**
           * The dynamic image URL for this format.
           * @format uri
           */
          dynamicImageUrl: string | null;
          /** The raw response object returned by Abyssale. */
          raw: Record<string, unknown>;
        };
        /** Customizable elements in the design format. */
        elements: Array<Record<string, unknown>>;
        /** Variables used within text layers of the format. */
        variables: Record<string, unknown>;
        /** The raw response object returned by Abyssale. */
        raw: Record<string, unknown>;
      };
    };
    /** List Abyssale designs available to the API key. */
    "abyssale.list_designs": {
      input: Record<string, never>;
      output: {
        /** Designs returned by Abyssale. */
        designs: Array<{
          /** The unique identifier of the design. */
          id: string | null;
          /** The display name of the design. */
          name: string | null;
          /** The Abyssale design type. */
          type: "static" | "animated" | "printer" | "printer_multipage" | null;
          /**
           * The preview image URL of the first design format.
           * @format uri
           */
          previewUrl: string | null;
          /** The design creation timestamp in seconds since epoch. */
          createdAt: number | null;
          /** The design update timestamp in seconds since epoch. */
          updatedAt: number | null;
          /** The raw response object returned by Abyssale. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Abyssale design records. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List custom and Google fonts available in Abyssale. */
    "abyssale.list_fonts": {
      input: Record<string, never>;
      output: {
        /** Fonts returned by Abyssale. */
        fonts: Array<{
          /** The unique identifier of the font when returned by Abyssale. */
          id: string | null;
          /** The display name of the font. */
          name: string | null;
          /** The font family name when returned by Abyssale. */
          family: string | null;
          /** The raw response object returned by Abyssale. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Abyssale font records. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List Abyssale projects available to the API key. */
    "abyssale.list_projects": {
      input: Record<string, never>;
      output: {
        /** Projects returned by Abyssale. */
        projects: Array<{
          /** The unique identifier of the project. */
          id: string | null;
          /** The display name of the project. */
          name: string | null;
          /** The project creation timestamp in seconds since epoch. */
          createdAt: number | null;
          /** The raw response object returned by Abyssale. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Abyssale project records. */
        raw: Array<Record<string, unknown>>;
      };
    };
  }
}
