import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch the current Kraken.io plan status and monthly optimization quota. */
    "kraken_io.get_user_status": {
      input: Record<string, never>;
      output: {
        /** Whether the Kraken.io account is currently active. */
        active: boolean;
        /** The subscribed Kraken.io plan name. */
        planName: string;
        /** The total monthly quota in bytes. */
        quotaTotal: number;
        /** The used monthly quota in bytes. */
        quotaUsed: number;
        /** The remaining monthly quota in bytes. */
        quotaRemaining: number;
      };
    };
    /** Optimize one image with Kraken.io from either a public URL or direct upload, then store the result in connector transit. */
    "kraken_io.optimize_image": {
      input: {
        /**
         * The public URL of the source image to optimize.
         * @format uri
         */
        sourceUrl?: string;
        /**
         * The Base64-encoded source image bytes to upload.
         * @minLength 1
         */
        contentBase64?: string;
        /**
         * The filename used for direct upload requests.
         * @minLength 1
         */
        fileName?: string;
        /** Whether Kraken.io should use lossy optimization instead of lossless optimization. */
        lossy?: boolean;
        /**
         * The custom image quality level for JPG, PNG, and GIF output.
         * @minimum 1
         * @maximum 100
         */
        quality?: number;
        /** Whether to enable Kraken.io sandbox mode for development testing. */
        dev?: boolean;
        /** Whether Kraken.io should automatically orient the image from EXIF data. */
        autoOrient?: boolean;
        /**
         * The metadata sections to preserve in the optimized file.
         * @minItems 1
         */
        preserveMeta?: Array<"profile" | "date" | "copyright" | "geotag" | "orientation">;
        /** The JPEG chroma subsampling mode requested for optimization. */
        chromaSubsampling?: "4:2:0" | "4:2:2" | "4:4:4";
        /** Kraken.io resize settings for a single optimized output. */
        resize?: {
          /** The Kraken.io resize strategy to apply before optimization. */
          strategy: "exact" | "portrait" | "landscape" | "auto" | "fit" | "crop" | "square" | "fill";
          /**
           * The target width in pixels.
           * @exclusiveMinimum 0
           */
          width?: number;
          /**
           * The target height in pixels.
           * @exclusiveMinimum 0
           */
          height?: number;
          /**
           * The output square size in pixels for the square strategy.
           * @exclusiveMinimum 0
           */
          size?: number;
          /**
           * The crop origin x coordinate in pixels.
           * @minimum 0
           */
          x?: number;
          /**
           * The crop origin y coordinate in pixels.
           * @minimum 0
           */
          y?: number;
          /**
           * The percentage used to scale the cropped area after applying the crop strategy.
           * @exclusiveMinimum 0
           */
          scale?: number;
          /** The gravity or direction used when cropping or fitting an image. */
          cropMode?: "n" | "t" | "nw" | "tl" | "ne" | "tr" | "w" | "l" | "c" | "e" | "r" | "se" | "br" | "sw" | "bl" | "s" | "b";
          /**
           * The fill background color in HEX, RGB, or RGBA notation.
           * @minLength 1
           */
          background?: string;
          /** Whether Kraken.io should enhance small resized images after resizing. */
          enhance?: boolean;
        };
        /** Kraken.io image conversion settings. */
        convert?: {
          /** The output file format requested from Kraken.io. */
          format: "jpeg" | "png" | "gif" | "webp" | "avif";
          /**
           * The background color used when converting to a format that needs flattened transparency.
           * @minLength 1
           */
          background?: string;
          /** Whether Kraken.io should keep the original file extension after conversion. */
          keepExtension?: boolean;
        };
      };
      output: {
        /** The optimized filename returned by Kraken.io. */
        fileName: string;
        /** The original file size in bytes. */
        originalSize: number;
        /** The optimized file size in bytes. */
        optimizedSize: number;
        /** The number of bytes saved by Kraken.io. */
        savedBytes: number;
        /** The original image width in pixels. */
        originalWidth?: number;
        /** The original image height in pixels. */
        originalHeight?: number;
        /** The temporary Kraken.io download URL returned by the optimization request. */
        krakedUrl: string;
        /** The MIME type of the downloaded optimized file. */
        contentType: string;
        /** The downloaded optimized file size in bytes. */
        contentLength: number;
        /** The optimized file stored in connector transit. */
        file: {
          /** The filename of the optimized file stored in connector transit. */
          name: string;
          /** The MIME type of the optimized file. */
          mimetype: string;
          /** The transit URL for downloading the optimized file. */
          s3url: string;
        };
      };
    };
  }
}
