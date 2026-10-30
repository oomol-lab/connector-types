import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Accept estimated video costs and reserve credits. External sources start processing automatically. Otherwise PUT source bytes to the returned upload URLs and call complete_video_upload; repeated calls return the same URLs. */
    "topaz.accept_video_request": {
      input: {
        /**
         * Video enhancement request UUID.
         * @format uuid
         */
        requestId: string;
      };
      output: {
        /** Multipart upload ID. */
        uploadId?: string;
        /** Presigned source upload URLs. */
        urls?: Array<string>;
        /** External source processing message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Cancel a pending image job. Completed or non-cancellable jobs return a conflict. */
    "topaz.cancel_image_job": {
      input: {
        /**
         * Image processing job UUID.
         * @format uuid
         */
        processId: string;
      };
      output: {
        /** Whether cancellation was accepted. */
        accepted: boolean;
      };
    };
    /** Cancel a video job. Topaz may refund credits in full before processing or partially during processing. */
    "topaz.cancel_video_job": {
      input: {
        /**
         * Video enhancement request UUID.
         * @format uuid
         */
        requestId: string;
      };
      output: {
        /** Whether cancellation was accepted. */
        accepted: boolean;
        /** Cancellation and refund message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Complete an externally performed video upload and start processing. For one upload URL send [{partNum:1,eTag:unused}]; multipart uploads require the actual ordered part numbers and ETags returned by storage. */
    "topaz.complete_video_upload": {
      input: {
        /**
         * Video enhancement request UUID.
         * @format uuid
         */
        requestId: string;
        /** Optional source file MD5 hash. */
        md5Hash?: string;
        /**
         * Uploaded parts and ETags.
         * @minItems 1
         */
        uploadResults: Array<{
          /**
           * One-based part number.
           * @minimum 1
           */
          partNum: number;
          /**
           * ETag returned by the storage PUT, or unused for single-URL uploads.
           * @minLength 1
           */
          eTag: string;
        }>;
      };
      output: {
        /** Upload completion message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Create a standard video request and receive cost estimates. No credits are charged and processing does not start until accept_video_request. Prefer submit_video_enhancement for automatic external-source processing. */
    "topaz.create_video_request": {
      input: {
        /** Source metadata for the standard video workflow. */
        source: {
          /** Source video container. Case-insensitive. */
          container: "3gp" | "avi" | "dv" | "flv" | "m1v" | "m2t" | "m2ts" | "m2v" | "m4v" | "mkv" | "mov" | "mp4" | "mpeg" | "mpg" | "mts" | "mxf" | "ser" | "ts" | "vob" | "webm" | "wmv";
          /**
           * Source file size in bytes, strictly below 100 GB.
           * @minimum 1
           * @exclusiveMaximum 100000000000
           */
          size: number;
          /** Source duration in seconds. */
          duration: number;
          /** Source frame count. */
          frameCount: number;
          /** Source frame rate. */
          frameRate: number;
          /** Source video resolution. */
          resolution: {
            /**
             * Width in pixels.
             * @minimum 1
             */
            width: number;
            /**
             * Height in pixels.
             * @minimum 1
             */
            height: number;
          };
          /** S3 external storage access. Use a presigned URL or an AWS role with bucket and key. */
          external?: Record<string, unknown>;
        };
        /**
         * Ordered enhancement and frame interpolation filters.
         * @minItems 1
         */
        filters: Array<(unknown)>;
        /** Standard video output settings; resolution, frameRate and audioTransfer are required. */
        output: (unknown) & (unknown);
        /** Optional external output storage. */
        destination?: {
          /** Output S3 storage, also supporting caller-provided multipart upload URLs. */
          external: (Record<string, unknown>) & (unknown) | Record<string, unknown>;
        };
        /** Video completion and failure notifications. */
        notifications?: {
          /**
           * URL for Topaz webhook notifications.
           * @format uri
           */
          webhookUrl: string;
        };
      };
      output: {
        /** Created video request ID. */
        requestId: string;
        /** Estimated credit cost and processing time. */
        estimates?: {
          /** Lower and upper credit cost estimates. */
          cost?: Array<number>;
          /** Lower and upper duration estimates in seconds. */
          time?: Array<number>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Delete all image processing status records, clearing the account's job history. */
    "topaz.delete_all_image_job_statuses": {
      input: Record<string, never>;
      output: {
        /** Number of deleted status records. */
        deleted_count?: number;
        [key: string]: unknown;
      };
    };
    /** Delete one image job status record. This is separate from cancelling a running job. */
    "topaz.delete_image_job_status": {
      input: {
        /**
         * Image processing job UUID.
         * @format uuid
         */
        processId: string;
      };
      output: {
        /** Whether the operation was accepted. */
        accepted: boolean;
        /** Provider message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Permanently delete the source and enhanced video files stored by Topaz for a request. */
    "topaz.delete_video_files": {
      input: {
        /**
         * Video enhancement request UUID.
         * @format uuid
         */
        requestId: string;
      };
      output: {
        /** Whether the operation was accepted. */
        accepted: boolean;
        /** Provider message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Estimate generative image processing credits and duration without submitting a job. */
    "topaz.estimate_generative_image": {
      input: {
        /** Image model category. */
        category?: "Enhance" | "Sharpen" | "Denoise" | "Restore" | "Lighting" | "Matting" | "Tool";
        /** Official model name for the selected category. */
        model?: string;
        /**
         * Input height in pixels.
         * @minimum 1
         * @maximum 32000
         */
        input_height: number;
        /**
         * Input width in pixels.
         * @minimum 1
         * @maximum 32000
         */
        input_width: number;
        /**
         * Output height in pixels; applies to Enhance and Tool.
         * @minimum 1
         * @maximum 32000
         */
        output_height?: number;
        /**
         * Output width in pixels; applies to Enhance and Tool.
         * @minimum 1
         * @maximum 32000
         */
        output_width?: number;
        /** Crop to fill rather than letterbox. */
        crop_to_fill?: boolean;
        /** Desired image format. */
        output_format?: "jpeg" | "jpg" | "png" | "tiff" | "tif";
        /** Official model-specific settings; cannot override common estimate fields. */
        modelSettings?: Record<string, string>;
      };
      output: {
        /** Estimated processing duration in seconds. */
        duration?: number;
        /** Estimated credit cost. */
        credits?: number;
        [key: string]: unknown;
      };
    };
    /** Estimate standard image processing credits and duration without submitting a job. */
    "topaz.estimate_image": {
      input: {
        /** Image model category. */
        category?: "Enhance" | "Sharpen" | "Denoise" | "Restore" | "Lighting" | "Matting" | "Tool";
        /** Official model name for the selected category. */
        model?: string;
        /**
         * Input height in pixels.
         * @minimum 1
         * @maximum 32000
         */
        input_height: number;
        /**
         * Input width in pixels.
         * @minimum 1
         * @maximum 32000
         */
        input_width: number;
        /**
         * Output height in pixels; applies to Enhance and Tool.
         * @minimum 1
         * @maximum 32000
         */
        output_height?: number;
        /**
         * Output width in pixels; applies to Enhance and Tool.
         * @minimum 1
         * @maximum 32000
         */
        output_width?: number;
        /** Crop to fill rather than letterbox. */
        crop_to_fill?: boolean;
        /** Desired image format. */
        output_format?: "jpeg" | "jpg" | "png" | "tiff" | "tif";
        /** Official model-specific settings; cannot override common estimate fields. */
        modelSettings?: Record<string, string>;
      };
      output: {
        /** Estimated processing duration in seconds. */
        duration?: number;
        /** Estimated credit cost. */
        credits?: number;
        [key: string]: unknown;
      };
    };
    /** Estimate multiple image jobs in one request. Each result may succeed or contain its own error. */
    "topaz.estimate_images_bulk": {
      input: {
        /** Image estimate requests in order. */
        requests: Array<{
          /** Bulk estimate model category. */
          category?: "Enhance" | "Sharpen" | "Denoise" | "Restore" | "Lighting";
          /** Official model name for the selected category. */
          model?: string;
          /**
           * Input height in pixels.
           * @minimum 1
           * @maximum 32000
           */
          input_height: number;
          /**
           * Input width in pixels.
           * @minimum 1
           * @maximum 32000
           */
          input_width: number;
          /**
           * Output height in pixels; applies to Enhance and Tool.
           * @minimum 1
           * @maximum 32000
           */
          output_height?: number;
          /**
           * Output width in pixels; applies to Enhance and Tool.
           * @minimum 1
           * @maximum 32000
           */
          output_width?: number;
          /** Crop to fill rather than letterbox. */
          crop_to_fill?: boolean;
          /** Desired image format. */
          output_format?: "jpeg" | "jpg" | "png" | "tiff" | "tif";
          /** Official model-specific settings; cannot override common estimate fields. */
          modelSettings?: Record<string, string>;
        }>;
      };
      output: {
        /** Per-request estimate results. */
        results: Array<{
          /** Estimated processing duration in seconds. */
          duration?: number;
          /** Estimated credit cost. */
          credits?: number;
          /** Per-item success or error status. */
          status?: string;
          /** Per-item error code. */
          code?: number;
          /** Per-item error message. */
          message?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Preview credits committed and refunded if a video request were cancelled now, without cancelling it. */
    "topaz.estimate_video_cancellation": {
      input: {
        /**
         * Video enhancement request UUID.
         * @format uuid
         */
        requestId: string;
      };
      output: {
        /** Video request ID. */
        requestId?: string;
        /** Current processing state. */
        status?: string;
        /** Whether cancellation is still possible. */
        cancelable?: boolean;
        /** Progress used for settlement, percent. */
        progress?: number;
        /** Currently reserved credits. */
        creditsReserved?: number;
        /** Credits charged if cancelled now. */
        creditsToCommit?: number;
        /** Credits refunded if cancelled now. */
        creditsToRefund?: number;
        /** Settlement summary. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Get available, reserved and total Topaz API credits. */
    "topaz.get_credit_balance": {
      input: Record<string, never>;
      output: {
        /** Available credits. */
        available_credits?: number;
        /** Reserved credits. */
        reserved_credits?: number;
        /** Total credits. */
        total_credits?: number;
        [key: string]: unknown;
      };
    };
    /** Get historical API credit consumption by time bucket. Explicit date ranges override period. period=1d covers 48 hours; sparse buckets do not imply missing requests. */
    "topaz.get_credit_usage": {
      input: Record<string, unknown>;
      output: {
        /** Requested relative period. */
        period?: string | null;
        /** Returned bucket size. */
        granularity?: string;
        /** Resolved start date. */
        start_date?: string | null;
        /** Resolved end date. */
        end_date?: string | null;
        /** Requested grouping. */
        group_by?: string | null;
        /** Credits consumed in the window; may be fractional. */
        total_credits?: number;
        /** Requests in the window. */
        total_requests?: number;
        /** Sparse time buckets in ascending order. */
        usage?: Array<{
          /** UTC bucket start time. */
          period_start?: string;
          /** Credits consumed in this bucket. */
          credits?: number;
          /** Optional per-group breakdown. */
          groups?: Array<{
            /** Model name or API key ID. */
            key?: string;
            /** Credits consumed by this group. */
            credits?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get a completed image's temporary download and HEAD URLs, valid for one hour. */
    "topaz.get_image_download": {
      input: {
        /**
         * Image processing job UUID.
         * @format uuid
         */
        processId: string;
      };
      output: {
        /**
         * Presigned result download URL.
         * @format uri
         */
        download_url: string;
        /**
         * Presigned URL for a HEAD request.
         * @format uri
         */
        head_url?: string;
        /** Link expiration time in Unix seconds. */
        expiry?: number;
        [key: string]: unknown;
      };
    };
    /** Get temporary download and HEAD links for the original input image. */
    "topaz.get_image_input_download": {
      input: {
        /**
         * Image processing job UUID.
         * @format uuid
         */
        processId: string;
      };
      output: {
        /**
         * Presigned original image download URL.
         * @format uri
         */
        download_url?: string;
        /**
         * Presigned original image HEAD URL.
         * @format uri
         */
        head_url?: string;
        /** URL expiry in Unix seconds. */
        expiry?: number;
        [key: string]: unknown;
      };
    };
    /** Get an image job status and progress. After completion use get_image_download to retrieve the result URL. */
    "topaz.get_image_job": {
      input: {
        /**
         * Image processing job UUID.
         * @format uuid
         */
        processId: string;
      };
      output: {
        /** Image processing job ID. */
        process_id?: string;
        /** Job status: Pending, Processing, Completed, Cancelled or Failed. */
        status: string;
        /** Processing progress percentage. */
        progress?: number;
        /** Estimated completion time in Unix seconds. */
        eta?: number;
        [key: string]: unknown;
      };
    };
    /** Get video processing status, progress, estimates and the completed result download link. Download links are reused and expire after their original lifetime. */
    "topaz.get_video_job": {
      input: {
        /**
         * Video enhancement request UUID.
         * @format uuid
         */
        requestId: string;
      };
      output: {
        /** Video job processing status. */
        status: string;
        /** Processing progress percentage. */
        progress?: number;
        /** Estimated credit cost and processing time. */
        estimates?: {
          /** Lower and upper credit cost estimates. */
          cost?: Array<number>;
          /** Lower and upper duration estimates in seconds. */
          time?: Array<number>;
          [key: string]: unknown;
        };
        /** Processing message. */
        message?: string;
        /** Processing failure code. */
        errorCode?: string;
        /** Completed video download. */
        download?: {
          /**
           * Presigned video download URL.
           * @format uri
           */
          url?: string;
          /** Download link lifetime in milliseconds. */
          expiresIn?: number;
          /** Download expiration time in Unix milliseconds. */
          expiresAt?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get video processing metrics. Requests without chunked processing may return only a message indicating metrics are unavailable. */
    "topaz.get_video_metrics": {
      input: {
        /**
         * Video enhancement request UUID.
         * @format uuid
         */
        requestId: string;
      };
      output: {
        /** Reason metrics are unavailable. */
        message?: string;
        /** Minutes spent in each processing state. */
        minutesInState?: Record<string, number>;
        /** Minutes from source upload to completed output. */
        minutesToEnhance?: number;
        /** Input frame count. */
        inputFrames?: number;
        /** Output frame count. */
        outputFrames?: number;
        /** Input file size. */
        inputSize?: string;
        /** Output file size. */
        outputSize?: string;
        /** Per-chunk metrics. */
        chunks?: Array<{
          /** Chunk index. */
          chunkIndex?: number;
          /** Per-task metrics. */
          tasks?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get the full video request record, including unaccepted requests, corrected source metrics, credit transactions and signed downloads. */
    "topaz.get_video_request": {
      input: {
        /**
         * Video enhancement request UUID.
         * @format uuid
         */
        requestId: string;
      };
      output: {
        /** Video request ID. */
        id?: string;
        /** Video request state. */
        status?: string;
        /** Source video details and download. */
        source?: {
          /** Temporary download information. */
          download?: {
            /**
             * Presigned download URL.
             * @format uri
             */
            url?: string;
            /** URL expiration in Unix milliseconds. */
            expiresAt?: number;
            /** URL lifetime in milliseconds. */
            expiresIn?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Output video details and download. */
        destination?: {
          /** Temporary download information. */
          download?: {
            /**
             * Presigned download URL.
             * @format uri
             */
            url?: string;
            /** URL expiration in Unix milliseconds. */
            expiresAt?: number;
            /** URL lifetime in milliseconds. */
            expiresIn?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Requested model filters. */
        filters?: Array<Record<string, unknown>>;
        /** Requested encoding settings. */
        output?: Record<string, unknown>;
        /** Estimated credit cost and processing time. */
        estimates?: {
          /** Lower and upper credit cost estimates. */
          cost?: Array<number>;
          /** Lower and upper duration estimates in seconds. */
          time?: Array<number>;
          [key: string]: unknown;
        };
        /** Credit transactions. */
        transactions?: Array<{
          /** Transaction operation. */
          operation?: string;
          /** Transaction amount in credits. */
          amount?: number;
          [key: string]: unknown;
        }>;
        /** Processing failure details. */
        error?: {
          /** Failure message. */
          message?: string;
          /** Pipeline failure code. */
          errorCode?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get video service availability and the authoritative list of currently supported model codes. */
    "topaz.get_video_system_status": {
      input: Record<string, never>;
      output: {
        /** Whether the service is available. */
        isAvailable?: boolean;
        /** Service availability message. */
        availabilityMessage?: string;
        /** Currently accepted model codes. */
        supportedModels?: Array<string>;
        /** Whether frame interpolation is supported. */
        isFrameInterpolationSupported?: boolean;
        [key: string]: unknown;
      };
    };
    /** List image jobs. Pagination defaults to true; non-paginated mode returns jobs up to seven days old. Follow next_cursor while has_next_page is true. */
    "topaz.list_image_jobs": {
      input: {
        /** Enable pagination. Defaults to true. */
        paginated?: boolean;
        /**
         * Page size when paginated; maximum 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Cursor from the previous page. */
        cursor?: string;
      };
      output: {
        /** Image job records. */
        data: Array<Record<string, unknown>>;
        /** Pagination details. */
        pagination?: {
          /** Next page cursor. */
          next_cursor?: string;
          /** Whether more pages exist. */
          has_next_page?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List accepted video requests newest first. Follow nextCursor until null, even when a page has fewer than 50 entries. Unaccepted requests are omitted. */
    "topaz.list_video_requests": {
      input: {
        /** Opaque cursor from the previous page. */
        cursor?: string;
      };
      output: {
        /** Video request records. */
        result?: Array<{
          /** Video request ID. */
          id?: string;
          /** Video request state. */
          status?: string;
          /** Source video details and download. */
          source?: {
            /** Temporary download information. */
            download?: {
              /**
               * Presigned download URL.
               * @format uri
               */
              url?: string;
              /** URL expiration in Unix milliseconds. */
              expiresAt?: number;
              /** URL lifetime in milliseconds. */
              expiresIn?: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Output video details and download. */
          destination?: {
            /** Temporary download information. */
            download?: {
              /**
               * Presigned download URL.
               * @format uri
               */
              url?: string;
              /** URL expiration in Unix milliseconds. */
              expiresAt?: number;
              /** URL lifetime in milliseconds. */
              expiresIn?: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Requested model filters. */
          filters?: Array<Record<string, unknown>>;
          /** Requested encoding settings. */
          output?: Record<string, unknown>;
          /** Estimated credit cost and processing time. */
          estimates?: {
            /** Lower and upper credit cost estimates. */
            cost?: Array<number>;
            /** Lower and upper duration estimates in seconds. */
            time?: Array<number>;
            [key: string]: unknown;
          };
          /** Credit transactions. */
          transactions?: Array<{
            /** Transaction operation. */
            operation?: string;
            /** Transaction amount in credits. */
            amount?: number;
            [key: string]: unknown;
          }>;
          /** Processing failure details. */
          error?: {
            /** Failure message. */
            message?: string;
            /** Pipeline failure code. */
            errorCode?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Next page cursor, or null at the end. */
        nextCursor?: string | null;
        [key: string]: unknown;
      };
    };
    /** Submit a generative image enhancement job to Topaz. Returns a job ID for polling. */
    "topaz.submit_generative_image_enhancement": {
      input: Record<string, unknown>;
      output: {
        /** Image processing job ID. */
        process_id: string;
        /** Reusable source image ID. */
        source_id?: string;
        /** Estimated completion time in Unix seconds. */
        eta?: number;
        [key: string]: unknown;
      };
    };
    /** Submit generative image sharpening for severe blur recovery. */
    "topaz.submit_generative_image_sharpening": {
      input: Record<string, unknown>;
      output: {
        /** Image processing job ID. */
        process_id: string;
        /** Reusable source image ID. */
        source_id?: string;
        /** Estimated completion time in Unix seconds. */
        eta?: number;
        [key: string]: unknown;
      };
    };
    /** Submit image denoising to remove noise while retaining detail. */
    "topaz.submit_image_denoising": {
      input: Record<string, unknown>;
      output: {
        /** Image processing job ID. */
        process_id: string;
        /** Reusable source image ID. */
        source_id?: string;
        /** Estimated completion time in Unix seconds. */
        eta?: number;
        [key: string]: unknown;
      };
    };
    /** Submit a precision image upscale job to Topaz. Returns a job ID for polling. */
    "topaz.submit_image_enhancement": {
      input: Record<string, unknown>;
      output: {
        /** Image processing job ID. */
        process_id: string;
        /** Reusable source image ID. */
        source_id?: string;
        /** Estimated completion time in Unix seconds. */
        eta?: number;
        [key: string]: unknown;
      };
    };
    /** Submit image lighting, white balance or colorization processing. */
    "topaz.submit_image_lighting": {
      input: Record<string, unknown>;
      output: {
        /** Image processing job ID. */
        process_id: string;
        /** Reusable source image ID. */
        source_id?: string;
        /** Estimated completion time in Unix seconds. */
        eta?: number;
        [key: string]: unknown;
      };
    };
    /** Submit image object matting and return a PNG with transparency. */
    "topaz.submit_image_matting": {
      input: Record<string, unknown>;
      output: {
        /** Image processing job ID. */
        process_id: string;
        /** Reusable source image ID. */
        source_id?: string;
        /** Estimated completion time in Unix seconds. */
        eta?: number;
        [key: string]: unknown;
      };
    };
    /** Submit generative photo restoration to remove dust and scratches. */
    "topaz.submit_image_restoration": {
      input: Record<string, unknown>;
      output: {
        /** Image processing job ID. */
        process_id: string;
        /** Reusable source image ID. */
        source_id?: string;
        /** Estimated completion time in Unix seconds. */
        eta?: number;
        [key: string]: unknown;
      };
    };
    /** Submit image sharpening to restore sharpness and reduce blur. */
    "topaz.submit_image_sharpening": {
      input: Record<string, unknown>;
      output: {
        /** Image processing job ID. */
        process_id: string;
        /** Reusable source image ID. */
        source_id?: string;
        /** Estimated completion time in Unix seconds. */
        eta?: number;
        [key: string]: unknown;
      };
    };
    /** Submit transparency-preserving image upscaling using the Tool API. */
    "topaz.submit_image_tool": {
      input: Record<string, unknown>;
      output: {
        /** Image processing job ID. */
        process_id: string;
        /** Reusable source image ID. */
        source_id?: string;
        /** Estimated completion time in Unix seconds. */
        eta?: number;
        [key: string]: unknown;
      };
    };
    /** Submit video enhancement or frame interpolation through Express using S3 external storage. Topaz fetches the source and starts processing immediately. Preserve audio explicitly with audioTransfer and audioCodec. */
    "topaz.submit_video_enhancement": {
      input: (unknown);
      output: {
        /** Video enhancement request ID. */
        requestId: string;
        /** Estimated credit cost and processing time. */
        estimates?: {
          /** Lower and upper credit cost estimates. */
          cost?: Array<number>;
          /** Lower and upper duration estimates in seconds. */
          time?: Array<number>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
