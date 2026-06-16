import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Queue one Placid image generation request from a template UUID and dynamic layer payload, then return the image handle for polling. */
    "placid.create_image": {
      input: {
        /**
         * The Placid template UUID to render.
         * @minLength 1
         */
        template_uuid: string;
        /**
         * Optional webhook URL that Placid should call after the image is generated.
         * @minLength 1
         * @format uri
         */
        webhook_success?: string;
        /** Whether Placid should try to render the image immediately instead of queueing it. */
        create_now?: boolean;
        /** The passthrough payload echoed by Placid. */
        passthrough?: string | Array<unknown> | Record<string, unknown>;
        /** Optional error handling flags forwarded to Placid. */
        errors?: Array<string>;
        /** The dynamic layer values keyed by template layer name and forwarded to Placid as-is. */
        layers?: Record<string, unknown>;
        /** Optional export modifications for the generated image. */
        modifications?: {
          /**
           * The requested output width in pixels.
           * @exclusiveMinimum 0
           */
          width?: number;
          /**
           * The requested output height in pixels.
           * @exclusiveMinimum 0
           */
          height?: number;
          /**
           * The output filename to use for the generated image.
           * @minLength 1
           */
          filename?: string;
          /** The output image format. */
          image_format?: "auto" | "jpg" | "png" | "webp";
          /** The output DPI used by Placid when supported. */
          dpi?: number;
          /** The output color mode. */
          color_mode?: "rgb" | "cmyk";
        };
        /** Optional transfer settings used to copy the generated image into external storage. */
        transfer?: {
          /**
           * The transfer target type such as `s3`.
           * @minLength 1
           */
          to?: string;
          /**
           * The storage access key.
           * @minLength 1
           */
          key?: string;
          /**
           * The storage secret key.
           * @minLength 1
           */
          secret?: string;
          /**
           * The storage region.
           * @minLength 1
           */
          region?: string;
          /**
           * The destination bucket name.
           * @minLength 1
           */
          bucket?: string;
          /** The transferred object visibility. */
          visibility?: "public" | "private";
          /**
           * The destination file path including filename.
           * @minLength 1
           */
          path?: string;
          /**
           * The custom storage endpoint URL when one is required.
           * @minLength 1
           * @format uri
           */
          endpoint?: string;
          /**
           * The optional temporary security token.
           * @minLength 1
           */
          token?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** One Placid image generation object. */
        image: {
          /** The unique Placid image identifier. */
          id: number;
          /** The current Placid image generation status. */
          status: "queued" | "finished" | "error";
          /**
           * The generated image URL when the render has finished.
           * @format uri
           */
          image_url?: string | null;
          /**
           * The Placid polling URL for retrieving the image status.
           * @format uri
           */
          polling_url?: string | null;
          /** The raw image object returned by Placid. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one Placid image request by identifier and return whether the delete succeeded. */
    "placid.delete_image": {
      input: {
        /**
         * The Placid image identifier to delete.
         * @exclusiveMinimum 0
         */
        image_id: number;
      };
      output: {
        /** Whether the image was deleted successfully. */
        deleted: boolean;
      };
    };
    /** Get the current Placid image generation status for one image identifier and return the finished image URL when available. */
    "placid.get_image": {
      input: {
        /**
         * The Placid image identifier returned by create_image.
         * @exclusiveMinimum 0
         */
        image_id: number;
      };
      output: {
        /** One Placid image generation object. */
        image: {
          /** The unique Placid image identifier. */
          id: number;
          /** The current Placid image generation status. */
          status: "queued" | "finished" | "error";
          /**
           * The generated image URL when the render has finished.
           * @format uri
           */
          image_url?: string | null;
          /**
           * The Placid polling URL for retrieving the image status.
           * @format uri
           */
          polling_url?: string | null;
          /** The raw image object returned by Placid. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Placid template by UUID and return its dynamic layer metadata for downstream image generation. */
    "placid.get_template": {
      input: {
        /**
         * The Placid template UUID to retrieve.
         * @minLength 1
         */
        template_uuid: string;
      };
      output: {
        /** One Placid template summary. */
        template: {
          /**
           * The Placid template UUID.
           * @minLength 1
           */
          uuid: string;
          /**
           * The template title.
           * @minLength 1
           */
          title: string;
          /**
           * The thumbnail URL when Placid has generated one.
           * @format uri
           */
          thumbnail?: string | null;
          /** The tags assigned to the template. */
          tags?: Array<string>;
          /** The dynamic layers available on the template. */
          layers?: Array<{
            /**
             * The layer name used when filling data into the template.
             * @minLength 1
             */
            name: string;
            /**
             * The dynamic layer type returned by Placid.
             * @minLength 1
             */
            type: string;
            [key: string]: unknown;
          }>;
          /** The raw template object returned by Placid. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List Placid templates for the connected project with optional collection, title, tag, ordering, or next-page URL filters. */
    "placid.list_templates": {
      input: {
        /**
         * Optional collection UUID used to filter templates.
         * @minLength 1
         */
        collection_id?: string;
        /**
         * Optional title filter applied by Placid.
         * @minLength 1
         */
        title_filter?: string;
        /**
         * Optional tag filter applied by Placid.
         * @minLength 1
         */
        tag?: string;
        /**
         * Optional sort string such as `created_at-asc`, `updated_at-desc`, or `title-asc`.
         * @minLength 1
         */
        order_by?: string;
        /**
         * Optional pagination URL previously returned by Placid links; when provided it overrides the base list path.
         * @minLength 1
         * @format uri
         */
        page_url?: string;
      };
      output: {
        /** The templates returned by Placid. */
        templates: Array<{
          /**
           * The Placid template UUID.
           * @minLength 1
           */
          uuid: string;
          /**
           * The template title.
           * @minLength 1
           */
          title: string;
          /**
           * The thumbnail URL when Placid has generated one.
           * @format uri
           */
          thumbnail?: string | null;
          /** The tags assigned to the template. */
          tags?: Array<string>;
          /** The dynamic layers available on the template. */
          layers?: Array<{
            /**
             * The layer name used when filling data into the template.
             * @minLength 1
             */
            name: string;
            /**
             * The dynamic layer type returned by Placid.
             * @minLength 1
             */
            type: string;
            [key: string]: unknown;
          }>;
          /** The raw template object returned by Placid. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The pagination links returned by Placid template lists. */
        links: {
          /**
           * The first page URL when Placid returns one.
           * @format uri
           */
          first: string | null;
          /**
           * The last page URL when Placid returns one.
           * @format uri
           */
          last: string | null;
          /**
           * The previous page URL when Placid returns one.
           * @format uri
           */
          prev: string | null;
          /**
           * The next page URL when Placid returns one.
           * @format uri
           */
          next: string | null;
        };
        /** The pagination metadata returned by the Placid template list endpoint. */
        meta: {
          /**
           * The API path echoed by Placid when available.
           * @format uri
           */
          path?: string | null;
          /** The number of templates included per page when Placid returns it. */
          per_page?: number | null;
          /** The raw pagination metadata returned by Placid. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
