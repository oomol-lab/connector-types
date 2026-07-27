import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve current-month Plate Recognizer Snapshot Cloud usage and reset information. */
    "platerecognizer.get_statistics": {
      input: Record<string, never>;
      output: {
        /** Current-month Plate Recognizer usage details. */
        usage: {
          /** The current billing month number. */
          month: number;
          /** The number of recognition calls used this month. */
          calls: number;
          /** The current billing year. */
          year: number;
          /**
           * When the Plate Recognizer monthly counter resets.
           * @format date-time
           */
          resetsOn: string;
        };
        /** The maximum number of calls allowed during the current period. */
        totalCalls: number;
      };
    };
    /** Read number plates from one image by calling Plate Recognizer Snapshot Cloud and returning normalized detections. */
    "platerecognizer.read_number_plates": {
      input: {
        /**
         * The public image URL to process instead of uploading raw bytes.
         * @minLength 1
         */
        uploadUrl?: string;
        /**
         * The Base64-encoded image content to send as the upload field.
         * @minLength 1
         */
        uploadBase64?: string;
        /**
         * Optional list of country or state codes used to bias recognition.
         * @minItems 1
         */
        regions?: Array<string>;
        /**
         * Optional camera identifier sent to Plate Recognizer.
         * @minLength 1
         */
        cameraId?: string;
        /**
         * Optional UTC ISO 8601 timestamp associated with the image.
         * @format date-time
         */
        timestamp?: string;
        /** Whether to request optional make, model, color, orientation, and year predictions. */
        mmc?: boolean;
        /** Whether to request optional direction-of-travel prediction. Requires mmc=true. */
        direction?: boolean;
        /** Additional engine configuration forwarded as JSON. */
        config?: Record<string, unknown>;
      };
      output: {
        /** The processing time in milliseconds reported upstream. */
        processingTime: number;
        /** The processed filename returned by Plate Recognizer. */
        filename: string | null;
        /** The camera identifier echoed back by Plate Recognizer, when present. */
        cameraId: string | null;
        /** The timestamp echoed back by Plate Recognizer, when present. */
        timestamp: string | null;
        /** Recognized number plate results returned for the image. */
        results: Array<{
          /** A bounding box returned by Plate Recognizer. */
          box: {
            /** The left edge of the detected box in pixels. */
            xmin: number;
            /** The top edge of the detected box in pixels. */
            ymin: number;
            /** The right edge of the detected box in pixels. */
            xmax: number;
            /** The bottom edge of the detected box in pixels. */
            ymax: number;
          };
          /**
           * The normalized plate string returned by Plate Recognizer.
           * @minLength 1
           */
          plate: string;
          /** The recognized plate region returned by Plate Recognizer. */
          region: {
            /**
             * The upstream region or country code.
             * @minLength 1
             */
            code: string;
            /** The confidence score for the returned region code. */
            score: number;
          };
          /** The confidence score for the selected plate result. */
          score: number;
          /** The detector confidence score for the plate region. */
          dscore: number;
          /** The detected vehicle associated with a recognized plate. */
          vehicle: {
            /** The confidence score for the detected vehicle. */
            score: number;
            /**
             * The detected vehicle type, such as Sedan or SUV.
             * @minLength 1
             */
            type: string;
            /** The bounding box of the detected vehicle. */
            box: {
              /** The left edge of the detected box in pixels. */
              xmin: number;
              /** The top edge of the detected box in pixels. */
              ymin: number;
              /** The right edge of the detected box in pixels. */
              xmax: number;
              /** The bottom edge of the detected box in pixels. */
              ymax: number;
            };
          };
          /** Alternative plate candidates returned for the same detection. */
          candidates: Array<{
            /**
             * One alternative normalized plate candidate.
             * @minLength 1
             */
            plate: string;
            /** The confidence score for this plate candidate. */
            score: number;
          }>;
          /** Optional make and model predictions returned by MMC. */
          model_make?: Array<{
            /** The confidence score for this prediction. */
            score: number;
            [key: string]: unknown;
          }>;
          /** Optional color predictions returned by MMC. */
          color?: Array<{
            /** The confidence score for this prediction. */
            score: number;
            [key: string]: unknown;
          }>;
          /** Optional orientation predictions returned by MMC. */
          orientation?: Array<{
            /** The confidence score for this prediction. */
            score: number;
            [key: string]: unknown;
          }>;
          /** The optional year prediction returned by Plate Recognizer MMC. */
          year?: {
            /** The inclusive year range returned by the optional MMC feature. */
            year_range: Array<number>;
            /** The confidence score for the year range prediction. */
            score: number;
          };
          /** Optional direction of travel in degrees returned when direction=true. */
          direction?: number;
          /** Confidence score for the optional direction prediction. */
          direction_score?: number;
        }>;
      };
    };
  }
}
