import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the photo and video items inside a Pexels collection, with optional type and sort filters. */
    "pexels.collection_media": {
      input: {
        /**
         * The unique identifier of the collection to inspect.
         * @minLength 1
         */
        collectionId: string;
        /**
         * The 1-based page number to retrieve from the Pexels API.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of results to return per page, between 1 and 80.
         * @minimum 1
         * @maximum 80
         */
        perPage?: number;
        /**
         * The media type filter to apply inside the collection. Supported values are photos and videos. If omitted or invalid, Pexels returns all media types.
         * @minLength 1
         */
        type?: string;
        /** The sort direction to apply to collection media results. */
        sort?: "asc" | "desc";
      };
      output: {
        /** The unique identifier of the collection returned by Pexels. */
        id: string;
        /** The current page number returned by Pexels. */
        page: number;
        /** The number of media items returned per page. */
        perPage: number;
        /** The total number of matching media items. */
        totalResults: number;
        /** The mixed photo and video items returned by the collection. */
        media: Array<{
          /** The unique identifier of the photo. */
          id: number;
          /** The width of the photo in pixels. */
          width: number;
          /** The height of the photo in pixels. */
          height: number;
          /** The URL of the photo page on Pexels. */
          url: string;
          /** The display name of the photographer. */
          photographer: string;
          /** The URL of the photographer profile on Pexels. */
          photographerUrl: string;
          /** The unique identifier of the photographer. */
          photographerId: number;
          /** The average color of the photo in hexadecimal format when Pexels provides it. */
          avgColor?: string;
          /** The URLs for the photo in multiple sizes. */
          src: {
            /** The URL of the original photo. */
            original: string;
            /** The URL of the 2x large photo. */
            large2x: string;
            /** The URL of the large photo. */
            large: string;
            /** The URL of the medium photo. */
            medium: string;
            /** The URL of the small photo. */
            small: string;
            /** The URL of the portrait-oriented photo. */
            portrait: string;
            /** The URL of the landscape-oriented photo. */
            landscape: string;
            /** The URL of the tiny photo. */
            tiny: string;
          };
          /** Whether the authenticated account liked the photo. */
          liked?: boolean;
          /** The alternative text description of the photo. */
          alt?: string;
          /** The media type marker returned by the collection API. */
          type: "Photo";
        } | {
          /** The unique identifier of the video. */
          id: number;
          /** The width of the video in pixels. */
          width: number;
          /** The height of the video in pixels. */
          height: number;
          /** The duration of the video in seconds. */
          duration: number;
          /** The URL of the video page on Pexels. */
          url: string;
          /** The thumbnail URL of the video. */
          image: string;
          /** The full-resolution identifier or URL when Pexels provides it. */
          fullRes?: string | null;
          /** The average color of the video thumbnail in hexadecimal format. */
          avgColor?: string | null;
          /** The tags attached to the video. */
          tags: Array<string>;
          /** The author metadata for the video. */
          user: {
            /** The unique identifier of the video author. */
            id: number;
            /** The display name of the video author. */
            name: string;
            /** The URL of the video author profile on Pexels. */
            url: string;
          };
          /** The downloadable video file variants returned by Pexels. */
          videoFiles: Array<{
            /** The unique identifier of the video file variant. */
            id: number;
            /** The quality label assigned to the video file variant. */
            quality: string;
            /** The MIME type of the video file variant. */
            fileType: string;
            /** The width of the video file variant in pixels when Pexels provides it. */
            width?: number | null;
            /** The height of the video file variant in pixels when Pexels provides it. */
            height?: number | null;
            /** The frame rate of the video file variant when Pexels provides it. */
            fps?: number | null;
            /** The direct download URL for the video file variant. */
            link: string;
          }>;
          /** The preview pictures returned for the video. */
          videoPictures: Array<{
            /** The unique identifier of the video picture preview. */
            id: number;
            /** The sequence number of the video picture preview. */
            nr: number;
            /** The URL of the video picture preview. */
            picture: string;
          }>;
          /** The media type marker returned by the collection API. */
          type: "Video";
        }>;
        /** The URL for the next page of media items. */
        nextPage?: string;
        /** The URL for the previous page of media items. */
        prevPage?: string;
      };
    };
    /** Retrieve the current curated photo feed from Pexels with pagination controls. */
    "pexels.curated_photos": {
      input: {
        /**
         * The 1-based page number to retrieve from the Pexels API.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of results to return per page, between 1 and 80.
         * @minimum 1
         * @maximum 80
         */
        perPage?: number;
      };
      output: {
        /** The current page number returned by Pexels. */
        page: number;
        /** The number of results returned per page. */
        perPage: number;
        /** The total number of matching results. */
        totalResults: number;
        /** The photo resources returned by the request. */
        photos: Array<{
          /** The unique identifier of the photo. */
          id: number;
          /** The width of the photo in pixels. */
          width: number;
          /** The height of the photo in pixels. */
          height: number;
          /** The URL of the photo page on Pexels. */
          url: string;
          /** The display name of the photographer. */
          photographer: string;
          /** The URL of the photographer profile on Pexels. */
          photographerUrl: string;
          /** The unique identifier of the photographer. */
          photographerId: number;
          /** The average color of the photo in hexadecimal format when Pexels provides it. */
          avgColor?: string;
          /** The URLs for the photo in multiple sizes. */
          src: {
            /** The URL of the original photo. */
            original: string;
            /** The URL of the 2x large photo. */
            large2x: string;
            /** The URL of the large photo. */
            large: string;
            /** The URL of the medium photo. */
            medium: string;
            /** The URL of the small photo. */
            small: string;
            /** The URL of the portrait-oriented photo. */
            portrait: string;
            /** The URL of the landscape-oriented photo. */
            landscape: string;
            /** The URL of the tiny photo. */
            tiny: string;
          };
          /** Whether the authenticated account liked the photo. */
          liked?: boolean;
          /** The alternative text description of the photo. */
          alt?: string;
        }>;
        /** The URL for the next page of results. */
        nextPage?: string;
        /** The URL for the previous page of results. */
        prevPage?: string;
      };
    };
    /** Retrieve featured Pexels collections with pagination controls. */
    "pexels.featured_collections": {
      input: {
        /**
         * The 1-based page number to retrieve from the Pexels API.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of results to return per page, between 1 and 80.
         * @minimum 1
         * @maximum 80
         */
        perPage?: number;
      };
      output: {
        /** The current page number returned by Pexels. */
        page: number;
        /** The number of collections returned per page. */
        perPage: number;
        /** The total number of matching collections. */
        totalResults: number;
        /** The collections returned by the request. */
        collections: Array<{
          /** The unique identifier of the collection. */
          id: string;
          /** The title of the collection. */
          title: string;
          /** The description of the collection when Pexels provides it, or null when empty. */
          description?: string | null;
          /** Whether the collection is private. */
          private: boolean;
          /** The total number of media items in the collection. */
          mediaCount: number;
          /** The number of photos in the collection. */
          photosCount: number;
          /** The number of videos in the collection. */
          videosCount: number;
        }>;
        /** The URL for the next page of collections. */
        nextPage?: string;
        /** The URL for the previous page of collections. */
        prevPage?: string;
      };
    };
    /** Retrieve the full metadata for a single Pexels photo by photo id. */
    "pexels.get_photo": {
      input: {
        /**
         * The unique identifier of the photo to retrieve.
         * @exclusiveMinimum 0
         */
        photoId: number;
      };
      output: {
        /** The unique identifier of the photo. */
        id: number;
        /** The width of the photo in pixels. */
        width: number;
        /** The height of the photo in pixels. */
        height: number;
        /** The URL of the photo page on Pexels. */
        url: string;
        /** The display name of the photographer. */
        photographer: string;
        /** The URL of the photographer profile on Pexels. */
        photographerUrl: string;
        /** The unique identifier of the photographer. */
        photographerId: number;
        /** The average color of the photo in hexadecimal format when Pexels provides it. */
        avgColor?: string;
        /** The URLs for the photo in multiple sizes. */
        src: {
          /** The URL of the original photo. */
          original: string;
          /** The URL of the 2x large photo. */
          large2x: string;
          /** The URL of the large photo. */
          large: string;
          /** The URL of the medium photo. */
          medium: string;
          /** The URL of the small photo. */
          small: string;
          /** The URL of the portrait-oriented photo. */
          portrait: string;
          /** The URL of the landscape-oriented photo. */
          landscape: string;
          /** The URL of the tiny photo. */
          tiny: string;
        };
        /** Whether the authenticated account liked the photo. */
        liked?: boolean;
        /** The alternative text description of the photo. */
        alt?: string;
      };
    };
    /** Retrieve the full metadata for a single Pexels video by video id. */
    "pexels.get_video": {
      input: {
        /**
         * The unique identifier of the video to retrieve.
         * @exclusiveMinimum 0
         */
        videoId: number;
      };
      output: {
        /** The unique identifier of the video. */
        id: number;
        /** The width of the video in pixels. */
        width: number;
        /** The height of the video in pixels. */
        height: number;
        /** The duration of the video in seconds. */
        duration: number;
        /** The URL of the video page on Pexels. */
        url: string;
        /** The thumbnail URL of the video. */
        image: string;
        /** The full-resolution identifier or URL when Pexels provides it. */
        fullRes?: string | null;
        /** The average color of the video thumbnail in hexadecimal format. */
        avgColor?: string | null;
        /** The tags attached to the video. */
        tags: Array<string>;
        /** The author metadata for the video. */
        user: {
          /** The unique identifier of the video author. */
          id: number;
          /** The display name of the video author. */
          name: string;
          /** The URL of the video author profile on Pexels. */
          url: string;
        };
        /** The downloadable video file variants returned by Pexels. */
        videoFiles: Array<{
          /** The unique identifier of the video file variant. */
          id: number;
          /** The quality label assigned to the video file variant. */
          quality: string;
          /** The MIME type of the video file variant. */
          fileType: string;
          /** The width of the video file variant in pixels when Pexels provides it. */
          width?: number | null;
          /** The height of the video file variant in pixels when Pexels provides it. */
          height?: number | null;
          /** The frame rate of the video file variant when Pexels provides it. */
          fps?: number | null;
          /** The direct download URL for the video file variant. */
          link: string;
        }>;
        /** The preview pictures returned for the video. */
        videoPictures: Array<{
          /** The unique identifier of the video picture preview. */
          id: number;
          /** The sequence number of the video picture preview. */
          nr: number;
          /** The URL of the video picture preview. */
          picture: string;
        }>;
      };
    };
    /** Retrieve collections owned by the authenticated Pexels account. */
    "pexels.my_collections": {
      input: {
        /**
         * The 1-based page number to retrieve from the Pexels API.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of results to return per page, between 1 and 80.
         * @minimum 1
         * @maximum 80
         */
        perPage?: number;
      };
      output: {
        /** The current page number returned by Pexels. */
        page: number;
        /** The number of collections returned per page. */
        perPage: number;
        /** The total number of matching collections. */
        totalResults: number;
        /** The collections returned by the request. */
        collections: Array<{
          /** The unique identifier of the collection. */
          id: string;
          /** The title of the collection. */
          title: string;
          /** The description of the collection when Pexels provides it, or null when empty. */
          description?: string | null;
          /** Whether the collection is private. */
          private: boolean;
          /** The total number of media items in the collection. */
          mediaCount: number;
          /** The number of photos in the collection. */
          photosCount: number;
          /** The number of videos in the collection. */
          videosCount: number;
        }>;
        /** The URL for the next page of collections. */
        nextPage?: string;
        /** The URL for the previous page of collections. */
        prevPage?: string;
      };
    };
    /** Retrieve the current popular Pexels videos with pagination and optional dimension or duration filters. */
    "pexels.popular_videos": {
      input: {
        /**
         * The 1-based page number to retrieve from the Pexels API.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of results to return per page, between 1 and 80.
         * @minimum 1
         * @maximum 80
         */
        perPage?: number;
        /**
         * The minimum width in pixels to filter the popular video results.
         * @exclusiveMinimum 0
         */
        minWidth?: number;
        /**
         * The minimum height in pixels to filter the popular video results.
         * @exclusiveMinimum 0
         */
        minHeight?: number;
        /**
         * The minimum duration in seconds to filter the popular video results.
         * @exclusiveMinimum 0
         */
        minDuration?: number;
        /**
         * The maximum duration in seconds to filter the popular video results.
         * @exclusiveMinimum 0
         */
        maxDuration?: number;
      };
      output: {
        /** The Pexels URL representing the current video result page. */
        url: string;
        /** The current page number returned by Pexels. */
        page: number;
        /** The number of videos returned per page. */
        perPage: number;
        /** The total number of matching videos. */
        totalResults: number;
        /** The video resources returned by the request. */
        videos: Array<{
          /** The unique identifier of the video. */
          id: number;
          /** The width of the video in pixels. */
          width: number;
          /** The height of the video in pixels. */
          height: number;
          /** The duration of the video in seconds. */
          duration: number;
          /** The URL of the video page on Pexels. */
          url: string;
          /** The thumbnail URL of the video. */
          image: string;
          /** The full-resolution identifier or URL when Pexels provides it. */
          fullRes?: string | null;
          /** The average color of the video thumbnail in hexadecimal format. */
          avgColor?: string | null;
          /** The tags attached to the video. */
          tags: Array<string>;
          /** The author metadata for the video. */
          user: {
            /** The unique identifier of the video author. */
            id: number;
            /** The display name of the video author. */
            name: string;
            /** The URL of the video author profile on Pexels. */
            url: string;
          };
          /** The downloadable video file variants returned by Pexels. */
          videoFiles: Array<{
            /** The unique identifier of the video file variant. */
            id: number;
            /** The quality label assigned to the video file variant. */
            quality: string;
            /** The MIME type of the video file variant. */
            fileType: string;
            /** The width of the video file variant in pixels when Pexels provides it. */
            width?: number | null;
            /** The height of the video file variant in pixels when Pexels provides it. */
            height?: number | null;
            /** The frame rate of the video file variant when Pexels provides it. */
            fps?: number | null;
            /** The direct download URL for the video file variant. */
            link: string;
          }>;
          /** The preview pictures returned for the video. */
          videoPictures: Array<{
            /** The unique identifier of the video picture preview. */
            id: number;
            /** The sequence number of the video picture preview. */
            nr: number;
            /** The URL of the video picture preview. */
            picture: string;
          }>;
        }>;
        /** The URL for the next page of videos. */
        nextPage?: string;
        /** The URL for the previous page of videos. */
        prevPage?: string;
      };
    };
    /** Search Pexels photos by keyword with optional orientation, size, color, locale, and pagination filters. */
    "pexels.search_photos": {
      input: {
        /**
         * The search query used to find matching photos on Pexels.
         * @minLength 1
         */
        query: string;
        /** The orientation filter to apply to the search results. */
        orientation?: "landscape" | "portrait" | "square";
        /** The size filter to apply to the search results. */
        size?: "large" | "medium" | "small";
        /**
         * The color filter to apply, such as a named color or hexadecimal code.
         * @minLength 1
         */
        color?: string;
        /**
         * The locale to use for the photo search, such as en-US or pt-BR.
         * @minLength 1
         */
        locale?: string;
        /**
         * The 1-based page number to retrieve from the Pexels API.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of results to return per page, between 1 and 80.
         * @minimum 1
         * @maximum 80
         */
        perPage?: number;
      };
      output: {
        /** The current page number returned by Pexels. */
        page: number;
        /** The number of results returned per page. */
        perPage: number;
        /** The total number of matching results. */
        totalResults: number;
        /** The photo resources returned by the request. */
        photos: Array<{
          /** The unique identifier of the photo. */
          id: number;
          /** The width of the photo in pixels. */
          width: number;
          /** The height of the photo in pixels. */
          height: number;
          /** The URL of the photo page on Pexels. */
          url: string;
          /** The display name of the photographer. */
          photographer: string;
          /** The URL of the photographer profile on Pexels. */
          photographerUrl: string;
          /** The unique identifier of the photographer. */
          photographerId: number;
          /** The average color of the photo in hexadecimal format when Pexels provides it. */
          avgColor?: string;
          /** The URLs for the photo in multiple sizes. */
          src: {
            /** The URL of the original photo. */
            original: string;
            /** The URL of the 2x large photo. */
            large2x: string;
            /** The URL of the large photo. */
            large: string;
            /** The URL of the medium photo. */
            medium: string;
            /** The URL of the small photo. */
            small: string;
            /** The URL of the portrait-oriented photo. */
            portrait: string;
            /** The URL of the landscape-oriented photo. */
            landscape: string;
            /** The URL of the tiny photo. */
            tiny: string;
          };
          /** Whether the authenticated account liked the photo. */
          liked?: boolean;
          /** The alternative text description of the photo. */
          alt?: string;
        }>;
        /** The URL for the next page of results. */
        nextPage?: string;
        /** The URL for the previous page of results. */
        prevPage?: string;
      };
    };
    /** Search Pexels videos by keyword with optional orientation, size, and pagination filters. */
    "pexels.search_videos": {
      input: {
        /**
         * The search query used to find matching videos on Pexels.
         * @minLength 1
         */
        query: string;
        /** The orientation filter to apply to the search results. */
        orientation?: "landscape" | "portrait" | "square";
        /** The size filter to apply to the search results. */
        size?: "large" | "medium" | "small";
        /**
         * The locale to use for the video search, such as en-US or pt-BR.
         * @minLength 1
         */
        locale?: string;
        /**
         * The 1-based page number to retrieve from the Pexels API.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of results to return per page, between 1 and 80.
         * @minimum 1
         * @maximum 80
         */
        perPage?: number;
      };
      output: {
        /** The Pexels URL representing the current video result page. */
        url: string;
        /** The current page number returned by Pexels. */
        page: number;
        /** The number of videos returned per page. */
        perPage: number;
        /** The total number of matching videos. */
        totalResults: number;
        /** The video resources returned by the request. */
        videos: Array<{
          /** The unique identifier of the video. */
          id: number;
          /** The width of the video in pixels. */
          width: number;
          /** The height of the video in pixels. */
          height: number;
          /** The duration of the video in seconds. */
          duration: number;
          /** The URL of the video page on Pexels. */
          url: string;
          /** The thumbnail URL of the video. */
          image: string;
          /** The full-resolution identifier or URL when Pexels provides it. */
          fullRes?: string | null;
          /** The average color of the video thumbnail in hexadecimal format. */
          avgColor?: string | null;
          /** The tags attached to the video. */
          tags: Array<string>;
          /** The author metadata for the video. */
          user: {
            /** The unique identifier of the video author. */
            id: number;
            /** The display name of the video author. */
            name: string;
            /** The URL of the video author profile on Pexels. */
            url: string;
          };
          /** The downloadable video file variants returned by Pexels. */
          videoFiles: Array<{
            /** The unique identifier of the video file variant. */
            id: number;
            /** The quality label assigned to the video file variant. */
            quality: string;
            /** The MIME type of the video file variant. */
            fileType: string;
            /** The width of the video file variant in pixels when Pexels provides it. */
            width?: number | null;
            /** The height of the video file variant in pixels when Pexels provides it. */
            height?: number | null;
            /** The frame rate of the video file variant when Pexels provides it. */
            fps?: number | null;
            /** The direct download URL for the video file variant. */
            link: string;
          }>;
          /** The preview pictures returned for the video. */
          videoPictures: Array<{
            /** The unique identifier of the video picture preview. */
            id: number;
            /** The sequence number of the video picture preview. */
            nr: number;
            /** The URL of the video picture preview. */
            picture: string;
          }>;
        }>;
        /** The URL for the next page of videos. */
        nextPage?: string;
        /** The URL for the previous page of videos. */
        prevPage?: string;
      };
    };
  }
}
