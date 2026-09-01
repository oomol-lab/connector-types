import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a folder in Box. */
    "box.create_folder": {
      input: {
        /**
         * The folder name.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
        /**
         * The parent folder identifier.
         * @minLength 1
         */
        parentFolderId: string;
      };
      output: {
        /** A Box file, folder, or web link with identifying metadata. */
        item: Record<string, unknown>;
      };
    };
    /** Move a Box file to the trash. */
    "box.delete_file": {
      input: {
        /**
         * The Box file identifier.
         * @minLength 1
         */
        fileId: string;
        /**
         * The entity tag for optimistic concurrency.
         * @minLength 1
         */
        etag?: string;
      };
      output: {
        /** Whether Box accepted the deletion. */
        deleted: boolean;
        /**
         * The deleted file identifier.
         * @minLength 1
         */
        fileId: string;
      };
    };
    /** Move a Box folder to the trash. */
    "box.delete_folder": {
      input: {
        /**
         * The Box folder identifier.
         * @minLength 1
         */
        folderId: string;
        /** Whether to recursively delete a non-empty folder. */
        recursive?: boolean;
        /**
         * The entity tag for optimistic concurrency.
         * @minLength 1
         */
        etag?: string;
      };
      output: Record<string, unknown>;
    };
    /** Download a Box file into temporary transit storage. */
    "box.download_file": {
      input: {
        /**
         * The Box file identifier.
         * @minLength 1
         */
        fileId: string;
        /**
         * An optional transit file name.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /** A Box file, folder, or web link with identifying metadata. */
        item: Record<string, unknown>;
        /** The temporary public URL. */
        transitUrl: string;
        /**
         * The file name.
         * @minLength 1
         */
        name: string;
        /**
         * The MIME type.
         * @minLength 1
         */
        mimeType: string;
        /** The file size when known. */
        sizeBytes: number | null;
      };
    };
    /** Get the Box user represented by the current OAuth connection. */
    "box.get_current_user": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Get metadata for a Box file. */
    "box.get_file": {
      input: {
        /**
         * The Box file identifier.
         * @minLength 1
         */
        fileId: string;
      };
      output: {
        /** A Box file, folder, or web link with identifying metadata. */
        item: Record<string, unknown>;
      };
    };
    /** Get metadata for a Box folder. */
    "box.get_folder": {
      input: {
        /**
         * The Box folder identifier.
         * @minLength 1
         */
        folderId: string;
      };
      output: {
        /** A Box file, folder, or web link with identifying metadata. */
        item: Record<string, unknown>;
      };
    };
    /** List files, folders, and web links in a Box folder. */
    "box.list_folder_items": {
      input: {
        /**
         * The folder identifier. Use 0 for the root folder.
         * @minLength 1
         */
        folderId: string;
        /** Whether to use marker pagination. */
        useMarker?: boolean;
        /** The marker from a previous page. */
        marker?: string;
        /** The zero-based offset. */
        offset?: number;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** The secondary sort field. */
        sort?: string;
        /** The sort direction. */
        direction?: string;
      };
      output: {
        /** The Box items in this page. */
        entries: Array<Record<string, unknown>>;
        /** The page size returned by Box. */
        limit: number;
        /** The offset returned by Box. */
        offset?: number;
        /** The total count estimate returned by Box. */
        totalCount?: number;
        /** The next marker, or null. */
        nextMarker: string | null;
        /** The previous marker, or null. */
        previousMarker?: string | null;
      };
    };
    /** Continue a marker-based Box folder listing. */
    "box.list_folder_items_continue": {
      input: {
        /**
         * The folder identifier.
         * @minLength 1
         */
        folderId: string;
        /**
         * The next marker returned by Box.
         * @minLength 1
         */
        marker: string;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The Box items in this page. */
        entries: Array<Record<string, unknown>>;
        /** The page size returned by Box. */
        limit: number;
        /** The offset returned by Box. */
        offset?: number;
        /** The total count estimate returned by Box. */
        totalCount?: number;
        /** The next marker, or null. */
        nextMarker: string | null;
        /** The previous marker, or null. */
        previousMarker?: string | null;
      };
    };
    /** Search Box content available to the authenticated user. */
    "box.search": {
      input: {
        /**
         * The search query.
         * @minLength 1
         */
        query: string;
        /** Limit results to one item type. */
        type?: string;
        /** Ancestor folder identifiers. */
        ancestorFolderIds?: Array<string>;
        /** File extensions without leading dots. */
        fileExtensions?: Array<string>;
        /** Content fields to search. */
        contentTypes?: Array<string>;
        /**
         * The maximum number of results.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** The zero-based offset. */
        offset?: number;
        /** The search sort field. */
        sort?: string;
        /** The sort direction. */
        direction?: string;
      };
      output: {
        /** The matching Box items. */
        entries: Array<Record<string, unknown>>;
        /** The page size. */
        limit: number;
        /** The current offset. */
        offset: number;
        /** The total count estimate. */
        totalCount: number;
        /** The next offset, or null. */
        nextOffset: number | null;
      };
    };
    /** Rename, move, or update the description of a Box file. */
    "box.update_file": {
      input: {
        /**
         * The Box file identifier.
         * @minLength 1
         */
        fileId: string;
        /**
         * A new item name.
         * @minLength 1
         */
        name?: string;
        /**
         * A new item description.
         * @maxLength 256
         */
        description?: string;
        /**
         * A new parent folder identifier.
         * @minLength 1
         */
        parentFolderId?: string;
        /**
         * The entity tag for optimistic concurrency.
         * @minLength 1
         */
        etag?: string;
      };
      output: {
        /** A Box file, folder, or web link with identifying metadata. */
        item: Record<string, unknown>;
      };
    };
    /** Rename, move, or update the description of a Box folder. */
    "box.update_folder": {
      input: {
        /**
         * The Box folder identifier.
         * @minLength 1
         */
        folderId: string;
        /**
         * A new item name.
         * @minLength 1
         */
        name?: string;
        /**
         * A new item description.
         * @maxLength 256
         */
        description?: string;
        /**
         * A new parent folder identifier.
         * @minLength 1
         */
        parentFolderId?: string;
        /**
         * The entity tag for optimistic concurrency.
         * @minLength 1
         */
        etag?: string;
      };
      output: {
        /** A Box file, folder, or web link with identifying metadata. */
        item: Record<string, unknown>;
      };
    };
    /** Upload a publicly reachable file of up to 50 MB to Box. */
    "box.upload_file": {
      input: {
        /**
         * The public HTTP or HTTPS URL to download.
         * @minLength 1
         */
        fileUrl: string;
        /**
         * The Box file name.
         * @minLength 1
         */
        name: string;
        /**
         * The parent folder identifier.
         * @minLength 1
         */
        parentFolderId: string;
        /** The original content creation timestamp. */
        contentCreatedAt?: string;
        /** The original content modification timestamp. */
        contentModifiedAt?: string;
      };
      output: {
        /** A Box file, folder, or web link with identifying metadata. */
        item: Record<string, unknown>;
      };
    };
  }
}
