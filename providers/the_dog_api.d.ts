import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one favourite dog image record. */
    "the_dog_api.create_favourite": {
      input: {
        /**
         * The Dog API image identifier.
         * @minLength 1
         */
        imageId: string;
        /**
         * A custom user identifier stored by The Dog API.
         * @minLength 1
         */
        subId?: string;
      };
      output: {
        /** A mutation response returned by The Dog API. */
        result: {
          /** The created resource identifier when returned. */
          id?: number;
          /** The provider mutation status message when returned. */
          message?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create one dog image vote. */
    "the_dog_api.create_vote": {
      input: {
        /**
         * The Dog API image identifier.
         * @minLength 1
         */
        imageId: string;
        /**
         * The vote value accepted by The Dog API, where 1 is upvote and -1 is downvote.
         * @minimum -1
         * @maximum 1
         */
        value: number;
        /**
         * A custom user identifier stored by The Dog API.
         * @minLength 1
         */
        subId?: string;
      };
      output: {
        /** A mutation response returned by The Dog API. */
        result: {
          /** The created resource identifier when returned. */
          id?: number;
          /** The provider mutation status message when returned. */
          message?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one favourite dog image record. */
    "the_dog_api.delete_favourite": {
      input: {
        /**
         * The Dog API favourite identifier.
         * @minLength 1
         */
        favouriteId: string;
      };
      output: {
        /** A mutation response returned by The Dog API. */
        result: {
          /** The created resource identifier when returned. */
          id?: number;
          /** The provider mutation status message when returned. */
          message?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one dog image vote. */
    "the_dog_api.delete_vote": {
      input: {
        /**
         * The Dog API vote identifier.
         * @minLength 1
         */
        voteId: string;
      };
      output: {
        /** A mutation response returned by The Dog API. */
        result: {
          /** The created resource identifier when returned. */
          id?: number;
          /** The provider mutation status message when returned. */
          message?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one dog breed by its The Dog API breed identifier. */
    "the_dog_api.get_breed": {
      input: {
        /**
         * The Dog API breed identifier.
         * @minLength 1
         */
        breedId: string;
      };
      output: {
        /** A dog breed object returned by The Dog API. */
        breed: {
          /** The breed identifier. */
          id?: string;
          /** The breed display name. */
          name?: string;
          /** The breed temperament summary. */
          temperament?: string;
          /** The breed origin country or region. */
          origin?: string;
          /** The breed description. */
          description?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one dog image by its The Dog API image identifier. */
    "the_dog_api.get_image": {
      input: {
        /**
         * The Dog API image identifier.
         * @minLength 1
         */
        imageId: string;
      };
      output: {
        /** A normalized dog image returned by The Dog API. */
        image: {
          /** The image identifier. */
          id: string;
          /** The image URL. */
          url: string;
          /** The image width in pixels when returned. */
          width: number | null;
          /** The image height in pixels when returned. */
          height: number | null;
          /** The breeds associated with this image. */
          breeds: Array<{
            /** The breed identifier. */
            id?: string;
            /** The breed display name. */
            name?: string;
            /** The breed temperament summary. */
            temperament?: string;
            /** The breed origin country or region. */
            origin?: string;
            /** The breed description. */
            description?: string;
            [key: string]: unknown;
          }>;
          /** The categories associated with this image. */
          categories: Array<{
            /** The category identifier. */
            id?: string;
            /** The category display name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The raw image object returned by The Dog API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List dog breeds supported by The Dog API. */
    "the_dog_api.list_breeds": {
      input: {
        /**
         * The number of breeds to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based result page number.
         * @minimum 0
         */
        page?: number;
      };
      output: {
        /** The dog breeds returned by The Dog API. */
        breeds: Array<{
          /** The breed identifier. */
          id?: string;
          /** The breed display name. */
          name?: string;
          /** The breed temperament summary. */
          temperament?: string;
          /** The breed origin country or region. */
          origin?: string;
          /** The breed description. */
          description?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List favourite dog images for the connected The Dog API account. */
    "the_dog_api.list_favourites": {
      input: {
        /**
         * The number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based result page number.
         * @minimum 0
         */
        page?: number;
        /**
         * A custom user identifier stored by The Dog API.
         * @minLength 1
         */
        subId?: string;
      };
      output: {
        /** The favourite records returned by The Dog API. */
        favourites: Array<{
          /** The favourite identifier. */
          id?: number;
          /** The favourited image identifier. */
          image_id?: string;
          /** The custom user identifier attached to the favourite. */
          sub_id?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List dog image votes for the connected The Dog API account. */
    "the_dog_api.list_votes": {
      input: {
        /**
         * The number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based result page number.
         * @minimum 0
         */
        page?: number;
        /**
         * A custom user identifier stored by The Dog API.
         * @minLength 1
         */
        subId?: string;
      };
      output: {
        /** The vote records returned by The Dog API. */
        votes: Array<{
          /** The vote identifier. */
          id?: number;
          /** The voted image identifier. */
          image_id?: string;
          /** The custom user identifier attached to the vote. */
          sub_id?: string;
          /** The vote value. */
          value?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search dog breeds by breed name. */
    "the_dog_api.search_breeds": {
      input: {
        /**
         * The breed name search query.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** The matching dog breeds returned by The Dog API. */
        breeds: Array<{
          /** The breed identifier. */
          id?: string;
          /** The breed display name. */
          name?: string;
          /** The breed temperament summary. */
          temperament?: string;
          /** The breed origin country or region. */
          origin?: string;
          /** The breed description. */
          description?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search for dog images with optional breed, category, type, size, and paging filters. */
    "the_dog_api.search_images": {
      input: {
        /**
         * The number of images to return.
         * @minimum 1
         * @maximum 25
         */
        limit?: number;
        /**
         * The zero-based result page number.
         * @minimum 0
         */
        page?: number;
        /** The Dog API result order. */
        order?: "RANDOM" | "ASC" | "DESC";
        /** The image size preset requested from The Dog API. */
        size?: "small" | "med" | "full";
        /**
         * Comma-separated MIME type filters accepted by The Dog API, such as jpg,png or gif.
         * @minLength 1
         */
        mimeTypes?: string;
        /** Whether to only return images that have breed information attached. */
        hasBreeds?: boolean;
        /**
         * Comma-separated breed identifiers used to filter image results.
         * @minLength 1
         */
        breedIds?: string;
        /**
         * Comma-separated category identifiers used to filter image results.
         * @minLength 1
         */
        categoryIds?: string;
        /** Whether The Dog API should include breed objects in image results. */
        includeBreeds?: boolean;
        /** Whether The Dog API should include category objects in image results. */
        includeCategories?: boolean;
        /** The response format requested from The Dog API. */
        format?: "json" | "src";
      };
      output: {
        /** The dog images returned by The Dog API. */
        images: Array<{
          /** The image identifier. */
          id: string;
          /** The image URL. */
          url: string;
          /** The image width in pixels when returned. */
          width: number | null;
          /** The image height in pixels when returned. */
          height: number | null;
          /** The breeds associated with this image. */
          breeds: Array<{
            /** The breed identifier. */
            id?: string;
            /** The breed display name. */
            name?: string;
            /** The breed temperament summary. */
            temperament?: string;
            /** The breed origin country or region. */
            origin?: string;
            /** The breed description. */
            description?: string;
            [key: string]: unknown;
          }>;
          /** The categories associated with this image. */
          categories: Array<{
            /** The category identifier. */
            id?: string;
            /** The category display name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The raw image object returned by The Dog API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
