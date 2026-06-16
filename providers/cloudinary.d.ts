import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch one Cloudinary asset by immutable asset ID and return the normalized asset record. */
    "cloudinary.get_asset": {
      input: {
        /**
         * The immutable Cloudinary asset ID.
         * @minLength 1
         */
        assetId: string;
      };
      output: {
        /** A normalized Cloudinary asset. */
        asset: {
          /** The immutable Cloudinary asset ID. */
          assetId: string;
          /** The Cloudinary public ID. */
          publicId: string;
          /** The Cloudinary asset version. */
          version?: number;
          /** The Cloudinary version ID. */
          versionId?: string;
          /** The Cloudinary response signature. */
          signature?: string;
          /** The asset format returned by Cloudinary. */
          format?: string;
          /** The Cloudinary resource type. */
          resourceType: string;
          /** The Cloudinary delivery type. */
          deliveryType: string;
          /** The asset creation timestamp returned by Cloudinary. */
          createdAt: string;
          /** The asset size in bytes. */
          bytes?: number;
          /** The asset width in pixels. */
          width?: number;
          /** The asset height in pixels. */
          height?: number;
          /** The Cloudinary asset folder. */
          assetFolder?: string;
          /** The Cloudinary display name. */
          displayName?: string;
          /** The tags assigned to the asset. */
          tags?: Array<string>;
          /** The context object returned by Cloudinary. */
          context?: Record<string, unknown>;
          /** The non-secure delivery URL returned by Cloudinary. */
          url?: string;
          /** The secure delivery URL returned by Cloudinary. */
          secureUrl?: string;
        };
      };
    };
    /** List uploaded Cloudinary assets of one resource type with optional prefix filtering and cursor pagination. */
    "cloudinary.list_assets": {
      input: {
        /**
         * The Cloudinary resource type for the asset.
         * @default "image"
         */
        resourceType?: "image" | "video" | "raw";
        /**
         * Only list uploaded assets whose public IDs start with this prefix.
         * @minLength 1
         */
        prefix?: string;
        /**
         * The maximum number of uploaded assets to return.
         * @minimum 1
         * @maximum 500
         */
        maxResults?: number;
        /**
         * The pagination cursor returned by the previous list request.
         * @minLength 1
         */
        nextCursor?: string;
        /** The created_at sort direction for uploaded assets. */
        direction?: "asc" | "desc";
        /** Whether to include tags in the list response. */
        includeTags?: boolean;
        /** Whether to include context metadata in the list response. */
        includeContext?: boolean;
      };
      output: {
        /** The normalized uploaded Cloudinary assets. */
        assets: Array<{
          /** The immutable Cloudinary asset ID. */
          assetId: string;
          /** The Cloudinary public ID. */
          publicId: string;
          /** The Cloudinary asset version. */
          version?: number;
          /** The Cloudinary version ID. */
          versionId?: string;
          /** The Cloudinary response signature. */
          signature?: string;
          /** The asset format returned by Cloudinary. */
          format?: string;
          /** The Cloudinary resource type. */
          resourceType: string;
          /** The Cloudinary delivery type. */
          deliveryType: string;
          /** The asset creation timestamp returned by Cloudinary. */
          createdAt: string;
          /** The asset size in bytes. */
          bytes?: number;
          /** The asset width in pixels. */
          width?: number;
          /** The asset height in pixels. */
          height?: number;
          /** The Cloudinary asset folder. */
          assetFolder?: string;
          /** The Cloudinary display name. */
          displayName?: string;
          /** The tags assigned to the asset. */
          tags?: Array<string>;
          /** The context object returned by Cloudinary. */
          context?: Record<string, unknown>;
          /** The non-secure delivery URL returned by Cloudinary. */
          url?: string;
          /** The secure delivery URL returned by Cloudinary. */
          secureUrl?: string;
        }>;
        /** The cursor for the next page, or null when no next page exists. */
        nextCursor: string | null;
      };
    };
    /** Rename one uploaded Cloudinary asset by changing its public ID and return the normalized asset record. */
    "cloudinary.rename_asset": {
      input: {
        /**
         * The Cloudinary resource type for the asset.
         * @default "image"
         */
        resourceType?: "image" | "video" | "raw";
        /**
         * The current public ID of the uploaded asset.
         * @minLength 1
         */
        fromPublicId: string;
        /**
         * The replacement public ID for the uploaded asset.
         * @minLength 1
         */
        toPublicId: string;
      };
      output: {
        /** A normalized Cloudinary asset. */
        asset: {
          /** The immutable Cloudinary asset ID. */
          assetId: string;
          /** The Cloudinary public ID. */
          publicId: string;
          /** The Cloudinary asset version. */
          version?: number;
          /** The Cloudinary version ID. */
          versionId?: string;
          /** The Cloudinary response signature. */
          signature?: string;
          /** The asset format returned by Cloudinary. */
          format?: string;
          /** The Cloudinary resource type. */
          resourceType: string;
          /** The Cloudinary delivery type. */
          deliveryType: string;
          /** The asset creation timestamp returned by Cloudinary. */
          createdAt: string;
          /** The asset size in bytes. */
          bytes?: number;
          /** The asset width in pixels. */
          width?: number;
          /** The asset height in pixels. */
          height?: number;
          /** The Cloudinary asset folder. */
          assetFolder?: string;
          /** The Cloudinary display name. */
          displayName?: string;
          /** The tags assigned to the asset. */
          tags?: Array<string>;
          /** The context object returned by Cloudinary. */
          context?: Record<string, unknown>;
          /** The non-secure delivery URL returned by Cloudinary. */
          url?: string;
          /** The secure delivery URL returned by Cloudinary. */
          secureUrl?: string;
        };
      };
    };
    /** Update selected mutable fields of one uploaded Cloudinary asset by public ID using the explicit API. */
    "cloudinary.update_asset": {
      input: {
        /**
         * The Cloudinary resource type for the asset.
         * @default "image"
         */
        resourceType?: "image" | "video" | "raw";
        /**
         * The public ID of the uploaded asset to update.
         * @minLength 1
         */
        publicId: string;
        /**
         * The replacement display name for the uploaded asset.
         * @minLength 1
         */
        displayName?: string;
        /**
         * The replacement asset folder for the uploaded asset.
         * @minLength 1
         */
        assetFolder?: string;
        /**
         * The list of tags to send to Cloudinary.
         * @minItems 1
         */
        tags?: Array<string>;
      };
      output: {
        /** A normalized Cloudinary asset. */
        asset: {
          /** The immutable Cloudinary asset ID. */
          assetId: string;
          /** The Cloudinary public ID. */
          publicId: string;
          /** The Cloudinary asset version. */
          version?: number;
          /** The Cloudinary version ID. */
          versionId?: string;
          /** The Cloudinary response signature. */
          signature?: string;
          /** The asset format returned by Cloudinary. */
          format?: string;
          /** The Cloudinary resource type. */
          resourceType: string;
          /** The Cloudinary delivery type. */
          deliveryType: string;
          /** The asset creation timestamp returned by Cloudinary. */
          createdAt: string;
          /** The asset size in bytes. */
          bytes?: number;
          /** The asset width in pixels. */
          width?: number;
          /** The asset height in pixels. */
          height?: number;
          /** The Cloudinary asset folder. */
          assetFolder?: string;
          /** The Cloudinary display name. */
          displayName?: string;
          /** The tags assigned to the asset. */
          tags?: Array<string>;
          /** The context object returned by Cloudinary. */
          context?: Record<string, unknown>;
          /** The non-secure delivery URL returned by Cloudinary. */
          url?: string;
          /** The secure delivery URL returned by Cloudinary. */
          secureUrl?: string;
        };
      };
    };
    /** Upload one asset to Cloudinary from a remote URL or Data URI and return the normalized uploaded asset record. */
    "cloudinary.upload_asset": {
      input: {
        /** The Cloudinary resource type for the asset. */
        resourceType?: "image" | "video" | "raw";
        /**
         * The remote HTTP or HTTPS file URL to upload.
         * @format uri
         */
        fileUrl?: string;
        /**
         * The Data URI content to upload to Cloudinary.
         * @minLength 1
         */
        fileDataUri?: string;
        /**
         * The public ID to assign to the uploaded asset.
         * @minLength 1
         */
        publicId?: string;
        /**
         * The user-friendly display name to assign to the asset.
         * @minLength 1
         */
        displayName?: string;
        /**
         * The Cloudinary asset folder where the uploaded asset should be placed.
         * @minLength 1
         */
        assetFolder?: string;
        /**
         * The list of tags to send to Cloudinary.
         * @minItems 1
         */
        tags?: Array<string>;
      };
      output: {
        /** A normalized Cloudinary asset. */
        asset: {
          /** The immutable Cloudinary asset ID. */
          assetId: string;
          /** The Cloudinary public ID. */
          publicId: string;
          /** The Cloudinary asset version. */
          version?: number;
          /** The Cloudinary version ID. */
          versionId?: string;
          /** The Cloudinary response signature. */
          signature?: string;
          /** The asset format returned by Cloudinary. */
          format?: string;
          /** The Cloudinary resource type. */
          resourceType: string;
          /** The Cloudinary delivery type. */
          deliveryType: string;
          /** The asset creation timestamp returned by Cloudinary. */
          createdAt: string;
          /** The asset size in bytes. */
          bytes?: number;
          /** The asset width in pixels. */
          width?: number;
          /** The asset height in pixels. */
          height?: number;
          /** The Cloudinary asset folder. */
          assetFolder?: string;
          /** The Cloudinary display name. */
          displayName?: string;
          /** The tags assigned to the asset. */
          tags?: Array<string>;
          /** The context object returned by Cloudinary. */
          context?: Record<string, unknown>;
          /** The non-secure delivery URL returned by Cloudinary. */
          url?: string;
          /** The secure delivery URL returned by Cloudinary. */
          secureUrl?: string;
        };
      };
    };
  }
}
