import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new Canva design from a preset type, custom dimensions, an optional image asset, an existing design, or a brand template. */
    "canva.create_design": {
      input: {
        /** The Canva create-design mode for type and asset creation. */
        type?: "type_and_asset";
        /** The Canva design type to create. */
        designType?: {
          /** The preset design type discriminator. */
          type: "preset";
          /** The preset design type name. */
          name: "doc" | "email" | "presentation" | "whiteboard";
        } | {
          /** The custom design type discriminator. */
          type: "custom";
          /**
           * The width of the design in pixels.
           * @minimum 40
           * @maximum 8000
           */
          width: number;
          /**
           * The height of the design in pixels.
           * @minimum 40
           * @maximum 8000
           */
          height: number;
        };
        /**
         * The Canva image asset ID to insert into the created design.
         * @minLength 1
         */
        assetId?: string;
        /**
         * The name of the created Canva design.
         * @minLength 1
         * @maxLength 255
         */
        title?: string;
      } | {
        /** The Canva create-design mode for copying a design. */
        type: "design";
        /**
         * The Canva design ID to copy.
         * @minLength 1
         * @maxLength 50
         */
        designId: string;
        /**
         * The 1-based page numbers to copy from the source design. Omit to copy every page.
         * @minItems 1
         */
        pageNumbers?: Array<number>;
      } | {
        /** The Canva create-design mode for copying a brand template. */
        type: "brand_template";
        /**
         * The Canva brand template ID to copy.
         * @minLength 1
         * @maxLength 50
         */
        brandTemplateId: string;
        /**
         * The 1-based page numbers to copy from the brand template. Omit to copy every page.
         * @minItems 1
         */
        pageNumbers?: Array<number>;
      };
      output: {
        /** A normalized Canva design metadata record. */
        design: {
          /** The Canva design ID. */
          id: string;
          /** The Canva design title when returned. */
          title: string | null;
          /**
           * The Canva URL for editing the design when returned.
           * @format uri
           */
          editUrl: string | null;
          /**
           * The Canva URL for viewing the design when returned.
           * @format uri
           */
          viewUrl: string | null;
          /**
           * The Canva thumbnail URL when returned.
           * @format uri
           */
          thumbnailUrl: string | null;
          /** The thumbnail width in pixels when returned. */
          thumbnailWidth: number | null;
          /** The thumbnail height in pixels when returned. */
          thumbnailHeight: number | null;
          /** The Canva owner user ID when returned. */
          ownerUserId: string | null;
          /** The Canva owner team ID when returned. */
          ownerTeamId: string | null;
          /**
           * The design creation timestamp when returned.
           * @format date-time
           */
          createdAt: string | null;
          /**
           * The design update timestamp when returned.
           * @format date-time
           */
          updatedAt: string | null;
        };
      };
    };
    /** Start an asynchronous Canva export job for a design and return the job handle for polling. */
    "canva.create_design_export_job": {
      input: {
        /**
         * The Canva design ID to export.
         * @minLength 1
         */
        designId: string;
        /** The Canva export format request. The fields map to Canva's documented export format object. */
        format: {
          /** The export file type. */
          type: "jpg" | "png" | "gif" | "pptx" | "mp4" | "pdf" | "csv" | "html_bundle" | "html_standalone";
          /** The PDF size option when exporting PDF. */
          size?: "a4" | "a3" | "letter" | "legal";
          /**
           * The 1-based design page numbers to export when Canva supports page selection.
           * @minItems 1
           */
          pages?: Array<number>;
          /** The export quality option when Canva supports it. */
          exportQuality?: "regular" | "pro";
          /**
           * The exported image width in pixels when Canva supports it.
           * @minimum 40
           * @maximum 25000
           */
          width?: number;
          /**
           * The exported image height in pixels when Canva supports it.
           * @minimum 40
           * @maximum 25000
           */
          height?: number;
          /** The required quality field for JPG or MP4 exports. */
          quality?: number | "horizontal_480p" | "horizontal_720p" | "horizontal_1080p" | "horizontal_4k" | "vertical_480p" | "vertical_720p" | "vertical_1080p" | "vertical_4k";
          /** Whether Canva should export a PNG without lossy compression. */
          lossless?: boolean;
          /** Whether the exported PNG should use a transparent background when supported. */
          transparentBackground?: boolean;
          /** Whether Canva should merge a multi-page PNG export into one image. */
          asSingleImage?: boolean;
        };
      };
      output: {
        /** A normalized Canva export job. */
        job: {
          /** The Canva export job ID. */
          id: string;
          /** The Canva export job status. */
          status: "in_progress" | "success" | "failed";
          /** The generated download URLs for a successful export job. */
          urls: Array<string>;
          /** The Canva error code for a failed export job. */
          errorCode: string | null;
          /** The Canva error message for a failed export job. */
          errorMessage: string | null;
        };
      };
    };
    /** Create a Canva folder at the top level, in uploads, or inside another folder. */
    "canva.create_folder": {
      input: {
        /**
         * The Canva folder name.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
        /**
         * The parent folder ID, root for the top-level projects area, or uploads for the user's Uploads folder.
         * @minLength 1
         * @maxLength 50
         */
        parentFolderId: string;
      };
      output: {
        /** A normalized Canva folder metadata record. */
        folder: {
          /** The Canva folder ID. */
          id: string;
          /** The Canva folder name when returned. */
          name: string | null;
          /** The Canva folder title or legacy title when returned. */
          title: string | null;
          /**
           * The Canva folder URL when returned.
           * @format uri
           */
          url: string | null;
          /**
           * The Canva folder thumbnail URL when returned.
           * @format uri
           */
          thumbnailUrl: string | null;
          /** The thumbnail width in pixels when returned. */
          thumbnailWidth: number | null;
          /** The thumbnail height in pixels when returned. */
          thumbnailHeight: number | null;
          /**
           * The folder creation timestamp when returned.
           * @format date-time
           */
          createdAt: string | null;
          /**
           * The folder update timestamp when returned.
           * @format date-time
           */
          updatedAt: string | null;
        };
      };
    };
    /** Start an asynchronous Canva asset upload job from a publicly accessible URL and return the job handle for polling. */
    "canva.create_url_asset_upload_job": {
      input: {
        /**
         * The asset name shown in Canva.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
        /**
         * The publicly accessible URL of the file to upload to Canva.
         * @maxLength 2048
         * @format uri
         */
        url: string;
      };
      output: {
        /** A normalized Canva asset upload job. */
        job: {
          /** The Canva asset upload job ID. */
          id: string;
          /** The Canva asset upload job status. */
          status: "in_progress" | "success" | "failed";
          /** A normalized Canva asset metadata record. */
          asset: {
            /** The Canva asset ID. */
            id: string;
            /** The Canva asset type when returned. */
            type: "image" | "video" | null;
            /** The Canva asset name when returned. */
            name: string | null;
            /** The user-facing tags attached to the asset. */
            tags: Array<string>;
            /**
             * The Canva asset thumbnail URL when returned.
             * @format uri
             */
            thumbnailUrl: string | null;
            /** The thumbnail width in pixels when returned. */
            thumbnailWidth: number | null;
            /** The thumbnail height in pixels when returned. */
            thumbnailHeight: number | null;
            /** The Canva owner user ID when returned. */
            ownerUserId: string | null;
            /** The Canva owner team ID when returned. */
            ownerTeamId: string | null;
            /**
             * The asset creation timestamp when returned.
             * @format date-time
             */
            createdAt: string | null;
            /**
             * The asset update timestamp when returned.
             * @format date-time
             */
            updatedAt: string | null;
            /** The deprecated Canva asset import status when returned. */
            importStatus: {
              /** The Canva asset import status state. */
              state: "failed" | "in_progress" | "success";
              /** The Canva import error code when the import failed. */
              errorCode: string | null;
              /** The Canva import error message when the import failed. */
              errorMessage: string | null;
            } | null;
            /** Type-specific Canva asset metadata when returned. */
            metadata: {
              /** The metadata type when returned. */
              type: "image" | "video" | null;
              /** The image or video width in pixels when returned. */
              width: number | null;
              /** The image or video height in pixels when returned. */
              height: number | null;
              /** The video duration in seconds when returned. */
              duration: number | null;
              /** The AI-generated smart tags returned for an image asset. */
              smartTags: Array<string>;
            } | null;
          } | null;
          /** The Canva error code for a failed asset upload job. */
          errorCode: string | null;
          /** The Canva error message for a failed asset upload job. */
          errorMessage: string | null;
        };
      };
    };
    /** Get metadata for a Canva asset, including owner, thumbnail, and type-specific metadata. */
    "canva.get_asset": {
      input: {
        /**
         * The Canva asset ID.
         * @minLength 1
         * @maxLength 50
         */
        assetId: string;
      };
      output: {
        /** A normalized Canva asset metadata record. */
        asset: {
          /** The Canva asset ID. */
          id: string;
          /** The Canva asset type when returned. */
          type: "image" | "video" | null;
          /** The Canva asset name when returned. */
          name: string | null;
          /** The user-facing tags attached to the asset. */
          tags: Array<string>;
          /**
           * The Canva asset thumbnail URL when returned.
           * @format uri
           */
          thumbnailUrl: string | null;
          /** The thumbnail width in pixels when returned. */
          thumbnailWidth: number | null;
          /** The thumbnail height in pixels when returned. */
          thumbnailHeight: number | null;
          /** The Canva owner user ID when returned. */
          ownerUserId: string | null;
          /** The Canva owner team ID when returned. */
          ownerTeamId: string | null;
          /**
           * The asset creation timestamp when returned.
           * @format date-time
           */
          createdAt: string | null;
          /**
           * The asset update timestamp when returned.
           * @format date-time
           */
          updatedAt: string | null;
          /** The deprecated Canva asset import status when returned. */
          importStatus: {
            /** The Canva asset import status state. */
            state: "failed" | "in_progress" | "success";
            /** The Canva import error code when the import failed. */
            errorCode: string | null;
            /** The Canva import error message when the import failed. */
            errorMessage: string | null;
          } | null;
          /** Type-specific Canva asset metadata when returned. */
          metadata: {
            /** The metadata type when returned. */
            type: "image" | "video" | null;
            /** The image or video width in pixels when returned. */
            width: number | null;
            /** The image or video height in pixels when returned. */
            height: number | null;
            /** The video duration in seconds when returned. */
            duration: number | null;
            /** The AI-generated smart tags returned for an image asset. */
            smartTags: Array<string>;
          } | null;
        };
      };
    };
    /** Get the Canva user and profile associated with the current OAuth token. */
    "canva.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The Canva user ID. */
        userId: string;
        /** The Canva team ID when returned. */
        teamId: string | null;
        /** The Canva display name when returned. */
        displayName: string | null;
      };
    };
    /** Get metadata for a Canva design, including owner, URLs, and thumbnail details. */
    "canva.get_design": {
      input: {
        /**
         * The Canva design ID.
         * @minLength 1
         */
        designId: string;
      };
      output: {
        /** A normalized Canva design metadata record. */
        design: {
          /** The Canva design ID. */
          id: string;
          /** The Canva design title when returned. */
          title: string | null;
          /**
           * The Canva URL for editing the design when returned.
           * @format uri
           */
          editUrl: string | null;
          /**
           * The Canva URL for viewing the design when returned.
           * @format uri
           */
          viewUrl: string | null;
          /**
           * The Canva thumbnail URL when returned.
           * @format uri
           */
          thumbnailUrl: string | null;
          /** The thumbnail width in pixels when returned. */
          thumbnailWidth: number | null;
          /** The thumbnail height in pixels when returned. */
          thumbnailHeight: number | null;
          /** The Canva owner user ID when returned. */
          ownerUserId: string | null;
          /** The Canva owner team ID when returned. */
          ownerTeamId: string | null;
          /**
           * The design creation timestamp when returned.
           * @format date-time
           */
          createdAt: string | null;
          /**
           * The design update timestamp when returned.
           * @format date-time
           */
          updatedAt: string | null;
        };
      };
    };
    /** List the file formats currently available for exporting a Canva design. */
    "canva.get_design_export_formats": {
      input: {
        /**
         * The Canva design ID.
         * @minLength 1
         */
        designId: string;
      };
      output: {
        /** The raw Canva export format objects supported by this design. */
        formats: Array<Record<string, unknown>>;
      };
    };
    /** Get the current status and result URLs for a Canva design export job created by create_design_export_job. */
    "canva.get_design_export_job": {
      input: {
        /**
         * The Canva export job ID.
         * @minLength 1
         */
        exportId: string;
      };
      output: {
        /** A normalized Canva export job. */
        job: {
          /** The Canva export job ID. */
          id: string;
          /** The Canva export job status. */
          status: "in_progress" | "success" | "failed";
          /** The generated download URLs for a successful export job. */
          urls: Array<string>;
          /** The Canva error code for a failed export job. */
          errorCode: string | null;
          /** The Canva error message for a failed export job. */
          errorMessage: string | null;
        };
      };
    };
    /** Get the current status and uploaded asset metadata for a Canva URL asset upload job. */
    "canva.get_url_asset_upload_job": {
      input: {
        /**
         * The Canva asset upload job ID.
         * @minLength 1
         */
        jobId: string;
      };
      output: {
        /** A normalized Canva asset upload job. */
        job: {
          /** The Canva asset upload job ID. */
          id: string;
          /** The Canva asset upload job status. */
          status: "in_progress" | "success" | "failed";
          /** A normalized Canva asset metadata record. */
          asset: {
            /** The Canva asset ID. */
            id: string;
            /** The Canva asset type when returned. */
            type: "image" | "video" | null;
            /** The Canva asset name when returned. */
            name: string | null;
            /** The user-facing tags attached to the asset. */
            tags: Array<string>;
            /**
             * The Canva asset thumbnail URL when returned.
             * @format uri
             */
            thumbnailUrl: string | null;
            /** The thumbnail width in pixels when returned. */
            thumbnailWidth: number | null;
            /** The thumbnail height in pixels when returned. */
            thumbnailHeight: number | null;
            /** The Canva owner user ID when returned. */
            ownerUserId: string | null;
            /** The Canva owner team ID when returned. */
            ownerTeamId: string | null;
            /**
             * The asset creation timestamp when returned.
             * @format date-time
             */
            createdAt: string | null;
            /**
             * The asset update timestamp when returned.
             * @format date-time
             */
            updatedAt: string | null;
            /** The deprecated Canva asset import status when returned. */
            importStatus: {
              /** The Canva asset import status state. */
              state: "failed" | "in_progress" | "success";
              /** The Canva import error code when the import failed. */
              errorCode: string | null;
              /** The Canva import error message when the import failed. */
              errorMessage: string | null;
            } | null;
            /** Type-specific Canva asset metadata when returned. */
            metadata: {
              /** The metadata type when returned. */
              type: "image" | "video" | null;
              /** The image or video width in pixels when returned. */
              width: number | null;
              /** The image or video height in pixels when returned. */
              height: number | null;
              /** The video duration in seconds when returned. */
              duration: number | null;
              /** The AI-generated smart tags returned for an image asset. */
              smartTags: Array<string>;
            } | null;
          } | null;
          /** The Canva error code for a failed asset upload job. */
          errorCode: string | null;
          /** The Canva error message for a failed asset upload job. */
          errorMessage: string | null;
        };
      };
    };
    /** List metadata for the current Canva user's designs, with optional search, ownership, sorting, and pagination filters. */
    "canva.list_designs": {
      input: {
        /**
         * A search term for filtering designs.
         * @minLength 1
         * @maxLength 255
         */
        query?: string;
        /**
         * The continuation token returned by a previous list_designs call.
         * @minLength 1
         */
        continuation?: string;
        /** Filter designs by the current user's ownership. */
        ownership?: "any" | "owned" | "shared";
        /** The Canva sort order for the design list. */
        sortBy?: "relevance" | "modified_descending" | "modified_ascending" | "title_ascending" | "title_descending";
        /**
         * The maximum number of designs to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The normalized Canva designs returned in this page. */
        designs: Array<{
          /** The Canva design ID. */
          id: string;
          /** The Canva design title when returned. */
          title: string | null;
          /**
           * The Canva URL for editing the design when returned.
           * @format uri
           */
          editUrl: string | null;
          /**
           * The Canva URL for viewing the design when returned.
           * @format uri
           */
          viewUrl: string | null;
          /**
           * The Canva thumbnail URL when returned.
           * @format uri
           */
          thumbnailUrl: string | null;
          /** The thumbnail width in pixels when returned. */
          thumbnailWidth: number | null;
          /** The thumbnail height in pixels when returned. */
          thumbnailHeight: number | null;
          /** The Canva owner user ID when returned. */
          ownerUserId: string | null;
          /** The Canva owner team ID when returned. */
          ownerTeamId: string | null;
          /**
           * The design creation timestamp when returned.
           * @format date-time
           */
          createdAt: string | null;
          /**
           * The design update timestamp when returned.
           * @format date-time
           */
          updatedAt: string | null;
        }>;
        /** The continuation token to request the next page when available. */
        continuation: string | null;
      };
    };
    /** List Canva folder contents, including folders, designs, and image assets, with pagination and filtering options. */
    "canva.list_folder_items": {
      input: {
        /**
         * The Canva folder ID to list.
         * @minLength 1
         * @maxLength 50
         */
        folderId: string;
        /**
         * The continuation token returned by a previous list_folder_items call.
         * @minLength 1
         */
        continuation?: string;
        /**
         * The maximum number of folder items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The Canva folder item types to include.
         * @minItems 1
         */
        itemTypes?: Array<"design" | "folder" | "image">;
        /** The Canva sort order for folder items. */
        sortBy?: "created_ascending" | "created_descending" | "modified_ascending" | "modified_descending" | "title_ascending" | "title_descending";
        /** Filter folder items by pinned status. */
        pinStatus?: "any" | "pinned";
      };
      output: {
        /** The normalized Canva folder items returned in this page. */
        items: Array<{
          /** The Canva folder item type. */
          type: "folder" | "design" | "image";
          /** The Canva item ID. */
          id: string;
          /** The item name when the item is a folder or asset. */
          name: string | null;
          /** The item title or display name when returned. */
          title: string | null;
          /**
           * The Canva URL for the item when returned.
           * @format uri
           */
          url: string | null;
          /**
           * The Canva item thumbnail URL when returned.
           * @format uri
           */
          thumbnailUrl: string | null;
          /** The thumbnail width in pixels when returned. */
          thumbnailWidth: number | null;
          /** The thumbnail height in pixels when returned. */
          thumbnailHeight: number | null;
          /**
           * The item creation timestamp when returned.
           * @format date-time
           */
          createdAt: string | null;
          /**
           * The item update timestamp when returned.
           * @format date-time
           */
          updatedAt: string | null;
        }>;
        /** The continuation token to request the next page when available. */
        continuation: string | null;
      };
    };
    /** Move a Canva folder item to another Canva folder. */
    "canva.move_folder_item": {
      input: {
        /**
         * The Canva item ID to move.
         * @minLength 1
         * @maxLength 50
         */
        itemId: string;
        /**
         * The destination Canva folder ID, or root for the top-level projects area.
         * @minLength 1
         * @maxLength 50
         */
        toFolderId: string;
      };
      output: {
        /** Whether Canva accepted the move request. */
        moved: boolean;
        /** The Canva item ID that was moved. */
        itemId: string;
        /** The destination Canva folder ID. */
        toFolderId: string;
      };
    };
  }
}
