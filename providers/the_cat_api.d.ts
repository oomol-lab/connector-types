import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one cat breed by its The Cat API breed identifier. */
    "the_cat_api.get_breed": {
      input: {
        /**
         * The Cat API breed identifier.
         * @minLength 1
         */
        breedId: string;
      };
      output: {
        /** A cat breed object returned by The Cat API. */
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
    /** Get one cat image by its The Cat API image identifier. */
    "the_cat_api.get_image": {
      input: {
        /**
         * The Cat API image identifier.
         * @minLength 1
         */
        imageId: string;
      };
      output: {
        /** A normalized cat image returned by The Cat API. */
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
            id?: number;
            /** The category display name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The raw image object returned by The Cat API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List cat breeds supported by The Cat API. */
    "the_cat_api.list_breeds": {
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
        /** The cat breeds returned by The Cat API. */
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
    /** Search cat breeds by breed name. */
    "the_cat_api.search_breeds": {
      input: {
        /**
         * The breed name search query.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** The matching cat breeds returned by The Cat API. */
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
    /** Search for cat images with optional breed, category, type, size, and paging filters. */
    "the_cat_api.search_images": {
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
        /** The Cat API result order. */
        order?: "RANDOM" | "ASC" | "DESC";
        /** The image size preset requested from The Cat API. */
        size?: "small" | "med" | "full";
        /**
         * Comma-separated MIME type filters accepted by The Cat API, such as jpg,png or gif.
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
        /** Whether The Cat API should include breed objects in image results. */
        includeBreeds?: boolean;
        /** Whether The Cat API should include category objects in image results. */
        includeCategories?: boolean;
        /** The response format requested from The Cat API. */
        format?: "json" | "src";
      };
      output: {
        /** The cat images returned by The Cat API. */
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
            id?: number;
            /** The category display name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The raw image object returned by The Cat API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
