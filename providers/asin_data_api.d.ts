import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete multiple requests from a collection by their request IDs in ASIN Data API. */
    "asin_data_api.clear_collection_requests": {
      input: {
        /**
         * Array of request ID strings to delete. Use list_collection_requests to get valid request IDs for a collection.
         * @minItems 1
         */
        request_ids: Array<string>;
        /**
         * Unique identifier of the collection to clear requests from. Use ASIN Data API collection listings to get valid collection IDs.
         * @minLength 1
         */
        collection_id: string;
      };
      output: {
        /** The ASIN Data API response payload returned by the action. */
        data: Record<string, unknown>;
        /** Error if any occurred during the action execution. */
        error?: string;
        /** Whether the action execution was successful. */
        successful: boolean;
      };
    };
    /** Delete a destination from the ASIN Data API account. */
    "asin_data_api.delete_destination": {
      input: {
        /**
         * The unique identifier of the destination to delete. Can be obtained from the list_destinations action.
         * @minLength 1
         */
        destination_id: string;
      };
      output: {
        /** The ASIN Data API response payload returned by the action. */
        data: Record<string, unknown>;
        /** Error if any occurred during the action execution. */
        error?: string;
        /** Whether the action execution was successful. */
        successful: boolean;
      };
    };
    /** Get details of a specific ASIN Data API collection including status and request counts. */
    "asin_data_api.get_collection": {
      input: {
        /**
         * Unique identifier of the collection to retrieve. Can be obtained from ASIN Data API collection listings.
         * @minLength 1
         */
        collection_id: string;
      };
      output: {
        /** The ASIN Data API response payload returned by the action. */
        data: Record<string, unknown>;
        /** Error if any occurred during the action execution. */
        error?: string;
        /** Whether the action execution was successful. */
        successful: boolean;
      };
    };
    /** List requests in an ASIN Data API collection by page. */
    "asin_data_api.list_collection_requests": {
      input: {
        /**
         * Page number for pagination, starting at 1. Each page returns up to 1000 requests.
         * @minimum 1
         */
        page?: number;
        /**
         * Unique identifier of the collection whose requests are to be listed. Can be obtained from ASIN Data API collection listings.
         * @minLength 1
         */
        collection_id: string;
      };
      output: {
        /** The ASIN Data API response payload returned by the action. */
        data: Record<string, unknown>;
        /** Error if any occurred during the action execution. */
        error?: string;
        /** Whether the action execution was successful. */
        successful: boolean;
      };
    };
    /** List destinations configured on the ASIN Data API account with optional filtering and sorting. */
    "asin_data_api.list_destinations": {
      input: {
        /**
         * Page number for pagination, starting at 1.
         * @minimum 1
         */
        page?: number;
        /** Sort criteria for destinations. */
        sort_by?: "type" | "name";
        /**
         * Filter destinations by name.
         * @minLength 1
         */
        search_term?: string;
        /** Sort order for destinations. */
        sort_direction?: "ascending" | "descending";
      };
      output: {
        /** The ASIN Data API response payload returned by the action. */
        data: Record<string, unknown>;
        /** Error if any occurred during the action execution. */
        error?: string;
        /** Whether the action execution was successful. */
        successful: boolean;
      };
    };
    /** Update an existing ASIN Data API destination configuration. Only include fields you want to update. */
    "asin_data_api.update_destination": {
      input: {
        /**
         * New name for the destination.
         * @minLength 1
         */
        name?: string;
        /** Whether the destination should be enabled or disabled. */
        enabled?: boolean;
        /**
         * Alibaba Cloud OSS region ID.
         * @minLength 1
         */
        oss_region_id?: string;
        /**
         * The unique identifier of the destination.
         * @minLength 1
         */
        destination_id: string;
        /**
         * Google Cloud Storage access key for GCS authentication.
         * @minLength 1
         */
        gcs_access_key?: string;
        /**
         * Google Cloud Storage secret key for GCS authentication.
         * @minLength 1
         */
        gcs_secret_key?: string;
        /**
         * Alibaba Cloud OSS access key for OSS authentication.
         * @minLength 1
         */
        oss_access_key?: string;
        /**
         * Alibaba Cloud OSS secret key for OSS authentication.
         * @minLength 1
         */
        oss_secret_key?: string;
        /**
         * AWS S3 bucket name for S3-type destinations.
         * @minLength 1
         */
        s3_bucket_name?: string;
        /**
         * Path prefix within the S3 bucket where files will be stored.
         * @minLength 1
         */
        s3_path_prefix?: string;
        /**
         * Google Cloud Storage bucket name for GCS destinations.
         * @minLength 1
         */
        gcs_bucket_name?: string;
        /**
         * Path prefix within the GCS bucket.
         * @minLength 1
         */
        gcs_path_prefix?: string;
        /**
         * Alibaba Cloud OSS bucket name for OSS destinations.
         * @minLength 1
         */
        oss_bucket_name?: string;
        /**
         * Path prefix within the OSS bucket.
         * @minLength 1
         */
        oss_path_prefix?: string;
        /**
         * AWS access key ID for S3 authentication.
         * @minLength 1
         */
        s3_access_key_id?: string;
        /**
         * Azure storage account key for Azure authentication.
         * @minLength 1
         */
        azure_account_key?: string;
        /**
         * Path prefix within the Azure container.
         * @minLength 1
         */
        azure_path_prefix?: string;
        /**
         * Azure storage account name for Azure destinations.
         * @minLength 1
         */
        azure_account_name?: string;
        /**
         * Azure container name where files will be stored.
         * @minLength 1
         */
        azure_container_name?: string;
        /**
         * AWS secret access key for S3 authentication.
         * @minLength 1
         */
        s3_secret_access_key?: string;
      };
      output: {
        /** The ASIN Data API response payload returned by the action. */
        data: Record<string, unknown>;
        /** Error if any occurred during the action execution. */
        error?: string;
        /** Whether the action execution was successful. */
        successful: boolean;
      };
    };
  }
}
