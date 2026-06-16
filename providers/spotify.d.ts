import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a Spotify track or episode to the end of the playback queue. */
    "spotify.add_item_to_playback_queue": {
      input: {
        /**
         * Spotify device ID to target. When omitted, Spotify uses the active device.
         * @minLength 1
         */
        deviceId?: string;
        /**
         * Spotify track or episode URI to add to the queue.
         * @minLength 1
         */
        uri: string;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Add tracks or episodes to a Spotify playlist in the requested order. */
    "spotify.add_items_to_playlist": {
      input: {
        /**
         * Spotify playlist ID.
         * @minLength 1
         */
        playlistId: string;
        /**
         * Spotify URIs in the order Spotify should use.
         * @minItems 1
         * @maxItems 100
         */
        uris: Array<string>;
        /**
         * Zero-based insertion position.
         * @minimum 0
         */
        position?: number;
      };
      output: {
        /** Playlist snapshot identifier returned by Spotify. */
        snapshotId: string;
      };
    };
    /** Update Spotify playlist metadata such as name, description, visibility, or collaborative state. */
    "spotify.change_playlist_details": {
      input: {
        /**
         * Spotify playlist ID.
         * @minLength 1
         */
        playlistId: string;
        /**
         * Updated playlist name.
         * @minLength 1
         */
        name?: string;
        /** Whether the playlist should be public. */
        public?: boolean;
        /** Whether the playlist should be collaborative. */
        collaborative?: boolean;
        /** Updated playlist description. */
        description?: string;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Check whether the current authenticated Spotify user has saved the given albums. */
    "spotify.check_saved_albums": {
      input: {
        /**
         * Spotify album IDs.
         * @minItems 1
         * @maxItems 20
         */
        albumIds: Array<string>;
      };
      output: {
        /** Boolean results returned by Spotify in the original order. */
        results: Array<boolean>;
      };
    };
    /** Check whether the current authenticated Spotify user has saved the given audiobooks. */
    "spotify.check_saved_audiobooks": {
      input: {
        /**
         * Spotify audiobook IDs.
         * @minItems 1
         * @maxItems 50
         */
        audiobookIds: Array<string>;
      };
      output: {
        /** Boolean results returned by Spotify in the original order. */
        results: Array<boolean>;
      };
    };
    /** Check whether the current authenticated Spotify user has saved the given episodes. */
    "spotify.check_saved_episodes": {
      input: {
        /**
         * Spotify episode IDs.
         * @minItems 1
         * @maxItems 50
         */
        episodeIds: Array<string>;
      };
      output: {
        /** Boolean results returned by Spotify in the original order. */
        results: Array<boolean>;
      };
    };
    /** Check whether the current authenticated Spotify user has saved the given shows. */
    "spotify.check_saved_shows": {
      input: {
        /**
         * Spotify show IDs.
         * @minItems 1
         * @maxItems 50
         */
        showIds: Array<string>;
      };
      output: {
        /** Boolean results returned by Spotify in the original order. */
        results: Array<boolean>;
      };
    };
    /** Check whether the current authenticated Spotify user has saved the given tracks. */
    "spotify.check_saved_tracks": {
      input: {
        /**
         * Spotify track IDs.
         * @minItems 1
         * @maxItems 50
         */
        trackIds: Array<string>;
      };
      output: {
        /** Boolean results returned by Spotify in the original order. */
        results: Array<boolean>;
      };
    };
    /** Check whether the current authenticated Spotify user follows the given artists or users. */
    "spotify.check_user_follows_artists_or_users": {
      input: {
        /**
         * Spotify artist or user IDs.
         * @minItems 1
         * @maxItems 50
         */
        ids: Array<string>;
        /** Target resource type. */
        type: "artist" | "user";
      };
      output: {
        /** Boolean results returned by Spotify in the original order. */
        results: Array<boolean>;
      };
    };
    /** Check whether the given Spotify users follow a playlist. */
    "spotify.check_users_follow_playlist": {
      input: {
        /**
         * Spotify playlist ID.
         * @minLength 1
         */
        playlistId: string;
        /**
         * Spotify user IDs.
         * @minItems 1
         * @maxItems 50
         */
        userIds: Array<string>;
      };
      output: {
        /** Boolean results returned by Spotify in the original order. */
        results: Array<boolean>;
      };
    };
    /** Create a Spotify playlist for a user account owned by the authenticated user. */
    "spotify.create_playlist": {
      input: {
        /**
         * Spotify user ID that owns the new playlist.
         * @minLength 1
         */
        userId: string;
        /**
         * Playlist name.
         * @minLength 1
         */
        name: string;
        /** Whether the playlist should be public. */
        public?: boolean;
        /** Whether the playlist should be collaborative. */
        collaborative?: boolean;
        /** Playlist description. */
        description?: string;
      };
      output: {
        /** Spotify playlist ID. */
        id: string;
        /** Playlist name. */
        name: string;
        /** Spotify playlist URI. */
        uri: string;
        /** Spotify playlist API URL. */
        href: string;
        /** Spotify object type. */
        type: string;
        /** Playlist description. */
        description?: string | null;
        /** Whether the playlist is collaborative. */
        collaborative?: boolean;
        /** Whether the playlist is public. */
        public?: boolean | null;
        /** Playlist owner. */
        owner?: {
          /** Spotify user ID. */
          id: string;
          /** Spotify display name. */
          display_name?: string | null;
          /** Spotify user URI. */
          uri?: string;
          /** Spotify user API URL. */
          href?: string;
          /** Spotify object type. */
          type?: string;
          /** Owner external URLs. */
          external_urls?: Record<string, string>;
          [key: string]: unknown;
        };
        /** Playlist cover images. */
        images?: Array<{
          /** Image URL. */
          url: string;
          /** Image height in pixels. */
          height?: number | null;
          /** Image width in pixels. */
          width?: number | null;
        }>;
        /** Playlist followers. */
        followers?: {
          /** Followers API URL when available. */
          href?: string | null;
          /** Follower count. */
          total?: number;
        };
        /** Playlist external URLs. */
        external_urls?: Record<string, string>;
        /** Playlist snapshot identifier. */
        snapshot_id?: string;
        [key: string]: unknown;
      };
    };
    /** Follow one or more Spotify artists or users on behalf of the authenticated user. */
    "spotify.follow_artists_or_users": {
      input: {
        /**
         * Spotify artist or user IDs.
         * @minItems 1
         * @maxItems 50
         */
        ids: Array<string>;
        /** Target resource type. */
        type: "artist" | "user";
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Follow a Spotify playlist on behalf of the authenticated user. */
    "spotify.follow_playlist": {
      input: {
        /**
         * Spotify playlist ID.
         * @minLength 1
         */
        playlistId: string;
        /** Whether the followed playlist should appear on the user's public profile. */
        public?: boolean;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Get a Spotify album by its album ID. */
    "spotify.get_album": {
      input: {
        /**
         * Spotify album ID.
         * @minLength 1
         */
        albumId: string;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
      };
      output: {
        /** Spotify album ID. */
        id: string;
        /** Album name. */
        name: string;
        /** Spotify album URI. */
        uri: string;
        /** Spotify album API URL. */
        href: string;
        /** Spotify object type. */
        type: string;
        /** Album type. */
        album_type?: string;
        /** Total number of tracks. */
        total_tracks?: number;
        /** Album release date. */
        release_date?: string;
        /** Album release date precision. */
        release_date_precision?: string;
        /** Markets where the album is available. */
        available_markets?: Array<string>;
        /** Album cover images. */
        images?: Array<{
          /** Image URL. */
          url: string;
          /** Image height in pixels. */
          height?: number | null;
          /** Image width in pixels. */
          width?: number | null;
        }>;
        /** Album artists. */
        artists?: Array<{
          /** Spotify artist ID. */
          id: string;
          /** Artist name. */
          name: string;
          /** Spotify artist URI. */
          uri: string;
          /** Spotify artist API URL. */
          href: string;
          /** Spotify object type. */
          type: string;
          /** Artist popularity score. */
          popularity?: number;
          /** Artist genres. */
          genres?: Array<string>;
          /** Follower summary. */
          followers?: {
            /** Followers API URL when available. */
            href?: string | null;
            /** Follower count. */
            total?: number;
          };
          /** Artist images. */
          images?: Array<{
            /** Image URL. */
            url: string;
            /** Image height in pixels. */
            height?: number | null;
            /** Image width in pixels. */
            width?: number | null;
          }>;
          /** Artist external URLs. */
          external_urls?: Record<string, string>;
          [key: string]: unknown;
        }>;
        /** Album external URLs. */
        external_urls?: Record<string, string>;
        [key: string]: unknown;
      };
    };
    /** Get the tracks for a Spotify album by its album ID. */
    "spotify.get_album_tracks": {
      input: {
        /**
         * Spotify album ID.
         * @minLength 1
         */
        albumId: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Zero-based index of the first item to return.
         * @minimum 0
         */
        offset?: number;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
      };
      output: {
        /** Spotify API URL for this page. */
        href: string;
        /** Maximum number of items returned. */
        limit: number;
        /** URL for the next page when available. */
        next?: string | null;
        /** Zero-based index of the first returned item. */
        offset: number;
        /** URL for the previous page when available. */
        previous?: string | null;
        /** Total number of matched items. */
        total: number;
        /** Spotify items on the current page. */
        items: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get a Spotify artist by its artist ID. */
    "spotify.get_artist": {
      input: {
        /**
         * Spotify artist ID.
         * @minLength 1
         */
        artistId: string;
      };
      output: {
        /** Spotify artist ID. */
        id: string;
        /** Artist name. */
        name: string;
        /** Spotify artist URI. */
        uri: string;
        /** Spotify artist API URL. */
        href: string;
        /** Spotify object type. */
        type: string;
        /** Artist popularity score. */
        popularity?: number;
        /** Artist genres. */
        genres?: Array<string>;
        /** Follower summary. */
        followers?: {
          /** Followers API URL when available. */
          href?: string | null;
          /** Follower count. */
          total?: number;
        };
        /** Artist images. */
        images?: Array<{
          /** Image URL. */
          url: string;
          /** Image height in pixels. */
          height?: number | null;
          /** Image width in pixels. */
          width?: number | null;
        }>;
        /** Artist external URLs. */
        external_urls?: Record<string, string>;
        [key: string]: unknown;
      };
    };
    /** Get Spotify albums for an artist by the artist ID. */
    "spotify.get_artist_albums": {
      input: {
        /**
         * Spotify artist ID.
         * @minLength 1
         */
        artistId: string;
        /**
         * Album groups to include in the response.
         * @minItems 1
         */
        includeGroups?: Array<"album" | "single" | "appears_on" | "compilation">;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Zero-based index of the first item to return.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Spotify API URL for this page. */
        href: string;
        /** Maximum number of items returned. */
        limit: number;
        /** URL for the next page when available. */
        next?: string | null;
        /** Zero-based index of the first returned item. */
        offset: number;
        /** URL for the previous page when available. */
        previous?: string | null;
        /** Total number of matched items. */
        total: number;
        /** Spotify items on the current page. */
        items: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get related Spotify artists for an artist ID. */
    "spotify.get_artist_related_artists": {
      input: {
        /**
         * Spotify artist ID.
         * @minLength 1
         */
        artistId: string;
      };
      output: {
        /** Related Spotify artists. */
        artists: Array<{
          /** Spotify artist ID. */
          id: string;
          /** Artist name. */
          name: string;
          /** Spotify artist URI. */
          uri: string;
          /** Spotify artist API URL. */
          href: string;
          /** Spotify object type. */
          type: string;
          /** Artist popularity score. */
          popularity?: number;
          /** Artist genres. */
          genres?: Array<string>;
          /** Follower summary. */
          followers?: {
            /** Followers API URL when available. */
            href?: string | null;
            /** Follower count. */
            total?: number;
          };
          /** Artist images. */
          images?: Array<{
            /** Image URL. */
            url: string;
            /** Image height in pixels. */
            height?: number | null;
            /** Image width in pixels. */
            width?: number | null;
          }>;
          /** Artist external URLs. */
          external_urls?: Record<string, string>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get top Spotify tracks for an artist ID in a given market. */
    "spotify.get_artist_top_tracks": {
      input: {
        /**
         * Spotify artist ID.
         * @minLength 1
         */
        artistId: string;
        /**
         * An ISO 3166-1 alpha-2 country code used to rank top tracks.
         * @minLength 2
         * @maxLength 2
         */
        market: string;
      };
      output: {
        /** Top tracks returned by Spotify. */
        tracks: Array<{
          /** Spotify track ID. */
          id: string;
          /** Track name. */
          name: string;
          /** Spotify track URI. */
          uri: string;
          /** Spotify track API URL. */
          href: string;
          /** Spotify object type. */
          type: string;
          /** Track duration in milliseconds. */
          duration_ms: number;
          /** Whether the track contains explicit content. */
          explicit?: boolean;
          /** Disc number. */
          disc_number?: number;
          /** Track number within the disc. */
          track_number?: number;
          /** Track popularity score. */
          popularity?: number;
          /** Preview audio URL when available. */
          preview_url?: string | null;
          /** Whether the track is a local file. */
          is_local?: boolean;
          /** Markets where the track is available. */
          available_markets?: Array<string>;
          /** Track artists. */
          artists: Array<{
            /** Spotify artist ID. */
            id: string;
            /** Artist name. */
            name: string;
            /** Spotify artist URI. */
            uri: string;
            /** Spotify artist API URL. */
            href: string;
            /** Spotify object type. */
            type: string;
            /** Artist popularity score. */
            popularity?: number;
            /** Artist genres. */
            genres?: Array<string>;
            /** Follower summary. */
            followers?: {
              /** Followers API URL when available. */
              href?: string | null;
              /** Follower count. */
              total?: number;
            };
            /** Artist images. */
            images?: Array<{
              /** Image URL. */
              url: string;
              /** Image height in pixels. */
              height?: number | null;
              /** Image width in pixels. */
              width?: number | null;
            }>;
            /** Artist external URLs. */
            external_urls?: Record<string, string>;
            [key: string]: unknown;
          }>;
          /** Album summary. */
          album?: {
            /** Spotify album ID. */
            id: string;
            /** Album name. */
            name: string;
            /** Spotify album URI. */
            uri: string;
            /** Spotify album API URL. */
            href: string;
            /** Spotify object type. */
            type: string;
            /** Album type. */
            album_type?: string;
            /** Total number of tracks. */
            total_tracks?: number;
            /** Album release date. */
            release_date?: string;
            /** Album release date precision. */
            release_date_precision?: string;
            /** Markets where the album is available. */
            available_markets?: Array<string>;
            /** Album cover images. */
            images?: Array<{
              /** Image URL. */
              url: string;
              /** Image height in pixels. */
              height?: number | null;
              /** Image width in pixels. */
              width?: number | null;
            }>;
            /** Album artists. */
            artists?: Array<{
              /** Spotify artist ID. */
              id: string;
              /** Artist name. */
              name: string;
              /** Spotify artist URI. */
              uri: string;
              /** Spotify artist API URL. */
              href: string;
              /** Spotify object type. */
              type: string;
              /** Artist popularity score. */
              popularity?: number;
              /** Artist genres. */
              genres?: Array<string>;
              /** Follower summary. */
              followers?: {
                /** Followers API URL when available. */
                href?: string | null;
                /** Follower count. */
                total?: number;
              };
              /** Artist images. */
              images?: Array<{
                /** Image URL. */
                url: string;
                /** Image height in pixels. */
                height?: number | null;
                /** Image width in pixels. */
                width?: number | null;
              }>;
              /** Artist external URLs. */
              external_urls?: Record<string, string>;
              [key: string]: unknown;
            }>;
            /** Album external URLs. */
            external_urls?: Record<string, string>;
            [key: string]: unknown;
          };
          /** Track external URLs. */
          external_urls?: Record<string, string>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get a Spotify audiobook by its audiobook ID. */
    "spotify.get_audiobook": {
      input: {
        /**
         * Spotify audiobook ID.
         * @minLength 1
         */
        audiobookId: string;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
      };
      output: Record<string, unknown>;
    };
    /** Get Spotify chapters for an audiobook ID. */
    "spotify.get_audiobook_chapters": {
      input: {
        /**
         * Spotify audiobook ID.
         * @minLength 1
         */
        audiobookId: string;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Zero-based index of the first item to return.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Spotify API URL for this page. */
        href: string;
        /** Maximum number of items returned. */
        limit: number;
        /** URL for the next page when available. */
        next?: string | null;
        /** Zero-based index of the first returned item. */
        offset: number;
        /** URL for the previous page when available. */
        previous?: string | null;
        /** Total number of matched items. */
        total: number;
        /** Spotify items on the current page. */
        items: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get available Spotify playback devices for the current authenticated user. */
    "spotify.get_available_devices": {
      input: Record<string, never>;
      output: {
        /** Available Spotify playback devices. */
        devices: Array<Record<string, unknown>>;
      };
    };
    /** Get the genre seeds supported by Spotify recommendations. */
    "spotify.get_available_genre_seeds": {
      input: Record<string, never>;
      output: {
        /** Spotify genre seeds. */
        genres: Array<string>;
      };
    };
    /** Get the markets supported by Spotify catalog APIs. */
    "spotify.get_available_markets": {
      input: Record<string, never>;
      output: {
        /** Spotify market codes. */
        markets: Array<string>;
      };
    };
    /** Get Spotify browse categories for a market and locale. */
    "spotify.get_browse_categories": {
      input: {
        /**
         * An ISO 3166-1 alpha-2 country code.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /**
         * Locale code such as en_US used by Spotify browse endpoints.
         * @minLength 2
         */
        locale?: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Zero-based index of the first item to return.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Spotify category page. */
        categories: {
          /** Spotify API URL for this page. */
          href: string;
          /** Maximum number of items returned. */
          limit: number;
          /** URL for the next page when available. */
          next?: string | null;
          /** Zero-based index of the first returned item. */
          offset: number;
          /** URL for the previous page when available. */
          previous?: string | null;
          /** Total number of matched items. */
          total: number;
          /** Spotify items on the current page. */
          items: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Spotify browse category by category ID. */
    "spotify.get_browse_category": {
      input: {
        /**
         * Spotify browse category ID.
         * @minLength 1
         */
        categoryId: string;
        /**
         * An ISO 3166-1 alpha-2 country code.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /**
         * Locale code such as en_US used by Spotify browse endpoints.
         * @minLength 2
         */
        locale?: string;
      };
      output: Record<string, unknown>;
    };
    /** Get Spotify playlists for a browse category ID. */
    "spotify.get_category_playlists": {
      input: {
        /**
         * Spotify browse category ID.
         * @minLength 1
         */
        categoryId: string;
        /**
         * An ISO 3166-1 alpha-2 country code.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Zero-based index of the first item to return.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Optional Spotify message associated with the playlist set. */
        message?: string;
        /** Featured playlist page. */
        playlists: {
          /** Spotify API URL for this page. */
          href: string;
          /** Maximum number of items returned. */
          limit: number;
          /** URL for the next page when available. */
          next?: string | null;
          /** Zero-based index of the first returned item. */
          offset: number;
          /** URL for the previous page when available. */
          previous?: string | null;
          /** Total number of matched items. */
          total: number;
          /** Spotify items on the current page. */
          items: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Spotify chapter by its chapter ID. */
    "spotify.get_chapter": {
      input: {
        /**
         * Spotify chapter ID.
         * @minLength 1
         */
        chapterId: string;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
      };
      output: Record<string, unknown>;
    };
    /** Get playlists for the current authenticated Spotify user. */
    "spotify.get_current_user_playlists": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Zero-based index of the first item to return.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Spotify API URL for this page. */
        href: string;
        /** Maximum number of items returned. */
        limit: number;
        /** URL for the next page when available. */
        next?: string | null;
        /** Zero-based index of the first returned item. */
        offset: number;
        /** URL for the previous page when available. */
        previous?: string | null;
        /** Total number of matched items. */
        total: number;
        /** Spotify items on the current page. */
        items: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get the current authenticated Spotify user's profile details. */
    "spotify.get_current_user_profile": {
      input: Record<string, never>;
      output: {
        /** Spotify user ID. */
        id: string;
        /** Spotify display name. */
        display_name?: string | null;
        /** User email address when granted. */
        email?: string;
        /** User country code. */
        country?: string;
        /** Spotify subscription level. */
        product?: string;
        /** Spotify object type. */
        type: string;
        /** Spotify user URI. */
        uri: string;
        /** Spotify user API URL. */
        href: string;
        /** User profile images. */
        images?: Array<{
          /** Image URL. */
          url: string;
          /** Image height in pixels. */
          height?: number | null;
          /** Image width in pixels. */
          width?: number | null;
        }>;
        /** Follower summary. */
        followers?: {
          /** Followers API URL when available. */
          href?: string | null;
          /** Follower count. */
          total?: number;
        };
        /** External URLs for the user. */
        external_urls?: Record<string, string>;
        /** Explicit content settings. */
        explicit_content?: {
          /** Whether explicit filtering is enabled. */
          filter_enabled?: boolean;
          /** Whether the explicit filter is locked. */
          filter_locked?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the currently playing Spotify item for the authenticated user. */
    "spotify.get_currently_playing_track": {
      input: {
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
        /**
         * Additional item types Spotify should return for the current item.
         * @minItems 1
         */
        additionalTypes?: Array<"track" | "episode">;
      };
      output: Record<string, unknown> | null;
    };
    /** Get a Spotify episode by its episode ID. */
    "spotify.get_episode": {
      input: {
        /**
         * Spotify episode ID.
         * @minLength 1
         */
        episodeId: string;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
      };
      output: Record<string, unknown>;
    };
    /** Get Spotify featured playlists for a market and locale. */
    "spotify.get_featured_playlists": {
      input: {
        /**
         * An ISO 3166-1 alpha-2 country code.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /**
         * Locale code such as en_US used by Spotify browse endpoints.
         * @minLength 2
         */
        locale?: string;
        /** ISO 8601 timestamp used by Spotify editorial selection. */
        timestamp?: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Zero-based index of the first item to return.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Optional Spotify message associated with the playlist set. */
        message?: string;
        /** Featured playlist page. */
        playlists: {
          /** Spotify API URL for this page. */
          href: string;
          /** Maximum number of items returned. */
          limit: number;
          /** URL for the next page when available. */
          next?: string | null;
          /** Zero-based index of the first returned item. */
          offset: number;
          /** URL for the previous page when available. */
          previous?: string | null;
          /** Total number of matched items. */
          total: number;
          /** Spotify items on the current page. */
          items: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get artists followed by the current authenticated Spotify user. */
    "spotify.get_followed_artists": {
      input: {
        /**
         * Spotify artist ID cursor returned by a previous response.
         * @minLength 1
         */
        after?: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
      };
      output: {
        /** Spotify followed-artists page. */
        artists: {
          /** Spotify API URL for this page. */
          href: string;
          /** Maximum number of items returned. */
          limit: number;
          /** URL for the next page when available. */
          next?: string | null;
          /** Zero-based index of the first returned item. */
          offset: number;
          /** URL for the previous page when available. */
          previous?: string | null;
          /** Total number of matched items. */
          total: number;
          /** Artist results. */
          items: Array<{
            /** Spotify artist ID. */
            id: string;
            /** Artist name. */
            name: string;
            /** Spotify artist URI. */
            uri: string;
            /** Spotify artist API URL. */
            href: string;
            /** Spotify object type. */
            type: string;
            /** Artist popularity score. */
            popularity?: number;
            /** Artist genres. */
            genres?: Array<string>;
            /** Follower summary. */
            followers?: {
              /** Followers API URL when available. */
              href?: string | null;
              /** Follower count. */
              total?: number;
            };
            /** Artist images. */
            images?: Array<{
              /** Image URL. */
              url: string;
              /** Image height in pixels. */
              height?: number | null;
              /** Image width in pixels. */
              width?: number | null;
            }>;
            /** Artist external URLs. */
            external_urls?: Record<string, string>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get Spotify new release albums for a market. */
    "spotify.get_new_releases": {
      input: {
        /**
         * An ISO 3166-1 alpha-2 country code.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Zero-based index of the first item to return.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** New release album page. */
        albums: {
          /** Spotify API URL for this page. */
          href: string;
          /** Maximum number of items returned. */
          limit: number;
          /** URL for the next page when available. */
          next?: string | null;
          /** Zero-based index of the first returned item. */
          offset: number;
          /** URL for the previous page when available. */
          previous?: string | null;
          /** Total number of matched items. */
          total: number;
          /** Spotify items on the current page. */
          items: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the current Spotify playback state for the authenticated user. */
    "spotify.get_playback_state": {
      input: {
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
        /**
         * Additional item types Spotify should return in playback state.
         * @minItems 1
         */
        additionalTypes?: Array<"track" | "episode">;
      };
      output: Record<string, unknown> | null;
    };
    /** Get metadata for a Spotify playlist by its playlist ID. */
    "spotify.get_playlist": {
      input: {
        /**
         * Spotify playlist ID.
         * @minLength 1
         */
        playlistId: string;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
      };
      output: {
        /** Spotify playlist ID. */
        id: string;
        /** Playlist name. */
        name: string;
        /** Spotify playlist URI. */
        uri: string;
        /** Spotify playlist API URL. */
        href: string;
        /** Spotify object type. */
        type: string;
        /** Playlist description. */
        description?: string | null;
        /** Whether the playlist is collaborative. */
        collaborative?: boolean;
        /** Whether the playlist is public. */
        public?: boolean | null;
        /** Playlist owner. */
        owner?: {
          /** Spotify user ID. */
          id: string;
          /** Spotify display name. */
          display_name?: string | null;
          /** Spotify user URI. */
          uri?: string;
          /** Spotify user API URL. */
          href?: string;
          /** Spotify object type. */
          type?: string;
          /** Owner external URLs. */
          external_urls?: Record<string, string>;
          [key: string]: unknown;
        };
        /** Playlist cover images. */
        images?: Array<{
          /** Image URL. */
          url: string;
          /** Image height in pixels. */
          height?: number | null;
          /** Image width in pixels. */
          width?: number | null;
        }>;
        /** Playlist followers. */
        followers?: {
          /** Followers API URL when available. */
          href?: string | null;
          /** Follower count. */
          total?: number;
        };
        /** Playlist external URLs. */
        external_urls?: Record<string, string>;
        /** Playlist snapshot identifier. */
        snapshot_id?: string;
        [key: string]: unknown;
      };
    };
    /** Get Spotify cover images for a playlist ID. */
    "spotify.get_playlist_cover_image": {
      input: {
        /**
         * Spotify playlist ID.
         * @minLength 1
         */
        playlistId: string;
      };
      output: Array<{
        /** Image URL. */
        url: string;
        /** Image height in pixels. */
        height?: number | null;
        /** Image width in pixels. */
        width?: number | null;
      }>;
    };
    /** Get playlist items for a Spotify playlist by its playlist ID. */
    "spotify.get_playlist_items": {
      input: {
        /**
         * Spotify playlist ID.
         * @minLength 1
         */
        playlistId: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Zero-based index of the first item to return.
         * @minimum 0
         */
        offset?: number;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
      };
      output: {
        /** Spotify API URL for this page. */
        href: string;
        /** Maximum number of items returned. */
        limit: number;
        /** URL for the next page when available. */
        next?: string | null;
        /** Zero-based index of the first returned item. */
        offset: number;
        /** URL for the previous page when available. */
        previous?: string | null;
        /** Total number of playlist items. */
        total: number;
        /** Playlist track entries. */
        items: Array<{
          /** Timestamp when the item was added. */
          added_at?: string | null;
          /** Whether the playlist item references a local file. */
          is_local?: boolean;
          /** User who added the item. */
          added_by?: {
            /** Spotify user ID. */
            id: string;
            /** Spotify display name. */
            display_name?: string | null;
            /** Spotify user URI. */
            uri?: string;
            /** Spotify user API URL. */
            href?: string;
            /** Spotify object type. */
            type?: string;
            /** Owner external URLs. */
            external_urls?: Record<string, string>;
            [key: string]: unknown;
          } | null;
          /** Track referenced by the playlist item. */
          track?: {
            /** Spotify track ID. */
            id: string;
            /** Track name. */
            name: string;
            /** Spotify track URI. */
            uri: string;
            /** Spotify track API URL. */
            href: string;
            /** Spotify object type. */
            type: string;
            /** Track duration in milliseconds. */
            duration_ms: number;
            /** Whether the track contains explicit content. */
            explicit?: boolean;
            /** Disc number. */
            disc_number?: number;
            /** Track number within the disc. */
            track_number?: number;
            /** Track popularity score. */
            popularity?: number;
            /** Preview audio URL when available. */
            preview_url?: string | null;
            /** Whether the track is a local file. */
            is_local?: boolean;
            /** Markets where the track is available. */
            available_markets?: Array<string>;
            /** Track artists. */
            artists: Array<{
              /** Spotify artist ID. */
              id: string;
              /** Artist name. */
              name: string;
              /** Spotify artist URI. */
              uri: string;
              /** Spotify artist API URL. */
              href: string;
              /** Spotify object type. */
              type: string;
              /** Artist popularity score. */
              popularity?: number;
              /** Artist genres. */
              genres?: Array<string>;
              /** Follower summary. */
              followers?: {
                /** Followers API URL when available. */
                href?: string | null;
                /** Follower count. */
                total?: number;
              };
              /** Artist images. */
              images?: Array<{
                /** Image URL. */
                url: string;
                /** Image height in pixels. */
                height?: number | null;
                /** Image width in pixels. */
                width?: number | null;
              }>;
              /** Artist external URLs. */
              external_urls?: Record<string, string>;
              [key: string]: unknown;
            }>;
            /** Album summary. */
            album?: {
              /** Spotify album ID. */
              id: string;
              /** Album name. */
              name: string;
              /** Spotify album URI. */
              uri: string;
              /** Spotify album API URL. */
              href: string;
              /** Spotify object type. */
              type: string;
              /** Album type. */
              album_type?: string;
              /** Total number of tracks. */
              total_tracks?: number;
              /** Album release date. */
              release_date?: string;
              /** Album release date precision. */
              release_date_precision?: string;
              /** Markets where the album is available. */
              available_markets?: Array<string>;
              /** Album cover images. */
              images?: Array<{
                /** Image URL. */
                url: string;
                /** Image height in pixels. */
                height?: number | null;
                /** Image width in pixels. */
                width?: number | null;
              }>;
              /** Album artists. */
              artists?: Array<{
                /** Spotify artist ID. */
                id: string;
                /** Artist name. */
                name: string;
                /** Spotify artist URI. */
                uri: string;
                /** Spotify artist API URL. */
                href: string;
                /** Spotify object type. */
                type: string;
                /** Artist popularity score. */
                popularity?: number;
                /** Artist genres. */
                genres?: Array<string>;
                /** Follower summary. */
                followers?: {
                  /** Followers API URL when available. */
                  href?: string | null;
                  /** Follower count. */
                  total?: number;
                };
                /** Artist images. */
                images?: Array<{
                  /** Image URL. */
                  url: string;
                  /** Image height in pixels. */
                  height?: number | null;
                  /** Image width in pixels. */
                  width?: number | null;
                }>;
                /** Artist external URLs. */
                external_urls?: Record<string, string>;
                [key: string]: unknown;
              }>;
              /** Album external URLs. */
              external_urls?: Record<string, string>;
              [key: string]: unknown;
            };
            /** Track external URLs. */
            external_urls?: Record<string, string>;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get recently played Spotify tracks for the authenticated user. */
    "spotify.get_recently_played_tracks": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Unix timestamp in milliseconds used as a lower bound.
         * @exclusiveMinimum 0
         */
        after?: number;
        /**
         * Unix timestamp in milliseconds used as an upper bound.
         * @exclusiveMinimum 0
         */
        before?: number;
      };
      output: Record<string, unknown>;
    };
    /** Get Spotify track recommendations from seed artists, tracks, or genres. */
    "spotify.get_recommendations": {
      input: {
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Artist seeds used by Spotify recommendations.
         * @minItems 1
         * @maxItems 5
         */
        seedArtists?: Array<string>;
        /**
         * Track seeds used by Spotify recommendations.
         * @minItems 1
         * @maxItems 5
         */
        seedTracks?: Array<string>;
        /**
         * Genre seeds used by Spotify recommendations.
         * @minItems 1
         * @maxItems 5
         */
        seedGenres?: Array<string>;
      };
      output: {
        /** Recommended tracks. */
        tracks: Array<{
          /** Spotify track ID. */
          id: string;
          /** Track name. */
          name: string;
          /** Spotify track URI. */
          uri: string;
          /** Spotify track API URL. */
          href: string;
          /** Spotify object type. */
          type: string;
          /** Track duration in milliseconds. */
          duration_ms: number;
          /** Whether the track contains explicit content. */
          explicit?: boolean;
          /** Disc number. */
          disc_number?: number;
          /** Track number within the disc. */
          track_number?: number;
          /** Track popularity score. */
          popularity?: number;
          /** Preview audio URL when available. */
          preview_url?: string | null;
          /** Whether the track is a local file. */
          is_local?: boolean;
          /** Markets where the track is available. */
          available_markets?: Array<string>;
          /** Track artists. */
          artists: Array<{
            /** Spotify artist ID. */
            id: string;
            /** Artist name. */
            name: string;
            /** Spotify artist URI. */
            uri: string;
            /** Spotify artist API URL. */
            href: string;
            /** Spotify object type. */
            type: string;
            /** Artist popularity score. */
            popularity?: number;
            /** Artist genres. */
            genres?: Array<string>;
            /** Follower summary. */
            followers?: {
              /** Followers API URL when available. */
              href?: string | null;
              /** Follower count. */
              total?: number;
            };
            /** Artist images. */
            images?: Array<{
              /** Image URL. */
              url: string;
              /** Image height in pixels. */
              height?: number | null;
              /** Image width in pixels. */
              width?: number | null;
            }>;
            /** Artist external URLs. */
            external_urls?: Record<string, string>;
            [key: string]: unknown;
          }>;
          /** Album summary. */
          album?: {
            /** Spotify album ID. */
            id: string;
            /** Album name. */
            name: string;
            /** Spotify album URI. */
            uri: string;
            /** Spotify album API URL. */
            href: string;
            /** Spotify object type. */
            type: string;
            /** Album type. */
            album_type?: string;
            /** Total number of tracks. */
            total_tracks?: number;
            /** Album release date. */
            release_date?: string;
            /** Album release date precision. */
            release_date_precision?: string;
            /** Markets where the album is available. */
            available_markets?: Array<string>;
            /** Album cover images. */
            images?: Array<{
              /** Image URL. */
              url: string;
              /** Image height in pixels. */
              height?: number | null;
              /** Image width in pixels. */
              width?: number | null;
            }>;
            /** Album artists. */
            artists?: Array<{
              /** Spotify artist ID. */
              id: string;
              /** Artist name. */
              name: string;
              /** Spotify artist URI. */
              uri: string;
              /** Spotify artist API URL. */
              href: string;
              /** Spotify object type. */
              type: string;
              /** Artist popularity score. */
              popularity?: number;
              /** Artist genres. */
              genres?: Array<string>;
              /** Follower summary. */
              followers?: {
                /** Followers API URL when available. */
                href?: string | null;
                /** Follower count. */
                total?: number;
              };
              /** Artist images. */
              images?: Array<{
                /** Image URL. */
                url: string;
                /** Image height in pixels. */
                height?: number | null;
                /** Image width in pixels. */
                width?: number | null;
              }>;
              /** Artist external URLs. */
              external_urls?: Record<string, string>;
              [key: string]: unknown;
            }>;
            /** Album external URLs. */
            external_urls?: Record<string, string>;
            [key: string]: unknown;
          };
          /** Track external URLs. */
          external_urls?: Record<string, string>;
          [key: string]: unknown;
        }>;
        /** Recommendation seeds returned by Spotify. */
        seeds: Array<Record<string, unknown>>;
      };
    };
    /** Get multiple Spotify albums by album ID. */
    "spotify.get_several_albums": {
      input: {
        /**
         * Spotify album IDs.
         * @minItems 1
         * @maxItems 20
         */
        albumIds: Array<string>;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
      };
      output: {
        /** Spotify albums returned by the request. */
        albums: Array<{
          /** Spotify album ID. */
          id: string;
          /** Album name. */
          name: string;
          /** Spotify album URI. */
          uri: string;
          /** Spotify album API URL. */
          href: string;
          /** Spotify object type. */
          type: string;
          /** Album type. */
          album_type?: string;
          /** Total number of tracks. */
          total_tracks?: number;
          /** Album release date. */
          release_date?: string;
          /** Album release date precision. */
          release_date_precision?: string;
          /** Markets where the album is available. */
          available_markets?: Array<string>;
          /** Album cover images. */
          images?: Array<{
            /** Image URL. */
            url: string;
            /** Image height in pixels. */
            height?: number | null;
            /** Image width in pixels. */
            width?: number | null;
          }>;
          /** Album artists. */
          artists?: Array<{
            /** Spotify artist ID. */
            id: string;
            /** Artist name. */
            name: string;
            /** Spotify artist URI. */
            uri: string;
            /** Spotify artist API URL. */
            href: string;
            /** Spotify object type. */
            type: string;
            /** Artist popularity score. */
            popularity?: number;
            /** Artist genres. */
            genres?: Array<string>;
            /** Follower summary. */
            followers?: {
              /** Followers API URL when available. */
              href?: string | null;
              /** Follower count. */
              total?: number;
            };
            /** Artist images. */
            images?: Array<{
              /** Image URL. */
              url: string;
              /** Image height in pixels. */
              height?: number | null;
              /** Image width in pixels. */
              width?: number | null;
            }>;
            /** Artist external URLs. */
            external_urls?: Record<string, string>;
            [key: string]: unknown;
          }>;
          /** Album external URLs. */
          external_urls?: Record<string, string>;
          [key: string]: unknown;
        } | null>;
      };
    };
    /** Get multiple Spotify artists by artist ID. */
    "spotify.get_several_artists": {
      input: {
        /**
         * Spotify artist IDs.
         * @minItems 1
         * @maxItems 50
         */
        artistIds: Array<string>;
      };
      output: {
        /** Spotify artists returned by the request. */
        artists: Array<{
          /** Spotify artist ID. */
          id: string;
          /** Artist name. */
          name: string;
          /** Spotify artist URI. */
          uri: string;
          /** Spotify artist API URL. */
          href: string;
          /** Spotify object type. */
          type: string;
          /** Artist popularity score. */
          popularity?: number;
          /** Artist genres. */
          genres?: Array<string>;
          /** Follower summary. */
          followers?: {
            /** Followers API URL when available. */
            href?: string | null;
            /** Follower count. */
            total?: number;
          };
          /** Artist images. */
          images?: Array<{
            /** Image URL. */
            url: string;
            /** Image height in pixels. */
            height?: number | null;
            /** Image width in pixels. */
            width?: number | null;
          }>;
          /** Artist external URLs. */
          external_urls?: Record<string, string>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get multiple Spotify audiobooks by audiobook ID. */
    "spotify.get_several_audiobooks": {
      input: {
        /**
         * Spotify audiobook IDs.
         * @minItems 1
         * @maxItems 50
         */
        audiobookIds: Array<string>;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
      };
      output: {
        /** Spotify audiobooks returned by the request. */
        audiobooks: Array<Record<string, unknown> | null>;
      };
    };
    /** Get multiple Spotify chapters by chapter ID. */
    "spotify.get_several_chapters": {
      input: {
        /**
         * Spotify chapter IDs.
         * @minItems 1
         * @maxItems 50
         */
        chapterIds: Array<string>;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
      };
      output: {
        /** Spotify chapters returned by the request. */
        chapters: Array<Record<string, unknown> | null>;
      };
    };
    /** Get multiple Spotify episodes by episode ID. */
    "spotify.get_several_episodes": {
      input: {
        /**
         * Spotify episode IDs.
         * @minItems 1
         * @maxItems 50
         */
        episodeIds: Array<string>;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
      };
      output: {
        /** Spotify episodes returned by the request. */
        episodes: Array<Record<string, unknown> | null>;
      };
    };
    /** Get multiple Spotify shows by show ID. */
    "spotify.get_several_shows": {
      input: {
        /**
         * Spotify show IDs.
         * @minItems 1
         * @maxItems 50
         */
        showIds: Array<string>;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
      };
      output: {
        /** Spotify shows returned by the request. */
        shows: Array<Record<string, unknown> | null>;
      };
    };
    /** Get Spotify audio features for multiple track IDs. */
    "spotify.get_several_track_audio_features": {
      input: {
        /**
         * Spotify resource IDs.
         * @minItems 1
         * @maxItems 100
         */
        trackIds: Array<string>;
      };
      output: {
        /** Audio-features payloads returned by Spotify. */
        audio_features: Array<Record<string, unknown> | null>;
      };
    };
    /** Get multiple Spotify tracks by track ID. */
    "spotify.get_several_tracks": {
      input: {
        /**
         * Spotify track IDs.
         * @minItems 1
         * @maxItems 50
         */
        trackIds: Array<string>;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
      };
      output: {
        /** Spotify tracks returned by the request. */
        tracks: Array<{
          /** Spotify track ID. */
          id: string;
          /** Track name. */
          name: string;
          /** Spotify track URI. */
          uri: string;
          /** Spotify track API URL. */
          href: string;
          /** Spotify object type. */
          type: string;
          /** Track duration in milliseconds. */
          duration_ms: number;
          /** Whether the track contains explicit content. */
          explicit?: boolean;
          /** Disc number. */
          disc_number?: number;
          /** Track number within the disc. */
          track_number?: number;
          /** Track popularity score. */
          popularity?: number;
          /** Preview audio URL when available. */
          preview_url?: string | null;
          /** Whether the track is a local file. */
          is_local?: boolean;
          /** Markets where the track is available. */
          available_markets?: Array<string>;
          /** Track artists. */
          artists: Array<{
            /** Spotify artist ID. */
            id: string;
            /** Artist name. */
            name: string;
            /** Spotify artist URI. */
            uri: string;
            /** Spotify artist API URL. */
            href: string;
            /** Spotify object type. */
            type: string;
            /** Artist popularity score. */
            popularity?: number;
            /** Artist genres. */
            genres?: Array<string>;
            /** Follower summary. */
            followers?: {
              /** Followers API URL when available. */
              href?: string | null;
              /** Follower count. */
              total?: number;
            };
            /** Artist images. */
            images?: Array<{
              /** Image URL. */
              url: string;
              /** Image height in pixels. */
              height?: number | null;
              /** Image width in pixels. */
              width?: number | null;
            }>;
            /** Artist external URLs. */
            external_urls?: Record<string, string>;
            [key: string]: unknown;
          }>;
          /** Album summary. */
          album?: {
            /** Spotify album ID. */
            id: string;
            /** Album name. */
            name: string;
            /** Spotify album URI. */
            uri: string;
            /** Spotify album API URL. */
            href: string;
            /** Spotify object type. */
            type: string;
            /** Album type. */
            album_type?: string;
            /** Total number of tracks. */
            total_tracks?: number;
            /** Album release date. */
            release_date?: string;
            /** Album release date precision. */
            release_date_precision?: string;
            /** Markets where the album is available. */
            available_markets?: Array<string>;
            /** Album cover images. */
            images?: Array<{
              /** Image URL. */
              url: string;
              /** Image height in pixels. */
              height?: number | null;
              /** Image width in pixels. */
              width?: number | null;
            }>;
            /** Album artists. */
            artists?: Array<{
              /** Spotify artist ID. */
              id: string;
              /** Artist name. */
              name: string;
              /** Spotify artist URI. */
              uri: string;
              /** Spotify artist API URL. */
              href: string;
              /** Spotify object type. */
              type: string;
              /** Artist popularity score. */
              popularity?: number;
              /** Artist genres. */
              genres?: Array<string>;
              /** Follower summary. */
              followers?: {
                /** Followers API URL when available. */
                href?: string | null;
                /** Follower count. */
                total?: number;
              };
              /** Artist images. */
              images?: Array<{
                /** Image URL. */
                url: string;
                /** Image height in pixels. */
                height?: number | null;
                /** Image width in pixels. */
                width?: number | null;
              }>;
              /** Artist external URLs. */
              external_urls?: Record<string, string>;
              [key: string]: unknown;
            }>;
            /** Album external URLs. */
            external_urls?: Record<string, string>;
            [key: string]: unknown;
          };
          /** Track external URLs. */
          external_urls?: Record<string, string>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get a Spotify show by its show ID. */
    "spotify.get_show": {
      input: {
        /**
         * Spotify show ID.
         * @minLength 1
         */
        showId: string;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
      };
      output: Record<string, unknown>;
    };
    /** Get Spotify episodes for a show ID. */
    "spotify.get_show_episodes": {
      input: {
        /**
         * Spotify show ID.
         * @minLength 1
         */
        showId: string;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Zero-based index of the first item to return.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Spotify API URL for this page. */
        href: string;
        /** Maximum number of items returned. */
        limit: number;
        /** URL for the next page when available. */
        next?: string | null;
        /** Zero-based index of the first returned item. */
        offset: number;
        /** URL for the previous page when available. */
        previous?: string | null;
        /** Total number of matched items. */
        total: number;
        /** Spotify items on the current page. */
        items: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get a Spotify track by its track ID. */
    "spotify.get_track": {
      input: {
        /**
         * Spotify track ID.
         * @minLength 1
         */
        trackId: string;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
      };
      output: {
        /** Spotify track ID. */
        id: string;
        /** Track name. */
        name: string;
        /** Spotify track URI. */
        uri: string;
        /** Spotify track API URL. */
        href: string;
        /** Spotify object type. */
        type: string;
        /** Track duration in milliseconds. */
        duration_ms: number;
        /** Whether the track contains explicit content. */
        explicit?: boolean;
        /** Disc number. */
        disc_number?: number;
        /** Track number within the disc. */
        track_number?: number;
        /** Track popularity score. */
        popularity?: number;
        /** Preview audio URL when available. */
        preview_url?: string | null;
        /** Whether the track is a local file. */
        is_local?: boolean;
        /** Markets where the track is available. */
        available_markets?: Array<string>;
        /** Track artists. */
        artists: Array<{
          /** Spotify artist ID. */
          id: string;
          /** Artist name. */
          name: string;
          /** Spotify artist URI. */
          uri: string;
          /** Spotify artist API URL. */
          href: string;
          /** Spotify object type. */
          type: string;
          /** Artist popularity score. */
          popularity?: number;
          /** Artist genres. */
          genres?: Array<string>;
          /** Follower summary. */
          followers?: {
            /** Followers API URL when available. */
            href?: string | null;
            /** Follower count. */
            total?: number;
          };
          /** Artist images. */
          images?: Array<{
            /** Image URL. */
            url: string;
            /** Image height in pixels. */
            height?: number | null;
            /** Image width in pixels. */
            width?: number | null;
          }>;
          /** Artist external URLs. */
          external_urls?: Record<string, string>;
          [key: string]: unknown;
        }>;
        /** Album summary. */
        album?: {
          /** Spotify album ID. */
          id: string;
          /** Album name. */
          name: string;
          /** Spotify album URI. */
          uri: string;
          /** Spotify album API URL. */
          href: string;
          /** Spotify object type. */
          type: string;
          /** Album type. */
          album_type?: string;
          /** Total number of tracks. */
          total_tracks?: number;
          /** Album release date. */
          release_date?: string;
          /** Album release date precision. */
          release_date_precision?: string;
          /** Markets where the album is available. */
          available_markets?: Array<string>;
          /** Album cover images. */
          images?: Array<{
            /** Image URL. */
            url: string;
            /** Image height in pixels. */
            height?: number | null;
            /** Image width in pixels. */
            width?: number | null;
          }>;
          /** Album artists. */
          artists?: Array<{
            /** Spotify artist ID. */
            id: string;
            /** Artist name. */
            name: string;
            /** Spotify artist URI. */
            uri: string;
            /** Spotify artist API URL. */
            href: string;
            /** Spotify object type. */
            type: string;
            /** Artist popularity score. */
            popularity?: number;
            /** Artist genres. */
            genres?: Array<string>;
            /** Follower summary. */
            followers?: {
              /** Followers API URL when available. */
              href?: string | null;
              /** Follower count. */
              total?: number;
            };
            /** Artist images. */
            images?: Array<{
              /** Image URL. */
              url: string;
              /** Image height in pixels. */
              height?: number | null;
              /** Image width in pixels. */
              width?: number | null;
            }>;
            /** Artist external URLs. */
            external_urls?: Record<string, string>;
            [key: string]: unknown;
          }>;
          /** Album external URLs. */
          external_urls?: Record<string, string>;
          [key: string]: unknown;
        };
        /** Track external URLs. */
        external_urls?: Record<string, string>;
        [key: string]: unknown;
      };
    };
    /** Get Spotify audio analysis for a track ID. */
    "spotify.get_track_audio_analysis": {
      input: {
        /**
         * Spotify track ID.
         * @minLength 1
         */
        trackId: string;
      };
      output: Record<string, unknown>;
    };
    /** Get Spotify audio features for a track ID. */
    "spotify.get_track_audio_features": {
      input: {
        /**
         * Spotify track ID.
         * @minLength 1
         */
        trackId: string;
      };
      output: Record<string, unknown>;
    };
    /** Get playlists visible for a Spotify user ID. */
    "spotify.get_user_playlists": {
      input: {
        /**
         * Spotify user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Zero-based index of the first item to return.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Spotify API URL for this page. */
        href: string;
        /** Maximum number of items returned. */
        limit: number;
        /** URL for the next page when available. */
        next?: string | null;
        /** Zero-based index of the first returned item. */
        offset: number;
        /** URL for the previous page when available. */
        previous?: string | null;
        /** Total number of matched items. */
        total: number;
        /** Spotify items on the current page. */
        items: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get a Spotify user profile by Spotify user ID. */
    "spotify.get_user_profile": {
      input: {
        /**
         * Spotify user ID.
         * @minLength 1
         */
        userId: string;
      };
      output: Record<string, unknown>;
    };
    /** Get the current Spotify queue for the authenticated user. */
    "spotify.get_user_queue": {
      input: Record<string, never>;
      output: {
        /** Currently playing item when available. */
        currently_playing?: Record<string, unknown> | null;
        /** Upcoming queue items. */
        queue: Array<Record<string, unknown>>;
      };
    };
    /** Get albums saved by the current authenticated Spotify user. */
    "spotify.get_user_saved_albums": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Zero-based index of the first item to return.
         * @minimum 0
         */
        offset?: number;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
      };
      output: {
        /** Spotify API URL for this page. */
        href: string;
        /** Maximum number of items returned. */
        limit: number;
        /** URL for the next page when available. */
        next?: string | null;
        /** Zero-based index of the first returned item. */
        offset: number;
        /** URL for the previous page when available. */
        previous?: string | null;
        /** Total number of saved items. */
        total: number;
        /** Saved-item wrappers returned by Spotify. */
        items: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get audiobooks saved by the current authenticated Spotify user. */
    "spotify.get_user_saved_audiobooks": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Zero-based index of the first item to return.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Spotify API URL for this page. */
        href: string;
        /** Maximum number of items returned. */
        limit: number;
        /** URL for the next page when available. */
        next?: string | null;
        /** Zero-based index of the first returned item. */
        offset: number;
        /** URL for the previous page when available. */
        previous?: string | null;
        /** Total number of matched items. */
        total: number;
        /** Spotify items on the current page. */
        items: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get episodes saved by the current authenticated Spotify user. */
    "spotify.get_user_saved_episodes": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Zero-based index of the first item to return.
         * @minimum 0
         */
        offset?: number;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
      };
      output: {
        /** Spotify API URL for this page. */
        href: string;
        /** Maximum number of items returned. */
        limit: number;
        /** URL for the next page when available. */
        next?: string | null;
        /** Zero-based index of the first returned item. */
        offset: number;
        /** URL for the previous page when available. */
        previous?: string | null;
        /** Total number of saved items. */
        total: number;
        /** Saved-item wrappers returned by Spotify. */
        items: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get shows saved by the current authenticated Spotify user. */
    "spotify.get_user_saved_shows": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Zero-based index of the first item to return.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Spotify API URL for this page. */
        href: string;
        /** Maximum number of items returned. */
        limit: number;
        /** URL for the next page when available. */
        next?: string | null;
        /** Zero-based index of the first returned item. */
        offset: number;
        /** URL for the previous page when available. */
        previous?: string | null;
        /** Total number of saved items. */
        total: number;
        /** Saved-item wrappers returned by Spotify. */
        items: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get tracks saved by the current authenticated Spotify user. */
    "spotify.get_user_saved_tracks": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Zero-based index of the first item to return.
         * @minimum 0
         */
        offset?: number;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
      };
      output: {
        /** Spotify API URL for this page. */
        href: string;
        /** Maximum number of items returned. */
        limit: number;
        /** URL for the next page when available. */
        next?: string | null;
        /** Zero-based index of the first returned item. */
        offset: number;
        /** URL for the previous page when available. */
        previous?: string | null;
        /** Total number of saved items. */
        total: number;
        /** Saved-item wrappers returned by Spotify. */
        items: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get the current Spotify user's top artists for a selected affinity time range. */
    "spotify.get_user_top_artists": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Zero-based index of the first item to return.
         * @minimum 0
         */
        offset?: number;
        /** Affinity time range used by Spotify to rank top artists. */
        timeRange?: "short_term" | "medium_term" | "long_term";
      };
      output: {
        /** Spotify API URL for this page. */
        href: string;
        /** Maximum number of items returned. */
        limit: number;
        /** URL for the next page when available. */
        next?: string | null;
        /** Zero-based index of the first returned item. */
        offset: number;
        /** URL for the previous page when available. */
        previous?: string | null;
        /** Total number of matched items. */
        total: number;
        /** Artist results. */
        items: Array<{
          /** Spotify artist ID. */
          id: string;
          /** Artist name. */
          name: string;
          /** Spotify artist URI. */
          uri: string;
          /** Spotify artist API URL. */
          href: string;
          /** Spotify object type. */
          type: string;
          /** Artist popularity score. */
          popularity?: number;
          /** Artist genres. */
          genres?: Array<string>;
          /** Follower summary. */
          followers?: {
            /** Followers API URL when available. */
            href?: string | null;
            /** Follower count. */
            total?: number;
          };
          /** Artist images. */
          images?: Array<{
            /** Image URL. */
            url: string;
            /** Image height in pixels. */
            height?: number | null;
            /** Image width in pixels. */
            width?: number | null;
          }>;
          /** Artist external URLs. */
          external_urls?: Record<string, string>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get the current Spotify user's top tracks for a selected affinity time range. */
    "spotify.get_user_top_tracks": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Zero-based index of the first item to return.
         * @minimum 0
         */
        offset?: number;
        /** Affinity time range used by Spotify to rank top tracks. */
        timeRange?: "short_term" | "medium_term" | "long_term";
      };
      output: {
        /** Spotify API URL for this page. */
        href: string;
        /** Maximum number of items returned. */
        limit: number;
        /** URL for the next page when available. */
        next?: string | null;
        /** Zero-based index of the first returned item. */
        offset: number;
        /** URL for the previous page when available. */
        previous?: string | null;
        /** Total number of matched items. */
        total: number;
        /** Track results. */
        items: Array<{
          /** Spotify track ID. */
          id: string;
          /** Track name. */
          name: string;
          /** Spotify track URI. */
          uri: string;
          /** Spotify track API URL. */
          href: string;
          /** Spotify object type. */
          type: string;
          /** Track duration in milliseconds. */
          duration_ms: number;
          /** Whether the track contains explicit content. */
          explicit?: boolean;
          /** Disc number. */
          disc_number?: number;
          /** Track number within the disc. */
          track_number?: number;
          /** Track popularity score. */
          popularity?: number;
          /** Preview audio URL when available. */
          preview_url?: string | null;
          /** Whether the track is a local file. */
          is_local?: boolean;
          /** Markets where the track is available. */
          available_markets?: Array<string>;
          /** Track artists. */
          artists: Array<{
            /** Spotify artist ID. */
            id: string;
            /** Artist name. */
            name: string;
            /** Spotify artist URI. */
            uri: string;
            /** Spotify artist API URL. */
            href: string;
            /** Spotify object type. */
            type: string;
            /** Artist popularity score. */
            popularity?: number;
            /** Artist genres. */
            genres?: Array<string>;
            /** Follower summary. */
            followers?: {
              /** Followers API URL when available. */
              href?: string | null;
              /** Follower count. */
              total?: number;
            };
            /** Artist images. */
            images?: Array<{
              /** Image URL. */
              url: string;
              /** Image height in pixels. */
              height?: number | null;
              /** Image width in pixels. */
              width?: number | null;
            }>;
            /** Artist external URLs. */
            external_urls?: Record<string, string>;
            [key: string]: unknown;
          }>;
          /** Album summary. */
          album?: {
            /** Spotify album ID. */
            id: string;
            /** Album name. */
            name: string;
            /** Spotify album URI. */
            uri: string;
            /** Spotify album API URL. */
            href: string;
            /** Spotify object type. */
            type: string;
            /** Album type. */
            album_type?: string;
            /** Total number of tracks. */
            total_tracks?: number;
            /** Album release date. */
            release_date?: string;
            /** Album release date precision. */
            release_date_precision?: string;
            /** Markets where the album is available. */
            available_markets?: Array<string>;
            /** Album cover images. */
            images?: Array<{
              /** Image URL. */
              url: string;
              /** Image height in pixels. */
              height?: number | null;
              /** Image width in pixels. */
              width?: number | null;
            }>;
            /** Album artists. */
            artists?: Array<{
              /** Spotify artist ID. */
              id: string;
              /** Artist name. */
              name: string;
              /** Spotify artist URI. */
              uri: string;
              /** Spotify artist API URL. */
              href: string;
              /** Spotify object type. */
              type: string;
              /** Artist popularity score. */
              popularity?: number;
              /** Artist genres. */
              genres?: Array<string>;
              /** Follower summary. */
              followers?: {
                /** Followers API URL when available. */
                href?: string | null;
                /** Follower count. */
                total?: number;
              };
              /** Artist images. */
              images?: Array<{
                /** Image URL. */
                url: string;
                /** Image height in pixels. */
                height?: number | null;
                /** Image width in pixels. */
                width?: number | null;
              }>;
              /** Artist external URLs. */
              external_urls?: Record<string, string>;
              [key: string]: unknown;
            }>;
            /** Album external URLs. */
            external_urls?: Record<string, string>;
            [key: string]: unknown;
          };
          /** Track external URLs. */
          external_urls?: Record<string, string>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Pause Spotify playback on the targeted device or current active device. */
    "spotify.pause_playback": {
      input: {
        /**
         * Spotify device ID to target. When omitted, Spotify uses the active device.
         * @minLength 1
         */
        deviceId?: string;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Remove tracks or episodes from a Spotify playlist. */
    "spotify.remove_playlist_items": {
      input: {
        /**
         * Spotify playlist ID.
         * @minLength 1
         */
        playlistId: string;
        /**
         * Playlist items Spotify should remove.
         * @minItems 1
         * @maxItems 100
         */
        items: Array<{
          /**
           * Spotify URI of the playlist item to remove.
           * @minLength 1
           */
          uri: string;
          /**
           * Zero-based positions to remove for this URI when targeting specific occurrences.
           * @minItems 1
           */
          positions?: Array<number>;
        }>;
        /** Playlist snapshot identifier used to target a known version. */
        snapshotId?: string;
      };
      output: {
        /** Playlist snapshot identifier returned by Spotify. */
        snapshotId: string;
      };
    };
    /** Remove one or more Spotify audiobooks from the authenticated user's library. */
    "spotify.remove_user_s_saved_audiobooks": {
      input: {
        /**
         * Spotify audiobook IDs to remove.
         * @minItems 1
         * @maxItems 50
         */
        audiobookIds: Array<string>;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Remove one or more Spotify episodes from the authenticated user's library. */
    "spotify.remove_user_s_saved_episodes": {
      input: {
        /**
         * Spotify episode IDs to remove.
         * @minItems 1
         * @maxItems 50
         */
        episodeIds: Array<string>;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Remove one or more Spotify shows from the authenticated user's library. */
    "spotify.remove_user_s_saved_shows": {
      input: {
        /**
         * Spotify show IDs to remove.
         * @minItems 1
         * @maxItems 50
         */
        showIds: Array<string>;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Remove one or more Spotify tracks from the authenticated user's library. */
    "spotify.remove_user_s_saved_tracks": {
      input: {
        /**
         * Spotify track IDs to remove.
         * @minItems 1
         * @maxItems 50
         */
        trackIds: Array<string>;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Remove one or more Spotify albums from the authenticated user's library. */
    "spotify.remove_users_saved_albums": {
      input: {
        /**
         * Spotify album IDs to remove.
         * @minItems 1
         * @maxItems 50
         */
        albumIds: Array<string>;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Save one or more Spotify albums to the authenticated user's library. */
    "spotify.save_albums_for_current_user": {
      input: {
        /**
         * Spotify album IDs to save.
         * @minItems 1
         * @maxItems 50
         */
        albumIds: Array<string>;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Save one or more Spotify audiobooks to the authenticated user's library. */
    "spotify.save_audiobooks_for_current_user": {
      input: {
        /**
         * Spotify audiobook IDs to save.
         * @minItems 1
         * @maxItems 50
         */
        audiobookIds: Array<string>;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Save one or more Spotify episodes to the authenticated user's library. */
    "spotify.save_episodes_for_current_user": {
      input: {
        /**
         * Spotify episode IDs to save.
         * @minItems 1
         * @maxItems 50
         */
        episodeIds: Array<string>;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Save one or more Spotify shows to the authenticated user's library. */
    "spotify.save_shows_for_current_user": {
      input: {
        /**
         * Spotify show IDs to save.
         * @minItems 1
         * @maxItems 50
         */
        showIds: Array<string>;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Save one or more Spotify tracks to the authenticated user's library. */
    "spotify.save_tracks_for_current_user": {
      input: {
        /**
         * Spotify track IDs to save.
         * @minItems 1
         * @maxItems 50
         */
        trackIds?: Array<string>;
        /**
         * Timestamped Spotify track IDs to save.
         * @minItems 1
         * @maxItems 50
         */
        timestampedTrackIds?: Array<{
          /**
           * Spotify track ID to save.
           * @minLength 1
           */
          trackId: string;
          /**
           * ISO 8601 timestamp describing when Spotify should treat the item as added.
           * @minLength 1
           */
          addedAt: string;
        }>;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Search Spotify catalog content across one or more resource types with a keyword query. */
    "spotify.search_items": {
      input: {
        /**
         * Search query text.
         * @minLength 1
         */
        query: string;
        /**
         * Spotify resource types to search.
         * @minItems 1
         */
        types: Array<"album" | "artist" | "playlist" | "track" | "show" | "episode" | "audiobook">;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Zero-based index of the first item to return.
         * @minimum 0
         */
        offset?: number;
        /** An ISO 3166-1 alpha-2 country code or from_token to apply market filtering. */
        market?: "from_token" | string;
        /** Whether to include externally hosted audio results when supported. */
        includeExternalAudio?: boolean;
      };
      output: {
        /** Search query text that was sent to Spotify. */
        query: string;
        /** Spotify resource types requested in the search. */
        types: Array<"album" | "artist" | "playlist" | "track" | "show" | "episode" | "audiobook">;
        /** Album search results. */
        albums?: {
          /** Spotify API URL for this page. */
          href: string;
          /** Maximum number of items returned. */
          limit: number;
          /** URL for the next page when available. */
          next?: string | null;
          /** Zero-based index of the first returned item. */
          offset: number;
          /** URL for the previous page when available. */
          previous?: string | null;
          /** Total number of matched items. */
          total: number;
          /** Search results for this resource type. */
          items: Array<{
            /** Spotify resource ID. */
            id?: string;
            /** Spotify resource name. */
            name?: string;
            /** Spotify resource URI. */
            uri?: string;
            /** Spotify resource API URL. */
            href?: string;
            /** Spotify resource type. */
            type?: string;
            /** External URLs for the resource. */
            external_urls?: Record<string, string>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Artist search results. */
        artists?: {
          /** Spotify API URL for this page. */
          href: string;
          /** Maximum number of items returned. */
          limit: number;
          /** URL for the next page when available. */
          next?: string | null;
          /** Zero-based index of the first returned item. */
          offset: number;
          /** URL for the previous page when available. */
          previous?: string | null;
          /** Total number of matched items. */
          total: number;
          /** Search results for this resource type. */
          items: Array<{
            /** Spotify resource ID. */
            id?: string;
            /** Spotify resource name. */
            name?: string;
            /** Spotify resource URI. */
            uri?: string;
            /** Spotify resource API URL. */
            href?: string;
            /** Spotify resource type. */
            type?: string;
            /** External URLs for the resource. */
            external_urls?: Record<string, string>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Playlist search results. */
        playlists?: {
          /** Spotify API URL for this page. */
          href: string;
          /** Maximum number of items returned. */
          limit: number;
          /** URL for the next page when available. */
          next?: string | null;
          /** Zero-based index of the first returned item. */
          offset: number;
          /** URL for the previous page when available. */
          previous?: string | null;
          /** Total number of matched items. */
          total: number;
          /** Search results for this resource type. */
          items: Array<{
            /** Spotify resource ID. */
            id?: string;
            /** Spotify resource name. */
            name?: string;
            /** Spotify resource URI. */
            uri?: string;
            /** Spotify resource API URL. */
            href?: string;
            /** Spotify resource type. */
            type?: string;
            /** External URLs for the resource. */
            external_urls?: Record<string, string>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Track search results. */
        tracks?: {
          /** Spotify API URL for this page. */
          href: string;
          /** Maximum number of items returned. */
          limit: number;
          /** URL for the next page when available. */
          next?: string | null;
          /** Zero-based index of the first returned item. */
          offset: number;
          /** URL for the previous page when available. */
          previous?: string | null;
          /** Total number of matched items. */
          total: number;
          /** Search results for this resource type. */
          items: Array<{
            /** Spotify resource ID. */
            id?: string;
            /** Spotify resource name. */
            name?: string;
            /** Spotify resource URI. */
            uri?: string;
            /** Spotify resource API URL. */
            href?: string;
            /** Spotify resource type. */
            type?: string;
            /** External URLs for the resource. */
            external_urls?: Record<string, string>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Show search results. */
        shows?: {
          /** Spotify API URL for this page. */
          href: string;
          /** Maximum number of items returned. */
          limit: number;
          /** URL for the next page when available. */
          next?: string | null;
          /** Zero-based index of the first returned item. */
          offset: number;
          /** URL for the previous page when available. */
          previous?: string | null;
          /** Total number of matched items. */
          total: number;
          /** Search results for this resource type. */
          items: Array<{
            /** Spotify resource ID. */
            id?: string;
            /** Spotify resource name. */
            name?: string;
            /** Spotify resource URI. */
            uri?: string;
            /** Spotify resource API URL. */
            href?: string;
            /** Spotify resource type. */
            type?: string;
            /** External URLs for the resource. */
            external_urls?: Record<string, string>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Episode search results. */
        episodes?: {
          /** Spotify API URL for this page. */
          href: string;
          /** Maximum number of items returned. */
          limit: number;
          /** URL for the next page when available. */
          next?: string | null;
          /** Zero-based index of the first returned item. */
          offset: number;
          /** URL for the previous page when available. */
          previous?: string | null;
          /** Total number of matched items. */
          total: number;
          /** Search results for this resource type. */
          items: Array<{
            /** Spotify resource ID. */
            id?: string;
            /** Spotify resource name. */
            name?: string;
            /** Spotify resource URI. */
            uri?: string;
            /** Spotify resource API URL. */
            href?: string;
            /** Spotify resource type. */
            type?: string;
            /** External URLs for the resource. */
            external_urls?: Record<string, string>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Audiobook search results. */
        audiobooks?: {
          /** Spotify API URL for this page. */
          href: string;
          /** Maximum number of items returned. */
          limit: number;
          /** URL for the next page when available. */
          next?: string | null;
          /** Zero-based index of the first returned item. */
          offset: number;
          /** URL for the previous page when available. */
          previous?: string | null;
          /** Total number of matched items. */
          total: number;
          /** Search results for this resource type. */
          items: Array<{
            /** Spotify resource ID. */
            id?: string;
            /** Spotify resource name. */
            name?: string;
            /** Spotify resource URI. */
            uri?: string;
            /** Spotify resource API URL. */
            href?: string;
            /** Spotify resource type. */
            type?: string;
            /** External URLs for the resource. */
            external_urls?: Record<string, string>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Seek the currently playing Spotify item to the given playback position. */
    "spotify.seek_to_position": {
      input: {
        /**
         * Spotify device ID to target. When omitted, Spotify uses the active device.
         * @minLength 1
         */
        deviceId?: string;
        /**
         * Playback position in milliseconds.
         * @minimum 0
         */
        positionMs: number;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Set Spotify playback volume for the targeted playback device. */
    "spotify.set_playback_volume": {
      input: {
        /**
         * Spotify device ID to target. When omitted, Spotify uses the active device.
         * @minLength 1
         */
        deviceId?: string;
        /**
         * Playback volume percentage.
         * @minimum 0
         * @maximum 100
         */
        volumePercent: number;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Set Spotify repeat mode for the targeted playback device. */
    "spotify.set_repeat_mode": {
      input: {
        /**
         * Spotify device ID to target. When omitted, Spotify uses the active device.
         * @minLength 1
         */
        deviceId?: string;
        /** Spotify repeat mode. */
        state: "track" | "context" | "off";
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Skip to the next item in the Spotify playback queue. */
    "spotify.skip_to_next": {
      input: {
        /**
         * Spotify device ID to target. When omitted, Spotify uses the active device.
         * @minLength 1
         */
        deviceId?: string;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Skip to the previous item in the Spotify playback queue. */
    "spotify.skip_to_previous": {
      input: {
        /**
         * Spotify device ID to target. When omitted, Spotify uses the active device.
         * @minLength 1
         */
        deviceId?: string;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Start a new Spotify playback context or resume playback on the targeted device. */
    "spotify.start_resume_playback": {
      input: {
        /**
         * Spotify device ID to target. When omitted, Spotify uses the active device.
         * @minLength 1
         */
        deviceId?: string;
        /**
         * Spotify album, artist, or playlist URI to start.
         * @minLength 1
         */
        contextUri?: string;
        /**
         * Spotify URIs in the order Spotify should use.
         * @minItems 1
         * @maxItems 100
         */
        uris?: Array<string>;
        /** Offset within the selected context. */
        offset?: {
          /**
           * Zero-based index within the context.
           * @minimum 0
           */
          position?: number;
          /**
           * Spotify track URI to target within the context.
           * @minLength 1
           */
          uri?: string;
        };
        /**
         * Playback position in milliseconds.
         * @minimum 0
         */
        positionMs?: number;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Enable or disable Spotify playback shuffle on the targeted device. */
    "spotify.toggle_playback_shuffle": {
      input: {
        /**
         * Spotify device ID to target. When omitted, Spotify uses the active device.
         * @minLength 1
         */
        deviceId?: string;
        /** Whether shuffle should be enabled. */
        state: boolean;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Transfer Spotify playback to another available device. */
    "spotify.transfer_playback": {
      input: {
        /**
         * Single target Spotify device ID to transfer playback to.
         * @minItems 1
         * @maxItems 1
         */
        deviceIds: Array<string>;
        /** Whether playback should start on the new device. */
        play?: boolean;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Unfollow one or more Spotify artists or users on behalf of the authenticated user. */
    "spotify.unfollow_artists_or_users": {
      input: {
        /**
         * Spotify artist or user IDs.
         * @minItems 1
         * @maxItems 50
         */
        ids: Array<string>;
        /** Target resource type. */
        type: "artist" | "user";
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Unfollow a Spotify playlist on behalf of the authenticated user. */
    "spotify.unfollow_playlist": {
      input: {
        /**
         * Spotify playlist ID.
         * @minLength 1
         */
        playlistId: string;
      };
      output: {
        /** Whether the operation completed successfully. */
        success: boolean;
      };
    };
    /** Replace all items in a Spotify playlist or reorder an existing range of items. */
    "spotify.update_playlist_items": {
      input: {
        /**
         * Spotify playlist ID.
         * @minLength 1
         */
        playlistId: string;
        /**
         * Spotify URIs in the order Spotify should use.
         * @minItems 1
         * @maxItems 100
         */
        uris?: Array<string>;
        /**
         * Zero-based start index to move.
         * @minimum 0
         */
        rangeStart?: number;
        /**
         * Zero-based destination index before which Spotify inserts the moved range.
         * @minimum 0
         */
        insertBefore?: number;
        /**
         * Number of consecutive items Spotify should move.
         * @minimum 1
         */
        rangeLength?: number;
        /** Playlist snapshot identifier used for optimistic concurrency. */
        snapshotId?: string;
      };
      output: {
        /** Playlist snapshot identifier returned by Spotify. */
        snapshotId: string;
      };
    };
  }
}
