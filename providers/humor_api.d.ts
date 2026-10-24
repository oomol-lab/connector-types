import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a random joke filtered by tags, minimum rating, and maximum length. */
    "humor_api.random_joke": {
      input: {
        /** Comma-separated tags that jokes should have. */
        "include-tags"?: string;
        /** Comma-separated tags that jokes must not have. */
        "exclude-tags"?: string;
        /**
         * Minimum content rating from 0 to 10.
         * @minimum 0
         * @maximum 10
         */
        "min-rating"?: number;
        /** Maximum joke length in letters. */
        "max-length"?: number;
      };
      output: {
        /** Joke identifier. */
        id?: number;
        /** Joke text. */
        joke?: string;
        [key: string]: unknown;
      };
    };
    /** Get a random meme filtered by keywords, media type, rating, and age. */
    "humor_api.random_meme": {
      input: {
        /** Comma-separated words that must occur in the meme. */
        keywords?: string;
        /** Whether keywords must occur in the image. */
        "keywords-in-image"?: boolean;
        /** Media type such as image, video, jpg, png, or gif. */
        "media-type"?: string;
        /**
         * Minimum content rating from 0 to 10.
         * @minimum 0
         * @maximum 10
         */
        "min-rating"?: number;
        /** Maximum meme age in days. */
        "max-age-days"?: number;
      };
      output: {
        /** Meme identifier. */
        id?: number;
        /** URL of the meme media. */
        url?: string;
        /** Media MIME type. */
        type?: string;
        [key: string]: unknown;
      };
    };
    /** Search reaction GIFs and return their URLs and dimensions. */
    "humor_api.search_gifs": {
      input: {
        /**
         * Search query.
         * @minLength 1
         */
        query: string;
        /**
         * Number of results to return, from 0 to 10.
         * @minimum 0
         * @maximum 10
         */
        number?: number;
      };
      output: {
        /** Matching GIF images. */
        images?: Array<{
          /** GIF image URL. */
          url?: string;
          /** Image width in pixels. */
          width?: number;
          /** Image height in pixels. */
          height?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search jokes by keywords, tags, rating, and length with offset pagination. */
    "humor_api.search_jokes": {
      input: {
        /** Comma-separated words that must occur in the joke. */
        keywords?: string;
        /** Comma-separated tags that jokes should have. */
        "include-tags"?: string;
        /** Comma-separated tags that jokes must not have. */
        "exclude-tags"?: string;
        /**
         * Minimum content rating from 0 to 10.
         * @minimum 0
         * @maximum 10
         */
        "min-rating"?: number;
        /** Maximum joke length in letters. */
        "max-length"?: number;
        /**
         * Number of results to skip, from 0 to 1000.
         * @minimum 0
         * @maximum 1000
         */
        offset?: number;
        /**
         * Number of results to return, from 0 to 10.
         * @minimum 0
         * @maximum 10
         */
        number?: number;
      };
      output: {
        /** Matching jokes. */
        jokes?: Array<{
          /** Joke identifier. */
          id?: number;
          /** Joke text. */
          joke?: string;
          [key: string]: unknown;
        }>;
        /** Total matching jokes available. */
        available?: number;
        [key: string]: unknown;
      };
    };
    /** Search memes by keywords, media type, rating, and age with offset pagination. */
    "humor_api.search_memes": {
      input: {
        /** Comma-separated words that must occur in the meme. */
        keywords?: string;
        /** Whether keywords must occur in the image. */
        "keywords-in-image"?: boolean;
        /** Media type such as image, video, jpg, png, or gif. */
        "media-type"?: string;
        /**
         * Minimum content rating from 0 to 10.
         * @minimum 0
         * @maximum 10
         */
        "min-rating"?: number;
        /** Maximum meme age in days. */
        "max-age-days"?: number;
        /**
         * Number of results to skip, from 0 to 1000.
         * @minimum 0
         * @maximum 1000
         */
        offset?: number;
        /**
         * Number of results to return, from 0 to 10.
         * @minimum 0
         * @maximum 10
         */
        number?: number;
      };
      output: {
        /** Matching memes. */
        memes?: Array<{
          /** Meme identifier. */
          id?: number;
          /** URL of the meme media. */
          url?: string;
          /** Media MIME type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Total matching memes available. */
        available?: number;
        [key: string]: unknown;
      };
    };
  }
}
