import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Attach a custom domain from a Cloudflare zone to an R2 bucket. */
    "cloudflare_r2.add_custom_domain": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The custom domain name.
         * @minLength 1
         */
        domain: string;
        /**
         * The Cloudflare zone ID that owns the domain.
         * @minLength 1
         */
        zoneId: string;
        /** Whether to enable public bucket access at the custom domain. Defaults to true. */
        enabled?: boolean;
        /** The minimum TLS version accepted for incoming connections. */
        minTLS?: "1.0" | "1.1" | "1.2" | "1.3";
        /** An allowlist of TLS ciphers in BoringSSL format. */
        ciphers?: Array<string>;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** A custom domain attached to an R2 bucket. */
        domain: {
          /** The custom domain name. */
          domain: string;
          /** Whether the bucket is publicly accessible at this custom domain. */
          enabled: boolean;
          /** The Cloudflare zone ID the domain resides in. */
          zoneId?: string;
          /** The Cloudflare zone name the domain resides in. */
          zoneName?: string;
          /** The minimum TLS version accepted for incoming connections. */
          minTLS?: "1.0" | "1.1" | "1.2" | "1.3";
          /** An allowlist of TLS ciphers in BoringSSL format. */
          ciphers?: Array<string>;
          /** The provisioning status of the custom domain. */
          status?: {
            /** The domain ownership status. */
            ownership: string;
            /** The SSL certificate status. */
            ssl: string;
          };
        };
      };
    };
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
    /** Add event notification rules that send R2 bucket events to a Cloudflare Queue. */
    "cloudflare_r2.create_event_notification_rules": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The Cloudflare Queue ID.
         * @minLength 1
         */
        queueId: string;
        /**
         * The rules to add.
         * @minItems 1
         */
        rules: Array<{
          /**
           * The object actions that trigger notifications.
           * @minItems 1
           */
          actions: Array<"PutObject" | "CopyObject" | "DeleteObject" | "CompleteMultipartUpload" | "LifecycleDeletion">;
          /** A description that identifies the rule. */
          description?: string;
          /** Only send notifications for objects with this key prefix. */
          prefix?: string;
          /** Only send notifications for objects with this key suffix. */
          suffix?: string;
        }>;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** The bucket the rules were added to. */
        bucketName: string;
        /** The queue the rules send events to. */
        queueId: string;
        /** Whether the create request succeeded. */
        created: boolean;
      };
    };
    /** Create short-lived S3-compatible credentials scoped to one R2 bucket and optionally to prefixes or objects. */
    "cloudflare_r2.create_temporary_access_credentials": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The permissions granted to the temporary credentials. */
        permission: "admin-read-write" | "admin-read-only" | "object-read-write" | "object-read-only";
        /**
         * How long the credentials stay valid, in seconds. Defaults to 900.
         * @minimum 1
         * @maximum 604800
         */
        ttlSeconds?: number;
        /**
         * The Access Key ID of the R2 API token used to sign the credentials. Defaults to the connected API token.
         * @minLength 1
         */
        parentAccessKeyId?: string;
        /** Key prefixes the credentials are limited to. */
        prefixes?: Array<string>;
        /** Object keys the credentials are limited to. */
        objects?: Array<string>;
      };
      output: {
        /** The temporary Access Key ID. */
        accessKeyId: string;
        /** The temporary Secret Access Key. */
        secretAccessKey: string;
        /** The session token that must accompany the credentials. */
        sessionToken: string;
        /**
         * A local estimate of when the credentials expire, computed from the request time plus ttlSeconds. Cloudflare starts the TTL when it issues the credentials, so the real expiry is slightly later, and revoking the parent token expires them early.
         * @format date-time
         */
        estimatedExpiresAt: string;
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
    /** Detach a custom domain from an R2 bucket. */
    "cloudflare_r2.delete_custom_domain": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The custom domain name.
         * @minLength 1
         */
        domain: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** The detached custom domain name. */
        domain: string;
        /** Whether the detach request succeeded. */
        deleted: boolean;
      };
    };
    /** Delete event notification rules bound to one queue. Deletes every rule for the queue when ruleIds is omitted. */
    "cloudflare_r2.delete_event_notification_rules": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The Cloudflare Queue ID.
         * @minLength 1
         */
        queueId: string;
        /**
         * The rule IDs to delete. Omit to delete every rule for the queue.
         * @minItems 1
         */
        ruleIds?: Array<string>;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** The bucket the rules were removed from. */
        bucketName: string;
        /** The queue whose rules were removed. */
        queueId: string;
        /** Whether the delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Delete one R2 object by key. */
    "cloudflare_r2.delete_object": {
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
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** The bucket the object was deleted from. */
        bucketName: string;
        /** The deleted object key. */
        objectKey: string;
        /** Whether the delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Delete a list of R2 objects by key in one request. */
    "cloudflare_r2.delete_objects": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The object keys to delete.
         * @minItems 1
         */
        objectKeys: Array<string>;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** The bucket the objects were deleted from. */
        bucketName: string;
        /** Per-key delete results returned by R2, including any per-key error details. */
        results: Array<{
          /** The object key. */
          key?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Start a background job that deletes every object under a key prefix, or empties the whole bucket. */
    "cloudflare_r2.delete_objects_by_prefix": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The key prefix to delete. Must end with a slash. Omit and set emptyBucket to delete everything.
         * @minLength 1
         */
        prefix?: string;
        /** Set to true to delete every object in the bucket instead of a prefix. */
        emptyBucket?: boolean;
        /** Reject the job when R2 Data Catalog is enabled for the bucket. */
        rejectWhenDataCatalogEnabled?: boolean;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** The job identifier used to poll the job. */
        jobId: string;
        /** The job kind, currently always prefixDelete. */
        jobType: string;
        /** The job lifecycle status. */
        status: "ENQUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED";
        /** When the job was created. */
        startTime?: string;
        /** When the job finished. Absent while the job is still enqueued or running. */
        endTime?: string;
        /** The key prefix matched by the job. An empty string means the entire bucket. */
        prefix?: string;
        /** The number of objects deleted by the job so far. */
        deletedObjects?: number;
        /** Whether the job was created to clear the entire bucket. */
        isBucketClear?: boolean;
      };
    };
    /** Disable Sippy on an R2 bucket. */
    "cloudflare_r2.disable_sippy": {
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
        /** The bucket Sippy was disabled on. */
        bucketName: string;
        /** The Sippy state after the request, always false. */
        enabled: boolean;
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
    /** Enable Sippy so that objects missing from the R2 bucket are copied on demand from a source bucket on AWS S3, Google Cloud Storage, an S3-compatible service, or Azure Blob Storage. */
    "cloudflare_r2.enable_sippy": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The source bucket Sippy copies objects from. */
        source: {
          /** The source provider. */
          provider: "aws";
          /**
           * The AWS S3 bucket name.
           * @minLength 1
           */
          bucket: string;
          /**
           * The AWS region of the bucket.
           * @minLength 1
           */
          region: string;
          /**
           * The Access Key ID of an IAM credential scoped to the bucket.
           * @minLength 1
           */
          accessKeyId: string;
          /**
           * The Secret Access Key of the same IAM credential.
           * @minLength 1
           */
          secretAccessKey: string;
        } | {
          /** The source provider. */
          provider: "gcs";
          /**
           * The GCS bucket name.
           * @minLength 1
           */
          bucket: string;
          /**
           * The client email of a service account scoped to the bucket.
           * @minLength 1
           */
          clientEmail: string;
          /**
           * The private key of the same service account.
           * @minLength 1
           */
          privateKey: string;
        } | {
          /** The source provider. */
          provider: "s3";
          /**
           * The URL of the S3-compatible API endpoint for the bucket.
           * @format uri
           */
          bucketUrl: string;
          /**
           * The Access Key ID of a credential scoped to the bucket.
           * @minLength 1
           */
          accessKeyId: string;
          /**
           * The Secret Access Key of the same credential.
           * @minLength 1
           */
          secretAccessKey: string;
        } | {
          /** The source provider. */
          provider: "azure";
          /**
           * The Azure Storage account name.
           * @minLength 1
           */
          accountName: string;
          /**
           * The Azure Blob Storage container name.
           * @minLength 1
           */
          container: string;
          /**
           * The access key of the storage account.
           * @minLength 1
           */
          accountKey?: string;
          /**
           * A Shared Access Signature token for the storage account.
           * @minLength 1
           */
          sasToken?: string;
        };
        /** The R2 credentials Sippy uses to write objects into this bucket. Defaults to the connected API token when omitted. */
        destination?: {
          /**
           * The Access Key ID of an R2 API token scoped to this bucket.
           * @minLength 1
           */
          accessKeyId: string;
          /**
           * The Secret Access Key of the same R2 API token.
           * @minLength 1
           */
          secretAccessKey: string;
        };
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** Whether Sippy is enabled for the bucket. */
        enabled: boolean;
        /** The configured source bucket. */
        source?: {
          /** The source provider: aws, gcs, s3, or azure. */
          provider: string;
          /** The source bucket name for AWS and GCS. */
          bucket?: string | null;
          /** The S3-compatible endpoint URL for generic S3 sources. */
          bucketUrl?: string | null;
          /** The Azure Blob Storage container name. */
          container?: string | null;
          /** The AWS region of the source bucket. */
          region?: string | null;
        };
        /** The configured R2 destination. */
        destination?: {
          /** The destination provider, always r2. */
          provider: string;
          /** The Cloudflare account ID. */
          account?: string;
          /** The destination bucket name. */
          bucket?: string;
          /** The Access Key ID of the R2 API token Sippy writes with. */
          accessKeyId?: string;
        };
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
    /** Get object count and storage usage metrics across all R2 buckets in the account. Metrics may lag behind the latest data. */
    "cloudflare_r2.get_account_metrics": {
      input: Record<string, never>;
      output: {
        /** Metrics for one storage class, split by whether objects are uploaded or published. */
        standard?: {
          /** Object count and storage usage for one object state. */
          uploaded?: {
            /** The number of objects stored. */
            objects?: number;
            /** The storage used by object data, in bytes. */
            payloadSize?: number;
            /** The storage used by object metadata, in bytes. */
            metadataSize?: number;
          };
          /** Object count and storage usage for one object state. */
          published?: {
            /** The number of objects stored. */
            objects?: number;
            /** The storage used by object data, in bytes. */
            payloadSize?: number;
            /** The storage used by object metadata, in bytes. */
            metadataSize?: number;
          };
        };
        /** Metrics for one storage class, split by whether objects are uploaded or published. */
        infrequentAccess?: {
          /** Object count and storage usage for one object state. */
          uploaded?: {
            /** The number of objects stored. */
            objects?: number;
            /** The storage used by object data, in bytes. */
            payloadSize?: number;
            /** The storage used by object metadata, in bytes. */
            metadataSize?: number;
          };
          /** Object count and storage usage for one object state. */
          published?: {
            /** The number of objects stored. */
            objects?: number;
            /** The storage used by object data, in bytes. */
            payloadSize?: number;
            /** The storage used by object metadata, in bytes. */
            metadataSize?: number;
          };
        };
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
    /** Get the current status of one R2 bucket background job. */
    "cloudflare_r2.get_bucket_job": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The job identifier returned when the job was submitted.
         * @minLength 1
         */
        jobId: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** The job identifier used to poll the job. */
        jobId: string;
        /** The job kind, currently always prefixDelete. */
        jobType: string;
        /** The job lifecycle status. */
        status: "ENQUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED";
        /** When the job was created. */
        startTime?: string;
        /** When the job finished. Absent while the job is still enqueued or running. */
        endTime?: string;
        /** The key prefix matched by the job. An empty string means the entire bucket. */
        prefix?: string;
        /** The number of objects deleted by the job so far. */
        deletedObjects?: number;
        /** Whether the job was created to clear the entire bucket. */
        isBucketClear?: boolean;
      };
    };
    /** Get the object lifecycle rules of an R2 bucket. */
    "cloudflare_r2.get_bucket_lifecycle": {
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
        /** The configured lifecycle rules. */
        rules: Array<{
          /**
           * The unique identifier of the rule.
           * @minLength 1
           */
          id: string;
          /** Whether the rule is in effect. */
          enabled: boolean;
          /** Conditions that apply to every transition of this rule. */
          conditions: {
            /** Only objects and uploads whose keys start with this prefix are affected. Use an empty prefix to match everything. */
            prefix: string;
          };
          /** Transition that deletes matching objects. */
          deleteObjectsTransition?: {
            /** The condition that triggers the transition. */
            condition: {
              /** The condition type. */
              type: "Age";
              /**
               * The object age in seconds after which the transition applies.
               * @minimum 0
               */
              maxAge: number;
            } | {
              /** The condition type. */
              type: "Date";
              /**
               * The date and time when the transition applies.
               * @format date-time
               */
              date: string;
            };
          };
          /** Transition that aborts ongoing multipart uploads. */
          abortMultipartUploadsTransition?: {
            /** Abort multipart uploads older than this age. */
            condition: {
              /** The condition type. */
              type: "Age";
              /**
               * The object age in seconds after which the transition applies.
               * @minimum 0
               */
              maxAge: number;
            };
          };
          /** Transitions that change the storage class of matching objects. */
          storageClassTransitions?: Array<{
            /** The condition that triggers the transition. */
            condition: {
              /** The condition type. */
              type: "Age";
              /**
               * The object age in seconds after which the transition applies.
               * @minimum 0
               */
              maxAge: number;
            } | {
              /** The condition type. */
              type: "Date";
              /**
               * The date and time when the transition applies.
               * @format date-time
               */
              date: string;
            };
            /** The target storage class. */
            storageClass: "InfrequentAccess";
          }>;
        }>;
      };
    };
    /** Get whether local uploads are enabled, which writes objects to the nearest region before replicating to the primary region. */
    "cloudflare_r2.get_bucket_local_uploads": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
      };
      output: {
        /** Whether local uploads are enabled for the bucket. */
        enabled: boolean;
      };
    };
    /** Get the object lock rules of an R2 bucket. */
    "cloudflare_r2.get_bucket_lock": {
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
        /** The configured lock rules. */
        rules: Array<{
          /**
           * The unique identifier of the rule.
           * @minLength 1
           */
          id: string;
          /** Whether the rule is in effect. */
          enabled: boolean;
          /** Only objects and uploads whose keys start with this prefix are affected. Use an empty prefix to match everything. */
          prefix?: string;
          /** The condition that defines the lock duration. */
          condition: {
            /** The condition type. */
            type: "Age";
            /**
             * The lock duration in seconds.
             * @minimum 0
             */
            maxAgeSeconds: number;
          } | {
            /** The condition type. */
            type: "Date";
            /**
             * The date and time until which objects stay locked.
             * @format date-time
             */
            date: string;
          } | {
            /** The condition type. */
            type: "Indefinite";
          };
        }>;
      };
    };
    /** Get the settings of one custom domain attached to an R2 bucket. */
    "cloudflare_r2.get_custom_domain": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The custom domain name.
         * @minLength 1
         */
        domain: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** A custom domain attached to an R2 bucket. */
        domain: {
          /** The custom domain name. */
          domain: string;
          /** Whether the bucket is publicly accessible at this custom domain. */
          enabled: boolean;
          /** The Cloudflare zone ID the domain resides in. */
          zoneId?: string;
          /** The Cloudflare zone name the domain resides in. */
          zoneName?: string;
          /** The minimum TLS version accepted for incoming connections. */
          minTLS?: "1.0" | "1.1" | "1.2" | "1.3";
          /** An allowlist of TLS ciphers in BoringSSL format. */
          ciphers?: Array<string>;
          /** The provisioning status of the custom domain. */
          status?: {
            /** The domain ownership status. */
            ownership: string;
            /** The SSL certificate status. */
            ssl: string;
          };
        };
      };
    };
    /** Get the event notification rules that send R2 bucket events to one queue. */
    "cloudflare_r2.get_event_notification_rules": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The Cloudflare Queue ID.
         * @minLength 1
         */
        queueId: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** The queue ID. */
        queueId: string;
        /** The queue name. */
        queueName?: string;
        /** The rules bound to the queue. */
        rules: Array<{
          /** The rule ID. */
          ruleId?: string;
          /** When the rule was created. */
          createdAt?: string;
          /** A description that identifies the rule. */
          description?: string;
          /** The object actions that trigger notifications. */
          actions: Array<"PutObject" | "CopyObject" | "DeleteObject" | "CompleteMultipartUpload" | "LifecycleDeletion">;
          /** Notifications are only sent for objects with this key prefix. */
          prefix?: string;
          /** Notifications are only sent for objects with this key suffix. */
          suffix?: string;
        }>;
      };
    };
    /** Get the r2.dev managed domain and its public access state for an R2 bucket. */
    "cloudflare_r2.get_managed_domain": {
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
        /** The bucket ID. */
        bucketId: string;
        /** The r2.dev domain name of the bucket. */
        domain: string;
        /** Whether the bucket is publicly accessible at the r2.dev domain. */
        enabled: boolean;
      };
    };
    /** Get the Sippy incremental migration configuration of an R2 bucket. */
    "cloudflare_r2.get_sippy_config": {
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
        /** Whether Sippy is enabled for the bucket. */
        enabled: boolean;
        /** The configured source bucket. */
        source?: {
          /** The source provider: aws, gcs, s3, or azure. */
          provider: string;
          /** The source bucket name for AWS and GCS. */
          bucket?: string | null;
          /** The S3-compatible endpoint URL for generic S3 sources. */
          bucketUrl?: string | null;
          /** The Azure Blob Storage container name. */
          container?: string | null;
          /** The AWS region of the source bucket. */
          region?: string | null;
        };
        /** The configured R2 destination. */
        destination?: {
          /** The destination provider, always r2. */
          provider: string;
          /** The Cloudflare account ID. */
          account?: string;
          /** The destination bucket name. */
          bucket?: string;
          /** The Access Key ID of the R2 API token Sippy writes with. */
          accessKeyId?: string;
        };
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
    /** List background jobs for an R2 bucket, such as prefix delete jobs. */
    "cloudflare_r2.list_bucket_jobs": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The bucket job kind. */
        jobType?: "prefixDelete";
        /** Only return jobs with this status. Requires jobType. */
        status?: "ENQUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED";
        /**
         * The maximum number of jobs to return.
         * @exclusiveMinimum 0
         */
        maxKeys?: number;
        /** Pagination token returned as nextContinuationToken by a previous call. */
        continuationToken?: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** The jobs in the current page. */
        jobs: Array<{
          /** The job identifier used to poll the job. */
          jobId: string;
          /** The job kind, currently always prefixDelete. */
          jobType: string;
          /** The job lifecycle status. */
          status: "ENQUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED";
          /** When the job was created. */
          startTime?: string;
          /** When the job finished. Absent while the job is still enqueued or running. */
          endTime?: string;
          /** The key prefix matched by the job. An empty string means the entire bucket. */
          prefix?: string;
          /** The number of objects deleted by the job so far. */
          deletedObjects?: number;
          /** Whether the job was created to clear the entire bucket. */
          isBucketClear?: boolean;
        }>;
        /** The token to pass as continuationToken for the next page. */
        nextContinuationToken?: string;
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
    /** List the custom domains attached to an R2 bucket. */
    "cloudflare_r2.list_custom_domains": {
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
        /** The attached custom domains. */
        domains: Array<{
          /** The custom domain name. */
          domain: string;
          /** Whether the bucket is publicly accessible at this custom domain. */
          enabled: boolean;
          /** The Cloudflare zone ID the domain resides in. */
          zoneId?: string;
          /** The Cloudflare zone name the domain resides in. */
          zoneName?: string;
          /** The minimum TLS version accepted for incoming connections. */
          minTLS?: "1.0" | "1.1" | "1.2" | "1.3";
          /** An allowlist of TLS ciphers in BoringSSL format. */
          ciphers?: Array<string>;
          /** The provisioning status of the custom domain. */
          status?: {
            /** The domain ownership status. */
            ownership: string;
            /** The SSL certificate status. */
            ssl: string;
          };
        }>;
      };
    };
    /** List every event notification rule of an R2 bucket grouped by target queue. */
    "cloudflare_r2.list_event_notification_rules": {
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
        /** The bucket name. */
        bucketName: string;
        /** The queues receiving notifications and their rules. */
        queues: Array<{
          /** The queue ID. */
          queueId: string;
          /** The queue name. */
          queueName?: string;
          /** The rules bound to the queue. */
          rules: Array<{
            /** The rule ID. */
            ruleId?: string;
            /** When the rule was created. */
            createdAt?: string;
            /** A description that identifies the rule. */
            description?: string;
            /** The object actions that trigger notifications. */
            actions: Array<"PutObject" | "CopyObject" | "DeleteObject" | "CompleteMultipartUpload" | "LifecycleDeletion">;
            /** Notifications are only sent for objects with this key prefix. */
            prefix?: string;
            /** Notifications are only sent for objects with this key suffix. */
            suffix?: string;
          }>;
        }>;
      };
    };
    /** List objects in an R2 bucket with optional prefix, delimiter grouping, and cursor pagination. */
    "cloudflare_r2.list_objects": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** Only return objects whose keys begin with this prefix. */
        prefix?: string;
        /**
         * A single character used to group keys. Keys sharing the same prefix up to the delimiter are returned as common prefixes.
         * @minLength 1
         * @maxLength 1
         */
        delimiter?: string;
        /** Only return objects whose keys sort after this key in lexicographic order. */
        startAfter?: string;
        /** Pagination cursor returned by a previous list_objects call. */
        cursor?: string;
        /**
         * The maximum number of objects to return per page.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** The objects in the current page. */
        objects: Array<{
          /** The object key. */
          key: string;
          /** The object size in bytes. */
          size?: number;
          /** The object entity tag as a raw hex digest without quotes. */
          etag?: string;
          /** When the object was last modified. */
          lastModified?: string;
          /** The object storage class. */
          storageClass?: "Standard" | "InfrequentAccess";
          /** Whether the object is encrypted with a customer-supplied encryption key. */
          ssec?: boolean;
          /** HTTP metadata stored with an R2 object. */
          httpMetadata?: {
            /** The object MIME type. */
            contentType?: string;
            /** The language of the object content. */
            contentLanguage?: string;
            /** Presentational information for the object. */
            contentDisposition?: string;
            /** The content encoding applied to the object. */
            contentEncoding?: string;
            /** The caching behavior for the object. */
            cacheControl?: string;
            /** When the object cache entry expires. */
            cacheExpiry?: string;
          };
          /** Custom metadata key-value pairs stored with the object. */
          customMetadata?: Record<string, string>;
        }>;
        /** Common prefixes grouped by the delimiter, equivalent to S3 CommonPrefixes. */
        commonPrefixes: Array<string>;
        /** Whether more objects remain after this page. */
        isTruncated: boolean;
        /** The pagination cursor for the next page, when truncated. */
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
    /** Replace the object lifecycle rules of an R2 bucket with the given rule set. */
    "cloudflare_r2.update_bucket_lifecycle": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The full lifecycle rule set to store. An empty array removes all rules. */
        rules: Array<{
          /**
           * The unique identifier of the rule.
           * @minLength 1
           */
          id: string;
          /** Whether the rule is in effect. */
          enabled: boolean;
          /** Conditions that apply to every transition of this rule. */
          conditions: {
            /** Only objects and uploads whose keys start with this prefix are affected. Use an empty prefix to match everything. */
            prefix: string;
          };
          /** Transition that deletes matching objects. */
          deleteObjectsTransition?: {
            /** The condition that triggers the transition. */
            condition: {
              /** The condition type. */
              type: "Age";
              /**
               * The object age in seconds after which the transition applies.
               * @minimum 0
               */
              maxAge: number;
            } | {
              /** The condition type. */
              type: "Date";
              /**
               * The date and time when the transition applies.
               * @format date-time
               */
              date: string;
            };
          };
          /** Transition that aborts ongoing multipart uploads. */
          abortMultipartUploadsTransition?: {
            /** Abort multipart uploads older than this age. */
            condition: {
              /** The condition type. */
              type: "Age";
              /**
               * The object age in seconds after which the transition applies.
               * @minimum 0
               */
              maxAge: number;
            };
          };
          /** Transitions that change the storage class of matching objects. */
          storageClassTransitions?: Array<{
            /** The condition that triggers the transition. */
            condition: {
              /** The condition type. */
              type: "Age";
              /**
               * The object age in seconds after which the transition applies.
               * @minimum 0
               */
              maxAge: number;
            } | {
              /** The condition type. */
              type: "Date";
              /**
               * The date and time when the transition applies.
               * @format date-time
               */
              date: string;
            };
            /** The target storage class. */
            storageClass: "InfrequentAccess";
          }>;
        }>;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** The bucket whose lifecycle rules were replaced. */
        bucketName: string;
        /** Whether the update request succeeded. */
        updated: boolean;
      };
    };
    /** Enable or disable local uploads for an R2 bucket. */
    "cloudflare_r2.update_bucket_local_uploads": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** Whether to enable local uploads for the bucket. */
        enabled: boolean;
      };
      output: {
        /** The bucket whose setting was updated. */
        bucketName: string;
        /** The stored local uploads setting. */
        enabled: boolean;
      };
    };
    /** Replace the object lock rules of an R2 bucket with the given rule set. */
    "cloudflare_r2.update_bucket_lock": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The full lock rule set to store. An empty array removes all rules. */
        rules: Array<{
          /**
           * The unique identifier of the rule.
           * @minLength 1
           */
          id: string;
          /** Whether the rule is in effect. */
          enabled: boolean;
          /** Only objects and uploads whose keys start with this prefix are affected. Use an empty prefix to match everything. */
          prefix?: string;
          /** The condition that defines the lock duration. */
          condition: {
            /** The condition type. */
            type: "Age";
            /**
             * The lock duration in seconds.
             * @minimum 0
             */
            maxAgeSeconds: number;
          } | {
            /** The condition type. */
            type: "Date";
            /**
             * The date and time until which objects stay locked.
             * @format date-time
             */
            date: string;
          } | {
            /** The condition type. */
            type: "Indefinite";
          };
        }>;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** The bucket whose lock rules were replaced. */
        bucketName: string;
        /** Whether the update request succeeded. */
        updated: boolean;
      };
    };
    /** Update the public access, TLS version, or cipher settings of a custom domain. */
    "cloudflare_r2.update_custom_domain": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The custom domain name.
         * @minLength 1
         */
        domain: string;
        /** Whether to enable public bucket access at the custom domain. */
        enabled?: boolean;
        /** The minimum TLS version accepted for incoming connections. */
        minTLS?: "1.0" | "1.1" | "1.2" | "1.3";
        /** An allowlist of TLS ciphers in BoringSSL format. */
        ciphers?: Array<string>;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** A custom domain after an update. Fields the upstream response omits are left out. */
        domain: {
          /** The custom domain name. */
          domain: string;
          /** Whether the bucket is publicly accessible at this custom domain. Omitted when the upstream response does not report it. */
          enabled?: boolean;
          /** The minimum TLS version accepted for incoming connections. */
          minTLS?: "1.0" | "1.1" | "1.2" | "1.3";
          /** An allowlist of TLS ciphers in BoringSSL format. */
          ciphers?: Array<string>;
        };
      };
    };
    /** Enable or disable public access to an R2 bucket through its r2.dev domain. */
    "cloudflare_r2.update_managed_domain": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** Whether to enable public bucket access at the r2.dev domain. */
        enabled: boolean;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** The bucket ID. */
        bucketId: string;
        /** The r2.dev domain name of the bucket. */
        domain: string;
        /** Whether the bucket is publicly accessible at the r2.dev domain. */
        enabled: boolean;
      };
    };
  }
}
