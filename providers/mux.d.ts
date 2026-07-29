import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Mux on-demand video asset from a publicly accessible media URL and return its initial processing state. */
    "mux.create_asset": {
      input: {
        /**
         * A publicly accessible HTTP(S) URL that Mux can download as the primary media input.
         * @format uri
         */
        sourceUrl: string;
        /**
         * Playback policies to create with the asset. Omit this field to create an asset without a playback ID.
         * @minItems 1
         * @maxItems 2
         */
        playbackPolicies?: Array<"public" | "signed">;
        /** The cost and encoding-quality tier. Mux uses the environment default when omitted. */
        videoQuality?: "basic" | "plus" | "premium";
        /** The maximum resolution tier Mux should produce. */
        maxResolutionTier?: "1080p" | "1440p" | "2160p";
        /**
         * Opaque metadata returned in asset details and related webhooks.
         * @minLength 1
         * @maxLength 255
         */
        passthrough?: string;
        /** Whether to create a free, watermarked test asset limited to 10 seconds and 24 hours. */
        test?: boolean;
        /** Structured asset metadata. Do not include sensitive or personally identifiable information. */
        meta?: {
          /**
           * A human-readable asset title.
           * @maxLength 512
           */
          title?: string;
          /**
           * Your identifier for the asset creator.
           * @maxLength 128
           */
          creatorId?: string;
          /**
           * Your identifier linking the asset to an external record.
           * @maxLength 128
           */
          externalId?: string;
        };
      };
      output: {
        /** A Mux video asset, including its current processing state and media details. */
        asset: {
          /**
           * The Mux asset ID.
           * @minLength 1
           */
          id?: string;
          /** The current asset processing status. */
          status?: "preparing" | "ready" | "errored";
          /**
           * The Unix timestamp when Mux created the asset.
           * @minLength 1
           */
          created_at?: string;
          /**
           * The asset duration in seconds.
           * @minimum 0
           */
          duration?: number;
          /**
           * The source aspect ratio in width:height form.
           * @minLength 1
           */
          aspect_ratio?: string;
          /**
           * The highest resolution tier available for the asset.
           * @minLength 1
           */
          resolution_tier?: string;
          /** The Mux video quality tier used to encode the asset. */
          video_quality?: "basic" | "plus" | "premium";
          /** User-supplied passthrough metadata. */
          passthrough?: string | null;
          /** Playback IDs currently attached to the asset. */
          playback_ids?: Array<{
            /**
             * The playback ID used in Mux streaming URLs.
             * @minLength 1
             */
            id?: string;
            /** The access policy for a Mux playback ID. */
            policy?: "public" | "signed" | "drm";
            /**
             * The DRM configuration ID when the policy is drm.
             * @minLength 1
             */
            drm_configuration_id?: string;
            [key: string]: unknown;
          }>;
          /** Audio, video, and text tracks in the asset. */
          tracks?: Array<Record<string, unknown>>;
          /** Processing errors reported by Mux when the asset is errored. */
          errors?: Record<string, unknown>;
          /** Customer-provided structured metadata for the asset. */
          meta?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a public, signed, or DRM playback ID for an existing Mux asset. */
    "mux.create_playback_id": {
      input: {
        /**
         * The Mux asset ID.
         * @minLength 1
         */
        assetId: string;
        /** The playback policy for a non-DRM playback ID. */
        policy: "public" | "signed";
      } | {
        /**
         * The Mux asset ID.
         * @minLength 1
         */
        assetId: string;
        /** Create a DRM-protected playback ID. */
        policy: "drm";
        /**
         * The Mux DRM configuration to apply.
         * @minLength 1
         */
        drmConfigurationId: string;
      };
      output: {
        /** A Mux playback ID attached to an asset. */
        playbackId: {
          /**
           * The playback ID used in Mux streaming URLs.
           * @minLength 1
           */
          id?: string;
          /** The access policy for a Mux playback ID. */
          policy?: "public" | "signed" | "drm";
          /**
           * The DRM configuration ID when the policy is drm.
           * @minLength 1
           */
          drm_configuration_id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Permanently delete a Mux video asset and all of its data. */
    "mux.delete_asset": {
      input: {
        /**
         * The Mux asset ID.
         * @minLength 1
         */
        assetId: string;
      };
      output: {
        /** Whether Mux accepted the deletion. */
        deleted: true;
        /**
         * The Mux asset ID.
         * @minLength 1
         */
        assetId: string;
      };
    };
    /** Retrieve the latest processing state and media details for one Mux video asset. */
    "mux.get_asset": {
      input: {
        /**
         * The Mux asset ID.
         * @minLength 1
         */
        assetId: string;
      };
      output: {
        /** A Mux video asset, including its current processing state and media details. */
        asset: {
          /**
           * The Mux asset ID.
           * @minLength 1
           */
          id?: string;
          /** The current asset processing status. */
          status?: "preparing" | "ready" | "errored";
          /**
           * The Unix timestamp when Mux created the asset.
           * @minLength 1
           */
          created_at?: string;
          /**
           * The asset duration in seconds.
           * @minimum 0
           */
          duration?: number;
          /**
           * The source aspect ratio in width:height form.
           * @minLength 1
           */
          aspect_ratio?: string;
          /**
           * The highest resolution tier available for the asset.
           * @minLength 1
           */
          resolution_tier?: string;
          /** The Mux video quality tier used to encode the asset. */
          video_quality?: "basic" | "plus" | "premium";
          /** User-supplied passthrough metadata. */
          passthrough?: string | null;
          /** Playback IDs currently attached to the asset. */
          playback_ids?: Array<{
            /**
             * The playback ID used in Mux streaming URLs.
             * @minLength 1
             */
            id?: string;
            /** The access policy for a Mux playback ID. */
            policy?: "public" | "signed" | "drm";
            /**
             * The DRM configuration ID when the policy is drm.
             * @minLength 1
             */
            drm_configuration_id?: string;
            [key: string]: unknown;
          }>;
          /** Audio, video, and text tracks in the asset. */
          tracks?: Array<Record<string, unknown>>;
          /** Processing errors reported by Mux when the asset is errored. */
          errors?: Record<string, unknown>;
          /** Customer-provided structured metadata for the asset. */
          meta?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List Mux video assets with cursor or page-based pagination and source filters. */
    "mux.list_assets": {
      input: {
        /**
         * The maximum number of assets to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The one-based page number. Do not combine this with cursor.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The next_cursor value from a previous list_assets response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Return only assets created by this Mux live stream.
         * @minLength 1
         */
        liveStreamId?: string;
        /**
         * Return only the asset created by this Mux direct upload.
         * @minLength 1
         */
        uploadId?: string;
      };
      output: {
        /** Mux assets in this page. */
        assets: Array<{
          /**
           * The Mux asset ID.
           * @minLength 1
           */
          id?: string;
          /** The current asset processing status. */
          status?: "preparing" | "ready" | "errored";
          /**
           * The Unix timestamp when Mux created the asset.
           * @minLength 1
           */
          created_at?: string;
          /**
           * The asset duration in seconds.
           * @minimum 0
           */
          duration?: number;
          /**
           * The source aspect ratio in width:height form.
           * @minLength 1
           */
          aspect_ratio?: string;
          /**
           * The highest resolution tier available for the asset.
           * @minLength 1
           */
          resolution_tier?: string;
          /** The Mux video quality tier used to encode the asset. */
          video_quality?: "basic" | "plus" | "premium";
          /** User-supplied passthrough metadata. */
          passthrough?: string | null;
          /** Playback IDs currently attached to the asset. */
          playback_ids?: Array<{
            /**
             * The playback ID used in Mux streaming URLs.
             * @minLength 1
             */
            id?: string;
            /** The access policy for a Mux playback ID. */
            policy?: "public" | "signed" | "drm";
            /**
             * The DRM configuration ID when the policy is drm.
             * @minLength 1
             */
            drm_configuration_id?: string;
            [key: string]: unknown;
          }>;
          /** Audio, video, and text tracks in the asset. */
          tracks?: Array<Record<string, unknown>>;
          /** Processing errors reported by Mux when the asset is errored. */
          errors?: Record<string, unknown>;
          /** Customer-provided structured metadata for the asset. */
          meta?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page, or null when no cursor was returned. */
        nextCursor: string | null;
      };
    };
  }
}
