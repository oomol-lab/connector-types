import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Edit one publicly accessible image with Claid's synchronous image editing API and return the processed image metadata. */
    "claid_ai.edit_image": {
      input: {
        /**
         * The public input image URL sent to Claid.
         * @minLength 1
         * @format uri
         */
        input: string;
        /** The Claid image operations object. */
        operations: {
          /** The restorations options returned to Claid. */
          restorations?: Record<string, unknown>;
          /** The adjustments options returned to Claid. */
          adjustments?: Record<string, unknown>;
          /** The background options returned to Claid. */
          background?: Record<string, unknown>;
          /** The resizing options returned to Claid. */
          resizing?: Record<string, unknown>;
          /** The privacy options returned to Claid. */
          privacy?: Record<string, unknown>;
          /** The generative options returned to Claid. */
          generative?: Record<string, unknown>;
          /** A nested Claid operation value. */
          padding?: string | number | boolean | Array<unknown> | Record<string, unknown> | null;
          [key: string]: unknown;
        };
        /** The output destination or options accepted by Claid. */
        output?: string | {
          /**
           * The explicit output destination URL or storage URI.
           * @minLength 1
           * @format uri
           */
          destination?: string;
          /** The output metadata options accepted by Claid. */
          metadata?: {
            /** The output DPI value. */
            dpi: number;
            /** The color space configuration sent to Claid. */
            color_space: "RGB" | "CMYK" | {
              /** The color space type. */
              type: "CMYK";
              /** The CMYK profile to apply. */
              color_profile: "ISO_Coated" | "ISO_Uncoated" | "USWeb_Coated" | "USWeb_Uncoated";
            };
          };
          /** The output format configuration accepted by Claid. */
          format?: "jpeg" | "png" | "webp" | "avif" | "tiff" | {
            /** The output format type. */
            type: "jpeg";
            /**
             * The JPEG quality value.
             * @minimum 1
             * @maximum 100
             */
            quality: number;
            /** Whether progressive JPEG output should be used. */
            progressive: boolean;
          } | {
            /** The output format type. */
            type: "png";
            /** The PNG compression mode. */
            compression: "fast" | "best" | "optimal";
          } | {
            /** The output format type. */
            type: "webp" | "avif" | "tiff";
            /** The output compression configuration. */
            compression: "lossy" | "lossless" | {
              /** The compression type. */
              type: "lossy";
              /**
               * The lossy compression quality value.
               * @minimum 1
               * @maximum 100
               */
              quality: number;
            } | {
              /** The compression type. */
              type: "lossless";
            };
          };
        };
      };
      output: {
        /** The normalized synchronous Claid edit result. */
        result: {
          /** The Claid image metadata object returned for an input or output image. */
          input: {
            /** The file extension returned by Claid. */
            ext: string;
            /** The megapixel count returned by Claid. */
            mps: number;
            /** The MIME type returned by Claid. */
            mime: string;
            /** The file format returned by Claid. */
            format: string;
            /** The image width in pixels. */
            width: number;
            /** The image height in pixels. */
            height: number;
            /**
             * The temporary public output URL returned by Claid.
             * @format uri
             */
            tmp_url?: string | null;
            /** A string value. */
            object_key?: string | null;
            /** A string value. */
            object_bucket?: string | null;
            /** A string value. */
            object_uri?: string | null;
            /** A string value. */
            claid_storage_uri?: string | null;
          };
          /** The Claid image metadata object returned for an input or output image. */
          output: {
            /** The file extension returned by Claid. */
            ext: string;
            /** The megapixel count returned by Claid. */
            mps: number;
            /** The MIME type returned by Claid. */
            mime: string;
            /** The file format returned by Claid. */
            format: string;
            /** The image width in pixels. */
            width: number;
            /** The image height in pixels. */
            height: number;
            /**
             * The temporary public output URL returned by Claid.
             * @format uri
             */
            tmp_url?: string | null;
            /** A string value. */
            object_key?: string | null;
            /** A string value. */
            object_bucket?: string | null;
            /** A string value. */
            object_uri?: string | null;
            /** A string value. */
            claid_storage_uri?: string | null;
          };
          /** The optional profiling object returned by Claid. */
          profiling?: unknown;
        };
      };
    };
    /** Poll one Claid async image editing task by ID and return its current status plus the finished result when available. */
    "claid_ai.get_edit_task": {
      input: {
        /** The Claid async task identifier. */
        taskId: number;
      };
      output: {
        /** The current Claid async edit task state. */
        task: {
          /** The Claid async task identifier. */
          id: number;
          /** The Claid async task status. */
          status: "ACCEPTED" | "WAITING" | "PROCESSING" | "DONE" | "ERROR" | "CANCELLED" | "PAUSED";
          /**
           * The Claid result polling URL when returned.
           * @format uri
           */
          result_url?: string | null;
          /** The task creation timestamp returned by Claid. */
          created_at: string;
          /** The request object echoed by Claid async tasks. */
          request: {
            /**
             * The input image URL or storage URI sent to Claid.
             * @minLength 1
             * @format uri
             */
            input: string;
            /** The Claid image operations object. */
            operations: {
              /** The restorations options returned to Claid. */
              restorations?: Record<string, unknown>;
              /** The adjustments options returned to Claid. */
              adjustments?: Record<string, unknown>;
              /** The background options returned to Claid. */
              background?: Record<string, unknown>;
              /** The resizing options returned to Claid. */
              resizing?: Record<string, unknown>;
              /** The privacy options returned to Claid. */
              privacy?: Record<string, unknown>;
              /** The generative options returned to Claid. */
              generative?: Record<string, unknown>;
              /** A nested Claid operation value. */
              padding?: string | number | boolean | Array<unknown> | Record<string, unknown> | null;
              [key: string]: unknown;
            };
            /** The output destination or options accepted by Claid. */
            output?: string | {
              /**
               * The explicit output destination URL or storage URI.
               * @minLength 1
               * @format uri
               */
              destination?: string;
              /** The output metadata options accepted by Claid. */
              metadata?: {
                /** The output DPI value. */
                dpi: number;
                /** The color space configuration sent to Claid. */
                color_space: "RGB" | "CMYK" | {
                  /** The color space type. */
                  type: "CMYK";
                  /** The CMYK profile to apply. */
                  color_profile: "ISO_Coated" | "ISO_Uncoated" | "USWeb_Coated" | "USWeb_Uncoated";
                };
              };
              /** The output format configuration accepted by Claid. */
              format?: "jpeg" | "png" | "webp" | "avif" | "tiff" | {
                /** The output format type. */
                type: "jpeg";
                /**
                 * The JPEG quality value.
                 * @minimum 1
                 * @maximum 100
                 */
                quality: number;
                /** Whether progressive JPEG output should be used. */
                progressive: boolean;
              } | {
                /** The output format type. */
                type: "png";
                /** The PNG compression mode. */
                compression: "fast" | "best" | "optimal";
              } | {
                /** The output format type. */
                type: "webp" | "avif" | "tiff";
                /** The output compression configuration. */
                compression: "lossy" | "lossless" | {
                  /** The compression type. */
                  type: "lossy";
                  /**
                   * The lossy compression quality value.
                   * @minimum 1
                   * @maximum 100
                   */
                  quality: number;
                } | {
                  /** The compression type. */
                  type: "lossless";
                };
              };
            };
          };
          /** The task errors returned by Claid. */
          errors?: Array<{
            /** The error text returned by Claid. */
            error: string;
            /** The timestamp when this error was created. */
            created_at: string;
            /** The Claid image metadata object returned for an input or output image. */
            input_object: {
              /** The file extension returned by Claid. */
              ext: string;
              /** The megapixel count returned by Claid. */
              mps: number;
              /** The MIME type returned by Claid. */
              mime: string;
              /** The file format returned by Claid. */
              format: string;
              /** The image width in pixels. */
              width: number;
              /** The image height in pixels. */
              height: number;
              /**
               * The temporary public output URL returned by Claid.
               * @format uri
               */
              tmp_url?: string | null;
              /** A string value. */
              object_key?: string | null;
              /** A string value. */
              object_bucket?: string | null;
              /** A string value. */
              object_uri?: string | null;
              /** A string value. */
              claid_storage_uri?: string | null;
            };
            [key: string]: unknown;
          }>;
          /** The async task result returned by Claid. */
          result?: {
            /** The Claid image metadata object returned for an input or output image. */
            input_object: {
              /** The file extension returned by Claid. */
              ext: string;
              /** The megapixel count returned by Claid. */
              mps: number;
              /** The MIME type returned by Claid. */
              mime: string;
              /** The file format returned by Claid. */
              format: string;
              /** The image width in pixels. */
              width: number;
              /** The image height in pixels. */
              height: number;
              /**
               * The temporary public output URL returned by Claid.
               * @format uri
               */
              tmp_url?: string | null;
              /** A string value. */
              object_key?: string | null;
              /** A string value. */
              object_bucket?: string | null;
              /** A string value. */
              object_uri?: string | null;
              /** A string value. */
              claid_storage_uri?: string | null;
            };
            /** The Claid image metadata object returned for an input or output image. */
            output_object: {
              /** The file extension returned by Claid. */
              ext: string;
              /** The megapixel count returned by Claid. */
              mps: number;
              /** The MIME type returned by Claid. */
              mime: string;
              /** The file format returned by Claid. */
              format: string;
              /** The image width in pixels. */
              width: number;
              /** The image height in pixels. */
              height: number;
              /**
               * The temporary public output URL returned by Claid.
               * @format uri
               */
              tmp_url?: string | null;
              /** A string value. */
              object_key?: string | null;
              /** A string value. */
              object_bucket?: string | null;
              /** A string value. */
              object_uri?: string | null;
              /** A string value. */
              claid_storage_uri?: string | null;
            };
          } | null;
        };
      };
    };
    /** Submit one publicly accessible image to Claid's async image editing API and return the task handle for later polling. */
    "claid_ai.submit_edit_image": {
      input: {
        /**
         * The public input image URL sent to Claid.
         * @minLength 1
         * @format uri
         */
        input: string;
        /** The Claid image operations object. */
        operations: {
          /** The restorations options returned to Claid. */
          restorations?: Record<string, unknown>;
          /** The adjustments options returned to Claid. */
          adjustments?: Record<string, unknown>;
          /** The background options returned to Claid. */
          background?: Record<string, unknown>;
          /** The resizing options returned to Claid. */
          resizing?: Record<string, unknown>;
          /** The privacy options returned to Claid. */
          privacy?: Record<string, unknown>;
          /** The generative options returned to Claid. */
          generative?: Record<string, unknown>;
          /** A nested Claid operation value. */
          padding?: string | number | boolean | Array<unknown> | Record<string, unknown> | null;
          [key: string]: unknown;
        };
        /** The output destination or options accepted by Claid. */
        output?: string | {
          /**
           * The explicit output destination URL or storage URI.
           * @minLength 1
           * @format uri
           */
          destination?: string;
          /** The output metadata options accepted by Claid. */
          metadata?: {
            /** The output DPI value. */
            dpi: number;
            /** The color space configuration sent to Claid. */
            color_space: "RGB" | "CMYK" | {
              /** The color space type. */
              type: "CMYK";
              /** The CMYK profile to apply. */
              color_profile: "ISO_Coated" | "ISO_Uncoated" | "USWeb_Coated" | "USWeb_Uncoated";
            };
          };
          /** The output format configuration accepted by Claid. */
          format?: "jpeg" | "png" | "webp" | "avif" | "tiff" | {
            /** The output format type. */
            type: "jpeg";
            /**
             * The JPEG quality value.
             * @minimum 1
             * @maximum 100
             */
            quality: number;
            /** Whether progressive JPEG output should be used. */
            progressive: boolean;
          } | {
            /** The output format type. */
            type: "png";
            /** The PNG compression mode. */
            compression: "fast" | "best" | "optimal";
          } | {
            /** The output format type. */
            type: "webp" | "avif" | "tiff";
            /** The output compression configuration. */
            compression: "lossy" | "lossless" | {
              /** The compression type. */
              type: "lossy";
              /**
               * The lossy compression quality value.
               * @minimum 1
               * @maximum 100
               */
              quality: number;
            } | {
              /** The compression type. */
              type: "lossless";
            };
          };
        };
      };
      output: {
        /** The accepted async Claid edit task. */
        task: {
          /** The Claid async task identifier. */
          id: number;
          /** The Claid async task status. */
          status: "ACCEPTED" | "WAITING" | "PROCESSING" | "DONE" | "ERROR" | "CANCELLED" | "PAUSED";
          /**
           * The Claid result polling URL.
           * @format uri
           */
          result_url?: string | null;
          /** The task creation timestamp returned by Claid. */
          created_at: string;
          /** The request object echoed by Claid async tasks. */
          request: {
            /**
             * The input image URL or storage URI sent to Claid.
             * @minLength 1
             * @format uri
             */
            input: string;
            /** The Claid image operations object. */
            operations: {
              /** The restorations options returned to Claid. */
              restorations?: Record<string, unknown>;
              /** The adjustments options returned to Claid. */
              adjustments?: Record<string, unknown>;
              /** The background options returned to Claid. */
              background?: Record<string, unknown>;
              /** The resizing options returned to Claid. */
              resizing?: Record<string, unknown>;
              /** The privacy options returned to Claid. */
              privacy?: Record<string, unknown>;
              /** The generative options returned to Claid. */
              generative?: Record<string, unknown>;
              /** A nested Claid operation value. */
              padding?: string | number | boolean | Array<unknown> | Record<string, unknown> | null;
              [key: string]: unknown;
            };
            /** The output destination or options accepted by Claid. */
            output?: string | {
              /**
               * The explicit output destination URL or storage URI.
               * @minLength 1
               * @format uri
               */
              destination?: string;
              /** The output metadata options accepted by Claid. */
              metadata?: {
                /** The output DPI value. */
                dpi: number;
                /** The color space configuration sent to Claid. */
                color_space: "RGB" | "CMYK" | {
                  /** The color space type. */
                  type: "CMYK";
                  /** The CMYK profile to apply. */
                  color_profile: "ISO_Coated" | "ISO_Uncoated" | "USWeb_Coated" | "USWeb_Uncoated";
                };
              };
              /** The output format configuration accepted by Claid. */
              format?: "jpeg" | "png" | "webp" | "avif" | "tiff" | {
                /** The output format type. */
                type: "jpeg";
                /**
                 * The JPEG quality value.
                 * @minimum 1
                 * @maximum 100
                 */
                quality: number;
                /** Whether progressive JPEG output should be used. */
                progressive: boolean;
              } | {
                /** The output format type. */
                type: "png";
                /** The PNG compression mode. */
                compression: "fast" | "best" | "optimal";
              } | {
                /** The output format type. */
                type: "webp" | "avif" | "tiff";
                /** The output compression configuration. */
                compression: "lossy" | "lossless" | {
                  /** The compression type. */
                  type: "lossy";
                  /**
                   * The lossy compression quality value.
                   * @minimum 1
                   * @maximum 100
                   */
                  quality: number;
                } | {
                  /** The compression type. */
                  type: "lossless";
                };
              };
            };
          };
          /** The task errors returned by Claid. */
          errors?: Array<{
            /** The error text returned by Claid. */
            error: string;
            /** The timestamp when this error was created. */
            created_at: string;
            /** The Claid image metadata object returned for an input or output image. */
            input_object: {
              /** The file extension returned by Claid. */
              ext: string;
              /** The megapixel count returned by Claid. */
              mps: number;
              /** The MIME type returned by Claid. */
              mime: string;
              /** The file format returned by Claid. */
              format: string;
              /** The image width in pixels. */
              width: number;
              /** The image height in pixels. */
              height: number;
              /**
               * The temporary public output URL returned by Claid.
               * @format uri
               */
              tmp_url?: string | null;
              /** A string value. */
              object_key?: string | null;
              /** A string value. */
              object_bucket?: string | null;
              /** A string value. */
              object_uri?: string | null;
              /** A string value. */
              claid_storage_uri?: string | null;
            };
            [key: string]: unknown;
          }>;
          /** The async task result returned by Claid. */
          result?: {
            /** The Claid image metadata object returned for an input or output image. */
            input_object: {
              /** The file extension returned by Claid. */
              ext: string;
              /** The megapixel count returned by Claid. */
              mps: number;
              /** The MIME type returned by Claid. */
              mime: string;
              /** The file format returned by Claid. */
              format: string;
              /** The image width in pixels. */
              width: number;
              /** The image height in pixels. */
              height: number;
              /**
               * The temporary public output URL returned by Claid.
               * @format uri
               */
              tmp_url?: string | null;
              /** A string value. */
              object_key?: string | null;
              /** A string value. */
              object_bucket?: string | null;
              /** A string value. */
              object_uri?: string | null;
              /** A string value. */
              claid_storage_uri?: string | null;
            };
            /** The Claid image metadata object returned for an input or output image. */
            output_object: {
              /** The file extension returned by Claid. */
              ext: string;
              /** The megapixel count returned by Claid. */
              mps: number;
              /** The MIME type returned by Claid. */
              mime: string;
              /** The file format returned by Claid. */
              format: string;
              /** The image width in pixels. */
              width: number;
              /** The image height in pixels. */
              height: number;
              /**
               * The temporary public output URL returned by Claid.
               * @format uri
               */
              tmp_url?: string | null;
              /** A string value. */
              object_key?: string | null;
              /** A string value. */
              object_bucket?: string | null;
              /** A string value. */
              object_uri?: string | null;
              /** A string value. */
              claid_storage_uri?: string | null;
            };
          } | null;
        };
      };
    };
  }
}
