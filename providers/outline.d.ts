import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Outline collection by its UUID. */
    "outline.get_collection": {
      input: {
        /**
         * The unique identifier for the collection.
         * @minLength 1
         * @format uuid
         */
        id: string;
      };
      output: {
        /** One Outline collection returned by collection endpoints. */
        collection: {
          /**
           * The unique identifier for the collection.
           * @minLength 1
           * @format uuid
           */
          id: string;
          /**
           * The short collection URL identifier.
           * @minLength 1
           */
          urlId?: string;
          /**
           * The collection name.
           * @minLength 1
           */
          name: string;
          /** The collection description, which may contain markdown. */
          description?: string;
          /** The collection sort metadata returned by Outline. */
          sort?: {
            /** The collection sort field. */
            field: string;
            /** The collection sort direction returned by Outline. */
            direction: "asc" | "desc";
          };
          /** The sidebar index for the collection. */
          index?: string;
          /** The HEX color associated with the collection. */
          color?: string;
          /** The icon or emoji associated with the collection. */
          icon?: string;
          /** The collection permission returned by Outline. */
          permission?: "read" | "read_write";
          /** Whether sharing is enabled for the collection. */
          sharing?: boolean;
          /**
           * The ISO timestamp when the collection was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * The ISO timestamp when the collection was last updated.
           * @format date-time
           */
          updatedAt: string;
          /**
           * The ISO timestamp when the collection was archived, or null when active.
           * @format date-time
           */
          archivedAt?: string | null;
          /**
           * The ISO timestamp when the collection was deleted, or null when active.
           * @format date-time
           */
          deletedAt?: string | null;
          /** The raw collection object returned by Outline. */
          raw?: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Outline document by UUID or urlId, or by shareId when reading through a share link context. */
    "outline.get_document": {
      input: {
        /**
         * The document UUID or short urlId accepted by Outline.
         * @minLength 1
         */
        id?: string;
        /**
         * The share UUID used to resolve a shared document.
         * @minLength 1
         */
        shareId?: string;
      };
      output: {
        /** One Outline document returned by document endpoints. */
        document: {
          /**
           * The unique identifier for the document.
           * @minLength 1
           * @format uuid
           */
          id: string;
          /**
           * The unique identifier for the associated collection.
           * @minLength 1
           * @format uuid
           */
          collectionId?: string;
          /**
           * The unique identifier for the parent document, or null when the document is at the root level.
           * @minLength 1
           * @format uuid
           */
          parentDocumentId?: string | null;
          /** The document title. */
          title: string;
          /** Whether the document is displayed in full width. */
          fullWidth?: boolean;
          /** The emoji associated with the document, or null when not set. */
          emoji?: string | null;
          /** The markdown document body returned by Outline. */
          text?: string;
          /** The short document URL identifier returned by Outline. */
          urlId?: string;
          /** Whether the document is pinned. */
          pinned?: boolean;
          /**
           * The template identifier when the document was created from a template, or null when not set.
           * @minLength 1
           * @format uuid
           */
          templateId?: string | null;
          /** The current document revision number. */
          revision?: number;
          /**
           * The ISO timestamp when the document was created.
           * @format date-time
           */
          createdAt?: string;
          /** One Outline user returned inside auth or document metadata. */
          createdBy?: {
            /**
             * The unique identifier for the user.
             * @minLength 1
             * @format uuid
             */
            id: string;
            /**
             * The display name of the user.
             * @minLength 1
             */
            name: string;
            /**
             * The avatar URL for the user.
             * @format uri
             */
            avatarUrl?: string;
            /**
             * The email address for the user.
             * @format email
             */
            email?: string;
            /** The Outline user role. */
            role?: "admin" | "member" | "viewer" | "guest";
            /** Whether the user is suspended. */
            isSuspended?: boolean;
            /**
             * The ISO timestamp when the user was last active.
             * @format date-time
             */
            lastActiveAt?: string;
            /**
             * The ISO timestamp when the user was created.
             * @format date-time
             */
            createdAt?: string;
          };
          /**
           * The ISO timestamp when the document was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /** One Outline user returned inside auth or document metadata. */
          updatedBy?: {
            /**
             * The unique identifier for the user.
             * @minLength 1
             * @format uuid
             */
            id: string;
            /**
             * The display name of the user.
             * @minLength 1
             */
            name: string;
            /**
             * The avatar URL for the user.
             * @format uri
             */
            avatarUrl?: string;
            /**
             * The email address for the user.
             * @format email
             */
            email?: string;
            /** The Outline user role. */
            role?: "admin" | "member" | "viewer" | "guest";
            /** Whether the user is suspended. */
            isSuspended?: boolean;
            /**
             * The ISO timestamp when the user was last active.
             * @format date-time
             */
            lastActiveAt?: string;
            /**
             * The ISO timestamp when the user was created.
             * @format date-time
             */
            createdAt?: string;
          };
          /**
           * The ISO timestamp when the document was published, or null when it is a draft.
           * @format date-time
           */
          publishedAt?: string | null;
          /** The data attributes attached to the document. */
          dataAttributes?: Array<{
            /**
             * The unique identifier for the associated data attribute.
             * @minLength 1
             * @format uuid
             */
            dataAttributeId: string;
            /** A data attribute value returned by Outline, which may be string, boolean, or number. */
            value: string | boolean | number;
            /**
             * The ISO timestamp when this data attribute value was last updated.
             * @format date-time
             */
            updatedAt: string;
          }> | null;
          /**
           * The ISO timestamp when the document was archived, or null when active.
           * @format date-time
           */
          archivedAt?: string | null;
          /**
           * The ISO timestamp when the document was deleted, or null when active.
           * @format date-time
           */
          deletedAt?: string | null;
          /** The raw document object returned by Outline. */
          raw?: Record<string, unknown>;
        };
      };
    };
    /** Retrieve the document tree for one Outline collection by UUID. */
    "outline.list_collection_documents": {
      input: {
        /**
         * The unique identifier for the collection.
         * @minLength 1
         * @format uuid
         */
        id: string;
      };
      output: {
        /** The document tree returned for the collection. */
        tree: Array<{
          /**
           * The unique identifier for the document.
           * @minLength 1
           * @format uuid
           */
          id: string;
          /**
           * The document title.
           * @minLength 1
           */
          title: string;
          /** The document URL path returned by Outline. */
          url: string;
          /** The child nodes nested under this document. */
          children: Array<Record<string, unknown>>;
        }>;
      };
    };
    /** List Outline collections the authenticated user can access, with optional search, status filtering, pagination, and sorting. */
    "outline.list_collections": {
      input: {
        /**
         * The zero-based result offset to request.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of results to request.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The field used to sort collection list results.
         * @minLength 1
         */
        sort?: string;
        /** The sort direction applied by Outline. */
        direction?: "ASC" | "DESC";
        /**
         * Optional collection name query filter.
         * @minLength 1
         */
        query?: string;
        /** Optional collection statuses to include in the results. */
        statusFilter?: Array<"archived">;
      };
      output: {
        /** The collections returned by Outline. */
        collections: Array<{
          /**
           * The unique identifier for the collection.
           * @minLength 1
           * @format uuid
           */
          id: string;
          /**
           * The short collection URL identifier.
           * @minLength 1
           */
          urlId?: string;
          /**
           * The collection name.
           * @minLength 1
           */
          name: string;
          /** The collection description, which may contain markdown. */
          description?: string;
          /** The collection sort metadata returned by Outline. */
          sort?: {
            /** The collection sort field. */
            field: string;
            /** The collection sort direction returned by Outline. */
            direction: "asc" | "desc";
          };
          /** The sidebar index for the collection. */
          index?: string;
          /** The HEX color associated with the collection. */
          color?: string;
          /** The icon or emoji associated with the collection. */
          icon?: string;
          /** The collection permission returned by Outline. */
          permission?: "read" | "read_write";
          /** Whether sharing is enabled for the collection. */
          sharing?: boolean;
          /**
           * The ISO timestamp when the collection was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * The ISO timestamp when the collection was last updated.
           * @format date-time
           */
          updatedAt: string;
          /**
           * The ISO timestamp when the collection was archived, or null when active.
           * @format date-time
           */
          archivedAt?: string | null;
          /**
           * The ISO timestamp when the collection was deleted, or null when active.
           * @format date-time
           */
          deletedAt?: string | null;
          /** The raw collection object returned by Outline. */
          raw?: Record<string, unknown>;
        }>;
        /** The pagination object returned by Outline list endpoints. */
        pagination: {
          /**
           * The zero-based result offset.
           * @minimum 0
           */
          offset: number;
          /**
           * The maximum number of results requested.
           * @exclusiveMinimum 0
           */
          limit: number;
        };
      };
    };
    /** List Outline documents visible to the authenticated user with optional collection, user, parent, status, pagination, and sorting filters. */
    "outline.list_documents": {
      input: {
        /**
         * The zero-based result offset to request.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of results to request.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The field used to sort document list results.
         * @minLength 1
         */
        sort?: string;
        /** The sort direction applied by Outline. */
        direction?: "ASC" | "DESC";
        /**
         * Optional collection UUID used to restrict the document list.
         * @minLength 1
         * @format uuid
         */
        collectionId?: string;
        /**
         * Optional user UUID used to restrict the document list.
         * @minLength 1
         * @format uuid
         */
        userId?: string;
        /**
         * Optional document UUID used to filter documents that backlink to the specified document.
         * @minLength 1
         * @format uuid
         */
        backlinkDocumentId?: string;
        /**
         * Optional parent document UUID used to list direct child documents.
         * @minLength 1
         * @format uuid
         */
        parentDocumentId?: string;
        /** Optional document statuses to include in the results. */
        statusFilter?: Array<"draft" | "archived" | "published">;
      };
      output: {
        /** The documents returned by Outline. */
        documents: Array<{
          /**
           * The unique identifier for the document.
           * @minLength 1
           * @format uuid
           */
          id: string;
          /**
           * The unique identifier for the associated collection.
           * @minLength 1
           * @format uuid
           */
          collectionId?: string;
          /**
           * The unique identifier for the parent document, or null when the document is at the root level.
           * @minLength 1
           * @format uuid
           */
          parentDocumentId?: string | null;
          /** The document title. */
          title: string;
          /** Whether the document is displayed in full width. */
          fullWidth?: boolean;
          /** The emoji associated with the document, or null when not set. */
          emoji?: string | null;
          /** The markdown document body returned by Outline. */
          text?: string;
          /** The short document URL identifier returned by Outline. */
          urlId?: string;
          /** Whether the document is pinned. */
          pinned?: boolean;
          /**
           * The template identifier when the document was created from a template, or null when not set.
           * @minLength 1
           * @format uuid
           */
          templateId?: string | null;
          /** The current document revision number. */
          revision?: number;
          /**
           * The ISO timestamp when the document was created.
           * @format date-time
           */
          createdAt?: string;
          /** One Outline user returned inside auth or document metadata. */
          createdBy?: {
            /**
             * The unique identifier for the user.
             * @minLength 1
             * @format uuid
             */
            id: string;
            /**
             * The display name of the user.
             * @minLength 1
             */
            name: string;
            /**
             * The avatar URL for the user.
             * @format uri
             */
            avatarUrl?: string;
            /**
             * The email address for the user.
             * @format email
             */
            email?: string;
            /** The Outline user role. */
            role?: "admin" | "member" | "viewer" | "guest";
            /** Whether the user is suspended. */
            isSuspended?: boolean;
            /**
             * The ISO timestamp when the user was last active.
             * @format date-time
             */
            lastActiveAt?: string;
            /**
             * The ISO timestamp when the user was created.
             * @format date-time
             */
            createdAt?: string;
          };
          /**
           * The ISO timestamp when the document was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /** One Outline user returned inside auth or document metadata. */
          updatedBy?: {
            /**
             * The unique identifier for the user.
             * @minLength 1
             * @format uuid
             */
            id: string;
            /**
             * The display name of the user.
             * @minLength 1
             */
            name: string;
            /**
             * The avatar URL for the user.
             * @format uri
             */
            avatarUrl?: string;
            /**
             * The email address for the user.
             * @format email
             */
            email?: string;
            /** The Outline user role. */
            role?: "admin" | "member" | "viewer" | "guest";
            /** Whether the user is suspended. */
            isSuspended?: boolean;
            /**
             * The ISO timestamp when the user was last active.
             * @format date-time
             */
            lastActiveAt?: string;
            /**
             * The ISO timestamp when the user was created.
             * @format date-time
             */
            createdAt?: string;
          };
          /**
           * The ISO timestamp when the document was published, or null when it is a draft.
           * @format date-time
           */
          publishedAt?: string | null;
          /** The data attributes attached to the document. */
          dataAttributes?: Array<{
            /**
             * The unique identifier for the associated data attribute.
             * @minLength 1
             * @format uuid
             */
            dataAttributeId: string;
            /** A data attribute value returned by Outline, which may be string, boolean, or number. */
            value: string | boolean | number;
            /**
             * The ISO timestamp when this data attribute value was last updated.
             * @format date-time
             */
            updatedAt: string;
          }> | null;
          /**
           * The ISO timestamp when the document was archived, or null when active.
           * @format date-time
           */
          archivedAt?: string | null;
          /**
           * The ISO timestamp when the document was deleted, or null when active.
           * @format date-time
           */
          deletedAt?: string | null;
          /** The raw document object returned by Outline. */
          raw?: Record<string, unknown>;
        }>;
        /** The pagination object returned by Outline list endpoints. */
        pagination: {
          /**
           * The zero-based result offset.
           * @minimum 0
           */
          offset: number;
          /**
           * The maximum number of results requested.
           * @exclusiveMinimum 0
           */
          limit: number;
        };
      };
    };
    /** Search Outline documents by keyword with optional scope, recency, snippet, pagination, and sorting controls. */
    "outline.search_documents": {
      input: {
        /**
         * The zero-based result offset to request.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of results to request.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The keyword query used to search documents.
         * @minLength 1
         */
        query: string;
        /**
         * Optional user UUID used to filter by editor.
         * @minLength 1
         * @format uuid
         */
        userId?: string;
        /**
         * Optional collection UUID used to restrict search scope.
         * @minLength 1
         * @format uuid
         */
        collectionId?: string;
        /**
         * Optional document UUID used to search within a document subtree.
         * @minLength 1
         * @format uuid
         */
        documentId?: string;
        /** Optional document statuses to include in the search results. */
        statusFilter?: Array<"draft" | "archived" | "published">;
        /** The recency filter applied by Outline search. */
        dateFilter?: "day" | "week" | "month" | "year";
        /**
         * Optional share identifier used to restrict search to a shared collection or document.
         * @minLength 1
         */
        shareId?: string;
        /**
         * The minimum number of words to include in result snippets.
         * @minimum 0
         */
        snippetMinWords?: number;
        /**
         * The maximum number of words to include in result snippets.
         * @minimum 0
         */
        snippetMaxWords?: number;
        /** The sorting mode applied by Outline document search. */
        sort?: "relevance" | "createdAt" | "updatedAt" | "title";
        /** The sort direction applied by Outline. */
        direction?: "ASC" | "DESC";
      };
      output: {
        /** The matching documents returned by Outline search. */
        documents: Array<{
          /**
           * The unique identifier for the document.
           * @minLength 1
           * @format uuid
           */
          id: string;
          /**
           * The unique identifier for the associated collection.
           * @minLength 1
           * @format uuid
           */
          collectionId?: string;
          /**
           * The unique identifier for the parent document, or null when the document is at the root level.
           * @minLength 1
           * @format uuid
           */
          parentDocumentId?: string | null;
          /** The document title. */
          title: string;
          /** Whether the document is displayed in full width. */
          fullWidth?: boolean;
          /** The emoji associated with the document, or null when not set. */
          emoji?: string | null;
          /** The markdown document body returned by Outline. */
          text?: string;
          /** The short document URL identifier returned by Outline. */
          urlId?: string;
          /** Whether the document is pinned. */
          pinned?: boolean;
          /**
           * The template identifier when the document was created from a template, or null when not set.
           * @minLength 1
           * @format uuid
           */
          templateId?: string | null;
          /** The current document revision number. */
          revision?: number;
          /**
           * The ISO timestamp when the document was created.
           * @format date-time
           */
          createdAt?: string;
          /** One Outline user returned inside auth or document metadata. */
          createdBy?: {
            /**
             * The unique identifier for the user.
             * @minLength 1
             * @format uuid
             */
            id: string;
            /**
             * The display name of the user.
             * @minLength 1
             */
            name: string;
            /**
             * The avatar URL for the user.
             * @format uri
             */
            avatarUrl?: string;
            /**
             * The email address for the user.
             * @format email
             */
            email?: string;
            /** The Outline user role. */
            role?: "admin" | "member" | "viewer" | "guest";
            /** Whether the user is suspended. */
            isSuspended?: boolean;
            /**
             * The ISO timestamp when the user was last active.
             * @format date-time
             */
            lastActiveAt?: string;
            /**
             * The ISO timestamp when the user was created.
             * @format date-time
             */
            createdAt?: string;
          };
          /**
           * The ISO timestamp when the document was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /** One Outline user returned inside auth or document metadata. */
          updatedBy?: {
            /**
             * The unique identifier for the user.
             * @minLength 1
             * @format uuid
             */
            id: string;
            /**
             * The display name of the user.
             * @minLength 1
             */
            name: string;
            /**
             * The avatar URL for the user.
             * @format uri
             */
            avatarUrl?: string;
            /**
             * The email address for the user.
             * @format email
             */
            email?: string;
            /** The Outline user role. */
            role?: "admin" | "member" | "viewer" | "guest";
            /** Whether the user is suspended. */
            isSuspended?: boolean;
            /**
             * The ISO timestamp when the user was last active.
             * @format date-time
             */
            lastActiveAt?: string;
            /**
             * The ISO timestamp when the user was created.
             * @format date-time
             */
            createdAt?: string;
          };
          /**
           * The ISO timestamp when the document was published, or null when it is a draft.
           * @format date-time
           */
          publishedAt?: string | null;
          /** The data attributes attached to the document. */
          dataAttributes?: Array<{
            /**
             * The unique identifier for the associated data attribute.
             * @minLength 1
             * @format uuid
             */
            dataAttributeId: string;
            /** A data attribute value returned by Outline, which may be string, boolean, or number. */
            value: string | boolean | number;
            /**
             * The ISO timestamp when this data attribute value was last updated.
             * @format date-time
             */
            updatedAt: string;
          }> | null;
          /**
           * The ISO timestamp when the document was archived, or null when active.
           * @format date-time
           */
          archivedAt?: string | null;
          /**
           * The ISO timestamp when the document was deleted, or null when active.
           * @format date-time
           */
          deletedAt?: string | null;
          /** The raw document object returned by Outline. */
          raw?: Record<string, unknown>;
        }>;
        /** The pagination object returned by Outline list endpoints. */
        pagination: {
          /**
           * The zero-based result offset.
           * @minimum 0
           */
          offset: number;
          /**
           * The maximum number of results requested.
           * @exclusiveMinimum 0
           */
          limit: number;
        };
      };
    };
  }
}
