import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List the asset tag cloud available in a Cincopa account. */
    "cincopa.list_asset_tags": {
      input: Record<string, never>;
      output: {
        /** Mapping of Cincopa tag names to item counts. */
        tagCloud: Record<string, number>;
      };
    };
    /** List assets from a Cincopa account with optional metadata filters. */
    "cincopa.list_assets": {
      input: {
        /**
         * Free-text search term for asset metadata.
         * @minLength 1
         */
        search?: string;
        /**
         * Asset types to include, such as image, video, audio, or other.
         * @minItems 1
         */
        types?: Array<string>;
        /**
         * Exact Cincopa RID to search for.
         * @minLength 1
         */
        rid?: string;
        /**
         * Exact Cincopa reference_id to search for.
         * @minLength 1
         */
        referenceId?: string;
        /**
         * Asset tag filter value.
         * @minLength 1
         */
        tag?: string;
        /**
         * Metadata field names to request from Cincopa for each asset row.
         * @minItems 1
         */
        details?: Array<string>;
        /**
         * Result page number to request from Cincopa.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of assets to request in one page.
         * @minimum 1
         */
        itemsPerPage?: number;
      };
      output: {
        /** Asset rows returned by Cincopa. */
        items: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Cincopa list endpoints. */
        pagination: {
          /** The current result page returned by Cincopa. */
          page: number;
          /** The number of rows requested per page. */
          itemsPerPage: number;
          /** The total number of rows available for the current query. */
          itemsCount: number;
          /** The total number of pages available for the current query. */
          pageCount: number;
        };
      };
    };
    /** List galleries from a Cincopa account with optional search and tag filters. */
    "cincopa.list_galleries": {
      input: {
        /**
         * Search term matched against gallery captions, descriptions, IDs, and tags.
         * @minLength 1
         */
        search?: string;
        /**
         * Result page number to request from Cincopa.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of galleries to request in one page.
         * @minimum 1
         */
        itemsPerPage?: number;
        /**
         * Gallery tags to include or exclude. Prefix a value with '-' to exclude it.
         * @minItems 1
         */
        filterTags?: Array<string>;
      };
      output: {
        /** Workspace name returned by Cincopa for the request context. */
        workspace: string;
        /** Gallery rows returned by Cincopa. */
        galleries: Array<Record<string, unknown>>;
        /** Mapping of Cincopa tag names to item counts. */
        tagCloud: Record<string, number>;
        /** Pagination metadata returned by Cincopa list endpoints. */
        pagination: {
          /** The current result page returned by Cincopa. */
          page: number;
          /** The number of rows requested per page. */
          itemsPerPage: number;
          /** The total number of rows available for the current query. */
          itemsCount: number;
          /** The total number of pages available for the current query. */
          pageCount: number;
        };
      };
    };
    /** List items from one Cincopa gallery by FID. */
    "cincopa.list_gallery_items": {
      input: {
        /**
         * The Cincopa gallery FID to inspect.
         * @minLength 1
         */
        fid: string;
        /**
         * Metadata field names to request from Cincopa for each gallery item.
         * @minItems 1
         */
        details?: Array<string>;
        /**
         * Result page number to request from Cincopa.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of gallery items to request in one page.
         * @minimum 1
         */
        itemsPerPage?: number;
      };
      output: {
        /** The gallery FID returned by Cincopa. */
        fid: string;
        /**
         * The upload URL returned for the gallery.
         * @format uri
         */
        uploadUrl: string;
        /** The gallery claim marker returned by Cincopa. */
        claimed: string;
        /** The secondary gallery identifier returned by Cincopa. */
        spfid: string;
        /** Gallery item rows returned by Cincopa. */
        items: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Cincopa list endpoints. */
        pagination: {
          /** The current result page returned by Cincopa. */
          page: number;
          /** The number of rows requested per page. */
          itemsPerPage: number;
          /** The total number of rows available for the current query. */
          itemsCount: number;
          /** The total number of pages available for the current query. */
          pageCount: number;
        };
      };
    };
  }
}
