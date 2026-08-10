import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Raindrop.io bookmark collection. */
    "raindrop.create_collection": {
      input: {
        /** The collection title. */
        title: string;
        /** The collection view style. */
        view?: "list" | "simple" | "grid" | "masonry";
        /** The descending sort position among sibling collections. */
        sort?: number;
        /** Whether the collection and its bookmarks are publicly accessible. */
        public?: boolean;
        /** The parent collection ID. Omit it for a root collection. */
        parentId?: number;
        /** The collection cover URLs. */
        cover?: Array<string>;
      };
      output: {
        /** Whether Raindrop.io completed the request successfully. */
        result: boolean;
        /** The item returned by Raindrop.io. */
        item: Record<string, unknown>;
      };
    };
    /** Create a bookmark from a URL in Raindrop.io. */
    "raindrop.create_raindrop": {
      input: {
        /**
         * The bookmark URL.
         * @format uri
         */
        link: string;
        /**
         * The bookmark title, up to 1000 characters.
         * @maxLength 1000
         */
        title?: string;
        /**
         * The bookmark description, up to 10000 characters.
         * @maxLength 10000
         */
        excerpt?: string;
        /**
         * The bookmark note, up to 10000 characters.
         * @maxLength 10000
         */
        note?: string;
        /** The collection ID that contains the bookmark. */
        collectionId?: number;
        /** The bookmark tags. */
        tags?: Array<string>;
        /** Whether the bookmark is marked as a favorite. */
        important?: boolean;
        /**
         * The bookmark cover URL.
         * @format uri
         */
        cover?: string;
        /** The bookmark content type. */
        type?: "link" | "article" | "image" | "video" | "document" | "audio";
      };
      output: {
        /** Whether Raindrop.io completed the request successfully. */
        result: boolean;
        /** The item returned by Raindrop.io. */
        item: Record<string, unknown>;
      };
    };
    /** Delete a collection and move its bookmarks to Trash. */
    "raindrop.delete_collection": {
      input: {
        /** The collection ID to delete. */
        collectionId: number;
      };
      output: {
        /** Whether Raindrop.io completed the request successfully. */
        result: boolean;
      };
    };
    /** Move a bookmark to Trash, or permanently delete it when already in Trash. */
    "raindrop.delete_raindrop": {
      input: {
        /** The bookmark ID to delete. */
        raindropId: number;
      };
      output: {
        /** Whether Raindrop.io completed the request successfully. */
        result: boolean;
      };
    };
    /** Get one Raindrop.io collection by ID. */
    "raindrop.get_collection": {
      input: {
        /** The collection ID. */
        collectionId: number;
      };
      output: {
        /** Whether Raindrop.io completed the request successfully. */
        result: boolean;
        /** The item returned by Raindrop.io. */
        item: Record<string, unknown>;
      };
    };
    /** Get one Raindrop.io bookmark by ID. */
    "raindrop.get_raindrop": {
      input: {
        /** The bookmark ID. */
        raindropId: number;
      };
      output: {
        /** Whether Raindrop.io completed the request successfully. */
        result: boolean;
        /** The item returned by Raindrop.io. */
        item: Record<string, unknown>;
      };
    };
    /** Get the authenticated Raindrop.io user profile. */
    "raindrop.get_user": {
      input: Record<string, never>;
      output: {
        /** Whether Raindrop.io completed the request successfully. */
        result: boolean;
        /** The authenticated Raindrop.io user. */
        user: Record<string, unknown>;
      };
    };
    /** List root collections and optionally include nested child collections. */
    "raindrop.list_collections": {
      input: {
        /** Whether to include nested child collections. */
        includeChildren?: boolean;
      };
      output: {
        /** Whether Raindrop.io completed the request successfully. */
        result: boolean;
        /** The collections returned by Raindrop.io. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List or search bookmarks in a collection or across all collections. */
    "raindrop.list_raindrops": {
      input: {
        /** The collection ID, or 0 for all bookmarks except Trash. */
        collectionId?: number;
        /** A Raindrop.io search expression. */
        search?: string;
        /** The bookmark sort order. */
        sort?: "-created" | "created" | "score" | "-sort" | "title" | "-title" | "domain" | "-domain";
        /**
         * The zero-based result page.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of bookmarks per page, up to 50.
         * @minimum 1
         * @maximum 50
         */
        perPage?: number;
        /** Whether to include bookmarks from nested collections. */
        nested?: boolean;
      };
      output: {
        /** Whether Raindrop.io completed the request successfully. */
        result: boolean;
        /** The bookmarks returned by Raindrop.io. */
        items: Array<Record<string, unknown>>;
        /** The total number of matching bookmarks. */
        count: number;
      };
    };
    /** List tags across all bookmarks or within one collection. */
    "raindrop.list_tags": {
      input: {
        /** The optional collection ID used to restrict the tag list. */
        collectionId?: number;
      };
      output: {
        /** Whether Raindrop.io completed the request successfully. */
        result: boolean;
        /** The tags returned by Raindrop.io. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Update an existing Raindrop.io collection. */
    "raindrop.update_collection": {
      input: {
        /** The collection ID. */
        collectionId: number;
        /** The collection title. */
        title?: string;
        /** The collection view style. */
        view?: "list" | "simple" | "grid" | "masonry";
        /** The descending sort position among sibling collections. */
        sort?: number;
        /** Whether the collection and its bookmarks are publicly accessible. */
        public?: boolean;
        /** The parent collection ID. Omit it for a root collection. */
        parentId?: number;
        /** The collection cover URLs. */
        cover?: Array<string>;
        /** Whether nested collections are expanded in the sidebar. */
        expanded?: boolean;
      };
      output: {
        /** Whether Raindrop.io completed the request successfully. */
        result: boolean;
        /** The item returned by Raindrop.io. */
        item: Record<string, unknown>;
      };
    };
    /** Update an existing Raindrop.io bookmark. */
    "raindrop.update_raindrop": {
      input: {
        /** The bookmark ID. */
        raindropId: number;
        /**
         * The bookmark URL.
         * @format uri
         */
        link?: string;
        /**
         * The bookmark title, up to 1000 characters.
         * @maxLength 1000
         */
        title?: string;
        /**
         * The bookmark description, up to 10000 characters.
         * @maxLength 10000
         */
        excerpt?: string;
        /**
         * The bookmark note, up to 10000 characters.
         * @maxLength 10000
         */
        note?: string;
        /** The collection ID that contains the bookmark. */
        collectionId?: number;
        /** The bookmark tags. */
        tags?: Array<string>;
        /** Whether the bookmark is marked as a favorite. */
        important?: boolean;
        /**
         * The bookmark cover URL.
         * @format uri
         */
        cover?: string;
        /** The bookmark content type. */
        type?: "link" | "article" | "image" | "video" | "document" | "audio";
      };
      output: {
        /** Whether Raindrop.io completed the request successfully. */
        result: boolean;
        /** The item returned by Raindrop.io. */
        item: Record<string, unknown>;
      };
    };
  }
}
