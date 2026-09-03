import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an R2 bucket in a Cloudflare account. */
    "cloudflare_r2.create_bucket": {
      input: {
        /**
         * The bucket name to create.
         * @minLength 3
         * @maxLength 64
         */
        name: string;
        /** The location hint for the new bucket. */
        locationHint?: "apac" | "eeur" | "enam" | "weur" | "wnam" | "oc";
        /** The default storage class for newly uploaded objects. */
        storageClass?: "Standard" | "InfrequentAccess";
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** A Cloudflare R2 bucket. */
        bucket: {
          /** The bucket name. */
          name: string;
          /** The bucket creation timestamp. */
          creationDate?: string;
          /** The bucket location. */
          location?: "apac" | "eeur" | "enam" | "weur" | "wnam" | "oc";
          /** The bucket jurisdiction. */
          jurisdiction?: "default" | "eu" | "fedramp" | "us";
          /** The bucket default storage class. */
          storageClass?: "Standard" | "InfrequentAccess";
        };
      };
    };
    /** Delete an R2 bucket by name. */
    "cloudflare_r2.delete_bucket": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** The deleted bucket name. */
        bucketName: string;
        /** Whether the bucket delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Delete the bucket-level CORS policy for an R2 bucket. */
    "cloudflare_r2.delete_bucket_cors_policy": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** The bucket whose CORS policy was removed. */
        bucketName: string;
        /** Whether the delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Download one R2 object and upload it to connector transit storage. */
    "cloudflare_r2.download_object": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The exact R2 object key, including path separators.
         * @minLength 1
         */
        objectKey: string;
        /**
         * The filename used for the transit file.
         * @minLength 1
         */
        fileName?: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /**
         * The R2 object key.
         * @minLength 1
         */
        fileId: string;
        /**
         * The transit file name.
         * @minLength 1
         */
        name: string;
        /**
         * The downloaded object MIME type.
         * @minLength 1
         */
        mimeType: string;
        /**
         * The object size, or null when unavailable.
         * @minimum 0
         */
        sizeBytes: number | null;
        /**
         * The temporary transit URL for downloading the object.
         * @format uri
         */
        transitUrl: string;
      };
    };
    /** Generate a pre-signed R2 URL for one GET, PUT, or HEAD request using a custom API token credential. */
    "cloudflare_r2.generate_presigned_url": {
      input: {
        /**
         * The Cloudflare account ID.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The complete R2 object key. Slashes are preserved as key delimiters.
         * @minLength 1
         */
        objectKey: string;
        /** The HTTP method that the signed URL should allow. */
        method?: "GET" | "PUT" | "HEAD";
        /**
         * How long the signed URL remains valid, in seconds.
         * @minimum 1
         * @maximum 604800
         */
        expiresSeconds?: number;
        /** The Content-Type required for a signed PUT request. */
        contentType?: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** The bucket used to build the signed URL. */
        bucketName: string;
        /** The object key used to build the signed URL. */
        objectKey: string;
        /** The signed HTTP method. */
        method: string;
        /** The URL validity duration in seconds. */
        expiresSeconds: number;
        /**
         * The timestamp when the signed URL expires.
         * @format date-time
         */
        expiresAt: string;
        /** The generated pre-signed URL. */
        url: string;
        /** HTTP headers included in the signature that must be sent with the request. */
        requiredHeaders: Record<string, string>;
      };
    };
    /** Get one R2 bucket by name. */
    "cloudflare_r2.get_bucket": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** A Cloudflare R2 bucket. */
        bucket: {
          /** The bucket name. */
          name: string;
          /** The bucket creation timestamp. */
          creationDate?: string;
          /** The bucket location. */
          location?: "apac" | "eeur" | "enam" | "weur" | "wnam" | "oc";
          /** The bucket jurisdiction. */
          jurisdiction?: "default" | "eu" | "fedramp" | "us";
          /** The bucket default storage class. */
          storageClass?: "Standard" | "InfrequentAccess";
        };
      };
    };
    /** Fetch the bucket-level CORS policy for an R2 bucket. */
    "cloudflare_r2.get_bucket_cors_policy": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** The bucket CORS rules. */
        rules?: Array<{
          /** The allowed origins, methods, and headers for this CORS rule. */
          allowed: {
            /**
             * The methods allowed by this CORS rule.
             * @minItems 1
             */
            methods: Array<"GET" | "PUT" | "POST" | "DELETE" | "HEAD">;
            /**
             * The allowed origins for this CORS rule.
             * @minItems 1
             */
            origins: Array<string>;
            /** The allowed request headers for this CORS rule. */
            headers?: Array<string>;
          };
          /** The optional identifier for this CORS rule. */
          id?: string;
          /** The response headers exposed to browser clients. */
          exposeHeaders?: Array<string>;
          /**
           * The browser preflight cache duration in seconds.
           * @minimum 0
           */
          maxAgeSeconds?: number;
        }>;
      };
    };
    /** List Cloudflare accounts visible to the current credential. */
    "cloudflare_r2.list_accounts": {
      input: {
        /**
         * The result page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The page size.
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /** The visible Cloudflare accounts. */
        accounts: Array<{
          /** The Cloudflare account ID. */
          id: string;
          /** The Cloudflare account name. */
          name?: string;
          /** The Cloudflare account type. */
          type?: string;
        }>;
        /** Cloudflare pagination metadata. */
        resultInfo?: {
          /** The current page number. */
          page?: number;
          /** The page size. */
          perPage?: number;
          /** The number of items in the current page. */
          count?: number;
          /** The total number of matching items. */
          totalCount?: number;
          /** The total number of pages. */
          totalPages?: number;
        };
      };
    };
    /** List the R2 buckets in a Cloudflare account. */
    "cloudflare_r2.list_buckets": {
      input: {
        /** Pagination cursor returned by a previous list_buckets call. */
        cursor?: string;
        /** The sort direction. */
        direction?: "asc" | "desc";
        /** Filters buckets whose names contain this phrase. */
        nameContains?: string;
        /** The field used to order results. */
        order?: "name";
        /**
         * The maximum number of buckets to return.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
      };
      output: {
        /** The returned R2 buckets. */
        buckets: Array<{
          /** The bucket name. */
          name: string;
          /** The bucket creation timestamp. */
          creationDate?: string;
          /** The bucket location. */
          location?: "apac" | "eeur" | "enam" | "weur" | "wnam" | "oc";
          /** The bucket jurisdiction. */
          jurisdiction?: "default" | "eu" | "fedramp" | "us";
          /** The bucket default storage class. */
          storageClass?: "Standard" | "InfrequentAccess";
        }>;
        /** The pagination cursor for the next page, if the response is truncated. */
        cursor?: string;
      };
    };
    /** Upload one R2 object from a public URL, plain text, or base64-encoded content. */
    "cloudflare_r2.put_object": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The complete R2 object key. Slashes are preserved as key delimiters.
         * @minLength 1
         */
        objectKey: string;
        /**
         * A public HTTP or HTTPS URL containing the object bytes.
         * @format uri
         */
        sourceUrl?: string;
        /** Plain UTF-8 text to upload as the object body. */
        contentText?: string;
        /**
         * Base64-encoded object bytes.
         * @minLength 1
         */
        contentBase64?: string;
        /**
         * The object Content-Type.
         * @minLength 1
         */
        contentType?: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** The destination bucket name. */
        bucketName: string;
        /** The uploaded object key. */
        objectKey: string;
        /** The uploaded object ETag, or null when unavailable. */
        etag: string | null;
      };
    };
    /** Update mutable R2 bucket properties such as default storage class or jurisdiction. */
    "cloudflare_r2.update_bucket": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The default storage class for newly uploaded objects. */
        storageClass?: "Standard" | "InfrequentAccess";
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** A Cloudflare R2 bucket. */
        bucket: {
          /** The bucket name. */
          name: string;
          /** The bucket creation timestamp. */
          creationDate?: string;
          /** The bucket location. */
          location?: "apac" | "eeur" | "enam" | "weur" | "wnam" | "oc";
          /** The bucket jurisdiction. */
          jurisdiction?: "default" | "eu" | "fedramp" | "us";
          /** The bucket default storage class. */
          storageClass?: "Standard" | "InfrequentAccess";
        };
      };
    };
    /** Replace the bucket-level CORS policy for an R2 bucket. */
    "cloudflare_r2.update_bucket_cors_policy": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The full CORS rule set to store. */
        rules: Array<{
          /** The allowed origins, methods, and headers for this CORS rule. */
          allowed: {
            /**
             * The methods allowed by this CORS rule.
             * @minItems 1
             */
            methods: Array<"GET" | "PUT" | "POST" | "DELETE" | "HEAD">;
            /**
             * The allowed origins for this CORS rule.
             * @minItems 1
             */
            origins: Array<string>;
            /** The allowed request headers for this CORS rule. */
            headers?: Array<string>;
          };
          /** The optional identifier for this CORS rule. */
          id?: string;
          /** The response headers exposed to browser clients. */
          exposeHeaders?: Array<string>;
          /**
           * The browser preflight cache duration in seconds.
           * @minimum 0
           */
          maxAgeSeconds?: number;
        }>;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** The bucket whose CORS policy was updated. */
        bucketName: string;
        /** Whether the update request succeeded. */
        updated: boolean;
      };
    };
  }
}
