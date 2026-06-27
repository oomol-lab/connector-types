import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Confluence page using a JSON-friendly body value and return the created page. */
    "confluence.create_page": {
      input: {
        /**
         * The Confluence space ID where the page will be created.
         * @minLength 1
         */
        spaceId: string;
        /**
         * The title for the new Confluence page.
         * @minLength 1
         */
        title: string;
        /**
         * The page body value for the selected representation.
         * @minLength 1
         */
        body: string;
        /** The representation used for the page body. */
        bodyRepresentation?: "storage" | "atlas_doc_format";
        /**
         * The parent Confluence page ID.
         * @minLength 1
         */
        parentId?: string;
        /** The Confluence page status to create. */
        status?: "current" | "draft";
      };
      output: {
        /** A Confluence page. */
        page: {
          /** The Confluence page ID. */
          id?: string;
          /** The Confluence page status. */
          status?: string;
          /** The Confluence page title. */
          title?: string;
          /** The Confluence space ID containing the page. */
          spaceId?: string;
          /** The parent page ID, or null when unavailable. */
          parentId?: string | null;
          /** The Confluence page creation timestamp. */
          createdAt?: string;
          /** A Confluence page version. */
          version?: {
            /** The Confluence page version number. */
            number?: number;
            /** The Confluence page version message. */
            message?: string;
            /** Whether this version is marked as a minor edit. */
            minorEdit?: boolean;
            [key: string]: unknown;
          } | null;
          /** Provider-specific Confluence payload fields. */
          body?: Record<string, unknown> | null;
          /** Provider-specific Confluence payload fields. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Confluence page by ID and optionally include its body representation. */
    "confluence.get_page": {
      input: {
        /**
         * The Confluence page ID.
         * @minLength 1
         */
        pageId: string;
        /** The body representation to include. */
        bodyFormat?: "storage" | "atlas_doc_format" | "view" | "export_view" | "styled_view";
      };
      output: {
        /** A Confluence page. */
        page: {
          /** The Confluence page ID. */
          id?: string;
          /** The Confluence page status. */
          status?: string;
          /** The Confluence page title. */
          title?: string;
          /** The Confluence space ID containing the page. */
          spaceId?: string;
          /** The parent page ID, or null when unavailable. */
          parentId?: string | null;
          /** The Confluence page creation timestamp. */
          createdAt?: string;
          /** A Confluence page version. */
          version?: {
            /** The Confluence page version number. */
            number?: number;
            /** The Confluence page version message. */
            message?: string;
            /** Whether this version is marked as a minor edit. */
            minorEdit?: boolean;
            [key: string]: unknown;
          } | null;
          /** Provider-specific Confluence payload fields. */
          body?: Record<string, unknown> | null;
          /** Provider-specific Confluence payload fields. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List Confluence spaces and return normalized space metadata plus pagination. */
    "confluence.list_spaces": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by Confluence.
         * @minLength 1
         */
        cursor?: string;
        /** Filter spaces by Confluence space type. */
        type?: "global" | "personal";
        /** Filter spaces by Confluence space status. */
        status?: "current" | "archived";
      };
      output: {
        /** The Confluence spaces returned by the request. */
        spaces: Array<{
          /** The Confluence space ID. */
          id?: string;
          /** The Confluence space key. */
          key?: string;
          /** The Confluence space name. */
          name?: string;
          /** The Confluence space type. */
          type?: string;
          /** The Confluence space status. */
          status?: string;
          /** The ID of the space homepage, or null when unavailable. */
          homepageId?: string | null;
          /** Provider-specific Confluence payload fields. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Confluence pagination metadata. */
        pagination: {
          /** Cursor for the next Confluence page, or null when no next page is available. */
          nextCursor: string | null;
        };
      };
    };
    /** Search Confluence content with CQL and return normalized result metadata plus pagination. */
    "confluence.search_content": {
      input: {
        /**
         * The Confluence Query Language string to execute.
         * @minLength 1
         */
        cql: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque pagination cursor returned by Confluence.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The matching Confluence search results. */
        results: Array<{
          /** The Confluence content ID when returned. */
          id?: string;
          /** The Confluence content type when returned. */
          type?: string;
          /** The Confluence content title when returned. */
          title?: string;
          /** The Confluence web URL when returned. */
          url?: string;
          /** The Confluence search excerpt when returned. */
          excerpt?: string;
          /** The Confluence container title when returned. */
          containerTitle?: string;
          /** Provider-specific Confluence payload fields. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Confluence pagination metadata. */
        pagination: {
          /** Cursor for the next Confluence page, or null when no next page is available. */
          nextCursor: string | null;
        };
      };
    };
    /** Update a Confluence page title, body, or status using an explicit next version number. */
    "confluence.update_page": {
      input: {
        /**
         * The Confluence page ID.
         * @minLength 1
         */
        pageId: string;
        /**
         * The updated Confluence page title.
         * @minLength 1
         */
        title: string;
        /**
         * The next Confluence page version number.
         * @exclusiveMinimum 0
         */
        versionNumber: number;
        /**
         * The updated page body value for the selected representation.
         * @minLength 1
         */
        body?: string;
        /** The representation used for the page body. */
        bodyRepresentation?: "storage" | "atlas_doc_format";
        /** The updated Confluence page status. */
        status?: "current" | "draft";
        /**
         * A message stored with the new Confluence page version.
         * @minLength 1
         */
        versionMessage?: string;
        /** Whether the update should be marked as a minor edit. */
        minorEdit?: boolean;
      };
      output: {
        /** A Confluence page. */
        page: {
          /** The Confluence page ID. */
          id?: string;
          /** The Confluence page status. */
          status?: string;
          /** The Confluence page title. */
          title?: string;
          /** The Confluence space ID containing the page. */
          spaceId?: string;
          /** The parent page ID, or null when unavailable. */
          parentId?: string | null;
          /** The Confluence page creation timestamp. */
          createdAt?: string;
          /** A Confluence page version. */
          version?: {
            /** The Confluence page version number. */
            number?: number;
            /** The Confluence page version message. */
            message?: string;
            /** Whether this version is marked as a minor edit. */
            minorEdit?: boolean;
            [key: string]: unknown;
          } | null;
          /** Provider-specific Confluence payload fields. */
          body?: Record<string, unknown> | null;
          /** Provider-specific Confluence payload fields. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
