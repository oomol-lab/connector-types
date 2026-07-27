import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a GIPHY GIF by GIF Object id. This is not the random_id value. */
    "giphy.get_gif": {
      input: {
        /**
         * The GIF ID to retrieve.
         * @minLength 1
         */
        gifId: string;
        /** The random ID for personalization. */
        randomId?: string;
        /** The content rating filter. */
        rating?: string;
        /**
         * The two-letter country code.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /**
         * The region code.
         * @minLength 1
         */
        region?: string;
      };
      output: {
        /** The object type. */
        type?: string;
        /** The unique GIF identifier. */
        id: string;
        /** The GIF URL. */
        url?: string;
        /** The GIF slug. */
        slug?: string;
        /** The Bitly-shortened GIF URL. */
        bitly_gif_url?: string;
        /** The Bitly-shortened URL. */
        bitly_url?: string;
        /** The embeddable GIF URL. */
        embed_url?: string;
        /** The uploader username. */
        username?: string;
        /** The original source URL. */
        source?: string;
        /** The GIF title. */
        title?: string;
        /** The content rating. */
        rating?: string;
        /** The content URL. */
        content_url?: string;
        /** The top-level domain of the source. */
        source_tld?: string;
        /** The source post URL. */
        source_post_url?: string;
        /** The alternative text. */
        alt_text?: string;
        /** Whether the item is a sticker. */
        is_sticker?: number;
        /** The import timestamp. */
        import_datetime?: string;
        /** The trending timestamp. */
        trending_datetime?: string;
        /** The image rendition variants keyed by name. */
        images?: Record<string, {
            /** The image URL. */
            url?: string;
            /** The image width in pixels. */
            width?: string;
            /** The image height in pixels. */
            height?: string;
            /** The file size in bytes. */
            size?: string;
            /** The MP4 video URL. */
            mp4?: string;
            /** The MP4 file size in bytes. */
            mp4_size?: string;
            /** The WebP image URL. */
            webp?: string;
            /** The WebP file size in bytes. */
            webp_size?: string;
            /** The number of frames. */
            frames?: string;
            /** The image hash. */
            hash?: string;
            [key: string]: unknown;
          }>;
        /** The uploader profile. */
        user?: {
          /** The user avatar URL. */
          avatar_url?: string;
          /** The user banner URL. */
          banner_url?: string | null;
          /** The user profile URL. */
          profile_url?: string;
          /** The username. */
          username?: string;
          /** The display name. */
          display_name?: string;
          /** The user description. */
          description?: string | null;
          /** The user Instagram URL. */
          instagram_url?: string | null;
          /** The user website URL. */
          website_url?: string | null;
          /** Whether the user is verified. */
          is_verified?: boolean;
          [key: string]: unknown;
        };
        /** The analytics response payload. */
        analytics_response_payload?: string;
        /** The analytics data. */
        analytics?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Fetch a random GIPHY GIF, optionally filtered by tag. */
    "giphy.get_random_gif": {
      input: {
        /** The optional tag filter. */
        tag?: string;
        /** The random ID for personalization. */
        randomId?: string;
        /** The content rating filter. */
        rating?: string;
        /**
         * The two-letter country code.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /**
         * The region code.
         * @minLength 1
         */
        region?: string;
      };
      output: {
        /** The object type. */
        type?: string;
        /** The unique GIF identifier. */
        id: string;
        /** The GIF URL. */
        url?: string;
        /** The GIF slug. */
        slug?: string;
        /** The Bitly-shortened GIF URL. */
        bitly_gif_url?: string;
        /** The Bitly-shortened URL. */
        bitly_url?: string;
        /** The embeddable GIF URL. */
        embed_url?: string;
        /** The uploader username. */
        username?: string;
        /** The original source URL. */
        source?: string;
        /** The GIF title. */
        title?: string;
        /** The content rating. */
        rating?: string;
        /** The content URL. */
        content_url?: string;
        /** The top-level domain of the source. */
        source_tld?: string;
        /** The source post URL. */
        source_post_url?: string;
        /** The alternative text. */
        alt_text?: string;
        /** Whether the item is a sticker. */
        is_sticker?: number;
        /** The import timestamp. */
        import_datetime?: string;
        /** The trending timestamp. */
        trending_datetime?: string;
        /** The image rendition variants keyed by name. */
        images?: Record<string, {
            /** The image URL. */
            url?: string;
            /** The image width in pixels. */
            width?: string;
            /** The image height in pixels. */
            height?: string;
            /** The file size in bytes. */
            size?: string;
            /** The MP4 video URL. */
            mp4?: string;
            /** The MP4 file size in bytes. */
            mp4_size?: string;
            /** The WebP image URL. */
            webp?: string;
            /** The WebP file size in bytes. */
            webp_size?: string;
            /** The number of frames. */
            frames?: string;
            /** The image hash. */
            hash?: string;
            [key: string]: unknown;
          }>;
        /** The uploader profile. */
        user?: {
          /** The user avatar URL. */
          avatar_url?: string;
          /** The user banner URL. */
          banner_url?: string | null;
          /** The user profile URL. */
          profile_url?: string;
          /** The username. */
          username?: string;
          /** The display name. */
          display_name?: string;
          /** The user description. */
          description?: string | null;
          /** The user Instagram URL. */
          instagram_url?: string | null;
          /** The user website URL. */
          website_url?: string | null;
          /** Whether the user is verified. */
          is_verified?: boolean;
          [key: string]: unknown;
        };
        /** The analytics response payload. */
        analytics_response_payload?: string;
        /** The analytics data. */
        analytics?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a GIPHY random_id value for personalization across requests. */
    "giphy.get_random_id": {
      input: Record<string, never>;
      output: {
        /** The generated random ID for personalization. */
        randomId: string;
      };
    };
    /** Fetch a random GIPHY sticker, optionally filtered by tag. */
    "giphy.get_random_sticker": {
      input: {
        /** The optional tag filter. */
        tag?: string;
        /** The content rating filter. */
        rating?: string;
        /**
         * The two-letter country code.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /**
         * The region code.
         * @minLength 1
         */
        region?: string;
        /** The random ID for personalization. */
        randomId?: string;
      };
      output: {
        /** The object type. */
        type?: string;
        /** The unique GIF identifier. */
        id: string;
        /** The GIF URL. */
        url?: string;
        /** The GIF slug. */
        slug?: string;
        /** The Bitly-shortened GIF URL. */
        bitly_gif_url?: string;
        /** The Bitly-shortened URL. */
        bitly_url?: string;
        /** The embeddable GIF URL. */
        embed_url?: string;
        /** The uploader username. */
        username?: string;
        /** The original source URL. */
        source?: string;
        /** The GIF title. */
        title?: string;
        /** The content rating. */
        rating?: string;
        /** The content URL. */
        content_url?: string;
        /** The top-level domain of the source. */
        source_tld?: string;
        /** The source post URL. */
        source_post_url?: string;
        /** The alternative text. */
        alt_text?: string;
        /** Whether the item is a sticker. */
        is_sticker?: number;
        /** The import timestamp. */
        import_datetime?: string;
        /** The trending timestamp. */
        trending_datetime?: string;
        /** The image rendition variants keyed by name. */
        images?: Record<string, {
            /** The image URL. */
            url?: string;
            /** The image width in pixels. */
            width?: string;
            /** The image height in pixels. */
            height?: string;
            /** The file size in bytes. */
            size?: string;
            /** The MP4 video URL. */
            mp4?: string;
            /** The MP4 file size in bytes. */
            mp4_size?: string;
            /** The WebP image URL. */
            webp?: string;
            /** The WebP file size in bytes. */
            webp_size?: string;
            /** The number of frames. */
            frames?: string;
            /** The image hash. */
            hash?: string;
            [key: string]: unknown;
          }>;
        /** The uploader profile. */
        user?: {
          /** The user avatar URL. */
          avatar_url?: string;
          /** The user banner URL. */
          banner_url?: string | null;
          /** The user profile URL. */
          profile_url?: string;
          /** The username. */
          username?: string;
          /** The display name. */
          display_name?: string;
          /** The user description. */
          description?: string | null;
          /** The user Instagram URL. */
          instagram_url?: string | null;
          /** The user website URL. */
          website_url?: string | null;
          /** Whether the user is verified. */
          is_verified?: boolean;
          [key: string]: unknown;
        };
        /** The analytics response payload. */
        analytics_response_payload?: string;
        /** The analytics data. */
        analytics?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List GIPHY content categories. */
    "giphy.list_categories": {
      input: Record<string, never>;
      output: {
        /** The list of categories. */
        categories: Array<{
          /** The category name. */
          name: string;
          /** The URL-encoded category name. */
          name_encoded: string;
          /** The subcategories within this category. */
          subcategories: Array<{
            /** The subcategory name. */
            name: string;
            /** The URL-encoded subcategory name. */
            name_encoded: string;
            /** The representative GIF for the subcategory. */
            gif?: {
              /** The object type. */
              type?: string;
              /** The unique GIF identifier. */
              id: string;
              /** The GIF URL. */
              url?: string;
              /** The GIF slug. */
              slug?: string;
              /** The Bitly-shortened GIF URL. */
              bitly_gif_url?: string;
              /** The Bitly-shortened URL. */
              bitly_url?: string;
              /** The embeddable GIF URL. */
              embed_url?: string;
              /** The uploader username. */
              username?: string;
              /** The original source URL. */
              source?: string;
              /** The GIF title. */
              title?: string;
              /** The content rating. */
              rating?: string;
              /** The content URL. */
              content_url?: string;
              /** The top-level domain of the source. */
              source_tld?: string;
              /** The source post URL. */
              source_post_url?: string;
              /** The alternative text. */
              alt_text?: string;
              /** Whether the item is a sticker. */
              is_sticker?: number;
              /** The import timestamp. */
              import_datetime?: string;
              /** The trending timestamp. */
              trending_datetime?: string;
              /** The image rendition variants keyed by name. */
              images?: Record<string, {
                  /** The image URL. */
                  url?: string;
                  /** The image width in pixels. */
                  width?: string;
                  /** The image height in pixels. */
                  height?: string;
                  /** The file size in bytes. */
                  size?: string;
                  /** The MP4 video URL. */
                  mp4?: string;
                  /** The MP4 file size in bytes. */
                  mp4_size?: string;
                  /** The WebP image URL. */
                  webp?: string;
                  /** The WebP file size in bytes. */
                  webp_size?: string;
                  /** The number of frames. */
                  frames?: string;
                  /** The image hash. */
                  hash?: string;
                  [key: string]: unknown;
                }>;
              /** The uploader profile. */
              user?: {
                /** The user avatar URL. */
                avatar_url?: string;
                /** The user banner URL. */
                banner_url?: string | null;
                /** The user profile URL. */
                profile_url?: string;
                /** The username. */
                username?: string;
                /** The display name. */
                display_name?: string;
                /** The user description. */
                description?: string | null;
                /** The user Instagram URL. */
                instagram_url?: string | null;
                /** The user website URL. */
                website_url?: string | null;
                /** Whether the user is verified. */
                is_verified?: boolean;
                [key: string]: unknown;
              };
              /** The analytics response payload. */
              analytics_response_payload?: string;
              /** The analytics data. */
              analytics?: Record<string, unknown>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** The representative GIF for the category. */
          gif: {
            /** The object type. */
            type?: string;
            /** The unique GIF identifier. */
            id: string;
            /** The GIF URL. */
            url?: string;
            /** The GIF slug. */
            slug?: string;
            /** The Bitly-shortened GIF URL. */
            bitly_gif_url?: string;
            /** The Bitly-shortened URL. */
            bitly_url?: string;
            /** The embeddable GIF URL. */
            embed_url?: string;
            /** The uploader username. */
            username?: string;
            /** The original source URL. */
            source?: string;
            /** The GIF title. */
            title?: string;
            /** The content rating. */
            rating?: string;
            /** The content URL. */
            content_url?: string;
            /** The top-level domain of the source. */
            source_tld?: string;
            /** The source post URL. */
            source_post_url?: string;
            /** The alternative text. */
            alt_text?: string;
            /** Whether the item is a sticker. */
            is_sticker?: number;
            /** The import timestamp. */
            import_datetime?: string;
            /** The trending timestamp. */
            trending_datetime?: string;
            /** The image rendition variants keyed by name. */
            images?: Record<string, {
                /** The image URL. */
                url?: string;
                /** The image width in pixels. */
                width?: string;
                /** The image height in pixels. */
                height?: string;
                /** The file size in bytes. */
                size?: string;
                /** The MP4 video URL. */
                mp4?: string;
                /** The MP4 file size in bytes. */
                mp4_size?: string;
                /** The WebP image URL. */
                webp?: string;
                /** The WebP file size in bytes. */
                webp_size?: string;
                /** The number of frames. */
                frames?: string;
                /** The image hash. */
                hash?: string;
                [key: string]: unknown;
              }>;
            /** The uploader profile. */
            user?: {
              /** The user avatar URL. */
              avatar_url?: string;
              /** The user banner URL. */
              banner_url?: string | null;
              /** The user profile URL. */
              profile_url?: string;
              /** The username. */
              username?: string;
              /** The display name. */
              display_name?: string;
              /** The user description. */
              description?: string | null;
              /** The user Instagram URL. */
              instagram_url?: string | null;
              /** The user website URL. */
              website_url?: string | null;
              /** Whether the user is verified. */
              is_verified?: boolean;
              [key: string]: unknown;
            };
            /** The analytics response payload. */
            analytics_response_payload?: string;
            /** The analytics data. */
            analytics?: Record<string, unknown>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The GIPHY pagination metadata. */
        pagination: {
          /** The total number of results. */
          total_count?: number;
          /** The number of results in the current page. */
          count: number;
          /** The current offset in the result set. */
          offset: number;
        };
      };
    };
    /** Fetch multiple GIPHY GIFs by id. */
    "giphy.list_gifs_by_ids": {
      input: {
        /**
         * The list of GIF IDs to fetch.
         * @minItems 1
         */
        gifIds: Array<string>;
        /** The random ID for personalization. */
        randomId?: string;
        /** The content rating filter. */
        rating?: string;
        /**
         * The two-letter country code.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /**
         * The region code.
         * @minLength 1
         */
        region?: string;
      };
      output: {
        /** The matching GIFs. */
        gifs: Array<{
          /** The object type. */
          type?: string;
          /** The unique GIF identifier. */
          id: string;
          /** The GIF URL. */
          url?: string;
          /** The GIF slug. */
          slug?: string;
          /** The Bitly-shortened GIF URL. */
          bitly_gif_url?: string;
          /** The Bitly-shortened URL. */
          bitly_url?: string;
          /** The embeddable GIF URL. */
          embed_url?: string;
          /** The uploader username. */
          username?: string;
          /** The original source URL. */
          source?: string;
          /** The GIF title. */
          title?: string;
          /** The content rating. */
          rating?: string;
          /** The content URL. */
          content_url?: string;
          /** The top-level domain of the source. */
          source_tld?: string;
          /** The source post URL. */
          source_post_url?: string;
          /** The alternative text. */
          alt_text?: string;
          /** Whether the item is a sticker. */
          is_sticker?: number;
          /** The import timestamp. */
          import_datetime?: string;
          /** The trending timestamp. */
          trending_datetime?: string;
          /** The image rendition variants keyed by name. */
          images?: Record<string, {
              /** The image URL. */
              url?: string;
              /** The image width in pixels. */
              width?: string;
              /** The image height in pixels. */
              height?: string;
              /** The file size in bytes. */
              size?: string;
              /** The MP4 video URL. */
              mp4?: string;
              /** The MP4 file size in bytes. */
              mp4_size?: string;
              /** The WebP image URL. */
              webp?: string;
              /** The WebP file size in bytes. */
              webp_size?: string;
              /** The number of frames. */
              frames?: string;
              /** The image hash. */
              hash?: string;
              [key: string]: unknown;
            }>;
          /** The uploader profile. */
          user?: {
            /** The user avatar URL. */
            avatar_url?: string;
            /** The user banner URL. */
            banner_url?: string | null;
            /** The user profile URL. */
            profile_url?: string;
            /** The username. */
            username?: string;
            /** The display name. */
            display_name?: string;
            /** The user description. */
            description?: string | null;
            /** The user Instagram URL. */
            instagram_url?: string | null;
            /** The user website URL. */
            website_url?: string | null;
            /** Whether the user is verified. */
            is_verified?: boolean;
            [key: string]: unknown;
          };
          /** The analytics response payload. */
          analytics_response_payload?: string;
          /** The analytics data. */
          analytics?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List GIPHY tags related to a term. */
    "giphy.list_related_tags": {
      input: {
        /**
         * The term to find related tags for.
         * @minLength 1
         */
        term: string;
      };
      output: {
        /** The related tags. */
        tags: Array<{
          /** The tag or term name. */
          name: string;
        }>;
      };
    };
    /** List trending GIPHY GIFs. */
    "giphy.list_trending_gifs": {
      input: {
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * The offset in the result set.
         * @minimum 0
         */
        offset?: number;
        /** The rendition bundle to include. */
        bundle?: string;
        /** Whether to remove low-contrast results. */
        removeLowContrast?: boolean;
        /** The content rating filter. */
        rating?: string;
        /**
         * The two-letter country code.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /**
         * The region code.
         * @minLength 1
         */
        region?: string;
      };
      output: {
        /** The trending GIFs. */
        gifs: Array<{
          /** The object type. */
          type?: string;
          /** The unique GIF identifier. */
          id: string;
          /** The GIF URL. */
          url?: string;
          /** The GIF slug. */
          slug?: string;
          /** The Bitly-shortened GIF URL. */
          bitly_gif_url?: string;
          /** The Bitly-shortened URL. */
          bitly_url?: string;
          /** The embeddable GIF URL. */
          embed_url?: string;
          /** The uploader username. */
          username?: string;
          /** The original source URL. */
          source?: string;
          /** The GIF title. */
          title?: string;
          /** The content rating. */
          rating?: string;
          /** The content URL. */
          content_url?: string;
          /** The top-level domain of the source. */
          source_tld?: string;
          /** The source post URL. */
          source_post_url?: string;
          /** The alternative text. */
          alt_text?: string;
          /** Whether the item is a sticker. */
          is_sticker?: number;
          /** The import timestamp. */
          import_datetime?: string;
          /** The trending timestamp. */
          trending_datetime?: string;
          /** The image rendition variants keyed by name. */
          images?: Record<string, {
              /** The image URL. */
              url?: string;
              /** The image width in pixels. */
              width?: string;
              /** The image height in pixels. */
              height?: string;
              /** The file size in bytes. */
              size?: string;
              /** The MP4 video URL. */
              mp4?: string;
              /** The MP4 file size in bytes. */
              mp4_size?: string;
              /** The WebP image URL. */
              webp?: string;
              /** The WebP file size in bytes. */
              webp_size?: string;
              /** The number of frames. */
              frames?: string;
              /** The image hash. */
              hash?: string;
              [key: string]: unknown;
            }>;
          /** The uploader profile. */
          user?: {
            /** The user avatar URL. */
            avatar_url?: string;
            /** The user banner URL. */
            banner_url?: string | null;
            /** The user profile URL. */
            profile_url?: string;
            /** The username. */
            username?: string;
            /** The display name. */
            display_name?: string;
            /** The user description. */
            description?: string | null;
            /** The user Instagram URL. */
            instagram_url?: string | null;
            /** The user website URL. */
            website_url?: string | null;
            /** Whether the user is verified. */
            is_verified?: boolean;
            [key: string]: unknown;
          };
          /** The analytics response payload. */
          analytics_response_payload?: string;
          /** The analytics data. */
          analytics?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The GIPHY pagination metadata. */
        pagination: {
          /** The total number of results. */
          total_count?: number;
          /** The number of results in the current page. */
          count: number;
          /** The current offset in the result set. */
          offset: number;
        };
      };
    };
    /** List trending GIPHY stickers. */
    "giphy.list_trending_stickers": {
      input: {
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * The offset in the result set.
         * @minimum 0
         */
        offset?: number;
        /** The rendition bundle to include. */
        bundle?: string;
        /** Whether to remove low-contrast results. */
        removeLowContrast?: boolean;
        /** The random ID for personalization. */
        randomId?: string;
        /** The content rating filter. */
        rating?: string;
        /**
         * The two-letter country code.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /**
         * The region code.
         * @minLength 1
         */
        region?: string;
      };
      output: {
        /** The trending stickers. */
        stickers: Array<{
          /** The object type. */
          type?: string;
          /** The unique GIF identifier. */
          id: string;
          /** The GIF URL. */
          url?: string;
          /** The GIF slug. */
          slug?: string;
          /** The Bitly-shortened GIF URL. */
          bitly_gif_url?: string;
          /** The Bitly-shortened URL. */
          bitly_url?: string;
          /** The embeddable GIF URL. */
          embed_url?: string;
          /** The uploader username. */
          username?: string;
          /** The original source URL. */
          source?: string;
          /** The GIF title. */
          title?: string;
          /** The content rating. */
          rating?: string;
          /** The content URL. */
          content_url?: string;
          /** The top-level domain of the source. */
          source_tld?: string;
          /** The source post URL. */
          source_post_url?: string;
          /** The alternative text. */
          alt_text?: string;
          /** Whether the item is a sticker. */
          is_sticker?: number;
          /** The import timestamp. */
          import_datetime?: string;
          /** The trending timestamp. */
          trending_datetime?: string;
          /** The image rendition variants keyed by name. */
          images?: Record<string, {
              /** The image URL. */
              url?: string;
              /** The image width in pixels. */
              width?: string;
              /** The image height in pixels. */
              height?: string;
              /** The file size in bytes. */
              size?: string;
              /** The MP4 video URL. */
              mp4?: string;
              /** The MP4 file size in bytes. */
              mp4_size?: string;
              /** The WebP image URL. */
              webp?: string;
              /** The WebP file size in bytes. */
              webp_size?: string;
              /** The number of frames. */
              frames?: string;
              /** The image hash. */
              hash?: string;
              [key: string]: unknown;
            }>;
          /** The uploader profile. */
          user?: {
            /** The user avatar URL. */
            avatar_url?: string;
            /** The user banner URL. */
            banner_url?: string | null;
            /** The user profile URL. */
            profile_url?: string;
            /** The username. */
            username?: string;
            /** The display name. */
            display_name?: string;
            /** The user description. */
            description?: string | null;
            /** The user Instagram URL. */
            instagram_url?: string | null;
            /** The user website URL. */
            website_url?: string | null;
            /** Whether the user is verified. */
            is_verified?: boolean;
            [key: string]: unknown;
          };
          /** The analytics response payload. */
          analytics_response_payload?: string;
          /** The analytics data. */
          analytics?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The GIPHY pagination metadata. */
        pagination: {
          /** The total number of results. */
          total_count?: number;
          /** The number of results in the current page. */
          count: number;
          /** The current offset in the result set. */
          offset: number;
        };
      };
    };
    /** List trending search terms on GIPHY. */
    "giphy.list_trending_tags": {
      input: Record<string, never>;
      output: {
        /** The list of trending tags. */
        tags: Array<string>;
      };
    };
    /** Search GIPHY GIFs by query text. */
    "giphy.search_gifs": {
      input: {
        /**
         * The search query text.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * The offset in the result set.
         * @minimum 0
         */
        offset?: number;
        /** The language code for results. */
        lang?: string;
        /** The rendition bundle to include. */
        bundle?: string;
        /** Whether to remove low-contrast results. */
        removeLowContrast?: boolean;
        /** The random ID for personalization. */
        randomId?: string;
        /** The content rating filter. */
        rating?: string;
        /**
         * The two-letter country code.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /**
         * The region code.
         * @minLength 1
         */
        region?: string;
      };
      output: {
        /** The matching GIFs. */
        gifs: Array<{
          /** The object type. */
          type?: string;
          /** The unique GIF identifier. */
          id: string;
          /** The GIF URL. */
          url?: string;
          /** The GIF slug. */
          slug?: string;
          /** The Bitly-shortened GIF URL. */
          bitly_gif_url?: string;
          /** The Bitly-shortened URL. */
          bitly_url?: string;
          /** The embeddable GIF URL. */
          embed_url?: string;
          /** The uploader username. */
          username?: string;
          /** The original source URL. */
          source?: string;
          /** The GIF title. */
          title?: string;
          /** The content rating. */
          rating?: string;
          /** The content URL. */
          content_url?: string;
          /** The top-level domain of the source. */
          source_tld?: string;
          /** The source post URL. */
          source_post_url?: string;
          /** The alternative text. */
          alt_text?: string;
          /** Whether the item is a sticker. */
          is_sticker?: number;
          /** The import timestamp. */
          import_datetime?: string;
          /** The trending timestamp. */
          trending_datetime?: string;
          /** The image rendition variants keyed by name. */
          images?: Record<string, {
              /** The image URL. */
              url?: string;
              /** The image width in pixels. */
              width?: string;
              /** The image height in pixels. */
              height?: string;
              /** The file size in bytes. */
              size?: string;
              /** The MP4 video URL. */
              mp4?: string;
              /** The MP4 file size in bytes. */
              mp4_size?: string;
              /** The WebP image URL. */
              webp?: string;
              /** The WebP file size in bytes. */
              webp_size?: string;
              /** The number of frames. */
              frames?: string;
              /** The image hash. */
              hash?: string;
              [key: string]: unknown;
            }>;
          /** The uploader profile. */
          user?: {
            /** The user avatar URL. */
            avatar_url?: string;
            /** The user banner URL. */
            banner_url?: string | null;
            /** The user profile URL. */
            profile_url?: string;
            /** The username. */
            username?: string;
            /** The display name. */
            display_name?: string;
            /** The user description. */
            description?: string | null;
            /** The user Instagram URL. */
            instagram_url?: string | null;
            /** The user website URL. */
            website_url?: string | null;
            /** Whether the user is verified. */
            is_verified?: boolean;
            [key: string]: unknown;
          };
          /** The analytics response payload. */
          analytics_response_payload?: string;
          /** The analytics data. */
          analytics?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The GIPHY pagination metadata. */
        pagination: {
          /** The total number of results. */
          total_count?: number;
          /** The number of results in the current page. */
          count: number;
          /** The current offset in the result set. */
          offset: number;
        };
      };
    };
    /** Search GIPHY stickers by query text. */
    "giphy.search_stickers": {
      input: {
        /**
         * The search query text.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * The offset in the result set.
         * @minimum 0
         */
        offset?: number;
        /** The language code for results. */
        lang?: string;
        /** The rendition bundle to include. */
        bundle?: string;
        /** Whether to remove low-contrast results. */
        removeLowContrast?: boolean;
        /** The random ID for personalization. */
        randomId?: string;
        /** The content rating filter. */
        rating?: string;
        /**
         * The two-letter country code.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /**
         * The region code.
         * @minLength 1
         */
        region?: string;
      };
      output: {
        /** The matching stickers. */
        stickers: Array<{
          /** The object type. */
          type?: string;
          /** The unique GIF identifier. */
          id: string;
          /** The GIF URL. */
          url?: string;
          /** The GIF slug. */
          slug?: string;
          /** The Bitly-shortened GIF URL. */
          bitly_gif_url?: string;
          /** The Bitly-shortened URL. */
          bitly_url?: string;
          /** The embeddable GIF URL. */
          embed_url?: string;
          /** The uploader username. */
          username?: string;
          /** The original source URL. */
          source?: string;
          /** The GIF title. */
          title?: string;
          /** The content rating. */
          rating?: string;
          /** The content URL. */
          content_url?: string;
          /** The top-level domain of the source. */
          source_tld?: string;
          /** The source post URL. */
          source_post_url?: string;
          /** The alternative text. */
          alt_text?: string;
          /** Whether the item is a sticker. */
          is_sticker?: number;
          /** The import timestamp. */
          import_datetime?: string;
          /** The trending timestamp. */
          trending_datetime?: string;
          /** The image rendition variants keyed by name. */
          images?: Record<string, {
              /** The image URL. */
              url?: string;
              /** The image width in pixels. */
              width?: string;
              /** The image height in pixels. */
              height?: string;
              /** The file size in bytes. */
              size?: string;
              /** The MP4 video URL. */
              mp4?: string;
              /** The MP4 file size in bytes. */
              mp4_size?: string;
              /** The WebP image URL. */
              webp?: string;
              /** The WebP file size in bytes. */
              webp_size?: string;
              /** The number of frames. */
              frames?: string;
              /** The image hash. */
              hash?: string;
              [key: string]: unknown;
            }>;
          /** The uploader profile. */
          user?: {
            /** The user avatar URL. */
            avatar_url?: string;
            /** The user banner URL. */
            banner_url?: string | null;
            /** The user profile URL. */
            profile_url?: string;
            /** The username. */
            username?: string;
            /** The display name. */
            display_name?: string;
            /** The user description. */
            description?: string | null;
            /** The user Instagram URL. */
            instagram_url?: string | null;
            /** The user website URL. */
            website_url?: string | null;
            /** Whether the user is verified. */
            is_verified?: boolean;
            [key: string]: unknown;
          };
          /** The analytics response payload. */
          analytics_response_payload?: string;
          /** The analytics data. */
          analytics?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The GIPHY pagination metadata. */
        pagination: {
          /** The total number of results. */
          total_count?: number;
          /** The number of results in the current page. */
          count: number;
          /** The current offset in the result set. */
          offset: number;
        };
      };
    };
    /** Autocomplete GIPHY tags for a partial query. */
    "giphy.search_tags": {
      input: {
        /**
         * The partial search query.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of tag suggestions.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * The offset in the result set.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The matching tag suggestions. */
        tags: Array<{
          /** The tag or term name. */
          name: string;
        }>;
      };
    };
    /** Translate a phrase into a single best-match GIPHY GIF. */
    "giphy.translate_gif": {
      input: {
        /**
         * The phrase to translate.
         * @minLength 1
         */
        query: string;
        /**
         * The weirdness factor for results.
         * @minimum 0
         * @maximum 10
         */
        weirdness?: number;
        /** The content rating filter. */
        rating?: string;
        /**
         * The two-letter country code.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /**
         * The region code.
         * @minLength 1
         */
        region?: string;
      };
      output: {
        /** The object type. */
        type?: string;
        /** The unique GIF identifier. */
        id: string;
        /** The GIF URL. */
        url?: string;
        /** The GIF slug. */
        slug?: string;
        /** The Bitly-shortened GIF URL. */
        bitly_gif_url?: string;
        /** The Bitly-shortened URL. */
        bitly_url?: string;
        /** The embeddable GIF URL. */
        embed_url?: string;
        /** The uploader username. */
        username?: string;
        /** The original source URL. */
        source?: string;
        /** The GIF title. */
        title?: string;
        /** The content rating. */
        rating?: string;
        /** The content URL. */
        content_url?: string;
        /** The top-level domain of the source. */
        source_tld?: string;
        /** The source post URL. */
        source_post_url?: string;
        /** The alternative text. */
        alt_text?: string;
        /** Whether the item is a sticker. */
        is_sticker?: number;
        /** The import timestamp. */
        import_datetime?: string;
        /** The trending timestamp. */
        trending_datetime?: string;
        /** The image rendition variants keyed by name. */
        images?: Record<string, {
            /** The image URL. */
            url?: string;
            /** The image width in pixels. */
            width?: string;
            /** The image height in pixels. */
            height?: string;
            /** The file size in bytes. */
            size?: string;
            /** The MP4 video URL. */
            mp4?: string;
            /** The MP4 file size in bytes. */
            mp4_size?: string;
            /** The WebP image URL. */
            webp?: string;
            /** The WebP file size in bytes. */
            webp_size?: string;
            /** The number of frames. */
            frames?: string;
            /** The image hash. */
            hash?: string;
            [key: string]: unknown;
          }>;
        /** The uploader profile. */
        user?: {
          /** The user avatar URL. */
          avatar_url?: string;
          /** The user banner URL. */
          banner_url?: string | null;
          /** The user profile URL. */
          profile_url?: string;
          /** The username. */
          username?: string;
          /** The display name. */
          display_name?: string;
          /** The user description. */
          description?: string | null;
          /** The user Instagram URL. */
          instagram_url?: string | null;
          /** The user website URL. */
          website_url?: string | null;
          /** Whether the user is verified. */
          is_verified?: boolean;
          [key: string]: unknown;
        };
        /** The analytics response payload. */
        analytics_response_payload?: string;
        /** The analytics data. */
        analytics?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Translate a phrase into a single best-match GIPHY sticker. */
    "giphy.translate_sticker": {
      input: {
        /**
         * The phrase to translate.
         * @minLength 1
         */
        query: string;
        /** The content rating filter. */
        rating?: string;
        /**
         * The two-letter country code.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /**
         * The region code.
         * @minLength 1
         */
        region?: string;
        /** The random ID for personalization. */
        randomId?: string;
      };
      output: {
        /** The object type. */
        type?: string;
        /** The unique GIF identifier. */
        id: string;
        /** The GIF URL. */
        url?: string;
        /** The GIF slug. */
        slug?: string;
        /** The Bitly-shortened GIF URL. */
        bitly_gif_url?: string;
        /** The Bitly-shortened URL. */
        bitly_url?: string;
        /** The embeddable GIF URL. */
        embed_url?: string;
        /** The uploader username. */
        username?: string;
        /** The original source URL. */
        source?: string;
        /** The GIF title. */
        title?: string;
        /** The content rating. */
        rating?: string;
        /** The content URL. */
        content_url?: string;
        /** The top-level domain of the source. */
        source_tld?: string;
        /** The source post URL. */
        source_post_url?: string;
        /** The alternative text. */
        alt_text?: string;
        /** Whether the item is a sticker. */
        is_sticker?: number;
        /** The import timestamp. */
        import_datetime?: string;
        /** The trending timestamp. */
        trending_datetime?: string;
        /** The image rendition variants keyed by name. */
        images?: Record<string, {
            /** The image URL. */
            url?: string;
            /** The image width in pixels. */
            width?: string;
            /** The image height in pixels. */
            height?: string;
            /** The file size in bytes. */
            size?: string;
            /** The MP4 video URL. */
            mp4?: string;
            /** The MP4 file size in bytes. */
            mp4_size?: string;
            /** The WebP image URL. */
            webp?: string;
            /** The WebP file size in bytes. */
            webp_size?: string;
            /** The number of frames. */
            frames?: string;
            /** The image hash. */
            hash?: string;
            [key: string]: unknown;
          }>;
        /** The uploader profile. */
        user?: {
          /** The user avatar URL. */
          avatar_url?: string;
          /** The user banner URL. */
          banner_url?: string | null;
          /** The user profile URL. */
          profile_url?: string;
          /** The username. */
          username?: string;
          /** The display name. */
          display_name?: string;
          /** The user description. */
          description?: string | null;
          /** The user Instagram URL. */
          instagram_url?: string | null;
          /** The user website URL. */
          website_url?: string | null;
          /** Whether the user is verified. */
          is_verified?: boolean;
          [key: string]: unknown;
        };
        /** The analytics response payload. */
        analytics_response_payload?: string;
        /** The analytics data. */
        analytics?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
