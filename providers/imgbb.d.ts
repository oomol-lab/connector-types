import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Upload one image to ImgBB from a public URL or Base64 content and return the hosted image metadata. */
    "imgbb.upload_image": {
      input: {
        /**
         * The public image URL to upload to ImgBB.
         * @format uri
         */
        imageUrl?: string;
        /**
         * The Base64-encoded image bytes to upload to ImgBB.
         * @minLength 1
         */
        contentBase64?: string;
        /**
         * The optional file name to associate with the upload.
         * @minLength 1
         */
        name?: string;
        /**
         * The number of seconds after which ImgBB should automatically delete the upload.
         * @minimum 60
         * @maximum 15552000
         */
        expiration?: number;
      };
      output: {
        /** The normalized ImgBB upload record. */
        upload: {
          /** The ImgBB upload identifier. */
          id: string;
          /** The upload title returned by ImgBB. */
          title: string;
          /** The ImgBB viewer page URL. */
          viewerUrl: string;
          /** The direct ImgBB image URL. */
          imageUrl: string;
          /** The display-sized ImgBB image URL. */
          displayUrl: string;
          /** The uploaded image width in pixels. */
          width: number;
          /** The uploaded image height in pixels. */
          height: number;
          /** The uploaded image size in bytes. */
          sizeBytes: number;
          /** The Unix timestamp when ImgBB stored the image. */
          uploadedAtUnix: number;
          /** The automatic deletion period in seconds, or 0 when the upload does not expire. */
          expirationSeconds: number;
          /** The original uploaded image variant. */
          image: {
            /** The file name returned by ImgBB for this image variant. */
            filename: string;
            /** The base image name returned by ImgBB for this image variant. */
            name: string;
            /** The MIME type returned by ImgBB for this image variant. */
            mimeType: string;
            /** The file extension returned by ImgBB for this image variant. */
            extension: string;
            /** The hosted ImgBB URL for this image variant. */
            url: string;
          };
          /** The thumbnail image variant returned by ImgBB when available. */
          thumb?: {
            /** The file name returned by ImgBB for this image variant. */
            filename: string;
            /** The base image name returned by ImgBB for this image variant. */
            name: string;
            /** The MIME type returned by ImgBB for this image variant. */
            mimeType: string;
            /** The file extension returned by ImgBB for this image variant. */
            extension: string;
            /** The hosted ImgBB URL for this image variant. */
            url: string;
          } | null;
          /** The medium-sized image variant returned by ImgBB when available. */
          medium?: {
            /** The file name returned by ImgBB for this image variant. */
            filename: string;
            /** The base image name returned by ImgBB for this image variant. */
            name: string;
            /** The MIME type returned by ImgBB for this image variant. */
            mimeType: string;
            /** The file extension returned by ImgBB for this image variant. */
            extension: string;
            /** The hosted ImgBB URL for this image variant. */
            url: string;
          } | null;
          /** The ImgBB delete URL for this upload. */
          deleteUrl: string;
        };
      };
    };
  }
}
