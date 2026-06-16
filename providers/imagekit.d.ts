import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete one ImageKit file and all of its versions permanently. */
    "imagekit.delete_file": {
      input: {
        /**
         * The unique ImageKit fileId returned by upload or list assets APIs.
         * @minLength 1
         */
        fileId: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
      };
    };
    /** Get details for the current version of an ImageKit file. */
    "imagekit.get_file_details": {
      input: {
        /**
         * The unique ImageKit fileId returned by upload or list assets APIs.
         * @minLength 1
         */
        fileId: string;
      };
      output: {
        /** An ImageKit asset object returned by the Digital Asset Management API. */
        asset: Record<string, unknown>;
      };
    };
    /** Get the status of an ImageKit cache purge request. */
    "imagekit.get_purge_status": {
      input: {
        /**
         * The ImageKit purge request identifier.
         * @minLength 1
         */
        requestId: string;
      };
      output: {
        /** The current purge request status. */
        status: "Pending" | "Completed";
      };
    };
    /** Get image or video metadata from a remote URL through ImageKit. */
    "imagekit.get_remote_file_metadata": {
      input: {
        /**
         * The remote image or video URL to inspect.
         * @format uri
         */
        url: string;
      };
      output: {
        /** Image or video metadata returned by ImageKit. */
        metadata: Record<string, unknown>;
      };
    };
    /** Get image or video metadata for an uploaded ImageKit file. */
    "imagekit.get_uploaded_file_metadata": {
      input: {
        /**
         * The unique ImageKit fileId returned by upload or list assets APIs.
         * @minLength 1
         */
        fileId: string;
      };
      output: {
        /** Image or video metadata returned by ImageKit. */
        metadata: Record<string, unknown>;
      };
    };
    /** List or search assets in the ImageKit media library. */
    "imagekit.list_assets": {
      input: {
        /**
         * Folder path used to limit the search to a specific folder.
         * @minLength 1
         */
        path?: string;
        /**
         * Lucene-like ImageKit search query for advanced asset search.
         * @minLength 1
         */
        searchQuery?: string;
        /** File type filter for listed ImageKit assets. */
        fileType?: "all" | "image" | "non-image";
        /** Sort order for listed ImageKit assets. */
        sort?: "ASC_NAME" | "DESC_NAME" | "ASC_CREATED" | "DESC_CREATED" | "ASC_UPDATED" | "DESC_UPDATED" | "ASC_HEIGHT" | "DESC_HEIGHT" | "ASC_WIDTH" | "DESC_WIDTH" | "ASC_SIZE" | "DESC_SIZE" | "ASC_RELEVANCE" | "DESC_RELEVANCE";
        /**
         * Maximum number of assets to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of assets to skip before returning results.
         * @minimum 0
         */
        skip?: number;
      };
      output: {
        /** ImageKit assets returned by the list and search API. */
        assets: Array<Record<string, unknown>>;
      };
    };
    /** Submit a cache purge request for an ImageKit file URL. */
    "imagekit.purge_cache": {
      input: {
        /**
         * The full ImageKit file URL to purge from cache.
         * @format uri
         */
        url: string;
      };
      output: {
        /** The purge request identifier returned by ImageKit. */
        requestId: string;
      };
    };
  }
}
