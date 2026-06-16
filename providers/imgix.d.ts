import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a single Imgix Source by its ID. */
    "imgix.get_source": {
      input: {
        /**
         * The unique Imgix Source identifier.
         * @minLength 1
         */
        sourceId: string;
        /**
         * Comma-separated Source fields to return through the fields[sources] sparse fieldset.
         * @minLength 1
         */
        fieldsSources?: string;
      };
      output: {
        /** An Imgix Source resource returned by the Management API. */
        source: {
          /** The unique Imgix Source identifier. */
          id: string;
          /** The JSON:API resource type returned by Imgix. */
          type: string;
          /** The Source attributes returned by Imgix. */
          attributes: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Response metadata returned by Imgix. */
        meta: Record<string, unknown> | null;
        /** The JSON:API metadata object returned by Imgix. */
        jsonapi: Record<string, unknown> | null;
      };
    };
    /** List Imgix Sources with optional pagination, sorting, sparse fields, and source filters. */
    "imgix.list_sources": {
      input: {
        /**
         * Comma-separated sort fields accepted by Imgix, such as -date_deployed,name.
         * @minLength 1
         */
        sort?: string;
        /**
         * Number of Sources to return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Zero-indexed page number to fetch.
         * @minimum 0
         */
        pageNumber?: number;
        /**
         * Comma-separated Source fields to return through the fields[sources] sparse fieldset.
         * @minLength 1
         */
        fieldsSources?: string;
        /**
         * Filter Sources by name.
         * @minLength 1
         */
        filterName?: string;
        /** Filter Sources by enabled status. */
        filterEnabled?: boolean;
        /** Filter Sources by deployment type. */
        filterDeploymentType?: "azure" | "gcs" | "s3" | "webfolder" | "webproxy" | "s3_compatible";
        /**
         * Filter S3-compatible Sources by deployment region.
         * @minLength 1
         */
        filterDeploymentRegion?: string;
        /**
         * Filter Sources by S3 bucket name.
         * @minLength 1
         */
        filterDeploymentS3Bucket?: string;
        /**
         * Filter Sources by GCS bucket name.
         * @minLength 1
         */
        filterDeploymentGcsBucket?: string;
        /**
         * Filter S3-compatible Sources by deployment bucket name.
         * @minLength 1
         */
        filterDeploymentBucketName?: string;
        /**
         * Filter Sources by Azure container name.
         * @minLength 1
         */
        filterDeploymentAzureBucket?: string;
        /**
         * Filter Sources by custom domain.
         * @minLength 1
         */
        filterDeploymentCustomDomains?: string;
        /**
         * Filter Sources by Imgix subdomain.
         * @minLength 1
         */
        filterDeploymentImgixSubdomains?: string;
        /**
         * Filter S3-compatible Sources by storage provider.
         * @minLength 1
         */
        filterDeploymentStorageProvider?: string;
        /**
         * Filter Web Folder Sources by deployment base URL.
         * @minLength 1
         */
        filterDeploymentWebfolderBaseUrl?: string;
      };
      output: {
        /** The Sources returned by Imgix. */
        sources: Array<{
          /** The unique Imgix Source identifier. */
          id: string;
          /** The JSON:API resource type returned by Imgix. */
          type: string;
          /** The Source attributes returned by Imgix. */
          attributes: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Response metadata returned by Imgix. */
        meta: {
          /** Pagination metadata returned by Imgix for list endpoints. */
          pagination?: {
            /** The current zero-indexed page number. */
            currentPage?: number;
            /** The page size returned by Imgix. */
            pageSize?: number;
            /** The total number of available pages. */
            totalPages?: number;
            /** The total number of matching records. */
            totalRecords?: number;
            /** Whether another page is available. */
            hasNextPage?: boolean;
            /** Whether a previous page is available. */
            hasPreviousPage?: boolean;
            /** The next page number when available. */
            nextPage?: number | null;
            /** The previous page number when available. */
            previousPage?: number | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        } | null;
        /** The JSON:API metadata object returned by Imgix. */
        jsonapi: Record<string, unknown> | null;
      };
    };
    /** Purge an Imgix asset URL from cache so subsequent requests fetch a fresh origin copy. */
    "imgix.purge_asset": {
      input: {
        /**
         * The full Imgix asset URL to purge.
         * @minLength 1
         * @format uri
         */
        url: string;
        /**
         * Optional Imgix Source ID used to scope the purge.
         * @minLength 1
         */
        sourceId?: string;
        /** Whether to purge only sub-images or variants of the asset. */
        subImage?: boolean;
      };
      output: {
        /** The purge resource returned by Imgix. */
        purge: {
          /** The purge request identifier. */
          id: string;
          /** The JSON:API resource type returned by Imgix. */
          type: string;
          /** Purge attributes returned by Imgix. */
          attributes: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The JSON:API metadata object returned by Imgix. */
        jsonapi: Record<string, unknown> | null;
      };
    };
    /** Update an Imgix Source by sending JSON:API Source attributes to the Management API. */
    "imgix.update_source": {
      input: {
        /**
         * The unique Imgix Source identifier.
         * @minLength 1
         */
        sourceId: string;
        /** Source attributes to send to Imgix. Use the official Imgix Source attribute keys for the selected source type. */
        attributes: Record<string, unknown>;
      };
      output: {
        /** An Imgix Source resource returned by the Management API. */
        source: {
          /** The unique Imgix Source identifier. */
          id: string;
          /** The JSON:API resource type returned by Imgix. */
          type: string;
          /** The Source attributes returned by Imgix. */
          attributes: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Response metadata returned by Imgix. */
        meta: Record<string, unknown> | null;
        /** The JSON:API metadata object returned by Imgix. */
        jsonapi: Record<string, unknown> | null;
      };
    };
  }
}
