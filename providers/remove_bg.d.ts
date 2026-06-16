import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch the current remove.bg credit balance and free API call allowance for the authenticated account. */
    "remove_bg.get_account": {
      input: Record<string, never>;
      output: {
        /** The remove.bg credit balance summary. */
        credits: {
          /** The total credits available to the account. */
          total?: number;
          /** The subscription credits available to the account. */
          subscription?: number;
          /** The pay-as-you-go credits available to the account. */
          payg?: number;
          /** The enterprise credits available to the account. */
          enterprise?: number;
        };
        /** The remove.bg API usage summary. */
        api: {
          /** The number of free API calls still available. */
          freeCalls?: number;
          /** The available output size tier reported by remove.bg. */
          sizes?: string;
        };
      };
    };
    /** Remove the background from an image with remove.bg and upload the generated image or ZIP result to connector transit storage. Provide exactly one of imageUrl or contentBase64; use shadowType and shadowOpacity for shadows. */
    "remove_bg.remove_background": {
      input: {
        /**
         * A publicly reachable source image URL. Provide exactly one of imageUrl or contentBase64.
         * @format uri
         */
        imageUrl?: string;
        /**
         * Raw Base64-encoded source image bytes. Provide exactly one of imageUrl or contentBase64.
         * @minLength 1
         */
        contentBase64?: string;
        /** The maximum output resolution. Use preview for cheaper low-resolution output, auto for the best available size, full for up to 25MP, or 50MP for the highest supported size. */
        size?: "preview" | "full" | "50MP" | "auto" | "medium" | "hd" | "4k" | "small" | "regular";
        /** The foreground type to detect or enforce. Use auto unless the subject category is already known. */
        type?: "auto" | "car" | "product" | "person" | "animal" | "graphic" | "transportation";
        /** How specific remove.bg should be when classifying the detected foreground type. Use latest for the most current classes, or none when classification metadata is not needed. */
        typeLevel?: "none" | "1" | "2" | "latest";
        /** The output format. Use auto for the default, png or webp for transparency, jpg when no transparency is needed, or zip for high-resolution transparent workflows. */
        format?: "auto" | "png" | "jpg" | "zip" | "webp";
        /**
         * Region of interest as 'x1 y1 x2 y2' using px or % coordinates. Only content inside this rectangle can be detected as foreground.
         * @minLength 1
         */
        roi?: string;
        /** Whether to crop away empty transparent regions around the result. */
        crop?: boolean;
        /**
         * Extra margin to keep around the cropped subject, such as '30px', '10%', or four CSS-like side values. Only applies when crop is true.
         * @minLength 1
         */
        cropMargin?: string;
        /**
         * Subject scale relative to the output canvas, such as '75%' or 'original'. Scaling implies centered positioning unless position is also set.
         * @minLength 1
         */
        scale?: string;
        /**
         * Subject position in the output canvas, such as 'original', 'center', '50% 50%', or another remove.bg-supported position value.
         * @minLength 1
         */
        position?: string;
        /** Whether to return the finalized RGBA image or only the alpha mask. Use rgba for normal background removal results. */
        channels?: "rgba" | "alpha";
        /**
         * A single shadow style for the result. Use auto, car, 3D, drop, or none. Prefer this over the deprecated add_shadow API parameter.
         * @minLength 1
         */
        shadowType?: string;
        /**
         * A single shadow opacity for the result. Use auto or a value from 0 to 100 when shadowType is set.
         * @minLength 1
         */
        shadowOpacity?: string;
        /** Whether to keep supported semi-transparent regions in the result, currently most useful for car windows. */
        semitransparency?: boolean;
        /**
         * A solid background color to apply, such as a hex color or color name. Do not combine with backgroundImageUrl or backgroundContentBase64.
         * @minLength 1
         */
        backgroundColor?: string;
        /**
         * A publicly reachable background image URL to apply. Do not combine with backgroundColor or backgroundContentBase64.
         * @format uri
         */
        backgroundImageUrl?: string;
        /**
         * Raw Base64-encoded background image bytes to upload as the background image. Do not combine with backgroundColor or backgroundImageUrl.
         * @minLength 1
         */
        backgroundContentBase64?: string;
        /**
         * Optional filename for backgroundContentBase64 uploads. Only set this when backgroundContentBase64 is provided.
         * @minLength 1
         */
        backgroundFileName?: string;
      };
      output: {
        /** A downloadable file uploaded to connector transit storage. */
        file: {
          /** The generated filename. */
          name: string;
          /** The MIME type of the generated file. */
          mimetype: string;
          /** The transit URL for downloading the generated file. */
          s3url: string;
        };
        /** The MIME type of the generated result file. */
        contentType: string;
        /** The size of the generated result file in bytes. */
        contentLength: number;
        /** The width of the generated result image. */
        width?: number;
        /** The height of the generated result image. */
        height?: number;
        /** The detected foreground type returned by remove.bg. */
        foregroundType?: string;
        /** The credits charged for this request. */
        creditsCharged?: number;
        /** The top position of the detected foreground. */
        foregroundTop?: number;
        /** The left position of the detected foreground. */
        foregroundLeft?: number;
        /** The width of the detected foreground. */
        foregroundWidth?: number;
        /** The height of the detected foreground. */
        foregroundHeight?: number;
      };
    };
    /** Submit a source image to the remove.bg improvement program for future model quality improvements. */
    "remove_bg.submit_improvement": {
      input: {
        /**
         * A publicly reachable source image URL. Provide exactly one of imageUrl or contentBase64.
         * @format uri
         */
        imageUrl?: string;
        /**
         * Raw Base64-encoded source image bytes. Provide exactly one of imageUrl or contentBase64.
         * @minLength 1
         */
        contentBase64?: string;
        /**
         * Optional source image filename sent to remove.bg for the improvement submission.
         * @minLength 1
         */
        fileName?: string;
        /**
         * Optional grouping tag for related improvement submissions.
         * @minLength 1
         */
        tag?: string;
      };
      output: {
        /** The remove.bg submission identifier. */
        id: string;
      };
    };
  }
}
