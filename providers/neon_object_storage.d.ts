import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Neon Object Storage bucket on a branch. */
    "neon_object_storage.create_bucket": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Neon branch ID (br-...). Each branch has its own buckets, and child branches inherit their parent's objects.
         * @minLength 1
         */
        branchId: string;
        /**
         * The Neon Object Storage bucket name on the branch.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
        /** Bucket access level. private requires signed requests; public_read allows anonymous GET and HEAD on objects. */
        accessLevel?: "private" | "public_read";
      };
      output: {
        /** A Neon Object Storage bucket. */
        bucket: {
          /** The bucket name, unique within the branch. */
          name: string;
          /** The bucket access level, such as private or public_read. */
          accessLevel: string;
          /** When the bucket was created. A bucket inherited from a parent branch reports the parent creation time. */
          createdAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Neon Object Storage bucket from a branch. */
    "neon_object_storage.delete_bucket": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Neon branch ID (br-...). Each branch has its own buckets, and child branches inherit their parent's objects.
         * @minLength 1
         */
        branchId: string;
        /**
         * The Neon Object Storage bucket name on the branch.
         * @minLength 1
         * @maxLength 255
         */
        bucketName: string;
      };
      output: {
        /** Whether the delete bucket request succeeded. */
        deleted: true;
        /** The deleted bucket name. */
        bucketName: string;
      };
    };
    /** Delete one object from a Neon Object Storage bucket. */
    "neon_object_storage.delete_object": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Neon branch ID (br-...). Each branch has its own buckets, and child branches inherit their parent's objects.
         * @minLength 1
         */
        branchId: string;
        /**
         * The Neon Object Storage bucket name on the branch.
         * @minLength 1
         * @maxLength 255
         */
        bucketName: string;
        /**
         * The complete object key. Slashes are part of the key and act as folder delimiters.
         * @minLength 1
         */
        objectKey: string;
      };
      output: {
        /** Whether the delete object request succeeded. */
        deleted: true;
        /** The bucket the object was deleted from. */
        bucketName: string;
        /** The deleted object key. */
        objectKey: string;
      };
    };
    /** Delete every object under a folder prefix in a Neon Object Storage bucket. Only objects written on this branch are removed; objects still inherited from a parent branch are left in place. */
    "neon_object_storage.delete_objects_by_prefix": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Neon branch ID (br-...). Each branch has its own buckets, and child branches inherit their parent's objects.
         * @minLength 1
         */
        branchId: string;
        /**
         * The Neon Object Storage bucket name on the branch.
         * @minLength 1
         * @maxLength 255
         */
        bucketName: string;
        /**
         * The folder prefix to delete. It must end with /, for example app/avatars/.
         * @minLength 1
         * @maxLength 1024
         * @pattern /$
         */
        prefix: string;
      };
      output: {
        /** The bucket the objects were deleted from. */
        bucketName: string;
        /** The deleted folder prefix. */
        prefix: string;
        /**
         * The number of objects deleted. 0 when nothing matched on this branch.
         * @minimum 0
         */
        deletedCount: number;
      };
    };
    /** Download one Neon Object Storage object into temporary file storage, keeping its stored Content-Type. */
    "neon_object_storage.download_object": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Neon branch ID (br-...). Each branch has its own buckets, and child branches inherit their parent's objects.
         * @minLength 1
         */
        branchId: string;
        /**
         * The Neon Object Storage bucket name on the branch.
         * @minLength 1
         * @maxLength 255
         */
        bucketName: string;
        /**
         * The complete object key. Slashes are part of the key and act as folder delimiters.
         * @minLength 1
         */
        objectKey: string;
        /**
         * Optional filename for the transit file. Defaults to the last key segment.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /** The bucket the object was read from. */
        bucketName: string;
        /** The downloaded object key. */
        objectKey: string;
        /**
         * The filename used for the transit file.
         * @minLength 1
         */
        name: string;
        /**
         * The object Content-Type.
         * @minLength 1
         */
        mimeType: string;
        /**
         * The downloaded object size in bytes.
         * @minimum 0
         */
        sizeBytes: number;
        /**
         * Temporary URL for downloading the object.
         * @format uri
         */
        transitUrl: string;
      };
    };
    /** Generate a presigned Neon Object Storage URL so the caller uploads (PUT) or downloads (GET) bytes directly, without S3 credentials. Preferred over put_object and download_object for large files. */
    "neon_object_storage.generate_presigned_url": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Neon branch ID (br-...). Each branch has its own buckets, and child branches inherit their parent's objects.
         * @minLength 1
         */
        branchId: string;
        /**
         * The Neon Object Storage bucket name on the branch.
         * @minLength 1
         * @maxLength 255
         */
        bucketName: string;
        /**
         * The complete object key. Slashes are part of the key and act as folder delimiters.
         * @minLength 1
         */
        objectKey: string;
        /**
         * upload returns a PUT URL and download returns a GET URL.
         * @default "download"
         */
        operation?: "upload" | "download";
        /**
         * Content-Type to bind into an upload signature. The PUT must then send the same header. Ignored for download.
         * @minLength 1
         */
        contentType?: string;
        /**
         * How long the URL stays valid, in seconds.
         * @minimum 1
         * @maximum 604800
         * @default 900
         */
        expiresInSeconds?: number;
      };
      output: {
        /** The bucket used to build the URL. */
        bucketName: string;
        /** The object key used to build the URL. */
        objectKey: string;
        /** The HTTP method to use with the URL: PUT for upload, GET for download. */
        method: string;
        /**
         * The presigned URL.
         * @format uri
         */
        url: string;
        /** Headers that must be sent verbatim with the request, such as a signed Content-Type. */
        requiredHeaders: Record<string, string>;
        /** When the presigned URL stops working. */
        expiresAt: string;
      };
    };
    /** Get the Neon Object Storage S3 endpoint, signing region, and addressing style for a branch. Use these values to configure any S3 client against the branch. */
    "neon_object_storage.get_branch_storage": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Neon branch ID (br-...). Each branch has its own buckets, and child branches inherit their parent's objects.
         * @minLength 1
         */
        branchId: string;
      };
      output: {
        /** Whether object storage is usable on the branch. */
        enabled: boolean;
        /**
         * The S3-compatible endpoint URL for the branch.
         * @format uri
         */
        s3Endpoint: string;
        /** The S3 signing region for the branch. */
        region: string;
        /** Whether S3 clients must use path-style addressing. Neon always returns true. */
        forcePathStyle: boolean;
      };
    };
    /** List Neon Object Storage buckets visible on a branch, including buckets inherited from parent branches. */
    "neon_object_storage.list_buckets": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Neon branch ID (br-...). Each branch has its own buckets, and child branches inherit their parent's objects.
         * @minLength 1
         */
        branchId: string;
      };
      output: {
        /** Buckets visible on the branch. */
        buckets: Array<{
          /** The bucket name, unique within the branch. */
          name: string;
          /** The bucket access level, such as private or public_read. */
          accessLevel: string;
          /** When the bucket was created. A bucket inherited from a parent branch reports the parent creation time. */
          createdAt?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List objects in a Neon Object Storage bucket, including objects inherited from parent branches. Pass delimiter / to group keys into folders. */
    "neon_object_storage.list_objects": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Neon branch ID (br-...). Each branch has its own buckets, and child branches inherit their parent's objects.
         * @minLength 1
         */
        branchId: string;
        /**
         * The Neon Object Storage bucket name on the branch.
         * @minLength 1
         * @maxLength 255
         */
        bucketName: string;
        /** Only list objects whose key starts with this prefix. */
        prefix?: string;
        /**
         * Collapse keys that share a prefix up to this delimiter, usually /, into folders.
         * @minLength 1
         */
        delimiter?: string;
        /**
         * The nextCursor value returned by a previous list_objects call.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of objects plus folders to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** Objects whose keys did not collapse into a folder. */
        objects: Array<{
          /** The full object key. */
          key: string;
          /**
           * The object size in bytes.
           * @minimum 0
           */
          size: number;
          /** When the object was last modified. */
          lastModified?: string;
          /** The object entity tag. */
          etag?: string;
          [key: string]: unknown;
        }>;
        /** Common prefixes collapsed under the delimiter. Empty without a delimiter. */
        folders: Array<string>;
        /** The prefix applied to the listing. */
        prefix: string;
        /** Cursor for the next page, or null when the listing is complete. */
        nextCursor: string | null;
        /** Whether more results exist beyond this page. */
        isTruncated: boolean;
      };
    };
    /** Upload one Neon Object Storage object from a public URL, plain text, or base64 content, replacing any object with the same key. For large files prefer generate_presigned_url with operation upload so the bytes go straight to Neon. */
    "neon_object_storage.put_object": {
      input: Record<string, unknown>;
      output: {
        /** The bucket that received the object. */
        bucketName: string;
        /** The uploaded object key. */
        objectKey: string;
        /** The Content-Type stored on the object. */
        contentType: string;
        /**
         * The uploaded object size in bytes.
         * @minimum 0
         */
        sizeBytes: number;
        /** The uploaded object ETag, or null when Neon did not return one. */
        etag: string | null;
      };
    };
  }
}
