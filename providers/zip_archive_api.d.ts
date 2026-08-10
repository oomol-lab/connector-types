import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Compress one or more publicly accessible files into a ZIP archive and return a transit download URL. */
    "zip_archive_api.compress_files": {
      input: {
        /**
         * The publicly accessible file URLs that ArchiveAPI should compress.
         * @minItems 1
         */
        fileUrls: Array<string>;
        /**
         * The requested archive filename, including the .zip extension.
         * @minLength 1
         */
        archiveName?: string;
        /**
         * An optional password used to protect the ZIP archive.
         * @minLength 1
         */
        password?: string;
        /**
         * The ZIP compression level from 1 through 9.
         * @minimum 1
         * @maximum 9
         */
        compressionLevel?: number;
      };
      output: {
        /** A file uploaded to connector transit storage. */
        file: {
          /**
           * The file name.
           * @minLength 1
           */
          name: string;
          /**
           * The file MIME type returned by ArchiveAPI.
           * @minLength 1
           */
          mimetype: string;
          /**
           * The transit URL for downloading the file.
           * @format uri
           */
          s3url: string;
          /**
           * The file size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
      };
    };
    /** Extract a publicly accessible archive and return each extracted file through transit storage. */
    "zip_archive_api.extract_archive": {
      input: {
        /**
         * The publicly accessible archive URL that ArchiveAPI should extract.
         * @format uri
         */
        fileUrl: string;
        /**
         * The password used to open a protected archive.
         * @minLength 1
         */
        password?: string;
      };
      output: {
        /**
         * The files extracted from the source archive.
         * @minItems 1
         */
        files: Array<{
          /**
           * The file name.
           * @minLength 1
           */
          name: string;
          /**
           * The file MIME type returned by ArchiveAPI.
           * @minLength 1
           */
          mimetype: string;
          /**
           * The transit URL for downloading the file.
           * @format uri
           */
          s3url: string;
          /**
           * The file size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        }>;
      };
    };
  }
}
