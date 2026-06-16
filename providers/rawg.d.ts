import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get detailed information for one developer from RAWG. */
    "rawg.get_developer": {
      input: {
        /**
         * Unique RAWG developer identifier.
         * @minimum 1
         */
        developerId: number;
      };
      output: {
        /** Detailed directory payload returned by RAWG. */
        developer: {
          /**
           * Unique integer identifier returned by RAWG.
           * @minimum 1
           */
          id: number;
          /**
           * Display name returned by RAWG.
           * @minLength 1
           */
          name: string;
          /**
           * Slug returned by RAWG.
           * @minLength 1
           */
          slug?: string;
          /**
           * Detailed description returned by RAWG when present.
           * @minLength 1
           */
          description?: string;
          /** Number of related games returned by RAWG when present. */
          games_count?: number;
          /**
           * Background image URL returned by RAWG when present.
           * @minLength 1
           */
          image_background?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get detailed information for one game from RAWG. */
    "rawg.get_game": {
      input: {
        /** RAWG game identifier or slug. */
        gameId: number | string;
      };
      output: {
        /** Detailed game payload returned by RAWG. */
        game: {
          /**
           * Unique integer identifier returned by RAWG.
           * @minimum 1
           */
          id: number;
          /**
           * Game title returned by RAWG.
           * @minLength 1
           */
          name: string;
          /**
           * Game slug returned by RAWG.
           * @minLength 1
           */
          slug?: string;
          /**
           * Detailed game description returned by RAWG.
           * @minLength 1
           */
          description?: string;
          /**
           * Release date returned by RAWG.
           * @minLength 1
           */
          released?: string;
          /** Metacritic score returned by RAWG. */
          metacritic?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get detailed information for one genre from RAWG. */
    "rawg.get_genre": {
      input: {
        /**
         * Unique RAWG genre identifier.
         * @minimum 1
         */
        genreId: number;
      };
      output: {
        /** Detailed directory payload returned by RAWG. */
        genre: {
          /**
           * Unique integer identifier returned by RAWG.
           * @minimum 1
           */
          id: number;
          /**
           * Display name returned by RAWG.
           * @minLength 1
           */
          name: string;
          /**
           * Slug returned by RAWG.
           * @minLength 1
           */
          slug?: string;
          /**
           * Detailed description returned by RAWG when present.
           * @minLength 1
           */
          description?: string;
          /** Number of related games returned by RAWG when present. */
          games_count?: number;
          /**
           * Background image URL returned by RAWG when present.
           * @minLength 1
           */
          image_background?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get detailed information for one platform from RAWG. */
    "rawg.get_platform": {
      input: {
        /**
         * Unique RAWG platform identifier.
         * @minimum 1
         */
        platformId: number;
      };
      output: {
        /** Detailed directory payload returned by RAWG. */
        platform: {
          /**
           * Unique integer identifier returned by RAWG.
           * @minimum 1
           */
          id: number;
          /**
           * Display name returned by RAWG.
           * @minLength 1
           */
          name: string;
          /**
           * Slug returned by RAWG.
           * @minLength 1
           */
          slug?: string;
          /**
           * Detailed description returned by RAWG when present.
           * @minLength 1
           */
          description?: string;
          /** Number of related games returned by RAWG when present. */
          games_count?: number;
          /**
           * Background image URL returned by RAWG when present.
           * @minLength 1
           */
          image_background?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get detailed information for one publisher from RAWG. */
    "rawg.get_publisher": {
      input: {
        /**
         * Unique RAWG publisher identifier.
         * @minimum 1
         */
        publisherId: number;
      };
      output: {
        /** Detailed directory payload returned by RAWG. */
        publisher: {
          /**
           * Unique integer identifier returned by RAWG.
           * @minimum 1
           */
          id: number;
          /**
           * Display name returned by RAWG.
           * @minLength 1
           */
          name: string;
          /**
           * Slug returned by RAWG.
           * @minLength 1
           */
          slug?: string;
          /**
           * Detailed description returned by RAWG when present.
           * @minLength 1
           */
          description?: string;
          /** Number of related games returned by RAWG when present. */
          games_count?: number;
          /**
           * Background image URL returned by RAWG when present.
           * @minLength 1
           */
          image_background?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get detailed information for one store from RAWG. */
    "rawg.get_store": {
      input: {
        /**
         * Unique RAWG store identifier.
         * @minimum 1
         */
        storeId: number;
      };
      output: {
        /** Detailed directory payload returned by RAWG. */
        store: {
          /**
           * Unique integer identifier returned by RAWG.
           * @minimum 1
           */
          id: number;
          /**
           * Display name returned by RAWG.
           * @minLength 1
           */
          name: string;
          /**
           * Slug returned by RAWG.
           * @minLength 1
           */
          slug?: string;
          /**
           * Detailed description returned by RAWG when present.
           * @minLength 1
           */
          description?: string;
          /** Number of related games returned by RAWG when present. */
          games_count?: number;
          /**
           * Background image URL returned by RAWG when present.
           * @minLength 1
           */
          image_background?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get detailed information for one tag from RAWG. */
    "rawg.get_tag": {
      input: {
        /**
         * Unique RAWG tag identifier.
         * @minimum 1
         */
        tagId: number;
      };
      output: {
        /** Detailed directory payload returned by RAWG. */
        tag: {
          /**
           * Unique integer identifier returned by RAWG.
           * @minimum 1
           */
          id: number;
          /**
           * Display name returned by RAWG.
           * @minLength 1
           */
          name: string;
          /**
           * Slug returned by RAWG.
           * @minLength 1
           */
          slug?: string;
          /**
           * Detailed description returned by RAWG when present.
           * @minLength 1
           */
          description?: string;
          /** Number of related games returned by RAWG when present. */
          games_count?: number;
          /**
           * Background image URL returned by RAWG when present.
           * @minLength 1
           */
          image_background?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List game developers from RAWG. */
    "rawg.list_developers": {
      input: {
        /**
         * The 1-based page number to retrieve from RAWG.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page from RAWG, between 1 and 40.
         * @minimum 1
         * @maximum 40
         */
        pageSize?: number;
      };
      output: {
        /** Total number of matching resources returned by RAWG. */
        count: number;
        /** Next page URL returned by RAWG, or null when there is no next page. */
        next: string | null;
        /** Previous page URL returned by RAWG, or null when there is no previous page. */
        previous: string | null;
        /** Developer summaries returned by RAWG. */
        developers: Array<{
          /**
           * Unique integer identifier returned by RAWG.
           * @minimum 1
           */
          id: number;
          /**
           * Display name returned by RAWG.
           * @minLength 1
           */
          name: string;
          /**
           * URL-friendly slug returned by RAWG.
           * @minLength 1
           */
          slug?: string;
          /** Number of related games returned by RAWG when present. */
          games_count?: number;
          /**
           * Background image URL returned by RAWG when present.
           * @minLength 1
           */
          image_background?: string;
          /** Metacritic score returned by RAWG when present. */
          metacritic?: number;
          /**
           * Release date returned by RAWG when present.
           * @minLength 1
           */
          released?: string;
          /**
           * Language code returned by RAWG when present.
           * @minLength 1
           */
          language?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List additions for one RAWG game. */
    "rawg.list_game_additions": {
      input: {
        /** RAWG game identifier or slug. */
        gameId: number | string;
        /**
         * The 1-based page number to retrieve from RAWG.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page from RAWG, between 1 and 40.
         * @minimum 1
         * @maximum 40
         */
        pageSize?: number;
      };
      output: {
        /** Total number of matching resources returned by RAWG. */
        count: number;
        /** Next page URL returned by RAWG, or null when there is no next page. */
        next: string | null;
        /** Previous page URL returned by RAWG, or null when there is no previous page. */
        previous: string | null;
        /** Addition resources returned by RAWG. */
        additions: Array<{
          /**
           * Unique integer identifier returned by RAWG.
           * @minimum 1
           */
          id: number;
          /**
           * Display name returned by RAWG.
           * @minLength 1
           */
          name: string;
          /**
           * URL-friendly slug returned by RAWG.
           * @minLength 1
           */
          slug?: string;
          /** Number of related games returned by RAWG when present. */
          games_count?: number;
          /**
           * Background image URL returned by RAWG when present.
           * @minLength 1
           */
          image_background?: string;
          /** Metacritic score returned by RAWG when present. */
          metacritic?: number;
          /**
           * Release date returned by RAWG when present.
           * @minLength 1
           */
          released?: string;
          /**
           * Language code returned by RAWG when present.
           * @minLength 1
           */
          language?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the RAWG movie payload for one game. */
    "rawg.list_game_movies": {
      input: {
        /** RAWG game identifier or slug. */
        gameId: number | string;
      };
      output: {
        /** Movie resource returned by RAWG. */
        movie: {
          /**
           * Unique movie identifier returned by RAWG.
           * @minimum 1
           */
          id: number;
          /**
           * Movie or trailer title returned by RAWG.
           * @minLength 1
           */
          name?: string;
          /**
           * Preview image URL returned by RAWG when present.
           * @minLength 1
           */
          preview?: string;
          /** Nested movie stream URLs returned by RAWG when present. */
          data?: {
            /**
             * 480p trailer URL returned by RAWG when present.
             * @minLength 1
             */
            "480"?: string;
            /**
             * Highest-quality trailer URL returned by RAWG when present.
             * @minLength 1
             */
            max?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get the RAWG Reddit post payload for one game. */
    "rawg.list_game_reddit_posts": {
      input: {
        /** RAWG game identifier or slug. */
        gameId: number | string;
      };
      output: {
        /** Reddit post resource returned by RAWG. */
        post: {
          /**
           * Unique Reddit post identifier returned by RAWG.
           * @minimum 1
           */
          id: number;
          /**
           * Reddit post title returned by RAWG.
           * @minLength 1
           */
          name?: string;
          /**
           * Reddit post URL returned by RAWG when present.
           * @minLength 1
           */
          url?: string;
          /**
           * Reddit post body text returned by RAWG when present.
           * @minLength 1
           */
          text?: string;
          /**
           * Preview image URL returned by RAWG when present.
           * @minLength 1
           */
          image?: string;
          /**
           * Post creation timestamp returned by RAWG when present.
           * @minLength 1
           */
          created?: string;
          /**
           * Reddit author username returned by RAWG when present.
           * @minLength 1
           */
          username?: string;
          /**
           * RAWG author profile URL returned by RAWG when present.
           * @minLength 1
           */
          username_url?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List screenshots for one RAWG game. */
    "rawg.list_game_screenshots": {
      input: {
        /** RAWG game identifier or slug. */
        gameId: number | string;
        /**
         * The 1-based page number to retrieve from RAWG.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page from RAWG, between 1 and 40.
         * @minimum 1
         * @maximum 40
         */
        pageSize?: number;
      };
      output: {
        /** Total number of matching resources returned by RAWG. */
        count: number;
        /** Next page URL returned by RAWG, or null when there is no next page. */
        next: string | null;
        /** Previous page URL returned by RAWG, or null when there is no previous page. */
        previous: string | null;
        /** Screenshot resources returned by RAWG. */
        screenshots: Array<{
          /** Unique integer identifier returned by RAWG. */
          id?: number;
          /**
           * Screenshot image URL returned by RAWG.
           * @minLength 1
           */
          image?: string;
          /** Screenshot width returned by RAWG when present. */
          width?: number;
          /** Screenshot height returned by RAWG when present. */
          height?: number;
          /** Whether RAWG marks the screenshot as deleted when present. */
          is_deleted?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List series games related to one RAWG game. */
    "rawg.list_game_series": {
      input: {
        /** RAWG game identifier or slug. */
        gameId: number | string;
        /**
         * The 1-based page number to retrieve from RAWG.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page from RAWG, between 1 and 40.
         * @minimum 1
         * @maximum 40
         */
        pageSize?: number;
      };
      output: {
        /** Total number of matching resources returned by RAWG. */
        count: number;
        /** Next page URL returned by RAWG, or null when there is no next page. */
        next: string | null;
        /** Previous page URL returned by RAWG, or null when there is no previous page. */
        previous: string | null;
        /** Game series resources returned by RAWG. */
        seriesGames: Array<{
          /**
           * Unique integer identifier returned by RAWG.
           * @minimum 1
           */
          id: number;
          /**
           * Display name returned by RAWG.
           * @minLength 1
           */
          name: string;
          /**
           * URL-friendly slug returned by RAWG.
           * @minLength 1
           */
          slug?: string;
          /** Number of related games returned by RAWG when present. */
          games_count?: number;
          /**
           * Background image URL returned by RAWG when present.
           * @minLength 1
           */
          image_background?: string;
          /** Metacritic score returned by RAWG when present. */
          metacritic?: number;
          /**
           * Release date returned by RAWG when present.
           * @minLength 1
           */
          released?: string;
          /**
           * Language code returned by RAWG when present.
           * @minLength 1
           */
          language?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List stores for one RAWG game. */
    "rawg.list_game_stores": {
      input: {
        /** RAWG game identifier or slug. */
        gameId: number | string;
        /**
         * The 1-based page number to retrieve from RAWG.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page from RAWG, between 1 and 40.
         * @minimum 1
         * @maximum 40
         */
        pageSize?: number;
      };
      output: {
        /** Total number of matching resources returned by RAWG. */
        count: number;
        /** Next page URL returned by RAWG, or null when there is no next page. */
        next: string | null;
        /** Previous page URL returned by RAWG, or null when there is no previous page. */
        previous: string | null;
        /** Store relation resources returned by RAWG for one game. */
        stores: Array<{
          /** Unique game-store relation identifier returned by RAWG. */
          id?: number;
          /**
           * Store URL returned by RAWG for the game relation.
           * @minLength 1
           */
          url?: string;
          /** Nested store information returned by RAWG. */
          store?: {
            /** Unique store identifier returned by RAWG. */
            id?: number;
            /**
             * Store name returned by RAWG.
             * @minLength 1
             */
            name?: string;
            /**
             * Store slug returned by RAWG.
             * @minLength 1
             */
            slug?: string;
            /**
             * Store domain returned by RAWG when present.
             * @minLength 1
             */
            domain?: string;
            /** Number of games linked to the store returned by RAWG when present. */
            games_count?: number;
            /**
             * Store background image URL returned by RAWG when present.
             * @minLength 1
             */
            image_background?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List games from RAWG with optional search, filtering, sorting, and pagination. */
    "rawg.list_games": {
      input: {
        /**
         * Search query used to match game titles in RAWG.
         * @minLength 1
         */
        search?: string;
        /**
         * The 1-based page number to retrieve from RAWG.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page from RAWG, between 1 and 40.
         * @minimum 1
         * @maximum 40
         */
        pageSize?: number;
        /**
         * Comma-separated platform identifiers or slugs used to filter games.
         * @minLength 1
         */
        platforms?: string;
        /**
         * Comma-separated genre identifiers or slugs used to filter games.
         * @minLength 1
         */
        genres?: string;
        /**
         * Comma-separated store identifiers used to filter games.
         * @minLength 1
         */
        stores?: string;
        /**
         * Comma-separated developer identifiers or slugs used to filter games.
         * @minLength 1
         */
        developers?: string;
        /**
         * Comma-separated publisher identifiers or slugs used to filter games.
         * @minLength 1
         */
        publishers?: string;
        /**
         * Comma-separated tag identifiers or slugs used to filter games.
         * @minLength 1
         */
        tags?: string;
        /**
         * Release date range in YYYY-MM-DD,YYYY-MM-DD format used to filter games.
         * @minLength 1
         */
        dates?: string;
        /**
         * Ordering field passed through to RAWG game listing.
         * @minLength 1
         */
        ordering?: string;
        /**
         * Metacritic score range in min,max format used to filter games.
         * @minLength 1
         */
        metacritic?: string;
        /**
         * Comma-separated parent platform identifiers used to filter games.
         * @minLength 1
         */
        parentPlatforms?: string;
        /** Whether to request exact game name matching from RAWG. */
        searchExact?: boolean;
        /** Whether to disable fuzzy search behavior in RAWG. */
        searchPrecise?: boolean;
        /** Whether to exclude additions and DLC resources. */
        excludeAdditions?: boolean;
        /** Whether to exclude parent games with additions. */
        excludeParents?: boolean;
        /** Whether to exclude entries that belong to game series. */
        excludeGameSeries?: boolean;
      };
      output: {
        /** Total number of matching resources returned by RAWG. */
        count: number;
        /** Next page URL returned by RAWG, or null when there is no next page. */
        next: string | null;
        /** Previous page URL returned by RAWG, or null when there is no previous page. */
        previous: string | null;
        /** Game summaries returned by RAWG. */
        games: Array<{
          /**
           * Unique integer identifier returned by RAWG.
           * @minimum 1
           */
          id: number;
          /**
           * Display name returned by RAWG.
           * @minLength 1
           */
          name: string;
          /**
           * URL-friendly slug returned by RAWG.
           * @minLength 1
           */
          slug?: string;
          /** Number of related games returned by RAWG when present. */
          games_count?: number;
          /**
           * Background image URL returned by RAWG when present.
           * @minLength 1
           */
          image_background?: string;
          /** Metacritic score returned by RAWG when present. */
          metacritic?: number;
          /**
           * Release date returned by RAWG when present.
           * @minLength 1
           */
          released?: string;
          /**
           * Language code returned by RAWG when present.
           * @minLength 1
           */
          language?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List game genres from RAWG. */
    "rawg.list_genres": {
      input: {
        /**
         * The 1-based page number to retrieve from RAWG.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page from RAWG, between 1 and 40.
         * @minimum 1
         * @maximum 40
         */
        pageSize?: number;
        /**
         * Ordering field passed through to RAWG genre listing.
         * @minLength 1
         */
        ordering?: string;
      };
      output: {
        /** Total number of matching resources returned by RAWG. */
        count: number;
        /** Next page URL returned by RAWG, or null when there is no next page. */
        next: string | null;
        /** Previous page URL returned by RAWG, or null when there is no previous page. */
        previous: string | null;
        /** Genre summaries returned by RAWG. */
        genres: Array<{
          /**
           * Unique integer identifier returned by RAWG.
           * @minimum 1
           */
          id: number;
          /**
           * Display name returned by RAWG.
           * @minLength 1
           */
          name: string;
          /**
           * URL-friendly slug returned by RAWG.
           * @minLength 1
           */
          slug?: string;
          /** Number of related games returned by RAWG when present. */
          games_count?: number;
          /**
           * Background image URL returned by RAWG when present.
           * @minLength 1
           */
          image_background?: string;
          /** Metacritic score returned by RAWG when present. */
          metacritic?: number;
          /**
           * Release date returned by RAWG when present.
           * @minLength 1
           */
          released?: string;
          /**
           * Language code returned by RAWG when present.
           * @minLength 1
           */
          language?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List parent platforms from RAWG. */
    "rawg.list_parent_platforms": {
      input: {
        /**
         * The 1-based page number to retrieve from RAWG.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page from RAWG, between 1 and 40.
         * @minimum 1
         * @maximum 40
         */
        pageSize?: number;
      };
      output: {
        /** Total number of matching resources returned by RAWG. */
        count: number;
        /** Next page URL returned by RAWG, or null when there is no next page. */
        next: string | null;
        /** Previous page URL returned by RAWG, or null when there is no previous page. */
        previous: string | null;
        /** Parent platform summaries returned by RAWG. */
        parentPlatforms: Array<{
          /**
           * Unique integer identifier returned by RAWG.
           * @minimum 1
           */
          id: number;
          /**
           * Display name returned by RAWG.
           * @minLength 1
           */
          name: string;
          /**
           * URL-friendly slug returned by RAWG.
           * @minLength 1
           */
          slug?: string;
          /** Number of related games returned by RAWG when present. */
          games_count?: number;
          /**
           * Background image URL returned by RAWG when present.
           * @minLength 1
           */
          image_background?: string;
          /** Metacritic score returned by RAWG when present. */
          metacritic?: number;
          /**
           * Release date returned by RAWG when present.
           * @minLength 1
           */
          released?: string;
          /**
           * Language code returned by RAWG when present.
           * @minLength 1
           */
          language?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List gaming platforms from RAWG. */
    "rawg.list_platforms": {
      input: {
        /**
         * The 1-based page number to retrieve from RAWG.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page from RAWG, between 1 and 40.
         * @minimum 1
         * @maximum 40
         */
        pageSize?: number;
        /**
         * Ordering field passed through to RAWG platform listing.
         * @minLength 1
         */
        ordering?: string;
      };
      output: {
        /** Total number of matching resources returned by RAWG. */
        count: number;
        /** Next page URL returned by RAWG, or null when there is no next page. */
        next: string | null;
        /** Previous page URL returned by RAWG, or null when there is no previous page. */
        previous: string | null;
        /** Platform summaries returned by RAWG. */
        platforms: Array<{
          /**
           * Unique integer identifier returned by RAWG.
           * @minimum 1
           */
          id: number;
          /**
           * Display name returned by RAWG.
           * @minLength 1
           */
          name: string;
          /**
           * URL-friendly slug returned by RAWG.
           * @minLength 1
           */
          slug?: string;
          /** Number of related games returned by RAWG when present. */
          games_count?: number;
          /**
           * Background image URL returned by RAWG when present.
           * @minLength 1
           */
          image_background?: string;
          /** Metacritic score returned by RAWG when present. */
          metacritic?: number;
          /**
           * Release date returned by RAWG when present.
           * @minLength 1
           */
          released?: string;
          /**
           * Language code returned by RAWG when present.
           * @minLength 1
           */
          language?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List game publishers from RAWG. */
    "rawg.list_publishers": {
      input: {
        /**
         * The 1-based page number to retrieve from RAWG.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page from RAWG, between 1 and 40.
         * @minimum 1
         * @maximum 40
         */
        pageSize?: number;
      };
      output: {
        /** Total number of matching resources returned by RAWG. */
        count: number;
        /** Next page URL returned by RAWG, or null when there is no next page. */
        next: string | null;
        /** Previous page URL returned by RAWG, or null when there is no previous page. */
        previous: string | null;
        /** Publisher summaries returned by RAWG. */
        publishers: Array<{
          /**
           * Unique integer identifier returned by RAWG.
           * @minimum 1
           */
          id: number;
          /**
           * Display name returned by RAWG.
           * @minLength 1
           */
          name: string;
          /**
           * URL-friendly slug returned by RAWG.
           * @minLength 1
           */
          slug?: string;
          /** Number of related games returned by RAWG when present. */
          games_count?: number;
          /**
           * Background image URL returned by RAWG when present.
           * @minLength 1
           */
          image_background?: string;
          /** Metacritic score returned by RAWG when present. */
          metacritic?: number;
          /**
           * Release date returned by RAWG when present.
           * @minLength 1
           */
          released?: string;
          /**
           * Language code returned by RAWG when present.
           * @minLength 1
           */
          language?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List video game stores from RAWG. */
    "rawg.list_stores": {
      input: {
        /**
         * The 1-based page number to retrieve from RAWG.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page from RAWG, between 1 and 40.
         * @minimum 1
         * @maximum 40
         */
        pageSize?: number;
        /**
         * Ordering field passed through to RAWG store listing.
         * @minLength 1
         */
        ordering?: string;
      };
      output: {
        /** Total number of matching resources returned by RAWG. */
        count: number;
        /** Next page URL returned by RAWG, or null when there is no next page. */
        next: string | null;
        /** Previous page URL returned by RAWG, or null when there is no previous page. */
        previous: string | null;
        /** Store summaries returned by RAWG. */
        stores: Array<{
          /**
           * Unique integer identifier returned by RAWG.
           * @minimum 1
           */
          id: number;
          /**
           * Display name returned by RAWG.
           * @minLength 1
           */
          name: string;
          /**
           * URL-friendly slug returned by RAWG.
           * @minLength 1
           */
          slug?: string;
          /** Number of related games returned by RAWG when present. */
          games_count?: number;
          /**
           * Background image URL returned by RAWG when present.
           * @minLength 1
           */
          image_background?: string;
          /** Metacritic score returned by RAWG when present. */
          metacritic?: number;
          /**
           * Release date returned by RAWG when present.
           * @minLength 1
           */
          released?: string;
          /**
           * Language code returned by RAWG when present.
           * @minLength 1
           */
          language?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List game tags from RAWG. */
    "rawg.list_tags": {
      input: {
        /**
         * The 1-based page number to retrieve from RAWG.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page from RAWG, between 1 and 40.
         * @minimum 1
         * @maximum 40
         */
        pageSize?: number;
      };
      output: {
        /** Total number of matching resources returned by RAWG. */
        count: number;
        /** Next page URL returned by RAWG, or null when there is no next page. */
        next: string | null;
        /** Previous page URL returned by RAWG, or null when there is no previous page. */
        previous: string | null;
        /** Tag summaries returned by RAWG. */
        tags: Array<{
          /**
           * Unique integer identifier returned by RAWG.
           * @minimum 1
           */
          id: number;
          /**
           * Display name returned by RAWG.
           * @minLength 1
           */
          name: string;
          /**
           * URL-friendly slug returned by RAWG.
           * @minLength 1
           */
          slug?: string;
          /** Number of related games returned by RAWG when present. */
          games_count?: number;
          /**
           * Background image URL returned by RAWG when present.
           * @minLength 1
           */
          image_background?: string;
          /** Metacritic score returned by RAWG when present. */
          metacritic?: number;
          /**
           * Release date returned by RAWG when present.
           * @minLength 1
           */
          released?: string;
          /**
           * Language code returned by RAWG when present.
           * @minLength 1
           */
          language?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
