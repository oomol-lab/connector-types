import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a blank Google Slides presentation. Optional locale, page size, and presentation ID values are forwarded when provided. */
    "googleslides.create_presentation": {
      input: {
        /** The title of the presentation. If omitted, Google uses a default title. */
        title?: string;
        /** The locale of the presentation, such as en-US or ja-JP. */
        locale?: string;
        /** The page size for the presentation. */
        pageSize?: {
          /** The page width. */
          width: {
            /** The magnitude of the dimension. */
            magnitude: number;
            /** The unit for the dimension, such as PT or EMU. */
            unit: string;
          };
          /** The page height. */
          height: {
            /** The magnitude of the dimension. */
            magnitude: number;
            /** The unit for the dimension, such as PT or EMU. */
            unit: string;
          };
        };
        /** The explicit presentation ID to create, when supported. */
        presentationId?: string;
      };
      output: {
        /** The ID of the presentation. */
        presentationId?: string;
        /** The title of the presentation. */
        title?: string;
        /** The locale of the presentation. */
        locale?: string;
        /** The revision ID of the presentation. */
        revisionId?: string;
        /** The page size of the presentation. */
        pageSize?: {
          /** The page width. */
          width: {
            /** The magnitude of the dimension. */
            magnitude: number;
            /** The unit for the dimension, such as PT or EMU. */
            unit: string;
          };
          /** The page height. */
          height: {
            /** The magnitude of the dimension. */
            magnitude: number;
            /** The unit for the dimension, such as PT or EMU. */
            unit: string;
          };
        };
        /** The slide pages. */
        slides?: Array<{
          /** The object ID of the page. */
          objectId?: string;
          /** The type of the page. */
          pageType?: string;
          /** The page elements on the page. */
          pageElements?: Array<Record<string, unknown>>;
          /** The shared properties of the page. */
          pageProperties?: Record<string, unknown>;
          /** Properties specific to slide pages. */
          slideProperties?: Record<string, unknown>;
          /** Properties specific to layout pages. */
          layoutProperties?: Record<string, unknown>;
          /** Properties specific to master pages. */
          masterProperties?: Record<string, unknown>;
          /** Properties specific to notes pages. */
          notesProperties?: Record<string, unknown>;
        }>;
        /** The layout pages. */
        layouts?: Array<{
          /** The object ID of the page. */
          objectId?: string;
          /** The type of the page. */
          pageType?: string;
          /** The page elements on the page. */
          pageElements?: Array<Record<string, unknown>>;
          /** The shared properties of the page. */
          pageProperties?: Record<string, unknown>;
          /** Properties specific to slide pages. */
          slideProperties?: Record<string, unknown>;
          /** Properties specific to layout pages. */
          layoutProperties?: Record<string, unknown>;
          /** Properties specific to master pages. */
          masterProperties?: Record<string, unknown>;
          /** Properties specific to notes pages. */
          notesProperties?: Record<string, unknown>;
        }>;
        /** The master pages. */
        masters?: Array<{
          /** The object ID of the page. */
          objectId?: string;
          /** The type of the page. */
          pageType?: string;
          /** The page elements on the page. */
          pageElements?: Array<Record<string, unknown>>;
          /** The shared properties of the page. */
          pageProperties?: Record<string, unknown>;
          /** Properties specific to slide pages. */
          slideProperties?: Record<string, unknown>;
          /** Properties specific to layout pages. */
          layoutProperties?: Record<string, unknown>;
          /** Properties specific to master pages. */
          masterProperties?: Record<string, unknown>;
          /** Properties specific to notes pages. */
          notesProperties?: Record<string, unknown>;
        }>;
      };
    };
    /** Generate a thumbnail for a Google Slides page. Returns a temporary content URL plus thumbnail dimensions when Google provides them. */
    "googleslides.get_page_thumbnail2": {
      input: {
        /** The presentation ID. */
        presentationId: string;
        /** The page object ID. */
        pageObjectId: string;
        /** The thumbnail properties object. */
        thumbnailProperties?: {
          /** The mime type for the thumbnail image. */
          mimeType?: "PNG";
          /** The thumbnail size. */
          thumbnailSize?: "THUMBNAIL_SIZE_UNSPECIFIED" | "LARGE" | "MEDIUM" | "SMALL";
        };
      };
      output: {
        /** The width of the thumbnail in pixels. */
        width?: number;
        /** The height of the thumbnail in pixels. */
        height?: number;
        /** The temporary content URL of the thumbnail. */
        contentUrl: string;
      };
    };
    /** Apply raw Google Slides batchUpdate requests to a presentation. */
    "googleslides.presentations_batch_update": {
      input: {
        /** The presentation ID. */
        presentationId: string;
        /** The raw Slides API batchUpdate requests. */
        requests: Array<Record<string, unknown>>;
        /** The write control object. */
        writeControl?: {
          /** The revision ID that must match before applying the update. */
          requiredRevisionId?: string;
        };
      };
      output: {
        /** The presentation ID that was updated. */
        presentationId: string;
        /** The replies returned for each request. */
        replies: Array<Record<string, unknown>>;
        /** The resulting write control state. */
        writeControl?: {
          /** The revision ID that must match before applying the update. */
          requiredRevisionId?: string;
        };
      };
    };
    /** Copy an existing Google Slides presentation through Google Drive so the new presentation preserves the original themes, masters, and layouts. */
    "googleslides.presentations_copy_from_template": {
      input: {
        /** The presentation ID of the template presentation. */
        templatePresentationId: string;
        /** The title for the copied presentation. */
        newTitle?: string;
        /** The destination Google Drive folder ID for the copied presentation. */
        parentFolderId?: string;
      };
      output: {
        /** The ID of the copied presentation. */
        presentationId: string;
        /** The Drive file ID of the copied presentation. */
        driveFileId: string;
        /** The title of the copied presentation. */
        name: string;
        /** The MIME type of the copied file. */
        mimeType: string;
        /** The browser URL for the copied presentation. */
        webViewLink?: string;
        /** The parent folders of the copied file. */
        parents?: Array<string>;
      };
    };
    /** Retrieve a Google Slides presentation by presentation ID, or search Google Drive by exact presentation title first and then fetch the presentation. */
    "googleslides.presentations_get": {
      input: {
        /** The presentation ID. */
        presentationId: string;
        /** The presentation title to search for. */
        presentationName?: string;
        /** The partial-response selector for the Slides API request. */
        fields?: string;
      } | {
        /** The presentation ID. */
        presentationId?: string;
        /** The presentation title to search for. */
        presentationName: string;
        /** The partial-response selector for the Slides API request. */
        fields?: string;
      };
      output: {
        /** The ID of the presentation. */
        presentationId?: string;
        /** The title of the presentation. */
        title?: string;
        /** The locale of the presentation. */
        locale?: string;
        /** The revision ID of the presentation. */
        revisionId?: string;
        /** The page size of the presentation. */
        pageSize?: {
          /** The page width. */
          width: {
            /** The magnitude of the dimension. */
            magnitude: number;
            /** The unit for the dimension, such as PT or EMU. */
            unit: string;
          };
          /** The page height. */
          height: {
            /** The magnitude of the dimension. */
            magnitude: number;
            /** The unit for the dimension, such as PT or EMU. */
            unit: string;
          };
        };
        /** The slide pages. */
        slides?: Array<{
          /** The object ID of the page. */
          objectId?: string;
          /** The type of the page. */
          pageType?: string;
          /** The page elements on the page. */
          pageElements?: Array<Record<string, unknown>>;
          /** The shared properties of the page. */
          pageProperties?: Record<string, unknown>;
          /** Properties specific to slide pages. */
          slideProperties?: Record<string, unknown>;
          /** Properties specific to layout pages. */
          layoutProperties?: Record<string, unknown>;
          /** Properties specific to master pages. */
          masterProperties?: Record<string, unknown>;
          /** Properties specific to notes pages. */
          notesProperties?: Record<string, unknown>;
        }>;
        /** The layout pages. */
        layouts?: Array<{
          /** The object ID of the page. */
          objectId?: string;
          /** The type of the page. */
          pageType?: string;
          /** The page elements on the page. */
          pageElements?: Array<Record<string, unknown>>;
          /** The shared properties of the page. */
          pageProperties?: Record<string, unknown>;
          /** Properties specific to slide pages. */
          slideProperties?: Record<string, unknown>;
          /** Properties specific to layout pages. */
          layoutProperties?: Record<string, unknown>;
          /** Properties specific to master pages. */
          masterProperties?: Record<string, unknown>;
          /** Properties specific to notes pages. */
          notesProperties?: Record<string, unknown>;
        }>;
        /** The master pages. */
        masters?: Array<{
          /** The object ID of the page. */
          objectId?: string;
          /** The type of the page. */
          pageType?: string;
          /** The page elements on the page. */
          pageElements?: Array<Record<string, unknown>>;
          /** The shared properties of the page. */
          pageProperties?: Record<string, unknown>;
          /** Properties specific to slide pages. */
          slideProperties?: Record<string, unknown>;
          /** Properties specific to layout pages. */
          layoutProperties?: Record<string, unknown>;
          /** Properties specific to master pages. */
          masterProperties?: Record<string, unknown>;
          /** Properties specific to notes pages. */
          notesProperties?: Record<string, unknown>;
        }>;
      };
    };
    /** Retrieve a specific page from a Google Slides presentation, including its page elements and page-specific properties. */
    "googleslides.presentations_pages_get": {
      input: {
        /** The presentation ID. */
        presentationId: string;
        /** The page object ID. */
        pageObjectId: string;
      };
      output: {
        /** The object ID of the page. */
        objectId?: string;
        /** The type of the page. */
        pageType?: string;
        /** The page elements on the page. */
        pageElements?: Array<Record<string, unknown>>;
        /** The shared properties of the page. */
        pageProperties?: Record<string, unknown>;
        /** Properties specific to slide pages. */
        slideProperties?: Record<string, unknown>;
        /** Properties specific to layout pages. */
        layoutProperties?: Record<string, unknown>;
        /** Properties specific to master pages. */
        masterProperties?: Record<string, unknown>;
        /** Properties specific to notes pages. */
        notesProperties?: Record<string, unknown>;
      };
    };
    /** Compatibility alias for get_page_thumbnail2. Generates a thumbnail for a Google Slides page. */
    "googleslides.presentations_pages_get_thumbnail": {
      input: {
        /** The presentation ID. */
        presentationId: string;
        /** The page object ID. */
        pageObjectId: string;
        /** The thumbnail properties object. */
        thumbnailProperties?: {
          /** The mime type for the thumbnail image. */
          mimeType?: "PNG";
          /** The thumbnail size. */
          thumbnailSize?: "THUMBNAIL_SIZE_UNSPECIFIED" | "LARGE" | "MEDIUM" | "SMALL";
        };
      };
      output: {
        /** The width of the thumbnail in pixels. */
        width?: number;
        /** The height of the thumbnail in pixels. */
        height?: number;
        /** The temporary content URL of the thumbnail. */
        contentUrl: string;
      };
    };
  }
}
