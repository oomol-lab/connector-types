import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Signaturely folder at the root or inside another folder. */
    "signaturely.create_folder": {
      input: {
        /**
         * The title for the new folder.
         * @minLength 1
         * @pattern \S
         */
        title: string;
        /**
         * The Signaturely UUID.
         * @format uuid
         */
        parentId?: string;
      };
      output: {
        /** The folder UUID returned by Signaturely. */
        id: string;
        /** The folder title. */
        title: string;
        /** The parent folder UUID, or null for a root folder. */
        parentId: string | null;
        /** The number of documents directly contained in the folder. */
        documentsCount: number;
        /** The number of folders directly contained in the folder. */
        foldersCount: number;
      };
    };
    /** Get one Signaturely folder or the virtual root folder. */
    "signaturely.get_folder": {
      input: {
        /**
         * The folder UUID, or null to retrieve the virtual root folder.
         * @format uuid
         */
        id: string | null;
      };
      output: {
        /** The folder UUID returned by Signaturely. */
        id: string;
        /** The folder title. */
        title: string;
        /** The parent folder UUID, or null for a root folder. */
        parentId: string | null;
        /** The number of documents directly contained in the folder. */
        documentsCount: number;
        /** The number of folders directly contained in the folder. */
        foldersCount: number;
      };
    };
    /** List Signaturely folders from the root or from a selected parent folder. */
    "signaturely.list_folders": {
      input: {
        /**
         * The one-based page number to retrieve.
         * @minimum 1
         */
        page: number;
        /**
         * The number of folders to return per page.
         * @minimum 1
         */
        limit: number;
        /**
         * The parent folder UUID used as the starting point of the list.
         * @format uuid
         */
        folderId?: string;
        /** The folder field used to order results. */
        orderingKey?: "title" | "id" | "foldersCount" | "documentsCount";
        /** The direction used to order folder results. */
        orderingDirection?: "ASC" | "DESC";
      };
      output: {
        /** The folders on the current page. */
        items: Array<{
          /** The folder UUID returned by Signaturely. */
          id: string;
          /** The folder title. */
          title: string;
          /** The number of documents directly contained in the folder. */
          documentsCount: number;
          /** The number of folders directly contained in the folder. */
          foldersCount: number;
        }>;
        /** The number of folders on the current page. */
        itemCount: number;
        /** The total number of matching folders. */
        totalItems: number;
        /** The requested number of folders per page. */
        itemsPerPage: number;
        /** The total number of result pages. */
        totalPages: number;
        /** The current one-based page number. */
        currentPage: number;
      };
    };
    /** Rename an existing Signaturely folder. */
    "signaturely.rename_folder": {
      input: {
        /**
         * The Signaturely UUID.
         * @format uuid
         */
        id: string;
        /**
         * The new title for the folder.
         * @minLength 1
         * @pattern \S
         */
        title: string;
      };
      output: {
        /** The folder UUID returned by Signaturely. */
        id: string;
        /** The folder title. */
        title: string;
        /** The parent folder UUID, or null for a root folder. */
        parentId: string | null;
        /** The number of documents directly contained in the folder. */
        documentsCount: number;
        /** The number of folders directly contained in the folder. */
        foldersCount: number;
      };
    };
  }
}
