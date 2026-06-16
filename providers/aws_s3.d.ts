import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete one S3 object. */
    "aws_s3.delete_object": {
      input: {
        /**
         * The S3 bucket name.
         * @minLength 1
         */
        bucket?: string;
        /**
         * The S3 object key.
         * @minLength 1
         */
        objectKey: string;
        /**
         * The AWS region, for example `us-east-1`. Connections can omit it on each call to reuse the connected default region.
         * @minLength 1
         */
        region?: string;
        /** The optional object version ID. */
        versionId?: string;
      };
      output: {
        /** The bucket that contained the deleted object. */
        bucket: string;
        /** The deleted object key. */
        objectKey: string;
        /** Whether the delete request completed successfully. */
        deleted: boolean;
      };
    };
    /** Generate a pre-signed S3 URL for reading, uploading, or deleting one object. */
    "aws_s3.generate_presigned_url": {
      input: {
        /**
         * The S3 bucket name.
         * @minLength 1
         */
        bucket?: string;
        /**
         * The S3 object key.
         * @minLength 1
         */
        objectKey: string;
        /**
         * The AWS region, for example `us-east-1`. Connections can omit it on each call to reuse the connected default region.
         * @minLength 1
         */
        region?: string;
        /** The HTTP method that the signed URL should allow. */
        method?: "GET" | "PUT" | "DELETE";
        /**
         * How long the signed URL remains valid, in seconds.
         * @minimum 1
         * @maximum 604800
         */
        expiresSeconds?: number;
        /** The Content-Type that must be used with the signed request. */
        contentType?: string;
      };
      output: {
        /** The bucket used to build the signed URL. */
        bucket: string;
        /** The object key used to build the signed URL. */
        objectKey: string;
        /** The signed HTTP method. */
        method: string;
        /** The URL validity duration in seconds. */
        expiresSeconds: number;
        /** The generated pre-signed URL. */
        url: string;
      };
    };
    /** Fetch structured metadata for one S3 object. */
    "aws_s3.head_object": {
      input: {
        /**
         * The S3 bucket name.
         * @minLength 1
         */
        bucket?: string;
        /**
         * The S3 object key.
         * @minLength 1
         */
        objectKey: string;
        /**
         * The AWS region, for example `us-east-1`. Connections can omit it on each call to reuse the connected default region.
         * @minLength 1
         */
        region?: string;
        /** The optional object version ID. */
        versionId?: string;
      };
      output: {
        /** The normalized S3 object metadata. */
        object: {
          /** The bucket that stores the object. */
          bucket: string;
          /** The object key. */
          objectKey: string;
          /** The object ETag, or null when S3 did not return it. */
          etag: string | null;
          /** The object size in bytes, or null when S3 did not return it. */
          contentLength: number | null;
          /** The object Content-Type, or null when S3 did not return it. */
          contentType: string | null;
          /** The object last modified timestamp, or null when S3 did not return it. */
          lastModified: string | null;
          /** The Cache-Control header, or null when S3 did not return it. */
          cacheControl: string | null;
          /** The Content-Disposition header, or null when S3 did not return it. */
          contentDisposition: string | null;
          /** The Content-Encoding header, or null when S3 did not return it. */
          contentEncoding: string | null;
          /** The object storage class, or null when S3 did not return it. */
          storageClass: string | null;
          /** The object version ID, or null when S3 did not return it. */
          versionId: string | null;
          /** The user-defined `x-amz-meta-*` metadata attached to the object. */
          metadata: Record<string, string>;
          /** The raw response headers returned by S3 for this object metadata request. */
          headers: Record<string, string>;
        };
      };
    };
    /** List Amazon S3 buckets visible to the connected AWS credential. */
    "aws_s3.list_buckets": {
      input: {
        /**
         * The AWS region, for example `us-east-1`. Connections can omit it on each call to reuse the connected default region.
         * @minLength 1
         */
        region?: string;
        /** Filter buckets by name prefix. */
        prefix?: string;
        /** Continue listing buckets from the continuation token returned by S3. */
        marker?: string;
        /**
         * The maximum number of buckets to return.
         * @minimum 1
         * @maximum 10000
         */
        maxKeys?: number;
      };
      output: {
        /** The returned bucket summaries. */
        buckets: Array<{
          /** The bucket name. */
          name: string;
          /** The bucket region, or null when S3 omitted it. */
          region: string | null;
          /** The bucket creation timestamp. */
          creationDate: string;
          /** The bucket storage class, or null when S3 did not expose one. */
          storageClass: string | null;
        }>;
        /** The bucket owner information, or null when S3 omitted it. */
        owner: {
          /** The owner identifier. */
          id: string;
          /** The owner display name, or null when S3 omitted it. */
          displayName: string | null;
        } | null;
        /** Whether more buckets are available. */
        isTruncated: boolean;
        /** The continuation token for the next page, or null when the list is complete. */
        nextMarker: string | null;
      };
    };
    /** List objects in an S3 bucket with the ListObjectsV2 API. */
    "aws_s3.list_objects": {
      input: {
        /**
         * The S3 bucket name.
         * @minLength 1
         */
        bucket: string;
        /**
         * The AWS region, for example `us-east-1`. Connections can omit it on each call to reuse the connected default region.
         * @minLength 1
         */
        region?: string;
        /** Filter objects by key prefix. */
        prefix?: string;
        /** Group keys by this delimiter, for example `/` to emulate folders. */
        delimiter?: string;
        /** Continue listing from the continuation token returned by S3. */
        continuationToken?: string;
        /** Start listing after this object key. */
        startAfter?: string;
        /** Whether to include owner information for each object. */
        fetchOwner?: boolean;
        /**
         * The maximum number of objects to return.
         * @minimum 1
         * @maximum 1000
         */
        maxKeys?: number;
      };
      output: {
        /** The listed objects. */
        objects: Array<{
          /** The object key. */
          name: string;
          /** The canonical S3 URL for the object. */
          url: string;
          /** The object's last modified timestamp. */
          lastModified: string;
          /** The object's ETag. */
          etag: string;
          /** The S3 object type. */
          type: string;
          /** The object size in bytes. */
          size: number;
          /** The object storage class. */
          storageClass: string | null;
          /** The object owner, when requested. */
          owner: {
            /** The owner identifier. */
            id: string;
            /** The owner display name, or null when S3 omitted it. */
            displayName: string | null;
          } | null;
        }>;
        /** The common prefixes returned by S3. */
        prefixes: Array<string>;
        /** Whether more objects are available. */
        isTruncated: boolean;
        /** The number of keys returned in this page. */
        keyCount: number;
        /** The continuation token echoed by S3, or null when absent. */
        continuationToken: string | null;
        /** The continuation token for the next page, or null when the list is complete. */
        nextContinuationToken: string | null;
      };
    };
    /** Upload one object to S3 from a public URL, plain text, or base64-encoded content. */
    "aws_s3.put_object": {
      input: {
        /**
         * The S3 bucket name.
         * @minLength 1
         */
        bucket?: string;
        /**
         * The S3 object key.
         * @minLength 1
         */
        objectKey: string;
        /**
         * The AWS region, for example `us-east-1`. Connections can omit it on each call to reuse the connected default region.
         * @minLength 1
         */
        region?: string;
        /**
         * A public URL that the connector can fetch and upload to S3.
         * @format uri
         */
        sourceUrl?: string;
        /** The plain-text content to upload. */
        contentText?: string;
        /** Base64-encoded binary content to upload. */
        contentBase64?: string;
        /** The Content-Type header to store on the object. */
        contentType?: string;
        /** The Cache-Control header to store on the object. */
        cacheControl?: string;
        /** The Content-Disposition header to store on the object. */
        contentDisposition?: string;
        /** The user-defined metadata to store under `x-amz-meta-*`. */
        metadata?: Record<string, string>;
      };
      output: {
        /** The bucket that received the object. */
        bucket: string;
        /** The uploaded object key. */
        objectKey: string;
        /** The canonical S3 URL for the uploaded object. */
        url: string;
        /** The uploaded object ETag, or null when S3 omitted it. */
        etag: string | null;
      };
    };
  }
}
