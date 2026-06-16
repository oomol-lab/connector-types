import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch the detailed payload for a single Unsplash photo. */
    "unsplash.get_photo": {
      input: {
        /**
         * The Unsplash photo identifier to retrieve.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The detailed photo resource returned by Unsplash. */
        photo: {
          /** The unique identifier of the photo. */
          id: string;
          /** The public slug of the photo. */
          slug?: string;
          /** The description of the photo when Unsplash provides it. */
          description?: string | null;
          /** The alternative description of the photo when Unsplash provides it. */
          alt_description?: string | null;
          /** The width of the photo in pixels. */
          width?: number;
          /** The height of the photo in pixels. */
          height?: number;
          /** The representative HEX color of the photo. */
          color?: string;
          /** The blur hash value of the photo. */
          blur_hash?: string;
          /** The photo URLs returned by Unsplash in multiple sizes. */
          urls?: Record<string, unknown>;
          /** The related links attached to the Unsplash photo resource. */
          links?: Record<string, unknown>;
          /** The user metadata attached to the photo. */
          user?: Record<string, unknown>;
          /** The creation timestamp of the photo. */
          created_at?: string;
          /** Whether the authenticated user liked the photo. */
          liked_by_user?: boolean;
          /** The total number of likes on the photo. */
          likes?: number;
          /** The current user collections returned with the photo. */
          current_user_collections?: Array<Record<string, unknown>>;
        };
      };
    };
    /** Fetch one or more random Unsplash photos using optional filters. */
    "unsplash.get_random_photo": {
      input: {
        /**
         * The search query used to constrain the random photo.
         * @minLength 1
         */
        query?: string;
        /**
         * The collection identifiers used to constrain the random photo.
         * @minItems 1
         */
        collections?: Array<string>;
        /**
         * The topic identifiers used to constrain the random photo.
         * @minItems 1
         */
        topics?: Array<string>;
        /**
         * The username used to constrain the random photo.
         * @minLength 1
         */
        username?: string;
        /** The photo orientation filter to apply. */
        orientation?: "landscape" | "portrait" | "squarish";
        /** The safety filter level to apply to supported Unsplash requests. */
        contentFilter?: "low" | "high";
        /**
         * The number of random photos to request, between 1 and 30.
         * @minimum 1
         * @maximum 30
         */
        count?: number;
      };
      output: {
        /** The random photo resources returned by Unsplash. */
        photos: Array<{
          /** The unique identifier of the photo. */
          id: string;
          /** The public slug of the photo. */
          slug?: string;
          /** The description of the photo when Unsplash provides it. */
          description?: string | null;
          /** The alternative description of the photo when Unsplash provides it. */
          alt_description?: string | null;
          /** The width of the photo in pixels. */
          width?: number;
          /** The height of the photo in pixels. */
          height?: number;
          /** The representative HEX color of the photo. */
          color?: string;
          /** The blur hash value of the photo. */
          blur_hash?: string;
          /** The photo URLs returned by Unsplash in multiple sizes. */
          urls?: Record<string, unknown>;
          /** The related links attached to the Unsplash photo resource. */
          links?: Record<string, unknown>;
          /** The user metadata attached to the photo. */
          user?: Record<string, unknown>;
          /** The creation timestamp of the photo. */
          created_at?: string;
          /** Whether the authenticated user liked the photo. */
          liked_by_user?: boolean;
          /** The total number of likes on the photo. */
          likes?: number;
          /** The current user collections returned with the photo. */
          current_user_collections?: Array<Record<string, unknown>>;
        }>;
      };
    };
    /** List photos from a specific Unsplash topic. */
    "unsplash.get_topic_photos": {
      input: {
        /**
         * The topic identifier or slug to read photos from.
         * @minLength 1
         */
        topicIdOrSlug: string;
        /**
         * The 1-based page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items to return per page, between 1 and 30.
         * @minimum 1
         * @maximum 30
         */
        perPage?: number;
        /** The photo orientation filter to apply. */
        orientation?: "landscape" | "portrait" | "squarish";
        /** The sort order supported by the Unsplash photo listing endpoints. */
        orderBy?: "latest" | "oldest" | "popular";
      };
      output: {
        /** The photo summaries returned for the requested Unsplash topic. */
        photos: Array<{
          /** The unique identifier of the photo. */
          id: string;
          /** The public slug of the photo. */
          slug?: string;
          /** The description of the photo when Unsplash provides it. */
          description?: string | null;
          /** The alternative description of the photo when Unsplash provides it. */
          alt_description?: string | null;
          /** The width of the photo in pixels. */
          width?: number;
          /** The height of the photo in pixels. */
          height?: number;
          /** The representative HEX color of the photo. */
          color?: string;
          /** The blur hash value of the photo. */
          blur_hash?: string;
          /** The photo URLs returned by Unsplash in multiple sizes. */
          urls?: Record<string, unknown>;
          /** The related links attached to the Unsplash photo resource. */
          links?: Record<string, unknown>;
          /** The user metadata attached to the photo. */
          user?: Record<string, unknown>;
        }>;
      };
    };
    /** List the latest public photos from Unsplash. */
    "unsplash.list_photos": {
      input: {
        /**
         * The 1-based page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items to return per page, between 1 and 30.
         * @minimum 1
         * @maximum 30
         */
        perPage?: number;
        /** The sort order supported by the Unsplash photo listing endpoints. */
        orderBy?: "latest" | "oldest" | "popular";
      };
      output: {
        /** The public photo summaries returned by Unsplash. */
        photos: Array<{
          /** The unique identifier of the photo. */
          id: string;
          /** The public slug of the photo. */
          slug?: string;
          /** The description of the photo when Unsplash provides it. */
          description?: string | null;
          /** The alternative description of the photo when Unsplash provides it. */
          alt_description?: string | null;
          /** The width of the photo in pixels. */
          width?: number;
          /** The height of the photo in pixels. */
          height?: number;
          /** The representative HEX color of the photo. */
          color?: string;
          /** The blur hash value of the photo. */
          blur_hash?: string;
          /** The photo URLs returned by Unsplash in multiple sizes. */
          urls?: Record<string, unknown>;
          /** The related links attached to the Unsplash photo resource. */
          links?: Record<string, unknown>;
          /** The user metadata attached to the photo. */
          user?: Record<string, unknown>;
        }>;
      };
    };
    /** List topics curated by Unsplash. */
    "unsplash.list_topics": {
      input: {
        /**
         * The 1-based page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items to return per page, between 1 and 30.
         * @minimum 1
         * @maximum 30
         */
        perPage?: number;
        /** The sort order supported by the Unsplash topic listing endpoint. */
        orderBy?: "position" | "latest" | "oldest" | "popular";
      };
      output: {
        /** The topics returned by Unsplash. */
        topics: Array<{
          /** The unique identifier of the topic. */
          id: string;
          /** The topic slug. */
          slug?: string;
          /** The display title of the topic. */
          title: string;
          /** The description of the topic when Unsplash provides it. */
          description?: string | null;
          /** Whether the topic is marked as featured. */
          featured?: boolean;
          /** The total number of photos in the topic. */
          total_photos?: number;
          /** The related links attached to the Unsplash topic resource. */
          links?: Record<string, unknown>;
          /** The cover photo attached to the topic when Unsplash provides it. */
          cover_photo?: Record<string, unknown>;
        }>;
      };
    };
    /** Search photos on Unsplash using keyword and filter inputs. */
    "unsplash.search_photos": {
      input: {
        /**
         * The search query to run against Unsplash photos.
         * @minLength 1
         */
        query: string;
        /**
         * The 1-based page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items to return per page, between 1 and 30.
         * @minimum 1
         * @maximum 30
         */
        perPage?: number;
        /** The sort order supported by the Unsplash photo search endpoint. */
        orderBy?: "relevant" | "latest";
        /** The color filter to apply to photo search results. */
        color?: "black_and_white" | "black" | "white" | "yellow" | "orange" | "red" | "purple" | "magenta" | "green" | "teal" | "blue";
        /** The photo orientation filter to apply. */
        orientation?: "landscape" | "portrait" | "squarish";
        /** The safety filter level to apply to supported Unsplash requests. */
        contentFilter?: "low" | "high";
        /**
         * The collection identifiers to filter the search results by.
         * @minItems 1
         */
        collections?: Array<string>;
      };
      output: {
        /** The total number of matching photo results. */
        total: number;
        /** The total number of result pages. */
        totalPages: number;
        /** The matching photo summaries returned by Unsplash. */
        results: Array<{
          /** The unique identifier of the photo. */
          id: string;
          /** The public slug of the photo. */
          slug?: string;
          /** The description of the photo when Unsplash provides it. */
          description?: string | null;
          /** The alternative description of the photo when Unsplash provides it. */
          alt_description?: string | null;
          /** The width of the photo in pixels. */
          width?: number;
          /** The height of the photo in pixels. */
          height?: number;
          /** The representative HEX color of the photo. */
          color?: string;
          /** The blur hash value of the photo. */
          blur_hash?: string;
          /** The photo URLs returned by Unsplash in multiple sizes. */
          urls?: Record<string, unknown>;
          /** The related links attached to the Unsplash photo resource. */
          links?: Record<string, unknown>;
          /** The user metadata attached to the photo. */
          user?: Record<string, unknown>;
        }>;
      };
    };
  }
}
