import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Transform a TinyPNG output image and return a transit URL for the resulting file. */
    "tinypng.output_image": {
      input: {
        /**
         * The TinyPNG image ID returned by `shrink_image`.
         * @minLength 1
         */
        imageId: string;
        /** TinyPNG resize options. */
        resize?: {
          /** The resize strategy to apply to the image. */
          method: "scale" | "fit" | "cover" | "thumb";
          /**
           * The target width in pixels.
           * @minimum 1
           */
          width?: number;
          /**
           * The target height in pixels.
           * @minimum 1
           */
          height?: number;
        };
        /** TinyPNG conversion options. */
        convert?: {
          /** One or more preferred output MIME types for conversion. */
          type: "image/avif" | "image/webp" | "image/jpeg" | "image/png" | "*/*" | Array<"image/avif" | "image/webp" | "image/jpeg" | "image/png" | "*/*">;
        };
        /**
         * Metadata fields to preserve in the output image.
         * @minItems 1
         */
        preserve?: Array<"copyright" | "creation" | "location">;
        /** TinyPNG transform options. */
        transform?: {
          /**
           * The background color used when flattening transparency.
           * @minLength 1
           */
          background: string;
        };
      };
      output: {
        /** The TinyPNG image ID used for this output request. */
        imageId: string;
        /** The current monthly compression count. */
        compressionCount?: number;
        /** The MIME type of the generated image. */
        contentType?: string;
        /** The size of the generated image in bytes. */
        contentLength?: number;
        /** The width of the generated image in pixels. */
        imageWidth?: number;
        /** The height of the generated image in pixels. */
        imageHeight?: number;
        /** The downloadable transformed image file. */
        image: {
          /** The filename of the transformed image. */
          name: string;
          /** The MIME type of the transformed image. */
          mimetype: string;
          /** The transit URL for downloading the transformed image. */
          s3url: string;
        };
      };
    };
    /** Create a TinyPNG compressed image resource from a public URL or base64-encoded image bytes. */
    "tinypng.shrink_image": {
      input: {
        /**
         * The public URL of the source image to compress.
         * @format uri
         */
        sourceUrl?: string;
        /**
         * The Base64-encoded image bytes to compress.
         * @minLength 1
         */
        contentBase64?: string;
      };
      output: {
        /** The TinyPNG image ID for later output requests. */
        imageId: string;
        /**
         * The TinyPNG output URL for the compressed image.
         * @format uri
         */
        outputUrl: string;
        /** The current monthly compression count. */
        compressionCount?: number;
        /** Metadata for the original input image. */
        input?: {
          /** The image size in bytes. */
          size?: number;
          /** The MIME type of the image. */
          type?: string;
          /** The image width in pixels. */
          width?: number;
          /** The image height in pixels. */
          height?: number;
        };
        /** Metadata for the compressed output image. */
        output?: {
          /** The image size in bytes. */
          size?: number;
          /** The MIME type of the image. */
          type?: string;
          /** The image width in pixels. */
          width?: number;
          /** The image height in pixels. */
          height?: number;
        };
      };
    };
  }
}
