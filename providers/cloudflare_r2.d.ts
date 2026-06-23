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
        jurisdiction?: "default" | "eu" | "fedramp";
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
          jurisdiction?: "default" | "eu" | "fedramp";
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
        jurisdiction?: "default" | "eu" | "fedramp";
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
        jurisdiction?: "default" | "eu" | "fedramp";
      };
      output: {
        /** The bucket whose CORS policy was removed. */
        bucketName: string;
        /** Whether the delete request succeeded. */
        deleted: boolean;
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
        jurisdiction?: "default" | "eu" | "fedramp";
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
          jurisdiction?: "default" | "eu" | "fedramp";
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
        jurisdiction?: "default" | "eu" | "fedramp";
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
          jurisdiction?: "default" | "eu" | "fedramp";
          /** The bucket default storage class. */
          storageClass?: "Standard" | "InfrequentAccess";
        }>;
        /** The pagination cursor for the next page, if the response is truncated. */
        cursor?: string;
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
        jurisdiction?: "default" | "eu" | "fedramp";
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
          jurisdiction?: "default" | "eu" | "fedramp";
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
        jurisdiction?: "default" | "eu" | "fedramp";
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
